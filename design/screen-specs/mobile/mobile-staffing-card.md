# Mobile Staffing Card — Screen Spec

**Screen-ID:** MOB-03
**PRD-Modul:** 10.2 — Staffing & Matching Engine
**Journey(s):** J4-S1 (Lisa erhaelt Staffing-Anfrage), J5-S1 (Stefan prueft Verfuegbarkeit)
**Layout-Typ:** Progressive Disclosure (Single Column)
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Lisa (Consultant) — Staffing-Anfrage beantworten |
| **Sekundaer** | Stefan (Senior Consultant, Team-Lead: Verfuegbarkeit bestaetigen) |
| **Frequenz** | Lisa: 1-3x/Woche (Push-getrieben, 60s Sessions). Stefan: 2-5x/Woche. |
| **Trigger** | Push Notification "Neue Staffing-Anfrage", Bottom Nav "Aufgaben" (Lisa), Dialog Agent Nudge. |
| **Herkunft** | Push Notification (primaer), Bottom Navigation Bar "Aufgaben", Copilot Sidebar. |
| **Ziel** | Staffing-Anfrage lesen, Verfuegbarkeit bestaetigen oder absagen — in unter 60 Sekunden. |
| **Geraete** | Smartphone (primaer). Touch-optimiert. |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Lisa | eine Staffing-Anfrage per Push erhalten | ich schnell antworten kann |
| 2 | Lisa | Projektdetails (Kunde, Zeitraum, Rolle) auf einen Blick sehen | ich entscheide ob es passt |
| 3 | Lisa | meine Verfuegbarkeit mit einem Tap bestaetigen | der Staffing-Prozess nicht blockiert wird |
| 4 | Lisa | bei Absage einen Grund auswaehlen | Katrin die Situation versteht |
| 5 | Stefan | meine eigene und die Team-Verfuegbarkeit pruefen | ich fundiert entscheide |

---

## 3. Layout — Staffing-Anfrage (Bottom Sheet)

Die Staffing-Anfrage wird als Bottom Sheet ueber dem aktuellen Screen angezeigt (ausgeloest durch Push oder Aufgaben-Liste).

```
┌─────────────────────────────────────────────┐
│  [Aktueller Screen, abgedunkelt]            │
├─────────────────────────────────────────────┤
│          ━━━━━━━━━━━                        │  <- Drag Handle
│                                             │
│  Staffing-Anfrage                    [X]    │
│  von Katrin · vor 30 Min.                   │
│                                             │
│  ─── Projekt ───                            │
│                                             │
│  RetailCorp AG                              │
│  SAP S/4HANA Migration                      │
│                                             │
│  📅  Mai – Nov 2026 (7 Monate)             │
│  👤  Rolle: Senior SAP Consultant           │
│  📊  Auslastung: 80%                       │
│  💰  Tagessatz: 1.450 EUR                  │
│                                             │
│  ─── Dein Match ───                         │
│                                             │
│  Score: [94] Excellent                      │
│  ■■■■■■■■■■ Skills: 96                     │
│  ■■■■■■■■░░ Verfuegb.: 82                  │
│  ■■■■■■■■■░ Branche: 91                    │
│  ■■■■■■■■■■ Team-Fit: 95                   │
│                                             │
│  ─── Team ───                               │
│                                             │
│  [Av] Du (Senior SC)                        │
│  [Av] Tim K. (Junior SC)                    │
│  [Av] +1 wird gesucht                       │
│                                             │
├─────────────────────────────────────────────┤
│  [Absagen]        [Verfuegbar ✓]            │  <- Sticky Footer
└─────────────────────────────────────────────┘
```

- Bottom Sheet Variante: **Expanded** (90%)
- Score Breakdown zeigt persoenlichen Match
- Team-Uebersicht mit Avataren

---

## 4. Layout — Aufgaben-Liste (Kontext)

Lisa sieht Staffing-Anfragen in ihrer Aufgaben-Liste neben anderen Tasks:

```
┌─ Status Bar ────────────────────────────────┐
├─────────────────────────────────────────────┤
│                                             │
│  Aufgaben                        [2 offen]  │
│                                             │
│  ┌─ Staffing Card (kompakt) ──────────────┐ │
│  │  📋 Staffing-Anfrage                   │ │
│  │  RetailCorp AG · Senior SC             │ │
│  │  Mai–Nov 2026 · Score [94]             │ │
│  │  von Katrin · vor 30 Min.     [→]      │ │
│  └─────────────────────────────────────────┘ │
│                                             │
│  ┌─ Task Card (kompakt) ──────────────────┐ │
│  │  📝 Profil aktualisieren               │ │
│  │  3 Skills fehlen · Letzte Aenderung:   │ │
│  │  vor 14 Tagen                   [→]    │ │
│  └─────────────────────────────────────────┘ │
│                                             │
├─────────────────────────────────────────────┤
│  ◇ Profil  ◆ Aufgaben  ◇ Wissen           │  <- Bottom Nav (Lisa)
└─────────────────────────────────────────────┘
```

---

## 5. Datenanforderungen

| Datenpunkt | Quelle | Update-Frequenz |
|-----------|--------|-----------------|
| Staffing-Anfrage | API: `GET /staffing-requests?assignee={userId}&status=pending` | Real-time via Push + WebSocket |
| Projekt-Details | API: `GET /opportunities/{id}` (abgespeckt) | Snapshot bei Anfrage |
| Persoenlicher Match-Score | AI-Engine, vorberechnet | Bei Anfrage-Erstellung |
| Team-Zusammensetzung | API: `GET /opportunities/{id}/team` | Snapshot |
| Verfuegbarkeits-Antwort | API: `POST /staffing-requests/{id}/respond` | Sofort (optimistic UI) |

---

## 6. AI-Interaktion

| Aspekt | Umsetzung |
|--------|-----------|
| **Paradigma** | Dialog Agent (Lisa). Staffing-Anfrage wird ggf. durch Dialog Agent Nudge begleitet. |
| **Match-Score** | Persoenlicher Score mit 4-Dimensionen-Breakdown, automatisch berechnet. |
| **Smart Hint** | "Du hast 3 aehnliche Projekte erfolgreich abgeschlossen." (Subtle, `body-sm`, `neutral-600`.) |
| **Keine Voice** | Staffing-Antwort ist eine binaere Entscheidung — Buttons genuegen. |

---

## 7. Preview Panel Integration

Nicht zutreffend — Staffing Card zeigt strukturierte Daten, keine Dokumente.

---

## 8. Predictive Intelligence

| Feature | Umsetzung |
|---------|-----------|
| **Verfuegbarkeits-Pre-Check** | Score "Verfuegbarkeit: 82" basiert auf Kalender-Daten. Lisa sieht sofort, ob Zeitraum passt. |
| **Erfahrungs-Hinweis** | "3 aehnliche Projekte erfolgreich" — basierend auf Projekt-Historie. |
| **Auto-Erinnerung** | Wenn Lisa nach 4h nicht antwortet: erneute Push Notification. |

---

## 9. Interaktions-Flows

### Flow 1: Verfuegbarkeit bestaetigen (60s)
1. Lisa erhaelt Push: "Staffing-Anfrage: RetailCorp AG, Senior SC"
2. Tap auf Push → Bottom Sheet (Expanded) oeffnet sich direkt
3. Lisa scannt: Kunde, Zeitraum, Rolle, Auslastung, Tagessatz
4. Lisa sieht Match-Score (94) und Breakdown
5. Tap "Verfuegbar ✓"
6. Success-Toast: "✅ Verfuegbarkeit bestaetigt. Katrin wird benachrichtigt."
7. Bottom Sheet schliesst

### Flow 2: Absage mit Grund
1. Lisa oeffnet Staffing-Anfrage im Bottom Sheet
2. Tap "Absagen"
3. Selection-List erscheint (Bottom Sheet Compact):
   - "Zeitlich nicht verfuegbar"
   - "Keine passende Expertise"
   - "Bereits in anderem Projekt"
   - "Persoenlicher Grund"
   - "Sonstiges" (Freitext)
4. Lisa waehlt "Zeitlich nicht verfuegbar"
5. Tap "Absage senden"
6. Toast: "Absage gesendet. Katrin wird benachrichtigt."

### Flow 3: Detail pruefen vor Entscheidung
1. Lisa oeffnet Staffing-Anfrage
2. Tap auf "RetailCorp AG" → Deep-Link zum Account (Desktop-Hinweis: "Fuer Details am Desktop oeffnen")
3. Alternativ: Swipe up fuer mehr Kontext (Team, Projekt-Beschreibung)
4. Entscheidung per Button

---

## 10. Handoff-Punkte

| Von | Zu | Trigger | Daten |
|-----|-----|---------|-------|
| Push Notification | Staffing Bottom Sheet | Tap auf Push | `staffingRequestId` |
| Aufgaben-Liste | Staffing Bottom Sheet | Tap auf Staffing Card | `staffingRequestId` |
| Dialog Agent Nudge | Staffing Bottom Sheet | Tap auf Nudge | `staffingRequestId` |
| Staffing Bottom Sheet | Desktop Opportunity Detail | Tap auf Account-Name | Deep-Link `opportunityId` |
| Antwort (Verfuegbar/Absage) | Katrin: Notification Center | Automatisch | `staffingRequestId`, `response` |

---

## 11. Stitch/Figma-Referenz

| Element | Referenz |
|---------|----------|
| Staffing Card | Kein Stitch-Aequivalent. Neues Mobile-Pattern. |
| Score Breakdown | DS 5.7 Score Displays (Bar-Variante) |
| Bottom Sheet | Neues Pattern, kein Stitch-Aequivalent. |

---

## 12. Akzeptanzkriterien

- [ ] Push Notification bei neuer Staffing-Anfrage
- [ ] Bottom Sheet zeigt: Projekt, Zeitraum, Rolle, Auslastung, Tagessatz
- [ ] Persoenlicher Match-Score mit 4-Dimensionen-Breakdown sichtbar
- [ ] Team-Uebersicht mit Avataren
- [ ] "Verfuegbar" Button bestaetigt mit Success-Toast
- [ ] "Absagen" zeigt Grund-Auswahl (5 Optionen + Freitext)
- [ ] Antwort in <60s ab Push-Oeffnung moeglich
- [ ] Auto-Erinnerung nach 4h ohne Antwort
- [ ] Aufgaben-Liste zeigt Staffing-Anfragen neben anderen Tasks
- [ ] Empty State in Aufgaben-Liste bei 0 Tasks: "Keine offenen Aufgaben 🎉"

---

## 13. Offene Fragen

| # | Frage | Status |
|---|-------|--------|
| 1 | Kann Lisa Verfuegbarkeit teilweise bestaetigen (z.B. "ab KW 22 statt KW 18")? | Offen |
| 2 | Soll der Tagessatz auf Mobile angezeigt werden (Datenschutz bei oeffentlicher Nutzung)? | Offen |
| 3 | Braucht Stefan eine erweiterte Ansicht mit Team-Kalender? | Offen — evtl. separater Screen |

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Bottom Sheet Detail. Absage-Gruende. Push-Integration. |
