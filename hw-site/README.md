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
- `src/pages/` – `/`, `/leistungen`, `/vorgehen`, `/unternehmen`, `/kontakt`, `/impressum`, `/datenschutz`, `404`
- `public/images/hero.webp` – Hero-Visual (generiert, Higgsfield); `og.jpg` daraus abgeleitet

## Deployment (Vercel)

Vercel-Projekt **`hw-digitalsolutions`** im Team `hw-consultry`, git-verknüpft mit diesem Repository, **Root Directory `hw-site`**. Framework Astro (`vercel.json` liegt bei), Build `pnpm build`, Output `dist`.

- Production-Branch: `main` → Domain `hw-digitalsolutions.de` (im Projekt hinterlegen, sobald die Site auf `main` liegt; `site` in `astro.config.mjs` ist bereits gesetzt).
- Jeder Push auf einen anderen Branch erzeugt ein Preview-Deployment, z. B. `hw-digitalsolutions-git-dev-6mrrvl-hw-consultry.vercel.app` für `dev-6mrrvl`.

## Offen

- Hero-Eyebrow ist aus dem abgeschnittenen Handover-Abschnitt 7 rekonstruiert (`content.ts`, als PROVISORISCH markiert).
- Datenschutzerklärung vor Livegang juristisch prüfen; sie beschreibt den aktuellen Umfang (statisch, keine Cookies, kein Tracking, Google Fonts).
