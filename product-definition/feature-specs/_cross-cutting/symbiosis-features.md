# Cross-Cutting — Symbiosis Features

**Bezug:** [integration-flows.md](./integration-flows.md), Module-Specs in feature-specs/

Diese Datei katalogisiert Features, die **erst aus der Kombination mehrerer Module** entstehen — Features, die in keinem Modul alleine machbar sind, aber durch den Graph-First-Ansatz emergent werden. Sie sind das eigentliche **Differenzierungs-Profil** gegen den „4-Tools-zusammenkleben"-Vergleichswert.

Sicht:
- §A Symbiose-Logik — was macht Features symbiotisch
- §B Symbiose-Features im MVP-Scope
- §C Symbiose-Features als Phase-1b-Aussicht
- §D Anti-Symbiose-Patterns (was wir NICHT zu Symbiose zwingen)
- §E Symbiose-Telemetrie — wie messen wir den 1+1=3-Effekt

---

## §A — Was macht ein Feature „symbiotisch"

Ein Feature ist symbiotisch im Sinne dieser Dokumentation, wenn **alle drei** Kriterien erfüllt sind:

1. **Es braucht Daten aus ≥2 Modulen**, deren SOT verschieden ist.
2. **Es ist in einem einzelnen Modul nicht sinnvoll umsetzbar** — die einzelne Modul-Perspektive verliert die Tiefe.
3. **Der Mehrwert wächst überproportional** zur Daten-Tiefe in den beteiligten Modulen.

Negativ-Beispiele (sind NICHT symbiotisch):
- Daten-Aggregation: „Account-Liste mit Anzahl Opportunities" — additiv, nicht emergent.
- Cross-Module-Search: „suche Asset und Account" — parallele Operation, kein neuer Mehrwert.
- Reporting-Dashboard: „Pipeline + Forecast" — Kombination ohne Wechselwirkung.

Positiv-Beispiele (die Features hier unten).

---

## §B — Symbiose-Features im MVP-Scope

### S1 — Stakeholder-Berater-Resonanz-Map

**Symbiose:** Modul 1 (Stakeholder-CV-Trail) × Modul 3 (Berater-Education + Career-Trail) × Modul 4 (Methodology-Authorship)

**Was es ist:**
Wenn ein Trigger einen Stakeholder berührt, zeigt das System nicht nur „Wer kennt diesen Stakeholder?" (Warm-Path), sondern auch **„Wer kennt diesen Stakeholder UND hat passende Methodology-Erfahrung UND ist verfügbar?"** — die *Resonanz-Pyramide*.

**Daten-Triangulation:**
```
Stakeholder Frau Schulz (Modul 1)
    │
    ├─ CareerTrail: Bain 2009–2015, Heller 2015–2021, Müller 2021–
    ├─ EducationTrail: TU München, Wirtschaftsing. 2003–2008
    │
Konsultanten-Suche:
    1. Warm-Path-Match (CV/Edu-Overlap) [Modul 3 CV-Trail]
    2. Methodology-Match für Trigger-Thema [Modul 4 Methodologies + Modul 3 KnowledgeContributions]
    3. Availability für nächste 8 Wochen [Modul 3 Availability]
    │
Ergebnis: Top-3 Berater mit "Resonanz-Score"
   = warm_path_strength × methodology_authorship_depth × availability_overlap
```

**MVP-Wert:** dramatisch besseres Staffing für Bestandskunden als jede generische BD-/HR-/Knowledge-Suche.

**Wireframe (Trigger-Detail mit Resonanz-Map):**
```
┌────────────────────────────────────────────────────────────────────────┐
│ Trigger · Müller-AG · IT-Sourcing-Restrukturierung                      │
├────────────────────────────────────────────────────────────────────────┤
│ Stakeholder: Frau Schulz (CFO)                                          │
│                                                                          │
│ Resonanz-Map:                                                            │
│                                                                          │
│  ★ Stefan Kraus                            Resonanz-Score: 0.91          │
│    Warm-Path:    TU München, gleicher Studiengang 2003–2008            │
│    Methodology:  Authored IT-Sourcing-v3 + 3 Lessons                   │
│    Availability: 80 % frei KW 24–32                                     │
│                                                                          │
│  ★ Lisa Tran                              Resonanz-Score: 0.62          │
│    Warm-Path:    Praktikum Heller-Gruppe 2017–2019                     │
│    Methodology:  Co-Authored IT-Sourcing-Workshop-Template              │
│    Availability: 100 % frei KW 25–30                                    │
│                                                                          │
│  ◇ Anna Holz                              Resonanz-Score: 0.45          │
│    Warm-Path:    keine                                                  │
│    Methodology:  Proficient in IT-Sourcing (Source: PeerVerified)      │
│    Availability: blockiert bis KW 32                                    │
│                                                                          │
│ [In Opportunity übernehmen]    [Resonanz erklären]                      │
└────────────────────────────────────────────────────────────────────────┘
```

**Warum nicht in einem Modul:**
- Account Growth allein: kann Warm-Path, aber nicht Skill-/Availability-Tiefe.
- Capacity allein: kann Skill-Suche, aber nicht Beziehungs-Kontext.
- Knowledge allein: kann Authorship-Suche, aber nicht Verfügbarkeit.

---

### S2 — Briefing mit aktiver Risiko-Sicht

**Symbiose:** Modul 1 (AccountHistory) × Modul 4 (LessonsLearned, DecisionRecords) × Modul 2 (Opportunity-Stand) × Modul 3 (Allocated-Berater)

**Was es ist:**
Account-Briefing vor Termin ist nicht statischer Status, sondern *aktive Pre-Meeting-Intelligence*. Das Briefing nimmt:
- Stand der Beziehung (Modul 1)
- Aktive Themen (Modul 2 + Modul 5-out-of-scope)
- **Historische Lessons + offene Decisions** (Modul 4)
- **Methodology-Erfolgs-Pattern bei diesem Account** (Modul 4 + Modul 2-Win/Lost)
- **Personen-Verbindungen Stakeholder ↔ Team** (Modul 1 + Modul 3 Warm-Path)

**Beispiel Briefing-Section: „Warnsignale":**
```
Quelle: Lessons-Learned-Müller-Carve-Out-2023 → "Frau Schulz blockierte Pricing-
Premium-Diskussion in Phase 5 — sie ist preissensitiv bei Margenbegründung ohne
Methodologie-Anker."

Quelle: Decision-Record-Heller-2024-Q3 → Frau Bauer (jetzt bei Müller) hat 2024
für Konsolidierung gestimmt, war damit innovations-offen.

Empfehlung:
  - Pricing-Diskussion methodologie-getragen führen.
  - Frau Bauer als Alliierte einbeziehen, falls Frau Schulz pricing-skeptisch wird.
```

**MVP-Wert:** Berater geht in Termin mit Kontext, der ohne Consultry 4–8 h interne Recherche kostet.

**Warum nicht in einem Modul:**
- Modul 1 allein: würde nur Stand zeigen, ohne Lessons-Tiefe.
- Modul 4 allein: hat Lessons, aber nicht im Account-Kontext kuratiert.

---

### S3 — Clause-Deviation-Pattern-Detector

**Symbiose:** Modul 2 (ClauseDiff-Aggregate über Verträge) × Modul 4 (ClauseLibrary)

**Was es ist:**
Wenn eine bestimmte Standard-Klausel in ≥X % der Verträge im Diff zur Library steht (z. B. immer auf 1.5× Haftungs-Cap erhöht), suggeriert das System: „Library-Standard sollte updated werden — die Praxis ist konsistent abweichend."

**Konkretes Pattern:**
```
ClauseLibraryEntry "Haftung Standard"
   ├─ canonical: "Auftragswert"
   └─ deviation_history (modul-2-aggregat):
       ├─ 14 % Verträge: "1.5× Auftragswert"
       ├─  3 % Verträge: "2× Auftragswert"
       └─  1 % Verträge: ">2× Auftragswert"

Wenn 14 % konsistent abweichen, vorschlagen:
  "Library-Standard auf 1.5× upgraden? Wirkt 14 % der Verhandlungen entgegen."
```

**Approval-Pfad:** MP + Counsel review, wenn approved → neue Library-Version.

**MVP-Wert:** Library bleibt **lebendiges Werk**, nicht statisches Dokument.

**Warum nicht in einem Modul:**
- Modul 2 hat ClauseDiffs, weiß aber nicht „warum war das Library-Default ursprünglich anders gewählt".
- Modul 4 hat Library, weiß aber nicht wie sie in der Praxis verhandelt wird.

---

### S4 — Methodology-Authorship → Berater-Authority

**Symbiose:** Modul 4 (KnowledgeAsset Methodology, Authorship) × Modul 3 (ProjectExperience, KnowledgeContribution) × Modul 2 (Won/Lost-Attribution)

**Was es ist:**
Berater-Authority in einem Methoden-Bereich ist nicht selbst-deklariert, sondern **emergiert aus Daten**:

```
Authority-Indikator für Berater X in Methodology M =
  weight_1 × (# Methodology-Authored / Co-Authored)
+ weight_2 × (# ProjectExperience mit M = applied + Won)
+ weight_3 × (# Lessons authored mit Methodology = M)
+ weight_4 × (# DecisionRecords als decided_by + Methodology-Verlinkung)
```

**Effekt im UI:** wenn Lisa sagt „Ich bin Authority in Workshop-Facilitation", zeigt das System Authority-Indikator-Stand basiert auf Daten — kein Self-Praise möglich.

**Im Staffing-Algorithmus:** Authority-Score wird Tie-Breaker bei sonst gleichwertigen Kandidaten.

**MVP-Wert:** Aus dem Frustpunkt „Wer ist hier wirklich der Experte?" wird ein Daten-Snapshot.

**BetrVG-Note:** Authority-Indikator ist *aggregiertes Personen-Profil* — kann mitbestimmungspflichtig sein. In Heavy-Mode: Indikator nur in Practice-Aggregat sichtbar, individuelle Werte nur mit Berater-Zustimmung oder im konkreten Staffing-Vorschlag.

---

### S5 — Stakeholder-Wechsel als Opportunity- und Risk-Trigger zugleich

**Symbiose:** Modul 1 (Stakeholder-Lifecycle) × Modul 2 (offene Opps) × Modul 5 (laufende Projekte, out-of-scope) × Modul 4 (LessonsLearned-Pattern)

**Was es ist:**
Wenn Stakeholder S von Account A zu Account B wechselt, generiert das System **zwei gleichzeitige Signale**:

1. **Opportunity-Signal bei B:** „S ist neu bei B. Warm-Path über uns vorhanden (durch CV-Overlap mit Stakeholder-Historie). Schlage Stakeholder-Wechsel als Trigger an Account B vor."
2. **Risk-Signal bei A:** „S war Champion / Influencer bei A. Account-Tier-Re-Review fällig. Offene Opps bei A mit Stakeholder-Bezug = ?"

Beide Signale werden an verschiedene Berater geroutet:
- A-Owner: Risk-Trigger für Account-Health.
- B-Owner: Opportunity-Trigger für Bestand-Expansion.

**LessonsLearned-Integration:** wenn frühere Stakeholder-Wechsel zu Account-Verlusten geführt haben (Pattern aus historischen Lost-Opps), eskalation auf MP-Ebene.

**Warum nicht in einem Modul:**
- Modul 1 allein: detektiert Wechsel, weiß aber nicht „was ist Risk/Opp dahinter".
- Modul 2 allein: hat Opps, weiß aber nicht über Stakeholder-Wechsel.

---

### S6 — Win-Pattern-Cluster pro Account

**Symbiose:** Modul 1 (AccountHistory: Won/Lost-Stream) × Modul 4 (Methodology-Use) × Modul 2 (Pricing-Models, Variant-Selection)

**Was es ist:**
Pro Account werden Win-Pattern automatisch detektiert: „Diese Beratung hat in den letzten 3 Jahren bei Müller-AG 5 von 7 Opportunities gewonnen. Pattern dahinter:
- 4 von 5 Won waren T&M, nicht FixedPrice.
- 5 von 5 Won verwendeten Methodologie IT-Sourcing oder IT-Strategy.
- 2 von 2 Lost waren in Industrie-Transformation (nicht IT-Themen).
- Win-Stakeholder durchgängig: Frau Schulz, Herr Becker."

Bei neuem Trigger an Müller-AG wird Pattern aktiv genutzt:
- Pricing-Frame: T&M-Default.
- Methodologie-Vorschlag: IT-Sourcing oder IT-Strategy.
- Variant-Empfehlung: nicht Premium-FixedPrice.
- Stakeholder-Einbindung: Frau Schulz früh.

**MVP-Wert:** „Erfahrung aus dem Account" wird operationalisierbar.

**Warum nicht in einem Modul:**
- Modul 1 allein: hat History, nicht Methodologie-Use-Wissen.
- Modul 4 allein: hat Methodologien, weiß aber nicht „bei welchem Account wann erfolgreich".
- Modul 2 allein: hat einzelne Opp-Daten, nicht Cross-Opp-Pattern.

---

### S7 — Lessons-Driven Brief-Vorfilter

**Symbiose:** Modul 4 (LessonsLearned mit linked_account) × Modul 1 (Account-Kontext) × Modul 2 (Brief-Generierung)

**Was es ist:**
Beim Generieren des Engagement Briefs (Modul 2) für Account X wird die Lessons-Bibliothek nach `linked_account=X` und nach Methodologie-Match abgefragt. Lessons werden in die Brief-Generation eingespeist als „Vorsichts-Hinweis":

```
Brief-Section "Risiken & Mitigationen" enthält:
  - Auto-extrahiert aus Lessons mit linked_account=Müller
  - Auto-extrahiert aus Lessons mit Methodology-Overlap
  - Stets mit Source-Binding zur Lesson
```

**Beispiel:**
> *„Vorsicht beim Pricing-Argument: Wir hatten 2023 ein Premium-Pricing-Angebot bei Müller, das verloren ging (Lesson L-127). Empfehlung: Margen-Begründung methodologisch verankern."*

**Warum nicht in einem Modul:**
- Modul 4 allein: hat Lessons, weiß aber nicht „wir bauen gerade ein Brief".
- Modul 2 allein: erzeugt Briefe, kennt aber Lessons nicht im Kontext.

---

### S8 — Margenrechnung mit Authority-bewusster Sell-Rate

**Symbiose:** Modul 3 (CostRate + SellRate + Authority-Indikator) × Modul 2 (Pricing-Frame)

**Was es ist:**
SellRate-Default ist Practice-basiert (Modul 3). Bei Pricing-Frame in Modul 2 kann ein **Authority-Multiplier** als Vorschlag eingeblendet werden:

```
Stefan ist Authority in IT-Sourcing (Authority-Score 0.91)
   → Sell-Rate-Vorschlag: Premium-Band (statt Standard)
   → Margen-Effekt sichtbar: +12 % auf Gesamt-Margen
   → Approval: MP entscheidet ob Authority-Premium angewandt wird
```

**MVP-Wert:** Authority wird auch ökonomisch sichtbar, nicht nur als Stempel.

**Compliance:** Approval-Gate beim MP — Authority-Premium ist Geschäftsentscheidung, nicht automatisch.

---

### S9 — Decision-Record-Resurfacing bei Re-Engagement

**Symbiose:** Modul 4 (DecisionRecord) × Modul 1 (AccountHistory) × Modul 2 (neue Opp bei demselben Account)

**Was es ist:**
Wenn ein neuer Trigger bei einem Account entsteht, dessen frühere Projekte aktive (nicht-superseded) DecisionRecords haben, werden diese Records im Trigger-Kontext „resurfaced":

> *„Bei diesem Account: aktive Entscheidung D-84 aus 2024-Q3 — „Wir empfehlen Bauer-IT keine On-Prem-Datenbanken mehr". Konsequenzen: alle Bauer-Folgeprojekte sollten Cloud-First denken. Review fällig 2026-09-30."*

Bei der Brief-Generierung wird der DecisionRecord automatisch als Bedingung vermerkt.

**Warum nicht in einem Modul:**
- Modul 1 allein: weiß über Account, kennt aber Decisions nicht systematisch.
- Modul 4 allein: hat Decision, aber kein Kontext-Trigger.

---

### S10 — Berater-Profil als Story aus Datenstrom

**Symbiose:** Modul 3 (Profile, Skills, ProjectExperience) × Modul 4 (KnowledgeContribution, Lessons-Authorship, Decision-Authorship)

**Was es ist:**
Berater-Profil ist nicht Karteikarte, sondern erzählt eine Story aus Daten:
- *„Stefan ist Senior Consultant in IT-Strategy-Practice. Authored 3 Methodologien (IT-Sourcing v3, Carve-Out v2, Cloud-Migration v1). 12 ProjectExperiences im DACH-Mittelstand. 8 Lessons authored, 4 als Lead Decided. Top-Klient-Beziehungen: Müller-AG (5 Projekte), Heller-Gruppe (3 Projekte)."*

Diese „Story-View" wird automatisch generiert (Operator `Summarise` mit Source-Bindings), kann von Stefan kuratiert werden.

**Bei Tailored CV in Modul 2:** Story-View ist Source-Material; wird je nach Engagement Brief auf relevante Teile gefiltert.

**MVP-Wert:** CV-Wahrheit emergiert; kein „CV-Massaging".

---

### S11 — Verloren-mit-Pattern-Trace

**Symbiose:** Modul 2 (Lost-Opps mit Reason) × Modul 4 (auto-generated LessonsLearned) × Modul 1 (Account-Aggregate)

**Was es ist:**
Wenn 5 Opps in den letzten 12 Monaten in Industrie-Cluster X verloren wurden, generiert das System ein Aggregat-Lesson:

> *„Trend: Industrie-Cluster „Automotive-Tier-1" — 5 von 8 Opps verloren. Pattern: alle Lost waren FixedPrice mit über 200k. Sieger-Wettbewerber: McKinsey + BCG in 4 von 5 Fällen."*

Bei nächstem Trigger im Automotive-Cluster wird dieser Aggregat-Lesson automatisch im Brief-Kontext eingeblendet.

**Anonymisierung:** Personenbezogene Lessons werden separat erfasst — Aggregat ist nicht-personenbezogen.

---

### S12 — Stakeholder-Berater-Beziehungs-Erosion-Detector

**Symbiose:** Modul 1 (ContactPoint-Historie) × Modul 3 (Berater-Status) × Modul 4 (Lessons mit Stakeholder-Bezug)

**Was es ist:**
System detektiert:
- Stakeholder X hatte mit Berater Y in letzten 18 Monaten 8 Touchpoints.
- In letzten 4 Monaten: 0 Touchpoints.
- Berater Y hat Status weiterhin Active.
- Trigger fehlt; keine offene Opp.

→ **Beziehungs-Erosion-Signal** an Account-Owner: „Touchpunkt-Frequenz ist gesunken. Möchtest du eine warmhaltende Interaktion vorschlagen?"

Wenn Berater Y inzwischen ExLeft ist → noch wichtiger: Beziehungs-Übergabe-Notwendigkeit.

---

### S13 — Tailored-CV mit Match-Confidence-Transparenz

**Symbiose:** Modul 2 (TailoredCV-Operator) × Modul 3 (Skill-Source-Tier) × Modul 4 (ProjectExperience-Bindings)

**Was es ist:**
Jeder TailoredCV-Output zeigt nicht nur das CV, sondern auch die **Confidence pro behaupteter Skill**:

```
CV-Section "Skills":
  - AWS Cloud Services    [Expert]    Confidence: 0.93
                                       Quelle: ProjectAttested + Certification
  - React-Frontend        [Proficient] Confidence: 0.79
                                       Quelle: ProjectAttested
  - Python Data Science   [Practiced]  Confidence: 0.52
                                       Quelle: SelfDeclared (verfallen 18m)
```

Niedrige Confidence ist ein **vorhandenes**, sichtbares Signal für Katrin: „Vielleicht diese Skill-Claim weglassen oder Berater anfragen."

**Wireframe-Hinweis:** Confidence-Indikator als kleine farbige Pille neben Skill.

---

### S14 — Cross-Module-AI-Skill-Chain als „Workflow-Bausteine"

**Symbiose:** Modul 4 (AISkillBlueprint) × alle anderen Module (über Capability-Aufrufe)

**Was es ist:**
Eine AISkillBlueprint kann mehrere Module orchestrieren als wieder-verwendbare Workflow-Bausteine:

```
Blueprint "Trigger-to-Brief-Express":
  1. Read(Trigger, Modul 1)
  2. Read(AccountHistory, Modul 1)
  3. Suggest(Methodology, Modul 4)
  4. Summarise(Vorgeschichte, modulübergreifend Modul 1 + Modul 4)
  5. Draft(EngagementBrief, Modul 2)
  → Outcome: ein-Klick-Brief mit Source-Bindings
```

Berater erweitert eine Skill-Library mit eigenen Blueprints für wiederkehrende Workflows.

**MVP-Wert:** Workflow wird Blueprint, wird teilbar, wird verbesserbar.

---

### S15 — Won-Probability-Hint aus Pattern-Match (Phase 1b-aufschlag)

**Symbiose:** Modul 2 × Modul 1 × Modul 4 — Phase 1b proper

**Sketch:** Win-Probability-Estimator nutzt Pattern-Match aus historischen Won/Lost + Methodology + Stakeholder-Profil + Pricing-Bandbreite. MVP zeigt nur Indikator-Komponenten, kein Komposit-Score.

---

## §C — Symbiose-Features als Phase-1b-Aussicht

Die folgenden Features sind aus Symbiose denkbar, brauchen aber tiefere Daten oder zusätzliche Module:

| Feature | Module beteiligt | Warum Phase 1b? |
|---|---|---|
| **Methodology-Diff-Operator** | Modul 4 + Modul 5 | Braucht laufende Project-Use-Telemetrie zur Validierung |
| **Authority-Reputation-Trend** | Modul 3 + Modul 4 | Braucht historische Tiefe ≥6 Monate |
| **AI Workspace als modul-übergreifender Conversation-Layer** | alle | Phase 1b architektonisch geplant |
| **Cross-Tenant-Lessons** | Modul 4 + Modul 1 | Compliance + Gate-Komplex |
| **Predictive Stakeholder-Wechsel** | Modul 1 + externe Quellen | Pattern-Detection-Tiefe |
| **Implicit Skill Inference aus Projekt-Output** | Modul 3 + Modul 4 + Modul 5 | Datenmenge für Inferenz |
| **Account-Tier-Auto-Adjustment** | Modul 1 + Modul 6 | Brauchen Finance-Daten |
| **Pricing-Margin-Optimizer** | Modul 2 + Modul 3 + Modul 4 | Telemetrie + Approval-Layer |

---

## §D — Anti-Symbiose-Patterns

Nicht jede Cross-Module-Verknüpfung ist sinnvoll. Wir vermeiden bewusst:

| Anti-Pattern | Warum nicht |
|---|---|
| **Berater-Performance-Aggregate** | BetrVG-Sprengstoff. Performance-Bewertung über Module-Daten = Hire-Fire-Risk. |
| **Auto-Mailings an Stakeholder bei Trigger** | Verstößt gegen Marketing-CMS-Trennung; DSGVO-Risk. |
| **Auto-Tier-Re-Klassifizierung ohne Approval** | Strategische Entscheidung; nie automatisch. |
| **Cross-Tenant-Pattern-Sharing ohne Gate** | IP- und Compliance-Risk. |
| **Modulübergreifende Auto-Decisions ohne Audit** | Verstößt gegen PRD-Prinzip „AI assistiert, Human entscheidet". |
| **Symbiose-Features die Source-Binding umgehen** | Anti-Pattern grundsätzlich; alle Outputs müssen bindbar bleiben. |

---

## §E — Wie wir messen, ob Symbiose wirkt

Pro Feature messbar:

| Symbiose-Feature | Erfolgs-Indikator | MVP-Schwelle |
|---|---|---|
| S1 Resonanz-Map | % der Staffing-Entscheidungen die Resonanz-Top-3 wählen | >70 % |
| S2 Briefing | Briefing-Generation-Frequenz pro Account; Akzeptanz-Rate | ≥1 pro Termin |
| S3 Clause-Pattern | Anzahl auto-vorgeschlagener Library-Updates die approved werden | ≥1 pro Quartal |
| S4 Authority | % Korrelation zwischen Authority-Score und Win-Rate bei Staffing | positiv messbar |
| S5 Stakeholder-Wechsel | Anzahl Risk-Signale + Opportunities die aus Wechseln entstehen | ≥1 pro Wechsel |
| S6 Win-Pattern | % der neuen Briefe die Win-Pattern-Hinweise enthalten | ≥80 % |
| S7 Lessons-Driven-Brief | % der Briefe mit ≥1 Lesson-Source-Binding | ≥50 % |
| S8 Margenrechnung | % Authority-Premium-Vorschläge die approved werden | passiv, Phase 1b mehr |
| S9 Decision-Resurfacing | Anzahl Briefe mit Decision-Record-Verlinkung | ≥30 % |
| S10 Berater-Story | Story-View-Frequenz pro Berater (Selbst-Ansicht) | ≥1 pro Quartal |
| S11 Verloren-Pattern | Aggregat-Lessons generiert pro Cluster | ≥3 pro Jahr |
| S12 Erosion-Detector | % der Erosion-Signale die zu Aktion führen | ≥40 % |
| S13 Confidence-Transparenz | % Tailored CVs wo Katrin niedrig-confident-Skills entfernt | passiv beobachten |
| S14 Skill-Chain | Anzahl publizierter Skill-Blueprints pro Quartal | ≥2 |

---

## §F — Hierarchie der Symbiose: Was ist Kern, was ist Garnish?

**Kern-Symbiose-Features (MVP-Schiff-fähig auch ohne diese, aber UVP-tragend):**
- S1 Resonanz-Map
- S2 Briefing
- S4 Methodology-Authority
- S7 Lessons-Driven Brief

**Werterhöhende Symbiose (Phase 1a End-Sprint):**
- S3 Clause-Pattern
- S5 Stakeholder-Wechsel
- S9 Decision-Resurfacing
- S13 Confidence-Transparenz

**Garnish (kann Phase 1b warten):**
- S6 Win-Pattern (braucht 12 Monate Daten)
- S8 Authority-Margen (Approval-komplex)
- S10 Berater-Story-Auto-Gen
- S11 Aggregat-Lessons
- S12 Erosion-Detector

**Phase-1b-Aussicht:** S14 Skill-Chain (braucht AI Workspace), S15 Win-Probability.

---

## §G — Verweise

- Module-Specs in [feature-specs/](../)
- [integration-flows.md](./integration-flows.md) für die technische Handoff-Schicht
- [Roadmap §6 AI Capability Matrix](../../business-definitions/Consultry-Roadmap-v1.0-MVP-and-Phasing.md)
- [PRD v5.0 §0 Graph-First-Architektur](../../technical-definitions/Consultry-PRD-v5.0-Software-Layered.md)
- [ProductDoc §7.2 AI-native Skills](../../Consultry-Product-Document-v1.0.md), [§10.2 Reuse-Wedge](../../Consultry-Product-Document-v1.0.md)
