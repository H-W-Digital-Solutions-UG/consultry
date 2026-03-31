# AI Content Card

**Komponenten-Familie:** AI Interaction
**DS-Version:** v1.3
**DS-Referenz:** 6.4
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Die AI Content Card ist der universelle Container fuer KI-generierte Inhalte. Sie unterscheidet KI-Output visuell von manuell erstellten Inhalten durch `ai-surface` Hintergrund und `brand-primary` Left-Border. Wird in Engagement Briefs, Angeboten, Knowledge-Synthesen, Copilot-Antworten und Match-Erklaerungen verwendet.

**Regel:** Jeder KI-generierte Inhalt MUSS in einer AI Content Card dargestellt werden. Kein AI-Content ohne visuelle Kennzeichnung.

---

## 2. Anatomie

```
┌─ AI Content Card (ai-surface bg, 3px left border) ──┐
│  ✨ KI-generiert · Confidence: 87% · 31.03.2026      │  <- Meta Header
├──────────────────────────────────────────────────────┤
│                                                      │
│  [Strukturierter Inhalt mit Quellen-Annotationen]    │  <- Content Body
│                                                      │
│  ─ Quellen ──────────────────────────────────────    │
│  ¹ North Data · Handelsregister · 12.01.2026         │  <- Source Footnotes
│  ² Dealfront · Unternehmensmonitor · 28.03.2026      │
│                                                      │
├──────────────────────────────────────────────────────┤
│  [Bearbeiten]  [Als PDF]  [Neu generieren]           │  <- Action Bar
└──────────────────────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Content-Typ | Verwendung |
|----------|------------|------------|
| **Brief** | Strukturierter Text (Abschnitte, Bullets, Highlights) | Engagement Brief, Account Summary, Matching-Erklaerung. |
| **Inline** | 1-3 Saetze, kompakt | Copilot-Antworten, Tooltip-Erklaerungen, Score-Erklaerungen. |
| **Document** | Mehrseitiger Content mit Seitennavigation | Angebots-Vorschau, Vertrags-Analyse, Knowledge-Synthese. |
| **Suggestion** | Aktions-Vorschlag mit CTA | "Du wirst wahrscheinlich..." Cards (DS 6.12), Smart Defaults. |
| **Comparison** | Tabelle oder Side-by-Side | Varianten-Vergleich (Premium vs. Standard Team), Klausel-Vergleich. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `brief` / `inline` / `document` / `suggestion` / `comparison` | `brief` | Darstellungs-Variante. |
| `confidence` | Number (0-100) | `null` | Confidence-Score. Anzeige als AI Badge wenn >0. |
| `sources` | Array of `{ label, provider, date }` | `[]` | Quellen-Annotationen. Nummerierte Fussnoten. |
| `timestamp` | Date | `now` | Generierungs-Zeitstempel. |
| `editable` | Boolean | `true` | Zeigt "Bearbeiten" Action. |
| `regeneratable` | Boolean | `true` | Zeigt "Neu generieren" Action. |
| `actions` | Array of `{ label, icon, onClick }` | `["edit", "pdf", "regenerate"]` | Benutzerdefinierte Aktionen. |
| `streaming` | Boolean | `false` | Aktiviert `ktype-ai-reveal` Animation fuer Streaming-Content. |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Background | `ai-surface` (warmes Off-White) |
| Left border | 3px, `brand-primary` |
| Border radius | `radius-lg` (12px) |
| Shadow | `shadow-sm` |
| Meta header | `body-xs`, `neutral-600`, Sparkle Icon `icon-xs` |
| Confidence Badge | AI Badge (siehe `badges-tags.md`), Sparkle + Wert |
| Content font | `body-md`, `neutral-900` |
| Content headings | `heading-sm`, `neutral-900` |
| Source footnotes | `body-xs`, `neutral-500`, nummeriert (¹²³) |
| Source separator | `border-subtle`, `space-3` margin-top |
| Action bar | Ghost Buttons (`sm`), `brand-primary` |
| Action bar border | `border-subtle` top |
| Action bar padding | `space-3` |
| Streaming reveal | `ktype-ai-reveal`: Token-by-Token, `duration-slow`, `easing-enter` |
| Regenerating shimmer | `ai-surface` mit Shimmer-Overlay, "Wird neu generiert..." |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Default** | Wie Variante, statisch | — |
| **Streaming** | Content erscheint Token-by-Token (`ktype-ai-reveal`) | Bei Live-Generierung. Cursor blinkt am Ende. |
| **Regenerating** | Shimmer-Overlay + "Wird neu generiert..." | Nach Klick "Neu generieren". Content wird ersetzt. |
| **Editing** | Content wird editierbar (contenteditable oder Modal) | Nach Klick "Bearbeiten". Visueller Modus-Wechsel: Pencil-Icon, Edit-Toolbar. |
| **Loading** | Shimmer-Placeholder in Card-Form | Vor initialem Content-Laden. |
| **Error** | "Inhalt konnte nicht generiert werden. [Erneut versuchen]" | Fallback bei API-Fehler. |
| **Hover** | Subtiler `shadow-md` | Wenn Card klickbar ist (z.B. zur Detail-Ansicht). |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| Desktop | Volle Breite des Containers. Actions horizontal. |
| Tablet | Wie Desktop. |
| Mobile | Actions als Icon-only (Labels hidden). Source Footnotes collapsed hinter "N Quellen" Link. |

---

## 8. Voice Input Integration

Nicht direkt zutreffend — AI Content Card ist ein Output-Container. Voice-Input erfolgt in der Eingabe-Komponente (Copilot, Command Bar), die die Card-Generierung ausloest.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | `role="article"`, `aria-label="KI-generierter Inhalt: [Titel]"`. |
| **AI-Kennzeichnung** | Screen Reader: "KI-generiert, Confidence 87 Prozent, generiert am 31. Maerz 2026". |
| **Quellen** | Quellen als `<ol>` mit `aria-label="Quellen"`. Fussnoten-Links navigierbar. |
| **Streaming** | `aria-live="polite"` waehrend Streaming. `aria-busy="true"`. |
| **Actions** | Alle Actions als `<button>` mit `aria-label`. |
| **Reduced Motion** | `ktype-ai-reveal` deaktiviert. Content erscheint sofort. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Copilot Panel (`ai-interaction/copilot-panel.md`) | Copilot-Antworten nutzen AI Content Card (Inline-Variante). |
| Cards (`data-display/cards.md`) | AI-Generated Card nutzt AI Content Card als Basis. |
| Preview Panel (`data-display/preview-panel.md`) | Document-Variante der AI Content Card in Preview Panels. |
| Badges & Tags (`primitives/badges-tags.md`) | AI Badge fuer Confidence-Anzeige. |
| Canvas Toolbar (`ai-interaction/canvas-toolbar.md`) | Canvas-Content ist eine Folge von AI Content Cards. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. 5 Varianten. Streaming mit ktype-ai-reveal. Source Footnotes. |
