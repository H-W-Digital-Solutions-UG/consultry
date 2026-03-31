# Warm Path & Relationship Detail — Screen Spec

**Screen-ID:** FND-07
**PRD-Modul:** 8.1 — Consultant Intelligence, 8.3 — Account Intelligence
**Journey(s):** J1-S3 (Katrin qualifiziert Opportunity via Beziehungspfad), J7-S1 (Katrin verwaltet Account-Beziehungen)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Katrin (BD-Leiterin) — Beziehungspfade zu Ziel-Kontakten identifizieren und nutzen |
| **Sekundaer** | Thomas (Account-Review: Beziehungsstaerken pruefen), Stefan (eigene Verbindungen sehen) |
| **Frequenz** | Katrin: 2-5x/Tag (vor Outreach, bei Account-Planung). Thomas: 1-2x/Woche (Account-Review). |
| **Trigger** | Account Plan → Warm-Path-Link klicken, Engagement Brief → "Beziehungspfad anzeigen", Opportunity Detail → Kontakt-Name klicken, Command Bar → "Beziehung zu [Person]". |
| **Herkunft** | Account Plan & Stakeholder Map (`foundation/account-plan-stakeholder-map.md`), Engagement Brief Canvas (`ai-experience/engagement-brief-canvas.md`), Opportunity Detail (`deal/opportunity-detail.md`). |
| **Ziel** | Verbindungspfad zwischen internem Team und Ziel-Kontakt verstehen, Beziehungsstaerke bewerten, Intro anfragen oder Kontakt aufnehmen. |
| **Geraete** | Desktop (primaer). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Katrin | den kuerzesten Verbindungspfad zu einem Ziel-Kontakt sehen | ich den besten Zugang waehle |
| 2 | Katrin | die Verbindungsstaerke (1./2./3. Grad) auf einen Blick erkennen | ich die Qualitaet der Beziehung einschaetze |
| 3 | Katrin | die Kontakt-Historie sehen (letzte Interaktion, Typ) | ich weiss, wie aktuell die Beziehung ist |
| 4 | Katrin | eine Intro ueber einen Kollegen anfragen | ich einen warmen Zugang nutze statt Kaltakquise |
| 5 | Thomas | wissen, wer im Team die beste Verbindung zu einem CTO hat | ich die richtige Person fuer den Erstkontakt einsetze |
| 6 | Katrin | die Datenquelle jeder Beziehungsinformation sehen | ich die Zuverlaessigkeit einschaetzen kann |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure (Slide-Over Panel, 640px)**
**Begruendung:** Warm Path Detail ist eine L2-Detail-Ansicht (DS 1.2), die aus einem bestehenden Screen (Account Plan, Opportunity Detail) geoeffnet wird. Ein Slide-Over Panel haelt den Herkunfts-Kontext sichtbar. Progressive Disclosure innerhalb des Panels: Beziehungsgraph oben (Scan), Details unten (bei Bedarf).

```
┌─ Herkunfts-Screen (Account Plan / Opp Detail) ──┬─ Slide-Over (640px) ───┐
│                                                   │                        │
│  (Herkunfts-Screen bleibt sichtbar,               │  Beziehungspfad   [X]  │
│   Overlay neutral-900 at 30%)                     │  zu Max Mueller (CTO)  │
│                                                   │  RetailCorp AG         │
│                                                   │                        │
│                                                   │  ── Verbindungsgraph ──│
│                                                   │                        │
│                                                   │  ┌────────────────┐   │
│                                                   │  │                 │   │
│                                                   │  │  [Stefan K.]    │   │
│                                                   │  │  Sr. Consultant │   │
│                                                   │  │       │         │   │
│                                                   │  │       │ 2. Grad │   │
│                                                   │  │       ▼         │   │
│                                                   │  │  [Dr. Thomas H.]│   │
│                                                   │  │  Ex-CIO TechAG  │   │
│                                                   │  │  LinkedIn-Kont. │   │
│                                                   │  │       │         │   │
│                                                   │  │       │ 1. Grad │   │
│                                                   │  │       ▼         │   │
│                                                   │  │  [Max Mueller]  │   │
│                                                   │  │  CTO RetailCorp │   │
│                                                   │  │                 │   │
│                                                   │  └────────────────┘   │
│                                                   │                        │
│                                                   │  Verbindungsstaerke:   │
│                                                   │  ●●○ 2. Grad          │
│                                                   │  via LinkedIn +        │
│                                                   │  gemeinsames Projekt   │
│                                                   │  2024                  │
│                                                   │                        │
│                                                   │  ── KI-Bewertung ──── │
│                                                   │                        │
│                                                   │  ┌─ ai-surface ─────┐ │
│                                                   │  │ ✨ Stefan hat den │ │
│                                                   │  │ staerksten Pfad   │ │
│                                                   │  │ zum CTO (2. Grad  │ │
│                                                   │  │ via LinkedIn,     │ │
│                                                   │  │ gemeinsames       │ │
│                                                   │  │ Projekt 2024).    │ │
│                                                   │  │                   │ │
│                                                   │  │ Alternativ:       │ │
│                                                   │  │ Katrin → Event    │ │
│                                                   │  │ 2025 (3. Grad,    │ │
│                                                   │  │ schwaecher)       │ │
│                                                   │  └───────────────────┘ │
│                                                   │                        │
│                                                   │  ── Kontakt-Details ── │
│                                                   │                        │
│                                                   │  Max Mueller           │
│                                                   │  CTO · RetailCorp AG   │
│                                                   │  LinkedIn: ✓ verbunden │
│                                                   │  Letzter Kontakt:      │
│                                                   │  15.01.2026 (LinkedIn  │
│                                                   │  Message)              │
│                                                   │  DSGVO: ✅ Opted-In    │
│                                                   │                        │
│                                                   │  ── Kontakt-Historie ──│
│                                                   │                        │
│                                                   │  ┌─ Timeline ────────┐│
│                                                   │  │ 15.01.26 LinkedIn  ││
│                                                   │  │   Message (Stefan) ││
│                                                   │  │ 08.11.25 Event     ││
│                                                   │  │   SAP-Konferenz    ││
│                                                   │  │   (Katrin)         ││
│                                                   │  │ 22.06.24 Projekt   ││
│                                                   │  │   TechAG Migration ││
│                                                   │  │   (Stefan, 6 Mon.) ││
│                                                   │  └───────────────────┘│
│                                                   │                        │
│                                                   │  ── Quellen-Zuordnung ─│
│                                                   │                        │
│                                                   │  📋 LinkedIn (autom.)  │
│                                                   │  📋 CRM (manuell)      │
│                                                   │  📋 Projekt-DB         │
│                                                   │                        │
│                                                   │  ── Aktionen ──────── │
│                                                   │                        │
│                                                   │  [Intro anfragen]      │
│                                                   │  [Kontakt aufnehmen]   │
│                                                   │  [Im Account Plan      │
│                                                   │   anzeigen]            │
│                                                   │                        │
└───────────────────────────────────────────────────┴────────────────────────┘
```

**Verbindungsgraph:** Vereinfachte vertikale Darstellung (Person A → Vermittler → Person B). Nodes als kompakte Cards mit Avatar, Name, Rolle. Kanten mit Grad-Label (1./2./3. Grad) und Verbindungstyp.

**Verbindungsstaerke-Indikator:** 3 Dots, gefuellt nach Grad:
- ●●● 1. Grad: Direkter Kontakt (gemeinsames Projekt, regelmaessige Kommunikation). `semantic-success`.
- ●●○ 2. Grad: Verbindung ueber einen Vermittler. `semantic-warning`.
- ●○○ 3. Grad: Schwache oder indirekte Verbindung. `neutral-500`.

**KI-Bewertung:** `ai-surface` Hintergrund, `ai-border` links (3px), Sparkle-Icon. Bewertet den staerksten Pfad und zeigt Alternativen.

**Kontakt-Historie:** Timeline-Komponente (DS data-display/timeline). Chronologisch absteigend. Pro Eintrag: Datum, Typ (LinkedIn, Event, Projekt, E-Mail), beteiligte Person.

**Quellen-Zuordnung:** Jede Beziehungsinformation traegt eine Quell-Attribution (`body-sm`, `neutral-600`): LinkedIn (automatisch), CRM (manuell), Projekt-DB, Event-DB.

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Slide-Over 640px. Vollstaendige Darstellung. |
| `breakpoint-lg` | Slide-Over 640px. |
| `breakpoint-md` | Slide-Over 100vw (Fullscreen). Herkunfts-Screen nicht sichtbar. Zurueck-Button statt X. |
| `breakpoint-sm` | Eigene Mobile-Seite (kein Slide-Over). Vereinfachter Graph (nur Text, kein visueller Pfad). Aktionen als Sticky Bottom Bar. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Kontakt-Profil (Name, Rolle, Firma) | CRM Service | Bei Panel-Oeffnung |
| Verbindungspfad (Grad, Vermittler) | Relationship Intelligence Service | Bei Panel-Oeffnung |
| Verbindungsstaerke (Score) | Relationship Intelligence Service | Bei Panel-Oeffnung |
| LinkedIn-Daten (Verbindungsstatus) | LinkedIn Integration Service | Bei Panel-Oeffnung, Cache 24h |
| Kontakt-Historie (Interaktionen) | CRM + Event + Project Service | Bei Panel-Oeffnung |
| KI-Bewertung (Pfad-Analyse) | AI Relationship Service | Bei Panel-Oeffnung |
| DSGVO-Status | Consent Service | Real-time |
| Quellen-Attribution | Relationship Intelligence Service | Bei Panel-Oeffnung |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Insight Engine** — KI analysiert Beziehungsdaten und praesentiert Bewertung. Kein Dialog, sondern vorberechnete Analyse. |
| **Pfad-Bewertung** | KI berechnet den staerksten Pfad basierend auf: Grad (naeher = besser), Aktualitaet (juengster Kontakt), Verbindungstyp (Projekt > Event > LinkedIn), Haeufigkeit. |
| **Alternative Pfade** | KI zeigt bis zu 3 alternative Pfade sortiert nach Staerke. Jeder mit Kurzerklaerung. |
| **Intro-Empfehlung** | "Stefan sollte die Intro machen — er hat den direktesten Kontakt via gemeinsames Projekt." Klick auf "Intro anfragen" oeffnet vorausgefuellte Anfrage an Stefan. |
| **Beziehungs-Warnung** | Wenn letzter Kontakt >90 Tage: "Kein Kontakt seit 90+ Tagen. Beziehung koennte abgekuehlt sein." `semantic-warning` Hinweis. |
| **Enrichment** | KI reichert Kontakt-Profil an: aktuelle Rolle (LinkedIn), letzte Pressemeldungen, relevante Posts. |

---

## 7. Preview Panel Integration

- **Kontakt-Nodes im Graph:** Hover auf einen Node zeigt Tooltip (DS 6.10, 280x180px): Avatar, Name, Rolle, Firma, Verbindungstyp, letzter Kontakt.
- **Timeline-Eintraege:** Hover auf Timeline-Eintrag zeigt Detail-Tooltip: Vollstaendige Beschreibung, beteiligte Personen, Dauer (bei Projekten).

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Beziehungs-Decay-Warnung** | "Letzter Kontakt zu Max Mueller: vor 75 Tagen. Empfehlung: Kontakt auffrischen bevor die Beziehung abkuehlt." `body-xs`, `semantic-warning`. |
| **Event-Opportunity** | "Max Mueller spricht auf der SAP-Konferenz am 15.04. [Event als Kontakt-Anlass nutzen]" — Inline-Hinweis in der KI-Bewertung. |
| **Pfad-Optimierung** | "Wenn Stefan Dr. Thomas H. kontaktiert, verbessert sich der Pfad von 2. auf 1. Grad." |
| **Cross-Account-Erkennung** | "Max Mueller hat auch Verbindungen zu TechAG (weiterer Account). [Account-Plan anzeigen]" |

---

## 9. Interaktions-Flows

### Flow 1: Katrin prueft Warm Path vor Outreach (1 Min)
```
Account Plan RetailCorp → Warm Paths im Context Rail →
Klick "Stefan → Max M. (CTO)" → Slide-Over oeffnet →
Graph: Stefan → Dr. Thomas H. → Max Mueller (2. Grad) →
KI-Bewertung: "Stefan hat den staerksten Pfad" →
Kontakt-Historie: Letzter Kontakt 15.01.2026 →
DSGVO: Opted-In → Katrin klickt "Intro anfragen" →
Intro-Anfrage an Stefan (pre-filled) → Slide-Over bleibt offen
```

### Flow 2: Thomas reviewed Beziehungsstaerke (30 Sek)
```
Account Plan → Warm Path "Katrin → Max M." →
Slide-Over oeffnet → Verbindungsstaerke: ●○○ (3. Grad) →
KI: "Schwache Verbindung — nur Event-Kontakt" →
Alternative: Stefan (2. Grad, staerker) →
Thomas entscheidet: Stefan soll Intro machen
```

### Flow 3: Katrin oeffnet aus Opportunity Detail
```
Opportunity Detail → RetailCorp SAP Migration →
Kontakt: Max Mueller (CTO) → Klick →
Slide-Over oeffnet mit Warm Path Detail →
Katrin sieht Pfad + Historie → "Kontakt aufnehmen" →
Outreach Editor oeffnet mit Kontakt-Kontext
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Account Plan & Stakeholder Map | Warm Path Detail (Slide-Over) | Warm-Path-Link Klick |
| **Von:** Engagement Brief Canvas | Warm Path Detail (Slide-Over) | "Beziehungspfad anzeigen" |
| **Von:** Opportunity Detail | Warm Path Detail (Slide-Over) | Kontakt-Name Klick |
| **Von:** Command Bar | Warm Path Detail (Slide-Over) | "Beziehung zu [Person]" |
| **Zu:** Outreach Editor | `deal/outreach-editor.md` | "Kontakt aufnehmen" |
| **Zu:** Account Plan | `foundation/account-plan-stakeholder-map.md` | "Im Account Plan anzeigen" |
| **Zu:** Consultant Profile View | `foundation/consultant-profile-view.md` | Klick auf internen Berater-Node |
| **Zu:** (Intro-Anfrage) | Notification an Stefan/Kollegen | "Intro anfragen" |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board Item #8:** Stakeholder-Map | Beziehungs-Visualisierung als Referenz. |
| **Figma:** Kein eigener Frame | Zu erstellen. Referenz: Slide-Over Panel Pattern aus Consultant Profile View. |

---

## 12. Akzeptanzkriterien

- [ ] Slide-Over Panel (640px, DS 5.11) mit Overlay (`neutral-900` at 30%)
- [ ] Vereinfachter Beziehungsgraph: Person A → Vermittler → Person B als vertikale Node-Kette
- [ ] Verbindungsstaerke-Indikator: 3 Dots (1./2./3. Grad) mit Farb-Kodierung
- [ ] KI-Bewertung auf `ai-surface` Hintergrund mit Pfad-Analyse und Alternativen
- [ ] Kontakt-Details: Name, Rolle, LinkedIn-Status, letzter Kontakt, DSGVO-Status
- [ ] Kontakt-Historie als Timeline (chronologisch absteigend)
- [ ] Quellen-Attribution pro Beziehungsdatenpunkt (`body-sm`, `neutral-600`)
- [ ] Aktionen: "Intro anfragen" (Primary), "Kontakt aufnehmen" (Secondary)
- [ ] Hover-Tooltips auf Graph-Nodes und Timeline-Eintraegen
- [ ] Beziehungs-Decay-Warnung bei >90 Tagen ohne Kontakt
- [ ] Responsive: Fullscreen auf Tablet, eigene Seite auf Mobile
- [ ] Accessibility: Panel role="dialog", aria-modal, Focus Trap, Nodes tabbbar

---

## 13. Offene Fragen

1. **LinkedIn-Integration Tiefe:** Automatisches Enrichment via LinkedIn API oder nur manueller Import? *Empfehlung: V1 manuell + LinkedIn-Profil-Link. V2 automatisches Enrichment (Datenschutz-Pruefung).*
2. **Graph-Komplexitaet:** Max. Pfad-Laenge (Vermittler-Tiefe)? *Empfehlung: Max 2 Vermittler (3. Grad). Darueber hinaus: "Kein belastbarer Pfad gefunden."*
3. **Intro-Workflow:** Wie wird eine Intro-Anfrage verarbeitet? *Empfehlung: Notification an den Vermittler mit Kontext-Card. Vermittler bestaetigt/lehnt ab.*
4. **Datenquellen-Priorisierung:** Welche Datenquelle hat Vorrang bei Konflikten? *Empfehlung: CRM (manuell) > Projekt-DB > LinkedIn (automatisch).*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
