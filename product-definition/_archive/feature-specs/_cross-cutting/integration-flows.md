# Cross-Cutting — Integration Flows

> **⚠️ ARCHIVIERT (12.06.2026 — [MVP-Foundation-Decisions v1.0](../../Consultry-MVP-Foundation-Decisions-v1.0.md), T1).** Diese Spec gehört zur „Win-and-Deliver"-Generation (Gen A) und ist **kein MVP-Scope**. Verbindlich: [MVP-PRD v1.0](../../Consultry-MVP-PRD-v1.0.md) (Acquisition-to-Bid) + Foundation-Decisions. Persona-/Outcome-Tabellen dürfen als UX-Input wiederverwendet werden (Salvage, Foundation-Decisions §4). Nicht als Quelle der Wahrheit verwenden.

**Bezug:** [Roadmap §3.1 MVP-Loop](../../business-definitions/Consultry-Roadmap-v1.0-MVP-and-Phasing.md), [PRD v5.0 §0, §4.1](../../technical-definitions/Consultry-PRD-v5.0-Software-Layered.md), Schwester-Specs in feature-specs/

Diese Datei formalisiert **wie die 4 MVP-Module zusammen-spielen** — Daten-Handoffs, State-Synchronisation, Event-Patterns, Audit-Coherence. Sie ist die *„Klebstoff-Schicht"* zwischen den 4 Module-Specs.

Sicht:
- §A MVP-Loop end-to-end mit allen Handoff-Verträgen
- §B Event- und Datenfluss-Architektur
- §C Konsistenz-Garantien zwischen Modulen
- §D Cross-Module-Approval-Logik
- §E Cross-Module-Audit-Trail
- §F Cross-Module-State-Konflikte und Auflösung
- §G Fallstrick-Pattern und Vermeidung

---

## §A — MVP-Loop end-to-end (mit Handoff-Verträgen)

Der MVP-Loop aus [Roadmap §3.1](../../business-definitions/Consultry-Roadmap-v1.0-MVP-and-Phasing.md) besteht aus 10 Handoffs. Pro Handoff:
- **Quelle**: Modul + Trigger-Event
- **Ziel**: Modul + Empfangs-Operation
- **Vertrag**: Payload-Schema + Pflicht-Validierung
- **Audit**: was wird wo persistiert
- **Rollback**: wie wird der Handoff rückabwickelbar gehalten

### A.1 Handoff-Vertrag-Schema

Jeder Cross-Module-Call hat die Form:

```
HandoffEvent
  ├── id                              (UUIDv7, monotone, audit-key)
  ├── source_module: ModuleID
  ├── source_event_kind: text         (z. B. "OpportunityWon", "TriggerConverted")
  ├── target_module: ModuleID
  ├── target_operation: text
  ├── payload_schema_version: int
  ├── payload: JSON                   (validiert gegen schema_version)
  ├── source_entity_ref: GraphNodeID  (für Audit-Traceability)
  ├── target_entity_ref?: GraphNodeID (post-creation)
  ├── timestamp_emitted, timestamp_acked
  ├── status: enum { Emitted, Validated, Processed, Failed, RolledBack }
  ├── operator_provenance?            (wenn Handoff aus AI-Operator-Chain entstand)
  └── correlation_id                  (für End-to-End-Tracing über Loop)
```

`correlation_id` ist das Schlüssel-Konzept: eine `Opportunity`, die durch alle 4 Module läuft, behält dieselbe `correlation_id`. Damit ist Audit über den ganzen Loop hinweg querryable.

### A.2 Die 10 Handoffs des MVP-Loops

#### H1 — Trigger erkannt → Opportunity-Intake

**Quelle:** Modul 1 (Account Growth) — Event `TriggerConverted`
**Ziel:** Modul 2 (Opp/Proposal/Contract) — Operation `IntakeOpportunity`

**Payload-Vertrag:**
```
{
  account_id: AccountID,
  trigger_id: TriggerID,
  stakeholder_ids: StakeholderID[],
  ai_suggested_opportunity_kind?: text,
  ai_suggested_urgency?: enum,
  ai_suggested_lead_consultant?: ConsultantID,
  warm_path_candidates?: ConsultantID[],
  related_account_history_ids?: AccountHistoryID[],
  source_bindings: SourceBinding[]
}
```

**Pflicht-Validierung:**
- `account_id` referenziert existierenden `Account` mit Status ∈ {Active, Dormant}.
- `stakeholder_ids` alle gehören zum Account.
- `source_bindings` mindestens 1 Eintrag.

**Audit:**
- Modul 1: `Trigger.stage` Übergang von `Qualified` zu `ConvertedToOpportunity`, mit `target_entity_ref=opportunity_id`.
- Modul 2: `Opportunity.id` erzeugt mit `source_trigger_id=trigger_id`, `stage=Intake`.

**Rollback-Pfad:**
- Modul 2 kann Opportunity abandonen → Event `OpportunityAbandoned` zurück zu Modul 1.
- Modul 1 setzt `Trigger.stage` zurück auf `Qualified`. Counter „abandoned conversions" pro Trigger erhöht.

---

#### H2 — Brief erstellt → Skill-Requirements abgeleitet

**Quelle:** Modul 2 — Event `EngagementBriefApproved`
**Ziel:** Modul 2 (intra-modul; aber Skill-Taxonomy aus Modul 3 wird befragt)

**Cross-Module-Anteil:**
- Modul 2 ruft Modul 3 `LookupSkillTaxonomy` ab → Modul 3 antwortet mit Skill-Auflösungs-Service.

**Payload für Lookup:**
```
{
  skill_label_text: text,
  language: enum { de, en },
  context_hints: text[]    // z. B. Methodology-Anker für Disambiguation
}
```

**Response:**
```
{
  matches: { taxonomy_id, name_de, name_en, confidence }[],
  disambiguation_needed: bool
}
```

**Audit:** Operator-Call `Classify` in Modul 3 wird mit `correlation_id` der Opportunity verlinkt.

---

#### H3 — Staffing-Suche → Capacity-Match

**Quelle:** Modul 2 — Operation `RequestStaffing`
**Ziel:** Modul 3 (Capacity) — Operation `MatchCandidates`

**Payload:**
```
{
  opportunity_id,
  skill_requirements: SkillRequirement[],
  duration_window: { start, end },
  pricing_constraint?: { max_blended_cost_per_h },
  warm_path_consultants?: ConsultantID[]    // Boost für Warm-Path-Match
}
```

**Modul-3-Logik:**
1. Filter Consultants nach Skill-Match (`Read` Skills + `Availability` overlap mit duration_window).
2. Decay-Adjustment: Skills mit `last_used > 24m` bekommen Confidence-Penalty.
3. Source-of-Claim-Adjustment: höhere Tier-Sources bekommen Confidence-Boost.
4. Warm-Path-Boost: `warm_path_consultants` bekommen Score-Bonus.
5. Cost-Constraint-Filter (wenn pricing_constraint gesetzt): nur Consultants mit Cost-Rate-Profil innerhalb Bandbreite.
6. Ranking + Top-K + Alternativen.

**Response:**
```
{
  primary_proposal: { consultants: ConsultantStaffing[], total_cost_estimate, ... },
  alternatives: PrimaryProposal[],
  coverage_gaps?: SkillRequirement[]    // wenn Skill nicht abgedeckt
}
```

**Audit:** Operator-Calls `Read` + `Plan` mit Output-Hash. Wenn `coverage_gaps` vorhanden → Audit-Flag.

---

#### H4 — Staffing approved → Tailored CV Generation

**Quelle:** Modul 2 — Event `StaffingProposalApproved`
**Ziel:** Modul 2 (intra-modul `Draft`-Operator) — aber **liest** Modul 3.

**Cross-Module-Anteil:**
- Modul 2 ruft Modul 3 `FetchProfileForCV(consultant_id)` ab.

**Response von Modul 3:**
```
{
  consultant_id, full_name, seniority,
  visible_project_experience: ProjectExperience[]    // Public + nicht-AnonymizedForCV
                                                       // gefiltert nach Engagement-Brief-Relevanz
  visible_skills: Skill[]                              // mit level + source_of_claim
  visible_certifications: Certification[]
  visible_education_trail: EducationEntry[]
  pii_routing_required: true                           // immer für CV-Use
}
```

**Pflicht-Validierung in Modul 2:**
- `pii_routing_required=true` enforced → CV-Draft-Operator routet über EU-hosted Model. Wenn Routing-Proof nicht generierbar → Reject.

**Audit:** Modul 3 logged `Read`-Call mit `purpose=TailoredCV`; Modul 2 logged `Draft`-Call mit `pii_routing_proof`.

---

#### H5 — Knowledge-Reuse in Proposal-Generierung

**Quelle:** Modul 2 — Operation `RequestKnowledgeAssets` (durchgehend während Proposal-Bau)
**Ziel:** Modul 4 (Knowledge & Reuse) — Operation `FetchAssetsForContext`

**Modul 2 fordert an in mehreren Phasen:**
- Brief-Erstellung: Methodology-Vorschläge.
- Proposal-Section: Templates.
- Tailored CV: Reference-Beispiele.
- Pricing-Frame: Pricing-Templates.
- Contract-Draft: ClauseLibrary.

**Payload-Beispiel (für Methodology-Vorschlag):**
```
{
  asset_kind: "Methodology",
  context_hints: {
    industry?, account_id?, domain?, methodology_tags?,
    similar_won_projects?: ProjectID[]
  },
  lifecycle_filter: ["Current"]
}
```

**Response:**
```
{
  matches: {
    asset_id, version, title_de, title_en,
    relevance_score, usage_count, last_used_at
  }[],
  source_bindings_index: SpanIndex[]    // für Validation in Modul 2
}
```

**Audit:** jeder `FetchAssetsForContext`-Call wird in Modul 4 als `Read`-Operator-Aufruf gelogged, in Modul 2 als Knowledge-Reuse-Event. `Asset.usage_count` += 1.

---

#### H6 — Contract signiert → Project spawned

**Quelle:** Modul 2 — Event `ContractSigned`
**Ziel:** Modul 5 (Allocation & Delivery) — Operation `SpawnProject`

**Payload:**
```
{
  contract_id, opportunity_id, account_id,
  staffing_proposal: ConsultantStaffing[],
  deliverable_specs: DeliverableSpec[],
  slas: SLA[],
  pricing_frame: PricingFrame,
  methodology_anchor: MethodologyID,    // referenziert Knowledge & Reuse
  start_date, end_date
}
```

**Modul-5-Logik:**
1. `Project` erzeugen mit `correlation_id` der Opportunity.
2. Allocations für jeden gestafften Consultant.
3. Milestones aus DeliverableSpecs.
4. Methodology-Stages → Project-Stages (1:1 oder mit Anpassung; PL kann modifizieren).
5. Audit-Setup, Risk-Register-Initialisierung.

**Audit:** End-to-End-Bridge — `Opportunity.spawned_project_id` und `Project.source_opportunity_id` als bidirektionale Referenz.

**Out-of-Scope der 4 MVP-Module:** Modul 5 ist nicht in unseren 4 Module-Specs. Aber: dieser Handoff ist Pflicht-Vertrag, den Modul 2 erfüllen muss, damit der Loop schließt.

---

#### H7 — Project closed → ProjectExperience erzeugt

**Quelle:** Modul 5 — Event `ProjectClosed`
**Ziel:** Modul 3 (Capacity) — Operation `RecordProjectExperience`

**Payload:**
```
{
  project_id, account_id,
  allocated_consultants: ConsultantStaffing[],
  methodologies_used: MethodologyID[],
  skills_applied_per_consultant: { consultant_id: SkillTaxonomyID[] }[],
  achievements?: text                  // PL-authored
}
```

**Modul-3-Logik:** Pro Consultant einen `ProjectExperience`-Knoten erzeugen mit Status=Vorgeschlagen. Berater ratifiziert / ergänzt.

---

#### H8 — Project closed → Lessons-Learned-Prompt

**Quelle:** Modul 5 — Event `ProjectClosed`
**Ziel:** Modul 4 (Knowledge & Reuse) — Operation `PromptLessonsAuthoring`

**Payload:**
```
{
  project_id, account_id, opportunity_id,
  pl_consultant_id, allocated_consultants,
  methodology_anchor, decision_records_during_project: DecisionRecordID[],
  duration_actual_vs_planned, budget_actual_vs_planned
}
```

**Modul-4-Logik:** Notification an PL mit pre-fill aus Daten. PL authored.

---

#### H9 — Lessons authored → AccountHistory + Briefing-Cache-Invalidation

**Quelle:** Modul 4 — Event `LessonsLearnedPublished`
**Ziel:** Modul 1 (Account Growth) — Operation `RegisterLesson` + Briefing-Cache-Invalidation

**Payload:**
```
{
  lesson_id, linked_account_id?, linked_opportunity_id?, linked_project_id?,
  pseudonymized: bool, betrvg_visibility: enum,
  source_bindings: SourceBinding[]
}
```

**Modul-1-Logik:**
1. AccountHistory-Eintrag mit `entry_type=LessonLearned` und Verlinkung zur Lesson.
2. Briefing-Cache für Account invalidieren (nächstes Briefing reflektiert neue Lesson).

---

#### H10 — Opportunity Lost → Lessons + AccountHistory

**Quelle:** Modul 2 — Event `OpportunityLost`
**Ziel:** Modul 4 (Lesson-Prompt) + Modul 1 (AccountHistory)

Wie H8 + H9 für Lost-Path.

Zusätzlich: `Trigger`-zurück-Markierung in Modul 1 mit `dismissed_reason=opportunity_lost` falls Trigger noch existiert (typisch nicht — wenn die Opp lost geht, ist der Trigger längst auf ConvertedToOpportunity).

---

## §B — Event- und Datenfluss-Architektur

### B.1 Event-Bus-Topologie

```
                       ┌──────────────────────┐
                       │  Event-Bus           │
                       │  (immutable log)     │
                       └──────────┬───────────┘
                                  │
       ┌──────────────┬───────────┴────────┬───────────────┐
       │              │                    │               │
       ▼              ▼                    ▼               ▼
   Modul 1        Modul 2              Modul 3         Modul 4
  Account        Opp/Proposal         Capacity        Knowledge
  Growth         /Contract                            & Reuse
       │              │                    │               │
       └──────────────┴────────────────────┴───────────────┘
                           │
                  (alle Module schreiben Events,
                   alle subscribed zu relevanten Events
                   anderer Module)
```

**Eigenschaften:**
- Append-only Log, kein Update.
- Outbox-Pattern: Modul commits Daten und Event in einer Transaktion.
- Idempotenz: jedes Event hat `id`, Empfänger dedupliziert.
- At-least-once Delivery, Empfänger müssen idempotent verarbeiten.

### B.2 Direkt-Calls vs Event-getrieben

| Cross-Module-Bedarf | Pattern | Begründung |
|---|---|---|
| Read-only Query (z. B. „lookup skill taxonomy") | Synchroner API-Call | Latenz-empfindlich |
| State-Change-Folge (z. B. „Lesson erzeugt → Briefing-Cache invalidieren") | Event-getrieben | Entkopplung, async |
| Komplexer Workflow (z. B. „Staffing-Vorschlag bauen") | Synchroner API-Call mit Event-Notification post-success | User wartet auf Ergebnis |
| Audit-Persistierung | Event-getrieben, Side-Effect | Schreib-intensiv, nicht latenz-kritisch |

### B.3 Datenherkunft pro Modul (Source of Truth)

```
Account, Stakeholder, Trigger, AccountHistory
  ───────────────────────────────────────▶ Modul 1 (Account Growth) is SOT

Opportunity, Proposal, Contract, all clauses-as-attributes
  ───────────────────────────────────────▶ Modul 2 (Opp/Proposal/Contract) is SOT

Consultant, Skill, Availability, CostRate, ProjectExperience, KnowledgeContribution
  ───────────────────────────────────────▶ Modul 3 (Capacity) is SOT

Methodology, Template, ClauseLibrary, Reference, LessonsLearned,
DecisionRecord, AISkillBlueprint
  ───────────────────────────────────────▶ Modul 4 (Knowledge) is SOT

Project, Allocation, Milestone, ProjectStatus
  ───────────────────────────────────────▶ Modul 5 (out of MVP-spec but referenced)

CostRate-Aggregat, Sell-Rate-Defaults, Billing-Snapshots
  ───────────────────────────────────────▶ Modul 6 (out of MVP-spec but referenced)
```

**Pflicht:** Kein Modul speichert eigene Kopie von Daten, deren SOT ein anderes Modul ist. Stattdessen: Cache mit Invalidation-Events.

---

## §C — Konsistenz-Garantien zwischen Modulen

### C.1 Stark vs schwach konsistente Beziehungen

| Beziehung | Konsistenz-Modus | Begründung |
|---|---|---|
| `Opportunity.account_id → Account` | Stark (FK) | Opp ohne Account ist invalid |
| `Opportunity.staffing_proposal.consultants` | Schwach | Berater kann ausscheiden, Staffing braucht Re-Match |
| `ContractDraft.clauses[].linked_clause_library_entry` | Schwach (snapshot) | Library kann sich ändern, Vertrag friert Stand ein |
| `Lesson.linked_project_id` | Stark (FK) | Lesson ist Projekt-Kontext-gebunden |
| `Trigger.stakeholder_ids` | Stark (FK) | Stakeholder muss existieren |
| `KnowledgeContribution.consultant_id → Consultant` | Stark (FK) | Authorship-Integrität |
| `Methodology.used_in_projects` | Schwach (denormalisiert für Performance) | Lazy-Refresh OK |

### C.2 Snapshot-Semantik bei Externalisierung

Wenn ein Vertrag extern gesendet wird (Modul 2 H6 in [Modul 2 Flow](../02-opportunity-proposal-contract/flows.md)), wird ein **Snapshot** aller referenzierten Knowledge-Assets eingefroren:

```
ContractSnapshot
  ├── contract_version
  ├── frozen_methodology_versions: { methodology_id: version_int }[]
  ├── frozen_clause_versions: { clause_library_entry_id: version_int }[]
  ├── frozen_consultant_profiles: { consultant_id, profile_hash }[]
  └── frozen_at: timestamp
```

Spätere Updates der Library / Profile ändern **nicht** den externalisierten Vertrag. Modul 4 / Modul 3 dürfen Updates publizieren ohne Side-Effects auf gesendete Verträge.

### C.3 Daten-Aktualität-SLAs (für Cross-Module-Calls)

| Call | Max-Latenz (P95) | Wann blockierend |
|---|---|---|
| `Modul 1 → Modul 2 IntakeOpportunity` | 200 ms | Ja (Katrin wartet) |
| `Modul 2 → Modul 3 MatchCandidates` | 1.5 s | Ja |
| `Modul 2 → Modul 4 FetchAssetsForContext` | 500 ms | Ja |
| `Modul 4 Search via Embedding` | 1.5 s | Ja (UI) |
| `Event-handler nach LessonsPublished` | 30 s | Nein (async) |
| `Briefing-Generation` (Modul 1 mit Modul 4 + Modul 3 lookups) | 3 s | Ja |
| `Cost-Rate-Update propagation to Modul 6` | 1 min | Nein |

---

## §D — Cross-Module-Approval-Logik

### D.1 Approval-Queue als modulübergreifender Sammler

Thomas hat eine **einzige** Approval-Queue, die Items aus allen 4 Modulen aggregiert:

| Item-Typ | Quelle | Approval-Kategorie | Risiko-Stufe |
|---|---|---|---|
| Staffing-Proposal | Modul 2 | High-Risk (Annex III §4) | High |
| Tailored CV | Modul 2 | High-Risk (Annex III §4) | High |
| Contract-Inhalt | Modul 2 | Vertragsinhalt | High |
| Klausel-Abweichung | Modul 2 → Modul 4 | Vertragsinhalt | Medium-High |
| Cost-Rate-Change | Modul 3 | Sensible Daten | Medium |
| Methodology-Veröffentlichung | Modul 4 | IP-Governance | Medium |
| Reference public-Marketing | Modul 4 | DSGVO + Branding | Medium |
| Account-Tier-Re-Klassifizierung | Modul 1 | Strategische Entscheidung | Low-Medium |
| Lessons mit Personenbezug | Modul 4 → Modul 3 | BetrVG | High |

### D.2 Approval-Latenz-Telemetrie

Pro Item-Typ wird Median-Approval-Latenz gemessen → Indikator für Workflow-Health. Wenn Latenz konstant >24 h, ist Workflow defekt → Eskalation.

### D.3 Verkettete Approvals

Beispiel: TailoredCV-Approval setzt voraus, dass StaffingProposal-Approval da ist.

```
StaffingProposal (approve) ──▶ unlocks ──▶ TailoredCV-Generation
                                        ──▶ unlocks ──▶ Proposal-Send
                                                   ──▶ unlocks ──▶ Contract-Send
                                                              ──▶ unlocks ──▶ Project-Spawn (Modul 5)
```

Wenn ein Glied versagt (Reject), wird die Kette unterbrochen. UI zeigt Sequence-Status.

---

## §E — Cross-Module-Audit-Trail

### E.1 Correlation-ID als End-to-End-Schlüssel

Eine `Opportunity`, die durch alle 4 Module läuft, behält dieselbe `correlation_id` (≠ `opportunity_id`).

`correlation_id` wird in Modul 1 beim Trigger-Convert-Event generiert. Modul 2 erbt sie. Modul 4 erbt sie (Knowledge-Asset-Use im Kontext der Opp). Modul 3 erbt sie für Staffing-Match. Modul 5 (out-of-scope) erbt sie.

**Audit-Query:** „Zeig mir alle AI-Operator-Calls für Opportunity Müller-Sourcing über den Loop" → einzige Filter auf `correlation_id`.

### E.2 Audit-Event-Struktur (modulübergreifend einheitlich)

```
AuditEntry (immer dieselbe Struktur über alle Module)
  ├── id: UUIDv7
  ├── correlation_id?: UUIDv7
  ├── module: ModuleID
  ├── action_kind: enum {
  │     OperatorCall, ApprovalGrant, ApprovalReject,
  │     StateTransition, DataChange, ExternalSend
  │   }
  ├── operator?: enum (für OperatorCall)
  ├── actor: ConsultantID? | "system"
  ├── target_entity: GraphNodeID
  ├── before_hash?, after_hash?
  ├── source_bindings?: SourceBinding[]
  ├── model_version?, prompt_version?
  ├── pii_routing_proof?: PIIRoutingProof
  ├── retention_until: date
  ├── timestamp
  └── extra: JSON                       (Modul-spezifische Felder)
```

### E.3 Audit-Retention pro Action-Kind

| action_kind | Retention |
|---|---|
| ExternalSend (Vertrag, Proposal) | 10 Jahre |
| ApprovalGrant für Vertragsinhalt | 10 Jahre |
| OperatorCall für TailoredCV | 24 Monate post-Won/Lost |
| StateTransition allgemein | 36 Monate |
| DataChange Cost-Rate | 10 Jahre (Lohn-Buchhaltungs-relevant) |
| OperatorCall „Suggest" (passiv) | 12 Monate |

---

## §F — Cross-Module-State-Konflikte und Auflösung

### F.1 Konflikt-Patterns und Resolution

| Konflikt | Wo erkannt | Resolution |
|---|---|---|
| Stakeholder gelöscht (Modul 1) während aktive Opp (Modul 2) referenziert | Modul 1 löscht → Event → Modul 2 stale-reference-warning | Modul 2 erzwingt User-Edit vor weiterem Vorwärtsgehen |
| Methodology deprecated (Modul 4) während offene Opp Brief referenziert | Modul 4 lifecycle change → Event → Modul 2 zeigt Hinweis | Modul 2: optional Migration zur neuen Version oder Snapshot-Use |
| Consultant Status → ExLeft (Modul 3) während Tailored CV in Modul 2 noch nicht versendet | Modul 3 Event → Modul 2 invalidiert TailoredCV | Modul 2 markiert CV ungültig, Approval-Re-Trigger nötig |
| ClauseLibraryEntry deprecated (Modul 4) während Vertrag draft in Modul 2 | Modul 4 Event → Modul 2 zeigt „Klausel hat Nachfolger" | Modul 2: User entscheidet, ob upgrade oder Snapshot beibehalten |
| Account auf Lost (Modul 1) während offene Opp (Modul 2) | Modul 1 erlaubt status-change nur wenn alle Opps closed | Reciprocal Validation |
| Trigger als dismissed gesetzt (Modul 1) nachdem bereits Opp daraus erzeugt (Modul 2) | Modul 1 blockt mit Hinweis | UI: „Trigger ist bereits konvertiert" |
| Lesson published mit Berater-Bezug ohne Berater-Approval (Modul 4) | Modul 4 lifecycle-Gate verhindert; Approval-Pflicht enforced | Lesson bleibt Draft bis Approval da |
| Cost-Rate-Update (Modul 3) während Pricing in Modul 2 noch in Draft | Modul 2: Pricing-Frame berechnet sich live neu mit neuer Rate; Audit | Optional: Snapshot-bei-Approval einfrieren |

### F.2 Eventual-Consistency-Akzeptanz

Wo dürfen Daten kurzzeitig divergieren?

- Cache-invalidation kann max 30s nach Event-Receipt auflaufen.
- Briefing-Cache: max 5 min stale, dann force-rebuild.
- Search-Index-Update: max 1 min stale.
- Audit-Log-Replication: max 60s (für analytische Queries).

Pflicht-Stark-Konsistenz:
- Approval-Status (User darf nicht „durchschlüpfen" bei stale Cache).
- Aktive externalisierte Artefakte (Vertrag, Proposal) — nie aus Cache, immer Live.
- Source-Binding-Resolution (kein stale Asset für Bindings).

---

## §G — Fallstrick-Pattern und Vermeidung

| Fallstrick | Beispiel | Vermeidung |
|---|---|---|
| **Module spawnt Domänen-Entity aus anderem Modul** | Modul 2 erzeugt direkt Account | Verboten — Modul 1 ist SOT für Account |
| **Cross-Module-Mutations** ohne Event | Modul 2 schreibt direkt in Modul-3-Datenbank | Verboten — Event-Pattern für alle State-Übergänge |
| **Doppelte Source-of-Truth** | Modul 2 hält eigene Skill-Liste neben Modul 3 | Modul 2 cacht, mit Invalidation-Event von Modul 3 |
| **Synchroner Long-Running-Call** | Modul 2 wartet 30s auf Modul-3-Forecasting | Async oder Background-Job mit Notification |
| **Implizite Approval-Konvertierung** | Lesson published ohne explizites Approval-Event | Approval-Events sind first-class |
| **Verlorene Correlation-ID** | Modul 4 logs Operator-Call ohne correlation_id zur Opp | Korrelations-ID-Pflicht in HandoffEvent-Schema enforce |
| **Schreib-Konflikte bei parallelen Approvals** | Zwei Approver klicken gleichzeitig | Optimistic locking + first-write wins |
| **Snapshot-Drift bei extern-gesendetem Vertrag** | Vertrag referenziert Klausel-Library, Library wird updated, alter Vertrag „interpretiert" anders | Snapshot bei Externalisierung in Modul 2 H6 |
| **Audit-Trail-Lücke beim Reject-Pfad** | Approval-Reject ohne Begründung | Begründung Pflicht-Feld |
| **Cross-Module-Cycle** | Modul 2 ruft Modul 4, Modul 4 ruft Modul 2 in selbem Call-Chain | Verboten — Event-getriebenes Pattern bricht den Cycle |

---

## §H — End-to-End-Telemetrie

Über alle Module hinweg messbar:

| Metrik | Wo erfasst | Aggregat |
|---|---|---|
| Time-to-Won (Trigger → Contract Signed) | Modul 1 + 2 (Correlation-ID-Span) | Median, p90 pro Tier |
| Modul-Übergangs-Latenzen (jeder einzelne Handoff) | Event-Bus | p50/p90 pro Handoff |
| Operator-Call-Quote pro Loop | Audit-Aggregat | Counter |
| Approval-Latenz pro Stufe | Modul 2 + Modul 4 | Median |
| Source-Binding-Coverage pro Operator-Call | Audit | % |
| Knowledge-Reuse-Faktor pro Opportunity | Modul 4 | Anzahl distinct Assets referenced |
| Warm-Path-Conversion-Rate | Modul 1 + 2 | % Opps mit aktiviertem WarmPath |
| Halluzinations-Vorfilter-Trigger-Rate | Modul 4 + Validation-Layer | % |

---

## §I — Verweise

- Module-Specs:
  - [01-account-growth/spec.md](../01-account-growth/spec.md) · [flows.md](../01-account-growth/flows.md)
  - [02-opportunity-proposal-contract/spec.md](../02-opportunity-proposal-contract/spec.md) · [flows.md](../02-opportunity-proposal-contract/flows.md)
  - [03-consultant-team-capacity/spec.md](../03-consultant-team-capacity/spec.md) · [flows.md](../03-consultant-team-capacity/flows.md)
  - [04-knowledge-reuse/spec.md](../04-knowledge-reuse/spec.md) · [flows.md](../04-knowledge-reuse/flows.md)
- Symbiose-Features: [symbiosis-features.md](./symbiosis-features.md)
- [Roadmap §3.1 MVP-Loop](../../business-definitions/Consultry-Roadmap-v1.0-MVP-and-Phasing.md)
- [PRD v5.0 §0 / §4.1 Graph-First-Architektur](../../technical-definitions/Consultry-PRD-v5.0-Software-Layered.md)
