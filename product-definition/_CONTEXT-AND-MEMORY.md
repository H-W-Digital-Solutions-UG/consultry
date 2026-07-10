# Consultry — Project Context & Memory (START HERE)

**Zweck:** Persistenter Kontext-Anker für **jede künftige Session** dieses Projekts. Wer hier kalt einsteigt, liest **zuerst diese Datei**, dann die zwei Haupt-Docs. Diese Datei wird am Ende jeder substanziellen Session aktualisiert (locked decisions, offene Punkte, letzter Stand).
**Letzter Stand:** 10.07.2026 (Product-Vision-Refinement-Modus und Video-Narrativ festgehalten; MVP-Re-Baselining folgt erst nach Abschluss der Vision)
**Pflege-Regel:** Bei neuen verbindlichen Entscheidungen → hier eintragen **und** in die jeweilige Quell-Datei. Konflikt = explizite Revision, nie stilles Abweichen.

---

## 0. Was ist Consultry (ein Atemzug)

> **Consultry macht DACH-Beratungen AI-native: sie gewinnen mehr Projekte *und* arbeiten AI-nativ.** Klammer-Thesis: *„Beratung im KI-Zeitalter"* — Kunden hinterfragen Tagessätze; die Antwort ist nicht billiger, sondern AI-nativ werden. AI-native Beratungen liefern besser in weniger Zeit und sind die, die wachsen (BDU 2025: AI +18,8 %).

**Dual-Hero-MVP:**
- **Hero 1 „Win"** — **Opportunity-to-Concept**: Tender + Bestandskunden → Opportunity → gegroundeter Konzept-/Proposal-Entwurf (Concept Suite). PMF = **1 echter, source-grounded Proof Slice aus eigenem Korpus in 5 Business-Tagen**.
- **Hero 2 „Work"** — AI-native Operating Foundation: auto-Profile, Work-Agent/Time-Capture, Notes, ProjectStatus, Human-AI-Collaboration. PMF = **≥ 60 % Consultant-Seats wöchentlich aktiv** + Work-Agent-Bestätigungs-Rate *(Bar mit erstem Design-Partner final setzen)*.
- **Geteiltes Fundament:** Grounding/Provenance · Approval-Card · AuditEvent · Korpus-Ingest · WC-Mode · Tenant-Isolation.

---

## 1. Doc-Map (Quelle der Wahrheit)

| Rolle | Datei |
|---|---|
| **Kontext-Anker (diese Datei)** | `_CONTEXT-AND-MEMORY.md` |
| **Vision — wohin (komplett)** | `Consultry-Product-Vision-v1.0.md` (v2.0) |
| **MVP — was zuerst (Fokus, self-contained T1–T12 §3.4)** | `Consultry-MVP-PRD-v1.0.md` |
| **Technical Foundation — Datenmodell/Architektur** | `Consultry-MVP-Technical-Foundation-v1.0.md` |
| **Decision-Log — Begründungen/Evidenz** | `Consultry-MVP-Foundation-Decisions-v1.0.md` |
| **Domänensprache/Invarianten GI-1…16** | `Consultry-Business-Domain-Definition-v1.0.md` |
| **Feature ↔ Pain Map (belegt, PW#/PK#)** | `Consultry-Feature-Pain-Map-v1.0.md` |
| **GTM/Positionierung (§3A KI-Zeitalter)** | `Consultry-GTM-Decisions-v1.0.md` |
| **Feature-Specs F1–F6 + Flows** | `Consultry-Phase-1-MVP-Specs-and-Flow-Canvas-v1.0.md` |
| **Onboarding-Korpus-Ritual** | `Consultry-Onboarding-Corpus-Ritual-v1.0.md` |
| **Alignment Control Plane** | `Consultry-Alignment-Control-Plane-v1.0.md` *(kanonische Begriffe + Baseline-Governance)* |
| **MVP Architecture ADR** | `Consultry-MVP-Architecture-ADR-v1.0.md` *(Aurora + bounded Hermes accepted)* |
| **MVP Measurement Spec** | `Consultry-MVP-Measurement-Spec-v1.0.md` *(Wedge-Verifikation + PMF-Messung)* |
| **AWS/Hermes Architekturplan** | `Consultry-MVP-AWS-Hermes-Architecture-v1.0.md` *(Planning Source; Aurora/Hermes-Baseline accepted via ADR-001/002)* |
| **Backend/IaC Tiefenplan + WBS** | `Consultry-MVP-Backend-IaC-Software-Design-v1.0.md` *(Planning Source; Detail-WBS nicht MVP-Scope-Owner)* |
| **Virtual Harness + Second Brain Refinement** | `Consultry-MVP-Virtual-Harness-Second-Brain-Refinement-v1.0.md` *(Planning Source; Harness-Boundary accepted, Second-Brain-Tiefe weiter gated)* |
| **AI-native CMS / Brand & Page Generation** | `Consultry-AI-Native-CMS-Module-v1.0.md` *(Source-Candidate, Strategic Suite Candidate)* |
| **Project Intelligence & Symbiosis Graph** | `Consultry-Project-Intelligence-Symbiosis-Graph-v1.0.md` *(Source-Candidate, Strategic Suite Candidate)* |
| **Backend/IaC Grill-Me Log** | `Consultry-MVP-Backend-IaC-Grill-Me-v1.0.md` |
| **Personas (date-stale, UX-Input)** | `Consultry-Target-Personas-v1.0.md` |
| **Handover/Session-Log** | `Consultry-Handover-v1.0.md` |
| **Archiv (pre-pivot/Gen-A)** | `_archive/` |

> **Eine MVP-Quelle, eine Vision-Quelle.** Bei Konflikt: MVP-Doc für „was bauen", Vision für „wohin".

---

## 2. Locked Decisions (verbindlich)

**Strategie/GTM**
- Headline-Job: Projekt-Wachstum & -Akquise; kanonischer Starting Wedge: **Opportunity-to-Concept**; **Dual-Hero (Win + Work)** unter „Beratung im KI-Zeitalter".
- GTM-Sequenz: mid-to-small zuerst; **Bestandskunden öffnet die Tür, Tender = Big Swing**. DE+AT ab Tag 1, CH später.
- Pricing: **€50/Seat/Monat**, seat-only (Win-Fee gestrichen). ACV €15–45k. Value-Tier = Post-PMF-Hebel.
- Seat-Paradox aufgelöst: AI-native Firmen wachsen/stellen ein → Wachstum verkaufen, nicht Schrumpfung.
- Founder-Market-Fit: eigene Cybersecurity-Beratung = Design-Partner #0 + zero-corpus Tender-Showcase.

**MVP-Foundation (T1–T12 — Details: MVP-Doc §3.4 / Decision-Log)**
- T1 Gen A archiviert · T2 **Multi-Tenant EU-SaaS, Postgres RLS** · T3 **Aurora PostgreSQL Serverless v2 + pgvector, graph-ready; Graph-DB deferred** (ADR-001) · T4 **AI-Reliability-Minimum** (CitationLink-Gate + Faithfulness + versionierte Prompts + AuditEvent) · T5 **Bedrock EU primär**, Azure Foundry später · T6 **WC-Mode Default-OFF** · T7 **TED-Polling im MVP** + semi-manuell · T8 **Dual-Hero** · T9 Build: Experten vorhanden, Hiring nach Bestätigung · T10 Deck-Ehrlichkeit · T11 KI-Zeitalter-Thesis · T12 Dual-PMF.
- **T12-Primat: Win = go/no-go-Signal, Work = Retention-Verstärker.**
- T13 **Pricing:** €50 = Pilot-Land-Preis; €69 Core + Tiers = post-PMF-Modell (aus COGS). · T14 **COGS:** Bedrock+Foundry per-token primär (kein GPU-Break-even); self-hosted (H200/Qwen) = teure Spätoption. · T15 **Dev-Seat/Coding-Agent-Produkt gestrichen.** · T16 **Deployment:** SaaS (MVP), Appliance/BYOI = H2-Moat.
- **Pre-Validation Critical Path:** Win-Spine + Korpus-Ingest + Citation-Gate + Showcase-Demo zuerst zum 5-Tage-PMF; Work-Hero nur so tief, wie er Grounding und Seat-Utilization-Test stützt. Hiring nach validierter Thesis.

**Accepted Architecture Baseline 28.06.2026**
- **AWS-native MVP:** Aurora PostgreSQL Serverless v2 + pgvector ersetzt die bisherige Neon-T3-Entscheidung. RLS, pgvector, graph-ready relationales Schema, SourceBinding und Audit bleiben unveraendert. Kein Hybrid aus Neon + AWS fuer den Pilot.
- **Hermes Harness:** kontrollierte Cloud-Sandbox mit job-scoped CorpusBundle/HarnessPack. Hermes bekommt ein Paket, nicht den Korpus; kein direkter DB-Zugriff, kein freier Internetzugang, keine AI-Schreibzugriffe. Wichtig: bounded Harness, **kein autonomer Agent**.
- **Virtual Harness Client:** Hermes wird als cloud-basierter, policy-gesteuerter Harness Client mit `HarnessPack` erweitert: Corpus, Memory, Tools, MCP, Connector-Grants, lokale Snapshots, DOCX/Word, SQL/NoSQL und Output Contracts.
- **MVP Connector Substrate:** M365, Google Drive, GitHub, GitLab, local files, SQL/NoSQL DBs, Clay und Apollo sind als read-only/snapshot Connectoren Teil des Harness-Substrats. Kein autonomer Outbound, keine Clay/Apollo-Sequenzen, kein Writeback.
- **Project Intelligence & Symbiosis Graph:** Strategischer Suite-Kandidat. Jira/Atlassian/Confluence, ServiceNow, GitHub/GitLab, M365 und Projektartefakte werden read-only/snapshot analysiert, um Requirements, Pain Points, Ziele, Redundanzen, Konflikte, SymbiosisLinks, ProjectSignals und InternalPlanDrafts zu erzeugen. Kein eigenes PM-System, keine Ticket-Mutation, kein People Scoring.
- **Second Brain Graph:** Memory ist Graph/Triple/Hypergraph inklusive Skill Graph. Aurora bleibt Source of Truth; Graph DB/Neptune Export bleibt spaeterer Pfad. Skill Graph ist evidence-backed und erzeugt im MVP nur anonyme/aggregierte Projektionen, kein People Scoring.
- **Backend/IaC Stack-Empfehlung:** TypeScript modularer Monolith auf ECS Fargate, Fastify + Kysely + Zod/OpenAPI, Terraform mit Plan-/Policy-Gates, Vitest/Testcontainers/LocalStack/Playwright fuer Validierung.
- **Work Layer Vision:** Consultry ist nicht nur UI, sondern eine agentenlesbare, menschlich freigegebene Arbeitsschicht, die Firmenwissen, Dokumente, Artefakte, Projekterfahrung, Profile, Angebote, Vertraege und Brand-/Marketing-Artefakte aligned.
- **AI-native Brand & Page CMS:** Strategischer Suite-Kandidat, nicht H1-MVP. Brand Memory, Tonalitaet, Sprachen, Design-System, Produkt-/Offer-Katalog und Proof Library werden zu LLM-editierbaren Landingpages/Offer Pages kompiliert. Kein klassisches Marketing-CMS und kein autonomes Publish-System; Proof-, Brand- und Approval-Gates bleiben Pflicht.

**Grounding/Compliance (Domain-Def GI)**
- Drei-wertige Provenance (Firm/External/Model), Citation-Pflicht auf Datenebene, Firm vor External (GI-1/4).
- Human-Backstop: benannter Mensch verantwortet, nicht die AI (GI-1b).
- Personenbezug nur aggregiert; personenscharf erst H2 + WC-Mode-Gate (GI-12/13/16).
- Daten-Compliance: Enterprise-API + AVV/DPA + No-Training + EU/SCCs.

## 2a. Arbeitsmodus Product-Vision Refinement (10.07.2026)

- **Vision zuerst, Scope danach:** Solange die Product Vision noch verfeinert wird, dürfen bestehende H1/H2/H3-Grenzen nicht als Filter verwendet werden, um Vision-Capabilities aus Journey, Video oder Produktbild zu entfernen. Das finale Scope-Re-Baselining erfolgt erst nach Abschluss der Vision.
- **Build-Scope bleibt separat:** Die bestehenden MVP-Dateien bleiben bis zu dieser späteren Re-Baselining-Entscheidung der aktuelle Build-Stand. Vision-Erweiterungen werden nicht stillschweigend zum MVP erklärt.
- **Video-Hauptnarrativ:** fiktiver Bestandskunde, **ERP-Migration & Prozessmanagement**. Der Einstieg kombiniert ein quellengebundenes Vertrags-/Optionssignal mit einem Bedarf, den ein interner Consultant aus laufender Projektarbeit über seinen Consultry Workspace meldet; LinkedIn Mail und verbundene Projektdaten verstärken das Signal.
- **In der Vision behalten:** personenscharfes Team-Matching, People Scores und CV-Generierung; tiefe Verbindung von Wissen, Projektdaten und weiteren Arbeitsquellen ist ein **Core Use Case**.
- **Default-Sicht:** personenscharfe Aktivität erscheint nicht in der Standard-ProjectStatus-Sicht, kann aber in bewusst geöffneten Detail-/Drill-down-Sichten existieren.
- **Journey Rail ist erweiterbar:** keine feste Fünf-Schritt-Grenze. Empfohlen sind Makro-Kapitel `Gewinnen → Arbeiten → Wirkung` und eine expandierte Journey `Signal → Opportunity → Kontext → Team → Konzept → Freigabe → Projekt → Wirkung`.
- **Narrative Entscheidungen:** Outreach-E-Mail aus dem Hauptflow entfernen; `Deal closed` durch menschlich verantwortete interne Freigabe/Exportbereitschaft ersetzen; `ReviewIssues` nicht als primären Payoff-Baustein verwenden; Business-Case-Szenen vorerst nicht überarbeiten; aktuelle Länge erhalten; Voiceover und Musik bleiben gemutet; bestehende `.dc.html`-Komposition bleibt das Produktionsformat.
- **Zeitbezug:** Das spätere aktive Projekt ist dasselbe Projekt, das zuvor gewonnen wurde, aber die Story muss den zeitlichen Übergang sichtbar machen und darf keinen sofortigen autonomen Opportunity→Project-Sprung suggerieren.
- **Arbeitsartefakte:** [Journey Graph](../Consultry-Hypermock/pitch-video-layout-review/project/graph.md), [Video Redline Index](../Consultry-Hypermock/pitch-video-layout-review/project/video-redline-index.md), [QA/Decision Register](../Consultry-Hypermock/pitch-video-layout-review/project/video-redline-qa.md).

---

## 3. Offene Punkte / nächste Schritte

- **Concept-Suite-Spec** (Hero 1) — wichtigster nächster Bau-Schritt: D1 Provenance-Klassifikator, D3 Sektionsmodell, D5 Freshness-Gate, D6 Faithfulness, Eval-Harness, Collaboration-Loop, **COGS-bewusst designt** (T14). Baut auf Technical-Foundation §2.3 + §3.
- **Persona-Refresh AC-01:** Target Personas sind date-stale; naechster UX-Pass muss den akquise-mueden Partner/Managing Partner als Erst-Buyer und Opportunity-to-Concept als Starting Wedge priorisieren.
- **COGS-/Unit-Economics-Modell** (Bedrock+Foundry per-token primär; self-host Crossover-Appendix). Setzt den Preis-Floor (T13/T14). Quelle Self-Host-Referenz: `tmp/pdfs/consultry_pricing.txt`.
- **GTM-Aktivierungsplan** — 30-Tage-Design-Partner-Sourcing (G6/G7) + Korpus-Cold-Start-Ritual (G1a–c).
- **#0-Appliance-Validierung (T16):** akzeptiert die Cybersecurity-Firma SaaS+AVV fürs Pilot, oder braucht sie Appliance? Vor Infra-Lock klären.
- **Hero-2-PMF-Bar** (Seat-Utilization-Zahl) mit erstem Design-Partner final setzen.
- **Deck-Edit (T10):** Cockpit-Slide + LinkedIn-Claim raus; BDU-Zahlen rein; Team/Ask-Meilensteine; Dual-Hero-Story.
- **Markt-Platzhalter** im Deck final sourcen; Productive.io „AI-Discount"-Zahl primärquellen-verifizieren.
- Design-Partner-Pipeline G6/G7 (externe + ≥1 Bestandskunden-led-Guardrail).
- **AI-native CMS Entscheidung spaeter:** erst nach Win/Work-Proof klaeren, ob das Brand/Page-Modul Dogfood-only, H2-Kundenmodul oder H3-Publish-Suite wird.
- **Project Intelligence Entscheidung spaeter:** nach Win/Work-Proof klaeren, ob Project Radar zuerst als Dogfood-/H2-Modul gebaut wird und welche Quelle zuerst kommt: Jira/Confluence oder ServiceNow.

---

## 4. Arbeitsweise in diesem Projekt

- **Sprache:** Specs/Docs Deutsch (DACH-Markt); Commit-Messages Englisch.
- **Ton:** kritisch grillen, Widersprüche offen benennen, Entscheidungen explizit revidieren.
- **Keine erfundenen Metriken** vor Investoren — Schätzungen mit † markieren, Quellen nennen.
- **Human-AI-Collaboration** ist Querschnitt-Prinzip jedes Features (Vorschlag → Verfeinern → Verantworten → Audit).
- Diese Datei + Cross-Session-Memory am Sessionende aktualisieren.

---

*Diese Datei ist der persistente Einstieg. Halte sie kurz und aktuell — Details leben in den verlinkten Docs.*
