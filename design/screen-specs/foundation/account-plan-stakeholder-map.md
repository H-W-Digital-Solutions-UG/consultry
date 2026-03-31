# Account Plan & Stakeholder Map — Screen Spec

**Screen-ID:** FND-03
**PRD-Modul:** 8.3 — Client & Relationship Intelligence
**Journey(s):** J7-S1 (Katrin verwaltet Account Plan)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Katrin (BD-Leiterin) — Account-Strategie und Beziehungspflege |
| **Sekundaer** | Thomas (Account-Review), Stefan (Kontakt-Kontext fuer Projekte) |
| **Frequenz** | Katrin: 2-3x/Woche pro Key Account. Thomas: 1x/Woche (Review). |
| **Trigger** | Sidebar "Foundation → Kunden", Signal Feed → Firmenname klicken, Command Bar → Kunden-Suche, Opportunity Detail → Firmenname. |
| **Herkunft** | Signal Feed, Opportunity Detail, Command Bar, Sidebar. |
| **Ziel** | Account-Strategie definieren, Stakeholder-Beziehungen pflegen, Warm Paths identifizieren, Opportunities im Account-Kontext sehen. |
| **Geraete** | Desktop (primaer). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Katrin | alle Stakeholder eines Kunden auf einer Map sehen | ich die Entscheidungsstruktur verstehe |
| 2 | Katrin | Warm Paths (bestehende Beziehungen zu Stakeholdern) erkennen | ich den besten Zugang waehle |
| 3 | Katrin | alle Opportunities eines Accounts auf einen Blick sehen | ich die Account-Durchdringung bewerte |
| 4 | Katrin | Account-Notizen und Strategie dokumentieren | das Team informiert ist |
| 5 | Thomas | Key Accounts nach Umsatz und Potenzial sortieren | ich strategische Prioritaeten setze |
| 6 | Katrin | DSGVO-Status aller Kontakte sehen | ich compliant outreache |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure (2/3 + 1/3 Asymmetrie)**
**Begruendung:** Account Plan hat eine Hauptansicht (Stakeholder-Map oder Liste) und einen Context Rail fuer Account-KPIs und Quick Actions. Kein Bento Grid — die Stakeholder-Map ist das primaere visuelle Element.

```
┌─ Sidebar ─┬─ Account Plan ─────────────────────────────────────────────┐
│            │                                                             │
│            │  RetailCorp AG                         [Bearbeiten] [···]   │
│            │  Branche: Retail · DACH · seit 2019                         │
│            │                                                             │
│            │  ┌─ Main (2/3) ─────────────┬─ Context Rail (1/3) ───────┐ │
│            │  │                           │                             │ │
│            │  │  ┌─ Tabs ──────────────┐ │  ┌─ Account KPIs ────────┐ │ │
│            │  │  │ [Map] [Kontakte]    │ │  │  Umsatz LTD: 1,2M    │ │ │
│            │  │  │ [Opportunities]     │ │  │  Aktive Opps: 3       │ │ │
│            │  │  │ [Notizen] [Historie]│ │  │  Berater im Einsatz: 5│ │ │
│            │  │  └────────────────────┘ │  │  DSGVO: 4/6 Opted-In  │ │ │
│            │  │                           │  └──────────────────────┘ │ │
│            │  │  ── Stakeholder Map ──    │                             │ │
│            │  │                           │  ┌─ Warm Paths ─────────┐ │ │
│            │  │  [CEO]────[CFO]           │  │  Katrin → Max M.     │ │ │
│            │  │   |        |              │  │  (CTO) via Event     │ │ │
│            │  │  [CTO]───[VP IT]          │  │  Stefan → Lisa S.    │ │ │
│            │  │   |    ✅    ⚠️           │  │  (VP IT) via Projekt │ │ │
│            │  │  [Einkauf]                │  └──────────────────────┘ │ │
│            │  │   ❌                      │                             │ │
│            │  │                           │  ┌─ Quick Actions ──────┐ │ │
│            │  │  Legende:                 │  │  [Signal-Feed fuer    │ │ │
│            │  │  ✅ Opted-In              │  │   RetailCorp]         │ │ │
│            │  │  ⚠️ Ausstehend           │  │  [Neuen Kontakt +]    │ │ │
│            │  │  ❌ Unbekannt             │  │  [Account-Brief gen.] │ │ │
│            │  │                           │  └──────────────────────┘ │ │
│            │  │                           │                             │ │
│            │  └───────────────────────────┴─────────────────────────┘ │
│            │                                                             │
└────────────┴─────────────────────────────────────────────────────────────┘
```

**Tabs:**
1. **Map** — Visuelle Stakeholder-Map mit Beziehungslinien und DSGVO-Status
2. **Kontakte** — Tabelle aller Kontakte mit Rolle, DSGVO-Status, letztem Kontakt
3. **Opportunities** — Alle Opportunities fuer diesen Account (Kompakt-Cards)
4. **Notizen** — Account-Strategie, Meeting-Notizen, Freitext
5. **Historie** — Chronologischer Activity Log

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | 2/3 + 1/3 Layout. Stakeholder-Map visuell. |
| `breakpoint-lg` | 2/3 + 1/3, Map vereinfacht. |
| `breakpoint-md` | Single Column. Context Rail als Accordion ueber der Map. |
| `breakpoint-sm` | Eingeschraenkt. Kontakte-Tab als primaere Ansicht (Tabelle → Card-Liste). Map entfaellt. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Account-Profil (Name, Branche, Region) | CRM Service | Bei Seitenladen |
| Stakeholder (Name, Rolle, Beziehungen) | CRM + Relationship Service | Bei Seitenladen |
| DSGVO-Status pro Kontakt | Consent Service | Real-time |
| Warm Paths (Berater↔Kontakt-Verbindungen) | Relationship Intelligence | Bei Seitenladen |
| Opportunities fuer Account | Pipeline Service | Real-time |
| Account-KPIs (Umsatz, Berater) | Financial + Workforce Service | Bei Seitenladen |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **Warm-Path-Erkennung** | KI identifiziert bestehende Verbindungen zwischen internen Beratern und Stakeholdern (gemeinsame Events, Projekte, LinkedIn). |
| **Account-Brief** | "Account-Brief generieren" → KI erstellt Account-Zusammenfassung mit Beziehungsstaerken, offenen Opportunities, empfohlenen naechsten Schritten. |
| **Stakeholder-Enrichment** | KI reichert Stakeholder-Profile automatisch an (Rolle, LinkedIn, letzte Pressemeldungen). |
| **Beziehungsstaerke-Score** | Jede Warm-Path-Verbindung hat einen Staerke-Score (1-5 Sterne). KI berechnet basierend auf Haeufigkeit + Aktualitaet. |

---

## 7. Preview Panel Integration

- **Kontakt-Hover:** Hover auf Stakeholder-Node in der Map zeigt Tooltip (DS 6.10, 280x200px): Name, Rolle, DSGVO-Status, letzte Interaktion, Beziehungsstaerke.
- **Opportunity-Preview:** Hover auf Opportunity-Card zeigt Tooltip: Wert, Phase, Team.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Beziehungs-Warnung** | "Kein Kontakt zu Max Mueller (CTO) seit 90 Tagen. Outreach empfohlen." |
| **Account-Potenzial** | "RetailCorp hat 3 ungenuetzte Service-Bereiche. Cross-Selling-Potenzial: ~200K." |
| **Event-Empfehlung** | "RetailCorp CTO spricht auf SAP-Konferenz am 15.04. [Event anlegen]" |

---

## 9. Interaktions-Flows

### Flow 1: Katrin prueft Account vor Outreach
```
Signal Feed → Klick "RetailCorp" → Account Plan oeffnet →
Map-Tab: Stakeholder-Struktur sichtbar →
Warm Path: "Katrin → Max M. (CTO) via Event 2025" →
Klick auf Max M. → Kontakt-Detail Slide-Over →
DSGVO: ✅ Opted-In → "Outreach planen"
```

### Flow 2: Thomas reviewed Key Accounts
```
Sidebar "Kunden" → Account-Liste sortiert nach Umsatz →
RetailCorp (1,2M) → Account Plan → Context Rail: KPIs →
Tab "Opportunities": 3 aktive Opps → Tab "Notizen" →
Thomas fuegt strategische Notiz hinzu → Speichern
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Signal Feed | Account Plan | Firmenname Klick |
| **Von:** Opportunity Detail | Account Plan | Firmenname Klick |
| **Von:** Sidebar | Account Plan | "Kunden" → Account-Liste |
| **Zu:** Opportunity Detail | `deal/opportunity-detail.md` | Opportunity-Card Klick |
| **Zu:** Outreach Editor | `deal/outreach-editor.md` | "Outreach planen" |
| **Zu:** Warm Path Detail | `foundation/warm-path-relationship-detail.md` | Warm-Path-Link Klick |
| **Zu:** Signal Feed (gefiltert) | `growth/signal-feed.md` | "Signale fuer RetailCorp" |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board Item #7:** Account-Plan | Account-Ansicht mit Stakeholder-Infos. |
| **Stitch Board Item #8:** Stakeholder-Map | Visuelle Beziehungs-Map. |
| **Figma:** Frames vorhanden | Account + Map importiert. |

---

## 12. Akzeptanzkriterien

- [ ] 2/3 + 1/3 Layout mit Map und Context Rail
- [ ] Stakeholder-Map mit Nodes (Kontakte) und Edges (Beziehungen)
- [ ] DSGVO-Status visuell auf jedem Node (Emoji + Farbe)
- [ ] Warm Paths im Context Rail mit Beziehungsstaerke
- [ ] 5 Tabs: Map, Kontakte, Opportunities, Notizen, Historie
- [ ] Account-KPIs im Context Rail
- [ ] "Account-Brief generieren" mit KI
- [ ] Kontakt-Tooltip bei Hover auf Map-Node
- [ ] Responsive: Kontakte-Tab als Fallback auf Mobile (keine Map)
- [ ] Accessibility: Map als aria-described Liste, Nodes tabbbar

---

## 13. Offene Fragen

1. **Map-Rendering:** SVG oder Canvas fuer die Stakeholder-Map? *Empfehlung: SVG fuer Accessibility und Interaktivitaet.*
2. **LinkedIn-Integration:** Automatisches Enrichment via LinkedIn? *Empfehlung: Phase 2 (Datenschutz-Pruefung erforderlich).*
3. **Hierarchie-Tiefe:** Wie viele Ebenen der Org-Struktur? *Empfehlung: Max 3 Ebenen in der Map.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
