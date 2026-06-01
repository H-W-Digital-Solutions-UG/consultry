# KnowledgeSources.md

**Working purpose:** source map for the emerging theory currently called **Validation-Bounded Skill Agency** / **Graph-Calibrated Codification**.

**Generated:** 2026-05-13

This document is not a finished bibliography. It is a structured research substrate: a map of papers, ontologies, mathematical concepts, methods, and critical fault lines that can later become a formal *Related Work*, *Background*, and *Formal Substrate* section.

---

## 0. Current Theory Spine

### 0.1 Core claim

The current theory generalizes the original software-development frame into a broader theory of **skill**:

> A skill is not merely a reusable procedure. A skill is a boundedly validatable transformation of intent into effects under domain obligations.

The generalized flow is:

```text
Human / strategic intent
  -> domain concepts
  -> obligations / constraints / standards
  -> affordances / actions / procedures
  -> effects in the world
  -> validation evidence / feedback
  -> validation boundary
  -> human or expert adjudication
  -> calibration / consolidation
```

For software development, this specializes to:

```text
Business intent
  -> domain concepts
  -> software obligations
  -> interfaces / invariants / policies
  -> typed implementation and effect graph
  -> validation cascade
  -> adjudication frontier
  -> trace / telemetry / calibration
```

Software remains the clean first case because code gives relatively explicit artifacts: types, tests, traces, program graphs, execution effects, runtime telemetry, and failure evidence.

### 0.2 Architectural separation principle

The emerging architecture should be described as a separation of roles:

```text
Graph / ontology       = auditable world model of the skill or project
GNN / graph transformer = machine perception over obligations, effects, evidence, and boundary
Manifold alignment     = compatibility layer into model-native representation geometry
LLM / planner / policy = codification or action actuator
Validators            = authority layer for discharging obligations
Human / expert         = originator of intent and adjudicator at semantic or strategic frontier
```

Critical rule:

```text
GNN / LLM may propose, estimate, route, retrieve, or generate.
Only explicit validators and human / expert adjudications discharge obligations.
```

Formal sketch:

\[
\mathcal{G}^{skill}_t = (V_t, E_t, \tau, \lambda, x_t, s_t)
\]

\[
\kappa: I \times C \rightarrow O
\]

\[
\mu: O \rightarrow A \cup E
\]

\[
\rho: O \times E \times \mathcal{V} \rightarrow O_{\text{discharged}}
\]

\[
B_t = O_t \setminus O_{\text{discharged}}
\]

\[
H_t \subseteq B_t
\]

where:

- \(I\): intent / goal
- \(C\): concepts
- \(O\): obligations / constraints / claims
- \(A\): actions / affordances / procedures
- \(E\): expected or observed effects
- \(\mathcal{V}\): validators / feedback operators
- \(B_t\): validation boundary
- \(H_t\): human/expert adjudication frontier

### 0.3 Non-negotiable critical guardrails

1. **The graph does not contain meaning itself.** It contains explicit claims about meaning, their relations, and their evidentiary status.
2. **A GNN is not a logic engine.** It estimates boundary and relevance; it does not prove obligations.
3. **An LLM is not an authority layer.** It codifies, verbalizes, generates, routes, or packages evidence.
4. **Human adjudication is not ground truth.** It is a provenance-bearing normative decision under context, time, risk, and incomplete information.
5. **More context is not more understanding.** Long context and memory stores can increase lookup capacity while leaving validation and abstraction unsolved.
6. **The validation boundary is the central object.** The theory is novel only if it makes the boundary explicit, graph-represented, and empirically calibratable.

---

## 1. Internal Working Memory / Origin Sources

### 1.1 Uploaded working memory: Validation-Bounded Agency

**Source:** user-uploaded `memory.pdf` working memory.

**Core contents captured there:**

- Software faces a verification crisis: generation is cheap, validation is bounded by human attention.
- Code 1.0 served as a discovery mechanism: humans discovered missing intent, edge cases, invariants, and ambiguity by writing code.
- Spec-driven development removes that discovery mechanism unless it is structurally replaced.
- Original triad: **agent acts, system perceives, human adjudicates**.
- Six moves:
  1. legibility as a new code quality axis,
  2. validation cascade,
  3. reasoning trace as first-class artifact,
  4. typed effect graph substrate,
  5. validation-tier hierarchy,
  6. human as judgment broker.
- Formal substrate: typed effect hypergraph
  \[
  G=(N,E_{data},E_{ctrl},E_{eff})
  \]
- Key formal concepts:
  - local validatability,
  - non-local validatability,
  - non-validatability,
  - adjudication frontier,
  - triggers as graph predicates.

**Role in current theory:** this is the software-specific seed. The current generalization lifts it from **software development** to **skills** while preserving the boundary-calibration logic.

**Critical note:** keep the software substrate as the first worked domain. Do not overgeneralize before showing that software actually works.

---

## 2. Agent Skills, Proactivity, and Skill Generalization

### 2.1 A Comprehensive Survey on Agent Skills: Taxonomy, Techniques, and Applications

**Reference:** Yingli Zhou, Shu Wang, Yaodong Su, Wenchuan Du, Yixiang Fang, Xuemin Lin. *A Comprehensive Survey on Agent Skills: Taxonomy, Techniques, and Applications.* arXiv:2605.07358, 2026.

**URL:** https://arxiv.org/abs/2605.07358

**Use in framework:** establishes that “agent skills” are already a recognized research object: reusable procedural artifacts that coordinate tools, memory, and runtime context under task constraints. Useful as the main prior for the generalized skill framing.

**How we differ:** existing agent-skill work largely asks how skills are represented, acquired, retrieved, composed, evolved, and reused. Our question is orthogonal:

> Which obligations of a skill can be mechanically discharged, which can only be estimated, and which require human or expert adjudication?

**Potential citation role:** Related Work: *Agent Skills and Capability Management*.

---

### 2.2 Agentic Coding Needs Proactivity, Not Just Autonomy

**Reference:** Nghi D. Q. Bui, Georgios Evangelopoulos. *Agentic Coding Needs Proactivity, Not Just Autonomy.* Google Labs. arXiv:2605.06717, 2026.

**URL:** https://arxiv.org/abs/2605.06717

**Use in framework:** connects directly to the “system summons the human” idea. Their taxonomy of reactive, scheduled, and situation-aware proactive coding agents can be reinterpreted as frontier-aware interruption policies.

**Integration into our ontology:**

\[
\pi_{insight}: (\mathcal{G}_t, B_t, H_t) \rightarrow \{interrupt, defer, log, ignore\}
\]

**Critical reframing:**

> Proactivity without a validation boundary becomes interruption spam.

**Potential citation role:** Related Work: *Proactive Agents and Human Interruption Policies*.

---

### 2.3 Options Framework for Skills

**Reference:** Sutton, Precup, Singh. *Between MDPs and Semi-MDPs: A Framework for Temporal Abstraction in Reinforcement Learning.* Artificial Intelligence, 1999.

**URL:** https://doi.org/10.1016/S0004-3702(99)00052-1

**Use in framework:** defines skills/options as temporally extended actions with initiation set, policy, and termination condition:

\[
\omega = (\mathcal{I}, \pi, \beta)
\]

**Our extension:** add obligations, expected effects, validators, validation boundary, and adjudication:

\[
\omega = (\mathcal{I},\pi,\beta,O,E,\mathcal{V},B,H)
\]

**Critical note:** RL options model execution structure, not epistemic/validation boundary.

---

### 2.4 Hierarchical Task Network Planning

**Reference:** Erol, Hendler, Nau. *HTN Planning: Complexity and Expressivity.* AAAI, 1994. Also Nau et al. *SHOP2: An HTN Planning System.* JAIR, 2003.

**Use in framework:** decomposes high-level tasks into lower-level executable tasks under methods and constraints. Good precedent for skill decomposition.

**Our extension:** task decomposition is insufficient; each subtask should carry obligations and validation status.

---

### 2.5 Gibsonian Affordances

**Reference:** James J. Gibson. *The Ecological Approach to Visual Perception.* Houghton Mifflin, 1979.

**Use in framework:** affordances are what the environment makes actionable. For skill agency, action possibilities should be represented as graph nodes linked to state, concepts, constraints, and expected effects.

**Formula role:**

\[
\alpha: S \times C \rightarrow A_f
\]

where \(A_f\) are affordances exposed by a state and conceptual framing.

**Critical note:** affordances are relational: not purely in the object, not purely in the agent.

---

## 3. Text-Graph, Graph-RAG, and Evidence Flow

### 3.1 Text-Graph Synergy: A Bidirectional Verification and Completion Framework for RAG

**Reference:** Jiarui Zhong, Hong Cai Chen. *Text-Graph Synergy: A Bidirectional Verification and Completion Framework for RAG.* arXiv:2605.05643, 2026.

**URL:** https://arxiv.org/abs/2605.05643

**Use in framework:** highly relevant for moving between textual human concepts and graph-structured evidence. TGS-RAG addresses failures in text-RAG and graph-RAG by bidirectional verification and completion.

**How we use it:** as a method for synchronizing textual evidence and graph paths.

**How we differ:** TGS-RAG improves retrieval/evidence flow. Our theory concerns obligation discharge and validation boundaries.

```text
TGS-RAG:
Text <-> Graph for retrieval and multi-hop evidence

Our framework:
Intent -> Obligations -> Effects -> Validators -> Boundary -> Adjudication
```

**Important correction:** user-supplied arXiv `2508.00459` is not this paper; it is *Thinking Machines: Mathematical Reasoning in the Age of LLMs*.

---

### 3.2 Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks

**Reference:** Lewis et al. *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.* arXiv:2005.11401, 2020.

**URL:** https://arxiv.org/abs/2005.11401

**Use in framework:** baseline for retrieving external evidence into a generation model.

**Critical note:** RAG is context supply, not validation authority. RAG can retrieve evidence; it cannot by itself discharge obligations.

---

### 3.3 GraphGPT: Graph Instruction Tuning for Large Language Models

**Reference:** Tang et al. *GraphGPT: Graph Instruction Tuning for Large Language Models.* arXiv:2310.13023, 2023.

**URL:** https://arxiv.org/abs/2310.13023

**Use in framework:** precedent for aligning graph representations with LLMs through instruction tuning and graph-text alignment.

**Critical note:** relevant for graph-to-language compatibility, not sufficient for validation boundary calibration.

---

### 3.4 LLaGA: Large Language and Graph Assistant

**Reference:** Chen et al. *LLaGA: Large Language and Graph Assistant.* arXiv:2402.08170, 2024.

**URL:** https://arxiv.org/abs/2402.08170

**Use in framework:** important for mapping graph nodes/subgraphs into LLM-compatible token/embedding sequences.

**Critical note:** shows architectural compatibility between graph data and LLMs, but does not solve “which obligations are validly discharged?”

---

### 3.5 GALLa: Graph-Aligned Large Language Models for Code Understanding

**Reference:** *Graph-Aligned Large Language Models for Code Understanding.* arXiv:2409.04183, 2024.

**URL:** https://arxiv.org/abs/2409.04183

**Use in framework:** code-specific precedent for injecting program graph structure into code LLMs, especially semantic structures such as dataflow.

**Critical note:** useful as software-domain method; still mostly about representation and code understanding, not boundary authority.

---

### 3.6 LLMxCPG: Context-aware Vulnerability Detection through Code Property Graph-guided LLMs

**Reference:** *LLMxCPG: Context-aware Vulnerability Detection through Code Property Graph-guided LLMs.* arXiv:2507.16585, 2025.

**URL:** https://arxiv.org/abs/2507.16585

**Use in framework:** evidence that Code Property Graphs can constrain and improve LLM context for program-analysis tasks.

**Critical note:** good support for the code/effect-graph layer, not for full intent-to-obligation ontology.

---

## 4. Graph Neural Networks, Graph Transformers, and Machine Perception

### 4.1 Relational Inductive Biases, Deep Learning, and Graph Networks

**Reference:** Battaglia et al. *Relational Inductive Biases, Deep Learning, and Graph Networks.* arXiv:1806.01261, 2018.

**URL:** https://arxiv.org/abs/1806.01261

**Use in framework:** primary conceptual justification for a graph network as a machine-perception layer: entities, relations, and global state.

**Role:** supports claim that graph networks provide a better inductive bias for intent-obligation-effect structures than flat text alone.

**Critical note:** graph networks approximate relational reasoning; they are not formal logic.

---

### 4.2 Graph Attention Networks

**Reference:** Veličković et al. *Graph Attention Networks.* arXiv:1710.10903, 2017.

**URL:** https://arxiv.org/abs/1710.10903

**Use in framework:** typed attention over relations can be adapted for obligation/evidence weighting.

**Potential role:** attention over graph neighborhoods:

\[
\alpha_{uv}^{r,l}
= \operatorname{softmax}_{u \in \mathcal{N}_r(v)}
(a_r^\top [W_qh_v || W_kh_u || e_r])
\]

---

### 4.3 Graphormer

**Reference:** Ying et al. *Do Transformers Really Perform Bad for Graph Representation?* arXiv:2106.05234, 2021.

**URL:** https://arxiv.org/abs/2106.05234

**Use in framework:** supports using graph transformers when long-range graph dependencies exceed local message-passing limits.

**Critical note:** for global intent-to-effect graphs, pure local message passing may be insufficient; graph transformer or hierarchical graph pooling likely needed.

---

### 4.4 Heterogeneous Graph Neural Networks

**General approach:** relation-typed message passing across different node and edge types.

**Use in framework:** central implementation candidate for the Skill Graph:

```text
Intent, Concept, Obligation, Affordance, Action, Effect, Validator, Evidence, Boundary, Adjudication, Trace
```

**Critical note:** heterogeneity is non-optional. A homogeneous GCN would erase the distinction between, for example, `induces`, `realizes`, `violates`, and `validated_by`.

---

## 5. LLM Architecture, Adaptation, and Steering

### 5.1 LoRA: Low-Rank Adaptation of Large Language Models

**Reference:** Hu et al. *LoRA: Low-Rank Adaptation of Large Language Models.* arXiv:2106.09685, 2021.

**URL:** https://arxiv.org/abs/2106.09685

**Use in framework:** possible actuator after graph perception. The graph/GNN may route or condition low-rank adapters.

**Correct role:** LoRA is not the ontology. It is one possible mechanism by which graph state influences generation.

**Formula:**

\[
\Delta W_l = \frac{\alpha}{r}B_lA_l
\]

Graph-conditioned mixture:

\[
\Delta W_l(\mathcal{G}_t)=\sum_k \pi_k(\mathcal{G}_t)B_{l,k}A_{l,k}
\]

---

### 5.2 Prefix-Tuning

**Reference:** Li and Liang. *Prefix-Tuning: Optimizing Continuous Prompts for Generation.* arXiv:2101.00190, 2021.

**URL:** https://arxiv.org/abs/2101.00190

**Use in framework:** graph state can be projected into virtual prefix tokens:

\[
P_t = W_p \operatorname{GNN}_\phi(\mathcal{G}_t)
\]

**Critical note:** shape compatibility is not manifold compatibility. A vector in token dimension is not necessarily on the model’s natural activation manifold.

---

### 5.3 HyperNetworks

**Reference:** Ha, Dai, Le. *HyperNetworks.* arXiv:1609.09106, 2016.

**URL:** https://arxiv.org/abs/1609.09106

**Use in framework:** formal precedent for a network generating weights/adapter parameters for another network.

**Possible formulation:**

\[
H_\phi(\mathcal{G}_t) \rightarrow \Delta\Theta_t
\]

**Critical note:** unconstrained dynamic weight generation is hard to audit. Prefer bounded routing of prevalidated adapter families.

---

### 5.4 Manifold Steering Reveals the Shared Geometry of Neural Network Representation and Behavior

**Reference:** Daniel Wurgaft et al. *Manifold Steering Reveals the Shared Geometry of Neural Network Representation and Behavior.* arXiv:2605.05115, 2026.

**URL:** https://arxiv.org/abs/2605.05115

**Use in framework:** crucial for the transition from graph state to LLM-compatible internal states. It motivates **manifold-compatible graph conditioning** rather than naive linear steering.

**Conceptual translation:**

```text
Graph state z_I
  -> Manifold alignment layer
  -> on-manifold model control state h*
  -> generation
```

**Mathematical guardrail:**

\[
d(h^*, \mathcal{M}_h) \leq \epsilon
\]

**Critical note:** same embedding dimension does not imply geometric compatibility.

---

### 5.5 Grammar-Constrained / Grammar-Aligned Decoding

**References:**

- Geng et al. *Grammar-Constrained Decoding for Structured NLP Tasks without Finetuning.* 2023/2024.
- *Grammar-Aligned Decoding.* arXiv:2405.21047, 2024.

**Use in framework:** demonstrates that external formal constraints can control LLM outputs.

**Critical note:** hard decoding constraints can distort the model distribution. Use constraints for syntactic/formal obligations; do not pretend they solve semantic intent preservation.

---

## 6. Memory, Consolidation, and the “Memo, Not Memory” Critique

### 6.1 Contextual Agentic Memory is a Memo, Not True Memory

**Reference:** Binyan Xu, Xilin Dai, Kehuan Zhang. *Contextual Agentic Memory is a Memo, Not True Memory.* arXiv:2604.27707, 2026.

**URL:** https://arxiv.org/abs/2604.27707

**Use in framework:** essential negative control. The Intent-to-Effect Graph must not be sold as “true memory” if it is merely a store.

**Integration:**

```text
Graph state 𝓖_t = episodic/auditable substrate
GNN parameters φ = learned graph-structural memory
LLM parameters θ = generative semantic prior
Validators 𝓥 = authority layer
```

**Key sentence for paper:**

> The graph is not memory. The graph is the auditable substrate from which machine perception can learn. Memory in the strong sense begins when recurring graph-structured validation patterns are consolidated into parameters or stable operational abstractions.

---

### 6.2 DeepSeek Conditional Memory via Scalable Lookup / Engram

**Reference:** *Conditional Memory via Scalable Lookup: A New Axis of Sparsity for Large Language Models.* arXiv:2601.07372, 2026.

**URL:** https://arxiv.org/abs/2601.07372

**Use in framework:** modern architecture reference for memory-as-lookup and sparsity.

**Critical note:** lookup improves access; it does not itself discharge obligations.

---

### 6.3 Consolidation Rule

Candidate criterion:

\[
\operatorname{Consolidate}(x) \iff
\operatorname{validated}(x) \land
\operatorname{recurs}(x) \land
\operatorname{generalizes}(x) \land
\neg \operatorname{poisoned}(x)
\]

**Use:** separates audit trace from learned expertise.

---

## 7. DeepSeek Research Line as Architectural Context

This section collects DeepSeek papers because they show a broader trend: frontier capability comes increasingly from architecture, routing, memory, sparse attention, verifier feedback, and long-context system design — not merely from more parameters.

### 7.1 DeepSeek LLM

**Reference:** DeepSeek-AI. *DeepSeek LLM: Scaling Open-Source Language Models with Longtermism.* arXiv:2401.02954, 2024.

**URL:** https://arxiv.org/abs/2401.02954

**Role:** baseline scaling paper.

---

### 7.2 DeepSeekMoE

**Reference:** DeepSeek-AI. *DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models.* arXiv:2401.06066, 2024.

**URL:** https://arxiv.org/abs/2401.06066

**Role:** supports conditional computation and expert specialization as architecture motifs.

**Connection:** graph-state could route expert adapters or MoE-like modules.

---

### 7.3 DeepSeek-V2

**Reference:** DeepSeek-AI. *DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model.* arXiv:2405.04434, 2024.

**URL:** https://arxiv.org/abs/2405.04434

**Role:** MoE + Multi-head Latent Attention / KV-cache efficiency / long context.

**Framework relevance:** shows that context and memory bottlenecks are architectural, not only prompting problems.

---

### 7.4 DeepSeek-V3

**Reference:** DeepSeek-AI. *DeepSeek-V3 Technical Report.* arXiv:2412.19437, 2024.

**URL:** https://arxiv.org/abs/2412.19437

**Role:** large-scale MoE, MLA, training/system co-design.

**Framework relevance:** DeepSeek scales capability and efficiency; our framework asks how justified confidence scales.

---

### 7.5 DeepSeek-Coder and DeepSeek-Coder-V2

**References:**

- DeepSeek-AI. *DeepSeek-Coder: When the Large Language Model Meets Programming — The Rise of Code Intelligence.* arXiv:2401.14196, 2024. URL: https://arxiv.org/abs/2401.14196
- DeepSeek-AI. *DeepSeek-Coder-V2: Breaking the Barrier of Closed-Source Models in Code Intelligence.* arXiv:2406.11931, 2024. URL: https://arxiv.org/abs/2406.11931

**Role:** code-generation/coding-intelligence reference.

**Critical note:** Code intelligence is not validation intelligence. This pair makes the validation problem more urgent.

---

### 7.6 DeepSeekMath, DeepSeek-Prover, and Verifier Feedback

**References:**

- DeepSeek-AI. *DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models.* arXiv:2402.03300, 2024. URL: https://arxiv.org/abs/2402.03300
- DeepSeek-AI. *DeepSeek-Prover: Advancing Theorem Proving in LLMs through Large-Scale Synthetic Data.* arXiv:2405.14333, 2024. URL: https://arxiv.org/abs/2405.14333
- DeepSeek-AI. *DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Reinforcement Learning and Monte-Carlo Tree Search.* arXiv:2408.08152, 2024. URL: https://arxiv.org/abs/2408.08152
- DeepSeek-AI. *DeepSeek-Prover-V2: Advancing Formal Mathematical Reasoning via Reinforcement Learning for Subgoal Decomposition.* arXiv:2504.21801, 2025. URL: https://arxiv.org/abs/2504.21801
- DeepSeek-AI. *DeepSeekMath-V2: Towards Self-Verifiable Mathematical Reasoning.* arXiv:2511.22570, 2025. URL: https://arxiv.org/abs/2511.22570

**Role:** strongest precedent for verifier-coupled reasoning.

**Translation to our theory:**

```text
Math domain:
problem -> subgoals -> candidate proof -> proof assistant / verifier -> feedback

Skill/software domain:
intent -> obligations -> effects -> validators -> boundary -> adjudication
```

**Critical note:** formal math has explicit truth conditions; business and skill domains often do not.

---

### 7.7 DeepSeek-R1

**Reference:** DeepSeek-AI. *DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning.* arXiv:2501.12948, 2025.

**URL:** https://arxiv.org/abs/2501.12948

**Role:** major reference for reasoning behavior induced by RL.

**Critical note:** reasoning behavior is not automatically auditability or validation. R1-like systems make our boundary question sharper.

---

### 7.8 Native Sparse Attention / DeepSeek-V3.2 / V4 / Long Context

**References:**

- DeepSeek-AI. *Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention.* arXiv:2502.11089, 2025. URL: https://arxiv.org/abs/2502.11089
- DeepSeek-AI. *DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models.* arXiv:2512.02556, 2025. URL: https://arxiv.org/abs/2512.02556
- DeepSeek-AI. *DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence.* Technical report/model repository, 2026.

**Role:** long context and agentic inference infrastructure.

**Critical note:** million-token context increases the need for graph-structured validation boundaries; it does not remove them.

---

### 7.9 DeepSeek-OCR and Visual Causal Flow

**References:**

- DeepSeek-AI. *DeepSeek-OCR: Contexts Optical Compression.* arXiv:2510.18234, 2025. URL: https://arxiv.org/abs/2510.18234
- DeepSeek-AI. *DeepSeek-OCR 2: Visual Causal Flow.* arXiv:2601.20552, 2026. URL: https://arxiv.org/abs/2601.20552

**Role:** analogy for semantic reorganization of input structure.

**Framework analogy:** visual causal flow reorganizes visual tokens; our graph layer reorganizes skill/software context by intent, obligation, effect, and validation status.

---

### 7.10 DualPath

**Reference:** DeepSeek-AI. *DualPath: Breaking the Storage Bandwidth Bottleneck in Agentic LLM Inference.* arXiv:2602.21548, 2026.

**URL:** https://arxiv.org/abs/2602.21548

**Role:** evidence that agentic inference has systems-level memory and I/O bottlenecks.

**Framework relevance:** traces, long-horizon graphs, and validation evidence must be designed as infrastructure, not just prompts.

---

### 7.11 mHC: Manifold-Constrained Hyper-Connections

**Reference:** DeepSeek-AI. *mHC: Manifold-Constrained Hyper-Connections.* arXiv:2512.24880, 2025.

**URL:** https://arxiv.org/abs/2512.24880

**Role:** internal architecture reference for manifold-constrained signal flow.

**Connection:** supports the idea that graph conditioning must be geometrically compatible with model internals.

---

## 8. Software Formalism, Effects, Validation, and Code Graphs

### 8.1 Typed Effect Systems

**References:**

- Daan Leijen. *Koka: Programming with Row Polymorphic Effect Types.* arXiv:1406.2061, 2014. URL: https://arxiv.org/abs/1406.2061
- Bao and Rompf. *Type, Ability, and Effect Systems.* arXiv:2510.07582, 2025. URL: https://arxiv.org/abs/2510.07582
- New, Giovannini, Licata. *Gradual Typing for Effect Handlers.* arXiv:2304.02145, 2023. URL: https://arxiv.org/abs/2304.02145

**Use in framework:** formal grounding for typed effect edges, gradual migration, and machine-readable non-local consequences.

**Critical note:** full effect typing is rare in legacy systems; maturity gradients are needed.

---

### 8.2 Object-Process Methodology (OPM)

**References:**

- Dov Dori. *Object-Process Methodology: A Holistic Systems Paradigm.* Springer, 2002.
- Dov Dori. *Model-Based Systems Engineering with OPM and SysML.* Springer, 2016.
- ISO 19450: Object-Process Methodology.

**Use in framework:** major precursor for unified object/process representations and bimodal formal/natural-language modeling.

**How we differ:** OPM is a modeling method; our framework demands an executable/auditable validation substrate that connects intent, obligations, effects, validators, and adjudication.

---

### 8.3 Code Property Graphs

**Reference:** Yamaguchi et al. *Modeling and Discovering Vulnerabilities with Code Property Graphs.* IEEE Symposium on Security and Privacy, 2014.

**URL:** https://doi.org/10.1109/SP.2014.44

**Use in framework:** closest existing implementation primitive for code substrate: AST + control flow + data flow + program dependence.

**Extension needed:** add typed effects, obligations, human adjudications, runtime evidence, and business intent.

---

### 8.4 LLMDFA

**Reference:** Wang et al. *LLMDFA: Analyzing Dataflow in Code with Large Language Models.* arXiv:2402.10754, 2024.

**URL:** https://arxiv.org/abs/2402.10754

**Use in framework:** evidence that LLMs need expert tools for reliable program analysis and dataflow reasoning.

**Critical note:** supports external validator/tool authority.

---

### 8.5 Property-Based Testing and LLM Validation

**References:**

- Liu et al. *Use Property-Based Testing to Bridge LLM Code Generation and Validation.* arXiv:2506.18315, 2025. URL: https://arxiv.org/abs/2506.18315
- *PropertyGPT: LLM-driven Formal Verification via Retrieval-Augmented Property Generation.* arXiv:2405.02580, 2024. URL: https://arxiv.org/abs/2405.02580
- *LLM-based Property-Based Testing for Cyber-Physical Systems / ChekProp.* arXiv:2505.23549, 2025. URL: https://arxiv.org/abs/2505.23549

**Use in framework:** property tests are a key mechanical discharge operator in the validation cascade.

**Critical note:** generated tests share model biases unless grounded in domain obligations and independent validators.

---

### 8.6 Reasoning Traces and Agent Debugging

**Reference:** Deshpande et al. *TRAIL: Trace Reasoning and Agentic Issue Localization.* arXiv:2505.08638, 2025.

**URL:** https://arxiv.org/abs/2505.08638

**Use in framework:** supports claim that traces are necessary but currently difficult to reason over. Best reported long-context LLM performance on trace debugging was very low in the working memory summary.

**Critical note:** traces should be queryable and audit-on-demand, not linearly read as documentation.

---

### 8.7 AI Slop and Long-Horizon Coding Degradation

**Reference:** *SlopCodeBench: Measuring Long-Horizon Degradation in LLM-Generated Code.* arXiv:2603.24755, 2026.

**URL:** https://arxiv.org/abs/2603.24755

**Use in framework:** empirical support for the “local-correct / global-incoherent” failure mode.

**Critical note:** pass-rate-only benchmarks can miss maintainability and extendability erosion.

---

### 8.8 Automated Code Review Systems

**References:**

- Google. *AI-Assisted Assessment of Coding Practices in Modern Code Review / AutoCommenter.* arXiv:2405.13565, 2024.
- ByteDance. *BitsAI-CR.* arXiv:2501.15134, 2025.
- *Specification-Grounded LLM Code Review.* arXiv:2512.17540, 2025.
- Crupi, Tufano, Bavota. ChatGPT and code review empirical studies. arXiv:2602.11925, 2026.

**Use in framework:** shows industrial and empirical movement toward automated review.

**Critical note:** automated review is still not adjudication-frontier computation unless tied to obligations, effects, and validators.

---

### 8.9 Classic Program Logic and Concurrency

**References:**

- C. A. R. Hoare. *An Axiomatic Basis for Computer Programming.* Communications of the ACM, 1969.
- C. A. R. Hoare. *Communicating Sequential Processes.* Communications of the ACM, 1978.
- John C. Reynolds. *Separation Logic: A Logic for Shared Mutable Data Structures.* LICS, 2002.
- C. A. Petri. *Kommunikation mit Automaten / Communication with Automata.* Dissertation, 1962.

**Use in framework:** theoretical grounding for preconditions/postconditions, process interaction, heap/mutation reasoning, and concurrent effect flow.

**Critical note:** these formal systems solve sharply defined fragments; our framework must treat them as validators/operators, not as universal domain semantics.

---

## 9. Ontology, Knowledge Representation, and Conceptual Modeling

### 9.1 Gruber: Ontologies for Knowledge Sharing

**Reference:** Thomas R. Gruber. *Toward Principles for the Design of Ontologies Used for Knowledge Sharing.* International Journal of Human-Computer Studies, 1995; earlier KSL technical report, 1993.

**Use in framework:** canonical ontology-engineering reference; ontologies as explicit specifications of conceptualizations.

**Critical note:** our graph is not just shared vocabulary; it also carries validation status and boundary information.

---

### 9.2 OWL / RDF / Semantic Web Stack

**Reference:** W3C. *OWL 2 Web Ontology Language.* Recommendation, 2009/2012.

**URL:** https://www.w3.org/OWL/

**Use in framework:** possible representation layer for parts of the concept/obligation graph.

**Critical note:** OWL can check consistency and infer implicit relations, but is not enough for dynamic effects, skills, execution traces, or human adjudication.

---

### 9.3 DOLCE

**Reference:** Borgo, Ferrario, Gangemi, Guarino, Masolo, Porello, Sanfilippo, Vieu. *DOLCE: A Descriptive Ontology for Linguistic and Cognitive Engineering.* Applied Ontology, 2022.

**URL:** https://doi.org/10.3233/AO-210259

**Use in framework:** foundational ontology for commonsense categories; useful for distinguishing endurants/perdurants, qualities, events, roles, agents, and social objects.

**Critical note:** DOLCE is domain-independent; the skill graph needs domain-specific obligations and validator links.

---

### 9.4 Basic Formal Ontology (BFO)

**Reference:** Basic Formal Ontology 2.0 / ISO/IEC 21838-2.

**Use in framework:** alternative foundational ontology, especially for scientific and biomedical domains.

**Critical note:** useful for ontological discipline, but may be too rigid for business concepts and strategic intent.

---

### 9.5 Conceptual Graphs

**Reference:** John F. Sowa. *Conceptual Structures: Information Processing in Mind and Machine.* Addison-Wesley, 1984.

**Use in framework:** bridge between natural language concepts and graph-structured logic.

**Critical note:** concept representation alone does not include validation boundary.

---

### 9.6 Sheaf-Theoretic Contextuality

**Reference:** Abramsky and Brandenburger. *The Sheaf-Theoretic Structure of Non-Locality and Contextuality.* New Journal of Physics, 2011.

**URL:** https://doi.org/10.1088/1367-2630/13/11/113036

**Use in framework:** mathematical metaphor/tool for when locally consistent views fail to glue into a global coherent section.

**Why relevant:** many skill/software failures are local-correct/global-incoherent. Sheaves offer a rigorous language for contextual consistency and obstruction.

**Critical note:** this is currently an analogy/research direction, not yet a formalized part of the framework.

---

### 9.7 Category Theory / Functorial Semantics

**References:**

- Mac Lane. *Categories for the Working Mathematician.* 1971.
- Spivak. *Category Theory for the Sciences.* 2014.
- Fong and Spivak. *Seven Sketches in Compositionality.* 2019.

**Use in framework:** potential formalism for compositional mappings:

```text
Intent graph -> obligation graph -> effect graph -> validation graph
```

**Critical note:** powerful but dangerous. Only use if it clarifies mappings and compositionality; otherwise it will look ornamental.

---

## 10. Knowledge, Thinking, Tacit Skill, and Human Judgment

### 10.1 Polanyi: Tacit Knowledge

**Reference:** Michael Polanyi. *The Tacit Dimension.* University of Chicago Press, 1966.

**Use in framework:** critical guardrail: not all skill knowledge is explicit or codifiable.

**Implication:** the graph should expose where tacit knowledge begins; it should not claim to eliminate tacit knowledge.

---

### 10.2 Dreyfus Skill Acquisition Model

**Reference:** Dreyfus and Dreyfus. *A Five-Stage Model of the Mental Activities Involved in Directed Skill Acquisition.* 1980; later work on novice-to-expert skill.

**Use in framework:** counterweight to over-formalization. Expertise often moves beyond explicit rules into situated judgment.

**Implication:** validation-bounded skill agency should preserve expert adjudication rather than pretend skill can be fully specified.

---

### 10.3 Schön: Reflective Practitioner

**Reference:** Donald Schön. *The Reflective Practitioner: How Professionals Think in Action.* Basic Books, 1983.

**Use in framework:** supports the idea that practice is inquiry, not just execution. Similar to original claim that code is a discovery medium.

**Skill translation:** the system must preserve reflection-in-action through graph updates, traces, feedback, and adjudication.

---

### 10.4 Newell and Simon: Problem Solving and Bounded Rationality

**References:**

- Herbert A. Simon. *Administrative Behavior.* 1947.
- Newell and Simon. *Human Problem Solving.* 1972.

**Use in framework:** bounded rationality and heuristic problem spaces support “bounded validation” as an epistemic constraint.

**Critical note:** bounded rationality is not merely cognitive limitation; in our frame it becomes an architectural design principle.

---

### 10.5 Nonaka and Takeuchi: Knowledge Creation / SECI

**Reference:** Nonaka and Takeuchi. *The Knowledge-Creating Company.* 1995.

**Use in framework:** socialization/externalization/combination/internalization can be read as movement between tacit and explicit knowledge.

**Critical note:** useful conceptually, but less mathematically sharp than Polanyi/Dreyfus/Schön.

---

### 10.6 Thinking Machines: Mathematical Reasoning in the Age of LLMs

**Reference:** Andrea Asperti, Alberto Naibo, Claudio Sacerdoti Coen. *Thinking Machines: Mathematical Reasoning in the Age of LLMs.* arXiv:2508.00459, 2025.

**URL:** https://arxiv.org/abs/2508.00459

**Use in framework:** warning source. Mathematical reasoning is a relatively formal domain, yet LLMs still face questions about whether they maintain evolving logical state or only emulate reasoning.

**Implication:** if LLMs are fragile in formal math, they cannot be trusted as internal authorities for business/skill validation.

---

## 11. Information Theory, Compression, and Validation

### 11.1 Shannon: A Mathematical Theory of Communication

**Reference:** Claude E. Shannon. *A Mathematical Theory of Communication.* Bell System Technical Journal, 1948.

**DOI:** https://doi.org/10.1002/j.1538-7305.1948.tb00917.x

**Use in framework:** basic language for entropy, channel capacity, coding, signal/noise, information loss.

**Possible interpretation:** codification from intent to obligations is an information channel with loss, distortion, and compression.

**Critical note:** semantic preservation is not reducible to Shannon information alone.

---

### 11.2 Jaynes: Maximum Entropy / Information Theory and Statistical Mechanics

**Reference:** E. T. Jaynes. *Information Theory and Statistical Mechanics.* Physical Review, 1957.

**DOI:** https://doi.org/10.1103/PhysRev.106.620

**Use in framework:** when evidence is incomplete, maximum entropy gives a disciplined way to remain maximally noncommittal beyond known constraints.

**Possible role:** obligations not discharged should remain explicit uncertainty, not be collapsed into confident text.

---

### 11.3 Minimum Description Length

**Reference:** Jorma Rissanen. *Modeling by Shortest Data Description.* Automatica, 1978.

**DOI:** https://doi.org/10.1016/0005-1098(78)90005-5

**Use in framework:** model quality as compression of data plus model complexity. Relevant to graph abstraction and trace compression.

**Possible role:** a good skill graph compresses repeated practice without erasing validation-relevant distinctions.

---

### 11.4 Information Bottleneck

**Reference:** Tishby, Pereira, Bialek. *The Information Bottleneck Method.* Allerton Conference, 1999.

**Use in framework:** learn representations that compress input while preserving task-relevant information.

**Formula:**

\[
\min I(Z;X) - \beta I(Z;Y)
\]

**Translation:** a boundary-aware graph representation should compress context while preserving validation-relevant obligations and frontier signals.

---

### 11.5 Algorithmic Information Theory / Kolmogorov Complexity

**References:** Kolmogorov, Solomonoff, Chaitin; Li and Vitányi textbook.

**Use in framework:** conceptual background for irreducible complexity and compression limits.

**Critical note:** likely too abstract for main paper; better as background for trace compression and MDL.

---

### 11.6 Rate-Distortion Theory

**Reference:** Shannon; Cover and Thomas. *Elements of Information Theory.* 1991/2006.

**Use in framework:** codification inevitably trades compression against distortion.

**Potential formal analogy:**

```text
Intent -> Graph obligations
```

is a lossy encoding. Validation attempts to detect whether the distortion is acceptable.

---

## 12. Energy, Physics, Manifolds, and Dynamical Systems

### 12.1 Energy-Based Models

**Reference:** LeCun, Chopra, Hadsell, Ranzato, Huang. *A Tutorial on Energy-Based Learning.* 2006.

**URL:** http://yann.lecun.com/exdb/publis/pdf/lecun-06.pdf

**Use in framework:** energy functions define compatibility between variables. Instead of predicting only next tokens, an EBM can score configurations.

**Potential translation:**

\[
E_\eta(\mathcal{G}_t, a_t)
\]

as an energy/cost of an action or codification relative to obligations and graph state.

**Critical note:** low energy is not validation. It is compatibility scoring.

---

### 12.2 LeCun: A Path Towards Autonomous Machine Intelligence

**Reference:** Yann LeCun. *A Path Towards Autonomous Machine Intelligence.* OpenReview, 2022.

**URL:** https://openreview.net/forum?id=BZ5a1r-kVsf

**Use in framework:** major conceptual support for world models, hierarchical predictive representations, planning, and energy-based objectives beyond pure autoregressive LLMs.

**Our alignment:** the Intent-to-Effect Graph is a world model of the skill/project; the LLM is only one actuator.

---

### 12.3 V-JEPA / V-JEPA 2

**Reference:** LeCun/Meta AI line; *V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning.* arXiv:2506.09985, 2025.

**URL:** https://arxiv.org/abs/2506.09985

**Use in framework:** world-model reference: representations support prediction and planning, not only generation.

**Analogy:** V-JEPA models physical scene dynamics; our graph models skill/project dynamics.

---

### 12.4 Free Energy Principle / Active Inference

**Reference:** Karl Friston. *The Free-Energy Principle: A Unified Brain Theory?* Nature Reviews Neuroscience, 2010.

**DOI:** https://doi.org/10.1038/nrn2787

**Use in framework:** agents minimize expected surprise/free energy through perception and action under generative models.

**Possible role:** validation boundary as where expected model evidence is insufficient for confident action.

**Critical note:** Free Energy Principle is broad and controversial; use cautiously as analogy/background, not as proof.

---

### 12.5 Hamiltonian Neural Networks

**Reference:** Greydanus, Dzamba, Yosinski. *Hamiltonian Neural Networks.* arXiv:1906.01563, 2019.

**URL:** https://arxiv.org/abs/1906.01563

**Use in framework:** energy-conserving inductive bias for dynamical systems.

**Possible analogy:** skill trajectories have state and momentum; interventions should preserve invariants unless explicitly adjudicated.

**Caution:** Hamiltonian mechanics is exact in certain physical systems; skill dynamics may not conserve a natural energy.

---

### 12.6 Neural Ordinary Differential Equations

**Reference:** Chen, Rubanova, Bettencourt, Duvenaud. *Neural Ordinary Differential Equations.* arXiv:1806.07366, 2018.

**URL:** https://arxiv.org/abs/1806.07366

**Use in framework:** continuous-depth/dynamical-system view of neural computation.

**Possible role:** model skill evolution or graph state evolution continuously:

\[
\frac{d\mathcal{G}_t}{dt}=f_\phi(\mathcal{G}_t, a_t, e_t)
\]

**Critical note:** most validation events are discrete; hybrid dynamical systems may be more appropriate.

---

### 12.7 Manifold Learning / Representation Geometry

**Concept:** model activations occupy structured submanifolds; interventions should remain near natural representation geometry.

**Key source:** *Manifold Steering Reveals the Shared Geometry of Neural Network Representation and Behavior*.

**Formula:**

\[
h^* = \operatorname{Align}_\psi(\operatorname{GNN}_\phi(\mathcal{G}_t), \mathcal{M}_h)
\]

with:

\[
d(h^*,\mathcal{M}_h)\leq \epsilon
\]

**Critical note:** this is one of the strongest arguments against naive graph-to-vector projection.

---

### 12.8 Lagrangian / Action Principles

**Reference family:** classical mechanics; variational principles.

**Possible use:** action trajectories can be evaluated by integral cost:

\[
\mathcal{S}[\gamma]=\int L(q,\dot q,t)dt
\]

**Translation:** skill execution could be represented as a trajectory through graph states with cost terms for obligation violation, uncertainty, human attention, and energy/compute.

**Critical note:** use as mathematical metaphor unless a concrete optimization problem is defined.

---

### 12.9 Energy Functional for Validation-Bounded Skill Agency

Candidate energy:

\[
E(\mathcal{G}_t,a_t)
= \lambda_1 E_{obl}
+ \lambda_2 E_{effect}
+ \lambda_3 E_{boundary}
+ \lambda_4 E_{human}
+ \lambda_5 E_{manifold}
\]

where:

- \(E_{obl}\): obligation violation cost
- \(E_{effect}\): mismatch between expected and observed effects
- \(E_{boundary}\): cost of falsely discharging uncertain obligations
- \(E_{human}\): human attention cost / interruption cost
- \(E_{manifold}\): off-manifold intervention penalty

**Critical note:** this is a research-program formalism, not yet a validated theory.

---

## 13. Cellular Automata, Local Rules, and Emergent Complexity

### 13.1 Wolfram: Cellular Automata as Models of Complexity

**Reference:** Stephen Wolfram. *Cellular Automata as Models of Complexity.* Nature, 1984.

**DOI:** https://doi.org/10.1038/311419a0

**Use in framework:** local simple rules can generate complex global behavior.

**Relevance:** supports the local-correct/global-incoherent failure mode: local rules/reviews/tests can miss emergent system-level dynamics.

---

### 13.2 Conway’s Game of Life

**Reference:** John Conway; popularized by Martin Gardner, *Mathematical Games*, Scientific American, 1970.

**Use in framework:** canonical example of complex emergent behavior from local update rules.

**Critical note:** good analogy, not direct formal substrate for skill agency.

---

### 13.3 Neural Cellular Automata

**References:**

- Mordvintsev et al. *Growing Neural Cellular Automata.* Distill, 2020.
- Randazzo et al. *Growing Isotropic Neural Cellular Automata.* arXiv:2205.01681, 2022.

**Use in framework:** learned local update rules generating global forms; useful analogy for graph evolution and local-to-global coherence.

**Potential role:** study how local validator/agent actions can produce global drift over time.

---

### 13.4 Petri Nets

**Reference:** C. A. Petri. *Communication with Automata.* Dissertation, 1962.

**Use in framework:** formal model for concurrency, resources, transitions, and tokens.

**Translation:** skill execution can involve resources, state transitions, and concurrent effects; software typed effect graphs may be enriched with Petri-style transition semantics.

---

## 14. Mathematical Reasoning, Formal Verification, and Neuro-Symbolic Logic

### 14.1 DeepProbLog

**Reference:** Manhaeve et al. *DeepProbLog: Neural Probabilistic Logic Programming.* NeurIPS, 2018.

**URL:** https://arxiv.org/abs/1805.10872

**Use in framework:** precedent for combining neural predicates with probabilistic logic.

**Critical note:** useful in controlled domains; not enough for underdetermined strategic intent.

---

### 14.2 Logic Tensor Networks

**Reference:** Serafini and Garcez; Badreddine et al. *Logic Tensor Networks.* Artificial Intelligence, 2022.

**Use in framework:** differentiable fuzzy logic with neural models.

**Critical note:** can make some logic differentiable, but does not settle validation authority.

---

### 14.3 SMT Solvers / Theorem Provers / Proof Assistants

**References:** Z3, Coq, Lean, Isabelle/HOL, TLA+.

**Use in framework:** validators that can discharge formal obligations in restricted domains.

**Critical note:** formal proof obligations require formalized semantics; many skill/business claims lack them.

---

### 14.4 Formal Methods in Software Practice

**References:**

- Lamport. *Specifying Systems* / TLA+.
- Clarke, Grumberg, Peled. *Model Checking.*
- Hoare logic, separation logic, CSP.

**Use in framework:** validator family for system properties, concurrency, invariants, protocols.

**Critical note:** these are powerful discharge operators, not replacements for semantic/business adjudication.

---

## 15. Falsifiability, Metrics, and Evaluation Ideas

### 15.1 Core falsifiability claim

The theory is wrong or incomplete if the system repeatedly classifies obligations as mechanically discharged and those obligations later fail in production, audit, expert review, or downstream validation.

Metric:

\[
P(\text{later failure}\mid o \in O_{\text{discharged}})
\]

### 15.2 Frontier recall

\[
\operatorname{FrontierRecall}=
\frac{\text{later-problematic obligations flagged before failure}}
{\text{all later-problematic obligations}}
\]

### 15.3 False validation rate

\[
\operatorname{FVR}=
P(o \text{ fails later}\mid o \text{ marked discharged})
\]

### 15.4 Human adjudication precision

\[
\operatorname{HAP}=P(\text{human summons was useful}\mid \text{summons})
\]

### 15.5 Validation compression

How much human review/adjudication work is reduced without increasing false validation rate.

### 15.6 Graph construction error

How often the dominant failure is not LLM generation, but wrong graph extraction/mapping.

### 15.7 Manifold intervention calibration

\[
d(h^*, \mathcal{M}_h)
\]

and behavioral naturalness:

\[
d(y_t, \mathcal{M}_y)
\]

### 15.8 Validation honesty

\[
P(o \text{ marked discharged without validator evidence})
\]

Target should approach zero.

---

## 16. Candidate Paper Positioning

### 16.1 Against naive agent skills

> Skills are not merely reusable procedures. Skills are intent-to-effect structures under obligations, feedback, and validation boundaries.

### 16.2 Against naive Graph-RAG

> Graph retrieval improves evidence access. It does not determine which obligations are discharged.

### 16.3 Against naive LLM autonomy

> Autonomy without boundary calibration scales plausible action, not justified confidence.

### 16.4 Against naive formalism

> Not all intent can be formalized. The graph represents claims about meaning and where those claims fail to become machine-dischargeable.

### 16.5 Against naive memory

> A graph store is a memo. Learned graph perception and validated consolidation are the path toward skill memory.

### 16.6 Against naive energy metaphors

> Energy functions can score compatibility. They do not authorize correctness unless tied to explicit validators and calibrated outcomes.

---

## 17. Candidate Concepts to Define in the Paper

### Validation Boundary

The graph-represented frontier between obligations mechanically discharged by available validators and obligations that remain open, estimated, ambiguous, or expert-adjudicable.

### Adjudication Frontier

The subset of the validation boundary that requires human or expert judgment.

### Skill Graph

A typed, dynamic graph linking intent, concepts, obligations, affordances, actions, effects, validation evidence, boundary nodes, adjudications, and traces.

### Intent-to-Implementation Graph

Software-specific specialization of the Skill Graph, linking business intent to typed implementation/effect regions and validation evidence.

### Graph Perception Layer

A typed GNN/graph transformer over the Skill Graph that estimates boundary, relevance, risk, and graph slices for downstream codification/action.

### Manifold-Compatible Graph Conditioning

Mapping graph states into LLM/planner/policy control states while respecting the target model’s internal representation geometry.

### Validation Authority Layer

The collection of validators, proof systems, tests, simulations, policies, runtime evidence, and human/expert decisions that can discharge or reject obligations.

### Frontier-Aware Proactivity

Proactive interruption or action policy driven by graph boundary status rather than agent self-confidence.

### Consolidated Skill Memory

Parametric or operational abstraction learned from validated recurring graph-structured patterns, distinct from a graph store or retrieval memory.

---

## 18. Open Questions / Research Debt

1. **Graph construction:** how are intent/concepts/obligations extracted without hallucinating structure?
2. **Validator registry:** how does the system know which validators can discharge which obligation types?
3. **Boundary calibration:** what evidence updates the boundary classifier?
4. **Human adjudication semantics:** how are expert decisions represented without pretending they are universal truth?
5. **Manifold compatibility:** how is graph state aligned to model-internal geometry without off-manifold steering?
6. **Skill generality:** which domains are suitable first beyond software? Medicine and finance are high-stakes; consulting/design are hard to validate; robotics needs sensors/simulation.
7. **Tacit knowledge:** how does the system expose tacit boundary without falsely formalizing it?
8. **Poisoning:** how does the graph prevent invalid traces/adjudications from being consolidated?
9. **Local/global coherence:** can sheaf/contextuality or graph obstruction theory formalize local-correct/global-incoherent failure?
10. **Energy formulation:** can the proposed energy functional produce useful optimization objectives, or is it only metaphor?

---

## 19. Recommended Reading Order

### First pass: core thesis support

1. User `memory.pdf` working memory.
2. Agent Skills Survey.
3. Agentic Coding Needs Proactivity.
4. Contextual Agentic Memory is a Memo, Not True Memory.
5. Text-Graph Synergy / TGS-RAG.
6. Manifold Steering.
7. DeepSeek-Prover-V2 and DeepSeekMath-V2.

### Second pass: software substrate

1. Code Property Graphs.
2. Koka / effect systems.
3. LLMDFA.
4. Property-based testing papers.
5. TRAIL.
6. SlopCodeBench.

### Third pass: architecture

1. Battaglia Graph Networks.
2. GraphGPT / LLaGA / GALLa.
3. LoRA / Prefix-Tuning / HyperNetworks.
4. DeepSeek-V2/V3/V3.2/V4.
5. Native Sparse Attention / mHC / Engram.

### Fourth pass: theory background

1. Shannon.
2. Jaynes.
3. Rissanen / MDL.
4. Information Bottleneck.
5. LeCun EBM / AMI / JEPA.
6. Friston Free Energy.
7. Polanyi / Dreyfus / Schön.
8. Gruber / DOLCE / OWL / OPM.

---

## 20. Compressed Thesis Paragraph for Future Drafting

Validation-Bounded Skill Agency generalizes agent skills by making the validation boundary the central object. A skill is modeled as a graph-calibrated transformation of intent into effects under domain obligations. A typed skill graph represents concepts, obligations, affordances, actions, effects, evidence, adjudications, and traces. A graph perception layer estimates relevance, risk, and machine-validatable boundary; an LLM, planner, or policy module proposes codifications or actions; explicit validators and human or expert adjudications discharge obligations. The key architectural separation is that generation and boundary estimation may be probabilistic, but validation authority must remain explicit, auditable, and calibrated against later evidence.

---

## 21. Minimal Bibliography Seed

This is a non-exhaustive seed list for conversion into BibTeX later.

- Shannon, C. E. (1948). *A Mathematical Theory of Communication.* Bell System Technical Journal.
- Jaynes, E. T. (1957). *Information Theory and Statistical Mechanics.* Physical Review.
- Rissanen, J. (1978). *Modeling by Shortest Data Description.* Automatica.
- Tishby, N., Pereira, F. C., & Bialek, W. (1999). *The Information Bottleneck Method.* Allerton Conference.
- Polanyi, M. (1966). *The Tacit Dimension.*
- Dreyfus, S. E., & Dreyfus, H. L. (1980). *A Five-Stage Model of Skill Acquisition.*
- Schön, D. (1983). *The Reflective Practitioner.*
- Gibson, J. J. (1979). *The Ecological Approach to Visual Perception.*
- Gruber, T. (1995). *Toward Principles for the Design of Ontologies Used for Knowledge Sharing.*
- Borgo et al. (2022). *DOLCE: A Descriptive Ontology for Linguistic and Cognitive Engineering.*
- Dori, D. (2002). *Object-Process Methodology.*
- ISO 19450. *Object-Process Methodology.*
- Hoare, C. A. R. (1969). *An Axiomatic Basis for Computer Programming.*
- Hoare, C. A. R. (1978). *Communicating Sequential Processes.*
- Reynolds, J. C. (2002). *Separation Logic.*
- Petri, C. A. (1962). *Communication with Automata.*
- Yamaguchi et al. (2014). *Modeling and Discovering Vulnerabilities with Code Property Graphs.*
- Leijen, D. (2014). *Koka: Programming with Row Polymorphic Effect Types.*
- Battaglia et al. (2018). *Relational Inductive Biases, Deep Learning, and Graph Networks.*
- Veličković et al. (2017). *Graph Attention Networks.*
- Ying et al. (2021). *Graphormer.*
- Lewis et al. (2020). *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.*
- Hu et al. (2021). *LoRA.*
- Li & Liang (2021). *Prefix-Tuning.*
- Ha, Dai, Le (2016). *HyperNetworks.*
- LeCun et al. (2006). *A Tutorial on Energy-Based Learning.*
- LeCun (2022). *A Path Towards Autonomous Machine Intelligence.*
- Friston (2010). *The Free-Energy Principle.*
- Greydanus et al. (2019). *Hamiltonian Neural Networks.*
- Chen et al. (2018). *Neural Ordinary Differential Equations.*
- Abramsky & Brandenburger (2011). *The Sheaf-Theoretic Structure of Non-Locality and Contextuality.*
- Wolfram (1984). *Cellular Automata as Models of Complexity.*
- Manhaeve et al. (2018). *DeepProbLog.*
- Serafini/Garcez; Badreddine et al. *Logic Tensor Networks.*
- Zhou et al. (2026). *A Comprehensive Survey on Agent Skills.*
- Bui & Evangelopoulos (2026). *Agentic Coding Needs Proactivity, Not Just Autonomy.*
- Zhong & Chen (2026). *Text-Graph Synergy.*
- Asperti, Naibo, Sacerdoti Coen (2025). *Thinking Machines.*
- Xu, Dai, Zhang (2026). *Contextual Agentic Memory is a Memo, Not True Memory.*
- Wurgaft et al. (2026). *Manifold Steering.*
- DeepSeek-AI papers: LLM, MoE, V2, V3, Coder, Coder-V2, Math, Prover, Prover-V1.5, R1, Prover-V2, Math-V2, NSA, V3.2, OCR, OCR2, DualPath, Engram, mHC.

---

## 22. What Must Not Be Claimed Yet

- Do not claim the graph fully captures human meaning.
- Do not claim GNNs perform formal validation.
- Do not claim LLMs can internalize domain logic safely without external validators.
- Do not claim long context solves memory or understanding.
- Do not claim energy/free-energy/Hamiltonian concepts prove the framework.
- Do not claim all skills are equally validatable.
- Do not claim human adjudication is objective truth.
- Do not claim the framework is already empirically validated.

The defensible claim is narrower and stronger:

> Machine skill systems become safer and more scalable when they explicitly represent the obligations induced by intent, map them to actions and effects, track validator evidence, and calibrate the boundary between machine-dischargeable claims and human/expert judgment.
