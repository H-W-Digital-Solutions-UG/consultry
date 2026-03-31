# Cockpit Dashboard — Screen Spec

**Screen-ID:** PLT-01
**PRD-Modul:** 13.5 — Cockpit / Managing Partner View
**Journey(s):** J12-S1 (Thomas' Morgen-Ritual)
**Layout-Typ:** Bento Grid
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Thomas (Managing Partner) — Scan-and-Decide, 1-2h/Tag |
| **Sekundaer** | Katrin (BD-Cockpit-Variante), Stefan (Practice-Lead-Variante) |
| **Frequenz** | Thomas: 3-5x/Tag, Start-Screen nach Login. |
| **Trigger** | Login (Auto-Redirect), Sidebar "Cockpit", Bottom Nav "Cockpit" (Mobile). |
| **Herkunft** | Login-Screen, jeder Screen via Sidebar. |
| **Ziel** | Tages-Ueberblick: KPIs pruefen, Approvals erledigen, Copilot-Briefing lesen, in Detail-Screens navigieren. |
| **Geraete** | Desktop (primaer), Tablet, Mobile (eingeschraenkt). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Thomas | auf einen Blick die wichtigsten KPIs sehen | ich den Geschaeftszustand in 5 Sekunden erfasse |
| 2 | Thomas | offene Approvals direkt vom Dashboard freigeben | ich das Team nicht blockiere |
| 3 | Thomas | den Copilot-Briefing-Bereich sehen | ich weiss, was die KI heute empfiehlt |
| 4 | Thomas | Pipeline-Entwicklung als Chart sehen | ich Trends erkenne |
| 5 | Thomas | die wichtigsten Widgets je nach Nutzung priorisiert sehen | ich nicht nach den relevanten Informationen suchen muss |
| 6 | Katrin | ein BD-fokussiertes Cockpit mit Signal- und Pipeline-Schwerpunkt | ich meine BD-Aktivitaeten steuern kann |

---

## 3. Layout — Desktop

**Layout-Typ: Bento Grid**
**Begruendung:** Das Cockpit zeigt mehrere gleichwertige KPI-Bloecke, Charts und Aktivitaets-Feeds. Es gibt keine lineare Workflow-Hierarchie — der Nutzer scannt und entscheidet, welche Kachel Aufmerksamkeit verdient. Bento Grid ist ideal (DS 7.1).

```
┌─ Sidebar ─┬─ Cockpit Dashboard (Bento Grid, 4 cols) ────────────────────┐
│            │                                                              │
│  Cockpit   │  ┌─────────────┬─────────────┬─────────────┬──────────────┐ │
│  > ...     │  │ Umsatz MTD  │ Auslastung  │ Pipeline    │ Offene       │ │
│            │  │ 1,2M EUR    │ 78%         │ 3,4M EUR    │ Approvals: 3 │ │
│            │  │ 📈 +12%     │ 📉 -3%      │ 📈 +8%      │ [Anzeigen]   │ │
│            │  └─────────────┴─────────────┴─────────────┴──────────────┘ │
│            │                                                              │
│            │  ┌─────────────────────────────┬──────────────────────────┐ │
│            │  │ Pipeline-Entwicklung (Chart) │ Copilot Briefing        │ │
│            │  │ [Linien-Chart: 6 Monate]    │ ✨ Guten Morgen, Thomas  │ │
│            │  │ [Bar-Chart: nach Phase]      │ 3 Approvals warten...   │ │
│            │  │ span-2                       │ [Approvals] [Pipeline]  │ │
│            │  └─────────────────────────────┴──────────────────────────┘ │
│            │                                                              │
│            │  ┌─────────────────────────────┬──────────────────────────┐ │
│            │  │ Top Opportunities            │ Aktivitaets-Feed        │ │
│            │  │ RetailCorp SAP  340K  [87]   │ Katrin: Brief gen. 2h   │ │
│            │  │ BfS NIS2        180K  [72]   │ Stefan: Matching  3h    │ │
│            │  │ TechAG Cloud    250K  [65]   │ Lisa: Profil upd. 5h    │ │
│            │  │ span-2                       │                         │ │
│            │  └─────────────────────────────┴──────────────────────────┘ │
│            │                                                              │
└────────────┴──────────────────────────────────────────────────────────────┘
```

**Bento Grid Konfiguration:**
- `bento-cols: 4` (Desktop), `2` (Tablet), `1` (Mobile)
- `bento-gap: space-4` (16px)
- KPI-Strip: 4 Metric Cards, je 1 Spalte
- Pipeline-Chart: `bento-span-2` (doppelt breit)
- Top Opportunities: `bento-span-2`
- Copilot Briefing: 1 Spalte, `ai-surface` bg
- Aktivitaets-Feed: 1 Spalte

**Persona-adaptive Kachel-Reihenfolge (DS 6.11):**

| Persona | Row 1 | Row 2 Left | Row 2 Right | Row 3 |
|---------|-------|-----------|------------|-------|
| Thomas (Default) | KPI-Strip | Pipeline-Chart | Copilot Briefing | Top Opps + Feed |
| Katrin (BD) | KPI-Strip | Signal-Summary | Pipeline-Chart | Top Opps + Outreach |
| Stefan (Practice) | KPI-Strip | Team-Auslastung | Projekt-Status | Wissens-Feed |

---

## 4. Layout — Responsive

| Breakpoint | Bento Cols | Verhalten |
|-----------|-----------|-----------|
| `breakpoint-xl`+ | 4 | Volle Grid-Ansicht wie oben. |
| `breakpoint-lg` | 3 | KPI-Strip: 4 Cards in 1 Row (scrollbar). Charts: span-2. |
| `breakpoint-md` | 2 | KPI-Strip: 2x2 Grid. Charts und Listen: span-full. |
| `breakpoint-sm` | 1 | Vertikaler Stack. KPI-Strip: horizontal scrollbar (4 Cards). Bottom Navigation Bar. Copilot als separater Nav-Punkt, nicht eingebettet. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| KPI: Umsatz MTD | Financial Service | Taeglich, bei Seitenladen |
| KPI: Auslastung | Workforce Service | Real-time |
| KPI: Pipeline-Wert | Pipeline Service | Real-time |
| KPI: Offene Approvals | Approval Service | Real-time via WebSocket |
| Pipeline-Chart (6 Monate) | Analytics Service | Taeglich |
| Top Opportunities (Score, Wert) | Pipeline Service | Real-time |
| Aktivitaets-Feed | Activity Log Service | Real-time via WebSocket |
| Copilot Briefing | AI Copilot Service | Bei Seitenladen, Cache 1h |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Copilot** — eingebettetes Briefing-Widget + Sidebar-Zugang. |
| **Embedded Briefing** | Copilot-Kachel im Bento Grid zeigt komprimiertes Morgen-Briefing. Klick oeffnet volle Copilot Sidebar. |
| **KPI-Anomalie-Erkennung** | KI markiert KPI-Kacheln mit unerwarteten Aenderungen: "Auslastung -3% — KI sieht 2 Berater mit offenen KW". Tooltip mit Erklaerung. |
| **Opportunity-Ranking** | Top Opportunities sind KI-sortiert nach kombiniertem Score (Match + Probability + Wert). |

---

## 7. Preview Panel Integration

- **Opportunity-Hover:** Hover auf einer Top Opportunity zeigt Tooltip-Preview (DS 6.10): Kunde, Wert, Phase, naechster Schritt, zugewiesene Berater.
- **Kein Dokument-Preview** auf dem Dashboard — Dokumente werden erst auf Detail-Screens angezeigt.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **KPI-Trend-Prognose** | "Basierend auf aktuellem Trend: Pipeline-Wert erreicht 4,1M bis Quartalsende" — als `body-xs` Hinweis unter dem KPI-Chart. |
| **Approval-Urgency** | Copilot-Briefing hebt zeitkritische Approvals hervor: "RetailCorp-Angebot laeuft in 2 Tagen ab." |
| **Widget-Reihenfolge** | Nach 14 Tagen Nutzung: Kacheln sortiert nach Interaktionshaeufigkeit (DS 6.11). |
| **Smart Notifications** | Proaktiver Nudge: "Du hast heute noch keine Approvals bearbeitet. 3 warten." (DS 6.12, max 1 Nudge). |

---

## 9. Interaktions-Flows

### Flow 1: Morgen-Scan (Thomas, 2 Min)
```
Login → Cockpit laedt → KPI-Strip scannen (5 Sek) →
Copilot-Briefing lesen → "3 Approvals" → Klick →
Approval Manager oeffnet → Freigeben → Zurueck zum Cockpit
```

### Flow 2: Pipeline-Deep-Dive
```
Thomas sieht Pipeline KPI: +8% → Klickt auf Pipeline-Chart →
Chart expandiert (L1→L2): Phase-Breakdown sichtbar →
Klickt auf Phase "Proposal" → Signal Feed oeffnet mit Filter "Proposal"
```

### Flow 3: Opportunity-Priorisierung
```
Thomas scannt Top Opportunities → Hover auf RetailCorp [87] →
Tooltip: "340K, Proposal-Phase, 3 Berater zugewiesen" →
Klick → Opportunity Detail oeffnet
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Login | Cockpit Dashboard | Auto-Redirect nach Login |
| **Von:** Sidebar | Cockpit Dashboard | Klick "Cockpit" |
| **Zu:** Approval Manager | `platform/approval-manager.md` | Klick "Approvals anzeigen" |
| **Zu:** Copilot Sidebar | `ai-experience/copilot-sidebar.md` | Klick auf Copilot-Kachel |
| **Zu:** Opportunity Detail | `deal/opportunity-detail.md` | Klick auf Top Opportunity |
| **Zu:** Signal Feed | `growth/signal-feed.md` | Klick auf Pipeline-Chart Phase |
| **Zu:** Financial Dashboard | `delivery/financial-dashboard.md` | Klick auf Umsatz-KPI |
| **Zu:** Team Availability | `foundation/team-availability-dashboard.md` | Klick auf Auslastungs-KPI |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board Item #13:** Cockpit / Morgen-Briefing | Thomas' Dashboard-Ansicht. Dark Theme (veraltet — DS v1.3 Light ist kanonisch). |
| **Stitch Board Item #14:** Pipeline-Uebersicht | Pipeline-Chart und Phase-Breakdown. |
| **Figma:** Frames vorhanden (Stitch-Import) | Cockpit + Pipeline importiert. Keine Component Library. |

---

## 12. Akzeptanzkriterien

- [ ] 4 KPI-Kacheln: Umsatz MTD, Auslastung, Pipeline-Wert, Offene Approvals
- [ ] Bento Grid Layout: 4 Spalten Desktop, 2 Tablet, 1 Mobile
- [ ] Pipeline-Chart: 6-Monats-Trend + Phase-Breakdown
- [ ] Top Opportunities: KI-sortiert, mit Score Badge und Wert
- [ ] Copilot Briefing: Eingebettete Kachel mit komprimiertem Morgen-Briefing
- [ ] Aktivitaets-Feed: Letzte Aktionen des Teams, Real-time
- [ ] Persona-adaptive Widget-Reihenfolge (Thomas vs. Katrin vs. Stefan)
- [ ] Hover-Tooltips auf Opportunities
- [ ] KPI-Anomalie-Hinweise (KI-markiert)
- [ ] Responsive: Stack auf Mobile, Bottom Nav sichtbar
- [ ] Accessibility: role="main", aria-label pro Kachel, Keyboard-navigierbar

---

## 13. Offene Fragen

1. **Kachel-Konfigurierbarkeit:** Koennen Nutzer Kacheln ein-/ausblenden? *Empfehlung: Ja, in v2. v1: fest, aber KI-sortiert.*
2. **Refresh-Rate:** Wie oft werden KPIs aktualisiert? *Empfehlung: Real-time fuer Approvals, alle 5 Min fuer Umsatz/Pipeline.*
3. **Lesezeichen/Favoriten:** Kann Thomas Opportunities pinnen? *Empfehlung: Phase 2.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
