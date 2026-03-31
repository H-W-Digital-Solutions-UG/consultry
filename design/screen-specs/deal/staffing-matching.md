# Staffing & Matching — Screen Spec

**Screen-ID:** DEAL-03
**PRD-Modul:** 10.2 — Staffing & Matching Engine
**Journey(s):** J1-S4 (Katrin matcht Berater), J2-S1 bis J2-S4 (Thomas/Stefan Staffing)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Katrin (BD-Leiterin) — Team-Zusammenstellung fuer Opportunities |
| **Sekundaer** | Thomas (Team-Freigabe), Stefan (Verfuegbarkeits-Bestaetigung), Lisa (Staffing-Anfrage erhalten) |
| **Frequenz** | Katrin: 3-5x/Tag. Thomas: 1-2x/Tag (Review). |
| **Trigger** | Opportunity Detail → "Matching starten", Staffing-Notification, Direct Navigation via Sidebar. |
| **Herkunft** | Opportunity Detail (primaer), Sidebar "Deal → Staffing", Notification Center. |
| **Ziel** | KI-Matching ausfuehren, Ergebnisse bewerten, Team zusammenstellen, Staffing-Anfragen versenden, Team zur Freigabe weiterleiten. |
| **Geraete** | Desktop (primaer), Tablet. |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Katrin | die besten Berater fuer eine Opportunity automatisch gematcht bekommen | ich nicht manuell alle Profile durchsuchen muss |
| 2 | Katrin | den Score-Breakdown pro Berater sehen (Skills, Verfuegbarkeit, Branche, Team-Fit) | ich die beste Entscheidung treffen kann |
| 3 | Katrin | ein Team aus 2-4 Beratern zusammenstellen und den Team-Score sehen | ich die Gesamtqualitaet bewerte |
| 4 | Katrin | alternative Team-Varianten vergleichen (Standard vs. Premium) | Thomas eine Auswahl anbieten kann |
| 5 | Stefan | eine Staffing-Anfrage erhalten und meine Verfuegbarkeit bestaetigen | ich schnell antworten kann |
| 6 | Thomas | das vorgeschlagene Team reviewen und freigeben | der Deal voranschreitet |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure (2/3 + 1/3 Asymmetrie)**
**Begruendung:** Matching ist ein Entscheidungs-Workflow: KI-Ergebnisse bewerten → Berater auswaehlen → Team bestaetigen. Die 2/3+1/3 Asymmetrie trennt Matching-Ergebnisse von Opportunity-Kontext und Team-Zusammenfassung.

```
┌─ Sidebar ─┬─ Staffing & Matching ────────────────────────────────────┐
│            │                                                          │
│            │  Breadcrumb: Pipeline > RetailCorp > Staffing            │
│            │                                                          │
│            │  ┌─ Opportunity Context (Compact) ──────────────────┐   │
│            │  │  RetailCorp AG · SAP S/4HANA Migration            │   │
│            │  │  Gefordert: SAP-Migration, Change Mgmt, Retail    │   │
│            │  │  Timeline: Mai-Nov 2026 · Budget: ~500K           │   │
│            │  └──────────────────────────────────────────────────┘   │
│            │                                                          │
│            │  ┌─ Match Results (2/3) ──────┬─ Team (1/3) ────────┐  │
│            │  │                             │                      │  │
│            │  │  5 Berater gefunden         │  Team: 0 Berater    │  │
│            │  │  Sortiert: Score ▾          │  0 Score · DB1: —   │  │
│            │  │                             │                      │  │
│            │  │  ┌─ Match Card (Selected)─┐ │  ┌─ Team Member ──┐ │  │
│            │  │  │  [Av] Markus S.   [94] │ │  │  (leer)        │ │  │
│            │  │  │  Senior SAP Consultant │ │  │                 │ │  │
│            │  │  │  ■■■■■■■■■■ Skills: 96 │ │  └────────────────┘ │  │
│            │  │  │  ■■■■■■■■░░ Verf.: 82  │ │                      │  │
│            │  │  │  ■■■■■■■■■░ Branch: 91 │ │  ┌─ Varianten ────┐ │  │
│            │  │  │  ■■■■■■■■■■ Team:  95  │ │  │  [Standard]     │ │  │
│            │  │  │  Frei: KW18 · 1.450EUR │ │  │  [Premium]      │ │  │
│            │  │  │  ✓ 2x mit Lisa T.      │ │  │  [+ Variante]   │ │  │
│            │  │  │  [+ Zum Team]          │ │  └────────────────┘ │  │
│            │  │  └────────────────────────┘ │                      │  │
│            │  │                             │  [Team bestaetigen]  │  │
│            │  │  ┌─ Match Card ──────────┐ │  [Freigabe anfragen] │  │
│            │  │  │  [Av] Lisa T.    [78] │ │                      │  │
│            │  │  │  Change Management    │ │                      │  │
│            │  │  │  ■■■■■■■░░░ Sk: 74   │ │                      │  │
│            │  │  │  ■■■■■■■■■░ Ve: 88   │ │                      │  │
│            │  │  │  [+ Zum Team]          │ │                      │  │
│            │  │  └────────────────────────┘ │                      │  │
│            │  │                             │                      │  │
│            │  └─────────────────────────────┴──────────────────────┘  │
│            │                                                          │
└────────────┴──────────────────────────────────────────────────────────┘
```

**Score Bars:** Farbcodiert nach DS Score Tokens (3.1). 60-79: `brand-warm`, 80-100: `score-excellent`. Dark text (DS Score Badge Rule).

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | 2/3 Match Results + 1/3 Team Panel. |
| `breakpoint-lg` | 2/3 + 1/3, Match Cards kompakter. |
| `breakpoint-md` | Single Column. Team Panel als sticky Bottom Bar (56px: "Team: 2 Berater · [Anzeigen]"). |
| `breakpoint-sm` | Mobile: Match Cards als Stack. Team als Bottom Sheet. Mobile Staffing Card (`mobile/mobile-staffing-card.md`). |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Opportunity-Kontext (Anforderungen, Budget, Timeline) | Pipeline Service | Bei Seitenladen |
| Match-Ergebnisse (Berater, Scores, Dimensionen) | AI Matching Service | Bei "Matching starten" (3-5 Sek Berechnung) |
| Berater-Verfuegbarkeit (KW, Auslastung) | Workforce Service | Real-time |
| Berater-Profil (Skills, Erfahrung, Tagessatz) | Consultant Service | Bei Seitenladen |
| Team-Historie (fruehe Zusammenarbeiten) | Project Service | Bei Seitenladen |
| DB1-Kalkulation (Deckungsbeitrag) | Financial Service | Bei Team-Aenderung |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Command Bar** (Katrin) — schnelle Filter + Sortierung. |
| **Matching-Algorithmus** | Multi-dimensionaler Score: Skills (40%), Verfuegbarkeit (25%), Branche (20%), Team-Fit (15%). Gewichtung konfigurierbar. |
| **Score-Breakdown** | 4 Score Bars pro Berater (DS 6.3). Jede Bar klickbar fuer Detail: "Skills 96/100 — SAP S/4HANA (Expert), Change Management (Advanced), Retail (3 Projekte)". |
| **Team-Fit-Erklaerung** | "Team-Fit 95: Markus und Lisa haben 2x erfolgreich zusammengearbeitet (2024, 2025). Komplementaere Skills." |
| **Team-Varianten** | KI schlaegt automatisch 2 Varianten vor: "Standard" (Preis-optimiert) und "Premium" (Score-optimiert). Katrin kann eigene erstellen. |
| **DB1-Live-Kalkulation** | Team-Panel zeigt live: Ø Tagessatz, Gesamt-DB1, Marge. Aktualisiert bei jeder Berater-Aenderung. |

---

## 7. Preview Panel Integration

- **Berater-Hover:** Hover auf Match Card zeigt Tooltip-Preview (DS 6.10, 320x240px): Foto, Top-5-Skills, letzte 3 Projekte, Verfuegbarkeits-Kalender (Mini).
- **Berater-Klick:** Klick auf Berater-Name oeffnet Consultant Profile View im Slide-Over (480px).
- **CV-Preview:** Im Slide-Over: Inline CV-Preview (DS 6.10, Variante "Inline").

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Auto-Match bei Opportunity-Erstellung** | KI startet Matching automatisch im Hintergrund wenn eine neue Opportunity erstellt wird. Ergebnisse sind verfuegbar wenn der Nutzer "Matching" oeffnet. |
| **"Du wirst wahrscheinlich..."** | "Du wirst wahrscheinlich Stefan fuer KW 18 anfragen → [Verfuegbarkeit pruefen]". |
| **Verfuegbarkeits-Warnung** | "Markus S. ist in KW 20-21 bereits zu 80% ausgelastet. Puffer einplanen." |
| **Alternative Vorschlaege** | Wenn Top-Match nicht verfuegbar: "Alternative: Tim K. (Score 82, verfuegbar ab KW 17)". |

---

## 9. Interaktions-Flows

### Flow 1: KI-Matching (Katrin)
```
Opportunity Detail → "Matching starten" → Staffing Screen oeffnet →
Shimmer-Loading (3-5 Sek) → 5 Match Results erscheinen →
Katrin bewertet Markus [94] → Score-Breakdown pruefen →
"Zum Team hinzufuegen" → Team Panel aktualisiert →
Lisa [78] hinzufuegen → Team: 2, Ø Score: 86, DB1: 28%
```

### Flow 2: Team-Varianten vergleichen
```
KI hat "Standard" und "Premium" berechnet →
Katrin wechselt zu "Premium" → andere Berater, hoeherer Score →
Vergleich: Standard DB1 32% vs. Premium DB1 25% →
Katrin waehlt "Standard" → "Freigabe anfragen"
```

### Flow 3: Stefan erhaelt Staffing-Anfrage
```
Notification: "Staffing-Anfrage: RetailCorp, KW 18-44" →
Stefan oeffnet → Mobile Staffing Card →
"Verfuegbarkeit: Frei ab KW 18" → [Bestaetigen] →
Katrin erhaelt Notification: "Stefan hat bestaetigt"
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Opportunity Detail | Staffing & Matching | "Matching starten" |
| **Von:** Sidebar | Staffing & Matching | "Deal → Staffing" |
| **Zu:** Consultant Profile | `foundation/consultant-profile-view.md` | Klick auf Berater-Name |
| **Zu:** Opportunity Detail | `deal/opportunity-detail.md` | Breadcrumb-Navigation |
| **Zu:** Angebots-Canvas | `ai-experience/angebots-canvas.md` | "Angebot erstellen" (nach Team-Bestaetigung) |
| **Zu:** Team Availability | `foundation/team-availability-dashboard.md` | "Verfuegbarkeit pruefen" |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board Item #5:** Matching-Ergebnisse | Score-Breakdown, Match Cards. Detailansicht. |
| **Stitch Board Item #6:** Team-Zusammenstellung | Team-Panel mit Berater-Auswahl. |
| **Figma:** Frames vorhanden | Matching + Team importiert (Dark Theme, Anpassung noetig). |

---

## 12. Akzeptanzkriterien

- [ ] Opportunity-Kontext-Banner oben (Firma, Anforderungen, Budget, Timeline)
- [ ] Match Results: 5+ Berater mit 4-dimensionalem Score-Breakdown
- [ ] Score Bars farbcodiert nach DS Score Tokens
- [ ] "Zum Team hinzufuegen" bewegt Berater ins Team Panel
- [ ] Team Panel: Ø Score, Gesamt-DB1, Marge (Live-Update)
- [ ] Team-Varianten: Standard + Premium + Custom
- [ ] Berater-Hover: Tooltip-Preview mit Skills + Verfuegbarkeit
- [ ] "Freigabe anfragen" sendet Notification an Thomas
- [ ] Staffing-Anfrage an Berater: Notification + Mobile Card
- [ ] Responsive: Bottom Bar auf Tablet, Bottom Sheet auf Mobile
- [ ] Accessibility: Score Bars als aria-valuenow, Berater-Cards navigierbar

---

## 13. Offene Fragen

1. **Matching-Gewichtung:** Sind die Default-Gewichte (40/25/20/15) konfigurierbar pro Beratung? *Empfehlung: Ja, in Admin Panel.*
2. **Externe Berater:** Werden Sub-Unternehmer/Freelancer gematcht? *Empfehlung: Phase 2 (separater Pool).*
3. **Konflikt-Pruefung:** Prueft das System Berater-Konflikte (gleicher Kunde, Konkurrenz)? *Empfehlung: Ja, als Warning Badge auf Match Card.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
