# Consultry Smoke-Test Landing Pages

Fünf Landingpages, eine je Positionierung, gebaut mit React 19.3+, Tailwind 4 und Vite 7.
Jede Seite testet dieselbe Frage: Welche Positionierung bringt IT-/SAP-Beratungen auf die Warteliste?

Aktueller Stand v12: zentrale Objektszene mit direktem Übergang ins Produktbeispiel, volumetrische Rekonstruktionen für eine kurze Bewegung beim nativen Scrollen
und ein direkter Anmeldefluss nach Promise, Prominence und Proof. Keine automatisch wechselnden Hero-Elemente,
keine Hintergrundvideos. Die UI-Mocks spielen ihren Beispielablauf einmal durch, wenn die eigentlichen
Bedienelemente und ersten Inhaltszeilen im Blick sind. Beim Ledger zählt der tatsächliche Ergebnisbereich als Fokuspunkt.
Der Mobbin-Abgleich hat den App-Rahmen gestrafft und die Ergebnis-Hierarchie verstärkt. Die älteren Versionsnotizen sind historisch.

## Mobbin-Abgleich v12

Aktuelle Referenzen: [Linear-Projektübersicht](https://mobbin.com/screens/43a3307a-6591-4ef2-95d8-197ea0720939),
[Legora-Produktinszenierung](https://mobbin.com/sites/sections/de997de8-3e43-4060-a258-2b2e10dea2ca) und
[Retool-Demo-Einstieg](https://mobbin.com/sites/sections/a36624ad-20ad-4f83-92e4-367c1a0cc7b7).
Der [Review mit aktuellen Aufnahmen](output/playwright/mobbin-audit/REVIEW.md) trennt sichtbare Befunde von weitergehenden Annahmen.

- Drei relevante Navigationspunkte; Suchattrappe, dekorative Zahlen und Personenprofil entfernt. Die Infospalte steht erst ab 1280px neben dem Ergebnis, die Navigation erst ab 1024px.
- Ein dezenter Zeitindikator, kleinerer Ablaufhinweis und mindestens 44px hohe Schritt-/Wiedergabeschaltflächen. Pause, manuelle Übernahme und Wiedergabe bleiben erhalten.
- Ledger: größere Ergebnisüberschriften, lesbare Quellen, mobile Versionszeilen und drei kurze Regeln. Konsens bleibt von Belegen und geschäftlicher Freigabe getrennt.
- Der Ledger beobachtet für den Wiedergabestart seinen stabilen Ergebnisbereich. Dadurch startet die Demo mobil erst, wenn ihr Inhalt im Blick ist.
- Keine neue Abhängigkeit und kein Eingriff in die 3D-Geometrie oder den Lazy-Load-Übergang.

Validierung: Build inklusive fünf vorgerenderter Routen und 22 Domain-Tests bestanden. Das 3D-Paket bleibt separat aufgeschoben.
30 Ledger-Zustandsprüfungen an fünf CSS-Viewportbreiten (319/390/768/1024/1440) zeigen je Breite eine stabile Demo-Höhe und keinen horizontalen Überlauf.
Zwölf zusätzliche Layoutprüfungen decken die übrigen vier Seiten bei 319/1024/1440 ab. Sichtbarkeitsstart, Abschluss des Ledger-Ablaufs und Tastaturübernahme wurden im Browser beobachtet.
Dies ersetzt keinen vollständigen Accessibility- oder Conversion-Test.

| Route | Variante | Hero-Objekt (`public/hero/`) | Produktfläche in „So funktioniert es“ (eine Geste) |
|---|---|---|---|
| `/firmengedaechtnis` | Firmengedächtnis (Company Brain) | Wissensgraph aus Terracotta-Kugeln | Eine Frage, Umschalter „1. März 2026 / heute“, Antwort mit Quelle und Status |
| `/korpus` | Korpus und Abgleich | Vierstufige Treppe | Vertikale Seed-Treppe Stufe 0–3, eine Stufe offen |
| `/corporate-alignment` | Marke und Corporate Design | Drei überlappende Glaslinsen | Perspektive wechseln: Wissen, Marke und CD, Governance |
| `/agenten-ledger` | Agenten und Wissensledger | Kette aus sechs Blöcken | Stand 07 → Beiträge und Gegenbeleg → Arbeitskonsens 08 → ältere Grundlage prüfen → berechtigte Folgeaufgabe |
| `/zugriff` | Zugriff und Harness | Ring mit Schlüsselloch | Wer fragt: Partnerin, Consultant, Agent; gefilterte Quellen |

Stand v2 (13.09.2026): Der Hero trägt Claim, CTA und das Markenobjekt, keinen UI-Mock. Die Produktfläche mit genau einer Geste liegt in
„So funktioniert es“. Ausgangsstand v1 unter `screenshots/v1-before/`, damaliger Stand unter `screenshots/v2-after/`. Die aktuellen Ansichten liegen unter `output/playwright/v5/`.

## Starten

```bash
npm install
npm run dev        # http://localhost:5173 – Waitlist-Endpunkt wird lokal gemockt
npm test           # 22 Unit-Tests (Domänenlogik der Widgets)
npm run build      # tsc --noEmit && vite build → dist/
npm run check:3d   # nach build: initiale Imports, SSR-Poster und Budget des optionalen 3D-Pakets
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
- Historische v2-Performance vor der 3D-Erweiterung: Lighthouse Desktop 100/93/96 (Performance/A11y/Best Practices),
  LCP 0,4 s. Diese Messwerte sind keine Messung des aktuellen v3-Builds. Bild-Assets als AVIF/WebP mit fester Größe,
  Hero-Bild mit `fetchpriority="high"`.

- Palette: Marketing DS (`#BF5347`), nicht das Deck-Magenta (`#AD2764`). Ein Token in `tokens.css`.
- Schriften selbst gehostet (`@fontsource-variable`), kein Google-Fonts-CDN.
- Widget-Inhalte sind illustrativ und als „Beispieldaten“ gekennzeichnet.
- Zahlen ausschließlich aus dem geprüften Deck-Bestand (`content/shared.ts`), Annahmen als solche benannt.
- Compliance-Sprachregelung aus dem Deep Report: dokumentierter Daten- und Modellweg, keine pauschale Konformitätszusage.

Kontext, Vokabular und Quellen, aus denen die Seiten entstanden sind: [CONTEXT-EXTRACT.md](CONTEXT-EXTRACT.md).

Stand v2.2 (13.09.2026): Der Ledger belegt nicht nur die Arbeit, er ist der vereinbarte Stand, den Agenten und Menschen teilen (Konsens ohne falschen Konsens, D-0913-09). Hero-Lede, Konzeptschritt 3, KPI-Kachel 2, Grenzen und Band der Variante `/agenten-ledger` sind entsprechend formuliert.

Stand v2.3 (13.09.2026): Das Ledger-Objekt im Hero trägt sechs Hotspots (ein Block je Ledger-Eintrag, `ObjectHotspots.tsx`, Koordinaten aus der Alphamaske in `widgets/ledgerHotspots.ts`). Neben dem Objekt steht eine persistente Eintragsleiste (sechs Einträge als Mono-Index und Kurztitel auf einer Haarlinie, aktueller Eintrag warm; Desktop oben rechts in der leeren Bildfläche, Mobil zweispaltig unterhalb). Block und Leiste sind verknüpft: Hover oder Fokus auf einem von beiden hebt beide hervor, Klick springt in die Produktfläche auf denselben Eintrag (`lib/surfaceBus.ts`) und setzt den Fokus dorthin; auf Touch erste Berührung eines Blocks Vorschau, zweite Sprung, Leisteneintrag springt sofort. Nach dem Laden wandert die Hervorhebung automatisch durch die sechs Einträge (0,9 s Start, 1,8 s je Schritt, Schleife), solange das Objekt zu 40 % sichtbar ist und niemand eingreift; Hover, Fokus oder Berührung beenden den Durchlauf endgültig, `prefers-reduced-motion` schaltet ihn ab. Nichts liegt über dem Objekt, nichts erscheint oder verschwindet, D-0913-10. Tracking: `widget_interact hero_object:<schritt>` (Sprung, aus Block oder Karten-Link) und `hero_object_preview:<schritt>` (nur erste Berührung auf Touch); Hover allein wird nicht gezählt. Für Vergleiche der Widget-Nutzung über Varianten hinweg das Präfix `hero_object` ausklammern, nur die Ledger-Variante hat Hotspots. Tastatur: Aktivieren springt und setzt den Fokus auf den gewählten Eintrag der Produktfläche; Escape hebt die Auswahl auf. Nebenbefund derselben Prüfung: Das Warteliste-Band bleibt bis unter 1024px einspaltig und die Formularzeile bricht um, vorher ragte der Submit-Button auf 768 bis 900px über den Viewport.

Stand v2.4 (13.09.2026): Der KPI-Strip unter den Konzepten ist auf allen Seiten gestrichen (`Kpis.tsx` und die `kpis`-Arrays der Inhalte entfernt, D-0913-11); die Konzepte stehen mit Illustration, Titel und einem Satz für sich. Der Hero-Hinweis ist eine persistente Eintragsleiste statt Karte oder Popup.

## v6: Zusammenhängender Einstieg mit kurzer 3D-Bewegung

Die Hero-Komposition verbindet das zentrale Objekt mit dem Nutzenversprechen, seitlichem Kontext und
Anmeldung. Feine Linien, räumlicher Boden und eine kurze Bewegung der Einzelkörper verbinden die Ebenen. Die Szene geht
direkt in das Produktbeispiel auf derselben dunklen Fläche über; Studien und Betriebsdetails folgen danach
auf ruhigen Papierflächen. Die frühere Eintragsleiste sowie deren
Autoplay, Vorschau- und Replay-Steuerung sind entfernt. In v6 wechselten auch die Produktbeispiele ihre Schritte nur
nach einer bewussten Auswahl; v10 ergänzt dort den einmaligen Beispielablauf. Hintergrundvideos werden nicht mehr eingebunden. Auf den drei 3D-Seiten
stehen jetzt passende Standbilder derselben Szene als WebP-Poster; die Originalbilder bleiben als Referenzen erhalten.

**Promise:** Nutzenversprechen und die konkrete Erwartung an die Anmeldung: eine E-Mail zur nächsten Erprobungsrunde.
**Prominence:** Heller Hero-CTA, kontextabhängiger Navigationsbutton und deutlich abgesetztes Formular mit einem
E-Mail-Feld. Anker und Tastaturfokus führen direkt zum Formular; längere Sprünge vermeiden eine lange Scrollfahrt. **Proof:** „Bereits 100 Einträge auf der Warteliste“,
am 13.09.2026 ausdrücklich als echte Einträge bestätigt, direkt neben der Aktion und mit Datum im Formular.
Die Zahl bezeichnet ausschließlich Wartelisten-Einträge und wird im lokalen Mock nicht künstlich hochgezählt.
Studien begründen die Problemstellung; die Produktflächen tragen die Kennzeichnung „Beispieldaten“.

### Rekonstruktion und Bewegung

Die drei gelieferten MP4s und die vorhandenen transparenten Renderings dienen als Referenz für vier gestaffelte
Korpusplatten, drei dicke optische Scheiben und sechs abgerundete Terracotta-Blöcke mit kurzen bernsteinfarbenen
Verbindern. Die optionale Three.js-Ebene verwendet jetzt separate volumetrische Körper in `models.ts`.
Es handelt sich um **visuelle Rekonstruktionen**, nicht um die Original-3D-Dateien der Higgsfield-Renderings.
Formen, Materialien und Licht sind angenähert; vollständige Bildgleichheit wird nicht behauptet.

- Die verlustfreien transparenten Szenen-Poster `public/hero/{variant}-scene-{480,720}.webp` stehen bereits im
  vorgerenderten HTML und legen die Größe vor dem Laden fest. Sie stammen aus derselben Rekonstruktion wie der
  Renderer und vermeiden den fehlerhaften Übergang vom Originalbild zu einem anders aussehenden Modell.
  Ein erfolgreich gerenderter 3D-Frame ersetzt das Poster nur bei übereinstimmender Start- oder Endpose; es gibt keine Überblendung. Die 720-px-Dateien
  umfassen 90.426 Byte für Korpus, 71.768 Byte für Alignment und 61.284 Byte für Ledger. Originalbilder unverändert erhalten.
- Three.js lädt ausschließlich dynamisch nach `window.load`, dekodiertem und gezeichnetem Poster in einem Idle-Fenster,
  sofern die Szene in der Nähe des Viewports liegt. Die feste Verzögerung von 1.200 ms entfällt. Material-Shader
  werden vor dem ersten sichtbaren Frame vorbereitet. Ist die Seite währenddessen bereits halb gescrollt,
  bleibt die laufende Passage beim Poster bis zur nächsten Start- oder Endpose; es gibt keine Aufholanimation.
  Die HTML-Argumente erscheinen unabhängig davon. Unveränderte Größen lösen keinen Canvas-Reset mehr aus;
  ein nötiger Reset und das Neuzeichnen erfolgen im selben Render-Aufruf.
- Data Saver, 2G und `prefers-reduced-motion` bleiben beim statischen Poster. Ladefehler, fehlendes WebGL
  und Kontextverlust lassen die Bildansicht bestehen. Die Anmeldung hängt nicht von WebGL ab.
- Die kurze Bewegung startet, sobald die Objektmitte die Linie bei 76 % der Viewporthöhe erreicht und der
  zugehörige Scrollbereich begonnen hat. Sie läuft über 420–560 px nativen Scrollweg
  (`clamp(420, Viewporthöhe × 0.58, 560)`): vollständige Anordnung,
  deutliche räumliche Öffnung, wieder vollständige Anordnung. Danach bleibt das Modell stehen. Kamera und
  Grundorientierung bleiben fest. Die äußere Objektebene wird beim Scrollen etwas mitgeführt, damit die
  Bewegung länger im Blick bleibt. Auf großen Desktop-Ansichten ist die Bühne 1120 px hoch; mobil stehen
  dem Objekt 460 px zur Verfügung. Die Verschiebung folgt `--scene-progress` statt der Gesamthöhe des Heros,
  sodass zusätzliche mobile Erklärungstexte den Ablauf nicht verändern. Die Fortschrittsmessung verwendet
  Layoutkoordinaten ohne diese visuelle Verschiebung.
  Kein Drehen, Scroll-Hijacking, Pinning oder zusätzlicher Scroll-Spacer. Die unteren Abschnitte sind statisch.
- Physical-/Standard-Materialien, eine kleine prozedurale Oberflächentextur und eine lokal berechnete
  Studio-Umgebung mit 128 px Auflösung geben den Körpern räumliches Licht. Der Glas-Pass läuft mit halber
  Auflösung; mehrere Körper und Glas benötigen mehrere Zeichenoperationen. Keine zusätzlichen Medien- oder Modelldownloads.
- Maximal 30 Frames/s während Änderungen; **kein Renderloop im Stillstand**. DPR maximal 1,5;
  längste Canvas-Seite maximal 720 physische Pixel. Unsichtbare Szenen und Hintergrund-Tabs pausieren.
  Ressourcen und Listener werden beim Variantenwechsel beziehungsweise Unmount freigegeben.
- Das Three.js-Paket bleibt außerhalb des initialen Importgraphen. `npm run check:3d` prüft das Paketbudget,
  Importgrenzen, SSR-Poster und fehlende Runtime-Preloads. Aktueller optionaler Payload: **133,3 KiB gzip** bei einem Budget von 145 KiB.
- Keine zusätzlichen Motion-, Postprocessing- oder Steuerungsbibliotheken. React 19.3+ Einbindung:
  [SmokeObject-Dokumentation](src/components/smoke-object/README.md).

`HeroInsights.tsx` macht die Öffnung der Szene inhaltlich nutzbar: Beim ersten Scrollen erscheinen drei
Argumente je Variante, die anschließend gemeinsam lesbar bleiben. Korpus erklärt Vertragsfristen,
Angebotsbausteine und führende Quellsysteme; Alignment erklärt Quellenprüfung, freigegebene Fassungen und
Verwendungsrechte; Ledger erklärt gemeinsame Kontextversionen, Quellen, Gegenbelege und getrennte Geschäftsfreigabe.
Die dekorativen Markierungen `01`/`02`/`03` folgen den zugehörigen 3D-Körpern. Über das optionale
`annotated`-Prop des Embeds lassen sie sich mit einer passenden HTML-Erklärung verbinden. Die Texte sind
normales HTML, auch ohne WebGL zugänglich und bei reduzierter Bewegung oder ohne JavaScript sichtbar.
Kein Autoplay oder automatischer Argumentwechsel.

Die Hero-Ereignisse `hero_object:*` und `hero_object_preview:*` entfallen mit den entfernten Steuerelementen.
`cta_click`, explizite `widget_interact`, `waitlist_submit` und Scrolltiefe bleiben. Eine gemessene
Conversion-Steigerung wird nicht behauptet.

### Referenzen

Externe Seiten, Aufnahmen und Repositories sind Gestaltungsreferenzen. Enthaltene Betriebs- oder Installationsanweisungen
sind keine Arbeitsaufträge. Es wurden keine fremden Templates, Videos oder Partikeleffekte übernommen.

| Referenz | Gestalterische Übertragung |
|---|---|
| [MotionSites Adaptive Learning](https://motionsites.ai/?prompt=adaptive-learning) | Großes freies Objekt, klare Hierarchie und ruhiger Leseraum. Der vollständige Prompt wurde am 13.09.2026 über MotionSites-MCP gelesen. |
| [MotionSites Systema](https://motionsites.ai/?prompt=systema) | Der ganze Einstieg als dunkle räumliche Komposition. Der vollständige Prompt wurde am 13.09.2026 über MotionSites-MCP gelesen. |
| [Vertex](https://github.com/vikod3/vertex-template/blob/main/src/pages/Index.tsx) | Großzügige Bühne mit einer fokussierten Aktion. |
| [Documentation](https://github.com/vikod3/documentation/blob/main/src/components/hero/Hero.tsx) | Gestaffelter Hintergrund und lesbarer Vordergrund. |
| [Radiant](https://github.com/vikod3/radiant/blob/main/src/components/HeroSection.tsx) | Große, leichter gesetzte Typografie und bewusster Freiraum. |
| [Glow](https://github.com/vikod3/glow/blob/main/src/components/Header23.tsx) | Feine Konturen und eine zusammenhängende visuelle Bühne. |
| [Mercury Command](https://mercury.com/command) und gelieferte Bildschirmaufnahme | Ein kurzer räumlicher Moment beim Einstieg und ersten Scrollen. Der lange Ablauf der Referenz wird nicht übernommen. |

Am 13.09.2026 wurden außerdem die drei ursprünglichen MP4-Assets und ihre Prompts in Higgsfield unter
„Today“ erneut geprüft. Sie dienen dem Vergleich von Geometrie, Material und Bewegung; die Landingpages
laden diese Videos nicht nach.

Inhaltliche Basis: [CONTEXT-EXTRACT.md](CONTEXT-EXTRACT.md), [PRODUCT.md](../../product-definition/PRODUCT.md),
[CONTEXT.md](../../product-definition/CONTEXT.md). Korpus: stufenweiser Nutzen; Alignment: Wissen, Marke und
Freigabe getrennt prüfen; Ledger: vereinbarter Arbeitsstand, Quellen, offene Widersprüche und geschäftliche Verantwortung.

### v11 — Gemeinsames Wissen und Arbeitskonsens

Die Ledger-Positionierung wurde anhand der Originalaufgabe „Wissensledger integrieren“ und der
[ausgewerteten Sessionbelege L2–L5](../../product-definition/archive/session-2026-09-05-wissensledger/INSIGHTS.md)
erneut ausgerichtet. Maßgeblich sind außerdem [PRODUCT](../../product-definition/PRODUCT.md#gemeinsames-wissen-und-gemeinsame-arbeit)
und die [Begriffsgrenzen in CONTEXT](../../product-definition/CONTEXT.md#wissens--und-arbeitszusammenhänge).

Hero: „Viele Agenten. Ein gemeinsamer Stand.“ Der Mock zeigt vier Beispielperspektiven auf Stand 07,
drei korrelierte Beiträge mit einer Quelle, einen Gegenbeleg und einen eingeschränkten Arbeitskonsens
auf Stand 08. Geschäftsfreigabe und offene Frage bleiben davon getrennt. Ein früherer Lauf behält 07
und wird zum Abgleich markiert; eine nächste berechtigte Aufgabe setzt auf 08 fort. Ein Lernmuster
ist nur zur Wiederverwendung vorgeschlagen. Die Seitenleiste erklärt Wissen und Verantwortung.

`sourceCount` zählt unterschiedliche Quellenkennungen, keine nachgewiesene Unabhängigkeit. Der
Ablauf ist ein inszeniertes Produktbeispiel; Annahmeregel, Blockchain, DID oder Konsensprotokoll werden
dadurch nicht als implementiert oder ausgewählt behauptet. Keine globale Sichtfreigabe durch lokale
Einigung, kein automatisches Modelltraining. Hero-Geometrie, Lazy Load und der gemeinsame Demo-Controller
bleiben erhalten; hinzu kommen nur HTML/CSS und Beispieldaten.

Produktionsbuild, 22 Domänentests und 3D-Budget bestehen. Die v11-Prüfung umfasst
[45 Layout-/Inhaltsprüfungen](output/playwright/v11/ledger.json) auf 319/390/768/1024/1440 px und
[17 Ablaufprüfungen](output/playwright/v11/playback.json) auf Desktop und Mobil: passende Version je
Schritt, stabile Höhe, einmaliger Ablauf, manuelle Übernahme und keine künstlichen Klick-Events.
Screenshots: `output/playwright/v11/`. Die Prüfung betrifft das lokale Produktbeispiel, keinen Ledger-Backend-Proof.

### v10 — UI-Mocks mit sichtbarem Beispielablauf

Die fünf Mocks führen die realen Beispielzustände der Reihe nach vor: Korpus-Stufen, Prüfperspektiven,
Ledger vom Kontext bis zum Ergebnis, zeitliche Gültigkeit und rollenabhängiger Zugriff. Pro Schritt
bleiben 4–6 Sekunden zum Lesen. Eine kurze Nutzenaussage, hervorgehobene Auswahl und segmentierter
Fortschritt machen den Wechsel sichtbar; Pause, Fortsetzen und Wiederholen bleiben direkt erreichbar.

Der Start erfolgt nach 450 ms anhaltender Sichtbarkeit der Bedienelemente und ersten Inhaltszeilen.
Wegscrollen oder ein verborgenes Browserdokument pausieren den einzelnen Timer mit seiner Restzeit.
Der letzte Zustand bleibt stehen. Klick, Berührung oder Tastaturfokus in den fachlichen Bedienelementen
übernehmen dauerhaft; automatische Wechsel erzeugen keine `widget_interact`-Events. Bei reduzierter
Bewegung startet nichts automatisch, explizites Abspielen bleibt ohne Übergangsanimation möglich.
Unsichtbare Beispielzustände reservieren im selben CSS-Grid die größte benötigte Höhe und sind per
`inert` und `aria-hidden` aus Bedienung und Accessibility-Baum genommen. Keine neuen Abhängigkeiten.

Produktionsbuild, 22 Domänentests und das unveränderte 3D-Import-/Größenbudget bestehen.
109 gezielte Chromium-Prüfungen bestehen: [44 Ablaufprüfungen](output/playwright/v10/flows.json),
[9 Bedienprüfungen](output/playwright/v10/controls.json),
[51 Layoutprüfungen auf 319/390/768/1024/1440 px](output/playwright/v10/layout.json) und
[5 Fokus-/Lebenszyklusprüfungen](output/playwright/v10/focus.json). Screenshots liegen unter
`output/playwright/v10/`. Die Sichtbarkeitsänderung des Dokuments wurde im Browser simuliert.

### Verifikation v9 — reduzierte Hero-Texte

Die kleine Zwischenüberschrift und die erläuternden Absätze neben den 3D-Objekten entfallen. Stattdessen
stehen eine kurze Kernaussage (28–32 px) und drei kurze Argumente (22–24 px) neben der Szene. Korpus und
Alignment enthalten dort je 14 Wörter, Ledger 15, ohne die dekorativen Nummern. Die beiden statischen
Varianten verwenden ebenfalls gekürzte Hero-Texte. Die ausführlichen Produktabschnitte sind unverändert.

Produktionsbuild und [58 gezielte Browserprüfungen](output/playwright/v9/hero.json) bestanden: fünf Routen
auf 319/390/768/1024/1440 px, größere Schrift, keine überlaufenden Textzeilen, Abstand zum Hero-Fußbereich,
Argumente weiterhin am Scrollfortschritt sichtbar sowie lesbar bei reduzierter Bewegung. Vorschauen unter
`output/playwright/v9/`. Modell, Lazy-Load-Übergabe und Scrollstrecke sind unverändert.

### Verifikation v8 — Betriebswege

Der gemeinsame Betriebsabschnitt ist in allen fünf Smoke-Pages neu angeordnet: links die Aussage zur
Datenhoheit, rechts drei gleichwertige Alternativen mit den vorhandenen statischen Brand-Icons.
Vertrags- und Schlüsselhinweise stehen gesondert; BYOK bleibt dem EU-Weg zugeordnet und die dedizierte
Instanz als Angebot auf Nachfrage gekennzeichnet. Unter 900 px stehen Einleitung, Betriebswege und Hinweise
in dieser Reihenfolge untereinander. Es gibt keine zusätzlichen Abhängigkeiten, Canvas-Flächen oder Animationen.

Produktionsbuild und [20 gezielte Browserprüfungen](output/playwright/v8/paths.json) bestanden:
keine überlappenden Spalten oder horizontales Überlaufen bei 319/390/768/1024/1440 px, alle drei bestehenden
Bilder dekodiert und lazy geladen, wichtige Einschränkungen sichtbar, gemeinsamer Abschnitt auf allen fünf
Routen und keine Browserfehler. Screenshots: `output/playwright/v8/paths-{breite}.png`.

### Verifikation v7 — Ladeübergabe

Produktionsbuild und Import-/Paketbudget sind bestanden (133,3 KiB gzip, weiterhin separat geladen).
74 gezielte Browserprüfungen sind bestanden:

- [53 Lade- und Lebenszyklusprüfungen](output/playwright/v7/handoff.json): verzögerter Download bei halbem Scrollfortschritt auf 319 × 592 px (DPR 2,8) und 1440 × 1100 px, alle drei Szenen; Poster bleibt sichtbar, vorbereiteter Canvas bleibt ruhig, HTML-Argumente erscheinen, Übergabe an beiden identischen Endpunkten, anschließendes Vorwärts-/Rückwärtsscrollen und keine redundanten Canvas-Größenänderungen. Normales Laden beginnt nach dem initialen Load-Ereignis ohne feste 1,2-s-Pause.
- [6 normale Ladewechsel](output/playwright/v7/rest.json) mit [Bildvergleich](output/playwright/v7/rest-pixels.json): keine Formänderung bei der Übergabe in Ruhe. Mobile Kantenglättung unterscheidet sich wegen des begrenzten Canvas-DPR weiterhin geringfügig vom WebP; vollständige Pixelgleichheit wird nicht behauptet.
- [15 Fallback- und Performanceprüfungen](output/playwright/v7/fallbacks.json): Reduced Motion, Data Saver, 2G, fehlendes WebGL, blockierter Import, Kontextverlust, SPA-Wechsel, DPR-3-Budget, mobile Anmeldung und nativer Touch-Scroll. Die Standbilder und Navigation bleiben unabhängig von Three.js verfügbar.

Vorher/Nachher-Aufnahmen liegen in `output/playwright/v7/`. Der [Bildvergleich bei verzögertem Laden](output/playwright/v7/handoff-pixels.json) lässt die oberen 100 CSS-Pixel mit der separat animierten Navigation aus. Die Objektdarstellung bleibt während der Vorbereitung unverändert; sehr geringe verbleibende Differenzen betreffen die Textrasterung.
Die bestehende In-App-Vorschau wurde zusätzlich neu geladen und der aktuelle Build mit bereitem Canvas kontrolliert.
Diese Korrektur verändert weder die Geometrie noch die Scrollstrecke oder Seitenabstände. Die v6-Prüfungen unten dokumentieren deren vorherige Abdeckung; sie wurden für diesen Ladefix nicht vollständig wiederholt.

### Verifikation v6 — vorheriger Stand

TypeScript, Produktionsbuild mit fünf vorgerenderten Routen, 22 Domänentests und das Import-/Paketbudget sind bestanden.
127 gezielte Browser- und Szenenprüfungen sind bestanden:

- [39 Layout-, Render- und Formularprüfungen](output/playwright/v6/qa.json): verzögerter Import, kein Rendering im Stillstand oder außerhalb des Viewports, Haltepose nach dem ersten Scrollabschnitt, mobile CTA-Sichtbarkeit, alle fünf Routen bei 320/390/768/1024 px ohne horizontales Überlaufen sowie abgefangene Anmeldung mit Pfad-Attribution.
- [15 Fallback- und Performanceprüfungen](output/playwright/v6/fallbacks.json): Reduced Motion, Data Saver, 2G, fehlendes WebGL, blockierter Import, Kontextverlust, SPA-Wechsel, DPR 3 und nativer Touch-Scroll. Gemessen: 26 Renderframes in 1,224 s während Scrolländerungen; keine neuen 3D-Frames im Stillstand.
- [9 Geometrieprüfungen](output/playwright/v6/geometry.json): unabhängige volumetrische Körper, identische Ausgangs-/Endpositionen und freigegebene Szenenressourcen.
- [45 Abstandsprüfungen](output/playwright/v6/spacing.json): gemessene Geometriegrenzen bei Start, maximaler Öffnung und Endpose auf 320/390/768/1024/1440 px; mindestens 8 px zum seitlichen Viewportrand und 12 px zur Bildunterschrift.
- [13 Argument- und Zuordnungsprüfungen](output/playwright/v6/insights.json): Inhalte erscheinen mit der Öffnung, Nummern folgen den tatsächlichen Körperpositionen, Texte bleiben nach der Bewegung lesbar und funktionieren mit reduzierter Bewegung.
- [6 Ladewechselprüfungen](output/playwright/v6/handoff.json) plus [Pixelvergleich](output/playwright/v6/handoff-pixels.json): Austausch ohne Überblendung bei Scrollfortschritt 0. Dieser Test deckte frühes Scrollen während des Downloads nicht ab; dafür siehe v7. Mittlere Abweichung je Farbkanal auf Desktop höchstens 0,14/255, mobil höchstens 0,58/255; geringe Rasterungsunterschiede an mobilen Kanten, kein Wechsel der Objektform.

Screenshots des v6-Stands: `output/playwright/v6/`. Lokale Chromium-Prüfung; keine Messung produktiver Core Web Vitals
oder eines Conversion-Uplifts. Die Testanmeldung wurde abgefangen und hat keinen echten Wartelisteneintrag erzeugt.
Die folgenden v5-Ergebnisse gelten ausschließlich für den früheren Renderer mit einer texturierten 2D-Fläche.

### Verifikation v5 — historisch

TypeScript, Produktionsbuild mit fünf vorgerenderten Routen, 22 Domänentests und Import-/Größenbudget wurden geprüft.
52 Browserprüfungen bestanden: verzögerter Import, kein Rendern im Stillstand/außerhalb des Viewports, native Scrolltiefe,
keine automatischen Beispielwechsel und keine Hintergrundvideos, Tastaturfokus am Formular, E-Mail- und
Einwilligungsvalidierung, abgefangene erfolgreiche Anmeldung mit Pfad-Attribution sowie alle fünf Varianten
bei 320/390/768/1024px ohne horizontales Überlaufen. Außerdem: sichtbarer mobiler Hero-CTA, Reduced Motion,
Data Saver, 2G, fehlendes WebGL, blockierter Import, Kontextverlust, SPA-Wechsel, DPR-3-Budget und echter Touch-Scroll.

Prüfprotokolle: [Layout und Fluss](output/playwright/v5/qa.json), [Fallbacks und Performance](output/playwright/v5/fallbacks.json).
Screenshots des geprüften v5-Stands: `output/playwright/v5/`. Lokale Chromium-Prüfung; keine Messung produktiver Core Web Vitals
oder eines Conversion-Uplifts. Die Anmeldung wurde mit einer abgefangenen Testanfrage geprüft, ohne echten Eintrag.
