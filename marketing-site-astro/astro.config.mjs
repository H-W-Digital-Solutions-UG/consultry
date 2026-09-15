import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: process.env.SITE_URL || 'https://consultry.de',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  trailingSlash: 'never',
  vite: { build: { assetsInlineLimit: 0 } },
});
