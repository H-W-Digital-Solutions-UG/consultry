import fs from 'node:fs';
import assert from 'node:assert/strict';
import { parse } from '@astrojs/compiler';
import { localizedPath } from '../src/i18n/locale.ts';

const root = new URL('../dist/client/', import.meta.url);
const routes = ['/', '/produkt', '/produkt/firmengedaechtnis', '/produkt/corporate-alignment', '/produkt/agenten-ledger', '/produkt/zugriff', '/unternehmen', '/kontakt', '/warteliste', '/legal/impressum', '/legal/datenschutz', '/legal/agb', '/404'];
const allowedShared = new Set([
  'Consultry', 'DE', 'EN', 'Deutsch', 'English', 'Corporate Alignment', 'Alignment', 'Canvas', 'Prompt', 'Prompt Workspace', 'Agent', 'agent', 'system', 'Status', 'Pause', 'Website', 'NORDLICHT', 'DIGITAL', 'Delivery', 'Audit', 'SSO', 'Single Sign-on',
  'Confluence · Hansa Delivery', 'Obsidian · Lessons Learned', 'Lessons Learned Wave 1', 'Reconciliation Report v3', 'Steering v7 → Reconciliation Report v3', 'Lessons Learned · Hansa Wave 1', 'Hansa Wave 2 · Audit',
  'H&W Digital Solutions UG', '© 2026 H&W Digital Solutions UG', 'Greifswalder Straße 13d · 10405 Berlin', 'kontakt@consultry.com ↗', 'kontakt@consultry.com', 'contact@hw-digitalsolutions.de',
  'Greifswalder Straße 13d', '10405 Berlin', 'Amtsgericht Charlottenburg (Berlin)', 'HRB 258903 B', 'DE365222097', 'Paul Hannemann', 'Julian Weber', 'Vercel', 'CookieScript', 'Objectis Ltd.', 'Google Tag Manager', 'Google Analytics 4', 'HubSpot', 'HubSpot Data Processing Agreement',
  'https://consultry.de', 'https://ec.europa.eu/consumers/odr/', 'https://www.bfdi.bund.de/anschriften',
  'Through cookies, consent tools, and analytics technologies on our website, where required only with your consent.',
  'n.', 'Cutover', 'SharePoint, CRM, DMS', ', USA.', 'Name: H&W Digital Solutions UG', 'Website:',
]);
function decode(value) {
  return value.replace(/&(?:amp|quot|apos|lt|gt|nbsp|#\d+|#x[\da-f]+);/gi, entity => {
    const named = { '&amp;':'&', '&quot;':'"', '&apos;':"'", '&lt;':'<', '&gt;':'>', '&nbsp;':' ' };
    if (named[entity]) return named[entity];
    return String.fromCodePoint(entity.toLowerCase().startsWith('&#x') ? parseInt(entity.slice(3),16) : parseInt(entity.slice(2),10));
  }).replace(/\s+/g,' ').trim();
}
const read = route => fs.readFileSync(new URL(route === '/404' ? '404.html' : `${route.replace(/^\//,'')}${route === '/' ? '' : '/'}index.html`, root),'utf8');
async function inspect(html) {
  const { ast } = await parse(html);
  const texts=new Set(), links=[], alternates=[];
  let lang, canonical;
  const add=value=>{const text=decode(value);if(/[A-Za-zÀ-ÿ]/.test(text)) texts.add(text);};
  function visit(node) {
    if (['script','style'].includes(node.name)) return;
    const attrs=Object.fromEntries((node.attributes??[]).map(a=>[a.name,decode(a.value??'')]));
    if(node.type==='text') add(node.value);
    if(node.name==='html') lang=attrs.lang;
    if(node.name==='a') links.push(attrs);
    if(node.name==='link'&&attrs.rel==='canonical')canonical=attrs.href;
    if(node.name==='link'&&attrs.rel==='alternate')alternates.push(attrs);
    for(const attr of ['aria-label','alt','placeholder'])if(attrs[attr])add(attrs[attr]);
    if(node.name==='meta'&&(attrs.name==='description'||['og:title','og:description'].includes(attrs.property)))add(attrs.content);
    for(const child of node.children??[])visit(child);
  }
  visit(ast);
  return {texts,links,lang,canonical,alternates};
}
// CSS-generated status text is visible to users but absent from static HTML. The demo shows its
// states as glyphs with screen-reader text in the HTML; should CSS labels return, each one needs
// its English counterpart.
const demoCSS=fs.readFileSync(new URL('../src/styles/product-demo.css',import.meta.url),'utf8');
const englishLabels=demoCSS.match(/\.product-demo:lang\(en\)\s*\{([^}]+)\}/)?.[1]??'';
const statusLabels=['active','open','blocked','checked','running','human','duplicate','none'];
const usesCssLabels=/var\(--pd-label-/.test(demoCSS);
if(usesCssLabels)for(const label of statusLabels)assert.ok(englishLabels.includes(`--pd-label-${label}: '${label}'`),`Missing English CSS label: ${label}`);
assert.doesNotMatch(demoCSS,/content:\s*['"][A-Za-zÀ-ÿ]/,'Visible words must use locale-aware CSS labels');
const report={routes:0,untranslated:[],linkErrors:[],checks:(usesCssLabels?statusLabels.length:0)+1};
for(const route of routes) {
  const enRoute=localizedPath(route,'en');
  const de=await inspect(read(route)), en=await inspect(read(enRoute));
  for(const [locale,page,expected] of [['de',de,route],['en',en,enRoute]]) {
    assert.equal(page.lang,locale,`${expected}: html lang`);
    assert.equal(new URL(page.canonical).pathname,expected,`${expected}: canonical`);
    for(const language of ['de','en']) {
      const alternate=page.alternates.find(a=>a.hreflang===language);
      assert.ok(alternate,`${expected}: missing ${language} alternate`);
      assert.equal(new URL(alternate.href).pathname,localizedPath(route,language));
      const switchLink=page.links.find(a=>'data-language-link' in a&&a.lang===language);
      assert.ok(switchLink,`${expected}: missing ${language} switch`);
      assert.equal(switchLink.href,localizedPath(route,language));
      assert.equal(switchLink['aria-current'],locale===language?'true':undefined);
    }
    report.checks+=10;
  }
  for(const link of en.links) {
    if(link.href?.startsWith('/')&&!link.href.startsWith('/en')&&!('data-language-link' in link))report.linkErrors.push({route:enRoute,href:link.href});
  }
  for(const text of de.texts) {
    if(en.texts.has(text)&&!allowedShared.has(text)&&!/^\d{1,2}-(?:April|September)-2026$|^April 2026$|^v\d+\s*·?$|^[A-Z]$/.test(text))report.untranslated.push({route:enRoute,text});
  }
  report.routes+=2;
}
const destination = new URL('../output/check-i18n.json',import.meta.url);
fs.writeFileSync(destination,JSON.stringify(report,null,2)+'\n');
if(report.untranslated.length||report.linkErrors.length) {
  console.error(JSON.stringify(report,null,2));
  process.exitCode=1;
} else console.log(`PASS: ${report.checks} locale checks on ${report.routes} pages. No untranslated German UI or cross-language navigation leaks.`);
