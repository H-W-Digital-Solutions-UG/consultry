import { indexable, siteOrigin } from '../content/products';
export const GET = () => new Response(indexable ? `User-agent: *\nAllow: /\nSitemap: ${siteOrigin}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n', {headers:{'Content-Type':'text/plain'}});
