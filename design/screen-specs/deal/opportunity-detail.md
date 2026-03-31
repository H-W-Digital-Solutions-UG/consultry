# Opportunity Detail — Screen Spec

**Screen-ID:** DEAL-01
**PRD-Modul:** 10.1 — Opportunity & Engagement Management
**Journey(s):** J1-S3 (Katrin qualifiziert Opportunity), J8-S1 (Pipeline Management)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Katrin (BD-Leiterin) — detaillierte Opportunity-Bearbeitung |
| **Sekundaer** | Thomas (Approval-Review), Stefan (Staffing-Kontext) |
| **Frequenz** | Katrin: 5-10x/Tag. Thomas: 1-3x/Tag (Review). |
| **Trigger** | Signal Feed → "Opportunity erstellen", Pipeline-Liste → Klick, Command Bar → Entity-Suche, Notification → Approval. |
| **Herkunft** | Signal Feed, Pipeline-Uebersicht, Command Bar, Notification Center. |
| **Ziel** | Opportunity qualifizieren, Brief/Angebot generieren, Matching starten, Status aktualisieren, zur Freigabe weiterleiten. |
| **Geraete** | Desktop (primaer), Tablet. |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Katrin | alle Details einer Opportunity auf einen Blick sehen | ich schnell entscheiden kann, ob sie weiterverfolgt wird |
| 2 | Katrin | den KI-generierten Engagement Brief lesen und bearbeiten | ich das Erstgespraech vorbereiten kann |
| 3 | Katrin | passende Berater per Matching finden | ich ein Team vorschlagen kann |
| 4 | Katrin | ein Angebot generieren lassen | ich den Deal vorantreiben kann |
| 5 | Thomas | die Opportunity reviewen und freigeben | Katrin weiterarbeiten kann |
| 6 | Katrin | den DSGVO-Status aller Kontakte sehen | ich keine Compliance-Risiken eingehe |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure (2/3 + 1/3 Asymmetrie)**
**Begruendung:** Opportunity Detail ist ein linearer Workflow: Kontext verstehen → Entscheidung treffen → Aktion ausfuehren. Die 2/3+1/3 Asymmetrie (DS 1.7) trennt Hauptinhalte von KI-Insights und Aktionen.

```
┌─ Sidebar ─┬─ Opportunity Detail (2/3 + 1/3) ─────────────────────────┐
│            │                                                           │
│            │  Breadcrumb: Pipeline > RetailCorp AG > SAP Migration     │
│            │                                                           │
│            │  ┌─ Main Content (2/3) ──────┬─ Context Rail (1/3) ────┐ │
│            │  │                            │                         │ │
│            │  │  RetailCorp AG             │  ┌─ KI-Score ────────┐ │ │
│            │  │  SAP S/4HANA Migration     │  │  Match: 87/100    │ │ │
│            │  │  Phase: Proposal  [Badge]  │  │  ○○○○○○○○○        │ │ │
│            │  │  Wert: 340.000 EUR         │  │  Skills: 96       │ │ │
│            │  │  Timeline: Mai-Nov 2026    │  │  Timing: 82       │ │ │
│            │  │                            │  │  Branche: 91      │ │ │
│            │  │  ┌─ Tabs ──────────────┐  │  └──────────────────┘ │ │
│            │  │  │ [Uebersicht] [Brief]│  │                         │ │
│            │  │  │ [Team] [Angebot]    │  │  ┌─ Aktionen ────────┐ │ │
│            │  │  │ [Dokumente] [Log]   │  │  │  [Brief erstellen] │ │ │
│            │  │  └────────────────────┘  │  │  [Matching starten] │ │ │
│            │  │                            │  │  [Angebot gen.]    │ │ │
│            │  │  ┌─ Tab Content ───────┐  │  │  [Freigabe anf.]   │ │ │
│            │  │  │  Anforderungen:     │  │  └──────────────────┘ │ │
│            │  │  │  - SAP S/4HANA      │  │                         │ │
│            │  │  │  - Change Mgmt      │  │  ┌─ Kontakte ────────┐ │ │
│            │  │  │  - Retail-Erfahrung │  │  │  Max Mueller, CTO  │ │ │
│            │  │  │                     │  │  │  ✅ Eingewilligt   │ │ │
│            │  │  │  Budget: ~500K      │  │  │  Lisa S., CFO      │ │ │
│            │  │  │  Entscheider: CTO   │  │  │  ⚠️ Ausstehend    │ │ │
│            │  │  └─────────────────────┘  │  └──────────────────┘ │ │
│            │  │                            │                         │ │
│            │  │                            │  ┌─ Aktivitaet ──────┐ │ │
│            │  │                            │  │  Katrin: Brief     │ │ │
│            │  │                            │  │  gen. vor 2h       │ │ │
│            │  │                            │  │  Thomas: Review    │ │ │
│            │  │                            │  │  angefragt gestern │ │ │
│            │  │                            │  └──────────────────┘ │ │
│            │  └────────────────────────────┴─────────────────────┘ │
│            │                                                           │
└────────────┴───────────────────────────────────────────────────────────┘
```

**Tabs:**
1. **Uebersicht** — Anforderungen, Budget, Timeline, Entscheider
2. **Engagement Brief** — KI-generierter Brief mit `ai-surface` bg (AI Content Card Pattern)
3. **Team** — Zugewiesene/vorgeschlagene Berater, Matching-Ergebnisse
4. **Angebot** — Angebots-Entwurf, Preiskalkulation
5. **Dokumente** — Anhaenge, CVs, Vertraege (Preview Panel Integration)
6. **Aktivitaets-Log** — Chronologische Historie

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | 2/3 + 1/3 Layout. Tabs + Context Rail. |
| `breakpoint-lg` | 2/3 + 1/3 Layout, Context Rail schmaler. |
| `breakpoint-md` | Single Column. Context Rail collapsed unter Hauptinhalt als Accordion. |
| `breakpoint-sm` | Single Column. Tabs als horizontale Scroll-Pills. Context Rail als Bottom Sheet. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Opportunity (Titel, Phase, Wert, Timeline) | Pipeline Service | Real-time |
| KI-Score + Dimensionen | AI Scoring Service | Bei Seitenladen, nach Aenderungen |
| Engagement Brief | AI Content Service | Bei Generierung, cached |
| Matching-Ergebnisse | AI Matching Service | Bei "Matching starten" |
| Kontakte + DSGVO-Status | CRM + Consent Service | Real-time |
| Dokumente | Document Service | Bei Seitenladen |
| Aktivitaets-Log | Activity Log Service | Real-time |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Command Bar** (Katrin) + **Copilot** (Thomas). |
| **Score-Erklaerung** | Score Ring (DS 5.7) im Context Rail mit Dimension-Breakdown: Skills, Timing, Branche, Team-Fit. Jede Dimension klickbar fuer Detail-Erklaerung. |
| **Brief-Generierung** | Tab "Engagement Brief": KI generiert Brief mit `ktype-ai-reveal`. Editable. Quellen-Attribution. |
| **Matching** | Tab "Team": "Matching starten" → KI berechnet Top-5-Berater mit Score-Breakdown (DS 6.3). |
| **Angebots-Generierung** | Tab "Angebot": "Angebot generieren" → oeffnet Angebots-Canvas (`ai-experience/angebots-canvas.md`). |
| **Smart Actions** | Context Rail: KI schlaegt naechste Aktion vor basierend auf Opportunity-Phase. Proposal-Phase: "Angebot erstellen". Qualifying: "Brief generieren". |

---

## 7. Preview Panel Integration

- **Tab "Dokumente":** Alle Anhaenge mit Inline-Preview (DS 6.10). PDF-Vorschau (Page-by-Page), DOCX-Thumbnail. Klick oeffnet Fullscreen-Preview.
- **Tab "Engagement Brief":** KI-generierter Brief als AI Content Card mit Live-Render.
- **Tab "Angebot":** Angebots-Entwurf als Inline-Preview. Klick oeffnet Canvas.
- **Context Rail — Kontakte:** Hover auf Kontakt zeigt Tooltip mit Kontaktdetails + letztem Kontaktzeitpunkt.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Naechste Aktion** | Context Rail: "Empfohlene naechste Aktion: [Angebot erstellen]" basierend auf Phase + Score. |
| **Win-Probability** | "Gewinn-Wahrscheinlichkeit: 72% basierend auf aehnlichen Deals" als `body-xs` unter dem Score Ring. |
| **Smart Pre-Fill** | Bei Opportunity-Erstellung: Felder vorausgefuellt aus Signal-Daten (Firma, Branche, Ansprechpartner). |
| **Timing-Warnung** | "Timeline-Risiko: Start Mai 2026, aber 2 Berater erst ab Juni verfuegbar." als Warning-Toast. |

---

## 9. Interaktions-Flows

### Flow 1: Signal → Opportunity qualifizieren (Katrin)
```
Signal Feed → "Opportunity erstellen" → Opportunity Intake Modal →
Felder vorausgefuellt aus Signal → Katrin ergaenzt Budget + Timeline →
Speichern → Opportunity Detail oeffnet → Tab "Uebersicht"
```

### Flow 2: Brief generieren + Team matchen
```
Opportunity Detail → Tab "Brief" → "Brief generieren" →
ktype-ai-reveal → Katrin bearbeitet → Speichern →
Tab "Team" → "Matching starten" → 5 Berater-Vorschlaege →
Katrin waehlt 3 → "Team vorschlagen" → Tab "Angebot"
```

### Flow 3: Thomas reviewed + gibt frei
```
Notification "Freigabe angefragt" → Opportunity Detail oeffnet →
Thomas scannt Uebersicht + Score → Tab "Angebot" →
Liest Angebots-Preview → Context Rail: [Freigeben] [Ablehnen] →
"Freigeben" → Confirmation Dialog → Success Toast
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Signal Feed | Opportunity Detail | "Opportunity erstellen" |
| **Von:** Pipeline-Liste | Opportunity Detail | Row-Klick |
| **Von:** Command Bar | Opportunity Detail | Entity-Suche |
| **Zu:** Engagement Brief Canvas | `ai-experience/engagement-brief-canvas.md` | "Brief erstellen" |
| **Zu:** Staffing & Matching | `deal/staffing-matching.md` | "Matching starten" |
| **Zu:** Angebots-Canvas | `ai-experience/angebots-canvas.md` | "Angebot generieren" |
| **Zu:** Account Plan | `foundation/account-plan-stakeholder-map.md` | Klick auf Firmenname |
| **Zu:** Consultant Profile | `foundation/consultant-profile-view.md` | Klick auf Berater im Team-Tab |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board Item #3:** Opportunity-Detail | Opportunity-Ansicht mit Score + Aktionen. |
| **Stitch Board Item #5:** Matching-Ergebnisse | Score-Breakdown fuer Berater-Matching. |
| **Figma:** Frames vorhanden | Opportunity + Matching importiert (Dark Theme, Anpassung noetig). |

---

## 12. Akzeptanzkriterien

- [ ] 2/3 + 1/3 Layout mit Tabs und Context Rail
- [ ] Score Ring mit 4 Dimensionen + Erklaerung
- [ ] 6 Tabs: Uebersicht, Brief, Team, Angebot, Dokumente, Log
- [ ] Engagement Brief mit AI Content Card Pattern + ktype-ai-reveal
- [ ] Matching: Top-5-Berater mit Score-Breakdown
- [ ] DSGVO-Consent-Status fuer alle Kontakte sichtbar
- [ ] Dokument-Previews inline
- [ ] Predictive: Naechste Aktion, Win-Probability, Timing-Warnung
- [ ] Responsive: Single Column + Accordion auf Tablet/Mobile
- [ ] Accessibility: Tab-Navigation, aria-selected, Focus Management

---

## 13. Offene Fragen

1. **Phasen-Modell:** Wie viele Pipeline-Phasen? *Empfehlung: 6 — Qualifying, Proposal, Negotiation, Won, Lost, On Hold.*
2. **Custom Fields:** Koennen Beratungen eigene Felder hinzufuegen? *Empfehlung: Phase 2.*
3. **Verknuepfung zu Projekten:** Wie wird eine gewonnene Opportunity zum Projekt? *Empfehlung: "In Projekt umwandeln"-Button in Phase "Won".*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
