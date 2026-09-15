import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const [source, variant] = process.argv.slice(2);
if (!source || !['brain', 'corpus', 'brand', 'ledger', 'access', 'logo'].includes(variant)) {
  throw new Error('Usage: node scripts/encode-scene-poster.mjs <studio-export.png> <variant>');
}
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const metadata = await sharp(source).metadata();
if (metadata.width !== 720 || metadata.height !== 720 || !metadata.hasAlpha) {
  throw new Error('Expected a transparent 720 × 720 PNG from scene-studio.');
}
for (const size of [480, 720]) {
  const destination = path.join(root, 'public/hero', `${variant}-scene-${size}.webp`);
  const result = await sharp(source).resize(size, size).webp({ quality: 94, alphaQuality: 100, effort: 6 }).toFile(destination);
  console.log(`${variant}-${size}: ${(result.size / 1024).toFixed(1)} KiB`);
}
