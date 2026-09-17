// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://hw-digitalsolutions.de',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
