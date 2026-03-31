# Katrin Engel — BD-Leiterin: Persona-spezifische User Journeys

**Persona:** Katrin Engel, Head of Business Development
**Unternehmen:** mpl Consulting GmbH
**Consultry-Zeit:** 4–6 Stunden/Tag (Power User)
**Version:** 1.1
**Datum:** 31. März 2026
**Design System:** [Consultry Design System v1.3](../../design/Consultry-Design-System-v1.3.md)
**Screen Specs:** [Screen Spec Index](../../design/screen-specs/_SCREEN-SPEC-INDEX.md)
**Companion:** [PRD v3.1](../Consultry-PRD-v3.0-Final.md), [User Journeys v1.1](../Consultry-User-Journeys-v1.0.md)

**Kontext:** Dieses Dokument konzentriert sich vollständig auf die Journeys und Workflows von Katrin Engel — die Person, die für Consultry unbedingterreichbar sein muss. Katrin sitzt zwischen Signal-Erkennung (Morgens, mobil) und der Angebotsvergabe (Nachmittags, Desktop). Sie ist die primäre Datennutzerin und Entscheidungsträgerin in Journeys 1, 2 und 4. Ihre Frustrationen treiben das Produktdesign.

---

## Katrins primäre Surfaces & AI-Interaktionsmuster (Synthese)

| Surface | Nutzungshäufigkeit | Typische Aktion | AI-Rolle |
|---|---|---|---|
| **Command Bar** | 10–15x pro Tag | "Zeig mir verfügbare SAP-MM-Berater ab Juni" | Primär: Schnelle Abfragen |
| **Signal-Feed** (Mobile) | Jeden Morgen, 15–20 Min | Neue Signale bewerten, beste in Opportunities konvertieren | Priorisierung vorberechnet |
| **Opportunity Detail** | Mehrmals täglich, 60–90 Min | Opportunities qualifizieren, Engagement-Briefe lesen, Pipeline managen | Copilot: kontextuell, proaktiv |
| **Staffing & Matching** | 2–3x pro Woche, 30 Min | Team-Vorschläge prüfen, Varianten vergleichen | AI: Varianten-Generierung |
| **Angebots-Canvas** | 2–3x pro Woche, 60–120 Min | Proposals iterativ mit AI erstellen und verfeinern | AI: Iteration primär, nicht Gen |
| **Outreach Composer** | 1–2x pro Woche, 30 Min | E-Mails personalisieren, Kampagnen konfigurieren | AI: Generierung + Prompt-Anpassung |
| **Dashboard** | Morgens + Abends, 5 Min | Pipeline-KPIs, offene Aktionen | Monitoring nur |

**AI-Präferenz-Hierarchie:**
1. **Command Bar** — Katrin denkt schneller als sie klickt. "Erstell Engagement-Brief für RetailCorp" ist ihr natürlicher Modus.
2. **Canvas (iterativ)** — Für Angebote. Sie will iterieren, nicht akzeptieren: "Kürze die Methodik", "Ersetze Markus durch Lisa und zeig die Margin".
3. **Copilot (kontextuell)** — Auf der Opportunity als Nachschlagewerk: "Warum empfiehlst du diesen Berater?"
4. **Chat (explorative Recherche)** — Nur für Historien-Fragen: "Wie haben wir bei den letzten Retail-Deals abgeschnitten?"

---

## Design-Implikationen für Katrins Workflows

1. **Command Bar ist Mission-Critical.** Muss innerhalb 200ms reagieren, Fuzzy-Matching verstehen, Kontext-aware sein. Katrin tippt "RetailCorp" und erwartet sofort alles zu RetailCorp.

2. **Signal-Feed muss mobiltauglich und scannbar sein.** Morgens in der S-Bahn: große Touch-Targets, Match-Score prominent, 1-Tap "Als Opportunity anlegen".

3. **Canvas muss Prompt-Iteration unterstützen, nicht nur Generierung.** Katrin generiert einmal und iteriert 5–10 Mal. Undo, Abschnitt-spezifische Prompts, Live-Pricing-Updates.

4. **Approval-Flow braucht Push + Kontext.** Wenn Thomas freigeben soll, muss er den vollen Kontext in der Notification sehen — nicht "Freigabe angefordert" sondern "RetailCorp, SAP-Migration, 480K€, Margin 28%, Team Markus+Lisa+Tim".

5. **Outreach-Feedback muss sichtbar sein.** "E-Mail geöffnet nach 2h" als Update im Opportunity-Feed, nicht in einem separaten Outreach-Report.

---

# Journey 1: Signal → Opportunity → Angebot → Freigabe → Outreach

**Der wichtigste Flow im ganzen Produkt.** Wenn dieser Flow nicht überzeugt, verliert Consultry Katrin — und ohne Katrin gibt es keinen Umsatz.

**Beteiligte Personas:**
- **Katrin** (Primär): Signal-Erkennung, Opportunity-Qualifizierung, Team-Zusammenstellung, Angebotserstellung, Outreach
- **Thomas** (Sekundär): Approval, Kommentare, Kundenbeziehungen
- **Stefan, Lisa, Tim** (Kontext): Im Matching, im Team, feedback on projects

**Dauer:** 3–4 Stunden (mit Consultry) vs. 2–4 Tage (ohne, über 5+ Tools)
**Touchpoints:** Signal-Feed → Opportunity Detail → Engagement-Brief → Staffing → Angebots-Canvas → Approval → Outreach

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

## Phase C: Team zusammenstellen (Katrin, Desktop, 09:30)

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

## Phase E: Freigabe (Thomas, Mobile/Desktop, 14:30)

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

## Phase F: Outreach senden (Katrin, Desktop, 15:30)

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
- E-Mail ist komplett vorgeneriert aus: Engagement-Brief + Signal-Kontext + Warm-Path + Berater-Match
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
| A | Signal-Feed [J1-S1] | Katrin | Mobile | 15–20 Min | Score bewerten, beste konvertieren |
| A | Signal-Conversion [J1-S2] | Katrin | Mobile | 1 Min | 1-Tap zur Opportunity |
| B | Opportunity Detail [J1-S3] | Katrin | Desktop | 20–30 Min | Brief lesen, qualifizieren, Kommentare |
| B | Thomas Kommentar [J1-S3a] | Thomas | Mobile | — | Reagiert auf @Mention |
| C | Team-Matching [J1-S4] | Katrin | Desktop | 15–20 Min | Varianten vergleichen, Team auswählen |
| D | Angebots-Canvas [J1-S5] | Katrin | Desktop | 60–120 Min | Proposal iterativ erstellen + verfeinern |
| E | Approval [J1-S6] | Thomas | Mobile/Desktop | 5 Min | Pricing prüfen, freigeben |
| F | Outreach [J1-S7] | Katrin | Desktop | 15 Min | E-Mail personalisieren, senden |

**Gesamtzeit mit Consultry:** ~3 Stunden (Signal bis Angebot gesendet)
**Ohne Consultry:** 2–4 Tage über 5+ Tools (E-Mail, Excel, LinkedIn, internes Wiki, Telefon)

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
┌──────────────────────────────────────────────┐
│ 📨 STAFFING-ANFRAGE SENDEN                   │
│                                              │
│ Projekt: RetailCorp AG — SAP S/4HANA Migr.  │
│ Zeitraum: KW 20–46 (Mai–November 2026)       │
│ Ort: München (Hybrid, 3 Tage vor Ort)        │
│                                              │
│ Empfänger:                                   │
│ ┌──────────────────────────────────────────┐ │
│ │ ☑ Markus S. · Lead · KW 20–46 · 1.800€ │ │
│ │ ☑ Lisa T.   · Change · KW 20–42 · 1.4K€│ │
│ │ ☑ Tim K.    · Data · KW 20–36 · 1.1K€  │ │
│ └──────────────────────────────────────────┘ │
│                                              │
│ Nachricht an Berater:                        │
│ ┌──────────────────────────────────────────┐ │
│ │ "Retail-Kunde, S/4HANA-Migration,        │ │
│ │  spannendes Projekt mit starkem Team.     │ │
│ │  Details im Brief."                       │ │
│ └──────────────────────────────────────────┘ │
│                                              │
│ ☑ Engagement-Brief anhängen (anonymisiert)   │
│ ☑ Opportunity-Link beilegen                  │
│                                              │
│ [Anfragen senden]  [Abbrechen]               │
└──────────────────────────────────────────────┘
```

**Verhalten nach "Senden":**
- Jeder Berater bekommt eine Staffing-Notification (Push + In-App)
- Status pro Berater: "Angefragt" (gelber Badge)
- Timer startet: Auto-Reminder nach 24h ohne Antwort

---

### [J2-S4] Staffing-Status Übersicht

**Trigger:** Katrin sieht Notifications: "Markus hat zugesagt", "Lisa hat zugesagt"

**Layout:**
```
┌──────────────────────────────────────────────────────────────────────┐
│ ◀ RetailCorp AG / Staffing Status                                    │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ANFRAGE-STATUS                                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ GESAMT: 3/3 zugesagt ✅                                       │   │
│  │ Alle Zusagen erhalten. Team locked.                           │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌─ Markus S. ──────────────────────────────────────────────────┐   │
│  │ ✅ ZUGESAGT (12:15)                                           │   │
│  │ Rolle: Lead Consultant · Zeitraum: KW 20–46                  │   │
│  │ "Freue mich auf RetailCorp! Retail-Erfahrung ist genau      │   │
│  │  mein Schwerpunkt."                                          │   │
│  │ [Details] [Entfernen]                                         │   │
│  └─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘   │
│                                                                      │
│  ┌─ Lisa T. ────────────────────────────────────────────────────┐   │
│  │ ✅ ZUGESAGT (17:15)                                           │   │
│  │ Rolle: Change Mgmt · Zeitraum: KW 20–42                      │   │
│  │ "MedTech endet KW 19 — timing ist knapp aber machbar."       │   │
│  │ [Details] [Entfernen]                                         │   │
│  └─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘   │
│                                                                      │
│  ┌─ Tim K. ─────────────────────────────────────────────────────┐   │
│  │ ✅ ZUGESAGT (15:30)                                           │   │
│  │ Rolle: Data Migration · Zeitraum: KW 20–36                   │   │
│  │ [Details] [Entfernen]                                         │   │
│  └─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘   │
│                                                                      │
│  [✅ Team locked — Back to Opportunity]                              │
│  [💬 Nachricht an Team]                                              │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

**Komponenten:**
- `StaffingStatusHeader` — Fortschritts-Summary: "3/3 zugesagt" mit Completion-Badge
- `BeraterStatusCards` — Pro Berater: Status (✅ Zugesagt / ⏳ Angefragt / ❌ Abgelehnt), Zeitstempel, optionale Notiz/Begründung
- `ActionButtons` — Team-Lock, Nachricht an Team, Bei Bedarf ersetzen

**Entscheidungspunkte:**
- Alle zugesagt → "Team locked" → Weiterleitung zu Angebot + Staffing-Bestätigungs-E-Mail
- Jemand abgelehnt → "Ersetzen?" → Matching-Screen öffnet sich mit Alternativen
- Timeout nach 48h ohne Antwort → Automatisches Reminder + optionale Auto-Eskalation an Thomas

---

## Journey 2 — Zusammenfassung

| Phase | Screen | Persona | Gerät | Dauer | Key Action |
|---|---|---|---|---|---|
| A | Staffing-Anfrage [J2-S1] | Katrin | Desktop | 5 Min | Anfragen senden |
| B | Notification [J2-S2] | Stefan/Lisa | Mobile | — | Anfrage empfangen + entscheiden |
| C | Status [J2-S4] | Katrin | Desktop | — | Zu/Absagen tracken, Team locked |

**Gesamtzeit:** 2–4 Stunden (vs. 2–3 Tage ohne System)

---

# Journey 4: Berater-Onboarding → Profil → Erstes Matching

**Beteiligte Personas:** Martina (Admin), Lisa (neue Beraterin), Katrin (sieht Tim im Matching)
**Dauer:** 7 Tage (System-begleitet) vs. 4–8 Wochen (ohne: CV in Word, Excel-Listen, keine Auffindbarkeit)

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

## Journey 4 — Zusammenfassung (Katrins Perspektive)

| Phase | Screen | Persona | Gerät | Dauer | Key Action |
|---|---|---|---|---|---|
| C | Matching [J4-S4] | Katrin | Desktop | — | Tim erstmals matchbar sehen |

**Tag 1 bis Matchbarkeit:** 7 Tage (vs. 4–8 Wochen ohne System)

---

# Katrins Surfaces & AI-Interaktionsmuster (Detailliert)

## AI-Präferenz: Command Bar ist primär

**Verwendung:** 10–15 Mal pro Tag
**Typische Queries:**
- "Zeig mir verfügbare SAP-MM-Berater ab Juni"
- "Erstell Engagement-Brief für RetailCorp"
- "Pipeline für Q2 2026"
- "RetailCorp" (Fuzzy-Search über alle Entitäten)
- "Alle offenen Approvals"

**Design-Anforderung:** Response Zeit <200ms, Fuzzy-Matching, Kontext-aware (wo bin ich gerade?)

---

## AI-Präferenz: Canvas (iterativ, nicht generativ)

**Verwendung:** 2–3x pro Woche, 60–120 Min pro Session
**Workflow:**
1. AI generiert Proposal in ~30 Sekunden
2. Katrin prüft alle Abschnitte
3. Iteriert 5–10 Mal mit Prompts:
   - "Kürze Methodik auf halbe Seite"
   - "Ersetze Tim durch günstigeren Berater und zeig die neue Margin"
   - "Füge MedTech-Referenz ein"
   - "Erstelle Premium-Variante"

**Design-Anforderung:**
- Undo/Redo support
- Abschnitt-spezifische Prompts
- Live-Pricing-Updates
- Keine "Accept/Reject"-Semantik, sondern iteratives Verfeinern

---

## AI-Präferenz: Copilot (Nachschlagewerk)

**Verwendung:** Passiv, auf jeder Opportunity
**Typische Fragen:**
- "Warum Score 94?"
- "Wer hat Retail-SAP-Erfahrung?"
- "Warum empfiehlst du diesen Berater?"

**Design-Anforderung:** Kontextuelle Erklärungen, nicht proaktive Vorschläge

---

## AI-Präferenz: Chat (Explorative Recherche, selten)

**Verwendung:** 1–2x pro Woche
**Typische Fragen:**
- "Wie haben wir bei den letzten Retail-Deals abgeschnitten?"
- "Welche Skills sind für SAP-Migration wichtig?"

**Design-Anforderung:** Historien-Abfragen, Synthese über viele Cases

---

# AI-Interface-Routing: Command Bar vs. Canvas vs. Copilot vs. Chat

Diese Sektion definiert GENAU, wann Katrin welche AI-Schnittstelle nutzt und wie sie ineinander übergehen.

## Command Bar (10–15x/Tag): Der schnelle Eingang

**Typische Kommandos:**
- Navigation: "Geh zu RetailCorp", "Pipeline", "Alle offenen Approvals"
- Schnelle Abfragen: "Verfügbare SAP-MM-Berater ab Juni", "DB1 MedTech", "Verfügbare Berater Mai"
- Aktions-Auslösung: "Erstell Opportunity für MedTech", "Erstell Engagement-Brief für RetailCorp"

**Response-Verhalten:**
- Navigation → Inline-Navigation zu Entity oder Screen
- Schnelle Fakten → Inline-Antwort mit Drill-Down-Option ("Markus (Senior), €250/Tag, SAP-Retail-Experte, verfügbar ab 15. Juni")
- Aktionen → Öffnet Canvas oder Zielscreen

**Latenz-Anforderung:** <200ms

## Eskalation: Wann Command Bar zu Canvas wird

**Trigger:** Befehle, die Iteration erfordern

Beispiel: "Erstell Angebot für RetailCorp"
- Command Bar parst den Befehl
- Öffnet Angebots-Canvas mit initialer Generierung
- Canvas ist jetzt der Workspace — Katrin iteriert 5–10 Mal

Das ist NICHT "Command Bar erzeugt Angebot". Sondern: "Command Bar ist ENTRY POINT, Canvas ist WORKSPACE."

## Eskalation: Wann Command Bar zu Chat wird

**Trigger:** Explorative Fragen ohne klare, einzelne Antwort

Beispiel: "Wie haben wir bei Retail-Deals abgeschnitten?"
- Command Bar erkennt: Das ist eine analytische Frage, nicht navigativ oder aktional
- Delegiert an Analytics-Agent (Chat-Interface)
- Analytics-Agent öffnet als Modal oder Sidebar
- Chat ermöglicht Multi-Turn ("Was war die durchschnittliche Margin?" → "Welche Berater waren beteiligt?" → "Wer war Account Owner?")

## Copilot: Der "Colleague Over Your Shoulder"

**Präsenz:** Sidebar, immer präsent, auf jeder Opportunity

**Verhalten:** Proaktiv, nicht reaktiv
- Katrin öffnet Opportunity → Copilot analysiert sofort und schlägt vor
- "Match-Score: 94. Warum?" → Erklärt in 1 Klick
- "Interessanter Berater: Markus. Retail-SAP-Experte, letztes Jahr bei fashion-group-x"
- "Team-Variante 2: Günstiger (Margin +3%), Risiko Lieferzeit"

**Kritisch:** Copilot reaktiert auf KONTEXT. Katrin ruft ihn nicht an — er schaut der Katrin über die Schulter und flüstert Hinweise.

## Chat (Knowledge/Analytics Agent): Multi-Turn Exploration

**Verwendung:** Nur wenn echte Exploration nötig ist

Beispiele:
- "Welche Skills braucht man für SAP-HCM Migrationen?"
- "Wie haben wir bei MedTech Deals abgeschnitten?"
- "Welche SAP-Module sind für Retail am komplexesten?"

**Katrin nutzt das SELTEN.** Sie bevorzugt Command Bar + Canvas. Chat ist der "letzte Ausweg" für Fragen, die komplexer sind als ein schneller Befehl.

---

## Entscheidungsbaum: Katrins mentales Modell

Wenn Katrin etwas eingeben möchte, denkt sie (unbewusst) so:

```
Katrin tippt...

├── Navigation/Entity-Suche ("RetailCorp", "Pipeline")
│   → Command Bar: Inline-Navigation zu Entity oder List
│   → Latenz: <200ms
│
├── Einfache Fakten-Abfrage ("DB1 MedTech", "Verfügbare Berater Mai")
│   → Command Bar: Inline-Antwort mit Daten-Card
│   → Struktur: [Fakten] + [Drill-Down-Option] + [Aktion-Button]
│   → Latenz: <200ms
│
├── Aktions-Auslösung ("Erstell Angebot", "Starte Outreach")
│   → Command Bar öffnet → Canvas oder Outreach-Screen
│   → Katrin arbeitet iterativ weiter
│
├── Explorative Analyse ("Wie war unsere Win-Rate bei Retail?")
│   → Command Bar erkennt: zu komplex für Inline
│   → Command Bar delegiert → Analytics-Agent (Chat)
│   → Chat öffnet als Modal/Sidebar
│   → Multi-Turn möglich
│
└── Iterative Erstellung (Angebot bearbeiten, Team anpassen)
    → AI Canvas mit Prompt Bar
    → Undo/Redo unterstützt
    → Keine "Accept/Reject"-Semantik
    → Lebendige Iteration, nicht Generierung+Approval
```

---

## Implementation: Routing-Logik im Backend

Für Engineers:

```
Command Bar Input → Klassifikation:

IF input matches navigation pattern (Entität-Name, Entität-ID)
  → NavigationRouter → Entity Detail oder List Screen
  LATENCY: <50ms (Fuzzy-Match im Index)

ELSE IF input matches fact-query pattern ("Berater XYZ", "Verfügbar", "Margin")
  → FactQueryRouter → Knowledge Graph / DB Query
  RESPONSE: Inline Card mit Fakten + Drill-Down
  LATENCY: <150ms (mit Caching)

ELSE IF input matches action pattern ("Erstell", "Starte", "Sende")
  → ActionRouter → Canvas / Screen Opener
  RESPONSE: Opens Workspace
  NOTE: Der Canvas wird mit Initials generiert, dann Iteration

ELSE IF input matches analytical pattern ("Wie", "Analyse", "Vergleich")
  → AnalyticsRouter → Chat-Agent
  NOTE: Agent antwortet mit Multi-Turn-Chat, nicht Inline
  LATENCY: <500ms für First Response

ELSE
  → Fallback: Fuzzy-Suche über alle Oberflächen
```

---

# Fehlende Journeys für Katrin (Sollte es geben, aber noch nicht definiert)

Diese Workflows sind für Katrins Tagesarbeit kritisch, aber nicht in den 17 initialen Journeys abgedeckt:

## 1. Discovery-Engine: Proaktive Suchflows

**Problem:** Katrin hat gute Signale, aber manchmal braucht sie proaktiv zu suchen:
- "Zeig mir alle Unternehmen in Retail mit >500 MA, die SAP migriert haben"
- "Wer hat letzten Monat einen neuen CTO geholt?"
- "In welchen Branchen ist Tim verfügbar?"

**Sollte-Journey:**
- Saved Searches
- Result Tagging (als Opportunity, als Signal, als zu verfolgen)
- Alert-Konfiguration
- Periodische Reports

---

## 2. Pipeline-Hygiene: Stale-Opportunity-Flow

**Problem:** Katrin hat hunderte Opportunities, aber viele sind "dead" — sie weiß es nur nicht.

**Sollte-Journey:**
- "Stale Opportunities" (>30 Tage keine Aktivität) als täglicher Summary
- 1-Click Archivierung oder Reaktivierung
- Reactivation-Prompts: "Soll ich RetailCorp anrufen?"
- Opportunity Milestone Tracking

---

## 3. Outreach-Followup-Tracking

**Problem:** Katrin sendet E-Mails, aber sieht nicht was passiert (Öffnungen, Klicks, keine Antwort).

**Sollte-Journey:**
- Tracking-Dashboard pro Opportunity/Campaign
- "E-Mail geöffnet nach 2h" als inline Update im Feed
- "3 Tage keine Antwort" → Auto-Reminder generieren
- Engagement-Scoring (warm/cold)

---

## 4. Event-Vorbereitung

**Problem:** Katrin geht zu Messen/Konferenzen, braucht Kontext über Attendees.

**Sollte-Journey:**
- Event-Calendar Integration
- "Wer aus meiner Pipeline geht zur BITKOM 2026?"
- Pre-Meeting Briefings
- Post-Event Follow-up

---

## Explainability & Trust für Katrin

**Grundprinzip:** Katrin vertraut AI, wenn sie schnell und nachvollziehbar ist. Wenn AI eine Entscheidung trifft, muss Katrin in 1 Klick verstehen WARUM.

### Match-Score Erklärbarkeit

Bei jedem AI-generierten Match-Score (z.B. "Markus: 94% Match für RetailCorp"):
- **Primary Question:** "Warum 94?"
- **Answer:** Copilot erklärt in 1 Klick
- **Struktur:** "94% because: SAP-Retail-Experte (✓), 8 Jahre Erfahrung (✓), aktuell verfügbar (✓), ähnliche Branchengröße (✓), Sprachbarriere: Französisch/Englisch (✓). Risiko: Nie für Fintech-Klient gearbeitet."

### Quellenangabe in generierten Inhalten

Bei Canvas-generierten Texten (Engagement-Brief, Proposal):
- **Anforderung:** Jeder generierte Satz muss eine Quelle haben
- **Struktur:** "Basierend auf MedTech-Projekt Q3/2025 (Projektabschlussbericht) und FashionGroup Q4/2024 (Erfolgsbericht)"
- **Implementation:** Mouse-Over über generierten Text zeigt Quelle: "Diese Methodik stammt aus MedTech-Projekt (Dr. Sarah Müller, 2025-09-15)"
- **UI:** Faint Citation-Icons (z.B. »), auf Hover oder Click expandierbar

### Feedback-Mechanismus für Verbesserung

Wenn Katrin einen Vorschlag für falsch hält:
- **Button:** "Dieser Berater-Vorschlag war falsch" (auf Match-Card)
- **Flow:** Katrin gibt Feedback → System lernt → Zukünftige Vorschläge verbessern sich
- **Transparenz:** "Du hast 12x Feedback gegeben. System verbessert sich."

### Confidence-Indikatoren bei AI-Vorschlägen

Jeder AI-Vorschlag braucht einen klaren Confidence-Level:

```
Hoch (≥3 Datenpunkte): ★★★
- "Markus: SAP-Retail-Experte" 
- Basis: ✓ Zertifikat, ✓ Projekt-Historie (5x), ✓ aktuell verfügbar

Mittel (1-2 Datenpunkte): ★★
- "Alex: SAP-Retail-Kandidat"
- Basis: ✓ Zertifikat, ✗ Projekt-Historia leer, ✓ gerade verfügbar

Niedrig (<1, wenig Daten): ★
- "Jonas: Möglicher SAP-Retail-Fit"
- Markiert als: "Wenig Daten — basiert auf Skills, keine Projekt-Referenzen"
```

**UI-Implementation:**
- Confidence-Stars auf jeder Match-Card oder AI-Empfehlung sichtbar
- Hover zeigt: "Warum nur ★★? Weil: keine aktuellen Retail-Referenzen. Letzter Retail-Einsatz: 2023."
- Low-Confidence-Vorschläge grau oder mit Warnung markiert

---

# Handoff-Punkte zu anderen Personas

## → Handoff zu Thomas (Managing Partner)

**Triggerpunkte:**
1. Canvas-Kommentar "@Thomas — Pricing ok?" → [J1-S5]
2. Freigabe angefordert → [J1-S6]
3. Staffing-Konflikt (z.B. Markus für zwei Projekte) → Eskalation an Thomas

**Thomas-Perspektive:** Siehe thomas-weber-managing-partner.md

---

## → Handoff zu Stefan (Senior Consultant)

**Triggerpunkte:**
1. Staffing-Anfrage für sein Projekt → [J2-S2]
2. Im Team-Matching als Mentor → [J4-S4]
3. Knowledge-Agent-Abfrage → Stefan wird als Experte getaggt

**Stefan-Perspektive:** Siehe stefan-kraus-senior-consultant.md

---

## → Handoff zu Lisa (Consultant)

**Triggerpunkte:**
1. Staffing-Anfrage für Change Management → [J2-S2]
2. Onboarding abgeschlossen → [J4-S4]
3. Im Team-Matching als Mid-Level → [J1-S4]

**Lisa-Perspektive:** Siehe lisa-tran-consultant.md

---

# Katrins Fehler- und Abbruchpfade

## Fehlerfall: Canvas-Fehler während Iteration

**Scenario:** Katrin iteriert am Canvas, gibtet Prompt "Ersetze Tim durch Lisa" → AI Error (Tim-Swap-Engine down)

**Fehlerbehandlung:**
```
❌ "Moment — ich kann diesen Austausch nicht verarbeiten.
   Versuche es in 30 Sekunden erneut oder speichere deinen
   Entwurf und versuche es später."

   [Erneut versuchen] [Entwurf speichern] [Manuell bearbeiten]
```

**Recovery:**
- Undo alle vorherigen Iterationen? Nein, Kata hat Snapshot
- "Manuell bearbeiten": Tim/Lisa in Pricing-Tabelle manuell tauschen, rest auto-update

---

## Fehlerfall: Approval-Timeout

**Scenario:** Katrin hat Angebot freigegeben, wartet auf Thomasfreigabe. Nach 24h immer noch nichts.

**Verhalten:**
- Notification: "Thomas hat noch nicht freigegeben (24h)"
- Option: "Katrin kann jetzt selbst freigeben (Risiko!)" oder "Thomas pushen" oder "An Stellvertreter eskalieren"

---

## Fehlerfall: Consent-Problem bei Outreach

**Scenario:** Katrin schreibt Outreach an Dr. Weber, hat aber keine Consent-Rechtsgrundlage

**Fehlerbehandlung:**
```
🔴 "Consent fehlt — Versand blockiert
   Du hast keinen gültigen Consent für Dr. Weber.
   Verfügbare Optionen:

   • Warm-Path via Thomas suchen (kennt Thomas den CFO?)
   • Opt-In-Link an Weber schicken (E-Mail mit Konsent-Anfrage)
   • Manual Consent-Dokumentation

   [Warm-Path checken] [Opt-In versenden] [Manuell eintragen]
```

---

# Phase-1-Abdeckung: Katrin

Mapping, welche Katrins Screens in Phase 1 (Wochen 1–8) abgedeckt sind.

## Journey 1: Signal → Opportunity → Angebot → Freigabe → Outreach

| Screen | Journey | Phase | Notiz |
|---|---|---|---|
| **J1-S1** Signal-Feed (Mobile) | Signal-Erkennung | Phase 2 | Market Intelligence — noch nicht in Phase 1 |
| **J1-S2** Signal → Opportunity Conversion | Signal-Konvertierung | Phase 1 | Opportunity Intelligence — Core Feature |
| **J1-S3** Opportunity Detail + Engagement-Brief | Opportunity Qualifizierung | Phase 1 (Basis) / Phase 2 (Canvas-erweitert) | Basis: Read-only, Phase 2: Canvas integration |
| **J1-S4** Staffing & Matching | Team-Zusammenstellung | Phase 1 | Workforce + Matching-Engine |
| **J1-S5** Angebots-Canvas | Proposal-Erstellung | Phase 2 | AI Canvasses — komplexe Komponenten |
| **J1-S6** Approval Card | Freigabe-Flow | Phase 1 (Basis) | Notification Basis — einfache Card |
| **J1-S7** Outreach Composer | Outreach senden | Phase 2 | Outreach Engine — separate Modul |

## Journey 2: Staffing-Anfrage → Antwort → Team-Bestätigung

| Screen | Journey | Phase | Notiz |
|---|---|---|---|
| **J2-S1** Staffing-Anfrage | Staffing-Prozess | Phase 1 | Workflow Basis |
| **J2-S4** Staffing-Status Übersicht | Staffing-Tracking | Phase 1 | Status-Komponenten |

## Journey 4: Berater-Onboarding → Profil → Erstes Matching

| Screen | Journey | Phase | Notiz |
|---|---|---|---|
| **J4-S4** Tim taucht im Matching auf | Matching nach Onboarding | Phase 1 | Knowledge Graph + Matching |

---

## Phase-1-Realität für Katrin

**Was Katrin in Phase 1 kann:**
1. Opportunities qualifizieren (J1-S3: Read)
2. Berater matchen (J1-S4)
3. Basis-CVs generieren (einfache Generierung, keine Iteration)
4. Staffing-Anfragen stellen (J2-S1)
5. Staffing-Status prüfen (J2-S4)
6. Approval-Notifications erhalten (J1-S6)
7. Neue Berater ins Matching sehen (J4-S4)

**Was Katrin in Phase 1 NICHT kann:**
- Signal-Feed nutzen (Market Intelligence in Phase 2)
- Opportunities aus Signalen konvertieren (J1-S2: braucht Signal-Feed)
- AI-Angebote iterativ erstellen (J1-S5: Canvas in Phase 2)
- Personalisierte Outreach senden (J1-S7: Outreach Engine in Phase 2)
- AI-gesteuerte Discovery-Suche (Discovery Engine in Phase 2)

---

## Konsequenz für Katrin: Der "WOW-Moment" kommt in Phase 2

**Phase 1 (Wochen 1–8):**
- Katrin kann das System nutzen, wird aber merken: Das ist eine Qualifizierungs- und Matching-Lösung, nicht die vollständige Opportunity-Mastering-Plattform
- Signal-Feed fehlt → Sie muss weiterhin externe Tools für Signale nutzen
- Canvas fehlt → Sie kann nicht iterativ Angebote bauen (nur einfache Generierung)
- Outreach fehlt → Sie sendet E-Mails weiterhin manuell oder extern

**Phase 2 (Wochen 9+):**
- Signal-Feed kommt → Market Intelligence aktiv
- Canvas kommt → Iterative Proposal-Erstellung mit AI
- Outreach kommt → Kampagnen-Verwaltung mit Tracking
- Discovery-Engine kommt → Proaktive Suche
- Jetzt funktioniert der gesamte Flow: Signal → Opportunity → Angebot → Outreach
- **Das ist Katrins "WOW-Moment":** Ein durchgängiger, AI-gestützter Workflow vom Signal zur Outreach

**Implikation für Marketing/Go-Live:**
- Phase 1 ist "Proof of Concept" für Matching und Opportunity-Management
- Katrin wird Phase 1 nutzen, aber nicht lieben
- Phase 2 ist, wenn Katrin sagt: "Das ist game-changing"
- Erwartung setzen: "Phase 1 ist der Anfang. Der wahre Wert kommt in Phase 2."

---

# Design-Token & Komponenten-Referenzen

Alle Komponenten in Katrins Journeys verwenden folgende Design-Token:

**Farben (Consultry Design System v1.2):**
- Primary: `--consultry-coral` (#BF5347, deep warm coral)
- Secondary: `--stone-light` (#E8E5E0, warm neutral)
- Charcoal: `--charcoal` (#111111, dark background)
- Success: `--green` (#4CAF50)
- Warning: `--warm-gray` (#6E6A6B)
- Error: `--red` (#D32F2F)

**Typography:**
- Headlines: Montserrat Bold, 24px / 20px / 16px
- Body: Inter Regular, 14px
- Mono: IBM Plex Mono, 12px (für Code/Pricing)

**Spacing:**
- Card padding: 16px
- Section margins: 24px
- Mobile padding: 16px

**Radius:**
- Cards: `--radius-lg` (20px)
- Buttons: `--radius-md` (12px)
- Inputs: `--radius-sm` (8px)

---

# Abschluss

Dieses Dokument definiert **Katrin Engels kritische Workflows** in Consultry. Sie ist der "North Star User" — wenn Katrin nicht 30% schneller und 80% weniger frustriert ist als in ihrer Welt mit 8 Tools, wird Consultry nicht erfolgreich.

**Wichtigste Erkenntnisse für Engineers:**
1. Command Bar **muss** <200ms response time haben
2. Canvas **muss** iterativ sein, nicht nur generativ
3. Approval-Flow braucht **full context**, nicht nur einen Button
4. Mobile Signal-Feed muss in <15 Minuten consumable sein
5. Outreach-Feedback muss **inline** im Opportunity-Feed sichtbar sein

**Stand:** 31. März 2026
**Nächste Überprüfung:** Nach erstem produktivem Einsatz mit echten Katrins

---

## Design-Anbindung (v1.1)

**Katrins Screen Specs (erstellt):**

| Journey-Screen | Screen Spec | Status |
|---------------|-------------|--------|
| [J1-S1] Signal-Feed (Mobile) | `screen-specs/growth/signal-feed.md` + `screen-specs/mobile/mobile-signal-feed.md` | ✅ Erstellt |
| [J1-S2] Signal → Opportunity | `screen-specs/deal/opportunity-intake.md` | ✅ Erstellt |
| [J1-S3] Opportunity Detail | `screen-specs/deal/opportunity-detail.md` | ✅ Erstellt |
| [J1-S4] Staffing & Matching | `screen-specs/deal/staffing-matching.md` | ✅ Erstellt |
| [J1-S5] Angebots-Canvas | `screen-specs/ai-experience/angebots-canvas.md` | Ausstehend (Tier 6) |
| [J1-S6] Approval Card | `screen-specs/mobile/mobile-approval-card.md` (Thomas) | ✅ Erstellt |
| [J1-S7] Outreach Composer | `screen-specs/deal/outreach-editor.md` | Ausstehend (Tier 7) |

**Katrins Kern-Komponenten:**

| Komponente | Spec | Katrins Nutzung |
|-----------|------|----------------|
| Command Palette | `component-specs/navigation/command-palette.md` | 10-15x/Tag, primaere Navigation |
| Data Tables | `component-specs/data-display/data-tables.md` | Pipeline, Matching-Ergebnisse |
| Score Displays | `component-specs/data-display/score-displays.md` | Match-Scores, Signal-Scores |
| Cards (Signal) | `component-specs/data-display/cards.md` | Signal Feed, Pipeline |
| Bottom Nav Bar | `component-specs/navigation/bottom-navigation-bar.md` | Mobile: Signale, Pipeline, Matching, Copilot |

**v1.1 Changelog:** Design System Referenz v1.2→v1.3. Screen Spec + Component Spec Links hinzugefuegt. Stitch-Referenzen als "NUR Inspiration" markiert.
