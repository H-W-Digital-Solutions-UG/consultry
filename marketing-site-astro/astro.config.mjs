import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: process.env.SITE_URL || 'https://consultry.de',
  output: 'static',
  // Vercel builds (VERCEL=1) use the Vercel adapter; local dev, preview and the output checks keep the Node adapter.
  adapter: process.env.VERCEL ? vercel() : node({ mode: 'standalone' }),
  trailingSlash: 'never',
  i18n: { defaultLocale: 'de', locales: ['de', 'en'], routing: { prefixDefaultLocale: false } },
  vite: { build: { assetsInlineLimit: 0 } },
});
