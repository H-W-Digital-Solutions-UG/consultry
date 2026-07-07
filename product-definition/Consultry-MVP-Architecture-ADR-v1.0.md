# Consultry - MVP Architecture ADR v1.0

**Status:** Accepted for MVP implementation planning  
**Date:** 28.06.2026  
**Role in doc stack:** Freezes the P0 architecture decisions raised by the misalignment review: data platform baseline and Hermes/Virtual Harness boundary.  
**Related:** [Alignment Control Plane](./Consultry-Alignment-Control-Plane-v1.0.md), [Technical Foundation](./Consultry-MVP-Technical-Foundation-v1.0.md), [AWS/Hermes Architecture](./Consultry-MVP-AWS-Hermes-Architecture-v1.0.md), [Virtual Harness Refinement](./Consultry-MVP-Virtual-Harness-Second-Brain-Refinement-v1.0.md).

---

## ADR-001 - AWS-Native Data Baseline

**Status:** Accepted  
**Decision:** Aurora PostgreSQL Serverless v2 + pgvector replaces Neon Postgres + pgvector as the MVP implementation baseline.

### Context

The active 13.06 technical foundation named Neon Postgres + pgvector. The 27.06 AWS/Hermes architecture branch moved the platform to AWS and recommended Aurora PostgreSQL Serverless v2 + pgvector. Keeping both as plausible baselines creates infra, IAM, test and cost-model drift.

### Decision

The MVP implementation baseline is:

- AWS-native multi-tenant EU SaaS.
- Aurora PostgreSQL Serverless v2 + pgvector as deterministic transactional data layer.
- Postgres RLS remains the tenant-isolation mechanism.
- Graph-ready relational schema remains the default.
- Dedicated graph DB remains deferred; Neptune/export paths are later analytics options only.
- S3/KMS remains the corpus, artifact and harness-pack storage layer.
- Bedrock EU remains the primary model path.

### Consequences

- `T3 Data Layer` in the MVP-PRD and Foundation Decisions must name Aurora, not Neon.
- Any local integration test can still use Postgres/Testcontainers, but production planning is Aurora.
- No hybrid Neon + Aurora pilot.
- Any reversal to Neon requires a new ADR.

---

## ADR-002 - Hermes Is A Bounded Harness, Not Autonomous Agent Runtime

**Status:** Accepted  
**Decision:** Hermes/Virtual Harness is allowed in the MVP only as a bounded, job-scoped execution harness. It is not an autonomous agent runtime.

### Context

The active Technical Foundation says "kein Agent-Runtime, kein Auto-Execute/Tool-Orchestrate im MVP." The 27.06 architecture branch introduced Hermes, Virtual Harness Client, Connector Broker and MCP Gateway. That is only compatible if Hermes is defined as controlled execution infrastructure, not as self-directed automation.

### Decision

Hermes means:

- A cloud sandbox/runtime started for a specific job/session.
- It receives a `HarnessPack`, not tenant-wide data access.
- Tools are selected by `ToolRegistry`, `ConnectorGrant`, policy and capability token.
- It cannot perform autonomous outbound, writeback, code modification, sequence execution, DB mutation or unsupervised external actions.
- It cannot persist product state directly.
- `ResultVerifier` validates outputs before product persistence.
- Human approval remains required before binding artifacts.

Hermes does **not** mean:

- Free-form agent runtime.
- Autonomous multi-step action chains.
- Agent deciding its own tools and data sources.
- Bypassing SourceBinding, approval or audit.

### Consequences

- The old "kein Agent-Runtime" rule remains true if read as "no autonomous runtime."
- The Technical Foundation must clarify that bounded harness execution is in-scope only under this contract.
- Marketing/deck language must avoid "AI agents run your firm."
- MVP implementation may build HarnessPack/Hermes plumbing only where required for Opportunity-to-Concept and source-bound work.

---

## ADR-003 - Source-Candidate Architecture Promotion Rule

**Status:** Accepted  
**Decision:** Detailed source-candidate architecture docs become implementation baseline only when their claims are compatible with ADR-001, ADR-002 and the MVP-PRD.

### Consequences

- AWS/Hermes Architecture, Backend/IaC Design and Virtual Harness Refinement are now planning sources, not competing baselines.
- Their WBS and diagrams are valid planning material where they respect the MVP gates.
- Scope additions such as broad connectors, hypergraph memory and AI-native CMS remain gated by MVP relevance and explicit product decisions.

---

*Ende v1.0 - next ADRs only if architecture assumptions change.*
