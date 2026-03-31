# Financial Dashboard — Screen Spec

**Screen-ID:** DLV-03
**PRD-Modul:** 11.2 — Financial Intelligence
**Journey(s):** J13-S1 (Thomas: Financial Review), Martina (Rechnungs-Vorbereitung)
**Layout-Typ:** Bento Grid
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Thomas (Managing Partner) — Financial Oversight, Forecast |
| **Sekundaer** | Martina (Office Managerin) — Rechnungslaeufe, DB-Reports, Exports |
| **Frequenz** | Thomas: 1x/Woche (30 Min, oft vor Board-Meetings). Martina: 2-3x/Woche (Rechnungsvorbereitung, Reporting). |
| **Trigger** | Sidebar "Finanzen", Cockpit Dashboard → Klick auf Umsatz-KPI, Command Bar → "Zeig Financial Dashboard", Copilot → "Wie liegt der Umsatz im Q2?" |
| **Herkunft** | Sidebar, Cockpit Dashboard (PLAT-01), Command Bar. |
| **Ziel** | Finanzielle Gesundheit der Beratung auf einen Blick: Revenue, Margen, Rechnungen, Forecast. Projekt-Profitabilitaet vergleichen. Reports exportieren. |
| **Geraete** | Desktop (primaer — Martina: 2 Monitore). Thomas: Desktop + Tablet (abends). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Thomas | Revenue MTD/YTD auf einen Blick sehen | ich die Geschaeftsentwicklung sofort einschaetze |
| 2 | Thomas | DB1-Margen pro Projekt vergleichen | ich sehe, welche Projekte profitabel sind |
| 3 | Thomas | Forecast vs. Actual als Trend sehen | ich Abweichungen frueh erkenne |
| 4 | Thomas | offene Rechnungen mit Aging-Analyse sehen | ich Liquiditaetsrisiken einschaetze |
| 5 | Martina | Rechnungslaeufe vorbereiten und exportieren | ich die monatlichen Rechnungen verarbeiten kann |
| 6 | Thomas | den KI-Forecast fuer das naechste Quartal sehen | ich strategische Entscheidungen fundiert treffe |
| 7 | Martina | Financial Reports als PDF/Excel exportieren | ich sie an externe Stakeholder weitergeben kann |

---

## 3. Layout — Desktop

**Layout-Typ: Bento Grid**
**Begruendung:** Das Financial Dashboard zeigt mehrere gleichwertige Finanz-Kennzahlen, Charts und Tabellen. Thomas scannt parallel — Umsatz, Margen, Rechnungen. Kein linearer Workflow. Bento Grid ist ideal (DS 7.1).

```
+-- Sidebar --+-- Financial Dashboard (Bento Grid, 4 cols) ------------------+
|             |                                                               |
|  Finanzen   |  Breadcrumb: Finanzen > Dashboard                            |
|  > Dashboard|                                                               |
|  > Rechng.  |  +-- Zeitraum-Filter: [Monat v] [Q2 2026 v] [Custom] ------+|
|             |  |  [Export PDF]  [Export XLSX]                              ||
|             |  +-----------------------------------------------------------+|
|             |                                                               |
|             |  +------------+-----------+-------------+------------------+  |
|             |  | Revenue MTD| Revenue   | DB1 Marge   | Offene           |  |
|             |  | 420K EUR   | YTD       | Ø 26.3%     | Rechnungen       |  |
|             |  | +12% vs VM | 1.8M EUR  | [score-good]| 145K EUR         |  |
|             |  |            | +8% vs VJ |             | 12 offen         |  |
|             |  +------------+-----------+-------------+------------------+  |
|             |                                                               |
|             |  +-------------------------------+--------------------------+  |
|             |  | Revenue-Trend (Line Chart)     | DB1 pro Projekt         |  |
|             |  |                                | (Bar Chart, horizontal) |  |
|             |  |     /\    /\                   |                         |  |
|             |  |    /  \  /  \  /               | RetailCorp  ||||||  28% |  |
|             |  |   /    \/    \/                | MedTech     ||||||||32% |  |
|             |  |  /                             | InnoTech    |||||   24% |  |
|             |  | --- Actual  ... Forecast       | TechAG      |||    18% |  |
|             |  | [6 Monate]                     | BfS NIS2    |||||||30% |  |
|             |  | span-2                         |                         |  |
|             |  +-------------------------------+--------------------------+  |
|             |                                                               |
|             |  +-------------------------------+--------------------------+  |
|             |  | Projekt-Profitabilitaet        | Rechnungs-Aging         |  |
|             |  | (Ranking-Tabelle)              | (Donut Chart)           |  |
|             |  |                                |                         |  |
|             |  | # Projekt       Rev.   DB1     |    +----+               |  |
|             |  | 1 MedTech       280K   32%    |   /  30d \              |  |
|             |  | 2 BfS NIS2      180K   30%    |  | <30d   |             |  |
|             |  | 3 RetailCorp    345K   28%    |  |  60%   |             |  |
|             |  | 4 InnoTech      250K   24%    |   \ 60d+ /              |  |
|             |  | 5 TechAG        120K   18%    |    +----+               |  |
|             |  | span-2                        |                         |  |
|             |  +-------------------------------+--------------------------+  |
|             |                                                               |
|             |  +-- AI Forecast (ai-surface, span-full) -------------------+|
|             |  | "Umsatz-Forecast: 2.4M EUR Q2 (+8% vs Q1). DB1 stabil   ||
|             |  |  bei 26%. Risiko: TechAG-Projekt unter Ziel-Marge."      ||
|             |  | [Details im Copilot]                                      ||
|             |  +-----------------------------------------------------------+|
|             |                                                               |
+-------------+---------------------------------------------------------------+
```

**Bento Grid Konfiguration:**
- `bento-cols: 4` (Desktop), `2` (Tablet), `1` (Mobile)
- `bento-gap: space-4` (16px)
- KPI-Strip: 4 Metric Cards, je 1 Spalte
- Revenue-Trend (Line Chart): `bento-span-2`
- DB1 pro Projekt (Bar Chart): `bento-span-2`
- Projekt-Profitabilitaet (Tabelle): `bento-span-2`
- Rechnungs-Aging (Donut): `bento-span-2`
- AI Forecast: `bento-span-full`, `ai-surface` bg

**Chart-Details:**
- Revenue-Trend: Solid Line = Actual, Dashed Line = Forecast. `brand-primary` fuer Actual, `neutral-400` fuer Forecast. 6-Monats-Ansicht, klickbar fuer 12M/YTD.
- DB1 Bar Chart: Horizontal Bars, sortiert nach DB1%. Farbcodierung: `score-*` Tokens (>25%: `score-excellent`, 20-25%: `score-good`, <20%: `score-moderate`).
- Rechnungs-Aging Donut: 3 Segmente: <30 Tage (`semantic-success`), 30-60 Tage (`semantic-warning`), 60+ Tage (`semantic-danger`). Center: Gesamtbetrag.

---

## 4. Layout — Responsive

| Breakpoint | Bento Cols | Verhalten |
|-----------|-----------|-----------|
| `breakpoint-xl`+ | 4 | Volle Grid-Ansicht wie oben. |
| `breakpoint-lg` | 3 | KPI-Strip: 4 Cards in 1 Row (scrollbar). Charts: span-full. |
| `breakpoint-md` | 2 | KPI-Strip: 2x2. Charts und Tabellen: span-full. AI Forecast unter Charts. |
| `breakpoint-sm` | 1 | Vertikaler Stack. KPI-Strip: horizontal scrollbar. Charts: vereinfachte Mini-Versionen. Export-Buttons im Overflow-Menue. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Revenue MTD/YTD | Financial Service | Taeglich, bei Seitenladen |
| DB1-Margen pro Projekt | Financial Service | Taeglich |
| Revenue-Trend (6-12 Monate) | Analytics Service | Taeglich |
| Forecast-Daten | AI Forecast Service | Woechentlich (Sonntag Nacht) |
| Offene Rechnungen + Aging | Invoice Service | Real-time |
| Projekt-Profitabilitaet | Financial Service | Taeglich |
| AI Forecast Summary | AI Copilot Service | Bei Seitenladen, Cache 24h |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Predictive Intelligence** — KI-Forecast + Anomalie-Erkennung. |
| **AI Forecast Banner** | `ai-surface` Container am Ende des Dashboards. 2-3 Saetze: Umsatz-Forecast, Margen-Trend, Risiko-Hinweis. Klick → Copilot Sidebar fuer Deep-Dive. |
| **Anomalie-Erkennung** | KPI-Kacheln mit unerwarteten Abweichungen (>10% vs. Plan) erhalten `semantic-warning` Border + Tooltip: "Revenue MTD 12% ueber Plan — getrieben durch RetailCorp Go-Live." |
| **Margen-Warnung** | Projekte mit DB1 < 20% erhalten `semantic-warning` Badge in Bar Chart und Tabelle. KI-Tooltip: "TechAG: Marge unter Ziel. Ursache: 2 zusaetzliche Berater-Tage." |
| **Keine aktive KI-Generierung** | Martina-spezifisch: Keine AI-Prompts, keine Command-Bar-Nutzung. KI-Insights sind passiv (Forecast-Banner, Anomalie-Badges). |

---

## 7. Preview Panel Integration

- **Projekt-Klick (Tabelle):** Klick auf Projektnamen oeffnet Tooltip-Preview: Projekt-Summary, Laufzeit, Team, Budget-Status.
- **Rechnungs-Klick (Aging):** Klick auf Donut-Segment oeffnet gefilterte Rechnungsliste in Slide-Over Panel.
- **Export-Preview:** Vor Export: Vorschau des generierten Reports (PDF: erste Seite, XLSX: Daten-Summary).

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Quartals-Forecast** | "Umsatz-Forecast: 2.4M EUR Q2 (+8% vs Q1)" — berechnet aus Pipeline-Werten, historischen Conversion-Rates und aktuellem Revenue-Trend. |
| **Margen-Prognose** | "DB1 stabil bei 26% — kein Erosions-Trend erkennbar." — oder: "DB1-Trend: -2% ueber 3 Monate. Ursache: steigende Subcontractor-Kosten." |
| **Cash-Flow-Warnung** | "3 Rechnungen >60 Tage ueberfaellig (45K EUR). Liquiditaetsrisiko: niedrig." — als subtiler Hinweis unter Donut Chart. |
| **Projekt-Vergleich** | "RetailCorp performt 15% ueber dem Durchschnitt vergleichbarer SAP-Projekte." — Kontext fuer Profitabilitaets-Ranking. |

---

## 9. Interaktions-Flows

### Flow 1: Thomas' woechentlicher Financial Check (15 Min)
```
Sidebar "Finanzen" → Financial Dashboard laedt →
KPI-Strip scannen: Revenue +12%, DB1 26%, 12 offene Rechnungen →
Revenue-Trend: Actual vs. Forecast vergleichen →
DB1 Bar Chart: TechAG auffaellig niedrig (18%) → Hover: KI-Erklaerung →
AI Forecast lesen: "2.4M Q2, Risiko TechAG" →
"Details im Copilot" → Copilot oeffnet mit Financial-Kontext
```

### Flow 2: Martina bereitet Rechnungslauf vor
```
Sidebar "Finanzen" → Financial Dashboard →
Rechnungs-Aging Donut: 3 Rechnungen >60d → Klick →
Slide-Over: Gefilterte Rechnungsliste →
Martina prueft: 2 mit Zahlungsziel, 1 mahnen →
Zurueck → [Export XLSX] → Filter "Q1 2026" →
Report-Vorschau → Download
```

### Flow 3: Thomas vor Board-Meeting (Tablet, abends)
```
Thomas oeffnet Financial Dashboard auf Tablet →
KPI-Strip: Revenue YTD 1.8M (+8%) →
AI Forecast: "2.4M Q2 Prognose" →
[Export PDF] → Quartalsbericht generieren →
Download → Per E-Mail an Board senden
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Cockpit Dashboard | Financial Dashboard | Klick auf Umsatz-KPI |
| **Von:** Sidebar | Financial Dashboard | Klick "Finanzen" |
| **Von:** Project Dashboard | Financial Dashboard | Klick auf Budget-KPI |
| **Zu:** Project Dashboard | `delivery/project-dashboard.md` | Klick auf Projekt in Profitabilitaets-Tabelle |
| **Zu:** Copilot Sidebar | `ai-experience/copilot-sidebar.md` | Klick "Details im Copilot" im AI Forecast |
| **Zu:** Rechnungs-Detail (Slide-Over) | Inline Slide-Over | Klick auf Rechnung in Aging-Liste |
| **Zu:** Admin Panel (Exports) | `platform/admin-panel.md` | Klick auf erweiterte Export-Optionen |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board Item #14:** Pipeline-Uebersicht | Chart-Patterns (Line + Bar) als Inspiration. |
| **Stitch Board:** Kein Financial-Aequivalent | Financial Dashboard ist neu — kein Stitch-Import. |
| **Figma:** Ausstehend | Muss erstellt werden. Chart-Komponenten aus Cockpit Dashboard (PLAT-01) wiederverwendbar. |
| **Inspiration:** PLAT-01 Cockpit Dashboard | KPI-Strip + Bento Grid Konfiguration uebernehmen. |

---

## 12. Akzeptanzkriterien

- [ ] 4 KPI-Kacheln: Revenue MTD, Revenue YTD, DB1 Marge, Offene Rechnungen
- [ ] KPI-Kacheln mit Trend-Vergleich (vs. Vormonat / Vorjahr)
- [ ] Revenue-Trend Line Chart: Actual + Forecast, 6-Monats-Ansicht
- [ ] DB1 Bar Chart: horizontal, sortiert, Farbcodierung via `score-*` Tokens
- [ ] Projekt-Profitabilitaets-Tabelle: Ranking nach DB1
- [ ] Rechnungs-Aging Donut: 3 Segmente, Klick filtert Rechnungsliste
- [ ] AI Forecast Banner: `ai-surface` bg, 2-3 Saetze Forecast + Risiko
- [ ] Export: PDF + XLSX mit Zeitraum-Filter
- [ ] Anomalie-Highlighting auf KPI-Kacheln (>10% Abweichung)
- [ ] Bento Grid Layout: 4 Spalten Desktop, 2 Tablet, 1 Mobile
- [ ] Zeitraum-Filter: Monat, Quartal, Custom
- [ ] Accessibility: Chart-Daten als `aria-label`, Tabelle mit `role="table"`, Keyboard-navigierbar

---

## 13. Offene Fragen

1. **Datenquelle:** Werden Finanzdaten aus DATEV/SAP importiert oder manuell erfasst? *Empfehlung: Integration in Phase 2. Phase 1: manueller Import via CSV.*
2. **Waehrung:** Nur EUR oder auch CHF (Schweizer Kunden)? *Empfehlung: Multi-Currency in v2. v1: EUR only.*
3. **DB1 vs. DB2:** Soll neben DB1 (vor Overhead) auch DB2 (nach Overhead) angezeigt werden? *Empfehlung: DB1 als Standard, DB2 als optionaler Toggle.*
4. **Rechnungs-Mahnung:** Soll direkt aus dem Dashboard gemahnt werden koennen? *Empfehlung: Phase 2. v1: Export und manueller Prozess.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. Bento Grid. AI Forecast. Revenue + DB1 Charts. |
