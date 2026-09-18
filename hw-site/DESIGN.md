# DESIGN.md – Website-Designsystem H&W Digital Solutions

Stand: 2026-09-17 · Gilt für `hw-site/` (Astro, `hw-digitalsolutions.de`). Quelle der Wahrheit für Tokens ist `src/styles/global.css`; dieses Dokument erklärt Herkunft, Regeln und Verträge zwischen den Komponenten.

## 1. Zweck und Abgrenzung

- **Marke:** H&W Digital Solutions UG, Berlin – AI-natives Consulting & Engineering. Leitmotiv **„From Process to Production“**.
- **Geltungsbereich:** ausschließlich die Website in `hw-site/` (Marketing-Oberfläche, Rechtsseiten, Kontakt).
- **Nicht** das Consultry-Produkt-Designsystem (`design/DESIGN_SYSTEM/consultry_app_design_system/…`) und nicht die Consultry-Marketing-Site (`marketing-site/`). Tokens, Farben und Komponenten werden **nicht** zwischen den Systemen geteilt. Wer Consultry-Produkt-UI baut, arbeitet dort; wer die H&W-Website baut, arbeitet hier.
- **Herkunft der Palette:** aus dem HubSpot-Theme der bisherigen H&W-Site extrahiert (Zählung der Vorkommen im Theme-CSS): `#15042b` (67×), `#511d96` (44×), `#e3e6ec` (21×), `#351a59` (18×), `#614862` (12×), Verlauf `linear-gradient(111.02deg, #511d96, #351a59)` (18×), außerdem `#fffdfc`, `#f1f1f8`, `#23064a`. Die Zahlen beschreiben die alte Site, nicht eine Gewichtung für die neue.

## 2. Farb-Tokens

Alle Werte liegen in `:root` in `src/styles/global.css`. **Token-Namen sind Vertrag** – Komponenten anderer Autor:innen hängen daran; nur Werte ändern.

### 2.1 Flächen

| Token | Hex | Rolle |
|---|---|---|
| `--ink` | `#15042b` | Dunkle Hauptfläche (Aubergine): Hero, Chain-Sektion, Kontrast, CTA, Footer |
| `--ink-2` | `#1c0a37` | Karten auf dunkler Fläche |
| `--ink-3` | `#23064a` | Zweite dunkle Stufe (Legacy „secondary dark“), Verlauf-Start der hervorgehobenen Karte |
| `--paper` | `#fffdfc` | Warmweiße Seitenfläche |
| `--paper-2` | `#f1f1f8` | Lavendel-Tint für Wechselsektionen und gedämpfte Karten |
| `--paper-3` | `#e3e6ec` | Hellgrau für Rahmen-/Trennflächen |

### 2.2 Text

| Token | Hex | Rolle | Kontrast (geprüft) |
|---|---|---|---|
| `--fg` | `#15042b` | Fließtext auf hellen Flächen | 19,10:1 auf `--paper` · 17,23:1 auf `--paper-2` · 15,49:1 auf `--paper-3` |
| `--fg-muted` | `#614862` | Gedämpfter Text (Mauve, Legacy-Wert unverändert) | 7,93:1 auf `--paper` · 7,15:1 auf `--paper-2` · 6,43:1 auf `--paper-3` |
| `--fg-on-ink` | `#f5f1fb` | Text auf dunklen Flächen | 17,39:1 auf `--ink` · 16,43:1 auf `--ink-2` · 15,76:1 auf `--ink-3` |
| `--fg-on-ink-muted` | `#b9abcf` | Gedämpfter Text auf dunklen Flächen | 9,03:1 auf `--ink` · 8,53:1 auf `--ink-2` · 8,18:1 auf `--ink-3` |

### 2.3 Akzent (Markenlila)

| Token | Hex | Rolle | Kontrast (geprüft) |
|---|---|---|---|
| `--accent` | `#511d96` | Eyebrow, Links, Primär-Button, Fokusring auf hellen Flächen | 10,53:1 auf `--paper` · 9,50:1 auf `--paper-2` · 8,54:1 auf `--paper-3` |
| `--accent-hover` | `#3f1478` | Hover des Primär-Buttons | Weiß auf `--accent-hover`: 13,08:1 |
| `--accent-soft` | `rgba(81,29,150,.10)` | Dezente Lila-Tönung (Hintergründe, Hover-Flächen) | dekorativ |
| `--accent-on-ink` | `#c3a5ff` | Leuchtendes Lavendel: Eyebrow, Footer-Titel, Fokusring auf dunklen Flächen | 9,36:1 auf `--ink` · 8,84:1 auf `--ink-2` · 8,48:1 auf `--ink-3` |
| `--brand-gradient` | `linear-gradient(111.02deg, #511d96, #351a59)` | Legacy-Markenverlauf; für Flächen/Buttons auf hellen Flächen, nicht als Text | – |
| `--mauve` | `#614862` | Alias des Legacy-Mauve für Illustrationen/Tags | wie `--fg-muted` |

Weiß (`#ffffff`) auf `--accent` (Primär-Button): **10,53:1**. `--ink` auf `--fg-on-ink` (Button auf dunkler Fläche): **17,39:1**.

### 2.4 Achse „From Process to Production“

| Token | Hex | Rolle | Kontrast (geprüft) |
|---|---|---|---|
| `--process` | `#a98bff` | Leuchtendes Lavendel – Achsen-Start; Chain-Punkte, Claim-Verlauf, Favicon. **Nur auf dunklen Flächen** als Text | 7,22:1 auf `--ink` (Fließtext ok) · 2,65:1 auf `--paper` (**nicht** als Text auf hell) |
| `--process-soft` | `rgba(169,139,255,.18)` | Lavendel-Tint für Tags auf hellen Flächen | dekorativ (Textkontrast siehe Tag) |
| `--process-text` | `#5a35b8` | Prozess-Farbe als Text auf hellen Flächen | 7,86:1 auf `--paper` · 7,09:1 auf `--paper-2` |
| `--production` | `#d36cf0` | Gesättigtes Magenta-Violett – Achsen-Ende; Chain-Ende, „Ende: produktives System“, Claim-Ende. **Nur auf dunklen Flächen** als Text | 6,62:1 auf `--ink` · 2,74:1 auf `--paper` (**nicht** als Text auf hell) |
| `--production-soft` | `rgba(211,108,240,.16)` | Magenta-Tint für Produktions-Tags | dekorativ |
| `--production-text` | `#7e2599` | Produktions-Farbe als Text auf hellen Flächen | 7,93:1 auf `--paper` · 7,15:1 auf `--paper-2` |
| `--axis` | `linear-gradient(90deg, var(--process), var(--production))` | Die Achse selbst: Chain-Linie, Rahmen der H&W-Karte, Nav-Marke, Favicon | – |

**Regel Magenta:** Magenta-Violett ist das Ziel der Achse und deshalb selten. Es erscheint am Ende der Chain, im Produktions-Tag, am Ende des Claim-Verlaufs und als Farbe des Satzes „Ende: produktives System“. Es nimmt auf keiner Fläche mehr als etwa 5 % der Fläche ein und ist nie Hintergrund einer Sektion oder eines Buttons. Die gesamte Palette bleibt damit in der Lila-Familie (Entscheidung 2026-09-17: das Hero-Visual läuft Lavendel → Magenta; die Alternative Lavendel → Gold liegt als Bildvariante vor und wäre ein Ein-Token-Wechsel).

### 2.5 Linien, Schatten

| Token | Wert | Rolle |
|---|---|---|
| `--line` | `rgba(21,4,43,.10)` | Rahmen/Trenner auf hell |
| `--line-strong` | `rgba(21,4,43,.28)` | Hover-Rahmen auf hell |
| `--line-on-ink` | `rgba(245,241,251,.12)` | Rahmen/Trenner auf dunkel |
| `--line-on-ink-strong` | `rgba(245,241,251,.40)` | Hover-Rahmen auf dunkel |
| `--shadow-sm` | `0 1px 2px rgba(21,4,43,.05), 0 2px 8px rgba(21,4,43,.05)` | Ruhende Karten auf hell (Legacy: gestaffelte 5 %-Schatten) |
| `--shadow-md` | `0 4px 12px rgba(21,4,43,.06), 0 12px 32px rgba(21,4,43,.08)` | Angehobene Karten, Overlays |
| `--shadow-glow` | `0 8px 28px rgba(81,29,150,.20)` | Akzent-Glow: Primär-Button-Hover, hervorgehobene Karte (Legacy: `rgba(81,29,150,.2)`) |

### 2.6 Prüfmethode

Alle Kontrastwerte wurden am 2026-09-17 mit einem kleinen Node-Skript nach WCAG 2.x (relative Luminanz, sRGB-Linearisierung, Verhältnis `(L1+0,05)/(L2+0,05)`) berechnet; halbtransparente Tag-Hintergründe wurden zuvor über `--paper` bzw. `--paper-2` gemischt. Schwellen: Fließtext ≥ 4,5:1, Display-Text (≥ 24 px bzw. ≥ 19 px fett) ≥ 3:1, Fokusringe ≥ 3:1 gegen die Nachbarfläche. Alle 38 geprüften Paare bestehen. Wer Werte ändert, wiederholt die Prüfung und aktualisiert die Tabellen.

## 3. Verlauf und Achse

- **Achse** (`--axis`): horizontal, Lavendel → Magenta-Violett. Sie ist die visuelle Übersetzung des Leitmotivs und kommt an Stellen vor, die den Weg „Prozess → Produktion“ erzählen: Chain-Linie, Punkte der Chain (per `color-mix` von `--process` nach `--production` interpoliert), Rahmen der H&W-Spalte im Kontrast, Nav-Marke, Favicon.
- **Claim-Verlauf** (Hero): `--accent-on-ink` → `--process` (55 %) → `--production` (100 %). Magenta sitzt nur am Ende.
- **Markenverlauf** (`--brand-gradient`, 111,02°, `#511d96` → `#351a59`): Legacy aus der alten Site. Einsatz für dunkle Flächenakzente auf hellen Sektionen (z. B. Banner, Bildmasken). Nicht als Textfüllung, nicht auf `--ink` (zu wenig Abstand).
- **Hero-Schleier:** seit 2026-09-18 nur noch ein leichter Schleier (siehe 7, Hero), weil das Hero-Bild seine Vignette selbst mitbringt: ein generierter, analog wirkender Lichtverlauf von mattem Flieder (links oben) in `--ink` (rechts und unten). Hero-Bilder werden in der Lila-Familie erzeugt (`src/assets/hero.webp`), der Schleier ist die Rückfallebene für Lesbarkeit und den nahtlosen Übergang nach unten.

## 4. Typografie

| Rolle | Schrift | Gewicht | Größe |
|---|---|---|---|
| Hero-Beat-Ziffern (01–03) | Sora | 300 | 1,5 rem, tabellarische Ziffern |
| Display / Überschriften | Sora | 600 (Brand 700) | `h1` `clamp(2.1rem, 6.2vw, 5rem)`, `h2` `clamp(1.9rem, 3.8vw, 3rem)`, `h3` `clamp(1.15rem, 1.8vw, 1.4rem)` |
| Eyebrow, Navigation, Labels | Sora | 500 | 0,9 rem |
| Fließtext | Inter | 400 | 17 px, Zeilenhöhe 1,6 |
| Lede | Inter | 400 | `clamp(1.1rem, 1.6vw, 1.35rem)`, Zeilenhöhe 1,5, max. 62ch |
| Tag | Inter | 500 | 0,78 rem |
| Buttons | Sora | 600 | 0,95 rem |

- Laufweite: Display negativ (`-0.03em`, `h1` `-0.045em`), Labels nahezu neutral (`-0.005em`). **Keine positive Sperrung, keine Versalien** für Labels.
- `--font-mono` bleibt als Token für Code-Beispiele erhalten, wird aber in Marketing-Komponenten **nicht** eingesetzt.
- Einbindung **selbst gehostet** aus `public/fonts/` (variable Latin-Subsets `sora-latin.woff2` 300–700, `inter-latin.woff2` 400–600, SIL OFL 1.1, siehe `public/fonts/README.md`); `@font-face` mit `font-display: swap` am Anfang von `global.css`, Preload beider Dateien in `Base.astro`. Kein Request an Google Fonts; die Datenschutzerklärung (Abschnitt 3) sagt das ausdrücklich. Sora 300 dient ausschließlich den leichten Ziffern der Hero-Beats (Referenz FLORA „01 Ideate“).
- **Legacy-Hinweis:** Die alte HubSpot-Site nutzte **Jost**. Die neue Site bleibt bei Sora + Inter; Jost wird nicht nachgeladen und nicht als Fallback geführt.

## 5. Raster und Abstände

- Container `--container: 1200px`, seitlicher Rand `--gutter: clamp(20px, 4vw, 48px)`, Sektionsabstand `--section-y: clamp(72px, 10vw, 140px)`.
- Innenabstände in Karten 22–32 px; Abstände zwischen Eyebrow → Überschrift 16–18 px, Überschrift → Lede 16 px, Lede → Inhalt 32–44 px.
- Breakpoints (Komponentenlokal): 720 px (zwei Spalten), 860 px (Desktop-Nav), 900 px (asymmetrische Zweispalter), 1296 px (Hero auf Containerbreite).
- Mobile: mindestens 20 px Seitenrand, kein horizontales Scrollen; die Chain darf innerhalb ihres Containers horizontal scrollen.

## 6. Radien und Schatten

- `--radius: 10px` (Buttons, Skip-Link), `--radius-lg: 18px` (Karten, Step-Raster), `--radius-pill: 999px` (Tags).
- Schatten siehe 2.5. Auf dunklen Flächen ersetzen Rahmen (`--line-on-ink`) den Schatten; der Glow ist der einzige Schatten auf `--ink`.

## 7. Komponenten

### Button (`.btn`)
- `.btn--primary`: `--accent`-Fläche, weißer Text, Hover `--accent-hover` + `--shadow-glow`. Auf `.section--ink` automatisch invertiert (Fläche `--fg-on-ink`, Text `--ink`).
- `.btn--on-ink`: explizit helle Variante (Nav-CTA).
- `.btn--ghost`: transparent, Rahmen `--line` / `--line-on-ink`, Hover verstärkt den Rahmen.
- Aktiv: `scale(.97)`. Icons 16 px, `currentColor`.

### Eyebrow (`.eyebrow`)
- Sektionslabel, klassisch redaktionell: Inter 600, 0,72 rem, Versalien, Laufweite 0,14 em, `--fg-muted` (auf `--ink`: `--fg-on-ink-muted`). Keine Fläche, kein Rahmen, keine Ziffer, kein Zierstrich, kein Markenlila (die Farbe bleibt Buttons, Links und Akzenten vorbehalten).
- Entscheidung 2026-09-18 (Gründer): Nummerierte Labels und Pillen wirkten generisch; das Label soll Orientierung geben, nicht Aufmerksamkeit ziehen. Damit ist die frühere Regel „keine Versalien“ für dieses Element aufgehoben; sie gilt weiter für Headlines, Buttons und Fließtext.
- Labels kurz und in Käufersprache: Startseite „Unser Versprechen“, „Unabhängigkeit“, „Zehn Schritte“, „Der Unterschied“, „Software und Web“; „So arbeiten wir“ (Chain) und „Womit wir bauen“ (Capabilities) stehen seit 2026-09-18 nur noch auf den Unterseiten Vorgehen und Leistungen.

### Tag (`.tag`) – Vertrag für `Steps.astro` und andere
```html
<span class="tag tag--process">Prozess</span>
<span class="tag tag--design">Design</span>
<span class="tag tag--build">Engineering</span>
<span class="tag tag--production">Produktion</span>
```
- Inter 500, 0,78 rem, Satzschreibung, Pille, `white-space: nowrap`. Keine Versalien, keine Monospace.
- Farben (Text auf gemischtem Hintergrund, geprüft auf `--paper` / `--paper-2`):
  - `--process`: `#4d2ba6` auf `--process-soft` → 7,99:1 / 7,33:1
  - `--design`: `#4b1f9e` auf `rgba(108,74,214,.14)` → 8,52:1
  - `--build`: `#4a3252` auf `rgba(97,72,98,.16)` (Mauve) → 8,63:1
  - `--production`: `--production-text` auf `--production-soft` → 6,77:1 / 6,18:1
- Ohne Modifikator: `--fg-muted` auf `--paper-2`. Tags sind für **helle** Flächen gedacht; auf `--ink` stattdessen `--accent-on-ink`-Text ohne Fläche verwenden.
- Komponenten sollen die Tag-Klassen nutzen und **keine** eigenen Hex-Werte für Phasenfarben definieren.

### Card
- Hell: `--paper` (oder `--paper-2` gedämpft), Rahmen `--line`, `--radius-lg`, Innenabstand 22–32 px, optional `--shadow-sm`; Hover: Rahmen `--line-strong`, `translateY(-2px)`.
- Dunkel: `--ink-2`, Rahmen `--line-on-ink`. Hervorgehobene Karte: Achsen-Rahmen über `padding-box`/`border-box`-Verlauf plus `--shadow-glow`.

### Step (`Steps.astro`)
- Zehn Schritte als horizontaler Slider (Karten mit monolinem Icon, Nummer in Mono, Phase als `.tag`, Titel `h3`, Text `--fg-muted`), Pfeile rechts.
- Phasen-Navigation als Stepper (seit 2026-09-18, Gründer: „smootheres Design, professionell, stepper line like“ statt Pillen-Tabs): vier Stationen auf einer durchgehenden 1-px-Linie in `--line`; Knoten 30 px rund mit Ziffer (Sora 600, 0,8 rem), daneben Phase (Sora 600, 0,92 rem) und Schrittzahl (0,76 rem, gedämpft). Aktiv: Knoten in `--accent` gefüllt, Label `--fg`. Passiert (`data-done`): Knoten in `--accent` umrandet, Linie zum nächsten Knoten in `--accent` bei 45 %. Kommend: gedämpft. Fokusring auf dem Knoten. Unter 600 px: Knoten 26 px, Schrittzahl ausgeblendet, nur die aktive Station trägt ihr Label, die übrigen bleiben Knoten auf der Linie.

### Chain (`Chain.astro`)
- Horizontale Achse (`--axis`, 2 px) mit interpolierten Punkten; auf `--ink`. Labels `--fg-on-ink-muted`. Optional Three.js-Szene als Progressive Enhancement (siehe 9), die Chain bleibt ohne JS vollständig lesbar.

### Hero
- Statisch (seit 2026-09-18, Gründer: kein Hintergrund-Scroll): Vollhöhe (`100svh`, Raster `1fr auto`), Bild als Fläche hinter Copy und Nachlauf, `object-fit: cover`, `object-position: 38% 40%`, leicht gedämpft (`saturate(.9) brightness(.92)`). Kein Pan, keine Skalierung, keine Fortschrittslinie, kein Farbwash.
- Bild (`src/assets/hero.webp`, 2560 × 1440, generiert mit Higgsfield, Modell GPT Image 2.5 in hoher Qualität, 4K-Upscale, Referenz: Gründer-Video vom 2026-09-18): ein abstrakter, analog wirkender Lichtverlauf mit feinem Filmkorn. Mattes, entsättigtes Flieder liegt links oben hinter der Copy und läuft in einer breiten Diagonale in `--ink` nach rechts und unten aus. Keine Objekte, keine Linien, kein Bokeh, keine Leuchtflecken. Das Bild führt den Blick über Licht auf die Copy und bringt die Vignette selbst mit.
- Schleier: nur noch drei leichte Verläufe – nach unten in `--ink` (100 % ab Unterkante, 60 % bei 18 %, 0 ab 42 %) für den nahtlosen Übergang zur Trust-Leiste, ein Lesbarkeits-Verlauf von links (28 % → 0 bei 55 %) und ein Hauch von oben (35 % → 0 bei 22 %). Keine radiale Vignette mehr, keine Leuchtflecken, kein Glow.
- Copy: vertikal in der Bildfläche zentriert, bündig mit der Container-Kante, `max-width: 760px` je Kind. Eyebrow → `h1` (`--fg-on-ink`) → Claim → Beschreibung (`--fg-on-ink-muted`) → Buttons. Einblendung über `.reveal` mit gestaffeltem `--delay`.
- Nachlauf (Slot `after`): Trust-Leiste mit den Partnern (einfarbige Masken, `--logo-h: 32px`) auf dem in `--ink` ausgelaufenen Bildrand; Elemente blenden über `--start` gestaffelt ein. Zertifikate stehen nicht im Hero, sondern in der Proof-Szene „Wer bei uns baut“ darunter.
- Flache Viewports (≤ 700 px hoch): `padding-top` der Copy = Nav-Höhe + 24 px, `h1` `clamp(1.75rem, 3.8vw, 2.5rem)`, Beschreibung 0,9 rem, kompakte Buttons – die Copy darf nie beschnitten werden.
- Mobil (< 900 px): `object-position: 22% center` (das Licht bleibt hinter der Copy), ein Verlauf nach unten in `--ink`; die Leiste folgt der Copy.

### Nav / Footer
- Nav: fixiert, Verlauf `rgba(21,4,43,.85→0)` mit Blur, Links Sora 500 0,9 rem `--fg-on-ink-muted` → aktiv/hover `--fg-on-ink`; Marke = 12-px-Quadrat mit `--axis`. Mobil: Vollfläche `--ink`.
- Footer: `--ink`, Spaltentitel Sora 500 in `--accent-on-ink`, Links `--fg-on-ink-muted` → hover `--fg-on-ink`, Trenner `--line-on-ink`.

### Favicon
- `public/favicon.svg`: 32er-Rechteck `#15042b`, Radius 7, innen 16er-Quadrat mit `--axis` (Lavendel → Magenta). Entspricht der Nav-Marke.

## 8. Ikonografie (Vertrag für Icons und Kartenabbildungen)

- **Stil:** monolinear, Strichstärke **1,5 px** auf einem **24-px-Raster**, `stroke="currentColor"`, `fill="none"`, `stroke-linecap="round"`, `stroke-linejoin="round"`. Keine Flächenfüllungen außer kleinen Punkten (Nodes, r ≤ 2).
- **Motivsprache:** Nodes (Knoten), Links (Kanten), Orbits (Bahnen/Ringe). Prozesse als verbundene Knoten, Produktion als geschlossener Ring bzw. stabile Bahn, Analyse als Suchbahn um einen Knoten. Keine Klischees (Glühbirne, Zahnrad, Roboter, Gehirn), keine Emojis.
- **Farbe:** Icons erben Textfarbe (`currentColor`); auf hell `--accent` oder `--fg-muted`, auf dunkel `--accent-on-ink`. Ein einzelner Magenta-Punkt ist erlaubt, wo ein Icon das Ende der Achse zeigt (Produktion).
- **Größen:** 24 px inline, 32–40 px als Kartenabbildung, immer `aria-hidden="true"` wenn dekorativ; `viewBox="0 0 24 24"`.
- **Ablage:** `src/icons/` (SVG oder `.astro`), ein Motiv pro Datei, kein eingebettetes Styling.

## 9. Motion

- **Einblendung:** `.reveal` = fade-up 18 px mit 4-px-Blur, 0,8 s, `--ease-out`, gestaffelt über `--delay`. Nur für Above-the-fold-Inhalte des Seitenkopfs.
- **Hover:** Farbe/Rahmen 0,2 s, Transform 0,15–0,25 s `--ease-out`. Keine Bounce-Kurven.
- **Reduced Motion:** `prefers-reduced-motion: reduce` deaktiviert `.reveal`, `scroll-behavior` und jede Scroll-getriebene Szene; Inhalte sind dann sofort sichtbar.
- **Scroll-Hero (Startseite):** Progressive Enhancement ohne Bibliothek. Das Skript setzt `data-scene="on"` und schreibt beim Scrollen nur drei Variablen auf die Section – `--p` (Rohfortschritt 0–1), `--scene-reveal` (0–1 aus `--p` .06–.36), `--scene-carry` (0–1 ab 50 % der Pin-Strecke) – sowie zwei diskrete Zustände (`data-scene-aspect` = Beat-Index 0–3 bei 10 / 40 / 70 %, `data-faded` auf der Copy ab carry .46). Alles Sichtbare entsteht in CSS aus `transform`/`opacity`; `will-change: transform` nur auf dem Bildlayer. Scroll-Handler passiv und rAF-gedrosselt, im Handler wird außer `scrollY` nichts aus dem Layout gelesen; Pin-Grenzen werden nur bei Load/Resize gemessen; ein IntersectionObserver schaltet den Handler außerhalb der Section ab; Aufräumen bei `astro:before-swap`. Deaktiviert bei `prefers-reduced-motion`, `navigator.connection.saveData` und `effectiveType` 2g – dann bleibt der statische Hero (kein Pinning, kein hoher Track, Beats als Liste). Zustandswechsel (Beats, Copy) blenden mit 240–400 ms `--ease-out`; an `--p` gekoppelte Werte haben bewusst keine Transition. `--scene-reveal` wird weiter geschrieben, hat aber seit dem Wegfall der Bild-Annotationen keinen CSS-Verbraucher.
- **Three.js-Szene (Chain / Prozesslinie):** ausschließlich Progressive Enhancement. Regeln: lazy laden (dynamischer `import()` nach `IntersectionObserver`-Treffer), kein Render ohne Sichtbarkeit, `requestAnimationFrame` pausiert außerhalb des Viewports, Canvas `aria-hidden`, DOM-Chain bleibt die semantische Quelle. Farben aus den Tokens (`--process`, `--production`, `--ink`), kein eigener Farbraum. Deaktiviert bei Reduced Motion, fehlendem WebGL und `navigator.connection.saveData`. Budget: Bibliothek nur die benötigten Module, Ziel < 150 kB gzipped inklusive Szene; Zahl ist ein Ziel, kein Messwert.

## 10. Barrierefreiheit

- Kontraste siehe 2 (Fließtext ≥ 4,5:1, Display ≥ 3:1). Magenta und leuchtendes Lavendel sind auf hellen Flächen **keine** Textfarben; dafür gibt es `--production-text` / `--process-text`.
- Fokus: 2-px-Ring, Offset 3 px, `--accent` auf hell, `--accent-on-ink` auf dunkel (beide > 9:1 gegen die Fläche).
- Skip-Link „Zum Inhalt springen“, `main#main`, Landmark-Rollen über native Elemente, `aria-current="page"` in der Navigation, Mobilmenü mit `aria-expanded` und Escape.
- Selection: `--accent` mit weißem Text (hell), `--accent-on-ink` mit `--ink`-Text (dunkel).
- Bewegung: siehe 9. Keine Informationen nur über Farbe (Tags tragen immer Text).
- Textgrößen in `rem`/`clamp`, Zoom bis 200 % ohne Layoutbruch.

## 11. Do / Don't

**Do**
- Eyebrows in Satzschreibung, Sora 500, Markenlila; Index nur bei erzählter Reihenfolge.
- Dunkle Flächen aus der `--ink`-Familie, helle aus `--paper`/`--paper-2`.
- Magenta nur als Akzent für das Ende der Achse (≤ 5 % einer Fläche).
- Tags über `.tag--*`; Icons als 1,5-px-Monoline in `currentColor`.
- Kontrast nach jeder Farbänderung nachrechnen und hier eintragen.

**Don't**
- Keine Monospace-Uppercase-Eyebrows, keine gesperrten Versalien-Labels, keine Zierstriche vor Labels.
- Kein reines Schwarz/Neutralgrau und kein Blau/Orange aus dem früheren Schema.
- Magenta nicht als Fläche, Button oder Text auf hell; `--process` nicht als Text auf hell.
- Keine Hex-Werte in Komponenten, wenn ein Token existiert.
- Keine Consultry-Produkt-Tokens (`mktg-*`, App-DS) auf dieser Site.
- Keine Three.js-Szene ohne DOM-Fallback und ohne Reduced-Motion-Ausnahme.

## 12. Änderungsprotokoll

| Datum | Änderung |
|---|---|
| 2026-09-18 | Stepper größer und cleaner: Knoten 40 px, Labels unter den Knoten, Linie 1,5 px nur zwischen den Knoten (läuft nicht mehr durch Text), Pfeile an der Knotenzeile ausgerichtet. Proof-Szene: Zähler „8 Zertifikate im Gründerteam“ entfernt; Badges 52 px in einer Reihe, die rechts ausblendet (`mask-image`), daneben „Alle Nachweise“. Es soll sichtbar sein, dass die Reihe weitergeht. |
| 2026-09-18 | Zehn-Schritte-Slider: Phasen-Pillen durch einen Stepper mit Linie und Knoten ersetzt (siehe Step). |
| 2026-09-18 | Proof-Szene: Motiv Systemmodell (Grundplatte, fünf Module, eines wird gesetzt, Blaupause, Tuschestift) statt Maßschneiderei, Gründer: „cooles Wortspiel, passt aber nicht in den professionellen IT-Consulting-Auftritt“. Freisteller wie zuvor, Bildunterschrift „Für Ihren Betrieb geplant und gebaut.“ Verworfen: Architekturmodell mit Blaupause (liest sich als Immobilie). |
| 2026-09-18 | Proof-Szene: Motiv Maßschneiderei (Stoffballen, Maßband, Kreide, Schere, Schnittmuster) statt Tischszene, Gründer: Professionalität, Seniorität, „zugeschnittenes Senior Consulting statt Massengeschäft wie KPMG oder EY“. Freisteller wie zuvor, Bildunterschrift „Zugeschnitten auf Ihren Betrieb.“ Verworfen: gefeilter Schlüssel mit Schloss (liest sich als Spielzeug). |
| 2026-09-18 | Proof-Szene als Freisteller (Gründer: „schwebend auf hellem Background, kein eigener deckender Background; hohe Qualität, professionell, minimalistisch“): die Tischszene als isoliertes Render auf Weiß erzeugt (GPT Image 2.5), 4K-Upscale, Hintergrund per Higgsfield entfernt, als WebP mit Alpha; kein Kasten mehr, `filter: drop-shadow` trägt das Objekt, Bildunterschrift „Am Tisch, nicht im Ticket.“ als gedämpfter Text darunter. Regel: Bildkarten mit eigener dunkler Fläche bleiben den Showcases vorbehalten; Proof- und Erklärvisuals schweben auf Papier. |
| 2026-09-18 | Einwand-Bänder: Visualisierung mit `margin-left: -6%` an die Zitatkante gezogen (die SVGs tragen links einen Innenrand). |
| 2026-09-18 | Proof-Szene „Wer bei uns baut“ neu (Gründer: „muss richtig hitten und professionell aussehen; kein Body Leasing, sondern seasoned experts, die auf Sie eingehen; Expertise und Wissen gepaart mit Kommunikation und Hospitality“): statt der Linienzeichnung „Sie im Ring“ eine Bildkarte in der Clay-Bildsprache (runder Besprechungstisch, drei Stühle nah beieinander, Kaffee, Notizbuch, Karaffe; GPT Image 2.5, 4K-Upscale, `src/assets/expertise.webp`) mit Bildunterschrift „Am Tisch, nicht im Ticket.“; Headline größer (`clamp(2rem, 3.6vw, 3.2rem)`), Spalten 1 / 1,05, Zertifikate unter der Karte. `PromiseViz` Art `customer` bleibt im Code, ist aber ohne Verwendung. |
| 2026-09-18 | Quellenangaben als Fußnote: hochgestelltes Sternchen in `--accent` mit Tooltip (`.fn`, `.fn__tip` auf `--ink`, Inter 0,8 rem, Hover und Tastaturfokus, Quelle zusätzlich im `aria-label`) statt der Mono-Zeile. Beschriftungen in den Visualisierungen ebenfalls auf Inter 500 umgestellt; Mono bleibt der Ziffer der Bänder mobil vorbehalten. |
| 2026-09-18 | Einwand-Bänder: Schmerz-Zahlen links (Ring, Balken, Stapel, Quelle) gestrichen; die Visualisierung steht jetzt links unter dem Zitat (`.promise__viz`, max. 520 px), rechts bleiben Hook, Gewinn-Zahl und CTA. Mobil: Einwand, Antwort, Abbildung. Diagramm-CSS entfernt. |
| 2026-09-18 | Einwand-Bänder: Begründungsabsatz rechts entfernt, stattdessen Gewinn-Zahl (`.promise__win`, 2,4 rem in `--accent`, Vorzeichen, Quelle in Mono) über dem CTA; Count-up unterstützt Dezimalstellen mit Komma. Hero-Headline wieder einzeilig (v8). |
| 2026-09-18 | Hero-Copy v7 als Szene in zwei Zeilen (`white-space: pre-line`), Claim und Beschreibung als ganze Sätze; Schluss-CTA-Headline länger (ein Satz mit Nebensatz), `max-width` der CTA-Headline unverändert. OG-Bild neu gerendert. |
| 2026-09-18 | Startseite gestrafft (Gründer: „weg von Hauptseite, nur auf Subseiten“): Sektionen „So arbeiten wir“ (Chain, zwölf Schritte) und „Womit wir bauen“ (Capabilities) entfernt; beide bleiben auf `/vorgehen` und `/leistungen`. Folge jetzt Hero → Wer bei uns baut → Versprechen → Unabhängigkeit → Zehn Schritte → Der Unterschied → Software und Web → CTA; „Zehn Schritte“ auf helles Papier, damit sich die Flächen weiter abwechseln. |
| 2026-09-18 | Showcase-Karten folgen dem Hero-Grundsatz: matte Clay-Szenen (Flieder, Mauve, `--ink`, Filmkorn, weiches Licht von links oben, kein Glow) mit konkretem Motiv (Website-Anordnung, fünf verbundene Bausteine auf einem Raster) statt der glänzenden isometrischen 3D-Szenen. Rein abstrakte Varianten (Blatt, Punktraster) verworfen: zu leer für eine Showcase-Karte. GPT Image 2.5, 4K-Upscale, 1620 × 1080 WebP in `src/assets/showcases/`; `object-position: 50% 22%`, damit das Motiv im 4:3-Zuschnitt mobil im Bild bleibt. |
| 2026-09-18 | Neues Hero-Bild als Standbild (Gründer: „high quality still … purple palette … professional and subtle without too much glow“): generierter Lichtverlauf Flieder → `--ink` mit Filmkorn (GPT Image 2.5, 4K-Upscale) statt des bisherigen Motivs. Schleier verschlankt (radiale Vignette entfernt, Verläufe von links und oben abgeschwächt), Filter von `saturate(.72) brightness(.78)` auf `saturate(.9) brightness(.92)`, `object-position` 38 % 40 % (mobil 22 %). Verglichen wurden zwölf Renders aus GPT Image 2.5, Nano Banana 2 und Nano Banana Flash; verworfen: sichtbare Lichtkanten und Regenbogen-Streifen (zu viel Glow), Bokeh-Flecken, gesättigtes Violett. |
| 2026-09-17 | Scroll-Hero nach Review überarbeitet: Copy tritt gestuft zurück (CTAs nie ausgegraut), mobil verlässt die Copy die Bühne und ein kompakter CTA steht unter den gestapelten Beats; Bild-Annotationen 01–03 entfernt (Liste trägt die Ziffern, Titel als `h3`); Beat-Liste ab Start sichtbar (.45 / aktiv 1 / passiert .8), Desktop-Liste 48 px angehoben, Schleier-Stopp 45 % von .6 auf .45; Wash auf 5 % rechts / 6 % links begrenzt plus statischer 111°-Schleier; Track 220 vh, Beats bei 10 / 40 / 70 %; Bühne `height: auto; min-height: 100dvh`, kompakte Copy unter 700 px Höhe; Schriften selbst gehostet (`public/fonts/`, Preload, Datenschutz Abschnitt 3 angepasst). |
| 2026-09-17 | Scroll-Hero „From Process to Production“ auf der Startseite (Spezifikation Immersive Scroll-Hero): angepinnte Bühne, Kamerafahrt über das breite Hero-Visual, drei Beats (`heroBeats`) mit Annotationen 01–03, Fortschrittslinie in `--axis`. Progressive Enhancement, Leitplanke Tonalität eingehalten (Wash ≤ 10 %, kein Glow/Grain/Partikel). Sora 300 für die Beat-Ziffern ergänzt; Markenlila-Hauch im Hero-Schleier von .22 auf .12 reduziert, da der Wash die Farbführung übernimmt. |
| 2026-09-17 | Erstfassung. Palette von Ink/Blau/Amber auf das H&W-Lila-Schema umgestellt (Token-Namen unverändert, Werte neu; neue Tokens `--accent`, `--accent-hover`, `--accent-soft`, `--accent-on-ink`, `--brand-gradient`, `--mauve`, `--process-text`, `--production-text`, `--line-strong`, `--line-on-ink-strong`, `--shadow-*`, `--radius-pill`). Achse Lavendel → Gold festgelegt, Gold als sparsamer Akzent; noch am selben Tag auf Lavendel → Magenta-Violett (`#d36cf0`, Text-Variante `#7e2599`) umgestellt, damit die gesamte Palette in der Lila-Familie bleibt. Eyebrow neu als Sora-Label in Satzschreibung mit optionalem Index (`data-n`); Monospace-Uppercase in Nav, Footer, Kontrast und Unternehmen entfernt. `.tag`-Komponente mit vier Phasen-Modifikatoren als Vertrag für `Steps.astro`. Hero-Schleier, Nav-Verlauf, Fokusring, Selection, `theme-color` und Favicon auf die Palette gebracht. 38 Text/Fläche-Paare per Skript geprüft, alle bestehen. |
