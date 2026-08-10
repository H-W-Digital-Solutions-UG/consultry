# Consultry — MVP Technical Foundation v1.0

**Status:** Technical-Handoff-Kandidat — relevanter Seed, aber bis zum fachlichen Product-Handoff weder Product Canon noch freigegebene Implementierungsbasis.
**Datum:** 13.06.2026
**Rolle:** Konsolidiert den **wiederverwendbaren technischen Substanz-Layer** aus den archivierten Gen-A-Dokumenten (PRD v5.0, feature-specs/01–04, cross-cutting) — **scope-bereinigt** auf den Dual-Hero-MVP. Das *Scope*-Framing von Gen A war falsch (Win-and-Deliver, Contracts/DATEV/personenscharfes Staffing); die *Datenmodelle, Source-Binding-, Audit- und Integrations-Architektur* sind es nicht — sie leben hier weiter.
**Einordnung 02.08.2026:** Das [MVP-Doc](../archive/superseded-product-baseline-2026-08/Consultry-MVP-PRD-v1.0.md) ist historische Herkunft. [Foundation-Decisions](./Consultry-MVP-Foundation-Decisions-v1.0.md), [Architecture ADR](./Consultry-MVP-Architecture-ADR-v1.0.md) und [Business-Domain-Definition](./Consultry-Business-Domain-Definition-v1.0.md) bleiben technische beziehungsweise fachliche Inputs; keine davon überschreibt die laufende Product-/Business-Domain-Wayfinder-Definition.

> **Lesehinweis Scope-Markierung:** **🟢 MVP** = im Dual-Hero-MVP zu bauen · **🟡 H2** · **🔴 H3+**. Entities/Felder ohne MVP-Marke sind übernommen, aber erst später relevant — bewusst behalten, um Migrationen zu vermeiden.

---

## 1. Architektur-Posture (aus PRD v5.0 §2, scope-bereinigt)

Drei Schichten, jede mit fixierter Posture — **gilt unverändert auch im Dual-Hero-MVP**:

| Schicht | Posture | MVP-Realisierung |
|---|---|---|
| **Datenschicht (1.0)** | Deterministisch, transaktional, audit-erzeugend | **Aurora PostgreSQL Serverless v2 + pgvector** (RLS-Tenant-Isolation, Append-Only-Audit, pgvector). Graph-ready via explizite Edge-Tabellen; dedizierte Graph-DB erst bei Traversal-Bedarf (T3/ADR-001). Keine AI-Schreibzugriffe. |
| **Logikschicht (1.0 + 2.0-Anreicherung)** | Deterministische Business-Rules + ML-Anreicherung | TypeScript-Business-Rules; pgvector-Embeddings für Retrieval/Ähnlichkeit; Klassifizierer (Provenance, Trigger-Kind) als **Inputs** für deterministische Logik, nicht selbst Logik. |
| **Kollaborationsschicht (3.0)** | LLM als supervisor-bounded Kollaborateur | Bounded Operators (§8) auf dem Graph; nie direkter State-Mutator; jeder Call audit-logged, mit Evidence-/Review-State nach Job-Risiko. |

**Nicht-Ziel (präzisiert 28.06. durch ADR-002):** keine autonome Agent-Runtime, kein freies Auto-Execute/Tool-Orchestrate im MVP. Erlaubt ist nur ein bounded Hermes/Virtual Harness: job-scoped, HarnessPack-scoped, policy-gated, ohne direkte Persistenz und ohne autonome Außenaktionen.

---

## 2. Datenmodell — Kern-Entities (scope-bereinigt)

> Knoten im (relationalen, graph-ready) Modell; Module sind **Views**, keine Silos. Audit und ein expliziter Evidence-/Review-State gehören an AI-erzeugte, fachlich relevante Knoten; Source Bindings sind claim-nah und policy-abhängig optional.

### 2.1 🟢 Acquisition (Hero 1 „Win")

```
Account 🟢            id, name, legal_name, country, industry, size_bucket,
                      tier{Strategic,Key,Standard,Watch}, owner_consultant,
                      status{Active,Dormant,Lost,Archived}, revenue_band,
                      consent_state → HAS_MANY Stakeholder, AccountHistory,
                      Trigger, Opportunity, KnowledgeAsset(LessonsLearned)
Stakeholder 🟢        full_name, title, email, account, role,
                      influence{Decider,Influencer,User,Blocker,Champion},
                      relationship_strength 0-5, consent_state,
                      career_trail[], education_trail[], ContactPoint[], WarmPathEdge[]
AccountHistory 🟢     entry_type{Project,Meeting,ProposalSent,Won,Lost,Touchpoint,Note},
                      timestamp, linked_entities, narrative(+source_bindings), created_by
Trigger 🟢            account, kind{Internal,External,Inferred},
                      source_kind{Email,Meeting,Call,LinkedIn,News,ManualNote,GraphPattern},
                      confidence 0-1, stage{New,Qualifying,Qualified,Converted,Dismissed},
                      ai_suggestion, source_bindings[], operator_provenance
                      ▶ MVP-Hero-Signal: Vertrags-Options-/Verlängerungsfenster,
                        an Quell-Klausel gebunden (kind=Inferred, source=Document)
WarmPathEdge 🟢       Stakeholder ──knows_via──▶ Consultant; relation{Studium,Schule,
                      EhemArbeitgeber,EhemKollege,Konferenz,ProjektGeschichte,...},
                      strength 0-5, evidence{source_kind,id,span}, consent_visibility
ConsentState 🟢       lawful_basis{LegitimateInterest,ContractPerformance,ExplicitConsent},
                      purpose_limitation[], consent_given/revoked_at, retention_until,
                      dsar_history[]   (B2B-Default: LegitimateInterest, DSGVO ErwG 47)
```

### 2.2 🟢 Tender & Opportunity (Hero 1)

```
Tender 🟢             source{TED/eForms,service.bund,Upload}, cpv[], deadlines[], lots[],
                      eligibility[], required_docs[], award_criteria[] (FIRST-CLASS!),
                      match_score, match_rationale[], source_bindings[]
                      ▶ Ingest: thin TED-Polling (täglich, CPV-Filter/Tenant) + semi-manuell (T7)
Opportunity 🟢        source(AccountID), trigger?, owner,
                      stage{Intake,Qualified,Briefed,Shaped,Drafted,Won,Lost,Abandoned}
                      ▶ MVP-Stages bereinigt: KEIN Staffed/Proposed/Negotiated
                        (kein personenscharfes Staffing/Versand/Pricing im MVP)
                      → HAS_ONE EngagementBrief, HAS_MANY SkillRequirement,
                        HAS_ONE/ MANY ProposalDraft (Konzept), HAS_ONE TeamShape
EngagementBrief 🟢    outcome_statement, scope_in/exclusions[], timeline,
                      stakeholders_client[], methodology_anchor(→Knowledge),
                      source_bindings[], approval_state{Draft,Approved,Externalised},
                      operator_provenance
SkillRequirement 🟢   skill(→SkillTaxonomy), level_min, duration_pd, locality, must_have
```

### 2.3 🟢 Bid Production — HERO Proof Surface (Concept Suite)

```
ProposalDraft / Konzept 🟢   opportunity, version(write-once-on-approval),
                      sections: DraftSection[], approval_state, operator_provenance
DraftSection 🟢       text, award_criterion_ref? (GI-2 Fit-to-Score),
                      provenance_class{Firm-Fact,External-Fact,Model-Expertise} (GI-1),
                      evidence_state{not_required,linked,source_unavailable,review_required},
                      citation_links[] (optional; policy-relevant claims),
                      faithfulness_checked?: bool (wenn Quelle verwendet, D6)
TeamShape 🟢          headcount, role_profiles[], skill_types[], seniority_mix
                      ▶ ANONYM/aggregiert — keine namentlichen Personen (GI-13)
```

🟡 **H2:** `PricingFrame` (TimeMaterial/FixedPrice/Capped/Retainer, target/computed_margin), `Proposal`-Varianten (Lean/Standard/Premium), `TailoredCV` (Annex-III-§4 High-Risk, PII-EU-Routing-Pflicht), `StaffingProposal` (personenscharf, ≥1 Alternative-Pflicht), `ContractDraft` (clauses-als-Attribute + clause_diff_from_library), `Contract` (signed, eIDAS AdES). **Bewusst nicht im MVP** — aber Schema-Plätze reserviert, um Migrationen zu vermeiden.

### 2.4 🟢 Capability (Hero 2 „Work")

```
ConsultantProfile 🟢  skills[], certifications[], project_experience[], availability
                      ▶ AUTO-MAINTENANCE aus Upload + M365 (GI-12a); Consultant bestätigt.
                      ▶ deskriptiv, KEIN Scoring (GI-12). In Bid nur aggregiert (GI-13).
Skill (claim) 🟢      skill_taxonomy_ref, level,
                      source_of_claim{SelfDeclared<PeerVerified<ProjectAttested<CertificationBacked}
SkillTaxonomyEntry 🟢 slug, name_de/en, category{Technology,Methodology,Industry,SoftSkill},
                      parent?(max depth 3), synonyms[], governance{Core,Pilot-Custom,Deprecated}
                      ▶ MVP: kuratiertes Bootstrap ~80 Skills bei Onboarding
Availability 🟢       überlagerbare Windows (additiv + subtraktiv, z. B. Urlaub über Allocation)
CostRate 🟢 / SellRate 🟢   strikt getrennt; Cost = sensibel (Finance/MP), Sell = breiter.
                      Margenrechnung läuft NICHT hier (H2-Pricing).
❌ performance_score   GIBT ES NICHT — bewusst (BetrVG + Annex-III-§4 + Anti-„People-Reduction").
```

### 2.5 🟢 Personal Work-Context & Observability (Hero 2)

```
TimeEntry 🟢          dauer, projekt/task, billable, notiz, geschäftsdatum (BAG-pflichtig).
                      Capture erlaubt (auch agentengestützt); personenbez. Auswertung WC-gated (GI-8).
PersonalNote 🟢       STRIKT privat zum Consultant, nie management-sichtbar, nie Analytics (GI-7).
WorkAgentSuggestion 🟢 vom Agent vorgeschlagener TimeEntry/Tages-Summary aus In-Tool-Arbeit;
                      wird erst nach Bestätigung/Verfeinerung zum TimeEntry (GI-9a).
                      Auto-Feed selbst ist WC-Mode-gated (GI-9b, Default-OFF-Posture).
ProjectStatus 🟢      deliverable-zentriert (RAG/Milestones/Fristen/BudgetBurn) aus
                      AGGREGIERTEN TimeEntries; NIE personen-attribuiert im Default (GI-10/16).
```

### 2.6 🟢 Knowledge (geteilte Engine)

```
KnowledgeAsset 🟢     Subtypen: Methodology, Template, Reference, LessonsLearned,
                      ClauseLibraryEntry, DecisionRecord, AISkillBlueprint
KnowledgeAssetVersion 🟢  content_hash, changed_by, change_summary, superseded_by?
                      ▶ Projekte ankern auf SPEZIFISCHE Version (keine rückwirkende Änderung)
ExternalSource 🟢     zitierbar + tenant-isoliert in Verwendung, mit Freshness;
                      nie als Firm-Fact gespeichert (GI-4). SourcePolicy white-/blacklist (GI-6).
betrvg_visibility 🟢  auf LessonsLearned: Aggregated-Only | ConsultantApprovalRequired;
                      pseudonymized-Flag (Klarnamen → Pseudonym, Mapping nur im Audit)
```

### 2.7 🟡 Project Intelligence & Symbiosis Graph (H2 Candidate)

```text
ProjectWorkSource 🟡  source_type{Jira,Confluence,ServiceNow,GitHub,GitLab,M365,...},
                      connector_grant_id, source_scope, sync_cursor, snapshot_hash
ProjectWorkItem 🟡   source_ref, project_ref, work_type{Epic,Story,Task,Bug,Incident,
                      Change,Request,Decision,Requirement}, status, labels, source_bindings[]
ProjectRequirement 🟡 need_statement, pain_point, target_outcome, acceptance_hint,
                      evidence_spans[]
ProjectSignal 🟡     kind{UnmetRequirement,RepeatedIncident,ExpansionHint,DuplicateWork,
                      DeliveryRisk,ReuseOpportunity}, confidence, review_state
SymbiosisLink 🟡     subject_ref, predicate, object_ref, evidence_refs[], link_type
RedundancyFinding 🟡 work_item_refs[], overlap_summary, suggested_resolution, reviewer
InternalPlanDraft 🟡 opportunity_ref, requirements[], relevant_assets[], skill_shape,
                      delivery_steps[], risks[], source_bindings[]
```

**Boundary:** H1 baut nur `ProjectStatus`, Knowledge/Reuse und optional read-only Fixtures. Der ausgebaute Project Radar ist H2. Keine Ticket-Mutation, kein Personen-Performance-Scoring, keine autonome Opportunity-Erzeugung ohne Review.

---

## 3. Source-Binding & Provenance (der T4-Backbone) 🟢

```
SourceBinding         source_kind{GraphNode,Document,ExternalURL},
                      graph_node_id? | (document_id?, page?) | (span_offset?, span_length?) | url?,
                      retrieved_at, confidence 0-1
SourceBindingRule     (in AISkillBlueprint) claim_type, allowed_source_kinds[], min_confidence
EvidenceState         not_required | linked | source_unavailable | review_required
```

**Enforcement (Datenebene, risikobasiert):** fachlich relevante Claims persistieren mit `EvidenceState`. Wenn eine Quelle verwendet wird, bindet `SourceBinding` exakt auf `(graph_node_id, span_offset, span_length)` oder `(doc_id, page, span)` zurück und der Faithfulness-Check (D6) prüft die Tragfähigkeit. Fehlende Evidenz erzeugt `source_unavailable` oder `review_required`, nicht pauschal einen Validierungsfehler. Nur die Tenant-Policy darf externe Freigabe oder Action bei unresolved High-Risk Claims ablehnen. Human-Backstop (GI-1b): der Consultant-Autor verantwortet die Verwendung.

---

## 4. Audit-Event-Struktur (modulübergreifend einheitlich) 🟢

```
AuditEntry            id(UUIDv7), correlation_id?, module, actor(ConsultantID|"system"),
                      action_kind{OperatorCall,ApprovalGrant,ApprovalReject,StateTransition,
                                  DataChange,ExternalSend},
                      operator?, target_entity, before_hash?, after_hash?,
                      source_bindings?[], model_version?, prompt_version?,
                      pii_routing_proof?, retention_until, timestamp, extra(JSON)
```

Append-only, kryptografisch verkettet (jeder Event hält den Hash des vorigen), exportierbar als signierter Audit-File.

**Retention pro action_kind:** ExternalSend / Vertrags-Approval **10 J** (H2-relevant) · Cost-Rate-DataChange **10 J** · TailoredCV-OperatorCall 24 Mo post-Won/Lost (H2) · StateTransition 36 Mo · passiver „Suggest"-Call 12 Mo.

---

## 5. Schlüssel-Designentscheidungen (übernommen)

- **Account ↔ Prospect strikt getrennt** (kein Polymorphismus): anderes Compliance-Regime, andere Datenherkunft; Prospect→Account = neuer Knoten + Cross-Link, kein Update-in-place. **MVP: nur Account.** 🟡 Prospect = H2.
- **WarmPath als gerichtete Graph-Kante** mit Metadaten (nicht flacher Reference) — graph-ready Edge-Tabelle im MVP, echte Graph-DB erst bei Traversal-Bedarf.
- **Klauseln als Attribute** am ContractDraft (nicht eigener Knotentyp) — vermeidet Knoten-Explosion. 🟡 H2.
- **Availability als überlagerbare additive/subtraktive Windows** — elegante Urlaubs-/Allocation-Modellierung. 🟢
- **Kein `performance_score`** — bewusst nicht modelliert (BetrVG/Annex-III/Anti-Pattern). 🟢

---

## 6. Bounded Operator Set (Vokabular, aus PRD v5.0 §3)

`Read · Classify · Suggest · Summarise · Draft · Review · Plan` — die einzige Schnittstelle, über die AI auf den Graph zugreift; jeder Operator namentlich, typisiert und audit-logged. Sources und Review-State werden job-/claim-spezifisch geführt. **Verboten im MVP:** autonome Tool-Orchestration und freies Auto-Execute. **Erlaubt:** bounded Harness-Aufrufe nach ADR-002, wenn Tool, Corpus, ConnectorGrant und Output-Schema vorab gepackt sind. **„Review" = die QA-Schicht** (Operator gegen Methodology-Knoten), kein eigenes Modul — im MVP nur passiv/Basis, Ausbau H2 (Code/Doc) / H3 (Deck/Diagramm/Test-Infra).

MVP-Blueprints: `qualify-opportunity`, `find-warm-path`, `condense-asset`, `match-reuse`, `draft-concept` (Hero 1), `ingest-tender`, `shape-team`, `suggest-timeentry` (Hero 2 Work-Agent), `explain-recommendation`. Jeder versioniert (`prompt_id@version`), mit Owner + Eval-Baseline.

---

## 7. MVP-Loop & Integrationen 🟢

**Handoff-Prinzip (aus cross-cutting §A):** jeder Modul-Übergang hat Quelle-Event, Ziel-Operation, Payload-Schema mit Pflicht-Validierung, Audit-Persistenz, Rollback-Pfad. Correlation-ID als End-to-End-Schlüssel über alle Audit-Events eines Flows.

**Dual-Hero-Flüsse:** *Win:* Tender/Signal → Opportunity → (TeamShape) → ProposalDraft → Approval → interner Export. *Work:* In-Tool-Arbeit → WorkAgentSuggestion → Consultant-Bestätigung → TimeEntry → (aggregiert) ProjectStatus.

**Integrationen (MVP, read-only/Import + Polling):** M365 Mail/Cal (Signal-, Kontakt- und Profilquelle), DMS/SharePoint (Knowledge-Capture), GitHub/GitLab (Asset-Quelle), CRM (optional Import), **TED/eForms (Polling)**, Credly/CV-Upload (Profile). **H2 Project Intelligence:** Jira/Atlassian, Confluence und ServiceNow als read-only/snapshot Quellen fuer ProjectWorkItems, Requirements, Incidents, Changes und Decisions. **Source-of-Truth-Regel:** Consultry führt seine Aggregate nativ; alles aus Integrationen ist Vorschlag/Input, nie automatisch verbindlich. Kein Schreibzugriff/Versand nach außen.

---

## 8. Symbiose-Features (S1–S13, aus cross-cutting — Differenzierungs-Katalog)

> „1+1=3"-Features, die erst aus ≥2 Modulen entstehen — der eigentliche Beweis gegen „4 Tools zusammenkleben". Scope-markiert als Kandidaten; nicht alle MVP.

S1 Stakeholder-Berater-Resonanz-Map · S2 Briefing mit aktiver Risiko-Sicht · S3 Clause-Deviation-Pattern-Detector 🟡 · S4 Methodology-Authorship → Berater-Authority · S5 Stakeholder-Wechsel als Opportunity- **und** Risk-Trigger · S6 Win-Pattern-Cluster pro Account · S7 Lessons-Driven Brief-Vorfilter · S8 Margenrechnung mit Authority-bewusster Sell-Rate 🟡 · S9 Decision-Record-Resurfacing bei Re-Engagement · S10 Berater-Profil als Story aus Datenstrom · S11 Verloren-mit-Pattern-Trace · S12 Stakeholder-Berater-Beziehungs-Erosion-Detector · S13 Tailored-CV mit Match-Confidence-Transparenz 🟡 · S14 Redundant-Work-Detector 🟡 · S15 Project-Signal-to-Opportunity 🟡 · S16 Requirement-to-Internal-Plan 🟡.

**MVP-nahe Symbiose-Beweise:** S1, S2, S5, S6, S7, S10 (alle nur auf MVP-Entities). Rest H2 (an Pricing/CV/Clause gebunden).

---

## 9. AI-Reliability-Spine — MVP-Subset vs. Voll-Ausbau

| Komponente (PRD v5.0 §7) | MVP (T4) | später |
|---|---|---|
| Versionierte Prompts (Git, `prompt_id@version`) | 🟢 | — |
| Source-Binding-Enforcement (Datenebene) | 🟢 | — |
| Halluzinations-/Faithfulness-Vorfilter (D6) | 🟢 | — |
| AuditEvent je Operator-Call | 🟢 | — |
| Versionierte Managed-Model-Policy (`model_policy_id`) | 🟢 Foundry/GPT-5.6 preferred; `gpt-5.6-sol@2026-07-09` für PMF-kritische komplexe Jobs | Terra/Luna/Bedrock nur nach task-spezifischer Eval |
| Eval-Suite | 🟢 *manuell, 20–50 Fälle* für Provenance-Klassifikator (D1) + AwardCriterion-Parser (D2) | 🟡 CI-Gate |
| Drift-Monitor | — | 🟡 |
| PII-Routing-Layer | — | 🟡 (MVP: Foundry bevorzugt, Bedrock Alternative; T5-Grund-Compliance) |

### 9.1 Managed-Model-Policy-Contract

Domain-Module und AISkill-Blueprints speichern `model_policy_id`, nicht Provider Endpoint oder Model ID. Der `ModelGateway` löst die versionierte Policy in `provider`, `deployment_alias`, `model_id`, `model_version`, `reasoning_budget`, `token_budget`, `data_zone`, `retention_mode` und `fallback_policy` auf. Jeder AuditEvent bindet mindestens Policy-ID/-Version, tatsächlich aufgelösten Provider/Deployment/Model/Version sowie Prompt-Version. Ein Wechsel von Sol zu Terra/Luna/Bedrock ist eine evaluierte Policy-Revision, kein transparenter Runtime-Downgrade.

---

## 10. Quellen-Provenance dieses Dokuments

Salvage aus (archiviert in `_archive/`): `Consultry-PRD-v5.0-Software-Layered.md` (§2 Posture, §3 Operatoren, §6 Audit, §7 Spine), `feature-specs/01-account-growth` (Account/Stakeholder/Trigger/WarmPath/Consent), `02-opportunity-proposal-contract` (Opportunity/Brief/Pricing/Proposal-Entities + State-Machine), `03-consultant-team-capacity` (Skill-Taxonomie, Cost/Sell, Availability, No-Score), `04-knowledge-reuse` (Source-Binding, Versionierung, BetrVG-Felder), `_cross-cutting` (Audit-Struktur, Handoffs, Symbiose S1–S13). Scope-Bereinigung gegen [MVP-Doc §3.4](../archive/superseded-product-baseline-2026-08/Consultry-MVP-PRD-v1.0.md) + [Domain-Def GI-1…16](./Consultry-Business-Domain-Definition-v1.0.md) + [Architecture ADR](./Consultry-MVP-Architecture-ADR-v1.0.md).

---

*Ende v1.0 — Seed für die technische Planung. Nächster Schritt: Concept-Suite-Spec (D1/D3/D5/D6) baut auf §2.3 + §3 auf.*
