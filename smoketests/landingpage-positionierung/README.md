# Consultry Smoke-Test Landing Pages

Fünf Landingpages, eine je Positionierung, gebaut mit React 19, Tailwind 4 und Vite 7.
Jede Seite testet dieselbe Frage: Welche Positionierung bringt IT-/SAP-Beratungen auf die Warteliste?

| Route | Variante | Hero-Objekt (`public/hero/`) | Produktfläche in „So funktioniert es“ (eine Geste) |
|---|---|---|---|
| `/firmengedaechtnis` | Firmengedächtnis (Company Brain) | Wissensgraph aus Terracotta-Kugeln | Eine Frage, Umschalter „1. März 2026 / heute“, Antwort mit Quelle und Status |
| `/korpus` | Korpus und Abgleich | Vierstufige Treppe | Vertikale Seed-Treppe Stufe 0–3, eine Stufe offen |
| `/corporate-alignment` | Marke und Corporate Design | Drei überlappende Glaslinsen | Perspektive wechseln: Wissen, Marke und CD, Governance |
| `/agenten-ledger` | Agenten und Ledger (Beleg und gemeinsamer Stand) | Kette aus sechs Blöcken | Eintrag aufklappen: Konsolidierung ohne falschen Konsens, Entscheidung als gemeinsamer Stand, belegte Aussagen |
| `/zugriff` | Zugriff und Harness | Ring mit Schlüsselloch | Wer fragt: Partnerin, Consultant, Agent; gefilterte Quellen |

Stand v2 (13.09.2026): Der Hero trägt Claim, CTA und das Markenobjekt, keinen UI-Mock. Die Produktfläche mit genau einer Geste liegt in
„So funktioniert es“. Ausgangsstand v1 unter `screenshots/v1-before/`, aktueller Stand unter `screenshots/v2-after/`.

## Starten

```bash
npm install
npm run dev        # http://localhost:5173 – Waitlist-Endpunkt wird lokal gemockt
npm test           # 22 Unit-Tests (Domänenlogik der Widgets)
npm run build      # tsc --noEmit && vite build → dist/
npm run preview    # dist/ lokal ansehen
```

`dist/` liegt vorgebaut bei und kann auf jedem statischen Host liegen, der alle Pfade auf `index.html` umschreibt
(Vercel, Netlify, Cloudflare Pages, S3+CloudFront mit SPA-Fallback).

## Smoke-Test-Mechanik

- **Attribution:** Der Seitenpfad ist der Schlüssel. Die Warteliste postet an `POST /api/waitlist/signup`
  (Vertrag der bestehenden `marketing-site`: `email`, `newsletterConsent`, `signupPageUrl`, `utm*`, `countryDomain`).
  `signupPageUrl` enthält den Variantenpfad, Loops kann damit ohne neues Feld auswerten.
- **Events:** `page_view`, `cta_click {location}`, `widget_interact {action}`, `waitlist_submit {ok}` landen in
  `window.dataLayer`. Mit `VITE_TRACK_ENDPOINT` zusätzlich cookieless per `sendBeacon`. Keine IDs, kein Fingerprinting.
- **v2-Messung:** Das interaktive Widget liegt in „So funktioniert es“, nicht mehr im Hero. `widget_interact` sinkt dadurch
  erwartungsgemäß; Erfolgsmaß bleibt `waitlist_submit` je Variante, ergänzt um `scroll_depth` 25/50/75 und `cta_click` je
  `location` (`hero`, `hero_secondary`, `nav`, `how`, `band`). LinkedIn-Creatives müssen H1 und Lede der v2 wörtlich übernehmen
  (Korpus-H1 und alle fünf Ledes wurden gekürzt).
- **Review-Modus:** In `vite dev` oder mit `?review=1` erscheint unten links ein Varianten-Umschalter. Produktiv ohne
  Parameter unsichtbar, damit Varianten nicht aufeinander verlinken.
- **`?utm_*`** wird durchgereicht.

## Aufbau

```
src/
  styles/tokens.css     Consultry Marketing-Palette als Tailwind-v4-Theme (v2: dunkler Hero mit Glow, Gradient nur CTA/Logo/Trenner)
  lib/                  track.ts, waitlist.ts, variants.ts
  domain/               reine Logik je Widget, mit Tests (assertions, corpus, alignment, ledger, access); unverändert seit v1
  content/              deutsche Texte je Variante; shared.ts hält die belegten Zahlen, Eyebrow und Trust-Zeilen
  components/           Shell: Nav, Hero, Section, Evidence, Steps, Boundaries, DataPaths, CtaBand, WaitlistForm, Footer, Chip
  widgets/static/       format.ts (Datums-/Antwort-/Zahlenformat für die Widgets)
  widgets/              die fünf Ein-Gesten-Widgets für „So funktioniert es“
  scripts/prerender.mjs baut die fünf Routen nach `vite build` als HTML mit Font-/Bild-Preload (dist/<route>/index.html)
  public/hero/          fünf Markenobjekte als AVIF/WebP/PNG in 720 und 480 px
  pages/SmokePage.tsx   eine Seite = Inhalt + Widget; Flächen: Hero dunkel → hell → warm → dunkel → hell → Band dunkel
  app.tsx               Routen
```

Die Komponenten sind framework-neutrales React und lassen sich als Routen in `marketing-site/src/app/` übernehmen;
nur `vite.config.ts` (Dev-Mock) und `main.tsx` sind Vite-spezifisch.

## Bewusste Entscheidungen

- v2 (13.09.2026): Hero = Eyebrow, H1 (≤ 7 Wörter), Lede (≤ 16 Wörter), ein Gradient-CTA, ein Textlink und ein generiertes Markenobjekt
  (GPT Image 2.5 via Higgsfield, transparent, AVIF/WebP ≤ 30 KB). Kein UI-Mock im Hero. Produktfläche nur in „So funktioniert es“, eine Geste je Widget.
  Zwei belegte Zahlen je Seite statt drei; die interne 10-h-Annahme wird nicht mehr gerendert. Sektion „Für wen“ zur Qualifier-Zeile im Band.
- Trust-Fakten als Spaltenleiste unter dem Hero: Mono-Index und Label in Amber, der Fakt in 17 px, eine Zeile Detail, Hairline-Trenner
  (Mobbin-Referenzen: Linear, Popcorn). Badges und Fußzeile wurden verworfen. Die Hero-Komposition (Claim links, freies Markenobjekt rechts)
  folgt Mistral AI, ClickUp und Retool.
- Produktfläche in „So funktioniert es“: ein App-Fenster in der Grammatik des implementierten App-Design-Systems (dunkle Shell mit Icon-Navigation
  und Zählern, Kopfzeile mit Eyebrow und Titel, kompakte Zeilen mit umrandeten Status-Badges, Segmented Controls und Stepper, rechts das
  „Datenweg“-Panel mit den Betriebsgrundsätzen, unten eine Fokus-Aktion). Vorlage sind die Screens des Click-Dummys (`Consultry APP UI Mockups`,
  `_ds/…/tokens/dark.css`), Mobbin-Referenzen für Zeilen und Badges: Linear, Vercel, ClickUp. Eine Zeile je Fakt, Badges statt Sätze.
- Scripted Ablauf: Beim Erreichen des Viewports spielt jedes Widget seine eine Geste einmal durch (`src/lib/useAutoplay.ts`); ein Klick übernimmt
  die Kontrolle, `widget_interact` feuert nur bei echten Klicks, reduced-motion deaktiviert den Ablauf.
- Bewegtbild nur unter der Falz: Hinter dem Fenster läuft der Consultry-Hero-Film (`public/bg/shell-loop.{webm,mp4}`, ≈220 KB, stumm) erst bei
  Sichtbarkeit; je Variante ein Kurzfilm aus dem Markenobjekt (Seedance 2.5 via Higgsfield, 5 s, ohne Ton, `public/film/*`, 50–190 KB) als ambient
  Hintergrund der Betriebswege-Sektion (kein Player, keine Controls; Quelle wird erst nahe dem Viewport gesetzt, Poster bei reduced-motion). Die Betriebswege-Karten tragen drei kleine generierte Objekte
  (`public/hero/path-*`, 2–6 KB).
- Handy-Test: `npm run preview -- --host` stellt den Build im LAN bereit (Wartelisten-Mock antwortet auch im Preview); `ngrok http 4173`
  öffnet einen öffentlichen Tunnel.
- Wording v2.1 (13.09.): einfacher und marketingtauglich. Eyebrow „Der KI-Arbeitskern für wissensintensive Unternehmen“; Beratungen stehen als
  erster Fokus im Band, nicht als Marktgrenze. Je Konzept eine generierte Abbildung (`public/hero/step-*`) und ein Satz; darunter drei KPI-Kacheln,
  deren Werte strukturelle Regeln („Regel“) oder benannte Ziele („Ziel“) sind. Fachbegriffe wie Korpus, Egress, Harness oder Provenienz sind aus
  den Seiten heraus, sie bleiben in Domain-Logik und Kontext-Extrakt.
- Performance-Budget: keine 3D-Laufzeit, keine Loops, keine Einblend-Animationen; Lighthouse Desktop 100/93/96 (Performance/A11y/Best Practices),
  LCP 0,4 s auf dem Build. Bild-Assets (falls generiert) als AVIF/WebP mit fester Größe, Hero-Bild mit `fetchpriority="high"`.

- Palette: Marketing DS (`#BF5347`), nicht das Deck-Magenta (`#AD2764`). Ein Token in `tokens.css`.
- Schriften selbst gehostet (`@fontsource-variable`), kein Google-Fonts-CDN.
- Widget-Inhalte sind illustrativ und als „Beispieldaten“ gekennzeichnet.
- Zahlen ausschließlich aus dem geprüften Deck-Bestand (`content/shared.ts`), Annahmen als solche benannt.
- Compliance-Sprachregelung aus dem Deep Report: dokumentierter Daten- und Modellweg, keine pauschale Konformitätszusage.

Kontext, Vokabular und Quellen, aus denen die Seiten entstanden sind: [CONTEXT-EXTRACT.md](CONTEXT-EXTRACT.md).

Stand v2.2 (13.09.2026): Der Ledger belegt nicht nur die Arbeit, er ist der vereinbarte Stand, den Agenten und Menschen teilen (Konsens ohne falschen Konsens, D-0913-09). Hero-Lede, Konzeptschritt 3, KPI-Kachel 2, Grenzen und Band der Variante `/agenten-ledger` sind entsprechend formuliert.
