# Copilot Panel

**Komponenten-Familie:** AI Interaction
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Das Copilot Panel ist die primaere KI-Interaktionsflaeche fuer Entscheider (Thomas) und wird als Sidebar oder eingebettetes Panel dargestellt. Es liefert kontextbezogene Briefings, beantwortet Fragen in natuerlicher Sprache und bietet proaktive Handlungsempfehlungen. Unterstuetzt Voice-Input.

**Primaere Persona:** Thomas (Managing Partner) — 1-2h/Tag, Scan-and-Decide-Modus
**Sekundaere Nutzer:** Katrin (BD-Leiterin), Stefan (Senior Consultant)

**Verwendung in Screens:**
- Copilot Sidebar (`screen-specs/ai-experience/copilot-sidebar.md`)
- Cockpit Dashboard (`screen-specs/platform/cockpit-dashboard.md`) — eingebettet
- Mobile Copilot Briefing (`screen-specs/mobile/mobile-copilot-briefing.md`)

---

## 2. Anatomie

```
┌─ Copilot Panel ──────────────────────────────┐
│  ✨ Consultry Copilot              [_ ] [X]  │  <- Header: Titel + Minimize + Close
├──────────────────────────────────────────────┤
│                                              │
│  ┌─ Briefing Card (ai-surface) ────────────┐ │
│  │  Guten Morgen, Thomas.                  │ │
│  │                                         │ │  <- Briefing Area (scrollable)
│  │  3 Approvals warten auf dich.           │ │
│  │  Pipeline-Wert: +12% diese Woche.       │ │
│  │  [Approvals anzeigen] [Pipeline oeffnen] │ │
│  └─────────────────────────────────────────┘ │
│                                              │
│  ┌─ Conversation Thread ───────────────────┐ │
│  │  Thomas: "Wie steht RetailCorp?"        │ │  <- Chat History (scrollable)
│  │                                         │ │
│  │  ✨ RetailCorp AG: Pipeline-Wert 340K,  │ │
│  │  2 aktive Opportunities. Naechster...   │ │
│  │  Quellen: CRM, Dealfront               │ │
│  └─────────────────────────────────────────┘ │
│                                              │
│  ┌─ Predictive Suggestions ────────────────┐ │
│  │  Du wirst wahrscheinlich:               │ │  <- Predictive Intelligence (6.12)
│  │  [Stefan fuer KW18 anfragen]            │ │
│  │  [Quartals-Review vorbereiten]          │ │
│  └─────────────────────────────────────────┘ │
│                                              │
├──────────────────────────────────────────────┤
│  [✨] Frage an den Copilot...        [🎤] [→]│  <- Input Area + Voice + Submit
└──────────────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Breite | Kontext | Verwendung |
|----------|--------|---------|------------|
| **Sidebar** | 400px (Desktop), 480px (Wide) | Rechts neben Hauptinhalt, Overlay | Standard: Copilot neben Cockpit, Pipeline, etc. |
| **Embedded** | 100% der Container-Breite | Eingebettet in Dashboard-Widget | Cockpit: Copilot als Bento-Grid-Kachel. |
| **Mobile Fullscreen** | 100vw | Fullscreen mit Bottom Nav | Mobile Copilot Briefing. |
| **Minimized** | 56px Hoehe, volle Breite | Collapsed am unteren Rand | Nutzer hat Panel minimiert, Indikator bleibt sichtbar. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `sidebar` / `embedded` / `mobile` | `sidebar` | Layout-Variante. |
| `persona` | `thomas` / `katrin` / `stefan` | `thomas` | Bestimmt Briefing-Stil und Predictive Suggestions. |
| `contextModule` | String | `null` | Aktuelles PRD-Modul fuer kontextbezogene Antworten (z.B. "pipeline", "staffing"). |
| `showBriefing` | Boolean | `true` | Zeigt/verbirgt die Briefing Card beim Oeffnen. |
| `showPredictions` | Boolean | `true` | Zeigt/verbirgt die Predictive Suggestions. |
| `voiceEnabled` | Boolean | `true` | Aktiviert/deaktiviert den Voice-Input-Button. |

---

## 5. Design Tokens

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Panel Background | `neutral-0` | Standard-Surface. |
| Header Background | `neutral-50` | Leicht angehobene Header-Flaeche. |
| Header Titel | `heading-md`, `neutral-900` | Mit `icon-ai` (Sparkles) davor. |
| Briefing Card Background | `ai-surface` | Warm-getoentes Off-White. |
| Briefing Card Border | `ai-border` links 3px | Konsistent mit AI Content Card Pattern (6.4). |
| Chat — Nutzer-Nachricht | `neutral-50` bg, `radius-lg` | Rechtsbuendig. |
| Chat — Copilot-Antwort | `ai-surface` bg, `ai-border` links 3px, `radius-lg` | Linksbuendig, mit Sparkles-Icon. |
| Chat — Quellen | `body-xs`, `neutral-600` | Nummerierte Fussnoten unter jeder Antwort. |
| Predictive Card | `ai-surface` bg, `border-subtle` | Kein linker Border-Stripe — visuell leichter als Briefing. |
| Input Field | `ai-surface` bg, `shadow-warm-glow` on focus | AI Prompt Variante (DS 5.2). |
| Input Placeholder | `body-md`, `neutral-500` | "Frage an den Copilot..." |
| Voice Button | Siehe DS 6.9 Voice Input Pattern | Rechts im Input-Feld. |
| Submit Button | `brand-primary`, `icon-sm` (ArrowRight) | Rechts neben Voice. |
| Panel Shadow | `shadow-xl` (Sidebar), `shadow-sm` (Embedded) | |
| Panel Border-Radius | `radius-xl` (Sidebar Top-Left/Bottom-Left) | Sidebar kommt von rechts. |
| Dividers | `border-subtle` | Zwischen Briefing, Chat, Predictions. |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Default (Open)** | Volle Hoehe, Briefing + Chat + Predictions sichtbar | — |
| **Minimized** | 56px Bar: "✨ Copilot" + Badge bei ungelesenen Suggestions | Klick expandiert zurueck. |
| **Loading (Antwort)** | Copilot-Antwort-Bereich zeigt Shimmer + `ktype-ai-reveal` | Typewriter-Effekt fuer die Antwort. |
| **Empty (Kein Kontext)** | Briefing Card zeigt: "Oeffne ein Modul um kontextbezogene Hilfe zu erhalten." | Illustration: Kompass (DS 4.1). |
| **Error (API)** | Toast innerhalb des Panels: "Copilot nicht erreichbar. Erneut versuchen." | `semantic-danger` left border. Retry-Button. |
| **Voice Listening** | Siehe DS 6.9: Pulsing Mic, Live-Transkription im Input | — |
| **Voice Processing** | Loader im Mic-Button, Input-Feld zeigt transkribierten Text | — |
| **Hover (Predictive Card)** | `interactive-warm` bg | `duration-fast`. |
| **Focus (Input)** | `shadow-warm-glow`, `brand-primary` border | Keyboard-getriggert. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ (>=1280px) | Sidebar 400px, Content verschiebt sich links. Overlay `neutral-900` 15% Opacity. |
| `breakpoint-lg` (1024-1279px) | Sidebar 360px, staerkerer Overlay (25%). |
| `breakpoint-md` (768-1023px) | Fullscreen-Overlay mit Close-Button oben rechts. |
| `breakpoint-sm` (<768px) | Mobile Fullscreen. Bottom Navigation Bar sichtbar. Input am unteren Rand (ueber Bottom Nav). |

---

## 8. Voice Input Integration

- **Platzierung:** Mikrofon-Button rechts im Input-Feld, links neben Submit-Button.
- **Verhalten:** Gemaess DS 6.9 Voice Input Pattern.
- **Persona-Kontext:** Thomas nutzt Voice primaer morgens fuer das Briefing ("Was steht heute an?"). Erkennung optimiert fuer kurze Fragen (5-15 Woerter).
- **Sprachen:** `de-DE` (Standard), `en-US` (Fallback fuer englische Firmennamen).
- **Abbruch:** Erneuter Tap auf Mic oder `Escape`. Text wird verworfen.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | `role="complementary"`, `aria-label="Consultry Copilot"` |
| **Focus Trap** | Sidebar-Variante: Focus bleibt im Panel waehrend es offen ist. `Tab`-Cycle: Input -> Suggestions -> Actions -> Close -> Input. |
| **Keyboard** | `Escape` schliesst Panel. `Enter` sendet Nachricht. `Tab` navigiert durch Suggestions. |
| **Screen Reader** | Neue Copilot-Antworten: `aria-live="polite"`. Briefing-Inhalt: `aria-label="Morgen-Briefing"`. |
| **Reduced Motion** | `ktype-ai-reveal` deaktiviert. Antworten erscheinen sofort. |
| **Kontrast** | Alle Text/Background-Kombinationen >= 4.5:1. `ai-surface` auf `neutral-0` ist subtil aber nicht kontrastreich — Text verwendet `neutral-900`. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| AI Content Card (`ai-interaction/ai-content-card.md`) | Copilot-Antworten verwenden das AI Content Card Pattern. |
| Chat Interface (`ai-interaction/chat-interface.md`) | Conversation Thread folgt dem Chat Interface Pattern. |
| Command Palette (`navigation/command-palette.md`) | Alternative KI-Interaktion. Katrin bevorzugt Command Palette, Thomas bevorzugt Copilot. |
| Preview Panel (`data-display/preview-panel.md`) | Copilot kann Dokument-Vorschauen inline einbetten. |
| Predictive Intelligence (DS 6.12) | Predictive Suggestions Card folgt diesem Pattern. |
| Toast (`feedback/toasts-notifications.md`) | Error-States im Panel verwenden inline Toasts. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Voice Input, Predictive Intelligence, Persona-Adaptivitaet. |
