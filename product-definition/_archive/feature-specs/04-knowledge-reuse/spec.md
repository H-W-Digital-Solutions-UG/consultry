# Feature Spec — Knowledge & Reuse

> **⚠️ ARCHIVIERT (12.06.2026 — [MVP-Foundation-Decisions v1.0](../../Consultry-MVP-Foundation-Decisions-v1.0.md), T1).** Diese Spec gehört zur „Win-and-Deliver"-Generation (Gen A) und ist **kein MVP-Scope**. Verbindlich: [MVP-PRD v1.0](../../Consultry-MVP-PRD-v1.0.md) (Acquisition-to-Bid) + Foundation-Decisions. Persona-/Outcome-Tabellen dürfen als UX-Input wiederverwendet werden (Salvage, Foundation-Decisions §4). Nicht als Quelle der Wahrheit verwenden.

**Modul-ID:** `04-knowledge-reuse`
**Status:** Draft v1.0 — MVP-Sharpening
**Datum:** 2026-05-28
**MVP-Phase:** 1a (Win & Deliver — Tag 1)
**Rolle im Loop:** Loop-Sidecar (speist Proposal, Vertrag, Briefing) **und** Loop-Endpunkt (Lessons Learned). Das einzige Modul, das im MVP-Loop zweimal vorkommt.
**Bezug:** [PRD v4.1 §3](../../Consultry-PRD-v4.0-DACH-Operating-System.md), [PRD v5.0 §4.1, §7.4–7.5](../../technical-definitions/Consultry-PRD-v5.0-Software-Layered.md), [Roadmap §3.2, §5.1](../../business-definitions/Consultry-Roadmap-v1.0-MVP-and-Phasing.md), [ProductDoc §7.2, §10.2](../../Consultry-Product-Document-v1.0.md)

---

## 1. Job-to-be-Done

> **Die Beratung verwandelt jede gewonnene Erfahrung in wiederverwendbares, quellgebundenes Wissen — Methodologie, Klausel, Lesson, Template, Decision-Record, AI-Skill-Blueprint — sodass die nächste Opportunity, das nächste Projekt und das nächste Onboarding nicht wieder bei Null beginnen. Und jedes faktische AI-Output ist auf diese Wissensbasis bindbar.**

Knowledge & Reuse ist das Differenzierungs-Modul gegen „Wiki". Der Unterschied: jedes Wissens-Stück ist **graph-nativ verlinkt** (Account, Projekt, Berater, Methodologie, Stakeholder) und **operator-tauglich** (Suggest, Review, Source-Bind).

### Outcome pro Persona

| Persona | Heute | Soll mit Consultry |
|---|---|---|
| **Stefan (Senior / Knowledge-Agent)** | Methodologien in PowerPoint-Templates, Lessons in Outlook-Notizen. Wissen ist in seinem Kopf gefangen. | Methodologie-Knoten versioniert. Lessons als verlinkte Knoten. Sein Wissen ist authored, abrufbar, kompositionierbar. |
| **Lisa (Consultant)** | Findet Templates per Mail-Suche; weiß nicht, was am aktuellsten ist. | Semantische Suche + Methodology-Anker. Workshop-Template in 30 s gefunden. |
| **Katrin (BD)** | AGB als Word-Datei in Network-Share; Pricing-Templates verteilt. | Clause Library + Pricing-Templates as first-class assets, einlesbar von Modul 2. |
| **Thomas (MP)** | Lessons Learned bleibt anekdotisch — „Frau Schulz war damals Blocker bei…" | Lessons als strukturierte Knoten mit Verlinkung. Suche „Welche Projekte gewannen wir wegen Methodologie X?" |
| **Martina (Office)** | Versions-Chaos bei Standard-Vorlagen. | Asset-Lifecycle (Draft/Current/Deprecated) mit Audit-Trail. |

---

## 2. In-Scope MVP (Tag 1)

| # | Sub-Feature | MVP-Begründung |
|---|---|---|
| 2.1 | **Asset-Library** (zentrale Knowledge-Store) | Sockel für alle anderen Asset-Typen. |
| 2.2 | **Methodology-Knoten** (versioniert) | Anker für Brief, Review-Operator, QA-Sub-System. |
| 2.3 | **Template-Library** (SOW, Proposal-Sections, Workshop-Decks) | Quell-Material für Modul 2 + Allocation. |
| 2.4 | **Clause Library** (Vertrags-Standard-Klauseln) | Pflicht-Quelle für Modul 2 Contract Drafting. |
| 2.5 | **Reference-Library** (Case Studies, anonymisiert) | Quell-Material für Tailored CV + Proposal. |
| 2.6 | **Lessons-Learned-Knoten** | Loop-Endpunkt; verlinkt mit Project, Account, Consultant. |
| 2.7 | **Decision-Record-Knoten** (first-class) | Projekt-Entscheidungen + Methodologie-Entscheidungen abrufbar. |
| 2.8 | **Knowledge-Asset-Verlinkung** mit Projekt / Berater / Account | Graph-nativ; Voraussetzung für Suggest-Operator. |
| 2.9 | **Semantische Suche** (Volltext + Embedding) | Mindestbar für „Wiki-Replacement". |
| 2.10 | **Source-Binding-Index** | Jeder Knoten hat Span-Adressierbarkeit. |
| 2.11 | **Asset-Lifecycle** (Draft / Current / Deprecated) | Verhindert Versions-Chaos. |
| 2.12 | **Auto-Tagging (basic)** | Pre-Klassifizierung; Phase 1b vertieft. |
| 2.13 | **AI-Skill-Blueprint-Erfassung** | Strukturierte Wieder-Verwendbarkeit von AI-Workflows ([ProductDoc §7.2](../../Consultry-Product-Document-v1.0.md)). |

---

## 3. Out-of-Scope MVP

| Bereich | Wann | Quelle |
|---|---|---|
| Cross-Tenant-Lessons (Knowledge zwischen verschiedenen Beratungen teilen) | Phase 2 mit Gate | Roadmap §6 |
| Methodologie-Klassifikation als Operator-Pflicht | Phase 1b | Roadmap §6 |
| Quellen-gebundene Synthese (Multi-Source-Aggregation) | Phase 2 | Roadmap §6 |
| Offener Prompt-Marktplatz ohne Governance | Niemals | ProductDoc §13 |
| Repository-Templates die Code-Repos spawnen (GitHub/GitLab Write) | Phase 2 — MVP read-only | ProductDoc §19 Q8 |
| Volle QA-Layer (Code-Review, Doc-Review, Deck-Review als Operator) | Phase 1b (post-MVP); Test-Infra Phase 2 | Roadmap §5.1 |
| Auto-Generated Knowledge-Asset aus Mail-/Slack-Sammlung | Phase 1b mit Approval-Pflicht | PRD v5.0 §3 |
| Knowledge-Leadership-Score pro Berater | Phase 1b mit BetrVG-Heavy-Gate | PRD v5.0 §8.2 |

---

## 4. Entities & Datenmodell

### 4.1 Kern-Entities

```
KnowledgeAsset                          (abstract base — alle Asset-Typen erben)
  ├── id, slug, title_de, title_en
  ├── kind: enum {
  │     Methodology, Template, Reference, ClauseLibraryEntry,
  │     LessonsLearned, DecisionRecord, AISkillBlueprint, RepoTemplate
  │   }
  ├── lifecycle: enum { Draft, Current, Deprecated, Archived }
  ├── version: int (monotone, history-tracked)
  ├── owner_consultant: ConsultantID    (Verantwortlich für Pflege)
  ├── contributors: ConsultantID[]      (über KnowledgeContribution verlinkt)
  ├── created_at, last_modified_at, deprecated_at?
  ├── tags: Tag[]
  ├── classification: KnowledgeClassification
  ├── confidentiality: enum { Internal, Restricted, ExternalShareable }
  ├── related_assets: KnowledgeAssetID[]
  ├── source_documents: SourceDocument[]   (PDFs, Markdown, Anhänge)
  └── content_blocks: ContentBlock[]   (strukturierter Inhalt, span-adressiert)

ContentBlock
  ├── id, block_id (intra-asset stable)
  ├── kind: enum { Heading, Paragraph, Table, ListItem, Diagram, CodeBlock }
  ├── content_md: text (mit Inline-References)
  ├── spans: SpanIndex[]                (für Source-Binding-Adressierung)
  └── language: enum { de, en, both }

Methodology                                (extends KnowledgeAsset)
  ├── domain: MethodologyDomain         (z. B. IT-Sourcing, Carve-Out, Change-Mgmt)
  ├── stages: MethodologyStage[]        (geordnete Schritte)
  ├── inputs: MethodologyInput[]        (was geliefert werden muss um sie anzuwenden)
  ├── outputs: MethodologyOutput[]      (was am Ende rauskommt)
  ├── governance_level: enum { Standard, Pilot, Experimental }
  └── used_in_projects: ProjectID[]     (auto-aggregiert von Modul 5)

Template                                   (extends KnowledgeAsset)
  ├── template_type: enum {
  │     ProposalSection, ContractClause, WorkshopDeck, OnePager,
  │     ReportingPack, IntakeForm, RunbookSection
  │   }
  ├── target_module: enum { OppProposalContract, Knowledge, Delivery, ... }
  ├── parameters: TemplateParameter[]    (Slot-Definitions für Modul-2-Filling)
  ├── fields: TemplateField[]            (alle Slots mit Default + Pflicht-Marker)
  └── usage_count: int                   (auto, telemetry)

ClauseLibraryEntry                         (extends KnowledgeAsset)
  ├── clause_type: ClauseType            (z. B. Haftung, SLA, Vertraulichkeit, Kündigung)
  ├── jurisdiction: enum { DE, AT, CH, EU, Other }
  ├── canonical_text_de, canonical_text_en
  ├── variants: ClauseVariant[]          (z. B. Lean / Standard / Strong)
  ├── deviation_history: ClauseDeviation[] (welche Verträge davon abwichen)
  ├── linked_methodologies: MethodologyID[]
  ├── legal_review_status: enum {
  │     Unreviewed, ReviewedInternal, ReviewedExternalCounsel, BlessedForSending
  │   }
  └── legal_review_audit: LegalReviewEvent[]

Reference                                  (extends KnowledgeAsset)
  ├── reference_kind: enum { CaseStudy, ProjectShowcase, ClientStory }
  ├── client_disclosed: bool             (false = anonymisiert)
  ├── client_name?: text                 (only if disclosed=true with consent)
  ├── industry: Industry
  ├── outcomes: Outcome[]                (quantifiziert wo möglich)
  ├── linked_project?: ProjectID
  └── publishable_externally: bool       (für Marketing-Use-Approval-Gate)

LessonsLearned                             (extends KnowledgeAsset)
  ├── trigger_context: enum { ProjectClose, OpportunityLost, IncidentReview, PostMortem }
  ├── linked_project?: ProjectID
  ├── linked_opportunity?: OpportunityID
  ├── linked_account?: AccountID
  ├── stakeholders_involved: { kind enum { Consultant, ClientStakeholder }, id }[]
  ├── what_happened: text (with source bindings)
  ├── what_worked: text
  ├── what_failed: text
  ├── recommended_action: text
  ├── betrvg_visibility: enum { Public, Aggregated-Only, ConsultantApprovalRequired }
  └── pseudonymized: bool                (true if names redacted per BetrVG/DSGVO)

DecisionRecord                             (extends KnowledgeAsset, first-class per PRD v5.0 commitment 9)
  ├── decision_context: enum { Project, Opportunity, Methodology, Architecture, Operational }
  ├── linked_entities: { kind, id }[]    (Project, Account, Opportunity, etc.)
  ├── decision: text                     (Was wurde entschieden)
  ├── alternatives_considered: Alternative[]   (Was wurde verworfen, mit Begründung)
  ├── decided_by: ConsultantID[]
  ├── decided_at: date
  ├── rationale: text (with source bindings)
  ├── consequences: text                 (Was folgt daraus, Was muss noch passieren)
  ├── review_schedule?: date             (wann Entscheidung zu re-validieren)
  └── status: enum { Active, Superseded, Rolled-Back }

AISkillBlueprint                          (extends KnowledgeAsset, ProductDoc §7.2)
  ├── purpose: text                     (z. B. „Proposal-Section aus Engagement Brief generieren")
  ├── intent_signature: IntentSignature  (Intent-Map: was rein, was raus)
  ├── operator_recipe: OperatorRecipe[]  (geordnete Schritte: Read / Classify / Suggest / Draft / Review etc.)
  ├── prompt_template: text              (mit Variablen-Slots)
  ├── source_binding_requirements: SourceBindingRule[]
  ├── approval_required: bool
  ├── tested_by: ConsultantID[]
  ├── success_metrics: SkillSuccessMetric[]
  └── deprecation_path?: text            (was tritt an seine Stelle)

RepoTemplate                              (extends KnowledgeAsset)
  ├── tech_stack: TechStack
  ├── purpose: text                     (z. B. „Klein-Frontend für Workshop-Mock-Ups")
  ├── source_url_readonly?: URL         (Phase 1 read-only Pointer)
  ├── instantiation_notes: text
  └── deprecated_by?: RepoTemplateID

KnowledgeClassification
  ├── domain_tags: Tag[]
  ├── industry_tags: Industry[]
  ├── methodology_tags: MethodologyID[]
  ├── skill_tags: SkillTaxonomyID[]
  └── auto_classified: bool             (true if AI-tagging applied; false if manual)
```

### 4.2 Source-Binding-Infrastruktur

```
SourceBinding
  ├── source_kind: enum { GraphNode, Document, ExternalURL }
  ├── graph_node_id?: NodeID            (wenn anderer Knoten — Account, Stakeholder, Project)
  ├── document_id?: DocumentID
  ├── page?: int                        (PDF)
  ├── span_offset?: int                 (Markdown / text)
  ├── span_length?: int
  ├── url?: URL                         (extern, mit Cache-Snapshot)
  ├── retrieved_at: timestamp
  └── confidence: decimal 0-1

SourceBindingRule (in AISkillBlueprint)
  ├── claim_type: text                  (z. B. „faktische Behauptung über Kunden-Historie")
  ├── allowed_source_kinds: SourceKind[]
  └── min_confidence: decimal
```

**Pflicht (PRD v5.0 §7.5):** Jeder faktische Output muss mit `(graph_node_id, span_offset, span_length)` oder `(doc_id, page, span)` zurückbindbar sein. Outputs ohne Bindings werden vom Validierungs-Layer abgelehnt.

### 4.3 Asset-Versionierung

Assets sind versioniert. Jede Edit erzeugt eine neue Version. Vorherige Versionen bleiben lesbar (Audit + Backwards-References).

```
KnowledgeAssetVersion
  ├── asset_id, version
  ├── content_hash
  ├── changed_by: ConsultantID
  ├── change_summary: text
  ├── created_at
  └── superseded_by?: VersionID
```

Versionen werden in `Methodology.used_in_projects` als Anker referenziert: ein Projekt verweist auf eine spezifische Version der Methodology — Updates der Methodology ändern nicht rückwirkend, was ein Projekt verwendet hat.

### 4.4 BetrVG-/DSGVO-relevante Felder

In `LessonsLearned`:
- `betrvg_visibility=Aggregated-Only`: Lessons mit Berater-Bezug werden nur als Praktikus-Aggregat sichtbar; einzelner Berater-Bezug nur in Approval-gated Audit-View.
- `betrvg_visibility=ConsultantApprovalRequired`: betroffene Berater müssen Veröffentlichung der Lesson zustimmen.
- `pseudonymized=true`: Klar-Namen durch Pseudonyme ersetzt; Mapping nur in Audit-Trail.

Für `Reference` und `Stakeholder-bezogene` Asset-Inhalte gilt DSGVO-konforme Anonymisierungs-Pflicht.

---

## 5. Sub-Features im Detail

### 5.1 Asset-Library als zentrale Übersicht

UI: Hub mit Filter pro `kind`, Search-Bar, Lifecycle-Filter (default: nur Current).

**Wireframe (Library-Hub):**
```
┌────────────────────────────────────────────────────────────────────────┐
│ Knowledge & Reuse                                                       │
├────────────────────────────────────────────────────────────────────────┤
│ Suche: [▸ IT-Sourcing in Q2 2024__                ]  [Filter ▾]         │
│                                                                          │
│ Kind:  ◯ Alle  ● Methodology  ◯ Template  ◯ Clause  ◯ Lessons         │
│        ◯ Decision  ◯ Reference  ◯ AI-Skill  ◯ Repo-Template            │
│                                                                          │
│ Lifecycle:  [Current ✓]  [Draft ☐]  [Deprecated ☐]                     │
│                                                                          │
│ Ergebnisse (8)                                                           │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ IT-Sourcing-Strategie v3   · Methodology · Current · Stefan        │ │
│ │ 8 Stages, used in 5 projects, last update 2026-03-12               │ │
│ │ Tags: IT-Sourcing, Procurement, EU-Compliance                      │ │
│ │ [Öffnen]  [Verwenden in Brief]  [Verlinkung anzeigen]              │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ SOW-Template T&M-Standard v5  · Template · Current · Martina       │ │
│ │ Target: Opp/Proposal/Contract · Used 47× this year                 │ │
│ │ [Öffnen]  [Verwenden]  [Versions-History]                          │ │
│ └────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

### 5.2 Methodology-Knoten

Strukturierter Inhalt mit Stages, Inputs, Outputs.

**Methodology-Detail-Layout:**
```
┌────────────────────────────────────────────────────────────────────────┐
│ IT-Sourcing-Strategie v3                                  [Versions ▾] │
│ Stefan Kraus · Current · governance: Standard · used in 5 projects     │
├────────────────────────────────────────────────────────────────────────┤
│ Übersicht | Stages | Inputs | Outputs | Verwendungen | Diskussion       │
├────────────────────────────────────────────────────────────────────────┤
│ Beschreibung                                                            │
│ Methodologie für die Erarbeitung einer mehrjährigen IT-Sourcing-       │
│ Strategie bei DACH-Mittelstand. Anwendbar in 4–8 Wochen. Outputs       │
│ Anker-Dokumente sind Strategie-Pack, Sourcing-Matrix und Roadmap.      │
│                                                                          │
│ Stages (8)                                                              │
│  1. Stakeholder-Scoping              (3–5 Tage)                         │
│  2. Ist-Analyse Lieferanten-Landschaft (5–7 Tage)                      │
│  3. Strategische Optionen-Definition (3 Tage)                          │
│  4. Sourcing-Matrix-Workshop         (1 Tag)                            │
│  ...                                                                     │
│                                                                          │
│ Verwendet in: Heller-2024-Q3 (v3), Müller-2024-Q1 (v2), ...            │
│ Verlinkte Templates: SOW-IT-Sourcing-Template, Workshop-Pack-...        │
│ Verlinkte Lessons: 4 Lessons-Learned (3 von Stefan, 1 von Anna)         │
└────────────────────────────────────────────────────────────────────────┘
```

### 5.3 Template-Library

Templates sind nicht statische Dateien sondern **strukturierte Slots**, die Modul 2 mit Engagement-Brief-Daten füllt.

**Beispiel Template „Proposal-Section: Vorgehen":**
```
ProposalSectionTemplate "Vorgehen-Sourcing"
  parameters:
    {{methodology_anchor}}       (gebunden an Methodology-Asset)
    {{project_duration_weeks}}
    {{team_composition_summary}}
    {{stage_breakdown}}          (gebunden an Methodology.stages)
  body_de: |
    Wir empfehlen eine {{project_duration_weeks}}-wöchige Vorgehensweise nach
    der bewährten Methodologie {{methodology_anchor.title_de}}, durchgeführt
    von {{team_composition_summary}}. Die Stages im Detail:
    {{stage_breakdown}}
  body_en: |
    ...
```

Modul 2 ruft Template ab, füllt Slots, prüft Source-Bindings, generiert Section.

### 5.4 Clause Library

**Pflicht-Quelle** für ContractDraft in Modul 2. Jede Klausel hat:
- `canonical_text` in DE und EN.
- ≥1 `ClauseVariant` (Lean / Standard / Strong).
- `legal_review_status` mit Audit.
- `linked_methodologies` (z. B. SLA-Klausel ist mit Delivery-Methodology verlinkt).

**Update-Flow:**
1. Stefan / Legal schlägt Änderung vor → Draft-Version.
2. Internal review → ReviewedInternal.
3. Optional: external counsel review → ReviewedExternalCounsel.
4. MP approves → BlessedForSending → Current.

Alte Version bleibt zugänglich, aber kann nicht mehr neu in Verträgen verwendet werden.

### 5.5 Reference-Library (Case Studies)

**Publication-Approval-Gate:** Reference mit `publishable_externally=true` braucht Kunden-Consent + MP-Approval.

Default ist `publishable_externally=false` — Reference ist intern nutzbar (Tailored CV, Proposal-Section), aber nicht für Marketing.

**Anonymisierungs-Rezept (für nicht-public References):**
- Client-Name → "ein Mid-Cap-Industriekunde in DACH-Region"
- Stakeholder-Namen → "der CFO" / "die IT-Direktorin"
- Quantifizierungen bleiben (Outcomes), Identifikatoren werden generisch.

### 5.6 Lessons-Learned-Knoten

Strukturiert nach: what_happened, what_worked, what_failed, recommended_action.

**Erfassungs-Anlässe:**
- Projekt-Schluss (auto-Prompt nach Modul 5 setzt Project auf Closed).
- Opportunity Lost (siehe Modul 2 Flow F6).
- Incident / Post-Mortem (Phase 1b: aus Allocation & Delivery Modul).

**BetrVG-Visibility-Gate:**
- Berater-Bezug in `what_happened` → `betrvg_visibility=ConsultantApprovalRequired`.
- Beratungs-Aggregat (z. B. „4 Projekte mit Methodologie X scheiterten an Stakeholder-Eskalation") → `Public`.
- Client-Stakeholder-Bezug → DSGVO-Pseudonymisierungs-Vorschlag.

**Pflicht-Source-Binding:** Mindestens 1 Bezug zu `linked_project` oder `linked_opportunity` oder Audit-Quelle.

### 5.7 Decision-Record-Knoten

**Erste-Klasse-Knoten** (PRD v5.0 commitment 9). Nicht eingebettet in andere Assets, sondern eigenständig.

**Typische Auslöser:**
- Projekt-Decision: Architektur-Wahl, Vendor-Selektion, Eskalations-Pfad.
- Methodology-Decision: „Warum wir Stage 5 in Variante B gemacht haben".
- Opportunity-Decision: „Warum wir Premium-Variante priorisierten".
- Operational-Decision: interne Prozess-Entscheidungen.

**Alternativen-Pflicht:** Mindestens 1 verworfene Alternative dokumentiert mit Begründung.

**Review-Schedule:** optional, aber empfohlen für strategische Decisions („re-validate after 12 Monate").

### 5.8 Knowledge-Asset-Verlinkung

Jeder Asset hat:
- `related_assets`: andere KnowledgeAssets.
- Cross-Module-Links: ProjectID, OpportunityID, AccountID, ConsultantID, StakeholderID, MethodologyID.

Verlinkungen sind im UI per Klick navigierbar (bidirektional). „Welche Lessons sind mit Methodologie X verbunden?" ist eine einzige Graph-Traversal.

### 5.9 Semantische Suche

MVP: zweistufig.

**Stufe 1 — Volltext-Index** (Postgres FTS oder BM25 via Meilisearch / OpenSearch).
**Stufe 2 — Embedding-Search** (Sentence-Transformer EU-hosted für DE/EN; Phase 1a: Cohere-Embed-EU oder Mistral-Embed; Phase 1b: feingetunt auf Beratung-Corpus).

**Search-UX:**
- Default-Hybrid: Volltext-Treffer + Top-Semantic-Treffer mit Re-Ranking.
- Filter: kind, lifecycle, tags, owner, related entities (z. B. „nur Assets verlinkt mit Account X").
- Highlight-Spans im Trefferlisten-Preview.

**Wireframe (Search-Results):**
```
┌────────────────────────────────────────────────────────────────────────┐
│ ▸ IT-Sourcing in Q2 2024                                                │
├────────────────────────────────────────────────────────────────────────┤
│ 8 Treffer, sortiert nach Relevanz                                       │
│                                                                          │
│ ★ IT-Sourcing-Strategie v3        · Methodology · Current               │
│   "...IT-Sourcing-Strategie ist ein 8-stage approach for..."            │
│   Score: 0.92 · Verwendet 5× · Last: 2026-03-12                        │
│                                                                          │
│ ★ Heller-Gruppe-Case-Study        · Reference · Current                 │
│   "...Sourcing-Strategie für DACH-Mittelstand in Q3 2024..."           │
│   Score: 0.87 · Verlinkt: Account Heller-Gruppe                        │
│                                                                          │
│ ★ Lessons-Learned-Heller-2024     · Lessons · Aggregated-Only           │
│   "...Was wir lernten in Sourcing-Phase 2..."                          │
│   Score: 0.79 · BetrVG-Gate aktiv (Inhalt nur aggregiert sichtbar)     │
└────────────────────────────────────────────────────────────────────────┘
```

### 5.10 Source-Binding-Index

**Architektur:** Pro `ContentBlock` Span-Adressierung. Beim Speichern wird Index erzeugt (offset / length → block_id).

**Operator-Use:** Wenn Modul 2 `Suggest`-Operator eine Klausel vorschlägt, gibt der Operator `(asset_id, version, block_id, span_offset, span_length)` zurück. UI zeigt Klausel mit Klick-Verlinkung zur Quelle.

**Halluzinations-Vorfilter (PRD v5.0 §7.4):** Operator-Outputs werden gegen Source-Binding-Index validiert vor User-Anzeige. Wenn ein Output Behauptungen ohne valides Binding enthält → Reject + Re-Prompt.

### 5.11 Asset-Lifecycle

```
Draft ──[Owner publishes]──▶ Current ──[Replacement-Asset bessere Version]──▶ Deprecated
   │                                                                              │
   │ [verworfen]                                                                   │
   ▼                                                                              ▼
 Archived (read-only, audit-only)                              Archived (nach 24 Monaten)
```

- `Current`: aktive Standardwahl in Operator-Outputs.
- `Deprecated`: nicht mehr Default-Wahl, aber lesbar; Hinweis auf Successor-Asset.
- `Archived`: aus aktiven Querys ausgeschlossen.

### 5.12 Auto-Tagging (basic MVP)

MVP: regelbasiertes Tagging (z. B. „enthält IT-Sourcing-Stichwort → Tag IT-Sourcing").

Phase 1b: `Classify`-Operator für Methodology- und Domain-Tagging mit Approval-Gate.

### 5.13 AI-Skill-Blueprint-Erfassung

Aus [ProductDoc §7.2](../../Consultry-Product-Document-v1.0.md): AI-Skills sind first-class.

Beispiele:
- „Workshop-Vorbereitungs-Skill" — generiert Workshop-Deck aus Engagement Brief + Methodology + Stakeholder-Profilen.
- „Runbook-Generierungs-Skill" — generiert Runbook für Delivery-Phase aus Methodology + Risk-Map.
- „Discovery-Notiz-Skill" — strukturiert Mitschrift aus Termin-Audio (Phase 1b).

**Skill-Lifecycle:** Draft → Pilot (mit `tested_by` mind. 2 Berater:innen) → Current → Deprecated.

**Anti-Pattern explizit:** kein offener Prompt-Marktplatz. Skills sind kuratiert.

---

## 6. AI-Capabilities & Operator-Mapping

| Sub-Feature | Operator(en) | Output | Approval-Modus |
|---|---|---|---|
| 5.9 Semantische Suche | `Read` + Ranking (kein klassischer Operator) | Trefferliste | Keine (read-only) |
| 5.12 Auto-Tagging | `Classify` | Tag-Vorschläge | Inline-Approval (Owner ratifiziert) |
| 5.6 Lessons-Generation aus Projekt-Close (Phase 1a-end) | `Summarise` (aus Project-Daten + Decisions) | LessonsLearned-Draft | Approval durch Project-Lead |
| 5.7 Decision-Record-Vorschlag bei Phase-Wechsel in Modul 2/5 | `Suggest` (vorgeschlagene Decision basierend auf Pattern) | Decision-Record-Draft | Inline-Approval |
| 5.13 AI-Skill-Blueprint-Anwendung in anderen Modulen | `Read` (Blueprint laden) → Modul-eigene Operator-Chain | — | Modul-spezifisch |
| 5.10 Source-Binding-Validation | (interne Pflicht-Validation, kein eigener Operator) | Pass/Fail | Pflicht-Gate |
| 5.4 Klausel-Suggest in Modul 2 | `Suggest` + `Review` (Diff) | Klausel mit Diff-Annotation | Modul-2-Approval-Pfad |

**Verbotene Operatoren:**
- `Draft` für Methodology-Inhalte from-scratch — Methodologien sind Beratungs-IP, von Menschen authored.
- `Plan` für Decision-Records — Decisions sind menschliche Entscheidung.
- `Tool-Orchestrate` (PRD v5.0 §3 line 82) — verboten v1 modul-übergreifend.

---

## 7. Compliance & Constraints

### 7.1 Source-Binding-Enforcement (PRD v5.0 §7.5)

**Pflicht-Architektur:** jeder Operator-Output mit Knowledge-Quelle muss bind-able sein. Outputs ohne Bindings werden vor User-Anzeige verworfen.

### 7.2 Halluzinations-Vorfilter (PRD v5.0 §7.4)

Outputs werden gegen Knowledge-Index validiert:
- Behauptung „Methodology X hat Stage Y" — wird gegen `Methodology.stages` geprüft.
- Behauptung „Klausel hat Variante Z" — wird gegen `ClauseLibraryEntry.variants` geprüft.
- Bei Mismatch: Output-Reject + Re-Prompt, max 3 Iterationen, danach Hand-Off an User.

### 7.3 DSGVO

- Lessons mit Personenbezug (Mitarbeitende oder Kunden-Stakeholder) → Anonymisierungs-/Pseudonymisierungs-Workflow.
- Aufbewahrungsfristen pro Asset-Kind:
  - `Methodology`, `Template`, `Clause`, `Reference`: dauerhaft (Beratungs-IP).
  - `LessonsLearned` mit Berater-Bezug: pseudonymisiert nach 36 Monaten oder bei Berater-Austritt.
  - `DecisionRecord`: dauerhaft mit eventuellem Personenbezug-Redaction nach Frist.

### 7.4 BetrVG

- `LessonsLearned.betrvg_visibility` als Erst-Klasse-Feld.
- Berater hat Veto-Recht für eigene Lessons mit Personenbezug.
- Aggregat-Reports über Berater (z. B. „wer hat die meisten Lessons authored") nur Practice-Aggregat in Heavy-Mode.

### 7.5 AI Act

- Knowledge-Modul ist **nicht direkt** High-Risk im Sinne von Annex III. Aber: Knowledge feeds Annex-III-Outputs (Tailored CV, Staffing) und Vertragsinhalte.
- Conformity-Dokumentation muss Knowledge-Source-of-Truth-Pfade abbilden.

### 7.6 IP-Schutz

- Asset-Confidentiality (`Internal` / `Restricted` / `ExternalShareable`) als Default-Gate für Operator-Outputs.
- Restricted-Assets können nicht in extern-gehende Outputs einfließen ohne expliziten Approval.

---

## 8. Cross-Modul-Schnittstellen

### 8.1 Inputs

| Quell-Modul | Datenfluss | MVP-Pflicht? |
|---|---|---|
| **Opportunity/Proposal/Contract** | LessonsLearned bei Won/Lost; ClauseDeviation-Pattern | Ja |
| **Allocation & Delivery (Modul 5)** | LessonsLearned bei Project-Close; ProjectExperience für Methodology.used_in_projects | Ja |
| **Consultant/Capacity** | KnowledgeContribution (Authorship-Counter) | Ja |
| **Account Growth** | Account-Patterns (z. B. „Industrie X kommt häufiger") als Tag-Material | Ja |

### 8.2 Outputs

| Ziel-Modul | Datenfluss | MVP-Pflicht? |
|---|---|---|
| **Opportunity/Proposal/Contract** | Methodologies (Brief-Anker), Templates (Proposal-Sections), ClauseLibrary (Vertrag), References (CV-Material), Pricing-Templates | Ja |
| **Allocation & Delivery (Modul 5)** | Methodology (Stages → Milestones), Runbook-Templates | Ja |
| **Account Growth** | LessonsLearned (Briefing-Warnsignale), Reference (für externe Marketing-Use) | Ja |
| **Capacity** | KnowledgeContribution aggregiert pro Berater | Ja |
| **AI Workspace (Phase 1b)** | AISkillBlueprint → Workspace lädt Blueprint und führt aus | Phase 1b |
| **QA-Layer (Phase 1b)** | Methodology als Standard für Review-Operator | Phase 1b |

### 8.3 Sidecars

- **Governance & Audit:** alle Asset-Lifecycle-Events + Operator-Aufrufe.
- **Source-Binding-Index:** wird modulübergreifend ge-querried (von Modul 2, Modul 5).

---

## 9. Erfolgskriterien MVP

1. **Mindest-Kuratierung:** 1 Methodologie, 5 Templates, 20 ClauseLibraryEntries, 3 References, 2 AISkillBlueprints bei Pilot-Start.
2. **Source-Binding-Coverage:** 100 % der MVP-Operator-Outputs in Modul 2 sind bindbar.
3. **Search-Latenz:** Median <500 ms für Volltext-Trefferliste; <1.5 s für Embedding-Search.
4. **Asset-Reuse-Rate:** ≥3 Verwendungen pro Asset im ersten Quartal bei Pilot-Beratung.
5. **Lessons-Authoring:** ≥1 Lesson pro Projekt-Schluss in Modul 5.
6. **0 Outputs** ohne Source-Binding extern gesendet.
7. **Halluzinations-Quote:** <2 % der Operator-Outputs werden vom Vorfilter abgelehnt (Indikator für Operator-Qualität).

---

## 10. Offene Fragen (Co-Build)

| ID | Frage | Wer entscheidet | Bis wann |
|---|---|---|---|
| Q1 | Methodology-Schema-Tiefe — 8 Stages reichen pro Methodology? Oder flexible Stage-Count mit Sub-Stages? | Pilot + Consultry | Pre-Pilot |
| Q2 | Template-Slots: wie ausdrucksstark? Sind Markdown-Templates + Jinja-Style Slots ausreichend, oder brauchen wir Rich-Editor? | Consultry | Pre-Pilot |
| Q3 | Clause-Library-Bootstrap: 20 Klauseln genug? Welche jurisdiction-Defaults zwingend (DE/AT/CH/EU)? | Beratung + Legal | Pre-Pilot |
| Q4 | Reference-Anonymisierung: Manuell pro Reference vs Template-getrieben? | Beratung | Pre-Pilot |
| Q5 | Embedding-Provider: Cohere-EU vs Mistral-EU vs self-hosted SBERT — welche Latenz/Qualitäts-Balance? | Consultry | Phase 1a Mid |
| Q6 | Auto-Tagging-Aggressivität: aggressiv mit Approval-Pflicht vs konservativ mit höherer Schwelle? | Beratung | Pre-Pilot |
| Q7 | Knowledge-Authorship-Statistiken: Personen-Bezug akzeptabel bei MP-Reporting (Standard) oder nur aggregat (BetrVG-Heavy)? | Beratung + BR | Pre-Pilot |
| Q8 | RepoTemplate-Integration: GitHub vs GitLab vs Bitbucket? Read-only MVP, Spawning Phase 2? | Consultry | Phase 1a |
| Q9 | Sourcing für ClauseLibrary-Initial-Bootstrap: Bestandsverträge der Pilot-Beratung importieren oder Mustervertrags-Bootstrap? | Beratung + Consultry | Pre-Pilot |
| Q10 | AISkillBlueprint-Diskoverability: globale Bibliothek vs pro-Beratung-eigene Sammlung? | Consultry | Phase 1a |
| Q11 | DecisionRecord-Pflicht-Workflow: Auto-Prompt bei Phase-Wechsel oder rein opt-in? | Beratung | Pre-Pilot |
| Q12 | Mehrsprachigkeit: DE/EN-Pflicht für alle Assets oder per Asset einsprachig erlaubt? | Beratung | Pre-Pilot |

---

## 11. Anti-Patterns

| Anti-Pattern | Warum nicht |
|---|---|
| Knowledge als Wiki ohne Verlinkung | Reduziert das Modul auf Sharepoint-Klon; Differenzierer (Graph-Integration) verschwindet |
| Auto-Übersetzte Methodologien (DE → EN via Operator) | Methodologie ist IP, Übersetzung braucht Owner-Approval |
| Templates als statische PDFs hochladen | Schließt Slot-Filling und Source-Binding aus |
| Lessons als reine Freitext-Spalte ohne Struktur | Nicht abrufbar für Pattern-Detection; verschwindet im Rauschen |
| Personenbezogene Lessons ohne BetrVG-Visibility-Gate | BR-Sprengstoff; reines Compliance-Risiko |
| ClauseLibrary editiert direkt in Production ohne Versionierung | Backwards-Compat-Risiko; Vertrags-Audit nicht möglich |
| References mit echten Client-Namen ohne Consent veröffentlicht | DSGVO + Vertrauensverlust |
| AI generiert Methodologie-Stages ohne Source | Erstellung von Beratungs-IP durch AI ist Anti-Pattern (PRD-Prinzip „AI assistiert, der Mensch authored Methodologie") |
| Decisions ohne Alternatives_considered | Audit-Wert sinkt; Decision wird zu „Was wir entschieden" statt „Warum wir entschieden" |
| Asset-Lifecycle ohne Deprecated-Hinweis (Hard-Delete) | History-Verlust; alte Verträge referenzieren tote Klauseln |
| Embedding-Search als single source of truth ohne Volltext-Fallback | Embedding-Drift kann produktiv-Sucher den Boden unter den Füßen wegziehen |
| Open Prompt-Marktplatz ohne Governance | ProductDoc §13 explizit exklusiert |

---

## 12. Verweise

- [Roadmap §3.2](../../business-definitions/Consultry-Roadmap-v1.0-MVP-and-Phasing.md), [§5.1 QA-Layer](../../business-definitions/Consultry-Roadmap-v1.0-MVP-and-Phasing.md)
- [PRD v5.0 §4.1 Knowledge-Entities](../../technical-definitions/Consultry-PRD-v5.0-Software-Layered.md), [§7.4 Halluzinations-Vorfilter](../../technical-definitions/Consultry-PRD-v5.0-Software-Layered.md), [§7.5 Source-Binding](../../technical-definitions/Consultry-PRD-v5.0-Software-Layered.md)
- [PRD v4.1 §3 Knowledge & Reuse](../../Consultry-PRD-v4.0-DACH-Operating-System.md)
- [ProductDoc §7.2 AI-Skills](../../Consultry-Product-Document-v1.0.md), [§10.2 Reuse-Wedge](../../Consultry-Product-Document-v1.0.md)
- [Personas: Stefan (Knowledge), Lisa (Consumer), Katrin (Consumer), Thomas (Aggregate-Konsument)](../../Consultry-Target-Personas-v1.0.md)
- Schwester-Module: [01-account-growth/spec.md](../01-account-growth/spec.md), [02-opportunity-proposal-contract/spec.md](../02-opportunity-proposal-contract/spec.md), [03-consultant-team-capacity/spec.md](../03-consultant-team-capacity/spec.md)
- Flows: [flows.md](./flows.md)
