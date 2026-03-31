# Project Dashboard — Screen Spec

**Screen-ID:** DLV-01
**PRD-Modul:** 11.1 — Project Intelligence
**Journey(s):** J3-S1 (Stefan managt aktive Projekte)
**Layout-Typ:** Bento Grid
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Stefan (Senior Consultant / Projektleiter) — Projekt-Steuerung |
| **Sekundaer** | Thomas (Portfolio-Ueberblick), Katrin (Delivery-Kontext fuer Opportunities) |
| **Frequenz** | Stefan: 1-2x/Tag (morgens 08:00 + abends 17:00, je 10-15 Min). Thomas: 1x/Woche. |
| **Trigger** | Sidebar "Projekte" → Projekt waehlen, Copilot Briefing → "Projekt oeffnen", Command Bar → "Geh zu MedTech-Projekt", Push Notification → Projekt-Alert. |
| **Herkunft** | Sidebar, Copilot Briefing, Command Bar, Notification Center. |
| **Ziel** | Projekt-Health auf einen Blick: Budget, Timeline, Kundenzufriedenheit, Risiken pruefen. Milestones tracken. Team-Auslastung ueberwachen. Proaktiv auf Risiken reagieren. |
| **Geraete** | Desktop (primaer), Tablet, Mobile (eingeschraenkt — KPI-Strip + Risiken). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Stefan | auf einen Blick sehen ob mein Projekt im Plan liegt | ich morgens in 30 Sekunden den Status erfasse |
| 2 | Stefan | die Milestone-Timeline mit Ist/Soll-Vergleich sehen | ich Verzoegerungen frueh erkenne |
| 3 | Stefan | die Team-Auslastung pro Berater sehen | ich Ueber-/Unterlast erkenne und gegensteuern kann |
| 4 | Stefan | Risiko-Indikatoren mit KI-Bewertung sehen | ich proaktiv eskalieren kann bevor Probleme entstehen |
| 5 | Stefan | offene Action Items mit Faelligkeit sehen | ich nichts vergesse und delegieren kann |
| 6 | Thomas | ein Portfolio-Dashboard mit allen Projekten sehen | ich den Gesamtueberblick habe |
| 7 | Stefan | die letzte Kundenzufriedenheit (Pulse-Check) sehen | ich weiss wie der Kunde das Projekt wahrnimmt |

---

## 3. Layout — Desktop

**Layout-Typ: Bento Grid**
**Begruendung:** Das Project Dashboard zeigt mehrere gleichwertige Informationsbloecke — KPIs, Timeline, Team, Risiken, Actions. Es gibt keine lineare Workflow-Hierarchie; Stefan scannt und entscheidet, welche Kachel Aufmerksamkeit verdient. Bento Grid ist ideal (DS 7.1).

```
+-- Sidebar --+-- Project Dashboard (Bento Grid, 4 cols) --------------------+
|             |                                                               |
|  Projekte   |  Breadcrumb: Projekte > RetailCorp AG > SAP Migration        |
|  > Retail   |                                                               |
|  > MedTech  |  +------------+-----------+-------------+------------------+  |
|             |  | Budget      | Timeline  | Kunden-     | Risiken          |  |
|  Delivery   |  | 72% verb.   | 65% done  | zufrieden-  | 2 offen          |  |
|  > ...      |  | 345K / 480K | M3 aktiv  | heit: 4.2   | 1 hoch           |  |
|             |  | [score-good]| [score-   | /5.0        | [semantic-danger] |  |
|             |  |             | excellent] | [score-good]|                  |  |
|             |  +------------+-----------+-------------+------------------+  |
|             |                                                               |
|             |  +-------------------------------+--------------------------+  |
|             |  | Milestone-Timeline             | Team-Auslastung         |  |
|             |  | ====[M1]====[M2]====[M3]===>  | Stefan K.  ||||||||  85%|  |
|             |  | M1: Analyse      [done]       | Markus S.  ||||||    72%|  |
|             |  | M2: Entwicklung  [done]       | Lisa T.    |||||||||  92%|  |
|             |  | M3: Datenmigr.   [aktiv]      | Tim K.     ||||||    68%|  |
|             |  | M4: Go-Live Prep [geplant]    |                         |  |
|             |  | M5: Go-Live      [geplant]    | Ø Team: 79%            |  |
|             |  | span-2                        |                         |  |
|             |  +-------------------------------+--------------------------+  |
|             |                                                               |
|             |  +-------------------------------+--------------------------+  |
|             |  | Risiko-Indikatoren             | Action Items            |  |
|             |  | [!] Scope Creep    [hoch]     | [ ] Testdaten-Freigabe  |  |
|             |  |     "3 Change Requests in      |     Faellig: 06.04      |  |
|             |  |      2 Wochen — KI sieht       |     Verantw.: Dr.Mueller|  |
|             |  |      Budget-Risiko"            | [ ] Cutover-Plan Review |  |
|             |  | [!] Timeline-Drift  [mittel]  |     Faellig: 10.04      |  |
|             |  |     "M4 koennte sich um        |     Verantw.: Stefan    |  |
|             |  |      1 Woche verschieben"      | [ ] Team-Feedback Q1    |  |
|             |  | span-2                        |     Faellig: 15.04      |  |
|             |  +-------------------------------+--------------------------+  |
|             |                                                               |
+-------------+---------------------------------------------------------------+
```

**Bento Grid Konfiguration:**
- `bento-cols: 4` (Desktop), `2` (Tablet), `1` (Mobile)
- `bento-gap: space-4` (16px)
- KPI-Strip: 4 Metric Cards, je 1 Spalte
- Milestone-Timeline: `bento-span-2` (doppelt breit)
- Team-Auslastung: `bento-span-2`
- Risiko-Indikatoren: `bento-span-2`, `ai-surface` bg fuer KI-Kommentare
- Action Items: `bento-span-2`

**KPI-Strip Details:**
- Budget %: `ktype-score-counter` Animation, Farbcodierung via `score-*` Tokens
- Timeline %: Fortschrittsbalken, `score-*` Tokens nach Ist/Soll-Verhaeltnis
- Kundenzufriedenheit: Zahl + Sterne-Visualisierung, letzter Pulse-Check-Wert
- Risiken: Anzahl + hoechste Severity als Badge (`semantic-danger` / `semantic-warning`)

---

## 4. Layout — Responsive

| Breakpoint | Bento Cols | Verhalten |
|-----------|-----------|-----------|
| `breakpoint-xl`+ | 4 | Volle Grid-Ansicht wie oben. |
| `breakpoint-lg` | 3 | KPI-Strip: 4 Cards in 1 Row (scrollbar). Timeline + Team: je span-full. |
| `breakpoint-md` | 2 | KPI-Strip: 2x2 Grid. Alle Kacheln: span-full. |
| `breakpoint-sm` | 1 | Vertikaler Stack. KPI-Strip: horizontal scrollbar (4 Cards). Bottom Navigation Bar. Risiken und Actions als Accordion. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Projekt-Metadaten (Titel, Laufzeit, Budget) | Project Service | Bei Seitenladen |
| Budget-Verbrauch (Ist vs. Plan) | Financial Service | Taeglich |
| Milestone-Status + Ist/Soll-Termine | Project Service | Real-time |
| Team-Zuordnung + Auslastung | Workforce Service | Real-time |
| Kundenzufriedenheit (Pulse-Check) | Feedback Service | Bei neuem Pulse-Check |
| Risiko-Indikatoren | AI Risk Engine | Real-time, KI-Berechnung bei Datenaenderung |
| Action Items | Task Service | Real-time via WebSocket |
| KI-Risikoanalyse | AI Copilot Service | Bei Seitenladen + bei Datenaenderung |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Early Warning System** — proaktive Risiko-Erkennung + Copilot fuer Kontext. |
| **Risiko-Erkennung** | KI analysiert kontinuierlich: Budget-Burn-Rate, Milestone-Verzoegerungen, Team-Ueberlast, Scope-Creep (Anzahl Change Requests), Pulse-Check-Trend. Ergebnis als Risiko-Card mit `ai-surface` bg. |
| **KI-Kommentare** | Jeder Risiko-Indikator hat einen KI-generierten Erklaerungstext (1-2 Saetze, `body-sm`). Quellen-Attribution: "Basierend auf 3 Change Requests seit 18.03." |
| **Copilot-Integration** | Klick auf Copilot-Icon (Kachel-Header) oeffnet Copilot Sidebar mit Projekt-Kontext: "Was sind die Top-3-Risiken fuer RetailCorp?" |
| **Anomalie-Highlighting** | KPI-Kacheln mit unerwarteten Aenderungen erhalten `semantic-warning` oder `semantic-danger` Border + KI-Tooltip: "Budget-Verbrauch +15% ueber Plan." |

---

## 7. Preview Panel Integration

- **Milestone-Klick:** Klick auf einen Milestone oeffnet Slide-Over Panel (DS 5.11) mit Milestone-Details: Beschreibung, Deliverables, verantwortliche Personen, Abhaengigkeiten.
- **Team-Member-Klick:** Klick auf einen Berater zeigt Tooltip-Preview: Name, Rolle, aktuelle Auslastung, naechste Verfuegbarkeit, Skills.
- **Risiko-Klick:** Klick auf Risiko-Indikator oeffnet Detail-Card mit vollstaendiger KI-Analyse, Handlungsempfehlungen und Quellen.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Budget-Forecast** | "Bei aktuellem Burn-Rate: Budget reicht bis KW 24 (2 Wochen vor Go-Live)." — als `body-xs` unter Budget-KPI. |
| **Timeline-Prognose** | "Basierend auf bisherigem Tempo: Go-Live verschiebt sich voraussichtlich auf KW 27 (+1 Woche)." — als Warning-Badge auf Milestone-Timeline. |
| **Team-Ueberlast-Warnung** | "Lisa T. ist zu 92% ausgelastet — Risiko fuer Qualitaetseinbussen. Empfehlung: Aufgaben an Tim K. delegieren." |
| **Churn-Risiko-Fruehwarnung** | Wenn Pulse-Check-Score 2 aufeinanderfolgende Male sinkt: "Kundenzufriedenheit faellt — proaktives Gespraech empfohlen." |
| **Smart Action Items** | KI schlaegt automatisch Action Items vor basierend auf Risiken: "Scope-Creep → Budget-Review ansetzen." |

---

## 9. Interaktions-Flows

### Flow 1: Morgen-Check (Stefan, 5 Min)
```
Login → Sidebar "Projekte" → RetailCorp waehlen →
Project Dashboard laedt → KPI-Strip scannen (10 Sek) →
Risiko-Kachel: "Scope Creep [hoch]" → Klick → Detail lesen →
Action Item erstellen: "Budget-Review mit Thomas" →
Milestone-Timeline pruefen → Zurueck zur Projektliste
```

### Flow 2: Risiko-Eskalation
```
Stefan sieht Risiko "Budget-Risiko [hoch]" →
Klick → Detail: "Burn-Rate 15% ueber Plan" →
"Eskalieren" → Notification an Thomas →
Thomas oeffnet Project Dashboard → Sieht selben Risiko →
Copilot: "Was empfiehlst du?" → KI schlaegt Budget-Review vor
```

### Flow 3: Portfolio-Ueberblick (Thomas)
```
Thomas → Sidebar "Projekte" → Portfolio-Ansicht (Liste aller Projekte) →
Tabelle: Projektname, Status-Ampel, Budget %, Timeline %, Risiken →
Klick auf RetailCorp → Project Dashboard (DLV-01) oeffnet
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Sidebar / Projektliste | Project Dashboard | Klick auf Projekt |
| **Von:** Copilot Briefing | Project Dashboard | "Projekt oeffnen" Deep-Link |
| **Von:** Notification Center | Project Dashboard | Klick auf Projekt-Alert |
| **Zu:** Projekt-Abschluss | `delivery/projekt-abschluss.md` | Button "Projekt abschliessen" (bei letztem Milestone done) |
| **Zu:** Financial Dashboard | `delivery/financial-dashboard.md` | Klick auf Budget-KPI |
| **Zu:** Consultant Profile | `foundation/consultant-profile-view.md` | Klick auf Team-Member |
| **Zu:** Client Portal Dashboard | `platform/client-portal-dashboard.md` | Link "Kunden-Portal" (Admin-Ansicht) |
| **Zu:** Copilot Sidebar | `ai-experience/copilot-sidebar.md` | Klick auf Copilot-Icon |
| **Zu:** Client Portal Pulse-Check | `platform/client-portal-pulse-check.md` | Klick auf Kundenzufriedenheits-KPI |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board:** Kein direktes Aequivalent | Neuer Screen — kein Stitch-Import. |
| **Figma:** Ausstehend | Project Dashboard muss in Figma erstellt werden. Bento Grid Template aus Cockpit Dashboard (PLAT-01) als Basis. |
| **Inspiration:** PLAT-01 Cockpit Dashboard | KPI-Strip-Pattern und Bento Grid Konfiguration uebernehmen. |

---

## 12. Akzeptanzkriterien

- [ ] 4 KPI-Kacheln: Budget %, Timeline %, Kundenzufriedenheit, Risiken
- [ ] KPI-Kacheln mit Farbcodierung via `score-*` Tokens
- [ ] Bento Grid Layout: 4 Spalten Desktop, 2 Tablet, 1 Mobile
- [ ] Milestone-Timeline mit Ist/Soll-Vergleich und Status-Icons
- [ ] Team-Auslastung als horizontale Balken pro Berater
- [ ] Risiko-Indikatoren mit KI-generierten Erklaerungen (`ai-surface` bg)
- [ ] Action Items mit Faelligkeit und Verantwortlichem
- [ ] KI-Early-Warning: Anomalie-Highlighting auf KPI-Kacheln
- [ ] Budget-Forecast und Timeline-Prognose als Predictive Intelligence
- [ ] Klick-Through zu Detail-Views (Milestone, Berater, Risiko)
- [ ] Responsive: Stack auf Mobile, Bottom Nav sichtbar
- [ ] Accessibility: `role="main"`, `aria-label` pro Kachel, Keyboard-navigierbar

---

## 13. Offene Fragen

1. **Portfolio-Ansicht:** Soll die Projektliste ein separater Screen sein oder ein Tab im Dashboard? *Empfehlung: Separater Screen mit Tabellen-Ansicht, Project Dashboard ist immer projekt-spezifisch.*
2. **Pulse-Check-Integration:** Wie wird der Kundenzufriedenheits-Wert berechnet, wenn mehrere Pulse-Checks vorliegen? *Empfehlung: Durchschnitt der letzten 3 Pulse-Checks.*
3. **Budget-Granularitaet:** Soll Budget nach Rollen (SC/C/JC) aufgeschluesselt werden? *Empfehlung: In KPI nur Gesamt, Drill-Down in Financial Dashboard.*
4. **Risiko-Schwellenwerte:** Ab welchen Werten wird ein Risiko als hoch/mittel/niedrig eingestuft? *Empfehlung: KI-definiert, konfigurierbar pro Beratung.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. Bento Grid. KI-Early-Warning. KPI-Strip. |
