# Action Bar

**Komponenten-Familie:** Composition
**DS-Version:** v1.3
**DS-Referenz:** — (neu)
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Die Action Bar ist eine kontextuelle Aktionsleiste, die erscheint, wenn Elemente selektiert oder Bulk-Aktionen verfuegbar sind. Sie ermoeglicht effiziente Massenoperationen auf Listen- und Tabellen-Daten.

**Haeufigste Verwendungen:**
- Signal Feed: Bulk-Archivierung selektierter Signale
- Data Tables: Bulk-Aktionen (Export, Zuweisung, Loeschen)
- Staffing & Matching: Multi-Select von Beratern fuer Team-Zusammenstellung
- Recruiting Pipeline: Bulk-Status-Aenderungen

**Trigger:** Die Action Bar erscheint automatisch, sobald mindestens 1 Element selektiert ist. Sie verschwindet, wenn die Selektion aufgehoben wird.

---

## 2. Anatomie

```
Desktop:
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  ☐ 3 ausgewaehlt    [Archivieren] [Zuweisen] [Exportieren] [...] [✕]│
│   ↑                      ↑            ↑           ↑          ↑    ↑ │
│  Selection Count    Action Btn   Action Btn   Action Btn  Overflow X │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘

Mobile:
┌──────────────────────────────────────┐
│                                      │
│  3 ausgewaehlt   [Icon] [Icon] [...] │
│                                      │
├──────────────────────────────────────┤
│  [Safe Area Inset]                   │
└──────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Verwendung |
|----------|------------|
| **Standard** | Listen und Tabellen mit Bulk-Selektion. Zeigt Selection Count + bis zu 4 Action Buttons + Overflow. |
| **Compact** | Eingebettete Bereiche mit wenig Platz (z.B. innerhalb eines Slide-Over Panels). Reduzierte Hoehe, Icon-Only Buttons. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `selectedCount` | Number | erforderlich | Anzahl selektierter Elemente. |
| `actions` | Array of Action Configs | erforderlich | Verfuegbare Aktionen (max 4 sichtbar). |
| `overflowActions` | Array of Action Configs | `[]` | Aktionen im Overflow-Menue. |
| `onDeselect` | Function | erforderlich | Callback fuer "Alle abwaehlen" (X-Button). |
| `variant` | `standard` / `compact` | `standard` | Visuelle Variante. |

**Action Config:**

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `label` | String | erforderlich | Button-Label. |
| `icon` | Lucide Icon Name | `null` | Icon (auf Mobile als alleiniger Indikator). |
| `onClick` | Function | erforderlich | Aktion-Callback. |
| `destructive` | Boolean | `false` | Markiert als destruktive Aktion (Loeschen). Erfordert Bestaetigungs-Dialog. |
| `disabled` | Boolean | `false` | Deaktiviert die Aktion. |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Bar background | `neutral-900` |
| Bar text | `neutral-0` |
| Bar height (Desktop) | 56px |
| Bar height (Mobile) | 48px + `env(safe-area-inset-bottom)` |
| Bar shadow | `shadow-lg` (nach oben gerichtet) |
| Bar border-radius | `radius-lg` oben-links und oben-rechts (Desktop), `0` (Mobile, volle Breite) |
| Bar z-index | 35 |
| Bar position | `position: sticky`, `bottom: 0` (Desktop); ueber Bottom Navigation Bar (Mobile) |
| Bar padding | `space-4` horizontal, `space-3` vertikal |
| Selection Count font | `body-md`, `neutral-0`, SemiBold (600) |
| Action Button bg | `rgba(255, 255, 255, 0.12)` (transparent-white) |
| Action Button text | `neutral-0` |
| Action Button hover bg | `rgba(255, 255, 255, 0.20)` |
| Action Button active bg | `rgba(255, 255, 255, 0.08)` |
| Action Button radius | `radius-md` |
| Action Button padding | `space-2` vertikal, `space-3` horizontal |
| Action Button font | `body-sm` |
| Action Button icon | `icon-sm`, `neutral-0` |
| Destructive Button bg | `semantic-danger` |
| Destructive Button hover bg | `semantic-danger` +8% brightness |
| Destructive Button text | `neutral-0` |
| Overflow Button | `icon-md` (MoreHorizontal), `neutral-0` |
| Close Button (X) | `icon-md` (X), `neutral-400`, hover: `neutral-0` |
| Gap zwischen Buttons | `space-2` |
| Gap Selection Count zu Buttons | `space-4` |
| Enter animation | Slide up from bottom, `duration-normal`, `easing-enter` |
| Exit animation | Slide down, `duration-fast`, `easing-exit` |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Hidden** | Action Bar nicht sichtbar | Keine Selektion aktiv. |
| **Entering** | Slide up from bottom | `duration-normal`, `easing-enter`. Erscheint bei erster Selektion. |
| **Visible** | Sticky am unteren Rand, ueber Content | Selection Count aktualisiert sich bei Aenderung (`ktype-label-shift`). |
| **Action Hover** | Button bg wird heller | `duration-fast`. |
| **Action Click** | Button bg wird dunkler | `duration-instant`. Aktion wird ausgefuehrt. |
| **Destructive Confirm** | Bestaetigungs-Dialog oeffnet sich | "Moechten Sie N Elemente unwiderruflich loeschen?" mit [Abbrechen] und [Loeschen] (Danger-Button). |
| **Overflow Open** | Dropdown-Menue ueber der Bar | `shadow-md`, `neutral-0` bg, `radius-md`. Oeffnet nach oben. |
| **Exiting** | Slide down | `duration-fast`, `easing-exit`. Bei Aufheben der Selektion. |
| **Loading** | Spinner auf aktivem Button, andere Buttons disabled | Waehrend Bulk-Operation laeuft. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-lg`+ | Volle Breite, Label + Icon auf Buttons. Sticky bottom innerhalb des Content-Bereichs. Max 4 Buttons sichtbar. |
| `breakpoint-md` | Volle Breite. Buttons mit Icon + Label, aber kompakter (`space-2` Padding). |
| `breakpoint-sm` | Volle Breite, positioniert ueber Bottom Navigation Bar. Icon-Only Buttons. Label nur im Overflow-Menue sichtbar. Max 3 Icons + Overflow. Safe-Area-Inset beachten. |

**Interaktion mit Bottom Navigation Bar:**
- Action Bar liegt UEBER der Bottom Nav (`z-index: 35`, Bottom Nav: `z-index: 50`). Die Action Bar positioniert sich mit `bottom: 56px` (Hoehe der Bottom Nav) + Safe-Area-Inset auf Mobile.
- Bei aktiver Action Bar verschiebt sich der scrollbare Content, um verdeckte Inhalte zu vermeiden.

---

## 8. Voice Input Integration

Nicht zutreffend — Action Bar ist eine Aktionsleiste. Bulk-Aktionen werden nicht ueber Voice Input ausgeloest.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | `role="toolbar"`, `aria-label="Aktionsleiste fuer N ausgewaehlte Elemente"`. |
| **Keyboard** | `Tab` fokussiert die Action Bar. Pfeiltasten (`←` / `→`) navigieren zwischen Buttons. `Enter`/`Space` aktiviert Button. `Escape` hebt Selektion auf. |
| **Screen Reader** | Erscheinen angesagt: "Aktionsleiste: 3 Elemente ausgewaehlt". Buttons: Label + Kontext ("Archivieren, 3 Elemente"). |
| **Destructive Confirm** | Bestaetigungs-Dialog als `role="alertdialog"` mit `aria-describedby` fuer die Warnung. |
| **Focus** | `border-focus` Ring auf Buttons (angepasst fuer dunklen Hintergrund: `neutral-0` Ring). |
| **Reduced Motion** | Slide-Animation deaktiviert. Sofortige Anzeige/Entfernung. |
| **Touch Target** | Buttons: mindestens 44x44px Touch-Area auf Mobile. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Buttons (`primitives/buttons.md`) | Action Bar Buttons sind spezialisierte Buttons fuer dunklen Hintergrund. |
| Data Tables (`data-display/data-tables.md`) | Tabellen-Selektion triggert die Action Bar. |
| Bottom Sheet (`composition/bottom-sheet.md`) | Overflow-Aktionen auf Mobile alternativ als Bottom Sheet. |
| Bottom Navigation Bar (`navigation/bottom-navigation-bar.md`) | Action Bar positioniert sich ueber der Bottom Nav auf Mobile. |
| Filter Bar (`composition/filter-bar.md`) | Filter Bar oben, Action Bar unten — nie gleichzeitig sticky. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Sticky-Bottom-Pattern, Overflow-Menue, Destructive-Confirm, Mobile Icon-Only. |
