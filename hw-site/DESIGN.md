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
- **Hero-Schleier:** drei Verläufe über dem Bild – vertikal `rgba(21,4,43,.96→.18)`, horizontal von links `rgba(21,4,43,.78→0)`, dazu ein 111°-Hauch `rgba(81,29,150,.22→0)`, der Bildmaterial ins Lila-Schema zieht. Hero-Bilder werden in Lila-Tönen erzeugt (`public/images/`), der Schleier ist die Rückfallebene für Lesbarkeit.

## 4. Typografie

| Rolle | Schrift | Gewicht | Größe |
|---|---|---|---|
| Display / Überschriften | Sora | 600 (Brand 700) | `h1` `clamp(2.1rem, 6.2vw, 5rem)`, `h2` `clamp(1.9rem, 3.8vw, 3rem)`, `h3` `clamp(1.15rem, 1.8vw, 1.4rem)` |
| Eyebrow, Navigation, Labels | Sora | 500 | 0,9 rem |
| Fließtext | Inter | 400 | 17 px, Zeilenhöhe 1,6 |
| Lede | Inter | 400 | `clamp(1.1rem, 1.6vw, 1.35rem)`, Zeilenhöhe 1,5, max. 62ch |
| Tag | Inter | 500 | 0,78 rem |
| Buttons | Sora | 600 | 0,95 rem |

- Laufweite: Display negativ (`-0.03em`, `h1` `-0.045em`), Labels nahezu neutral (`-0.005em`). **Keine positive Sperrung, keine Versalien** für Labels.
- `--font-mono` bleibt als Token für Code-Beispiele erhalten, wird aber in Marketing-Komponenten **nicht** eingesetzt.
- Einbindung über Google Fonts (Inter 400/500/600, Sora 500/600/700), `display=swap`. Die Datenschutzerklärung nennt Google Fonts.
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
- Redaktionelle Sektionsmarke: Sora 500, 0,9 rem, Satzschreibung, Farbe `--accent` (hell) bzw. `--accent-on-ink` (dunkel). Kein Zierstrich, keine Monospace, keine Versalien.
- Optionaler Abschnittsindex: `<p class="eyebrow" data-n="03">Leistungsbild</p>` rendert „03“ in tabellarischen Ziffern in `--fg-muted` / `--fg-on-ink-muted` vor dem Label. Index nur dort, wo die Sektionen eine erzählte Reihenfolge haben (Startseite, Leistungen, Vorgehen, Unternehmen); Seitenköpfe, Karten und CTA tragen keinen Index.
- Semantik: `<p>`; die Überschrift folgt als `h1`/`h2`.

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

### Step (`Steps.astro`, nicht Teil dieses Änderungsstands)
- Zehn Schritte im geteilten Raster (`gap: 1px` auf `--line`), Nummer in Sora 600, Phase als `.tag`, Titel `h3`, Text `--fg-muted`. Vorgesehen: monolines Icon (siehe 8) links oben oder neben der Nummer.

### Chain (`Chain.astro`)
- Horizontale Achse (`--axis`, 2 px) mit interpolierten Punkten; auf `--ink`. Labels `--fg-on-ink-muted`. Optional Three.js-Szene als Progressive Enhancement (siehe 9), die Chain bleibt ohne JS vollständig lesbar.

### Hero
- Vollhöhe, Bild `object-fit: cover`, Schleier (siehe 3), Inhalt unten links. Eyebrow → `h1` (`--fg-on-ink`) → Claim (Achsen-Verlauf als Textfüllung) → Beschreibung (`--fg-on-ink-muted`) → Buttons.
- `theme-color` im `<head>` ist `#15042b`.

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
| 2026-09-17 | Erstfassung. Palette von Ink/Blau/Amber auf das H&W-Lila-Schema umgestellt (Token-Namen unverändert, Werte neu; neue Tokens `--accent`, `--accent-hover`, `--accent-soft`, `--accent-on-ink`, `--brand-gradient`, `--mauve`, `--process-text`, `--production-text`, `--line-strong`, `--line-on-ink-strong`, `--shadow-*`, `--radius-pill`). Achse Lavendel → Gold festgelegt, Gold als sparsamer Akzent; noch am selben Tag auf Lavendel → Magenta-Violett (`#d36cf0`, Text-Variante `#7e2599`) umgestellt, damit die gesamte Palette in der Lila-Familie bleibt. Eyebrow neu als Sora-Label in Satzschreibung mit optionalem Index (`data-n`); Monospace-Uppercase in Nav, Footer, Kontrast und Unternehmen entfernt. `.tag`-Komponente mit vier Phasen-Modifikatoren als Vertrag für `Steps.astro`. Hero-Schleier, Nav-Verlauf, Fokusring, Selection, `theme-color` und Favicon auf die Palette gebracht. 38 Text/Fläche-Paare per Skript geprüft, alle bestehen. |
