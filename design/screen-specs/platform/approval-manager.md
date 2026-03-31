# Approval Manager — Screen Spec

**Screen-ID:** PLT-07
**PRD-Modul:** 12.1 — Workflow Automation
**Journey(s):** J1-S6 (Katrin: Angebots-Freigabe anfordern), J2-S4 (Thomas: Staffing-Freigabe)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Thomas (Managing Partner) — zentrale Genehmigungs-Uebersicht |
| **Sekundaer** | Stefan (Budget-Genehmigungen), Katrin (Status ihrer Anfragen verfolgen) |
| **Frequenz** | Thomas: 3-5x/Tag (morgens, mittags, abends). Kurze Sessions (2-5 Min). |
| **Trigger** | Cockpit Dashboard → "Approvals anzeigen", Sidebar "Genehmigungen", Copilot Briefing → "3 Genehmigungen ausstehend", Notification Center → Approval-Notification, Command Bar → "Zeig offene Approvals". |
| **Herkunft** | Cockpit Dashboard (PLAT-01), Sidebar, Copilot Briefing, Notification Center, Command Bar. |
| **Ziel** | Alle ausstehenden Genehmigungen an einem Ort sehen, priorisieren, bearbeiten. Bulk-Aktionen fuer Effizienz. KI-Priorisierung fuer die wichtigsten/dringendsten zuerst. |
| **Geraete** | Desktop (primaer), Mobile (via Mobile Approval Card, MOB-02). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Thomas | alle offenen Genehmigungen in einer Liste sehen | ich den Ueberblick habe |
| 2 | Thomas | nach Typ filtern (Angebot, Staffing, Vertrag, Budget) | ich mich auf eine Kategorie konzentrieren kann |
| 3 | Thomas | nach Dringlichkeit sortieren | ich das Wichtigste zuerst bearbeite |
| 4 | Thomas | mehrere Approvals gleichzeitig genehmigen (Bulk) | ich bei vielen Anfragen effizienter bin |
| 5 | Thomas | die KI-Priorisierung sehen: was ist am dringendsten/wirkungsvollsten | ich fundiert priorisiere |
| 6 | Thomas | Statistiken sehen: offene Anzahl, Reaktionszeit, Genehmigungsquote | ich meinen Workflow verbessere |
| 7 | Katrin | den Status meiner Freigabe-Anfragen verfolgen | ich weiss ob Thomas schon entschieden hat |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure (2/3 + 1/3 Asymmetrie)**
**Begruendung:** Der Approval Manager ist eine Arbeitsliste mit Detail-Ansicht. Kein Bento Grid — der Workflow ist: Liste scannen → Detail pruefen → Entscheiden. 2/3+1/3 Asymmetrie (DS 1.7) trennt Approval-Liste von Stats und Filtern.

```
+-- Sidebar --+-- Approval Manager (2/3 + 1/3) ----------------------------+
|             |                                                              |
|  Genehm.    |  Breadcrumb: Genehmigungen                                  |
|  > Manager  |                                                              |
|             |  +-- Main Content (2/3) --------+-- Context Rail (1/3) ----+ |
|             |  |                               |                          | |
|             |  |  +-- Filter Bar ------------+ |  +-- Stats ------------+ | |
|             |  |  | [Alle] [Angebot] [Staff-]| |  | Offen: 7            | | |
|             |  |  | [Vertrag] [Budget]       | |  | Ø Reaktionszeit:    | | |
|             |  |  | Sortierung: [KI-Prior. v]| |  |   4.2 Stunden       | | |
|             |  |  +-------------------------+ | |  | Genehmigungsquote:  | | |
|             |  |                               |  |   89%               | | |
|             |  |  [x] 2 ausgewaehlt           |  | Heute erledigt: 3   | | |
|             |  |  [Alle genehmigen]            |  +---------------------+ | |
|             |  |                               |                          | |
|             |  |  +-- Approval Card ----------+|  +-- KI-Priorisierung -+ | |
|             |  |  | [x] Angebots-Freigabe     ||  | "RetailCorp-Angebot | | |
|             |  |  | RetailCorp AG · SAP       ||  |  hat hoechste Prior-| | |
|             |  |  | Wert: 480K EUR · DB1: 28% ||  |  itaet: Deadline in | | |
|             |  |  | Score: 87 · Team: 3       ||  |  2 Tagen."          | | |
|             |  |  | Angefragt: Katrin · 2h    ||  |                     | | |
|             |  |  | [!] Deadline: 02.04       ||  | "Budget-Erhoehung   | | |
|             |  |  | [Ablehnen] [Genehmigen]   ||  |  InnovateTech: kein | | |
|             |  |  +---------------------------+|  |  Zeitdruck, aber    | | |
|             |  |                               |  |  hoher Wert."       | | |
|             |  |  +-- Approval Card ----------+|  +---------------------+ | |
|             |  |  | [ ] Staffing-Freigabe     ||                          | |
|             |  |  | MedTech AG · Phase 2      ||  +-- Schnellfilter ----+ | |
|             |  |  | Team: 2 Berater · Ø 82    ||  | Nur dringende  [ ]  | | |
|             |  |  | DB1: 24% · Budget: 200K   ||  | Nur hoher Wert [ ]  | | |
|             |  |  | Angefragt: Stefan · 5h    ||  | Meine Anfragen [ ]  | | |
|             |  |  | [Ablehnen] [Genehmigen]   ||  |   (Katrin-Ansicht)  | | |
|             |  |  +---------------------------+|  +---------------------+ | |
|             |  |                               |                          | |
|             |  |  +-- Approval Card ----------+|                          | |
|             |  |  | [ ] Budget-Erhoehung      ||                          | |
|             |  |  | InnovateTech · Phase 2    ||                          | |
|             |  |  | 200K → 280K EUR          ||                          | |
|             |  |  | Begruendung: Scope-Erw.   ||                          | |
|             |  |  | Angefragt: Stefan · 1d    ||                          | |
|             |  |  | [Ablehnen] [Genehmigen]   ||                          | |
|             |  |  +---------------------------+|                          | |
|             |  |                               |                          | |
|             |  +-------------------------------+--------------------------+ |
|             |                                                              |
+-------------+--------------------------------------------------------------+
```

**Approval Card Aufbau:**
- Checkbox (fuer Bulk-Selektion)
- Typ-Badge: Angebot / Staffing / Vertrag / Budget (`body-sm`, `neutral-0` text auf Typ-Farbe)
- Titel: Account + Kontext (`heading-md`)
- Key-Metriken: Wert, DB1, Score, Team-Groesse (je nach Typ)
- Antragsteller + Zeitstempel (`body-sm`, `neutral-600`)
- Dringlichkeits-Badge (optional): `semantic-danger` wenn Deadline <48h
- Aktions-Buttons: "Ablehnen" (secondary), "Genehmigen" (primary)

**KI-Priorisierungs-Logik:**
- Sortierung nach kombiniertem Score: Dringlichkeit (Deadline) x Impact (Wert) x Wartezeit
- KI-Kommentar im Context Rail erklaert Priorisierung: "RetailCorp hat hoechste Prioritaet: Deadline in 2 Tagen."
- Approval Cards mit Deadline <48h erhalten `semantic-danger` Border

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | 2/3 + 1/3 Layout. Approval Cards + Context Rail. |
| `breakpoint-lg` | 2/3 + 1/3 Layout, Context Rail schmaler. |
| `breakpoint-md` | Single Column. Context Rail collapsed als Accordion ueber Liste. Stats als kompakter Inline-Banner. |
| `breakpoint-sm` | Handoff an Mobile Approval Card (MOB-02). Link: "Genehmigungen auf Mobile oeffnen." Oder: Vereinfachte Card-Liste ohne Bulk-Selektion. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Approval-Liste | API: `GET /approvals?assignee={userId}&status=pending` | Real-time via WebSocket |
| Approval-Detail (Metriken, Team, etc.) | API: `GET /approvals/{id}` | On-Demand bei Card-Expand |
| KI-Priorisierung | AI Priority Engine | Bei Seitenladen + bei neuer Approval |
| Stats (offen, Reaktionszeit, Quote) | Analytics Service | Bei Seitenladen, Cache 5 Min |
| Approval-Action | API: `POST /approvals/{id}/decide` | Sofort (optimistic UI) |
| Bulk-Action | API: `POST /approvals/bulk-decide` | Sofort |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Intelligent Prioritization** — KI sortiert und erklaert Reihenfolge. |
| **KI-Sortierung** | Default-Sortierung: KI-priorisiert (Dringlichkeit x Impact x Wartezeit). Alternative: chronologisch, nach Typ. |
| **KI-Kommentar** | Context Rail: 2-3 Saetze pro Top-Approval, `ai-surface` bg. Erklaert warum diese Approval zuerst bearbeitet werden sollte. |
| **Genehmigungswahrscheinlichkeit** | Subtiler Hint auf Card: "Aehnliche Anfragen: 92% genehmigt" (nur wenn >80% historisch genehmigt). Kein Button-Pre-Select. |
| **Smart Default (optional)** | Bei wiederkehrenden, identischen Approval-Typen: "Katrin's letzte 5 Staffing-Vorschlaege wurden alle genehmigt." Dezent im Context Rail. |

---

## 7. Preview Panel Integration

- **Approval Card Expand:** Klick auf Approval Card (nicht auf Buttons) expandiert zu Level 2 Detail: vollstaendige Metriken, Team-Aufstellung, AI-Einschaetzung, Dokument-Links.
- **Dokument-Preview:** Approval-relevante Dokumente (Angebot, Vertrag) mit Inline-Thumbnail. Klick oeffnet Preview Panel (DS 6.10).
- **Opportunity-Link:** Klick auf Account-Name in Approval Card oeffnet Opportunity Detail (DEAL-01) in neuem Tab.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Dringlichkeits-Prognose** | "Wenn diese Approval nicht bis morgen bearbeitet wird, verschiebt sich die Angebotsabgabe um 3 Tage." — als `body-xs` auf dringenden Cards. |
| **Reaktionszeit-Optimierung** | "Deine durchschnittliche Reaktionszeit ist 4.2h. Ziel: <4h fuer Angebots-Approvals." — als Hinweis in Stats. |
| **Batch-Empfehlung** | Wenn 3+ Approvals vom gleichen Typ und Antragsteller: "3 Staffing-Anfragen von Katrin — Batch-Genehmigung empfohlen." |
| **Delegations-Vorschlag** | Wenn Thomas >24h nicht reagiert hat: "Delegation an Stefan fuer Budget-Anfragen?" — als Nudge (max 1, DS 6.12). |

---

## 9. Interaktions-Flows

### Flow 1: Morgen-Approvals (Thomas, 3 Min)
```
Cockpit Dashboard → "3 Approvals offen" → Approval Manager oeffnet →
KI-sortiert: RetailCorp-Angebot zuerst (Deadline) →
Thomas liest Card → "Genehmigen" → Success Toast →
Card animiert raus → Naechste Card: MedTech Staffing →
"Genehmigen" → Success Toast →
3. Card: Budget-Erhoehung → Thomas will Detail →
Klick auf Card → Expandiert → Liest AI-Einschaetzung →
"Genehmigen" → "Alle erledigt" Empty State
```

### Flow 2: Bulk-Genehmigung
```
Thomas sieht 5 Staffing-Anfragen von Katrin →
KI-Hinweis: "Batch-Genehmigung empfohlen" →
Thomas klickt Checkbox bei allen 5 →
"Alle genehmigen" Button erscheint →
Klick → Confirmation Dialog: "5 Approvals genehmigen?" →
"Bestaetigen" → Success Toast: "5 Genehmigungen erteilt."
```

### Flow 3: Ablehnung mit Kommentar
```
Thomas liest Budget-Erhoehung → Margin zu niedrig →
"Ablehnen" → Inline-Textfeld: "Grund (optional)" →
Thomas tippt: "Marge unter 20% — bitte nachverhandeln" →
"Ablehnung senden" → Warning Toast → Stefan wird benachrichtigt
```

### Flow 4: Katrin verfolgt Freigabe-Status
```
Katrin → Approval Manager → Filter "Meine Anfragen" →
Sieht: RetailCorp-Angebot [Genehmigt], MedTech [Ausstehend] →
MedTech: "Ausstehend seit 5h" → Katrin entscheidet zu warten
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Cockpit Dashboard | Approval Manager | Klick "Approvals anzeigen" |
| **Von:** Sidebar | Approval Manager | Klick "Genehmigungen" |
| **Von:** Copilot Briefing | Approval Manager | "Genehmigungen oeffnen" Deep-Link |
| **Von:** Notification Center | Approval Manager | Klick auf Approval-Notification |
| **Zu:** Opportunity Detail | `deal/opportunity-detail.md` | Klick auf Account-Name in Approval Card |
| **Zu:** Angebots-Canvas | `ai-experience/angebots-canvas.md` | Klick "Angebot ansehen" in Angebots-Approval |
| **Zu:** Vertrags-Canvas | `ai-experience/vertrags-canvas.md` | Klick "Vertrag ansehen" in Vertrags-Approval |
| **Zu:** Mobile Approval Card | `mobile/mobile-approval-card.md` | Mobile-Zugriff auf gleiche Daten |
| **Zu:** Staffing & Matching | `deal/staffing-matching.md` | Klick "Team ansehen" in Staffing-Approval |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board:** Kein direktes Aequivalent | Approval Manager ist neu. Mobile Approval Card (MOB-02) als Pattern-Basis. |
| **Figma:** Ausstehend | Desktop-Version des Approval Managers muss erstellt werden. |
| **Inspiration:** MOB-02 Mobile Approval Card | Card-Aufbau und AI-Einschaetzung uebernehmen, fuer Desktop adaptieren. |
| **Component:** Approval Card | `composition/approval-card.md` — Status: Ausstehend. Muss parallel erstellt werden. |

---

## 12. Akzeptanzkriterien

- [ ] Approval-Liste mit Approval Cards (Checkbox, Typ-Badge, Key-Metriken, Buttons)
- [ ] Filter nach Typ: Angebot, Staffing, Vertrag, Budget
- [ ] Sortierung: KI-priorisiert (Default), chronologisch, nach Typ
- [ ] Bulk-Genehmigung: Checkboxen + "Alle genehmigen" Button + Confirmation Dialog
- [ ] KI-Priorisierung: Context Rail mit Erklaerung pro Top-Approval (`ai-surface` bg)
- [ ] Stats im Context Rail: Offene Anzahl, Ø Reaktionszeit, Genehmigungsquote
- [ ] Card-Expand zu Level 2 Detail mit AI-Einschaetzung
- [ ] Ablehnung mit optionalem Kommentar-Feld
- [ ] Dringlichkeits-Badge auf Cards mit Deadline <48h
- [ ] Responsive: Mobile-Handoff an MOB-02
- [ ] Real-time Updates via WebSocket (neue Approvals erscheinen live)
- [ ] Empty State bei 0 offenen Approvals: "Alles erledigt" + Illustration
- [ ] Accessibility: `role="list"`, `aria-label` pro Card, Keyboard: Tab + Enter fuer Genehmigen

---

## 13. Offene Fragen

1. **Delegation:** Kann Thomas Approvals an Stefan oder andere Partner delegieren? *Empfehlung: Phase 2. v1: nur direkte Genehmigung/Ablehnung.*
2. **Eskalation:** Was passiert wenn eine Approval >48h unbearbeitet bleibt? *Empfehlung: Reminder-Notification + optionaler Auto-Escalate an zweiten Approver.*
3. **Audit Trail:** Muessen alle Approval-Entscheidungen mit Zeitstempel und Begruendung protokolliert werden? *Empfehlung: Ja — Compliance-Anforderung.*
4. **Approval-Kette:** Braucht es mehrstufige Genehmigungen (z.B. PL + Partner)? *Empfehlung: Phase 2. v1: einstufig.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. KI-Priorisierung. Bulk-Genehmigung. Filter. Stats. |
