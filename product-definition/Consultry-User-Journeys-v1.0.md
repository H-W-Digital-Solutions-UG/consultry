# Consultry — User Journeys (Screen-by-Screen)

## Persona-getriebene Flows mit UI-Empfehlungen und Handoff-Points

**Version:** 1.0
**Datum:** 31. März 2026
**Companion:** [Target Personas v1.0](./Consultry-Target-Personas-v1.0.md), [PRD v3.0](./Consultry-PRD-v3.0-Final.md)
**Kontext:** IT-/SAP-Beratung, DACH, 85 Berater
**Design System:** [Consultry Design System](../design/Consultry-Design-System-v1.2.md)
**Stitch Inspiration Board:** [Consultry Board](https://stitch.withgoogle.com/projects/9527822144861630979)

---

## Lesehinweis

Jede Journey definiert:

1. **Trigger & Kontext** — Was löst den Flow aus, wer ist beteiligt
2. **Screen-by-Screen Walkthrough** — Jeder Screen mit Layout, Komponenten, Daten, AI-Interaktion
3. **Persona-Handoffs** — Wo übergibt eine Persona an die nächste
4. **Entscheidungspunkte** — Wo kann der Flow abzweigen
5. **UI-Empfehlungen** — Konkrete Komponenten, Patterns, Design-Token-Referenzen
6. **Fehler- und Abbruchpfade** — Was passiert wenn etwas schiefgeht

Screen-Referenzen folgen dem Format: `[J1-S3]` = Journey 1, Screen 3.

---

# Journey 1: Signal → Opportunity → Angebot → Freigabe → Outreach

**Der wichtigste Flow im ganzen Produkt.** Wenn dieser Flow nicht überzeugt, verliert Consultry Katrin — und ohne Katrin gibt es keinen Umsatz.

**Beteiligte Personas:** Katrin (Primär), Thomas (Freigabe), Stefan (Kontext)
**Dauer:** 3–4 Stunden (mit Consultry) vs. 2–4 Tage (ohne)
**Touchpoints:** Signal-Feed → Opportunity Detail → Engagement-Brief Canvas → Staffing → Angebots-Canvas → Approval → Outreach

---

## Phase A: Signal erkennen (Katrin, Mobile, 07:45)

### [J1-S1] Signal-Feed (Mobile)

**Kontext:** Katrin in der S-Bahn, iPhone, vertikaler Scroll

**Layout:**
```
┌─────────────────────────────────┐
│ ☰  Consultry        🔔 3  👤   │  ← Topbar: Hamburger, Logo, Badge, Avatar
├─────────────────────────────────┤
│                                 │
│  Guten Morgen, Katrin           │  ← Personalisierter Gruß
│  12 neue Signale über Nacht     │  ← Summary-Zeile
│                                 │
├─────────────────────────────────┤
│  SIGNAL #1          Score 94    │  ← Höchster Match zuerst
│  ┌─ 🟠 CTO-Wechsel ──────────┐ │
│  │ RetailCorp AG               │ │  ← Firmenname prominent
│  │ Neuer CTO: Dr. Max Hofer   │ │
│  │ SAP-Hintergrund, ex-Deloitte│ │
│  │                             │ │
│  │ Match: SAP Retail ██████ 94 │ │  ← Visueller Score-Bar
│  │ 🔗 Thomas kennt CFO        │ │  ← Warm-Path-Indikator
│  │                             │ │
│  │ [Als Opportunity anlegen]   │ │  ← Primary CTA, full-width
│  │ [Später] [Irrelevant]       │ │  ← Secondary + Dismiss
│  └─────────────────────────────┘ │
│                                 │
│  SIGNAL #2          Score 78    │
│  ┌─ 🟡 Ausschreibung ────────┐ │
│  │ Bundesagentur für Arbeit    │ │
│  │ SAP-HCM zu SuccessFactors  │ │
│  │ Frist: 15. Mai 2026        │ │
│  │ Match: SAP HCM ████░░░ 78  │ │
│  │ [Details] [Als Opp.] [Skip]│ │
│  └─────────────────────────────┘ │
│                                 │
│  SIGNAL #3          Score 71    │
│  ┌─ 🔵 Hiring-Signal ────────┐ │
│  │ MedTech GmbH                │ │
│  │ Sucht "SAP Technical Arch." │ │
│  │ ...                         │ │
│                                 │
└─────────────────────────────────┘
```

**Komponenten:**
- `SignalCard` — Card mit farbcodiertem Signal-Typ-Badge (🟠 Leadership, 🟡 Ausschreibung, 🔵 Hiring, 🟢 Funding, 🔴 Risk)
- `MatchScoreBar` — Horizontaler Fortschrittsbalken mit Zahl, Farbe nach Score (>80 grün, 60-80 gelb, <60 grau)
- `WarmPathIndicator` — Inline-Chip: "🔗 Thomas kennt CFO" — klickbar, zeigt Beziehungspfad
- `SignalActionBar` — Primary: "Als Opportunity anlegen", Secondary: "Später", Tertiary: "Irrelevant"

**Daten pro Signal-Card:**
- Signal-Typ + Beschreibung
- Firmenname + Kurzkontext
- Composite Match-Score (0–100) gegen eigenes Kompetenzprofil
- Warm-Path-Indikator (falls Beziehung existiert)
- Zeitstempel

**AI-Interaktion:** Keine aktive AI hier — Priorisierung ist vorberechnet (Signal-Agent hat über Nacht gescannt)

**Design-Token:**
- Card Background: `--charcoal` (#111111)
- Card Border: `1px solid rgba(255,255,255,0.08)`
- Card Radius: `--radius-lg` (20px)
- Score >=80: `--consultry-coral` (#FF6A4D)
- Score 60-79: `--warm-gray` (#6E6A6B)
- Primary Button: `--brand-gradient`

**Mobile-Spezifika:**
- Cards full-width, 16px Padding
- Swipe-Left auf Card: "Irrelevant" (Dismiss mit Undo-Toast)
- Swipe-Right auf Card: "Als Opportunity anlegen" (Shortcut)
- Touch-Targets mindestens 48px
- Pull-to-Refresh für neue Signale

**Fehlerfall:**
- Keine Signale: Empty State mit Illustration + "Keine neuen Signale — dein Markt schläft noch. Prüfe deine Signal-Konfiguration."
- API-Fehler: "Signale konnten nicht geladen werden. Letzte Aktualisierung: vor 2 Stunden."

---

### [J1-S2] Signal → Opportunity Conversion (Mobile, 1-Tap)

**Trigger:** Katrin tippt "Als Opportunity anlegen" auf Signal #1 (RetailCorp)

**Verhalten:**
1. Bottom-Sheet slides up (nicht ganzer Screen)
2. Vorausgefüllte Felder aus Signal-Daten
3. Minimal nötige Eingabe

**Layout (Bottom Sheet):**
```
┌─────────────────────────────────┐
│  ── (Drag Handle) ──            │
│                                 │
│  Opportunity anlegen            │  ← Sheet-Title
│                                 │
│  Firma: RetailCorp AG      ✓   │  ← Auto-filled, editable
│  Signal: CTO-Wechsel       ✓   │  ← Auto-linked
│  Geschätztes Volumen: ___K€    │  ← Optional, leer ok
│  Priorität: ⚡Hoch ○Mittel ○Low│  ← Pre-selected based on Score
│  Zugewiesen: Katrin Engel  ✓   │  ← Auto: creator
│                                 │
│  ☑ Engagement-Brief generieren  │  ← Default: checked
│  ☑ @Thomas benachrichtigen      │  ← Default: checked (Warm-Path)
│                                 │
│  [Opportunity erstellen]        │  ← Primary CTA
│  [Abbrechen]                    │
└─────────────────────────────────┘
```

**Verhalten nach Tap "Erstellen":**
- Opportunity wird in Convex angelegt
- Agent-Run für Engagement-Brief wird getriggert
- Toast: "✓ Opportunity RetailCorp erstellt. Brief wird generiert (~3 Min.)"
- Push-Notification an Thomas: "Neue Opportunity: RetailCorp AG — CTO-Wechsel"
- Katrin kehrt zum Signal-Feed zurück

**Handoff-Point → Thomas:** Push-Notification auf seinem iPhone
**Handoff-Point → Engagement-Brief Agent:** Asynchroner Agent-Run gestartet

---

## Phase B: Opportunity qualifizieren (Katrin, Desktop, 08:15)

### [J1-S3] Opportunity Detail mit Engagement-Brief

**Kontext:** Katrin am Schreibtisch, 2 Screens, der Brief ist inzwischen fertig generiert

**Layout (Desktop, Full-Width):**
```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Opportunities / RetailCorp AG         [Cmd+K]  🔔  👤 Katrin     │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────── LEFT (60%) ───────────────────┐ ┌─ RIGHT ───┐ │
│  │                                                   │ │           │ │
│  │  RetailCorp AG                                    │ │ COPILOT   │ │
│  │  SAP S/4HANA Migration · Score 94                 │ │           │ │
│  │  Stage: 🔵 Qualifizierung                         │ │ Aktionen: │ │
│  │  Erstellt: Heute 07:45 · Signal: CTO-Wechsel     │ │           │ │
│  │                                                   │ │ • Brief   │ │
│  │  ┌─ ENGAGEMENT BRIEF ──────────────────────────┐  │ │   öffnen  │ │
│  │  │                                              │  │ │ • Berater │ │
│  │  │  UNTERNEHMENSKONTEXT                         │  │ │   matchen │ │
│  │  │  RetailCorp AG, Einzelhandel, 2.500 MA,     │  │ │ • Wettbe- │ │
│  │  │  Umsatz ~380M€. Legacy SAP ECC seit 2012.   │  │ │   werber  │ │
│  │  │  Neuer CTO Dr. Max Hofer (ex-Deloitte,      │  │ │   analyse │ │
│  │  │  SAP-Spezialist) seit 12. März 2026.        │  │ │ • Angebot │ │
│  │  │                                              │  │ │   starten │ │
│  │  │  IDENTIFIZIERTE BEDARFE                      │  │ │           │ │
│  │  │  • SAP ECC → S/4HANA Migration               │  │ │ ──────── │ │
│  │  │  • Retail-spezifisch: MM, SD, WM             │  │ │           │ │
│  │  │  • Timeline-Druck: ECC Maintenance bis 2027  │  │ │ Fragen:  │ │
│  │  │                                              │  │ │ "Warum   │ │
│  │  │  ENTSCHEIDER & BEZIEHUNGSPFADE               │  │ │  Score   │ │
│  │  │  ┌──────────┬───────────┬─────────────────┐  │  │ │  94?"    │ │
│  │  │  │ Person   │ Rolle     │ Beziehung       │  │  │ │          │ │
│  │  │  ├──────────┼───────────┼─────────────────┤  │  │ │ "Wer hat │ │
│  │  │  │ Dr. Hofer│ CTO (neu) │ Kein Kontakt    │  │  │ │  Retail- │ │
│  │  │  │ Dr. Weber│ CFO       │ 🔗 Thomas,      │  │  │ │  SAP-    │ │
│  │  │  │          │           │ BITKOM 2024     │  │  │ │  Erf.?"  │ │
│  │  │  │ Frau Bauer│ IT-Leiter│ Kein Kontakt   │  │  │ │          │ │
│  │  │  └──────────┴───────────┴─────────────────┘  │  │ └──────────┘ │
│  │  │                                              │  │              │
│  │  │  BERATER-VORSCHLÄGE (Top 3)                  │  │              │
│  │  │  ┌────────────────────────────────────────┐  │  │              │
│  │  │  │ 1. Markus S. · SAP Retail · Score 94   │  │  │              │
│  │  │  │    12 Jahre Erfahrung · Frei ab Mai     │  │  │              │
│  │  │  │ 2. Lisa T.   · Change Mgmt · Score 82  │  │  │              │
│  │  │  │    3 Jahre · Frei ab Mai                │  │  │              │
│  │  │  │ 3. Tim K.    · Data Migration · Score 76│  │  │              │
│  │  │  │    2 Jahre · Sofort verfügbar           │  │  │              │
│  │  │  │                                         │  │  │              │
│  │  │  │ [Team-Matching öffnen] [Varianten]      │  │  │              │
│  │  │  └────────────────────────────────────────┘  │  │              │
│  │  │                                              │  │              │
│  │  │  WETTBEWERBER-EINSCHÄTZUNG                   │  │              │
│  │  │  Accenture (wahrscheinlich), Capgemini        │  │              │
│  │  │  Empfehlung: Differenzierung über DACH-       │  │              │
│  │  │  Nähe und Retail-Spezialisierung.            │  │              │
│  │  │                                              │  │              │
│  │  │  QUELLEN                                     │  │              │
│  │  │  📰 North Data: CTO-Eintrag 12.03.          │  │              │
│  │  │  📰 Dealfront: Stellenanzeige SAP Arch.     │  │              │
│  │  │  📰 Firecrawl: retailcorp.de/karriere        │  │              │
│  │  └──────────────────────────────────────────┘  │  │              │
│  │                                                   │ │              │
│  │  ── AKTIVITÄTS-FEED ──                            │ │              │
│  │  08:15 Engagement-Brief generiert (Agent)         │ │              │
│  │  07:45 Opportunity erstellt (Katrin, Mobile)      │ │              │
│  │  07:45 Signal erkannt: CTO-Wechsel (System)       │ │              │
│  │                                                   │ │              │
│  │  💬 Kommentar schreiben...                        │ │              │
│  └───────────────────────────────────────────────────┘ └──────────────┘
│                                                                      │
│  ACTION BAR (fixed bottom):                                          │
│  [📝 Angebot starten]  [👥 Team matchen]  [📧 Outreach]  [···]      │
└──────────────────────────────────────────────────────────────────────┘
```

**Komponenten:**
- `OpportunityHeader` — Firmenname, Score-Badge, Stage-Chip, Erstellungsdatum, Signal-Link
- `EngagementBrief` — Scrollbarer Content-Bereich mit Sektionen (Kontext, Bedarfe, Entscheider, Berater, Wettbewerber, Quellen). Jede Sektion collapsible.
- `StakeholderTable` — Mini-Tabelle mit Beziehungspfad-Chips (klickbar)
- `ConsultantMatchCards` — Horizontale Cards mit Score, Verfügbarkeit, Seniority
- `CopilotPanel` (Right Sidebar) — Kontextuelle Aktionen + natürlichsprachliche Fragen. Collapsible. Reagiert auf den sichtbaren Content.
- `ActivityFeed` — Chronologischer Feed aller Aktionen (Agent-Runs, Kommentare, Statusänderungen)
- `CommentInput` — Rich-Text mit @Mentions
- `ActionBar` — Fixed Bottom Bar mit primären CTAs

**AI-Interaktion (Copilot):**
- Kontextuell: sieht dass Katrin auf einer Opportunity ist
- Bietet an: "Engagement-Brief öffnen", "Berater matchen", "Wettbewerber-Analyse", "Angebot starten"
- Beantwortet Fragen: "Warum Score 94?" → erklärt Scoring-Logik
- Proaktiv: "Thomas kennt den CFO — soll ich ihn taggen?"

**Entscheidungspunkt (Katrin):**
- → "Angebot starten" → Journey continues zu [J1-S5]
- → "Team matchen" → Detour zu [J1-S4]
- → "Outreach" → Skip direkt zu Outreach (selten ohne Angebot)
- → Kommentar: "@Thomas — kennst du den neuen CTO persönlich?" → Handoff zu Thomas

---

### [J1-S3a] Thomas reagiert auf Kommentar (Mobile, ~09:00)

**Trigger:** Push-Notification: "Katrin hat dich erwähnt: RetailCorp AG"

**Screen:** Notification → Deep-Link in Opportunity-Kommentar

```
┌─────────────────────────────────┐
│ RetailCorp AG · Kommentare      │
│                                 │
│ Katrin (08:15):                 │
│ "@Thomas — kennst du den neuen  │
│  CTO Dr. Hofer persönlich?"     │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Antworten...                │ │
│ └─────────────────────────────┘ │
│                                 │
│ Thomas (09:02):                 │
│ "Nicht persönlich, aber Dr.     │
│  Weber (CFO) kenne ich gut.     │
│  Ich rufe ihn Dienstag an.     │
│  Dann können wir Hofer über    │
│  Weber erreichen."              │
│                                 │
└─────────────────────────────────┘
```

**Handoff zurück → Katrin:** Sieht Thomas' Antwort im Aktivitäts-Feed

---

## Phase C: Team zusammenstellen (Katrin, Desktop, 10:00)

### [J1-S4] Staffing & Matching Screen

**Trigger:** Katrin klickt "Team matchen" in der Action Bar

**Layout (Desktop):**
```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ RetailCorp AG / Team-Matching                          [Cmd+K]   │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ANFORDERUNGSPROFIL (links oben)                                     │
│  ┌──────────────────────────────────────────────┐                    │
│  │ SAP S/4HANA Migration · Retail · 6 Monate    │                    │
│  │ Skills: SAP MM, SD, WM, ABAP, Change Mgmt    │                    │
│  │ Seniority: 1× Senior + 1× Mid + 1× Junior    │                    │
│  │ Start: KW 20 (Mai 2026)                       │                    │
│  │ [Anforderungen bearbeiten]                    │                    │
│  └──────────────────────────────────────────────┘                    │
│                                                                      │
│  TEAM-VARIANTEN                                                      │
│  ┌── Tab: Variante A ──┬── Tab: Variante B ──┬── Tab: C ──┐        │
│  │                                                          │        │
│  │  Variante A: Optimal (Score 91)                          │        │
│  │  ┌─────────────────────────────────────────────────────┐ │        │
│  │  │  👤 Markus S.   Senior · SAP Retail · Score 94     │ │        │
│  │  │     12J Erfahrung · Frei ab KW 20 · München        │ │        │
│  │  │     ⚠️ MedTech-Projekt endet KW 19 (Risiko: +1W)  │ │        │
│  │  │     Tagessatz: 1.450€ → Empfohlen: 1.800€          │ │        │
│  │  │     [Tauschen] [Details]                            │ │        │
│  │  ├─────────────────────────────────────────────────────┤ │        │
│  │  │  👤 Lisa T.     Mid · Change Mgmt · Score 82       │ │        │
│  │  │     3J · Frei ab KW 20 · Wien                      │ │        │
│  │  │     ✅ Hat mit Markus schon 2× zusammengearbeitet   │ │        │
│  │  │     Tagessatz: 1.100€ → Empfohlen: 1.400€          │ │        │
│  │  │     [Tauschen] [Details]                            │ │        │
│  │  ├─────────────────────────────────────────────────────┤ │        │
│  │  │  👤 Tim K.      Junior · Data Migration · Score 76 │ │        │
│  │  │     2J · Sofort verfügbar · München                │ │        │
│  │  │     Tagessatz: 850€ → Empfohlen: 1.100€            │ │        │
│  │  │     [Tauschen] [Details]                            │ │        │
│  │  └─────────────────────────────────────────────────────┘ │        │
│  │                                                          │        │
│  │  TEAM-METRIKEN                                           │        │
│  │  ┌─────────┬──────────┬───────────┬──────────┐          │        │
│  │  │ Gesamt- │ Ø Tages- │ Geschätzte│ Margin   │          │        │
│  │  │ Score   │ satz     │ Umsatz    │ (DB1)    │          │        │
│  │  │  91/100 │  1.433€  │  ~480K€   │  28%     │          │        │
│  │  └─────────┴──────────┴───────────┴──────────┘          │        │
│  │                                                          │        │
│  │  [Team übernehmen → Angebot starten]                     │        │
│  └──────────────────────────────────────────────────────────┘        │
│                                                                      │
│  COPILOT (rechts, collapsed by default)                              │
│  "Was passiert mit MedTech wenn ich Markus 2 Wochen früher abziehe?"│
│  → Impact-Analyse...                                                 │
└──────────────────────────────────────────────────────────────────────┘
```

**Komponenten:**
- `RequirementProfile` — Editierbare Zusammenfassung der Projektanforderungen
- `TeamVariantTabs` — Tabs für bis zu 3 Varianten (Optimal / Budget / Schnellstart)
- `ConsultantRow` — Pro Berater: Avatar, Name, Seniority, Match-Score, Verfügbarkeit, Risiken, Tagessatz + empfohlener Kundensatz, [Tauschen]-Button
- `TeamMetricsBar` — Horizontale KPI-Leiste: Gesamt-Score, Ø Tagessatz, Geschätzter Umsatz, Margin
- `TeamCompatibilityChip` — "✅ Haben 2× zusammengearbeitet" als Trust-Indikator

**AI-Interaktion (Copilot):**
- "Was passiert mit MedTech wenn ich Markus früher abziehe?" → Impact-Analyse
- "Zeig mir eine Variante ohne Tim — nur 2 Berater" → AI generiert Variante D
- "Gibt es Freelancer für Data Migration?" → Zeigt Gulp/Hays-Optionen

**Design-Empfehlung:**
- Drag-and-Drop zwischen Varianten (Desktop): Berater von Variante A nach B ziehen
- Live-Update der Metriken bei jedem Tausch
- Risiko-Badges prominent: ⚠️ gelb für Timing-Risiken, 🔴 rot für Konflikte

---

## Phase D: Angebot erstellen (Katrin, Desktop, 14:00)

### [J1-S5] Angebots-Canvas

**Trigger:** Katrin klickt "Team übernehmen → Angebot starten"

**Layout (Desktop, Full-Screen Canvas):**
```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ RetailCorp AG / Angebot        💾 Auto  [Preview] [Export] [···] │
├───────────┬──────────────────────────────────────────┬───────────────┤
│           │                                          │               │
│ STRUKTUR  │              CANVAS                      │   COPILOT     │
│ (sidebar) │                                          │               │
│           │                                          │               │
│ ☑ Mgmt    │  ┌─ MANAGEMENT SUMMARY ──────────────┐  │  "Kürze die   │
│   Summary │  │                                    │  │   Methodik    │
│ ☑ Unter-  │  │  RetailCorp AG steht vor der       │  │   auf eine    │
│   nehmen  │  │  strategischen Entscheidung,        │  │   halbe       │
│ ☑ Heraus- │  │  ihr SAP-ECC-System auf S/4HANA    │  │   Seite"      │
│   forderung│ │  zu migrieren. Unser Team bietet... │  │               │
│ ☑ Methodik│  │                                    │  │  [Anpassen]   │
│ ☑ Team    │  │  [✏️ Bearbeiten]  [🔄 Regenerieren]│  │               │
│ ☑ Referenz│  │  [💬 Prompt: "Mach kürzer"]        │  │  ────────     │
│ ☑ Pricing │  └────────────────────────────────────┘  │               │
│ ☑ Timeline│                                          │  Vorschläge:  │
│ ☑ Anhang  │  ┌─ TEAM-AUFSTELLUNG ────────────────┐  │               │
│   (CVs)   │  │                                    │  │  • Referenz   │
│           │  │  👤 Markus S. — Lead Consultant    │  │    MedTech    │
│           │  │     SAP Retail, 12J Erfahrung      │  │    einfügen   │
│           │  │     → [CV anzeigen] [CV anpassen]  │  │               │
│           │  │                                    │  │  • Pricing    │
│           │  │  👤 Lisa T. — Change Management    │  │    +8% vs.    │
│           │  │     → [CV anzeigen] [CV anpassen]  │  │    Benchmark  │
│           │  │                                    │  │               │
│           │  │  👤 Tim K. — Data Migration        │  │  • Timeline   │
│           │  │     → [CV anzeigen] [CV anpassen]  │  │    um 2W      │
│           │  │                                    │  │    verkürzen   │
│           │  └────────────────────────────────────┘  │    möglich     │
│           │                                          │               │
│           │  ┌─ PRICING ─────────────────────────┐  │               │
│           │  │                                    │  │               │
│           │  │  Variante: Standard (T&M)          │  │               │
│           │  │  ┌──────────┬────────┬──────────┐  │  │               │
│           │  │  │ Berater  │ Tages- │ Tage     │  │  │               │
│           │  │  │          │ satz   │          │  │  │               │
│           │  │  ├──────────┼────────┼──────────┤  │  │               │
│           │  │  │ Markus   │ 1.800€ │ 95       │  │  │               │
│           │  │  │ Lisa     │ 1.400€ │ 85       │  │  │               │
│           │  │  │ Tim      │ 1.100€ │ 95       │  │  │               │
│           │  │  ├──────────┼────────┼──────────┤  │  │               │
│           │  │  │ GESAMT   │        │ 484.500€ │  │  │               │
│           │  │  │ DB1      │        │   28%    │  │  │               │
│           │  │  └──────────┴────────┴──────────┘  │  │               │
│           │  │                                    │  │               │
│           │  │  [Tagessatz ändern → Live-Update]  │  │               │
│           │  └────────────────────────────────────┘  │               │
│           │                                          │               │
│           │  💬 Canvas-Kommentar:                    │               │
│           │  "@Thomas — Pricing RetailCorp ok?"       │               │
│           │                                          │               │
├───────────┴──────────────────────────────────────────┴───────────────┤
│  PROMPT BAR (fixed bottom):                                          │
│  💬 "Kürze Methodik auf halbe Seite. Füge Retail-Referenz ein."     │
│  [Enter → AI passt an]                                               │
└──────────────────────────────────────────────────────────────────────┘
```

**Komponenten:**
- `CanvasStructureSidebar` — Gliederung mit Checkboxen (Sektionen ein-/ausblenden), Drag-Reorder
- `CanvasSection` — Pro Abschnitt: generierter Content + [Bearbeiten] + [Regenerieren] + Inline-Prompt
- `PricingTable` — Editierbare Tabelle: Berater × Tagessatz × Tage. Änderung in einer Zelle → Gesamt + Margin aktualisieren live
- `CanvasPromptBar` — Fixed-Bottom Input für natürlichsprachliche Anpassungen
- `CopilotSidebar` — Kontextuelle Vorschläge basierend auf sichtbarem Abschnitt
- `CanvasCommentThread` — Inline-Kommentare pro Sektion
- `VariantSwitcher` — Dropdown: Lean / Standard / Premium

**AI-Interaktionen:**
- Prompt Bar: "Kürze Methodik auf halbe Seite" → AI passt nur diesen Abschnitt an
- Prompt Bar: "Erstelle eine Festpreis-Variante" → AI generiert alternative Pricing-Sektion
- Copilot: "Referenz MedTech einfügen" → AI sucht passende Case Study und fügt ein
- Inline auf Team: "Ersetze Tim durch einen günstigeren Berater" → AI schlägt Alternativen vor

**Handoff → Thomas:** Canvas-Kommentar "@Thomas — Pricing RetailCorp ok?" triggert Notification

---

### [J1-S6] Thomas gibt Angebot frei (Mobile/Desktop)

**Trigger:** Push-Notification: "Katrin bittet um Freigabe: Angebot RetailCorp, 484K€"

**Layout (Approval Card — Mobile optimiert):**
```
┌─────────────────────────────────┐
│ 📋 ANGEBOTSFREIGABE             │
│                                 │
│ RetailCorp AG                   │
│ SAP S/4HANA Migration           │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Volumen      484.500€       │ │
│ │ Margin (DB1) 28%            │ │
│ │ Team         Markus, Lisa,  │ │
│ │              Tim (3 Berater)│ │
│ │ Laufzeit     6 Monate       │ │
│ │ Start        KW 20          │ │
│ │ Ø Tagessatz  1.433€         │ │
│ └─────────────────────────────┘ │
│                                 │
│ Katrins Notiz:                  │
│ "Pricing passt, Thomas. Warm-   │
│  Path über Dr. Weber (CFO)."    │
│                                 │
│ [Canvas öffnen]                 │  ← Detail-Link
│                                 │
│ 💬 Kommentar:                   │
│ ┌─────────────────────────────┐ │
│ │ "Tagessatz Markus auf 1.600│ │
│ │  — RetailCorp zahlt Premium"│ │
│ └─────────────────────────────┘ │
│                                 │
│ [✅ Freigeben]  [❌ Ablehnen]   │
│ [💬 Kommentar & zurück]        │
│                                 │
└─────────────────────────────────┘
```

**Verhalten "Freigeben":**
- Status → "Freigegeben"
- Notification an Katrin: "Thomas hat freigegeben. Kommentar: Tagessatz Markus auf 1.600€"
- Katrin sieht Kommentar → passt Pricing an → Margin aktualisiert sich

**Design-Empfehlung:**
- Approval-Card muss self-contained sein: Thomas soll NICHT den ganzen Canvas öffnen müssen
- Alle entscheidungsrelevanten KPIs auf einen Blick
- Kommentar + Freigabe in einem Schritt möglich

---

## Phase E: Outreach senden (Katrin, Desktop, 15:30)

### [J1-S7] Outreach Composer

**Trigger:** Katrin klickt "Outreach starten" in der Opportunity Action Bar

**Layout:**
```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ RetailCorp AG / Outreach                                          │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  AN: Dr. Klaus Weber (CFO) · weber@retailcorp.de                     │
│  Consent: ✅ Warm-Path (via Thomas) · Rechtsgrundlage: Art. 6(1)f   │
│                                                                      │
│  BETREFF: [SAP S/4HANA Transformation — Retail-Expertise für         │
│           RetailCorp]                                                │
│                                                                      │
│  ┌─ E-MAIL BODY ─────────────────────────────────────────────────┐  │
│  │                                                                │  │
│  │  Sehr geehrter Herr Dr. Weber,                                │  │
│  │                                                                │  │
│  │  mit großem Interesse habe ich die strategische Weichen-       │  │
│  │  stellung bei RetailCorp wahrgenommen — herzlichen Glückwunsch │  │
│  │  zur Erweiterung Ihres Führungsteams mit Dr. Hofer.           │  │
│  │                                                                │  │
│  │  Als spezialisiertes SAP-Beratungshaus im Retail-Bereich      │  │
│  │  begleiten wir Unternehmen Ihrer Größe bei der S/4HANA-       │  │
│  │  Transformation. Unser Lead Consultant Markus S. hat in den   │  │
│  │  letzten 3 Jahren vergleichbare Migrationen im Einzelhandel   │  │
│  │  geleitet — zuletzt bei [anonymisiert, auf Anfrage].          │  │
│  │                                                                │  │
│  │  Wäre ein kurzer Austausch in der kommenden Woche möglich?    │  │
│  │  Thomas Weber (unser Managing Partner, Ihnen persönlich        │  │
│  │  bekannt) steht ebenfalls gerne zur Verfügung.                │  │
│  │                                                                │  │
│  │  Mit freundlichen Grüßen,                                     │  │
│  │  Katrin Engel                                                  │  │
│  │                                                                │  │
│  │  [✏️ Bearbeiten] [🔄 Regenerieren] [💬 "Formeller"]           │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  FOLLOW-UP SEQUENZ                                                   │
│  ☑ Follow-up 1: +5 Tage · Erinnerung falls keine Antwort           │
│  ☑ Follow-up 2: +12 Tage · Neuer Angle: Case Study anhängen        │
│  ☐ Follow-up 3: +20 Tage · Optional                                │
│                                                                      │
│  TRACKING                                                            │
│  ☑ Öffnungen tracken · ☑ Link-Klicks · ☐ Read Receipt              │
│                                                                      │
│  [Senden]  [Als Entwurf speichern]  [Vorschau]                      │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Komponenten:**
- `ConsentBadge` — Grüner Chip mit Rechtsgrundlage. Ohne gültigen Consent: 🔴 "Consent fehlt — Versand blockiert"
- `EmailComposer` — Rich-Text-Editor mit AI-Regeneration pro Absatz
- `PromptBar` (inline) — "Formeller", "Kürzer", "Referenz einfügen", etc.
- `SequenceConfigurator` — Timeline der Follow-ups mit Timing und Conditions
- `TrackingToggles` — Öffnungen, Klicks, Read Receipts

**AI-Interaktion:**
- E-Mail ist komplett vorgeniert aus: Engagement-Brief + Signal-Kontext + Warm-Path + Berater-Match
- Katrin kann per Prompt anpassen: "Formeller", "Kürzer", "Erwähne die ECC-Maintenance-Deadline"
- Follow-ups werden AI-generiert mit unterschiedlichen Angles

**Consent-Gating:**
- Ohne gültigen Consent: Sende-Button ist disabled, roter Banner erklärt warum
- Warm-Path (Thomas kennt Weber) = Rechtsgrundlage Art. 6(1)f → Consent: ✅

**Nach Versand:**
- Toast: "✓ E-Mail an Dr. Weber gesendet"
- Aktivitäts-Feed: "15:32 — Outreach an CFO gesendet (Katrin)"
- Tracking beginnt: Öffnungen erscheinen als Updates im Feed

---

## Journey 1 — Zusammenfassung

| Phase | Screen | Persona | Gerät | Dauer | Key Action |
|---|---|---|---|---|---|
| A | Signal-Feed [J1-S1] | Katrin | Mobile | 5 Min | Signal scannen |
| A | Conversion Sheet [J1-S2] | Katrin | Mobile | 1 Min | Opportunity anlegen |
| B | Opp Detail + Brief [J1-S3] | Katrin | Desktop | 30 Min | Brief prüfen, Kontext sammeln |
| B | Kommentar [J1-S3a] | Thomas | Mobile | 2 Min | Warm-Path bestätigen |
| C | Staffing [J1-S4] | Katrin | Desktop | 20 Min | Team zusammenstellen |
| D | Angebots-Canvas [J1-S5] | Katrin | Desktop | 90 Min | Proposal erstellen + iterieren |
| D | Approval Card [J1-S6] | Thomas | Mobile | 3 Min | Freigabe |
| E | Outreach [J1-S7] | Katrin | Desktop | 15 Min | E-Mail personalisieren + senden |

**Gesamtdauer: ~3 Stunden** (vs. 2–4 Tage ohne Consultry)
**Persona-Handoffs: 3** (Katrin→Thomas, Thomas→Katrin, Katrin→Thomas→Katrin)

---

*Journeys 2–5 werden in der nächsten Iteration ergänzt. Dieses Dokument ist ein lebendes Artefakt.*

---

# Journey 2: Staffing-Anfrage → Antwort → Team-Bestätigung

**Beteiligte Personas:** Katrin (Initiator), Stefan (Empfänger), Lisa (Empfänger), Thomas (Konfliktlösung)
**Dauer:** 2–4 Stunden (mit Consultry) vs. 2–3 Tage (ohne: Telefonate, Outlook, Excel)
**Touchpoints:** Matching → Staffing-Anfrage → Notification → Antwort → Bestätigung → Team-Lock

---

## Phase A: Staffing-Anfrage senden (Katrin, Desktop)

### [J2-S1] Staffing-Anfrage aus dem Matching-Screen

**Trigger:** Katrin hat in Journey 1 [J1-S4] ein Team zusammengestellt und klickt "Anfrage an Berater senden"

**Layout (Dialog / Modal):**
```
┌──────────────────────────────────────────────────┐
│ 📨 STAFFING-ANFRAGE SENDEN                       │
│                                                  │
│ Projekt: RetailCorp AG — SAP S/4HANA Migration   │
│ Zeitraum: KW 20–46 (Mai–November 2026)           │
│ Ort: München (Hybrid, 3 Tage vor Ort)            │
│                                                  │
│ Empfänger:                                       │
│ ┌──────────────────────────────────────────────┐ │
│ │ ☑ Markus S. · Lead · KW 20–46 · 1.800€/Tag │ │
│ │ ☑ Lisa T.   · Change · KW 20–42 · 1.400€   │ │
│ │ ☑ Tim K.    · Data · KW 20–36 · 1.100€     │ │
│ └──────────────────────────────────────────────┘ │
│                                                  │
│ Nachricht an Berater:                            │
│ ┌──────────────────────────────────────────────┐ │
│ │ "Retail-Kunde, S/4HANA-Migration, spannendes │ │
│ │  Projekt mit starkem Team. Details im Brief." │ │
│ └──────────────────────────────────────────────┘ │
│                                                  │
│ ☑ Engagement-Brief anhängen (anonymisiert)       │
│ ☑ Opportunity-Link beilegen                      │
│                                                  │
│ [Anfragen senden]  [Abbrechen]                   │
└──────────────────────────────────────────────────┘
```

**Verhalten nach "Senden":**
- Jeder Berater bekommt eine Staffing-Notification (Push + In-App)
- Status pro Berater: "Angefragt" (gelber Badge)
- Timer startet: Auto-Reminder nach 24h ohne Antwort

---

## Phase B: Berater antwortet (Stefan, Mobile, 12:30)

### [J2-S2] Staffing-Anfrage Card (Mobile)

**Trigger:** Push-Notification: "Neue Staffing-Anfrage: RetailCorp AG"

```
┌─────────────────────────────────┐
│ 📨 STAFFING-ANFRAGE             │
│                                 │
│ RetailCorp AG                   │
│ SAP S/4HANA Migration           │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Deine Rolle   Lead Consult. │ │
│ │ Zeitraum      KW 20–46     │ │
│ │ Ort           München (3/2) │ │
│ │ Tagessatz     1.800€        │ │
│ │ Team          Lisa T.,      │ │
│ │               Tim K.        │ │
│ │ Karriere-Fit  ★★★★☆        │ │
│ │               "Stärkt deine │ │
│ │               Retail-Ref."  │ │
│ └─────────────────────────────┘ │
│                                 │
│ Katrins Notiz:                  │
│ "Spannendes Projekt, Warm-Path  │
│  über Thomas. Du kennst Lisa    │
│  — habt 2x zusammengearbeitet." │
│                                 │
│ [📋 Brief lesen]               │
│                                 │
│ ⚠️ Dein MedTech-Projekt endet  │
│ KW 19 — Timing passt knapp.    │
│                                 │
│ [✅ Zusagen]  [❌ Ablehnen]     │
│ [💬 Rückfrage]  [⏳ Später]    │
│                                 │
└─────────────────────────────────┘
```

**Komponenten:**
- `StaffingRequestCard` — Self-contained: alle Entscheidungsinfos auf einer Card
- `CareerFitIndicator` — Sterne + kurze Erklärung warum das Projekt zur Karriere passt
- `TimingWarning` — Gelber Banner wenn Projektwechsel knapp ist
- `TeamPreview` — Wer ist noch im Team (Vertrautheit als Trust-Signal)

**Entscheidungspfade:**
- ✅ Zusagen → Status "Zugesagt", Katrin wird benachrichtigt
- ❌ Ablehnen → Begründung optional ("Zeitkonflikt" / "Kein Interesse" / Freitext), Katrin wird benachrichtigt → sucht Alternative
- 💬 Rückfrage → Kommentar-Thread öffnet sich, Katrin antwortet
- ⏳ Später → Reminder nach 4h

---

### [J2-S3] Lisa antwortet (Mobile, 17:15)

**Gleicher Screen wie [J2-S2], aber mit Lisa-spezifischen Daten:**

Unterschiede:
- Rolle: "Change Management"
- Karriere-Fit: ★★★★★ — "Dein erstes Retail-Projekt — bringt dich näher an Senior"
- Kein Timing-Warning (Lisa ist frei)
- Team-Preview: "Markus S. — du hast 2× mit ihm zusammengearbeitet ✅"

**Lisa sagt zu → Status "Zugesagt"**

---

## Phase C: Team-Bestätigung (Katrin, Desktop)

### [J2-S4] Staffing-Status Übersicht

**Trigger:** Katrin sieht Notifications: "Markus hat zugesagt", "Lisa hat zugesagt"

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ RetailCorp AG / Staffing-Status                                    │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  TEAM-STATUS                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐│
│  │ 👤 Markus S. · Lead      ✅ Zugesagt (12:35)  ✅ Verfügbar     ││
│  │ 👤 Lisa T.   · Change    ✅ Zugesagt (17:15)  ✅ Verfügbar     ││
│  │ 👤 Tim K.    · Data      ⏳ Ausstehend        ✅ Verfügbar     ││
│  └──────────────────────────────────────────────────────────────────┘│
│                                                                      │
│  2/3 zugesagt · 1 ausstehend (Tim, Reminder um 18:00)               │
│                                                                      │
│  [🔒 Team bestätigen (2/3)]  [⏰ Alle erinnern]  [🔄 Alternative]  │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Verhalten "Team bestätigen":**
- Team wird "gelockt" — Berater sind für diesen Zeitraum reserviert
- Verfügbarkeit im Workforce-Modul aktualisiert
- Opportunity-Status → "Staffed"
- Katrin kann zum Angebot zurückkehren → Team-Sektion ist final

---

## Journey 2 — Zusammenfassung

| Phase | Screen | Persona | Gerät | Dauer | Key Action |
|---|---|---|---|---|---|
| A | Anfrage-Dialog [J2-S1] | Katrin | Desktop | 5 Min | Anfrage konfigurieren + senden |
| B | Request Card [J2-S2] | Stefan | Mobile | 3 Min | Prüfen + Zusagen |
| B | Request Card [J2-S3] | Lisa | Mobile | 2 Min | Prüfen + Zusagen |
| C | Status-Übersicht [J2-S4] | Katrin | Desktop | 2 Min | Team bestätigen |

**Gesamtdauer: ~30 Minuten** (vs. 2–3 Tage Telefon-Ping-Pong)

---

# Journey 3: Projekt-Risiko → Alert → Eskalation → Kundenupdate

**Beteiligte Personas:** Stefan (erkennt), Thomas (entscheidet), Dr. Müller (wird informiert)
**Dauer:** 30 Minuten (mit Consultry) vs. Tage (ohne: wird oft zu spät erkannt)
**Touchpoints:** Projekt-Dashboard → Alert → Eskalation → Change Request → Client Portal

---

## Phase A: Risiko wird erkannt (System + Stefan)

### [J3-S1] Projekt-Dashboard (Stefan, Laptop, 08:15)

**Kontext:** Stefan im Kundenbüro, öffnet Projekt-Dashboard vor dem Daily

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Projekte / MedTech GmbH — SAP S/4HANA            [Cmd+K]  🔔 2  │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  PROJECT HEALTH:  🟡 AT RISK                                        │
│                                                                      │
│  ┌── MILESTONES ──────────────────────────────────────────────────┐  │
│  │                                                                │  │
│  │  ✅ M1: Analyse & Design          abgeschlossen KW 12         │  │
│  │  ✅ M2: Entwicklung Phase 1       abgeschlossen KW 16         │  │
│  │  🟡 M3: Datenmigration            ██████░░░░ 60% — 20% hinter│  │
│  │     Plan: KW 20 · Prognose: KW 22 (+2 Wochen)                │  │
│  │     ⚠️ Scope-Creep erkannt: 3 zusätzliche Legacy-Systeme     │  │
│  │  ⬜ M4: Integrationstests          geplant KW 22 (verschiebt  │  │
│  │     sich auf KW 24 bei aktuellem Trend)                       │  │
│  │  ⬜ M5: Go-Live                    geplant KW 26              │  │
│  │                                                                │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ┌── BUDGET ──────────────────────────────────────────────────────┐  │
│  │  Verbraucht: 68% · Fortschritt: 55% · ⚠️ 13% Over-Index     │  │
│  │  ████████████████████░░░░░░░░░░ 68% Budget                    │  │
│  │  ███████████████░░░░░░░░░░░░░░░ 55% Fortschritt               │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ┌── COPILOT EMPFEHLUNG ─────────────────────────────────────────┐  │
│  │  ⚠️ Scope-Creep erkannt: 3 Legacy-Systeme nicht im Original- │  │
│  │  Scope. Empfehlung: Change Request mit Aufwandsschätzung.     │  │
│  │  Geschätzter Mehraufwand: 15–20 PT (~25K€).                   │  │
│  │                                                                │  │
│  │  [Change Request erstellen]  [Thomas alertieren]  [Ignorieren]│  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Komponenten:**
- `ProjectHealthBadge` — 🟢 On Track / 🟡 At Risk / 🔴 Critical, prominent oben
- `MilestoneTimeline` — Vertikale Timeline mit Fortschrittsbalken, Plan vs. Prognose
- `BudgetBurndown` — Dual-Bar: Budget-Verbrauch vs. Fortschritt, Over-Index highlighted
- `CopilotRecommendation` — Gelber/roter Banner mit konkreter Empfehlung + Action-Buttons
- `ScopeCreepIndicator` — Inline-Warning mit Detailbeschreibung

**AI-Interaktion (Copilot):**
- Proaktiv: erkennt Diskrepanz Budget/Fortschritt + neue Scope-Items → empfiehlt Change Request
- Berechnet Mehraufwand aus historischen Vergleichsprojekten
- Bietet an: Change Request zu generieren, Thomas zu alertieren

---

### [J3-S2] Stefan eskaliert → Thomas bekommt Alert

**Trigger:** Stefan klickt "Thomas alertieren"

**Thomas bekommt (Mobile, P0-Alert):**
```
┌─────────────────────────────────┐
│ 🔴 P0 — PROJEKT-ESKALATION     │
│                                 │
│ MedTech GmbH                    │
│ SAP S/4HANA Migration           │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Health       🟡 At Risk     │ │
│ │ Problem      Scope-Creep    │ │
│ │              +3 Legacy-Sys. │ │
│ │ Milestone 3  +2 Wochen      │ │
│ │ Budget       13% Over-Index │ │
│ │ Mehraufwand  ~25K€          │ │
│ │ PL           Stefan Kraus   │ │
│ └─────────────────────────────┘ │
│                                 │
│ Stefans Notiz:                  │
│ "Scope-Erweiterung nicht ver-   │
│  meidbar — 3 Legacy-Systeme     │
│  waren nicht in der Analyse.    │
│  Change Request ist vorbereitet."│
│                                 │
│ [Change Request prüfen]         │
│ [Stefan anrufen]                │
│ [Zur Kenntnis]                  │
│                                 │
└─────────────────────────────────┘
```

**Thomas prüft, gibt OK → Change Request wird an Dr. Müller kommuniziert**

---

## Phase B: Kunde wird informiert (Dr. Müller, Client Portal)

### [J3-S3] Client Portal Update

**Trigger:** Automatische E-Mail: "Projekt-Update MedTech — Statusänderung"

**Dr. Müller klickt Magic Link → sieht:**

```
┌─────────────────────────────────────────────────────────┐
│  mpl Consulting — Ihr Projektportal                      │
│  MedTech GmbH · SAP S/4HANA Migration                    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Status: 🟡 Anpassung erforderlich                       │
│                                                          │
│  ┌── AKTUELLE SITUATION ──────────────────────────────┐ │
│  │  Milestone 3 (Datenmigration) benötigt erweiterten │ │
│  │  Scope: 3 zusätzliche Legacy-Systeme wurden        │ │
│  │  identifiziert, die migriert werden müssen.        │ │
│  │                                                    │ │
│  │  Auswirkung: +2 Wochen auf Milestone 3             │ │
│  │  Go-Live-Termin: wird evaluiert                    │ │
│  │                                                    │ │
│  │  Ihr Projektleiter Stefan Kraus hat einen           │ │
│  │  Change Request vorbereitet.                       │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  ┌── MILESTONES ──────────────────────────────────────┐ │
│  │  ✅ M1: Analyse & Design         ✓                │ │
│  │  ✅ M2: Entwicklung Phase 1      ✓                │ │
│  │  🟡 M3: Datenmigration           60% — angepasst  │ │
│  │  ⬜ M4: Integrationstests         geplant          │ │
│  │  ⬜ M5: Go-Live                   geplant          │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  📄 Change Request ansehen                               │
│                                                          │
│  ┌── FEEDBACK ────────────────────────────────────────┐ │
│  │  Wie bewerten Sie die Kommunikation?  ○○○○○       │ │
│  │  Kommentar: ________________________              │ │
│  │  [Feedback absenden]                              │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**Design-Empfehlungen:**
- White-Label: "mpl Consulting" branding, nicht Consultry
- Ampel-Logik: klare Farben, keine technischen Details
- Change Request als downloadbares PDF
- Feedback inline — maximal 2 Felder

---

## Journey 3 — Zusammenfassung

| Phase | Screen | Persona | Gerät | Dauer | Key Action |
|---|---|---|---|---|---|
| A | Projekt-Dashboard [J3-S1] | Stefan | Laptop | 10 Min | Risiko erkennen, eskalieren |
| A | P0-Alert [J3-S2] | Thomas | Mobile | 3 Min | Change Request genehmigen |
| B | Client Portal [J3-S3] | Dr. Müller | Laptop | 5 Min | Status sehen, Feedback geben |

**Gesamtdauer: ~20 Minuten vom Risiko bis zur Kundenkommunikation**

---

# Journey 4: Berater-Onboarding → Profil → Erstes Matching

**Beteiligte Personas:** Martina (Admin), Lisa (neue Beraterin), Katrin (sieht Lisa im Matching)
**Dauer:** 7 Tage (System-begleitet) vs. 4–8 Wochen (ohne: CV in Word, Excel-Listen, keine Auffindbarkeit)

---

## Phase A: Admin legt Berater an (Martina, Desktop)

### [J4-S1] Berater anlegen (Admin Panel)

**Trigger:** HR meldet: "Tim Schneider startet am 1. Mai"

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Settings / Team / Neuen Berater anlegen                            │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  STAMMDATEN                                                          │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │ Vorname: [Tim          ]  Nachname: [Schneider      ]         │  │
│  │ E-Mail:  [t.schneider@mpl.de                       ]         │  │
│  │ Standort: [München    ▼]  Practice: [SAP           ▼]        │  │
│  │ Startdatum: [01.05.2026 ]  Seniority: [Consultant  ▼]       │  │
│  │ Berichtet an: [Maria Weber (Practice Lead SAP)     ▼]        │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  CV HOCHLADEN                                                        │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │                                                                │  │
│  │  📄 Tim_Schneider_CV_2026.pdf                    [Hochladen]  │  │
│  │                                                                │  │
│  │  ☑ Skills automatisch extrahieren                              │  │
│  │  ☑ Projekte strukturieren                                     │  │
│  │  ☑ Zertifizierungen erkennen                                  │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  [Berater anlegen & Onboarding starten]                              │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Verhalten nach "Anlegen":**
- Convex-Record wird erstellt
- CV wird an Knowledge-Engine übergeben → AI extrahiert Skills, Projekte, Zertifizierungen
- Einladungsmail an Tim mit Onboarding-Link
- Mentor wird automatisch vorgeschlagen (Skill-Overlap-basiert)
- Onboarding-Checkliste wird generiert

---

### [J4-S2] Martina sieht AI-Extraktion (Desktop, 5 Min später)

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Team / Tim Schneider / Profil-Review                               │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  CV-EXTRAKTION (AI)  ─  Bitte prüfen und bestätigen                 │
│                                                                      │
│  ERKANNTE SKILLS (8)                                                 │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │ ✅ SAP S/4HANA         Senior    (3 Projekte als Evidenz)     │  │
│  │ ✅ SAP MM              Senior    (2 Projekte)                 │  │
│  │ ✅ SAP SD              Mid       (1 Projekt)                  │  │
│  │ ✅ ABAP Development    Mid       (erwähnt in 2 Projekten)     │  │
│  │ ✅ Data Migration      Senior    (3 Projekte)                 │  │
│  │ ⚠️ "Projektmanagement" → Agil (Scrum) oder Klassisch (PMI)?  │  │
│  │    [Agil] [Klassisch] [Beides]                                │  │
│  │ ✅ AWS Cloud Basics    Junior    (1 Zertifizierung)           │  │
│  │ ✅ Change Management   Junior    (1 Projektrolle)             │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ERKANNTE PROJEKTE (5)                                               │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │ 1. AutoParts AG — SAP S/4HANA Migration (2024, 8 Monate)     │  │
│  │ 2. PharmaCorp — SAP MM Rollout (2023, 5 Monate)              │  │
│  │ 3. LogiTech GmbH — Data Migration (2023, 4 Monate)           │  │
│  │ 4. RetailGroup — SAP SD Implementierung (2022, 6 Monate)     │  │
│  │ 5. TechStart — AWS Cloud Setup (2022, 2 Monate)              │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ERKANNTE ZERTIFIZIERUNGEN (3)                                       │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │ ✅ SAP Certified Application Associate — S/4HANA (2024)      │  │
│  │ ✅ AWS Cloud Practitioner (2023)                              │  │
│  │ ✅ ITIL Foundation (2021)                                     │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  MENTOR-VORSCHLAG                                                    │
│  👤 Stefan Kraus — Skill-Overlap 82%, gleiche Practice, München     │
│  [Bestätigen]  [Anderen wählen]                                     │
│                                                                      │
│  Profil-Completeness: ████████░░ 78%                                │
│                                                                      │
│  [Alles bestätigen & Onboarding fortsetzen]                         │
└──────────────────────────────────────────────────────────────────────┘
```

**Komponenten:**
- `SkillExtractionTable` — Pro Skill: Name (normalisiert), Proficiency-Level, Evidenz, Bestätigung/Korrektur
- `AmbiguityResolver` — Bei mehrdeutigen Skills: Inline-Buttons zur Klärung
- `ProjectExtractionList` — Strukturierte Projekthistorie aus CV
- `MentorSuggestion` — Card mit Overlap-Score und Begründung
- `ProfileCompletenessBar` — Visueller Fortschritt

**Martinas Aktion:** Klärt "Projektmanagement" (→ "Beides"), bestätigt alles, Stefan als Mentor

---

## Phase B: Tim durchläuft Onboarding (Mobile/Desktop, Tag 1–7)

### [J4-S3] Onboarding-Agent Dialog (Tim, Desktop)

**Trigger:** Tim klickt Einladungslink, landet im Onboarding-Flow

```
┌──────────────────────────────────────────────────────────────────────┐
│  Willkommen bei mpl Consulting, Tim!                                 │
│  Ich helfe dir, dein Profil aufzubauen.                             │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  🤖 ONBOARDING-AGENT                                                │
│                                                                      │
│  Agent: "Hallo Tim! Ich habe deinen CV analysiert und 8 Skills,     │
│  5 Projekte und 3 Zertifizierungen erkannt. Lass uns dein Profil    │
│  vervollständigen — das dauert etwa 10 Minuten."                    │
│                                                                      │
│  Agent: "Du hast SAP S/4HANA-Erfahrung mit 3 Projekten. Wie        │
│  würdest du dein Expertise-Level einschätzen?"                      │
│  [Grundkenntnisse] [Fortgeschritten] [Experte]                     │
│                                                                      │
│  Tim: ✅ Fortgeschritten                                            │
│                                                                      │
│  Agent: "Du hast ABAP in 2 Projekten erwähnt. War das eher          │
│  Debugging/Anpassung oder eigene Entwicklung?"                      │
│  [Anpassung/Debugging] [Eigene Entwicklung] [Beides]                │
│                                                                      │
│  Tim: ✅ Anpassung/Debugging                                        │
│                                                                      │
│  Agent: "Noch eine Frage: du hast AWS-Erfahrung. Welche Services    │
│  genau? EC2, Lambda, EKS, S3...?"                                   │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │ EC2, S3, und ein bisschen Lambda                            │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  Agent: "Perfekt. Dein Profil ist jetzt zu 85% vollständig.         │
│  Noch 2 Fragen für 95%: Reisebereitschaft und Sprachen."           │
│                                                                      │
│  Reisebereitschaft: [0–25%] [25–50%] [50–75%] [75–100%]            │
│  Sprachen: [DE ✅] [EN ___] [FR ___]                                │
│                                                                      │
│  ┌── PROFIL-FORTSCHRITT ──────────────────────────────────────┐     │
│  │  ████████████████████░░ 92%                                │     │
│  │  ✅ Skills  ✅ Projekte  ✅ Zertifizierungen               │     │
│  │  ✅ Reise   ✅ Sprachen  ⬜ Foto                           │     │
│  └────────────────────────────────────────────────────────────┘     │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**AI-Interaktion (Onboarding-Agent):**
- Dialogisch, nicht formularisch: "Wie würdest du..." statt Dropdown-Listen
- Präzisierungsfragen bei mehrdeutigen Skills
- Fortschritts-Feedback nach jeder Antwort
- Abschluss-Zusammenfassung: "Dein Profil ist bereit — du bist ab sofort matchbar"

---

## Phase C: Erstes Matching (Katrin, Desktop, 2 Wochen später)

### [J4-S4] Tim taucht im Matching auf

**Trigger:** Katrin sucht Team für neue Opportunity, Tim erscheint erstmals als Kandidat

**Im Matching-Screen [J1-S4]:**
```
│ 3. Tim S.      Mid · SAP Data Migration · Score 81  │
│    2J · Sofort verfügbar · München                   │
│    🆕 Neu im Team (Onboarding KW 18 abgeschlossen)  │
│    Mentor: Stefan K. — "Solider Data-Migration-Exp." │
│    [Details] [Tauschen]                              │
```

**Design-Detail:**
- `🆕 Neu`-Badge für Berater die <30 Tage im System sind
- Mentor-Referenz als Trust-Signal (Katrin kennt Stefan)

---

## Journey 4 — Zusammenfassung

| Phase | Screen | Persona | Gerät | Dauer | Key Action |
|---|---|---|---|---|---|
| A | Admin anlegen [J4-S1] | Martina | Desktop | 10 Min | Stammdaten + CV hochladen |
| A | CV-Review [J4-S2] | Martina | Desktop | 10 Min | AI-Extraktion prüfen |
| B | Onboarding [J4-S3] | Tim (Lisa-Typ) | Desktop | 15 Min | Profil per Dialog verfeinern |
| C | Matching [J4-S4] | Katrin | Desktop | — | Tim erstmals matchbar |

**Tag 1 bis Matchbarkeit: 7 Tage** (vs. 4–8 Wochen ohne System)

---

# Journey 5: Projektabschluss → Knowledge → Profil → Nächster Einsatz

**Beteiligte Personas:** Stefan (gibt Wissen zurück), Lisa (konsumiert Wissen), Katrin (profitiert im Matching)
**Dauer:** 30 Minuten aktive Arbeit + automatische Prozesse
**Touchpoints:** Projekt-Dashboard → Knowledge-Upload → Profil-Update → Knowledge-Agent → Matching

---

## Phase A: Projektabschluss (Stefan, Laptop)

### [J5-S1] Projekt abschließen + Wissen hochladen

**Trigger:** Stefan schließt Milestone 5 (Go-Live) bei MedTech ab

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ MedTech GmbH / Projekt abschließen                                │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  🏁 PROJEKT-ABSCHLUSS                                               │
│                                                                      │
│  Alle Milestones ✅ abgeschlossen                                   │
│  Go-Live: KW 26 (planmäßig nach Change Request)                    │
│  Abnahme durch Kunden: ✅ erhalten                                  │
│                                                                      │
│  ┌── WISSENS-RÜCKFLUSS ──────────────────────────────────────────┐  │
│  │                                                                │  │
│  │  Projektdokumentation hochladen:                               │  │
│  │  📄 MedTech_Abschlussbericht.pdf        [Hochladen]           │  │
│  │  📄 Cutover_Checkliste_v3.xlsx          [Hochladen]           │  │
│  │  📄 Lessons_Learned_Notes.docx          [Hochladen]           │  │
│  │                                                                │  │
│  │  ☑ Knowledge-Bausteine automatisch generieren                 │  │
│  │  ☑ Berater-Profile automatisch aktualisieren                  │  │
│  │  ☑ Kundenfeedback-Anfrage an Dr. Müller senden                │  │
│  │                                                                │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  [Projekt abschließen & Wissen sichern]                              │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Verhalten nach "Abschließen":**
1. Knowledge-Engine verarbeitet die 3 Dokumente
2. Generiert automatisch Knowledge-Bausteine:
   - "SAP-Datenmigration Pharma Checkliste"
   - "Go-Live-Risikomatrix S/4HANA"
   - "Cutover-Planung Template (6-Wochen)"
3. Stefan, Lisa, Tim's Profile werden aktualisiert:
   - Neues Referenzprojekt
   - Skills bestätigt/erweitert
   - Proficiency-Level angepasst
4. Pulse-Check wird an Dr. Müller gesendet (Client Portal)

---

### [J5-S2] Automatisches Profil-Update (Stefan, Notification)

**Stefan bekommt nach 10 Minuten:**

```
┌─────────────────────────────────┐
│ 📊 PROFIL AKTUALISIERT          │
│                                 │
│ Basierend auf MedTech-Projekt:  │
│                                 │
│ Skills aktualisiert:            │
│ • SAP S/4HANA: Senior → Senior+ │
│   (5. Projekt, Lead-Rolle)      │
│ • Data Migration: +Pharma-      │
│   Branchenkontext                │
│ 🆕 Neuer Skill erkannt:         │
│ • SAP Fiori UX (aus Abschluss-  │
│   bericht extrahiert)            │
│                                 │
│ Neues Referenzprojekt:          │
│ MedTech GmbH — SAP S/4HANA     │
│ (6 Monate, Lead, Pharma)        │
│                                 │
│ Profil-Completeness: 85% → 91% │
│                                 │
│ [Änderungen prüfen]  [OK]       │
│                                 │
└─────────────────────────────────┘
```

---

## Phase B: Wissen wird konsumiert (Lisa, 3 Monate später)

### [J5-S3] Knowledge-Agent Anfrage (Lisa, Laptop)

**Trigger:** Lisa arbeitet an einem neuen Pharma-Projekt, braucht Datenmigrations-Checkliste

```
┌──────────────────────────────────────────────────────────────────────┐
│ 💬 KNOWLEDGE-AGENT                                                   │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Lisa: "SAP Datenmigration Pharma Checkliste"                       │
│                                                                      │
│  Agent (15 Sekunden):                                               │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │ Ich habe 3 relevante Bausteine gefunden:                      │  │
│  │                                                                │  │
│  │ 📋 SAP-Datenmigration Pharma Checkliste                       │  │
│  │    Quelle: MedTech-Projekt (Stefan K., Q2/2026)               │  │
│  │    → 47 Prüfpunkte, 6 Phasen, GxP-spezifische Validierung   │  │
│  │    [Öffnen] [In Canvas übernehmen]                            │  │
│  │                                                                │  │
│  │ 📋 Cutover-Planung Template (6 Wochen)                        │  │
│  │    Quelle: MedTech-Projekt (Stefan K., Q2/2026)               │  │
│  │    → Wochenplan mit Rollback-Szenarien                        │  │
│  │    [Öffnen] [In Canvas übernehmen]                            │  │
│  │                                                                │  │
│  │ 📋 Go-Live-Risikomatrix S/4HANA                               │  │
│  │    Quelle: AutoParts-Projekt (Markus S., Q4/2024)             │  │
│  │    → 28 Risiken mit Mitigationsstrategien                     │  │
│  │    [Öffnen] [In Canvas übernehmen]                            │  │
│  │                                                                │  │
│  │ 💡 Experten-Empfehlung:                                       │  │
│  │ Stefan Kraus hat MedTech geleitet — frag ihn zur              │  │
│  │ GxP-Validierungsstrategie.                                    │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  Lisa: "Zeig mir die GxP-spezifischen Prüfpunkte"                  │
│                                                                      │
│  Agent: "Hier sind die 8 GxP-Prüfpunkte aus der MedTech-           │
│  Checkliste: 1. Datenintegrität (21 CFR Part 11)..."               │
│                                                                      │
│  💬 [Weitere Frage stellen...]                                      │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Design-Empfehlungen:**
- Knowledge-Agent liefert Synthese, nicht Links
- Quellen immer sichtbar (wer, welches Projekt, wann)
- Experten-Empfehlung als sozialer Vertrauensanker
- "In Canvas übernehmen" für sofortige Weiterverwendung in Angeboten/Projekten

---

## Phase C: Kreislauf schließt sich (Katrin, Matching)

### [J5-S4] Aktualisierte Profile im nächsten Matching

**Trigger:** Katrin sucht Team für neue Pharma-Opportunity

**Stefan und Lisa erscheinen mit aktualisierten Profilen:**
```
│ 1. Stefan K.   Senior · SAP S/4HANA · Score 96      │
│    12J · Frei ab KW 28 · München                     │
│    📈 Neu: MedTech-Referenz (Pharma, Go-Live Q2/26) │
│    Kundenfeedback: NPS 82 (MedTech)                  │
│                                                      │
│ 4. Lisa T.     Mid · Change Management · Score 79    │
│    3J · Frei ab KW 30 · Wien                        │
│    📈 Neu: Pharma-Erfahrung (MedTech, 6 Monate)     │
```

**Der Kreislauf:** Projekt → Wissen → Profile → nächstes Matching → nächstes Projekt

---

## Journey 5 — Zusammenfassung

| Phase | Screen | Persona | Gerät | Dauer | Key Action |
|---|---|---|---|---|---|
| A | Projekt abschließen [J5-S1] | Stefan | Laptop | 15 Min | Docs hochladen, Abschluss triggern |
| A | Profil-Update [J5-S2] | Stefan | Mobile | 2 Min | Bestätigung |
| B | Knowledge-Agent [J5-S3] | Lisa | Laptop | 5 Min | Wissen abrufen |
| C | Matching [J5-S4] | Katrin | Desktop | — | Aktualisierte Profile sehen |

**Wissens-Rückfluss: automatisch** — Stefans 15 Minuten Upload erzeugen Wert für alle zukünftigen Projekte

---

# Cross-Journey Design Patterns

## Patterns die in allen Journeys auftauchen

| Pattern | Wo | Beschreibung |
|---|---|---|
| **Self-Contained Cards** | J1-S6, J2-S2, J3-S2, J5-S2 | Entscheidungen treffen ohne den Kontext zu verlassen. Alle Infos auf einer Card. |
| **1-Tap Mobile Actions** | J1-S1, J1-S2, J2-S2, J3-S2 | Primäre Aktion immer als einzelner Tap erreichbar. |
| **AI-Kontext-Empfehlung** | J1-S3, J1-S5, J3-S1, J5-S3 | Copilot/Agent zeigt proaktiv relevante Aktionen basierend auf dem aktuellen Screen. |
| **Approval mit Kontext** | J1-S6, J2-S4, J3-S2 | Freigaben immer mit allen entscheidungsrelevanten Daten. Nie nur "Bitte freigeben". |
| **Automatische Anreicherung** | J4-S2, J5-S1, J5-S2 | System erkennt neue Daten und reichert Profile/Knowledge automatisch an. |
| **Dialog statt Formular** | J4-S3 | Onboarding und Profil-Updates über natürlichsprachlichen Dialog. |
| **Feedback-Loops** | J3-S3, J5-S1 | Kundenfeedback und Projektwissen fließen automatisch zurück ins System. |
| **Ampel-Kommunikation** | J3-S1, J3-S3 | 🟢/🟡/🔴 als universelles Status-Vokabular, besonders für externe Stakeholder. |

---

# Journey 6: Practice-Lead Kapazitätsplanung

**Neue Persona: Maria — Practice Lead Cloud & Infrastructure**
**Beteiligte:** Maria (Primär), Thomas (strategische Entscheidung), Martina (Recruiting-Trigger)
**Dauer:** 30–45 Minuten pro Quartal (strategisch) + 10 Min/Woche (operativ)
**Touchpoints:** Team-Dashboard → Capacity Planner → Skill-Strategy Planner → Recruiting-Trigger

---

### [J6-S1] Practice Team-Dashboard (Maria, Desktop)

**Trigger:** Maria bereitet Quartals-Review vor, öffnet ihr Team-Dashboard

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Workforce / Practice: Cloud & Infrastructure          [Cmd+K] 🔔 │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  PRACTICE OVERVIEW                                                   │
│  ┌──────────┬──────────┬──────────┬──────────┬───────────┐          │
│  │ Berater  │ Auslast. │ Auf Proj.│ Bench    │ Abwesend  │          │
│  │    8     │   76%    │    6     │    1     │    1      │          │
│  └──────────┴──────────┴──────────┴──────────┴───────────┘          │
│                                                                      │
│  TEAM-TIMELINE (Gantt-artig, 12 Wochen)                             │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │         KW18  19  20  21  22  23  24  25  26  27  28  29    │   │
│  │ Anna M.  ████████████████████████░░░░░░░░░░░░░░░░           │   │
│  │          MedTech                  FREI                       │   │
│  │ Boris K. ██████████████████████████████████████████           │   │
│  │          CloudBank AG (verlängert bis KW29)                  │   │
│  │ Clara D. ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░           │   │
│  │          Urlaub    FREI ab KW 20                             │   │
│  │ Dirk F.  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░           │   │
│  │          BENCH — seit KW 16                                  │   │
│  │ ... (4 weitere)                                              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ⚠️ CAPACITY ALERT                                                  │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  Pipeline zeigt 3 Cloud-Opportunities in Qualifizierung:     │   │
│  │  • FinServCo — Cloud Migration (85% Wahrscheinlichkeit)      │   │
│  │  • InsureTech — AWS Infra (60%)                              │   │
│  │  • AutoGroup — Multi-Cloud (40%)                             │   │
│  │                                                              │   │
│  │  Wenn A+B gewonnen: ab KW 26 fehlen 2 Senior Cloud Arch.    │   │
│  │  [Capacity Planner öffnen]  [Skill-Gap analysieren]          │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  SKILL-LANDSCHAFT (Practice)                                        │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  AWS:     ████████ 5 Berater (2 Senior, 2 Mid, 1 Junior)    │   │
│  │  Azure:   ████░░░░ 2 Berater (1 Senior, 1 Mid)              │   │
│  │  GCP:     ██░░░░░░ 1 Berater (1 Mid)                        │   │
│  │  K8s:     ██████░░ 3 Berater                                 │   │
│  │  FinOps:  ░░░░░░░░ 0 Berater ← ⚠️ Gap bei steigender       │   │
│  │                                    Nachfrage                  │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Komponenten:**
- `PracticeKPIBar` — 5 KPI-Cards horizontal: Teamgröße, Auslastung, Auf Projekt, Bench, Abwesend
- `TeamGanttTimeline` — Horizontale Timeline pro Berater mit Projekt-Balken, Frei-Perioden, Abwesenheiten
- `CapacityAlertBanner` — Gelb/Rot-Banner mit Pipeline-gewichteter Engpass-Prognose
- `SkillLandscapeChart` — Horizontale Balken pro Skill-Cluster mit Senioritäts-Breakdown

---

### [J6-S2] Capacity Planner (Desktop, AI Planning Tool)

**Trigger:** Maria klickt "Capacity Planner öffnen"

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Capacity Planner — Cloud & Infrastructure Q3/2026                  │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  SZENARIO-VERGLEICH                                                  │
│  ┌── Tab: Best Case ──┬── Expected ──┬── Worst Case ──┐            │
│  │                                                      │            │
│  │  EXPECTED CASE (60% Pipeline-Gewichtung)              │            │
│  │                                                      │            │
│  │  Bedarf Q3:    4 Senior + 2 Mid + 1 Junior           │            │
│  │  Verfügbar:    2 Senior + 2 Mid + 1 Junior           │            │
│  │  ⚠️ Gap:      2 Senior Cloud Architects              │            │
│  │                                                      │            │
│  │  DEMAND vs SUPPLY (visuell)                           │            │
│  │  ┌──────────────────────────────────────┐            │            │
│  │  │ Senior  ██████████░░░░░░░░ 2/4       │            │            │
│  │  │ Mid     ████████████████ 2/2 ✅      │            │            │
│  │  │ Junior  ████████████████ 1/1 ✅      │            │            │
│  │  └──────────────────────────────────────┘            │            │
│  │                                                      │            │
│  │  AI EMPFEHLUNGEN                                      │            │
│  │  ┌──────────────────────────────────────────────────┐│            │
│  │  │ 1. Cross-Staffing: Markus S. (SAP Practice) hat ││            │
│  │  │    AWS-Zertifizierung + Interesse an Cloud.      ││            │
│  │  │    → [Markus anfragen]                           ││            │
│  │  │                                                  ││            │
│  │  │ 2. Freelancer: 3 passende Profile auf Gulp für   ││            │
│  │  │    "Senior Cloud Architect, AWS, DACH"           ││            │
│  │  │    → [Freelancer-Suche öffnen]                   ││            │
│  │  │                                                  ││            │
│  │  │ 3. Recruiting: 1 Festanstellung empfohlen —      ││            │
│  │  │    Nachfrage-Trend +40% YoY                      ││            │
│  │  │    → [Recruiting-Anfrage an HR]                  ││            │
│  │  └──────────────────────────────────────────────────┘│            │
│  │                                                      │            │
│  └──────────────────────────────────────────────────────┘            │
│                                                                      │
│  💬 "@Recruiting — bitte parallel externen Senior Cloud Arch suchen" │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Handoff → Martina/HR:** Kommentar triggert Recruiting-Pipeline (Journey 14)
**Handoff → Thomas:** Szenario-Report als Input für Quartals-Review

---

# Journey 7: Account Review & Beziehungspflege

**Beteiligte:** Thomas (Primary), Katrin (Follow-up), Stefan (Projekt-Kontext)
**Touchpoints:** Account-Dashboard → Stakeholder-Map → Beziehungs-Alerts → Upselling-Signal

---

### [J7-S1] Account-Dashboard (Thomas, Desktop)

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Accounts / RetailCorp AG                              [Cmd+K] 🔔 │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  RetailCorp AG · Einzelhandel · 2.500 MA · 380M€                    │
│  Account Owner: Thomas Weber (Partner)                               │
│                                                                      │
│  ┌────────┬──────────┬──────────┬──────────┬───────────┐            │
│  │ Projekte│ Umsatz  │ Ø NPS   │ Offene   │ Letzter   │            │
│  │ 3 abg.  │ 1.2M€   │  74     │ Opps: 2  │ Kontakt:  │            │
│  │ 1 aktiv │ (LTD)   │         │          │ vor 12 T. │            │
│  └────────┴──────────┴──────────┴──────────┴───────────┘            │
│                                                                      │
│  ⚠️ BEZIEHUNGS-ALERT                                               │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  Kein Kontakt mit Dr. Weber (CFO) seit 90 Tagen.            │   │
│  │  Letzte Interaktion: Dinner auf BITKOM, 14.01.2026          │   │
│  │  Risiko: Beziehungserosion — Wettbewerber könnten die       │   │
│  │  Lücke füllen.                                              │   │
│  │  [Kontakt planen]  [Katrin taggen]  [Ignorieren]            │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  STAKEHOLDER-MAP                                                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │      ┌──────────┐                                            │   │
│  │      │ Dr. Hofer│ CTO (neu)                                  │   │
│  │      │ 🔴 Kein  │                                            │   │
│  │      │  Kontakt │                                            │   │
│  │      └────┬─────┘                                            │   │
│  │           │ berichtet an                                     │   │
│  │      ┌────▼─────┐     ┌──────────┐                          │   │
│  │      │ Dr. Weber│ CFO │ Frau Bauer│ IT-Leiter               │   │
│  │      │ 🟢 Thomas│     │ 🟡 Stefan │ (Projektkontext)        │   │
│  │      │  kennt   │     │  kennt    │                          │   │
│  │      └──────────┘     └──────────┘                          │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  🆕 CROSS-SELLING SIGNAL                                            │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  RetailCorp hat neue Compliance-Abteilung aufgebaut           │   │
│  │  (Stellenanzeigen-Signal). Euer NIS2-Angebot könnte passen.  │   │
│  │  Stakeholder: Dr. Weber, über Event-Kontakt erreichbar.      │   │
│  │  [Als Opportunity anlegen]  [Katrin zuweisen]                 │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  PROJEKTHISTORIE                                                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  🟢 SAP S/4HANA Migration (aktiv)    NPS: —  DB1: 28%       │   │
│  │  ✅ SAP MM Rollout (2024)            NPS: 82  DB1: 31%      │   │
│  │  ✅ Change Management (2023)          NPS: 68  DB1: 22%      │   │
│  │  ✅ Analyse & Konzept (2022)          NPS: 71  DB1: 35%      │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Komponenten:**
- `AccountHeader` — Firmendaten, Owner, LTD-Umsatz
- `RelationshipAlertBanner` — Gelber Banner bei Kontakterosion (>60 Tage ohne Interaktion)
- `StakeholderMap` — Visuelles Netzwerk: Entscheider + Beziehungsstärke (🟢/🟡/🔴) zu eigenen Beratern
- `CrossSellingSignalCard` — AI-generiertes Upselling-Signal mit Action-Buttons
- `ProjectHistoryTable` — Chronologie aller Engagements mit NPS + DB1

**Handoff → Katrin:** "Katrin zuweisen" bei Cross-Selling-Signal

---

# Journey 8: E-Mail → Qualifizierte Opportunity

**Beteiligte:** Katrin (Primary)
**Dauer:** 12 Minuten (mit Consultry) vs. 4 Stunden (manuell)

---

### [J8-S1] E-Mail-Weiterleitung → Auto-Extraktion

**Trigger:** Katrin leitet Kundenanfrage an intake@mpl.consultry.app weiter

```
┌──────────────────────────────────────────────────────────────────────┐
│ 🔔 NEUE OPPORTUNITY (Auto-Extraktion)                                │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Quelle: E-Mail von Dr. Hofer (RetailCorp AG) via Katrin            │
│                                                                      │
│  AI-EXTRAKTION                                                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Firma:          RetailCorp AG                       ✅ Match │   │
│  │ Scope:          SAP S/4HANA Migration                        │   │
│  │ Branche:        Retail / Einzelhandel                        │   │
│  │ Geforderte Skills: SAP S/4HANA, MM, SD, Data Migration      │   │
│  │ Timeline:       Start Q3, 6 Monate Laufzeit                 │   │
│  │ Budget-Signal:  "mittleres sechsstelliges Projektvolumen"   │   │
│  │                 → geschätzt 400–600K€                        │   │
│  │ Compliance:     Keine speziellen Anforderungen erkannt       │   │
│  │ Kontakt:        Dr. Max Hofer, CTO                          │   │
│  │ Confidence:     ████████░░ 85%                               │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ORIGINAL-E-MAIL (collapsed, expandable)                            │
│  ▶ E-Mail anzeigen                                                  │
│                                                                      │
│  [✅ Als Opportunity übernehmen]  [✏️ Korrigieren]  [❌ Verwerfen] │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Nach Übernahme:** Engagement-Brief wird generiert → Flow geht in Journey 1 [J1-S3] über

---

# Journey 9: Offer Composition — Deep Canvas

**Beteiligte:** Katrin (erstellt), Thomas (reviewed/freigibt), Martina (exportiert)
**Dieser Flow vertieft J1-S5 mit dem vollen Canvas-Feature-Set**

---

### [J9-S1] Canvas: Varianten-Engine

**Trigger:** Katrin sagt im Prompt-Bar: "Erstelle drei Varianten — Lean, Standard, Premium"

```
┌──────────────────────────────────────────────────────────────────────┐
│  VARIANTEN-VERGLEICH                                                 │
│  ┌── Lean ─────────────┬── Standard ──────────┬── Premium ──────┐   │
│  │                      │                      │                 │   │
│  │  2 Berater           │  3 Berater           │  5 + Partner    │   │
│  │  Markus + Lisa       │  Markus + Lisa + Tim │  + Junior + PL  │   │
│  │  4 Monate            │  6 Monate            │  8 Monate       │   │
│  │                      │                      │                 │   │
│  │  Scope: Core MM/SD   │  Scope: Full + Data  │  Scope: Full +  │   │
│  │  Kein Change Mgmt    │  + Change Mgmt       │  Change + Train │   │
│  │                      │                      │  + Hypercare     │   │
│  │  ─────────────────── │  ─────────────────── │  ──────────────  │   │
│  │  280.000€            │  484.500€            │  720.000€       │   │
│  │  DB1: 32%            │  DB1: 28%            │  DB1: 25%       │   │
│  │                      │                      │                 │   │
│  │  [Auswählen]         │  [Auswählen] ★       │  [Auswählen]    │   │
│  └──────────────────────┴──────────────────────┴─────────────────┘   │
│                                                                      │
│  💬 "Mach die Premium-Variante günstiger — nimm 1 Junior raus"      │
│  → AI passt Variante C an: 640K€, DB1: 27%                          │
│                                                                      │
│  REFERENZ-MATCHING (AI-vorgeschlagen)                                │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ 📄 Case Study: FashionGroup — SAP Retail Migration (2024)    │   │
│  │    Match: 89% · Branche + Scope passen                       │   │
│  │    [In Angebot einfügen]  [Vorschau]                         │   │
│  │                                                              │   │
│  │ 📄 Case Study: AutoParts — Data Migration (2025)              │   │
│  │    Match: 72% · Scope passt, andere Branche                  │   │
│  │    [In Angebot einfügen]  [Vorschau]                         │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### [J9-S2] CV-Generierung im Canvas

```
┌──────────────────────────────────────────────────────────────────────┐
│  TEAM-AUFSTELLUNG — CVs generieren                                   │
│                                                                      │
│  👤 Markus Steinbach — Lead Consultant SAP Retail                    │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  AI-GENERIERTES CV (kundenspezifisch für RetailCorp)         │   │
│  │                                                              │   │
│  │  Relevante Projekte: 3 von 12 ausgewählt (Retail-Fokus)     │   │
│  │  • FashionGroup — SAP S/4HANA Migration (Lead, 8 Mo.)       │   │
│  │  • AutoParts — SAP MM/SD Rollout (Senior, 5 Mo.)            │   │
│  │  • RetailGroup — S/4HANA Greenfield (Lead, 12 Mo.)          │   │
│  │                                                              │   │
│  │  Hervorgehobene Skills: SAP Retail, MM, SD, Data Migration   │   │
│  │  Zertifizierungen: SAP S/4HANA Associate (2024)              │   │
│  │                                                              │   │
│  │  [CV-Vorschau (PDF)]  [CV bearbeiten]  [Alle Projekte zeigen]│   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  💬 "Hebe Markus' Change-Management-Erfahrung stärker hervor"       │
│  → AI passt CV-Fokus an                                              │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Handoff → Martina:** Export-Button → Martina erhält Notification, prüft Formatierung, exportiert als DOCX/PDF im Corporate Design

---

# Journey 10: Vertragsverhandlung auf dem Canvas

**Beteiligte:** Thomas (Review), Martina (Verwaltung), Katrin (Kontext)
**Touchpoints:** Eingehender Vertrag → AI-Analyse → Canvas-Redlining → Freigabe-Workflow

---

### [J10-S1] Vertrags-Canvas — AI-Analyse

**Trigger:** Kunde schickt seinen Standard-Vertrag, Martina lädt ihn hoch

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ RetailCorp AG / Vertrag / Review                     [Cmd+K] 🔔  │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  VERTRAGS-CANVAS                                                     │
│                                                                      │
│  Dokument: RetailCorp_Dienstvertrag_Entwurf_v1.pdf                  │
│  Analyse: ✅ Abgeschlossen (23 Klauseln geprüft)                   │
│                                                                      │
│  RISIKO-ÜBERBLICK                                                    │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  🟢 Standard: 18 Klauseln    ─────────────── 78%            │   │
│  │  🟡 Abweichung: 3 Klauseln   ────── 13%                     │   │
│  │  🔴 Risiko: 2 Klauseln       ─── 9%                         │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  KLAUSEL-BY-KLAUSEL                                                  │
│                                                                      │
│  ┌─ §7 Haftung ──────────────────────────── 🔴 RISIKO ──────────┐  │
│  │                                                                │  │
│  │  KUNDENVERSION:                                                │  │
│  │  "Die Auftragnehmerin haftet unbeschränkt für alle Schäden,   │  │
│  │   die aus der Erbringung der Dienstleistungen entstehen."     │  │
│  │                                                                │  │
│  │  AI-ANALYSE:                                                   │  │
│  │  Unbeschränkte Haftung ist branchenunüblich und                │  │
│  │  wirtschaftlich nicht tragbar. Ihr Standard begrenzt           │  │
│  │  auf Auftragswert. Benchmark: 80% der DACH-Beratungs-        │  │
│  │  verträge begrenzen auf 1–2x Auftragswert.                   │  │
│  │                                                                │  │
│  │  ALTERNATIVVORSCHLAG:                                          │  │
│  │  ┌────────────────────────────────────────────────────────┐   │  │
│  │  │ "Die Haftung der Auftragnehmerin ist auf den           │   │  │
│  │  │  Gesamtauftragswert begrenzt. Dies gilt nicht für      │   │  │
│  │  │  Vorsatz und grobe Fahrlässigkeit."                    │   │  │
│  │  └────────────────────────────────────────────────────────┘   │  │
│  │                                                                │  │
│  │  [Alternativ übernehmen]  [Eigene Formulierung]  [Akzeptieren]│  │
│  │  💬 Thomas (09:30): "Auf keinen Fall unbeschränkt.            │  │
│  │   Maximal 1x Auftragswert. Alternativvorschlag passt."       │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ┌─ §12 Geheimhaltung ────────────────── 🟡 ABWEICHUNG ─────────┐  │
│  │  Abweichung: 5 Jahre Laufzeit (euer Standard: 3 Jahre)        │  │
│  │  Empfehlung: Akzeptabel, aber auf 3 Jahre reduzieren.         │  │
│  │  [3 Jahre vorschlagen]  [Akzeptieren]                         │  │
│  └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  FREIGABE-STATUS                                                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  ☑ Thomas — Haftung geprüft, Alternativ genehmigt            │   │
│  │  ⬜ Katrin — Kommerzielle Freigabe ausstehend                 │   │
│  │  ⬜ Final — Redline-Version an Kunden senden                  │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  [Redline-PDF generieren]  [An Kunden senden]                       │
└──────────────────────────────────────────────────────────────────────┘
```

---

# Journey 11: Event-Lifecycle

**Beteiligte:** Katrin (Planung + Follow-up), Stefan (Live-Event), Thomas (ROI-Review)
**Touchpoints:** Event-Discovery → Briefing → Live-Kontakterfassung → Follow-up → ROI

---

### [J11-S1] Pre-Event: Briefing-Generierung (Katrin, Desktop)

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Events / it-sa 2026 Nürnberg                                      │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  it-sa 2026 — IT-Security Messe · 21.–23. Oktober · Nürnberg       │
│  Berater vor Ort: Thomas, Stefan, Katrin                             │
│                                                                      │
│  TARGET-ACCOUNTS AUF DER MESSE                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ 1. BankCorp AG — Bestandskunde, Dr. Schmidt besucht Stand 4C │   │
│  │    Gesprächsanlass: NIS2-Audit Bedarf (Signal letzte Woche)  │   │
│  │    → Thomas                                                  │   │
│  │                                                              │   │
│  │ 2. InsureTech GmbH — Zielaccount, CTO auf Speakerliste       │   │
│  │    Gesprächsanlass: Cloud-Migration (Pipeline-Opportunity)   │   │
│  │    → Stefan (Expertise passt)                                │   │
│  │                                                              │   │
│  │ 3. AutoGroup SE — Neukontakt, 3 Mitarbeiter registriert      │   │
│  │    Gesprächsanlass: SAP-Security (Stellenanzeige-Signal)     │   │
│  │    → Katrin                                                  │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  BERATER-BRIEFINGS                                                   │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ 📋 Thomas-Briefing: 3 Kontakte, 2 Bestandskunden, 1 Signal  │   │
│  │ 📋 Stefan-Briefing: 2 Kontakte, 1 Opportunity, 1 Neukontakt │   │
│  │ 📋 Katrin-Briefing: 4 Kontakte, 2 Neukontakte, 2 Signale    │   │
│  │                                                              │   │
│  │ [Briefings an Team senden]                                   │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  🌐 LANDING-PAGE FÜR EVENT                                         │
│  AI-generierte NIS2-Kompetenz-Landingpage für it-sa-Kampagne       │
│  [Landing-Page generieren]  [Vorschau]                              │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### [J11-S2] Live-Event: Kontakterfassung (Stefan, Mobile)

```
┌─────────────────────────────────┐
│ it-sa 2026 · Live               │
│                                 │
│ [📷 Badge scannen]             │
│ [✏️ Schnell-Notiz]             │
│ [🎤 Voice Memo]                │
│                                 │
│ NEUE KONTAKTE HEUTE (3)        │
│ ┌─────────────────────────────┐ │
│ │ 👤 Dr. Schmidt · BankCorp  │ │
│ │    "Interesse an NIS2-Audit"│ │
│ │    🏷️ Hot Lead              │ │
│ │    📎 Visitenkarte gescannt │ │
│ ├─────────────────────────────┤ │
│ │ 👤 M. Keller · InsureTech  │ │
│ │    "Cloud-Migration Q1/27"  │ │
│ │    🏷️ Warm                  │ │
│ ├─────────────────────────────┤ │
│ │ 👤 F. Lang · AutoGroup     │ │
│ │    "Explorativ, Budget 2027"│ │
│ │    🏷️ Nurture               │ │
│ └─────────────────────────────┘ │
│                                 │
│ [+ Neuen Kontakt erfassen]      │
└─────────────────────────────────┘
```

### [J11-S3] Post-Event: Follow-up + ROI (Katrin, Desktop, 1 Woche später)

Follow-up-Workflows werden automatisch generiert, personalisiert mit Event-Kontext. ROI-Dashboard zeigt: Events → Kontakte → Opportunities → Pipeline-Wert.

---

# Journey 12: Thomas' Morgen-Briefing

**Beteiligte:** Thomas (Solo-Journey)
**Dauer:** 15 Minuten, jeden Morgen
**Der wichtigste Entscheider-Flow — wenn das Cockpit nicht funktioniert, nutzt Thomas Consultry nicht.**

---

### [J12-S1] Cockpit (Thomas, Desktop, 08:00)

```
┌──────────────────────────────────────────────────────────────────────┐
│  CONSULTRY COCKPIT · Thomas Weber                     🔔 4  [Cmd+K]│
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  GUTEN MORGEN, THOMAS · Dienstag, 31. März 2026                    │
│                                                                      │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌─────────┐          │
│  │ Ausl.  │ │Pipeline│ │ DB1 Ø  │ │ Projekte│ │ Bench   │          │
│  │  78%   │ │ 2.1M€  │ │  27%   │ │ 8 aktiv │ │ 3 Ber.  │          │
│  │ 🟡-2%  │ │ 🟢+180K│ │ 🟢 ok  │ │ 🟡 1 risk│ │ 🟡 +1   │          │
│  └────────┘ └────────┘ └────────┘ └────────┘ └─────────┘          │
│                                                                      │
│  ⚡ DEINE AKTIONEN HEUTE                                            │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ 🔴 P0: MedTech Scope-Creep — Change Request prüfen          │   │
│  │        [Öffnen]                                              │   │
│  │ 🟠 P1: Angebotsfreigabe RetailCorp 484K€                     │   │
│  │        [Freigeben] [Details]                                 │   │
│  │ 🟠 P1: Staffing-Konflikt Markus (RetailCorp vs. FinServ)     │   │
│  │        [Entscheiden]                                         │   │
│  │ 🟡 P2: Beziehungserosion Dr. Weber (90 Tage kein Kontakt)   │   │
│  │        [Kontakt planen]                                      │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  📅 DEINE TERMINE HEUTE                                             │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ 10:00 Call mit Dr. Weber (RetailCorp)                         │   │
│  │       [Copilot-Briefing]  ← "Was muss ich wissen?"           │   │
│  │ 14:00 Partner-Meeting: Q2 Pipeline Review                    │   │
│  │       [Forecast vorbereiten]                                 │   │
│  │ 16:30 Staffing-Call mit Maria (Cloud Practice)                │   │
│  │       [Kapazitätsübersicht]                                  │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  📊 DIESE WOCHE                                                     │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  Neue Signale: 12 (3 konvertiert)                             │   │
│  │  Angebote raus: 2 (480K€ + 220K€)                            │   │
│  │  Projekte abgeschlossen: 1 (MedTech, NPS 78)                 │   │
│  │  Berater auf Bench: 3 (Dirk, Clara, Tim)                     │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### [J12-S2] Copilot-Briefing vor Call (Thomas, 09:55)

**Thomas klickt "Copilot-Briefing" neben seinem 10:00-Termin:**

```
┌──────────────────────────────────────────────────────────────────────┐
│  🤖 BRIEFING: Call mit Dr. Weber, RetailCorp · 10:00                │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  KONTEXT                                                             │
│  • SAP-Migration läuft (Milestone 3/5, on track nach Change Req.)   │
│  • Neue Opportunity: NIS2-Compliance (Cross-Selling-Signal)         │
│  • Dr. Weber = CFO, du kennst ihn von BITKOM 2024                  │
│  • Letzter Kontakt: vor 90 Tagen (⚠️)                              │
│                                                                      │
│  EMPFOHLENE GESPRÄCHSPUNKTE                                         │
│  1. Projekt-Update: Migration auf Kurs nach Scope-Anpassung        │
│  2. NIS2-Compliance: "Wir sehen dass ihr eine neue Compliance-     │
│     Abteilung aufbaut — wir haben NIS2-Expertise"                  │
│  3. Beziehungspflege: Event-Einladung für it-sa anbieten           │
│                                                                      │
│  VORSICHT                                                            │
│  • Dr. Müller (Pulse-Check KW 14): "Timeline M4 macht mir Sorgen"  │
│    → Stefan hat Change Request eingereicht, Situation adressiert    │
│                                                                      │
│  "Gibt es offene Rechnungen bei RetailCorp?"                        │
│  → Copilot: "Nein, alle Rechnungen bezahlt. Ø Zahlungsziel: 28T." │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

---

# Journey 13: Financial Review / Quartals-Report

**Beteiligte:** Thomas (Analyse), Martina (Report-Export)
**Touchpoints:** Financial Dashboard → Drill-Down → Forecast → Export

---

### [J13-S1] Financial Intelligence Dashboard (Thomas, Desktop)

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Financial Intelligence / Q1 2026                      [Export ▼]  │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────┬──────────┬──────────┬──────────┬───────────┐          │
│  │ Umsatz   │ DB1 Ø    │ Auslast. │ Bench-   │ Cash-Flow │          │
│  │ Q1       │          │          │ Kosten   │ Prognose  │          │
│  │ 2.4M€    │  27.3%   │  78%     │  45K€    │ +380K€    │          │
│  │ 🟢 +12%  │ 🟢 +1.2PP│ 🟡 -2%   │ 🟡 +15K  │ nächste 4W│          │
│  └──────────┴──────────┴──────────┴──────────┴───────────┘          │
│                                                                      │
│  DB1 PRO SERVICE LINE                                                │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  SAP Practice        ████████████████████ 31%  (Ziel: 25%) │   │
│  │  Cloud Practice      ████████████████░░░░ 24%  (Ziel: 25%) │   │
│  │  Security Practice   ████████████░░░░░░░░ 19%  ⚠️ unter Z.│   │
│  │  Change Mgmt         ████████████████████ 29%              │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  REVENUE FORECAST Q2                                                │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  Laufende Projekte:  1.8M€ (sicher)                          │   │
│  │  Pipeline (gewichtet): 680K€                                  │   │
│  │  Verlängerungen (wahrscheinlich): 320K€                      │   │
│  │  ─────────────────────────────────                           │   │
│  │  Expected: 2.8M€  │  Best: 3.4M€  │  Worst: 2.2M€          │   │
│  │                                                              │   │
│  │  ⚠️ Capacity-Constrained: Selbst im Best Case maximal       │   │
│  │  3.1M€ realisierbar (2 Senior-Gaps in Cloud)                │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  💬 "Zeig mir die Top-5 profitabelsten Projekte letzes Quartal"     │
│  → Analytics-Agent Antwort inline                                    │
│                                                                      │
│  [PDF-Report generieren]  [Partner-Meeting-Deck]  [Excel-Export]    │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Handoff → Martina:** "PDF-Report generieren" → Martina prüft Formatierung, exportiert

---

# Journey 14: Skill-Gap → Recruiting → Onboarding

**Beteiligte:** Maria (Gap erkennen), Thomas (Budget), Martina (Recruiting-Prozess)
**Verbindet:** Journey 6 (Kapazitätsplanung) → Journey 4 (Onboarding)

---

### [J14-S1] Skill-Strategy Planner (Maria, Desktop)

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Skill-Strategy Planner / Cloud Practice                            │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  MARKT-NACHFRAGE vs. EIGENES PORTFOLIO                              │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Kompetenz        Nachfrage-Trend   Eigene Kapazität  Gap    │   │
│  │ AWS Architect    ██████████ +40%    ██████ 2 Senior   -2    │   │
│  │ FinOps           █████████░ +300%   ░░░░░░ 0          -2    │   │
│  │ Kubernetes       ██████░░░░ +15%    ████░░ 3          OK    │   │
│  │ Cloud Security   ████████░░ +60%    ██░░░░ 1          -1    │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  AI INVESTITIONS-EMPFEHLUNG                                          │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ FinOps (Priorität 1 — 0 Berater, 300% Nachfrage-Trend):     │   │
│  │ • 1 Berater weiterbilden (Boris K., hat AWS-Basis) → 4 Wo.  │   │
│  │ • 1 Festanstellung (ROI positiv ab Monat 4)                 │   │
│  │                                                              │   │
│  │ AWS Architect (Priorität 2):                                  │   │
│  │ • 1 Cross-Staffing aus SAP-Practice (Markus, AWS-Zertifikat) │   │
│  │ • 1 Freelancer kurzfristig (Gulp, ~1.200€/Tag)              │   │
│  │                                                              │   │
│  │ [Recruiting-Anfrage erstellen]  [Weiterbildung planen]       │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**"Recruiting-Anfrage erstellen" → Martina bekommt strukturierte Anfrage → Recruiting-Pipeline → Journey 4 (Onboarding)**

---

# Journey 15: Ausschreibungs-Intelligence

**Beteiligte:** Katrin (Primary), Thomas (Freigabe bei großen Ausschreibungen)

---

### [J15-S1] Ausschreibungs-Feed (Katrin, Desktop)

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Ausschreibungen / Aktuelle Matches                                 │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  3 neue Ausschreibungen mit >70% Match                              │
│                                                                      │
│  ┌─ TED-2026-0847 ───────────────────────── Match 82% ────────────┐│
│  │  Bundesagentur für Arbeit                                       ││
│  │  "SAP-HCM zu SAP SuccessFactors Migration"                     ││
│  │  Volumen: 400–600K€ · Frist: 15. Mai 2026 · Ort: Nürnberg     ││
│  │                                                                 ││
│  │  AI-ZUSAMMENFASSUNG                                             ││
│  │  Migration von SAP HCM auf SuccessFactors für 12.000 MA.       ││
│  │  Gefordert: Erfahrung mit öffentlichem Dienst, EVB-IT.         ││
│  │  Eignungskriterien: 3 Referenzprojekte >200K€, ISO 27001.      ││
│  │                                                                 ││
│  │  EIGNUNG                                                        ││
│  │  ✅ SAP HCM → SuccessFactors: 2 Berater mit Erfahrung          ││
│  │  ✅ Referenzen >200K€: 4 passende vorhanden                    ││
│  │  ⚠️ ISO 27001: Zertifizierung abgelaufen (Erneuerung KW 20)   ││
│  │  ⚠️ Öff. Dienst-Erfahrung: nur 1 Projekt                      ││
│  │                                                                 ││
│  │  [Antwort drafting starten]  [Details]  [Nicht bewerben]        ││
│  └─────────────────────────────────────────────────────────────────┘│
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**"Antwort drafting starten" → AI Canvas für Ausschreibungsantwort (ähnlich Offer Composition, aber EVB-IT-konform)**

---

# Journey 16: Knowledge-Canvas — Playbook erstellen

**Beteiligte:** Stefan (erstellt), Lisa (konsumiert)

---

### [J16-S1] Knowledge-Canvas (Stefan, Desktop)

**Trigger:** Stefan will ein wiederverwendbares SAP-Migrationschecklisten-Playbook erstellen

```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ Knowledge-Canvas / Neues Playbook                                  │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  💬 PROMPT: "Erstell eine SAP-Migrationscheckliste für Retail        │
│  basierend auf unseren letzten drei Projekten"                       │
│                                                                      │
│  AI GENERIERT (aus 3 Projekten synthetisiert):                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  📋 SAP S/4HANA Retail-Migration Playbook                    │   │
│  │                                                              │   │
│  │  Quelle: MedTech (Q2/26), FashionGroup (Q4/24),              │   │
│  │          AutoParts (Q1/25)                                    │   │
│  │                                                              │   │
│  │  Phase 1: Discovery & Assessment (2–3 Wochen)                │   │
│  │  ☐ Ist-Analyse der SAP-Landschaft                            │   │
│  │  ☐ Custom-Code-Analyse (Transaktion: SE38, SE80)             │   │
│  │  ☐ Datenvolumen-Assessment                                   │   │
│  │  ☐ Integrationslandkarte (RFC, IDoc, BAPI)                   │   │
│  │  💡 Lesson Learned (MedTech): "Frühzeitig Legacy-Systeme     │   │
│  │     identifizieren — bei MedTech kamen 3 nach der Analyse"   │   │
│  │                                                              │   │
│  │  Phase 2: Design (3–4 Wochen)                                │   │
│  │  ☐ Fit-to-Standard-Workshops...                               │   │
│  │                                                              │   │
│  │  [✏️ Bearbeiten]  [💬 "Füge NIS2-Compliance-Checks ein"]    │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  [Als Knowledge-Baustein speichern]  [Als PDF exportieren]          │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

---

# Journey 17: Client Portal Feedback → Interner Feedback-Loop

**Beteiligte:** Dr. Müller (gibt Feedback), Stefan (reagiert), Thomas (wird bei Risiko informiert)
**Vertieft Journey 3 [J3-S3] mit dem Feedback-Kreislauf**

---

### [J17-S1] Pulse-Check Ergebnis → Internes Routing

**Trigger:** Dr. Müller hat Pulse-Check ausgefüllt: 4/5 Kommunikation, 3/5 Fortschritt, Freitext: "Timeline M4 eng"

**Stefans Notification:**
```
┌─────────────────────────────────┐
│ 📊 KUNDENFEEDBACK               │
│ MedTech GmbH · Pulse-Check #3   │
│                                 │
│ Kommunikation:  ★★★★☆  4/5     │
│ Fortschritt:    ★★★☆☆  3/5 ⚠️  │
│ Freitext:       "Timeline M4    │
│                  macht Sorgen"   │
│                                 │
│ 🤖 Copilot-Einordnung:          │
│ "Fortschritt unter 4 ist ein    │
│  Risiko-Signal. Timeline-Sorge  │
│  korreliert mit Scope-Creep     │
│  aus KW 14. Empfehlung:         │
│  proaktiv kommunizieren."        │
│                                 │
│ [Antwort formulieren]           │
│ [Change-Request-Status teilen]  │
│ [Thomas informieren]            │
│                                 │
└─────────────────────────────────┘
```

**Automatische Anreicherung:**
- Feedback fließt in Consultant Knowledge Graph (Stefan: "Kunde zufrieden mit Kommunikation")
- Fortschritts-Warnung wird als Risiko-Signal dem Projekt-Dashboard hinzugefügt
- NPS-Trend über alle Pulse-Checks wird auf Account-Dashboard sichtbar

---

# Komplett-Übersicht: 17 Journeys × Personas × Screens

| # | Journey | Primary Persona | Screens | Modul(e) |
|---|---------|----------------|---------|----------|
| 1 | Signal → Angebot → Outreach | Katrin + Thomas | 7 | Signal, Opp, Staffing, Offer, Outreach |
| 2 | Staffing-Anfrage → Team-Lock | Katrin + Stefan + Lisa | 4 | Staffing, Workforce |
| 3 | Projekt-Risiko → Eskalation | Stefan + Thomas + Dr. Müller | 3 | Project Exec, Client Portal |
| 4 | Berater-Onboarding | Martina + Lisa | 4 | Knowledge Graph, Workforce |
| 5 | Projektabschluss → Knowledge | Stefan + Lisa + Katrin | 4 | Knowledge, Methodology |
| 6 | Practice-Lead Kapazität | Maria + Thomas | 2 | Workforce, Capacity Planner |
| 7 | Account Review & Beziehung | Thomas + Katrin | 1 | Client & Account |
| 8 | E-Mail → Opportunity | Katrin | 1 | Opportunity Intelligence |
| 9 | Offer Composition Canvas | Katrin + Thomas + Martina | 2 | Offer Composition, Client-Facing |
| 10 | Vertragsverhandlung Canvas | Thomas + Martina | 1 | Contract Intelligence |
| 11 | Event-Lifecycle | Katrin + Stefan | 3 | Events & Network |
| 12 | Thomas' Morgen-Briefing | Thomas | 2 | Dashboard, AI Copilot |
| 13 | Financial Review | Thomas + Martina | 1 | Financial Intelligence |
| 14 | Skill-Gap → Recruiting | Maria + Martina | 1 | Workforce, Talent Acquisition |
| 15 | Ausschreibungs-Intelligence | Katrin | 1 | Market Intelligence |
| 16 | Knowledge-Canvas Playbook | Stefan | 1 | Methodology & IP |
| 17 | Client Feedback-Loop | Dr. Müller + Stefan | 1 | Client Portal, Project Exec |

**Gesamt: 17 Journeys, 39 Screens, 7 Personas (inkl. Maria als neue Persona)**

---

*Consultry User Journeys v1.0 — Vollständige Journey Map für alle 18 Module + AI Experience Layer*
