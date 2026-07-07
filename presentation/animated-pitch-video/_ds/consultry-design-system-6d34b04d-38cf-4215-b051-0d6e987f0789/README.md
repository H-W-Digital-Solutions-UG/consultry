# Consultry Design System

> **Consultry — The Smart Consultancy Engine**
> The operative AI begleiter for IT and digitalisation consultancies in the DACH region.

This package is a self-contained recreation of Consultry's design language, distilled from the production marketing site, the canonical Figma library and the official design-system rules document. Use it to mock or build branded Consultry surfaces — marketing pages, decks, throwaway prototypes — without re-reading 30 components from the source repo.

---

## What is Consultry?

Consultry is a pre-launch, AI-native steering layer for IT consultancies with 30–200 consultants. It collapses what is today five-to-eight tools (CRM, staffing spreadsheet, proposal Word docs, knowledge wiki, delivery dashboard) into **one workplane** with four named layers:

| Layer        | What it does                                                          |
|--------------|-----------------------------------------------------------------------|
| **Signal**   | Detects buying moments in existing accounts and the open market.      |
| **Team**     | Suggests three staffing variants with margin, availability, history.  |
| **Angebot**  | Generates engagement briefs, CVs, references, pricing from context.   |
| **Wissen**   | Surfaces past methods/references at the moment they help in delivery. |

The product is **tenant-isolated, EU-hosted, DSGVO-by-design** — its commercial wedge is *"your data never trains a shared model"*.

Two product modes share a single token system:

- **App** — light-default, dense CRM tool. Buttons 8px radius; cards 10px. Workstation reading distance (14px body).
- **Marketing** — dark-default, cinematic public site. Buttons are **pill-shaped** (9999px); cards 12px; body is 18px for arm's-length reading.

**This design system models the Marketing mode** — that is what's in production, and the asset users (decks, landing pages, microsites) live there. App tokens are exposed under `--app-*` aliases for completeness.

---

## Sources used to build this system

- **Figma file (read-only)** — `Consultry_Homepage_CMS.fig`, ~96 frames covering tokens, typography, and 50+ marketing components.
- **GitHub repo** — [`H-W-Digital-Solutions-UG/consultry`](https://github.com/H-W-Digital-Solutions-UG/consultry). The production codebase. Explore for deeper component details.
- **Local codebase** — `consultry/marketing-site/` (Next.js 16 + Tailwind v4 + framer-motion + lucide-react). The source of truth for all component CSS.
- **Design rules** — `consultry/design/DESIGN_SYSTEM/Consultry-Figma-Design-System-Rules.md` (v1.0, 31 March 2026). Canonical token and component spec.
- **Logos** — `assets/logo/*.svg` (editable vector lockups, three versions × light/dark/transparent-dark) supplied by the user; PNG fallbacks from `consultry/design/logos/*.png` (gradient mark, favicon).
- **Brand slogan card** — `uploads/consultry_final_brand_slogan.png` + alt artboards.

> If you can browse those repos, prefer the production code over this folder for component-level fidelity. This system is the **fast cache**; the repo is **truth**.

---

## Index

| File / folder                  | What's inside                                                       |
|--------------------------------|----------------------------------------------------------------------|
| `colors_and_type.css`          | All CSS custom properties + semantic element styles (`h1`, `.eyebrow`, `.gradient-text`, …). Import this everywhere. |
| `fonts/fonts.css`              | Google Fonts import for Inter + JetBrains Mono.                      |
| `assets/`                      | Logos, hero dashboard renderings, team photos, step screenshots.     |
| `preview/`                     | Design-system review cards (one per concept). Don't import — these populate the Design System tab. |
| `ui_kits/marketing/`           | A working dark-mode marketing site recreation. Open `index.html`.    |
| `SKILL.md`                     | Agent-skill manifest so this folder can be dropped into Claude Code. |

---

## Content fundamentals

The marketing copy is **German, formal, evidence-led, and pre-launch-honest**. Every claim either cites a benchmark or labels itself a target.

**Voice and register**
- **Sie**, never du. Sentences are short, declarative, often two-clause: *"Drei Vorschläge in Minuten, nicht in Tagen."*
- Periods over commas — the deck reads like proof points, not prose.
- Self-corrects. Footnotes admit Consultry is in pre-launch: *"Werte sind Zielkorridore. Keine Versprechen."*
- Comparative, not superlative. The frame is always *"heute X, mit Consultry Y"*: "heute zwei bis vier Tage → drei Stunden zum Angebot".
- Anti-magic. The product principle is explicit: *"Kein One-Click-Magic, kein fertiges Ergebnis auf Knopfdruck. Sie verfeinern im Dialog, bis es passt."*

**Casing**
- Headlines: sentence case, period at end (*"Weniger Tools. Mehr Beratung."*). Two short sentences > one long one.
- Eyebrows: ALL CAPS, MONO, slight tracking (`0.12em`). Examples: `DER OPERATIVE AI-BEGLEITER FÜR BERATUNGEN`, `PLATTFORM`, `ERGEBNISSE`, `VERTIEFEN`.
- Step labels: bracketed mono numerals — `[01]`, `[02]`, `/02`.
- Buttons: sentence case ("Auf die Warteliste", "Produkt ansehen"). Never shouty.

**Vocabulary**
- The four product surfaces are always named: **Signal, Team, Angebot, Wissen**. Use these as section labels.
- "**AI-nativ**", not "AI-powered" or "KI-gestützt". The hyphenated form is canonical.
- "**Tenant-isoliert**", "**DSGVO in der Produktlogik**", "**EU-gehostet**", "**lokale Open-Source-Modelle**" — the four-word data-sovereignty phrasing used everywhere.
- "Berater" (not "Mitarbeiter" or "Consultants"). "Mandate" (not "Projekte" when discussing data ownership).
- Numbers are spelled out under ten in body copy but kept numeric in metrics ("3 Stunden", "80–90 %", "15 Sekunden").

**Tone — what we DON'T do**
- No emoji. Anywhere in marketing surfaces. (Emoji are reserved for app status indicators only.)
- No exclamation marks.
- No metaphors about "supercharging" or "revolutionising".
- No anglicisms when a clean German word exists. *Workflow* and *Pipeline* stay (industry vocab); everything else translates.

**Examples to reuse verbatim**
```
Eyebrow:  DER OPERATIVE AI-BEGLEITER FÜR BERATUNGEN
Headline: Weniger Tools. Mehr Beratung.
Body:     Ihre Datenhoheit bleibt in Europa. EU-gehostet, DSGVO in der
          Produktlogik, lokale Open-Source-Modelle für vertrauliche Daten.
CTA:      Auf die Warteliste
Trust:    Pre-Launch · Für IT-Beratungen 30–200 Berater · Pilotkunden willkommen
Footer:   DSGVO · EU-HOSTING
```

---

## Visual foundations

The marketing system has one clear identity: **a dark, warm-charcoal canvas with a single warm gradient as the only chromatic motif**. Nothing else competes for the eye. (Note the gradient comes in two flavours — see Colour vibe below.)

**Typography**
- Inter 400/500/600/700/800 for all UI and copy. JetBrains Mono 400/500/700 for eyebrows, step numerals, mono labels.
- **The logo wordmark is the exception**: "CONSULTRY" is set in **Satoshi Bold** and the "The Smart Consultancy Engine" tagline in **Switzer** — these live in the supplied logo SVGs (mostly outlined to paths) and are *not* used anywhere else in the system. Do not set body or headings in Satoshi/Switzer; reach for Inter.

**Surfaces**
- Page canvas is `#171311` (deeper than `#1e1b18`) painted with two stacked gradients: a radial warm-amber glow at the top and a vertical from `#1f140f` → `#1e1b18`. Never paint solid black; never paint pure white. The darkest dark is `#1e1b18`, the lightest light is `#ede8e2` (warm off-white).
- Sections stack as **dark → tonal-dark → CTA band → footer**. Within a section, cards lift on `#3a3632` with `border: 1px solid rgba(255,255,255,0.08)` and the section's signature `box-shadow: 0 16px 40px rgba(0,0,0,0.18)`. No light cards.

**Colour vibe**
- Warm-neutral. Every grey has yellow in it (`#3e3c3a`, not `#3a3a3a`). Every off-white has tan in it (`#ede8e2`, not `#f5f5f5`).
- **Two related gradients, used in different places — don't mix them up:**
  - **Identity gradient** (the logo mark): warm **orange → magenta/rose**, `#b64702 → #ea660d → #fcb75c` flowing into `#ad2764 → #d2397e → #ffa9ce`. This lives *only* in the faceted "C" logo mark. There is **no purple** in the identity.
  - **Web/product gradient** (every digital surface): **orange → coral → purple**, `linear-gradient(27deg, #e8913a 10%, #e8655a 25%, #9b59b6 60%)`. This is the workhorse — logo active-states in nav, the 3px scroller progress rail, the footer hairline, metric-card accents, gradient headline text. Production `tokens.css` confirms it.
  - Rule of thumb: if you're drawing the **logo**, use the identity gradient (it's baked into the supplied SVGs). For **everything else**, use `--consultry-brand-gradient`.
- The gradient is the only chromatic moment. It appears as: the logo mark, hero headline accents, the **3px progress rail** in the editorial scroller, the **2px hairline** at the top of the footer, occasionally in card left-borders or 1-px divider strokes. **Never** as a card background. **Never** as body text.
- Imagery is full-colour but **warm-graded** — orange-tinted glows, no cool blues, no greens except the success dot.

**Typography (detail)**
- Hero is `clamp(2.7rem, 8vw, 6.2rem)` Inter SemiBold (`600`) — note: SemiBold, **not** ExtraBold despite the doc rule, because the production hero uses 600. The tighter -0.058em tracking + 0.925 line-height gives the dense editorial feel.
- Section headlines use Inter Bold/SemiBold with -0.03em tracking and `text-wrap: balance` so they break naturally into 2–3 lines.
- Mono eyebrow is the single most recognisable typographic motif. Always `0.12em` tracking, always uppercase, always in `--consultry-brand-warm` (`#f0a85e`) on dark surfaces.

**Backgrounds & textures**
- **Grid overlay** — a faint 28–40px grid (`rgba(255,255,255,0.04)`) appears inside large dark cards, masked with a vertical linear gradient so it fades at the edges. Never on the page; only inside containers.
- **Radial glow** — every dark section has one. Top-anchored, warm amber/coral, `opacity: 0.18–0.80`, `blur(60–80px)`. They are decorative aurora, not light sources.
- **Dot-grid** — a much rarer 1px-on-22px-grid pattern inside step-visual mock screens. Used as illustration backdrop.
- No noise textures, no hand illustrations, no photography of people that isn't a team headshot.

**Animation & motion**
- Entry: **rise-in** — `translateY(24px) → 0` with `opacity 0 → 1` over `0.8s cubic-bezier(0.22, 1, 0.36, 1)`. Stagger children by `0.08s` for ≤5 children, then stop staggering.
- The hero CTA gets a one-off `hero-cta-pulse` — gentle scale 1 → 1.035 → 1 over 1.15s, fires 1 second after load. Never loops.
- Hover lifts buttons by `-2px translateY` with a slightly heavier shadow.
- Active/press: `translateY(1px)` and the shadow shortens (`5px 12px` blur).
- Scroll-triggered reveals on cards (one shot, `prefers-reduced-motion` collapses to instant).
- No parallax, no looping animation, no bounces, no spinners except a single-revolution loading dot.

**Borders, shadows, transparency**
- Borders are tonal, never high-contrast: `rgba(255,255,255,0.06)` soft / `rgba(255,255,255,0.16)` strong. Avoid solid `#444` style hairlines.
- The system has four shadows: `sm` (1px tight), `md` (4–16 ambient), `lg` (16–40 — default for cards), `hero` (20–60 — full-bleed showcases). Focus is its own `0 0 0 3px rgba(232,101,90,0.24)`.
- Glass surfaces (the nav, command-palette echoes) use `backdrop-filter: blur(14–18px)` over `rgba(30,27,24,0.18–0.72)`. The nav transitions from translucent → opaque on scroll.
- A **2-tone hairline** is the canonical divider: a 1px `rgba(255,255,255,0.08)` baseline with a 2px gradient bar above it (the same `--consultry-divider-gradient`). Used to separate the footer.

**Corner radii**
- Buttons (marketing): **pill** (`9999px`) — ALWAYS. The pill is the brand's tactile signature.
- Cards: **12px** default, **16px** for media containers, **24px** for hero-class screenshot frames and the nav shell.
- Status dots and avatars: full circle.

**Layout rules**
- Container max: 1200px content / 1440px for full hero. Page margin: `min(100% - 2rem, max)` so it never crowds the viewport.
- Sticky top nav (4.45rem tall, rounded pill on a transparent → glass background).
- Generous vertical rhythm: `clamp(4rem, 7vw, 7rem)` between sections. Hero is `min-h: 99.5svh`.
- The editorial scroller uses an asymmetric `[180px][text][visual]` 3-column at xl: rail of step labels left, sticky visual right, scrolling copy middle.

---

## Iconography

**Library: Lucide Icons.** This is the only icon set used across both products. We do **not** embed a Lucide sprite in this design system — at usage time, load it from CDN to avoid version drift:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
<!-- or, per-icon SVG -->
<i data-lucide="zap"></i>
```

For React: `import { Zap, Target, Sparkles, ArrowUpRight, ChevronsDown } from "lucide-react"`. The marketing repo pins `lucide-react@1.8.0`.

**Sizing & stroke**
- Default: 20×20, `stroke-width: 2`.
- Inline-with-body: 16×16, `stroke-width: 1.5`.
- Section / empty-state: 24×24, `stroke-width: 2`.
- Feature illustration: 32×32, `stroke-width: 2`.

Icons inherit `currentColor`. On dark surfaces the default tone is `--consultry-text-muted`; active/hover ramps to `--consultry-text-primary`. Inside the warm gradient family, use `--consultry-brand-warm` (`#f0a85e`).

**The icons you actually see across the product**
| Concept       | Lucide name      | Where                                 |
|---------------|------------------|---------------------------------------|
| Signal/alert  | `Zap`            | Buying-signal cards                   |
| Match score   | `Target`         | Staffing recommendations              |
| AI            | `Sparkles`       | All AI-generated content              |
| Warning       | `AlertTriangle`  | Status badges (always paired)         |
| DSGVO         | `ShieldCheck`    | Consent state indicators              |
| Pipeline      | `GitBranch`      | Opportunity nav                       |
| External link | `ArrowUpRight`   | All step CTAs, footer links           |
| Scroll cue    | `ChevronsDown`   | Editorial scroller anchors            |

**Emoji** — forbidden in marketing surfaces. Allowed in app status badges, empty states, and signal feed categories only. If a Lucide icon serves the same purpose, prefer the icon.

**Unicode characters as glyphs** — only `·` (middot, U+00B7) as a separator in trust lines: `Pre-Launch · Für IT-Beratungen · Pilotkunden willkommen`. `&times;` and `&check;` (`✓` / `✕`) appear in the comparison table only.

**SVG vs PNG** — Lucide ships SVG. The **logo lockups are now vector SVG** (`assets/logo/`) — fully scalable, with the orange→magenta identity gradient and the Satoshi/Switzer wordmark baked in (mostly outlined to paths). Team photos and the product UI dashboard renderings are PNG. No raster icons.

**Logo files** (`assets/logo/`) — three lockups, light + dark, plus transparent dark variants we generated by stripping the baked-in black artboard plate (use these on the warm-charcoal canvas):
| File | Contents |
|------|----------|
| `consultry-v1.svg` / `-dark.svg` / `-dark-transparent.svg` | Mark + CONSULTRY wordmark (no tagline) — compact, good for nav |
| `consultry-v2.svg` / `-dark.svg` / `-dark-transparent.svg` | Mark + wordmark + tagline (alt wordmark cut) |
| `consultry-v3.svg` / `-dark.svg` / `-dark-transparent.svg` | Mark + wordmark + tagline — **primary lockup**, fully outlined |
Prefer **v3** for hero/footer placements and **v1** where space is tight. The `*-dark.svg` originals keep their black plate (use on imagery); `*-dark-transparent.svg` are clean for dark surfaces. PNG wordmarks from the marketing repo remain in `assets/` as a fallback but the SVGs supersede them.

---

## Caveats and substitutions

- **Fonts are loaded from Google Fonts CDN** (Inter + JetBrains Mono). The production site self-hosts via `next/font`. Both families are SIL-OFL licensed so production reuse is fine. If you need the actual `.woff2` binaries vendored locally for offline work, let us know.
- **Hero weight discrepancy** — the design-system doc says Marketing hero is `ExtraBold (800)`. Production `page.tsx` ships it at `font-weight: 600` with very tight tracking. We followed production. Both options are exposed (`--mktg-display-hero-weight: 800`; the `.display-hero` rule uses 600). Tell us which is canonical and we'll align.
- **Background image library is thin.** The hero ships one PNG render of the product dashboard; nothing else. If you need product UI for a deck slide that isn't one of the four step screenshots, treat that as a content gap — ask the team for a fresh render rather than improvising.
- **App-mode (light) tokens are exposed** but **no app UI kit is built** here. Marketing is the only public surface today.
- **Logo wordmark is the slogan vector** *(resolved)* — the user supplied editable SVG lockups (`assets/logo/`), so the earlier "no editable wordmark" gap is closed. The wordmark/tagline are outlined to paths inside the SVGs; the Satoshi/Switzer fonts themselves are not vendored (only needed to typeset *new* text in those faces — both are free on Fontshare).
- **Two gradients, on purpose** — the logo uses an orange→magenta identity gradient; every digital surface uses the orange→coral→purple web gradient. This is not a mistake; see Visual foundations → Colour vibe. If the brand intends to unify them, flag it and we'll pick one.

---

## Working with this folder

For a quick mock or deck, this is the right call:

```html
<link rel="stylesheet" href="colors_and_type.css" />
<header><img src="assets/logo/consultry-v1-dark-transparent.svg" alt="Consultry" /></header>
<p class="eyebrow">DER OPERATIVE AI-BEGLEITER</p>
<h1 class="display-hero gradient-text-hero">Weniger Tools.<br>Mehr Beratung.</h1>
```

For production, prefer the [Consultry monorepo](https://github.com/H-W-Digital-Solutions-UG/consultry) — the components there already encode all hover/focus/responsive states correctly.
