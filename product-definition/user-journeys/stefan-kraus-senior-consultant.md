# Stefan Kraus — User Journeys (Senior Consultant / Projektleiter)

**Persona:** Stefan Kraus — Senior Consultant & Projektleiter SAP
**Rolle:** Senior Consultant / Projektleiter
**Konsultive Zeit:** 30–60 Min/Tag (Delivery-fokussiert, Consultry als Arbeitsmittel)
**Alter:** 34 Jahre | 9 Jahre SAP-Erfahrung | Zertifiziert S/4HANA & ABAP
**Spezialisierung:** SAP S/4HANA Migration, Retail-Branche, Datenmigration
**Berichtet an:** Practice Lead SAP (fachlich), Standortleiter München (disziplinarisch)
**Leitet aktuell:** 2 Projekte (4 bzw. 3 Berater)

**Version:** 1.1
**Datum:** 31. März 2026
**Companion:** [Target Personas v1.0](../Consultry-Target-Personas-v1.0.md), [User Journeys v1.1](../Consultry-User-Journeys-v1.0.md), [PRD v3.1](../Consultry-PRD-v3.0-Final.md)
**Design System:** [Consultry Design System v1.3](../../design/Consultry-Design-System-v1.3.md)
**Screen Specs:** [Screen Spec Index](../../design/screen-specs/_SCREEN-SPEC-INDEX.md)

---

## Tagesrhythmus & Consultry-Touchpoints

| Zeit | Ort | Gerät | Aktivität | Consultry-Touch | Dauer |
|---|---|---|---|---|---|
| 08:00–08:30 | Kundenbüro / Hotel / Remote | Laptop | Projekt-Status prüfen, Daily vorbereiten | **Projekt-Dashboard** (J-Daily) | 10–15 Min |
| 08:30–09:00 | Kundenbüro | Laptop | Daily Standup mit Projektteam | — | — |
| 09:00–12:00 | Kundenbüro | Laptop | Facharbeit: Spezifikation, Konfiguration, Workshops | Sporadisch: Knowledge-Agent | 0–5 Min |
| 12:00–13:00 | Unterwegs | Smartphone | Staffing-Anfragen beantworten, Verfügbarkeit updaten | **Staffing-Request Card** (J2) | 5–10 Min |
| 13:00–17:00 | Kundenbüro | Laptop | Facharbeit, Kundenmeetings, Dokumentation | — | — |
| 17:00–17:30 | Hotel / Zug | Smartphone | Quick-Updates, Knowledge-Agent-Anfrage | **Knowledge-Agent** (J-Ad-hoc), **Command Bar** | 5–10 Min |
| Reise-Abende | Hotel | Laptop | Projektdokumentation, Knowledge-Beiträge | **Projekt-Dashboard**, **Knowledge-Upload** (J5) | 15–30 Min |

**Consultry-Zeit pro Woche:** ~4–6 Stunden (vs. 30–40h bei anderen Personas) — Stefan nutzt Consultry präzise und gezielt.

---

## Primäre AI-Interaktionsmuster für Stefan

| Surface | Häufigkeit | Typische Aktion | Zielverhalten |
|---|---|---|---|
| **Knowledge-Agent (Chat)** | 3–5x pro Woche, 5 Min | "SAP-Datenmigration Retail Checkliste", "GxP-Validierung S/4HANA?" | Synthese liefern, nicht Links |
| **Projekt-Dashboard** | Täglich, 10 Min | Milestones, Budget, Health-Score, Team-Status | PL-spezifische Views |
| **Command Bar** | 2–3x täglich, 1 Min | "Geh zu MedTech-Projekt", "Zeig Staffing-Anfragen" | Schnelle Navigation |
| **Copilot auf Dashboard** | 3–5x pro Woche, 3 Min | "Was sind die Top-3-Risiken?", "Budget-Status prognose" | Proaktive Empfehlungen |
| **Staffing-Requests** | 2–3x pro Monat, 5 Min | Request Card: Annehmen/Ablehnen mit Kontext | Mobile-first, All-in-one Card |
| **Profil / Skills** | 1x pro Monat, 10 Min | Auto-Anreicherung prüfen, neue Projekte eintragen | Minimal manuelle Pflege |
| **Notification Center** | 3–5x täglich, 1 Min | Staffing-Requests, Projekt-Alerts, Knowledge-Updates | Geringe Notification-Last |

**Primäre Surfaces:** Knowledge-Agent (Chat), Projekt-Dashboard, Command Bar
**Sekundäre Surfaces:** Copilot (Dashboard-Context), Staffing-Cards, Profil-Updates
**Kanäle:** Desktop (Deep Work), Mobile (Quick Actions)

---

## Stefans Key Jobs to be Done

### Morgens (08:00–08:30) — "Wo stehen meine Projekte?"

```
Stefan sitzt im Hotel oder Kundenbüro, öffnet seinen Laptop
  │
  ├─ "Sind alle Milestones im Plan?"
  ├─ "Wie sieht's mit Budget aus?"
  ├─ "Gibt es neue Risiken oder Blocker?"
  ├─ "Welche Eskalationen warten auf mich?"
  │
  └─ TOOL: Projekt-Dashboard mit PL-View
     → Milestone-Timeline, Budget-Burndown, Team-Status, offene Risiken
```

### Tagsüber sporadisch — "Schnelle Antworten aus dem Firmenwissen"

```
Stefan sitzt beim Kunden, braucht konkrete Antwort
  │
  ├─ "Haben wir eine Cutover-Checkliste für SAP-Retail?"
  ├─ "Gibt es ein Template für SAP-Berechtigungskonzepte?"
  ├─ "Wer hat Erfahrung mit SD-MM-Integration im Retail?"
  │
  └─ TOOL: Knowledge-Agent (Command Bar oder Chat)
     → Synthese aus historischen Projekten, Experten-Vorschlag
```

### Mittags (12:00–13:00) — "Administrative Pflichten"

```
Stefan zwischen zwei Meetings oder in der Mittagspause
  │
  ├─ "Neue Staffing-Anfrage zu Projekt X?"
  │  └─ Kontext: Rolle, Zeitraum, Kunde, Team, Margin → Zusagen/Ablehnen
  │
  ├─ "Mein aktuelles Projekt verlängert sich"
  │  └─ Verfügbarkeit updaten: KW 22 statt 20
  │
  └─ TOOL: Mobile Notification Center + Staffing-Request Card
     → All-in-one Card, Entscheidung mit einem Tap
```

### Nach Projektabschluss — "Wissen zurückgeben"

```
Stefan nach Go-Live (abends im Hotel)
  │
  ├─ "Dokumentation hochladen"
  │  └─ Cutover-Checkliste, Lessons Learned, Abschlussbericht
  │
  ├─ "Wissen freigeben für andere Berater"
  │  └─ Knowledge-Bausteine generieren, Synthesen verfügbar machen
  │
  ├─ "Profil automatisch anreichern"
  │  └─ Neues Referenzprojekt, Skills updated, Kundenfeedback erfasst
  │
  └─ TOOL: Projekt-Abschließen-Flow + Automatische Profil-Updates
     → 15 Min Upload, Rest automatisch
```

---

# Stefans Journeys im Detail

Stefans Beteiligung erstreckt sich über **5 Journeys**:

1. **Journey 2: Staffing-Anfrage empfangen** (J2-S2) — Stefan als Empfänger
2. **Journey 3: Projekt-Risiko erkennen & eskalieren** (J3-S1, J3-S2) — Stefan erkennt, eskaliert
3. **Journey 5: Projektabschluss & Knowledge-Rückfluss** (J5-S1, J5-S2) — Stefan gibt Wissen zurück
4. **Journey: Daily Standup-Vorbereitung** (J-Daily) — Neue Journey, täglich
5. **Journey: Knowledge-Anfrage → Synthese** (J-Ad-hoc) — Neue Journey, sporadisch

---

# Journey 2: Staffing-Anfrage → Antwort → Team-Bestätigung

**Beteiligte Personas:** Katrin (Initiator), Stefan (Empfänger), Lisa (Empfänger), Thomas (Konfliktlösung)
**Dauer:** 2–4 Sekunden Notification bis 5 Min Entscheidung (Stefan's Anteil)
**Touchpoints:** Notification → Request Card → Entscheidung
**Stefans Rolle:** Empfänger einer Staffing-Anfrage zu RetailCorp-Projekt

---

## Phase B: Stefan antwortet (Mobile, 12:30)

### [J2-S2] Staffing-Anfrage Card — Stefans Perspektive (Mobile)

**Kontext:**
- Katrin hat Stefan + Lisa + Tim eingeladen für RetailCorp AG (SAP S/4HANA Migration, Lead, KW 20–46)
- Push-Notification: "Neue Staffing-Anfrage: RetailCorp AG" um 12:30
- Stefan ist gerade zwischen zwei Meetings, hat 5 Minuten Zeit

**Layout (Mobile Card — Full-Width, Self-Contained):**

```
┌─────────────────────────────────────────────────────┐
│  ◀  STAFFING-ANFRAGE                    [X]        │  ← Header: Zurück, Title, Close
├─────────────────────────────────────────────────────┤
│                                                     │
│  🏢 RetailCorp AG                                   │  ← Firmenname prominent
│  SAP S/4HANA Migration                              │  ← Projekt-Titel
│                                                     │
│  ┌─────────────────────────────────────────────────┐ │
│  │ 📍 München (Hybrid, 3 Tage vor Ort)             │ │
│  │ ⏰ KW 20–46 (Mai–November 2026)                 │ │
│  │ 💰 1.800€/Tag                                   │ │
│  │ 👔 Lead Consultant                             │ │
│  │ 👥 Team: Lisa T., Tim K.                        │ │
│  └─────────────────────────────────────────────────┘ │
│                                                     │
│  📈 Karriere-Fit                                    │  ← Why this matters
│  ★★★★☆  "Stärkt deine Retail-Ref."                │
│  Dein 3. Retail-Projekt → Senior+ Kandidat        │
│                                                     │
│  💬 Katrins Notiz:                                  │  ← Personal touch
│  "Spannendes Projekt, Warm-Path über Thomas.      │
│   Du kennst Lisa — habt 2× zusammengearbeitet.    │
│   Team hat sehr gutes Feedback gegeben."           │
│                                                     │
│  ⚠️  TIMING-WARNING                                 │  ← Conflict indicator
│  Dein MedTech-Projekt endet KW 19 — nur          │
│  1 Woche Puffer vor Projektstart. Machbar?        │
│                                                     │
│  [📋 Brief lesen]  ← Secondary action             │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  [✅ Zusagen]                                       │  ← Primary (green)
│  [❌ Ablehnen]                                      │  ← Secondary (red)
│  [💬 Rückfrage]                                     │  ← Tertiary (blue)
│  [⏳ Später]                                        │  ← Quaternary (gray)
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Komponenten:**

1. **StaffingRequestCard** — Self-contained, alle Entscheidungsinfos sichtbar
2. **CareerFitIndicator** — 5 Sterne + Erklärung warum Stefan dieses Projekt weiterbringt
3. **TimingWarning** — Gelber Banner mit Konflikt-Warnung (MedTech endet KW 19, RetailCorp startet KW 20)
4. **TeamPreview** — Wer ist im Team (Vertrautheit als Trust-Signal: "Lisa kennst du")
5. **PersonalNote** — Katrins Kontext ("Warm-Path", Kollegentandkarte)
6. **ActionBar** — 4 Buttons, Primary (Zusagen) prominent

**Daten pro Request-Card:**
- Firmenname & Projekt-Titel
- Rolle, Zeitraum, Ort, Tagessatz
- Karriere-Fit mit Begründung
- Team-Zusammensetzung + Vertrautheitsindikatoren
- Katrins persönliche Notiz
- Timing-Konflikte erkannt (MedTech → RetailCorp)

**Entscheidungspfade:**

| Aktion | Flow | Konsequenz |
|---|---|---|
| ✅ **Zusagen** | Stefan tappt "Zusagen" | Status → "Zugesagt" (12:35), Notification an Katrin, Stefan's Verfügbarkeit wird reserviert |
| ❌ **Ablehnen** | Stefan tappt "Ablehnen" → optionaler Grund ("Zeitkonflikt", "Kein Interesse", Freitext) | Status → "Abgelehnt", Katrin sucht Alternative, Stefan kann noch Gründe dokumentieren |
| 💬 **Rückfrage** | Stefan tappt "Rückfrage" → Kommentar-Thread öffnet | Chat-View opens, Stefan kann fragen, Katrin antwortet (oft in 10 Min) |
| ⏳ **Später** | Stefan tappt "Später" → Reminder nach 4h | Notification um 16:30 |

**Stefan's Entscheidungsprozess (3–5 Min):**

```
Stefan liest Card:
  ├─ "RetailCorp AG — S/4HANA — Lead" → Passen zu meinem Profil ✓
  ├─ "KW 20–46" → Puffer nach MedTech? (KW 19 → KW 20 = 1 Woche) ⚠️
  ├─ "München, 3x pro Woche vor Ort" → OK, bin eh in Bayern
  ├─ "Karriere-Fit: ★★★★☆ + 'Senior+ Kandidat'" → Relevant!
  ├─ "Lisa T. — 2× zusammengearbeitet" → Sehr gut
  ├─ "Engagement-Brief lesen" (optional) → Skip, vertrau Katrin
  │
  └─ ENTSCHEIDUNG: "Zusagen" (mit leichtem Risiko auf Timing)
```

**Design-Implikationen für Stefan's Staffing-Flow:**

1. **Vollständiger Kontext auf einer Card** — Stefan braucht NICHT ins Projekt-Portal, um zu sehen "Wer ist noch im Team?" Alles hier.
2. **Timing-Konflikte proaktiv warnen** — System erkennt, dass MedTech KW 19 endet, RetailCorp KW 20 startet.
3. **Karriere-Fit begründen** — "Dein 3. Retail-Projekt" ist persönlicher als generische Skill-Match.
4. **Peer-Vertrautheit als Trust-Signal** — "Du kennst Lisa" reduziert Unsicherheit.
5. **Mobile-first** — Stefan antwortet von unterwegs, nicht vom Desktop.
6. **Schnelle Entscheidung (1–2 Taps)** — Keine Scrolling, keine Modal-Nesting.

---

### [J2-S2] Entscheidungspfad: Stefan sagt Zusagen

**Stefan tappt "✅ Zusagen":**

```
┌─────────────────────────────────────────────────────┐
│  Status aktualisiert...                             │
│                                                     │
│  ✅ Du hast zugesagt (12:35)                        │
│                                                     │
│  Nächste Schritte:                                  │
│  1. Katrin bekommt sofort Nachricht                 │
│  2. Verfügbarkeit in deinem Kalender reserviert     │
│  3. Details folgen nach Team-Bestätigung           │
│                                                     │
│  [Zurück]                                           │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Backend-Prozesse:**
- Stefan's Status: "Zugesagt" (12:35)
- Notification an Katrin: "Stefan Kraus hat zugesagt"
- Stefan's Verfügbarkeit: KW 20–46 reserviert
- Timer für Katrin: warte auf Lisa (noch ausstehend)

---

### [J2-S2b] Entscheidungspfad: Stefan hat Rückfrage

**Stefan tappt "💬 Rückfrage":**

```
┌─────────────────────────────────────────────────────┐
│  ◀  Rückfrage zu RetailCorp AG                      │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Deine Frage:                                       │
│  ┌─────────────────────────────────────────────────┐│
│  │ "Wie sieht's mit dem Puffer nach MedTech aus?  ││
│  │  KW 19 zu KW 20 ist etwas knapp. Kann ich      ││
│  │  noch 1–2 Tage MedTech-Abschluss machen?"      ││
│  └─────────────────────────────────────────────────┘│
│                                                     │
│  [📤 Senden]  [❌ Abbrechen]                        │
│                                                     │
│  Status: Anfrage ausstehend                        │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Katrin antwortet (meist 10–20 Min später):**

```
┌─────────────────────────────────────────────────────┐
│  💬 Antwort von Katrin                              │
│                                                     │
│  "Gute Frage. Ja, Kundenverkehrt gerne für        │
│   1–2 Tage Overlap. Stelle dich drauf ein, dass    │
│   du KW 20 parallel loswirst — haben 2 Tage       │
│   Entwöhnungszeit geplant. OK?"                    │
│                                                     │
│  [✅ OK, ich zusage]  [❌ Dann doch nicht]         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

Stefan's Antwort → "✅ OK, ich zusage" → Status wird zu "Zugesagt"

---

### [J2-S2c] Entscheidungspfad: Stefan lehnt ab (mit Grund)

**Stefan tappt "❌ Ablehnen":**

```
┌─────────────────────────────────────────────────────┐
│  ◀  Ablehnung — Grund?                              │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Warum ablehnst du?                                 │
│  ○ Zeitkonflikt (Projekt läuft noch)              │
│  ○ Kein Interesse an Rolle/Kunde                  │
│  ○ Privater Grund                                  │
│  ○ Andere: _________________________              │
│                                                     │
│  Optionale Notiz:                                   │
│  ┌─────────────────────────────────────────────────┐│
│  │ "MedTech endet erst KW 20, zu knapp für mich." ││
│  └─────────────────────────────────────────────────┘│
│                                                     │
│  [✅ Ablehnen bestätigen]  [❌ Zurück]             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Nach Ablehnung:**

```
┌─────────────────────────────────────────────────────┐
│  ❌ Abgelehnt (12:38)                               │
│                                                     │
│  Katrin hat deine Ablehnung erhalten und sucht     │
│  jetzt eine Alternative.                            │
│                                                     │
│  Feedback gesendet:                                 │
│  "Zeitkonflikt — MedTech endet KW 20, zu knapp"   │
│                                                     │
│  [Zurück]                                           │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Phase C: Team-Bestätigung (Katrin, aus Stefans Perspektive passiv)

**Nach Lisa's Zusage (17:15) sieht Stefan evtl. eine Notification:**

```
✅ Staffing-Anfrage RetailCorp AG: Team vollständig bestätigt
   Markus S. (Lead), Lisa T. (Change), Tim K. (Data)
   Start: KW 20 · Vor-Ort: München
```

**Stefans Verfügbarkeit ist jetzt locked für KW 20–46.**

---

---

# Journey 3: Projekt-Risiko → Alert → Eskalation → Kundenupdate

**Beteiligte Personas:** Stefan (erkennt Risiko), Thomas (entscheidet), Dr. Müller (wird informiert)
**Dauer:** 20 Minuten (Stefans Anteil: 10 Min)
**Touchpoints:** Projekt-Dashboard → Risiko-Erkennung → Eskalation
**Stefans Rolle:** Projektleiter, der Risiken am Dashboard erkennt und eskaliert

---

## Phase A: Risiko wird erkannt (System + Stefan)

### [J3-S1] Projekt-Dashboard — Stefans tägliche Ansicht (Laptop, 08:15)

**Kontext:**
- Stefan sitzt im Kundenbüro, öffnet sein Projekt-Dashboard vor dem Daily Standup
- System hat über Nacht Daten verarbeitet: Milestone 3 (Datenmigration) ist 20% hinter dem Plan
- Scope-Creep erkannt: 3 zusätzliche Legacy-Systeme, die ursprünglich nicht im Scope waren

**Layout (Laptop, Dashboard View):**

```
┌──────────────────────────────────────────────────────────────────────────┐
│  ◀ Projekte / MedTech GmbH — SAP S/4HANA            [Cmd+K]  🔔 2      │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  PROJECT HEALTH:  🟡 AT RISK                                            │
│  Status-Änderung seit gestern: 🟢 → 🟡                                  │
│                                                                          │
│  ┌────────────── MILESTONES ─────────────────────────────────────────┐  │
│  │                                                                    │  │
│  │  ✅ M1: Analyse & Design                     KW 12 ✓ abgeschlossen  │  │
│  │                                                                    │  │
│  │  ✅ M2: Entwicklung Phase 1                  KW 16 ✓ abgeschlossen  │  │
│  │                                                                    │  │
│  │  🟡 M3: Datenmigration                                             │  │
│  │     Plan: KW 20 | Fortschritt: 60% | ⚠️ Prognose: KW 22 (+2 W)  │  │
│  │     ██████░░░░ [Verzögerung -20%]                                │  │
│  │                                                                    │  │
│  │     ⚠️ ROOT CAUSE: Scope-Creep erkannt                           │  │
│  │     3 zusätzliche Legacy-Systeme nicht im Original-Scope:        │  │
│  │     → Altsystem X (Filial-Daten)                                │  │
│  │     → Altsystem Y (Lagerverwaltung alt)                        │  │
│  │     → Altsystem Z (Kundenhistorie veraltet)                    │  │
│  │                                                                    │  │
│  │  ⬜ M4: Integrationstests                    geplant KW 22        │  │
│  │     ⚠️ Verschiebt sich auf KW 24 bei aktuellem Trend           │  │
│  │                                                                    │  │
│  │  ⬜ M5: Go-Live                              geplant KW 26        │  │
│  │     ⚠️ Risiko: Verzögert sich um 2–4 Wochen                    │  │
│  │                                                                    │  │
│  └────────────────────────────────────────────────────────────────────┘  │
│                                                                          │
│  ┌────────────── BUDGET ──────────────────────────────────────────────┐  │
│  │                                                                    │  │
│  │  Budget-Verbrauch: 68% | Fortschritt: 55% | ⚠️ Over-Index: 13%   │  │
│  │                                                                    │  │
│  │  Verbraucht:  ████████████████████░░░░░░░░░░ 68%                │  │
│  │  Fortschritt: ███████████████░░░░░░░░░░░░░░░ 55%                │  │
│  │                                                                    │  │
│  │  Interpretation: Wir haben 68% Budget ausgegeben, sind aber       │  │
│  │  erst bei 55% Fortschritt. Das bedeutet wir laufen 13% über     │  │
│  │  Effizienz-Erwartungen. Zusätzliche Scope ⟹ Zusatzbudget nötig. │  │
│  │                                                                    │  │
│  └────────────────────────────────────────────────────────────────────┘  │
│                                                                          │
│  ┌────────────── COPILOT-EMPFEHLUNG ────────────────────────────────┐  │
│  │  🤖 AI hat ein Problem erkannt:                                  │  │
│  │                                                                  │  │
│  │  "Scope-Creep bei Milestone 3 (Datenmigration):                │  │
│  │   3 Legacy-Systeme waren nicht im Original-Scope. Diese        │  │
│  │   verursachen zusätzliche 15–20 PT.                            │  │
│  │                                                                  │  │
│  │   Geschätzter Mehraufwand: ~25K€                               │  │
│  │   Budget-Puffer: Noch 32% verfügbar = 80K€ (reicht gerade)     │  │
│  │                                                                  │  │
│  │   Empfehlung: Change Request mit Kunden besprechen,            │  │
│  │   Timeline + Budget anpassen."                                 │  │
│  │                                                                  │  │
│  │  [📋 Change Request skizzieren]  [Thomas alertieren]           │  │
│  │                                                                  │  │
│  └────────────────────────────────────────────────────────────────────┘  │
│                                                                          │
│  ┌────────────── TEAM-STATUS ────────────────────────────────────────┐  │
│  │  Stefan K. (Lead) — 5/5 Tage verfügbar                          │  │
│  │  Lisa T. (Change) — 4/5 Tage, 1x nicht verfügbar (Arzt)         │  │
│  │  Tim K. (Data)    — 5/5 Tage verfügbar                          │  │
│  │                                                                  │  │
│  │  Kapazitäts-Assessment: Team ist full, Scope-Erweiterung       │  │
│  │  erfordert weitere Ressource oder Umlastung.                    │  │
│  │                                                                  │  │
│  └────────────────────────────────────────────────────────────────────┘  │
│                                                                          │
│  [Projekt-Details]  [Risiko-Protokoll]  [Kundenkommunikation]         │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

**Komponenten:**

1. **ProjectHealthBadge** — 🟡 AT RISK (rot für 🔴 Critical, gelb für 🟡 At Risk, grün für 🟢 On Track) — prominent oben
2. **MilestoneTimeline** — Vertikal gestapelte Milestones mit Plan vs. Prognose vs. Fortschritt
3. **BudgetBurndown** — Dual-Bar: Budget-Verbrauch vs. Fortschritt, Over-Index highlighted
4. **ScopeCreepIndicator** — Explizite Warnung mit Detailbeschreibung der neuen Items
5. **CopilotRecommendation** — Gelber Banner mit konkreter Empfehlung + Action-Buttons
6. **TeamStatus** — Verfügbarkeit jedes Team-Members, Kapazitäts-Assessment

**AI-Interaktion (Copilot auf Dashboard):**

- **Proaktiv erkannt:** Discrepanz zwischen Budget-Verbrauch (68%) und Fortschritt (55%)
- **Root-Cause bestimmt:** Scope-Creep (3 Legacy-Systeme)
- **Auswirkung quantifiziert:** +2 Wochen Milestone 3, ~25K€ Mehraufwand
- **Empfehlung gemacht:** Change Request skizzieren, Thomas alertieren
- **Hilfreiche Kontexte:** Budget-Puffer noch 32% = 80K€ (knapp)

---

### [J3-S1b] Stefan drückt "Thomas alertieren"

**Stefan tappt [Thomas alertieren]:**

```
┌──────────────────────────────────────────────────────────────────────┐
│  Eskalation wird vorbereitet...                                      │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Thomas bekommt P0-Alert:                                            │
│  • PROJEKT-ESKALATION: MedTech SAP-Migration                        │
│  • HEALTH: 🟡 At Risk                                               │
│  • PROBLEM: Scope-Creep (+3 Legacy-Systeme, +25K€)                 │
│  • TIMELINE: Milestone 3 verschiebt sich +2 Wochen                │
│  • ACTION: Change Request erforderlich                              │
│                                                                      │
│  Stefans Notiz wird automatisch generiert:                          │
│  "Scope-Erweiterung nicht vermeidbar. 3 Legacy-Systeme              │
│   (Filial, Lager, Kundenhistorie) waren nicht in der Analyse.       │
│   Change Request ist vorbereitet für Kundendiskussion."             │
│                                                                      │
│  [✅ Alert senden]  [❌ Abbrechen]                                   │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

Stefan bestätigt → Alert geht an Thomas (sofort als P0-Notification)

---

## Phase B: Thomas entscheidet (Mobile, 08:22)

### [J3-S2] Thomas bekommt P0-Alert

**Thomas's Mobile-View:**

```
┌─────────────────────────────────────────────────────┐
│  🔴 P0 — PROJEKT-ESKALATION                         │
│                                                     │
│  MedTech GmbH                                       │
│  SAP S/4HANA Migration                              │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────────────────────────────────────────┐ │
│  │ SITUATION                                       │ │
│  │                                                 │ │
│  │ Health         🟡 At Risk                       │ │
│  │ Problem        Scope-Creep                      │ │
│  │                +3 Legacy-Systeme                │ │
│  │ Milestone 3    +2 Wochen Verzögerung            │ │
│  │ Go-Live Risk   +2–4 Wochen gesamter Impact     │ │
│  │ Budget         13% Over-Index, ~25K€ Mehraufwand│ │
│  │ Budget-Puffer  32% verfügbar (80K€)            │ │
│  │ PL             Stefan Kraus                    │ │
│  │ Alertiert um   08:15                            │ │
│  │                                                 │ │
│  └─────────────────────────────────────────────────┘ │
│                                                     │
│  Stefans Notiz:                                     │
│  "Scope-Erweiterung nicht vermeidbar — 3 Legacy-   │
│   Systeme waren nicht in der Analyse. Werden von   │
│   Kunden gefordert. Change Request ist vorbereitet │
│   für Kundendiskussion. Brauche deine Approval."   │
│                                                     │
│  [📋 Change Request prüfen]                        │
│  [☎️ Stefan anrufen]                               │
│  [✅ OK — Change Request freigeben]                │
│  [⏸️ Zur Kenntnis]                                 │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Thomas's Entscheidungsprozess:**
- Liest Alert: "Scope-Creep, +25K€, Puffer vorhanden, PL hat vorbereitet"
- Klickt "✅ OK — Change Request freigeben"
- Automatisch: Notification an Stefan "Thomas hat OK gegeben", Change Request wird an Dr. Müller vorbereitet

---

### [J3-S2b] Stefans Notification: Thomas hat OK gegeben

```
┌─────────────────────────────────────────────────────┐
│  ✅ Thomas hat deine Eskalation genehmigt           │
│                                                     │
│  Change Request für MedTech ist freigegeben.       │
│  Kundenkommunikation geht jetzt an Dr. Müller.     │
│                                                     │
│  Nächste Schritte:                                  │
│  1. Du sprichst mit Dr. Müller über Change Request │
│  2. Client Portal zeigt neuen Status (🟡 Adjusted)│
│  3. Kundenfeedback wird eingeholt                  │
│                                                     │
│  [OK]                                               │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Phase C: Kunde wird informiert (Dr. Müller, Client Portal)

### [J3-S3] Client Portal Update (aus Stefans Perspektive: informativ)

**Automatische E-Mail an Dr. Müller:** "Projekt-Update MedTech — Statusänderung erforderlich"

**Dr. Müller klickt Magic Link → sieht Client Portal:**

```
┌──────────────────────────────────────────────────────────────────┐
│  mpl Consulting — Ihr Projektportal                              │
│  MedTech GmbH · SAP S/4HANA Migration                             │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Status: 🟡 Anpassung erforderlich                               │
│  Projektleiter: Stefan Kraus                                     │
│                                                                  │
│  ┌────────────── AKTUELLE SITUATION ──────────────────────────┐ │
│  │  Während der Datenmigrations-Phase (M3) wurden 3          │ │
│  │  zusätzliche Legacy-Systeme identifiziert, die nicht im   │ │
│  │  Original-Scope waren:                                    │ │
│  │                                                            │ │
│  │  • Filial-Daten-System (Altversion)                       │ │
│  │  • Lagerverwaltungs-System                                │ │
│  │  • Kundenhistorie (veraltet, aber geschäftskritisch)      │ │
│  │                                                            │ │
│  │  Diese Systeme müssen ebenfalls migriert werden, um       │ │
│  │  Datenkonsistenz zu gewährleisten.                        │ │
│  │                                                            │ │
│  │  Auswirkung:                                              │ │
│  │  • Milestone 3 (Datenmigration): +2 Wochen (KW 22)       │ │
│  │  • Go-Live-Termin: wird neu evaluiert (wahrscheinlich    │ │
│  │    KW 28 statt KW 26)                                    │ │
│  │  • Budget-Anpassung: +~25K€ (kann aus Puffer gedeckt     │ │
│  │    werden)                                                │ │
│  │                                                            │ │
│  │  Ihr Projektleiter Stefan Kraus hat einen Change Request  │ │
│  │  vorbereitet und wird Sie diese Woche kontaktieren.      │ │
│  │                                                            │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  ┌────────────── MILESTONES ──────────────────────────────────┐ │
│  │  ✅ M1: Analyse & Design                 KW 12 · ✓       │ │
│  │  ✅ M2: Entwicklung Phase 1              KW 16 · ✓       │ │
│  │  🟡 M3: Datenmigration                  KW 22 · 60%     │ │
│  │  ⬜ M4: Integrationstests                KW 24 · geplant │ │
│  │  ⬜ M5: Go-Live                          TBD  · TBD      │ │
│  │                                                            │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  [📄 Change Request ansehen] (PDF, 2 Seiten)                    │
│                                                                  │
│  ┌────────────── IHRE RÜCKMELDUNG ────────────────────────────┐ │
│  │  Wie bewerten Sie diese Kommunikation?                    │ │
│  │                                                            │ │
│  │  Verständlichkeit:      ○ ○ ○ ○ ○                        │ │
│  │  Proaktivität:          ○ ○ ○ ○ ○                        │ │
│  │  Lösungs-Fokus:         ○ ○ ○ ○ ○                        │ │
│  │                                                            │ │
│  │  Kommentar (optional):                                    │ │
│  │  ┌──────────────────────────────────────────────────────┐│ │
│  │  │                                                      ││ │
│  │  └──────────────────────────────────────────────────────┘│ │
│  │                                                            │ │
│  │  [Feedback absenden]                                      │ │
│  │                                                            │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  Kontakt: Stefan Kraus (stefan.kraus@mpl.de)                   │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**Design-Prinzipien für Client Portal:**
- **White-Label:** "mpl Consulting" branding, nicht Consultry-UI
- **Ampel-Logik:** Klare Farben (🟢/🟡/🔴), keine technischen Details
- **Context vor Details:** "Aktuelle Situation" erklärt das "Warum" bevor Change-Request-Details kommen
- **Feedback eingeholt:** Pulse-Check auf Client Portal gibt Stefan + mpl Feedback zur Kommunikationsgüte

**Stefans Workflow nach Phase C:**
- Stefan bereitet Kundengespräch vor (Telefon oder persönlich)
- Bespricht Scope-Erweiterung mit Dr. Müller
- Dr. Müller approves Change Request
- Projekt wird zu 🟢 On Track (neu) mit adjustiertem Timeline/Budget

---

## Journey 3 — Zusammenfassung für Stefan

| Phase | Screen | Dauer | Stefans Aktion | Ergebnis |
|---|---|---|---|---|
| A | Dashboard [J3-S1] | 10 Min | Risiko erkennen, eskalieren | Thomas wird alarmiert |
| A | Eskalation senden [J3-S1b] | 1 Min | Alert-Button drücken | Thomas bekommt P0-Notification |
| B | Thomas antwortet [J3-S2] | ~5–10 Min | Passiv: Thomas approves | Change Request freigegeben |
| C | Kundenkommunikation [J3-S3] | — | Passiv: Kunde informiert | Client Portal updated |

**Gesamtdauer Stefans Arbeit:** ~15 Minuten
**Gesamtdauer bis Kundenkommunikation:** ~20 Minuten

---

---

# Journey 5: Projektabschluss → Knowledge → Profil → Nächster Einsatz

**Beteiligte Personas:** Stefan (gibt Wissen zurück), Lisa (konsumiert Wissen), Katrin (profitiert im Matching)
**Dauer:** 15–30 Minuten aktive Arbeit + automatische Prozesse
**Touchpoints:** Projekt-Dashboard → Knowledge-Upload → Profil-Update → Knowledge-Agent
**Stefans Rolle:** Liefert Wissen, profitiert von Auto-Anreicherung

---

## Phase A: Projektabschluss & Knowledge-Upload (Stefan, Laptop, Abend nach Go-Live)

### [J5-S1] Projekt abschließen + Wissen hochladen

**Kontext:**
- Stefan hat gerade das Go-Live bei MedTech abgeschlossen (KW 26, nach Change Request)
- Kunde hat Abnahme unterschrieben
- Stefan sitzt abends im Hotel, dokumentiert das Projekt

**Layout (Laptop, Projekt-Abschluss-Screen):**

```
┌─────────────────────────────────────────────────────────────────────┐
│  ◀ MedTech GmbH / Projekt abschließen                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  🏁 PROJEKT-ABSCHLUSS                                              │
│  Herzlichen Glückwunsch zum erfolgreichen Go-Live!                │
│                                                                     │
│  Projekt-Status:                                                    │
│  • All Milestones ✅ abgeschlossen                                 │
│  • Go-Live: KW 26 ✓ planmäßig (nach Change Request)               │
│  • Abnahme durch Kunde: ✅ erhalten (06.07.2026)                   │
│  • Kundenzufriedenheit (NPS): 82 (sehr zufrieden)                  │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  📚 WISSENS-RÜCKFLUSS: Dokumentation hochladen                     │
│                                                                     │
│  Wichtige Projektdokumente hochladen (max 50 MB pro Datei):        │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  📄 MedTech_Abschlussbericht.pdf         [↑ Hochladen]     │  │
│  │     Zusammenfassung aller Milestones, Lessons Learned,      │  │
│  │     Kundenfeedback, Projekt-Metriken                       │  │
│  │                                                             │  │
│  │  📄 Cutover_Checkliste_v3.xlsx          [↑ Hochladen]     │  │
│  │     Detaillierte Checkliste für Go-Live-Vorbereitung,     │  │
│  │     Rollback-Szenarien, Timing-Plan                       │  │
│  │                                                             │  │
│  │  📄 Lessons_Learned_Notes.docx          [↑ Hochladen]     │  │
│  │     Individuelle Notizen, was gut lief, was optimiert      │  │
│  │     werden könnte für zukünftige Projekte                 │  │
│  │                                                             │  │
│  │  📄 SAP_Configuration_Docu.pdf          [↑ Hochladen]     │  │
│  │     SAP S/4HANA Config, Custom-Entwicklungen               │  │
│  │                                                             │  │
│  │  📄 Data_Migration_Validation_Report.xlsx [↑ Hochladen]   │  │
│  │     Detaillierter Validierungsbericht der Migration       │  │
│  │                                                             │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  Automatische Knowledge-Generierung:                               │
│  ☑ Knowledge-Bausteine automatisch aus Dokumenten extrahieren    │
│  ☑ Berater-Profile automatisch aktualisieren (alle 5 Berater)    │
│  ☑ Kundenfeedback-Anfrage an Dr. Müller senden                   │
│  ☑ Projektabschluss-Report an Kunde versenden                    │
│                                                                     │
│  Knowledge-Bausteine werden generiert:                            │
│  • "SAP S/4HANA Datenmigration Pharma Checkliste"                │
│  • "Go-Live-Risikomatrix für S/4HANA"                            │
│  • "Cutover-Planung Template (6-Wochen-Modell)"                  │
│  • "SAP Fiori UX Implementierung (Lessons Learned)"              │
│                                                                     │
│  [✅ Projekt abschließen & Wissen sichern]  [Abbrechen]          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Komponenten:**

1. **ProjectClosureStatus** — Alle Milestones grün, Go-Live erfolgreich, NPS dokumentiert
2. **DocumentUploadZone** — Drag-and-Drop oder Datei-Auswahl, 5 Key Documents
3. **AutoKnowledgeGeneration** — Checkboxen für automatische Prozesse
4. **PredictedKnowledgeBausteins** — Preview: "Diese Bausteine werden generiert"
5. **PrimaryAction** — "Projekt abschließen & Wissen sichern" (grüner Button)

**Stefans Workflow:**

1. Stefan uploaded 5 Dokumente (PDF, Excel, Word) → dragging + dropping oder Datei-Browser
2. System zeigt Preview: "Folgende Knowledge-Bausteine werden generiert"
3. Stefan bestätigt mit "Projekt abschließen & Wissen sichern"
4. **Backend-Prozesse starten:**
   - Knowledge-Engine verarbeitet die 5 Dokumente (KI-Extraktion)
   - Generiert automatisch 4–6 Knowledge-Bausteine
   - Updated Profile von Stefan, Lisa, Tim (alle 5 Projektmitglieder)
   - Sendet Kundenfeedback-Anfrage an Dr. Müller
   - Erstellt Projektabschluss-Report für Intranet

---

### [J5-S2] Automatisches Profil-Update (Stefan, Mobile, 10 Min später)

**Stefan bekommt Notification nach ~10 Minuten:**

```
┌─────────────────────────────────────────────────────┐
│  📊 PROFIL AKTUALISIERT                             │
│                                                     │
│  Basierend auf deinem MedTech-Projekt:             │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ✅ Skills aktualisiert:                           │
│                                                     │
│  • SAP S/4HANA                                      │
│    Senior → Senior+ (5. Projekt in Lead-Rolle)     │
│    Spezialisierung: Pharma-Branche                 │
│                                                     │
│  • Data Migration (Pharma)                          │
│    Mid → Senior (2. Pharma-Projekt, GxP-Aspekte)  │
│                                                     │
│  🆕 Neuer Skill erkannt:                            │
│  • SAP Fiori UX (Aus Abschlussbericht extrahiert)  │
│    Level: Mid                                       │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  📈 Neues Referenzprojekt:                          │
│  MedTech GmbH — SAP S/4HANA Migration              │
│  • Dauer: 6 Monate                                  │
│  • Rolle: Lead Consultant                          │
│  • Industrie: Pharma/Healthcare                    │
│  • Go-Live: KW 26/2026                             │
│  • NPS: 82 (sehr zufrieden)                        │
│                                                     │
│  Profil-Completeness:                               │
│  85% → 91% ⬆️                                       │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  [Änderungen prüfen]  [✅ OK, akzeptieren]         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Komponenten:**

1. **SkillUpdateCard** — Skills, die aktualisiert wurden (Level-Erhöhung)
2. **NewSkillDetection** — Automatisch erkannte neue Skills (Fiori UX)
3. **ReferenceProjectCard** — Neues Referenzprojekt mit Metriken
4. **CompletenessGauge** — Profil-Completeness 85% → 91%
5. **ReviewButton** — Stefan kann alle Änderungen prüfen bevor er acceptiert

**Stefan's Perspektive:**
- Stefan sieht, dass sein Profil automatisch aktualisiert wurde
- Er kann prüfen: "Stimmt? SAP Fiori UX sollte da sein? Ja. Data Migration Pharma? Ja."
- Er tapped "OK, akzeptieren" → Profil ist finalisiert
- **Null manuelle Pflege nötig** — genau wie im Persona-Brief verlangt

---

### [J5-S2b] Stefans Profil nach Update

**Stefans Profile (wie es jetzt in der Datenbank steht):**

```
STEFAN KRAUS — Senior Consultant / Projektleiter

Profil-Completeness: 91% ⬆️

HAUPTSKILLS (nach Niveau):
┌─────────────────────────────────────────────────────┐
│ 1. SAP S/4HANA (Senior+)                            │
│    • 5 Projekte in Lead-Rolle                       │
│    • 9+ Jahre SAP-Erfahrung                         │
│    • Retail + Pharma                                │
│                                                     │
│ 2. Data Migration (Senior)                          │
│    • Specialisierung: Pharma-Kontext (GxP)          │
│    • 2 Pharma-Projekte                              │
│    • Validierungskonzepte                           │
│                                                     │
│ 3. Projektleitung (Senior)                          │
│    • 3 Jahre PM-Erfahrung                           │
│    • Teams bis 5 Personen                           │
│    • Budget-Verantwortung                           │
│                                                     │
│ 4. SAP Retail (Senior)                              │
│    • 3 Retail-Projekte                              │
│    • Omnichannel-Kontext                            │
│                                                     │
│ 5. SAP Fiori UX (Mid)  ← NEU                        │
│    • Aus MedTech-Projekt                            │
│    • Custom Fiori App Entwicklung                   │
│                                                     │
│ 6. ABAP/Customization (Senior)                      │
│                                                     │
│ 7. Change Management (Mid)                          │
│                                                     │
└─────────────────────────────────────────────────────┘

REFERENZPROJEKTE:
┌─────────────────────────────────────────────────────┐
│ 1. MedTech GmbH — SAP S/4HANA Migration             │
│    6 Monate · Lead · Pharma · KW 26/2026 · NPS 82  │ ← AKTIV
│                                                     │
│ 2. RetailCorp AG — S/4HANA Migration               │
│    (Current or Previous project)                    │
│                                                     │
│ 3. FashionGroup — SAP S/4HANA                       │
│    (Previous)                                       │
│                                                     │
│ ... weitere 2 Projekte (älter)                      │
│                                                     │
└─────────────────────────────────────────────────────┘

ZERTIFIZIERUNGEN:
• SAP S/4HANA Implementation (Aktuell)
• ABAP Developer
• SAP PM (Project Management)

VERFÜGBARKEIT:
Nach MedTech: Verfügbar ab KW 27/2026
(1 Woche Puffer vor nächstem Projekt typisch)

MATCHING-SCORE (für Katrin):
Stefan Score für "Pharma S/4HANA Project": 98
Stefan Score für "Retail S/4HANA Project": 95
Stefan Score für "ABAP Customization": 88

FEEDBACK:
• MedTech NPS: 82 (sehr zufrieden, gerne wieder)
• RetailCorp NPS: 88
• Peer-Feedback: "Zuverlässig, liefert Qualität"
```

---

## Phase B: Wissen wird konsumiert (Lisa, 3 Monate später)

### [J5-S3] Knowledge-Agent Anfrage (Lisa, Laptop, September 2026)

**Kontext:**
- Lisa arbeitet 3 Monate später an einem neuen Pharma-Projekt bei DivaCorp
- Braucht konkrete Datenmigrations-Checkliste für GxP-Kontext
- Öffnet Knowledge-Agent und stellt eine Frage

**Layout (Laptop, Knowledge-Agent Chat):**

```
┌─────────────────────────────────────────────────────────────────────┐
│  💬 KNOWLEDGE-AGENT (Stefan's Wissen in Aktion)                    │
│                                                                     │
│  Lisa: "SAP Datenmigration Pharma Checkliste"                      │
│  [Send]                                                             │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Agent (15 Sekunden später):                                       │
│                                                                     │
│  "Ich habe 3 relevante Knowledge-Bausteine gefunden:              │
│   (Alle basieren auf echten Projekten, nicht auf Dokumenten)      │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │ 📋 SAP Datenmigration Pharma Checkliste                      │ │
│  │    Quelle: MedTech GmbH — Stefan K. (Q2/2026)                │ │
│  │    Type: Checkliste (47 Prüfpunkte, 6 Phasen)               │ │
│  │                                                              │ │
│  │    Inhalt:                                                  │ │
│  │    • Phase 1: Datenlandscape-Analyse (GxP-Implikationen)   │ │
│  │    • Phase 2: Validierungskonzept (21 CFR Part 11)         │ │
│  │    • Phase 3: Test-Data-Preparation                        │ │
│  │    • Phase 4: Migration Dry-Run                            │ │
│  │    • Phase 5: Final Data Load + Rollback-Plan              │ │
│  │    • Phase 6: Post-Go-Live Validierung                     │ │
│  │                                                              │ │
│  │    Speziell GxP-konform:                                     │ │
│  │    ✅ 21 CFR Part 11 Compliance Prüfpunkte                 │ │
│  │    ✅ Audit-Trail-Anforderungen                            │ │
│  │    ✅ Change-Control-Prozess                               │ │
│  │    ✅ Datenintegrität-Nachweise                            │ │
│  │                                                              │ │
│  │    [📖 Öffnen]  [⬇️ In Canvas übernehmen]  [💾 Speichern]  │ │
│  │                                                              │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │ 📋 Cutover-Planung Template (6-Wochen-Modell)               │ │
│  │    Quelle: MedTech GmbH — Stefan K. (Q2/2026)                │ │
│  │    Type: Excel-Template mit Zeitplan                        │ │
│  │                                                              │ │
│  │    Inhalt:                                                  │ │
│  │    • Wochenplan (Woche 1–6 vor Go-Live)                   │ │
│  │    • Dependenzen zwischen Aktivitäten                       │ │
│  │    • Rollback-Szenarien pro Phase                          │ │
│  │    • Kommunikations-Zeitplan (Daily, Escalation)           │ │
│  │                                                              │ │
│  │    [📖 Öffnen]  [⬇️ In Canvas übernehmen]  [💾 Speichern]  │ │
│  │                                                              │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐ │
│  │ 📋 Go-Live-Risikomatrix für S/4HANA (28 Risiken)            │ │
│  │    Quelle: AutoParts-Projekt — Markus S. (Q4/2024)          │ │
│  │    Type: Structured List mit Mitigation Strategies          │ │
│  │                                                              │ │
│  │    Inhalt:                                                  │ │
│  │    • Datenintegrität-Risiken (8)                           │ │
│  │    • Performance-Risiken (5)                               │ │
│  │    • Cutover-Timing-Risiken (7)                            │ │
│  │    • Change-Control-Risiken (4)                            │ │
│  │    • Rollback-Szenarien (4)                                │ │
│  │                                                              │ │
│  │    Mit Mitigations-Strategien pro Risiko                    │ │
│  │                                                              │ │
│  │    [📖 Öffnen]  [⬇️ In Canvas übernehmen]  [💾 Speichern]  │ │
│  │                                                              │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  💡 Expert-Empfehlung:                                             │
│  Stefan Kraus hat MedTech geleitet und ist expert für GxP-        │
│  Validierung. Falls du Fragen zur 21 CFR Part 11 Strategie        │
│  hast, empfehle ich, ihn zu fragen. (Er ist wahrscheinlich       │
│  gerade verfügbar für 1–2 Stunden pro Woche zum                  │
│  "Knowledge-Sharing".)                                             │
│                                                                     │
│  [👤 Stefan anschreiben]                                           │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Lisa: "Zeig mir die GxP-spezifischen Prüfpunkte aus der        │
│         MedTech-Checkliste"                                       │
│  [Send]                                                             │
│                                                                     │
│  Agent (5 Sekunden später):                                       │
│  "Hier sind die 8 GxP-Prüfpunkte aus Stefans MedTech-           │
│   Checkliste:                                                      │
│                                                                     │
│   1. Datenintegrität (21 CFR Part 11):                           │
│      □ Audit-Trail aktiviert in S/4HANA?                        │
│      □ Change-Log für kritische Tabellen?                       │
│      □ Zeitstempel genau auf Secondenlevel?                     │
│                                                                     │
│   2. Validierungs-Dokumentation:                                 │
│      □ Test-Cases dokumentiert für alle Legacy→S/4 Mappings?   │
│      □ Validierungs-Ergebnisse signiert?                        │
│      □ Abweichungen (Deviations) dokumentiert?                  │
│                                                                     │
│   ... (weitere 6 Punkte) ...                                      │
│                                                                     │
│   Hier sind noch 3 Follow-Up-Fragen die häufig auftauchen:       │
│   • Wie handhaben wir alte Transaktionen vor Migration?         │
│   • Wer muss Validierungs-Report signieren (QA/Regulatory)?   │
│   • Wie lange Audit-Trail archivieren post-Go-Live?            │
│  "                                                                 │
│                                                                     │
│  [Weitere Frage stellen...]                                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Design-Empfehlungen für Knowledge-Konsumption:**

1. **Synthese statt Links** — Agent liefert konkrete Checkliste/Template, nicht "3 Dokumente gefunden"
2. **Quellen transparent** — Jeder Baustein zeigt: Projekt, Person, Datum
3. **Expert-Empfehlungen** — "Stefan ist expert, frag ihn" (mit direktem Link)
4. **Weiterverarbeitung** — "In Canvas übernehmen" = direkt in Proposal/Projekt einfügbar
5. **Multi-Turn Dialog** — Lisa kann "Zeig mir nur GxP-Punkte" nachfragen, Agent refined die Antwort

**Stefans Wirkung:**
- Stefan hat 15 Min Zeit investiert (nach MedTech Go-Live)
- Sein Wissen ist jetzt 3 Monate später für Lisa verfügbar
- Lisa spart 2–3 Stunden Forschung ("Wie machen wir GxP-Validierung?")
- Agent sagt "Frag Stefan" wenn's kompliziert wird → Stefan kann $$ verdienen für Beratung

---

## Phase C: Kreislauf schließt sich (Katrin, Matching)

### [J5-S4] Aktualisierte Profile im nächsten Matching (Katrin, September 2026)

**Kontext:**
- 3 Monate später braucht Katrin ein Team für neues Pharma-Projekt bei DivaCorp
- Sie sucht Matcher für "Pharma S/4HANA Lead"
- Stefans & Lisas Profile sind jetzt aktualisiert mit MedTech-Erfahrung

**Katrin's Matching-Screen zeigt:**

```
┌────────────────────────────────────────────────────────────────────┐
│ Suche: "Pharma S/4HANA Lead Consultant"                            │
│ Sortierung: Match-Score absteigend                                  │
│                                                                    │
│ ┌──────────────────────────────────────────────────────────────┐  │
│ │ 1️⃣ Stefan K. · Senior Consultant · Score 98                │  │
│ │    München · 12 Jahre Experience                             │  │
│ │    Verfügbar ab KW 27/2026 ✅                                │  │
│ │                                                              │  │
│ │    Top Skills:                                               │  │
│ │    ✓ SAP S/4HANA (Senior+) — 5 Projekte                   │  │
│ │    ✓ Data Migration (Senior) — Pharma-Spezialisierung      │  │
│ │    ✓ Projektleitung (Senior) — Teams bis 5                 │  │
│ │    ✓ SAP Pharma (NEW) — GxP Validierung                   │  │
│ │    ✓ Change Management (Mid)                                │  │
│ │                                                              │  │
│ │    📈 Referenz-Projekt (NEU):                               │  │
│ │    MedTech GmbH — SAP S/4HANA Migration                    │  │
│ │    (6 Monate, Lead, Pharma, Go-Live Q2/26, NPS 82)         │  │
│ │                                                              │  │
│ │    💬 Customer Feedback:                                     │  │
│ │    "Very professional, excellent understanding of GxP"     │  │
│ │    (from MedTech CTO)                                        │  │
│ │                                                              │  │
│ │    🌐 Knowledge Contributions:                               │  │
│ │    • "Pharma Data Migration Checkliste" (47 Punkte)        │  │
│ │    • "Cutover Planung Template" (6 Wochen)                 │  │
│ │    • "Go-Live Risikomatrix" (28 Risiken)                   │  │
│ │                                                              │  │
│ │    [👤 Profil ansehen]  [💌 Staffing-Anfrage]              │  │
│ │                                                              │  │
│ └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│ ┌──────────────────────────────────────────────────────────────┐  │
│ │ 2️⃣ Lisa T. · Mid Consultant · Score 79                    │  │
│ │    Wien · 7 Jahre Experience                                │  │
│ │    Verfügbar ab KW 30/2026 ✅                                │  │
│ │                                                              │  │
│ │    Top Skills:                                               │  │
│ │    ✓ Change Management (Senior) — 3 Projekte              │  │
│ │    ✓ Data Migration (Mid) — Pharma Erfahrung (NEU)        │  │
│ │    ✓ SAP S/4HANA (Mid)                                     │  │
│ │                                                              │  │
│ │    📈 Referenz-Projekt (NEU):                               │  │
│ │    MedTech GmbH — SAP S/4HANA Migration                    │  │
│ │    (6 Monate, Change, Pharma, Go-Live Q2/26)              │  │
│ │                                                              │  │
│ │    [👤 Profil ansehen]  [💌 Staffing-Anfrage]              │  │
│ │                                                              │  │
│ └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│ [👤 Weitere Kandidaten...]                                        │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

**Der Kreislauf:**

```
Stefan (Mai 2026)
  ├─ MedTech-Projekt gestartet (Staffing)
  └─ Go-Live (Juni 2026)
       ├─ Knowledge hochgeladen (15 Min)
       ├─ Profile auto-aktualisiert
       ├─ Knowledge-Bausteine verfügbar
       │
       └─ 3 Monate später (September 2026)
           ├─ Lisa nutzt Stefans Knowledge für DivaCorp
           ├─ Katrin sieht Stefan + Lisa mit Pharma-Erfahrung
           ├─ Stefan gets matched für neues Pharma-Projekt
           └─ Wissens-Kreislauf schließt sich
```

---

## Journey 5 — Zusammenfassung für Stefan

| Phase | Screen | Dauer | Stefans Aktion | Ergebnis |
|---|---|---|---|---|
| A | Abschließen [J5-S1] | 15 Min | Docs hochladen + Button drücken | Knowledge-Bausteine generiert |
| A | Profil-Update [J5-S2] | 2 Min | Notification lesen + OK tappen | Profil auto-aktualisiert (91%) |
| B | Agent-Nutzung [J5-S3] | — | Passiv: Lisa nutzt Stefans Wissen | Lisa spart 2–3 Stunden |
| C | Matching [J5-S4] | — | Passiv: Katrin matched Stefan | Stefan wird mit Pharma-Label matched |

**Gesamtwirkung:** 15 Min Arbeit → unbegrenzter Wert für zukünftige Projekte

---

---

# Journey J-Daily: Daily Standup-Vorbereitung (NEUE JOURNEY)

**Trigger:** Täglich 08:00, Stefan sitzt im Kundenbüro oder Hotel
**Dauer:** 10–15 Minuten
**Gerät:** Laptop (primär), Smartphone (fallback)
**Ziel:** "Wo stehen meine Projekte? Was muss ich im Daily ansprechen?"

---

## Phase A: Dashboard-Review (Stefan, Laptop, 08:00–08:15)

### [J-Daily-S1] Projekt-Dashboard für PL-Vorbereitung

**Stefan öffnet sein Projekt-Dashboard (vereinfachte Daily-View):**

```
┌────────────────────────────────────────────────────────────────────┐
│  ◀ Meine Projekte / Daily Review                                  │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ☀️  Guten Morgen, Stefan — Heute: 05.07.2026 (Freitag)          │
│                                                                    │
│  PROJEKT A: RetailCorp AG (Lead)                                   │
│  Status: 🟢 On Track                                               │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │ Milestone Status:                                          │  │
│  │ • M1: ✅ Abgeschlossen KW 20                              │  │
│  │ • M2: 🟡 In Progress (KW 21–24) — 45% Done              │  │
│  │   Prognose: ✅ Pünktlich (KW 24)                          │  │
│  │ • M3: ⬜ Geplant (KW 25–28)                               │  │
│  │                                                            │  │
│  │ Budget:                                                    │  │
│  │ Verbrauch: 35% | Fortschritt: 38% — ✅ Im Plan           │  │
│  │                                                            │  │
│  │ Team-Status:                                               │  │
│  │ • Lisa T.: ✅ 5/5 Tage verfügbar (Retail-Phase gut)     │  │
│  │ • Tim K.: ⚠️ 4/5 Tage (Zahntermin Dienstag, o.k.)       │  │
│  │                                                            │  │
│  │ Risiken: KEINE offenen Risiken                           │  │
│  │                                                            │  │
│  │ 🎯 Für Daily: Alles On Track, keine Blocker              │  │
│  │                                                            │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  PROJEKT B: MedTech GmbH (Co-Lead mit Anja)                       │
│  Status: 🟡 At Risk (seit gestern)                                │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │ Milestone Status:                                          │  │
│  │ • M1–2: ✅ Abgeschlossen                                  │  │
│  │ • M3: 🟡 In Progress (Datenmigration) — 60% Done         │  │
│  │   Plan: KW 22 | Prognose: KW 24 (Scope-Creep)            │  │
│  │ • M4–5: ⬜ Geplant (verschiebt sich +2W)                  │  │
│  │                                                            │  │
│  │ Budget:                                                    │  │
│  │ Verbrauch: 68% | Fortschritt: 55% — ⚠️ 13% Over-Index   │  │
│  │                                                            │  │
│  │ Team-Status:                                               │  │
│  │ • Anja S.: ✅ Verfügbar                                   │  │
│  │ • Michael K.: ✅ Verfügbar                                │  │
│  │                                                            │  │
│  │ Risiken:                                                   │  │
│  │ ⚠️ SCOPE-CREEP: 3 Legacy-Systeme (Eskalation läuft)      │  │
│  │    Status: Thomas hat genehmigt, Kunde wird informiert   │  │
│  │ ⚠️ Change Request bereit für Kundendiskussion            │  │
│  │                                                            │  │
│  │ 🎯 Für Daily:                                              │  │
│  │   1. Scope-Creep Status update (Change Request genehmigt)│  │
│  │   2. Timeline-Verschiebung KW 24 statt KW 22            │  │
│  │   3. Kundenkommunikation diese Woche                     │  │
│  │                                                            │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  SUMMARY FÜR DAILY (08:30):                                       │
│  • RetailCorp: Alles On Track, keine Blocker                     │
│  • MedTech: Change Request Status Update (positiv)               │
│  • Team-Ausfallrate: 0% (Tim nur 1 Tag, o.k.)                   │
│                                                                    │
│  [Daily Notizen exportieren] [Refresh]                            │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

**Komponenten:**

1. **Project Card pro Projekt** — Milestone, Budget, Team, Risiken zusammengefasst
2. **Status Badges** — 🟢 On Track, 🟡 At Risk, 🔴 Critical — sofort erkennbar
3. **"Für Daily"-Notizen** — Agent generiert 3–4 Punkte, die Stefan im Daily ansprechen sollte
4. **Team-Verfügbarkeit** — Tagesansicht mit Abwesenheits-Hinweisen
5. **Risiko-Tracking** — Alle offenen Risiken mit Status (z.B. "Eskalation läuft")

**Stefans Workflow (08:00–08:15):**

1. Stefan öffnet Dashboard → sieht auf einen Blick beide Projekte
2. Liest "Für Daily"-Notizen pro Projekt
3. Optional: "Daily Notizen exportieren" → kopiert Text in Notiz-App für Handschrift-Notizen
4. Geht in Daily mit mentaler Vorbereitung
5. **Total: 10–15 Min, mobil-ready auch auf Smartphone**

---

---

# Journey J-Ad-hoc: Knowledge-Agent Anfragen (NEUE JOURNEY)

**Trigger:** Spontan, wenn Stefan eine Frage hat (3–5x pro Woche)
**Dauer:** 3–5 Minuten
**Gerät:** Laptop (Desktop, Deep Work) oder Smartphone (Quick Question)
**Kontext:** Stefan sitzt beim Kunden, braucht schnelle Antwort

---

## Phase A: Frage stellen (Stefan, Smartphone oder Laptop)

### [J-Ad-hoc-S1] Command Bar oder Chat-Interface

**Scenario 1: Smartphone (Mittags, 12:40, zwischen Meetings)**

```
Stefan öffnet Command Bar (Cmd+K auf Mac, oder Icon auf Mobile)

┌─────────────────────────────────────────────────────┐
│ 🔍 Command Bar / Knowledge-Suche                    │
├─────────────────────────────────────────────────────┤
│                                                     │
│ Stefan tippt: "SAP Berechtigungskonzept Template"  │
│ [Space zum Tippen]                                  │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ SUGGESTIONS (Real-Time):                            │
│                                                     │
│ 📋 "SAP Authorization Concept Template"            │
│    (aus 2 Projekten, Stefan selbst hat 1x gemacht) │
│    [Öffnen]                                         │
│                                                     │
│ 💬 "Ask Knowledge-Agent"                            │
│    Stefan's Frage direkt an Agent stellen          │
│    [→ Chat öffnen]                                  │
│                                                     │
│ 👤 "Stefan Kraus" (bei anderen Projekten)          │
│    Suche nach anderen Projekten Stefan gearbeitet  │
│    [→ Profil]                                       │
│                                                     │
│ 🔗 "Verwandte Dokumente"                            │
│    • SAP Security Checklist                        │
│    • Change Control Template                       │
│    [→ Dokumentation]                                │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Stefan tippt "Ask Knowledge-Agent" → Chat öffnet sich:**

```
┌─────────────────────────────────────────────────────────┐
│  💬 Knowledge-Agent (Chat View)                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Verfügbare Fragen:                                     │
│  • "Wie machen wir SAP-Berechtigungskonzepte?"         │
│  • "Template Berechtigungskonzept?"                    │
│  • "Best Practice für Rollen und Autorisierungen?"     │
│                                                         │
│  Stefan tippt: "Gibt es ein Template für SAP-          │
│                Berechtigungskonzepte, das ich           │
│                wiederverwenden kann?"                   │
│  [Send]                                                 │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Agent (20 Sekunden):                                  │
│  "Ja, wir haben 2 Templates:                          │
│                                                         │
│   1️⃣ GENERIC: SAP-Autorisierungs-Konzept-Template    │
│      aus RetailCorp-Projekt (Q4/2024)                 │
│      → 8 Seiten, SAP-unabhängig                       │
│      [📖 Öffnen] [⬇️ Download] [↗️ Canvas]            │
│                                                         │
│   2️⃣ RETAIL-SPEZIFISCH: Berechtigungskonzept         │
│      für SAP Retail Module (MM, SD, FI)              │
│      aus 2 Projekten (MedTech, RetailCorp)           │
│      → Du kennst beide!                               │
│      [📖 Öffnen] [⬇️ Download] [↗️ Canvas]            │
│                                                         │
│   Welches brauchst du für dein aktuelles Projekt?"    │
│                                                         │
│  Stefan: "Das Retail-spezifische passt gut"           │
│  [Send]                                                 │
│                                                         │
│  Agent: "Perfect! Das Template basiert auf            │
│  RetailCorp (dein Projekt) und hat bereits            │
│  Retail-Module (MM, SD, FI) ausgefüllt. Du kannst     │
│  es direkt adaptieren."                                │
│                                                         │
│  [📖 Öffnen]  [⬇️ Download Word]  [↗️ Canvas einfügen]│
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Scenario 2: Laptop (Abends, 17:00, beim Kunden noch)**

Stefan öffnet Chat-Interface über Sidebar:

```
┌────────────────────┬──────────────────────────────────────┐
│ 💬 KNOWLEDGE-      │  💬 Knowledge-Agent Chat             │
│    AGENT (Sidebar) │                                      │
├────────────────────┤  Stefan: "Wer hat Erfahrung mit     │
│                    │   SD-MM-Integration im Retail?"     │
│  [New Chat]        │  [Send]                              │
│                    │                                      │
│  [Recent:          │  Agent (10 Sekunden):                │
│   • Berechtigungen │  "2 Consultants haben das gemacht:  │
│   • Cutover        │                                      │
│     Checkliste     │   1️⃣ Stefan K. (du!) — RetailCorp   │
│   • GxP Validierung │      (Q3/2024) · Expertise: Retail-  │
│   • SAP Fiori UX   │      spezifische SD-MM Flows        │
│   • Data Mgmt      │      [📧 Frag ihn?]                 │
│  ]                 │                                      │
│                    │   2️⃣ Markus S. — FashionGroup      │
│                    │      (Q1/2025) · Expertise:         │
│                    │      Performance-Tuning              │
│                    │      [📧 Kontakt]                   │
│                    │                                      │
│  [Settings]        │   3️⃣ Knowledge-Baustein:             │
│  [Feedback]        │      'SD-MM Integration Checklist'  │
│                    │      (aus RetailCorp, Stefan)        │
│                    │      [📖 Öffnen]                    │
│                    │                                      │
│                    │   Welcher Input passt am besten?"    │
│                    │                                      │
└────────────────────┴──────────────────────────────────────┘
```

---

### [J-Ad-hoc-S2] Agent antwortet mit Synthese

**Agent's Antwort-Stil (immer):**

1. **Konkrete Bausteine** — "Hier sind die 3 Bausteine, die passen"
2. **Quellen transparent** — "Aus Projekt X, von Person Y, Datum Z"
3. **Multi-Nutzung** — Links zu "Öffnen", "Download", "In Canvas"
4. **Experten-Empfehlung** — "Frag Stefan K. zur GxP-Validierung"
5. **Follow-Up Dialog** — Agent wartet auf Präzisierung

**Stefans Perspektive:**
- Nie zu lange waiting time (< 20 Sekunden)
- Immer actionable (nicht nur Links)
- Kontakt zu Experten wenn nötig (Peer-Knowledge-Request)
- Can save to Canvas if building proposal

---

---

# Journey J-Verfügbarkeit: Verfügbarkeit-Update nach Projekt-Verlängerung (NEUE JOURNEY)

**Trigger:** Projekt verlängert sich, Stefan muss Verfügbarkeit anpassen
**Dauer:** 2–3 Minuten
**Gerät:** Smartphone (meist unterwegs)
**Kontext:** Kundendiskussion → Projekt-Termin pushed → Verfügbarkeit updated

---

## [J-Verfügbarkeit-S1] Quick-Update-Flow

**Scenario: Stefan beim Kunden, bekommt Nachricht**

```
Kundengespräch bei RetailCorp (12:00):
"Stefan, das Projekt verläg. sichkk bis Ende Juli statt Ende Juni.
 Passt für dich?"

Stefan öffnet Smartphone, öffnet Konsultry:
[Notifications] → "Projekt RetailCorp: Timeline-Anpassung"

┌─────────────────────────────────────────────────────┐
│  📅 VERFÜGBARKEIT-UPDATE                            │
│                                                     │
│  RetailCorp AG                                      │
│  Aktuelle Verfügbarkeit: KW 20–24 (Mai–Juni)       │
│                                                     │
│  ❌ Problem:                                        │
│  Kunde möchte bis KW 30 (Ende Juli)                │
│  +6 Wochen statt geplant                           │
│                                                     │
│  Deine nächsten Projekte:                           │
│  • MedTech Go-Live: KW 26 (fix, Kunde)             │
│  • FreieCapacity: KW 27–29 (geplant)               │
│  • Neue Opportunity: ab KW 31 (geplant)            │
│                                                     │
│  Konflikt: RetailCorp bis KW 30 vs. MedTech KW 26 │
│            = Overlap KW 26–30 (5 Wochen)           │
│                                                     │
│  Optionen:                                          │
│  ☐ Zusagen (Overlap annehmen, Anja um Hilfe fragen)│
│  ☐ Partial OK (Bis KW 28 statt 30, Anja übernimmt)│
│  ☐ Absagen (Konflikt zu hoch)                     │
│  ☐ Rückfrage (Muss ich MedTech-Lead sein?)        │
│                                                     │
│  Stefan klickt: "Rückfrage zu Rollen-Split"       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

Stefan tippt schnelle Rückfrage:

```
┌─────────────────────────────────────────────────────┐
│  💬 Rückfrage an Katrin                             │
│                                                     │
│  "Kann ich ab KW 26 weniger Tage im RetailCorp     │
│   sein (50% statt 100%) und Anja zum Lead         │
│   machen? Dann kann ich MedTech-Cutover parallel  │
│   führen."                                          │
│  [Send]                                             │
│                                                     │
│  Katrin antwortet (meist 10 Min):                  │
│  "Gute Idee. Ja, ab KW 26 kannst du auf 50%      │
│   reduzieren. Ich frag Anja. Dann passt auch     │
│   wirtschaftlich. Okay für dich?"                 │
│                                                     │
│  Stefan: "Perfekt, dann zusagen"                   │
│  [Send]                                             │
│                                                     │
│  Status Updated: Stefan's Verfügbarkeit KW 20–24  │
│  (100%) + KW 25–30 (50%) ✅                        │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Design-Implikation:**
- Keine langen Formulare
- Quick Optionen (Zusagen/Ablehnen/Rückfrage)
- Konflikt-Erkennung automatisch
- Chat-basiert (nicht modal)

---

---

# Journey J-Peer-Knowledge: Peer-Knowledge-Request (NEUE JOURNEY)

**Trigger:** Stefan braucht spezifische Antwort von Kollege, nicht vom System
**Dauer:** 2–5 Minuten (spontan) + Wartezeit auf Antwort
**Gerät:** Smartphone oder Laptop
**Kontext:** "Wer hat Erfahrung mit SD-MM-Integration im Retail?"

---

## [J-Peer-Knowledge-S1] Peer-Request Flow

**Scenario: Stefan sitzt beim Kunden, hat Frage für Peer**

```
Command Bar: "Wer hat Erfahrung mit SD-MM?"

┌─────────────────────────────────────────────────────────────┐
│  🔍 Peer-Knowledge-Request                                  │
│                                                             │
│  Stefan: "Wer hat Erfahrung mit SD-MM-Integration im       │
│           Retail? Brauche Best Practice für                │
│           Lagerbewegung sync mit Sales Order."             │
│  [Send]                                                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Agent schlägt vor:                                        │
│  "2 Consultants mit dieser Erfahrung:                      │
│                                                             │
│   1️⃣ Stefan K. (du!) — RetailCorp                         │
│      → Du selbst! (Q3/2024)                                │
│      [Eigene Notes anschauen?]                             │
│                                                             │
│   2️⃣ Markus S. — FashionGroup                             │
│      → SD-MM Integration, Retail, Q1/2025                 │
│      [📧 Frag ihn]  [💬 Chat]  [☎️ Anrufen-Hint]         │
│                                                             │
│   3️⃣ Lisa T. — MedTech                                     │
│      → Co-worked mit dir, kann helfen                      │
│      [📧 Frag sie]                                         │
│                                                             │
│   Knowledge-Bausteine:                                      │
│   📋 'Retail SD-MM Sync Best Practice' (Stefan, Markus)   │
│      [📖 Öffnen]                                           │
│  "                                                          │
│                                                             │
│  Stefan klickt: [📧 Frag Markus]                          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Message wird vorbereitet:                                 │
│  "Hey Markus, ich arbeite gerade an SD-MM-Integration     │
│   für Retail bei RetailCorp. Du hast das bei Fashion     │
│   Group gemacht — kannst du 5 Min telefonieren? Habe   │
│   Fragen zur Lagerbewegung-Sync mit Sales Order."        │
│                                                             │
│  Stefan editiert kurz, sendet → Markus gets Chat-Message   │
│  + Optional: "Markus ist gerade verfügbar (grüner Punkt)"  │
│                                                             │
│  Markus antwortet (10 Min später):                         │
│  "Gerne, gerade Pause. Anruf?"                            │
│                                                             │
│  Stefan kann Markus anrufen (direkt aus Chat-UI)          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Design-Implikationen:**
- **Peer-Netzwerk statt nur Knowledge-Base** — Menschen sind der beste Source
- **Kontakt direkt aus Chat** — keine "Kontaktsuche" nötig
- **Availability-Hints** — "Markus gerade verfügbar" (green dot)
- **Context-Sharing** — Peer sieht Stefans Frage vorher, kann prepared sein

---

---

# Stefans Surfaces & AI-Interaktionsmuster

## Primäre Oberflächen für Stefan

| Surface | Häufigkeit | Kontext | Primary Use | Device |
|---|---|---|---|---|
| **Projekt-Dashboard** | Täglich, 10 Min | 08:00, vor Daily | Milestone-Status, Budget, Team, Risiken | Laptop (primär), Smartphone (fallback) |
| **Knowledge-Agent (Chat)** | 3–5x pro Woche, 5 Min | Mittags/Abends, schnelle Fragen | "Gibt es eine Checkliste für...?" | Smartphone (primär), Laptop |
| **Command Bar** | 2–3x täglich, 1 Min | Quick Navigation, Search | "Geh zu MedTech", "Peer mit SD-MM Erfahrung?" | Laptop (Desktop), Smartphone |
| **Notification Center** | 3–5x täglich, 1 Min | Staffing, Alerts, Updates | Staffing-Anfragen, Projekt-Alerts, Approvals | Smartphone (primär) |
| **Staffing-Request Card** | 2–3x pro Monat, 5 Min | Mittags (12:00–13:00) | Anfrage lesen + Zusagen/Ablehnen | Smartphone (100% mobile) |
| **Profil / Skills** | 1x pro Monat, 10 Min | Abends nach Projektabschluss | Auto-Update prüfen, neue Projekte eintragen | Laptop (nach Update), Smartphone (review) |
| **Copilot (Dashboard-Context)** | 3–5x pro Woche, 3 Min | 08:00–09:00 auf Dashboard | "Was sind Top-3-Risiken?", "Scope-Creep erkannt?" | Laptop (primär) |

---

## AI-Interaktionsmuster für Stefan

| Muster | Häufigkeit | Example | Stefans Erwartung |
|---|---|---|---|
| **Knowledge-Synthese** | 3–5x/Woche | "SAP-Datenmigrations Checkliste" | Konkrete Checkliste, nicht 5 Links |
| **Risiko-Alert (Copilot)** | 3–5x/Woche | "Scope-Creep erkannt, +2 Wochen" | Proaktiv, auf Dashboard, nicht per E-Mail |
| **Peer-Empfehlung** | 1–2x/Woche | "Markus hat SD-MM gemacht, frag ihn?" | Soziales Netzwerk, nicht nur Knowledge-Base |
| **Profil-Auto-Update** | 1x pro Monat | "Skills aktualisiert, Profil 91% ✅" | Minimal manual, mostly automatic |
| **Staffing-Context** | 2–3x/Monat | "RetailCorp: Lead, München, 1.800€, Team: Lisa" | All-in-one card, keine Suche nötig |
| **Change-Empfehlung** | 1–2x/Woche | "Scope erhöht um 20PT, Change Request empfohlen" | Quantifiziert, actionable, nicht vage |

---

## AI-Interface-Routing: Knowledge-Agent vs. Command Bar vs. Copilot

```
Stefan interagiert...
├── Konkretes Wissen gesucht ("SAP Datenmigration Checkliste")
│   → Command Bar → Knowledge-Agent antwortet inline (Synthese, nicht Links)
│   → Bei komplexer Antwort: Expandiert in Chat-View
├── Projekt-Navigation ("MedTech Budget", "Milestone 3 Status")
│   → Command Bar: direkte Navigation zum Projekt-Dashboard
├── Proaktive Empfehlung
│   → Copilot auf Projekt-Dashboard: "Scope-Creep erkannt, Change Request?"
├── Explorative Recherche ("Wie haben wir Cutover bei Retail gemacht?")
│   → Knowledge-Agent Chat (Multi-Turn)
└── Quick-Action ("Verfügbarkeit updaten")
    → Command Bar: Dialog-Flow (2 Felder, 10 Sekunden)
```

### Explainability & Trust für Stefan

Stefan vertraut der Knowledge-Engine nur wenn sie synthetisiert, nicht nur sucht.

- Jede Knowledge-Antwort braucht: Quellen (welche Projekte), Experten-Hinweis (wer hat es gemacht), Confidence (wie viele Datenpunkte)
- Falsche Antworten: "Das stimmt nicht" → Feedback-Button → Agent lernt
- Matching-Transparenz bei Staffing: "Warum werde ich vorgeschlagen?" muss für Stefan sichtbar sein (Karriere-Fit-Erklärung)

### Phase-1-Abdeckung: Stefan

- ✅ Berater-Profil → Phase 1 (Knowledge Graph)
- ✅ Staffing-Anfrage empfangen → Phase 1 (Staffing)
- ⚠️ Projekt-Dashboard → Phase 3 (Project Execution)
- ⚠️ Knowledge-Agent → Phase 2 (Methodology & IP)
- ⚠️ Wissens-Rückfluss → Phase 2

**Konsequenz:** Stefan kann in Phase 1: Profil pflegen, Staffing beantworten, Collaboration nutzen. Aber seine Kern-Workflows (Projekt-Monitoring, Knowledge-Suche) kommen erst in Phase 2-3. Das bedeutet: Stefan hat in Phase 1 wenig Grund, das System täglich zu öffnen. Risiko: Adoption-Gap.

---

---

# Design-Implikationen für Stefans Workflows

## 1. **Minimale Pflege, maximale Auto-Anreicherung**

**Prinzip:** Stefans Profil muss sich durch Projektabschlüsse und Dokument-Uploads automatisch aktualisieren. Nie manuell Skills eintippen.

**Implementierung:**
- Nach Projektabschluss → Knowledge-Upload → Profile auto-updated
- Knowledge-Engine extrahiert Skills aus Dokumenten + Project-Metadata
- Stefan sieht Notification mit Änderungen, kann prüfen (2 Min) + akzeptieren
- **Ergebnis:** Profil immer aktuell, Stefan investiert nur 2 Min/Monat

**Wireframes bereits in [J5-S1] und [J5-S2] definiert**

---

## 2. **Knowledge-Agent muss Synthese liefern, nicht Dokument-Links**

**Prinzip:** "Hier ist eine Checkliste basierend auf 3 Projekten" ist 10x wertvoller als "3 Dokumente gefunden".

**Implementierung:**
- Knowledge-Engine nutzt Vektoren + Semantic Search
- Liefert synthetisierte Antwort (Checkliste, Template, Best Practice)
- Jeder Item hat Quelle (Projekt, Person, Datum)
- Stefan kann "In Canvas übernehmen" für direkte Nutzung

**Wireframes bereits in [J5-S3] definiert**

---

## 3. **Staffing-Anfragen brauchen vollen Kontext inline**

**Prinzip:** Projekt-Scope, Rolle, Zeitraum, Kunde, Margin — alles auf einer Card. Annehmen/Ablehnen mit einem Tap.

**Implementierung:**
- Self-contained StaffingRequestCard
- Alle Entscheidungsinfos sichtbar: Rolle, Team, Timing-Warnung, Karriere-Fit, Katrins Notiz
- Keine Modals, keine Modal-Nesting
- Mobile-first (Smartphone ist primäres Device für Stefan mittags)

**Wireframes bereits in [J2-S2] definiert**

---

## 4. **Projekt-Dashboard muss PL-spezifisch sein**

**Prinzip:** Nicht die gleiche View wie Thomas (Executive). Stefan will: Milestone-Timeline, Budget-Burndown, Team-Verfügbarkeit, offene Risiken.

**Implementierung:**
- Daily-View zeigt beide Projekte (RetailCorp + MedTech) auf einen Blick
- Pro Projekt: Milestone-Fortschritt, Budget-Status, Team-Verfügbarkeit, Risiken
- "Für Daily"-Notizen generiert Agent 3–4 Punkte, die Stefan im Daily ansprechen sollte
- Optional: Export für Handschrift-Notizen

**Wireframes bereits in [J3-S1] und [J-Daily-S1] definiert**

---

## 5. **Mobile für Quick-Actions, Desktop für Tiefe**

**Prinzip:** Staffing-Anfrage beantworten, Verfügbarkeit updaten, Knowledge-Frage stellen — alles mobile-first. Desktop für Deep Work (Dashboard-Review, Profil-Update).

**Implementierung:**

| Task | Mobile | Desktop |
|---|---|---|
| Staffing-Anfrage beantworten | ✅ 100% (Card-UI, 5 Min) | Nicht nötig |
| Verfügbarkeit updaten | ✅ 100% (Quick-Dialog, 2 Min) | Nicht nötig |
| Knowledge-Frage stellen | ✅ 100% (Command Bar + Chat, 5 Min) | ✅ Auch gut (Sidebar Chat) |
| Projekt-Dashboard Daily-Review | ⚠️ Fallback (responsive) | ✅ 100% (Full Dashboard) |
| Profil-Update akzeptieren | ✅ 100% (Notification, 2 Min) | ⚠️ Auch möglich |
| Projekt abschließen + Wissen hochladen | ❌ Zu kompliziert (Dokument-Upload) | ✅ 100% (Drag-and-drop) |

---

---

# Fehlende Journeys (Neue Opportunities)

Diese Journeys sind im Original-UJ-Dokument **nicht definiert**, aber Teil von Stefans Personas-Brief. Sie sollten noch konzeptualisiert werden:

## 1. Daily Standup-Vorbereitung (J-Daily)

**Status:** ✅ DEFINIERT in dieser Datei als [J-Daily-S1]

**Zusammenfassung:**
- Stefan öffnet Dashboard um 08:00
- Sieht beide Projekte auf einen Blick
- Agent generiert "Für Daily"-Notizen (3–4 Punkte pro Projekt)
- Stefan vorbereitet im Daily-Standup

**Wireframes:** [J-Daily-S1] ✅

---

## 2. Knowledge-Contribution Flow (J-Knowledge-Mid-Project)

**Status:** ⚠️ TEILWEISE DEFINIERT (aktuell nur nach Projekt-Abschluss in J5)

**Lücke:** Stefan könnte auch **während des Projekts** Learnings hochladen (nicht nur am Ende)

**Szenario:**
- Stefan ist in Woche 8 von 24 beim MedTech-Projekt
- Findet eine clever solution für GxP-Validierung
- Lädt ein Quick-Snippet / Lesson Learned hoch ("In-Progress Knowledge")
- System macht es sofort für andere verfügbar (nicht erst nach Abschluss)

**Design-Implikation:**
- "Quick Knowledge Capture" Button auf Projekt-Dashboard
- 2–3 Min Upload (nicht 15 Min wie Post-Abschluss)
- Markdown oder Video-Snippet möglich
- Sofort veröffentlicht, nicht erst nach Abschluss

**Wireframe-Skizze:**

```
┌─────────────────────────────────┐
│ 📚 QUICK KNOWLEDGE CAPTURE      │ ← Button on Dashboard
│                                 │
│ "Share a learning with team"    │
│ ┌─────────────────────────────┐ │
│ │ Topic: ________________     │ │
│ │ Description:               │ │
│ │ [___________________]      │ │
│ │ Attachment: [Upload]       │ │
│ │ [✅ Share]  [❌ Cancel]     │ │
│ └─────────────────────────────┘ │
│                                 │
│ Public: Knowledge-Base          │
│ Private: Nur Team               │
│                                 │
└─────────────────────────────────┘
```

---

## 3. Verfügbarkeit-Update nach Projekt-Verlängerung (J-Verfügbarkeit)

**Status:** ✅ DEFINIERT in dieser Datei als [J-Verfügbarkeit-S1]

**Zusammenfassung:**
- Kundengespräch → Projekt verläng. sich KW 20–30 statt 20–24
- Stefan öffnet Mobile App → Verfügbarkeit-Update Dialog
- Optionen: Zusagen / Partial OK (50%) / Ablehnen / Rückfrage
- Quick chat mit Katrin → Status updated

**Wireframes:** [J-Verfügbarkeit-S1] ✅

---

## 4. Profil-Auto-Anreicherung nach Projekt (J-Profile-Auto-Update)

**Status:** ✅ DEFINIERT in dieser Datei als [J5-S2]

**Zusammenfassung:**
- Nach Projektabschluss → System extrahiert aus Dokumenten neue Skills
- Stefan bekommt Notification: "Profil aktualisiert: SAP Fiori UX, Data Migration Pharma, etc."
- Stefan reviewt + akzeptiert (2 Min)
- Profil ist finalisiert

**Wireframes:** [J5-S2] ✅

---

## 5. Peer-Knowledge-Request (J-Peer-Knowledge)

**Status:** ✅ DEFINIERT in dieser Datei als [J-Peer-Knowledge-S1]

**Zusammenfassung:**
- Stefan fragt: "Wer hat Erfahrung mit SD-MM-Integration im Retail?"
- System findet Markus S. (FashionGroup, Q1/2025)
- Stefan sendet Quick-Message → Markus antwortet
- Direkter Kontakt, nicht nur Knowledge-Base-Links

**Wireframes:** [J-Peer-Knowledge-S1] ✅

---

## 6. Command-Bar Navigation (J-Command-Bar)

**Status:** ⚠️ ERWÄHNT aber nicht vollständig definiert

**Lücke:** Command Bar ist in Stefans Persona erwähnt ("Command Bar für Navigation: 'Geh zu MedTech-Projekt'") aber nicht mit vollständigen Wireframes dokumentiert

**Szenarien:**
- "Geh zu RetailCorp-Projekt" → Dashboard öffnet sich
- "Zeig Staffing-Anfragen" → Notification Center mit Filterung
- "Knowledge-Agent" → Chat öffnet sich
- "Mein Profil" → Profil-Ansicht

**Design-Implikation:**
- Command Bar (Cmd+K) ist zentrale Navigation für Stefan
- Sollte auf Laptop UND Smartphone verfügbar sein
- Multi-Purpose: Project Navigation, Knowledge Search, Peer-Lookup

**Wireframe-Skizze:**

```
┌─────────────────────────────────────────────┐
│ 🔍 Command Bar (Cmd+K / ⌘+K)                │
├─────────────────────────────────────────────┤
│ Stefan tippt: "retail"                      │
│                                             │
│ SUGGESTIONS:                                │
│ 🏢 RetailCorp AG (Projekt)                 │
│    [Go to Dashboard]                        │
│                                             │
│ 💬 "Staffing-Anfrage: RetailCorp"          │
│    [View Request]                           │
│                                             │
│ 📋 "Retail SD-MM Sync Best Practice"       │
│    [View Knowledge]                         │
│                                             │
│ 👤 Contacts: Markus S. (Retail-Expert)    │
│    [Chat]                                   │
│                                             │
└─────────────────────────────────────────────┘
```

---

---

# Cross-Journey Design Patterns für Stefan

Diese Patterns erscheinen konsistent in allen Stefans Journeys:

| Pattern | Journeys | Beschreibung | Design-Implikation |
|---|---|---|---|
| **Self-Contained Cards** | J2-S2, J3-S1, J5-S2 | Entscheidungen treffen ohne Kontext zu verlassen | Alle Infos on einer Card (StaffingCard, DailyCard, ProfileCard) |
| **1-Tap Mobile Actions** | J2-S2, J-Verfügbarkeit | Primäre Aktion immer als einzelner Tap erreichbar | Zugeben/Ablehnen/OK mit großem Button |
| **Proactive AI-Recommendations** | J3-S1, J5-S3, J-Daily | AI erkennt Pattern + empfiehlt Aktion proaktiv | Copilot auf Dashboard, Agent in Chat |
| **Auto-Anreicherung** | J5-S1, J5-S2 | System richtet sich selbst an, braucht minimal Input | Profile Update automatisch nach Projekt-Abschluss |
| **Transparent Sourcing** | J5-S3, J-Peer-Knowledge | Jedes Knowledge-Item zeigt Quelle (Projekt, Person, Datum) | Vertrauen durch Transparenz |
| **Availability-Hints** | J-Peer-Knowledge, Staffing-Warnung | System zeigt wer gerade verfügbar ist | Green/Red dots, Timing-Warnings |
| **Quick-Dialog statt Formular** | J-Verfügbarkeit, J-Ad-hoc | Fragen/Antworten im Dialog-Stil | Chat-based, nicht Form-based |
| **Feedback-Loops** | J3-S3 (Client Portal), J5-S1 | Kundenfeedback fließt automatisch zurück | NPS wird eingefangen, in Profil dokumentiert |
| **Ampel-Kommunikation** | J3-S1, J-Daily | 🟢/🟡/🔴 als universelles Status-Vokabular | Project Health Badge, Milestone Status |

---

---

# Cross-References zu anderen Persona-Dateien

Diese Datei referenziert und baut auf folgenden Dokumenten auf:

## Interne References

1. **[Consultry Target Personas v1.0](../Consultry-Target-Personas-v1.0.md)** (Zeilen 299–416)
   - Stefans kompletter Steckbrief
   - Tagesrhythmus
   - Frustrationen & Abbruchpunkte
   - Key Journey: Knowledge-Anfrage → Synthese → Wiederverwendung

2. **[Consultry User Journeys v1.0](../Consultry-User-Journeys-v1.0.md)**
   - Journey 2: Staffing-Anfrage → Antwort → Team-Bestätigung (Stefans Rolle als Empfänger)
   - Journey 3: Projekt-Risiko → Alert → Eskalation (Stefans Rolle als Erkender)
   - Journey 5: Projektabschluss → Knowledge → Profil (Stefans Rolle als Knowledge-Geber)
   - Cross-Journey Design Patterns

3. **[Consultry PRD v3.0-Final](./Consultry-PRD-v3.0-Final.md)** (Zeilen 157–159)
   - Stefans PRD-Definition: "Senior Consultant / Projektleiter, braucht Projektübersicht, Knowledge-Engine, Profilverwaltung, Staffing"

4. **[Consultry Design System v1.2](../design/Consultry-Design-System-v1.2.md)**
   - Farb-Token für Komponenten (z.B. 🟢/🟡/🔴 für Health-Badge)
   - Typography für Dashboard Headlines, Body Text
   - Spacing & Layout-Patterns

## Persona-Kontakte & Touchpoints

Stefans Interaktionen mit anderen Personas:

| Persona | Interaktion | Journey | Kontext |
|---|---|---|---|
| **Katrin** (Business Dev) | Staffing-Anfragen, Knowledge-Nutzung | J2, J5 | Katrin requestet Stefans Zeit für Projekt, nutzt später sein Wissen |
| **Thomas** (Account Manager) | Eskalation, Change Request Approval | J3 | Stefan eskaliert Risiken an Thomas, Thomas approves Change Request |
| **Lisa** (Consultant) | Team-Zusammenarbeit, Knowledge-Konsumption | J2, J5 | Lisa arbeitet mit Stefan im Team, nutzt später sein Knowledge |
| **Dr. Müller** (Kunde) | Client Portal, Feedback | J3, J5 | Dr. Müller wird über Risiken informiert, gibt Kundenfeedback |
| **Markus S.** (Peer) | Peer-Knowledge-Austausch | J-Peer-Knowledge | Stefan fragt Markus zu SD-MM-Integration |

---

---

# Zusammenfassung: Stefans Consultry-Nutzung

## Täglicher Workflow

```
08:00–08:15    Dashboard-Review (Laptop)
               → Projekt-Status, Daily-Notizen, Team-Verfügbarkeit
               [J-Daily-S1]

08:30–09:00    Daily Standup (keine Consultry)

09:00–12:00    Facharbeit beim Kunden
               + Gelegentlich Knowledge-Agent (1–2x pro Woche)
               [J-Ad-hoc-S1, J-Ad-hoc-S2]

12:00–13:00    Staffing-Anfrage + Verfügbarkeit-Update (Smartphone)
               [J2-S2, J-Verfügbarkeit-S1]

13:00–17:00    Facharbeit, Kundenmeetings

17:00–17:30    Quick-Updates, Knowledge-Agent (Smartphone)
               [J-Ad-hoc-S1]

Abends         Projekt-Dashboard, Dokumentation
               Nach Abschluss: Knowledge-Upload
               [J5-S1, J5-S2]
```

## Wöchentlicher Workflow

| Häufigkeit | Aktivität | Journey | Dauer |
|---|---|---|---|
| Täglich | Projekt-Dashboard Review | [J-Daily] | 10–15 Min |
| 3–5x/Woche | Knowledge-Agent Anfrage | [J-Ad-hoc] | 5 Min |
| 2–3x/Monat | Staffing-Anfrage beantworten | [J2-S2] | 5 Min |
| 1x/Monat | Profil-Auto-Update bestätigen | [J5-S2] | 2 Min |
| Nach Projekt | Knowledge hochladen + Abschluss | [J5-S1] | 15 Min |

**Gesamtzeit in Consultry: 30–60 Min pro Tag (Delivery-fokussiert)**

---

## Key Success Metrics für Stefans Journeys

| Metrik | Target | Wie gemessen | Journey |
|---|---|---|---|
| **Staffing-Response-Zeit** | < 2 Stunden | Von Notification bis Zusage | J2-S2 |
| **Dashboard-Health-Accuracy** | 95%+ | Soll vs. Ist vs. Prognose | J-Daily, J3 |
| **Knowledge-Consummtion** | 3+ bausteine pro Monat nutzen | Tracking in Knowledge-Agent | J5-S3 |
| **Profil-Completeness** | 85%+ | Automatisch gemessen | J5-S2 |
| **Projekt-On-Time Delivery** | 90%+ | vs. Milestone Deadlines | J3, J-Daily |
| **Escal. Response Time** | < 1 Stunde | Von Problem bis Thomas Alert | J3-S2 |
| **Mobile Usability** | 95% satisfaction | Stefan's Feedback auf Mobile-Flows | J2-S2, J-Ad-hoc |

---

---

**Dokument abgeschlossen: 31. März 2026 (v1.1)**
**Autor:** Design & Product Team, Consultry
**Nächste Schritte:** Wireframe-Verfeinerung, Usability-Testing mit Stefan-ähnlichen Personas

---

## Design-Anbindung (v1.1)

**Stefans Screen Specs (erstellt):**

| Journey-Screen | Screen Spec | Status |
|---------------|-------------|--------|
| [J2-S2] Staffing-Anfrage (Mobile) | `screen-specs/mobile/mobile-staffing-card.md` | ✅ Erstellt |
| [J3-S1] Projekt-Dashboard | `screen-specs/delivery/project-dashboard.md` | Ausstehend (Tier 7) |
| [J5-S1] Projekt-Abschluss | `screen-specs/delivery/projekt-abschluss.md` | Ausstehend (Tier 7) |
| [J5-S2] Profil-Update | `screen-specs/foundation/consultant-profile-view.md` | ✅ Erstellt |
| [J5-S3] Knowledge-Agent | `screen-specs/ai-experience/knowledge-agent-chat.md` | Ausstehend (Tier 6) |
| [J-Daily-S1] Tages-Dashboard | `screen-specs/delivery/project-dashboard.md` | Ausstehend (Tier 7) |

**Stefans Kern-Komponenten:**

| Komponente | Spec | Stefans Nutzung |
|-----------|------|----------------|
| Bottom Nav Bar | `component-specs/navigation/bottom-navigation-bar.md` | Mobile: Projekte, Wissen, Profil, Team |
| Bottom Sheet | `component-specs/composition/bottom-sheet.md` | Mobile Staffing-Anfrage Detail |
| Cards | `component-specs/data-display/cards.md` | Projekt-Status, Knowledge Assets |
| Slide-Over Panel | `component-specs/composition/slide-over-panel.md` | Berater-Profil, Knowledge Detail |

**v1.1 Changelog:** Design System Referenz v1.2→v1.3. Screen Spec + Component Spec Links hinzugefuegt. PRD-Verweis v3.0→v3.1.

