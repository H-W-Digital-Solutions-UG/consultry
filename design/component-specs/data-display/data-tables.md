# Data Tables

**Komponenten-Familie:** Data Display
**DS-Version:** v1.3
**DS-Referenz:** 5.5
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Data Tables stellen strukturierte Daten in Zeilen und Spalten dar. Primaer von Martina (Admin: Berater-Tabellen, Compliance) und Katrin (Pipeline, Matching-Ergebnisse) genutzt. Unterstuetzen Sortierung, Filterung, Selektion und Bulk-Aktionen.

---

## 2. Anatomie

```
┌─ Data Table ──────────────────────────────────────────────┐
│  ☐  Name ▲         Rolle           Status    Score  Akt. │  <- Header Row (sticky)
├───────────────────────────────────────────────────────────┤
│  ☐  [Av] Markus S. Senior SC       ● Aktiv   [94]  [→]  │  <- Body Row
│  ☐  [Av] Lisa T.   Consultant      ● Aktiv   [78]  [→]  │  <- Alternating bg (optional)
│  ☐  [Av] Tim K.    Junior SC       ◐ Onboard [—]   [→]  │
├───────────────────────────────────────────────────────────┤
│  Zeige 1-20 von 54                      [< 1 2 3 >]      │  <- Pagination
└───────────────────────────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Borders | Alternating | Shadow | Verwendung |
|----------|---------|-------------|--------|------------|
| **Default** | `border-subtle` rows | Nein | none | Standard-Listen: Pipeline, Signale. |
| **Striped** | `border-subtle` rows | `neutral-50` jede 2. Zeile | none | Finanz-Tabellen, Admin-Listen. Dense Data. |
| **Compact** | `border-subtle` rows | Optional | none | Inline-Tabellen in Cards/Slide-Overs. Reduziertes Padding. |
| **Selectable** | `border-subtle` rows | Nein | none | Checkbox-Spalte links. Bulk-Aktionen. Admin, Matching. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `default` / `striped` / `compact` / `selectable` | `default` | Tabellen-Variante. |
| `columns` | Array of Column Defs | erforderlich | Spalten-Definitionen (key, label, type, sortable, width). |
| `data` | Array | erforderlich | Zeilen-Daten. |
| `sortable` | Boolean | `true` | Ermoeglicht Spalten-Sortierung. |
| `selectable` | Boolean | `false` | Aktiviert Checkbox-Spalte + Bulk-Actions. |
| `pagination` | `{ page, pageSize, total }` | `null` | Pagination-Konfiguration. |
| `stickyHeader` | Boolean | `true` | Header bleibt beim Scrollen sichtbar. |
| `onRowClick` | Function | `null` | Zeilen-Klick-Handler (L0→L1/L2 Transition). |
| `emptyState` | Component | Default Empty State | Custom Empty State. |

**Column Types:**

| Type | Alignment | Font | Rendering |
|------|-----------|------|-----------|
| `text` | Left | `body-md` | Truncate mit Ellipsis (nie mid-word fuer Deutsch). |
| `number` | Right | `mono-md` | Deutsches Format: 1.234,56 EUR. |
| `score` | Center | `mono-md` | Score Badge Komponente. |
| `status` | Center | — | Badge Komponente. |
| `date` | Left | `body-md` | DD.MM.YYYY. |
| `avatar` | Left | — | Avatar (sm) + Name. |
| `actions` | Right | — | Icon-Buttons (sm). Max 3 sichtbar, Rest in "..." Menu. |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Header bg | `neutral-50` |
| Header font | `heading-sm`, `neutral-600` |
| Header sticky | `z-index: 10`, `border-subtle` bottom |
| Body row bg | `neutral-0` |
| Alternating row bg | `neutral-50` (Striped) |
| Row hover | `interactive-warm` bg, `duration-fast` |
| Row selected | `brand-primary` 5% bg + left border 3px `brand-primary` |
| Row border | `border-subtle` bottom |
| Cell padding | `space-2` vertical, `space-3` horizontal |
| Text | `body-md`, `neutral-900` |
| Metadata | `body-sm`, `neutral-600` |
| Sort icon | `icon-xs`, `neutral-500` (inactive), `neutral-900` (active) |
| Checkbox | 16px, `brand-primary` checked, `radius-sm` |
| Pagination | `body-sm`, `neutral-600`. Page-Buttons: Ghost `sm`. |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Row Hover** | `interactive-warm` bg | `duration-fast`. Cursor: pointer wenn `onRowClick`. |
| **Row Selected** | `brand-primary` 5% bg + left border 3px | Checkbox checked. |
| **Row Active** | Brightness -3% | `duration-instant`. |
| **Sort Active** | Spalten-Header Bold + Sort-Arrow (▲/▼) | Wechsel: ASC→DESC→None. |
| **Loading** | Shimmer-Rows (3-5 Placeholder-Zeilen) | Bei initialem Laden und Seiten-Wechsel. |
| **Empty** | Illustration + Text, zentriert ueber volle Tabellen-Breite | DS 6.7 + 4.1. |
| **Bulk Selection** | "N ausgewaehlt" Banner + Bulk-Actions erscheinen | Ueber der Tabelle, sticky. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| Desktop | Volle Tabelle mit allen Spalten. Horizontaler Scroll nur bei Bedarf. |
| Tablet | Reduzierte Spalten. Sekundaere Spalten hidden. Horizontal scrollbar. |
| Mobile | **Tabelle → Card-Liste.** Jede Zeile wird zu einer kompakten Card (DS 5.3 Compact). Oder: horizontal scrollbar mit fixierter erster Spalte. |

---

## 8. Voice Input Integration

Nicht zutreffend.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | `<table>` mit `<thead>`, `<tbody>`. Nie `<div>`-basiert. |
| **Sortierung** | `aria-sort="ascending"` / `"descending"` / `"none"` auf `<th>`. |
| **Selektion** | `aria-selected="true"` auf selektierten Zeilen. |
| **Keyboard** | `Tab` springt zwischen interaktiven Elementen. Arrow Keys fuer Zellen-Navigation (optional). |
| **Screen Reader** | Spalten-Header angesagt. Score: "Match-Score: 87 von 100". |
| **Caption** | Tabelle hat `<caption>` (visuell hidden wenn noetig): "Berater-Uebersicht, 54 Eintraege". |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Filter Bar (`composition/filter-bar.md`) | Filter Bar oberhalb der Tabelle. |
| Action Bar (`composition/action-bar.md`) | Bulk-Actions bei Selektion. |
| Badges (`primitives/badges-tags.md`) | Status-Spalte verwendet Badges. |
| Score Displays (`data-display/score-displays.md`) | Score-Spalte verwendet Score Badge. |
| Avatars (`primitives/avatars.md`) | Avatar-Spalte. |
| Slide-Over Panel (`composition/slide-over-panel.md`) | Row-Klick oeffnet Detail im Slide-Over. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Mobile Card-Liste-Fallback. Bulk-Selection-Pattern. |
