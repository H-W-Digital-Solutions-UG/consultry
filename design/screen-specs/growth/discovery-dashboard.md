# Discovery Dashboard — Screen Spec

**Screen-ID:** GRW-02
**PRD-Modul:** 9.1 — Signal Engine
**Journey(s):** J1-S1 (Katrin entdeckt Markt-Signale), J12-S1 (Thomas' Morgen-Ritual)
**Layout-Typ:** Bento Grid
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Katrin (BD-Leiterin) — strategischer Markt-Ueberblick, Signal-Priorisierung |
| **Sekundaer** | Thomas (Pipeline-Review, strategische Entscheidungen) |
| **Frequenz** | Katrin: 3-5x/Tag (Morgen-Check, vor Meetings). Thomas: 1-2x/Tag. |
| **Trigger** | Sidebar "Growth → Discovery", Cockpit-KPI "Neue Signale" Klick, Command Bar "Discovery oeffnen", Copilot-Link "Markt-Ueberblick". |
| **Herkunft** | Cockpit Dashboard, Sidebar, Command Bar, Notification Center. |
| **Ziel** | Markt-Signale aggregiert verstehen (L0), Branchen-Trends identifizieren (L1), in gefilterten Signal Feed eintauchen (L2). |
| **Geraete** | Desktop (primaer), Tablet (eingeschraenkt). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Katrin | auf einen Blick sehen, wie viele neue Signale es gibt und wie die Pipeline steht | ich den Tag priorisiere |
| 2 | Katrin | eine Heatmap nach Branchen und Signal-Typen sehen | ich erkenne, wo sich der Markt bewegt |
| 3 | Thomas | die Top-Accounts mit den meisten Signalen sehen | ich strategische Gespräche vorbereite |
| 4 | Katrin | KI-generierte Markt-Insights lesen | ich Trends fruehzeitig erkenne |
| 5 | Katrin | per Klick auf eine Heatmap-Zelle den Signal Feed gefiltert oeffnen | ich nahtlos in Details eintauchen kann |
| 6 | Thomas | Trending Industries mit Wachstumsindikatoren sehen | ich Investitionsentscheidungen treffe |

---

## 3. Layout — Desktop

**Layout-Typ: Bento Grid (3-col)**
**Begruendung:** Discovery Dashboard zeigt mehrere gleichwertige Analyse-Bloecke — KPIs, Heatmap, Top Accounts, Trends. Es gibt keine lineare Workflow-Hierarchie; der Nutzer scannt und entscheidet, welche Kachel Aufmerksamkeit verdient. Bento Grid (DS 7.1, 3-col Variante) ist ideal.

```
┌─ Sidebar ─┬─ Discovery Dashboard (Bento Grid, 3 cols) ──────────────────┐
│            │                                                              │
│  Growth    │  Discovery                     [Zeitraum ▾] [🔍] [🎤]      │
│  > Discover│                                                              │
│            │  ┌─────────────┬─────────────┬─────────────┬──────────────┐ │
│            │  │ Neue Signale│ Qualifiziert│ Konvertiert │ Pipeline-Wert│ │
│            │  │     47      │     12      │      5      │   1,8M EUR  │ │
│            │  │ 📈 +23%     │ 📈 +8%      │ 📈 +15%     │ 📈 +12%     │ │
│            │  └─────────────┴─────────────┴─────────────┴──────────────┘ │
│            │                                                              │
│            │  ┌─ Signal Heatmap (span-2) ──────────┬─ AI Insights ─────┐ │
│            │  │                                     │                    │ │
│            │  │       Leader  Ausschr  Hiring Event │ ✨ KI-Analyse     │ │
│            │  │ Retail  ██▓    ██░     ▓░░   ░░░   │                    │ │
│            │  │ Finance ▓░░    ██▓     ██░   ▓░░   │ "Retail-Branche   │ │
│            │  │ Tech    ░░░    ▓░░     ██▓   ██░   │  zeigt 40% mehr   │ │
│            │  │ Pharma  ██░    ░░░     ▓░░   ██▓   │  CTO-Wechsel als  │ │
│            │  │ Public  ░░░    ██▓     ░░░   ░░░   │  Q4"              │ │
│            │  │                                     │                    │ │
│            │  │ ██ = Hoch  ▓ = Mittel  ░ = Niedrig │ [Alle Insights →] │ │
│            │  └─────────────────────────────────────┴────────────────────┘ │
│            │                                                              │
│            │  ┌─ Top Accounts ─────────────────┬─ Trending Industries ──┐ │
│            │  │                                 │                        │ │
│            │  │ 1. RetailCorp AG    5 Signale   │ 📈 Retail      +40%   │ │
│            │  │    [87] SAP-Migration            │ 📈 Public Sec. +28%   │ │
│            │  │ 2. BfS              3 Signale   │ 📈 Pharma      +15%   │ │
│            │  │    [72] NIS2-Readiness           │ 📉 Finance     -5%    │ │
│            │  │ 3. TechAG           3 Signale   │ → Tech         ±0%    │ │
│            │  │    [65] Cloud-Migration          │                        │ │
│            │  │                                 │ [Trend-Details →]      │ │
│            │  │ [Alle Accounts →]               │                        │ │
│            │  └─────────────────────────────────┴────────────────────────┘ │
│            │                                                              │
└────────────┴──────────────────────────────────────────────────────────────┘
```

**Bento Grid Konfiguration:**
- `bento-cols: 3` (Desktop), `2` (Tablet), `1` (Mobile)
- `bento-gap: space-4` (16px)
- KPI-Strip: 4 Metric Cards, `span-full` (erstreckt sich ueber alle 3 Spalten)
- Signal Heatmap: `bento-span-2` (doppelt breit)
- AI Insights: 1 Spalte, `ai-surface` Hintergrund, `ai-border` linker Rand (3px)
- Top Accounts: `bento-span-2`
- Trending Industries: 1 Spalte

**Signal Heatmap Farben:**
- Hohe Aktivitaet: `score-excellent` Hintergrund
- Mittlere Aktivitaet: `score-good` Hintergrund
- Niedrige Aktivitaet: `neutral-200` Hintergrund
- Klickbare Zellen: `interactive-warm` Hover-Hintergrund

**KPI-Strip Metric Cards (DS `charts-kpi`):**
- Zahl: `heading-xxl`, `neutral-900`
- Trend: `body-sm`, `semantic-success` (positiv) / `semantic-danger` (negativ)
- Label: `label`, `neutral-700`

---

## 4. Layout — Responsive

| Breakpoint | Bento Cols | Verhalten |
|-----------|-----------|-----------|
| `breakpoint-xl`+ | 3 | Volle Grid-Ansicht wie oben. |
| `breakpoint-lg` | 3 | KPI-Strip scrollbar horizontal bei engem Platz. |
| `breakpoint-md` | 2 | KPI-Strip: 2x2 Grid. Heatmap: span-full, horizontal scrollbar. AI Insights unterhalb Heatmap. |
| `breakpoint-sm` | 1 | Vertikaler Stack. KPI-Strip: horizontal Scroll (4 Cards). Heatmap: vereinfachte Top-5-Liste statt Matrix. Bottom Navigation Bar sichtbar. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| KPI: Neue Signale (Anzahl, Trend) | Signal Detection Service | Real-time via WebSocket |
| KPI: Qualifiziert (Anzahl, Trend) | Pipeline Service | Real-time |
| KPI: Konvertiert (Anzahl, Trend) | Pipeline Service | Real-time |
| KPI: Pipeline-Wert (Summe, Trend) | Pipeline Service | Real-time |
| Signal Heatmap (Branchen × Signal-Typen, Zaehler) | Signal Aggregation Service | Bei Seitenladen, Cache 15 Min |
| Top Accounts (Name, Signal-Anzahl, Top-Score) | Signal Aggregation Service | Bei Seitenladen, Cache 15 Min |
| Trending Industries (Branche, Trend-Prozent, Zeitraum) | Analytics Service | Taeglich |
| AI Insights (generierte Texte) | AI Insights Service | Bei Seitenladen, Cache 1h |
| Quick Filter Optionen (Zeitraeume, Branchen, Typen) | Aggregation Service | Bei Seitenladen |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Embedded Insight Cards** — KI-Analysen direkt im Dashboard als dedizierte Kachel. |
| **AI Insights Card** | Generierte Markt-Analyse basierend auf Signal-Aggregation. Beispiel: "Retail-Branche zeigt 40% mehr CTO-Wechsel als Q4 — 3 Accounts mit SAP-Bedarf identifiziert." |
| **Heatmap-Annotation** | KI markiert Heatmap-Zellen mit ungewoehnlicher Aktivitaet: pulsierender `ai-sparkle`-Rand um auffaellige Zellen. |
| **Trend-Erklaerung** | Hover auf Trending-Industry-Zeile zeigt KI-generierten Tooltip: "Pharma +15% — getrieben durch 3 NIS2-Ausschreibungen und 2 CTO-Wechsel." |
| **Account-Priorisierung** | Top Accounts sind KI-sortiert nach kombiniertem Signal-Score (Anzahl × Durchschnitts-Score × Recency). |

---

## 7. Preview Panel Integration

- **Account-Hover:** Hover auf Top Account zeigt Tooltip-Preview (DS 6.10, 320x200px): Firmenname, Branche, letzte Interaktion, offene Opportunities, Account-Owner.
- **Heatmap-Zellen-Hover:** Hover auf Heatmap-Zelle zeigt Tooltip mit Zaehler und Top-Signal: "Retail × Leadership: 8 Signale. Top: RetailCorp CTO-Wechsel [87]."
- **Kein Dokument-Preview** auf dem Dashboard — Dokumente werden im Signal Feed / Detail-Screens angezeigt.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Branchen-Prognose** | "Basierend auf aktuellem Trend: Retail-Signale werden sich bis Q2 verdoppeln" — als `body-xs` unter Trending Industries. |
| **Account-Clustering** | KI erkennt verwandte Accounts (gleiche Branche, aehnliche Signale) und zeigt "Cluster: 3 Retail-Accounts mit SAP-Bedarf." |
| **Saisonale Muster** | Heatmap zeigt optional Vorjahres-Vergleich als Overlay: gestrichelte Umrandung fuer Q1-Vorjahr. |
| **Pipeline-Gap-Warnung** | "Pipeline-Wert liegt 20% unter Quartalsziel. 12 qualifizierte Signale warten auf Bearbeitung." — im AI Insights Card. |

---

## 9. Interaktions-Flows

### Flow 1: Morgen-Ueberblick (Katrin, 3 Min)
```
Katrin oeffnet Discovery Dashboard → KPI-Strip scannen (5 Sek) →
Heatmap betrachten → Retail × Leadership leuchtet →
Klick auf Heatmap-Zelle → Signal Feed oeffnet mit Filter: Branche=Retail, Typ=Leadership
```

### Flow 2: Strategischer Review (Thomas, 5 Min)
```
Thomas oeffnet Discovery → KPI-Strip: Pipeline +12% →
AI Insights lesen: "Retail zeigt 40% mehr CTO-Wechsel" →
Top Accounts scannen → RetailCorp [87] → Hover fuer Preview →
Klick → Account Plan oeffnet
```

### Flow 3: Trend-basierte Priorisierung
```
Katrin sieht Trending Industries: Public Sec. +28% →
Klick auf "Public Sector" → Signal Feed oeffnet mit Filter: Branche=Public Sector →
3 Ausschreibungen sichtbar → Bearbeitung starten
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Cockpit Dashboard | Discovery Dashboard | KPI "Neue Signale" Klick, Sidebar |
| **Von:** Sidebar | Discovery Dashboard | Klick "Growth → Discovery" |
| **Zu:** Signal Feed | `growth/signal-feed.md` | Heatmap-Zellen-Klick, Top Account Klick (gefiltert) |
| **Zu:** Ausschreibungs-Feed | `growth/ausschreibungs-feed.md` | Heatmap-Zelle "Ausschreibung" Klick |
| **Zu:** Account Plan | `foundation/account-plan-stakeholder-map.md` | Klick auf Account-Namen in Top Accounts |
| **Zu:** Opportunity Detail | `deal/opportunity-detail.md` | Klick auf Opportunity in Account-Preview |
| **Zu:** Copilot Sidebar | `ai-experience/copilot-sidebar.md` | "Alle Insights →" Klick |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board Item:** Discovery Dashboard | Noch nicht erstellt. |
| **Figma:** Kein Frame vorhanden | Erstanlage erforderlich. Bento Grid 3-col, Light Theme. |

---

## 12. Akzeptanzkriterien

- [ ] KPI-Strip: Neue Signale, Qualifiziert, Konvertiert, Pipeline-Wert mit Trend-Indikatoren
- [ ] Signal Heatmap: Matrix Branchen × Signal-Typen, klickbare Zellen
- [ ] Heatmap-Farbskala: 3 Stufen (`score-excellent`, `score-good`, `neutral-200`)
- [ ] AI Insights Card: KI-generierter Text auf `ai-surface` Hintergrund
- [ ] Top Accounts: KI-sortiert mit Signal-Anzahl und Top-Score
- [ ] Trending Industries: Branchen mit Trend-Prozent, sortiert nach Veraenderung
- [ ] Quick Filters: Zeitraum, Branche, Signal-Typ
- [ ] Heatmap-Klick oeffnet Signal Feed mit korrekt gesetzten Filtern
- [ ] Bento Grid Layout: 3 Spalten Desktop, 2 Tablet, 1 Mobile
- [ ] Responsive: Heatmap wird zu Top-5-Liste auf Mobile
- [ ] Hover-Tooltips auf Accounts und Heatmap-Zellen
- [ ] Accessibility: role="main", aria-label pro Kachel, Keyboard-navigierbar

---

## 13. Offene Fragen

1. **Heatmap-Granularitaet:** Welche Branchen und Signal-Typen werden in Phase 1 angezeigt? *Empfehlung: Top 5 Branchen, 4 Signal-Typen (Leadership, Ausschreibung, Hiring, Event).*
2. **Zeitraum-Filter:** Welche Zeitraeume sind verfuegbar? *Empfehlung: 7 Tage, 30 Tage, Quartal, YTD.*
3. **AI Insights Refresh:** Wie oft werden KI-Insights neu generiert? *Empfehlung: Taeglich morgens, bei signifikanter Veraenderung ad-hoc.*
4. **Export:** Soll das Dashboard als PDF/Report exportierbar sein? *Empfehlung: Phase 2.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
