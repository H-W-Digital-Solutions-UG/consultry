# Signal Feed — Screen Spec

**Screen-ID:** GRW-01
**PRD-Modul:** 9.1 — Signal Detection & Enrichment
**Journey(s):** J1-S1 (Katrin entdeckt Signal), J15-S1 (Ausschreibungs-Feed)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Katrin (BD-Leiterin) — 4-6h/Tag, Signal-getriebener Workflow |
| **Sekundaer** | Thomas (Pipeline-Review), Stefan (Projekt-relevante Signale) |
| **Frequenz** | Katrin: 10-20x/Tag. Thomas: 2-3x/Tag. |
| **Trigger** | Sidebar "Growth → Signale", Notification "Neues Signal", Copilot-Link "Signale anzeigen", Mobile Bottom Nav. |
| **Herkunft** | Cockpit, Notification Center, Copilot Sidebar, direkte Navigation. |
| **Ziel** | Signale scannen (L0), vielversprechende bewerten (L1), Brief generieren / Matching starten (L2). |
| **Geraete** | Desktop (primaer), Mobile (Signal-Scan unterwegs). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Katrin | neue Signale nach Score sortiert sehen | ich die heissesten Leads zuerst bearbeite |
| 2 | Katrin | Signale nach Typ, Branche und Score filtern | ich meinen Feed auf relevante Signale einschraenke |
| 3 | Katrin | per Klick einen Engagement Brief generieren | ich in 30 Sekunden ein Erstgespraech vorbereiten kann |
| 4 | Katrin | Signal-Details im Slide-Over sehen ohne den Feed zu verlassen | ich den Kontext behalte |
| 5 | Thomas | nur High-Score-Signale (>80) sehen | ich strategische Chancen erkenne |
| 6 | Katrin | Signale archivieren oder als "nicht relevant" markieren | mein Feed sauber bleibt |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure**
**Begruendung:** Signal Feed ist eine priorisierte, chronologische Liste. Der Nutzer scannt L0-Rows, oeffnet interessante als L1-Cards, und taucht per Slide-Over in L2-Details ein. Kein Bento Grid — es gibt eine klare lineare Hierarchie.

```
┌─ Sidebar ─┬─ Signal Feed ────────────────────────────────────────────┐
│            │                                                          │
│  Growth    │  Signale                              [🔍 Suche] [🎤]   │
│  > Signale │                                                          │
│            │  ┌─ Filter Bar ──────────────────────────────────────┐   │
│            │  │  [Signal-Typ ▾] [Branche ▾] [Score >= __] [Zeit] │   │
│            │  │  Aktive Filter: Branche: Retail ×                 │   │
│            │  └──────────────────────────────────────────────────┘   │
│            │                                                          │
│            │  23 Signale · 7 neue seit gestern                       │
│            │                                                          │
│            │  ┌─ Signal Card (L0→L1) ─────────────────────────────┐  │
│            │  │ ⚡ Leadership-Wechsel · RetailCorp AG              │  │
│            │  │ ┃ Neuer CTO mit SAP-Hintergrund            [87]   │  │
│            │  │ ┃ vor 2 Stunden · Dealfront                       │  │
│            │  │ ┃ Branche: Retail · Region: DACH                  │  │
│            │  │ ┃ [Brief generieren] [Archivieren] [→ Details]    │  │
│            │  └───────────────────────────────────────────────────┘  │
│            │                                                          │
│            │  ┌─ Signal Card (L0→L1) ─────────────────────────────┐  │
│            │  │ 📋 Ausschreibung · Bundesamt fuer Sicherheit       │  │
│            │  │ ┃ NIS2-Readiness Assessment             [72]      │  │
│            │  │ ┃ Frist: 15.04.2026 · TED                         │  │
│            │  │ ┃ [Details & Matching] [Merken]                    │  │
│            │  └───────────────────────────────────────────────────┘  │
│            │                                                          │
│            │  ... (weitere Signal Cards, scrollbar)                   │
│            │                                                          │
│            │  [Weitere laden]                                         │
│            │                                                          │
└────────────┴──────────────────────────────────────────────────────────┘
```

**Signal Card Left-Border Farben (DS 6.2):**
- Leadership-Wechsel: `brand-primary` (Warm Coral)
- Ausschreibung: `semantic-warning` (Gold)
- Hiring-Signal: `semantic-info` (Blau)
- Event-Signal: `brand-warm` (Amber)
- Risk-Signal: `semantic-danger` (Rot)

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Feed max-width 800px, zentriert. Filter Bar sticky. |
| `breakpoint-lg` | Feed volle Breite. |
| `breakpoint-md` | Feed volle Breite. Filter als Chips, horizontal scrollbar. |
| `breakpoint-sm` | Mobile Signal Feed (`mobile/mobile-signal-feed.md`). Bottom Nav sichtbar. Cards kompakter (L0 only, Tap fuer L1). Pull-to-Refresh. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Signal-Liste (Titel, Score, Typ, Quelle, Zeitstempel) | Signal Detection Service | Real-time via WebSocket / SSE |
| Signal-Detail (Beschreibung, Enrichment, Kontakte) | Signal Enrichment Service | Bei L2-Oeffnung |
| Filter-Optionen (Branchen, Typen) | Aggregation | Bei Seitenladen |
| Consent-Status der zugehoerigen Kontakte | Consent Service | Bei L2-Oeffnung |
| Matching-Vorschlaege (Berater fuer Signal) | AI Matching Service | Bei "Matching starten" |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Command Bar** (Katrin) — schnelle KI-Aktionen direkt aus dem Feed. |
| **Score-Berechnung** | KI-generierter Score (0-100) basierend auf: Relevanz, Timing, Branchen-Fit, bestehende Beziehungen. |
| **Score-Erklaerung** | Tooltip auf Score Badge: "87/100 — Retail-Branche (+20), SAP-Skill-Match (+30), aktiver Account (+15), Timing (+22)". |
| **Brief-Generierung** | "Brief generieren" startet KI-Engagement-Brief im Canvas. Uebergang zu `ai-experience/engagement-brief-canvas.md`. |
| **Smart-Sortierung** | Default: KI-Score absteigend. Alternative: chronologisch, nach Typ. |
| **Automatische Enrichment** | Neue Signale werden automatisch mit Firmen-Daten, Kontakten und existierenden Beziehungen angereichert. |

---

## 7. Preview Panel Integration

- **Signal-Detail Slide-Over:** Klick auf "Details" oeffnet Slide-Over (480px) mit vollem Signal-Kontext:
  - Signal-Beschreibung (AI-angereichert)
  - Firmenprofil (Preview Panel Inline, 200px: Firmen-Website-Screenshot oder Logo)
  - Zugehoerige Kontakte mit DSGVO-Status
  - Verwandte Signale (gleicher Kunde)
  - Aktionen: Brief generieren, Matching, Archivieren
- **Hover-Preview (Desktop):** Hover auf Signal Card zeigt Tooltip (DS 6.10, 320x200px) mit Kurzinfo.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Score-Priorisierung** | Signale mit Score >= 80 werden visuell hervorgehoben (leichter `ai-surface` Hintergrund). |
| **"Du wirst wahrscheinlich..."** | Nach 3+ unbearbeiteten Signalen zu einem Account: Proaktiver Nudge "RetailCorp hat 3 aktive Signale. Soll ich einen zusammenfassenden Brief erstellen?" |
| **Zeitfenster-Warnung** | Ausschreibungen mit Frist <7 Tage: `semantic-warning` Badge "Frist in 5 Tagen". |
| **Duplikat-Erkennung** | KI erkennt verwandte Signale zum gleichen Unternehmen und gruppiert sie: "3 Signale zu RetailCorp [Gruppiert anzeigen]". |

---

## 9. Interaktions-Flows

### Flow 1: Morgen-Scan (Katrin, 5 Min)
```
Katrin oeffnet Signal Feed → Filter: Score >= 70 →
Scannt 5 Top-Signale (L0: Titel + Score) →
Klickt RetailCorp [87] → Card expandiert (L1) →
Liest Kurzinfo → Klickt "Brief generieren" →
Engagement Brief Canvas oeffnet
```

### Flow 2: Ausschreibungs-Recherche
```
Katrin filtert: Typ = "Ausschreibung" →
3 Ausschreibungen sichtbar → Klickt BfS NIS2 [72] →
Slide-Over oeffnet (L2) → Liest Details + Frist →
"Details & Matching" → Staffing Matching Screen
```

### Flow 3: Signal archivieren
```
Katrin sieht irrelevantes Signal → Klickt "Archivieren" →
Signal verschwindet mit Fade-Animation →
Undo-Toast: "Signal archiviert. [Rueckgaengig]"
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Cockpit | Signal Feed | Pipeline-Chart Klick, Sidebar |
| **Von:** Notification | Signal Feed | Signal-Notification Klick |
| **Zu:** Engagement Brief Canvas | `ai-experience/engagement-brief-canvas.md` | "Brief generieren" |
| **Zu:** Opportunity Detail | `deal/opportunity-detail.md` | "Opportunity erstellen" aus Signal |
| **Zu:** Staffing & Matching | `deal/staffing-matching.md` | "Matching starten" |
| **Zu:** Account Plan | `foundation/account-plan-stakeholder-map.md` | Klick auf Firmenname |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board Item #1:** Signal-Feed | Signal-Card-Layout mit Scores. Dark Theme (veraltet). |
| **Stitch Board Item #2:** Signal-Detail | Detail-Ansicht eines Signals. |
| **Figma:** Frame vorhanden | Signal Feed importiert (Stitch Dark). Anpassung auf Light Theme erforderlich. |

---

## 12. Akzeptanzkriterien

- [ ] Signal-Liste sortiert nach KI-Score (default), alternativ chronologisch
- [ ] Filter Bar: Signal-Typ, Branche, Score-Schwelle, Zeitraum
- [ ] Signal Cards mit farbcodierten Left-Borders nach Typ
- [ ] Score Badges mit Tooltip-Erklaerung
- [ ] "Brief generieren" oeffnet Engagement Brief Canvas
- [ ] Slide-Over Detail mit Firmenprofil, Kontakten, DSGVO-Status
- [ ] Archivieren mit Undo-Toast
- [ ] Real-time Updates (neue Signale erscheinen live)
- [ ] Responsive: Mobile Feed mit Bottom Nav, Pull-to-Refresh
- [ ] Emoji-Kategorien konsistent (DS 1.10): ⚡ Leadership, 📋 Ausschreibung

---

## 13. Offene Fragen

1. **Signal-Quellen:** Welche Quellen sind in Phase 1 angebunden? *Empfehlung: Dealfront, TED (Ausschreibungen), Google Alerts.*
2. **Signal-Alter:** Wie lange bleiben Signale im Feed? *Empfehlung: 30 Tage, danach automatisch archiviert.*
3. **Batch-Aktionen:** Kann Katrin mehrere Signale gleichzeitig archivieren? *Empfehlung: Phase 2.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
