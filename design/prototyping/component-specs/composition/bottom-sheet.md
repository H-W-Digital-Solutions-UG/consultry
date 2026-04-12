# Bottom Sheet

**Komponenten-Familie:** Composition
**DS-Version:** v1.3
**DS-Referenz:** — (neu, Mobile Pattern)
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Das Bottom Sheet ist der primaere mobile L1/L2-Container fuer Detail-Ansichten, Quick-Actions und kontextuelle Inhalte. Es ersetzt Slide-Over Panels und Tooltips auf mobilen Breakpoints. Der Nutzer kann den Ursprungs-Content hinter dem Sheet wahrnehmen und per Swipe-Down schliessen.

**Haeufigste Verwendungen:**
- Signal-Detail auf Mobile (statt Slide-Over)
- Approval Quick-Action
- Berater-Profil-Kurzansicht (Matching)
- Filter-Auswahl
- Staffing-Anfrage beantworten
- Preview Panel (Dokument-Vorschau, statt Hover-Tooltip)

---

## 2. Anatomie

```
┌─ Screen Content ────────────────────────────┐
│                                              │
│  [Hintergrund-Content sichtbar,              │
│   abgedunkelt durch Overlay]                 │
│                                              │
├──────────────────────────────────────────────┤
│  ┌─ Drag Handle ──────────────────────────┐  │
│  │          ━━━━━━━━━━━                   │  │  <- Handle (40x4px)
│  ├────────────────────────────────────────┤  │
│  │  Titel                          [X]    │  │  <- Header
│  ├────────────────────────────────────────┤  │
│  │                                        │  │
│  │  Content                               │  │  <- Body (scrollable)
│  │  (Detail, Aktionen, Formular)          │  │
│  │                                        │  │
│  ├────────────────────────────────────────┤  │
│  │  [Sekundaer]          [Primaer]        │  │  <- Footer (optional)
│  └────────────────────────────────────────┘  │
│  [Safe Area Inset]                           │
└──────────────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Hoehe | Snap-Points | Verwendung |
|----------|-------|-------------|------------|
| **Compact** | 30% Screen-Hoehe | 30% / Closed | Quick-Actions: Approval bestaetiegen, Staffing antworten. Wenig Content. |
| **Half** | 50% Screen-Hoehe | 50% / 30% / Closed | Signal-Detail, Berater-Kurzprofil, Filter-Panel. Mittlerer Content-Umfang. |
| **Expanded** | 90% Screen-Hoehe | 90% / 50% / Closed | Vollstaendige Detail-Ansicht: Opportunity-Detail, Dokument-Preview. Ersetzt Fullscreen fuer L2-Content. |
| **Fullscreen** | 100% (kein Overlay) | Nur Closed | Copilot Briefing, lange Formulare. Kein Hintergrund sichtbar. Header mit Back-Button. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `compact` / `half` / `expanded` / `fullscreen` | `half` | Initiale Hoehe. |
| `title` | String | erforderlich | Header-Titel. |
| `showHandle` | Boolean | `true` | Drag-Handle anzeigen (`false` bei Fullscreen). |
| `snapPoints` | Array of Number | varianten-abhaengig | Snap-Positionen in % der Screen-Hoehe. |
| `dismissOnSwipeDown` | Boolean | `true` | Schliesst bei Swipe-Down ueber den ersten Snap-Point hinaus. |
| `persistent` | Boolean | `false` | Verhindert Schliessen (z.B. bei Formularen mit ungespeicherten Aenderungen). |
| `footer` | Component | `null` | Footer-Aktionen. |
| `overlay` | Boolean | `true` | Overlay-Hintergrund (`false` bei Fullscreen). |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Overlay | `neutral-900` at 30% opacity |
| Sheet bg | `neutral-0` |
| Sheet radius | `radius-xl` (14px) oben-links und oben-rechts. `0` unten. |
| Sheet shadow | `shadow-xl` (nach oben gerichtet) |
| Drag Handle | 40x4px, `neutral-300`, `radius-full`, zentriert, `space-2` Abstand oben |
| Header padding | `space-4` horizontal, `space-3` vertikal |
| Header title | `heading-md`, `neutral-900` |
| Close button | `icon-md`, `neutral-500`, hover: `neutral-700` |
| Body padding | `space-4` |
| Body scroll | `overflow-y: auto` (ab Half-Variante) |
| Footer padding | `space-4` |
| Footer border | `border-subtle` top |
| Footer safe-area | `padding-bottom: env(safe-area-inset-bottom)` |
| Enter animation | Slide up + overlay fade, `duration-normal`, `easing-enter` |
| Exit animation | Slide down + overlay fade, `duration-fast`, `easing-exit` |
| Snap animation | Spring-easing (`easing-enter`), `duration-normal` |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Entering** | Sheet slided von unten ein, Overlay faded in | `duration-normal`, `easing-enter`. |
| **Open (Snapped)** | Sheet auf einem Snap-Point, Overlay aktiv | Content scrollbar ab Half-Variante. |
| **Dragging** | Sheet folgt dem Finger. Overlay-Opacity skaliert mit Position. | Haptic Feedback an Snap-Points. |
| **Snapping** | Sheet springt zum naechsten Snap-Point | Spring-Animation, `duration-normal`. |
| **Exiting** | Sheet slided nach unten, Overlay faded out | `duration-fast`, `easing-exit`. Bei Swipe: Velocity-basiert. |
| **Persistent (Dirty)** | Swipe-Down zeigt Rubber-Band-Effekt statt Schliessen | Schliessen nur ueber Confirmation ("Aenderungen verwerfen?"). |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-sm` | Bottom Sheet als primaerer L1/L2-Container. Bottom Nav bleibt unter dem Overlay sichtbar. |
| `breakpoint-md` | Bottom Sheet verfuegbar. Alternative: Slide-Over Panel (abhaengig vom Content-Umfang). |
| `breakpoint-lg`+ | Bottom Sheet wird NICHT verwendet. Slide-Over Panel oder Modal stattdessen. |

**Interaktion mit Bottom Navigation Bar:**
- Bottom Sheet Overlay verdeckt die Bottom Nav.
- Bei Fullscreen-Variante: Bottom Nav wird ausgeblendet.
- Footer-Buttons beruecksichtigen Safe-Area-Inset.

---

## 8. Voice Input Integration

Nicht zutreffend — Bottom Sheet ist ein Layout-Container. Voice-Input erfolgt in enthaltenen Komponenten (Copilot, Suche).

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | `role="dialog"`, `aria-modal="true"`, `aria-label` (Titel). |
| **Focus Trap** | Focus bleibt im Sheet. `Tab`-Cycle innerhalb des Sheets. |
| **Keyboard** | `Escape` schliesst (ausser persistent). |
| **Screen Reader** | Oeffnung angesagt: "Sheet geoeffnet: Signal-Detail". Snap-Point-Wechsel: "Erweitert" / "Komprimiert". |
| **Focus Restore** | Nach Schliessen: Focus zurueck zum ausloesenden Element. |
| **Reduced Motion** | Slide-Animation deaktiviert. Sofortige Anzeige/Entfernung. Snap ohne Spring-Effekt. |
| **Touch Target** | Drag Handle: 40px breit, 24px Touch-Area (mind. 44px mit Padding). |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Slide-Over Panel (`composition/slide-over-panel.md`) | Desktop-Aequivalent. Slide-Over auf Mobile wird zu Bottom Sheet oder Fullscreen. |
| Bottom Navigation Bar (`navigation/bottom-navigation-bar.md`) | Bottom Nav unter dem Sheet. Z-Index-Hierarchie beachten. |
| Modals (`feedback/modals-dialogs.md`) | Modal = fokussierte Aktion. Bottom Sheet = Detail-Ansicht / Quick-Action. |
| Filter Bar (`composition/filter-bar.md`) | Filter-Panel auf Mobile als Half-Bottom-Sheet. |
| Cards (`data-display/cards.md`) | Card-Tap auf Mobile oeffnet Bottom Sheet. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. 4 Varianten mit Snap-Points. Drag-Gesture. Safe-Area-Integration. |
