# Consultry — MVP-Foundation-Entscheidungen v1.0 — **Decision-Log**

> **📌 Rollenwechsel 13.06.2026.** Die **verbindlichen Entscheidungen (T1–T12) stehen jetzt im [MVP-Doc §3.4](./Consultry-MVP-PRD-v1.0.md)** (die eine MVP-Quelle). **Diese Datei ist ab jetzt das Decision-Log/Changelog**: sie bewahrt die **Begründungen**, die **Salvage-Details** (§4 → [Technical-Foundation](./Consultry-MVP-Technical-Foundation-v1.0.md)), die **Markt-Evidenz** (§5a → auch in [Vision §8](./Consultry-Product-Vision-v1.0.md)) und die **Korrektur-Historie** (§3). Bei Konflikt gilt das MVP-Doc.

**Status:** Decision-Log (verbindliche Quelle = MVP-Doc §3.4)
**Rolle im Doc-Stack:** Begründungs-/Audit-Layer unter dem [MVP-Doc](./Consultry-MVP-PRD-v1.0.md). Dokumentiert, *warum* die Leitplanken so gesetzt wurden (Grill-Sessions 12.–13.06.2026).
**Bezug:** [Handover](./Consultry-Handover-v1.0.md), [Domain-Def](./Consultry-Business-Domain-Definition-v1.0.md), [GTM-Decisions](./Consultry-GTM-Decisions-v1.0.md), `presentation/consultry-mvp-deck.html`

> **Anlass.** Im Repo koexistierten zwei widersprüchliche Doc-Generationen: **Gen A** („Win-and-Deliver", 05.–28.05.: PRD v5.0, Roadmap v1.0, feature-specs/01–04) und **Gen B** („Acquisition-to-Bid", 30.05.–08.06.: Vision, MVP-PRD, GTM, Phase-1-Specs, Domain-Def, Deck). PRD v5.0 beanspruchte „Quelle der Wahrheit" für die Architektur, encodierte aber den verworfenen MVP. Diese Datei beendet das.
>
> **Update 13.06.2026 — Dual-Hero-Wende.** Auf Basis der Marktrecherche (BDU 2025 + Productive.io) und der „Beratung im KI-Zeitalter"-Thesis wurde der MVP bewusst von **einem** Hero auf **zwei gleichrangige Heroes** erweitert (T8/T11/T12). Das ist eine **explizite Revision** der „Core-Vorrang"-Lesart (Revisions-Disziplin §4) — keine stille Abweichung. Begründung: Die „neue Arbeitsweise" (AI-native Operating Foundation) ist nicht nur Retention-Substrat, sondern ein eigenständiges Kaufargument, das denselben ICP an einem zweiten, täglichen Schmerz packt.

---

## 1. Verbindliche Entscheidungen (T1–T10)

| # | Entscheidung | Verbindlich |
|---|---|---|
| **T1** | **Doc-Authority** | **Gen A wird archiviert** (PRD v5.0, Roadmap v1.0, feature-specs/01–04 → Archiv-Banner, nicht löschen). Selektiver Salvage (§4). Eine neue, dünne Technical-Definition v1.1 wird auf der MVP-PRD verankert. |
| **T2** | **Tenancy/Hosting** | **Multi-Tenant SaaS, EU-Region.** Tenant-Isolation via Postgres Row-Level-Security. Compliance-Antwort = AVV/DPA + No-Training (Domain-Def Invariante 6), nicht Infrastruktur-Isolation. Single-Tenant/Customer-Cloud = H2+-Enterprise-Option. |
| **T3** | **Data Layer** | **Neon Postgres + pgvector, graph-ready relationales Schema** (explizite Edge-Tabellen für Stakeholder/Skill/Asset-Relationen). **Dedizierte Graph-DB erst**, wenn ein konkretes Traversal-Feature sie verlangt (personenscharfe Warm-Paths, Skill-Graph = ohnehin H2 per GI-13). GraphRAG-Ambition bleibt notiert, ist aber nicht MVP-blocking — MVP-Retrieval = Chunks + CitationLinks + pgvector. |
| **T4** | **AI-Reliability-Minimum (vor Partner #0)** | (1) **CitationLink-Gate auf Datenebene** — kein Firm-Fact-Satz persistiert ohne Quelle (GI-1/1a); (2) **Faithfulness-Check (D6) Pflicht**; (3) **versionierte Prompts** in Git (`prompt_id@version`); (4) **AuditEvent je AI-Call**. **Nicht im MVP:** Drift-Monitor, Eval-CI-Gate, PII-Router. Empfohlen: manuelles Mini-Eval-Set (20–50 Fälle) für Provenance-Klassifikator (D1) + AwardCriterion-Parser (D2). |
| **T5** | **Inference-Stack** | **Anthropic via AWS Bedrock EU (Frankfurt) = einziger verdrahteter Pfad im MVP.** Dünne Abstraktionsschicht, damit Azure Foundry später ohne Refactor als Fallback andockt. **Eine** DPA-Kette vor Pilot #1. |
| **T6** | **Works-Council-Mode** | **Default-OFF ist verbindlich** (MVP-PRD/Domain-Def/Handover/Deck-Linie). Phase-1-Specs §1.3, §4A.3 + §10 Punkt 4 ✅ korrigiert (12.06.). |
| **T7** | **Tender-Intake** | **Thin TED/eForms-Polling ist IM MVP** (täglicher Pull, CPV-Filter pro Tenant, read-only) — zusätzlich zum semi-manuellen Upload. Damit ist der Deck-Claim („automatisch gematcht") wahr. **MVP-PRD §3.1a wird revidiert** (dort: „erst semi-manuell"). AT via TED abgedeckt. Kein Submission-Pfad (unverändert). |
| **T8** | **Build-Struktur: Dual-Hero** | **REVIDIERT 13.06. (bewusste Umkehr der „Core-Vorrang"-Lesart):** Der MVP hat **zwei gleichrangige Heroes**, vereint unter einer Thesis (T11): **Hero 1 „Win"** = Concept & Proposal Suite (Acquisition-to-Bid); **Hero 2 „Work"** = AI-native Operating Foundation (CRM-artiges Substrat: auto-gepflegte `ConsultantProfile`, Work-Agent/Time-Capture, `PersonalNote`, `ProjectStatus`, Human-AI-Collaboration im Tagesgeschäft). Beide werden als Produktversprechen **verkauft und gemessen** (T12). Voller Substrat-Scope bleibt. |
| **T9** | **Build-Kapazität (G11)** | **Experten vorhanden; Hiring nach Idee-Bestätigung** (Dogfood #0 + erster Design-Partner = Bestätigung). Build-Zeit ist **nicht** der binding constraint — Dual-Hero ist tragbar. Reihenfolge: Founder/Experten bauen pre-validation **Hero-1-Spine + Showcase-Demo + Substrat-Kern**; Team-Skalierung sobald die Thesis validiert ist. (Frühere funding-first/Core-Vorrang-Lesart aufgehoben.) |
| **T10** | **Deck-Ehrlichkeit** | **Streichen/zusammenführen:** NL-Query-Management-Cockpit-Slide + „Profile aus LinkedIn"-Claim (LinkedIn hat keine API dafür). Tender-Slide **bleibt** (durch T7 gedeckt). Profile-Quellen im Deck → erreichbare: M365, Credly-Export, CV-/Zertifikat-Upload. Markt-Platzhalter (~38k, >60%) durch **BDU-2025-Zahlen** ersetzen (T11-Evidenz). |
| **T11** | **Produkt-Thesis: „Beratung im KI-Zeitalter" (Dual-Hero-Klammer)** | **Eine Thesis, zwei Heroes:** *Consultry macht DACH-Beratungen AI-native — sie **gewinnen mehr** (Hero 1) und **arbeiten AI-nativ** (Hero 2).* Der **Objection-Reframe** „Warum hohe Tagessätze im KI-Zeitalter?" → *„Weil AI-native Beratungen bessere Ergebnisse in weniger Zeit liefern und genau die sind, die wachsen."* Belegt (T-Evidenz unten), **nicht** als reine Angst verkauft: Rate-Druck ist ein **Vorwärtstrend** (BDU: 66 % noch kein Honorar-Effekt, ~40 % erwarten ihn), während **AI = Wachstumstreiber** (+18,8 % DACH-Beratungsumsatz 2025). W6 bleibt: Transformation = **Frame/Why-now**, nicht die einzige Landingpage-Zeile — aber jetzt **co-gleichrangig** mit dem Win-Versprechen. |
| **T12** | **Dual-PMF (zwei Aktivierungssignale)** | **Hero 1 (Win):** ≥ 1 real verwendeter, gegroundeter Konzept-/Bid-Entwurf aus eigenem Korpus in **5 Tagen** (unverändert, MVP-PRD §5). **Hero 2 (Work):** **Seat-Utilization-/AI-native-Adoption** — Arbeitshypothese **≥ 60 % der Consultant-Seats wöchentlich aktiv** + messbare Work-Agent-Bestätigungs-Rate + Profile-Auto-Maintenance-Akzeptanz. Beide sind Aktivierungs-Bars; das 5-Tage-Signal bleibt das **schärfste** Leading-Signal für den Painkiller, die Adoption-Bar misst die „neue Arbeitsweise" (Retention/ACV-Fundament). |

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

**Drin:** Multi-Tenant-EU-SaaS (Neon Postgres RLS + pgvector) · Korpus-Ingest mit Tenant-Isolation + Span-auflösbaren Citations · Provenance-Pipeline (Firm/External/Model, GI-1) mit Daten-Level-Gate + Faithfulness-Check · **Hero 1:** Concept Suite (Spec folgt) + TED-Polling + semi-manueller Tender-Intake + AwardCriterion-Parsing + Vertrags-Klausel-Extraktion (F1-Hero-Signal) + anonyme TeamShape (aggregiert) · **Hero 2:** ConsultantProfile auto-maintenance (Quellen: Upload + M365) + Work-Agent/Time-Capture + PersonalNote + ProjectStatus + Collaboration-Loop (Vorschlag→Verfeinern→Audit) · Approval-Card + AuditEvent-Kette · WC-Mode-Schalter (Default-OFF) · Bedrock-EU-Inference hinter Abstraktion · PDF/MD-Export.

**Draußen:** Graph-DB · PII-Router · Drift-Monitor/Eval-CI · Versand/Outbound · Pricing-Engine · Contract/eIDAS · DATEV/ELSTER · personenscharfes Staffing · Net-New-Prospecting · CH · EN-UI · LinkedIn-Ingest · Multi-Step-Agentik nach außen.

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

- **T13 Pricing:** €50 = **Pilot-Land-Preis**; €69 Core + Tiers = **post-PMF-Modell** (final aus Bedrock-COGS). Self-host-Tiers (€119 Dev / €150–189 Dedicated) gegen Bedrock-Kosten neu bewerten.
- **T14 COGS-Basis:** **Bedrock + Azure Foundry per-token = primär** (lineare Kosten, **kein** „153-Seat-Break-even", **kein** Margin-Asymptote — das war self-host-Logik). Self-hosted = **teure strategische Spätoption** (wenn Open-Weight aufschließt) → Crossover-Appendix im COGS-Modell.
- **T15 Dev-Seat gestrichen:** Coding-Agent-Produkt (€119) ersatzlos raus — passt nicht zur Win+Work-These.
- **T16 Deployment:** Multi-Tenant-SaaS (MVP) bleibt; Appliance/BYOI-Sovereignty = H2 (DACH-Moat); **#0-Validierung offen** (SaaS+AVV akzeptabel fürs Pilot?).

> **Strukturelle Pointe:** Der Self-Host-Report ist ein *Fixkosten-Amortisations*-Modell (GPU-Miete → Verlustzone bis Break-even → Margin-Asymptote). Bedrock ist *variabel pro Token* — die COGS-Neu-Ableitung ist keine Kopie, sondern ein **anderes Kostenshape**: Kosten-pro-Draft × Volumen × Grounding/Faithfulness-Overhead → Marge-pro-aktivem-Seat.

## 6. Verbleibende offene Punkte

| ID | Punkt | Ort |
|---|---|---|
| D1, D3, D5, D6 | Provenance-Klassifikator, Sektionsmodell, Freshness-Gate, Faithfulness-Mechanik | → **Concept-Suite-Spec** (nächster Schritt, höchste Priorität) |
| D2 | AwardCriterion-Parsing-Tiefe (jetzt inkl. TED-Polling-Pfad, T7) | → Concept-Suite-Spec / Tender-Spec |
| D4 | External-Whitelist-Default kuratieren (BSI/ISO/EU-DACH) | offen |
| G6/G7 | Externe Design-Partner-Pipeline + Bestandskunden-led-Guardrail | bewusst Stage-0-deferred |
| — | Pilot-Fee-Betrag, Deck-Marktzahlen sourcen (~38k, >60%) | vor Investor-/Pilot-Einsatz |

---

## 7. Nächste Schritte (Reihenfolge)

1. **Concept-Suite-Spec schreiben** (Hero; enthält D1/D3/D5/D6, Collaboration-Loop per Handover §0.4, Eval-Harness T4).
2. **Korrektur-Pass** über die Dateien aus §3 (Archiv-Banner + Fixes).
3. **Technical-Definition v1.1** (dünn, auf T1–T5 verankert): Schema-Skizze, Ingest-Pipeline, Provenance-Enforcement, Bedrock-Abstraktion.
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
