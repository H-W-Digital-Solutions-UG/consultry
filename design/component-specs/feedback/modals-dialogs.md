# Modals & Dialogs

**Komponenten-Familie:** Feedback
**DS-Version:** v1.3
**DS-Referenz:** 5.8
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Modals und Dialogs sind Overlay-Container fuer fokussierte Interaktionen, die den Nutzer aus dem aktuellen Workflow heraus zu einer Entscheidung oder Eingabe fuehren. Sie blockieren die dahinterliegende Oberflaeche (Backdrop) und erzwingen eine bewusste Reaktion.

**Einsatz:**
- Bestaetigungen vor destruktiven Aktionen ("Wirklich loeschen?")
- Formulareingaben, die Kontext vom Hauptscreen benoetigen (z.B. Staffing-Anfrage erstellen)
- Informationsanzeigen (AI Match-Breakdown, Audit-Trail-Details)
- Deep-Dive-Level (L3) gemaess Progressive Disclosure Pattern (DS 6.8)

**Alle Personas:** Modals werden rollenuebergreifend verwendet. Thomas (Managing Partner) sieht Freigabe-Dialoge, Katrin (BD-Leiterin) nutzt Form-Modals fuer Opportunity-Erstellung, Stefan/Lisa sehen Bestaetigungs-Dialoge bei Profil-Updates.

**Verwendung in Screens:**
- Pipeline: Opportunity loeschen, Stage aendern
- Staffing: Staffing-Anfrage erstellen/bearbeiten
- Berater-Profil: Skill hinzufuegen, CV hochladen
- Angebote: Angebot generieren (Consent-Dialog), Angebot versenden
- Settings: Konto loeschen, Consent widerrufen

---

## 2. Anatomie

### Standard Modal

```
          ┌─ Backdrop (neutral-900 / 60% opacity) ──────────┐
          │                                                  │
          │   ┌─ Modal Container ──────────────────────┐     │
          │   │  Header                                │     │
          │   │  ┌────────────────────────────────┐    │     │
          │   │  │  Titel              [Subtitle] [X]  │     │  <- heading-lg + optional body-sm
          │   │  └────────────────────────────────┘    │     │
          │   │  ─────────────────────────────────     │     │  <- border-subtle
          │   │  Body (scrollbar bei Ueberlauf)        │     │
          │   │  ┌────────────────────────────────┐    │     │
          │   │  │                                │    │     │
          │   │  │  [Inhalt / Formular / Info]     │    │     │
          │   │  │                                │    │     │
          │   │  └────────────────────────────────┘    │     │
          │   │  ─────────────────────────────────     │     │  <- border-subtle
          │   │  Footer                                │     │
          │   │  ┌────────────────────────────────┐    │     │
          │   │  │        [Sekundaer] [Primaer]    │    │     │  <- rechtsbuendig
          │   │  └────────────────────────────────┘    │     │
          │   └────────────────────────────────────────┘     │
          │                                                  │
          └──────────────────────────────────────────────────┘
```

### Mobile Modal (breakpoint-sm)

```
┌─ Backdrop ──────────────────────┐
│                                 │
│                                 │
│  ┌─ Modal (slide-up) ────────┐  │
│  │  Header         [X]       │  │  <- safe-area-inset-top
│  │  ─────────────────────    │  │
│  │  Body (scrollbar)         │  │
│  │                           │  │
│  │  ─────────────────────    │  │
│  │  Footer                   │  │
│  │  [Sekundaer] [Primaer]    │  │  <- safe-area-inset-bottom
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Beschreibung | Primaer-Button | Verwendung |
|----------|-------------|----------------|------------|
| **Confirmation Dialog** | Einfache Ja/Nein-Entscheidung. Kurzer Text + zwei Buttons. | Primary (`brand-primary`) | Stage aendern, Profil veroeffentlichen, Matching starten. |
| **Form Modal** | Eingabefelder im Body. Validierung vor Submit. | Primary (`brand-primary`) | Staffing-Anfrage, Skill hinzufuegen, Event erstellen. |
| **Info Modal** | Nur-Lese-Inhalt. Kein Primaer-Button im Footer, nur "Schliessen". | Kein Primaer | Match-Breakdown, Audit-Trail, AI-Erklaerung. |
| **Destructive Dialog** | Warnung vor irreversibler Aktion. Roter CTA. | Danger (`semantic-danger`) | Opportunity loeschen, Konto loeschen, Consent widerrufen. |

### Groessen

| Groesse | Max-Width | Verwendung |
|---------|-----------|------------|
| **Small (sm)** | 400px | Confirmation Dialogs, einfache Bestaetigungen. |
| **Medium (md)** | 560px | Standard. Form Modals, Info Modals. |
| **Large (lg)** | 720px | Komplexe Formulare, Document-Vorschau, AI Match-Breakdown. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `confirmation` / `form` / `info` / `destructive` | `confirmation` | Bestimmt Footer-Layout und Button-Styling. |
| `size` | `sm` / `md` / `lg` | `md` | Container-Breite. |
| `title` | String | erforderlich | Titel im Header. |
| `subtitle` | String | `null` | Optionaler Untertitel unter dem Titel. |
| `persistent` | Boolean | `false` | Wenn `true`: Backdrop-Klick und Escape schliessen NICHT. Nur explizite Buttons. |
| `showClose` | Boolean | `true` | Zeigt/verbirgt den X-Button im Header. Bei `persistent` automatisch `false`. |
| `primaryAction` | `{ label: String, onClick: Function, variant: String }` | erforderlich (ausser Info) | Primaerer Button im Footer. |
| `secondaryAction` | `{ label: String, onClick: Function }` | `{ label: "Abbrechen" }` | Sekundaerer Button im Footer. |
| `onClose` | Function | erforderlich | Callback beim Schliessen (X, Escape, Backdrop-Klick). |
| `scrollable` | Boolean | `true` | Erlaubt scrollbaren Body bei Ueberlauf. |
| `nested` | Boolean | `false` | Markiert als verschachteltes Modal (max 2 Ebenen). |

---

## 5. Design Tokens

### Backdrop

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Hintergrund | `neutral-900` bei 60% Opacity | Abdunklung der dahinterliegenden Oberflaeche. |
| Z-Index | `60` | Ueber Bottom Navigation Bar (50) und Standard-Content. |
| Klick-Verhalten | Schliesst Modal | Ausser bei `persistent`. |

### Container

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Hintergrund | `neutral-0` | Weisse Flaeche. |
| Border Radius | `radius-lg` | |
| Shadow | `shadow-lg` | |
| Padding | `space-6` (alle Seiten) | |
| Vertikale Position | Zentriert, 20% von oben bei grossen Viewports | Optisch leicht oberhalb der Mitte. |

### Header

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Titel | `heading-lg`, `neutral-900` | |
| Subtitle | `body-sm`, `neutral-600` | Unter dem Titel, `space-1` Gap. |
| Close Button | `neutral-500`, Hover: `neutral-700` | `X`-Icon, `icon-md` (20px). |
| Trennlinie | `border-subtle` | Unter dem Header. |
| Padding | `space-6` horizontal, `space-4` vertikal | |

### Body

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Text | `body-md`, `neutral-900` | |
| Scroll | `overflow-y: auto`, `max-height: 60vh` | Scrollbar bei langen Inhalten. |
| Padding | `space-6` horizontal, `space-4` vertikal | |

### Footer

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Trennlinie | `border-subtle` | Ueber dem Footer. |
| Padding | `space-6` horizontal, `space-4` vertikal | |
| Button-Ausrichtung | Rechtsbuendig | Sekundaer links, Primaer rechts. |
| Button-Gap | `space-3` | Zwischen Sekundaer und Primaer. |
| Primaer Button | Primary (`brand-primary`) oder Danger (`semantic-danger`) | Je nach Variante. |
| Sekundaer Button | Secondary | |

### Animation

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Entry | Scale 0.95 -> 1 + Fade in | `duration-normal`, `easing-enter`. |
| Exit | Scale 1 -> 0.95 + Fade out | `duration-fast`, `easing-exit`. |
| Backdrop Entry | Fade in | `duration-normal`. |
| Backdrop Exit | Fade out | `duration-fast`. |

### Nested Modal

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Zweiter Backdrop | `neutral-900` bei 40% Opacity | Leichtere Abdunklung fuer zweite Ebene. |
| Z-Index (nested) | `70` | Ueber dem ersten Modal. |
| Max Tiefe | 2 Ebenen | Mehr als 2 verschachtelte Modals sind verboten. |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Opening** | Scale 0.95 -> 1 + Fade in. Backdrop fadet ein. | `duration-normal`, `easing-enter`. Focus springt in Modal. |
| **Open** | Standard. Focus Trap aktiv. | Tab-Taste zykliert nur innerhalb des Modals. |
| **Body Scrolling** | Scrollbar erscheint bei Ueberlauf. Hintergrund-Scroll blockiert. | `body { overflow: hidden }` waehrend Modal offen. |
| **Closing** | Scale 1 -> 0.95 + Fade out. Backdrop fadet aus. | `duration-fast`, `easing-exit`. Focus kehrt zum ausloesenden Element zurueck. |
| **Form Validating** | Inline-Validierung bei Blur. Primaer-Button disabled bis valide. | Error-States gemaess Input-Specs (`primitives/inputs.md`). |
| **Destructive Hover** | Danger-Button: `semantic-danger` mit Brightness +10%. | `duration-fast`. Visueller Warn-Effekt. |
| **Loading** | Primaer-Button zeigt Spinner. Modal bleibt offen. | Button-Breite wird beibehalten. Nicht interaktiv waehrend Loading. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Zentriert, max-width nach Groessen-Variante. 20% von oben. |
| `breakpoint-lg` | Wie xl. |
| `breakpoint-md` | Zentriert, max-width 90vw (aber nie groesser als Groessen-Variante). |
| `breakpoint-sm` | **Full-width.** Modal gleitet von unten nach oben ein (slide-up). `safe-area-inset-top` und `safe-area-inset-bottom` Padding. `radius-lg` nur oben (border-bottom-radius: 0). Max-height: 90vh. |

**Mobile-spezifisch:**
- Slide-up Animation ersetzt Scale-Animation auf `breakpoint-sm`.
- Swipe-down auf Header schliesst Modal (ausser `persistent`).
- Footer-Buttons werden full-width bei `breakpoint-sm` wenn nur ein Button vorhanden.

---

## 8. Voice Input Integration

Nicht direkt zutreffend — Modals sind Container-Komponenten. Voice Input kann innerhalb von Form Modals genutzt werden, wenn diese AI Prompt Inputs oder Textareas enthalten. In diesem Fall gelten die Voice-Input-Regeln aus DS 6.9 fuer die jeweiligen Input-Felder innerhalb des Modals.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | `role="dialog"`, `aria-modal="true"`. |
| **Label** | `aria-labelledby` referenziert den Titel. `aria-describedby` referenziert den Body-Text (bei Confirmation/Destructive). |
| **Focus Trap** | Focus wird beim Oeffnen auf das erste interaktive Element im Modal gesetzt. `Tab` zykliert nur innerhalb des Modals. Focus kehrt beim Schliessen zum Trigger-Element zurueck. |
| **Escape** | `Escape` schliesst das Modal (ausser `persistent`). |
| **Screen Reader** | Beim Oeffnen wird der Titel vorgelesen. Bei Destructive Dialogs wird die Warnung priorisiert: `aria-live="assertive"` fuer den Warntext. |
| **Keyboard** | Alle Buttons per `Tab` erreichbar. `Enter` / `Space` aktiviert Buttons. |
| **Reduced Motion** | Scale-Animation deaktiviert. Sofortiges Einblenden/Ausblenden. |
| **Contrast** | Alle Texte erfuellen WCAG AA (4.5:1). Danger-Button (`semantic-danger`) auf `neutral-0`: weisser Text erfuellt AA. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Slide-Over Panel (`composition/slide-over-panel.md`) | Alternative fuer Detail-Ansichten (L2). Modals sind fuer L3 Deep-Dive. |
| Bottom Sheet (`composition/bottom-sheet.md`) | Mobile-Alternative fuer einfache Aktionen. Modals sind fuer komplexere Interaktionen. |
| Buttons (`primitives/buttons.md`) | Footer-Buttons nutzen Primary, Secondary, Danger Varianten. |
| Inputs (`primitives/inputs.md`) | Form Modal nutzt Input-Komponenten im Body. |
| Toasts & Notifications (`feedback/toasts-notifications.md`) | Nach Modal-Aktion folgt oft ein Success-Toast. |
| Command Palette (`navigation/command-palette.md`) | Teilt Overlay-Pattern, aber Command Palette ist kein Modal (andere Rolle). |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. 4 Varianten, 3 Groessen, Nested-Modal-Regeln, Mobile Slide-up, Focus Trap. |
