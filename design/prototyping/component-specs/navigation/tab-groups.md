# Tab Groups

**Komponenten-Familie:** Navigation
**DS-Version:** v1.3
**DS-Referenz:** — (neu)
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Tab Groups ermoeglichen das Wechseln zwischen Inhalts-Sektionen innerhalb eines Screens, ohne die Seite zu verlassen. Sie bieten horizontale, kompakte Navigation fuer zusammengehoerende Ansichten. Drei Varianten decken unterschiedliche Kontexte ab: Line Tabs fuer Standard-Screens, Pill Tabs fuer kompakte Card-Kontexte, und Segment Tabs fuer binaere/ternaere Toggles.

**Verwendung in Screens:**
- **Opportunity Detail:** Tabs fuer verschiedene Sektionen (Uebersicht, Matching, Dokumente, Aktivitaet).
- **Consultant Profil:** Skills / Projekte / CV.
- **Dashboard Filter:** Zeitraeume, Ansichtsoptionen.
- **Allgemein:** Ueberall, wo 2-6 gleichrangige Inhalts-Bereiche auf einer Seite dargestellt werden.

---

## 2. Anatomie

**Line Tabs (Standard):**

```
┌───────────────────────────────────────────────────────────┐
│                                                           │
│  ▎Uebersicht    Matching    Dokumente 4    Aktivitaet    │
│  ━━━━━━━━━━━                          ↑                  │
│       ↑                          Badge-Count              │
│  Aktiver Tab (2px brand-primary bottom border)            │
│                                                           │
│  ─────────────────────────────────────────────── (border) │
│                                                           │
│  [Tab Content Area]                                       │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

**Pill Tabs (Compact):**

```
┌─────────────────────────────────────────┐
│                                         │
│  ┌────────────┐ ┌──────────┐ ┌───────┐ │
│  │ Uebersicht │ │ Projekte │ │  CV   │ │
│  └────────────┘ └──────────┘ └───────┘ │
│       ↑                                 │
│  Aktiv: brand-primary bg, neutral-0 txt │
│                                         │
└─────────────────────────────────────────┘
```

**Segment Tabs (Toggle):**

```
┌───────────────────────────────────┐
│                                   │
│  ┌─────────┬──────────┐          │
│  │  Liste  │  Karte   │          │
│  └─────────┴──────────┘          │
│       ↑          ↑               │
│  Aktiv: neutral-0  Inaktiv:      │
│  bg, neutral-900   neutral-500   │
│  text              text          │
│                                  │
└──────────────────────────────────┘
```

**Elemente:**
- **Tab-Item:** Icon (optional, `icon-sm`) + Label (`body-md`) + Badge-Count (optional, `body-xs`).
- **Aktiv-Indikator (Line):** 2px unterer Border, `brand-primary`.
- **Aktiv-Indikator (Pill):** Gefuellter Hintergrund, `brand-primary`, `radius-md`.
- **Aktiv-Indikator (Segment):** Gefuellter Hintergrund, `neutral-0`, `shadow-sm`, innerhalb eines verbundenen Containers.
- **Container-Border (Line):** `border-subtle` am unteren Rand der Tab-Leiste.
- **Container-Border (Segment):** `border-default` um den gesamten Segment-Container, `radius-md`.

---

## 3. Varianten

| Variante | Aktiv-Indikator | Verwendung |
|----------|----------------|------------|
| **Line Tabs** | 2px `brand-primary` Bottom-Border unter aktivem Tab. | Standard fuer die meisten Screens. Opportunity Detail, Consultant Profil, Knowledge Base. |
| **Pill Tabs** | `brand-primary` Hintergrund, `neutral-0` Text. `radius-md`. | In Cards und kompakten Kontexten. Innerhalb von Card-Headern, Filterleisten. |
| **Segment Tabs** | `neutral-0` Hintergrund mit `shadow-sm`. Verbundener Container. | Binaere/ternaere Toggles. "Liste | Karte", "Alle | Meine", "Woche | Monat". |

| Modifikator | Beschreibung |
|-------------|-------------|
| **Mit Icons** | Icon links vom Label. Nur wenn alle Tabs ein Icon haben (Konsistenz). |
| **Mit Badge** | Zahlen-Badge rechts vom Label. Zeigt Anzahl (z.B. Dokumente: 4). |
| **Scrollable** | Bei > 6 Tabs oder auf kleinen Viewports: horizontaler Scroll mit Fade-Indikatoren. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `line` / `pill` / `segment` | `line` | Visuelle Variante. |
| `tabs` | Array of Tab | erforderlich | Tab-Definitionen (min 2, max 6 sichtbar). |
| `activeTab` | String | erster Tab | ID des aktiven Tabs. |
| `onChange` | Function | erforderlich | Handler bei Tab-Wechsel. |
| `scrollable` | Boolean | `auto` | Horizontaler Scroll bei Overflow. `auto` aktiviert bei > 6 Tabs oder wenn Breite nicht ausreicht. |
| `fullWidth` | Boolean | `false` | Tabs dehnen sich auf volle Container-Breite aus (nur Line und Segment). |

**Tab:**

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `id` | String | erforderlich | Eindeutige Tab-ID. |
| `label` | String | erforderlich | Anzeige-Label. |
| `icon` | String | `null` | Optionales Lucide-Icon-Name (`icon-sm`). |
| `badge` | Number | `0` | Badge-Count. `0` = kein Badge. |
| `disabled` | Boolean | `false` | Tab deaktiviert (nicht klickbar). |

---

## 5. Design Tokens

**Line Tabs:**

| Element | Token |
|---------|-------|
| Container padding | `space-0` vertikal, `space-4` (16px) horizontal (innerhalb des uebergeordneten Containers) |
| Container border | `border-subtle` bottom |
| Tab padding | `space-3` (12px) horizontal, `space-2` (8px) vertikal |
| Tab gap | `space-1` (4px) zwischen Tabs |
| Tab Label (inaktiv) | `body-md`, `neutral-600` |
| Tab Label (aktiv) | `body-md`, `neutral-900`, font-weight 600 (SemiBold) |
| Tab Label (hover) | `body-md`, `neutral-700` |
| Aktiv-Indikator | 2px bottom border, `brand-primary`, `radius-sm` (abgerundete Enden) |
| Icon (inaktiv) | `icon-sm` (16px), `neutral-500` |
| Icon (aktiv) | `icon-sm` (16px), `neutral-900` |

**Pill Tabs:**

| Element | Token |
|---------|-------|
| Container padding | `space-1` (4px), `neutral-100` bg, `radius-lg` |
| Tab padding | `space-2` (8px) vertikal, `space-3` (12px) horizontal |
| Tab Label (inaktiv) | `body-md`, `neutral-600` |
| Tab Label (aktiv) | `body-md`, `neutral-0`, font-weight 500 (Medium) |
| Aktiv bg | `brand-primary` |
| Aktiv radius | `radius-md` |
| Inaktiv hover bg | `neutral-200` |

**Segment Tabs:**

| Element | Token |
|---------|-------|
| Container | `neutral-100` bg, `border-default`, `radius-md`, `space-1` (4px) padding |
| Tab padding | `space-2` (8px) vertikal, `space-4` (16px) horizontal |
| Tab Label (inaktiv) | `body-md`, `neutral-500` |
| Tab Label (aktiv) | `body-md`, `neutral-900`, font-weight 500 (Medium) |
| Aktiv bg | `neutral-0` |
| Aktiv shadow | `shadow-sm` |
| Aktiv radius | `radius-sm` |

**Gemeinsam:**

| Element | Token |
|---------|-------|
| Badge | `body-xs`, `neutral-600` auf `neutral-200` bg, `radius-full`, min-width 18px, `space-1` (4px) links vom Label-Abstand |
| Badge (aktiv, Line) | `body-xs`, `brand-primary` auf `brand-primary` bei 12% Opacity bg |
| Badge (aktiv, Pill) | `body-xs`, `neutral-0` auf `neutral-0` bei 20% Opacity bg |
| Disabled Tab | Label `neutral-400`, cursor not-allowed, kein Hover-Effekt |
| Scroll Fade (links) | Linear-gradient, `neutral-0` bei 100% → transparent, 24px breit |
| Scroll Fade (rechts) | Linear-gradient, transparent → `neutral-0` bei 100%, 24px breit |
| Tab Transition | `duration-fast`, `easing-default` fuer alle State-Wechsel |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Inaktiv** | Label `neutral-600`. Kein Indikator. | Klickbar. |
| **Hover** | Line: Label `neutral-700`. Pill: `neutral-200` bg. Segment: Label `neutral-700`. | `duration-fast`. Cursor pointer. |
| **Aktiv** | Line: `brand-primary` 2px Bottom-Border, Label `neutral-900` SemiBold. Pill: `brand-primary` bg, `neutral-0` Label. Segment: `neutral-0` bg + `shadow-sm`, `neutral-900` Label. | Genau 1 Tab aktiv. |
| **Focus (Keyboard)** | `shadow-focus` Ring um den fokussierten Tab. | 2px `brand-primary` Outline. |
| **Disabled** | Label `neutral-400`. Kein Hover, kein Cursor-Wechsel. | Nicht klickbar. `aria-disabled="true"`. |
| **Tab-Wechsel** | Line: Indikator gleitet horizontal zum neuen Tab (`duration-fast`). Pill: Crossfade bg (`duration-fast`). Segment: bg gleitet (`duration-fast`). | Content-Bereich wechselt sofort (kein Slide). |
| **Scrollable Overflow** | Fade-Gradient links/rechts sichtbar. Horizontaler Scroll bei Touch/Drag. | Scroll-Indikatoren verschwinden wenn am Rand. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-sm` (< 640px) | Tabs werden scrollable falls sie nicht in die Breite passen. Fade-Indikatoren sichtbar. Pill und Segment Varianten passen sich an verfuegbare Breite an. |
| `breakpoint-md` (< 768px) | Wie `breakpoint-sm`. Line Tabs koennen auf `fullWidth` umschalten wenn <= 4 Tabs. |
| `breakpoint-lg` (>= 1024px) | Alle Tabs sichtbar (bis max 6). Kein Scrolling noetig bei Standard-Layouts. |
| `breakpoint-xl`+ | Wie `breakpoint-lg`. Bei `fullWidth`: Tabs verteilen sich gleichmaessig. |

**Mobile-Scroll-Verhalten:**
- Touch: Horizontaler Swipe zum Scrollen.
- Fade-Gradient zeigt an, dass weitere Tabs vorhanden sind.
- Aktiver Tab scrollt automatisch in den sichtbaren Bereich.
- Scroll-Snap auf Tab-Grenzen fuer praezise Positionierung.

---

## 8. Voice Input Integration

Nicht zutreffend — reines Navigations-Element. Tab-Wechsel erfolgt durch Klick oder Tastatur. Voice Input ist in den jeweiligen Tab-Inhalten verfuegbar (z.B. Copilot innerhalb eines Tab-Panels).

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | Tab-Leiste: `role="tablist"`. Einzelner Tab: `role="tab"`. Content-Panel: `role="tabpanel"`. |
| **ARIA** | Aktiver Tab: `aria-selected="true"`. Inaktive Tabs: `aria-selected="false"`. Disabled: `aria-disabled="true"`. Panel: `aria-labelledby` verweist auf den zugehoerigen Tab. |
| **Keyboard** | `Arrow Left`/`Arrow Right` navigiert zwischen Tabs. `Enter`/`Space` aktiviert den fokussierten Tab. `Home` springt zum ersten Tab. `End` springt zum letzten Tab. |
| **Focus Management** | Bei Tab-Wechsel: Focus bleibt auf der Tab-Leiste (nicht auf dem Panel). `tabindex="0"` auf aktivem Tab, `tabindex="-1"` auf inaktiven Tabs. |
| **Badge** | Badge-Count in `aria-label` integriert: "Dokumente, 4 Eintraege". |
| **Screen Reader** | Beim Navigieren: "Tab 2 von 4, Matching". Beim Aktivieren: "Matching Tab ausgewaehlt". |
| **Reduced Motion** | Indikator-Gleiten entfaellt. Sofortiger Positionswechsel. |
| **Kontrast** | Line: `brand-primary` Indikator auf `neutral-0` bg — 4.62:1. Pill: `neutral-0` auf `brand-primary` — 4.62:1. Segment: `neutral-900` auf `neutral-0` — 13.5:1. Alle ueber WCAG AA. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Sidebar (`navigation/sidebar.md`) | Sidebar navigiert zwischen Screens. Tab Groups navigieren innerhalb eines Screens. Nie redundant verwenden. |
| Bottom Navigation Bar (`navigation/bottom-navigation-bar.md`) | Mobile: Bottom Nav fuer Top-Level, Tabs fuer Intra-Screen. Können gleichzeitig sichtbar sein. |
| Buttons (`primitives/buttons.md`) | Segment Tabs aehneln visuell Button-Groups, sind aber semantisch Tabs (wechseln Inhalts-Panels). |
| Cards (`data-display/cards.md`) | Pill Tabs werden haeufig innerhalb von Card-Headern verwendet. |
| Slide-Over Panel (`composition/slide-over-panel.md`) | Slide-Over-Panels koennen eigene Tab Groups im Header haben (z.B. Opportunity-Detail Slide-Over). |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Drei Varianten (Line, Pill, Segment). Scrollable-Modus. Badge-Support. Keyboard-Navigation. |
