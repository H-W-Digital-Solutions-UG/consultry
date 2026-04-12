# Charts & KPI

**Komponenten-Familie:** Data Display
**DS-Version:** v1.3
**DS-Referenz:** — (neu)
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Charts & KPI Komponenten visualisieren quantitative Daten in Dashboards, Reports und Detail-Screens. Consultry nutzt ein reduziertes Chart-Vokabular: wenige Chart-Typen, konsistent gestylt, auf Klarheit statt Kreativitaet ausgerichtet.

**Chart-Vokabular:**
- **Metric Card** — Einzelne KPI-Zahl mit Trend
- **Bar Chart** — Vergleiche (Umsatz pro Monat, Berater pro Skill)
- **Line Chart** — Trends (Pipeline-Entwicklung, Auslastung)
- **Donut Chart** — Verteilungen (Pipeline-Phasen, Berater-Status)
- **Sparkline** — Kompakter Inline-Trend in Metric Cards/Tabellen

---

## 2. Anatomie

### Metric Card
```
┌─ Metric Card ─────────────────┐
│  Umsatz MTD                   │  <- Label (body-sm)
│  2.4M EUR                     │  <- Value (heading-xxl, mono)
│  +12% ▲                       │  <- Trend (semantic-success)
│  ▁▂▃▄▅▆▇█                    │  <- Sparkline (optional)
└───────────────────────────────┘
```

### Bar / Line Chart
```
┌─ Chart ───────────────────────────────────────┐
│  Pipeline-Entwicklung Q1 2026          [⋮]   │  <- Header + Options
├───────────────────────────────────────────────┤
│                                               │
│  ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐             │
│  │  │ │  │ │  │ │  │ │  │ │██│             │  <- Chart Area
│  │  │ │██│ │██│ │██│ │██│ │██│             │
│  │██│ │██│ │██│ │██│ │██│ │██│             │
│  Jan   Feb   Mar   Apr   Mai   Jun            │
│                                               │
├───────────────────────────────────────────────┤
│  ● Gewonnen  ● Pipeline  ● Verloren          │  <- Legend
└───────────────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Typ | Verwendung |
|----------|-----|------------|
| **Metric Card** | Zahl + Trend + optional Sparkline | KPI Strip im Cockpit, Dashboard-Zellen. |
| **Bar Chart** | Vertikale Bars (gruppiert oder gestapelt) | Umsatz-Vergleich, Berater pro Skill-Kategorie. |
| **Line Chart** | Linien mit Datenpunkten | Pipeline-Trend, Auslastungs-Trend, Score-Entwicklung. |
| **Donut Chart** | Ring-Segment | Pipeline-Phasen-Verteilung, Berater-Status-Verteilung. |
| **Sparkline** | Mini-Line-Chart (inline) | In Metric Cards, Tabellen-Zellen. |

---

## 4. Props / Konfiguration

### Metric Card

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `label` | String | erforderlich | KPI-Label. |
| `value` | String | erforderlich | Formatierter Wert ("2.4M EUR"). |
| `trend` | `{ value, direction }` | `null` | Trend: "+12%", "up" / "down" / "flat". |
| `sparklineData` | Array of Number | `null` | Datenpunkte fuer Sparkline. |
| `onClick` | Function | `null` | Klick-Handler (Drill-Down). |

### Chart (Bar / Line / Donut)

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `type` | `bar` / `line` / `donut` | `bar` | Chart-Typ. |
| `title` | String | erforderlich | Chart-Titel. |
| `data` | Array of Series | erforderlich | Daten-Serien. |
| `xAxis` | `{ label, format }` | `null` | X-Achsen-Konfiguration. |
| `yAxis` | `{ label, format }` | `null` | Y-Achsen-Konfiguration. |
| `legend` | Boolean | `true` | Legende anzeigen. |
| `height` | Number | `240` | Chart-Hoehe in px. |
| `interactive` | Boolean | `true` | Hover-Tooltips. |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| **Metric Card** | |
| Card bg | `neutral-0` |
| Card border | `border-subtle`, `radius-lg` |
| Card shadow | `shadow-sm` |
| Card padding | `space-4` |
| Label | `body-sm`, `neutral-600` |
| Value | `heading-xxl`, `mono-md`, `neutral-900` |
| Trend up | `semantic-success` + ▲ |
| Trend down | `semantic-danger` + ▼ |
| Trend flat | `neutral-500` + → |
| Sparkline | 2px stroke, `brand-primary`, 32px Hoehe |
| **Chart** | |
| Chart bg | `neutral-0` |
| Chart border | `border-subtle`, `radius-lg` |
| Header | `heading-sm`, `neutral-900` |
| Axis labels | `body-xs`, `neutral-500` |
| Grid lines | `neutral-100`, 1px |
| Bar fill | `brand-primary` (primaer), `brand-warm` (sekundaer), `neutral-300` (tertiaer) |
| Line stroke | 2px, `brand-primary` (primaer), `brand-warm` (sekundaer) |
| Donut segments | `brand-primary`, `brand-warm`, `neutral-300`, `semantic-success`, `semantic-warning` |
| Tooltip bg | `neutral-900`, `radius-md`, `body-sm`, `neutral-0` Text |
| Legend dots | 8px, `radius-full`, Farbe der Serie |
| Legend font | `body-xs`, `neutral-600` |

**Farbpalette fuer Daten-Serien (max 5):**

| Reihenfolge | Token |
|-------------|-------|
| 1 | `brand-primary` |
| 2 | `brand-warm` |
| 3 | `neutral-400` |
| 4 | `semantic-success` |
| 5 | `semantic-warning` |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Default** | Chart mit Daten gerendert | — |
| **Hover (Bar/Point)** | Tooltip mit exaktem Wert | `duration-fast` Fade. |
| **Hover (Metric Card)** | Subtiler `shadow-md`, Cursor Pointer (wenn klickbar) | Drill-Down in Detail. |
| **Loading** | Shimmer-Placeholder (Metric: Rechteck. Chart: Achsen + Shimmer-Bars) | Bei Daten-Laden. |
| **Empty** | "Keine Daten verfuegbar" im Chart-Bereich | Achsen sichtbar, keine Datenpunkte. |
| **Filtered** | Chart aktualisiert mit Transition | `duration-normal` Bar-Height/Line-Path Transition. |
| **Animated Entry** | Bars wachsen von 0, Lines zeichnen sich | `duration-slow`, `easing-enter`. Nur bei erstem Render. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| Desktop | Charts in Bento Grid Zellen. Metric Cards im KPI Strip. |
| Tablet | Charts volle Breite. 2-spaltige Metric Cards. |
| Mobile | Charts volle Breite, reduzierte Hoehe (180px). Metric Cards als Stack. Donut → Horizontal Bar. |

---

## 8. Voice Input Integration

Nicht zutreffend.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Metric Card** | `aria-label="Umsatz MTD: 2,4 Millionen Euro, plus 12 Prozent"`. |
| **Chart** | `role="img"`, `aria-label` mit Chart-Titel und Zusammenfassung. |
| **Daten-Tabelle** | Jeder Chart hat eine Hidden `<table>` mit den Roh-Daten (Screen Reader Fallback). |
| **Farbe** | Nie nur Farbe als Unterscheidung. Immer Legende mit Beschriftung. Patterns (Stripes) als Option. |
| **Reduced Motion** | Chart-Entry-Animationen deaktiviert. Sofortige Darstellung. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Bento Grid (`composition/bento-grid.md`) | Charts als Bento Grid Zellen in Dashboards. |
| Cards (`data-display/cards.md`) | Metric Cards in Card-Headern. Sparklines in Compact Cards. |
| Score Displays (`data-display/score-displays.md`) | Score Ring vs. Donut Chart: Score = einzelner Wert, Donut = Verteilung. |
| Data Tables (`data-display/data-tables.md`) | Sparklines in Tabellen-Zellen. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. 5 Chart-Typen. Reduziertes Vokabular. Daten-Farb-Palette. |
