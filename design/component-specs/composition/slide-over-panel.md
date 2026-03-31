# Slide-Over Panel

**Komponenten-Familie:** Composition
**DS-Version:** v1.3
**DS-Referenz:** 5.11
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Das Slide-Over Panel ist der primaere L2-Container im Progressive-Disclosure-Framework. Es zeigt Detail-Ansichten, ohne den aktuellen Kontext (Liste, Dashboard, Feed) zu verlassen. Der Nutzer kann die Ursprungsansicht hinter dem Panel wahrnehmen.

**Haeufigste Verwendungen:**
- Berater-Profil aus Matching-Screen
- Signal-Detail aus Signal Feed
- Notification Inbox
- Opportunity-Detail aus Pipeline
- Dokument-Preview

---

## 2. Anatomie

```
┌─ Overlay (neutral-900, 30%) ──────────────────────────┐
│                                                        │
│                        ┌─ Slide-Over Panel ───────────┐│
│                        │                              ││
│  [Hintergrund-Content  │  [←] Titel              [X] ││ <- Header
│   bleibt sichtbar]     │  Breadcrumb-Kontext         ││
│                        ├──────────────────────────────┤│
│                        │                              ││
│                        │  Content                     ││ <- Body (scrollable)
│                        │  (Tabs, Formulare,           ││
│                        │   Preview, Details)          ││
│                        │                              ││
│                        ├──────────────────────────────┤│
│                        │  [Sekundaer]    [Primaer]    ││ <- Footer (optional)
│                        │                              ││
│                        └──────────────────────────────┘│
│                                                        │
└────────────────────────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Breite | Verwendung |
|----------|--------|------------|
| **Default** | 480px | Berater-Profil, Signal-Detail, Notification Inbox. |
| **Wide** | 640px | AI-Briefs, Admin-Berater-Detail (mit CV Split-View), Dokument-Preview. |
| **Nested** | 480px (innen) | Slide-Over innerhalb eines Slide-Overs. Max 1 Verschachtelung. Erstes Panel verschiebt sich leicht nach links. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `default` / `wide` | `default` | Breite (480/640px). |
| `title` | String | erforderlich | Header-Titel. |
| `breadcrumb` | String | `null` | Kontext-Breadcrumb unter dem Titel. |
| `showBack` | Boolean | `false` | Zurueck-Button (fuer Nested). |
| `footer` | Component | `null` | Footer-Aktionen. |
| `dismissOnClickOutside` | Boolean | `true` | Schliesst bei Klick auf Overlay. |
| `persistent` | Boolean | `false` | Verhindert Schliessen bei Click-Outside (z.B. bei ungespeicherten Aenderungen). |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Overlay | `neutral-900` at 30% opacity (leichter als Modal) |
| Panel bg | `neutral-0` |
| Panel shadow | `shadow-xl` |
| Panel position | Right, volle Hoehe |
| Header padding | `space-6` (24px) |
| Header title | `heading-lg`, `neutral-900` |
| Header breadcrumb | `body-sm`, `neutral-600` |
| Close button | `icon-md`, `neutral-500`, hover: `neutral-700` |
| Back button | `icon-md` (ChevronLeft), `neutral-500` |
| Body padding | `space-6` |
| Body scroll | `overflow-y: auto` |
| Footer padding | `space-4` |
| Footer border | `border-subtle` top |
| Footer buttons | Secondary (links), Primary (rechts) |
| Enter animation | Slide from right + overlay fade, `duration-normal`, `easing-enter` |
| Exit animation | Slide out right + overlay fade, `duration-fast`, `easing-exit` |
| Nested offset | Erstes Panel: `translateX(-40px)`, Opacity 0.9 |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Entering** | Slide from right, Overlay fades in | `duration-normal`, `easing-enter`. |
| **Open** | Panel sichtbar, Overlay aktiv | Content scrollbar. |
| **Exiting** | Slide out right, Overlay fades out | `duration-fast`, `easing-exit`. |
| **Nested** | Erstes Panel verschiebt sich nach links (-40px), wird leicht transparent | Zweites Panel slided normal ein. |
| **Persistent (Dirty)** | Schliessen zeigt Confirmation: "Ungespeicherte Aenderungen verwerfen?" | Verhindert versehentlichen Datenverlust. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Standard: 480/640px rechts. Overlay 30%. |
| `breakpoint-lg` | 480px (default), 560px (wide). Overlay 30%. |
| `breakpoint-md` | Fullscreen. Kein Overlay. Header mit Back-Button statt X. |
| `breakpoint-sm` | Fullscreen. Bottom Navigation Bar sichtbar (Content padding-bottom). |

---

## 8. Voice Input Integration

Nicht zutreffend — Slide-Over ist ein Layout-Container. Voice-Input erfolgt in enthaltenen Komponenten (Copilot, Suche).

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | `role="dialog"`, `aria-modal="true"`, `aria-label` (Titel). |
| **Focus Trap** | Focus bleibt im Panel. `Tab`-Cycle innerhalb des Panels. |
| **Keyboard** | `Escape` schliesst (ausser persistent). `Tab` navigiert. |
| **Screen Reader** | Oeffnung angesagt: "Panel geoeffnet: Berater-Profil Markus Schneider". |
| **Focus Restore** | Nach Schliessen: Focus zurueck zum ausloesenden Element (z.B. Table Row). |
| **Reduced Motion** | Slide-Animation deaktiviert. Sofortige Anzeige/Entfernung. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Modals (`feedback/modals-dialogs.md`) | Modal = fokussierte Aktion (Bestaetigungen). Slide-Over = Detail-Ansicht (bleibt im Kontext). |
| Bottom Sheet (`composition/bottom-sheet.md`) | Mobile-Aequivalent fuer kurze Detail-Ansichten. |
| Cards (`data-display/cards.md`) | Card-Klick oeffnet Slide-Over. |
| Data Tables (`data-display/data-tables.md`) | Row-Klick oeffnet Slide-Over. |
| Notification Inbox (`composition/notification-inbox.md`) | Nutzt Slide-Over als Container. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Nested-Variante, Persistent-Mode, Responsive Fullscreen. |
