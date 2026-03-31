# Event Manager — Screen Spec

**Screen-ID:** GRW-04
**PRD-Modul:** 9.2 — Event Intelligence
**Journey(s):** J11-S1 (Katrin plant Event-Teilnahme), J11-S3 (Katrin wertet Event aus)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Katrin (BD-Leiterin) — Event-Planung, Teilnehmer-Analyse, Follow-up-Steuerung |
| **Sekundaer** | Thomas (strategische Events, Budget-Freigabe), Stefan (Fach-Events als Speaker) |
| **Frequenz** | Katrin: 2-3x/Woche (Planungsphase), taeglich (bei aktivem Event). Thomas: 1x/Woche. |
| **Trigger** | Sidebar "Growth → Events", Notification "Event in 3 Tagen", Copilot-Vorschlag "Relevantes Event identifiziert", Command Bar "Event oeffnen". |
| **Herkunft** | Sidebar, Notification Center, Copilot Sidebar, Discovery Dashboard. |
| **Ziel** | Events planen (L0), Teilnehmer analysieren und Talking Points vorbereiten (L1), Post-Event Leads erfassen und Follow-ups steuern (L2). |
| **Geraete** | Desktop (primaer), Tablet (Event-Planung unterwegs). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Katrin | alle geplanten Events im Kalender und als Liste sehen | ich den Ueberblick behalte |
| 2 | Katrin | Events mit erwarteten Leads und Zielen anlegen | ich den ROI planen kann |
| 3 | Katrin | vor einem Event eine KI-analysierte Teilnehmerliste mit Talking Points erhalten | ich Gespraeche gezielt fuehre |
| 4 | Katrin | nach einem Event eine Lead-Zusammenfassung und Follow-up-Tasks sehen | kein Lead verloren geht |
| 5 | Thomas | den Event-ROI (Leads vs. Kosten) ueberblicken | ich Budget-Entscheidungen treffe |
| 6 | Katrin | Events mit meinem Kalender synchronisieren | ich keine Termine verpasse |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure (2/3 + 1/3 Asymmetrie)**
**Begruendung:** Event Manager ist ein Workflow-Screen: Events planen → vorbereiten → nachbereiten. Die 2/3+1/3 Asymmetrie (DS 1.7) trennt die Event-Liste/Kalender von KI-Insights und Aktionen.

```
┌─ Sidebar ─┬─ Event Manager ──────────────────────────────────────────────┐
│            │                                                              │
│  Growth    │  Events                [+ Neues Event]  [📅 Kalender | 📋] │
│  > Events  │                                                              │
│            │  ┌─ Filter Bar ──────────────────────────────────────────┐  │
│            │  │ [Status ▾] [Zeitraum ▾] [Typ ▾]   Suche: _________   │  │
│            │  └──────────────────────────────────────────────────────┘  │
│            │                                                              │
│            │  ═══ Kalender-Ansicht ═══                                    │
│            │  ┌──────────────────────────────────────────────────────┐   │
│            │  │       Maerz 2026                    [< Monat >]      │   │
│            │  │  Mo  Di  Mi  Do  Fr  Sa  So                         │   │
│            │  │                          1                           │   │
│            │  │  2   3   4   5   6   7   8                          │   │
│            │  │  9  10  11  12  13  14  15                          │   │
│            │  │ 16  17  18  19  20  21  22                          │   │
│            │  │ 23  24  25  26  27  28  29                          │   │
│            │  │ 30 [31]                                              │   │
│            │  │      ▲                                               │   │
│            │  │  DMEXCO (25-26) ████████                             │   │
│            │  │  SAP Summit (30-31) ████████                         │   │
│            │  └──────────────────────────────────────────────────────┘   │
│            │                                                              │
│            │  ═══ Listen-Ansicht (Toggle) ═══                            │
│            │                                                              │
│            │  ── Bevorstehend ──                                         │
│            │  ┌─ Event Card (L0→L1) ─────────────────────────────────┐  │
│            │  │ 🎤 DMEXCO 2026                                       │  │
│            │  │ ┃ 25.-26. Maerz · Koeln · Konferenz                 │  │
│            │  │ ┃ Teilnehmer: 12 Matches · Leads erwartet: 5        │  │
│            │  │ ┃ Status: Vorbereitung                               │  │
│            │  │ ┃                                                     │  │
│            │  │ ┃ KI-Analyse:                                        │  │
│            │  │ ┃ "5 potenzielle Leads identifiziert.                │  │
│            │  │ ┃  3 haben SAP-Bedarf, 2 suchen NIS2-Beratung."     │  │
│            │  │ ┃                                                     │  │
│            │  │ ┃ [Talking Points] [Teilnehmer] [Bearbeiten]         │  │
│            │  └──────────────────────────────────────────────────────┘  │
│            │                                                              │
│            │  ── Abgeschlossen ──                                        │
│            │  ┌─ Event Card (L0→L1) ─────────────────────────────────┐  │
│            │  │ 📋 CeBIT Hannover 2026                               │  │
│            │  │ ┃ 10.-14. Maerz · Hannover · Messe                  │  │
│            │  │ ┃ Leads erfasst: 8 · Follow-ups offen: 3            │  │
│            │  │ ┃ Status: Nachbereitung                              │  │
│            │  │ ┃                                                     │  │
│            │  │ ┃ [Lead-Summary] [Follow-ups] [Report]               │  │
│            │  └──────────────────────────────────────────────────────┘  │
│            │                                                              │
│            │  ... (weitere Events)                                        │
│            │                                                              │
└────────────┴──────────────────────────────────────────────────────────────┘
```

**Event Card Left-Border Farben:**
- Bevorstehend / Vorbereitung: `brand-warm` (Amber)
- Laufend: `semantic-success` (Gruen)
- Nachbereitung: `semantic-info` (Blau)
- Abgesagt: `neutral-400` (Grau)

**Event-Status-Badges (DS `badges-tags`):**
- "Geplant": `neutral-200` bg, `neutral-700` text
- "Vorbereitung": `semantic-warning-light` bg, `semantic-warning` text
- "Laufend": `semantic-success-light` bg, `semantic-success` text
- "Nachbereitung": `semantic-info-light` bg, `semantic-info` text
- "Abgeschlossen": `neutral-200` bg, `neutral-700` text

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Kalender + Liste nebeneinander moeglich (Optional: Split-View). |
| `breakpoint-lg` | Kalender oder Liste (Toggle). Kalender volle Breite. |
| `breakpoint-md` | Nur Listen-Ansicht. Kalender als kompakte Wochen-Ansicht oben. |
| `breakpoint-sm` | Vertikaler Stack. Event Cards kompakt (L0 only). Kalender als horizontaler Tages-Scroller. Bottom Nav sichtbar. Fuer aktive Events: Verweis auf Live Event Mobile (`growth/live-event-mobile.md`). |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Event-Liste (Name, Datum, Ort, Typ, Status) | Event Service | Bei Seitenladen |
| Teilnehmer-Liste (Name, Firma, Rolle, CRM-Match) | Event Service + CRM Matching | Bei Event-Detail-Oeffnung |
| KI-Talking-Points (pro Teilnehmer) | AI Insight Service | Bei "Talking Points" Klick, Cache 24h |
| Lead-Erfassungen (Post-Event) | Lead Capture Service | Real-time via Live Event Mobile Sync |
| Follow-up-Tasks | Task Service | Real-time |
| Kalender-Sync-Status | Calendar Integration Service | Polling alle 15 Min |
| LinkedIn-Event-Daten | LinkedIn Integration Service | Bei Event-Anlage, Refresh taeglich |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Embedded AI + Command Bar** — KI-Analysen in Event Cards, detaillierte Abfragen via Command Bar. |
| **Teilnehmer-Matching** | KI gleicht Event-Teilnehmerliste gegen CRM ab: "5 potenzielle Leads identifiziert. 3 haben SAP-Bedarf." |
| **Talking Points** | KI generiert pro Teilnehmer: Firmen-Kontext, letzte Interaktion, gemeinsame Kontakte, empfohlene Gespraechsthemen. Auf `ai-surface` Hintergrund. |
| **Lead-Priorisierung** | Post-Event: KI sortiert erfasste Leads nach Potenzial: "Kontakt Mueller (RetailCorp) — hoechste Prioritaet: SAP-Bedarf + Budget-Hinweis." |
| **Follow-up-Generierung** | KI schlaegt Follow-up-Tasks vor: E-Mail-Entwuerfe, Termin-Vorschlaege, Opportunity-Anlage. |
| **Event-Empfehlung** | Copilot schlaegt relevante Events vor: "DMEXCO 2026 hat 12 potenzielle Kontakte aus deiner Pipeline." |

---

## 7. Preview Panel Integration

- **Teilnehmer-Hover:** Hover auf Teilnehmer-Namen zeigt Tooltip-Preview (DS 6.10, 320x200px): Name, Firma, Rolle, letzte Interaktion, CRM-Status, DSGVO-Consent.
- **Event-Detail Slide-Over:** Klick auf "Bearbeiten" oder Event-Titel oeffnet Slide-Over (480px):
  - Event-Details (Name, Datum, Ort, Budget, Ziele)
  - Teilnehmer-Liste mit KI-Matches
  - Talking Points (Pre-Event)
  - Lead-Summary (Post-Event)
  - Follow-up-Tasks
  - Kalender-Sync-Status

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Event-Reminder** | "DMEXCO in 3 Tagen — Talking Points fuer 5 Kontakte bereit." Push-Notification + Copilot-Briefing. |
| **ROI-Prognose** | "Basierend auf aehnlichen Events: erwartet 5-8 qualifizierte Leads (Wert: ca. 150K Pipeline)." |
| **Follow-up-Dringlichkeit** | "3 Follow-ups aus CeBIT seit 5 Tagen offen. Kontaktbereitschaft sinkt nach 7 Tagen um 40%." |
| **Event-Relevanz** | KI bewertet zukuenftige Events nach Pipeline-Relevanz: "Hannover Messe hat 15 Matches — hoeher als letztes Jahr (9)." |

---

## 9. Interaktions-Flows

### Flow 1: Event planen (Katrin, 5 Min)
```
Katrin klickt "+ Neues Event" → Modal/Slide-Over oeffnet →
Gibt ein: Name, Datum, Ort, Typ, Budget, Ziele →
LinkedIn-Integration importiert Teilnehmerliste →
KI analysiert: "12 Matches, 5 potenzielle Leads" →
Speichern → Event erscheint im Kalender und in der Liste
```

### Flow 2: Pre-Event Vorbereitung (Katrin, 10 Min)
```
Katrin oeffnet DMEXCO Event → Klickt "Talking Points" →
KI generiert pro Kontakt: Firmenkontext + Gespraechsthema →
Katrin reviewt und passt an → Exportiert als PDF oder Mobile-View →
Wechselt am Event-Tag zu Live Event Mobile
```

### Flow 3: Post-Event Nachbereitung (Katrin, 15 Min)
```
Katrin oeffnet CeBIT (Status: Nachbereitung) →
"Lead-Summary" zeigt 8 erfasste Kontakte (aus Live Event Mobile) →
KI priorisiert: Top 3 Leads mit Handlungsempfehlungen →
Katrin erstellt Opportunities fuer Top 2 →
Weist Follow-up-Tasks an Team zu →
Status wechselt zu "Abgeschlossen"
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Sidebar | Event Manager | Klick "Growth → Events" |
| **Von:** Copilot Sidebar | Event Manager | "Relevantes Event" Vorschlag Klick |
| **Von:** Discovery Dashboard | Event Manager | Event-Signal Klick |
| **Zu:** Live Event Mobile | `growth/live-event-mobile.md` | "Event starten" (Mobile), automatisch am Event-Tag |
| **Zu:** Opportunity Intake | `deal/opportunity-intake.md` | "Opportunity erstellen" aus Lead-Summary |
| **Zu:** Account Plan | `foundation/account-plan-stakeholder-map.md` | Klick auf Firmenname in Teilnehmerliste |
| **Zu:** Engagement Brief Canvas | `ai-experience/engagement-brief-canvas.md` | "Brief erstellen" fuer Lead-Kontakt |
| **Zu:** Copilot Sidebar | `ai-experience/copilot-sidebar.md` | "Event-Analyse vertiefen" |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board Item:** Event Manager | Noch nicht erstellt. |
| **Figma:** Kein Frame vorhanden | Erstanlage erforderlich. Kalender-Komponente und Event Cards, Light Theme. |

---

## 12. Akzeptanzkriterien

- [ ] Kalender-Ansicht: Monats-Ansicht mit Event-Markierungen
- [ ] Listen-Ansicht: Gruppiert nach Status (Bevorstehend, Laufend, Abgeschlossen)
- [ ] Toggle zwischen Kalender und Liste
- [ ] Event Cards mit Status-Badges und Left-Border-Farben nach Status
- [ ] "+ Neues Event" erstellt Event mit Pflichtfeldern (Name, Datum, Ort)
- [ ] Pre-Event: KI-Teilnehmer-Matching und Talking Points
- [ ] Post-Event: Lead-Summary mit KI-Priorisierung
- [ ] Follow-up-Task-Generierung (KI-vorgeschlagen)
- [ ] Kalender-Sync (Google Calendar, Outlook)
- [ ] LinkedIn-Integration fuer Teilnehmer-Import
- [ ] Filter: Status, Zeitraum, Typ
- [ ] Responsive: Kompakte Liste auf Mobile, Verweis auf Live Event Mobile
- [ ] Accessibility: role="main", aria-label pro Event, Keyboard-navigierbar

---

## 13. Offene Fragen

1. **Kalender-Integration:** Welche Kalender werden in Phase 1 unterstuetzt? *Empfehlung: Google Calendar + Microsoft Outlook (OAuth).*
2. **LinkedIn-Integration:** Wie wird die Teilnehmerliste importiert? *Empfehlung: LinkedIn Events API (sofern verfuegbar) oder manueller CSV-Import.*
3. **Event-Typen:** Welche Typen gibt es? *Empfehlung: Konferenz, Messe, Meetup, Kunden-Event, Webinar.*
4. **Budget-Tracking:** Soll das Event-Budget im Event Manager erfasst werden? *Empfehlung: Ja, einfaches Feld. Detailliertes Tracking in Financial Dashboard.*
5. **Talking Points Export:** In welchem Format? *Empfehlung: PDF und In-App-Ansicht (Live Event Mobile).*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
