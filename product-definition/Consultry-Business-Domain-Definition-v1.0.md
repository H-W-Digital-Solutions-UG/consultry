# Consultry — Business Domain Definition v1.0

**Status:** Entwurf zur Bestätigung
**Rolle im Doc-Stack:** **Fundament** unter [MVP-PRD](./Consultry-MVP-PRD-v1.0.md) (Tier 3). Definiert die *Sprache und Struktur*, auf der die Concept-Suite-Spec und der Build sitzen.
**Datum:** 30. Mai 2026
**Bezug:** [Product Vision](./Consultry-Product-Vision-v1.0.md), [PRD v4.0](./Consultry-PRD-v4.0-DACH-Operating-System.md), [MVP-PRD](./Consultry-MVP-PRD-v1.0.md), [Phase-1 MVP Specs §1.2](./Consultry-Phase-1-MVP-Specs-and-Flow-Canvas-v1.0.md), [GTM-Decisions](./Consultry-GTM-Decisions-v1.0.md)

> **Zweck.** Bevor die hero-kritische Concept Suite gebaut wird, braucht es eine **eindeutige Domänensprache** und klare **Bounded Contexts** — damit „Opportunity", „Konzept", „Grounding", „Profil" überall dasselbe bedeuten und die schwierigen Regeln (v. a. der Grounding-Split) **als Domäne-Invarianten** und nicht als UI-Detail leben. **MVP-Kern fett**, spätere Horizonte als *(H2/H3)* markiert.

---

## 1. Domänen-Nordstern

> Consultrys Domäne ist **die Akquise- und Bid-Produktion einer Beratung** — von einem Akquise-Anlass (Tender oder Bestandskunden-Signal) über eine begründete Chance bis zu einem **gegroundeten, submission-tauglichen Konzept-/Angebots-Entwurf**, mit anonymer Team-Shape und durchgängiger Freigabe-/Audit-Spur.

**Nicht** in der Domäne (MVP): Delivery-Execution, Time/Invoice, Buchhaltung, Versand/Vergabe-Submission, personenscharfes Resourcing.

---

## 2. Ubiquitäre Sprache (Glossar — verbindlich)

> Eine Definition pro Begriff. Code, Specs, UI und Sales benutzen **genau diese** Begriffe.

| Begriff | Definition | Nicht zu verwechseln mit |
|---|---|---|
| **Tenant** | Eine Beratungsfirma; harte Isolationsgrenze. Alles gehört genau einem Tenant. | — |
| **Account** | Bestandskunde eines Tenants. | Stakeholder (Person) |
| **Stakeholder** | Person/Rolle bei einem Account; Knoten im Warm-Path. | Consultant (eigener Mitarbeiter) |
| **Signal** | Roh-Hinweis, der eine Chance nahelegt (z. B. Vertrags-Optionsfenster, eingehender Tender). | Opportunity (qualifiziert) |
| **Tender** | Öffentliche Ausschreibung: Quelle, CPV, Fristen, Lose, **Eignungs-** und **Zuschlagskriterien**, Dokumentenanforderungen. | Signal (allgemeiner) |
| **Opportunity** | **Qualifizierte** Chance mit Begründung, Quellen, Status — der zentrale Demand-Knoten. Tender *und* Bestandskunden-Signal münden hier. | Signal/Tender (Vor-Stufen) |
| **Konzept** (Lösungs-/Arbeitskonzept) | Das fachliche Herzstück eines Bids: methodische Lösungsdarstellung, an Zuschlagskriterien ausgerichtet. **Hero-Artefakt.** | Proposal (kommerzieller Rahmen) |
| **ProposalDraft** | Interner, versionierter Angebots-Entwurf an eine Opportunity gebunden — umfasst Konzept + Angebotstext. **Kein Versand.** | versendetes Angebot (H2) |
| **KnowledgeAsset** | Wiederverwendbarer, quellengebundener Baustein (Referenz, Methode, Runbook, Blueprint). | Roh-Dokument (un-verdichtet) |
| **AISkill / Blueprint** | Versionierte, wiederverwendbare AI-Arbeitsfähigkeit (Prompt + Kontext + Owner). | Ad-hoc-Prompt |
| **ConsultantProfile** | Personenbezogene Stammdaten: Skills/Zertifikate/Erfahrung/Availability. **Im MVP deskriptiv pflegbar, aber in Bid/TeamShape/Forecast nur aggregiert verwendet** (GI-12/13). | personenscharfes Matching/Scoring (H2+Gate) |
| **PersonalLogEntry** | Privates, opt-in Arbeitslog des Consultants (Retention-Driver). Management hat keinen Zugriff (GI-7/8). | ProjectStatus (Management-sichtbar) |
| **ProjectStatus** | Deliverable-zentrierter Projektfortschritt (RAG/Milestones/Fristen). **Nie personen-attribuiert** (GI-10). | PersonalLogEntry; Leistungskontrolle |
| **TeamShape** | **Anonyme** Soll-Zusammensetzung: Anzahl, Skill-/Profil-Typen, Seniority-Mix, Rollen — **keine Personen.** | TeamProposal/named team (H2) |
| **Forecast** | Aggregierte Kapazitäts-/Auslastungssicht (Team/Practice). | personenscharfer Forecast (H2) |
| **Firm-Fact** | Eine **überprüfbare Tatsache über den Tenant** (Zertifikat, Referenz, Kapazität, Track-Record). **Muss tenant-korpus-gegroundet sein.** | External-Fact, Model-Expertise |
| **External-Fact** | Eine **überprüfbare Tatsache aus einer öffentlichen externen Quelle** (Norm/Standard, Regulatorik, Marktdaten, öffentliche Referenz, Research). **Muss auf eine `ExternalSource` zitiert sein.** | Firm-Fact (tenant-eigen), Model-Expertise (unbelegt) |
| **Model-Expertise** | Methodik/Domänen-Framing/Best-Practice-Formulierung aus Modellwissen — **kein Faktum**, darf unzitiert sein, aber als solche gekennzeichnet. | Firm-Fact, External-Fact (beide faktisch + zitierpflichtig) |
| **ExternalSource** | Zitierbare externe Quelle (URL/Dokument/Norm) mit **Freshness-Stempel** und Abruf-Zeitpunkt. | KnowledgeAsset (tenant-intern) |
| **SourcePolicy** | Pro-Tenant White-/Blacklist zulässiger externer Quellen + Freshness-Regeln. | — |
| **Citation / Grounding** | Bindung einer **faktischen** Aussage an eine konkrete Quelle (Firm → KnowledgeAsset/Klausel; External → ExternalSource). | unbelegte Behauptung |
| **Recommendation** | AI-Vorschlag mit Explanation + Sources + Confidence + Status. Nie autonom verbindlich. | Datensatz |
| **ApprovalEvent** | Menschliche Freigabe/Ablehnung/Edit mit Wer/Wann/Warum. | — |
| **AuditRecord** | Unveränderliche Spur über alle Domänen-Ereignisse. | — |

---

## 3. Bounded Contexts

> Sechs Kontexte. **Fett = MVP-kritisch.** Jeder Kontext besitzt seine Aggregate exklusiv; Verkehr zwischen Kontexten läuft über IDs/Events, nicht über geteilte Tabellen.

```
┌─────────────────────────────────────────────────────────────────────┐
│  TENANT & IDENTITY  (Querschnitt — Isolation, Rollen, Seats)         │
└─────────────────────────────────────────────────────────────────────┘
 ┌──────────────────┐   ┌──────────────────┐
 │  ACQUISITION      │   │  TENDER          │    ← zwei Intakes
 │  (Account/Signal/ │   │  (Tender/        │
 │   Warm-Path/Opp)  │   │   Eignung/Zuschl)│
 └────────┬─────────┘   └────────┬─────────┘
          └──────────┬───────────┘
                     ▼  Opportunity (geteilter Demand-Knoten)
        ┌────────────────────────────────────────────┐
        │  BID PRODUCTION  ★HERO★                     │
        │  (Konzept · ProposalDraft · Grounding)      │
        └───────┬──────────────────────┬─────────────┘
        ┌───────▼────────┐    ┌─────────▼──────────┐
        │  KNOWLEDGE      │    │  CAPABILITY        │
        │  (Asset/Skill/  │    │  (ConsultantProfile│
        │   Grounding-Eng)│    │   /TeamShape/Forec)│
        └────────────────┘    └────────────────────┘
 ┌──────────────────────┐   ┌──────────────────────────┐
 │ PERSONAL WORK-CONTEXT│ ✗ │  PROJECT OBSERVABILITY    │   ✗ = harte
 │ (PersonalLogEntry,   │───│  (ProjectStatus, RAG,     │   Firewall
 │  privat, opt-in)     │   │   deliverable-only)       │   GI-7/8/10/11
 └──────────────────────┘   └──────────────────────────┘
┌─────────────────────────────────────────────────────────────────────┐
│  GOVERNANCE  (Querschnitt — Recommendation/Approval/Audit/Grounding) │
└─────────────────────────────────────────────────────────────────────┘
```

### 3.1 **Acquisition Context** (MVP)
- **Aggregate:** `Account` (Root) → `Stakeholder`, `WarmPath`; `Signal`; `Opportunity` (Root).
- **Verantwortung:** Bestandskunden-Signale (MVP-Hero-Signal: **Vertrags-Optionsfenster**, klausel-gegroundet) → qualifizierte Opportunity.
- **Invariante:** Eine Opportunity trägt immer Begründung + Quellen, bevor sie „aktiv" wird.

### 3.2 **Tender Context** (MVP, dünn)
- **Aggregate:** `Tender` (Root) mit `EligibilityCriterion[]`, `AwardCriterion[]` (Zuschlagskriterien), `RequiredDoc[]`, `Lot[]`.
- **Verantwortung:** Tender einlesen (MVP semi-manuell), strukturieren, Bid/No-Bid-Eignungs-Check; erzeugt eine `Opportunity`.
- **Schlüssel für den Hero:** die **`AwardCriterion[]` (Bewertungsmatrix)** verlassen diesen Kontext und steuern die Konzept-Gewichtung in Bid Production.

### 3.3 **Bid Production Context** ★ HERO (MVP) ★
- **Aggregate:** `ProposalDraft` (Root) → `Konzept` (Sektionen), `DraftSection[]`, `CitationLink[]`.
- **Verantwortung:** Aus Opportunity + Korpus + TeamShape + **AwardCriteria** einen gegroundeten, an der Bewertungsmatrix ausgerichteten Konzept-/Angebots-Entwurf erzeugen — **consultant-as-author**, editierbar, versioniert.
- **Domäne-Invarianten (kritisch):**
  - **GI-1 Provenance-Modell (drei-wertig):** jeder `DraftSection`-Satz trägt genau eine **Provenance-Klasse**:
    | Klasse | Quelle | Zitierpflicht |
    |---|---|---|
    | **Firm-Fact** | nur Tenant-Korpus (`KnowledgeAsset`/Klausel) | **CitationLink Pflicht → sonst blockiert** |
    | **External-Fact** | öffentliche `ExternalSource` (Norm, Regulatorik, Research) | **CitationLink Pflicht → sonst blockiert** |
    | **Model-Expertise** | Modellwissen (Methodik/Formulierung, **kein Faktum**) | keine Citation, aber **als Model-Expertise markiert** |
    > **Kern-Regel:** **Jede faktische Aussage (Firm *oder* External) ist zitierpflichtig.** Ein Faktum ohne Citation wird blockiert, egal welcher Herkunft. Model-Expertise darf nie als Faktum *getarnt* erscheinen. Modell-Qualität ändert das nicht — es ist eine legale Regel.
    > **GI-1a Fail-Safe (default-to-fact):** ist der Klassifikator unsicher (Faktum vs. Expertise), wird **als Faktum behandelt** → Citation verlangt. Annoying-but-safe.
    > **GI-1b Human-Backstop (entscheidend):** ein LLM-Klassifikator kann Grounding **nicht zu 100 % garantieren.** Die eigentliche rechtliche Sicherungsschicht ist die **menschliche Freigabe durch den verantwortlichen Consultant-Autor**, der jede faktische Aussage vor Verwendung prüft und freigibt (ApprovalEvent + AuditRecord). **Die AI assistiert und kennzeichnet; der benannte Mensch verantwortet.** Die Maschine ist nicht die Safety-Layer.
  - **GI-2 Award-Alignment:** jede Konzept-Sektion ist einem `AwardCriterion` zuordenbar (Fit-to-Score), wo ein Tender vorliegt.
  - **GI-3 Kein Versand:** Output ist immer internes Artefakt.
  - **GI-4 Firm vor External:** widersprechen sich ein Firm-Fact und ein External-Fact, **gewinnt der Firm-Fact** (die Aussage über die Firma kommt von der Firma). External darf Firm-Facts *kontextualisieren*, nie *überschreiben*.

### 3.4 **Knowledge Context** (MVP-Engine, nicht separat verkauft)
- **Aggregate:** `KnowledgeAsset` (Root, tenant-intern), `ExternalSource` (Root, öffentlich/research), `AISkill`, `SourcePolicy` (White-/Blacklist + Freshness-Regeln).
- **Verantwortung:** Korpus-Ingest + **externes Grounding** (Normen/Regulatorik/Research mit Freshness), Verdichtung mit Quelle, Retrieval — **liefert beide Grounding-Quellen** (Firm + External) für Bid Production. MVP: nur so tief wie das Konzept-Grounding braucht.
- **Invarianten:**
  - `ExternalSource` ist **zitierbar + tenant-isoliert in der Verwendung**; externe Inhalte werden nie als Tenant-Firm-Fact gespeichert (GI-4).
  - **GI-5 Egress-Sanitization:** eine externe Research-Query darf **niemals PII oder sensible Kundendaten** enthalten (Scrubber auf dem Egress-Pfad, Pflicht).
  - **GI-6 Source-Policy:** Domains/Quellen sind über `SourcePolicy` **white-/blacklist-bar** (pro Tenant konfigurierbar, mit sinnvollen Defaults — z. B. BSI/ISO/EU-DACH-Regulatorik whitelisted). Geblacklistete Quellen werden nie zitiert.

### 3.5 **Capability Context** (MVP — Profile jetzt drin, mit harter Use-Trennung)
- **Aggregate:** `ConsultantProfile` (Root — **personenbezogen: Skills, Zertifikate, Projekterfahrung, Availability**, PRD §4.1), `TeamShape`, `Forecast`.
- **Verantwortung:** Beraterprofile strukturieren (Stammdaten) **+** anonyme TeamShape/aggregierte Deliverability als Bid-Gate (F5) und Realismus-Check (Konzept).
- **Invarianten (kritisch — die Profile-Falle):**
  - **GI-12 Stammdaten erlaubt, Bewertung nicht:** `ConsultantProfile` darf **deskriptiv** sein (welche Skills/Zertifikate existieren). **Kein** Ranking, Scoring, Burnout-/Performance-/Persönlichkeits-Bewertung (PRD §4.1 „darf nicht per Default").
  - **GI-12a Auto-Maintenance:** Profile werden von **Background-Agents aus verknüpften Quellen** automatisch aktualisiert (neues Zertifikat, Projekt-/Produkterfahrung); der Consultant **bestätigt/verfeinert** die Änderungen (Human-in-the-loop). Löst den „leeren Skill-DB"-Cold-Start.
  - **GI-13 Aggregiert nach außen:** in **Bid Production / TeamShape / Forecast** fließen Profile **nur aggregiert/anonym** ein (Pool-Statistik) — personenscharfes Matching „Person Y auf Rolle Z" bleibt **H2 + Gate**.
  - **GI-14 Consent/Mitbestimmung:** personenbezogene Profildaten unterliegen Works-Council-Mode + Zweckbindung (BDSG §26).

### 3.6 **Governance Context** (MVP, Querschnitt)
- **Aggregate:** `Recommendation`, `ApprovalEvent`, `AuditRecord`.
- **Verantwortung:** der Vier-Takt *Recommendation → Explanation → Approval → Audit* über **alle** Kontexte; setzt die Grounding-Garantie technisch durch.

### 3.7 Tenant & Identity (MVP, Querschnitt)
- Tenant-Isolation, Rollen (BD/Account Lead, Practice Lead, Consultant-Autor, Managing Partner), **Seat-Modell** (je Consultant+Sales kostenpflichtig, 2 Backoffice frei).

### 3.8 **Personal Work-Context** (MVP — Retention-Daily-Driver, opt-in)
- **Aggregate:** `PersonalLogEntry` (Root, **eigentümer = der Consultant**).
- **Verantwortung:** privates, **opt-in** Arbeitslog/Notiz-Assistent für den Consultant selbst (Tages-Fortschritt, Gedanken, Draft-Schnipsel) → gibt einen **täglichen Login-Grund ohne Überwachung**.
- **Invarianten (kritisch — Mitbestimmungs-Firewall):**
  - **GI-7 Privacy-by-Default:** `PersonalLogEntry` ist **privat zum Consultant**; Management hat **keinen** Lesezugriff.
  - **GI-8 No-Auto-Surface:** ein Log-Eintrag erscheint **nie** automatisch in Project Observability (3.9). Übergabe nur durch **explizite, item-weise Publish-Aktion des Consultants**. Kein Fluss Self-Log → Management ohne diesen bewussten Schritt.
  - **GI-9 Kein Leistungs-Inferenz:** das System leitet aus `PersonalLogEntry` **keine** Personen-Leistungs-/Verhaltensbewertung ab.
  - **GI-9a Auto-Feed gegen Doku-Fatigue:** der Self-Log wird **automatisch** aus der In-Tool-Arbeit des Consultants befüllt (Projects, Knowledge, Spec/Concept Suite) — kein manuelles Abtippen. Das ist der Unterschied zu (gescheiterten) manuellen Journaling-/Standup-Tools.

### 3.9 **Project Observability** (MVP — bewusst dünn, deliverable-zentriert)
- **Aggregate:** `ProjectStatus` (Root) → `Milestone[]`, `RAGState`, `Deadline[]`.
- **Verantwortung:** Management-Sicht auf **Projekt-/Deliverable-Fortschritt** (RAG, Milestones, Fristen) — speist optional das Bestandskunden-Renewal-/Deliverability-Signal (Wedge-Anbindung).
- **Invarianten (kritisch):**
  - **GI-10 Deliverable-zentriert, NIE personen-attribuiert:** Status hängt an **Projekt/Deliverable**, nicht an Personen. **Kein Drill-down „Projekt gelb *wegen Person Y*".** Personen-Attribution = BetrVG §87 → verboten im MVP.
  - **GI-11 Quelle ≠ Self-Logs:** `ProjectStatus` wird **nicht** aus `PersonalLogEntry` abgeleitet (GI-8); Quelle ist explizit gepflegter Projekt-Status.
  - **GI-15 Scope-Disziplin:** MVP = **Substrat-Level** Projektstatus (RAG/Milestones/Fristen) als Record-Layer-Basisplattform — **kein** tiefes Delivery-Analytics/Auslastungs-Reporting (H2). Der **Renewal-Signal kommt aus Vertragsdaten (F1/Acquisition), nicht aus RAG-Status** — Observability rechtfertigt sich als Substrat, nicht als Wedge-Zubringer.
  - **GI-16 Works-Council-Gate für Personenbezug:** jedes personenbezogene Feature (ConsultantProfile-Details, PersonalLogEntry, jede künftige personenscharfe Sicht) ist technisch **nur unter konfiguriertem Works-Council-Mode bzw. „kein-BR"-Attestierung** aktivierbar (siehe Invariante §5.9).

---

## 4. Der Kern-Lebenszyklus (Domain-Flow)

```
Signal│Tender ─▶ Opportunity ─▶ [TeamShape + Forecast] ─▶ Konzept/ProposalDraft
  (Acq │ Tender)  (qualifiziert)   (Capability)            (Bid Production, HERO)
                                                                    │
        jede AI-Aktion: Recommendation→Explanation→Approval→Audit (Governance)
        jeder Firm-Fact-Satz: CitationLink-Pflicht (GI-1)
```

---

## 5. Domänenweite Invarianten (gelten überall)

1. **Tenant-Isolation absolut.** Kein Cross-Tenant-Zugriff ohne explizites Gate.
2. **Recommendation ≠ Datensatz.** Nichts wird ohne ApprovalEvent verbindlich.
3. **Provenance-Modell (GI-1, drei-wertig):** Firm-Fact → tenant-korpus-only (citation Pflicht); External-Fact → ExternalSource (citation Pflicht); Model-Expertise → Modell erlaubt, aber markiert, nie als Faktum getarnt. **Jedes Faktum ist zitierpflichtig.** Bei Konflikt **Firm vor External** (GI-4). **Modell-Qualität ändert das nicht** — es ist eine legale, keine Qualitäts-Regel.
4. **Aggregiert/anonym vor personenscharf.** Personenbezug nur via Gate (H2).
5. **Alles auditierbar.** Jedes Domänen-Ereignis erzeugt einen AuditRecord.
6. **Model-Processing-Compliance (bestätigt 30.05.):** LLM-Nutzung läuft über einen **Enterprise-API-Deal mit AVV/DPA (Art. 28 DSGVO), No-Training-on-Data und EU/EEA-Processing bzw. SCCs.** Tenant-Daten dürfen zur Verarbeitung an das Modell — die Compliance-Grenze liegt im Vertrag, nicht im Verbot. **Wichtig: das löst *Datenverarbeitung*, nicht *externes Research-Grounding* (Scope/Freshness/Faithfulness — siehe GI-1, GI-5/6).**
7. **External-Research-Firewall (GI-5/6, bestätigt 30.05.):** externe Research-Queries werden PII-/kundendaten-bereinigt (GI-5); zulässige Quellen via White-/Blacklist (`SourcePolicy`, GI-6). Web-Research ist erlaubt, aber sanitisiert und policy-gefiltert.
8. **Human-Backstop (GI-1b):** kein LLM garantiert Grounding zu 100 %. Die rechtliche Sicherungsschicht ist die **menschliche Freigabe** des verantwortlichen Consultant-Autors, nicht die AI.
9. **⚠️ §87-Realität (korrigiert 30.05. — NICHT darauf bauen, dass es anders wäre):**
   - **§87 Abs. 1 Nr. 6 BetrVG greift bei *objektiver Eignung zur Überwachung* — der bloßen *Fähigkeit* des Systems, Verhalten/Leistung personenbezogen zu erfassen — unabhängig von Absicht.** Personenbezogene Profile/Logs/Status sind objektiv überwachungsgeeignet.
   - **Manuelle Einzel-Zustimmung des Consultants hebt §87 NICHT auf.** §87 ist ein **kollektives** Recht des Betriebsrats; ein einzelner Beschäftigter kann es **nicht** verzichten. Manuelle Akzeptanz hilft DSGVO/BDSG §26 (Transparenz/Zweckbindung) + Vertrauen, ist aber **kein §87-Ausweg.**
   - **Lawful path:** (a) viele ICP-Firmen (30–60 P.) haben **keinen Betriebsrat** → §87 greift dort nicht (ehrliche Near-Term-Deckung); (b) wo ein BR existiert → **Betriebsvereinbarung**, technisch abgebildet über **Works-Council-Mode**: personenbezogene Features sind **nur unter konfiguriertem Works-Council-Mode/BV aktivierbar.** Manuelle Akzeptanz + Transparenz sind *unterstützende Evidenz innerhalb* dieses Rahmens, nicht der Rahmen selbst.

---

## 6. Was diese Definition für den Build entscheidet

- **`Opportunity` ist der gemeinsame Demand-Knoten** — Acquisition und Tender konvergieren dort; Bid Production hängt nur an Opportunity, nicht an der Intake-Quelle. → ein Konzept-Pfad, zwei Türen.
- **`AwardCriterion` ist ein First-Class-Domänenobjekt**, kein Tender-Detail — weil es die Konzept-Qualität (= Fit-to-Score) steuert.
- **`CitationLink` + die drei-wertige Provenance-Klassifikation sind Domäne-Invarianten**, nicht UI — der Build muss sie auf Datenebene erzwingen, nicht im Frontend. Jedes Faktum (Firm *oder* External) ohne Citation wird blockiert.
- **`ExternalSource` ist ein eigenes Aggregat im Knowledge Context** mit Freshness — externes Research-Grounding ist erlaubt, aber zitierpflichtig und tenant-isoliert; es überschreibt nie Firm-Facts (GI-4).
- **Capability gibt nur `TeamShape`/`Forecast` aus** — `ConsultantProfile` bleibt intern/aggregiert; kein personenscharfes Aggregat verlässt den Kontext.

---

## 7. Offene Domänen-Punkte

| # | Punkt | Status |
|---|---|---|
| D1 | **Drei-wertiger** Provenance-Klassifikator (Firm-Fact / External-Fact / Model-Expertise) — regelbasiert, LLM-gestützt oder Autor-markiert? Härtester Fall: Faktum vs. „getarnte" Expertise zuverlässig trennen (entscheidet GI-1-Durchsetzung) | offen — kritisch für Concept Suite |
| D2 | `AwardCriterion`-Parsing bei semi-manuellem Tender-Intake — strukturiert genug für GI-2? | offen |
| D3 | Konzept-Sektionsmodell (DACH-Lösungs-/Arbeitskonzept-Standardstruktur) | → Concept-Suite-Spec |
| D4 | **External-Grounding-Scope:** ✅ **entschieden 30.05.** — Web-Research erlaubt, aber (GI-5) **PII-/kundendaten-bereinigte Queries** + (GI-6) **White-/Blacklist via `SourcePolicy`**. Default-Whitelist (BSI/ISO/EU-DACH-Regulatorik) noch zu kuratieren. | ✅ Prinzip entschieden; Default-Liste offen |
| D5 | **Freshness-Gate:** wer/was markiert eine `ExternalSource` als „zu alt zum Zitieren" und blockiert sie? (stale Norm = Ausschluss-Risiko) | offen |
| D6 | **Citation-Faithfulness:** dritter Eval-Check — stützt die zitierte ExternalSource den Satz wirklich? (Firm-Facts-Gate fängt das nicht) | offen |
| D7 | **Classifier-Fail-Safe:** ✅ **entschieden 30.05.** — (GI-1a) default-to-fact bei Unsicherheit + (GI-1b) **Human-Backstop**: AI garantiert Grounding nicht, der Consultant-Autor verantwortet per Freigabe. | ✅ entschieden |

---

*Ende v1.0 — Domänenfundament. Nächster Schritt: Concept & Proposal Suite Feature-Spec auf dieser Sprache aufsetzen (D1/D3 dort schärfen).*
