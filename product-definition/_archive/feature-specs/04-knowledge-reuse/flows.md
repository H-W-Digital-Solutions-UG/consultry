# Flows — Knowledge & Reuse

> **⚠️ ARCHIVIERT (12.06.2026 — [MVP-Foundation-Decisions v1.0](../../Consultry-MVP-Foundation-Decisions-v1.0.md), T1).** Diese Spec gehört zur „Win-and-Deliver"-Generation (Gen A) und ist **kein MVP-Scope**. Verbindlich: [MVP-PRD v1.0](../../Consultry-MVP-PRD-v1.0.md) (Acquisition-to-Bid) + Foundation-Decisions. Persona-/Outcome-Tabellen dürfen als UX-Input wiederverwendet werden (Salvage, Foundation-Decisions §4). Nicht als Quelle der Wahrheit verwenden.

**Modul-ID:** `04-knowledge-reuse`
**Bezug:** [spec.md](./spec.md)

§A UI-Flows · §B AI-Flows · §C Conversations · §D State-Machines · §E Edge Cases · §F Telemetrie

---

## §A — Konkrete UI-Flows

### F1 — Methodology authored (Stefan-driven)

**Akteur:** Stefan, der eine neue Methodologie „Cybersecurity-Audit-DACH-Mittelstand" anlegen will.

| # | Step | Akteur | UI-Ort | Operator | Output |
|---|---|---|---|---|---|
| 1 | Stefan öffnet Knowledge-Hub → „+ Asset" → Wählt kind=Methodology | Stefan | Hub | — | Asset-Wizard |
| 2 | Pflicht: title_de, title_en, owner (default = Stefan) | Stefan | Wizard Step 1 | — | Asset.id mit Lifecycle=Draft |
| 3 | Übersicht-Beschreibung (DE/EN, Markdown) mit Source-Bindings | Stefan | Wizard Step 2 | — | ContentBlock(s) |
| 4 | Stages definieren — Stefan trägt 6 Stages ein mit Dauer + Tasks | Stefan | Wizard Step 3 | — | Methodology.stages |
| 5 | Inputs/Outputs definieren | Stefan | Wizard Step 4 | — | Methodology.inputs/.outputs |
| 6 | Tags + Classification — System schlägt vor (Auto-Tagging) | Stefan | Wizard Step 5 | `Classify` | Tag-Vorschläge |
| 7 | Stefan ratifiziert Tags | Stefan | Wizard Step 5 | — | classification.auto_classified=false |
| 8 | „Als Draft speichern" oder „Veröffentlichen" | Stefan | Wizard | — | Lifecycle=Draft oder Current |
| 9 | Bei Veröffentlichen: Approval-Step (MP für governance_level=Standard) | Stefan → Thomas | Approval-Queue | — | Lifecycle=Current |
| 10 | Audit-Log: Authorship-Event mit Stefan + Approval-Event mit Thomas | System | Audit | — | AuditEntry |

**Wireframe-Hinweis (Methodology-Wizard, Stage 3):**
```
┌────────────────────────────────────────────────────────────────────────┐
│ Stages definieren (3/5)                              [◀ Zurück] [Weiter ▶]│
├────────────────────────────────────────────────────────────────────────┤
│ 1.  Stakeholder-Scoping                                         × 5d   │
│     Tasks: Stakeholder-Interviews · Scoping-Document · Approval        │
│     [+ Task]                                                            │
│                                                                          │
│ 2.  Bedrohungs-Modell-Aufnahme                                  × 7d   │
│     Tasks: Asset-Inventory · Threat-Landscape · Risk-Matrix            │
│                                                                          │
│ 3.  Compliance-Mapping                                          × 5d   │
│     ...                                                                 │
│                                                                          │
│ [+ Stage hinzufügen]                                                    │
└────────────────────────────────────────────────────────────────────────┘
```

---

### F2 — Template verwendet in Modul 2 (Pull aus Knowledge)

**Auslöser:** Modul 2 (Katrin) generiert Proposal, ruft Template aus Knowledge ab.

| # | Step | Notes |
|---|---|---|
| 1 | Modul 2: Katrin klickt „Proposal-Section: Vorgehen" | Cross-Module-Call |
| 2 | Knowledge stellt verfügbare Templates für `target_module=OppProposalContract, template_type=ProposalSection` bereit | API-Call |
| 3 | Templates werden gerankt nach: Methodology-Match (Brief-Anker), Usage-Count, Lifecycle=Current | Ranking |
| 4 | Top 3 zeigt Modul 2 als Auswahlliste | UI in Modul 2 |
| 5 | Katrin wählt — Knowledge liefert vollständige Template-Struktur mit Slots | Detail-Call |
| 6 | Modul 2 füllt Slots aus Engagement-Brief-Daten | Modul-2-Job |
| 7 | Source-Binding-Validation: Modul 2 verifies generated content against Template + Brief | Pflicht-Gate |
| 8 | `Template.usage_count` += 1 (passiv) | Auto-Update |

---

### F3 — Klausel-Suggest in Vertragsdraft

**Auslöser:** Modul 2 (Katrin) baut Vertrag, fordert Klausel-Vorschläge an.

| # | Step | Notes |
|---|---|---|
| 1 | Modul 2 sendet Klausel-Anfrage: für `clause_type=Haftung`, `jurisdiction=DE`, Methodology-Kontext=IT-Sourcing | Cross-Module-Call |
| 2 | Knowledge filtert ClauseLibrary entries mit `clause_type=Haftung` + `jurisdiction in [DE, EU]` + `lifecycle=Current` | Filter |
| 3 | Ranking: linked_methodologies match, legal_review_status (BlessedForSending zuerst) | Ranking |
| 4 | Top 3 + ihre Varianten (Lean/Standard/Strong) zurück an Modul 2 | API-Response |
| 5 | Modul 2 setzt eine Variante ein → ContractDraft.clauses[].linked_clause_library_entry referenziert | Modul-2-Logik |
| 6 | Wenn Katrin Klausel ändert → ClauseDiff am ContractDraft markiert → Modul 2 Approval-Queue zeigt Diff | Modul-2-Logik |
| 7 | Audit-Log: Klausel-Verwendung wird in `ClauseLibraryEntry.deviation_history` aggregiert (bei Diff) | Knowledge-Update |

---

### F4 — Reference (Case Study) anonymisiert anlegen

**Akteur:** Stefan dokumentiert das Heller-Sourcing-Projekt als interne Reference.

| # | Step | Notes |
|---|---|---|
| 1 | Stefan öffnet Knowledge-Hub → „+ Asset" → kind=Reference | Hub |
| 2 | Wählt reference_kind=ProjectShowcase, client_disclosed=false | Wizard |
| 3 | Anonymisierte Beschreibung: „Mid-Cap DACH-Industriekunde" statt „Heller-Gruppe" | Manuell |
| 4 | Verlinkt mit Project Heller-2024-Q3 (intern; bleibt aufgrund Confidentiality nicht extern sichtbar) | Verlinkung |
| 5 | Outcomes quantifiziert: „37 % Lieferanten-Konsolidierung erreicht, 18 % Cost-Reduction in 12 Monaten" | Strukturiert |
| 6 | Confidentiality=Internal, publishable_externally=false | Default |
| 7 | Veröffentlichen → Current | Lifecycle-Schritt |
| 8 | Reference jetzt verwendbar in Tailored CVs (Modul 2) und Briefing | Cross-Module |

**Späterer Schritt (Phase 1b):** Marketing fragt an, ob Reference extern publishable. Workflow: Kunde anfragen (Heller-Gruppe), Consent dokumentieren, Reference re-edit mit `client_disclosed=true, publishable_externally=true`, MP approves → publish.

---

### F5 — Lessons-Learned aus Project-Close

**Auslöser:** Modul 5 (Allocation & Delivery) setzt Projekt auf `Closed`.

| # | Step | Notes |
|---|---|---|
| 1 | Modul 5: Project.stage=Closed event | Event-Stream |
| 2 | Knowledge empfängt → auto-Prompt: „Bitte Lessons Learned dokumentieren" an PL des Projekts (Stefan) | Notification |
| 3 | Stefan klickt → Lessons-Wizard auf | Hub |
| 4 | System pre-fills: `linked_project`, `stakeholders_involved` (Berater des Projekts), `what_happened` Draft aus Decision-Records | `Summarise` |
| 5 | Stefan ergänzt was_worked / what_failed / recommended_action | Manuell |
| 6 | Berater-Bezug detected → System fragt: „Lesson nennt Anna's Beitrag — Visibility?" | BetrVG-Gate |
| 7 | Stefan wählt `betrvg_visibility=ConsultantApprovalRequired` für die personenbezogene Sektion | Approval-Workflow |
| 8 | Anna kriegt Notification, reviewt eigene Erwähnung, approved oder editiert | Self-Service |
| 9 | Lesson published → Lifecycle=Current, Cross-References werden indexiert | — |
| 10 | Audit-Log: Lesson-Creation + Berater-Approvals | AuditEntry |

**Wireframe (Lessons-Wizard mit BetrVG-Gate):**
```
┌────────────────────────────────────────────────────────────────────────┐
│ Lessons-Learned · Heller-Sourcing-Projekt 2024-Q3                       │
├────────────────────────────────────────────────────────────────────────┤
│ Was passierte                                                           │
│ ┌───────────────────────────────────────────────────────────────────┐ │
│ │ Während Stage 4 (Sourcing-Matrix-Workshop) blieb der CFO Bauer    │ │
│ │ skeptisch gegenüber der vorgeschlagenen Konsolidierung...         │ │
│ │ [Quellen: Workshop-Mitschrift 2024-09-12, Decision-Record 84]    │ │
│ └───────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│ ⚠ Berater-Bezug erkannt                                                 │
│ Diese Lesson erwähnt Anna Holz' spezifischen Beitrag.                  │
│ Visibility-Level:                                                       │
│  ◯ Public (alle sehen Name + Beitrag)                                  │
│  ● Consultant-Approval-Required (Anna muss ihre Erwähnung approven)    │
│  ◯ Aggregated-Only (Name redacted, Beitrag als „ein Berater")          │
│                                                                          │
│ [Zurück]                                              [Anna anschreiben]│
└────────────────────────────────────────────────────────────────────────┘
```

---

### F6 — Decision-Record bei Phase-Wechsel

**Auslöser:** Modul 5 Project geht von Discovery in Implementation-Phase.

| # | Step | Notes |
|---|---|---|
| 1 | Modul 5: Phase-Übergang detected | Event |
| 2 | Knowledge-Operator `Suggest` schlägt: „Möchten Sie eine Decision-Record erfassen?" | Inline-Empfehlung |
| 3 | PL (Stefan) öffnet Wizard, sieht pre-filled Kontext (Project, beteiligte Berater, Datum) | Wizard |
| 4 | Stefan trägt Decision, Alternatives_considered, Rationale ein | Manuell |
| 5 | Decision-Record verlinkt mit Project, betroffene KnowledgeAssets (z. B. Methodology) | Manuell + Auto |
| 6 | Optional review_schedule setzen (Stefan: „re-validate after 6 Monaten") | Schedule |
| 7 | Speichern → Lifecycle=Current | — |
| 8 | Sichtbar in Project-Detail (Modul 5) und Knowledge-Hub | Cross-Module |

---

### F7 — Semantische Suche „IT-Sourcing in Q2 2024"

| # | Step | Notes |
|---|---|---|
| 1 | Katrin tippt Query in Knowledge-Hub-Suche | UI |
| 2 | Hybrid-Search: Volltext (Postgres FTS) + Embedding (Cohere-EU oder Mistral-EU) | Backend |
| 3 | Treffer werden re-ranked: aktiver Lifecycle (Current bevorzugt), Tag-Match, Methodology-Match | Re-Rank |
| 4 | UI zeigt Top 8 mit Highlight-Spans | Trefferliste |
| 5 | Klick auf Treffer → Asset-Detail mit Span-Highlight an Treffer-Stelle | Deep-Link |
| 6 | „Mehr verlinkte Assets" → expandiert related_assets | Navigation |

---

### F8 — Asset-Deprecation (Replacement-Workflow)

| # | Step | Notes |
|---|---|---|
| 1 | Stefan hat v4 der IT-Sourcing-Methodologie als Draft fertig | Wizard |
| 2 | Stefan öffnet v3 (Current) → „Deprecate with successor v4" | Action |
| 3 | System fragt: „Wer ist betroffen?" → listet 5 Projekte, 3 offene Opportunities, 2 Templates die v3 referenzieren | Impact-Analyse |
| 4 | Stefan entscheidet pro Referenz: weiter v3 nutzen (Backwards-Compat) oder Migration zu v4 | Decision |
| 5 | „Bestätigen" → v3.lifecycle=Deprecated, v4.lifecycle=Current, deprecation_at gesetzt | State-Übergang |
| 6 | Notification an Owner aller dependent assets | Mail |
| 7 | Audit-Log: Lifecycle-Change-Event mit Impact-Summary | AuditEntry |

---

### F9 — AI-Skill-Blueprint anwenden (Modul-übergreifend, Phase 1a-end)

**Auslöser:** Lisa möchte Workshop-Pack für Müller-Termin vorbereiten.

| # | Step | Notes |
|---|---|---|
| 1 | Lisa öffnet AI-Workspace → „Skill: Workshop-Vorbereitung" | Workspace |
| 2 | Skill ist AI-Skill-Blueprint aus Knowledge mit operator_recipe | Blueprint-Load |
| 3 | Skill fragt: Engagement-Brief-ID, Methodology, Stakeholder-Profile, Workshop-Dauer | Inputs |
| 4 | Lisa wählt Müller-Sourcing-Brief, Methodology IT-Sourcing v3, 2 Stakeholder, 1 Tag | Inputs gesetzt |
| 5 | Skill führt operator_recipe aus: Read-Brief → Summarise-Vorgeschichte → Suggest-Workshop-Sections → Draft-Slide-Outline | Multi-Operator-Chain |
| 6 | Outputs werden mit Source-Bindings versehen (Pflicht aus Blueprint-Definition) | Source-Bind |
| 7 | Lisa sieht Slide-Outline mit Bindings, kann editieren | UI |
| 8 | Skill protokolliert: Anwendung, Inputs, Outputs, Erfolg/Misserfolg-Feedback | Telemetry |
| 9 | KnowledgeContribution-Eintrag wird erzeugt: „Lisa wandte Workshop-Skill an" | Cross-Module |

---

### F10 — ClauseLibrary-Update mit Legal-Review

**Auslöser:** Gesetzes-Änderung — neue EU-Cybersecurity-Regulation, Beratung will SLA-Klausel anpassen.

| # | Step | Notes |
|---|---|---|
| 1 | Stefan + Inhouse-Counsel öffnen ClauseLibraryEntry „SLA-Reaktionszeit" | Hub |
| 2 | Klick „Neue Version" — Draft-Version basiert auf v2 | Versions-Workflow |
| 3 | Counsel editiert canonical_text_de + canonical_text_en | Editor |
| 4 | Wählt legal_review_status=ReviewedInternal | Status-Update |
| 5 | Optional: externe Kanzlei reviewt → ReviewedExternalCounsel mit Audit-Eintrag | LegalReviewEvent |
| 6 | MP approves → BlessedForSending | Approval |
| 7 | „Veröffentlichen" → v3 wird Current, v2 wird Deprecated | Lifecycle |
| 8 | Notification an alle Modul-2-Verträge im Draft, die v2 referenzieren — Diff-Anzeige | Cross-Module |
| 9 | Audit-Log: alle Review-Events, Approval-Event, Lifecycle-Change | AuditEntry |

---

### F11 — Source-Binding-Validation-Reject

**Auslöser:** Modul 2 `Suggest`-Operator generiert Klausel-Vorschlag mit Behauptung ohne valide Source.

| # | Step | Notes |
|---|---|---|
| 1 | Operator-Output enthält: „Die Standardklausel Y schreibt 4 h Reaktionszeit vor" | Behauptung |
| 2 | Source-Binding-Validator prüft: matched gegen `ClauseLibraryEntry.canonical_text`? | Validation |
| 3 | Mismatch — kein ClauseLibraryEntry mit „4 h Reaktionszeit" in Standardform | Fail |
| 4 | Output rejected, Re-Prompt mit Hinweis „kein Source-Match gefunden" | Vorfilter |
| 5 | Max 3 Iterationen | Limit |
| 6 | Wenn alle 3 fehlschlagen → Hand-Off an User mit Fehlermeldung „Klausel-Vorschlag konnte nicht source-gebunden werden, bitte manuell wählen" | Fallback |
| 7 | Audit-Log: Halluzinations-Vorfilter-Reject-Event | AuditEntry |

---

### F12 — Decision-Record-Review (scheduled)

**Auslöser:** review_schedule eines DecisionRecord erreicht.

| # | Step | Notes |
|---|---|---|
| 1 | System sendet Notification an decided_by-Consultants: „Decision X ist fällig zur Re-Validation" | Email + In-App |
| 2 | Stefan öffnet Decision-Record | Detail |
| 3 | Optionen: „Still Active", „Superseded by new decision", „Rolled-Back mit Begründung" | Action |
| 4 | Bei Superseded: Stefan verlinkt mit neuer Decision-Record | Cross-Link |
| 5 | Bei Rolled-Back: Begründung Pflicht | Audit |
| 6 | review_schedule kann neu gesetzt werden | Update |

---

### F13 — Knowledge-Asset-Verlinkung-Detection

**Auslöser:** Stefan publiziert eine neue Lesson; System detektiert mögliche Verlinkungen.

| # | Step | Notes |
|---|---|---|
| 1 | Lesson v1 wird Current | Lifecycle |
| 2 | System scannt: andere Assets mit Tag-Overlap, Methodology-Overlap, Project-Overlap | Embedding-Similarity |
| 3 | Top-Vorschläge: „Diese Lesson könnte verwandt sein mit Methodology IT-Sourcing v3 (similarity 0.84)" | Suggest |
| 4 | Stefan ratifiziert Cross-Reference | Klick |
| 5 | related_assets updated bidirektional | Auto-Update |

---

## §B — Abstrakte AI-Flows

### B1 — Capability-Inventar

```
Read         : alle KnowledgeAssets, content_blocks, source_bindings
Classify     : Auto-Tagging, Methodology-Klassifikation (Phase 1b)
Suggest      : verwandte Assets, Lifecycle-Replacement-Kandidaten,
                Decision-Anlässe, Lesson-Anlässe
Summarise    : Lessons-Draft aus Project-Daten, Asset-Cluster-Übersicht
Review       : Vorfilter — Outputs gegen Knowledge-Index (Pflicht)

NICHT in diesem Modul:
  Draft      (Methodology, Templates, Lessons — alles authored, nicht generiert)
  Plan       (Decisions sind menschlich)
```

### B2 — Intent-Map

```
Intent: "Welche Methodologie passt für IT-Sourcing im Mittelstand?"
   ├─ Read(Methodology where domain matches)
   ├─ Suggest(Top N nach Usage-Count + Methodology-Domain-Match)
   └─ Outcome: Liste Methodologien, sortiert nach Eignung

Intent: "Was haben wir bei Heller gelernt?"
   ├─ Read(LessonsLearned where linked_account = Heller)
   ├─ Filter by BetrVG-Visibility (Käufer-Sicht)
   ├─ Summarise(Cluster)
   └─ Outcome: Lessons-Liste mit thematischer Gruppierung

Intent: "Welche Klausel-Varianten gibt es für Haftung in EU?"
   ├─ Read(ClauseLibraryEntry where clause_type=Haftung, jurisdiction in [DE, AT, CH, EU])
   ├─ Filter by lifecycle=Current
   └─ Outcome: Klausel-Liste mit Varianten + legal_review_status

Intent: "Wer in unserem Team kennt sich am besten in Methodologie X aus?"
   ├─ Read(KnowledgeContribution where asset.methodology=X)
   ├─ Cross-check (ProjectExperience.methodologies_used=X)
   ├─ Aggregate by Consultant
   └─ Outcome: Top-Berater nach kombinierter Tiefe

Intent: "Was haben wir bei IT-Sourcing-Projekten typischerweise nicht beachtet?"
   ├─ Read(LessonsLearned where linked_methodology=IT-Sourcing)
   ├─ Filter for what_failed sections
   ├─ Summarise(Pattern-Detection)
   └─ Outcome: Themen-Cluster von wiederkehrenden Fehlern
```

### B3 — Source-Binding-Discipline (PRD v5.0 §7.5)

Jeder Operator-Output, der Faktenbehauptungen über Knowledge enthält, muss vor Anzeige folgendes erfüllen:

```
Output-Schritt:
  1. Output enthält "behauptung" über knowledge
  2. Knowledge-Index lookup mit (claim, expected_source_kind)
  3. Wenn Bind möglich → Output mit SourceBinding annotiert → freigegeben
  4. Wenn nicht → Reject + Re-Prompt
  5. Nach 3 Iterationen ohne Erfolg → Hand-Off mit Fehlermeldung an User
```

### B4 — Dynamische Pfade

System darf:
- Auto-Tag-Vorschläge anzeigen (Owner ratifiziert).
- Cross-Reference-Vorschläge zwischen Assets.
- Lifecycle-Replacement-Suggestion (z. B. „diese Methodology v2 wurde nicht mehr benutzt seit 6 Monaten — deprecate?").
- Search-Result-Re-Ranking iterieren.

System darf nicht:
- Methodology-Inhalte from-scratch generieren.
- Templates automatisch erstellen.
- Lessons ohne Source-Binding veröffentlichen.
- Klauseln ändern ohne Legal-Review-Pflicht.
- Berater-Personen-Daten in Lessons ohne Approval externalisieren.

---

## §C — Conversation Patterns

### C1 — „Suche mit Kontext-Verfeinerung"

> **Katrin:** Wir hatten 2024 etwas mit Restrukturierung im Mittelstand. Wo finde ich das?
>
> **AI-Workspace:** Drei mögliche Treffer:
> 1. **IT-Carve-Out-Methodologie v2** — Stefan hat sie 2024-Q1 für ein vergleichbares Projekt verwendet. Letzte Update 2025-08.
> 2. **Heller-Restrukturierung Case Study** — anonymisierte Reference, intern verfügbar.
> 3. **Lessons-Learned-Heller-2024** — Lessons mit Aggregated-Only-Visibility.
>
> Welche Richtung passt zu deinem aktuellen Fall? Wenn du den Müller-Trigger meinst — Sourcing-Strategie, nicht Carve-Out — würde ich auf die IT-Sourcing-Methodology v3 hinweisen.
>
> **Katrin:** Müller, aber die Sourcing-Strategie passt nicht ganz — Müller will auch Organisations-Aspekte. Gibt es etwas dazu?
>
> **AI-Workspace:** Es gibt noch eine ältere Methodology „Org-Realignment v1" von 2023, von Anna authored. Lifecycle steht auf Deprecated — sie wurde durch v3 von Sourcing-Strategie *teilweise* ersetzt. Anna hat im Deprecation-Notiz vermerkt: „Org-Realignment-Sektionen wurden in Sourcing-Strategie v3 Stages 3 und 4 integriert".
>
> Möchtest du auf die Stages 3+4 der v3 schauen, oder die alte Methodology re-aktivieren?

**Pattern „Methoden-Archäologie":** Knowledge zeigt nicht nur Treffer, sondern Beziehungs-Historie.

---

### C2 — „Klausel-Verhandlung"

> **Thomas:** Müller will eine erweiterte Haftungs-Klausel. Was ist die Range, in der ich mich bewegen kann?
>
> **AI-Workspace:** Aktueller Standard (BlessedForSending): „Haftung beschränkt auf Auftragswert".
>
> Variante „Strong" (auch BlessedForSending) erlaubt: „bis 1.5× Auftragswert mit Versicherungs-Cap".
>
> Aus der deviation_history: in 14 % der Verträge wurde der Cap auf 1.5–2× erhöht. Bei 3 % auf 3×. Über 3× ging nur 1× und das mit externer Counsel-Review.
>
> Müller fordert 1.5× — das passt in die „Strong"-Variante, also legal blessed und im Audit-Trail aller bisherigen Verträge konsistent.
>
> **Thomas:** OK. Welche Methodologien haben wir typischerweise mit Strong-Haftung verbunden?
>
> **AI-Workspace:** Hauptsächlich IT-Sourcing und Carve-Out-Projekte, wo Mandant höhere Wirkungs-Tiefe verlangt. Bei Audit-Projekten haben wir typischerweise Standard, weil Risiko begrenzter ist.

**Pattern „Klausel als statistisches Objekt":** Klausel-Range wird zur datenbasierten Verhandlung.

---

### C3 — „Lesson-Authoring mit Anna-Schutz"

> **Stefan:** Ich will eine Lesson zum Heller-Projekt schreiben. Anna hat in Stage 5 einen Workshop schlecht moderiert, das hat Zeit gekostet.
>
> **AI-Workspace:** Ich verstehe. Bevor wir schreiben — wir haben drei Visibility-Optionen:
>
> 1. **Aggregated-Only:** Lesson handelt von „Workshop-Moderation in Sourcing-Phase 5 ist Risk-Faktor". Anna nicht namentlich. Diese Aggregate-Sicht ist sofort published.
> 2. **ConsultantApprovalRequired:** Du erwähnst Anna namentlich. Sie reviewt Erwähnung vor Veröffentlichung. Sie kann editieren oder Veto einlegen.
> 3. **Personenbezogen redacted:** Anna pseudonymisiert („eine Beraterin"); Volltext der Lesson nur in Audit zugänglich.
>
> Mein Vorschlag: Option 1 für die generische Lesson („Workshop-Moderation in dieser Phase braucht Senior-Lead"); Option 2 oder 3 falls du speziell Anna's Lern-Pfad mitvermerken willst — aber das ist Personalentwicklung, BetrVG-relevant, und ich würde es trennen.
>
> **Stefan:** Mach Option 1. Die generische Lesson ist hilfreich für die nächste Sourcing-Mannschaft. Anna direkt zu adressieren ist nicht der Knowledge-Job, das ist 1:1-Gespräch.

**Pattern „BetrVG ergonomisch durchgesetzt":** Gate wirkt nicht als Hürde, sondern als Sortier-Hilfe.

---

### C4 — „Decision-Record als Anker"

> **Stefan:** Wir haben gerade bei Bauer-Projekt entschieden, die Migration in 2 Phasen statt 1 zu fahren. Was muss ich tun?
>
> **AI-Workspace:** Empfehlung: Decision-Record erfassen. Pre-fill:
>
> - **Decision:** „Migration in 2 Phasen statt 1 — Phase 1 Backend, Phase 2 Frontend."
> - **Alternatives Considered:**
>   - Big-Bang-Migration (verworfen wegen Risk-Konzentration)
>   - Vollständige Microservice-Strangler-Pattern (verworfen wegen Aufwand)
> - **Rationale:** „Risk-Mitigation, schnellere Time-to-First-Win"
> - **Decided By:** Du, Lisa, Bauer-CTO
> - **Linked Methodology:** Cloud-Migration-Methodologie v1, Stage 3
>
> Möchtest du das so übernehmen oder schärfen?
>
> **Stefan:** Ja, aber „Time-to-First-Win" ergänzen mit: „erste Phase liefert Reporting-Layer, was Bauer für Q3-Reporting braucht."
>
> **AI-Workspace:** Gespeichert. Soll ich review_schedule setzen — z. B. nach Phase 1 (vermutlich Ende September)?
>
> **Stefan:** Ja, 2026-09-30.
>
> **AI-Workspace:** Decision-Record verlinkt mit Project Bauer-Migration, mit Cloud-Migration-Methodologie v1, mit beiden beteiligten Beratern. Review-Schedule auf 2026-09-30.

**Pattern „Decision-as-first-class":** Entscheidung wird Knoten, wird abrufbar, wird wieder-prüfbar.

---

### C5 — „AI-Skill-Suche"

> **Lisa:** Ich brauche heute ein Workshop-Pack für Müller. Gibt's was, das mir hilft?
>
> **AI-Workspace:** Ja, der Workshop-Vorbereitungs-Skill v3. Er nimmt: Engagement-Brief, Methodology, Stakeholder-Profile, Workshop-Dauer. Output: strukturierte Slide-Outline mit Section-Empfehlungen + Time-Allocation.
>
> Erfolgsdaten: in den letzten 4 Monaten 23× verwendet, durchschnittlich von Lisa, Anna, Stefan. 87 % der Anwendungen wurden ohne signifikante Edits in die Workshops genommen.
>
> Möchtest du loslegen?
>
> **Lisa:** Ja.
>
> **AI-Workspace:** Inputs ausfüllen — Müller-Sourcing-Brief, Methodology IT-Sourcing v3, Stakeholder Frau Schulz und Herr Becker, Workshop 4 h.
>
> *[Skill läuft]*
>
> Hier die Outline mit 4 Sektionen. Source-Bindings sind in den Hinweisen pro Slide. Soll ich's in deine Workspace-Notizen verschieben?

**Pattern „Skill wie Tool":** Nicht „ich frage dich was", sondern „ich rufe einen kuratierten Workflow auf".

---

## §D — State-Übergänge

### D1 — `KnowledgeAsset.lifecycle`

```
Draft ──[Owner publishes + Approval (wenn nötig)]──▶ Current
   │                                                    │
   │ [verworfen]                                        │ [successor created]
   ▼                                                    ▼
 Archived (read-only)                              Deprecated
                                                       │
                                                       │ [24 Monate ohne Nutzung]
                                                       ▼
                                                    Archived
```

### D2 — `ClauseLibraryEntry.legal_review_status`

```
Unreviewed ──[Inhouse review]──▶ ReviewedInternal ──[external counsel]──▶ ReviewedExternalCounsel
                                       │                                        │
                                       │ [MP approves]                          │
                                       ▼                                        │
                                  BlessedForSending ◀──────────────────────────┘
                                  (eligible for default selection in Modul 2)
```

### D3 — `LessonsLearned.betrvg_visibility`

Visibility-Level ist Entscheidung beim Authoring, nicht später-änderbar (Audit-Integrität). Re-Klassifizierung erfordert neue Version.

### D4 — `DecisionRecord.status`

```
Active ──[neue Decision ersetzt]──▶ Superseded (mit FK zu Nachfolger)
   │
   │ [zurückgenommen]
   ▼
Rolled-Back (mit Begründung; immer noch sichtbar im Audit)
```

---

## §E — Edge Cases

| Fall | Verhalten |
|---|---|
| Asset wird referenziert von Vertrag, dann soll Asset deprecated werden | Impact-Analyse zeigt Referenzen; Owner muss entscheiden Backwards-Compat oder Migration |
| Methodology v2 wird in archive verschoben, aber ein Auditor will alte Vertrags-Compliance prüfen | Archive ist read-only, nicht weg — Auditor hat über Audit-UI Zugang |
| Lesson mit Berater-Bezug, Berater verlässt Firma | Lesson bleibt; Berater-Name wird pseudonymisiert nach Karenzzeit; falls Lesson kritisch dann Owner kontaktiert ehemaligen Berater für DSAR-Klärung |
| Search liefert keine Treffer für offensichtlich existierendes Asset | Synonyms im Asset prüfen; Auto-Tagging-Backlog überprüfen; Asset ggf. um Tags ergänzen |
| Zwei Owner editieren gleichzeitig | Optimistic locking; second-write erhält Konflikt-Warnung mit Diff-Anzeige |
| Klausel-Variante wird auf "Strong" gesetzt aber Counsel-Review fehlt | Lifecycle bleibt Draft; UI blockt Veröffentlichung mit Hinweis |
| AI-Skill-Blueprint scheitert in Anwendung (Operator-Reject im 3. Versuch) | Skill bekommt Fail-Marker; Owner kriegt Notification — Blueprint braucht Update |
| Reference enthält Stakeholder-Foto / personenbezogenes Bild | Wird abgelehnt — Bilder von Personen nicht in Knowledge-Modul (Out-of-Scope) |
| Methodology wird in 5+ Verträgen referenziert; Owner will hard-delete | Hard-Delete verboten; nur Lifecycle=Archived möglich, History bleibt |
| Translate-Operator generiert EN-Text aus DE — Source-Binding-Pflicht? | Translation als Operator nicht im Knowledge-Modul; manuelle Übersetzung von Owner |
| Asset-Tag-System wird umgebaut (z. B. neue Top-Level-Domain) | Migration-Skript mit Tag-Rewrite + Audit-Trail; Owner kann manuell re-taggen |
| ClauseDiff aus Modul 2 in 23 Verträgen — wenn Library-Standard updated, was passiert mit den 23? | Bestehende Verträge bleiben mit Snapshot ihres referenzierten Stands; neue Verträge nutzen aktuelle Library |
| LessonsLearned mit `Aggregated-Only` enthält versehentlich Klar-Name | Pseudonymisierungs-Run + Audit-Entry; Owner und betroffener Berater werden benachrichtigt |
| Decision-Record mit `Rolled-Back` Status — wird trotzdem in Suchergebnissen gefunden? | Ja, aber mit visual marker und ggf. Vorschlag „diese Decision wurde zurückgenommen, siehe X" |
| Cross-Module-Konflikt: Modul 5 referenziert Methodology v2, aber v2 wurde gerade deprecated mit successor v3 | Modul 5 zeigt UI-Hinweis: „Diese Methodology hat einen Nachfolger — Migration möglich" — nicht erzwungen |
| Repository-Template Pointer (read-only) Phase 1 — der externe Repo wird gelöscht | Asset hat brokenLink-Flag; Owner kann re-source |
| AI-Skill-Blueprint braucht Asset, das deprecated wurde | Blueprint-Detail zeigt Warning; Skill kann ggf. nicht ausgeführt werden — Re-Prompt mit „Replacement-Asset wählen" |

---

## §F — Telemetrie

| Metrik | Granularität | Aggregation |
|---|---|---|
| Asset-Anzahl pro Kind | Aggregat | Counter, Trend |
| Asset-Reuse-Counter | Pro Asset | Usage-per-quarter |
| Search-Volumen + Median-Latenz | Aggregat | Counter, p50/p90 |
| Operator-Source-Binding-Rate | Aggregat | % gebundene Outputs |
| Halluzinations-Vorfilter-Reject-Rate | Aggregat | %, Trend (Indikator Operator-Qualität) |
| Lesson-Authoring-Rate | Pro Projekt-Close + Pro Opp-Lost | % Closures mit Lesson |
| Decision-Record-Authoring-Rate | Pro Phase-Übergang | Counter |
| Clause-Deviation-Häufigkeit | Pro ClauseLibraryEntry | Top-deviated Klauseln |
| Knowledge-Contribution pro Berater | Aggregat (Practice-Level in Heavy-Mode) | Verteilung |
| Asset-Lifecycle-Verteilung | Aggregat | % Current / Deprecated / Archived |
| AI-Skill-Blueprint-Anwendung | Pro Skill | Counter + Success-Rate |

---

## §G — Phase-1b-Ergänzungen

- **Methodology-Klassifikation als Operator-Pflicht** — Auto-Tagging tiefer.
- **QA-Layer** (Code-Review, Doc-Review, Deck-Review): Operator `Review` gegen Methodology als Standard. Beginnt Phase 1b post-MVP.
- **Quellen-gebundene Synthese (Phase 2):** Multi-Source-Aggregation („Was sagen alle unsere Heller-Lessons über CFO-Verhandlung?") mit zusammengesetzten Bindings.
- **Cross-Tenant-Lessons (Phase 2):** mit Gate — Beratungen können kuratierte Lessons untereinander teilen.
- **Repository-Templates spawning (Phase 2):** GitHub/GitLab Write-Pfad.
- **Methodologie-Diff-Operator (Phase 2):** automatischer Diff zwischen Methodology-Versionen mit Highlight-Anzeige.

---

## §H — Verweise

- [spec.md](./spec.md)
- Cross-Cutting: [integration-flows.md](../_cross-cutting/integration-flows.md), [symbiosis-features.md](../_cross-cutting/symbiosis-features.md)
- Schwester-Module: [01-account-growth/flows.md](../01-account-growth/flows.md), [02-opportunity-proposal-contract/flows.md](../02-opportunity-proposal-contract/flows.md), [03-consultant-team-capacity/flows.md](../03-consultant-team-capacity/flows.md)
