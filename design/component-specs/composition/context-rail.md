# Context Rail

**Komponenten-Familie:** Composition
**DS-Version:** v1.3
**DS-Referenz:** 6.1 (Dashboard)
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Die Context Rail ist das 1/3-breite Seitenpanel auf der rechten Seite, das kontextuelle Zusatzinformationen neben dem Hauptinhalt bereitstellt. Sie implementiert das Prinzip der Architektonischen Asymmetrie (DS 1.7): Hauptinhalt 2/3, Kontext 1/3.

**Haeufigste Verwendungen:**
- Angebots-Canvas: Quellen, Beziehungen, Copilot-Prompt, Kommentare
- Vertrags-Canvas: Klausel-Referenzen, Risiko-Flags, Aenderungshistorie
- Engagement-Brief-Canvas: KI-Quellen, Related Items, Feedback
- Opportunity Detail: Timeline, Beziehungen, KI-Empfehlungen

**Die Context Rail ist KEIN Ersatz fuer den Slide-Over Panel.** Slide-Over zeigt fokussierte Detail-Ansichten (L2), waehrend die Context Rail persistente Kontextinformationen neben dem Arbeitsbereich anzeigt.

---

## 2. Anatomie

```
Desktop (2/3 + 1/3 Layout):
┌───────────────────────────────────┬── Context Rail (1/3) ──────┐
│                                   │                            │
│                                   │  Quellen                   │
│                                   │  ├─ Bundesanzeiger.de      │
│  Main Content (2/3)               │  ├─ LinkedIn (Katrin)      │
│  (Canvas, Detail, Editor)         │  └─ CRM: RetailCorp        │
│                                   │                            │
│                                   ├────────────────────────────┤
│                                   │  Beziehungen               │
│                                   │  [Avatar] M. Schneider     │
│                                   │  [Avatar] K. Engel         │
│                                   │                            │
│                                   ├────────────────────────────┤
│                                   │  Kommentare (3)            │
│                                   │  "Budget pruefen" — TW     │
│                                   │  vor 2 Std                 │
│                                   │                            │
│                                   ├────────────────────────────┤
│                                   │  ┌──────────────────────┐  │
│                                   │  │ Copilot fragen...    │  │
│                                   │  └──────────────────────┘  │
│                                   │  [Senden]                  │
│                                   │                            │
└───────────────────────────────────┴────────────────────────────┘
```

---

## 3. Varianten

| Variante | Verhalten | Verwendung |
|----------|-----------|------------|
| **Standard** | Persistent sichtbar, 1/3 Breite. Alle Sektionen sichtbar und scrollbar. | Canvas-Screens, Detail-Screens mit genuegend Viewport-Breite. |
| **Collapsed** | Schmaler Toggle-Button am rechten Rand. Klick oeffnet als Slide-Over (Overlay). | `breakpoint-lg` wenn Platz knapp oder Nutzer die Rail manuell einklappt. |
| **Bottom Sheet** | Gesamte Rail als Bottom Sheet (Half-Variante). Tab-basiert pro Sektion. | `breakpoint-md`. Zugang ueber Floating-Button oder Tab am unteren Rand. |
| **Tab-based** | Sektionen als Tabs (Quellen / Beziehungen / Kommentare / Copilot). | `breakpoint-sm`. Maximale Platznutzung auf kleinen Screens. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `sections` | Array of Section Configs | erforderlich | Sektionen der Rail. |
| `collapsible` | Boolean | `true` | Erlaubt manuelles Ein-/Ausklappen. |
| `defaultCollapsed` | Boolean | `false` | Initial eingeklappt. |
| `copilotEnabled` | Boolean | `true` | Zeigt Copilot-Prompt am unteren Rand. |
| `onCopilotSubmit` | Function | `null` | Callback fuer Copilot-Anfrage. |
| `width` | `narrow` / `default` | `default` | `narrow`: 280px, `default`: 1/3 Container-Breite. |

**Section Config:**

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `id` | String | erforderlich | Eindeutige Sektions-ID. |
| `title` | String | erforderlich | Sektions-Ueberschrift. |
| `icon` | Lucide Icon Name | `null` | Icon neben dem Titel. |
| `content` | Component | erforderlich | Sektions-Inhalt. |
| `collapsible` | Boolean | `true` | Sektion kann zusammengeklappt werden. |
| `defaultCollapsed` | Boolean | `false` | Initial zusammengeklappt. |
| `badge` | String / Number | `null` | Count-Badge neben dem Titel (z.B. "3" fuer Kommentare). |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Rail background | `neutral-0` |
| Rail left border | `border-subtle` |
| Rail width (Desktop) | `33.33%` des Containers (1/3) |
| Rail width (narrow) | 280px |
| Rail min-width | 280px |
| Rail max-width | 400px |
| Rail padding | `space-4` |
| Section header font | `heading-sm`, `neutral-900` |
| Section header icon | `icon-sm`, `neutral-500` |
| Section header padding | `space-3` vertikal |
| Section badge | `body-xs`, `neutral-600`, in Klammern |
| Section divider | `border-subtle` |
| Section content padding | `space-3` oben (nach Header) |
| Section collapse icon | `icon-sm` (ChevronDown/ChevronUp), `neutral-500` |
| Section collapse animation | Height-Transition, `duration-normal` |
| Copilot prompt bg | `ai-surface` |
| Copilot prompt border | `border-default` |
| Copilot prompt radius | `radius-md` |
| Copilot prompt font | `body-md`, `neutral-600` (Placeholder) |
| Copilot prompt focus | `shadow-warm-glow` |
| Copilot send button | Icon-Button, `brand-primary`, `icon-sm` (Send) |
| Copilot response bg | `ai-surface` |
| Copilot response font | `body-sm`, `neutral-900` |
| Copilot response indicator | `ai-sparkle` Sparkles-Icon, `body-xs` |
| Collapse toggle button | 32x32px, `neutral-100` bg, `radius-md`, `icon-sm` (PanelRightClose), `neutral-500` |
| Collapse toggle position | Rechter Rand des Main Content, vertikal zentriert |
| Collapse toggle hover | `neutral-200` bg |
| Rail scroll | `overflow-y: auto`, unabhaengig vom Main Content |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Default** | Rail sichtbar, alle Sektionen geoeffnet | Scrollbar unabhaengig vom Hauptinhalt. |
| **Section Collapsed** | Nur Sektions-Header sichtbar, Chevron zeigt nach rechts | Height-Transition, `duration-normal`. |
| **Section Expanded** | Voller Inhalt sichtbar, Chevron zeigt nach unten | Height-Transition, `duration-normal`. |
| **Rail Collapsed** | Rail ausgeblendet. Toggle-Button am rechten Rand sichtbar. | Slide-Transition nach rechts, `duration-normal`. Main Content nimmt volle Breite ein. |
| **Rail Expanding** | Rail slided von rechts ein. Main Content verengt sich auf 2/3. | `duration-normal`, `easing-enter`. |
| **Copilot Input Focus** | `shadow-warm-glow` Ring. Placeholder verschwindet. | — |
| **Copilot Submitting** | Spinner im Send-Button. Input deaktiviert. | — |
| **Copilot Response** | Antwort erscheint inline ueber dem Prompt-Feld in `ai-surface` Container. | `ktype-ai-reveal` Animation fuer die Antwort. |
| **Hover (Links/Items)** | `interactive-warm` bg auf hoverten Items (Quellen, Beziehungen) | `duration-fast`. |
| **Loading** | Shimmer-Placeholder pro Sektion | Bei initialem Laden der Kontextdaten. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Standard: 1/3 Breite, persistent sichtbar. Scrollbar. Copilot Prompt am unteren Rand. |
| `breakpoint-lg` | Standard oder Collapsed (je nach Nutzer-Praeferenz). Toggle-Button verfuegbar. Bei Collapsed: oeffnet als Slide-Over Overlay. |
| `breakpoint-md` | Nicht inline sichtbar. Zugang als Bottom Sheet (Half). Tab-basierte Sektionen im Sheet. Floating-Button unten-rechts: `icon-md` (PanelRight), `brand-primary`, `shadow-md`. |
| `breakpoint-sm` | Nicht inline sichtbar. Zugang als Bottom Sheet (Expanded). Tab-basierte Navigation zwischen Sektionen. Copilot als eigener Tab. |

**Layout-Transition bei Collapse/Expand:**
- Main Content animiert sanft zwischen voller Breite und 2/3 Breite.
- Transition: `duration-normal`, `easing-default`.

---

## 8. Voice Input Integration

Der Copilot-Prompt in der Context Rail unterstuetzt Voice Input gemaess DS 6.9:
- Mic-Button neben dem Send-Button im Prompt-Feld.
- Spracherkennung fuellt den Prompt-Text.
- Voice-States gemaess Command Palette Voice Pattern: Idle → Listening → Processing → Result.
- Auf Mobile (Bottom Sheet): Voice-Button prominent neben dem Textfeld.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | Rail: `role="complementary"`, `aria-label="Kontextinformationen"`. |
| **Landmark** | Als `<aside>` Element im DOM. |
| **Sections** | Jede Sektion: `role="region"`, `aria-label` (Sektions-Titel). Collapse: `aria-expanded="true/false"`. |
| **Keyboard** | `Tab` navigiert zwischen Sektionen und interaktiven Elementen. Sektions-Header: `Enter`/`Space` fuer Collapse-Toggle. |
| **Screen Reader** | Rail-Collapse: "Kontextleiste eingeklappt" / "Kontextleiste ausgeklappt". Copilot-Antwort: `aria-live="polite"`. |
| **Focus** | Bei Rail-Expand: Focus bleibt im Main Content (kein Focus-Steal). Toggle-Button erhaelt `border-focus`. |
| **Reduced Motion** | Collapse/Expand-Animationen deaktiviert. Sofortige Darstellung. |
| **Copilot** | Prompt-Feld: `aria-label="Copilot-Frage eingeben"`. Response: `aria-live="polite"` fuer neue Antworten. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Slide-Over Panel (`composition/slide-over-panel.md`) | Slide-Over fuer fokussierte L2-Details. Context Rail fuer persistente Kontextdaten. Bei Collapsed-Rail: oeffnet als Slide-Over Overlay. |
| Copilot Panel (`ai-interaction/copilot-panel.md`) | Copilot-Prompt in der Rail ist eine eingebettete Mini-Version des Copilot Panels. |
| Bottom Sheet (`composition/bottom-sheet.md`) | Mobile-Aequivalent der Context Rail. |
| Bento Grid (`composition/bento-grid.md`) | Alternative: Bento Grid fuer Dashboards (DS 1.7 Entscheidungsbaum). Context Rail fuer Workflow-Screens. |
| Canvas Toolbar (`ai-interaction/canvas-toolbar.md`) | Canvas Toolbar oben, Context Rail rechts — gemeinsamer Kontext in Canvas-Screens. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. 2/3+1/3 Asymmetrie, Sektionen mit Collapse, Copilot-Integration, Responsive Collapse zu Bottom Sheet. |
