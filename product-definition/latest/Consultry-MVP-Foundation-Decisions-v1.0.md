# Consultry — MVP-Foundation-Entscheidungen v1.0 — **Decision-Log**

> **📌 Statusrevision 02.08.2026.** Diese Datei bewahrt die Begründungen, Salvage-Details, Markt-Evidenz und Korrektur-Historie der früheren MVP-Foundation. Das damalige [MVP-Doc §3.4](../archive/superseded-product-baseline-2026-08/Consultry-MVP-PRD-v1.0.md) ist archiviert. Die Inhalte sind **Technical-Handoff-Input**, keine aktuelle Product-Scope-Authority; Bestätigung oder Revision erfolgt erst nach dem fachlichen Wayfinder-Handoff.

**Status:** Technical-Handoff-Decision-Log; historisch akzeptierte Baseline, aktuell zu revalidieren
**Rolle im Doc-Stack:** Begründungs-/Audit-Layer für den späteren Technical Wayfinder. Dokumentiert, *warum* die damaligen Leitplanken gesetzt wurden (Grill-Sessions 12.–13.06.2026).
**Bezug:** historisches `Consultry-Handover-v1.0.md` *(nicht im Repository vorhanden)*, [Domain-Def](./Consultry-Business-Domain-Definition-v1.0.md), [GTM-Decisions](./Consultry-GTM-Decisions-v1.0.md), `presentation/consultry-mvp-deck.html`

> **Anlass.** Im Repo koexistierten zwei widersprüchliche Doc-Generationen: **Gen A** („Win-and-Deliver", 05.–28.05.: PRD v5.0, Roadmap v1.0, feature-specs/01–04) und **Gen B** („Acquisition-to-Bid", 30.05.–08.06.: Vision, MVP-PRD, GTM, Phase-1-Specs, Domain-Def, Deck). PRD v5.0 beanspruchte „Quelle der Wahrheit" für die Architektur, encodierte aber den verworfenen MVP. Diese Datei beendet das.
>
> **Update 13.06.2026 — Dual-Hero-Wende.** Auf Basis der Marktrecherche (BDU 2025 + Productive.io) und der „Beratung im KI-Zeitalter"-Thesis wurde der MVP bewusst von **einem** Hero auf **zwei gleichrangige Heroes** erweitert (T8/T11/T12). Das ist eine **explizite Revision** der „Core-Vorrang"-Lesart (Revisions-Disziplin §4) — keine stille Abweichung. Begründung: Die „neue Arbeitsweise" (AI-native Operating Foundation) ist nicht nur Retention-Substrat, sondern ein eigenständiges Kaufargument, das denselben ICP an einem zweiten, täglichen Schmerz packt.
>
> **Update 28.06.2026 — Alignment-Freeze.** Die Misalignment-Review wurde in drei Kontrollartefakte ueberfuehrt: [Alignment Control Plane](./Consultry-Alignment-Control-Plane-v1.0.md), [MVP Architecture ADR](./Consultry-MVP-Architecture-ADR-v1.0.md), [MVP Measurement Spec](./Consultry-MVP-Measurement-Spec-v1.0.md). Wichtigste Revisionen: Starting Wedge = **Opportunity-to-Concept**, T3 = **Aurora PostgreSQL Serverless v2 + pgvector**, Hermes = **bounded Harness, kein autonomer Agent**.

---

## 1. Verbindliche Entscheidungen (T1–T10)

| # | Entscheidung | Verbindlich |
|---|---|---|
| **T1** | **Doc-Authority** | **Gen A wird archiviert** (PRD v5.0, Roadmap v1.0, feature-specs/01–04 → Archiv-Banner, nicht löschen). Selektiver Salvage (§4). Eine neue, dünne Technical-Definition v1.1 wird auf der MVP-PRD verankert. |
| **T2** | **Tenancy/Hosting** | **Multi-Tenant SaaS, EU-Region.** Tenant-Isolation via Postgres Row-Level-Security. Compliance-Antwort = AVV/DPA + No-Training (Domain-Def Invariante 6), nicht Infrastruktur-Isolation. Single-Tenant/Customer-Cloud = H2+-Enterprise-Option. |
| **T3** | **Data Layer** | **Revidiert 28.06. durch ADR-001:** **Aurora PostgreSQL Serverless v2 + pgvector** ersetzt Neon als AWS-native MVP-Implementierungsbaseline. RLS, graph-ready relationales Schema, explizite Edge-Tabellen und Graph-DB-deferred bleiben. Kein Hybrid Neon + Aurora im Pilot. |
| **T4** | **AI-Reliability-Minimum (vor Partner #0)** | (1) **Evidence-/Review-State auf Datenebene** und `CitationLink` für policy-relevante Claims; fehlende Evidenz erzeugt keinen globalen Draft-/Persistenz-Block; (2) **Faithfulness-Check (D6)** für verwendete Quellen; (3) **versionierte Prompts** in Git (`prompt_id@version`); (4) **AuditEvent je AI-Call**. Tenant-Policy darf High-Risk Externalization/Actions gaten. **Nicht im MVP:** globaler Citation-Hard-Pass, Drift-Monitor, Eval-CI-Gate, PII-Router. Empfohlen: manuelles Mini-Eval-Set für Review-Recall/Faithfulness + AwardCriterion-Parser (D2). |
| **T5** | **Inference-Stack / Grund-Compliance** | **REVIDIERT 12.07.2026:** **Microsoft Foundry / Azure AI Foundry ist Preferred Platform.** Bevorzugte Modellfamilie = **GPT-5.6**; `gpt-5.6-sol` ist Default für PMF-kritische komplexe Reasoning-/Synthese-Jobs, initial gepinnt auf Katalogversion `2026-07-09`. `gpt-5.6-terra`/`gpt-5.6-luna` bleiben optionale eval-gated Routen. AWS Bedrock bleibt unterstützte Alternative/Fallback-Basiskomponente, nicht gleichrangiger Default. Der gemeinsame Compliance Contract bleibt Enterprise-Vertrag/AVV-DPA, No-Training, freigegebene Region/Data-Zone und Retention, IAM/Tenant-Isolation und Audit. `ModelGateway` provider-neutral; Modell-/Versionswahl policy- und audit-gesteuert. |
| **T6** | **Works-Council-Mode** | **Default-OFF ist verbindlich** (MVP-PRD/Domain-Def/Handover/Deck-Linie). Phase-1-Specs §1.3, §4A.3 + §10 Punkt 4 ✅ korrigiert (12.06.). |
| **T7** | **Tender-Intake** | **Thin TED/eForms-Polling ist IM MVP** (täglicher Pull, CPV-Filter pro Tenant, read-only) — zusätzlich zum semi-manuellen Upload. Damit ist der Deck-Claim („automatisch gematcht") wahr. **MVP-PRD §3.1a wird revidiert** (dort: „erst semi-manuell"). AT via TED abgedeckt. Kein Submission-Pfad (unverändert). |
| **T8** | **Build-Struktur: Dual-Hero** | **REVIDIERT 13.06., terminologisch normalisiert 28.06.:** Der MVP hat **zwei gleichrangige Heroes**, vereint unter einer Thesis (T11): **Hero 1 „Win"** = Opportunity-to-Concept mit Concept Suite als Proof Surface; **Hero 2 „Work"** = AI-native Operating Foundation (auto-gepflegte `ConsultantProfile`, Work-Agent/Time-Capture, `PersonalNote`, `ProjectStatus`, Human-AI-Collaboration im Tagesgeschäft). Beide werden als Produktversprechen **verkauft und gemessen** (T12). Voller Substrat-Scope bleibt. |
| **T9** | **Build-Kapazität (G11)** | **Experten vorhanden; Hiring nach Idee-Bestätigung** (Dogfood #0 + erster Design-Partner = Bestätigung). Build-Zeit ist **nicht** der binding constraint — Dual-Hero ist tragbar. Reihenfolge: Founder/Experten bauen pre-validation **Hero-1-Spine + Showcase-Demo + Substrat-Kern**; Team-Skalierung sobald die Thesis validiert ist. (Frühere funding-first/Core-Vorrang-Lesart aufgehoben.) |
| **T10** | **Deck-Ehrlichkeit** | **Streichen/zusammenführen:** NL-Query-Management-Cockpit-Slide + „Profile aus LinkedIn"-Claim (LinkedIn hat keine API dafür). Tender-Slide **bleibt** (durch T7 gedeckt). Profile-Quellen im Deck → erreichbare: M365, Credly-Export, CV-/Zertifikat-Upload. Markt-Platzhalter (~38k, >60%) durch **BDU-2025-Zahlen** ersetzen (T11-Evidenz). |
| **T11** | **Produkt-Thesis: „Beratung im KI-Zeitalter" (Dual-Hero-Klammer)** | **Eine Thesis, zwei Heroes:** *Consultry macht DACH-Beratungen AI-native — sie **gewinnen mehr** (Hero 1) und **arbeiten AI-nativ** (Hero 2).* Der **Objection-Reframe** „Warum hohe Tagessätze im KI-Zeitalter?" → *„Weil AI-native Beratungen bessere Ergebnisse in weniger Zeit liefern und genau die sind, die wachsen."* Belegt (T-Evidenz unten), **nicht** als reine Angst verkauft: Rate-Druck ist ein **Vorwärtstrend** (BDU: 66 % noch kein Honorar-Effekt, ~40 % erwarten ihn), während **AI = Wachstumstreiber** (+18,8 % DACH-Beratungsumsatz 2025). W6 bleibt: Transformation = **Frame/Why-now**, nicht die einzige Landingpage-Zeile — aber jetzt **co-gleichrangig** mit dem Win-Versprechen. |
| **T12** | **Dual-PMF (zwei Aktivierungssignale)** | **Hero 1 (Win):** ≥ 1 real verwendeter, reviewfähiger Konzept-/Bid-Entwurf aus eigenem Korpus in **5 Tagen** (MVP-PRD §5). **Hero 2 (Work):** **Seat-Utilization-/AI-native-Adoption** — Arbeitshypothese **≥ 60 % der Consultant-Seats wöchentlich aktiv** + messbare Work-Agent-Bestätigungs-Rate + Profile-Auto-Maintenance-Akzeptanz. Beide sind Aktivierungs-Bars; das 5-Tage-Signal bleibt das **schärfste** Leading-Signal für den Painkiller, die Adoption-Bar misst die „neue Arbeitsweise" (Retention/ACV-Fundament). |

---

## 2. Defaults (gelten, bis explizit widersprochen)

- **Profile-Auto-Maintenance-Quellen (MVP):** CV-/Zertifikat-Upload + M365 read-only. Kein LinkedIn-Scraping. Credly nur via Export/Badge-Link.
- **i18n:** DE-only im MVP (DE+AT-Markt); EN = H2. (Das „DE/EN ab Tag 1" stammte aus Gen A.)
- **ICP-Band operativ:** 15–80 Köpfe (Anti-ICP < 15 bleibt). Eigene Firma (#0) darf kleiner sein — Dogfood, zählt nicht als Markt-Beweis.
- **Pilot-Fee:** vor Pilot #1 zu setzen; Arbeitshypothese €500–1.000/Monat.
- **Export:** PDF/Markdown intern (MVP-PRD bestätigt), kein Outbound.

---

## 3. Korrektur-Liste (Doc-Hygiene)

| Datei | Aktion | Status |
|---|---|---|
| `_archive/Consultry-PRD-v5.0-Software-Layered.md` | Banner + nach `_archive/` verschoben; Technical-Salvage → Technical-Foundation | ✅ 12.–13.06. |
| `_archive/Consultry-Roadmap-v1.0-MVP-and-Phasing.md` | Banner + nach `_archive/` verschoben | ✅ 12.–13.06. |
| `_archive/feature-specs/01–04 + _cross-cutting` (10 Dateien) | Banner + verschoben; Datenmodell/Source-Binding/Audit/Symbiose → Technical-Foundation | ✅ 12.–13.06. |
| `_archive/` (neu) PRD v4.1, Product-Document, Market-Thesis | Konsolidiert in Vision §5–§8 + verschoben | ✅ 13.06. |
| `Consultry-Phase-1-MVP-Specs…` §1.3, §4A.1, §4A.3, §10(4) + v1.3-Header | WC-Mode Default-OFF (T6); TED-Polling (T7); parallele Tracks (T8/T9) | ✅ 12.06. |
| `Consultry-MVP-PRD-v1.0.md` §3.1a, §3.1b, §3.3, §8(G11), Header | TED-Polling (T7); Parallel-Revision (T8/T9); OUT-Liste präzisiert; G11 geschlossen | ✅ 12.06. |
| `Consultry-Handover-v1.0.md` §0.1–0.3, §1, §5, §7 | Parallele Tracks, G11 geschlossen, Doc-Stack-Zeile 3a, Next Steps revidiert | ✅ 12.06. |
| `presentation/consultry-mvp-deck.html` | Cockpit-Slide + LinkedIn-Claim raus (T10); Team/Ask-Meilensteine füllen (T9) | ⏳ offen |

---

## 4. Salvage aus Gen A (explizit übernommen)

- **AuditEvent-Schema** (v5.0 §6.3): Operator-Name, Input-/Output-Hash, Modell-ID+Version, Prompt-Version, Source-Bindings, Approver, Zeitstempel, kryptografische Verkettung.
- **Hybrid-Approval-UX** (v5.0 §6.2): inline für hochfrequent/niedrig-kritisch, zentrale Queue für Outbound-nahe/hoch-kritische Artefakte.
- **Operator-Vokabular** (Read/Classify/Suggest/Summarise/Draft/Review/Plan) als Sprachregelung für Specs — nicht als starre Runtime-Grenze.
- **Liability-Regel** (v5.0 §6.1): Approval-Gate für jeden Output, für den ein Mensch haftbar wäre — deckungsgleich mit GI-1b.
- **Revisions-Disziplin** (v5.0 §13.1): Leitplanken werden explizit revidiert, nie stillschweigend gebrochen.

---

## 5. MVP-Technical-Boundary (Kurzfassung für Planning)

> **Dual-Hero-Lesart:** „Drin" enthält jetzt **beide** Heroes gleichrangig. **Hero 1 (Win):** Concept Suite + Tender + Akquise-Pfad. **Hero 2 (Work):** AI-native Operating Foundation (Profile/Time/Notes/ProjectStatus + Human-AI-Collaboration). Die Grounding-/Audit-/Compliance-Engine ist geteiltes Fundament beider.

**Drin:** Multi-Tenant-EU-SaaS (Aurora PostgreSQL Serverless v2 RLS + pgvector) · Korpus-Ingest mit Tenant-Isolation + Span-auflösbaren Citations · Provenance-Pipeline (Firm/External/Model, GI-1) mit Evidence-/Review-State + Faithfulness-Check · **Hero 1:** Opportunity-to-Concept mit Concept Suite (Spec folgt) + TED-Polling + semi-manueller Tender-Intake + AwardCriterion-Parsing + Vertrags-Klausel-Extraktion (F1-Hero-Signal) + anonyme TeamShape (aggregiert) · **Hero 2:** ConsultantProfile auto-maintenance (Quellen: Upload + M365) + Work-Agent/Time-Capture + PersonalNote + ProjectStatus + Collaboration-Loop (Vorschlag→Verfeinern→Audit) · Approval-Card + AuditEvent-Kette · WC-Mode-Schalter (Default-OFF) · bevorzugter Foundry-/GPT-5.6-Pfad (`gpt-5.6-sol` für PMF-kritische komplexe Jobs) hinter provider-neutralem `ModelGateway`; Bedrock als unterstützte Alternative · bounded Hermes/Virtual Harness nach ADR-002 · PDF/MD-Export.

**Draußen:** Graph-DB · PII-Router · Drift-Monitor/Eval-CI · Versand/Outbound · Pricing-Engine · Contract/eIDAS · DATEV/ELSTER · personenscharfes Staffing · Net-New-Prospecting · CH · EN-UI · LinkedIn-Ingest · autonome Multi-Step-Agentik nach außen.

---

## 5a. Markt-Evidenz für die „KI-Zeitalter"-Thesis (T11, gesourct 13.06.2026)

Ersetzt die Deck-Platzhalter durch belastbare Zahlen. Kernbefund: **Rate-Druck ist real, aber überwiegend Vorwärtstrend; AI ist heute primär Wachstumstreiber** — was die Wachstums-Story (nicht die Angst-Story) trägt.

| Befund | Zahl | Quelle |
|---|---|---|
| Ø fakturierter Tagessatz DACH 2025 | **€1.300** (Partner ~€1.600, Analyst ~€700) | BDU „Honorare im Consulting 2025" |
| Tagessatz-Entwicklung | **−2 % YoY** (Konjunktur/Geopolitik) | BDU 2025 |
| AI-Effekt auf Honorarkalkulation heute | **66 % noch kein spürbarer Effekt**, ~40 % erwarten Änderung | BDU 2025 |
| Offene Branchenfrage | „faire Verteilung der Effizienzgewinne zwischen Kunde und Beratung" | BDU 2025 |
| „AI-Discount"-Anfragen von Kunden | **~⅓ der Agenturen schon erhalten**, ~½ erwarten sie | Productive.io 2025 (180+ Agenturen) |
| AI als Wachstumstreiber DACH | **+18,8 % Umsatzwachstum 2025** | BDU 2025/2026 |
| Marktprognose 2026 | **+4,5 % → €51,1 Mrd.** | BDU 2026 |

> **Verkaufsdisziplin (T11):** Den Rate-Druck als *kommenden* Trend rahmen (66 % noch kein Effekt), nicht als heutige Tatsache überzeichnen. Den Hebel auf die **Wachstums-Seite** legen: AI-native Beratungen sind die wachsenden. Quellen siehe §8.

## 5b. Pricing- & Inference-Ökonomie (T13–T16, 13.06.2026)

Auslöser: Analyse des self-hosted „Consultry Final Pricing & Architecture Report v5" (`tmp/pdfs/consultry_pricing.txt`, basiert auf H200/B200 + Qwen3.6-FP8 via vLLM, Nebius-Benchmarks). Er widersprach dem Produkt-Kanon ökonomisch fundamental.

- **T13 Pricing:** €50 = **Pilot-Land-Preis**; €69 Core + Tiers = **post-PMF-Modell** (final aus Foundry-/GPT-5.6-COGS). Self-host-Tiers (€119 Dev / €150–189 Dedicated) gegen Sol-/Terra-/Luna- und Bedrock-Fallback-Kosten neu bewerten.
- **T14 COGS-Basis:** **Foundry/GPT-5.6 per-token = bevorzugt** (`gpt-5.6-sol` Quality-/Complexity-Lane; Terra/Luna nur nach Eval); Bedrock = Alternative/Fallback-Vergleich (lineare Kosten, **kein** „153-Seat-Break-even", **kein** Margin-Asymptote — das war self-host-Logik). Self-hosted = **teure strategische Spätoption** (wenn Open-Weight aufschließt) → Crossover-Appendix im COGS-Modell.
- **T15 Dev-Seat gestrichen:** Coding-Agent-Produkt (€119) ersatzlos raus — passt nicht zur Win+Work-These.
- **T16 Deployment:** Multi-Tenant-SaaS (MVP) bleibt; Appliance/BYOI-Sovereignty = H2 (DACH-Moat); **#0-Validierung offen** (SaaS+AVV akzeptabel fürs Pilot?).

> **Strukturelle Pointe:** Der Self-Host-Report ist ein *Fixkosten-Amortisations*-Modell (GPU-Miete → Verlustzone bis Break-even → Margin-Asymptote). Foundry/GPT-5.6 wird als bevorzugter variabler Managed-Provider-Pfad kalkuliert, Bedrock als Alternative — die COGS-Neu-Ableitung ist keine Kopie, sondern ein **anderes Kostenshape**: Modellroute × Reasoning-/Token-Budget × Volumen × Grounding/Faithfulness-Overhead → Marge-pro-aktivem-Seat.

## 5c. Alignment- und Architektur-Freeze (28.06.2026)

- **Terminologie:** Category = Opinionated AI Work Harness; Whole Product = Win + Work; Starting Wedge = Opportunity-to-Concept; Proof Surface = Concept Suite; Proof Slice = 5-Business-Day review-ready section. Quelle: [Alignment Control Plane](./Consultry-Alignment-Control-Plane-v1.0.md).
- **Architektur:** Aurora ersetzt Neon fuer die MVP-Implementierungsbaseline. Quelle: [ADR-001](./Consultry-MVP-Architecture-ADR-v1.0.md).
- **Harness:** Hermes/Virtual Harness ist erlaubt, aber nur als bounded, job-scoped Harness mit HarnessPack, Policy, Capability Tokens, ResultVerifier und Human Approval. Quelle: [ADR-002](./Consultry-MVP-Architecture-ADR-v1.0.md).
- **Messung:** Opportunity-to-Concept-Verification und Work-Hypothesen stehen in der [MVP Measurement Spec](./Consultry-MVP-Measurement-Spec-v1.0.md).

## 5d. Foundry-/GPT-5.6-Model-Policy (12.07.2026)

Offizieller Referenzstand: Microsoft-Foundry-Katalog vom 12.07.2026; alle drei genannten Modelle führen Version `2026-07-09` und Lifecycle GA. Die konkrete regionale/Data-Zone-Verfügbarkeit und Quote wird vor Deployment geprüft und nicht aus dem Familiennamen abgeleitet.

| Route | Modell | Consultry-Einsatz | Gate |
|---|---|---|---|
| **Deep / PMF-critical (Default)** | `gpt-5.6-sol` | Opportunity-to-Concept, komplexe Evidence-Synthese, Project-/Knowledge-Reasoning, Review kritischer Artefakte | version pin + eval + risikobasierter Evidence-/Review-State + Faithfulness + Human Approval |
| **Balanced (optional)** | `gpt-5.6-terra` | standardisierte Dokumentanalyse, Workflow-/Tool-Reasoning und skalierbare Business-Automation | erst nach task-spezifischer Parity-/Cost-Eval gegen Sol |
| **Fast / High-volume (optional)** | `gpt-5.6-luna` | interaktive Assistenz, Suche/Summary, Klassifikation und latenzkritische Low-Risk-Flows | erst nach task-spezifischer Quality-/Latency-/Cost-Eval |
| **Provider fallback** | Bedrock-Modell via freigegebenem Adapter | Availability-, Contract- oder Deployment-Fallback | kein stiller Fallback bei High-Trust-Jobs; eigene Model-/Prompt-/Eval-Version im Audit |

**Routing Contract:** Domain-Module referenzieren `model_policy_id`, niemals einen Provider- oder Modellnamen. Der `ModelGateway` löst daraus Provider, Deployment Alias, Model ID, gepinnte Version, Reasoning-/Token-Budget, Data-Zone und Fallback Policy auf. Jede Änderung benötigt Eval-Ergebnis, Versionierung und Audit; ein Familienmitglied darf `gpt-5.6-sol` nicht allein aus Kosten- oder Latenzgründen still ersetzen.

**Sources:** [Foundry model catalog — `gpt-5.6-sol`](https://ai.azure.com/catalog/models/gpt-5.6-sol), [GPT-5.6 family catalog](https://ai.azure.com/catalog/models?azure-portal=true).

## 6. Verbleibende offene Punkte

| ID | Punkt | Ort |
|---|---|---|
| D1, D3, D5, D6 | Review-Risikoklassifikation, Sektionsmodell, Freshness-Status, Faithfulness-Mechanik | → **Concept-Suite-Spec** (nächster Schritt, höchste Priorität) |
| D2 | AwardCriterion-Parsing-Tiefe (jetzt inkl. TED-Polling-Pfad, T7) | → Concept-Suite-Spec / Tender-Spec |
| D4 | External-Whitelist-Default kuratieren (BSI/ISO/EU-DACH) | offen |
| G6/G7 | Externe Design-Partner-Pipeline + Bestandskunden-led-Guardrail | bewusst Stage-0-deferred |
| AI-01 | Foundry-Adapter/Deployment konkretisieren: Responses-/Chat Contract, Entra/Workload Identity, Private Networking, EU/Data-Zone, Retention, Quote/Capacity und `gpt-5.6-sol@2026-07-09` Eval | eigener kurzer Architektur-/IaC-Pass; blockiert nicht die Product Vision |
| — | Pilot-Fee-Betrag, Deck-Marktzahlen sourcen (~38k, >60%) | vor Investor-/Pilot-Einsatz |
| AC-01 | Persona-Refresh auf akquise-mueden Partner/Managing Partner + aktuelle MVP-Grenzen | offen |

---

## 7. Nächste Schritte (Reihenfolge)

1. **Concept-Suite-Spec schreiben** (Hero; enthält D1/D3/D5/D6, Collaboration-Loop per Handover §0.4, Eval-Harness T4).
2. **Korrektur-Pass** über die Dateien aus §3 (Archiv-Banner + Fixes).
3. **Foundry-/GPT-5.6-Spike + Technical-Foundation synchron halten:** `gpt-5.6-sol@2026-07-09`, `model_policy_id`, Foundry Adapter, Entra/Network/Data-Zone/Retention/Quota und eval-gated Terra/Luna/Bedrock-Fallback; Aurora/bounded Harness/Provenance bleiben unverändert.
4. **Deck-Edit** (T10) + Meilenstein-Slide (T9).

---

## 8. Quellen (Markt-Evidenz §5a/T11)

- BDU — Studie „Honorare im Consulting 2025" (Tagessätze, AI-Effekt): https://www.bdu.de/news/studie-honorare-im-consulting-2025-tagessaetze-leicht-ruecklaeufig/
- BDU — „Deutsche Unternehmensberatungen erwarten 2026 Rückkehr zum Wachstumskurs" (KI +18,8 %, +4,5 %-Prognose): https://www.bdu.de/news/deutsche-unternehmensberatungen-erwarten-2026-eine-rueckkehr-zum-wachstumskurs/
- CONSULTING.de — „Rückläufige Tagessätze im Consulting": https://www.consulting.de/artikel/ruecklaeufige-tagessaetze-im-consulting/
- AI Weekly — „AI Breaks Consulting's Billable-Hours Model": https://aiweekly.co/alerts/ai-breaks-consultings-billable-hours-model
- ProMarket — „AI Is Coming for the Economic Consulting Industry": https://www.promarket.org/2026/04/29/ai-is-coming-for-the-economic-consulting-industry/

> **Hinweis:** „~⅓ der Agenturen erhielten AI-Discount-Anfragen" stammt aus einer Productive.io-2025-Umfrage (180+ Agenturen, via AI-Weekly/Branchenpresse referenziert) — vor Investor-Einsatz die Primärquelle verifizieren.

---

*Ende v1.0 — verbindlich, zuletzt 13.06.2026 (Dual-Hero-Wende T8/T11/T12). Widerspruch zu dieser Datei = explizite Revision, nicht stilles Abweichen.*
