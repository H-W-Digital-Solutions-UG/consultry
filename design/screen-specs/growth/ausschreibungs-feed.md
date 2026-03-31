# Ausschreibungs-Feed — Screen Spec

**Screen-ID:** GRW-03
**PRD-Modul:** 9.1 — Signal Engine
**Journey(s):** J15-S1 (Katrin prueft oeffentliche Ausschreibungen)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Katrin (BD-Leiterin) — taeglich Ausschreibungen pruefen, passende identifizieren |
| **Sekundaer** | Thomas (strategische Ausschreibungen reviewen, Go/No-Go Entscheidung) |
| **Frequenz** | Katrin: 5-10x/Tag. Thomas: 1-2x/Tag (Hochpreis-Ausschreibungen). |
| **Trigger** | Sidebar "Growth → Ausschreibungen", Notification "Neue Ausschreibung", Discovery Dashboard Heatmap-Klick (Typ=Ausschreibung), Signal Feed Filter "Ausschreibung". |
| **Herkunft** | Signal Feed, Discovery Dashboard, Notification Center, Sidebar. |
| **Ziel** | Ausschreibungen scannen (L0), Match-Score bewerten (L1), Opportunity erstellen / Team zusammenstellen (L2). |
| **Geraete** | Desktop (primaer). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Katrin | oeffentliche Ausschreibungen nach Match-Score sortiert sehen | ich die besten Chancen zuerst bearbeite |
| 2 | Katrin | den KI-Match gegen unsere Faehigkeiten und bisherige Projekte sehen | ich die Erfolgswahrscheinlichkeit einschaetze |
| 3 | Katrin | nach Branche, Volumen, Deadline und Match-Score filtern | ich meinen Feed einschraenke |
| 4 | Katrin | mit einem Klick eine Opportunity erstellen | ich den Deal-Prozess starte |
| 5 | Katrin | direkt ein Team zusammenstellen lassen | ich die Angebotsphase beschleunige |
| 6 | Katrin | irrelevante Ausschreibungen ignorieren | mein Feed sauber bleibt |
| 7 | Thomas | nur Ausschreibungen ab 100K sehen | ich strategische Entscheidungen treffe |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure**
**Begruendung:** Ausschreibungs-Feed ist eine priorisierte, chronologische Liste. Der Nutzer scannt L0-Rows (Titel + Score + Frist), oeffnet interessante als L1-Cards (Details + Match-Analyse), und taucht per Slide-Over in L2-Details ein. Identisch zur Signal Feed Struktur, spezialisiert auf Ausschreibungen.

```
┌─ Sidebar ─┬─ Ausschreibungs-Feed ───────────────────────────────────────┐
│            │                                                              │
│  Growth    │  Ausschreibungen                         [🔍 Suche] [🎤]   │
│  > Ausschr.│                                                              │
│            │  ┌─ Filter Bar ──────────────────────────────────────────┐  │
│            │  │ [Branche ▾] [Volumen ▾] [Deadline ▾] [Match >= __]   │  │
│            │  │ Aktive Filter: Branche: Public Sector ×               │  │
│            │  └──────────────────────────────────────────────────────┘  │
│            │                                                              │
│            │  12 Ausschreibungen · 3 neue seit gestern                   │
│            │                                                              │
│            │  ┌─ Ausschreibungs-Card (L0→L1) ────────────────────────┐  │
│            │  │ 📋 NIS2-Readiness Assessment                         │  │
│            │  │ ┃ Bundesamt fuer Sicherheit in der IT         [82]    │  │
│            │  │ ┃ Volumen: 180K EUR · Frist: 15.04.2026              │  │
│            │  │ ┃ ⚠️ Frist in 15 Tagen                               │  │
│            │  │ ┃                                                     │  │
│            │  │ ┃ KI-Match-Analyse:                                   │  │
│            │  │ ┃ ✅ NIS2-Expertise: 3 Berater verfuegbar            │  │
│            │  │ ┃ ✅ Referenzprojekt: BSI-Audit 2025                 │  │
│            │  │ ┃ ⚠️ Zertifizierung: ISO 27001 fehlt bei 1 Berater   │  │
│            │  │ ┃                                                     │  │
│            │  │ ┃ [Opportunity erstellen] [Team zusammenstellen]      │  │
│            │  │ ┃ [Ignorieren]                      [→ Details]       │  │
│            │  └──────────────────────────────────────────────────────┘  │
│            │                                                              │
│            │  ┌─ Ausschreibungs-Card (L0→L1) ────────────────────────┐  │
│            │  │ 📋 SAP S/4HANA Migration Beratung                    │  │
│            │  │ ┃ Deutsche Bahn AG                             [74]   │  │
│            │  │ ┃ Volumen: 450K EUR · Frist: 30.04.2026              │  │
│            │  │ ┃                                                     │  │
│            │  │ ┃ KI-Match-Analyse:                                   │  │
│            │  │ ┃ ✅ SAP-Expertise: 5 Berater verfuegbar             │  │
│            │  │ ┃ ⚠️ Kapazitaet: 2 von 5 aktuell gebunden           │  │
│            │  │ ┃                                                     │  │
│            │  │ ┃ [Opportunity erstellen] [Team zusammenstellen]      │  │
│            │  │ ┃ [Ignorieren]                      [→ Details]       │  │
│            │  └──────────────────────────────────────────────────────┘  │
│            │                                                              │
│            │  ... (weitere Cards, scrollbar)                              │
│            │                                                              │
│            │  [Weitere laden]                                             │
│            │                                                              │
└────────────┴──────────────────────────────────────────────────────────────┘
```

**Card Left-Border Farbe:** `semantic-warning` (Gold) — konsistent mit Signal Feed Ausschreibungs-Typ.

**Deadline-Urgency-Indikatoren:**
- Frist > 14 Tage: `neutral-600` Text
- Frist 7-14 Tage: `semantic-warning` Badge "Frist in X Tagen"
- Frist < 7 Tage: `semantic-danger` Badge "Frist in X Tagen!"
- Frist abgelaufen: `semantic-danger` Badge "Abgelaufen", Card ausgegraut

**Match-Score Badge (DS `score-displays`):**
- Score in `mono-md`, Farbe nach Score-Skala (`score-excellent`, `score-good`, `score-moderate`, `score-weak`, `score-poor`)
- Tooltip auf Badge: Detail-Breakdown (z.B. "82/100 — Skill-Match (+35), Referenzen (+25), Kapazitaet (+12), Branche (+10)")

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Feed max-width 840px, zentriert. Filter Bar sticky. |
| `breakpoint-lg` | Feed volle Breite. |
| `breakpoint-md` | Feed volle Breite. Filter als Chips, horizontal scrollbar. KI-Match-Analyse collapsed by default (Tap zum Oeffnen). |
| `breakpoint-sm` | Mobile Stack. Cards kompakter (L0 only: Titel + Score + Frist). Tap fuer L1. Pull-to-Refresh. Bottom Nav sichtbar. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Ausschreibungs-Liste (Titel, Auftraggeber, Volumen, Frist, Quelle) | Tender Detection Service (TED, Bund.de, evtl. Ariba) | Polling alle 4h, Push bei neuen Matches |
| Match-Score (Gesamtscore + Breakdown) | AI Matching Service | Bei Erkennung, Refresh bei Profil-Aenderungen |
| KI-Match-Analyse (Skill-Abgleich, Referenzen, Kapazitaet) | AI Matching Service | Bei L1-Oeffnung |
| Berater-Verfuegbarkeit | Workforce Service | Real-time |
| Referenzprojekte (fuer Matching) | Knowledge Service | Bei Seitenladen |
| Filter-Optionen (Branchen, Volumen-Ranges) | Aggregation Service | Bei Seitenladen |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Inline AI Analysis** — KI-Match-Analyse direkt in jeder Ausschreibungs-Card. |
| **Requirement Matching** | KI vergleicht Ausschreibungs-Anforderungen gegen: (1) Berater-Skills im Skill Graph, (2) abgeschlossene Projekte, (3) Zertifizierungen, (4) aktuelle Kapazitaet. |
| **Match-Score** | KI-generierter Score (0-100) mit Breakdown: Skill-Match, Referenzen, Kapazitaet, Branchenerfahrung. |
| **Gap-Erkennung** | KI identifiziert fehlende Anforderungen: "ISO 27001 fehlt bei 1 Berater" mit Loesung: "Zertifizierung buchbar bis Projektstart." |
| **Team-Vorschlag** | "Team zusammenstellen" generiert KI-optimierten Teamvorschlag basierend auf Score + Verfuegbarkeit. |
| **Duplikat-Erkennung** | KI erkennt Ausschreibungen, die bereits als Opportunity existieren: "Diese Ausschreibung ist vermutlich identisch mit Opportunity #2847." |

---

## 7. Preview Panel Integration

- **Ausschreibungs-Detail Slide-Over:** Klick auf "Details" oeffnet Slide-Over (480px) mit:
  - Vollstaendiger Ausschreibungstext (KI-zusammengefasst)
  - Anforderungs-Checkliste (KI-extrahiert, mit Match-Status pro Anforderung)
  - Auftraggeber-Profil (Preview Panel Inline: Logo, Branche, bisherige Zusammenarbeit)
  - Vorgeschlagenes Team mit Match-Scores
  - Aktionen: Opportunity erstellen, Team zusammenstellen, Ignorieren
- **Hover-Preview (Desktop):** Hover auf Ausschreibungs-Card zeigt Tooltip (DS 6.10, 320x200px) mit Kurzinfo: Titel, Auftraggeber, Volumen, Frist, Top-Match-Grund.

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Frist-Warnung** | Ausschreibungen mit Frist < 7 Tage: `semantic-danger` Badge, Card Position priorisiert. |
| **Erfolgs-Prognose** | "Basierend auf aehnlichen Ausschreibungen: 68% Zuschlagswahrscheinlichkeit bei Abgabe innerhalb von 5 Tagen." |
| **Wiederholungs-Erkennung** | "Aehnliche Ausschreibung wurde Q3/2025 gewonnen. Referenzmaterial verfuegbar." |
| **Kapazitaets-Warnung** | "Fuer 3 der Top-5 Ausschreibungen werden SAP-Berater benoetigt. Nur 2 verfuegbar — Recruiting empfohlen." |

---

## 9. Interaktions-Flows

### Flow 1: Morgen-Scan (Katrin, 5 Min)
```
Katrin oeffnet Ausschreibungs-Feed → Filter: Match >= 70 →
Scannt 4 Top-Ausschreibungen (L0: Titel + Score + Frist) →
Klickt BfS NIS2 [82] → Card expandiert (L1) →
Liest KI-Match-Analyse → Klickt "Opportunity erstellen" →
Opportunity Intake oeffnet mit vorausgefuellten Daten
```

### Flow 2: Team zusammenstellen
```
Katrin sieht DB SAP-Migration [74] → Klickt "Team zusammenstellen" →
Staffing & Matching Screen oeffnet → KI zeigt 5 Berater →
Katrin waehlt 3 aus → Zurueck zum Feed
```

### Flow 3: Ausschreibung ignorieren
```
Katrin sieht irrelevante Ausschreibung → Klickt "Ignorieren" →
Confirmation Dialog: "Ausschreibung ignorieren? Sie wird nicht mehr angezeigt." →
Bestaetigt → Card verschwindet mit Fade → Undo-Toast
```

### Flow 4: Strategischer Review (Thomas)
```
Thomas filtert: Volumen >= 200K → 3 Ausschreibungen →
Klickt DB SAP-Migration [74] → "Details" Slide-Over →
Liest vollstaendige Analyse → Entscheidet: Go →
"Opportunity erstellen" → Weist Katrin zu
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Discovery Dashboard | Ausschreibungs-Feed | Heatmap-Klick (Typ=Ausschreibung) |
| **Von:** Signal Feed | Ausschreibungs-Feed | Filter Typ="Ausschreibung" |
| **Von:** Notification | Ausschreibungs-Feed | "Neue Ausschreibung" Notification Klick |
| **Zu:** Opportunity Intake | `deal/opportunity-intake.md` | "Opportunity erstellen" (vorausgefuellt) |
| **Zu:** Staffing & Matching | `deal/staffing-matching.md` | "Team zusammenstellen" |
| **Zu:** Opportunity Detail | `deal/opportunity-detail.md` | Klick auf existierende Opportunity |
| **Zu:** Account Plan | `foundation/account-plan-stakeholder-map.md` | Klick auf Auftraggeber-Name |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board Item:** Ausschreibungs-Feed | Noch nicht erstellt. |
| **Figma:** Kein Frame vorhanden | Erstanlage erforderlich. Basiert auf Signal Feed Layout, Light Theme. |

---

## 12. Akzeptanzkriterien

- [ ] Ausschreibungs-Liste sortiert nach KI-Match-Score (default), alternativ nach Deadline oder Volumen
- [ ] Filter Bar: Branche, Volumen, Deadline, Match-Score-Schwelle
- [ ] Cards mit `semantic-warning` Left-Border (konsistent mit Signal Feed)
- [ ] Match-Score Badge mit Tooltip-Breakdown
- [ ] KI-Match-Analyse: Skill-Abgleich, Referenzen, Kapazitaet, Gaps
- [ ] Deadline-Urgency-Indikatoren (3 Stufen + abgelaufen)
- [ ] Quick Actions: "Opportunity erstellen", "Team zusammenstellen", "Ignorieren"
- [ ] Slide-Over Detail mit vollstaendigem Ausschreibungstext und Team-Vorschlag
- [ ] Ignorieren mit Confirmation Dialog und Undo-Toast
- [ ] Real-time Updates bei neuen Ausschreibungen
- [ ] Responsive: Mobile Stack mit kompakten L0-Cards
- [ ] Accessibility: role="feed", aria-label pro Card, Keyboard-navigierbar

---

## 13. Offene Fragen

1. **Ausschreibungs-Quellen:** Welche Quellen in Phase 1? *Empfehlung: TED (EU), Bund.de (DE), evtl. SAP Ariba.*
2. **Volumen-Schwelle:** Ab welchem Volumen werden Ausschreibungen angezeigt? *Empfehlung: ab 50K EUR.*
3. **Aufbewahrung:** Wie lange bleiben abgelaufene Ausschreibungen sichtbar? *Empfehlung: 7 Tage nach Frist, dann automatisch archiviert.*
4. **Benachrichtigungs-Regeln:** Wann wird eine Push-Notification gesendet? *Empfehlung: Match-Score >= 70 und Frist > 7 Tage.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
