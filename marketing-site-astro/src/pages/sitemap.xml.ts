import { products, siteOrigin } from '../content/products';
const paths = ['/', '/produkt', ...products.map(p=>`/produkt/${p.slug}`), '/unternehmen','/kontakt'];
export const GET = () => new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p=>`<url><loc>${siteOrigin}${p}</loc></url>`).join('')}</urlset>`, {headers:{'Content-Type':'application/xml'}});
