/**
 * Prerenders the five smoke routes into dist/<route>/index.html so the first
 * paint is server-rendered HTML (LCP = the H1, before any JS runs), and adds
 * preload hints for the latin font files and the variant's hero object.
 *
 * Runs after `vite build` and `vite build --ssr src/entry-prerender.tsx`.
 */
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const dist = new URL("../dist/", import.meta.url).pathname;
const ssrDir = join(dist, ".ssr");
const { render, ROUTES } = await import(pathToFileURL(join(ssrDir, "entry-prerender.js")).href);

const template = readFileSync(join(dist, "index.html"), "utf8");
const assets = readdirSync(join(dist, "assets"));
const font = (prefix) => assets.find((f) => f.startsWith(prefix) && f.endsWith(".woff2"));
const fontPreloads = [font("inter-latin-wght-normal-"), font("jetbrains-mono-latin-wght-normal-")]
  .filter(Boolean)
  .map((f) => `    <link rel="preload" as="font" type="font/woff2" crossorigin href="/assets/${f}" />`)
  .join("\n");

const escape = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

for (const { id, path } of ROUTES) {
  const { html, title, description } = render(path);
  const heroFormat = ["corpus", "brand", "ledger"].includes(id) ? "webp" : "avif";
  const heroPreload = `    <link rel="preload" as="image" type="image/${heroFormat}" imagesrcset="/hero/${id}-480.${heroFormat} 480w, /hero/${id}-720.${heroFormat} 720w" imagesizes="(min-width: 1024px) 480px, 340px" />`;
  const page = template
    .replace("<title>Consultry</title>", `<title>${escape(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escape(description)}" />`)
    .replace("</head>", `${fontPreloads}\n${heroPreload}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const dir = join(dist, path.replace(/^\//, ""));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), page);
  console.log(`prerendered ${path} (${(page.length / 1024).toFixed(1)} kB)`);
}

rmSync(ssrDir, { recursive: true, force: true });
