# Consultry - Alignment Control Plane v1.0

**Status:** Canonical for terminology and document governance  
**Date:** 28.06.2026  
**Role in doc stack:** Resolves the 28.06 misalignment review by freezing the naming hierarchy, source-of-truth rules, starting-wedge setup and architecture merge gates.  
**Related:** [MVP-PRD](./Consultry-MVP-PRD-v1.0.md), [Product Vision](./Consultry-Product-Vision-v1.0.md), [GTM Decisions](./Consultry-GTM-Decisions-v1.0.md), [Architecture ADRs](./Consultry-MVP-Architecture-ADR-v1.0.md), [Measurement Spec](./Consultry-MVP-Measurement-Spec-v1.0.md).

> **One-line correction.** The product thesis is aligned; the control plane was not. From now on, terms, source status and MVP gates use the hierarchy below.

---

## 1. Canonical Naming Stack

| Layer | Canonical term | Use |
|---|---|---|
| Category | **Opinionated AI work harness for consulting firms** | Company/product category in investor and strategic language. German customer shorthand: **AI Work Harness fuer Beratungen**. |
| Whole product | **Win + Work** | Two-hero product promise under "Beratung im KI-Zeitalter". |
| Starting wedge | **Opportunity-to-Concept** | The first commercial/product wedge. A tender or existing-client signal becomes a defensible concept/proposal artifact. |
| Proof surface | **Concept Suite** | The product surface/demo surface where the user works on the grounded concept/proposal artifact. |
| First proof slice | **One real, source-grounded concept/proposal section from own corpus in five business days** | Pilot activation and PMF proof. |
| Intake surfaces | **Tender intake** and **Bestandskunden signal** | Two doors into the same Opportunity-to-Concept spine. |

### 1.1 Deprecated Or Demoted Terms

| Term | New status |
|---|---|
| `Acquisition-to-Bid` | Legacy/internal alias for the Win flow. Do not use as the canonical starting-wedge name in new decks/specs. |
| `Projekt-Wachstum & -Akquise` | Customer benefit / job-to-be-done, not the canonical wedge name. |
| `Concept Suite` | Proof surface, not company category and not whole product. |
| `AI operating system` / `Betriebssystem` | H3 vision/investor context only. Not MVP headline. |
| `Marketing CMS` | Avoid as product claim. If discussed, use **AI-native Brand & Page CMS** as later suite candidate, not H1. |

---

## 2. Source-Of-Truth Rules

| Source class | Files | Rule |
|---|---|---|
| Context anchor | `_CONTEXT-AND-MEMORY.md` | Read first. Must summarize current locked/candidate state. |
| MVP scope | `Consultry-MVP-PRD-v1.0.md` | Owns what is built first and what is out. |
| Full vision | `Consultry-Product-Vision-v1.0.md` | Owns horizon map and module catalog. |
| Terminology and baseline governance | This file | Owns naming hierarchy and source status rules. |
| Technical implementation baseline | `Consultry-MVP-Technical-Foundation-v1.0.md` plus `Consultry-MVP-Architecture-ADR-v1.0.md` | Technical Foundation must follow accepted ADRs. |
| Source-candidate depth | AWS/Hermes, Backend/IaC, Virtual Harness, AI-native CMS docs | Inform planning, but do not override MVP scope unless referenced by accepted ADR or this control plane. |
| Stale UX input | `Consultry-Target-Personas-v1.0.md` | Useful for patterns only. Not binding until refreshed. |
| Archive | `_archive/` | Historical evidence only. Never a source of current scope. |

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
- `GroundedDraftSection`
- `ReviewIssues`
- internal PDF/Markdown export where needed

The proof slice does **not** need a full polished proposal, outbound submission, pricing engine, contract draft or named staffing plan.

### 3.3 Hard Gates

| Gate | Rule |
|---|---|
| Source gate | Every Firm-Fact and External-Fact needs a SourceBinding or is blocked. |
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

---

## 5. Pre-PMF Sequencing Rule

Win and Work remain two external product promises, but the build tie-breaker is explicit:

| Track | Pre-PMF depth |
|---|---|
| Win / Opportunity-to-Concept | Build deeply enough to produce the 5-day grounded proof slice. |
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

---

## 7. Open Follow-Ups

| ID | Follow-up | Owner doc |
|---|---|---|
| AC-01 | Refresh personas around akquise-mueder Partner/Managing Partner as first buyer | `Consultry-Target-Personas-v1.0.md` or new persona file |
| AC-02 | Update deck copy to use canonical stack | `presentation/consultry-mvp-deck.html` |
| AC-03 | Run doc-wide coherence check before implementation kickoff | this file + context anchor |

---

*Ende v1.0 - Control plane for terminology, baseline and wedge verification.*
