# Cards

**Komponenten-Familie:** Data Display
**DS-Version:** v1.3
**DS-Referenz:** 5.3
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Cards sind die primaeren Container fuer gruppierte Informationen. Sie repraesentieren Entitaeten (Berater, Kunden, Opportunities), KI-generierte Inhalte und KPI-Metriken. Cards folgen dem Progressive-Disclosure-Pattern: L0 (Kompakt) → L1 (Summary) → L2 (Detail via Slide-Over).

---

## 2. Anatomie

```
┌─────────────────────────────────────────┐
│  [Icon/Avatar]  Title          [Badge]  │  <- Header: space-4 padding
│                 Subtitle                │
├─────────────────────────────────────────┤  <- Divider: border-subtle
│                                         │
│  Content area                           │  <- Body: space-4 padding
│  (Text, scores, tags, mini-charts)      │
│                                         │
├─────────────────────────────────────────┤  <- Divider (optional)
│  [Action Button]       [Secondary Btn]  │  <- Footer: space-3 padding
└─────────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Background | Border | Shadow | Verwendung |
|----------|-----------|--------|--------|------------|
| **Default** | `neutral-0` | `border-default` | `shadow-sm` | Berater, Kunden, Opportunities. |
| **AI-Generated** | `ai-surface` | Left 3px `brand-primary` | `shadow-sm` | Engagement Briefs, KI-Empfehlungen, Match-Erklaerungen. Sparkles + "KI-generiert". |
| **Metric** | `neutral-0` | none | `shadow-sm` | Dashboard-KPIs: Umsatz, Auslastung. Grosse Zahl prominent. |
| **Signal** | `neutral-0` | Left 4px (Typ-farbig) | `shadow-sm` | Signal-Feed-Items. Farbe nach Signal-Typ. |
| **Compact** | `neutral-0` | `border-subtle` | none | Dense Listen: Suchergebnisse, Pipeline-Items. Reduziertes Padding (`space-3`). |
| **Selected** | `neutral-0` | Left 3px `brand-primary` | `shadow-sm` | Multi-Select: Team-Zusammenstellung, Skill-Auswahl. `interactive-warm` bg. |
| **Predictive** | `ai-surface` | `border-subtle` | none | "Du wirst wahrscheinlich..." Cards (DS 6.12). Leichter als AI-Generated. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | String | `default` | Visuelle Variante. |
| `title` | String | erforderlich | Card-Titel. |
| `subtitle` | String | `null` | Untertitel. |
| `avatar` | Avatar Props | `null` | Avatar/Icon im Header. |
| `badge` | Badge Props | `null` | Status-Badge im Header rechts. |
| `actions` | Array of Button Props | `[]` | Footer-Aktionen. |
| `selected` | Boolean | `false` | Selected-State (fuer Multi-Select). |
| `clickable` | Boolean | `true` | Gesamte Card ist klickbar (L0→L1 Transition). |
| `leftBorderColor` | Token | varianten-abhaengig | Farbe des linken Borders (Signal, AI, Selected). |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Background | `neutral-0` (default), `ai-surface` (AI/Predictive) |
| Border | `border-default` (1px `neutral-200`) |
| Border-radius | `radius-lg` (10px) |
| Shadow | `shadow-sm` |
| Header padding | `space-4` (16px) |
| Body padding | `space-4` |
| Footer padding | `space-3` (12px) |
| Divider | `border-subtle` (1px `neutral-100`) |
| Title | `heading-sm` (14px SemiBold), `neutral-900` |
| Subtitle | `body-sm` (12px), `neutral-600` |
| Left border (AI) | 3px `brand-primary` |
| Left border (Signal) | 4px, Typ-farbig |
| Left border (Selected) | 3px `brand-primary` |
| Selected bg | `interactive-warm` |
| Hover | `interactive-warm` bg, `duration-fast` |
| AI label | `body-xs`, `ai-accent`, Sparkles `icon-xs` |

**Signal-Typ-Farben:**

| Signal-Typ | Left Border |
|-----------|-------------|
| Leadership-Wechsel | `brand-primary` |
| Ausschreibung | `semantic-warning` |
| Hiring-Signal | `semantic-info` |
| Event | `brand-warm` |
| Risk | `semantic-danger` |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Default** | Wie Variante | — |
| **Hover** | `interactive-warm` bg | `duration-fast`. Nur wenn `clickable`. |
| **Active** | Brightness -3% | `duration-instant`. |
| **Selected** | Left border `brand-primary` + `interactive-warm` bg | Toggle on click (Multi-Select). |
| **Focus** | `border-focus` ring | Keyboard-Navigation. |
| **Loading** | Shimmer-Placeholder: Header-Block + 3 Body-Zeilen | DS 3.6 Motion. |
| **Empty** | Illustration (DS 4.1) + Text | "Keine Daten verfuegbar." |
| **Expand (L0→L1)** | Inline Height-Transition | `duration-normal`. Mehr Content sichtbar. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| Desktop | Standard-Breite per Grid/Layout. Cards in Grids oder Listen. |
| Tablet | Cards volle Breite in Listen. 2-Spalten-Grid in Dashboards. |
| Mobile | Cards volle Breite. Padding reduziert auf `space-3`. Footer-Aktionen gestapelt bei >2 Buttons. |

---

## 8. Voice Input Integration

Nicht zutreffend — Cards sind Display-Komponenten.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | Clickable: `role="article"` oder `role="button"` (wenn gesamte Card klickbar). |
| **Keyboard** | `Tab` fokussiert Card. `Enter` oeffnet Detail. `Space` toggled Selection (Multi-Select). |
| **Screen Reader** | Card-Titel + Badge-Status angesagt. AI-Cards: "KI-generierter Inhalt". |
| **Reduced Motion** | Hover-Transition deaktiviert. Expand sofort. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Badges (`primitives/badges-tags.md`) | Status-Badge im Card-Header. |
| Avatars (`primitives/avatars.md`) | Avatar im Card-Header. |
| Score Displays (`data-display/score-displays.md`) | Score Badge/Ring in Card-Body. |
| Slide-Over Panel (`composition/slide-over-panel.md`) | Card-Klick oeffnet Detail im Slide-Over (L1→L2). |
| Bento Grid (`composition/bento-grid.md`) | Cards als Kacheln im Bento Grid. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Predictive-Variante hinzugefuegt (DS 6.12). |
