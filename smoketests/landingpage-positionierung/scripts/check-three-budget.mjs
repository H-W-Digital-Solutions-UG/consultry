import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { gzipSync } from "node:zlib";

const dist = new URL("../dist/", import.meta.url);
const manifest = JSON.parse(readFileSync(new URL(".vite/manifest.json", dist), "utf8"));
const runtimeKey = Object.keys(manifest).find((key) => key.endsWith("smoke-object/runtime.ts"));
assert(runtimeKey, "Three.js must remain behind a dynamic import.");
const initial = new Set();
function visit(key) {
  if (initial.has(key)) return;
  initial.add(key);
  for (const dependency of manifest[key].imports ?? []) visit(dependency);
}
visit("index.html");
assert(!initial.has(runtimeKey), "The Three.js renderer must not enter the initial script graph.");

const deferred = new Set();
function visitDeferred(key) {
  if (initial.has(key) || deferred.has(key)) return;
  deferred.add(key);
  for (const dependency of manifest[key].imports ?? []) visitDeferred(dependency);
}
visitDeferred(runtimeKey);
const compressedBytes = [...deferred].reduce((sum, key) => sum + gzipSync(readFileSync(new URL(manifest[key].file, dist))).length, 0);
assert(compressedBytes < 145 * 1024, `Optional 3D payload exceeds 145 KiB gzip: ${compressedBytes} bytes.`);
for (const [route, variant] of [["korpus", "corpus"], ["corporate-alignment", "brand"], ["agenten-ledger", "ledger"]]) {
  const html = readFileSync(new URL(`${route}/index.html`, dist), "utf8");
  assert(html.includes(`/hero/${variant}-scene-480.webp`), `${route} must render its matching WebP poster in the initial HTML.`);
  for (const key of deferred) assert(!html.includes(manifest[key].file), `${route} must not preload deferred 3D code.`);
}
console.log(`3D budget passed: ${(compressedBytes / 1024).toFixed(1)} KiB gzip, deferred; all three SSR posters present; no eager 3D imports/preloads.`);
