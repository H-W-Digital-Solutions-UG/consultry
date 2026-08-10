# Consultry - Alignment Control Plane v1.1

**Status:** Active terminology/governance candidate; gegenüber geschlossenen August-Wayfinder-Entscheidungen zu reconciliieren  
**Date:** 28.06.2026 · **Whole-OS/UX/Symbiosis update:** 12.07.2026
**Role in doc stack:** Preserves the naming hierarchy, source-status proposal, Whole-Product operating loops, former starting-wedge setup and architecture merge gates as reconciliation input; it does not override the current [Wayfinder](./wayfinder/consultry-product-platform-baseline/map.md).
**Related:** [historisches MVP-PRD](../archive/superseded-product-baseline-2026-08/Consultry-MVP-PRD-v1.0.md), [Product Vision](./Consultry-Product-Vision-v1.0.md), [GTM Decisions](./Consultry-GTM-Decisions-v1.0.md), [Architecture ADRs](./Consultry-MVP-Architecture-ADR-v1.0.md), [Measurement Spec](./Consultry-MVP-Measurement-Spec-v1.0.md).

> **Current-use correction (02.08.2026).** The hierarchy below records the June/July control-plane proposal. Where a closed Product-first-Wayfinder decision differs, Wayfinder wins and this file remains an explicit reconciliation target.

---

## 1. Canonical Naming Stack

| Layer | Canonical term | Use |
|---|---|---|
| Product-Vision category | **AI-native Consulting Operating System** | Whole-product identity across customer growth, people, commercials, delivery, knowledge, finance and governance. Not a claim that every module ships in H1. |
| Shared information spine | **Consulting Context Graph / Consultry Second Brain** | Source-bound Project/Knowledge context connected with Offer/Service/Product Portfolio, CRM, Contracts, People/Capacity and Finance/Operations. |
| Operating model | **Role workspaces over shared objects** | `My Work`, Customer, Project, People/Team, Knowledge, Commercial and Operations projections; not isolated module apps. |
| Core operating loop | **Observation → Signal → Decision → ActionCase → Outcome** | Role-neutral flow from project/customer event to responsible work and learning. Only commercial branches create Opportunity/ChangeCase. |
| Compounding loop | **ProblemPattern → SymbiosisLink → ReuseCandidate → ReusableAsset → ReuseApplication/ServiceBundleCandidate → ReuseValueCase** | Turns governed project experience into reusable firm capability, customer value and economic learning. |
| Execution model | **Consultry Engine → job-scoped HarnessPack → virtualized/local harness → approved Tools/RAG/MCP → Verification/Approval/Audit** | Bounded execution; no implicit corpus, connector or internet access. |
| Focused proof promise | **Win + Work** | Proof framing inside the broader Consulting OS, not a boundary of Product Vision. |
| Starting wedge | **Opportunity-to-Concept** | The first commercial/product wedge. A tender or existing-client signal becomes a defensible concept/proposal artifact. |
| Proof surface | **Concept Suite** | The product surface/demo surface where the user works on the review-ready concept/proposal artifact. |
| First proof slice | **One real, review-ready concept/proposal section from own corpus in five business days** | Pilot activation and PMF proof. |
| Intake surfaces | **Tender intake** and **Bestandskunden signal** | Two doors into the same Opportunity-to-Concept spine. |

### 1.1 Deprecated Or Demoted Terms

| Term | New status |
|---|---|
| `Acquisition-to-Bid` | Legacy/internal alias for the Win flow. Do not use as the canonical starting-wedge name in new decks/specs. |
| `Projekt-Wachstum & -Akquise` | Customer benefit / job-to-be-done, not the canonical wedge name. |
| `Concept Suite` | Proof surface, not company category and not whole product. |
| `AI operating system` / `Betriebssystem` | Canonical whole-product vision category, but not automatically the MVP headline or a statement that all modules ship in H1. |
| `AI work harness` as company category | Demoted. Use `Consultry Engine / bounded Harness` for the execution layer; company/product category is AI-native Consulting Operating System. |
| `Signal → Opportunity` as universal flow | Deprecated. Canonical loop is `Observation → Signal → Decision → ActionCase`; Opportunity exists only on the qualified commercial branch. |
| `Knowledge & Reuse` as search-only | Deprecated. Canonical vision includes Project Symbiosis, Assetization, Reuse Application, Service Productization and Value/Margin Learning. |
| `Marketing CMS` | Avoid as product claim. If discussed, use **AI-native Brand & Page CMS** as later suite candidate, not H1. |

---

## 2. Source-Of-Truth Rules

| Source class | Files | Rule |
|---|---|---|
| Context anchor | `_CONTEXT-AND-MEMORY.md` | Read first. Must summarize current locked/candidate state. |
| Product-/Business-Domain decisions | `wayfinder/consultry-product-platform-baseline/` | Closed tickets own the questions they explicitly resolve; open tickets remain unresolved work. |
| Full vision | `Consultry-Product-Vision-v1.0.md` | Owns horizon map and module catalog where no later decision supersedes it. |
| Terminology and baseline-governance input | This file | Active candidate; must be reconciled, not treated as self-ratifying authority. |
| Technical handoff candidates | Technical Foundation, ADR, AWS/Hermes, Backend/IaC, Virtual Harness and Platform Kernel docs | Inform later technical derivation; do not determine current Product Scope or Business-Domain truth. |
| Historical MVP-/UX inputs | `../archive/superseded-product-baseline-2026-08/` | Prior proof, persona and feature hypotheses only. |
| Archive | `../archive/` | Historical provenance only. Never a source of current scope. |

### 2.1 Revision Rule

Any material change must state:

1. Which prior statement it revises.
2. Which file now owns the new decision.
3. Whether the change is locked, source-candidate or stale/context-only.
4. Which downstream docs need propagation.

---

## 3. Starting-Wedge Verification Contract

**Starting wedge:** Opportunity-to-Concept.

### 3.1 Initial Conditions

| Condition | Required state |
|---|---|
| Real input | One tender, one existing-client signal, or one active contract/document that can create an Opportunity. |
| Own corpus | Tenant-owned documents are present, even if small. Zero-corpus demo is allowed only for tender-led showcase, not PMF proof. |
| User | Consultant/partner can review and edit the generated artifact. |
| Trust envelope | SourceBinding, provenance class, faithfulness check, human approval and audit are active. |

### 3.2 Output Contract

The first proof slice produces:

- `Opportunity`
- `EvidencePack`
- `NeedMap` or `CriteriaMap`
- `ConceptPlan`
- `ReviewReadyDraftSection`
- `ReviewIssues`
- internal PDF/Markdown export where needed

The proof slice does **not** need a full polished proposal, outbound submission, pricing engine, contract draft or named staffing plan.

### 3.4 Whole-Product Interpretation

The verification contract above is a build/test contract, not the product model. Current presentations and demos must keep visible that:

- the primary product loop can begin with a Consultant Observation in an active customer project;
- Sales, Project/Team Leads, Staffing, Knowledge, Finance/Backoffice and Management act from the same Context Graph;
- an operational signal may become Delivery, Customer, Team, Capability or Commercial action;
- project work can compound through governed Symbiosis/Assetization and need not terminate at Opportunity or Proposal.

### 3.3 Safety and Scope Gates

| Gate | Rule |
|---|---|
| Evidence/review gate | Material High-Risk claims need a SourceBinding or an explicitly resolved/accepted review state before external use; internal drafts are not globally blocked. |
| Approval gate | No artifact becomes binding without human approval. |
| Outbound gate | No autonomous send, submit, sequence or writeback in H1. |
| Staffing gate | TeamShape is anonymous/aggregated in H1. |
| Architecture gate | Harness execution is job-scoped, pack-scoped and non-autonomous. |

---

## 4. Architecture Baseline Rule

The misalignment review correctly identified that the AWS/Hermes branch had moved ahead of the locked foundation. The resolution is:

1. **ADR-001 locks the AWS-native data baseline:** Aurora PostgreSQL Serverless v2 + pgvector replaces Neon for MVP implementation planning.
2. **ADR-002 locks the Hermes boundary:** Hermes/Virtual Harness is a bounded execution harness, not an autonomous agent runtime.
3. Source-candidate architecture docs remain detailed planning sources, but their claims are binding only where they conform to ADR-001/002 and the MVP-PRD scope.
4. Any future reversal to Neon or non-Hermes execution requires a new ADR and context update.
5. **Managed AI Platform baseline (12.07.2026):** Microsoft Foundry / Azure AI Foundry is preferred. GPT-5.6 is the preferred family; `gpt-5.6-sol` is the default for PMF-critical complex reasoning/synthesis, with Terra/Luna only through task-specific eval gates. Bedrock remains an approved alternative/fallback. Domain code uses `model_policy_id`; provider/model/version selection lives in the provider-neutral ModelGateway. AWS-specific planning docs remain a Bedrock reference variant, not the preferred product default.

---

## 5. Pre-PMF Sequencing Rule

Win and Work remain two external product promises, but the build tie-breaker is explicit:

| Track | Pre-PMF depth |
|---|---|
| Win / Opportunity-to-Concept | Build deeply enough to produce the 5-day review-ready proof slice. |
| Work / Operating Foundation | Build only the minimum needed for daily-use measurement, Profile input, Time/Note capture and TeamShape support. |
| Shared foundation | Build only what gates trust: corpus, SourceBinding, approval, audit, tenant isolation, bounded harness. |

If effort conflicts, the **Opportunity-to-Concept proof slice wins** until the first PMF signal is achieved.

---

## 6. Docs Coherence Check

Before a deck, investor memo or implementation kickoff is treated as current, run these checks:

1. No current doc uses `Acquisition-to-Bid` as the canonical wedge without also mapping it to Opportunity-to-Concept.
2. No current doc names Neon as the MVP implementation baseline after ADR-001.
3. No current doc describes Hermes as autonomous agent runtime.
4. No current doc pitches AI-native CMS as H1 MVP.
5. Persona-derived UX claims are tagged stale or refreshed.
6. PMF and acceptance metrics link to the Measurement Spec.
7. No current vision/presentation doc treats `Signal → Opportunity` as the universal operating loop.
8. Every current Product-Vision/presentation source uses `Observation → Signal → Decision → ActionCase` and keeps Opportunity on the commercial branch.
9. Project Symbiosis/Assetization is represented as Product-Vision-Core with explicit customer-boundary, IP/confidentiality, rights, approval and T&M pricing guardrails.
10. `ReusableAsset` is a new abstracted/versioned object; no document implies raw Cross-Customer reuse.
11. Presentations separate Whole Product, proof wedge and rollout/build scope.
12. No current doc treats Bedrock as the preferred product default or requires Bedrock and Foundry to run in parallel. Foundry/GPT-5.6 is preferred; Bedrock is an approved alternative behind the same compliance and ModelGateway contract.
13. No Domain module hardcodes `gpt-5.6-sol`, a provider endpoint or model version; it references a versioned `model_policy_id`, and any Terra/Luna/Bedrock substitution is eval- and audit-gated.

---

## 7. Open Follow-Ups

| ID | Follow-up | Owner doc |
|---|---|---|
| AC-01 | Refresh personas around akquise-mueder Partner/Managing Partner as first buyer | `Consultry-Target-Personas-v1.0.md` or new persona file |
| AC-02 | Done 01.08: deck copy uses canonical stack across v4, v5 and MVP deck | `presentation/consultry-investor-deck-v4-video-informed.html`, `presentation/consultry-investor-deck-v5-consulting-os.html`, `presentation/consultry-mvp-deck.html` |
| AC-03 | Run doc-wide coherence check before implementation kickoff | this file + context anchor |
| AC-04 | Re-baseline the MVP/build scope only after Product Vision completion | MVP PRD + Foundation Decisions |
| AC-05 | Done 01.08 for HTML decks: visible project-led and Symbiosis/Assetization scenes implemented; HyperFrames source remains the animation authority | presentation + HyperFrames redline docs |

---

*Ende v1.1 — Control plane for Whole-Product terminology, project-led operating loops, Symbiosis/Assetization, baseline governance and wedge verification.*
