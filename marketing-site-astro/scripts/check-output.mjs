import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';
import ts from 'typescript';

const project = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const client = path.join(project, fs.existsSync(path.join(project, 'dist/client')) ? 'dist/client' : 'dist');
const output = path.join(project, 'output/check-output.json');
const slugs = ['firmengedaechtnis', 'corporate-alignment', 'agenten-ledger', 'zugriff'];
const landingRoutes = slugs.map(slug => `/produkt/${slug}`);
const requiredRoutes = ['/', '/produkt', ...landingRoutes, '/warteliste', '/legal/impressum', '/legal/datenschutz'];
const expectedHeadlines = new Map([
  ['/', 'Ihr arbeitet im Team. Eure KI aber in Einzelchats.'],
  ['/produkt', 'Mehr Power. Für deine Arbeit.'],
  ['/produkt/firmengedaechtnis', 'Einmal erarbeitet. Weiter genutzt.'],
  ['/produkt/corporate-alignment', 'Dein Stil. Im ersten Entwurf.'],
  ['/produkt/agenten-ledger', 'Agentenschwärme. Einfach koordinieren.'],
  ['/produkt/zugriff', 'Freiraum für KI. Kontrolle für dich.'],
  ['/en', 'You work as a team. Your AI works in separate chats.'],
  ['/en/produkt', 'More power. For your work.'],
  ['/en/produkt/firmengedaechtnis', 'Work done once. Put to work again.'],
  ['/en/produkt/corporate-alignment', 'Your style. From the first draft.'],
  ['/en/produkt/agenten-ledger', 'Agent swarms. Easy to coordinate.'],
  ['/en/produkt/zugriff', 'Freedom for AI. Control for you.'],
]);
const report = { generatedAt: new Date().toISOString(), checks: 0, pages: [], localReferences: 0, deferredThree: null, errors: [], limits: [
  'Static output inspection only. Browser interaction, visual layout and runtime API/redirect responses require separate verification.',
  'JavaScript sizes sum gzip sizes of individual files. They exclude HTTP headers, cache effects and source maps.',
] };

function check(condition, message) {
  report.checks++;
  if (!condition) report.errors.push(message);
  return condition;
}
function walk(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}
function decode(value = '') {
  return value.replace(/&(?:amp|quot|apos|lt|gt|#\d+|#x[\da-f]+);/gi, entity => {
    const names = { '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>' };
    if (names[entity]) return names[entity];
    const number = entity.toLowerCase().startsWith('&#x') ? parseInt(entity.slice(3, -1), 16) : parseInt(entity.slice(2, -1), 10);
    return Number.isFinite(number) ? String.fromCodePoint(number) : entity;
  });
}
function attributes(source) {
  const values = {};
  for (const match of source.matchAll(/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g)) {
    values[match[1].toLowerCase()] = decode(match[2] ?? match[3] ?? match[4] ?? '');
  }
  return values;
}
function tags(html) {
  const clean = html.replace(/<!--[\s\S]*?-->/g, '').replace(/(<script\b[^>]*>)[\s\S]*?<\/script>/gi, '$1</script>');
  return [...clean.matchAll(/<([a-z][a-z0-9-]*)\b((?:"[^"]*"|'[^']*'|[^'">])*)>/gi)].map(match => ({ name: match[1].toLowerCase(), attrs: attributes(match[2]) }));
}
function routeForFile(file) {
  const relative = path.relative(client, file).replaceAll(path.sep, '/');
  if (relative === 'index.html') return '/';
  return `/${relative.replace(/\/index\.html$/, '').replace(/\.html$/, '')}`;
}
function resolveLocal(urlPath) {
  let decoded;
  try { decoded = decodeURIComponent(urlPath); } catch { return undefined; }
  const base = path.resolve(client, `.${decoded}`);
  if (base !== client && !base.startsWith(`${client}${path.sep}`)) return undefined;
  return [base, `${base}.html`, path.join(base, 'index.html')].find(file => fs.existsSync(file) && fs.statSync(file).isFile());
}
function canonicalOf(page) {
  return page?.tags.find(tag => tag.name === 'link' && tag.attrs.rel === 'canonical')?.attrs.href;
}
function meta(page, key, property = false) {
  return page?.tags.find(tag => tag.name === 'meta' && tag.attrs[property ? 'property' : 'name'] === key)?.attrs.content;
}
function visibleText(html) {
  return decode(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}
// Extract balanced elements of one tag name so nested document sections do not
// truncate their containing demo panels. Existing flat asset checks stay intact.
function elements(html, name, predicate = () => true) {
  const clean = html.replace(/<!--[\s\S]*?-->/g, '').replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '');
  const pattern = new RegExp(`<(/?)${name}\\b((?:"[^"]*"|'[^']*'|[^'">])*)>`, 'gi');
  const stack = [];
  const found = [];
  for (const match of clean.matchAll(pattern)) {
    if (!match[1]) stack.push({ name, attrs: attributes(match[2]), start: match.index + match[0].length });
    else {
      const opening = stack.pop();
      if (opening && predicate(opening.attrs)) found.push({ name, attrs: opening.attrs, html: clean.slice(opening.start, match.index) });
    }
  }
  return found;
}
const hasClass = (attrs, name) => (attrs.class ?? '').split(/\s+/).includes(name);
function checkProductDemos(page) {
  const demos = elements(page.html, 'section', attrs => 'data-product-demo' in attrs);
  for (const demo of demos) {
    const label = `${page.route}: demo #${demo.attrs.id || '(missing ID)'}`;
    const steps = elements(demo.html, 'button', attrs => 'data-demo-step' in attrs);
    const panels = elements(demo.html, 'section', attrs => 'data-demo-panel' in attrs);
    const panelByIndex = new Map(panels.map(panel => [panel.attrs['data-demo-panel'], panel]));
    const promptWorkspaces = elements(demo.html, 'aside', attrs => hasClass(attrs, 'pd-prompt-workspace'));
    const promptFields = elements(promptWorkspaces[0]?.html ?? '', 'div', attrs => hasClass(attrs, 'pd-prompt-field'));
    const runActions = elements(promptWorkspaces[0]?.html ?? '', 'button', attrs => 'data-demo-run' in attrs);
    check(promptWorkspaces.length === 1 && promptFields.length === 1 && elements(promptFields[0]?.html ?? '', 'h3').some(title => visibleText(title.html).length >= 12), `${label}: missing a prompt workspace with a substantive working task`);
    check(runActions.length === 1 && runActions[0].attrs.type === 'button' && Boolean(visibleText(runActions[0].html)), `${label}: prompt workspace needs one named native run action`);
    const artifacts = elements(demo.html, 'article', attrs => hasClass(attrs, 'pd-artifact'));
    const artifact = artifacts[0];
    check(artifacts.length === 1 && Boolean(artifact?.attrs['aria-label']?.trim()), `${label}: expected one named persistent canvas artifact`);
    const artifactPanels = elements(artifact?.html ?? '', 'section', attrs => 'data-demo-panel' in attrs);
    check(artifactPanels.length === panels.length && panels.every(panel => artifactPanels.some(contained => contained.attrs.id === panel.attrs.id)), `${label}: all working results must belong to the persistent canvas artifact`);
    const viewButtons = elements(artifact?.html ?? '', 'button', attrs => 'data-demo-view-button' in attrs);
    check(viewButtons.length === 2 && ['basis', 'current'].every(view => viewButtons.filter(button => button.attrs['data-demo-view-button'] === view).length === 1) && viewButtons.every(button => button.attrs.type === 'button' && Boolean(visibleText(button.html)) && button.attrs['aria-pressed'] === String(button.attrs['data-demo-view-button'] === 'current')) && demo.attrs['data-demo-view'] === 'current', `${label}: canvas needs named basis/current controls with only the working state initially selected`);
    const versions = elements(artifact?.html ?? '', 'span', attrs => 'data-demo-version' in attrs);
    check(versions.length === 1 && Boolean(visibleText(versions[0]?.html ?? '')) && visibleText(versions[0]?.html ?? '') === panelByIndex.get('0')?.attrs['data-version'], `${label}: persistent canvas version must match its initial working result`);
    const agentPanels = elements(promptWorkspaces[0]?.html ?? '', 'section', attrs => 'data-demo-agent-panel' in attrs);
    const agentByIndex = new Map(agentPanels.map(panel => [panel.attrs['data-demo-agent-panel'], panel]));
    check(steps.length > 1 && steps.length === panels.length, `${label}: workflow needs matching native steps and panels`);
    check(panelByIndex.size === panels.length && steps.every((step, index) => step.attrs['data-demo-step'] === String(index) && panelByIndex.has(String(index))), `${label}: workflow indices must be unique and contiguous`);
    check(agentPanels.length === panels.length && agentByIndex.size === panels.length && panels.every(panel => agentByIndex.has(panel.attrs['data-demo-panel'])), `${label}: every canvas result needs one matching agent contribution panel`);
    check(panels.filter(panel => panel.attrs['data-active'] === 'true').length === 1 && panelByIndex.get('0')?.attrs['data-active'] === 'true', `${label}: exactly the first result must be initially active`);
    check(agentPanels.filter(panel => panel.attrs['data-active'] === 'true').length === 1 && agentByIndex.get('0')?.attrs['data-active'] === 'true', `${label}: exactly the first agent contribution must be initially active`);
    check(steps.filter(step => step.attrs['aria-pressed'] === 'true').length === 1 && steps[0]?.attrs['aria-pressed'] === 'true', `${label}: exactly the first workflow step must be initially selected`);
    for (const step of steps) {
      const panel = panelByIndex.get(step.attrs['data-demo-step']);
      check(step.attrs.type === 'button' && Boolean(visibleText(step.html)) && Boolean(panel?.attrs.id) && step.attrs['aria-controls'] === panel?.attrs.id, `${label}: step ${step.attrs['data-demo-step']} needs a named button targeting its own panel`);
    }
    for (const panel of panels) {
      const index = panel.attrs['data-demo-panel'];
      const panelLabel = `${label}, result ${index}`;
      const active = panel.attrs['data-active'] === 'true';
      check(panel.attrs['aria-hidden'] === String(!active) && ('inert' in panel.attrs) === !active, `${panelLabel}: hidden results must be inert and excluded from accessibility`);
      check(Boolean(panel.attrs['data-version']?.trim()), `${panelLabel}: result needs its own nonempty working version`);
      const agentPanel = agentByIndex.get(index);
      check(Boolean(agentPanel) && agentPanel.attrs['data-active'] === String(active) && agentPanel.attrs['aria-hidden'] === String(!active) && ('inert' in agentPanel.attrs) === !active, `${panelLabel}: agent contribution must match the result visibility and accessibility state`);
      check(elements(agentPanel?.html ?? '', 'p', attrs => hasClass(attrs, 'pd-agent-text')).some(text => visibleText(text.html).length >= 12), `${panelLabel}: missing a substantive agent contribution`);
      const workspaces = elements(panel.html, 'div', attrs => hasClass(attrs, 'pd-workspace'));
      const workspace = workspaces[0];
      check(workspaces.length === 1, `${panelLabel}: missing a single native workspace`);
      const sources = elements(workspace?.html ?? '', 'details', attrs => hasClass(attrs, 'pd-source-file'));
      check(sources.length > 0, `${panelLabel}: result has no inspectable source document`);
      for (const source of sources) {
        const summaries = elements(source.html, 'summary');
        const excerpts = elements(source.html, 'blockquote');
        check(summaries.length === 1 && Boolean(visibleText(summaries[0].html)) && excerpts.some(excerpt => visibleText(excerpt.html).length >= 20), `${panelLabel}: source needs a document name and a substantive native excerpt`);
      }
      check(elements(workspace?.html ?? '', 'h4', attrs => 'data-demo-result-title' in attrs).some(title => Boolean(visibleText(title.html))), `${panelLabel}: missing a named working result in the canvas`);
      const blocks = elements(workspace?.html ?? '', 'section', attrs => hasClass(attrs, 'pd-document-section'));
      check(blocks.filter(block => block.attrs['data-canvas-focus'] === 'true').length === 1, `${panelLabel}: canvas must focus one existing working block`);
      check(blocks.length > 0 && blocks.every(block => elements(block.html, 'h5').some(heading => Boolean(visibleText(heading.html))) && (
        elements(block.html, 'p', attrs => hasClass(attrs, 'pd-document-text')).some(text => visibleText(text.html).length >= 12) ||
        elements(block.html, 'ul', attrs => hasClass(attrs, 'pd-work-items')).some(list => elements(list.html, 'li').some(item => visibleText(item.html).length >= 12))
      )), `${panelLabel}: output needs labeled working content, not just a title or status`);
      const actions = elements(panel.html, 'button', attrs => 'data-demo-advance' in attrs);
      const downloads = elements(panel.html, 'a', attrs => 'data-demo-download' in attrs);
      if (Number(index) < panels.length - 1) {
        check(actions.length === 1 && downloads.length === 0 && actions[0].attrs.type === 'button' && Boolean(visibleText(actions[0].html)) && actions[0].attrs['data-demo-advance'] === String(Number(index) + 1) && panelByIndex.has(actions[0].attrs['data-demo-advance']), `${panelLabel}: working action must lead to the next valid result`);
      } else {
        check(actions.length === 0 && downloads.length === 1, `${panelLabel}: final result needs one native artifact download`);
        for (const download of downloads) {
          const href = download.attrs.href ?? '';
          const separator = href.indexOf(',');
          const plainText = separator >= 0 && /^data:text\/plain(?:;charset=utf-8)?$/i.test(href.slice(0, separator));
          let text = '';
          try { if (plainText) text = decodeURIComponent(href.slice(separator + 1)); } catch { /* Report malformed payload below. */ }
          check(plainText && /\.txt$/i.test(download.attrs.download ?? '') && Boolean(visibleText(download.html)), `${panelLabel}: download must be a named native plain-text file`);
          check(/beispiel|fiktiv|illustrativ|fictional|example/i.test(text), `${panelLabel}: downloaded artifact must identify its example status`);
          const contentLines = text.split(/\r?\n/).map(line => line.trim()).filter(line => line && !/beispiel|fiktiv|illustrativ|keine (?:echten )?kundendaten/i.test(line));
          check(contentLines.length >= 5 && contentLines.join(' ').length >= 120, `${panelLabel}: downloaded artifact lacks usable working content`);
        }
      }
    }
  }
}
function checkOfferDemo(page) {
  const english = page.route.startsWith('/en/');
  const offerRoute = page.route.replace(/^\/en(?=\/)/, '') === '/produkt/corporate-alignment';
  const pricePattern = english ? /€3,200\s*excluding VAT/ : /3\.200\s*€\s*netto/;
  const durationPattern = english ? /5\s*working days/ : /5\s*Arbeitstage/;
  const demos = elements(page.html, 'section', attrs => 'data-offer-demo' in attrs);
  check(demos.length === Number(offerRoute) && page.tags.filter(tag => 'data-offer-demo' in tag.attrs).length === demos.length, `${page.route}: expected ${offerRoute ? 'one native offer demonstration' : 'no offer demonstration'}`);
  if (!offerRoute) return;
  check(!page.tags.some(tag => 'data-product-demo' in tag.attrs), `${page.route}: legacy product demonstration must be replaced, not hidden or duplicated`);
  const heading = elements(page.html, 'section', attrs => attrs.id === 'produktflaeche')[0];
  const introduction = elements(heading?.html ?? '', 'header', attrs => hasClass(attrs, 'chapter-heading'))[0];
  check(elements(introduction?.html ?? '', 'h2').some(title => visibleText(title.html) === (english ? 'From conversation to proposal.' : 'Vom Gespräch zum Angebot.')), `${page.route}: offer demonstration needs its matching chapter title`);
  check(elements(introduction?.html ?? '', 'p').some(paragraph => /umfang|scope/i.test(visibleText(paragraph.html)) && /wähl|auswahl|entscheid|festleg|choose/i.test(visibleText(paragraph.html))), `${page.route}: chapter introduction must explain the scope choice`);
  for (const demo of demos) {
    const label = `${page.route}: offer demo #${demo.attrs.id || '(missing ID)'}`;
    const demoTags = tags(demo.html);
    check(demo.attrs.id === 'product-demo-brand' && !('hidden' in demo.attrs) && !('inert' in demo.attrs) && demo.attrs['aria-hidden'] !== 'true', `${label}: offer demonstration must retain its visible brand anchor`);
    check(hasClass(demo.attrs, 'product-demo'), `${label}: retain the existing ProductDemo design shell`);
    const promptWorkspaces = elements(demo.html, 'aside', attrs => hasClass(attrs, 'pd-prompt-workspace'));
    check(promptWorkspaces.length === 1 && demo.html.indexOf('<aside') < demo.html.indexOf('<article') && elements(promptWorkspaces[0]?.html ?? '', 'details', attrs => hasClass(attrs, 'pd-prompt-details')).length === 1, `${label}: existing prompt card must precede the result in visual and reading order`);
    check(!demoTags.some(tag => Object.keys(tag.attrs).some(attribute => attribute.startsWith('data-demo-'))), `${label}: legacy workflow playback controls must not remain`);
    const forms = elements(demo.html, 'form', attrs => 'data-offer-form' in attrs);
    const form = forms[0];
    check(forms.length === 1, `${label}: expected one native offer form`);
    const formTags = tags(form?.html ?? '');
    const labels = elements(form?.html ?? '', 'label');
    const hasAccessibleLabel = control => Boolean(control.attrs['aria-label']?.trim()) || Boolean(control.attrs['aria-labelledby']?.trim()) || labels.some(label => visibleText(label.html) && (
      control.attrs.id && label.attrs.for === control.attrs.id ||
      tags(label.html).some(tag => tag.name === control.name && tag.attrs.id === control.attrs.id && tag.attrs.name === control.attrs.name && tag.attrs.value === control.attrs.value)
    ));
    const scopes = formTags.filter(tag => tag.name === 'input' && tag.attrs.name === 'offer-scope');
    check(scopes.length === 3 && ['analysis', 'implementation', 'custom'].every(value => scopes.filter(scope => scope.attrs.value === value).length === 1) && scopes.every(scope => scope.attrs.type === 'radio' && hasAccessibleLabel(scope)), `${label}: scope choices must be three accessible native radios for analysis, implementation and custom`);
    check(scopes.filter(scope => 'checked' in scope.attrs).length === 1 && scopes.find(scope => scope.attrs.value === 'analysis')?.attrs.checked !== undefined, `${label}: only analysis must be selected initially`);
    const notes = elements(form?.html ?? '', 'textarea', attrs => 'data-offer-note' in attrs);
    check(notes.length === 1 && notes[0].attrs.maxlength === '600' && hasAccessibleLabel(notes[0]), `${label}: note needs an accessible native textarea limited to 600 characters`);
    const applies = elements(form?.html ?? '', 'button', attrs => 'data-offer-apply' in attrs);
    check(applies.length === 1 && applies[0].attrs.type === 'submit' && Boolean(visibleText(applies[0].html)), `${label}: applying the scope needs one named native submit button`);
    const documents = elements(demo.html, 'article', attrs => 'data-offer-document' in attrs);
    const document = documents[0];
    check(Boolean(document && hasClass(document.attrs, 'pd-artifact')) && elements(document?.html ?? '', 'div', attrs => 'data-offer-version' in attrs).length === 1, `${label}: retain the existing artifact card with a neutral version header, not an inherited approval badge`);
    check(documents.length === 1 && document.attrs['aria-label'] === (english ? 'Proposal draft for Lindenwerk' : 'Angebotsentwurf für Lindenwerk') && !('hidden' in document.attrs) && !('inert' in document.attrs) && document.attrs['aria-hidden'] !== 'true', `${label}: expected one initially visible, named Lindenwerk offer document`);
    const documentText = visibleText(document?.html ?? '');
    check(pricePattern.test(documentText) && durationPattern.test(documentText) && /analys(?:e|is)/i.test(documentText), `${label}: initial document must show the analysis scope, matching fee and duration`);
    const sourceDetails = elements(document?.html ?? '', 'details', attrs => 'data-offer-sources' in attrs);
    check(sourceDetails.length === 1 && elements(demo.html, 'details', attrs => 'data-offer-sources' in attrs).length === 1, `${label}: source disclosure must belong to the offer document`);
    const summaries = elements(sourceDetails[0]?.html ?? '', 'summary');
    const excerpts = elements(sourceDetails[0]?.html ?? '', 'blockquote');
    check(summaries.length === 1 && Boolean(visibleText(summaries[0].html)) && excerpts.length === 3 && excerpts.every(excerpt => visibleText(excerpt.html).length >= 20), `${label}: sources need a named native disclosure with three substantive excerpts`);
    const downloads = elements(demo.html, 'a', attrs => 'data-offer-download' in attrs);
    check(downloads.length === 1 && /\.md$/i.test(downloads[0].attrs.download ?? '') && Boolean(visibleText(downloads[0].html)), `${label}: expected one named native Markdown download`);
    const href = downloads[0]?.attrs.href ?? '';
    let downloadText = '';
    if (/^data:text\/(?:markdown|plain)(?:;charset=utf-8)?,/i.test(href)) {
      try { downloadText = decodeURIComponent(href.slice(href.indexOf(',') + 1)); } catch { /* Report malformed payload below. */ }
    } else if (href.startsWith('/')) {
      const file = resolveLocal(href.split(/[?#]/)[0]);
      if (file) downloadText = fs.readFileSync(file, 'utf8');
    }
    const downloadContent = downloadText.replace(/\\([\\`*_{}[\]()#+\-.!|])/g, '$1');
    check(/lindenwerk/i.test(downloadContent) && /analys(?:e|is)/i.test(downloadContent) && pricePattern.test(downloadContent) && durationPattern.test(downloadContent) && downloadContent.length >= 120, `${label}: initial Markdown download must contain the usable analysis offer with matching fee and duration`);
    check(/beispiel|fiktiv|illustrativ|fictional|example/i.test(downloadText), `${label}: downloaded offer must identify its example status`);
    const statuses = demoTags.filter(tag => 'data-offer-status' in tag.attrs);
    check(statuses.length === 1 && statuses[0].attrs.role === 'status', `${label}: offer updates need a native status region`);
    const resets = elements(demo.html, 'button', attrs => 'data-offer-reset' in attrs);
    check(resets.length === 1 && resets[0].attrs.type === 'button' && 'hidden' in resets[0].attrs && Boolean(visibleText(resets[0].html)), `${label}: reset needs a named native button hidden before changes`);
  }
}

const allFiles = walk(client);
const htmlFiles = allFiles.filter(file => file.endsWith('.html'));
if (!htmlFiles.length) {
  console.error('No built HTML found. Run npm run build before npm run check:output.');
  process.exit(1);
}
const pages = htmlFiles.map(file => {
  const html = fs.readFileSync(file, 'utf8');
  const parsed = tags(html);
  return { file, html, tags: parsed, route: routeForFile(file), ids: parsed.filter(tag => 'id' in tag.attrs).map(tag => tag.attrs.id) };
});
const pageByFile = new Map(pages.map(page => [page.file, page]));
const pageByRoute = new Map(pages.map(page => [page.route, page]));
const origin = new URL(canonicalOf(pageByRoute.get('/') ?? pages[0]) ?? 'https://consultry.de').origin;
const javascriptFiles = allFiles.filter(file => /\.(?:m?js)$/.test(file));
const moduleCache = new Map();

function moduleInfo(file, inlineCode) {
  if (moduleCache.has(file)) return moduleCache.get(file);
  const code = inlineCode ?? fs.readFileSync(file, 'utf8');
  const info = { file, code, inline: inlineCode !== undefined, static: new Set(), dynamic: new Set(), bytes: Buffer.byteLength(code), gzipBytes: gzipSync(code).length };
  moduleCache.set(file, info);
  const ast = ts.createSourceFile(file, code, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
  function dependency(specifier, dynamic) {
    if (!specifier.startsWith('.') && !specifier.startsWith('/')) {
      check(false, `Unresolved browser module import ${specifier} in ${path.relative(client, file)}`);
      return;
    }
    const clean = specifier.split(/[?#]/)[0];
    const destination = clean.startsWith('/') ? resolveLocal(clean) : path.resolve(path.dirname(file), clean);
    if (!check(Boolean(destination && fs.existsSync(destination)), `Missing imported module ${specifier} in ${path.relative(client, file)}`)) return;
    (dynamic ? info.dynamic : info.static).add(destination);
  }
  function visit(node) {
    if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) dependency(node.moduleSpecifier.text, false);
    if (ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.ImportKeyword && node.arguments[0] && ts.isStringLiteralLike(node.arguments[0])) dependency(node.arguments[0].text, true);
    ts.forEachChild(node, visit);
  }
  visit(ast);
  return info;
}
function closure(entries, includeDynamic = false) {
  const seen = new Set();
  function visit(file) {
    if (seen.has(file) || !/\.(?:m?js)$/.test(file)) return;
    seen.add(file);
    const info = moduleInfo(file);
    info.static.forEach(visit);
    if (includeDynamic) info.dynamic.forEach(visit);
  }
  entries.forEach(visit);
  return seen;
}
function sizes(files) {
  return [...files].sort().map(file => {
    const info = moduleInfo(file);
    return { file: `/${path.relative(client, file).replaceAll(path.sep, '/')}`, bytes: info.bytes, gzipBytes: info.gzipBytes };
  });
}

const runtimeRoutes = new Set(['/api/waitlist/signup', ...slugs.map(slug => `/${slug}`)]);
const initialUnion = new Set();
for (const route of requiredRoutes) check(pageByRoute.has(route), `Missing prerendered route ${route}`);
for (const page of pages) {
  const canonical = canonicalOf(page);
  const title = page.html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  check(Boolean(title), `${page.route}: missing title`);
  check(Boolean(meta(page, 'description')?.trim()), `${page.route}: missing description`);
  check(page.tags.filter(tag => tag.name === 'h1').length === 1, `${page.route}: expected exactly one native h1`);
  check(page.tags.filter(tag => tag.name === 'main').length === 1, `${page.route}: expected exactly one native main`);
  check(Boolean(canonical), `${page.route}: missing canonical URL`);
  if (canonical) {
    const url = new URL(canonical);
    check(url.origin === origin && url.pathname.replace(/\/$/, '') === page.route.replace(/\/$/, '') && !url.search && !url.hash, `${page.route}: canonical does not match its clean route (${canonical})`);
    check(meta(page, 'og:url', true) === canonical, `${page.route}: Open Graph URL differs from canonical`);
  }
  check(Boolean(meta(page, 'robots')), `${page.route}: missing explicit robots metadata`);
  check(page.ids.length === new Set(page.ids).size, `${page.route}: duplicate IDs (${page.ids.filter((id, index) => page.ids.indexOf(id) !== index).join(', ')})`);
  check(!/<astro-island\b|__NEXT_DATA__|__next_f|data-reactroot|react\/jsx-runtime/i.test(page.html), `${page.route}: framework hydration runtime markup present`);
  const controls = ['a', 'button', 'summary'].flatMap(name => elements(page.html, name));
  check(controls.every(control => !/[↗↓→←›▶↻Ⅱ]/u.test(visibleText(control.html))), `${page.route}: interface controls must use vector icons, not platform-dependent arrow glyphs`);
  const uiIcons = page.tags.filter(tag => tag.name === 'svg' && 'data-ui-icon' in tag.attrs);
  check(uiIcons.length > 0 && uiIcons.every(icon => icon.attrs.stroke === 'currentColor' && icon.attrs.fill === 'none' && icon.attrs['aria-hidden'] === 'true' && icon.attrs.focusable === 'false'), `${page.route}: UI icons must be monochrome, decorative, non-focusable vectors`);
  for (const submit of elements(page.html, 'button', attrs => 'data-submit' in attrs)) {
    check(tags(submit.html).some(tag => tag.name === 'svg' && tag.attrs['data-ui-icon'] === 'up-right'), `${page.route}: signup button must include a vector arrow`);
  }
  for (const playback of elements(page.html, 'span', attrs => 'data-demo-toggle-icon' in attrs)) {
    const states = tags(playback.html).filter(tag => tag.name === 'svg').map(tag => tag.attrs['data-ui-icon']);
    check(playback.attrs['data-playback-state'] === 'play' && states.length === 3 && ['play', 'pause', 'replay'].every(state => states.includes(state)), `${page.route}: playback must preserve vector icons for all three states`);
  }
  for (const offer of elements(page.html, 'section', attrs => 'data-offer-demo' in attrs)) {
    const templates = elements(offer.html, 'template', attrs => 'data-offer-item-icon' in attrs);
    check(templates.length === 1 && tags(templates[0].html).some(tag => tag.name === 'svg' && tag.attrs['data-ui-icon'] === 'up-right'), `${page.route}: dynamic offer items must clone the shared vector icon`);
  }
  checkOfferDemo(page);
  if (page.route.startsWith('/en/produkt/') && page.route !== '/en/produkt/corporate-alignment') checkProductDemos(page);

  for (const tag of page.tags) {
    for (const ref of ['aria-labelledby', 'aria-describedby', 'aria-controls', 'for']) {
      if (tag.attrs[ref]) for (const target of tag.attrs[ref].split(/\s+/)) check(page.ids.includes(target), `${page.route}: ${ref} references missing #${target}`);
    }
  }

  const references = [];
  const modules = new Set();
  for (const tag of page.tags) {
    if (tag.attrs.href) references.push({ value: tag.attrs.href, asset: !['a', 'area'].includes(tag.name) && tag.attrs.rel !== 'canonical' });
    for (const key of ['src', 'poster']) if (tag.attrs[key]) references.push({ value: tag.attrs[key], asset: true });
    if (tag.attrs.srcset) for (const candidate of tag.attrs.srcset.split(',')) references.push({ value: candidate.trim().split(/\s+/)[0], asset: true });
    if (tag.name === 'meta' && tag.attrs.property === 'og:image') references.push({ value: tag.attrs.content, asset: true });
    if (tag.name === 'script' && tag.attrs.src || tag.name === 'link' && tag.attrs.rel === 'modulepreload') {
      const value = tag.attrs.src ?? tag.attrs.href;
      const url = new URL(value, `${origin}${page.route}`);
      check(url.origin === origin, `${page.route}: external initial script ${url.href}`);
      const file = url.origin === origin ? resolveLocal(url.pathname) : undefined;
      if (file) modules.add(file);
    }
  }
  for (const ref of references) {
    if (!ref.value || /^(?:mailto:|tel:|data:|blob:)/i.test(ref.value)) continue;
    if (/^javascript:/i.test(ref.value)) { check(false, `${page.route}: javascript: link`); continue; }
    let url;
    try { url = new URL(ref.value, `${origin}${page.route}`); } catch { check(false, `${page.route}: invalid URL ${ref.value}`); continue; }
    if (url.origin !== origin) continue;
    report.localReferences++;
    const target = resolveLocal(url.pathname);
    if (!target && runtimeRoutes.has(url.pathname) && !ref.asset) continue;
    if (!check(Boolean(target), `${page.route}: missing local ${ref.asset ? 'asset' : 'link'} ${ref.value}`)) continue;
    if (url.hash && pageByFile.has(target)) {
      let id;
      try { id = decodeURIComponent(url.hash.slice(1)); } catch { id = url.hash.slice(1); }
      check(pageByFile.get(target).ids.includes(id), `${page.route}: link ${ref.value} points to missing #${id}`);
    }
  }

  if (expectedHeadlines.has(page.route)) {
    check(visibleText(elements(page.html, 'h1')[0]?.html ?? '') === expectedHeadlines.get(page.route), `${page.route}: approved headline must render in full, with an explicit split`);
  }
  if (page.route === '/' || page.route === '/en') {
    // Eyebrows above headlines were removed by decision; the hero carries no audience line.
    const hero = elements(page.html, 'header', attrs => hasClass(attrs, 'hero-copy'))[0];
    check(elements(hero?.html ?? '', 'p', attrs => hasClass(attrs, 'hero-eyebrow')).length === 0, `${page.route}: hero must not render an eyebrow`);
    const hooks = elements(page.html, 'article', attrs => hasClass(attrs, 'hero-signal'));
    const hookAssets = ['/hero/hooks/home-ready.svg', '/hero/hooks/home-knowledge.svg', '/hero/hooks/home-progress.svg'];
    check(hooks.length === 3 && hooks.every((hook, index) => {
      const visual = elements(hook.html, 'span', attrs => hasClass(attrs, 'hero-signal-visual'))[0];
      const image = tags(visual?.html ?? '').find(tag => tag.name === 'img');
      return visual?.attrs['aria-hidden'] === 'true' && image?.attrs.src === hookAssets[index] && image.attrs.alt === '' && image.attrs.width === '64' && image.attrs.height === '64';
    }), `${page.route}: each homepage hook needs its matching decorative, dimensioned Higgsfield visual`);
    for (const asset of hookAssets) {
      const svg = fs.readFileSync(path.join(client, asset), 'utf8');
      check(!/<(?:script|foreignObject|image)\b|\bon\w+\s*=|(?:href|src)\s*=/i.test(svg), `${asset}: generated SVG must not contain executable or external content`);
      check([...svg.matchAll(/fill="([^"]+)"/g)].every(match => ['rgb(0,0,0)', 'rgb(241,230,216)'].includes(match[1])), `${asset}: expected only black and warm ivory`);
    }
  }
  const hookNames = {
    firmengedaechtnis: ['brain-knowledge', 'brain-changes', 'brain-reuse'],
    'corporate-alignment': ['brand-templates', 'brand-voice', 'brand-result'],
    'agenten-ledger': ['ledger-together', 'ledger-task', 'ledger-overview'],
    zugriff: ['access-control', 'access-freedom', 'access-rules'],
  }[page.route.replace(/^\/(?:en\/)?produkt\//, '')];
  if (hookNames) {
    const hooks = elements(page.html, 'article', attrs => hasClass(attrs, 'hero-signal'));
    check(hooks.length === 3, `${page.route}: expected three product hooks`);
    for (const [index, name] of hookNames.entries()) {
      const visual = elements(hooks[index]?.html ?? '', 'span', attrs => hasClass(attrs, 'hero-signal-visual'))[0];
      const image = tags(visual?.html ?? '').find(tag => tag.name === 'img');
      const asset = `/hero/hooks/${name}.svg`;
      check(visual?.attrs['aria-hidden'] === 'true' && image?.attrs.src === asset && image.attrs.alt === '' && image.attrs.width === '64' && image.attrs.height === '64', `${page.route}: hook ${index + 1} needs its matching decorative Higgsfield icon`);
      const file = resolveLocal(asset);
      if (check(Boolean(file), `${page.route}: missing hook SVG ${asset}`)) {
        const svg = fs.readFileSync(file, 'utf8');
        check(!/<(?:script|foreignObject|image)\b|\bon\w+\s*=|(?:href|src)\s*=/i.test(svg), `${asset}: generated SVG must be passive and self-contained`);
        check(svg.includes('<c2pa:manifest>'), `${asset}: preserve original generation provenance`);
      }
    }
  }
  if (!page.route.startsWith('/legal/')) {
    check(!/[—–]/.test(visibleText(page.html)), `${page.route}: public copy must not use em or en dashes`);
    check(!page.tags.some(tag => /[—–]/.test(tag.attrs['aria-label'] ?? '') || /[—–]/.test(tag.attrs.alt ?? '') || (tag.name === 'meta' && /[—–]/.test(tag.attrs.content ?? ''))), `${page.route}: accessible labels and metadata must not use em or en dashes`);
  }
  if (page.route === '/' || landingRoutes.includes(page.route)) {
    const conversion = elements(page.html, 'div', attrs => hasClass(attrs, 'hero-conversion'))[0];
    check(visibleText(conversion?.html ?? '').includes('Verpasse nicht den Early-Access-Rabatt.'), `${page.route}: hero CTA needs the requested early-access invitation`);
    check(elements(page.html, 'p', attrs => hasClass(attrs, 'waitlist-description')).some(description => visibleText(description.html).includes('Consultry ist noch in Entwicklung.')), `${page.route}: signup must retain a visible development-stage disclosure`);
    check(!/100\s+(?:Einträge|Eintragungen)/i.test(visibleText(page.html)), `${page.route}: unverified waitlist count must not be used as social proof`);
    check(elements(conversion?.html ?? '', 'a', attrs => 'data-waitlist-link' in attrs).every(link => link.attrs.href === '#waitlist-form'), `${page.route}: pilot CTA must lead to the existing request form`);
    check(visibleText(page.html).length > 1000, `${page.route}: insufficient native landing-page content`);
    check(page.tags.some(tag => tag.name === 'form' && 'data-waitlist-form' in tag.attrs), `${page.route}: missing native waitlist form`);
    check(page.tags.some(tag => tag.name === 'input' && tag.attrs.type === 'email' && 'required' in tag.attrs), `${page.route}: missing required email input`);
    check(page.tags.some(tag => tag.name === 'input' && tag.attrs.name === 'newsletterConsent' && tag.attrs.type === 'checkbox' && 'required' in tag.attrs), `${page.route}: missing required consent checkbox`);
    check(page.tags.some(tag => tag.name === 'button' && tag.attrs.type === 'submit' && 'disabled' in tag.attrs), `${page.route}: signup must await live configuration before becoming available`);
    check(page.tags.some(tag => tag.name === 'img' && /\/hero\/.+\.webp$/.test(tag.attrs.src ?? '') && tag.attrs.width && tag.attrs.height), `${page.route}: missing dimensioned static hero placeholder`);
    const variant = page.route === '/' ? 'logo' : ['brain', 'brand', 'ledger', 'access'][landingRoutes.indexOf(page.route)];
    check(page.tags.filter(tag => 'data-hero-scene' in tag.attrs).length === 1, `${page.route}: expected one consistently enhanced hero`);
    check(page.tags.some(tag => tag.attrs['data-hero-scene'] === variant), `${page.route}: missing 3D enhancement for ${variant}`);
    check(page.tags.some(tag => tag.attrs.src === `/hero/${variant}-scene-720.webp`), `${page.route}: hero must use its matching model poster`);
    check(page.tags.some(tag => tag.attrs['data-immersive'] === 'true' && tag.attrs['data-scene-aspect'] === '0'), `${page.route}: hero must start at the common resting state`);
    check(page.tags.filter(tag => 'data-signal-note' in tag.attrs).length === 3, `${page.route}: expected three useful scroll arguments`);
    if (page.route !== '/') {
      if (page.route !== '/produkt/corporate-alignment') {
        check(page.tags.filter(tag => 'data-product-demo' in tag.attrs).length === 1, `${page.route}: expected one native product demonstration`);
        checkProductDemos(page);
      }
    }
    check(!page.tags.some(tag => tag.name === 'iframe'), `${page.route}: iframe embedding is not a native landing page`);
  }
  if (page.route === '/' || page.route === '/produkt') {
    for (const route of landingRoutes) check(page.tags.some(tag => tag.name === 'a' && tag.attrs.href === route), `${page.route}: product ${route} is not discoverable`);
    for (const variant of ['brain', 'brand', 'ledger', 'access']) check(page.tags.some(tag => tag.attrs.src === `/hero/${variant}-scene-480.webp`), `${page.route}: gallery must use ${variant}'s matching object family`);
  }

  const inline = [...page.html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter(match => !attributes(match[1]).src && !/application\/(?:ld\+)?json/.test(attributes(match[1]).type ?? '') && match[2].trim())
    .map(match => match[2]);
  inline.forEach((code, index) => {
    const virtual = path.resolve(client, `.${page.route}.inline-${index}.mjs`);
    moduleInfo(virtual, code);
    modules.add(virtual);
  });
  const initial = closure(modules);
  initial.forEach(file => initialUnion.add(file));
  const files = sizes(new Set([...initial].filter(file => !moduleInfo(file).inline)));
  report.pages.push({ route: page.route, initialJavaScript: {
    files,
    inlineScripts: inline.length,
    bytes: files.reduce((sum, file) => sum + file.bytes, 0) + inline.reduce((sum, code) => sum + Buffer.byteLength(code), 0),
    gzipBytes: files.reduce((sum, file) => sum + file.gzipBytes, 0) + inline.reduce((sum, code) => sum + gzipSync(code).length, 0),
  } });
}

for (const file of allFiles.filter(file => file.endsWith('.css'))) {
  const css = fs.readFileSync(file, 'utf8');
  for (const match of css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) {
    const value = match[1].trim();
    if (/^(?:data:|https?:|#)/.test(value)) continue;
    const local = value.startsWith('/') ? resolveLocal(value) : path.resolve(path.dirname(file), value.split(/[?#]/)[0]);
    check(Boolean(local && fs.existsSync(local)), `${path.relative(client, file)}: missing CSS asset ${value}`);
  }
}

const forbiddenRuntime = /react\.production|react-dom|react\/jsx-runtime|__SECRET_INTERNALS_DO_NOT_USE|__CLIENT_INTERNALS_DO_NOT_USE|Symbol\.for\(["']react\.(?:element|transitional\.element)|__NEXT_DATA__|__next_f\s*=/;
const isThree = file => /THREE\.WebGLRenderer|threejs\.org|WebGLRenderer:/.test(moduleInfo(file).code);
for (const file of new Set([...javascriptFiles, ...initialUnion])) check(!forbiddenRuntime.test(moduleInfo(file).code), `React/Next runtime found in ${path.relative(client, file)}`);
const allReachable = closure(initialUnion, true);
const deferred = new Set([...allReachable].filter(file => !initialUnion.has(file)));
const dynamicEntries = [...initialUnion].flatMap(file => [...moduleInfo(file).dynamic]);
const threeEntries = dynamicEntries.filter(file => [...closure([file], true)].some(isThree));
const threeFiles = new Set(threeEntries.flatMap(file => [...closure([file], true)]).filter(file => !initialUnion.has(file)));
check([...javascriptFiles].some(isThree), 'Expected deferred Three.js runtime was not emitted');
check(![...initialUnion].some(isThree), 'Three.js is reachable through the initial module graph');
check(threeFiles.size > 0, 'Three.js has no reachable dynamic-import boundary');
const threeSizes = sizes(threeFiles);
report.deferredThree = {
  files: threeSizes,
  bytes: threeSizes.reduce((sum, file) => sum + file.bytes, 0),
  gzipBytes: threeSizes.reduce((sum, file) => sum + file.gzipBytes, 0),
  otherDeferredFiles: sizes(new Set([...deferred].filter(file => !threeFiles.has(file)))),
};
const manifest = JSON.parse(fs.readFileSync(path.join(project, 'package.json'), 'utf8'));
for (const name of ['react', 'react-dom', 'next', '@astrojs/react']) check(!manifest.dependencies?.[name], `Unexpected runtime dependency ${name}`);

const sitemapFile = resolveLocal('/sitemap.xml');
if (check(Boolean(sitemapFile), 'Missing sitemap.xml')) {
  const sitemap = fs.readFileSync(sitemapFile, 'utf8');
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => decode(match[1]));
  check(urls.length === new Set(urls).size, 'Duplicate sitemap entries');
  for (const route of ['/', '/produkt', ...landingRoutes]) check(urls.some(value => {
    const url = new URL(value);
    return url.origin === origin && url.pathname.replace(/\/$/, '') === route.replace(/\/$/, '');
  }), `Sitemap is missing ${route}`);
  for (const value of urls) {
    const url = new URL(value);
    check(url.origin === origin && Boolean(resolveLocal(url.pathname)) && !url.search && !url.hash, `Invalid sitemap destination ${value}`);
  }
}
const robotsFile = resolveLocal('/robots.txt');
if (check(Boolean(robotsFile), 'Missing robots.txt')) {
  const robots = fs.readFileSync(robotsFile, 'utf8');
  const isPreview = /noindex/i.test(meta(pageByRoute.get('/'), 'robots') ?? '');
  check(isPreview ? /^Disallow:\s*\/\s*$/m.test(robots) : /^Allow:\s*\/\s*$/m.test(robots), 'robots.txt disagrees with homepage indexing metadata');
  for (const route of landingRoutes) if (pageByRoute.has(route)) check(/noindex/i.test(meta(pageByRoute.get(route), 'robots') ?? '') === isPreview, `${route}: indexing differs from marketing homepage`);
}

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`);
console.log(`${report.errors.length ? 'FAIL' : 'PASS'}: ${report.checks} static checks across ${pages.length} pages; ${report.localReferences} local references inspected.`);
for (const page of report.pages.filter(page => page.route === '/' || landingRoutes.includes(page.route))) console.log(`${page.route}: ${(page.initialJavaScript.gzipBytes / 1024).toFixed(2)} KiB gzip initial JavaScript`);
console.log(`Three.js and scene runtime: ${(report.deferredThree.gzipBytes / 1024).toFixed(2)} KiB gzip, separately deferred.`);
console.log(`Report: ${output}`);
if (report.errors.length) { report.errors.forEach(error => console.error(`- ${error}`)); process.exitCode = 1; }
