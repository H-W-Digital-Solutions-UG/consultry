# Consultry - Virtual Harness & Second Brain Refinement v1.0

**Status:** Planning Source. Harness-Boundary ist durch ADR-002 accepted; Second-Brain-/Connector-/Hypergraph-Tiefe bleibt gated durch MVP-PRD und Alignment Control Plane.  
**Datum:** 27.06.2026  
**Rolle im Doc-Stack:** Erweitert den AWS/Hermes-Plan vom isolierten Sandbox-Job zu einem **Virtual Harness Client** mit Corpus, MCP/local tooling, DOCX/Word, lokalen Dateien, Datenbank-Connectors und Second-Brain-Compilation.  
**Bezug:** [Alignment Control Plane](./Consultry-Alignment-Control-Plane-v1.0.md), [MVP Architecture ADR](./Consultry-MVP-Architecture-ADR-v1.0.md), [Backend/IaC Design](./Consultry-MVP-Backend-IaC-Software-Design-v1.0.md), [AWS/Hermes Architecture](./Consultry-MVP-AWS-Hermes-Architecture-v1.0.md), [Backend/IaC Grill-Me](./Consultry-MVP-Backend-IaC-Grill-Me-v1.0.md).

**FigJam Board:** https://www.figma.com/board/yrvsmZHxeNo7GoypjfagrI  
Neue Sicht im Board: **Consultry Virtual Harness and Second Brain Architecture**.

> **Kurzfassung.** Hermes wird nicht mehr als "eine Sandbox mit CorpusBundle" gedacht, sondern als **Virtual Harness Client**: eine cloud-basierte, policy-gesteuerte Arbeitsumgebung pro Job/Session. Sie bekommt ein `HarnessPack` aus Corpus, Memory, Tool-Adaptern, Connector-Grants, Credentials, Policies und Output-Schemas. So kann das Modell mit dem notwendigen Arbeitskontext arbeiten: Firmenkorpus, Word/DOCX-Artefakte, lokale Dateien, MCP-Tools, Datenbank-Views und Integrationen - aber immer begrenzt, auditierbar und ohne freie Tenant-weite Suche.

---

## 1. Neuer Kernbegriff

### Virtual Harness Client

Ein **Virtual Harness Client** ist eine ephemeral, tenant- und job-scoped Cloud-Arbeitsumgebung, die fuer einen konkreten Operator-Job gestartet wird. Sie emuliert die praktische Arbeitsumgebung eines Consultants, ohne unkontrolliert dessen Rechner oder Tenant-Korpus zu oeffnen.

Er darf:

- ein `CorpusPack` lesen,
- ein `MemoryPack` lesen,
- erlaubte Tools aus einem `ToolPack` nutzen,
- erlaubte Connectoren ueber `ConnectorGrant`s aufrufen,
- strukturierte Artefakte erzeugen,
- DOCX/Word-Artefakte analysieren oder vorbereiten,
- Ergebnisse als `ResultBundle` abgeben.

Er darf nicht:

- direkt in Aurora schreiben,
- Tenant-weite Suche ausfuehren,
- lokale Dateien live crawlen,
- beliebige MCP-Server starten,
- unbounded Internetzugriff nutzen,
- Credentials selbst speichern,
- ohne menschliche Freigabe verbindliche Work-Artefakte erzeugen.

### HarnessPack

```json
{
  "schema_version": "1.0",
  "tenant_id": "t_123",
  "session_id": "vh_456",
  "job_id": "hj_789",
  "operator": "draft-concept-docx",
  "corpus_pack": "s3://.../corpus/manifest.json",
  "memory_pack": "s3://.../memory/manifest.json",
  "tool_pack": "s3://.../tools/manifest.json",
  "connector_grants": ["m365.files.read", "word.docx.transform", "local.files.snapshot.read"],
  "credential_scope": "job-scoped",
  "network_policy": "no-public-egress",
  "output_schema": "schemas/docx_draft_result.v1.json",
  "ttl_minutes": 60,
  "audit_correlation_id": "corr_abc"
}
```

**Wichtig:** Das `HarnessPack` ist die neue zentrale Grenze. Nicht das Modell entscheidet, welche Tools oder Daten es braucht. Der `HarnessOrchestrator` baut ein begrenztes Paket, das vom `ResultVerifier` wieder vollstaendig geprueft werden kann.

---

## 2. 5 Iterationen Self-Validation

### Iteration 1 - Sandbox reicht nicht

**Ausgangsproblem:** Der bisherige Plan sagt "Hermes bekommt ein CorpusBundle". Das ist sicher, aber fuer echte Arbeit zu duenn. Ein guter Proposal-/Work-Agent braucht oft DOCX-Layout, lokale Vorlagen, M365-Dateien, Datenbankauszuege, vorhandene Angebotsartefakte und Tooling.

**Failure Case:** Modell erzeugt brauchbaren Text, aber scheitert am realen Arbeitsprodukt: falsche Word-Struktur, fehlende Anlagen, nicht beruecksichtigte lokale Vorlage, keine Daten aus kundeneigener Quelle.

**Verbesserung:** `CorpusBundle` wird zu `HarnessPack` erweitert:

- `CorpusPack`: Quellen/Chunks/Spans.
- `MemoryPack`: verdichtete Second-Brain-Objekte.
- `ToolPack`: zugelassene Tools und Versionen.
- `ConnectorPack`: erlaubte Integrationen.
- `CredentialPack`: kurzlebige, scoped Credentials.
- `PolicyPack`: Netzwerk/IAM/Tool/PII-Regeln.
- `OutputContract`: Schema, Artefaktarten, Citation-Anforderungen.

**Neuer Test:** Ein Harness-Job darf nicht starten, wenn ein benoetigtes Pack fehlt oder ein Tool nicht im `ToolPack` whitelisted ist.

### Iteration 2 - Integrationen muessen first-class sein

**Ausgangsproblem:** "Connector Worker" ist zu generisch. Der User braucht lokale Dateien, lokale PC-Tools, MCP, Word/DOCX, Datenbankverbindungen und Cloud-Sources.

**Failure Case:** Jede neue Integration wird Sonderlogik im Worker. Das fuehrt zu unsauberen Berechtigungen, schwer pruefbaren Toolaufrufen und schlechter Modellperformance.

**Verbesserung:** Ein `ConnectorBroker` und ein `MCPGateway` werden first-class:

- `MCPGateway`: registriert MCP-Server, Tools, Resources und erlaubte Scopes.
- `ConnectorBroker`: erzeugt Snapshots aus M365, SharePoint/OneDrive, lokalen Dateien, Datenbank-Views und externen Quellen.
- `ToolRegistry`: versioniert Adapter wie `docx.extract`, `docx.render`, `docx.diff`, `sql.readonly.query`, `m365.drive.delta`, `local.files.snapshot`.
- `LocalHarnessRelay`: optionaler lokaler Agent beim Kunden, der outbound TLS nutzt und nur explizite Snapshots oder genehmigte Toolcalls erlaubt.

**Neuer Test:** Ein Connector muss mit `ConnectorGrant`, `DataClass`, `Purpose`, `TTL`, `SourceBindingPolicy` und `AuditPolicy` registriert sein, sonst kann kein HarnessPack ihn referenzieren.

### Iteration 3 - Second Brain ist eigene Graph-Schicht

**Ausgangsproblem:** Korpus-Retrieval allein ist nicht genug. Consultry soll Dokumente, Projekterfahrung, Profile, Angebote, Vertraege, Brand-/Marketing-Artefakte und Knowledge Base aligned halten.

**Failure Case:** Das System findet Dokumente, versteht aber nicht den aktuellen Firmenstand: welche Methode aktuell gilt, welches Angebot gewonnen wurde, welche Referenz freigegeben ist, welche Brand-Formulierung nicht mehr benutzt werden soll.

**Verbesserung:** Second Brain als kompilierte Graph-/Triple-/Hypergraph-Schicht:

```text
Raw Sources -> Parsed Corpus -> Observations -> Graph Assertions -> Memory Packs -> Work Artifacts
```

MVP-Entities:

- `memory_nodes`: document, artifact, fact, method, reference, profile_claim, brand_rule, offer_pattern, contract_clause, project_lesson, tender_criterion, source_span.
- `memory_triples`: subject-predicate-object assertions, e.g. `ReferenceA uses MethodB`, `BrandRuleX supersedes BrandRuleY`.
- `memory_edges`: property-graph edges for binary relations, e.g. supports, supersedes, derived_from, used_in, contradicts, approved_for.
- `memory_hyperedges`: n-ary assertions where a simple edge is too weak.
- `memory_hyperedge_roles`: participants in a hyperedge with roles, e.g. project, client, method, consultant_role, timeframe, source_span.
- `memory_versions`: immutable snapshots.
- `memory_packs`: job-scoped slices fuer Harness.

Hyperedge example:

```json
{
  "relation_type": "project_used_method_for_client",
  "roles": {
    "project": "node_project_123",
    "client": "node_account_456",
    "method": "node_method_zero_trust",
    "consultant_role": "node_role_security_architect",
    "timeframe": "2025-Q4",
    "evidence": "source_span_789"
  },
  "provenance_class": "Firm-Fact",
  "approval_state": "approved"
}
```

**Neuer Test:** Ein alter Brand-/Methodenbaustein darf nicht in ein neues Draft einfliessen, wenn ein `supersedes` Edge mit neuer freigegebener Version existiert.

### Iteration 4 - Orchestrierung braucht Capability Tokens

**Ausgangsproblem:** "Tool erlaubt" ist zu grob. Ein Word-Tool darf z. B. eine DOCX-Datei rendern, aber nicht beliebige lokale Dateien lesen. Ein DB-Connector darf eine freigegebene View lesen, aber keine SQL-Freiform gegen Produktivtabellen ausfuehren.

**Failure Case:** Ein Harness-Job nutzt einen erlaubten Connector in einem nicht erlaubten Scope.

**Verbesserung:** Jeder Harness-Job bekommt kurzlebige Capability Tokens:

- `cap:corpus.read:{job_id}`
- `cap:memory.read:{memory_pack_id}`
- `cap:docx.render:{artifact_id}`
- `cap:m365.drive.read:{drive_id}:{path_prefix}`
- `cap:local.snapshot.read:{snapshot_id}`
- `cap:db.view.query:{connection_id}:{view_name}`
- `cap:result.write:{job_id}`

**Neuer Test:** Toolaufrufe werden gegen Capability Tokens validiert. Ohne Token gibt es keine Ausfuehrung, auch wenn der Connector technisch erreichbar waere.

### Iteration 5 - Modellperformance wird Harness-Performance

**Ausgangsproblem:** Modellqualitaet wird oft als Prompt-/Model-Auswahl verstanden. Fuer Consultry wird die Qualitaet stark durch Harness-Qualitaet bestimmt: Quellen, Memory, Tools, Output-Schema, Evaluation.

**Failure Case:** Das Modell wird gewechselt, aber die Ergebnisse bleiben schlecht, weil der Harness falsche Quellen, stale Memory, schlechte DOCX-Extraktion oder unvollstaendige Tool-Kontexte liefert.

**Verbesserung:** Neue Eval-Kategorien:

- `context_coverage`: Sind die richtigen Quellen im Pack?
- `tool_fit`: Sind die richtigen Tools erlaubt?
- `memory_freshness`: Wurden superseded Memory Nodes ausgeschlossen?
- `docx_fidelity`: Bleiben Struktur, Tabellen und Styles stabil?
- `db_scope_safety`: Wurde nur gegen erlaubte Views gelesen?
- `mcp_call_safety`: Waren alle Toolcalls policy-konform?
- `claim_grounding`: Hat jeder Fakt ein SourceBinding?
- `artifact_acceptance`: Wie viel muss der Consultant nacharbeiten?

**Neuer Test:** Jede PMF-kritische Demo bekommt neben Prompt-Eval auch Harness-Eval.

---

## 3. Architektur nach Refinement

```mermaid
flowchart LR
  web[Consultant Web App] --> edge[CloudFront WAF ALB]
  word[Word Add-in] --> edge
  relay[Local Harness Relay] --> edge
  edge --> api[Modular API]

  api --> orchestrator[Harness Orchestrator]
  orchestrator --> broker[Connector Broker]
  orchestrator --> mcp[MCP Gateway]
  orchestrator --> pack[HarnessPack Builder]
  orchestrator --> vhc[Virtual Harness Client]

  broker --> m365[Microsoft Graph]
  broker --> local[Local Files Snapshot]
  broker --> db[Read-only DB Views]
  broker --> docx[DOCX Worker]

  pack --> corpus[CorpusPack]
  pack --> memory[MemoryPack]
  memory --> graph[Graph Triples Hyperedges]
  pack --> tools[ToolPack]
  pack --> policy[PolicyPack]

  vhc --> model[ModelGateway]
  vhc --> result[ResultBundle]
  result --> verifier[ResultVerifier]
  verifier --> aurora[Aurora RLS pgvector]
  verifier --> audit[AuditEntry]
```

**Hinweis:** Das Diagramm im FigJam Board ist die editierbare Architekturvariante. Mermaid hier ist die textuelle Source-Sicht.

---

## 3.1 Semantic Graph / Triples / Hypergraph

The Second Brain stores several relationship forms because the consulting domain has more than binary links:

| Form | Use | Example | MVP storage |
|---|---|---|---|
| Node | Dinge, Artefakte, Claims, Quellen | `Method: Zero Trust Assessment` | `memory_nodes` |
| Triple | einfache Aussage | `(ReferenceA, uses_method, ZeroTrustMethod)` | `memory_triples` |
| Property edge | gerichtete Beziehung mit Eigenschaften | `BrandRuleV2 supersedes BrandRuleV1` | `memory_edges` |
| Hyperedge | mehrstellige Aussage | `Project P used Method M for Client C with Role R in Time T, evidenced by Span S` | `memory_hyperedges` + `memory_hyperedge_roles` |
| Projection | abgeleitete Lesesicht fuer Retrieval/Harness | approved references by method and industry | materialized view / `memory_pack_items` |

MVP rule:

- **Aurora remains the source of truth** for graph/triple/hypergraph assertions.
- Dedicated graph DB is still deferred.
- Export adapters can later emit RDF N-Triples or property-graph CSV for Neptune/OpenCypher/SPARQL analytics.
- Hyperedges are represented as first-class relation records with typed participant roles, not as lossy text blobs.

Graph assertion contract:

```text
memory_assertion
  -> node/triple/edge/hyperedge
  -> provenance_class
  -> source_binding_id
  -> approval_state
  -> valid_from / valid_until
  -> confidence
  -> superseded_by?
```

Every graph assertion that can influence a proposal, profile, time summary, project status or brand output must be source-bound and approval-aware.

### 3.2 Skill Graph

The **Skill Graph** is a first-class projection of the Second Brain. It is not a scoring system and not a person-ranking feature. It models evidence-backed capability claims so Concept, TeamShape and Work-Hero flows can reason about skills without violating the MVP's no-performance-scoring rule.

Core nodes:

- `skill`: taxonomy entry, synonym set, category, parent skill.
- `skill_claim`: claim that a consultant/team/company has used or proven a skill.
- `certification`: certifying body, certificate, expiry, evidence.
- `project_experience`: project, role, outcome, timeframe, source spans.
- `consultant_profile`: person-bound profile, visible only under profile rules.
- `team_shape_requirement`: anonymous skill/seniority need for a bid.
- `reference_asset`: reusable proof point for proposals.

Core edges/triples:

- `(consultant_profile, has_skill_claim, skill_claim)`
- `(skill_claim, refers_to_skill, skill)`
- `(skill_claim, evidenced_by, source_span)`
- `(certification, certifies_skill, skill)`
- `(project_experience, used_skill, skill)`
- `(team_shape_requirement, requires_skill, skill)`
- `(reference_asset, proves_capability, skill)`

Skill hyperedge example:

```json
{
  "relation_type": "consultant_used_skill_in_project",
  "roles": {
    "consultant_profile": "node_profile_123",
    "skill": "node_skill_aws_security",
    "project": "node_project_456",
    "role": "node_role_cloud_security_architect",
    "timeframe": "2025-Q2",
    "evidence": "source_span_abc"
  },
  "visibility": "profile-owner-and-aggregated-bid-use",
  "scoring_allowed": false
}
```

MVP use:

- TeamShape gets anonymous/aggregated skill availability.
- Proposal drafts get source-bound capability proof.
- ConsultantProfile gets human-confirmed skill maintenance.
- No person ranking, no performance score, no named staffing in MVP.

---

## 4. Integrationsfamilien

| Familie | Adapter | MVP-Zweck | Sicherheitsregel |
|---|---|---|---|
| DOCX/Word | `docx.extract`, `docx.render`, `docx.diff`, Word Add-in | Proposal-/Konzeptartefakte lesen, erstellen, vergleichen, in Word zurueckspielen | kein Makro-Ausfuehren, keine externen Links automatisch aufloesen |
| Microsoft 365 | Graph Drive/SharePoint/OneDrive, optional Mail/Calendar read-only | Corpus-Sync, Vorlagen, CVs, Angebote, Projektdateien | delta/snapshot statt Live-Crawl, tenant grant required |
| Google Drive | Drive API files/list/export/download/changes | Google Workspace Dateien, Docs/Slides/Sheets-Exports, Vorlagen | read-only snapshot, folder allowlist, export hashes |
| GitHub | repo contents, issues, PRs, releases, webhooks | Code-/Runbook-/Architecture-Artefakte, delivery evidence, skill evidence | read-only app permissions, repo allowlist |
| GitLab | project/repository files, issues, merge requests, webhooks | Code-/CI-/delivery evidence analog GitHub | read-only token, project/group allowlist |
| Jira / Atlassian | Jira REST/JQL, approved webhooks, Confluence REST/CQL | Project Work Items, Epics, Requirements, Decisions, Runbooks, projektbezogene Knowledge | read-only/snapshot, project/space allowlist, no ticket mutation |
| ServiceNow | Table API / approved ITSM views | Incidents, Problems, Changes, Requests, CMDB refs as ProjectSignals | read-only tables/views, role-scoped service account |
| Local Files | Local Harness Relay | Kundenordner, lokale Templates, lokale Exportartefakte als Snapshot | outbound TLS, allowlist paths, snapshot hash, no live crawl |
| MCP | MCPGateway | lokale oder cloudbasierte Tools/Resources kontrolliert nutzbar machen | server registry, tool allowlist, capability token |
| SQL Databases | `sql.readonly.query` | CRM/PSA/DMS-Auszuege, Reporting-Views, Referenzdaten | nur read-only views, parameterisierte Queries, row caps |
| NoSQL Databases | `nosql.mongo.find`, `nosql.dynamo.query`, `nosql.redis.scan` | dokumentbasierte oder key-value Quellen als Snapshot | read-only, collection/table/key allowlist, row/item caps |
| Clay | HTTP API / table export adapter | GTM-/Enrichment-Artefakte als importierter Korpus | import/snapshot only; no autonomous enrichment/outreach |
| Apollo | Apollo API / Apollo MCP where approved | Account/person/company enrichment for approved GTM use cases | read-only/enrichment snapshot; no sequences/outbound in MVP |
| Browser/Web | trusted research connector | externe Quellen, Normen, TED/eForms, Whitelist-Research | nicht aus Harness frei; nur ueber trusted Connector |
| Design/Brand | artifact connector | Brand-Guidelines, Logos, Deck-/Website-Artefakte als Memory Nodes | nur freigegebene Assets in MemoryPack |

**MVP integration posture:** "MVP needs integrations" means the harness substrate can ingest and snapshot these systems. It does **not** mean autonomous writeback, outreach, sequence management, code modification, ticket mutation or hidden performance monitoring. All MVP connector outputs are corpus/second-brain inputs unless an explicit later ADR unlocks a write path.

---

## 5. Datenmodell-Erweiterung

Neue Tabellen/Artefakte:

```text
harness_sessions
harness_packs
harness_pack_items
tool_registry_entries
connector_accounts
connector_grants
mcp_servers
mcp_tool_invocations
local_file_snapshots
db_connection_profiles
db_readonly_views
nosql_connection_profiles
nosql_readonly_scopes
docx_artifacts
docx_render_snapshots
github_connector_states
gitlab_connector_states
google_drive_connector_states
clay_connector_states
apollo_connector_states
memory_nodes
memory_triples
memory_edges
memory_hyperedges
memory_hyperedge_roles
memory_assertions
memory_versions
memory_packs
capability_tokens
```

RLS-Regel:

- Alle Tabellen tenant-scoped.
- `capability_tokens` sind job-scoped und kurzlebig.
- `mcp_tool_invocations` speichern keine Rohdaten, sondern Tool, Scope, Input-/Output-Hash, DataClass und SourceBindingRefs.
- `local_file_snapshots` speichern Hash, Pfad-Alias, SourceBinding und optional extrahierten Text; keine ungefragte Pfadliste.
- `memory_triples`, `memory_edges` und `memory_hyperedges` sind `tenant_id`-scoped und verweisen auf `memory_assertions`.
- `memory_assertions` erzwingen Provenance, SourceBinding, Approval-State und Versionierung.
- Hyperedge-Teilnehmer stehen in `memory_hyperedge_roles` mit `role_name`, `node_id` oder literal value; keine n-ary Aussage wird als unstrukturierter JSON-Blob persistiert, wenn sie fuer Retrieval, Scoring oder Audit relevant ist.
- Connector state tables speichern Cursor/Delta-Token/Webhook-Positionen und Hashes, aber keine unkontrollierten Vollspiegel fremder Systeme.
- NoSQL scopes enthalten erlaubte Collections/Tables/Key-Prefixes, Projektionen und Row/Item Limits.

---

## 6. Orchestration Contract

```text
User intent
  -> HarnessOrchestrator
  -> PolicyResolver
  -> ConnectorBroker snapshot
  -> SecondBrainCompiler slice
  -> HarnessPackBuilder
  -> VirtualHarnessClient execution
  -> ResultVerifier
  -> proposed WorkArtifact
  -> human Approval
  -> persisted state
```

Hard gates:

1. Kein Harness ohne `HarnessPack`.
2. Kein Tool ohne `ToolRegistryEntry`.
3. Kein Connector ohne `ConnectorGrant`.
4. Kein DB-Zugriff ohne read-only view.
5. Kein lokaler Zugriff ohne Snapshot und User-/Tenant-Grant.
6. Kein DOCX-Ergebnis ohne render/diff validation.
7. Kein Fakt ohne SourceBinding.
8. Kein persistierter State ohne Approval/Audit.

---

## 7. DOCX/Word-Flow

1. User startet aus Web App oder Word Add-in einen Draft-/Review-Job.
2. API erzeugt `harness_session`.
3. ConnectorBroker holt:
   - aktuelle DOCX-Datei aus Word Add-in Upload oder Microsoft Graph DriveItem,
   - relevante Vorlagen/Brand-Regeln,
   - relevante Proposal-/Referenz-Memory.
4. DOCX Worker extrahiert Struktur:
   - Paragraphs,
   - Headings,
   - Tables,
   - Comments,
   - styles,
   - embedded asset references.
5. SecondBrainCompiler baut `MemoryPack`.
6. VirtualHarnessClient erzeugt structured edits, nicht blindes Voll-DOCX.
7. DOCX Worker rendert/difft neues Artefakt.
8. ResultVerifier prueft:
   - SourceBindings,
   - keine verbotenen Felder,
   - Style-/Template-Konformitaet,
   - Render-Sanity.
9. Mensch akzeptiert in Web App oder Word Add-in.

MVP-Output:

- `docx_edit_plan.json`
- `draft_section_result.json`
- optional neue `.docx` als Vorschauartefakt
- `render_snapshot.pdf/png` fuer Review

---

## 8. Self-Validation Gates

| Gate | Test |
|---|---|
| HarnessPack completeness | required packs and grants exist |
| Tool policy | unlisted MCP/Tool call is rejected |
| Local relay safety | path not allowlisted -> rejected |
| DB safety | arbitrary SQL -> rejected; approved view query -> allowed |
| NoSQL safety | unapproved collection/table/key prefix rejected |
| DOCX fidelity | fixture render/diff stays within expected changes |
| Memory freshness | superseded nodes excluded |
| Graph consistency | triples and hyperedges have valid participants and source-bound assertions |
| Hyperedge retrieval | n-ary project/method/client/role facts survive MemoryPack slicing |
| Skill Graph safety | skill claims require evidence and never produce person ranking |
| Connector coverage | M365, GitHub, GitLab, Google Drive, local files, SQL, NoSQL, Clay, Apollo fixture snapshots import |
| Source grounding | every fact has CitationLink |
| Prompt injection | corpus instruction cannot alter tool policy |
| Audit | every connector/tool/model call has AuditEntry or invocation hash |
| PMF demo realism | 1 contract + 3-5 proposal docs + template + brand rules can produce grounded draft |

---

## 9. WBS Addendum

All items remain 500-1000 LOC max.

| ID | Package | Scope | Max LOC | Acceptance |
|---|---|---|---|---|
| VH-01 | HarnessPack contracts | Pack schemas, capability token schema | 800 | schema fixtures pass/fail |
| VH-02 | ToolRegistry | tool entries, versions, scopes | 800 | unregistered tool rejected |
| VH-03 | MCPGateway v0 | registered MCP server/tool invocation facade | 1000 | fake MCP server toolcall audited |
| VH-04 | ConnectorGrant model | accounts, grants, purposes, TTL | 900 | no connector call without grant |
| VH-05 | LocalHarnessRelay protocol | outbound relay handshake and snapshot request | 1000 | deny unallowlisted path |
| VH-06 | Local file snapshot adapter | snapshot hash, metadata, extracted text | 900 | no live crawl, only explicit snapshot |
| VH-07 | Microsoft Graph files adapter | DriveItem download/delta skeleton | 1000 | changed file fixture imported |
| VH-08 | Word Add-in contract | add-in callback/API and edit-plan format | 900 | edit plan roundtrip fixture |
| VH-09 | DOCX Worker v0 | extract/render/diff DOCX artifacts | 1000 | fixture DOCX render sanity |
| VH-10 | DB read-only connector | connection profile, approved views, query caps | 1000 | arbitrary SQL rejected |
| VH-11 | SecondBrain schema | memory nodes/edges/versions/packs | 1000 | superseded node test |
| VH-12 | MemoryPack builder | job-scoped memory slice | 900 | only approved memory included |
| VH-13 | Harness evaluator | coverage/tool/memory/docx/db safety report | 900 | eval report generated for demo case |
| HG-01 | Graph assertion schema | assertion table, provenance, source binding, approval | 900 | unapproved assertion excluded |
| HG-02 | Triple store tables | subject-predicate-object with literal/node object | 900 | simple SPO fixture retrievable |
| HG-03 | Hyperedge tables | relation + participant roles | 1000 | n-ary project-method-client-role fixture |
| HG-04 | GraphPack builder | triples/hyperedges sliced into MemoryPack | 900 | only relevant approved graph facts included |
| HG-05 | Recursive traversal helpers | bounded Postgres CTE helpers with cycle checks | 900 | cyclic graph fixture terminates |
| HG-06 | Graph export adapter | RDF N-Triples/property graph CSV export skeleton | 800 | export fixture roundtrip hashes |
| SG-01 | Skill taxonomy schema | skill nodes, synonyms, hierarchy | 800 | synonym and parent fixture |
| SG-02 | Skill claim schema | consultant/company skill claims with evidence | 900 | claim without evidence rejected |
| SG-03 | Skill hyperedges | consultant/project/skill/role/time/evidence relation | 1000 | n-ary skill evidence fixture |
| SG-04 | TeamShape projection | anonymous skill availability for bids | 900 | no named person leaves projection |
| INT-01 | M365 connector | Graph files/delta snapshot | 1000 | changed DriveItem imported |
| INT-02 | Google Drive connector | files/export/changes snapshot | 1000 | changed file exported and hashed |
| INT-03 | GitHub connector | repo contents/issues/PR snapshot | 1000 | repo allowlist enforced |
| INT-04 | GitLab connector | project repository/MR snapshot | 1000 | project allowlist enforced |
| INT-05 | Local files connector | relay snapshot and path allowlist | 1000 | denied path test |
| INT-06 | SQL connector | read-only views and query caps | 1000 | arbitrary SQL rejected |
| INT-07 | NoSQL connector | Mongo/Dynamo/Redis read-only scopes | 1000 | unapproved collection rejected |
| INT-08 | Clay connector | import/export snapshot adapter | 900 | no outbound action available |
| INT-09 | Apollo connector | account/person/company enrichment snapshot | 900 | sequences/outbound calls unavailable |

---

## 10. Source Basis

- Model Context Protocol docs: https://modelcontextprotocol.io/docs/concepts/architecture
- Microsoft Graph DriveItem content API: https://learn.microsoft.com/en-us/graph/api/driveitem-get-content?view=graph-rest-1.0
- Microsoft Graph DriveItem delta API: https://learn.microsoft.com/en-us/graph/api/driveitem-delta?view=graph-rest-1.0
- Office Add-ins / Word Open XML guidance: https://learn.microsoft.com/en-us/office/dev/add-ins/word/create-better-add-ins-for-word-with-office-open-xml
- Google Drive API files/list/export: https://developers.google.com/workspace/drive/api/reference/rest/v3/files/list, https://developers.google.com/workspace/drive/api/reference/rest/v3/files/export
- Atlassian Jira Cloud REST issue search/webhooks and Confluence REST/CQL: https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issue-search/, https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-webhooks/, https://developer.atlassian.com/cloud/confluence/rest/v1/api-group-search/
- ServiceNow REST/Table API: https://www.servicenow.com/docs/r/api-reference/rest-apis/c_TableAPI.html
- GitHub REST API repositories/contents: https://docs.github.com/en/rest, https://docs.github.com/rest/repos/contents
- GitLab REST API repository files/projects: https://docs.gitlab.com/api/repository_files/, https://docs.gitlab.com/api/repositories/
- Apollo developer docs and enrichment/search APIs: https://docs.apollo.io/, https://docs.apollo.io/reference/people-enrichment, https://docs.apollo.io/reference/organization-enrichment
- Clay docs for HTTP API/MCP/API-key posture: https://university.clay.com/docs/http-api-integration-overview, https://university.clay.com/docs/mcp-settings, https://university.clay.com/docs/guide-find-clay-api-key
- SQL read-only privilege basis: https://www.postgresql.org/docs/current/sql-grant.html
- NoSQL read APIs: MongoDB Node driver https://www.mongodb.com/docs/drivers/node/current/, DynamoDB Query https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html, Redis SCAN https://redis.io/docs/latest/commands/scan/
- Amazon Neptune SPARQL/RDF docs: https://docs.aws.amazon.com/neptune/latest/userguide/access-graph-sparql.html
- Amazon Neptune openCypher/property graph docs: https://docs.aws.amazon.com/neptune/latest/userguide/access-graph-opencypher.html
- PostgreSQL recursive CTE docs: https://www.postgresql.org/docs/current/queries-with.html
- Existing AWS/Hermes source basis: see [AWS/Hermes Architecture §11](./Consultry-MVP-AWS-Hermes-Architecture-v1.0.md#11-aws-doku-stand-auf-dem-dieser-plan-basiert).

---

*Ende v1.0 - naechster Schritt: Second-Brain-/Memory-Tiefe als separaten ADR klaeren, sobald sie ueber Opportunity-to-Concept hinaus implementierungsrelevant wird.*
