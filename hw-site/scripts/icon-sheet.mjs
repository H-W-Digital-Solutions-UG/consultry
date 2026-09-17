/**
 * Dev-Werkzeug: rendert alle Monoline-Icons als Kontaktbogen nach
 * _debug/icon-sheet.png (96px pro Icon, helle Fläche, Namensbeschriftung).
 * Aufruf: node scripts/icon-sheet.mjs
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = await readFile(path.join(root, "src/icons/icons.ts"), "utf8");

// icons.ts ohne Compiler auswerten: Typ-Export entfernen, in ein Modul packen
const js = source
  .replace(/export type IconName[\s\S]*?;\n/, "")
  .replace(/const dot = \(cx: number, cy: number, r = 1\.3\)/, "const dot = (cx, cy, r = 1.3)")
  .replace("export const icons: Record<IconName, string> =", "export const icons =");
const dataUrl = "data:text/javascript;base64," + Buffer.from(js).toString("base64");
const { icons } = await import(dataUrl);

const names = Object.keys(icons);
const cell = 96;          // Icon-Größe
const pad = 24;           // Innenabstand je Zelle
const caption = 26;       // Beschriftungszeile
const cols = 5;
const cellW = cell + pad * 2;
const cellH = cell + pad * 2 + caption;
const rows = Math.ceil(names.length / cols);
const width = cols * cellW;
const height = rows * cellH;

const tiles = names.map((name, i) => {
  const x = (i % cols) * cellW;
  const y = Math.floor(i / cols) * cellH;
  const scale = cell / 24;
  return `
    <g transform="translate(${x} ${y})">
      <rect x="0.5" y="0.5" width="${cellW - 1}" height="${cellH - 1}" fill="#ffffff" stroke="#e6e8ec"/>
      <!-- 24er-Raster als Orientierung -->
      <rect x="${pad}" y="${pad}" width="${cell}" height="${cell}" fill="none" stroke="#f0f1f4"/>
      <rect x="${pad + scale}" y="${pad + scale}" width="${cell - 2 * scale}" height="${cell - 2 * scale}" fill="none" stroke="#f0f1f4" stroke-dasharray="3 3"/>
      <g transform="translate(${pad} ${pad}) scale(${scale})" fill="none" stroke="#0f1216" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" color="#0f1216">
        ${icons[name]}
      </g>
      <text x="${cellW / 2}" y="${cell + pad * 2 + 8}" font-family="DejaVu Sans Mono, Menlo, monospace" font-size="11" text-anchor="middle" fill="#5c6470">${name}</text>
    </g>`;
});

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="#f4f5f7"/>
  ${tiles.join("\n")}
</svg>`;

// "currentColor" wird von librsvg nicht als CSS-Farbe aufgelöst -> explizit ersetzen
const resolved = svg.replaceAll("currentColor", "#0f1216");

const outDir = path.join(root, "_debug");
await mkdir(outDir, { recursive: true });
const out = path.join(outDir, "icon-sheet.png");
await writeFile(path.join(outDir, "icon-sheet.svg"), resolved);
await sharp(Buffer.from(resolved), { density: 144 }).png().toFile(out);
console.log(`${names.length} Icons -> ${out}`);
