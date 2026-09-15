# Relationship Maps

Diese Diagramme erklären Relationships; sie sind kein technisches Architekturdesign.

## 1. Evidenz- und Entscheidungslogik

```mermaid
flowchart LR
    LC["Local Canon / ratified Decision"] --> PD["Product definition"]
    LA["Local artifact finding"] --> CF["Conflict or gap"]
    ER["External research"] --> PF["Problem / mechanism / counterevidence"]
    PF --> IN["Bounded inference"]
    CF --> Q["Deep-grill question"]
    IN --> Q
    Q --> HD["Human decision"]
    HD --> TC["Ticket closure + Canon update"]
    TC --> JR["Journey / requirement / acceptance derivation"]
    JR --> TE["Customer discovery / product experiment"]
    TE --> EV["Product-effect evidence or falsification"]
    EV --> Q
```

## 2. Target-Consultancy Value Mechanism

```mermaid
flowchart LR
    C["Concrete context / job / decision"] --> N["Need for firm or expert knowledge"]
    K["Firm knowledge, project evidence, expertise"] --> M["Knowledge-to-Action mediation"]
    N --> M
    M --> V["Source, credibility, freshness, applicability, conflicts"]
    V --> J["Responsible human judgment"]
    J --> W["Work, handoff or commitment"]
    W --> O["Target-Consultancy outcome"]
    O --> L["Learning / reuse / updated context"]
    L --> K
    M --> B["Blind-spot candidate"]
    B --> J
```

## 3. Actor, Responsibility und Authority

Die folgende Arbeitsfassung spiegelt die in **Define the Product Actor Ontology** ratifizierte fachliche Grenze. Product Relationships bleiben absichtlich ein leichtes Overlay; technische Agent-/Harness-Identitäten werden erst nach dem Product Handoff spezifiziert.

```mermaid
classDiagram
    class Organization
    class OrganizationRelationship {
      relationshipType
      validPeriod
    }
    class Person
    class OrganizationAffiliation {
      affiliationType
      validPeriod
    }
    class ResponsibilityDefinition
    class ResponsibilityProfile
    class ResponsibilityAssignment {
      businessScope
      validPeriod
      state
    }
    class Case
    class CaseParticipation {
      participationType
      acceptedAt
      endedAt
    }
    class AuthorityGrant {
      actionScope
      businessScope
      purpose
      riskLimit
      validPeriod
    }
    class GoverningInstrument {
      instrumentType
      effectivePeriod
      status
    }
    class ProductRelationshipOverlay {
      label
    }

    OrganizationRelationship "*" --> "1" Organization : from
    OrganizationRelationship "*" --> "1" Organization : to
    OrganizationAffiliation "*" --> "1" Person
    OrganizationAffiliation "*" --> "1" Organization
    ResponsibilityProfile "*" o-- "1..*" ResponsibilityDefinition : bundles
    ResponsibilityAssignment "*" --> "1" ResponsibilityDefinition : assigns
    ResponsibilityAssignment "*" --> "1" Person : to
    CaseParticipation "*" --> "1" Person : participant
    Case "1" o-- "*" CaseParticipation
    CaseParticipation "*" ..> "0..*" ResponsibilityAssignment : may reference
    AuthorityGrant "*" --> "1" Person : grantee
    ResponsibilityAssignment "*" --> "0..*" GoverningInstrument : based on
    AuthorityGrant "*" --> "0..*" GoverningInstrument : based on
    ProductRelationshipOverlay "*" --> "1" Person
    ProductRelationshipOverlay "*" --> "1" Organization : in context of
```

`Target Consultancy`, `Client Organization` und weitere Organisationsstellungen klassifizieren kontextuelle `OrganizationRelationship`s; sie erzeugen keine neue Organization-/Person-Identität. `ResponsibilityProfile` ist ein konfigurierbares Bundle für organisatorische Rollen, Jobprofile oder Workspace-Projektionen, nicht die accountable Zuordnung selbst. `ProductRelationshipOverlay` bleibt nur ein Label zur Abgrenzung von Identität, Responsibility, Participation, Authority und Permission; eine feinere Taxonomie ist bewusst nicht modelliert.

Die vier kanonischen Actor-/Responsibility-Konzepte sind `ResponsibilityDefinition`, `ResponsibilityAssignment`, `CaseParticipation` und `AuthorityGrant`. Keines impliziert eines der anderen. Technische Autorisierung wird kontextuell aus Authority, Identität/Product Relationship, Policy, Rechten/Vertraulichkeit, Resource/Action und aktuellem State entschieden; sie ist keine direkte Kante in diesem fachlichen Graphen.

AI bleibt fachlich ein bounded `AIExecutionSubject`: Sie darf einem human-owned Case zurechenbar beitragen oder policy-begrenzt ausführen, aber keine `ResponsibilityAssignment`, accountable Case Ownership, menschliche Approval oder bindende Business Authority besitzen. Diese Grenze setzt keine technische Identity-/Principal-/Runtime-Struktur voraus.

## 4. Role Compression ohne Authority Collapse

```mermaid
flowchart TB
    P["One boutique Partner / Person"] --> A1["Assignment: Firm / P&L responsibility"]
    P --> A2["Assignment: Account / opportunity responsibility"]
    P --> A3["Assignment: Engagement / delivery responsibility"]
    P --> A4["Assignment: Knowledge / quality responsibility"]
    P --> O["Product Relationship: Economic Buyer"]
    P --> C1["Proposal Case Participation: Owner + Author"]
    P --> C2["Proposal Case Participation: Approver nominee"]
    P --> G["Authority Grant: defined approval / binding scope"]
    C1 --> S["SoD / risk check on the actual Person"]
    C2 --> S
    G --> S
    S -->|"allowed"| D["decision / effect"]
    S -->|"independent review required"| X["second person or explicit governed exception"]
```

## 5. Whole-Product Business Grammar

```mermaid
stateDiagram-v2
    [*] --> Triggered
    Triggered --> Framed: sense / interpret / contextualize
    Framed --> Waiting: missing context or external input
    Waiting --> Framed: context supplied
    Framed --> Decided: responsible decision
    Framed --> AcceptedWork: work request accepted
    Decided --> ClosedNoAction: reject / defer / no action
    Decided --> CommittedWork: authorize action
    AcceptedWork --> CommittedWork
    CommittedWork --> InWork
    InWork --> Waiting: blocked / client input / review
    InWork --> Recovery: failed obligation or effect
    Recovery --> InWork: revise / retry / reassign
    Recovery --> ClosedAborted: stop
    InWork --> EffectReady: output and obligations complete
    EffectReady --> InWork: reject / revise
    EffectReady --> Effected: human/policy admission
    Effected --> OutcomeObserved
    OutcomeObserved --> Learned
    Learned --> [*]
```

`Observation`, `Signal`, `Opportunity`, `ChangeCase`, `Project`, `ReusableAsset` und andere Domain Objects implementieren passende Branches; sie werden nicht in jeden Job gezwungen.

## 6. Opportunity-to-Project als gekoppelte Lifecycles

```mermaid
flowchart TB
    subgraph Commercial["Commercial commitment lifecycle"]
      N["Need / Opportunity"] --> Q["Qualify / No-Bid"]
      Q --> F["Engagement framing"]
      F --> C["Concept / Proposal draft"]
      C --> IA["Internal approval"]
      IA --> EI["External issue"]
      EI --> NG["Negotiation / revise / hold"]
      NG --> AC["Accepted"]
      NG --> LS["Lost / withdrawn"]
    end
    subgraph Activation["Engagement and project activation lifecycle"]
      AC --> BA["Binding basis: ClientContract / SOW / authorized change"]
      BA --> DR["Delivery readiness: owner, team, capacity, context, constraints"]
      DR --> PA["Project activation"]
      PA --> FH["First delivery handoff"]
      DR --> RV["revise / wait / abort"]
      RV --> BA
    end
```

## 7. Consultry Core als Continuity Backbone

```mermaid
flowchart TB
    ID["Identity & relationship continuity"] --> C["Consultry Core"]
    AT["Attention & context continuity"] --> C
    RA["Responsibility & authority continuity"] --> C
    DC["Decision & commitment continuity"] --> C
    WH["Work & handoff continuity"] --> C
    EV["Evidence & validation continuity"] --> C
    OL["Outcome & learning continuity"] --> C
    C --> G["Growth / commercial module"]
    C --> P["Project / delivery module"]
    C --> K["Knowledge / reuse module"]
    C --> PE["People / capability module"]
    C --> O["Operations / finance module"]
    CG["Context Graph"] -. "substrate" .-> C
    SG["Core Skill Graph"] -. "executable skills" .-> C
    MB["Model Bridge"] -. "policy/eval routed models" .-> C
    HA["Harness"] -. "bounded execution client" .-> C
```

## 8. AI als Bridge und als neue Blind-Spot-Quelle

```mermaid
flowchart LR
    AI["AI mediation"] --> P1["adds missing functional perspective"]
    AI --> P2["retrieves and combines context"]
    AI --> P3["drafts, challenges or validates"]
    AI --> R1["plausible error / jagged frontier"]
    AI --> R2["homogenization / over-alignment"]
    AI --> R3["automation bias / false assurance"]
    AI --> R4["review and coordination burden"]
    P1 --> O["responsible human disposition"]
    P2 --> O
    P3 --> O
    R1 --> O
    R2 --> O
    R3 --> O
    R4 --> O
    O --> A["accept / edit / investigate / reject / abstain / escalate / stop"]
```

## 9. Execution und Validation

```mermaid
flowchart LR
    T["Contextual task"] --> EX["Execution case"]
    EX --> ST["attempts, states, tools, skills, actors, effects"]
    ST --> OUT["output / proposed effect"]
    OUT --> VC["Validation case"]
    OB["output, process, policy and evidence obligations"] --> VC
    EV["evidence + counterevidence + uncertainty"] --> VC
    VC --> VR["validation result: satisfied / challenged / unresolved"]
    VR --> HD["authorized human disposition"]
    HD -->|"approve/admit"| EF["binding effect"]
    HD -->|"revise/reject/abstain"| EX
```

## 10. Empfohlene Decision Dependency Chain

```mermaid
flowchart TD
    A["Actor ontology"] --> R["Responsibility and Job families"]
    R --> RC["Role Compression and SoD"]
    RC --> AU["Case participation and Authority"]
    AU --> HC["Human-AI responsibility and oversight contract"]
    AU --> OG["Whole-product operating grammar"]
    OG --> HH["Handoff / commitment / recovery contract"]
    HH --> CC["Consultry Core continuity obligations"]
    CC --> VP["Invariant / variation principles"]
    VP --> JP["Canonical journey portfolio"]
    JP --> OP["Opportunity-to-Project lifecycle"]
    JP --> JF["Detailed journey families"]
    HC --> JF
    OP --> JF
    JF --> BD["Business-domain and lifecycle canon"]
    BD --> CV["Capability / feature / requirement coverage"]
    CV --> AC["Outcome / acceptance / learning contracts"]
    VP --> IJ["Implementation / onboarding / change journey"]
    IJ --> BD
    AC --> HZ["Validation and MVP business slice"]
    HZ --> RE["Source reconciliation and handoff"]
```
