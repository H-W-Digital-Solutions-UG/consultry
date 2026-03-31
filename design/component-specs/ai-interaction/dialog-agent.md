# Dialog Agent

**Komponenten-Familie:** AI Interaction
**DS-Version:** v1.3
**DS-Referenz:** — (neu)
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Der Dialog Agent ist ein konversationelles, aufgabenorientiertes AI-Interface fuer Nutzer mit geringer Plattform-Erfahrung. Anders als der Copilot (proaktiv, briefing-orientiert) und der Chat (explorativ, multi-turn) fuehrt der Dialog Agent den Nutzer durch strukturierte Aufgaben — Schritt fuer Schritt, als Gespraech statt als Formular.

**Primaere Persona:** Lisa (Consultant) — 15-30 Min/Tag, Leichtnutzerin
**Verwendung:**
- Berater-Onboarding (Profil vervollstaendigen)
- Profil-Update nach Projektabschluss
- Skill-Selbsteinschaetzung
- Staffing-Antwort-Assistent

---

## 2. Anatomie

```
┌─ Dialog Agent ────────────────────────────────────┐
│  ✨ Profil-Assistent                         [X]  │  <- Header
├───────────────────────────────────────────────────┤
│                                                   │
│  ┌─ Agent Message (ai-surface) ──────────────┐   │
│  │  Hallo Lisa! Nach deinem RetailCorp-       │   │
│  │  Projekt koenntest du 3 neue Skills        │   │
│  │  hinzufuegen. Sollen wir starten?          │   │
│  └────────────────────────────────────────────┘   │
│                                                   │
│  ┌─ Quick Replies ────────────────────────────┐   │
│  │  [Ja, los geht's]  [Spaeter erinnern]     │   │  <- Structured Options
│  └────────────────────────────────────────────┘   │
│                                                   │
│  ┌─ Agent Message (ai-surface) ──────────────┐   │
│  │  Super! Ich habe diese Skills aus deinem   │   │
│  │  Projekt erkannt:                          │   │
│  │                                            │   │
│  │  [✓] SAP S/4HANA Migration                │   │
│  │  [✓] Change Management                    │   │
│  │  [ ] Retail Industry                       │   │
│  │  [ ] ABAP Development                     │   │
│  │                                            │   │
│  │  Welche davon passen?                      │   │
│  └────────────────────────────────────────────┘   │
│                                                   │
│  ┌─ Progress ─────────────────────────────────┐   │
│  │  Schritt 1 von 3: Skills                  │   │  <- Step Indicator
│  │  ■■■■░░░░░░ 33%                           │   │
│  └────────────────────────────────────────────┘   │
│                                                   │
├───────────────────────────────────────────────────┤
│  [Freitext eingeben...]                    [→]    │  <- Input (optional)
└───────────────────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Container | Verwendung |
|----------|-----------|------------|
| **Inline** | Eingebettet in Screen (z.B. Profil-Editor) | Profil-Update Dialog, Skill-Einschaetzung. |
| **Bottom Sheet** | Mobile Bottom Sheet (Expanded) | Mobile Profil-Nudge, Staffing-Antwort. |
| **Slide-Over** | Slide-Over Panel (480px) | Onboarding-Agent auf Desktop. |
| **Fullscreen** | Fullscreen (Mobile) | Onboarding auf Mobile. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `inline` / `bottom-sheet` / `slide-over` / `fullscreen` | `inline` | Container-Variante. |
| `agentName` | String | "Profil-Assistent" | Name des Agenten (Header-Titel). |
| `steps` | Array of Step | erforderlich | Gespraechs-Schritte mit Fragen und Optionen. |
| `currentStep` | Number | `0` | Aktueller Schritt-Index. |
| `showProgress` | Boolean | `true` | Fortschrittsbalken anzeigen. |
| `allowFreeText` | Boolean | `true` | Freitext-Eingabe zusaetzlich zu Quick Replies. |
| `onComplete` | Function | erforderlich | Callback bei Abschluss aller Schritte. |
| `dismissable` | Boolean | `true` | "Spaeter erinnern" Option. |

**Step Config:**

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `message` | String | erforderlich | Agent-Nachricht. |
| `type` | `quick-reply` / `checkbox` / `input` / `select` / `confirmation` | `quick-reply` | Antwort-Typ. |
| `options` | Array | `[]` | Antwort-Optionen. |
| `validation` | Function | `null` | Validierung der Antwort. |
| `aiSuggestions` | Boolean | `false` | AI-Vorschlaege als Pre-Selektionen. |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Container bg | `neutral-0` |
| Agent message bg | `ai-surface` |
| Agent message border | 3px left, `brand-primary` |
| Agent message radius | `radius-lg` (12px) |
| Agent message font | `body-md`, `neutral-900` |
| Agent icon | Sparkle (`icon-ai`), `brand-primary`, 16px |
| Quick Reply buttons | Secondary Button (`sm`), `radius-full` (Pill-Form) |
| Quick Reply hover | `interactive-warm` bg |
| Checkbox options | Standard Checkbox, `brand-primary` checked |
| Free text input | Standard Input (`default`), keine Border bis Focus |
| Progress bar | `score-excellent` bei >66%, `score-good` bei 33-66%, `score-moderate` bei <33% |
| Progress text | `body-xs`, `neutral-600` |
| Step transition | Fade + slide-up, `duration-normal`, `easing-enter` |
| Message reveal | `ktype-ai-reveal` (Token-by-Token) |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Agent Speaking** | Message erscheint mit `ktype-ai-reveal` | Quick Replies erscheinen nach Message-Ende. |
| **Waiting for Input** | Quick Replies oder Input-Feld aktiv | Agent wartet auf Nutzer-Antwort. |
| **User Replied** | Antwort als User-Bubble (rechts ausgerichtet, `neutral-100` bg) | Naechster Schritt wird ausgeloest. |
| **Processing** | Typing-Indikator (3 animierte Dots in `ai-surface` Bubble) | Agent verarbeitet Antwort. |
| **Step Complete** | Progress Bar aktualisiert sich | Transition zum naechsten Schritt. |
| **All Complete** | Erfolgs-Message + Zusammenfassung | "Profil aktualisiert! 3 Skills hinzugefuegt, Vollstaendigkeit: 85%." |
| **Dismissed** | "Spaeter erinnern" → Agent schliesst | Erneuter Nudge nach konfigurierbarer Zeit. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| Desktop | Inline oder Slide-Over. Max 480px Breite. |
| Tablet | Slide-Over oder Bottom Sheet (Half). |
| Mobile | Bottom Sheet (Expanded) oder Fullscreen. Quick Replies als volle Breite Buttons. |

---

## 8. Voice Input Integration

Nicht unterstuetzt in v1.0. Dialog Agent setzt auf Quick Replies und strukturierte Eingaben, nicht auf Freitext/Voice. Zukuenftige Version koennte Voice fuer Freitext-Schritte unterstuetzen.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | `role="dialog"` fuer Slide-Over/Bottom Sheet. `role="region"` fuer Inline. |
| **Live Region** | `aria-live="polite"` fuer neue Agent-Messages. |
| **Focus** | Focus springt automatisch zu neuen Quick Replies nach Agent-Message. |
| **Keyboard** | `Tab` navigiert Quick Replies. `Enter` waehlt aus. `Escape` schliesst (wenn dismissable). |
| **Screen Reader** | Agent-Name angesagt. Jede Message angesagt. Progress: "Schritt 2 von 3, 66 Prozent". |
| **Reduced Motion** | `ktype-ai-reveal` deaktiviert. Messages erscheinen sofort. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Copilot Panel (`ai-interaction/copilot-panel.md`) | Copilot = proaktiv + explorativ. Dialog Agent = strukturiert + aufgaben-orientiert. |
| Chat Interface (`ai-interaction/chat-interface.md`) | Chat = frei-form Multi-Turn. Dialog Agent = gefuehrte Schritte. |
| Bottom Sheet (`composition/bottom-sheet.md`) | Mobile Container fuer Dialog Agent. |
| Slide-Over Panel (`composition/slide-over-panel.md`) | Desktop Container fuer Dialog Agent. |
| Inputs (`primitives/inputs.md`) | Freitext-Eingabe nutzt Standard-Input. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. 4 Varianten. Quick Replies. Progress Tracking. AI-Suggestions fuer Checkboxen. |
