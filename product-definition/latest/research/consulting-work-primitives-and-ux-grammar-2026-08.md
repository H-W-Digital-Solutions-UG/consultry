# Consultry — Consulting Work Primitives and Composable UX Grammar

**Status:** Research synthesis supporting a ratified Product-/UX decision  
**Date:** 2026-08-06  
**Decision owner:** [Ratify the consulting-work primitive and composable UX grammar](../wayfinder/consultry-product-platform-baseline/tickets/ratify-the-consulting-work-primitive-and-composable-ux-grammar.md)

## 1. Question and boundary

Which recurring work primitives describe real consulting and adjacent knowledge work well enough to guide Consultry journeys and UX, without turning the product into a rigid consulting methodology, a universal wizard or a taxonomy users must learn?

This research informs Product and UX semantics. It does not prescribe screens, navigation, agent topology, graph implementation, technical workflow states or a consultancy's proprietary method.

## 2. Evidence synthesis

| Evidence lens | Relevant finding | Consequence for Consultry |
|---|---|---|
| [ICMCI CMC Competence Framework v4.0](https://www.cmc-global.org/sites/default/files/public/icmci_cmc002_competence_framework_version_4.0_0.pdf) and [ISO 20700 toolbox](https://www.cmc-global.org/sites/default/files/public/cmc-global_20700_toolbox_-_1st_edition_2017-09.pdf) | Consulting assignments have a macro lifecycle of Contracting, Execution and Closure. Competent practice includes client/sector research, scoping, relationship and assignment management, analysis and diagnosis, alternative solutions, feasibility, implementation support, result evaluation, corrective action and applying created knowledge. | The assignment lifecycle is a business-level orientation and governance frame, not the application's universal step sequence. Consultry must cover work before, during and after artifact creation. |
| [WKO Berufsbild Unternehmensberatung](https://www.wko.at/information-consulting/unternehmensberatung-buchhaltung-informationstechnologie/unternehmensberatung/berufsbild) and [BDU quality and professional standards](https://www.bdu.de/verband/qualitaet-im-consulting/) | The profession spans dynamic fields and work processes; DACH standards emphasize competent execution, independence, confidentiality and a serious client-collaboration process. | UX composition must remain method- and specialization-neutral while carrying responsibility, confidentiality, competence and client-value constraints. |
| [O*NET Management Analysts](https://www.onetonline.org/link/summary/13-1111.00) | Reported work includes gathering and organizing information, interviewing and observing, analyzing data, developing alternatives, preparing recommendations, consulting and communicating, deciding, prioritizing, monitoring, training and coordinating others. | Artifact authoring is important but cannot be the universal center. Sensemaking, advice, coordination, monitoring and capability transfer are equally legitimate work. |
| [Reinhardt et al., Knowledge Worker Roles and Actions](https://research.ou.nl/en/publications/knowledge-worker-roles-and-actions-results-of-two-empirical-studi/) | Empirical knowledge-work actions include acquisition, analysis, information and expert search, organization, authoring/co-authoring, dissemination, feedback, learning, monitoring, networking and service search. Workers move between roles such as retriever, solver, linker, sharer and tracker. | Search, expert access, monitoring, linking and learning must stay available across journeys; they are not a separate knowledge-module detour. |
| [OMG CMMN](https://www.omg.org/cmmn/) | Knowledge-intensive case activities may occur in unpredictable order as situations evolve; adaptive case management keeps humans in the driver's seat and centers living information and relationships. | The grammar is composable and reversible. Modes may repeat, be skipped or reopen; no mandatory universal wizard is ratified. |
| [APQC Knowledge Flow Process Framework](https://www.apqc.org/resource-library/resource-listing/apqcs-knowledge-flow-process-framework) | Knowledge flows through creating, identifying, collecting, reviewing, sharing, accessing and using. | Retrieval and learning belong inside normal work. Consultry should derive useful knowledge from allowed work data and interactions instead of requiring consultants to maintain a parallel pattern-authoring ritual. |
| [Design Council Framework for Innovation](https://www.designcouncil.org.uk/resources/framework-for-innovation/) and [Klein Data-Frame Theory](https://www.gary-klein.com/data-frame) | Problem work alternates between divergence and convergence; sensemaking fits data to frames and frames to data. | `Understand` is too passive. Consulting needs explicit framing, reframing, investigation, option development and iteration. The Double Diamond is useful within some cases but is not the whole Consultry grammar. |
| [NIST AI RMF Human-AI Interaction](https://airc.nist.gov/airmf-resources/airmf/appendices/app-c-ai-risk-management-and-human-ai-interaction/), [Microsoft Human-AI Interaction Guidelines](https://www.microsoft.com/en-us/research/publication/guidelines-for-human-ai-interaction/) and [Google PAIR Feedback and Control](https://pair.withgoogle.com/guidebook-v2/chapter/feedback-controls/) | Human and AI roles must be explicit; AI support varies with context and risk; users need expectations, feedback, correction, control and graceful fallback. | AI is not a peer process phase. Provenance, proposal-versus-human-disposition, editability, override, recovery and effect authority are cross-cutting interaction obligations in every AI-enabled mode. |

## 3. Main correction to the previous six-pattern model

The earlier list mixed different semantic levels:

- attention and capture;
- cognitive work such as understanding, analysis and creation;
- social work such as collaboration, alignment and handoff;
- authority-bearing work such as deciding, approving and causing effects;
- outcome observation, recovery and organizational learning;
- AI interaction behavior.

This caused five avoidable ambiguities:

1. `Understand / Ground` sounded like passive context consumption and hid framing, investigation and reframing.
2. `Co-produce / Refine` was too broad and hid analysis, option development and artifact production.
3. `Challenge / Validate / Decide` collapsed epistemic review into an authority-bearing decision.
4. `Coordinate / Hand off / Effect` collapsed social coordination into actual internal or external effect.
5. `Recover / Observe Outcome / Learn` made observation and learning look like failure-only behavior instead of ordinary consulting work.

The correction is not a longer user-facing process. It is a layered internal grammar.

## 4. Ratified layered grammar

### Layer A — Assignment lifecycle, not UI navigation

`Shape and Contract → Execute and Deliver → Close and Learn`

This macro lifecycle orients commercial, contractual and professional obligations. Individual journeys can enter, leave or span its phases. It must not become a three-step application shell.

### Layer B — Horizontal attention and access spine

The user can enter responsible work through:

- `My Work / Why now`;
- intentional `Quick Capture`;
- `Search / Ask`;
- notification or deep link;
- a direct Client, Project, Opportunity, Artifact or other work-object context.

These are entry and continuity mechanisms, not Journey Families or mandatory first steps.

### Layer C — Internal consulting-work primitive library

The following primitives are an analytical and design coverage checklist, not product navigation or terminology users must memorize:

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

The library is intentionally broader than a prototype flow. A Journey or screen only uses the primitives needed for its real Job, decision and outcome.

### Layer D — Seven composable UX modes

Screens, model-composed work surfaces and Harness interactions may compose these stable modes:

| UX mode | The user progress it supports | Representative primitives |
|---|---|---|
| **1. Attend & Orient** | Recognize what deserves attention, why now and in which work context. | notice, capture, prioritize, re-enter context |
| **2. Explore & Frame** | Establish the actual question, retrieve relevant sources or experts and expose gaps, assumptions and alternative frames. | search, retrieve, consult, elicit, frame/reframe |
| **3. Analyze & Develop** | Structure evidence, diagnose, compare, synthesize and develop viable hypotheses, options or recommendations. | analyze, compare, diagnose, synthesize, option development |
| **4. Produce & Refine** | Create or adapt the work result and bring it into alignment with the case, corporate knowledge, prior work and Corporate Design. | create, adapt, co-author, source/corpus alignment, refine |
| **5. Review & Commit** | Challenge the basis, determine fitness or materiality and make the required human acceptance, approval or commitment explicit. | challenge, test, review, decide, approve, accept/reject |
| **6. Coordinate & Deliver** | Align contributors, hand work over, cause an authorized bounded effect and support implementation or adoption. | communicate, coordinate, handoff, execute, externalize, train/support |
| **7. Observe & Adapt** | See what happened, handle exceptions, reframe or recover and return learning into future work. | monitor, measure, feedback, adapt, recover, learn/reuse |

These modes are neither modules nor a mandatory sequence. A case may skip a mode, repeat it, branch, loop back or reopen after new evidence. A specific screen can combine adjacent modes when the user's Job stays clear; it should not force unrelated decisions into one surface.

### Layer E — Cross-cutting Product and AI obligations

Every enabled mode inherits the relevant parts of the common Consultry contract:

1. **Context, source and rights:** what the work concerns, what supports it, how current it is and whether it may be used.
2. **Responsibility, authority and effect:** who is doing, reviewing, deciding or accepting; what is only a draft or recommendation; what may actually change internally or externally.
3. **Human-AI legibility and control:** AI contribution versus source fact versus human disposition; inspect, edit, correct, reject, override and manual fallback.
4. **Continuity and outcome:** version and artifact lineage, handoff destination, state/effect actually reached, outcome observation and recoverability.
5. **Corporate alignment:** work products use the allowed corporate corpus, terminology, methods, reusable assets and Corporate Design without silently overriding case-specific evidence or human judgment.

These obligations are design and acceptance dimensions. They must not appear as five permanent panels on every screen.

## 5. Journey and prototype implications

- Journey Families remain the business-progress model; they are not replaced by the seven UX modes.
- The seven modes are a composition grammar for translating a concrete Journey step into interaction.
- `Search / Ask`, expert access and collaboration remain available inside work instead of forcing a route into a separate module.
- Artifact-centered work is first-class but not universal; a case may primarily diagnose, advise, coordinate, decide, monitor or teach.
- Model-composed `SurfaceSpec`s may choose and arrange approved components for the required mode and primitive set, but they inherit the same source, authority, Corporate Design and recovery contracts.
- A prototype rail shows the case-specific narrative route only. It may use a subset or repetition of modes and never becomes the application navigation.
- Detailed screen choreography remains a testable Mock hypothesis until users perform or accurately retell realistic tasks.

## 6. Research confidence and open evidence

The primitive coverage and level separation are strongly triangulated across professional standards, occupational data, knowledge-work research, case-management standards and Human-AI guidance. The exact seven labels and their visual embodiment remain Consultry design hypotheses until tested with target consultancies.

The next research burden is therefore not another general taxonomy. It is task-level validation: for each selected real Journey, identify the user's actual trigger, progress, decision, artifact or effect, required primitive composition, handoffs and comprehension failures.
