# Chat Interface

**Komponenten-Familie:** AI Interaction
**DS-Version:** v1.3
**DS-Referenz:** — (neu)
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Das Chat Interface ist die explorative, multi-turn KI-Konversationsflaeche. Es ermoeglicht freie Fragen an spezialisierte AI-Agents (Knowledge Agent, Analytics Agent). Anders als der Copilot (proaktives Briefing) und der Dialog Agent (strukturierte Schritte) ist das Chat Interface fuer offene Exploration gedacht.

**Primaere Nutzer:** Stefan (Knowledge Agent), Katrin (Analytics Agent, selten)
**Verwendung:**
- Knowledge Agent Chat (Firmenwissen abfragen)
- Analytics Agent (Daten-Exploration)
- Copilot-Konversation (nach Briefing, Free-Form-Fragen)

---

## 2. Anatomie

```
┌─ Chat Interface ─────────────────────────────────┐
│  ✨ Knowledge Agent                         [X]  │  <- Header
│  Firmenwissen durchsuchen                        │
├──────────────────────────────────────────────────┤
│                                                  │
│  ┌─ User Bubble (rechts) ───────────────────┐   │
│  │  Welche Erfahrung haben wir mit SAP      │   │
│  │  Migrationen im Retail-Bereich?          │   │
│  └──────────────────────────────────────────┘   │
│                                                  │
│  ┌─ Agent Response (ai-surface, links) ─────┐   │
│  │  ✨ 4 relevante Projekte gefunden:        │   │
│  │                                           │   │
│  │  1. RetailCorp AG (2025) — SAP S/4HANA   │   │
│  │     Migration, 7 Monate, Erfolg ✓        │   │
│  │     Experten: Markus S., Stefan K.        │   │
│  │                                           │   │
│  │  2. FashionGroup (2024) — ERP-Konsolidier.│   │
│  │     [...]                                 │   │
│  │                                           │   │
│  │  Quellen: Projekt-DB, Knowledge Base     │   │
│  │  [Mehr Details] [Stefan K. kontaktieren]  │   │
│  └──────────────────────────────────────────┘   │
│                                                  │
│  ┌─ Suggested Follow-Ups ───────────────────┐   │
│  │  [Verfuegbarkeit von Markus S.?]         │   │
│  │  [Lessons Learned aus RetailCorp?]        │   │
│  └──────────────────────────────────────────┘   │
│                                                  │
├──────────────────────────────────────────────────┤
│  Frag mich etwas...                       [🎤]  │  <- Input + Voice
└──────────────────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Container | Breite | Verwendung |
|----------|-----------|--------|------------|
| **Slide-Over** | Slide-Over Panel (Wide) | 640px | Knowledge Agent Chat, Analytics Agent. Desktop primaer. |
| **Fullscreen** | Dedizierte Seite | 100% (max 800px Content) | Tiefe Exploration, lange Konversationen. |
| **Embedded** | Eingebettet in Screen | Container-Breite | Copilot-Chat-Modus (nach Briefing), Canvas-integriert. |
| **Mobile** | Fullscreen (Mobile) | 100% | Mobile Knowledge Agent. Bottom Nav bleibt. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `slide-over` / `fullscreen` / `embedded` / `mobile` | `slide-over` | Container-Variante. |
| `agentType` | `knowledge` / `analytics` / `copilot` | `knowledge` | Agent-Typ (bestimmt Header, Prompt-Kontext). |
| `agentName` | String | agent-abhaengig | Anzeige-Name ("Knowledge Agent", "Analytics Agent"). |
| `placeholder` | String | "Frag mich etwas..." | Input-Placeholder. |
| `voiceEnabled` | Boolean | `true` | Voice Input Button anzeigen (DS 6.9). |
| `suggestedQueries` | Array of String | `[]` | Vorgeschlagene Fragen (Initial oder Follow-Up). |
| `streamingEnabled` | Boolean | `true` | Token-by-Token Streaming fuer Responses. |
| `history` | Array of Messages | `[]` | Bisherige Konversation. |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Container bg | `neutral-0` |
| User bubble bg | `neutral-100` |
| User bubble alignment | Rechts |
| User bubble font | `body-md`, `neutral-900` |
| User bubble radius | `radius-lg` (12px), rechts-unten: `radius-sm` |
| Agent response bg | `ai-surface` |
| Agent response border | 3px left, `brand-primary` |
| Agent response radius | `radius-lg` (12px), links-unten: `radius-sm` |
| Agent response font | `body-md`, `neutral-900` |
| Agent icon | Sparkle (`icon-ai`), `brand-primary` |
| Source annotations | `body-xs`, `neutral-500` |
| Suggested follow-ups | Ghost Button (`sm`), `radius-full` (Pill), `neutral-100` bg |
| Input area | `border-subtle` top, `space-3` padding |
| Input field | `body-md`, kein Border bis Focus |
| Voice button | DS 6.9 Voice Input Pattern, rechts im Input |
| Streaming | `ktype-ai-reveal`: Token-by-Token |
| Typing indicator | 3 animierte Dots in `ai-surface` Bubble, 150ms stagger |
| Message gap | `space-3` (12px) zwischen Bubbles |
| Timestamp | `body-xs`, `neutral-400`, zwischen Nachrichten-Gruppen |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Empty** | Suggested Queries als Chips + "Frag mich etwas..." Placeholder | Initial State. |
| **User Typing** | Text im Input-Feld. Send-Button wird `brand-primary`. | `Enter` sendet. |
| **Agent Thinking** | Typing-Indikator (3 Dots) in Agent-Bubble | `duration-slow`, stagger 150ms pro Dot. |
| **Agent Streaming** | Content erscheint Token-by-Token (`ktype-ai-reveal`) | Scroll folgt automatisch. User kann waehrend Streaming scrollen. |
| **Response Complete** | Volle Antwort. Suggested Follow-Ups erscheinen. | Source Annotations sichtbar. |
| **Error** | "Antwort konnte nicht generiert werden. [Erneut versuchen]" | In Agent-Bubble-Form mit `semantic-danger` Left-Border. |
| **Voice Listening** | Mikrofon-Button rot, Pulsing Ring (DS 6.9) | Transkription erscheint live im Input-Feld. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| Desktop | Slide-Over (640px) oder Fullscreen (max 800px Content). |
| Tablet | Slide-Over oder Fullscreen. |
| Mobile | Fullscreen. Input-Feld ueber Tastatur. Voice Button prominent. Bottom Nav sichtbar. |

---

## 8. Voice Input Integration

| Aspekt | Umsetzung |
|--------|-----------|
| **Position** | Mikrofon-Button rechts im Chat-Input (DS 6.9). |
| **Verhalten** | Tap → Listening → Transkription live im Input → Auto-Send nach Pause (2s) oder manuell. |
| **States** | Idle / Listening / Processing / Error (DS 6.9). |
| **Feedback** | Pulsing Ring um Mikrofon-Icon waehrend Listening. Transkription live sichtbar. |

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | `role="log"` fuer Chat-Verlauf. `aria-live="polite"` fuer neue Messages. |
| **Input** | `aria-label="Nachricht eingeben"`. Voice Button: `aria-label="Spracheingabe"`. |
| **Messages** | Jede Message als `role="article"` mit `aria-label` (Agent/User + Content-Auszug). |
| **Sources** | Quellen als `<ol>` mit Links, navigierbar per Keyboard. |
| **Keyboard** | `Enter` sendet. `Shift+Enter` fuer Zeilenumbruch. `Escape` schliesst Slide-Over. |
| **Reduced Motion** | `ktype-ai-reveal` und Typing-Dots deaktiviert. Sofortige Anzeige. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Copilot Panel (`ai-interaction/copilot-panel.md`) | Copilot nutzt Chat Interface im Konversations-Modus. |
| Dialog Agent (`ai-interaction/dialog-agent.md`) | Dialog Agent = strukturiert. Chat = frei-form. |
| AI Content Card (`ai-interaction/ai-content-card.md`) | Agent-Responses sind AI Content Cards (Inline-Variante). |
| Slide-Over Panel (`composition/slide-over-panel.md`) | Slide-Over als Container fuer Chat (Wide, 640px). |
| Command Palette (`navigation/command-palette.md`) | Command Bar leitet an Chat weiter bei komplexen Fragen ("/" Prefix). |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. 4 Varianten. Voice Input. Suggested Follow-Ups. Streaming. |
