# Consultry — Business Domain Definition v1.0

**Status:** Active Domain Candidate; gegenüber Archetypen, Actor/Responsibility, Operating Loops und Whole-Product-Domain im Product Wayfinder zu reconciliieren
**Rolle im Doc-Stack:** Bewahrt die frühere dual-hero-aligned Sprache und Invarianten als fachlichen Input. Sie ist nicht alleinige Domain-Authority und darf die aktuelle Product-first-Definition nicht vorentscheiden.
**Datum:** 30. Mai 2026 · **dual-hero-Rework:** 13.06.2026
**Bezug:** [Product Vision](./Consultry-Product-Vision-v1.0.md), [Product Wayfinder](./wayfinder/consultry-product-platform-baseline/map.md), [historisches MVP-Doc](../archive/superseded-product-baseline-2026-08/Consultry-MVP-PRD-v1.0.md), [MVP-Technical-Foundation](./Consultry-MVP-Technical-Foundation-v1.0.md), [historische Phase-1 Specs](../archive/superseded-product-baseline-2026-08/Consultry-Phase-1-MVP-Specs-and-Flow-Canvas-v1.0.md), [GTM-Decisions](./Consultry-GTM-Decisions-v1.0.md).

> **Zweck.** Bevor die hero-kritische Concept Suite gebaut wird, braucht es eine **eindeutige Domänensprache** und klare **Bounded Contexts** — damit „Opportunity", „Konzept", „Grounding", „Profil" überall dasselbe bedeuten und die schwierigen Regeln (v. a. der Grounding-Split) **als Domäne-Invarianten** und nicht als UI-Detail leben. **MVP-Kern fett**, spätere Horizonte als *(H2/H3)* markiert.

---

## 1. Domänen-Nordstern (Dual-Hero)

> Consultrys Domäne ist **wie eine DACH-Beratung im KI-Zeitalter arbeitet** — an zwei gleichrangigen Fronten, die sich denselben Korpus, dieselbe Grounding-/Approval-/Audit-Engine und denselben Tenant teilen:
>
> - **Win-Domäne (Hero 1):** Akquise- und Bid-Produktion — von einem Akquise-Anlass (Tender oder Bestandskunden-Signal) über eine begründete `Opportunity` bis zu einem **reviewfähigen Konzept-/Angebots-Entwurf** mit sichtbarem Evidence-/Review-State, mit anonymer `TeamShape`.
> - **Work-Domäne (Hero 2):** die AI-native Operating Foundation — wie der Consultant **täglich arbeitet**: auto-gepflegtes `ConsultantProfile`, Work-Agent/`TimeEntry`-Capture, privater `PersonalNote`-Layer, deliverable-aggregierter `ProjectStatusSnapshot` — Human-AI-Collaboration als Arbeitsweise.

Verbindende Klammer-Thesis: *„Beratung im KI-Zeitalter"* — AI-native Arbeit hebt Qualität und senkt Zeit zugleich (siehe [Vision §1/§8](./Consultry-Product-Vision-v1.0.md)). Die Schmerzen, die jeder Kontext killt, sind in der [Feature-Pain-Map](../archive/superseded-product-baseline-2026-08/Consultry-Feature-Pain-Map-v1.0.md) (PW#/PK#) belegt.

**In der Domäne (MVP):** Bid-Produktion (intern, kein Versand) · **Time-*Capture*** (BAG-pflichtig) · deliverable-aggregierte Observability.
**Nicht** in der Domäne (MVP): Delivery-Execution, **Invoice/Billing/Buchhaltung**, Versand/Vergabe-Submission, personenscharfes Resourcing, personenbezogene Utilization-Auswertung (ohne WC-Mode). *(Time-Capture ist drin, Time-→-Invoice/Analytics nicht — feine, aber wichtige Grenze, siehe §3.8/§3.9.)*

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
| **KnowledgeAsset** | Wiederverwendbarer Baustein (Referenz, Methode, Runbook, Blueprint) mit nachvollziehbarem Herkunfts- und Review-Status, wo fachlich relevant. | Roh-Dokument (un-verdichtet) |
| **AISkill / Blueprint** | Versionierte, wiederverwendbare AI-Arbeitsfähigkeit (Prompt + Kontext + Owner). | Ad-hoc-Prompt |
| **ConsultantProfile** | Personenbezogene Stammdaten: Skills/Zertifikate/Erfahrung/Availability. **Im MVP deskriptiv pflegbar, aber in Bid/TeamShape/Forecast nur aggregiert verwendet** (GI-12/13). | personenscharfes Matching/Scoring (H2+Gate) |
| **TimeEntry** | Zeiterfassungs-Eintrag (Dauer, Projekt/Task, billable, Notiz). Geschäftsdatum, **BAG-pflichtig**. Capture erlaubt; personenbez. Auswertung WC-gated (GI-8). | PersonalNote (rein privat) |
| **PersonalNote** | **Strikt privater** Notiz-Layer des Consultants (Retention-Driver). Nie management-sichtbar, nie Analytics-Input (GI-7). | TimeEntry (Geschäftsdatum) |
| **WorkAgentSuggestion** | Vom Work-Agent vorgeschlagener TimeEntry/Tages-Summary aus In-Tool-Arbeit; wird erst nach Consultant-Bestätigung/Verfeinerung zum `TimeEntry` (GI-9a). Auto-Feed selbst ist WC-Mode-gated (GI-9b). | bestätigter TimeEntry |
| **ProjectStatusSnapshot** | Rebuildbare, deliverable-zentrierte Faktenprojektion für RAG/Milestones/Fristen/BudgetBurn aus autoritativen Projektquellen und **aggregierten TimeEntries**. **Nie personen-attribuiert** im Default (GI-10/16), keine eigene Schreibautorität. | `ProjectStatusAssessment`, überladener schreibbarer `ProjectStatus` |
| **ProjectStatusAssessment** | Bewusst abgegebene menschliche Projektbewertung mit Autor, Zeitpunkt, Gültigkeit, Rationale und Basis-Digest; getrennt von der berechneten Faktenprojektion. | `ProjectStatusSnapshot`, stilles Überschreiben berechneter Fakten |
| **TeamShape** | **Anonyme** Soll-Zusammensetzung: Anzahl, Skill-/Profil-Typen, Seniority-Mix, Rollen — **keine Personen.** | TeamProposal/named team (H2) |
| **Forecast** | Aggregierte Kapazitäts-/Auslastungssicht (Team/Practice). | personenscharfer Forecast (H2) |
| **Firm-Fact** | Eine **überprüfbare Aussage über den Tenant** (Zertifikat, Referenz, Kapazität, Track-Record). Bei materieller Außen- oder Entscheidungswirkung wird Tenant-Evidenz verknüpft oder ein Review-Bedarf ausgewiesen. | External-Fact, Model-Expertise |
| **External-Fact** | Eine **überprüfbare Aussage aus einer öffentlichen externen Quelle** (Norm/Standard, Regulatorik, Marktdaten, öffentliche Referenz, Research). Bei materieller Nutzung werden Quelle, Freshness und Review-Status sichtbar. | Firm-Fact (tenant-eigen), Model-Expertise |
| **Model-Expertise** | Methodik/Domänen-Framing/Best-Practice-Formulierung aus Modellwissen; darf unzitiert als Vorschlag oder fachliches Judgment erscheinen. | Firm-Fact, External-Fact |
| **ExternalSource** | Zitierbare externe Quelle (URL/Dokument/Norm) mit **Freshness-Stempel** und Abruf-Zeitpunkt. | KnowledgeAsset (tenant-intern) |
| **SourcePolicy** | Pro-Tenant White-/Blacklist zulässiger externer Quellen + Freshness-Regeln. | — |
| **Citation / Grounding** | Optionale, claim-nahe Bindung einer Aussage an eine konkrete Quelle (Firm → KnowledgeAsset/Klausel; External → ExternalSource), deren Erforderlichkeit die Risk-/Tenant-Policy bestimmt. | Review- oder Approval-Status |
| **Recommendation** | AI-Vorschlag mit Explanation + Sources + Confidence + Status. Nie autonom verbindlich. | Datensatz |
| **ApprovalEvent** | Menschliche Freigabe/Ablehnung/Edit mit Wer/Wann/Warum. | — |
| **AuditRecord** | Unveränderliche Spur über alle Domänen-Ereignisse. | — |

---

## 3. Bounded Contexts

> Acht Kontexte, gruppiert in **zwei Hero-Cluster + geteiltes Fundament.** **Fett = MVP-kritisch.** Jeder Kontext besitzt seine Aggregate exklusiv; Verkehr zwischen Kontexten läuft über IDs/Events, nicht über geteilte Tabellen.
>
> - **🟦 Win-Cluster (Hero 1):** Acquisition · Tender · **Bid Production**.
> - **🟩 Work-Cluster (Hero 2):** Capability · Personal Work-Context · Project Observability.
> - **⬛ Geteiltes Fundament:** Knowledge (Grounding-Engine) · Governance · Tenant & Identity.

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
 ┌──────────────────────┐       ┌──────────────────────────┐
 │ PERSONAL WORK-CONTEXT│       │  PROJECT OBSERVABILITY    │
 │ TimeEntry (Capture)  │──agg─▶│ StatusSnapshot/BudgetBurn │
 │ PersonalNote (✗priv.)│       │  (deliverable-aggregiert) │
 │ WorkAgent (Harvest)  │       │  Personenbezug = WC-gated │
 └──────────────────────┘       └──────────────────────────┘
   ✗ PersonalNote nie → Observability/Analytics (GI-7).  TimeEntry nur AGGREGIERT → Status (GI-11).
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
- **Verantwortung:** Aus Opportunity + Korpus + TeamShape + **AwardCriteria** einen reviewfähigen, an der Bewertungsmatrix ausgerichteten Konzept-/Angebots-Entwurf erzeugen — **consultant-as-author**, editierbar, versioniert.
- **Domäne-Invarianten (kritisch):**
  - **GI-1 Risikobasierte Provenienz:** `DraftSection`-Claims können als **Firm-Fact**, **External-Fact** oder **Model-Expertise** klassifiziert werden. Die Risk-/Tenant-Policy entscheidet, ob ein `CitationLink`, ein sichtbarer Review-Status oder keine besondere Evidenzanforderung gilt.
    | Klasse | Bevorzugte Evidenz | Verhalten ohne Quelle |
    |---|---|---|
    | **Firm-Fact** | Tenant-Korpus (`KnowledgeAsset`/Klausel) | bei materieller Wirkung als Review Issue; kein globaler Draft-/Persistenz-Block |
    | **External-Fact** | `ExternalSource` mit Freshness | bei materieller Nutzung als Review Issue; externe Freigabe kann policy-gated sein |
    | **Model-Expertise** | optional | als Vorschlag/Judgment zulässig |
    > **Kern-Regel:** Provenienz ist ein risikobasierter Review-Mechanismus, keine autoritative Satz-für-Satz-Zitierpflicht. Fehlende Evidenz muss sichtbar und entscheidbar sein; nur High-Risk Externalization oder Actions dürfen durch Tenant-Policy blockiert werden.
    > **GI-1a Unsicherheit:** Klassifikator-Unsicherheit erzeugt `reviewRequired`, nicht automatisch eine Fact-Klasse oder einen globalen Block.
    > **GI-1b Human-Backstop:** Der verantwortliche Consultant-Autor entscheidet über externe Verwendung und offene materielle Review Issues (ApprovalEvent + AuditRecord). Die AI unterstützt, die Verantwortung bleibt menschlich.
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

### 3.5 **Capability Context** 🟩 Work-Hero (MVP — Profile jetzt drin, mit harter Use-Trennung)
> *Doppelrolle: speist Win (aggregierte TeamShape fürs Bid-Gate) **und** ist selbst Work-Hero-Oberfläche (auto-gepflegtes Profil killt PK5/PK2).*
- **Aggregate:** `ConsultantProfile` (Root — **personenbezogen: Skills, Zertifikate, Projekterfahrung, Availability**, PRD §4.1), `TeamShape`, `Forecast`.
- **Verantwortung:** Beraterprofile strukturieren (Stammdaten) **+** anonyme TeamShape/aggregierte Deliverability als Bid-Gate (F5) und Realismus-Check (Konzept).
- **Invarianten (kritisch — die Profile-Falle):**
  - **GI-12 Stammdaten erlaubt, Bewertung nicht:** `ConsultantProfile` darf **deskriptiv** sein (welche Skills/Zertifikate existieren). **Kein** Ranking, Scoring, Burnout-/Performance-/Persönlichkeits-Bewertung (PRD §4.1 „darf nicht per Default").
  - **GI-12a Auto-Maintenance:** Profile werden von **Background-Agents aus verknüpften Quellen** automatisch aktualisiert (neues Zertifikat, Projekt-/Produkterfahrung); der Consultant **bestätigt/verfeinert** die Änderungen (Human-in-the-loop). Löst den „leeren Skill-DB"-Cold-Start.
  - **GI-13 Aggregiert nach außen:** in **Bid Production / TeamShape / Forecast** fließen Profile **nur aggregiert/anonym** ein (Pool-Statistik) — personenscharfes Matching „Person Y auf Rolle Z" bleibt **H2 + Gate**.
  - **GI-14 Consent/Mitbestimmung:** personenbezogene Profildaten unterliegen Works-Council-Mode + Zweckbindung (BDSG §26).

### 3.6 **Governance Context** (MVP, Querschnitt)
- **Aggregate:** `Recommendation`, `ApprovalEvent`, `AuditRecord`.
- **Verantwortung:** der Vier-Takt *Recommendation → Explanation → Approval → Audit* über **alle** Kontexte; setzt risikobasierte Evidence-/Review-Regeln technisch durch.

### 3.7 Tenant & Identity (MVP, Querschnitt)
- Tenant-Isolation, Rollen (BD/Account Lead, Practice Lead, Consultant-Autor, Managing Partner), **Seat-Modell** (je Consultant+Sales kostenpflichtig, 2 Backoffice frei).

### 3.8 **Personal Work-Context** 🟩 Work-Hero (MVP — Work-Agent, Harvest-orientiert)
> *Kern des Work-Hero: killt PK1 (Billable-Leakage 15–25 %), PK2 (Admin 20 %), liefert die tägliche Nutzung (Seat-Utilization-PMF).*
> **Vorbild Harvest/Toggl, AI-nativ neu gedacht:** der Consultant erfasst Zeit/Arbeit *mit minimalem Aufwand*, der **Work-Agent** schlägt Einträge aus der In-Tool-Aktivität vor. **Saubere Trennung: Capture (erlaubt, BAG-pflichtig) vs. personenbezogene Analytics (WC-Mode-gated).**
- **Aggregate:** `TimeEntry` (Root — Dauer, Projekt-/Task-Zuordnung, billable/non-billable, Notiz), `PersonalNote` (Root, **rein privat** — Gedanken/Draft-Schnipsel), `WorkAgentSuggestion`.
- **Verantwortung:**
  - **Time-Capture** (Harvest-Kern): leichte Zeiterfassung pro Projekt/Task. **Rechtsgrundlage: BAG 13.09.2022 → Arbeitszeiterfassung ist in DE Pflicht** → Capture ist legitim/gefordert, nicht Überwachungs-Kür.
  - **Work-Agent:** schlägt `TimeEntry`s + Tages-Zusammenfassung aus der In-Tool-Arbeit vor (Projects, Knowledge, Concept Suite) → killt Doku-Fatigue; der Consultant **bestätigt/korrigiert** (Human-in-the-loop).
  - **PersonalNote:** privater Notiz-Layer als Retention-Daily-Driver.
- **Invarianten (kritisch — Capture/Analytics-Firewall):**
  - **GI-7 Private Note ≠ Time Entry:** `PersonalNote` ist **strikt privat zum Consultant**, niemals management-sichtbar, nie Analytics-Input. `TimeEntry` ist Geschäftsdatum (abrechnungs-/projektrelevant).
  - **GI-8 Capture erlaubt, Analytics gated:** **Erfassung** von `TimeEntry` (auch agentengestützt) ist im MVP erlaubt. **Personenbezogene Auswertung** (Utilization/Burn/Vergleich pro Person) ist **§87-relevant → nur unter Works-Council-Mode** (GI-16). Aggregierte/anonyme Auswertung ist frei.
  - **GI-9 Kein Leistungs-Scoring:** kein Ranking/Burnout-/Performance-Scoring aus `TimeEntry`/`PersonalNote` — auch nicht unter WC-Mode (PRD §4.1 „darf nicht").
  - **GI-9a Self-Log = Auto-Feed + Time-Track + AI-Verfeinerung (Entscheidung 30.05.):** der Self-Log entsteht aus drei Quellen — (1) **Auto-Feed** aus der In-Tool-Arbeit, (2) **Time-Track**-Einträge, (3) **manuelle, AI-assistierte Verfeinerung** durch den Consultant. Agent-Vorschläge sind `WorkAgentSuggestion` bis zur Bestätigung/Verfeinerung — nichts wird ohne diesen Schritt zum `TimeEntry`.
  - **GI-9b Auto-Feed hinter WC-Mode (Entscheidung 30.05.):** der **automatische Aktivitäts-Auto-Feed** (Agent erfasst, *was* der Consultant in-tool getan hat) ist objektiv überwachungsgeeignet → **hinter Works-Council-Mode geschaltet** (GI-16), **Default-OFF-Posture**: da die meisten ICP-Firmen **keinen Betriebsrat** haben (Entscheidung #3), ist der Auto-Feed dort frei aktivierbar; bei BR greift der Schalter. Manuelle Erfassung + privater `PersonalNote`-Layer sind immer frei.

### 3.9 **Project Observability** 🟩 Work-Hero (MVP — deliverable-zentriert, aus Time-Entries)
> *Killt PK3 (Utilization-Lücke) + PK6 (Delivery→Wachstum-Loop) — aggregiert, nie personen-attribuiert.*
- **Autorität:** `Project` ist Owner der Projektfakten; `ProjectStatusSnapshot` ist eine rebuildbare Projection daraus. Eine bewusst abgegebene menschliche Statusbewertung ist eine separate `ProjectStatusAssessment` Aggregate Root.
- **Verantwortung:** Management-Sicht auf **Projekt-/Deliverable-Fortschritt** (RAG, Milestones, Fristen, Budget-Burn) — aus Deliverables, Milestones, Risks, freigegebenen Quellen und aggregierten `TimeEntry`s abgeleitet. Menschliche Einschätzungen werden daneben klar als Judgment dargestellt, nicht in berechnete Fakten hineingeschrieben.
- **Invarianten (kritisch):**
  - **GI-10 Deliverable-/Projekt-aggregiert, NIE personen-attribuiert:** Status & Burn hängen an **Projekt/Deliverable**, nicht an Personen. **Kein Drill-down „Projekt gelb *wegen Person Y*"** im Default-Modus. Personen-Drilldown = §87 → **nur unter Works-Council-Mode** (GI-16), nicht „verboten", sondern **konfigurierbar**.
  - **GI-11 Quelle = freigegebene Projektfakten und aggregierte Time-Entries, nicht PersonalNote:** `ProjectStatusSnapshot`/`BudgetBurn` werden aus autoritativen Projektquellen und **aggregierten `TimeEntry`s** abgeleitet; `PersonalNote` fließt **nie** ein (GI-7).
  - **GI-11a Fakten ≠ Judgment:** `ProjectStatusAssessment` ist eine verantwortete menschliche Bewertung mit Autor, Zeitpunkt, Rationale und Basis-Digest. Sie darf im Snapshot gekennzeichnet angezeigt werden, aber berechnete Fakten nicht still überschreiben; Korrektur oder Widerruf erfolgt über nachvollziehbare Nachfolgerecords.
  - **GI-15 Scope-Disziplin:** MVP = Projektstatus/Burn als Record-Layer-Substrat — **kein** tiefes Delivery-/Workforce-Analytics (H2). **Renewal-Signal kommt primär aus Vertragsdaten (F1)**; Burn/Status sind Substrat + sekundärer Deliverability-Input.
  - **GI-16 Works-Council-Gate für Personenbezug (konfigurierbar):** personenbezogene Auswertung (Utilization/Burn/Drilldown pro Person) ist technisch **hinter Works-Council-Mode** geschaltet — bei „kein-BR"-Attestierung frei, mit BR nur per Betriebsvereinbarung. **Risiko in DACH = blockierter Deal, nicht Lawsuit → WC-Mode ist ein verkaufbares Deal-Enabler-Feature, kein Verbot.** (siehe §5 Punkt 9)

---

## 4. Der Kern-Lebenszyklus (Domain-Flow)

```
Signal│Tender ─▶ Opportunity ─▶ [TeamShape + Forecast] ─▶ Konzept/ProposalDraft
  (Acq │ Tender)  (qualifiziert)   (Capability)            (Bid Production, HERO)
                                                                    │
        jede AI-Aktion: Recommendation→Explanation→Approval→Audit (Governance)
        materielle Claims: Evidence-/Review-State nach Risk-/Tenant-Policy (GI-1)
```

---

## 5. Domänenweite Invarianten (gelten überall)

1. **Tenant-Isolation absolut.** Kein Cross-Tenant-Zugriff ohne explizites Gate.
2. **Recommendation ≠ Datensatz.** Nichts wird ohne ApprovalEvent verbindlich.
3. **Risikobasierte Provenienz (GI-1):** Firm-Fact, External-Fact und Model-Expertise bleiben unterscheidbar. Für materielle Kunden-, Vertrags-, Capability-, Staffing-, Preis-, Rechts-/Regulatorik- oder Action-Claims verlangt die Policy Quelle oder sichtbaren Review-Status; interne Drafts bleiben editier- und speicherbar. Bei Konflikt **Firm vor External** (GI-4).
4. **Aggregiert/anonym vor personenscharf.** Personenbezug nur via Gate (H2).
5. **Alles auditierbar.** Jedes Domänen-Ereignis erzeugt einen AuditRecord.
6. **Model-Processing-Compliance (bestätigt 30.05.):** LLM-Nutzung läuft über einen **Enterprise-API-Deal mit AVV/DPA (Art. 28 DSGVO), No-Training-on-Data und EU/EEA-Processing bzw. SCCs.** Tenant-Daten dürfen zur Verarbeitung an das Modell — die Compliance-Grenze liegt im Vertrag, nicht im Verbot. **Wichtig: das löst *Datenverarbeitung*, nicht *externes Research-Grounding* (Scope/Freshness/Faithfulness — siehe GI-1, GI-5/6).**
7. **External-Research-Firewall (GI-5/6, bestätigt 30.05.):** externe Research-Queries werden PII-/kundendaten-bereinigt (GI-5); zulässige Quellen via White-/Blacklist (`SourcePolicy`, GI-6). Web-Research ist erlaubt, aber sanitisiert und policy-gefiltert.
8. **Human-Backstop (GI-1b):** Der verantwortliche Mensch prüft die externe Verwendung und akzeptiert oder löst materielle Review Issues; die AI darf keine Verbindlichkeit erzeugen.
9. **§87-Posture — bewusste Entscheidung (30.05.): „nicht optimieren, nur ein Schalter":**
   - **Strategische Wette (#3/#4):** der **Erst-ICP hat überwiegend keinen Betriebsrat** → §87 greift dort schlicht nicht. Wir bauen **keine** umfassende §87-Compliance-Maschinerie und optimieren nicht darauf — **move fast**.
   - **Die eine Versicherung, die bleibt:** **Works-Council-Mode** als einzelner Schalter, der personenbezogene Auswertung + Auto-Feed (GI-9b) gated. **Default-OFF.** Kosten gering, rettet aber die wenigen Deals mit BR (Risiko dort = *blockierter Deal*, kein Lawsuit — BR verweigert Unterschrift).
   - **Hilfs-Tatsachen (kein Aufwand nötig):** Zeiterfassung-Capture ist seit **BAG 13.09.2022 in DE Pflicht** → ohnehin legitim. Einzel-Consent hebt §87 zwar nicht auf (kollektives Recht), aber das ist uns bewusst und wir verlassen uns nicht darauf.
   - **Offene Akzeptanz des Restrisikos:** bei einem Kunden *mit* aktivem BR und *ohne* eingeschalteten WC-Mode besteht ein Einführungs-/Blockade-Risiko. **Bewusst akzeptiert** (Entscheidung #4), nicht wegdesignt.

---

## 6. Was diese Definition für den Build entscheidet

- **`Opportunity` ist der gemeinsame Demand-Knoten** — Acquisition und Tender konvergieren dort; Bid Production hängt nur an Opportunity, nicht an der Intake-Quelle. → ein Konzept-Pfad, zwei Türen.
- **`AwardCriterion` ist ein First-Class-Domänenobjekt**, kein Tender-Detail — weil es die Konzept-Qualität (= Fit-to-Score) steuert.
- **Provenance-/Evidence-State ist eine Domäne-Invariante**, nicht nur UI. `CitationLink` bleibt eine optionale, claim-nahe Evidenzverknüpfung; Datenebene und Policy Engine bestimmen Review-Bedarf und externe Gates nach Risiko, nicht pauschal nach Satztyp.
- **`ExternalSource` ist ein eigenes Aggregat im Knowledge Context** mit Freshness — externes Research-Grounding ist erlaubt und bei materieller Nutzung nach Risk-/Tenant-Policy nachweispflichtig; es überschreibt nie Firm-Facts (GI-4).
- **Capability gibt nur `TeamShape`/`Forecast` aus** — `ConsultantProfile` bleibt intern/aggregiert; kein personenscharfes Aggregat verlässt den Kontext.

---

## 7. Offene Domänen-Punkte

| # | Punkt | Status |
|---|---|---|
| D1 | Risikoklassifikation und Provenance-Hinweise (Firm-Fact / External-Fact / Model-Expertise) — regelbasiert, LLM-gestützt oder Autor-markiert? Ziel ist verlässliche Review-Priorisierung, kein Satz-für-Satz-Hard-Pass. | offen — kritisch für Concept Suite |
| D2 | `AwardCriterion`-Parsing bei semi-manuellem Tender-Intake — strukturiert genug für GI-2? | offen |
| D3 | Konzept-Sektionsmodell (DACH-Lösungs-/Arbeitskonzept-Standardstruktur) | → Concept-Suite-Spec |
| D4 | **External-Grounding-Scope:** ✅ **entschieden 30.05.** — Web-Research erlaubt, aber (GI-5) **PII-/kundendaten-bereinigte Queries** + (GI-6) **White-/Blacklist via `SourcePolicy`**. Default-Whitelist (BSI/ISO/EU-DACH-Regulatorik) noch zu kuratieren. | ✅ Prinzip entschieden; Default-Liste offen |
| D5 | **Freshness-Gate:** wer/was markiert eine `ExternalSource` als „zu alt zum Zitieren" und blockiert sie? (stale Norm = Ausschluss-Risiko) | offen |
| D6 | **Citation-Faithfulness:** dritter Eval-Check — stützt die zitierte ExternalSource den Satz wirklich? (Firm-Facts-Gate fängt das nicht) | offen |
| D7 | **Classifier-Fail-Safe:** ✅ **revidiert 02.08.** — Unsicherheit erzeugt `reviewRequired`; nur Tenant-Policy darf High-Risk Externalization/Actions gaten. Der Consultant-Autor verantwortet per Freigabe. | ✅ entschieden |

---

*Ende v1.0 — Domänenfundament. Nächster Schritt: Concept & Proposal Suite Feature-Spec auf dieser Sprache aufsetzen (D1/D3 dort schärfen).*
