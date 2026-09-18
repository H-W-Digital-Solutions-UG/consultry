// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://consultry.de',
  integrations: [sitemap()],
  // Alle CSS-Dateien sind zusammen < 40 KB: inline im HTML spart drei
  // render-blockierende Requests beim ersten Aufruf.
  build: {
    inlineStylesheets: 'always',
  },
  // Interne Links werden bei Hover/Touch vorgeladen (kleines Skript, spürbar schnellere Navigation).
  prefetch: {
    defaultStrategy: 'hover',
  },
});
