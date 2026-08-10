# Consultry — MVP-PRD v1.0 (Opportunity-to-Concept)

> **ARCHIVSTATUS 02.08.2026:** Historische Provenienz; kein aktueller Product Canon, Scope oder freigegebener Build-Plan. Aktueller Einstieg: [`product-definition/latest`](../../latest/README.md). Reaktivierung nur über eine explizite Wayfinder-Entscheidung.

**Status:** Entwurf zur Bestätigung
**Rolle im Doc-Stack:** **Das MVP-Fokus-Doc — was wir ZUERST bauen (und was NICHT).** Gegenstück: [Product Vision (komplett)](../../latest/Consultry-Product-Vision-v1.0.md) = *wohin insgesamt*. Technische Tiefe: [MVP-Technical-Foundation](../../latest/Consultry-MVP-Technical-Foundation-v1.0.md). Begründungen: [Foundation-Decisions (Decision-Log)](../../latest/Consultry-MVP-Foundation-Decisions-v1.0.md).
**Datum:** 30. Mai 2026
**Bezug:** [Alignment Control Plane](../../latest/Consultry-Alignment-Control-Plane-v1.0.md), [GTM-Decisions](../../latest/Consultry-GTM-Decisions-v1.0.md), [Onboarding-Korpus-Ritual](../../latest/Consultry-Onboarding-Corpus-Ritual-v1.0.md), [Phase-1 MVP Specs](./Consultry-Phase-1-MVP-Specs-and-Flow-Canvas-v1.0.md), [Measurement Spec](../../latest/Consultry-MVP-Measurement-Spec-v1.0.md), **[MVP-Foundation-Decisions v1.0](../../latest/Consultry-MVP-Foundation-Decisions-v1.0.md) (verbindliche Klärungen 12.06. + Architektur-Revision 28.06.)**

> **Auftrag dieser Datei: NEIN sagen.** Die Vision ist groß. Diese MVP-PRD ist absichtlich klein. Alles, was hier nicht explizit *In-Scope* steht, ist **out** — egal wie verlockend.

> **Update 28.06.2026 - Alignment-Freeze, revidiert 02.08.:** Die kanonische Hierarchie ist jetzt: **Category** = Opinionated AI Work Harness for consulting firms; **Whole Product** = Win + Work; **Starting Wedge** = **Opportunity-to-Concept**; **Proof Surface** = Concept Suite; **First Proof Slice** = ein realer, reviewfähiger Konzept-/Proposal-Abschnitt aus eigenem Korpus in 5 Business-Tagen. `Acquisition-to-Bid` bleibt nur historischer Alias fuer die Win-Linie.

> **Reality status 01.08.2026:** Consultry ist **in früher POC-Entwicklung und im Vorgründungsstatus**. Vorhanden sind ein ausgearbeiteter Produkt-Hypermock, Designsystem, Video-Demo und technisches Systemdesign; ein kleiner funktionaler POC wird aktuell gebaut und soll zum Pitch vorführbar sein, ist aber noch nicht abgeschlossen. Ein validierter End-to-End-Proof-Slice mit realen Kundendokumenten existiert noch nicht. Eine Consultry-Gesellschaft wurde noch nicht gegründet und unter dem Vorhaben fand noch keine wirtschaftliche Tätigkeit statt. KRALLMANN AG und MHP sind direkte Zielkundenkontakte, aber Discovery-Termine, LOIs, Piloten, Nutzung und Umsatz stehen noch aus. Julian arbeitet ab Tag 1 vollzeitig an Consultry; Paul kann ab Förderstart vollzeitig wechseln. Beide haben ihren Hauptwohnsitz in Berlin. Caspar übernimmt die CEO- und Commercial-Rolle mit **15 Stunden pro Woche** und wird nicht als geförderter Vollzeitgründer eingeplant. Diese Punkte dürfen im Pitch nur als laufende Arbeit oder nächste Meilensteine erscheinen, nicht als Traction.

> **BSS target recommendation 01.08.2026:** Primärziel ist der **SIBB Incubator, Batch 2** (Bewerbungsphase laut offizieller Trägerliste 02.01.–02.04.2027, Start 03.05.2027). Der Schwerpunkt `Cyber-Resilient Societies and Trustworthy AI` passt zu Consultrys SourceBinding-, Human-Approval-, Audit-, Datenschutz- und Digital-Sovereignty-Ansatz. Bewerberkern sind Julian + Paul in Vollzeit; Caspar wird nicht als geförderter Vollzeitgründer eingeplant. Vor Einreichung müssen ein funktionaler Proof Slice, mindestens zwei durchgeführte Discovery-Gespräche und die angestrebten LOIs vorliegen.

---

## 1. Die Wette (PMF-Hypothese) — Dual-Hero unter einer Thesis

> **Revidiert 13.06.2026 ([Foundation-Decisions T8/T11/T12](../../latest/Consultry-MVP-Foundation-Decisions-v1.0.md)).** Der MVP verfolgt **zwei gleichrangige Heroes**, vereint unter einer Thesis: **Consultry macht DACH-Beratungen AI-native — sie gewinnen mehr *und* arbeiten AI-nativ.**

**Übergeordnete Thesis („Beratung im KI-Zeitalter"):** Kunden hinterfragen zunehmend hohe Tagessätze — die Antwort ist nicht „billiger werden", sondern **AI-nativ werden**: bessere Ergebnisse in weniger Zeit, und damit zu den Beratungen gehören, die im KI-Zeitalter *wachsen* (BDU 2025: AI = +18,8 % Wachstumstreiber; Rate-Druck ist Vorwärtstrend). Consultry liefert diese Arbeitsweise an zwei Fronten:

> **Hero 1 — „Win" (der Painkiller):** Wenn eine DACH-Beratung aus ihren eigenen Dokumenten in Minuten einen reviewfähigen Konzept-/Bid-Entwurf mit sichtbarer Evidenz für kritische Claims erzeugt — mit anonymer Team-Shape — dann ist das ein Painkiller, für den sie zahlt und ohne den sie „sehr enttäuscht" wäre. Der Painkiller ist die **schwere Bid- und Konzept-Dokumentation**, die heute Tage kostet.

> **Hero 2 — „Work" (die neue Arbeitsweise):** Wenn dieselbe Beratung ihr Tagesgeschäft (Profile, Zeiterfassung, Notizen, Projektstatus) durch einen Human-AI-Collaboration-Layer führt — Agent schlägt vor, Mensch verfeinert, System dokumentiert — dann wird sie messbar AI-nativer, rechtfertigt ihre Tagessätze und nutzt Consultry **täglich** (Retention + Seat-Utilization → ACV).

Beide teilen sich **dieselbe Grounding-/Approval-/Audit-Engine** und denselben Korpus. „Chancen früher sehen" (F1-Signal-Board) bleibt Teil von Hero 2 als wöchentlicher Puls.

### 1.1 Der Value-Claim (aufgelöst 30.05.)

> **Frontier-Intelligence hebt Qualität UND senkt Zeit/Ressourcen — gleichzeitig.** Für eine **ressourcenbeschränkte** mid-small Beratung sind Qualität und Aufwand **dieselbe Beschränkung**: Ihre Konzepte sind nicht mangels Können mittelmäßig, sondern mangels Zeit/Köpfen. Constraint weg + Experten-Level-LLM-Wissen dazu → bessere Konzepte in weniger Zeit. „Win-rate" und „effort-reduction" sind damit **kein Entweder-oder**, sondern derselbe Hebel.

> ⚠️ **Beweis-Disziplin:** Im 5-Tage-Pilot ist **Effort/Qualität-pro-Aufwand** messbar; **Win-rate ist es nicht** (Vergabe dauert Monate). Pitch darf Win-rate *implizieren*, **beweisen** im Pilot nur die Qualitäts-/Zeit-Hebung.

### 1.2 Defensibility (aufgelöst 30.05.)

> **Shell bauen, Modell reiten.** Das Frontier-Modell frisst die generische Mitte (Textgenerierung). Consultry besitzt die **defensible Schale**: domänenspezifische Skills, **zusätzliches Grounding**, Company-Context, Profile, Eignungs-/Vergabe-Logik, Compliance/Audit, Multi-Autor-Workflow. **Nicht die Mitte bauen, die das nächste Modell kommodifiziert.**

### 1.3 Risikobasierte Provenienz und Qualitätsregeln

1. **Provenienz nach Wirkung, nicht nach Satzform:** Quellenstatus und Review-Bedarf werden dort erfasst, wo eine Aussage Kundenversprechen, Capability, Zertifizierung, Staffing, Vertrag, Preis, Recht/Regulatorik oder eine externe Aktion beeinflusst.
   - **Firm-Fact** (z. B. Zertifikate, Referenzen, Kapazitäten, Track-Record) → bevorzugt Tenant-Korpus; fehlende oder widersprüchliche Evidenz wird als Review Issue sichtbar.
   - **External-Fact** (z. B. Normen, Regulatorik, Marktdaten, Research) → bei materieller Nutzung mit `ExternalSource`, Freshness und Faithfulness-Status.
   - **Model-Expertise** (Methodik, Konzept-Struktur, Domänen-Framing, Formulierung) → darf ohne Citation als Vorschlag oder fachliches Judgment erscheinen.
   - **Kein globaler Hard Pass:** Fehlende Quellen blockieren weder Draft noch Persistenz pauschal. Tenant-Policy kann nur die externe Freigabe oder Aktion für unresolved High-Risk Claims gaten.
   - **External-Firewall:** Web-Research bleibt PII-/kundendaten-bereinigt und über `SourcePolicy` gesteuert (GI-5/6).
   - **Human-Backstop:** Ein benannter Mensch prüft und verantwortet die externe Verwendung sowie offene materielle Review Issues; die AI unterstützt Klassifikation, Evidenzsuche und Faithfulness-Checks.
2. **„Qualität" = Fit-to-Zuschlagskriterien.** Konzept-Qualität wird vom Auftraggeber gegen die **Bewertungsmatrix** bewertet, nicht vom Consultant/LLM. Die Concept Suite **parst die Zuschlagskriterien und strukturiert/gewichtet das Konzept auf maximalen Score** — das ist die Brücke von „gutes Konzept" zu „gewinnendes Konzept" *und* defensible Shell.

## 2. ICP & Anti-ICP

**ICP:** DACH-IT-/Digitalisierungs-/Security-Beratungen, **mid-to-small**, DE **+ AT**, mit regelmäßigem Akquise-Druck (Tender und/oder Bestandskunden-Folgegeschäft).

**Anti-ICP (bewusst NICHT für die MVP):**
- Solo/Boutique < ~15 Köpfe (zu wenig Volumen/Seats).
- Konzern-Beratungen > ~200 (eigene Tooling-Teams, lange Procurement).
- Firmen ohne Tender- *und* ohne Bestandskunden-Akquise-Schmerz.
- **CH** (eigene Vergabe/SIMAP, Datenresidenz → später).

## 3. MVP = zwei Heroes auf einem Fundament: **Win + Work**

> **Revidiert 13.06., normalisiert 28.06.:** Früher „eine Linie (Acquisition-to-Bid)". Jetzt zwei gleichrangige Heroes auf geteilter Engine (T8). Hero 1 = **Opportunity-to-Concept**; Hero 2 = die AI-native Operating Foundation (§3.1-Platform, hochgestuft von „Substrat" zu „Hero"). Beide unter der „Beratung im KI-Zeitalter"-Thesis (§1).

### 3.0 Hero 1: Opportunity-to-Concept (die Win-Linie)

```
  INTAKE A: Tender (F5)  ─┐
                          ├─▶  OPPORTUNITY  ─▶  CONCEPT & PROPOSAL SUITE (Hero)  ─▶  interner Entwurf
  INTAKE B: Bestands-     ┘        │                  + anonyme TEAM-SHAPE (F6)
  kunden-Signal (F1)               │
                          ┌────────┴─────────┐
                          │  ENGINE (nicht separat verkauft):  │
                          │  F2 Knowledge/Reuse · F3 Grounding-Workspace │
                          └──────────────────────────────────┘
```

### 3.1 In-Scope (MVP)

> **Scope-Balance-Regel:** Der Hero (Concept Suite) wird **tief** gebaut — finanziert durch **bewusste Dünnheit** der anderen vier (§3.1a), **nicht** durch mehr Zeit insgesamt. Tiefe wird **durch die 5-Tage-Metrik begrenzt**: bauen bis ein Partner in 5 Tagen einen brauchbaren Entwurf erzeugt (sinkende Edit-Distanz), **dann stop** für die MVP. Ziel = „spart dem Consultant Tage", nicht „perfekte Prosa".

| Baustein | Was im MVP | Verkaufs-Rolle |
|---|---|---|
| **Concept & Proposal Suite** (Hero, F4+) | Reviewfähiger Entwurf von **Lösungs-/Arbeitskonzept + Angebotstext** aus Opportunity + Korpus. Materielle Claims zeigen Quellen- oder Review-Status. Editierbarer Canvas, Version History, interner Export. **Built für den Consultant als Autor** (nicht nur Partner als Käufer). **Kein Versand, kein Pricing-Engine.** | **Der Painkiller + die kritische Pfad-Wette — das, was gekauft wird** |
| **Tender Ingest** (Intake A, F5) | TED/eForms (+ AT) lesen, strukturieren (CPV/Fristen/Lose/Eignung), Bid/No-Bid-Eignungs-Check, Match gegen Korpus. **Kein autonomes Einreichen.** | Akquise-Intake + **zero-corpus Showcase-Demo** |
| **Bestandskunden-Signal** (Intake B, F1) | Vertrags-Options-/Verlängerungsfenster aus hochgeladenen Verträgen, **an Quell-Klausel gebunden** → Opportunity. | Akquise-Intake + **Retention-Spine** |
| **Team-Shape** (F6, anonym) | Anzahl, Skill-/Profil-Typen, Seniority-Mix, Rollen — **keine Personen**. Speist Bid/No-Bid + Konzept-Realismus. | Glaubwürdigkeits-/Realismus-Layer |
| **Engine: Knowledge/Reuse + Grounding-Workspace** (F2/F3) | Korpus-Ingest, Retrieval, Citations, Copilot, Approval-Hook. **Nicht als eigenes Feature vermarktet.** | unsichtbarer Motor |
| **Backbone** | Approval-Card + Audit-Trail + risikobasierte Provenienz- und Review-Regeln. | Compliance-Default |

### 3.1-Platform → Hero 2: AI-native Operating Foundation (MVP — die „neue Arbeitsweise")

> **Hochgestuft 13.06. von „Substrat" zu Hero 2 (T8).** Diese Bausteine sind nicht mehr nur Record-Basis, sondern der **zweite verkaufte Hero**: der Human-AI-Collaboration-Layer fürs Tagesgeschäft, der eine Beratung messbar AI-nativ macht. Sie existieren auch, weil mid-small DACH-Beratungen kein gepflegtes CRM/PSA haben → Consultry ist zugleich ihre Record-Basis. Eigene PMF-Bar (Seat-Utilization, T12).

| Baustein | Was im MVP | Rolle |
|---|---|---|
| **ConsultantProfile** | Personenbez. Skills/Zertifikate/Erfahrung — **auto-gepflegt** von Background-Agents aus verknüpften Quellen, Consultant bestätigt. Deskriptiv, **kein Scoring**. Speist nur **aggregiert** in Team-Shape. | Capability-Substrat |
| **Work-Agent / Time-Capture** (Harvest-orientiert) | Leichte Zeiterfassung (BAG-pflichtig); Agent schlägt `TimeEntry`s aus In-Tool-Arbeit vor, Consultant bestätigt. Privater `PersonalNote`-Layer = Retention-Driver. | Daily-Driver + Capture |
| **Project Observability** | Deliverable-zentrierter `ProjectStatus`/Burn aus **aggregierten TimeEntries**. **Nie personen-attribuiert** im Default; Personenbezug nur unter Works-Council-Mode. | Management-Substrat |

> **Compliance-Posture (Entscheidung 30.05. — „move fast, ein Schalter"):** Wir **optimieren nicht auf §87** — Wette: Erst-ICP hat überwiegend **keinen Betriebsrat.** Einzige Versicherung = **Works-Council-Mode** (Default-OFF), der personenbez. Auswertung **und den Aktivitäts-Auto-Feed** (GI-9b) gated. Restrisiko bei Kunden *mit* aktivem BR **bewusst akzeptiert**. Zeiterfassung-Capture ist ohnehin BAG-pflichtig/legitim. Details: [Domain-Def §5 Punkt 9, GI-7..16](../../latest/Consultry-Business-Domain-Definition-v1.0.md).

### 3.1a Die anderen vier (Acquisition-Linie) bewusst dünn (um den Hero zu finanzieren)

| Element | Dünnste tragfähige MVP-Version |
|---|---|
| Tender Ingest | **Revidiert 12.06. (T7): semi-manueller Upload/Paste + thin TED/eForms-Polling im MVP** (täglicher read-only Pull, CPV-Filter pro Tenant — kein Submission-Pfad). Was zählt: die Strukturierung inkl. `AwardCriterion`, die das Konzept speist. Schwergewichtige Discovery-Features (Volltext-Monitoring, Multi-Plattform-Abdeckung) bleiben später. |
| Bestandskunden-Signal | **Ein** Signaltyp: Vertrags-Options-/Verlängerungsfenster. Keine breite Signal-Engine. |
| Team-Shape | Einfacher strukturierter Output. Keine Ausschmückung. |
| Knowledge/Reuse | Nur so viel Retrieval, wie das Konzept-Grounding braucht. Kein eigenständiges Wissensprodukt. |

> Kritischer Pfad = **Opportunity-to-Concept → Concept Suite → 5-Tage-Draft → PMF-Signal.** Alles andere ist Zubringer und bleibt dünn, bis dieses Signal steht.

### 3.1b Tiering → Dual-Hero (revidiert 13.06.2026, T8)

> **Wende:** Aus „ein Hero + nachrangiges Substrat" wurde **zwei gleichrangige Heroes**. Die frühere „MVP-Core hat Vorrang"-Regel ist **bewusst aufgehoben** (Begründung: Foundation-Decisions T8/T11). Das Substrat ist nicht mehr nur Retention-Zubringer, sondern ein eigenständig verkauftes Produktversprechen.

| Hero | Inhalt | Verkaufs-Rolle | PMF-Bar (T12) |
|---|---|---|---|
| **Hero 1 — „Win"** | Opportunity-to-Concept-Linie: Opportunity, Tender (TED-Polling + semi-manuell), Bestandskunden-Signal, **Concept Suite**, anonyme Team-Shape, Evidence-/Review-Engine. | Der Painkiller — „gewinnt mehr Projekte". | ≥ 1 reviewfähiger Draft aus eigenem Korpus in **5 Tagen**. |
| **Hero 2 — „Work"** | AI-native Operating Foundation: `ConsultantProfile` (auto), Work-Agent/Time-Capture, `PersonalNote`, `ProjectStatus`, Human-AI-Collaboration-Loop, Signal-Board-Puls. | Die neue Arbeitsweise — „werdet AI-nativ, rechtfertigt eure Tagessätze". | **≥ 60 % Consultant-Seats wöchentlich aktiv** + Work-Agent-Bestätigungs-Rate (Arbeitshypothese). |

> **Geteiltes Fundament (kein eigener Hero):** Grounding/Provenance, Approval-Card, AuditEvent, Korpus-Ingest, WC-Mode, Tenant-Isolation — trägt beide Heroes.
>
> **Tie-Breaker bei Kapazitätsknappheit:** Das 5-Tage-Signal (Hero 1) bleibt das **schärfste** Leading-Signal für Zahlungsbereitschaft; bei einem echten Konflikt zuerst absichern. Aber Hero 2 wird **nicht** auf „später" geschoben — Build-Kapazität ist laut T9 nicht der binding constraint (Experten vorhanden, Hiring nach Bestätigung).

### 3.2 Die MVP-Surfaces

1. **Opportunity-Detail / Approval-Card** — das zentrale Entscheidungsobjekt.
2. **Tender Board** — Liste, strukturierte Tender-Sicht, Eignungs-/Match-Check.
3. **Concept & Proposal Canvas** — der Hero-Surface: reviewfähiger Entwurf mit sichtbarer Evidenz für kritische Claims, editierbar, Version History.
4. **Team-Profile-Sicht** — anonyme Team-Shape + aggregierte Kapazitäts-Aussage.
5. *(MVP-Platform)* **Work-Agent / Time-Capture** — Zeiterfassung + privater Notiz-Layer.
6. *(MVP-Platform)* **Project-Status-Board** — deliverable-zentriert, aggregiert.

> Cockpit, Notification Center, Knowledge Workspace (als eigene Oberfläche) bleiben **dünne Einstiegspunkte**, nicht ausgebaute Surfaces.

### 3.3 Explizit OUT (MVP)

Proposal-**Versand**, Pricing-/Kalkulations-Engine, Contract Drafting · **personenscharfes** Staffing/Matching · voller Capacity Planner/Workforce-Optimierung · **tiefes personenbezogenes Utilization-/Delivery-Analytics** (≠ Time-Capture, das ist drin) · Invoice/DATEV/ELSTER · Net-New-Prospecting · CH-Markt · offener Prompt-Marktplatz · Multi-Step-Agentik/autonome Aktionsketten · Schreibzugriff/Outbound nach außen · **personenbez. Auswertung bei aktiviertem Works-Council-Mode** (Schalter AN = gated; Default-OFF, T6 — präzisiert 12.06.) · *(per Foundation-Decisions T1–T5 außerdem technisch OUT: Graph-DB, PII-Router, Drift-Monitor/Eval-CI, Single-Tenant/Customer-Cloud, EN-UI, LinkedIn-Ingest)*.

---

## 3.4 Foundation- & Technical-Entscheidungen (T1–T12, eingearbeitet 13.06.2026)

> Diese Entscheidungen waren bis 13.06. in einer separaten Datei (`Consultry-MVP-Foundation-Decisions`). Sie sind **hier eingearbeitet** — dieses Doc ist die **eine MVP-Quelle**. Die Foundation-Datei bleibt als **Decision-Log/Changelog** (Begründungen, Salvage-Details, Markt-Evidenz-Tabelle, Quellen). Technische Tiefe (Datenmodell, Architektur) → [MVP-Technical-Foundation](../../latest/Consultry-MVP-Technical-Foundation-v1.0.md).

| # | Entscheidung | Verbindlich |
|---|---|---|
| **T1** | Doc-Authority | Gen-A archiviert (PRD v5.0, Roadmap v1.0, feature-specs); selektiver Salvage → Technical-Foundation. |
| **T2** | Tenancy/Hosting | **Multi-Tenant SaaS, EU-Region**, Postgres Row-Level-Security. Compliance = AVV/DPA + No-Training. Single-Tenant/Customer-Cloud → H2+. |
| **T3** | Data Layer | **Revidiert 28.06. durch [ADR-001](../../latest/Consultry-MVP-Architecture-ADR-v1.0.md): Aurora PostgreSQL Serverless v2 + pgvector** ersetzt Neon als AWS-native MVP-Implementierungsbaseline. RLS, graph-ready Edge-Tabellen und Graph-DB-deferred bleiben. |
| **T4** | AI-Reliability-Minimum | (1) **Evidence-/Review-State auf Datenebene** und `CitationLink` für policy-relevante Claims, (2) **Faithfulness-Check (D6)** für verwendete Quellen, (3) **versionierte Prompts** (Git), (4) **AuditEvent je AI-Call**. Kein globaler Citation-Hard-Pass, kein Drift-Monitor/Eval-CI/PII-Router im MVP. |
| **T5** | Inference / Grund-Compliance | **Revidiert 12.07.2026:** **Microsoft Foundry / Azure AI Foundry ist der bevorzugte Managed-AI-Pfad.** Bevorzugte Familie = **GPT-5.6**; Default für PMF-kritische komplexe Reasoning-/Synthese-Jobs = **`gpt-5.6-sol`**, initial auf Katalogversion `2026-07-09` gepinnt. `gpt-5.6-terra` und `gpt-5.6-luna` sind optionale eval-gated Effizienzrouten. AWS Bedrock bleibt unterstützte Alternative/Fallback-Basiskomponente. Grund-Compliance je Pfad: Enterprise-Vertrag/AVV-DPA, No-Training, freigegebene Region/Data-Zone und Retention, IAM/Tenant-Isolation und Audit. Der `ModelGateway` bleibt provider-neutral; Modell-/Versionswahl ist Policy-Konfiguration, kein Hardcode. |
| **T6** | Works-Council-Mode | **Default-OFF.** Schalter gated (wenn AN) personenbez. Auswertung + Auto-Feed. MVP-Sichten ohnehin aggregiert/anonym. |
| **T7** | Tender-Intake | **Thin TED/eForms-Polling im MVP** (täglicher Pull, CPV-Filter/Tenant, read-only) **+** semi-manueller Upload. Kein Submit. |
| **T8** | **Dual-Hero** | Zwei gleichrangige Heroes (Win + Work, §3/§3.1b), geteiltes Engine-Fundament. „Core-Vorrang"-Lesart bewusst aufgehoben. |
| **T9** | Build-Kapazität | Experten vorhanden, Hiring nach Idee-Bestätigung (Dogfood #0 + 1. Partner). Build-Zeit ist nicht der binding constraint; Dual-Hero tragbar. |
| **T10** | Deck-Ehrlichkeit | NL-Cockpit-Slide + „Profile aus LinkedIn" raus; Profile-Quellen = M365/Credly/Upload; Markt-Platzhalter → BDU-Zahlen. *(Deck-Edit offen.)* |
| **T11** | Thesis „Beratung im KI-Zeitalter" | Objection-Reframe auf den Tagessatz-Einwand; Win+Work-Klammer; gesourcte Evidenz (BDU/Productive). Frame co-gleichrangig mit Win. → [GTM §3A](../../latest/Consultry-GTM-Decisions-v1.0.md). |
| **T12** | **Dual-PMF** | Hero 1: 5-Tage-Draft (§5). Hero 2: Seat-Utilization-Adoption (≥ 60 % Consultant-Seats wöchentlich aktiv + Work-Agent-Bestätigungs-Rate). **PMF-Primat (13.06.): Win ist das Survival-Signal (go/no-go), Work ist Retention-Verstärker** — verfehlt Win, wird pivotiert, unabhängig von Work. |
| **T13** | **Pricing-Reconciliation** | **€50/Seat = Pilot-Land-Preis** (filtert auf Kaufabsicht); **€69 Core + Tiers = post-PMF-Pricebook** (final aus T14-COGS). Die self-host-Ära-Tiers (€119 Dev/€150–189 Dedicated) werden gegen das Foundry-/GPT-5.6-Kostenmodell neu bewertet. Deck/GTM/§6 sagen ab jetzt einheitlich „€50 Pilot → €69+ Modell". |
| **T14** | **COGS-Basis** | **Foundry/GPT-5.6 per-token = bevorzugtes Kostenmodell**, mit `gpt-5.6-sol` als Quality-/Complexity-Lane und Terra/Luna nur nach Eval; Bedrock ist Alternative/Fallback-Vergleich (lineare variable Kosten, kein GPU-Break-even). **Self-hosted (H200/B200, Qwen via vLLM) = teure strategische Spätoption**, wenn Open-Weight weiter aufschließt → als Appendix/Crossover-Analyse. Der frühere „Pricing & Architecture Report v5" (self-host) ist **kein Kostenkanon mehr**, nur Self-Host-Referenz. |
| **T15** | **Dev-Seat gestrichen** | Das „Developer Seat / Coding-Agent"-Produkt (€119, parallele Coding-Agents) ist **ersatzlos gestrichen** — self-host-Ära-Idee, passt nicht zur Win+Work-These. Sein GPU-Lane-Anteil fliegt aus jedem Kostenmodell. |
| **T16** | **Deployment** | **Multi-Tenant-EU-SaaS für MVP** (T2 bleibt). **Appliance/BYOI-Sovereignty-Modell = H2** (lokale Connectors/PII-Gating/Inference — starker DACH-Moat, → Vision H2). **Action (offen):** mit Cybersecurity-Design-Partner #0 **jetzt validieren**, ob SaaS + AVV fürs Pilot akzeptiert wird, bevor es zum Überraschungs-Blocker wird. |

**Technical-Boundary (Kurzfassung):**
*Drin* — Multi-Tenant-EU-SaaS (Aurora PostgreSQL Serverless v2 + pgvector) · Korpus-Ingest + Span-Citations · risikobasierter Evidence-/Review-State + Faithfulness · **Hero 1** (Opportunity-to-Concept: Concept Suite + TED-Polling/semi-manuell + AwardCriterion + Vertrags-Klausel-Extraktion + anonyme TeamShape) · **Hero 2** (auto-ConsultantProfile via Upload/M365 + Work-Agent/Time-Capture + PersonalNote + ProjectStatus + Collaboration-Loop) · Approval-Card + AuditEvent · WC-Mode (OFF) · bevorzugter Foundry-/GPT-5.6-Pfad (`gpt-5.6-sol` für PMF-kritische komplexe Jobs) hinter provider-neutralem `ModelGateway`; Bedrock als unterstützte Alternative · bounded Hermes/Virtual Harness nach ADR-002 · PDF/MD-Export.
*Draußen* — Graph-DB · PII-Router · Drift-Monitor/Eval-CI · Versand/Outbound · Pricing-Engine · Contract/eIDAS · DATEV/ELSTER · personenscharfes Staffing · Net-New-Prospecting · CH · EN-UI · LinkedIn-Ingest · autonome Multi-Step-Agentik nach außen.

---

## 4. Painkiller-vs-Demo-Auflösung

- **Demo-Einstieg ist partnerabhängig:** public-sector-nahe/tender-lastige Firmen (z. B. die eigene Cybersecurity-Beratung = Design-Partner #0) → **Tender-led Showcase** (zero-corpus, öffentliche Daten). Mid-small mit Folgegeschäft → **Bestandskunden-led** (1 Vertrag → Signal).
- **Gekauft wird in beiden Fällen dasselbe:** die **Concept & Proposal Suite**. Die zwei Intakes sind nur unterschiedliche Türen in denselben Painkiller.

---

## 5. PMF — Nordstern-Metrik & Kill-Kriterium

> **Messbasis:** Details stehen in der [MVP Measurement Spec](../../latest/Consultry-MVP-Measurement-Spec-v1.0.md). G9 ist fuer Hero 1 geschlossen; Work-Schwellen bleiben T12-Hypothesen bis zur Design-Partner-Kalibrierung.

**Dual-Hero-Aktivierung (revidiert 13.06., T12 — zwei Signale):**
- **Hero 1 „Win":** **≥ 1 real verwendeter, reviewfähiger Konzept-/Proposal-Abschnitt aus eigenem Korpus pro Design-Partner — innerhalb von 5 Business-Tagen.** Das schärfste Leading-Signal: sticht der Painkiller schnell?
- **Hero 2 „Work":** **≥ 60 % der Consultant-Seats wöchentlich aktiv** im Operating-Foundation-Layer (Profile/Time/Notes/Status) + messbare **Work-Agent-Bestätigungs-Rate** + Profile-Auto-Maintenance-Akzeptanz. Misst, ob die „neue Arbeitsweise" wirklich gelebt wird (Retention + Seat-Utilization-Fundament).

**PMF-Bestätigung (tiefer):** **Sean-Ellis ≥ 40 %** der aktiven Pilot-Nutzer „sehr enttäuscht" ohne Consultry.

**Sekundär:** Pilot → Paid-Konversion ≥ 2 von 3–5; Time-to-first-Wow < 15 Min; Edit-Distanz am Konzept-Entwurf sinkend über Zeit.

> **Warum zwei Bars (Seat-Paradox-Auflösung):** Das Seat-Modell (€50 × Headcount) hält nur, wenn Consultants *aktive* Seats sind — Hero 2 misst genau das. Die Wachstums-Story (AI-native Beratungen gewinnen mehr → stellen ein) ist die Antwort auf „AI ersetzt Berater → weniger Seats": Consultry verkauft **Wachstum, nicht Schrumpfung**. Value-Tier-Pricing bleibt der Post-PMF-Hebel (§6).

**Kill / Pivot-Signal:** Wenn nach der ersten Kohorte (a) < 40 % „sehr enttäuscht" **und** (b) Partner den Konzept-Entwurf regelmäßig **neu schreiben statt editieren** → der Painkiller sticht nicht; Wedge oder Grounding-Tiefe überdenken, **bevor** Module ausgebaut werden.

---

## 6. Business-Spec (bestätigt 30.05.)

**Seat-Preis: €50 / Seat / Monat = Pilot-Land-Preis** (je Consultant + Sales; 2 Backoffice frei). **Post-PMF-Pricebook: €69 Core + Tiers** (T13) — final aus dem Foundry-/GPT-5.6-COGS-Modell (T14) abzuleiten, **nicht** aus den self-host-Ära-Zahlen (€119 Dev gestrichen, T15).

| Firmengröße | Paid Seats | **ACV** |
|---|---|---|
| 30 Köpfe | ~25 | **~€15k/Jahr** |
| 50 Köpfe | ~45 | **~€27k/Jahr** |
| 80 Köpfe | ~75 | **~€45k/Jahr** |

**Ökonomie-Verdikt:** Bei warm-intro/founder-led Sales (geringer Cash-CAC) trägt €15–45k ACV die high-touch-Motion. Da Seats mit Headcount skalieren, liegt **NRR strukturell > 100 %**.

**Zwei load-bearing Punkte (Round 6):**
1. **Seat-Utilization ist die ganze Wette.** €27k existiert nur, wenn ~45 Leute *aktive* Seats sind. Kollabiert die Nutzung auf 3–5 Partner/Sales → ACV ~€1,8–3k → Motion unter Wasser. → **Die Concept Suite muss für den *Consultant als Autor* gebaut sein** (er schreibt das Lösungs-/Arbeitskonzept + nutzt Reuse), nicht nur für den Partner als Käufer.
2. **€50 ist bewusst value-unterpreist** (ein gewonnener Tender = €100k+). Gut zum *Landen* mid-small und gegen die Preis-Einwand-Mauer — aber **nach PMF Value-Tier / Preiserhöhung einplanen**, nicht €50 als ewige Decke.

**Pilot-Fee:** niedrig (konkreter Betrag noch zu setzen) · **Vertrag:** jährlich (Pilot monatlich) · **Sales-Cycle:** warm-path-getrieben, Wochen.

**Compliance-Modell (bestätigt 30.05.):** Enterprise-API-Deal mit **AVV/DPA, No-Training-on-Data, EU/EEA bzw. SCCs** → Tenant-Daten dürfen DSGVO-konform zur Modell-Verarbeitung. **Verkaufssatz:** *„DSGVO-konform, AVV, kein Training auf euren Daten."* Löst die *Datenverarbeitungs*-Frage — **nicht** die externe Research-Scope-/Freshness-/Faithfulness-Frage (offen: A/B unten).

---

## 7. Design-Partner-Kohorte 1

| # | Wer | Rolle | Wedge-Einstieg |
|---|---|---|---|
| **#0** | eigene Cybersecurity-Beratung | Dogfood + Showcase | Tender-led |
| **#1** | KRALLMANN AG (Warm Target; Direktkontakt, Discovery noch nicht terminiert) | erster Midmarket-Beweis | nach Discovery |
| **#2** | MHP (Warm Target; Direktkontakt, Discovery noch nicht terminiert) | Enterprise-Lighthouse-Validierung außerhalb des Erst-ICP | nach Discovery |
| **#3** | zweiter mid-to-small Beratungspartner (noch zu identifizieren) | ICP-Marktvalidierung | **Bestandskunden-led** (Anti-Dogfood-Guardrail, G7) |

---

## 8. Offene Punkte

| # | Punkt | Status |
|---|---|---|
| G6 | Zwei direkte Zielkundenkontakte in Discovery/LOI überführen | **KRALLMANN AG + MHP identifiziert; noch keine Termine oder LOIs.** MHP ist Enterprise-Lighthouse, daher bleibt ein zweiter mid-to-small ICP-Partner offen. |
| G7 | ≥ 1 Bestandskunden-led Partner als Dogfood-Guardrail | offen |
| G8 | ACV/Sales-Cycle | ✅ **€50/Seat/Mo, ACV €15–45k** (§6); Pilot-Fee-Betrag noch zu setzen |
| G9 | PMF-Aktivierung | ✅ **1 reviewfähiger Opportunity-to-Concept Proof Slice aus eigenem Korpus in 5 Business-Tagen** (§5 + [Measurement Spec](../../latest/Consultry-MVP-Measurement-Spec-v1.0.md)) |
| — | Concept & Proposal Suite: eigenes Feature-Spec (Lösungs-/Arbeitskonzept-Struktur, Vorlagen, **Grounding-Split §1.3**, **Zuschlagskriterien-Optimierung §1.3**, **Eval-Harness für Grounding @ Long-Form**) | zu schärfen — **nach Business-Domain-Definition** ✅ ([Domain-Def](../../latest/Consultry-Business-Domain-Definition-v1.0.md) fertig) → Concept-Suite-Spec als nächstes |
| G6 | Design-Partner-Kohorte | ✅ **Kohorte = 1 starker Warm-Path-Partner (+ #0 eigene Firma) für jetzt.** Stage-0: Usefulness tief validieren, dann skalieren. → PMF-Metrik bei n=1 = „nützlich + zahlungsbereit + 5-Tage-Draft", nicht Markt-Validierung. |
| G7 | Dogfood-Guardrail | später (greift erst bei Kohorten-Erweiterung) |
| G10 | Eval/Quality | ✅ **frontier-getrieben für Prosa/Struktur; lightweight Harness = Partner-Edit-Distanz + Review-Recall für materielle Claims + Faithfulness-Stichprobe** (§1.3). Kein schweres ML-Eval-Suite und kein globaler Citation-Hard-Pass. |
| G11 | Builder-Bandbreite | ✅ **geschlossen 13.06. (T9):** Experten vorhanden; Hiring nach Idee-Bestätigung (Dogfood #0 + erster Design-Partner). Pre-Validation: Hero-1-Spine + Showcase-Demo + Substrat-Kern; Team-Skalierung nach validierter Thesis. |

---

*Ende v1.0 — Entwurf. Diese Datei ist der Scope-Zaun. Erweiterungen gehören in die Product Vision / H2-H3-Dokumente, nicht in den MVP-Scope.*
