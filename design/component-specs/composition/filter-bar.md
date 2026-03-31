# Filter Bar

**Komponenten-Familie:** Composition
**DS-Version:** v1.3
**DS-Referenz:** 6.2 (Signal Feed Pattern)
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Die Filter Bar ermoeglicht das Filtern, Sortieren und Eingrenzen von Listen- und Feed-Inhalten. Sie bietet schnellen Zugriff auf haeufige Filter als Chips, erweiterte Filter in Dropdown-Panels und gespeicherte Filter-Presets.

**Haeufigste Verwendungen:**
- Signal Feed: Filter nach Branche, Score, Signal-Typ, Region
- Staffing & Matching: Filter nach Verfuegbarkeit, Skills, Standort, Erfahrung
- Data Tables: Spalten-Filter, Sortierung
- Recruiting Pipeline: Filter nach Status, Position, Abteilung

---

## 2. Anatomie

```
Desktop (Inline):
┌──────────────────────────────────────────────────────────────────────────────┐
│  [Meine Filter ▾]  [Branche: Retail ×] [Score: >80 ×] [+ Filter]  │ Sortieren: Score ↓ │
└──────────────────────────────────────────────────────────────────────────────┘
     ↑                     ↑                  ↑               ↑              ↑
  Preset Dropdown    Active Chip         Active Chip     Add Filter     Sort Dropdown

Desktop (Combined, mit erweitertem Panel):
┌──────────────────────────────────────────────────────────────────────────────┐
│  [Meine Filter ▾]  [Branche: Retail ×] [Score: >80 ×] [+ Filter]  │ Sortieren: Score ↓ │
├──────────────────────────────────────────────────────────────────────────────┤
│  ┌─ Filter Panel ───────────────────────────────────────────────────────┐   │
│  │  Branche          Score           Region           Zeitraum         │   │
│  │  ☐ Retail         [__] - [__]     ☐ DACH           ☐ Letzte Woche   │   │
│  │  ☐ Finance                        ☐ Schweiz        ☐ Letzter Monat  │   │
│  │  ☐ Automotive                     ☐ Oesterreich    ☐ Letztes Jahr   │   │
│  │                                                                      │   │
│  │  [Alle zuruecksetzen]                          [N Filter anwenden]   │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────┘

Mobile:
┌──────────────────────────────────────┐
│  [Filter (3)]        [Sortieren ↓]   │  <- Summary Button + Sort
│  [Branche: Retail ×] [Score ×] →     │  <- Horizontal Scroll Chips
└──────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Verhalten | Verwendung |
|----------|-----------|------------|
| **Inline** | Horizontale Reihe von Filter-Chips. Scrollbar bei vielen Filtern. | Signal Feed, Staffing-Liste. Wenige, haeufig genutzte Filter. |
| **Dropdown** | Klick auf "+ Filter" oeffnet ein Panel mit allen Filteroptionen. Chips zeigen aktive Filter. | Data Tables, komplexe Suchen. Viele Filterdimensionen. |
| **Combined** | Inline-Chips fuer haeufige Filter + "+ Filter"-Button fuer erweiterte Optionen. | Standard-Empfehlung fuer die meisten Screens. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `inline` / `dropdown` / `combined` | `combined` | Filter-Variante. |
| `filters` | Array of Filter Configs | erforderlich | Verfuegbare Filterdimensionen. |
| `activeFilters` | Array of Active Filter | `[]` | Aktuell aktive Filter (gesteuert/controlled). |
| `onFilterChange` | Function | erforderlich | Callback bei Filter-Aenderung. |
| `sortOptions` | Array of Sort Configs | `[]` | Verfuegbare Sortieroptionen. |
| `activeSort` | Sort Config | `null` | Aktuell aktive Sortierung. |
| `onSortChange` | Function | `null` | Callback bei Sortier-Aenderung. |
| `presets` | Array of Preset Configs | `[]` | Gespeicherte Filter-Vorlagen. |
| `onPresetSave` | Function | `null` | Callback zum Speichern eines Presets. |
| `sticky` | Boolean | `false` | Fixiert unterhalb der Topbar beim Scrollen. |

**Filter Config:**

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `id` | String | erforderlich | Eindeutige Filter-ID. |
| `label` | String | erforderlich | Anzeige-Label (z.B. "Branche"). |
| `type` | `select` / `multi-select` / `range` / `date-range` / `boolean` | `select` | Filter-Typ. |
| `options` | Array | `[]` | Verfuegbare Werte (fuer Select/Multi-Select). |
| `inline` | Boolean | `false` | Direkt als Chip sichtbar (ohne "+ Filter"). |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Bar background | `neutral-0` |
| Bar border | `border-subtle` bottom |
| Bar padding | `space-3` vertikal, `space-4` horizontal |
| Bar sticky z-index | 20 |
| Active Chip bg | `brand-primary` |
| Active Chip text | `neutral-0` |
| Active Chip radius | `radius-full` |
| Active Chip padding | `space-1` vertikal, `space-3` horizontal |
| Active Chip font | `body-sm` |
| Active Chip close icon | `icon-xs` (X), `neutral-0` |
| Active Chip hover | `brand-primary-light` bg |
| Inactive Chip bg | `neutral-100` |
| Inactive Chip text | `neutral-700` |
| Inactive Chip radius | `radius-full` |
| Inactive Chip padding | `space-1` vertikal, `space-3` horizontal |
| Inactive Chip font | `body-sm` |
| Inactive Chip icon | `icon-xs` (Plus), `neutral-500` |
| Inactive Chip hover | `neutral-200` bg |
| Sort Dropdown font | `body-sm`, `neutral-700` |
| Sort Dropdown icon | `icon-xs` (ArrowDown/ArrowUp), `neutral-500` |
| Preset Dropdown font | `body-sm`, `brand-primary` |
| "Alle zuruecksetzen" | Ghost-Button, `brand-primary`, `body-sm` |
| Gap zwischen Chips | `space-2` |
| Filter Panel bg | `neutral-0` |
| Filter Panel shadow | `shadow-md` |
| Filter Panel radius | `radius-lg` (bottom) |
| Filter Panel padding | `space-4` |
| Filter Panel border | `border-subtle` top |
| Filter Panel enter | Slide down, `duration-normal`, `easing-enter` |
| Filter Panel exit | Slide up, `duration-fast`, `easing-exit` |
| Mobile Summary Button bg | `neutral-100` |
| Mobile Summary Button text | `neutral-700` |
| Mobile Summary Button active | `brand-primary` bg, `neutral-0` text (wenn Filter aktiv) |
| Mobile Summary Button radius | `radius-full` |
| Mobile Summary Button font | `body-sm` |
| Active filter count badge | `brand-primary` bg, `neutral-0` text, `radius-full` |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **No Filters Active** | Nur Inactive Chips (+ Filter) und Sort-Dropdown sichtbar. Kein "Alle zuruecksetzen". | — |
| **Filters Active** | Active Chips erscheinen. "Alle Filter zuruecksetzen"-Link wird sichtbar. | Chip-Erscheinen: `duration-fast` Fade + Scale. |
| **Chip Hover** | Active: `brand-primary-light`. Inactive: `neutral-200`. | `duration-fast`. |
| **Chip Remove** | Klick auf X: Chip verschwindet, Filter wird entfernt. | `duration-fast` Fade-out. Verbleibende Chips ruecken zusammen. |
| **Panel Open** | Filter-Panel slided unter der Bar hervor. | `duration-normal`, `easing-enter`. |
| **Panel Close** | Panel slided hoch und verschwindet. | `duration-fast`, `easing-exit`. |
| **Filter Apply** | "N Filter anwenden" Button (Primary). Panel schliesst, neue Chips erscheinen. | Chips animieren mit `duration-fast` Stagger. |
| **Preset Select** | Dropdown mit gespeicherten Presets. Auswahl setzt alle Filter. | Bestehende Chips ersetzen mit Cross-Fade. |
| **Preset Save** | "Aktuelle Filter speichern" am Ende des Preset-Dropdowns. Name-Input-Dialog. | — |
| **"Alle zuruecksetzen"** | Alle Active Chips verschwinden gleichzeitig. | `duration-fast` Fade-out. |
| **Loading** | Shimmer auf Chip-Reihe waehrend Filter-Optionen laden. | Bei initialem Laden der Filterdimensionen. |
| **Mobile: Summary Tap** | Bottom Sheet (Half) oeffnet sich mit allen Filterdimensionen. | Standard Bottom Sheet Animation. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-lg`+ | Volle Inline-Darstellung mit allen Chips, Sort rechts, Preset links. Filter Panel als Dropdown. |
| `breakpoint-md` | Chips horizontal scrollbar. Sort bleibt rechts. Filter Panel als Dropdown (schmaler). |
| `breakpoint-sm` | "Filter (N)"-Summary-Button oeffnet Bottom Sheet (Half-Variante) mit allen Filterdimensionen. Aktive Chips als horizontal scrollbare Reihe darunter. Sort als separater Button. |

**Sticky-Verhalten:**
- Bei `sticky: true` fixiert sich die Filter Bar unterhalb der Topbar beim Scrollen.
- Sticky z-index: 20 (unter Action Bar z-index: 35, unter Bottom Nav z-index: 50).
- Auf Mobile: nicht sticky (Platz-Optimierung). Filter ueber Summary-Button erreichbar.

---

## 8. Voice Input Integration

Nicht zutreffend — Filter-Eingaben erfolgen ueber Chip-Interaktion und Dropdown-Selektion. Fuer sprach-basierte Suche wird die Command Palette (DS 5.10) verwendet.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | Bar: `role="search"`, `aria-label="Filter und Sortierung"`. |
| **Chips** | Active: `role="button"`, `aria-label="Filter Branche: Retail entfernen"`. Inactive: `role="button"`, `aria-label="Filter Branche hinzufuegen"`. |
| **Keyboard** | `Tab` fokussiert Chips sequentiell. `Enter`/`Space` oeffnet Filter-Auswahl oder entfernt Chip. `Escape` schliesst Panel. |
| **Screen Reader** | Filter-Aenderung: `aria-live="polite"` Ansage: "Filter angewendet: 3 aktive Filter. 42 Ergebnisse." |
| **Chip Close** | Close-Icon (X) erhaelt eigene `aria-label="Branche: Retail Filter entfernen"`. Focus springt zum naechsten Chip. |
| **Filter Panel** | `role="dialog"`, `aria-label="Erweiterte Filter"`. Focus Trap innerhalb des Panels. |
| **Reduced Motion** | Panel-Animation deaktiviert. Sofortige Anzeige/Entfernung. Chip-Transitions deaktiviert. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Badges & Tags (`primitives/badges-tags.md`) | Filter Chips teilen visuelle Sprache mit Tags, sind aber interaktiv. |
| Bottom Sheet (`composition/bottom-sheet.md`) | Mobile Filter oeffnen als Half Bottom Sheet. |
| Data Tables (`data-display/data-tables.md`) | Spalten-Filter in Tables triggern Filter Bar Chips. |
| Action Bar (`composition/action-bar.md`) | Filter Bar oben, Action Bar unten — nie gleichzeitig sticky auf gleichem Level. |
| Command Palette (`navigation/command-palette.md`) | Alternative: "Zeige Signale aus Branche Retail" via Command Palette. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Inline/Dropdown/Combined-Varianten. Preset-System. Mobile Bottom Sheet Integration. Sticky-Verhalten. |
