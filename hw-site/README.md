# hw-site – Website der H&W Digital Solutions UG

Astro-Site für `hw-digitalsolutions.de`. Positionierung: AI-Native Consulting & Engineering, Leitmotiv „From Process to Production“. Eigenständige Marke – nicht das Consultry-Produkt-Design-System.

## Entwicklung

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # statischer Build nach dist/
pnpm preview
pnpm check      # Astro/TypeScript-Diagnose (benötigt TypeScript 6.x)
```

## Struktur

- `src/data/company.ts` – Firmendaten (Rechtsdaten identisch zu `marketing-site/src/lib/company.ts`, beide pflegen)
- `src/data/content.ts` – Copy-Bausteine aus dem Positionierungs-Handover
- `src/components/` – Nav, Hero, Chain (Delivery Chain), Steps, Contrast, Capabilities, Cta, Footer
- `src/scripts/hero-scroll.ts` – Scroll-Szene des Start-Heros (Progressive Enhancement, ohne Bibliothek; Regeln in `DESIGN.md`, Abschnitte 7 und 9)
- `src/pages/` – `/`, `/leistungen`, `/vorgehen`, `/unternehmen`, `/kontakt`, `/impressum`, `/datenschutz`, `404`
- `src/assets/hw-digital-solutions.png` – H&W-Logo (aus der Angebotsvorlage); daraus `public/favicon.ico` (16/32/48, PNG-Einträge), `favicon-512.png` und `apple-touch-icon.png` per `_debug/favicon.cjs`: Marke weiß auf `--ink`, abgerundetes Quadrat
- `src/assets/hero.webp` – Hero-Hintergrund (generiert mit Higgsfield, GPT Image 2.5 plus 4K-Upscale, 2560 × 1440), wird beim Build in drei Breiten ausgeliefert; `public/images/og.jpg` daraus abgeleitet (1200 × 630 mit Headline und Claim, per Playwright gerendert)

## Deployment (Vercel)

Vercel-Projekt **`hw-digitalsolutions`** im Team `hw-consultry`, git-verknüpft mit diesem Repository, **Root Directory `hw-site`**. Framework Astro (`vercel.json` liegt bei), Build `pnpm build`, Output `dist`.

- Production-Branch: `main` → Domain `hw-digitalsolutions.de` (im Projekt hinterlegen, sobald die Site auf `main` liegt; `site` in `astro.config.mjs` ist bereits gesetzt).
- Jeder Push auf einen anderen Branch erzeugt ein Preview-Deployment, z. B. `hw-digitalsolutions-git-dev-6mrrvl-hw-consultry.vercel.app` für `dev-6mrrvl`.

## Offen

- Hero-Eyebrow ist aus dem abgeschnittenen Handover-Abschnitt 7 rekonstruiert (`content.ts`, als PROVISORISCH markiert).
- Datenschutzerklärung vor Livegang juristisch prüfen; sie beschreibt den aktuellen Umfang (statisch, keine Cookies, kein Tracking, selbst gehostete Schriften).
