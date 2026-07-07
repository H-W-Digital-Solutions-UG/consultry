# Consultry - MVP Measurement Spec v1.0

**Status:** Baseline for pilot measurement; numeric Work thresholds remain design-partner-calibrated hypotheses where marked.  
**Date:** 28.06.2026  
**Role in doc stack:** Closes the measurement gap raised by the misalignment review and defines how Opportunity-to-Concept is verified.  
**Related:** [Alignment Control Plane](./Consultry-Alignment-Control-Plane-v1.0.md), [MVP-PRD](./Consultry-MVP-PRD-v1.0.md), [GTM Decisions](./Consultry-GTM-Decisions-v1.0.md).

---

## 1. Measurement Hierarchy

| Level | Metric | Gate |
|---|---|---|
| Survival signal | Opportunity-to-Concept proof slice | At least one real, source-grounded concept/proposal section from own corpus in five business days. |
| Trust gate | SourceBinding coverage | 100% of Firm-Facts and External-Facts have valid SourceBinding or are blocked. |
| Human-value gate | Rewrite vs edit | Partner/consultant edits the artifact instead of restarting from scratch. |
| Activation gate | Time-to-first-wow | First useful, source-visible output in less than 15 minutes during guided pilot session. |
| Retention hypothesis | Work weekly active seats | T12 hypothesis: >= 60% consultant seats weekly active, calibrated with design partner. |

---

## 2. Opportunity-To-Concept Acceptance

| Metric | Owner | Data source | Formula / check | Pass condition |
|---|---|---|---|---|
| `otc_real_input` | Product | Pilot log | Input is real tender, existing-client signal or contract/document from tenant corpus | true |
| `otc_five_day_draft` | Product | AuditEvent + artifact timestamp | approved pilot start to grounded draft section timestamp | <= 5 business days |
| `otc_used_in_workflow` | Product + design partner | Review session note | user confirms artifact was used for internal bid/concept prep | true |
| `source_binding_coverage` | Engineering | validation report | sourced factual claims / factual claims requiring source | 100% |
| `unsupported_fact_count` | Engineering | validation report | facts classified Firm/External without valid binding | 0 persisted |
| `faithfulness_blocker_count` | Engineering | verifier output | unsupported source-to-claim mismatches in final approved artifact | 0 blocker issues |
| `edit_not_restart` | Product | final artifact diff + user confirmation | user keeps generated structure or text as working base | true |
| `time_to_first_wow` | Product | session timer | start of guided session to first useful source-visible output | < 15 minutes |

---

## 3. Contract-Signal Measurement

The Bestandskunden-led demo depends on extracting renewal, option and extension windows from contracts. This is not a homepage metric; it is a pilot engineering acceptance gate.

| Metric | Data source | Initial gate |
|---|---|---|
| `contract_signal_manual_review_required` | all extracted signals | 100% reviewed by human before conversion to Opportunity |
| `contract_signal_source_clause` | extracted signal | 100% include clause/page/span reference |
| `contract_signal_precision_candidate` | annotated pilot contract set | >= 90% precision on supported signal types after 20 annotated contracts |
| `contract_signal_recall_candidate` | annotated pilot contract set | >= 70% recall on supported signal types after 20 annotated contracts |

**Supported signal types v1:** renewal window, termination notice period, extension option, framework agreement expiry, explicit follow-on phase.  
**Rule:** Before 20 annotated contracts exist, precision/recall are calibration metrics, not external claims.

---

## 4. Work-Hero Measurement

These metrics validate the Work promise without overpowering the Win survival signal.

| Metric | Owner | Data source | Initial gate |
|---|---|---|---|
| `weekly_active_consultant_seats` | Product | app events | T12 hypothesis: >= 60% weekly active seats in pilot once Work surface is live |
| `work_agent_confirmation_rate` | Product | WorkAgentSuggestion events | candidate: >= 50% suggestions accepted or edited into TimeEntry/summary |
| `profile_update_acceptance_rate` | Product | ConsultantProfile approval events | candidate: >= 70% accepted or edited, not dismissed |
| `private_note_repeat_use` | Product | PersonalNote events | at least 2 active weeks for >= 40% of pilot consultants using Work surface |

These candidate thresholds are not market claims. They are pre-PMF instrumentation defaults to calibrate with the first design partner.

---

## 5. Kill And Pivot Logic

| Condition | Interpretation | Action |
|---|---|---|
| No real Opportunity-to-Concept proof slice within five business days | Starting wedge not operationally proven | Fix onboarding, corpus, grounding or scope before adding modules |
| Partner restarts in Word instead of editing | Artifact quality/fit is not high enough | Improve section model, evidence selection, workflow UX |
| SourceBinding gate blocks most useful claims | Corpus/proof setup insufficient | Improve onboarding ritual and Proof/Evidence Pack |
| Work activation weak but Win succeeds | Retention track needs refinement | Do not pivot wedge; improve Work surface |
| Win fails but Work engagement exists | Wrong survival signal | Re-evaluate wedge before expanding Work |

---

## 6. Event Instrumentation Minimum

Required event families:

- `pilot_session_started`
- `corpus_item_ingested`
- `opportunity_created`
- `contract_signal_extracted`
- `evidence_pack_created`
- `draft_section_generated`
- `source_binding_validated`
- `faithfulness_checked`
- `review_issue_created`
- `artifact_approved`
- `artifact_exported`
- `work_agent_suggestion_created`
- `work_agent_suggestion_confirmed`
- `profile_update_suggested`
- `profile_update_approved`

Each event needs `tenant_id`, `pilot_id`, `correlation_id`, actor class, timestamp, artifact id where relevant and audit hash.

---

*Ende v1.0 - use this file for wedge verification and pilot-readiness reviews.*
