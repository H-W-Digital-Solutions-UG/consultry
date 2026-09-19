import { products, siteOrigin } from '../content/products';
import { localizedPath, locales } from '../i18n/locale';
const basePaths = ['/', '/produkt', ...products.map(p=>`/produkt/${p.slug}`), '/unternehmen','/kontakt'];
const paths = locales.flatMap(locale => basePaths.map(path => localizedPath(path, locale)));
export const GET = () => new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${paths.map(p=>`<url><loc>${siteOrigin}${p}</loc>${locales.map(locale=>`<xhtml:link rel="alternate" hreflang="${locale}" href="${siteOrigin}${localizedPath(p, locale)}" />`).join('')}</url>`).join('')}</urlset>`, {headers:{'Content-Type':'application/xml'}});
