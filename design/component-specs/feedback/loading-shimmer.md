# Loading & Shimmer

**Komponenten-Familie:** Feedback
**DS-Version:** v1.3
**DS-Referenz:** 3.6.1 (Kinetische Typografie)
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Loading- und Shimmer-Komponenten zeigen dem Nutzer, dass Inhalte geladen werden, und geben eine visuelle Vorschau auf die erwartete Seitenstruktur. Sie ueberbruecken Wartezeiten, reduzieren wahrgenommene Ladezeit und verhindern Layout-Shifts beim Eintreffen der Daten.

**Regel:** Kein Ladevorgang ueber 200ms ohne visuelles Feedback. Ladevorgaenge unter 200ms zeigen KEINEN Spinner/Shimmer (Vermeidung von Flash-Effekten).

**Alle Personas:** Loading States erscheinen ueberall — Dashboard-Kacheln, Pipeline-Listen, Berater-Profile, Signal-Feed, AI-generierte Inhalte. Schnelle Wahrnehmung von Fortschritt ist fuer alle Rollen kritisch.

**Verwendung in Screens:**
- Dashboard: Skeleton-Cards fuer KPI-Kacheln und Bento-Grid-Elemente
- Signal Feed: Skeleton-Rows waehrend Feed-Aktualisierung
- Pipeline: Skeleton-Tabelle bei Stage-Wechsel
- Copilot: AI Reveal fuer Streaming-Antworten
- Berater-Profil: Skeleton-Layout beim Oeffnen
- Angebote: Progress Bar beim PDF-Export

---

## 2. Anatomie

### Skeleton Screen

```
┌─ Skeleton Card ──────────────────────────────────┐
│  ┌─────┐  ████████████████████                   │  <- Circle (Avatar) + Rectangle (Titel)
│  │  ○  │  ████████████                           │  <- Rectangle (Subtitel, kuerzer)
│  └─────┘                                         │
│  ████████████████████████████████████████         │  <- Rectangle (Text-Zeile 1)
│  ████████████████████████████████                 │  <- Rectangle (Text-Zeile 2, kuerzer)
│  ████████████████████████                         │  <- Rectangle (Text-Zeile 3, noch kuerzer)
│                                                  │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐    │  <- Rounded Rects (Action Buttons)
│  └───────────┘  └───────────┘  └───────────┘    │
└──────────────────────────────────────────────────┘
```

### Spinner

```
    ╭──╮
   ╱    ╲       <- 24px default, brand-primary
  │      │         0.8s Rotation
   ╲    ╱
    ╰──╯
```

### Progress Bar

```
┌──────────────────────────────────────────────────┐
│  ███████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░ │  <- 4px Hoehe, brand-primary Fill
└──────────────────────────────────────────────────┘
```

### AI Reveal (ktype-ai-reveal)

```
┌─ AI Content Card ────────────────────────────────┐
│  ✨ KI-generiert                                  │
│                                                  │
│  Das Unternehmen hat im letzten Quartal|          │  <- Token-by-Token Erscheinung
│                                        ▌          │  <- Blinkender Cursor am Ende
│                                                  │
└──────────────────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Beschreibung | Dauer | Verwendung |
|----------|-------------|-------|------------|
| **Skeleton Screen** | Shimmer-Platzhalter, die das erwartete Layout nachbilden. | Bis Content geladen. | Dashboard-Cards, Listen-Rows, Tabellen, Profile. |
| **Spinner** | Kreisfoermiger Ladeindikator. | Unbestimmt. | Inline-Loading in Buttons, kleine Container, Refresh-Aktionen. |
| **Progress Bar** | Determinate horizontaler Fortschrittsbalken. | Prozentualer Fortschritt. | Datei-Uploads, PDF-Export, Batch-Operationen, Daten-Import. |
| **AI Reveal** | Token-by-Token Text-Erscheinung fuer KI-generierte Inhalte. | 30ms pro Token. | Copilot-Antworten, Engagement Briefs, Match-Erklaerungen, alle AI-Streaming-Responses. |

### Skeleton-Formen

| Form | Beschreibung | Verwendung |
|------|-------------|------------|
| **Circle** | Kreisfoermiger Platzhalter, `radius-full` | Avatar-Platzhalter |
| **Rectangle** | Rechteckiger Balken, `radius-sm` | Text-Zeilen, Labels |
| **Rounded Rect** | Abgerundetes Rechteck, `radius-md` | Card-Platzhalter, Button-Platzhalter |
| **Chart Skeleton** | Achsen-Linien + Shimmer-Balken | KPI-Charts, Diagramm-Platzhalter |

---

## 4. Props / Konfiguration

### Skeleton

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `type` | `card` / `table-row` / `text-block` / `avatar` / `chart` / `custom` | `text-block` | Vordefinierte Skeleton-Layouts. |
| `lines` | Number | `3` | Anzahl Text-Zeilen bei `text-block`. |
| `showAvatar` | Boolean | `false` | Zeigt Circle-Platzhalter fuer Avatar. |
| `width` | String | `100%` | Container-Breite. |
| `height` | String | Auto | Container-Hoehe (nur bei `custom`). |
| `animate` | Boolean | `true` | Shimmer-Animation aktiv. `false` fuer Static Gray (Reduced Motion). |

### Spinner

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `size` | Number (px) | `24` | Durchmesser. |
| `color` | Token | `brand-primary` | Farb-Token. |
| `label` | String | `"Wird geladen..."` | Screen-Reader-Label. |

### Progress Bar

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `value` | Number (0-100) | `0` | Aktueller Fortschritt in Prozent. |
| `label` | String | `null` | Optionaler Text neben der Bar ("3 von 12 Dateien"). |
| `showPercentage` | Boolean | `false` | Zeigt Prozentzahl rechts neben der Bar. |

### AI Reveal

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `tokenSpeed` | Number (ms) | `30` | Millisekunden pro Token. |
| `showCursor` | Boolean | `true` | Blinkender Cursor am Ende waehrend Streaming. |
| `onComplete` | Function | `null` | Callback nach Abschluss der Reveal-Animation. |

---

## 5. Design Tokens

### Skeleton Screen

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Platzhalter-Hintergrund | `neutral-100` | Basis-Farbe der Skeleton-Elemente. |
| Shimmer-Gradient | `neutral-100` -> `neutral-200` -> `neutral-100` | Links-nach-rechts Gradient-Sweep. |
| Shimmer-Dauer | 1.5s, `linear`, `infinite` | Endlos-Schleife bis Content geladen. |
| Shimmer-Richtung | Links nach rechts | Gradient bewegt sich ueber die volle Breite. |
| Border Radius (Text) | `radius-sm` | Fuer Textzeilen-Platzhalter. |
| Border Radius (Card) | `radius-lg` | Fuer Card-Platzhalter. |
| Border Radius (Avatar) | `radius-full` | Kreisfoermig. |
| Spacing | Gemaess Ziel-Layout | Skeleton-Abstande spiegeln das fertige Layout. |

### Spinner

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Groesse (Default) | 24px | |
| Groesse (Small) | 16px | Inline in Buttons. |
| Groesse (Large) | 32px | Fuer groessere Container. |
| Farbe | `brand-primary` | |
| Rotations-Dauer | 0.8s, `linear`, `infinite` | |
| Stroke-Breite | 2px | |

### Progress Bar

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Track-Hoehe | 4px | |
| Track-Hintergrund | `neutral-200` | |
| Track-Radius | `radius-full` | Abgerundete Enden. |
| Fill-Farbe | `brand-primary` | |
| Fill-Radius | `radius-full` | |
| Fill-Animation | `duration-normal`, `easing-default` | Smooth-Transition bei Wertaenderung. |
| Label | `body-sm`, `neutral-700` | Neben oder ueber der Bar. |
| Percentage | `mono-sm`, `neutral-700` | Rechts neben der Bar. |

### AI Reveal (ktype-ai-reveal)

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Token-Erscheinung | 30ms pro Token, Opacity 0 -> 1 | Basierend auf `ktype-ai-reveal` aus DS 3.6.1. |
| Cursor | `brand-primary`, 2px breit, Blink 0.8s | Am Ende des zuletzt erschienenen Tokens. |
| Cursor-Blink | Opacity 0 <-> 1, 0.8s, `infinite` | Stoppt nach Streaming-Ende (2s Delay, dann ausblenden). |
| Container | `ai-surface` Background (innerhalb AI Content Card) | AI Reveal findet immer in einer AI Content Card statt. |
| Schrift | `body-md`, `neutral-900` | Standard-Content-Schrift. |

---

## 6. Interaktive States

### Skeleton Screen

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Shimmer Active** | Gradient-Sweep-Animation laeuft. | Standard-Zustand waehrend Laden. |
| **Content Loaded** | Skeleton fadet aus, Content fadet ein. | Crossfade, `duration-normal`. Kein Layout-Shift. |
| **Error** | Skeleton wird durch Error Empty State ersetzt. | Uebergang zu Empty State (Error-Variante). |
| **Partial Load** | Geladene Elemente erscheinen, restliche bleiben Skeleton. | Staggered Loading: Elemente werden einzeln ersetzt. |

### Spinner

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Spinning** | Kreisfoermige Rotation. | Dauerhaft bis Aktion abgeschlossen. |
| **Complete** | Spinner wird durch Ergebnis ersetzt (Checkmark oder Content). | Crossfade, `duration-fast`. |

### Progress Bar

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **In Progress** | Fill waechst von links nach rechts. | Smooth-Transition bei jedem Update. |
| **Complete** | Fill erreicht 100%. Kurzer Puls-Effekt. | `semantic-success` Farbe fuer 1s, dann Ausblenden. |
| **Error** | Fill stoppt. Farbe wechselt zu `semantic-danger`. | Fehlermeldung erscheint ueber/unter der Bar. |
| **Indeterminate** | Fill oszilliert links-rechts (wenn kein Prozentwert bekannt). | Endlos-Schleife. |

### AI Reveal

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Streaming** | Tokens erscheinen einzeln. Cursor blinkt am Ende. | 30ms pro Token. Scroll folgt dem Cursor. |
| **Paused** | Cursor blinkt, keine neuen Tokens. | Bei Netzwerk-Verzoegerung. Wird automatisch fortgesetzt. |
| **Complete** | Cursor blinkt 2s, dann ausblenden. Content ist statisch. | Kein Replay bei erneutem Scrollen. |
| **User Scroll** | Reveal laeuft weiter, aber Auto-Scroll stoppt. | Nutzer kann zurueckscrollen waehrend Streaming. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Skeleton-Layouts spiegeln Desktop-Grid (Bento, mehrspaltig). |
| `breakpoint-lg` | Wie xl. |
| `breakpoint-md` | Skeleton passt sich an Tablet-Layout an (weniger Spalten). |
| `breakpoint-sm` | Single-Column Skeletons. Spinner zentriert. Progress Bar full-width. AI Reveal nutzt volle Breite. |

**Skeleton-Anpassung:** Skeletons MUESSEN das responsive Layout des Ziel-Contents spiegeln. Ein Dashboard-Skeleton auf Mobile zeigt gestapelte Cards, nicht ein mehrespaltiges Grid.

---

## 8. Voice Input Integration

Nicht zutreffend — Loading States sind Output-Komponenten ohne eigene Voice-Interaktion. AI Reveal kann durch Voice-initiierte Copilot-Anfragen ausgeloest werden, aber die Reveal-Komponente selbst hat keine Voice-Steuerung.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Skeleton Rolle** | `aria-hidden="true"` fuer dekorative Skeletons. `aria-busy="true"` auf dem Eltern-Container. |
| **Skeleton Label** | Eltern-Container: `aria-label="Inhalt wird geladen"`. |
| **Spinner Rolle** | `role="status"`, `aria-label="Wird geladen..."`. |
| **Progress Bar Rolle** | `role="progressbar"`, `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`. |
| **Progress Bar Label** | `aria-label` mit Kontext: "PDF-Export: 45 Prozent". |
| **AI Reveal** | `aria-live="polite"` auf dem Container. `aria-busy="true"` waehrend Streaming. |
| **AI Reveal Complete** | `aria-busy="false"` nach Abschluss. Screen Reader liest den vollstaendigen Text. |
| **Reduced Motion** | Shimmer-Animation deaktiviert: statische `neutral-100` Platzhalter. Spinner: reduzierte Drehgeschwindigkeit oder statisches Icon. AI Reveal: Content erscheint sofort (kein Token-by-Token). |
| **200ms-Regel** | Kein visuelles Loading-Feedback fuer Aktionen unter 200ms. Vermeidet Flash-Effekte die Screen Reader stoeren. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Empty States (`feedback/empty-states.md`) | Uebergang: Shimmer -> Empty State (wenn keine Daten). Shimmer -> Content (wenn Daten vorhanden). |
| AI Content Card (`ai-interaction/ai-content-card.md`) | AI Reveal findet immer innerhalb einer AI Content Card statt. Card hat eigenen Loading-State. |
| Copilot Panel (`ai-interaction/copilot-panel.md`) | Copilot-Streaming-Antworten nutzen AI Reveal. |
| Cards (`data-display/cards.md`) | Card Skeleton spiegelt die Card-Anatomie. |
| Data Tables (`data-display/data-tables.md`) | Table-Row Skeleton fuer Tabellen-Ladestate. |
| Buttons (`primitives/buttons.md`) | Inline-Spinner in Buttons bei Button-Loading-State. |
| Bento Grid (`composition/bento-grid.md`) | Dashboard-Skeleton spiegelt das Bento-Grid-Layout. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. 4 Varianten (Skeleton, Spinner, Progress Bar, AI Reveal). Skeleton-Formen. 200ms-Regel. Reduced Motion Support. |
