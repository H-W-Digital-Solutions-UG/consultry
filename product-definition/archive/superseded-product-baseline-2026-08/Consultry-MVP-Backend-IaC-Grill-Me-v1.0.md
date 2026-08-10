# Consultry - Backend/IaC Grill-Me Log v1.0

> **ARCHIVSTATUS 02.08.2026:** Historische Provenienz; kein aktueller Product Canon, Scope oder freigegebener Build-Plan. Aktueller Einstieg: [`product-definition/latest`](../../latest/README.md). Reaktivierung nur über eine explizite Wayfinder-Entscheidung.

**Status:** Fragen- und Entscheidungslog fuer Architektur-Review - nicht Source of Truth.  
**Datum:** 27.06.2026  
**Rolle im Doc-Stack:** Sammelt die Grill-with-docs-Pruefung, offene Fragen, empfohlene Antworten und Risiken fuer den Backend-/IaC-MVP-Plan.  
**Bezug:** [Backend/IaC Design](../../latest/Consultry-MVP-Backend-IaC-Software-Design-v1.0.md), [AWS & Hermes Architecture](../../latest/Consultry-MVP-AWS-Hermes-Architecture-v1.0.md), [MVP-PRD](./Consultry-MVP-PRD-v1.0.md), [Business-Domain-Definition](../../latest/Consultry-Business-Domain-Definition-v1.0.md).

---

## 1. Methode

Gelesene lokale Quellen:

- `_CONTEXT-AND-MEMORY.md`
- `Consultry-MVP-PRD-v1.0.md`
- `Consultry-Business-Domain-Definition-v1.0.md`
- `Consultry-MVP-Technical-Foundation-v1.0.md`
- `Consultry-MVP-Foundation-Decisions-v1.0.md`
- `Consultry-Product-Vision-v1.0.md`
- `Consultry-MVP-AWS-Hermes-Architecture-v1.0.md`

Externe Pruefung:

- Karpathy X-Profil/Post-Suche: X war nicht voll extrahierbar, aber Treffer verweisen auf seine Arbeit am LLM-Wiki/Work-Layer-Denken.
- Karpathy Gist als erreichbare Quelle: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- AWS/Bedrock/Aurora/ECS/AgentCore und Terraform/Playwright/Vitest Doku fuer technische Validierung.

Arbeitsregel:

- Nicht fragen, wenn der Corpus eine robuste Entscheidung erlaubt.
- Fragen sammeln, aber mit empfohlener Antwort.
- Nur bei echter Blockade den User fragen.

---

## 2. Aufgezeichnetes Vision Statement

**Authoritative Vision Statement fuer diesen Architekturstrang:**

> Consultry braucht eine Work Layer, nicht nur eine UI: eine schlanke, agentenlesbare Kraftschicht ueber dem Firmenkorpus, die Dokumente, Artefakte, Knowledge Base, Projekterfahrung, Consultant-Profile, Sales-Angebote, Vertraege sowie Marketing- und Brand-Artefakte zusammenhaelt und aligned. Agenten pflegen, pruefen und strukturieren diese Schicht; Menschen verantworten Freigaben. Das Produkt wird wertvoll, weil Wissen nicht nur gespeichert, sondern in versionierte, zitierte, auditierbare Arbeitsartefakte uebersetzt wird.

**Technische Uebersetzung:**

| Layer | Bedeutung | MVP-Mechanik |
|---|---|---|
| Raw Source | originale Dokumente, Uploads, Imports | S3 raw/extracted, content hash |
| Parsed Corpus | Seiten, Spans, Chunks, Embeddings | Aurora `documents/chunks/embeddings` |
| Compiled Knowledge | KnowledgeAssetVersion, SourceBinding, CitationLink | versioniert, tenant-isoliert |
| Work Artifact | Opportunity, DraftSection, TimeEntry, ProjectStatus | nie ohne Domain-Regeln |
| Recommendation | AI/Hermes-Vorschlag | proposed state only |
| Approval | Menschliche Verantwortung | ApprovalEvent + AuditEntry |
| Audit | beweisbare Spur | append-only hash chain |

---

## 3. Grill Findings

### G1 - AWS-native Architektur kollidiert mit T3 Neon

**Befund:** MVP-Docs und Context nennen Neon + pgvector als T3. Der neue AWS/Hermes-Plan empfiehlt Aurora + pgvector.

**Empfehlung:** Nicht hybrid bauen. Wenn AWS als Plattform gesetzt ist, T3 explizit zu `Aurora PostgreSQL Serverless v2 + pgvector` revidieren. RLS, pgvector, graph-ready Schema und SourceBinding bleiben identisch.

**Status 28.06.:** ✅ Geloest durch [ADR-001](../../latest/Consultry-MVP-Architecture-ADR-v1.0.md). Aurora ersetzt Neon fuer die MVP-Implementierungsbaseline.

### G2 - "Kein Agent-Runtime im MVP" vs Hermes Harness

**Befund:** Technical Foundation verbietet autonome Agent-Runtime. Hermes klingt riskant wie ein Agent.

**Empfehlung:** Hermes strikt als Harness definieren: bounded job, read-only CorpusBundle, kein DB-Zugriff, kein freier Korpus, kein Internet, kein State Write. Damit ist Hermes kein autonomer Agent, sondern eine kontrollierte Ausfuehrungsschicht fuer Operatoren.

**Status 28.06.:** ✅ Geloest durch [ADR-002](../../latest/Consultry-MVP-Architecture-ADR-v1.0.md). Hermes ist bounded Harness, kein autonomer Agent.

### G3 - Work Layer darf nicht mit UI verwechselt werden

**Befund:** Der User-Vision-Input und Karpathy-Check zeigen: der Kern ist nicht "noch ein Dashboard", sondern eine compounding Firmenwissensschicht.

**Empfehlung:** Backend priorisiert Korpus, Versionierung, SourceBinding, Audit und Approval vor UI-Breite. UI ist die Arbeitsoberflaeche, nicht die Source of Truth.

### G4 - Framework-Entscheidung muss RLS sichtbar halten

**Befund:** ORMs koennen RLS/Session-State verschleiern. Consultry braucht fail-closed tenant context.

**Empfehlung:** Fastify + Kysely + expliziter `withTenantTransaction()` statt Prisma-first. Prisma kann spaeter fuer einfache CRUD-Admin-Flows evaluiert werden, aber nicht fuer die RLS-kritische Domain.

### G5 - Cognito darf nicht Tenant-Autorisierung besitzen

**Befund:** B2B-Tenant-Mitgliedschaft, Seat-Modell, Rollen und WC-Mode sind Domain-Objekte.

**Empfehlung:** Cognito nur Identity/OIDC. Aurora ist Source of Truth fuer Membership, RBAC, Seats und Tenant-Kontext.

### G6 - AgentCore ist attraktiv, aber noch ein Risiko

**Befund:** AgentCore Code Interpreter passt zum Sandbox-Wunsch, aber Region, Quotas, Debugging und Security muessen fuer `eu-central-1` praktisch geprueft werden.

**Empfehlung:** `HermesRunner` als Interface ab Tag 1. AgentCore als bevorzugter Adapter, Fargate no-egress als fallbackfaehiger Adapter.

### G7 - Bedrock Knowledge Bases nicht als autoritative Evidence-Policy

**Befund:** Bedrock Knowledge Bases koennen nuetzlich sein, aber Consultrys Trust-Modell braucht einen app-owned Evidence-/Review-State und bei verwendeten Quellen die Kette Claim -> CitationLink -> Span.

**Empfehlung:** App-owned Retrieval in Aurora/pgvector bleibt Source of Truth. Knowledge Bases maximal als spaetere Optimierungs-/Vergleichsschicht.

### G8 - Terraform ist hier richtiger als CDK

**Befund:** User fordert Terraform plan validation. Das ist ein Review- und Policy-Gate, nicht nur eine Build-Praeferenz.

**Empfehlung:** Terraform fuer MVP. CDK nicht parallel einfuehren.

### G9 - AI-Eval ist MVP-light, aber nicht optional

**Befund:** T4 sagt kein Eval-CI im MVP, aber Mini-Eval 20-50 Faelle. Hermes braucht genau diesen Harness.

**Empfehlung:** Kein schweres Eval-Produkt bauen. Aber golden corpus + CLI-Bericht als CI-Artefakt ist Pflicht fuer D1/D2/D6.

### G10 - Docs muessen wie Korpus behandelt werden

**Befund:** Consultry verkauft Corpus-Alignment. Wenn die eigenen Docs widersprechen, ist das ein Produktfehler.

**Empfehlung:** `VAL-08 Docs coherence check` bauen: rg-basierte Konfliktmarker, Source-of-Truth-Links, ADR-Kandidaten, Diagramm-Refresh.

### G11 - MVP braucht Integrationen, aber keine autonomen Fremdaktionen

**Befund:** Der erweiterte Harness braucht M365, Google Drive, GitHub, GitLab, lokale Dateien, SQL-/NoSQL-Datenbanken, Clay und Apollo. Gleichzeitig sagt der MVP-Canon: kein Net-New-Prospecting, kein Outbound, kein Schreibzugriff.

**Empfehlung:** Alle genannten Systeme als **read-only/snapshot Connectoren** im MVP-Harness modellieren. Sie speisen Corpus, Second Brain, Skill Graph und Harness Packs. Clay/Apollo duerfen approved Account-/Company-/People-Enrichment importieren, aber keine Sequenzen starten, keine Outreach-Aktionen ausloesen und keine externen Systeme mutieren.

**ADR-Kandidat:** Ja, weil diese Entscheidung die alte "Net-New-Prospecting out" Grenze technisch praezisiert statt sie zu brechen.

### G12 - Skill Graph ist kein People Scoring

**Befund:** Ein Skill-Graph ist fuer TeamShape, Referenzbelege und Proposal-Qualitaet zentral. Er kann aber in Richtung Performance-/Personenranking kippen.

**Empfehlung:** Skill Graph als source-bound Graph/Triple/Hypergraph bauen: Skills, Claims, Zertifikate, Projekterfahrung, Rollen, Referenzen und Evidenz-Spans. Im MVP verlassen nur anonyme/aggregierte Projektionen den Capability-Kontext. Kein Ranking, kein Performance Score, kein named Staffing.

---

## 4. Fragen mit empfohlener Antwort

| ID | Frage | Empfohlene Antwort | Muss jetzt gefragt werden? |
|---|---|---|---|
| Q1 | Wird AWS-native offiziell gesetzt und Neon ersetzt? | ✅ Ja, entschieden durch ADR-001. | Nein, erledigt. |
| Q2 | AgentCore oder Fargate fuer Hermes v0? | AgentCore testen, Fargate fallback mitbauen. | Nein, WBS enthaelt beide als kleine Pakete. |
| Q3 | Cognito oder externer Auth-Anbieter? | Cognito fuer Identity im AWS-MVP, Domain-RBAC in Aurora. | Nein, reicht fuer MVP. |
| Q4 | Fastify/Kysely oder Nest/Prisma? | Fastify/Kysely wegen RLS-/SQL-Transparenz. | Nein, solange kein bestehender Backend-Code widerspricht. |
| Q5 | Bedrock Knowledge Bases nutzen? | Nicht als Source of Truth. Optional spaeter. | Nein. |
| Q6 | Tenant-KMS-Key pro Tenant? | MVP env-key + encryption context; H2 tenant-key fuer groessere Kunden. | Nein. |
| Q7 | SaaS + AVV fuer Cybersecurity-Partner #0 akzeptabel? | Annahme ja, aber Week-0 Dealbreaker-Check. | Ja, aber erst bei Pilot-Planung. |
| Q8 | SharePoint/M365 Connector schon im MVP? | Upload zuerst; read-only connector als H1.5 oder Pilot-Need. | Nein. |
| Q9 | Soll Hermes externe Quellen selbst holen duerfen? | Nein. Externe Quellen nur ueber trusted Connector/Research-Pfad, nicht aus Sandbox. | Nein. |
| Q10 | Wird "Operating System" im MVP verkauft? | Nein. Produkt intern als Work Layer bauen, extern H1 Win+Work verkaufen. | Nein. |
| Q11 | Sind M365, GitHub, GitLab, Google Drive, local files, SQL/NoSQL, Clay und Apollo MVP? | Ja als read-only/snapshot Harness-Connectoren; nein als autonome Writeback-/Outreach-Produkte. | Nein, das ist die sichere Interpretation des neuen Inputs. |
| Q12 | Wie wird der Skill Graph gespeichert? | In Aurora als source-bound graph/triple/hypergraph tables; Graph DB Export spaeter. | Nein. |

---

## 5. Self-Validation Questions fuer Reviews

Diese Fragen gehoeren in PR-/ADR-Reviews:

1. Welche Source of Truth wird durch diese Aenderung beruehrt?
2. Ist der neue Zustand tenant-scoped und RLS-getestet?
3. Kann eine AI-Aktion dadurch verbindlich schreiben?
4. Hat jeder materielle High-Risk Claim Quelle oder sichtbaren Review-Status, und fuehrt jede verwendete CitationLink-Kette bis Dokument/Span?
5. Ist Hermes irgendwo freier geworden als CorpusBundle read-only?
6. Wuerde ein prompt-injiziertes Dokument diese Logik steuern koennen?
7. Werden Rohtexte oder PII in Logs geschrieben?
8. Gibt es einen AuditEntry mit Actor, Correlation-ID, Prompt/Model-Version und SourceBindings?
9. Ist die Aenderung in 500-1000 LOC reviewbar?
10. Wurde Terraform-Plan/Policy-Validation aktualisiert?
11. Widerspricht die Aenderung T2/T3/T4/T5/T6/T8/T12?
12. Muss ein ADR entstehen, bevor das gemerged wird?
13. Ist ein Connector nur read-only/snapshot oder fuehrt er fremde Aktionen aus?
14. Erzeugt der Skill Graph nur evidence-backed Claims oder versteckte Personenscores?

---

## 6. Risk Register

| Risiko | Auswirkung | Mitigation |
|---|---|---|
| AWS/Aurora-Revision nicht in Detaildocs propagiert | alte Planungsdocs koennten Neon wieder aufgreifen | erledigt durch ADR-001 + Doc-Coherence-Pass; bei neuen Docs rg-Check ausfuehren |
| AgentCore in Region/Quota nicht passend | Hermes v0 blockiert | Fargate runner parallel vorbereiten |
| RLS Session Context falsch gesetzt | Cross-tenant Datenleck | fail-closed helper + integration tests |
| Evidence-/Review-State nur im UI | materielle Claims verlieren ihren Trust-Status | DB/Application persistiert EvidenceState; Tenant Policy gatet nur High-Risk Externalization/Actions |
| Hermes bekommt zu breite IAM-Rechte | Korpus-/Secret-Leak | job-scoped S3/KMS, no DB/no Secrets |
| Terraform driftet ohne Plan-Gate | Pilot-Infra unreproduzierbar | plan artifact + policy gate + env promotion |
| Frontend baut an API vorbei | Contract drift | OpenAPI/Zod package + generated client |
| Docs widersprechen Produkt | Alignment-Produkt unglaubwuerdig | Docs coherence check und Grill-Me-Rhythmus |
| Connector-Scope driftet zu Writeback | MVP verletzt no-outbound/no-write Prinzip | Connector grants sind read-only/snapshot, write tools fehlen im ToolRegistry |
| Clay/Apollo kippen in Prospecting-Produkt | Scope-Creep gegen MVP-Canon | nur importierte Enrichment-Snapshots, keine Sequenzen/outreach |
| Skill Graph wird People Ranking | BetrVG/AI-Act/Vertrauensbruch | no scoring fields, anonymous TeamShape projection, approval/evidence required |

---

## 7. ADR-Kandidaten

| ADR | Thema | Trigger |
|---|---|---|
| ADR-001 | AWS-native Aurora statt Neon | ✅ Erledigt 28.06. durch [MVP Architecture ADR](../../latest/Consultry-MVP-Architecture-ADR-v1.0.md) |
| ADR-002 | Fastify + Kysely Backend Stack | Vor erstem Backend-Code |
| ADR-003 | Terraform als IaC Standard | Vor erstem Infra-Module-Merge |
| ADR-004 | Hermes Harness Boundary | ✅ Erledigt 28.06. als ADR-002 in [MVP Architecture ADR](../../latest/Consultry-MVP-Architecture-ADR-v1.0.md) |
| ADR-005 | Work Layer Source Hierarchy | Vor KnowledgeAsset/CompiledArtifact Schema |
| ADR-006 | Virtual Harness Client + HarnessPack | Vor MCP/Connector/Harness implementation |
| ADR-007 | Second Brain Graph/Triple/Hypergraph Layer | Vor Memory schema implementation |
| ADR-008 | Read-only MVP Connector Boundary | Vor Clay/Apollo/GitHub/GitLab/DB connectors |
| ADR-009 | Skill Graph without People Scoring | Vor Skill Graph implementation |

---

## 8. Naechste Grill-Runde

Nur drei Fragen waeren wirklich entscheidungsreif, wenn der User aktiv entscheiden will:

1. Soll `AWS-native Aurora` jetzt offiziell T3 ersetzen?
2. Soll `Fastify + Kysely` als Backend-Stack locked werden?
3. Soll `Terraform` als einziger IaC-Weg locked werden?

Empfehlung: alle drei **ja**, aber als ADRs dokumentieren statt nur im Chat festhalten.

---

*Ende v1.0 - dieses Dokument ist bewusst ein Review-Instrument, kein Spezifikationsersatz.*
