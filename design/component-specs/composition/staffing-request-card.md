# Staffing Request Card

**Komponenten-Familie:** Composition
**DS-Version:** v1.3
**DS-Referenz:** — (neu)
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Die Staffing Request Card stellt Staffing- und Matching-Anfragen fuer Berater dar. Sie zeigt den Match-Score, eine Aufschluesselung der Matching-Dimensionen, Projektinformationen und ermoeglicht schnelle Zu-/Absage.

**Primaere Personas:**
- Stefan Kraus (Senior Consultant): Erhaelt Staffing-Anfragen, bewertet Passung
- Lisa Tran (Consultant): Sieht Projektvorschlaege, sagt zu oder ab

**Haeufigste Verwendungen:**
- Staffing & Matching Screen: Liste aller offenen Anfragen
- Mobile Staffing Card: Push-Notification fuehrt zur Card
- Notification Center: Staffing-Benachrichtigungen verlinken zur Card

---

## 2. Anatomie

### Compact (Notification)
```
┌──────────────────────────────────────────────────────────────┐
│  ╭───╮                                                       │
│  │ 92│  SAP S/4HANA Migration — RetailCorp    Antwort bis    │
│  ╰───╯  Senior Consultant, 6 Monate          15.04.          │
│         [Zusagen] [Ablehnen] [Details]                       │
└──────────────────────────────────────────────────────────────┘
   ↑                 ↑                              ↑
  Score Ring    Project Info                    Deadline
```

### Expanded (Vollansicht)
```
┌──────────────────────────────────────────────────────────────────┐
│  Match Score                                   Antwort bis 15.04.│
│  ╭─────╮                                       (noch 15 Tage)   │
│  │     │                                                        │
│  │  92 │     SAP S/4HANA Migration                              │
│  │     │     RetailCorp AG                                      │
│  ╰─────╯     Senior Consultant · 6 Monate · Start: 01.05.2026  │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  Match-Aufschluesselung                                          │
│  Skill Match     ■■■■■■■■■■  96                                  │
│  Verfuegbarkeit  ■■■■■■■■░░  82                                  │
│  Erfahrung       ■■■■■■■■■░  91                                  │
│  Standort        ■■■■■■■■■■  95                                  │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  ┌─ KI-Einschaetzung ────────────────────────────────────────┐  │
│  │  ✨ Passt gut: 3 aehnliche Projekte erfolgreich           │  │
│  │  abgeschlossen. Letzte SAP-Erfahrung: RetailPlus (2025). │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  Team                                                            │
│  [Avatar][Avatar][Avatar] + 1 weiterer                           │
│  M. Schneider (Lead), K. Engel, L. Tran                          │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  [Details]              [Ablehnen]              [✓ Zusagen]      │
└──────────────────────────────────────────────────────────────────┘
```

### Inline (in Staffing-Liste)
```
┌──────────────────────────────────────────────────────────────┐
│  ╭───╮  SAP S/4HANA Migration     [Av][Av][Av]   bis 15.04. │
│  │ 92│  RetailCorp · 6 Mo.                                   │
│  ╰───╯  ✨ 3 aehnliche Projekte   [Zusagen] [Ablehnen]      │
└──────────────────────────────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Groesse | Verwendung |
|----------|---------|------------|
| **Compact** | Listenzeile, 80-96px Hoehe | Push-Notification, Notification Center. Score Ring + Kerndaten + Quick-Actions. |
| **Expanded** | Vollstaendige Card mit allen Details | Staffing & Matching Screen (Einzelansicht). Score-Breakdown, KI-Einschaetzung, Team-Preview. |
| **Inline** | Mittlere Card, 100-120px Hoehe | Staffing-Liste. Score Ring + Projektinfo + Team-Avatare + Actions. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `compact` / `expanded` / `inline` | `inline` | Darstellungs-Variante. |
| `matchScore` | Number (0-100) | erforderlich | Gesamt-Match-Score. |
| `dimensions` | Array of Dimension | erforderlich | Matching-Dimensionen (4 Stueck). |
| `project` | Project Info Object | erforderlich | Projektinformationen. |
| `team` | Array of Avatar Props | `[]` | Bereits zugewiesene Team-Mitglieder. |
| `deadline` | DateTime | `null` | Antwort-Deadline. |
| `aiSuggestion` | Object | `null` | KI-Einschaetzung: `{ text, icon }`. |
| `onAccept` | Function | erforderlich | Callback fuer Zusage. |
| `onDecline` | Function | erforderlich | Callback fuer Absage (oeffnet Grund-Auswahl). |
| `onViewDetails` | Function | `null` | Callback fuer Detail-Ansicht. |
| `status` | `open` / `accepted` / `declined` / `expired` | `open` | Aktueller Status. |

**Dimension:**

| Prop | Typ | Beschreibung |
|------|-----|-------------|
| `label` | String | Dimensions-Label (z.B. "Skill Match"). |
| `value` | Number (0-100) | Dimensions-Wert. |

**Project Info:**

| Prop | Typ | Beschreibung |
|------|-----|-------------|
| `clientName` | String | Kundenname. |
| `projectTitle` | String | Projekttitel. |
| `role` | String | Gesuchte Rolle. |
| `duration` | String | Projektdauer (z.B. "6 Monate"). |
| `startDate` | Date | Startdatum. |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Card bg | `neutral-0` |
| Card border | `border-default` |
| Card radius | `radius-lg` |
| Card shadow | `shadow-sm` |
| Card padding (Compact) | `space-3` vertikal, `space-4` horizontal |
| Card padding (Expanded) | `space-4` |
| Card padding (Inline) | `space-3` |
| Score Ring | Score Displays `ring`-Variante Tokens (siehe `score-displays.md`) |
| Score Ring size (Compact) | 48px |
| Score Ring size (Expanded) | 64px |
| Score Ring size (Inline) | 48px |
| Score Ring color | Automatisch nach Wert: `score-excellent` / `score-good` / `score-moderate` / `score-weak` / `score-poor` |
| Score Ring font | `mono-md` (48px Ring), `heading-md` (64px Ring) |
| Dimension Bar height | 4px |
| Dimension Bar track | `neutral-200` |
| Dimension Bar fill | Score-Token (farbcodiert nach Wert) |
| Dimension Bar radius | `radius-full` |
| Dimension label | `body-sm`, `neutral-700` |
| Dimension value | `mono-sm`, `neutral-900` |
| Dimension gap | `space-2` |
| Project title font | `heading-sm` (Compact/Inline), `heading-lg` (Expanded) |
| Project title color | `neutral-900` |
| Client name font | `body-md`, `neutral-700` |
| Role + Duration font | `body-sm`, `neutral-600` |
| Team Avatars | Avatar `sm` (24px), Avatar-Gruppe mit Overlap (-8px) |
| Team "+ N" text | `body-xs`, `neutral-600` |
| Deadline font | `body-sm` |
| Deadline color (> 7 Tage) | `neutral-600` |
| Deadline color (3-7 Tage) | `semantic-warning` |
| Deadline color (< 3 Tage) | `semantic-danger` |
| Deadline icon | `icon-xs` (Calendar), entsprechende Farbe |
| Countdown font | `body-xs`, entsprechende Farbe |
| AI Suggestion bg | `ai-surface` |
| AI Suggestion border | `ai-border` (links, 3px) |
| AI Suggestion radius | `radius-md` |
| AI Suggestion padding | `space-3` |
| AI Suggestion icon | `ai-sparkle` Sparkles, `icon-sm` |
| AI Suggestion font | `body-md`, `neutral-900` |
| Accept Button | Primary-Variante: `semantic-success` bg, `neutral-0` text |
| Decline Button | Secondary-Variante: `border-default`, `neutral-700` text |
| Details Button | Ghost-Variante: `brand-primary` text |
| Divider | `border-subtle` |
| Status: Open left border | none (default) |
| Status: Accepted left border | 3px `semantic-success` |
| Status: Declined left border | 3px `semantic-danger` |
| Status: Expired left border | 3px `neutral-400` |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Default (Open)** | Card ohne Left-Border. Score Ring mit Eingangs-Animation. | Score Ring + Dimension Bars animieren beim ersten Rendern. |
| **Hover (Compact/Inline)** | `interactive-warm` bg | `duration-fast`. Klick oeffnet Expanded oder Detail-Ansicht. |
| **Focus** | `border-focus` Ring | Keyboard-Navigation. |
| **Score Animation** | Ring fuellt sich von 0 auf Wert. Bars füllen sich mit Stagger (100ms pro Bar). | `duration-slow`, `easing-enter`. Nur bei erstem Viewport-Eintritt. |
| **Accepting** | Accept-Button zeigt Spinner. Card bg blendet zu `semantic-success-light`. | `duration-normal`. |
| **Accepted** | Left border `semantic-success`. Status-Badge "Zugesagt". Buttons verschwinden. | Konfirmations-Toast: "Zusage fuer [Projekt] gesendet." |
| **Declining** | Bottom Sheet (Mobile) oder Dropdown (Desktop) mit Grund-Auswahl. | Gruende: "Zeitliche Ueberschneidung", "Skill-Mismatch", "Persoenliche Gruende", "Sonstiges". |
| **Declined** | Left border `semantic-danger`. Status-Badge "Abgelehnt". | Card bleibt in Liste (ausgegraut). |
| **Expired** | Left border `neutral-400`. Gesamte Card Opacity 0.6. Buttons deaktiviert. | "Antwortfrist abgelaufen." |
| **Loading** | Shimmer: Ring-Platzhalter + 3 Textzeilen (Compact), volle Card-Silhouette (Expanded). | Bei initialem Laden. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-lg`+ | Inline in Staffing-Liste. Expanded als Slide-Over (Wide, 640px) bei Klick. Score Ring 48px (Inline) / 64px (Expanded). Dimension Bars nebeneinander (2x2 Grid). |
| `breakpoint-md` | Inline volle Breite. Expanded als Bottom Sheet (Expanded-Variante). |
| `breakpoint-sm` | Compact als Push-Notification-Karte. Expanded als Bottom Sheet (Fullscreen). Buttons in Footer gestapelt: Zusagen oben, Ablehnen darunter. Team-Avatare auf 3 limitiert. |

**Score-Ring Skalierung:**
- Desktop: 64px (Expanded), 48px (Compact/Inline)
- Mobile: 48px (alle Varianten)

---

## 8. Voice Input Integration

Nicht zutreffend — Staffing-Entscheidungen (Zusage/Absage) sind explizite Aktionen, die bewusste Interaktion erfordern.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | Card: `role="article"`, `aria-label="Staffing-Anfrage: [Projekt], Match-Score [Score] von 100"`. |
| **Score Ring** | `role="progressbar"`, `aria-valuenow="92"`, `aria-valuemin="0"`, `aria-valuemax="100"`, `aria-label="Match-Score: 92 von 100, ausgezeichnet"`. |
| **Dimension Bars** | Jede Bar: `role="meter"`, `aria-valuenow`, `aria-label="Skill Match: 96 von 100"`. |
| **Deadline** | Urgenz als Text-Label: "Antwort bis 15. April, noch 15 Tage" / "Dringend: noch 2 Tage". Nicht nur Farbe. |
| **Keyboard** | `Tab` fokussiert Card, dann Buttons. `Enter` auf Card oeffnet Expanded/Details. |
| **Screen Reader** | KI-Einschaetzung: "KI-Einschaetzung: Passt gut, 3 aehnliche Projekte erfolgreich abgeschlossen." Team: "Team: 3 Mitglieder zugewiesen." |
| **Decline Reason** | Bottom Sheet/Dropdown: `role="dialog"`, `aria-label="Ablehnungsgrund auswaehlen"`. Pflichtfeld. |
| **Focus Restore** | Nach Zusage/Absage: Focus springt zur naechsten Card in der Liste. |
| **Reduced Motion** | Score-Ring und Bar-Animationen deaktiviert. Sofortige Anzeige der Endwerte. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Score Displays (`data-display/score-displays.md`) | Match-Score Ring und Dimension Bars nutzen Score Display Tokens. |
| Cards (`data-display/cards.md`) | Staffing Request Card ist eine spezialisierte Card-Variante. Teilt Basis-Tokens. |
| AI Content Card (`ai-interaction/ai-content-card.md`) | KI-Einschaetzung nutzt AI Content Card Pattern. |
| Avatars (`primitives/avatars.md`) | Team-Avatare als Avatar-Gruppe. |
| Bottom Sheet (`composition/bottom-sheet.md`) | Mobile Expanded-Ansicht und Ablehnungsgrund-Auswahl als Bottom Sheet. |
| Notification Inbox (`composition/notification-inbox.md`) | Staffing-Notifications verlinken zur Staffing Request Card. |
| Badges & Tags (`primitives/badges-tags.md`) | Status-Badges fuer Open/Accepted/Declined/Expired. |
| Approval Card (`composition/approval-card.md`) | Schwester-Komponente: Approval Card fuer Genehmigungen, Staffing Request Card fuer Matching. Aehnliche Interaktionsmuster. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Compact/Expanded/Inline-Varianten. 4-Dimensionen Score Breakdown. KI-Einschaetzung. Deadline-Countdown mit Urgenz-Eskalation. Decline-Reason Bottom Sheet. |
