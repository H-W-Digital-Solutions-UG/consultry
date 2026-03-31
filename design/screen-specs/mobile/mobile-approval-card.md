# Mobile Approval Card — Screen Spec

**Screen-ID:** MOB-02
**PRD-Modul:** 14.1 — Genehmigungsprozesse
**Journey(s):** J12-S3 (Thomas genehmigt Staffing), J2-S3 (Thomas gibt Team frei)
**Layout-Typ:** Progressive Disclosure (Single Column)
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Thomas (Managing Partner) — Genehmigungen unterwegs |
| **Sekundaer** | Stefan (Team-Lead: Budget-Genehmigungen) |
| **Frequenz** | Thomas: 3-5x/Tag (Push-getrieben, 30-60s Sessions). |
| **Trigger** | Push Notification "Neue Genehmigung", Bottom Nav "Approvals" (Thomas), Copilot Briefing "3 Genehmigungen ausstehend". |
| **Herkunft** | Push Notification (primaer), Bottom Navigation Bar, Copilot Briefing. |
| **Ziel** | Approval-Anfrage pruefen, genehmigen oder ablehnen — in unter 30 Sekunden. |
| **Geraete** | Smartphone (primaer). One-handed, touch-optimiert. |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Thomas | Genehmigungsanfragen per Push erhalten und direkt reagieren | Entscheidungen nicht den Workflow blockieren |
| 2 | Thomas | die wichtigsten Fakten einer Staffing-Anfrage auf einen Blick sehen | ich in 10 Sekunden entscheiden kann |
| 3 | Thomas | per Swipe genehmigen oder ablehnen | ich noch schneller reagiere |
| 4 | Thomas | bei Ablehnung einen kurzen Kommentar hinterlassen | der Antragsteller den Grund versteht |
| 5 | Thomas | eine Uebersicht meiner offenen Approvals sehen | ich weiss was noch ansteht |

---

## 3. Layout — Approval Queue (Liste)

```
┌─ Status Bar ────────────────────────────────┐
│  9:41                              ■ ▶ 87%  │
├─────────────────────────────────────────────┤
│                                             │
│  Genehmigungen                   [3 offen]  │  <- Sticky Header
│                                             │
│  ┌─ Tab Bar ───────────────────────────────┐│
│  │  [Offen (3)]  [Erledigt]  [Alle]       ││
│  └─────────────────────────────────────────┘│
│                                             │
│  ┌─ Approval Card ────────────────────────┐ │
│  │  Staffing-Freigabe                     │ │
│  │  RetailCorp AG · SAP S/4HANA           │ │
│  │  Team: 3 Berater · Ø Score 88          │ │
│  │  DB1: 28% · Budget: 480K EUR           │ │
│  │  Angefragt von: Katrin · vor 2h        │ │
│  │  [Ablehnen]          [Genehmigen ✓]    │ │
│  └─────────────────────────────────────────┘ │
│                                             │
│  ┌─ Approval Card ────────────────────────┐ │
│  │  Budget-Erhoehung                      │ │
│  │  InnovateTech · Phase 2                │ │
│  │  Aktuell: 200K → Neu: 280K EUR        │ │
│  │  Begruendung: Scope-Erweiterung        │ │
│  │  Angefragt von: Stefan · vor 5h        │ │
│  │  [Ablehnen]          [Genehmigen ✓]    │ │
│  └─────────────────────────────────────────┘ │
│                                             │
├─────────────────────────────────────────────┤
│  ◇ Cockpit  ◆ Approvals ◇ Pipeline ◇ AI   │  <- Bottom Nav
└─────────────────────────────────────────────┘
```

---

## 4. Layout — Approval Detail (Bottom Sheet)

```
┌─────────────────────────────────────────────┐
│  [Feed, abgedunkelt]                        │
├─────────────────────────────────────────────┤
│          ━━━━━━━━━━━                        │  <- Drag Handle
│                                             │
│  Staffing-Freigabe                   [X]    │
│  RetailCorp AG · SAP S/4HANA               │
│                                             │
│  ─── Team-Zusammensetzung ───               │
│                                             │
│  [Av] Markus S.  Senior SC    Score [94]    │
│  [Av] Lisa T.    Consultant   Score [78]    │
│  [Av] Tim K.     Junior SC    Score [71]    │
│                                             │
│  Ø Team-Score: 88                           │
│  DB1-Marge: 28%                             │
│  Projektlaufzeit: Mai–Nov 2026              │
│  Budget: 480.000 EUR                        │
│                                             │
│  ─── AI-Einschaetzung ───                   │
│  "Starkes Team mit komplementaeren Skills.  │
│   Markus' SAP-Erfahrung deckt 96% der      │
│   Anforderungen ab."                        │
│                                             │
├─────────────────────────────────────────────┤
│  [Ablehnen]              [Genehmigen ✓]     │  <- Sticky Footer
└─────────────────────────────────────────────┘
```

- Bottom Sheet Variante: **Expanded** (90%)
- Team-Mitglieder als kompakte Zeilen mit Avatar + Score Badge
- AI-Einschaetzung in `ai-surface` Container

---

## 5. Datenanforderungen

| Datenpunkt | Quelle | Update-Frequenz |
|-----------|--------|-----------------|
| Approval-Liste | API: `GET /approvals?status=pending&assignee={userId}` | Real-time via WebSocket + Push |
| Approval-Detail | API: `GET /approvals/{id}` | On-Demand |
| Team-Zusammensetzung | API: `GET /opportunities/{id}/team` | Snapshot bei Anfrage |
| AI-Einschaetzung | AI-Engine, vorberechnet | Bei Anfrage-Erstellung |
| Approval-Action | API: `POST /approvals/{id}/decide` | Sofort (optimistic UI) |

---

## 6. AI-Interaktion

| Aspekt | Umsetzung |
|--------|-----------|
| **Paradigma** | Invisible AI (AI-Einschaetzung als Text-Block, keine Konversation) |
| **AI-Einschaetzung** | 2-3 Saetze, `ai-surface` Hintergrund, `body-md`. Erklaert Team-Staerken, Risiken, Score-Grundlage. |
| **Keine Voice** | Approval-Flow ist zu kurz fuer Voice. Touch-Buttons genuegen. |
| **Smart Default** | Bei wiederkehrenden Approval-Typen: "Katrin's Staffing-Vorschlaege werden zu 92% genehmigt." (Subtle Hint, kein Nudge.) |

---

## 7. Preview Panel Integration

Nicht zutreffend — Approval Cards zeigen strukturierte Daten, keine Dokument-Vorschauen.

---

## 8. Predictive Intelligence

| Feature | Umsetzung |
|---------|-----------|
| **Priorisierung** | Approvals nach Dringlichkeit sortiert (Deadline, Wartedauer, Projekt-Phase). |
| **Genehmigungswahrscheinlichkeit** | Subtle Hinweis: "Aehnliche Anfragen: 92% genehmigt". Kein Button-Pre-Select. |
| **Push-Timing** | Push Notifications zu Thomas' typischen Entscheidungszeiten (morgens 8-9h, mittags). |

---

## 9. Interaktions-Flows

### Flow 1: Quick Approve (30s)
1. Thomas erhaelt Push: "Staffing-Freigabe: RetailCorp AG"
2. Tap auf Push → Approval Queue, Auto-Open Bottom Sheet fuer diese Anfrage
3. Thomas scannt Team (3 Zeilen), Score (88), DB1 (28%), AI-Einschaetzung
4. Tap "Genehmigen ✓"
5. Success-Toast: "✅ Staffing freigegeben. Katrin wird benachrichtigt."
6. Bottom Sheet schliesst, naechste Approval Card erscheint (oder "Alle erledigt" Empty State)

### Flow 2: Ablehnung mit Kommentar
1. Thomas oeffnet Approval im Bottom Sheet
2. Tap "Ablehnen"
3. Inline-Textfeld erscheint: "Grund fuer Ablehnung (optional)"
4. Thomas tippt: "Junior SC zu unerfahren fuer dieses Projekt"
5. Tap "Ablehnung senden"
6. Toast: "⚠️ Staffing abgelehnt. Katrin wird benachrichtigt."

### Flow 3: Swipe-Genehmigung (Power User)
1. Thomas sieht Approval Card in der Liste
2. Swipe rechts → Gruener "Genehmigen" Bereich erscheint
3. Loslassen bei >50% Breite: Genehmigt
4. Haptic Feedback + Success-Toast
5. Card animiert raus (Height-Collapse, `duration-normal`)

---

## 10. Handoff-Punkte

| Von | Zu | Trigger | Daten |
|-----|-----|---------|-------|
| Push Notification | Approval Detail (Bottom Sheet) | Tap auf Push | `approvalId` |
| Copilot Briefing | Approval Queue | Tap "3 Genehmigungen ausstehend" | Filter: `status=pending` |
| Approval Detail | Opportunity Detail (Desktop) | Tap auf Opportunity-Name | `opportunityId` (Deep-Link fuer Desktop) |
| Approval Queue | Cockpit (Mobile) | Bottom Nav "Cockpit" | — |

---

## 11. Stitch/Figma-Referenz

| Element | Referenz |
|---------|----------|
| Approval Card | Kein Stitch-Aequivalent. Neues Mobile-Pattern. |
| Bottom Sheet | Neues Pattern, kein Stitch-Aequivalent. |
| Swipe-Actions | iOS-native Swipe-Actions als Referenz (Apple Mail). |

---

## 12. Akzeptanzkriterien

- [ ] Approval Queue zeigt offene Genehmigungen mit Tab-Filter (Offen/Erledigt/Alle)
- [ ] Approval Card zeigt: Typ, Account, Key-Metriken, Antragsteller, Zeitstempel
- [ ] Tap auf Card oeffnet Expanded Bottom Sheet mit Detail + AI-Einschaetzung
- [ ] "Genehmigen" und "Ablehnen" Buttons im Sticky Footer
- [ ] Ablehnung zeigt Kommentar-Feld (optional)
- [ ] Swipe-right auf Card = Quick Approve mit Haptic Feedback
- [ ] Push Notification oeffnet direkt die betroffene Approval
- [ ] Success/Warning Toast nach Aktion (5s Auto-Dismiss)
- [ ] Empty State bei 0 offenen Approvals: Illustration + "Alles erledigt 🎉"
- [ ] Approval-Aktion in <30s ab Push-Oeffnung moeglich

---

## 13. Offene Fragen

| # | Frage | Status |
|---|-------|--------|
| 1 | Soll Swipe-Genehmigung standardmaessig aktiv oder opt-in sein? | Offen |
| 2 | Braucht es eine Batch-Genehmigung ("Alle genehmigen") fuer Thomas? | Offen — PRD 14.1 nicht spezifiziert |
| 3 | Delegation: Kann Thomas Genehmigungen an Stefan weiterleiten? | Offen |

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Swipe-Genehmigung. Push-Integration. AI-Einschaetzung. |
