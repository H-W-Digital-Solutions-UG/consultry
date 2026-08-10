# Consultry Product and Business Domain

This glossary contains the canonical product and business-domain language that has been ratified in the Product-first Wayfinder. Detailed decisions and their rationale remain in the Wayfinder tickets under `wayfinder/`.

## Organizations and people

**Target Consultancy**:
The consultancy that buys and introduces Consultry and whose operating work Consultry supports.
_Avoid_: Customer, account, client when the organizational level is unclear

**Client Organization**:
An organization served by the Target Consultancy; it is not a Consultry customer or internal Consultry user merely because it participates in consulting work.
_Avoid_: Consultry customer, account

**Organization**:
A stable organizational identity independent of whether it currently acts as Target Consultancy, Client Organization, partner, vendor, or another contextual party.
_Avoid_: Treating target, client, or external status as an immutable organization subtype

**Person**:
A stable natural-person identity across organizational affiliations, product relationships, and case participations.
_Avoid_: Internal person, client person, Consultry user as identity types

**Organization Affiliation**:
A time-bound relationship that states how a Person is affiliated or collaborates with an Organization in a defined context.
_Avoid_: Inferring affiliation from login, product access, or a job title

**Product Relationship Overlay**:
A lightweight contextual label for how a Person relates to Consultry's purchase, adoption, use, or administration; its finer taxonomy remains undefined until a concrete journey or requirement needs it.
_Avoid_: Person type, job title, case participation, authority, permission

## Responsibility, participation, and authority

**Responsibility Definition**:
A stable business obligation or outcome that must be owned, independent of person, job title, department, case participation, skill, or permission.
_Avoid_: Role, job title, permission

**Responsibility Assignment**:
A contextual and time-bound assignment of a Responsibility Definition to a Person for a defined organizational or business scope.
_Avoid_: Job title, team membership

**Responsibility Profile**:
A configurable bundle of Responsibility Definitions used by a consultancy to express a recurring organizational role, job profile, or workspace projection.
_Avoid_: Treating the profile as the accountable person or as automatic authority

**Consultancy Role Context**:
A non-technical market, discovery, sales, demo, or UX narrative lens that relates recognizable consultancy roles to recurring Jobs and decisions without becoming a product invariant.
_Avoid_: Technical role type, permission model, required entity, fixed workspace taxonomy

**Case Participation**:
A Person's concrete and time-bound involvement in a Case; participation may reference a Responsibility Assignment but neither presupposes nor creates responsibility, authority, or access.
_Avoid_: Stakeholder, role when the concrete participation is meant

**Authority Grant**:
A concrete, revocable, and bounded business authorization with a traceable issuer or basis, grantee, allowed action or effect, scope, purpose, constraints, and validity.
_Avoid_: Permission, access, unqualified mandate

**Governing Instrument**:
A normative source that establishes or constrains responsibilities, authority, duties, or prohibitions, such as a contract, client instruction, project charter, policy, management decision, or regulation.
_Avoid_: Mandate, because Mandat also denotes a consulting engagement

**Technical Authorization**:
A contextual determination of whether a concrete subject may perform a requested action on a resource now; it neither creates nor proves business responsibility or authority.
_Avoid_: Authority Grant, Responsibility Assignment

**AI Execution Subject**:
A non-human contributor that may assist or execute only within a human-accountable Case and applicable authority and policy; it cannot own accountable responsibility, human approval, or binding business authority.
_Avoid_: Person, accountable owner, approver, autonomous business actor

**Consultry Harness Integration Contract**:
The thin, runtime-neutral and product-specific Platform-Kernel obligation that turns a bounded Contextual Task into a versioned engineered Harness Profile and a job-scoped execution contract while keeping Runtime implementation, Model routing, Business Authority, Validation, Human Decision, and Effect Admission separate. Guided App and optional Harness clients may invoke the same contract; no Harness can create additional authority or write binding Domain State directly.
_Avoid_: General framework, agent framework, Hermes/Pi fork, unrestricted runtime, technical Harness App

## Product scope and traceability

**Functional Product Scope**:
The Target-Consultancy problems, responsibilities, jobs, decisions, business flows, handoffs, and outcomes for which Consultry accepts a defined support obligation.
_Avoid_: Feature list, module catalog, technical scope

**Business-Technical Product Scope**:
The implementation-independent, externally observable product behavior required to fulfill the Functional Product Scope, including its business-object, state, evidence, human-decision, authority, source, and recovery boundaries.
_Avoid_: Solution architecture, runtime design, technology stack

**Scope Trace**:
A trace from a validated problem, trigger, or Blind Spot in a concrete business situation through its recurring Job, responsible ownership, and Business Flow or Handoff to Required Product Behavior and its Acceptance Evidence.
_Avoid_: Treating a Mermaid diagram, module, workspace, capability, or feature as scope by itself

**Required Product Behavior**:
An implementation-independent statement of what Consultry must make possible, visible, reliable, or controlled for a responsible person in a business situation.
_Avoid_: UI feature, agent implementation, model behavior

**Acceptance Evidence**:
Observable business evidence that Required Product Behavior produced the specified progress or outcome under its applicable boundaries.
_Avoid_: Technical test result when business acceptance is meant

**Business Coverage View**:
A breadth-first navigation view grouping recurring Target-Consultancy situations and Jobs that change a distinct business progress or outcome. Each Scope Trace has one primary view and may cross into others through explicit Handoffs; a view is neither a strict MECE partition nor a role, module, workspace, bounded context, or technical architecture.
_Avoid_: Responsibility Family, department, product module, technical domain

**Anchor Scope Trace**:
A representative Scope Trace used to test Whole-Consultancy coverage across both operating archetypes before detailed Journeys and Requirements are derived.
_Avoid_: Feature, user story, canonical Journey, implementation task

**Consultry Adoption and Evolution Lane**:
The enabling Product Lifecycle that brings a Target Consultancy to its first accepted Value Case and governs later product-policy, process, method, source and configuration changes. It is not a peer Business Coverage View or an independent proof of Target-Consultancy value.
_Avoid_: Consultancy operating function, seventh business value stream, technical deployment pipeline

**Journey Family**:
A portfolio-level path of responsible user progress from a recognizable business trigger to an observable completion state across one or more Business Coverage Views.
_Avoid_: Product module, navigation area, fixed role, screen flow, technical workflow

**Reference Thread**:
A concrete Scenario Thread through one or more Journey Families used to challenge shared Product Contracts, negative paths and handoffs before full Journey detail is derived.
_Avoid_: Complete Journey Family, demo script, universal lifecycle

**Journey Specification Depth**:
The explicit planning classification `Reference now`, `Canonical later`, or `Horizon contract`, stating how much Journey detail is required at the current Product-definition gate.
_Avoid_: Product scope, implementation phase, evidence strength

## Challenge and validation language

**Challenge Admission Contract**:
The business rule that permits a source- and subject-bound Blind-Spot or Rebuttal candidate to claim responsible attention after material evidence/context change or an intentional human challenge request, while leaving materiality and disposition human-owned.
_Avoid_: Mandatory review gate, generic devil's-advocate trigger, AI materiality decision

**Challenge Assessment**:
A human-owned, evidence-bound conclusion for a concrete claim of an exact Challenge Subject version: `substantiated`, `refuted-with-evidence`, or `inconclusive`. It remains separate from Materiality, Response, Authority, and Resolution Status.
_Avoid_: AI verdict, approval, risk acceptance, non-material as refuted

**Challenge Materiality Assessment**:
A human-owned determination of whether a substantiated or potentially valid Challenge can materially affect the current decision, obligation, acceptance criterion, work effect, or outcome: `material`, `non-material-in-current-context`, or `undetermined`.
_Avoid_: Finding correctness, automatic priority score, permanent irrelevance

**Responsible Response**:
An authority-bound human decision about how a Challenge is handled, expressed through one or more owned commitments with rationale, affected scope/effect, conditions, timing, and Revalidation or Reopen triggers. A Response does not alter the Challenge Assessment; Risk Acceptance and Waiver/Deviation remain separately authorized decisions.
_Avoid_: Flat disposition enum, unqualified accept or stop, AI-owned decision

**Challenge Resolution Status**:
A lightweight orientation for what remains open in a Challenge: `open`, `waiting`, `response-in-progress`, `revalidation-due`, or `closed`. `Reopened` is a history-preserving event, not an overwrite of the prior Assessment or Decision.
_Avoid_: Approval status, universal Case state machine, treating defer or escalation as resolution

**Single-Human Responsible Completion**:
The product contract that permits one accountable human to complete an AI-assisted Challenge and Validation flow and take responsibility for the Consultancy Result within bounded Authority. A second human is required only by an applicable Governing Instrument, contract, Client instruction, regulation, or explicit Authority/Separation-of-Duties rule; AI assistance never counts as independent human review or business authority.
_Avoid_: Universal four-eyes rule, autonomous AI accountability, reduced Evidence or Authority requirements

**Decision and Effect Authority Spine**:
The minimum cross-case relationship that keeps, for each material business decision or effect, its accountable human Responsibility, supporting Authority basis, and—where Consultry mediates the effect—the actual authorizing or acting Person separately attributable. One Person may carry all three in a role-compressed Boutique; an authoritative external instrument may evidence an external decision without inventing a Client user identity.
_Avoid_: One universal Case owner or permission envelope, AI authority, mandatory additional approver

## Commercial and engagement language

**Qualified Opportunity**:
A human-accepted commercial pursuit with a responsible owner, retained source and context, sufficient fit and materiality basis, and an explicit next decision. It is the earliest common point at which an existing-client need and a net-new Tender enter the shared Opportunity-to-Project Reference Thread.
_Avoid_: Raw Signal, Tender, unqualified lead, automatically generated opportunity

**Follow-on Project**:
A distinct Project arising from additional need at an existing Client Organization or during active Client Work, with its own responsible commitment, Readiness, activation, Delivery Handoff and outcome closure while retaining lineage to the originating relationship and work.
_Avoid_: Treating every extension, ChangeCase, or additional task as a new Project

## Artifact alignment

**Work Artifact**:
The stable business identity of a responsibly produced Consultancy work result that is carried through exact, traceable versions. A revision creates a successor version with lineage; file copies, renderings, synchronization records and export effects do not by themselves redefine the Work Artifact's business identity.
_Avoid_: Treating every file as a new artifact, overwriting version lineage, assuming storage or Aggregate design

**Corporate Artifact Alignment**:
A cross-cutting Required Product Behavior that keeps synchronized and newly created Work Artifacts consistent with applicable approved Target-Consultancy knowledge, methods, terminology, proof, brand and design rules, and release constraints while preserving source lineage and human responsibility.
_Avoid_: Corporate alignment, formatting, brand generation, CMS when the broader artifact obligation is meant

**Knowledge Alignment**:
The independent evaluation of whether a Work Artifact is current, evidence-grounded, and semantically consistent with the applicable approved knowledge, terminology, methods, offers, and proof of the Target Consultancy.
_Avoid_: Retrieval relevance, visual consistency

**Brand and Corporate Design Alignment**:
The independent evaluation of whether a Work Artifact follows the applicable approved brand voice, language, template, structure, and visual-design rules of the Target Consultancy.
_Avoid_: Knowledge correctness, approval

**Governance and Release Alignment**:
The independent evaluation of whether a Work Artifact satisfies its applicable confidentiality, intellectual-property, usage-right, provenance/citation, source-use, approval, and external-use constraints.
_Avoid_: Knowledge correctness, Corporate Design conformity

**Corpus Admission**:
A separate responsible decision that permits an exact new or correcting knowledge version to serve as approved Target-Consultancy knowledge for a defined future use. Synchronization, ingestion, indexing, Work-Artifact use, Corporate Artifact Alignment and `ReusableAsset` release do not imply Corpus Admission.
_Avoid_: Automatic learning, silent corpus mutation, technical ingestion as approval

## Relationships

- A **Scope Trace** follows `validated problem, trigger, or Blind Spot in a concrete business situation -> recurring Job -> responsible ownership and Business Flow or Handoff -> Required Product Behavior -> Acceptance Evidence`.
- The six **Business Coverage Views** are `Win & Commit Client Work`, `Deliver & Assure Client Outcomes`, `Use, Learn & Reuse Expertise`, `Mobilize People & Develop Capability`, `Operate the Consultancy`, and `Steer the Firm & Portfolio`; **Consultry Adoption and Evolution Lane** remains a separate enabler.
- A **Journey Family** may cross several **Business Coverage Views**; each Anchor Scope Trace retains one primary Coverage View and names cross-family or cross-view movement as a Handoff.
- A **Reference Thread** tests a bounded concrete scenario and never stands in for the complete **Journey Family**.
- An existing-client Observation or Signal and a net-new Tender require their own responsible qualification; neither becomes a **Qualified Opportunity** automatically, and their source-specific obligations remain traceable after convergence.
- The existing-client Entry Anchor nominally pursues a distinct **Follow-on Project**; absorption into active work, a ChangeCase, Hold, or No Action remain explicit alternate dispositions.
- Personal/Expert Work and Work Artifacts, Corporate Artifact Alignment, Knowledge-to-Action/Blind-Spot/Rebuttal, Responsibility/Authority, Source/Evidence/Rights, Human-AI, Recovery and archetype variation are dimensions of an **Anchor Scope Trace**, not additional **Business Coverage Views**.
- **Business-Technical Product Scope** refines **Functional Product Scope** without choosing a module, workspace, agent, model, graph, Harness, integration, or other solution mechanism.
- **Responsibility Assignment**, **Case Participation**, **Authority Grant**, and **Technical Authorization** constrain a **Scope Trace** but are not interchangeable scope layers.
- A **Consultry Harness Integration Contract** may support several engineered Harness Profiles and Runtime Adapters without becoming a general framework. A specific Runtime, model, tool availability, or Harness client neither defines the Product Contract nor expands Responsibility, Authority, Source, Validation, or Effect boundaries.
- A **Consultancy Role Context** may illustrate a **Scope Trace** for marketing, discovery, sales, demo, or UX communication, but it neither constrains the technical model nor creates responsibility, authority, permission, or a required module.
- One Person may work in several locally named role contexts, and one local job title may combine several **Responsibility Assignments** without merging their ownership or authority boundaries.
- A rollout horizon selects the coverage or depth of **Required Product Behavior**; it does not redefine the long-term product boundary.
- **Corporate Artifact Alignment** applies to synchronized and newly created Work Artifacts across multiple Responsibilities rather than defining a separate Responsibility Family or product module.
- **Knowledge Alignment**, **Brand and Corporate Design Alignment**, and **Governance and Release Alignment** are independent evaluations; satisfying one does not imply either of the others.
- Synchronizing or generating a Work Artifact does not make it approved knowledge; any accepted learning enters the Target Consultancy's knowledge corpus through a separate responsible decision.
- **Corporate Artifact Alignment** informs and evaluates an exact **Work Artifact** version for a named purpose; human disposition and any export, writeback or other effect remain separate, and Alignment never implies an unreviewed change to an originating or authoritative record.
- A **Challenge Assessment** and its **Challenge Materiality Assessment** answer different questions: a substantiated Challenge may be non-material in the current context, while an inconclusive Challenge may still require a protective Response.
- A **Responsible Response**, scoped Waiver/Deviation, or Residual Risk Acceptance never changes the evidential conclusion of the **Challenge Assessment**; linked Risk, Exception, Change, Recovery, or Waiver Cases retain their own closure obligations.
- **Challenge Resolution Status** reports remaining work only; `defer`, `handoff`, and `escalate` are non-terminal, and an implemented correction closes only after required Revalidation.
- **Single-Human Responsible Completion** allows role-compressed work without merging Responsibility, Authority, Evidence, or Client-decision boundaries; `responsible self-review with AI assistance` and `independent human review` remain distinguishable provenance facts.
- A **Case** may contain several material decisions and effects with different accountable Responsibilities and Authority bases over time. **Case Participation**, review, expertise, AI contribution, and **Technical Authorization** never create a universal Case-level authority envelope; missing Responsibility or Authority permits preparation but not responsible or authorized completion of the affected decision or effect.
