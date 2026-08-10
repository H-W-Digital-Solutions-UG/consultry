# Consultry — JF-2 Work, Deliverable and Progress Semantics for IT and Process Consulting

**Status:** Research synthesis supporting ratified Working Decision 2  
**Date:** 2026-08-06  
**Decision owner:** [Define the Active Client Work journey anatomy and UX-mode coverage](../wayfinder/consultry-product-platform-baseline/tickets/define-the-active-client-work-journey-anatomy-and-ux-mode-coverage.md)

## 1. Question and interpretation

How should a bounded `Client Work Episode` relate the consulting work being performed, the deliverables or other work results it produces, and the client progress it is intended to create — especially across IT and organisational/process consulting in the Consultry target market?

`TAM` is interpreted here as Consultry's target addressable market, with particular attention to specialist IT and organisational/process consultancies. The research does not define a market-size calculation and does not assume a proprietary consulting methodology.

## 2. Evidence synthesis

| Evidence lens | Relevant finding | Consequence for JF-2 |
|---|---|---|
| [BDU — IT-Beratung](https://www.bdu.de/themen/it-beratung/) | The German market category spans digital strategy, applications and infrastructure, IT governance and compliance, AI, data and analytics, data protection and security. | Active client work must cover more than analysis and decks: architecture, solution design, governance, implementation-related work and technical assurance are normal work. |
| [BDU — Organisations- und Prozessberatung](https://www.bdu.de/themen/organisations-und-prozessberatung/) | The category spans controlling, supply chain, reorganisation and post-merger integration, project-management consulting, process optimisation and performance management, change and transformation, risk, CRM and sales. | Process consulting changes structures, workflows, decisions, coordination and performance. A physical deliverable can support the result but is not the universal result. |
| [Arthur N. Turner — Consulting Is More Than Giving Advice](https://hbr.org/1982/09/consulting-is-more-than-giving-advice) | Turner's hierarchy distinguishes information, problem solving, diagnosis, recommendation, implementation, consensus and commitment, client learning and organisational effectiveness. | Consulting value progresses from understanding and direction through implementation to durable capability and effectiveness. Alignment and learning are legitimate value, not side activities. The hierarchy is a purpose lens, not a mandatory episode sequence. |
| [Schein process-consultation synthesis in Heracleous 2022](https://wrap.warwick.ac.uk/id/eprint/162524/7/WRAP-helping-NASA-guidelines-using-process-consultation-develop-impactful-research-Heracleous-2022.pdf) | Expert, doctor/diagnostic and process-consultation modes differ primarily in problem ownership, leadership of the helping process and transfer of diagnostic/intervention capability. Real engagements can blend modes. | `How the consultant helps` and `what client progress results` are separate dimensions. Facilitation is not an outcome type; it can produce clarity, commitment, change or capability without a major artifact. |
| [IIBA Business Analysis Core Concept Model](https://www.iiba.org/professional-development/knowledge-centre/ba-connection/baccm-overview---the-core-concepts-business-analysis-core-concept-model/) and [IIBA tasks and knowledge areas](https://www.iiba.org/knowledgehub/business-analysis-standard/4-tasks-and-knowledge-areas/introducing-business-analysis-tasks/) | Business analysis relates need, context, stakeholder, solution, change and value. Its tasks are selected and ordered iteratively according to the initiative. | A stable abstraction should describe changes in the client's state — understanding a need, choosing direction, making a solution ready, realizing change and proving value — rather than a fixed workflow. |
| [The Open Group — TOGAF ADM](https://www.opengroup.org/soa/source-book/togaf/p4.htm) | IT architecture work spans requirements and vision, business/data/application/technology architecture, opportunities and solutions, migration planning, implementation governance and change management. Outputs evolve iteratively. | IT consulting crosses understanding, target design, implementation readiness, governance and continued change. `Recommendation` alone is too narrow; `implemented change` is too coarse to describe solution and operational readiness. |
| [O*NET — Computer Systems Analysts](https://www.onetonline.org/link/summary/15-1211.00) and [Management Analysts](https://www.onetonline.org/link/summary/13-1111.00) | Real work includes elicitation, analysis, solution and system design, alternatives, cost/benefit analysis, agreement, implementation, integration, testing, monitoring, training, troubleshooting and checking whether new procedures work. | The episode model must accommodate epistemic, design, social, technical, operational, assurance and enablement work without turning these tasks into mutually exclusive episode types. |
| [SAP Signavio process-transformation capabilities](https://learning.sap.com/courses/introducing-business-transformation-management-for-enterprise-architects/introducing-the-sap-signavio-suite-1), [SAP process analysis](https://help.sap.com/docs/signavio-process-intelligence/user-guide/process-analysis) and [APQC process management](https://www.apqc.org/expertise/process-performance-management/process-management) | Process transformation combines discovery and analysis, modelling, collaborative redesign, governance, implementation initiatives, measurement and continuous improvement. APQC highlights strategic alignment, governance, models, change, performance and improvement. | Process consulting is both episodic and cyclical. Performance and capability to continue improving are distinct from producing a to-be model or completing a workshop. |
| [ICMCI CMC Competence Framework](https://www.cmc-global.org/sites/default/files/public/icmci_cmc002_competence_framework_version_4.0_0.pdf) and [ISO 20700 toolbox](https://www.cmc-global.org/sites/default/files/public/cmc-global_20700_toolbox_-_1st_edition_2017-09.pdf) | Professional consulting includes analysis, alternatives, feasibility, implementation, evaluation, corrective action, client relationship and assignment management across Contracting, Execution and Closure. | Assignment phase, episode outcome, consulting mode and episode closure must remain distinct. |

## 3. Finding: progress alone is not the episode anatomy

| Provisional shape | Actual semantic level | Disposition |
|---|---|---|
| Insight / Diagnosis | Client progress outcome | Keep, broaden to `Clarity & Framing`. |
| Recommendation / Decision Support | Client progress outcome | Keep, broaden to `Direction & Commitment`. |
| Deliverable / Artifact | Materialisation or evidence carrier | Move out of the outcome taxonomy. Any outcome can be carried by an artifact. |
| Alignment / Agreement | Client progress and fitness quality | Represent primarily in `Direction & Commitment`, and as ownership/alignment quality where it affects other outcomes. |
| Implemented Change / Adoption | Client progress outcome | Keep, sharpen to `Change & Operational Readiness`. |
| Corrected / Recovered Work | Route or state transition | Move out of the outcome taxonomy. Any outcome can be challenged, corrected or recovered. |
| Accepted Handoff / Closure | Episode disposition | Move out of the outcome taxonomy. It describes how responsibility and continuity end or move. |

Adding further peer shapes to this list would deepen the level-mixing. The correction is a smaller primary outcome set plus separate context dimensions.

The five Client Progress Outcomes below only answer `what became more true or possible for the client`. They do not describe the consulting work performed or the deliverable/work result through which that progress becomes usable and inspectable. JF-2 therefore needs three related coordinates rather than a single taxonomy.

## 4. Recommended core: three related episode coordinates

```text
Consulting Work  →  Deliverable / Work Result  →  Client Progress
     verbs                  nouns/state               effect
```

This is a traceability relation, not a fixed sequence. Work can reshape an earlier deliverable, a deliverable can expose the need for more work, and observed progress or counterevidence can reopen the episode.

### 4.1 Coordinate A — Consulting Work composition

`Work` describes what consultants and participating client actors actually do. A bounded episode is composed from the already ratified consulting-work primitives rather than assigned one rigid work type:

1. notice or monitor;
2. capture;
3. prioritize or triage;
4. search or retrieve;
5. consult or access expertise;
6. frame or reframe;
7. investigate, observe or elicit;
8. analyze, compare or diagnose;
9. synthesize or develop options;
10. create or adapt;
11. challenge, review or test;
12. communicate, align or co-create;
13. decide, approve or accept;
14. coordinate or hand off;
15. execute, externalize or support adoption;
16. observe or measure outcome;
17. adapt or recover;
18. learn, share or reuse.

The episode records only its relevant composition and dominant work contribution. The primitives are not a prescribed method, user-facing checklist or mandatory sequence. The seven ratified UX modes remain a way to support combinations of these primitives; they are not the work taxonomy itself.

### 4.2 Coordinate B — Deliverable / Work Result

`Deliverable / Work Result` describes what the work makes available, changes or leaves behind. It needs two descriptors because representation alone is misleading: the same deck can carry a diagnosis, decision basis, target design or training content.

#### Work-result function

1. **Evidence or assessment** — facts, observations, analysis, diagnosis, baseline, finding or point of view.
2. **Recommendation or decision support** — options, evaluation, business case, recommendation, priority or decision basis.
3. **Design or specification** — target state, architecture, process or operating model, requirement, concept, prototype or specification.
4. **Plan, coordination or control** — roadmap, backlog, migration/change/test plan, governance, KPI, risk/control or responsibility arrangement.
5. **Implemented solution or change increment** — configuration, code, integration, automated workflow, activated process, role or operating change.
6. **Assurance or acceptance evidence** — review, challenge, test result, validation, compliance/quality finding, approval or acceptance record.
7. **Enablement or continuity asset** — training, playbook, runbook, handover, operating guidance, learning or responsibly governed reuse candidate.

#### Representation

A work result may be carried by an interaction or workshop, structured data/record, analysis, document, deck, model, diagram, decision record, plan/backlog, configuration/code, process/role change, training intervention or measured operational state. Several representations may serve one function, and one representation may serve several functions.

This keeps `Deliverable` first-class without reducing consulting to files or artifact authoring. It also covers process consultation, where a facilitated interaction may create an owned decision or capability even when the persistent artifact is small.

### 4.3 Coordinate C — five Client Progress Outcomes

A bounded `Client Work Episode` has one primary progress outcome and may advance secondary ones. The outcomes are non-exclusive and are not a mandatory sequence.

| Progress outcome | State transition | Typical IT examples | Typical process-consulting examples |
|---|---|---|---|
| **1. Clarity & Framing** | A need, context, problem, opportunity, constraint, evidence base or causal picture becomes sufficiently legible to proceed responsibly. | Current-landscape assessment, requirements clarification, root-cause analysis, risk or dependency picture. | As-is discovery, process mining interpretation, stakeholder/problem framing, bottleneck or root-cause diagnosis. |
| **2. Direction & Commitment** | Alternatives become judgeable and an owned recommendation, decision, priority, agreement or next course becomes explicit. | Platform or vendor choice, architecture decision, transformation roadmap priority, governance decision. | Improvement priority, target principle, intervention choice, workshop alignment, sponsor or process-owner commitment. |
| **3. Solution Readiness** | A proposed solution, target state or work result becomes coherent, feasible and usable for its intended next step. | Target architecture, requirements/design package, configured prototype, migration or test concept. | To-be process, operating model, control/KPI design, implementation concept, decision basis or client-ready deliverable. |
| **4. Change & Operational Readiness** | The intended change is implemented, integrated, adopted or otherwise capable of working in the client environment. | Integration, migration, tested release, go-live preparation, trained users, operating/governance setup. | New process and roles activated, controls established, ways of working adopted, handoffs functioning in practice. |
| **5. Value & Capability** | Effects are observed and the client can sustain, govern, learn from or continue improving the result. | Service or system performance, benefits evidence, maintainability, operating capability, continued architecture governance. | KPI improvement, stable process ownership, continuous-improvement ability, transferred diagnostic or facilitation capability. |

This is a progress model, not a maturity model. A small episode may legitimately end at `Clarity & Framing`; it does not fail because it did not reach implementation or measured value.

### 4.4 Relationship between the three coordinates

| Example episode | Consulting Work | Deliverable / Work Result | Client Progress |
|---|---|---|---|
| Process-mining assessment | retrieve, analyze, compare, diagnose, communicate | evidence/assessment represented by analysis, baseline and findings | `Clarity & Framing` |
| Fit-to-standard workshop | elicit, compare, facilitate, co-create, decide | decision support plus target-process/design records | `Direction & Commitment` and `Solution Readiness` |
| ERP rollout increment | create/adapt, coordinate, configure/execute, test, train | implemented solution increment, test evidence and enablement assets | `Change & Operational Readiness` |
| Delivery challenge | retrieve, compare, challenge, review, decide, recover | assurance finding and human disposition; possibly a revised work result | fitness of the affected Progress Outcome is restored or explicitly rejected |
| Process-consultation intervention | observe, frame, facilitate, co-inquire, reflect, learn | interaction outcome, decision/commitment record and possibly a small continuity asset | `Clarity & Framing`, `Direction & Commitment` or `Value & Capability` |

The required trace is therefore:

> **Which concrete work produced or changed which work result, for which intended client progress, on what evidence, and with whose acceptance?**

### 4.5 Separate context — Consulting / Helping Mode

The same progress outcome can be produced through different responsibility relationships:

- expert contribution;
- diagnostic or advisory work;
- process consultation, facilitation or co-inquiry;
- co-delivery and implementation enablement;
- independent challenge or assurance.

These modes may blend or change inside an episode. They describe `how help is provided and who owns problem, judgment and action`; they are not product modules, fixed roles or outcome categories.

### 4.6 Separate control — Evidence and Acceptance

The work-result coordinate says what was produced or changed; evidence and acceptance establish whether it is fit for the intended use. Applicable source basis, uncertainty, review, authority and human/client acceptance therefore qualify the relation between Work Result and Client Progress instead of becoming another Work-Result function.

### 4.7 Separate context — Episode Disposition and Continuity

An episode can be:

- accepted or put to use;
- handed to another accountable responsibility;
- revised or reopened;
- held or deferred;
- rejected or stopped;
- closed with residual obligations and an explicit learning or follow-up handoff.

`Recovery` is a route back to a fit outcome. `Handoff / Closure` is a disposition. Neither needs a sixth or seventh primary progress outcome.

### 4.8 Cross-cutting fitness questions

For any of the five progress outcomes, JF-2 later checks only the applicable qualities:

- Is it sufficiently evidenced and assured for the intended use?
- Is responsibility, alignment and authority clear enough to act?
- Are continuity, recovery and learning preserved where material?

These are acceptance dimensions, not permanent UI panels and not extra journey stages.

### 4.9 Outcome Testing obligation

The Work–Result–Progress trace only becomes useful when its claims can be tested. Completion of an activity or production of a Deliverable is insufficient evidence of success. JF-2 therefore requires distinct, connected Outcome Tests for:

- the intended contribution of a Task or work composition;
- the fitness for intended use of an Artifact / Work Result;
- the viability, ownership, use and later execution evidence of a Plan;
- the client decision, action, change, capability or effect the work was intended to enable.

The exact evidence can mature over time. Immediate testing may establish comprehension, source fitness, actionability, decision readiness or accepted handoff; later observation may establish execution, adoption, performance, capability or realized value. A later outcome must be able to revise the earlier assessment without erasing what was known and accepted at that time.

Status: the Outcome Testing obligation was ratified on 06.08.2026; detailed test-chain semantics remain open.

#### Consequence for Agents and engineered Harness workflows

Outcome Testing supplies the functional goal and feedback semantics for later Agents. Task execution, Plan exhaustion and Artifact emission are observable activities, not sufficient goal-achievement evidence. An Agent goal must bind intended contribution, Work Result and Client Progress to current versus delayed evidence, constraints, authority and explicit replan/escalate/stop conditions.

Where realized client outcomes are delayed or outside the Agent's control, the Agent may only claim the nearest evidenced contribution or proxy. Its own plan, output or confidence cannot be the sole evidence that the goal was achieved. Outcome evidence can later improve Agent plans, Skills and workflow specialization, but only through versioned and governed change.

### 4.10 Testability is not binary

Outcome Testing must distinguish the ability to test a claim from the result of a test. It must also separate evidence timing and causal attribution. In particular:

- directly verifiable Artifact properties do not verify the Artifact's usefulness or downstream effect;
- human-judgment evaluation is not deterministic verification but can still be disciplined, reviewable evidence;
- a later observable outcome is deferred, not inherently untestable;
- a measurable proxy does not prove the underlying outcome or its causal attribution;
- an unfalsifiable claim without an observable criterion or responsible judgment basis cannot serve as an Agent completion condition.

A later Agent Goal Contract therefore needs a `Testability Profile` and `Claim Ceiling`: the strongest achievement statement permitted by current independent evidence. The detailed classes and terminology remain a Product decision rather than a technical enum selected here.

## 5. Coverage test against the target market

| Target-market episode | Consulting Work composition | Deliverable / Work Result | Client Progress |
|---|---|---|---|
| IT strategy and architecture | investigate, retrieve, frame, analyze, synthesize, model, communicate, decide | assessment, target architecture, options/decision basis, roadmap and governance design | `Clarity & Framing` → `Direction & Commitment` → `Solution Readiness` |
| Software/system selection | elicit, analyze, compare, test, consult experts, recommend, decide | requirements, market/vendor evidence, evaluation model, business case and selection decision | `Clarity & Framing` → `Direction & Commitment` |
| Requirements and solution design | elicit, frame, model, analyze, create, review, refine | requirements, process/data/system models, specification, prototype and test concept | `Clarity & Framing` → `Solution Readiness` |
| Implementation, integration or migration | plan, create/adapt, configure/execute, coordinate, test, recover, train | working solution increment, integration/migration result, test/acceptance evidence, runbook and enablement assets | `Change & Operational Readiness`; later `Value & Capability` |
| IT governance, compliance or assurance | retrieve, inspect, compare, challenge, assess, recommend, monitor | control/governance design, risk or compliance finding, assurance evidence and corrective plan | assurance of `Direction`, `Solution`, `Change` or `Value & Capability` |
| Process discovery and optimisation | observe, elicit, retrieve data, analyze, diagnose, model, synthesize options | as-is evidence, process model, root-cause assessment, improvement options and value case | `Clarity & Framing` → `Direction & Commitment` → `Solution Readiness` |
| Process redesign and transformation | facilitate, co-create, decide, plan, coordinate, implement, support adoption, measure | to-be process/operating model, responsibility/control design, implementation increments, adoption and performance evidence | `Direction & Commitment` → `Change & Operational Readiness` → `Value & Capability` |
| Workshop or process-consultation intervention | observe, frame, facilitate, co-inquire, communicate, align, decide, reflect | interaction outcome, shared frame, commitment/decision record and optional continuity asset | `Clarity & Framing`, `Direction & Commitment` and/or `Value & Capability` |
| Delivery review or rebuttal simulation | retrieve, compare, challenge, test, review, decide, adapt or recover | assurance finding, counterevidence, human disposition and possibly revised work result | fitness of the affected Progress Outcome is restored, bounded or rejected |

No major BDU IT or organisational/process consulting family requires another peer outcome. The missing coverage in the provisional list is recovered by `Solution Readiness` and `Value & Capability`; the remaining ambiguity is resolved by separating mode, materialisation and disposition.

## 6. Recommendation and decision boundary

Replace the provisional flat `Outcome Shapes` with a three-coordinate episode model:

1. `Consulting Work` as a composition of the ratified work primitives;
2. `Deliverable / Work Result` described by function and representation;
3. `Client Progress` described by the five non-exclusive Progress Outcomes.

Retain Consulting/Helping Mode, Evidence/Acceptance and Episode Disposition as context and control dimensions. Do not introduce a second work taxonomy parallel to the ratified primitives, and do not treat the five Progress Outcomes as the complete episode anatomy.

This defines the business semantics needed to continue the JF-2 anatomy. It does not ratify detailed journey steps, screens, workflow states, technical objects, agents, graphs or automation.

The three-coordinate relation is deliberately a stable learning scaffold, not a frozen workflow library. Concrete journeys and workflows are expected to be progressively specialized and versioned through realistic case work, Mock testing and later instrumented use with target consultancies. Testing may change the composition, sequence, terminology, branching, handoffs and representation of a workflow without invalidating the higher-level trace between Work, Work Result and Client Progress.

Status: ratified in the JF-2 HITL grill on 06.08.2026 with progressive specialization through real user testing as an explicit condition.
