# Consultry — Project Context & Memory (START HERE)

**Zweck:** Persistenter Kontext-Anker für **jede künftige Session** dieses Projekts. Wer hier kalt einsteigt, liest **zuerst diese Datei**, dann die zwei Haupt-Docs. Diese Datei wird am Ende jeder substanziellen Session aktualisiert (locked decisions, offene Punkte, letzter Stand).
**Letzter Stand:** 27.06.2026 (AWS/Hermes + Virtual Harness/Second-Brain-Refinement + Backend/IaC-Tiefenplan; AWS-native Aurora-Revision noch Source-Candidate, nicht locked)
**Pflege-Regel:** Bei neuen verbindlichen Entscheidungen → hier eintragen **und** in die jeweilige Quell-Datei. Konflikt = explizite Revision, nie stilles Abweichen.

---

## 0. Was ist Consultry (ein Atemzug)

> **Consultry macht DACH-Beratungen AI-native: sie gewinnen mehr Projekte *und* arbeiten AI-nativ.** Klammer-Thesis: *„Beratung im KI-Zeitalter"* — Kunden hinterfragen Tagessätze; die Antwort ist nicht billiger, sondern AI-nativ werden. AI-native Beratungen liefern besser in weniger Zeit und sind die, die wachsen (BDU 2025: AI +18,8 %).

**Dual-Hero-MVP:**
- **Hero 1 „Win"** — Acquisition-to-Bid: Tender + Bestandskunden → Opportunity → gegroundeter Konzept-/Proposal-Entwurf (Concept Suite). PMF = **1 echter Draft aus eigenem Korpus in 5 Tagen**.
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
| **AWS/Hermes Architekturplan** | `Consultry-MVP-AWS-Hermes-Architecture-v1.0.md` *(Source-Candidate, nicht locked)* |
| **Backend/IaC Tiefenplan + WBS** | `Consultry-MVP-Backend-IaC-Software-Design-v1.0.md` *(Source-Candidate, nicht locked)* |
| **Virtual Harness + Second Brain Refinement** | `Consultry-MVP-Virtual-Harness-Second-Brain-Refinement-v1.0.md` *(Source-Candidate, nicht locked)* |
| **AI-native CMS / Brand & Page Generation** | `Consultry-AI-Native-CMS-Module-v1.0.md` *(Source-Candidate, Strategic Suite Candidate)* |
| **Backend/IaC Grill-Me Log** | `Consultry-MVP-Backend-IaC-Grill-Me-v1.0.md` |
| **Personas (date-stale, UX-Input)** | `Consultry-Target-Personas-v1.0.md` |
| **Handover/Session-Log** | `Consultry-Handover-v1.0.md` |
| **Archiv (pre-pivot/Gen-A)** | `_archive/` |

> **Eine MVP-Quelle, eine Vision-Quelle.** Bei Konflikt: MVP-Doc für „was bauen", Vision für „wohin".

---

## 2. Locked Decisions (verbindlich)

**Strategie/GTM**
- Headline-Wedge: Projekt-Wachstum & -Akquise; **Dual-Hero (Win + Work)** unter „Beratung im KI-Zeitalter".
- GTM-Sequenz: mid-to-small zuerst; **Bestandskunden öffnet die Tür, Tender = Big Swing**. DE+AT ab Tag 1, CH später.
- Pricing: **€50/Seat/Monat**, seat-only (Win-Fee gestrichen). ACV €15–45k. Value-Tier = Post-PMF-Hebel.
- Seat-Paradox aufgelöst: AI-native Firmen wachsen/stellen ein → Wachstum verkaufen, nicht Schrumpfung.
- Founder-Market-Fit: eigene Cybersecurity-Beratung = Design-Partner #0 + zero-corpus Tender-Showcase.

**MVP-Foundation (T1–T12 — Details: MVP-Doc §3.4 / Decision-Log)**
- T1 Gen A archiviert · T2 **Multi-Tenant EU-SaaS, Postgres RLS** · T3 **Neon Postgres + pgvector, graph-ready; Graph-DB deferred** · T4 **AI-Reliability-Minimum** (CitationLink-Gate + Faithfulness + versionierte Prompts + AuditEvent) · T5 **Bedrock EU primär**, Azure Foundry später · T6 **WC-Mode Default-OFF** · T7 **TED-Polling im MVP** + semi-manuell · T8 **Dual-Hero** · T9 Build: Experten vorhanden, Hiring nach Bestätigung · T10 Deck-Ehrlichkeit · T11 KI-Zeitalter-Thesis · T12 Dual-PMF.
- **T12-Primat: Win = go/no-go-Signal, Work = Retention-Verstärker.**
- T13 **Pricing:** €50 = Pilot-Land-Preis; €69 Core + Tiers = post-PMF-Modell (aus COGS). · T14 **COGS:** Bedrock+Foundry per-token primär (kein GPU-Break-even); self-hosted (H200/Qwen) = teure Spätoption. · T15 **Dev-Seat/Coding-Agent-Produkt gestrichen.** · T16 **Deployment:** SaaS (MVP), Appliance/BYOI = H2-Moat.
- **Pre-Validation Critical Path:** Win-Spine + Korpus-Ingest + Citation-Gate + Showcase-Demo zuerst zum 5-Tage-PMF; Work-Hero nur so tief, wie er Grounding und Seat-Utilization-Test stützt. Hiring nach validierter Thesis.

**Source-Candidate 27.06.2026 (noch nicht locked)**
- **AWS-native MVP:** Wenn AWS als Plattform gesetzt wird, ersetzt Aurora PostgreSQL Serverless v2 + pgvector die bisherige Neon-T3-Entscheidung. RLS, pgvector, graph-ready relationales Schema, SourceBinding und Audit bleiben unveraendert. Kein Hybrid aus Neon + AWS fuer den Pilot.
- **Hermes Harness:** kontrollierte Cloud-Sandbox mit job-scoped CorpusBundle. Hermes bekommt ein Paket, nicht den Korpus; kein direkter DB-Zugriff, kein freier Internetzugang, keine AI-Schreibzugriffe.
- **Virtual Harness Client:** Hermes wird als cloud-basierter, policy-gesteuerter Harness Client mit `HarnessPack` erweitert: Corpus, Memory, Tools, MCP, Connector-Grants, lokale Snapshots, DOCX/Word, SQL/NoSQL und Output Contracts.
- **MVP Connector Substrate:** M365, Google Drive, GitHub, GitLab, local files, SQL/NoSQL DBs, Clay und Apollo sind als read-only/snapshot Connectoren Teil des Harness-Substrats. Kein autonomer Outbound, keine Clay/Apollo-Sequenzen, kein Writeback.
- **Second Brain Graph:** Memory ist Graph/Triple/Hypergraph inklusive Skill Graph. Aurora bleibt Source of Truth; Graph DB/Neptune Export bleibt spaeterer Pfad. Skill Graph ist evidence-backed und erzeugt im MVP nur anonyme/aggregierte Projektionen, kein People Scoring.
- **Backend/IaC Stack-Empfehlung:** TypeScript modularer Monolith auf ECS Fargate, Fastify + Kysely + Zod/OpenAPI, Terraform mit Plan-/Policy-Gates, Vitest/Testcontainers/LocalStack/Playwright fuer Validierung.
- **Work Layer Vision:** Consultry ist nicht nur UI, sondern eine agentenlesbare, menschlich freigegebene Arbeitsschicht, die Firmenwissen, Dokumente, Artefakte, Projekterfahrung, Profile, Angebote, Vertraege und Brand-/Marketing-Artefakte aligned.
- **AI-native Brand & Page CMS:** Strategischer Suite-Kandidat, nicht H1-MVP. Brand Memory, Tonalitaet, Sprachen, Design-System, Produkt-/Offer-Katalog und Proof Library werden zu LLM-editierbaren Landingpages/Offer Pages kompiliert. Kein klassisches Marketing-CMS und kein autonomes Publish-System; Proof-, Brand- und Approval-Gates bleiben Pflicht.

**Grounding/Compliance (Domain-Def GI)**
- Drei-wertige Provenance (Firm/External/Model), Citation-Pflicht auf Datenebene, Firm vor External (GI-1/4).
- Human-Backstop: benannter Mensch verantwortet, nicht die AI (GI-1b).
- Personenbezug nur aggregiert; personenscharf erst H2 + WC-Mode-Gate (GI-12/13/16).
- Daten-Compliance: Enterprise-API + AVV/DPA + No-Training + EU/SCCs.

---

## 3. Offene Punkte / nächste Schritte

- **Concept-Suite-Spec** (Hero 1) — wichtigster nächster Bau-Schritt: D1 Provenance-Klassifikator, D3 Sektionsmodell, D5 Freshness-Gate, D6 Faithfulness, Eval-Harness, Collaboration-Loop, **COGS-bewusst designt** (T14). Baut auf Technical-Foundation §2.3 + §3.
- **COGS-/Unit-Economics-Modell** (Bedrock+Foundry per-token primär; self-host Crossover-Appendix). Setzt den Preis-Floor (T13/T14). Quelle Self-Host-Referenz: `tmp/pdfs/consultry_pricing.txt`.
- **GTM-Aktivierungsplan** — 30-Tage-Design-Partner-Sourcing (G6/G7) + Korpus-Cold-Start-Ritual (G1a–c).
- **#0-Appliance-Validierung (T16):** akzeptiert die Cybersecurity-Firma SaaS+AVV fürs Pilot, oder braucht sie Appliance? Vor Infra-Lock klären.
- **Hero-2-PMF-Bar** (Seat-Utilization-Zahl) mit erstem Design-Partner final setzen.
- **Deck-Edit (T10):** Cockpit-Slide + LinkedIn-Claim raus; BDU-Zahlen rein; Team/Ask-Meilensteine; Dual-Hero-Story.
- **Markt-Platzhalter** im Deck final sourcen; Productive.io „AI-Discount"-Zahl primärquellen-verifizieren.
- Design-Partner-Pipeline G6/G7 (externe + ≥1 Bestandskunden-led-Guardrail).
- **AI-native CMS Entscheidung spaeter:** erst nach Win/Work-Proof klaeren, ob das Brand/Page-Modul Dogfood-only, H2-Kundenmodul oder H3-Publish-Suite wird.

---

## 4. Arbeitsweise in diesem Projekt

- **Sprache:** Specs/Docs Deutsch (DACH-Markt); Commit-Messages Englisch.
- **Ton:** kritisch grillen, Widersprüche offen benennen, Entscheidungen explizit revidieren.
- **Keine erfundenen Metriken** vor Investoren — Schätzungen mit † markieren, Quellen nennen.
- **Human-AI-Collaboration** ist Querschnitt-Prinzip jedes Features (Vorschlag → Verfeinern → Verantworten → Audit).
- Diese Datei + Cross-Session-Memory am Sessionende aktualisieren.

---

*Diese Datei ist der persistente Einstieg. Halte sie kurz und aktuell — Details leben in den verlinkten Docs.*
