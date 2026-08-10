# Consultry - Virtual/Local Harness & Second Brain Refinement v1.1

**Status:** Technical-Handoff-Kandidat. Die frühere ADR-002-Harness-Boundary bleibt relevanter Input; Harness-, Second-Brain-, Connector- und Graph-Tiefe werden nach dem fachlichen Product-Handoff technisch revalidiert.  
**Datum:** 12.07.2026
**Rolle im Doc-Stack:** Erweitert den AWS/Hermes-Plan vom isolierten Sandbox-Job zu einer Consultry Engine mit **virtualisierten und lokalen Harness Clients**, Tools/RAG/MCP, Connectoren und Second-Brain-/Context-Graph-Compilation.
**Bezug:** [Alignment Control Plane](./Consultry-Alignment-Control-Plane-v1.0.md), [MVP Architecture ADR](./Consultry-MVP-Architecture-ADR-v1.0.md), [Backend/IaC Design](./Consultry-MVP-Backend-IaC-Software-Design-v1.0.md), [AWS/Hermes Architecture](./Consultry-MVP-AWS-Hermes-Architecture-v1.0.md), [Backend/IaC Grill-Me](../archive/superseded-product-baseline-2026-08/Consultry-MVP-Backend-IaC-Grill-Me-v1.0.md).

**FigJam Board:** https://www.figma.com/board/yrvsmZHxeNo7GoypjfagrI  
Neue Sicht im Board: **Consultry Virtual Harness and Second Brain Architecture**.

> **Kurzfassung.** Das Consultry Second Brain / der Consulting Context Graph ist die tenant-isolierte Informationsbasis. Die **Consultry Engine** kompiliert daraus job-scoped `HarnessPack`s und orchestriert je nach Daten- und Toolnähe einen virtualisierten Cloud-Harness oder lokalen Harness. Ein auf die Consultry User App, Datenverträge und Governance angepasster **Hermes-Fork** kann die initiale Referenzimplementierung sein. Tools, RAG, MCP und Connector-Grants bleiben begrenzt, auditierbar und ohne freie Tenant-weite Suche.

---

## 1. Neuer Kernbegriff

### Consultry Engine und Second Brain

Die **Consultry Engine** ist die trusted Control Plane für Kontextplanung, Operator-Auswahl, Model Routing, Policies, Tool-/Connector-Freigaben, Approval und Audit-Korrelation. Sie gibt einem Modell niemals den gesamten Context Graph frei. Stattdessen kompiliert sie aus source-bound Context- und Memory-Projektionen ein begrenztes `HarnessPack`.

```text
Sources → Second Brain / Consulting Context Graph
        → Consultry Engine
        → HarnessPack
        → Virtual Harness Client | Local Harness Client
        → Tools | RAG | MCP | Connector-Grants
        → ResultVerifier | Human Approval | Audit
```

Das Second Brain enthält unter anderem Project/Knowledge, Consultant-Inputs, Offer/Service/Product Portfolio, CRM-/Kundendaten, Contracts, People/Capacity und Finance/Operations. Es ist Informationsquelle und Memory-Layer; die Engine bleibt Orchestrator und Policy Owner.

### Virtual Harness Client

Ein **Virtual Harness Client** ist eine ephemeral, tenant- und job-scoped Cloud-Arbeitsumgebung, die fuer einen konkreten Operator-Job gestartet wird. Sie stellt die erlaubte Arbeitsumgebung einer autorisierten Rolle oder Funktion nach — Consultant, Sales, Team Management, Staffing, Backoffice oder Finance — ohne unkontrolliert deren Rechner, Systeme oder Tenant-Korpus zu oeffnen.

Die erste Implementierung kann ein **Hermes-Fork** sein, der auf Consultry User App, `HarnessPack`, Tool Contracts, Result Bundles, Approval und Audit angepasst wird. Die Engine-Harness-Schnittstelle muss jedoch implementierungsneutral bleiben, damit Hermes später ersetzt oder durch spezialisierte Harnesses ergänzt werden kann.

### Local Harness Client

Ein **Local Harness Client** führt denselben Operator-/Pack-Vertrag nahe am User-Gerät oder in einer kundenseitigen Umgebung aus. Er ist kein frei laufender Desktop-Agent. Er darf nur explizit freigegebene Dateien, lokale Tools, MCP-Server oder Anwendungen innerhalb eines `ConnectorGrant`/Capability-Token-Scopes nutzen und kommuniziert outbound mit der Consultry Engine.

Geeignete Anwendungsfälle sind lokale Office-/DOCX-Verarbeitung, genehmigte Dateisnapshots, kundenseitige Datenquellen und Backoffice-Tools, die nicht in eine Cloud-Sandbox gespiegelt werden dürfen. Auch lokal gelten Output Contract, Result Verification, Approval und Audit.

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
  "model_policy_id": "complex-grounded-work@1",
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

**Managed-Model-Policy:** `model_policy_id` wird von der Engine gesetzt und im `ModelGateway` aufgelöst. Foundry/GPT-5.6 ist bevorzugt; `gpt-5.6-sol@2026-07-09` ist der initiale Default für PMF-kritische komplexe Jobs. Ein Harness kennt weder Provider-Credentials noch einen hardcodierten Model Endpoint und darf Sol nicht selbst gegen Terra/Luna/Bedrock austauschen.

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

- `memory_nodes`: document, artifact, fact, method, reference, profile_claim, brand_rule, offer_pattern, contract_clause, project_lesson, tender_criterion, source_span, observation, signal, problem_pattern, symbiosis_link, reuse_candidate, reusable_asset, reuse_application, service_bundle_candidate, reuse_value_case, rights_decision.
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

### Iteration 3a - Cross-Project Symbiosis braucht einen eigenen Pack-Typ

**Ausgangsproblem:** Ein Job zur Erkennung paralleler Problem Patterns benötigt mehr Projektkontext als ein normaler Retrieval-Job. Ein vollständiger tenantweiter oder Cross-Customer-Graph wäre jedoch eine zu breite Datenfreigabe.

**Verbesserung:** Die Engine kompiliert je Job einen begrenzten `SymbiosisContextPack` als spezialisierten Teil des `HarnessPack`:

```json
{
  "job_kind": "symbiosis_review | assetization | reuse_recommendation | reuse_value_case",
  "source_project_scopes": ["project_hansa_wave1", "project_industrie_nord_cutover"],
  "problem_pattern_refs": ["pattern_s4_readiness_cutover"],
  "evidence_refs": ["source_span_1", "source_span_2"],
  "allowed_asset_refs": ["asset_cutover_blueprint_v1"],
  "target_project_ref": "project_target",
  "data_classes": ["TenantInternal", "CustomerConfidential"],
  "reuse_scope": "ProjectOnly | AccountOnly | TenantInternalAbstracted",
  "rights_state": "ReviewRequired | AllowedWithAbstraction | AllowedInternal",
  "policy_refs": ["policy_cross_account_reuse_v1"],
  "required_outputs": ["explanation", "differences", "adaptation_plan", "source_bindings"],
  "forbidden_outputs": ["raw_cross_customer_content", "person_performance_score"]
}
```

**Hard rule:** Ein `SymbiosisContextPack` darf CustomerConfidential-Rohinhalte nur in einem explizit freigegebenen Review-/Abstraktionsjob enthalten. Ein Reuse- oder Offer-Job erhält ausschließlich freigegebene `ReusableAsset`-Versionen sowie die für Fit/Adaptation notwendigen Metadaten.

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
- `claim_review_coverage`: Haben materielle Claims Quelle oder sichtbaren Review-Status, und sind verwendete Quellen faithful?
- `artifact_acceptance`: Wie viel muss der Consultant nacharbeiten?

**Neuer Test:** Jede PMF-kritische Demo bekommt neben Prompt-Eval auch Harness-Eval.

---

## 3. Architektur nach Refinement

```mermaid
flowchart LR
  web[Consultant Web App] --> edge[CloudFront WAF ALB]
  word[Word Add-in] --> edge
  relay[Local Harness Client / Relay] --> edge
  edge --> api[Modular API]

  api --> orchestrator[Consultry Engine / Harness Orchestrator]
  context[Second Brain / Consulting Context Graph] --> orchestrator
  orchestrator --> broker[Connector Broker]
  orchestrator --> mcp[MCP Gateway]
  orchestrator --> pack[HarnessPack Builder]
  orchestrator --> vhc[Virtual Harness Client / Hermes Fork]
  orchestrator --> lhc[Local Harness Client]

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
  lhc --> result
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

**Platform-Kernel-Ratifikation 01.08.2026, revidiert 02.08.:** Für das MVP ist die kanonische physische Spine nicht eine universelle `memory_*`-Tabelle, sondern der schlanke bitemporale `ContextAssertion → ContextAssertionRevision → ContextAssertionParticipant`-Vertrag mit explizitem Evidence State und optionalen exakten `SourceBinding`s. Er gilt nur für source-übergreifende, semantische oder AI-/entscheidungsrelevante Aussagen; typisierte Domain-Aggregate bleiben Write Authority. `memory_nodes`/`memory_edges`/`memory_hyperedges` sind damit höchstens rebuildbare Projektionen oder spätere Full-Product-Sichten, keine parallele Wahrheitsschicht.

Canonical MVP assertion contract:

```text
context_assertion_revision
  -> stable context_assertion_id + immutable revision_no
  -> typed participants (entity reference XOR typed literal)
  -> provenance_class
  -> evidence_state
  -> optional exact source_binding_id(s)
  -> approval_state
  -> valid_from / valid_until (Valid Time)
  -> recorded_at / supersedes_revision_id (Record Time)
  -> confidence
  -> assertion_digest
```

Every graph assertion that can influence a proposal, profile, time summary, project status or brand output must be evidence-state-aware. Source binding and approval requirements follow Risk-/Tenant-Policy; internal assertions are not globally blocked.

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
| Professional Networks / Job Market | genehmigte/lizenzierte APIs, Exporte oder Terms-konforme öffentliche Stellenanzeigen (z. B. LinkedIn, XING, Jobboards, Kunden-Karriereseiten) | Skill-, Zertifizierungs-, Vendor-/Produkt- und Rollen-Nachfrage als sekundäre Capability-Demand-Evidenz | kein privates Profil-Crawling, kein unbounded Scraping; bei materieller Nutzung SourceBinding, Marktdefinition, Freshness, Confidence und Kundenbezug, sonst Review-Status |
| Certification Providers | freigegebene Vendor-/Hersteller-Kataloge und Partnerprogramme | Zertifikatsanforderungen, Skill-Pfade, Ablauf-/Renewal-Kontext | versionierter Katalog, Anbieterquelle, keine automatische Personalentscheidung |
| Design/Brand | artifact connector | Brand-Guidelines, Logos, Deck-/Website-Artefakte als Memory Nodes | nur freigegebene Assets in MemoryPack |

**MVP integration posture:** "MVP needs integrations" means the harness substrate can ingest and snapshot these systems. It does **not** mean autonomous writeback, outreach, sequence management, code modification, ticket mutation or hidden performance monitoring. All MVP connector outputs are corpus/second-brain inputs unless an explicit later ADR unlocks a write path.

### 4.1 Backoffice-Operatorfamilie im Whole Product

Backoffice ist ein eigenständiger, potenziell hochfrequenter Harness-Anwendungsbereich. Die Operatorfamilie nutzt denselben Context→Engine→Harness-Vertrag:

| Operatorfamilie | Kontext und Tools | Ergebnis vor Approval |
|---|---|---|
| Reise-/Spesenbelege | Receipt/OCR, Kalender, Projekt, Cost Policy, lokale/Cloud-Dateien | erkannter Beleg, Projekt-/Kostenstellenzuordnung, Prüfhinweise |
| Geschäftsessen | Beleg, Teilnehmer-/Kundenkontext, Bewirtungsregeln, CRM/Kalender | vorbereiteter Bewirtungsnachweis und Zuordnung |
| Rechnungs-/Billing-Prep | Vertrag/SOW, Leistungen, Zeiten, Reisekosten, Konditionen | Rechnungsvorschlag, Leistungsnachweis, Abweichungen |
| Lizenzen/Subscriptions | Verträge, Vendor-Daten, Nutzer-/Teamkontext, Kostenstellen | Inventar, Renewal-/Nutzungswarnung, Optimierungsvorschlag |
| Vendor-/Kostenabgleich | Bestellungen, Rechnungen, Verträge, Finance Views | Matching, Differenzen, Klärungsliste |

Im frühen Build bleiben diese Operatoren read/draft/suggest. Buchung, Zahlung, Versand, Kündigung, Bestellung oder Vertragsänderung erfordern ein explizit freigegebenes Write-Tool, Capability Token, Approval und eine eigene ADR-/Compliance-Freigabe.

### 4.2 Team-Lead- und Team-Management-Operatorfamilie

Der Team-Lead-Control-Room nutzt Project/Knowledge, People/Capacity, Contract/SOW, Time/Expense und Finance/Billing Context für rollenbezogene Dashboards und Lösungsvorschläge:

| Operatorfamilie | Analysiert | Ergebnis vor Approval |
|---|---|---|
| Team-/Staffing-Übersicht | Rollen, Skills, Erfahrung, Verfügbarkeit, Zuordnung, Auslastung | Teamstruktur, offene Rollen, Über-/Unterdeckung, Staffing-Szenarien |
| Team-/Portfolio-Economics | Umsatz, Forecast, Budget/Burn, Marge, billed/unbilled Work, erwartete Faktura | wirtschaftliche Team-/Projektübersicht und Abweichungserklärung |
| Delivery-/Kapazitätsrisiko | Meilensteine, Workload, Abhängigkeiten, Verfügbarkeit, ProjectStatus | Engpässe, Collision-/Fristenrisiken, Umbesetzungs- oder Priorisierungsvorschläge |
| Faktura-Readiness | Vertrag/SOW, Zeiten, Belege, Leistungen, Rates, Approvals | fehlende Nachweise, unbilled Work, Rate-/Scope-Abweichungen, blockierte Billing-Pakete |
| Gap Resolution | erkannte Staffing-, Delivery- oder Faktura-Lücke plus zulässige Actions | begründeter Maßnahmenplan mit Owner, Wirkung, Quellen und Approval-Bedarf |

Das Dashboard darf nicht zu verstecktem Performance Scoring werden. Personenscharfe Daten, Empfehlungen und Monitoring benötigen Role Scope, Works-Council-Mode, Zweckbindung und Audit. Write-Actions wie Reassignment, Approval-Eskalation oder Change-Request-Erstellung bleiben explizit freizugeben.

### 4.3 Personalentwicklungs- und Capability-Planning-Operatorfamilie

Diese Operatoren verbinden Skill-Evidenz mit zukünftiger und bereits kontrahierter Nachfrage. Pipeline-Prognosen müssen Wahrscheinlichkeit, Timing, Deal-/Contract-Status, Datenfrische und Confidence explizit tragen.

| Operatorfamilie | Analysiert | Ergebnis vor Approval |
|---|---|---|
| Capability-Demand Forecast | priorisiert: kontrahierte Bestandskundenarbeit; Bestandskunden-Signale/CRM/Contracts; gewichtete interne Opportunities/Portfolio; danach LinkedIn/XING/Jobboards/Karriereseiten/Zertifizierungskataloge und weitere Marktindikatoren | Capability-/Vendor-/Produktnachfrage nach Zeitraum, Kundenbezug und Confidence |
| Skill-Supply Map | Projekt-/Deliverable-Evidenz, CVs, Zertifikate, Methoden, Aktualität, Verfügbarkeit, Lernziele | Skillabdeckung, Evidenzlücken, Zertifizierungs-/Kapazitätsrisiken |
| Individual Development | Demand Forecast + Skillprofil + Interesse + Timing + Lernangebote | Schulungs-, Zertifizierungs-, Mentoring-, Shadowing- oder Rotationsvorschlag mit Alternativen |
| Academy/Team Development | aggregierte Capability-Gaps, Kohorten, interne Trainer, Lernartefakte | priorisierte Lernpfade, Kohorten und Capability-Programme |
| Hiring/Partner Profile | ungedeckte Nachfrage, Time-to-Capability, Seniorität, Sprache, Branche, Vendor/Product | rollenbasiertes Einstellungs-/Partnerprofil, keine Kandidatenentscheidung |
| Build/Buy/Partner Scenario | Lern-/Hiring-/Partnerkosten, Timing, Pipeline Coverage, Risiko | vergleichbare Optionen mit erwarteter Abdeckung und Confidence |

Personenscharfe Trainingsvorschläge sind Unterstützungsangebote, keine Leistungsbewertung. Sie müssen korrigierbar sein und dürfen nicht automatisch Vergütung, Einsatz, Beförderung, Kündigung oder Bewerberauswahl beeinflussen. Markt- und Market-Share-Aussagen benötigen SourceBinding, Definition, Bezugsmarkt, Aktualität und Confidence.

### 4.4 Project-Symbiosis-, Assetization- und Reuse-Operatorfamilie

| Operatorfamilie | Analysiert | Ergebnis vor Approval |
|---|---|---|
| Pattern/Symbiosis Detection | allowlisted ProjectWorkItems, Requirements, Decisions, Deliverables, Outcomes und bestehende Assets | erklärtes `ProblemPattern`/`SymbiosisLink` mit gemeinsamen/unterschiedlichen Merkmalen, Sources und Confidence |
| Reuse Candidate Review | validierte Patterns, Source Lineage, bestehende Assets, Fachkontext | `ReuseCandidate` mit Asset-Typ, Owner, Applicability, Exclusions und Review-Fragen |
| Abstraction/De-Identification | CustomerConfidential Source Spans innerhalb eines expliziten Review-Jobs | Abstraction Plan, zu entfernende/zu generalisierende Inhalte, kein publiziertes Asset |
| Rights/Confidentiality Check | Contract/SOW/IP-/Usage-Rights, DataClass, ReuseScope | `RightsDecision` mit Allowed/Restricted/Rejected und Auflagen |
| Asset Builder | validierter Candidate + freigegebener Abstraction/Rights/Fachreview | versionierter `ReusableAssetDraft` mit Lineage, Applicability, Exclusions, Owner und Quality Gates |
| Reuse Recommendation | published Asset + TargetProject + ProblemPattern + Capability/Delivery Context | `ReuseApplicationDraft` mit Fit, Differences, Adaptation Plan, exact Asset Version und Sources |
| Service Productization | mehrere bewährte Assets/Applications + Offer Portfolio + Proof + Commercial Context | `ServiceBundleCandidate` mit Target Problem, Delivery Model, Pricing Model und Review-Fragen |
| Reuse Value Analysis | Application Outcomes, Time/Cost/Revenue actuals, Contract/Pricing Model | `ReuseValueCaseDraft` mit Baseline/Ist, Delivery/Quality/Revenue/Cost/Margin und Annahmen |

Publikation, Cross-Account-Reuse, Offer-Portfolio-Aufnahme und Economic Approval bleiben außerhalb des Harness und benötigen benannte menschliche Entscheidungen. T&M-Auswertung verwendet tatsächlichen Aufwand; gesparte Stunden werden nicht als gearbeitet oder fakturiert modelliert.

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
problem_patterns
symbiosis_links
reuse_candidates
reusable_assets
reusable_asset_versions
reuse_applications
service_bundle_candidates
reuse_value_cases
rights_decisions
capability_tokens
```

RLS-Regel:

- Alle Tabellen tenant-scoped.
- `capability_tokens` sind job-scoped und kurzlebig.
- `mcp_tool_invocations` speichern keine Rohdaten, sondern Tool, Scope, Input-/Output-Hash, DataClass und SourceBindingRefs.
- `local_file_snapshots` speichern Hash, Pfad-Alias, SourceBinding und optional extrahierten Text; keine ungefragte Pfadliste.
- `memory_triples`, `memory_edges` und `memory_hyperedges` sind `tenant_id`-scoped und verweisen auf `memory_assertions`.
- `memory_assertions` erzwingen Provenance, SourceBinding, Approval-State und Versionierung.
- `problem_patterns` und `symbiosis_links` sind erklärbare Vorschläge mit gemeinsamen/unterschiedlichen Traits, Model-/Rule-Version und EvidenceRefs; kein opaque Score allein genügt.
- `reuse_candidates` dürfen ohne Source Lineage und menschliches Fachreview nicht validiert werden.
- `reusable_asset_versions` erzwingen DataClass, ReuseScope, RightsState, Applicability, Exclusions, Owner, Approval und Revocation-State.
- `reuse_applications` pinnen die exakte Asset-Version, TargetProject, Fit, Differences, Adaptation Plan, Reviewer und OutcomeRefs.
- `reuse_value_cases` trennen Contract/Pricing Model, Baseline, Actuals, Delivery/Quality, Billed Effort, Internal Cost, Revenue und Margin-Assumptions.
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
9. Kein Cross-Account-Reuse ohne freigegebene abstrahierte Asset-Version, RightsState, ReuseScope und Purpose.
10. Kein ServiceBundle/ReuseValueCase ohne explizites Contract-/Pricing-Modell und getrennte Baseline-/Actual-Daten.

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
| Symbiosis explanation | every pattern/link exposes shared/different traits, source refs and model/rule version |
| Cross-customer boundary | raw CustomerConfidential source from account A is unavailable in account B reuse job |
| Asset publication gate | missing fachliche/rights approval prevents Published state |
| Asset revocation | revoked version invalidates open recommendations and flags dependent applications/bundles |
| Reuse application integrity | exact asset version, target project, fit and adaptation plan are required |
| Reuse economics | T&M actuals stay distinct from fixed-price/outcome/accelerated-delivery assumptions |
| Connector coverage | M365, GitHub, GitLab, Google Drive, local files, SQL, NoSQL, Clay, Apollo fixture snapshots import |
| Material-claim review | High-Risk claims have source or explicit review status before external use |
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
| HG-01 | Graph assertion schema | assertion table, evidence state, optional source binding, approval | 900 | unresolved High-Risk assertion excluded from external action, internal draft remains available |
| HG-02 | Triple store tables | subject-predicate-object with literal/node object | 900 | simple SPO fixture retrievable |
| HG-03 | Hyperedge tables | relation + participant roles | 1000 | n-ary project-method-client-role fixture |
| HG-04 | GraphPack builder | triples/hyperedges sliced into MemoryPack | 900 | only relevant approved graph facts included |
| HG-05 | Recursive traversal helpers | bounded Postgres CTE helpers with cycle checks | 900 | cyclic graph fixture terminates |
| HG-06 | Graph export adapter | RDF N-Triples/property graph CSV export skeleton | 800 | export fixture roundtrip hashes |
| SG-01 | Skill taxonomy schema | skill nodes, synonyms, hierarchy | 800 | synonym and parent fixture |
| SG-02 | Skill claim schema | consultant/company skill claims with evidence/review state | 900 | unsupported claim remains review-required and is excluded from external staffing proof until approved |
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
