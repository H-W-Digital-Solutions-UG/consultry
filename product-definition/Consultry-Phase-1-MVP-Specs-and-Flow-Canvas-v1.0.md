# Consultry — Phase 1 MVP: Feature-Specs, Flow-Sammlung & AI-Context-Canvas v1.0

## Feature-Specs, Flow-Sammlung & AI-Context-Canvas (Dual-Hero)

**Status:** Aktiv — dual-hero-aligned 13.06.2026
**Datum:** 30. Mai 2026 · **Dual-Hero-Rework:** 13.06.2026
**Scope:** MVP — **zwei gleichrangige Heroes (Win + Work)** auf geteiltem Engine-Fundament + Backbone.
**Bezug:** [Product Vision (komplett)](./Consultry-Product-Vision-v1.0.md), [MVP-Doc](./Consultry-MVP-PRD-v1.0.md), [MVP-Technical-Foundation](./Consultry-MVP-Technical-Foundation-v1.0.md), [Business-Domain-Definition](./Consultry-Business-Domain-Definition-v1.0.md), [Feature-Pain-Map](./Consultry-Feature-Pain-Map-v1.0.md), [Target Personas](./Consultry-Target-Personas-v1.0.md).

> **Lesehinweis.** Brücke zwischen Strategie (Vision/Pains) und Build (Surfaces, Objekte, AI-Verhalten, Prompts). Pro Feature: Spec + Flow-Sammlung (konkret + AI-dynamisch), dann Cross-Flows, Symbiose, Collab-Canvas. **Inline-Pain-Refs** (PW#/PK#) zeigen je Feature den belegten Schmerz aus der [Feature-Pain-Map](./Consultry-Feature-Pain-Map-v1.0.md).
>
> **Frühere Versionshistorie** (v1.1 F5/F6-Vorziehen, v1.2-Positionierung, v1.3-Korrekturen WC-OFF/TED-Polling) ist im [Decision-Log](./Consultry-MVP-Foundation-Decisions-v1.0.md) konsolidiert — hier sauber eingearbeitet, keine Patch-Notes mehr.

---

## 0. MVP-Scope — Dual-Hero

### 0.1 Die zwei Heroes auf geteiltem Fundament

> Die historischen Feature-IDs **F1–F6** bleiben als Spec-Anker erhalten, sind aber jetzt zwei Heroes zugeordnet. Klammer-Thesis: *„Beratung im KI-Zeitalter"* — gewinnen **und** AI-nativ arbeiten ([Vision §1](./Consultry-Product-Vision-v1.0.md)).

**🟦 Hero 1 — „Win" (Acquisition-to-Bid)**

| # | Feature | Rolle | Killt Pain |
|---|---|---|---|
| **F1** | **Account Growth** | Bestandskunde → Signal (Vertrags-Optionsfenster, klausel-gegroundet) → qualifizierte Opportunity. | PW4 (Folgegeschäft gewinnt), PW5 |
| **F5** | **Tender Ingest** | TED/eForms-**Polling (MVP, T7)** + semi-manuell → strukturieren (CPV/Fristen/Lose/Eignung/**AwardCriteria**) → Bid/No-Bid → Opportunity. Kein Submit. | PW2, PW5, PW3 |
| **F4→Concept Suite** | **Concept & Proposal Suite (★HERO★)** | Aus Opportunity + Korpus + TeamShape + AwardCriteria → gegroundeter, editierbarer Konzept-/Angebots-Entwurf. Consultant-as-author. Kein Versand. | PW1, PW2, PW6, PW7 |
| **F6** | **Deliverability / anonyme TeamShape** | Aggregierter „Können wir liefern?"-Check (Anzahl/Skills/Seniority, keine Personen) → Bid-Gate + Konzept-Realismus. | PW3, PK5 |

**🟩 Hero 2 — „Work" (AI-native Operating Foundation)**

| # | Feature | Rolle | Killt Pain |
|---|---|---|---|
| **F-Profile** | **Auto-ConsultantProfile** | Profile pflegen sich aus Upload/M365/Credly; Consultant bestätigt (GI-12a). Deskriptiv, kein Scoring. | PK5, PK2 |
| **F-Work** | **Work-Agent / Time-Capture** | Agent schlägt TimeEntries aus In-Tool-Arbeit vor → killt Billable-Leakage + Admin-Last. Privater PersonalNote-Layer. | PK1, PK2, PK3 |
| **F-Status** | **Project Observability** | Deliverable-aggregierter ProjectStatus aus TimeEntries; nie personen-attribuiert. | PK3, PK6 |

**⬛ Geteiltes Fundament (kein eigener Hero, trägt beide)**

| # | Feature | Rolle |
|---|---|---|
| **F2** | **Knowledge & Reuse** | Korpus-Ingest, Retrieval, Citations, ExternalSource/Grounding-Engine. Killt PK4, speist beide Heroes. |
| **F3** | **AI Workspace** | Kontext-Copilot + editierbarer Canvas + Explanation. Die Interaktions-Spine über allem. |
| **B** | **Approvals + Governance/Audit Backbone** | Recommendation→Explanation→Approval→Audit + WC-Mode-Schalter (Default-OFF). |

### 0.2 Was der MVP bewusst NICHT ist

- **Win:** kein Proposal-Versand, kein Pricing-Engine, kein Contract/eIDAS (→ H2); kein autonomes Tender-Einreichen, keine Vergabe-Zusage (→ H2+); **kein personenscharfes Matching/`TeamProposal`/People-Scoring** (→ H2 + Gate).
- **Work:** Time-**Capture** ist drin (BAG-pflichtig), aber **kein** Time-→-Invoice, **kein** Billing/DATEV/ELSTER (→ H3); **keine personenbezogene Utilization-Auswertung** ohne WC-Mode; **kein** Performance-/Burnout-Scoring (niemals per Default).
- Kein Net-New-Prospecting (→ H2); kein offener Prompt-Marktplatz; keine Multi-Step-Agentik nach außen.

### 0.3 MVP-Erfolgssignale (Dual-PMF, T12)

- **Hero 1 (Win):** ≥ 1 gegroundeter Konzept-/Bid-Entwurf aus eigenem Korpus **in 5 Tagen**; Edit-Distanz sinkend; Time-to-first-Wow < 15 Min.
- **Hero 2 (Work):** **≥ 60 % Consultant-Seats wöchentlich aktiv** + Work-Agent-Bestätigungs-Rate + Profile-Auto-Maintenance-Akzeptanz *(Bar mit Design-Partner final setzen)*.
- **Gemeinsam:** AI-Empfehlungen als brauchbare, gegroundete Entscheidungshilfe akzeptiert (nicht Black Box); Design-Partner versteht den Kaufgrund in Minuten.

---

## 1. Gemeinsame Fundamente (gelten für beide Heroes)

### 1.1 Der AI-Vertrag (nicht verhandelbar)

Jede relevante AI-Ausgabe in Phase 1 folgt demselben Vier-Takt:

```
Recommendation  →  Explanation  →  Human Approval  →  Audit Trail
(Vorschlag)        (Begründung +     (editierbar,        (Herkunft +
                    Quelle +          freigabepflichtig)   Version +
                    Unsicherheit)                          Wer/Wann)
```

Default-Regeln:
- **Nichts wird autonom verbindlich.** Vorschlag ≠ Datensatz.
- **Keine unsourced Claims.** Jede Behauptung trägt Herkunft + Confidence.
- **Aggregiert vor personenbezogen.** Personenscharfe Sichten nur mit Gate.
- **Editierbar.** Der Mensch korrigiert den Draft, das System lernt den Edit nicht heimlich in fremde Speicher.

### 1.2 Kern-Objekte (Phase-1-Datenmodell, minimal)

| Objekt | Gehört zu | Kurzbeschreibung |
|---|---|---|
| `Account` | F1 | Bestandskunde, Tenant-isoliert |
| `Stakeholder` | F1 | Person/Rolle beim Account, Warm-Path-Knoten |
| `Signal` / `Trigger` | F1 | Ereignis/Hinweis (intern oder integriert), das eine Chance nahelegt |
| `Opportunity` | F1 | qualifizierte Chance mit Status, Begründung, Quellen |
| `ProposalDraft` | F4 | interner Angebots-Entwurf, an eine Opportunity gebunden, versioniert (kein Versand) |
| `WarmPath` | F1 | belastbarer Beziehungspfad zu einem Stakeholder |
| `KnowledgeAsset` | F2 | Referenz/Methode/Report/Skript/Runbook/Blueprint, versioniert, mit Source |
| `AISkill` / `Workflow-Blueprint` | F2/F3 | wiederverwendbare AI-native Arbeitsfähigkeit (Prompt + Kontext + Owner + Version) |
| `Tender` | 🟦 F5 | Ausschreibung: Quelle, CPV, Fristen, Lose, Eignungs-/**AwardCriteria**, Dokumentenanforderungen, Match-Score |
| `ConsultantProfile` | 🟩 Work + 🟦 F6 | Skills, Zertifikate, Projekterfahrung, Availability — **auto-gepflegt** (GI-12a), deskriptiv. In Bid/TeamShape nur **aggregiert** (GI-13); personenscharf erst H2 + Gate |
| `TeamShape` | 🟦 F6 | **anonyme** Soll-Zusammensetzung (Anzahl/Skill-Typen/Seniority/Rollen) — **keine Personen** |
| `Forecast` | 🟦 F6 | Kapazitäts-/Auslastungssicht, **aggregiert** (Team/Practice); personenscharf erst H2 + Gate |
| `TimeEntry` | 🟩 Work | Zeiterfassungs-Eintrag (BAG-pflichtig); Capture erlaubt, personenbez. Auswertung WC-gated (GI-8) |
| `PersonalNote` | 🟩 Work | **strikt privater** Notiz-Layer des Consultants — nie management-sichtbar, nie Analytics (GI-7) |
| `WorkAgentSuggestion` | 🟩 Work | Agent-Vorschlag (TimeEntry/Tages-Summary) aus In-Tool-Arbeit → erst nach Bestätigung `TimeEntry` (GI-9a) |
| `ProjectStatus` | 🟩 Work | deliverable-aggregierter Fortschritt (RAG/Burn) aus TimeEntries; nie personen-attribuiert (GI-10) |
| `Recommendation` | ⬛ F3 | AI-Vorschlag mit Explanation, Sources, Confidence, Status |
| `ApprovalEvent` | ⬛ B | Freigabe/Ablehnung/Edit mit Wer/Wann/Warum |
| `AuditRecord` | ⬛ B | unveränderliche Spur über alle obigen |

### 1.3 Rollen (Phase 1, vereinfacht)

- **Account/BD Lead** — Haupt-Operator von F1.
- **Practice Lead** — qualifiziert Opportunities, kuratiert Knowledge.
- **Senior Consultant** — Knowledge-Contributor, AI-Skill-Autor.
- **Managing Partner** — „Scan-Entscheider"-Modus: Cockpit + Approval-Cards.
- **Works-Council-Mode** — ein Schalter, der personenbezogene Auswertung + Aktivitäts-Auto-Feed gated, wenn er AN ist (**Default: AUS** — korrigiert 12.06., T6; siehe §4A.3 und Domain-Def GI-9b/16). MVP-Sichten sind ohnehin aggregiert/anonym.

### 1.4 MVP-Oberflächen (Surfaces, hero-gruppiert)

**🟦 Win:**
- **Opportunity Detail / Approval-Card** — das zentrale Entscheidungsobjekt.
- **Tender Board** (F5) — Tender-Liste, strukturierte Sicht, Match + Bid-Checkliste.
- **Concept & Proposal Canvas** (Hero) — gegroundeter, editierbarer Entwurf mit Version History + Citation-Hover.
- **TeamShape-Sicht** (F6) — anonyme Team-Shape + aggregierte Kapazitäts-Aussage.

**🟩 Work:**
- **Work-Agent / Time-Capture** — Agent-Vorschläge bestätigen, privater PersonalNote-Layer.
- **Profil-Sicht** — auto-gepflegtes ConsultantProfile, Consultant bestätigt/verfeinert.
- **Project-Status-Board** — deliverable-aggregiert (RAG/Burn), nie personen-attribuiert.

**⬛ Geteilt:**
- **Cockpit / Dashboard** (dünner Einstieg) — rollenbasiert, Top-Signale, offene Approvals. *(NL-Query-Cockpit = H2, nicht MVP — T10.)*
- **Knowledge Workspace** — Suche, Asset-Detail, Reuse-Aktion.
- **AI Copilot (Basis)** — kontextgebundener Assistent + Explanation-Panel.

---

## 2. Feature-Spec F1 — Account Growth System

### 2.1 One-Liner

> *Macht aus verstreuten Bestandskunden-Signalen früh und strukturiert eine **qualifizierte, begründete Opportunity** — mit nachvollziehbarem Warm Path und verknüpften Reuse-Assets.*

> 🟦 **Hero 1 (Win).** Killt **PW4** (Incumbent-Win-Rate 60–90 % vs. 15 % neu; ~80 % Umsatz aus Bestand) + **PW5**. → [Feature-Pain-Map](./Consultry-Feature-Pain-Map-v1.0.md)

### 2.2 Job-to-be-done

`Welches Folgegeschäft ist bei welchem Bestandskunden gerade realistisch, warum, und über welchen Weg gehen wir es an?`

### 2.3 In-Scope (Phase 1)

- **Intelligentes CRM über loser Basis (kein CRM nötig):** Verträge + Dokumente werden hochgeladen, die AI extrahiert daraus Struktur und Signale. Eine bestehende CRM-Anbindung ist **optional**, keine Voraussetzung. (Siehe [GTM-Decisions §1/§W4](./Consultry-GTM-Decisions-v1.0.md).)
- **Hero-Signal — Vertrags-Options-/Verlängerungsfenster:** Das wichtigste Folgegeschäfts-Signal ist das sich öffnende Options-/Verlängerungs-/Ablauf-Fenster, extrahiert direkt aus dem hochgeladenen Vertrag und **an die konkrete Quell-Klausel gebunden** (gleiche Grounding-Regel wie F5-Tender). Demobar an Tag 1 aus *einem* Vertrag, ohne E-Mail-Graph → umgeht die Mitbestimmungs-/DSGVO-Grenze.
- Account- & Stakeholder-Modell mit Tenant-Isolation.
- **Weitere Signal/Trigger-Erfassung**: nativ (manuell, Notiz) + integriert (E-Mail/Kalender/DMS read-only, optional CRM-Import).
- **Warm-Path-Sichtbarkeit**: wer kennt wen, wie belastbar.
- **Opportunity-Qualifizierung**: AI-Vorschlag mit Begründung, Quellen, Confidence → Approval-Card.
- White-Space-Hinweise auf Account-Ebene (welche Leistung fehlt bei welchem Account).
- Cockpit-Liste „Top-Chancen" + Notification der stärksten Trigger.

### 2.4 Out-of-Scope (Phase 1)

- Proposal-Generierung / -Versand, Pricing, Contract (Phase 2).
- Teamvorschlag/Staffing (Phase 2).
- Net-New-Discovery / generisches Prospecting.
- Autonome Outreach-Mails aus dem Produkt.

### 2.5 AI-Verhalten (darf / nur-mit-Gate / niemals)

- **Darf:** Signale clustern, Opportunity-Hypothese formulieren, Warm Path vorschlagen, Begründung + Quellen liefern, priorisieren.
- **Nur mit Gate:** Opportunity in „aktiv verfolgt" überführen; personenbezogene Stakeholder-Einschätzungen.
- **Niemals per Default:** Chance autonom an Kunden kommunizieren; unbelegte Trigger als Fakt; Account-Daten in generischen Memory mischen.

### 2.6 Erfolgsmetriken

- Time-to-first-qualified-Opportunity (Ziel: < 10 Min ab Signal).
- Anteil Opportunities mit vollständiger Begründung + Quelle (Ziel: 100 %).
- **Vertragssignal-Extraktions-Genauigkeit**: Anteil korrekt erkannter Options-/Verlängerungsfenster mit korrekter Quell-Klausel-Bindung (Akzeptanzkriterium, vgl. GTM-Decisions G4).
- „Früher sichtbar"-Quote: Anteil Chancen, die vor dem üblichen manuellen Erkennen aufpoppen.

### 2.7 Proposal Draft (F4 · heraufgestuft 30.05.)

> **Entscheidung:** Phase 1 reicht von der freigegebenen Opportunity bis zu einem **internen Proposal-Entwurf**. Kein Versand, kein Pricing-Engine, kein Contract. (Vormals „Stub" — jetzt vollwertige Phase-1-Funktion F4.)

**One-Liner.** *Aus der begründeten, freigegebenen Opportunity, den verknüpften Reuse-Assets und (falls vorhanden) der anonymen Team-Shape aus F6 wird per AI-Skill ein strukturierter, editierbarer **Proposal-Entwurf** im Canvas — der erste greifbare Angebots-Beweis, intern.*

> 🟦 **Hero 1 (Win) ★HERO★ = Concept & Proposal Suite.** Killt **PW1** (Proposals 30+ Tage), **PW2** (~25 h/Bid), **PW6** (Tagessatz-Druck), **PW7** (Grounding-Haftung). Trägt das **5-Tage-PMF-Signal**. → [Feature-Pain-Map](./Consultry-Feature-Pain-Map-v1.0.md)

**In-Scope (Phase 1):**
- `ProposalDraft`-Objekt (neu): an genau eine `Opportunity` gebunden, versioniert.
- AI-Skill `draft-proposal` (F2/F3): erzeugt Gliederung + Kerntext aus Opportunity-Begründung + angehängten Assets, **quellengebunden**.
- Editierbarer Canvas (F3) mit Version History; Übernahme nur über Approval-Card (B).
- Export als internes Dokument (PDF/Markdown) zum **manuellen** Weiterverarbeiten außerhalb des Produkts.

**Out-of-Scope (Phase 1):**
- Kein Versand/Outbound aus dem Produkt (read-only/import-Prinzip bleibt, siehe §6.2).
- Kein Pricing-/Kalkulations-Engine, keine Tagessätze, kein Commercial-Draft.
- Kein namentliches Team / kein CV-Paket (personenscharfes Staffing → Phase 1.5+); die **anonyme Team-Shape** aus F6 darf einfließen. Kein Contract Drafting (→ Phase 2).
- Keine Kunden-spezifische Formatierung/Corporate-Template-Engine (→ Phase 2).

**AI-Verhalten (darf / nur-mit-Gate / niemals):**
- **Darf:** Gliederung + Entwurfstext aus vorhandenem, freigegebenem Kontext erzeugen; Assets als Belege einbinden; Lücken markieren.
- **Nur mit Gate:** Übernahme als „Proposal-Entwurf v1"; Einbeziehung personenbezogener Stakeholder-Aussagen.
- **Niemals per Default:** Versand; erfundene Referenzen/Zahlen; Pricing-Aussagen; unsourced Claims als belegt darstellen.

**Erfolgsmetriken:**
- Zeit von freigegebener Opportunity → erstem Proposal-Entwurf (Ziel: < 5 Min).
- Anteil Entwürfe, die ohne Neuschreiben weiterverarbeitet werden (Edit-Distanz sinkend).
- Anteil Entwurfs-Absätze mit nachvollziehbarer Quelle/Asset-Bindung (Ziel: hoch).

---

## 3. Feature-Spec F2 — Knowledge & Reuse System

### 3.1 One-Liner

> *Verwandelt vorhandenes Projektwissen, Delivery-Artefakte und AI-Skills in **auffindbare, wiederverwendbare, quellengebundene Bausteine** — damit Proposal- und Onboarding-Vorbereitung nicht jedes Mal von vorn startet.*

> ⬛ **Geteilte Engine (trägt beide Heroes).** Killt **PK4** (~20 % der Arbeitswoche für Suchen/Neu-Erstellen, APQC). Liefert Firm- + External-Grounding. → [Feature-Pain-Map](./Consultry-Feature-Pain-Map-v1.0.md)

### 3.2 Job-to-be-done

`Was haben wir schon gebaut/gelernt, das ich für diesen Account/dieses Thema jetzt wiederverwenden kann — und woher kommt es?`

### 3.3 In-Scope (Phase 1)

- `KnowledgeAsset`-Modell: Referenz, Methode, Report, Skript, Runbook, Repository-Template/Blueprint.
- **Capture**: Upload + Ingest (DMS/Repo read-only) + AI-Verdichtung zu wiederverwendbarem Baustein.
- **Quellenbindung**: jeder verdichtete Baustein zeigt Herkunft (Anthropic-Citations-Muster).
- **Suche & Retrieval**: semantisch, Tenant-isoliert, mit Filter (Thema/Kunde/Typ).
- **AI-Skills / Workflow-Blueprints** als First-Class-Objekt: versioniert, mit Owner, Kontext, Artefakt-Bezug (kein Prompt-Zoo).
- **Reuse-Aktion**: Asset an `Account`/`Opportunity` anhängen (Brücke zu F1).

### 3.4 Out-of-Scope (Phase 1)

- Vollständiges DMS / Git-Hosting / GitHub-Ersatz.
- Repository-**Erstellung** aus Blueprints (nur Quelle, nicht Ziel — Phase 2+).
- Cross-Tenant-Knowledge-Retrieval (nur mit explizitem Gate, nicht Default).
- Offener Prompt-Marktplatz.

### 3.5 AI-Verhalten (darf / nur-mit-Gate / niemals)

- **Darf:** Artefakte verdichten, taggen, Duplikate erkennen, passende Assets zu Kontext vorschlagen, Skills empfehlen.
- **Nur mit Gate:** Cross-Tenant-Retrieval; externe Enrichment-Quellen; Skill-Veröffentlichung tenant-weit.
- **Niemals per Default:** Kundendaten/Artefakte über Tenants mischen; verdichtete Claims ohne Quelle ausgeben; Wissen ohne Version/Owner publizieren.

### 3.6 Erfolgsmetriken

- Reuse-Rate: Anteil Opportunities/Proposals mit ≥ 1 angehängtem Asset.
- Sucherfolg: Anteil Suchen mit akzeptiertem Treffer.
- Capture-Aufwand: Zeit von Upload bis wiederverwendbarem Baustein (Ziel: < 2 Min).

---

## 4. Feature-Spec F3 — AI Workspace

### 4.1 One-Liner

> *Die AI-native Schicht, die F1 und F2 bedienbar macht: ein kontextgebundener Copilot + ein **editierbarer Canvas** mit Version History, der Empfehlungen erklärt, Quellen zeigt und Freigaben einsammelt.*

> ⬛ **Geteilte Spine (Interaktions-Fundament beider Heroes).** Verkörpert den Human-AI-Collaboration-Loop (Vorschlag → Verfeinern → Verantworten → Audit). → [Feature-Pain-Map](./Consultry-Feature-Pain-Map-v1.0.md)

### 4.2 Job-to-be-done

`Hilf mir, mit dem Kontext aus Account + Wissen schneller eine belastbare, erklärte Entscheidung/Artefakt zu erzeugen — ohne die Kontrolle abzugeben.`

### 4.3 In-Scope (Phase 1)

- **Kontextgebundener Copilot (Basis)**: kennt aktuellen `Account`/`Opportunity`/`Asset`-Kontext (Muster: NotebookLM/Projects/Context IQ).
- **Editierbarer Canvas (Basis)**: AI-Draft, vom Menschen editierbar, mit Version History (Muster: OpenAI Canvas).
- **Structured Outputs**: Empfehlungen als strukturierte, workflow-fähige Datensätze (nicht nur Fließtext).
- **Explanation-Panel**: Begründung + Quellen + Confidence neben jeder Empfehlung.
- **Approval-Hook**: jede Übernahme in F1/F2 läuft über die Approval-Card (Backbone B).
- **AI-Skill-Runner (Basis)**: einen kuratierten Workflow-Blueprint aus F2 ausführen.

### 4.4 Out-of-Scope (Phase 1)

- Voller Copilot mit Multi-Step-Agentik / autonome Aktionsketten (Phase 2).
- Deep-Research-Pipelines mit externer Web-Recherche als Default.
- Generierung externer Artefakte (Proposals/Verträge) zum Versand.

### 4.5 AI-Verhalten (darf / nur-mit-Gate / niemals)

- **Darf:** draften, zusammenfassen, erklären, strukturieren, Skills ausführen, priorisieren — alles editierbar.
- **Nur mit Gate:** AI-Zusammenfassungen in externe Artefakte übertragen; Empfehlungen tenant-weit ausrollen.
- **Niemals per Default:** heimlich autonome Entscheidungen; Claims ohne Herkunft/Version; Kundendaten in generischen Memory.

### 4.6 Erfolgsmetriken

- Akzeptanzrate der Empfehlungen nach Edit (Ziel: hoch & steigend).
- Anteil Empfehlungen mit sichtbarer Quelle (Ziel: 100 %).
- Edit-Distanz: wie viel der Mensch nachbessern muss (sinkend = besser).

---

## 4A. Vorgezogene Feature-Specs (Scope-Erweiterung 30.05.)

> Diese beiden Funktionen waren in der Strategie (Product Document v1.0 / PRD v4.0) bewusst **Phase 2/3**. Sie werden auf ausdrücklichen Wunsch nach Phase 1 vorgezogen. Die Specs halten die DACH-Guardrails aus PRD v4.0 §4.4 (Tenders) und §4.1 (People Planning) ein.

### 4A.1 Feature-Spec F5 — Tender Ingest

**One-Liner.** *Liest öffentliche Ausschreibungen aus offiziellen Quellen ein, strukturiert sie (CPV, Fristen, Lose, Eignung, Dokumente) und matcht sie gegen Firmenprofil + Kapazität — als qualifizierte Chance, **nicht** als autonome Einreichung.*

> 🟦 **Hero 1 (Win).** Killt **PW2**, **PW5** (~37 % der Tenders unbearbeitet) + **PW3** (Bid/No-Bid = größter Win-Rate-Hebel). MVP: **TED-Polling (T7)** + semi-manuell. → [Feature-Pain-Map](./Consultry-Feature-Pain-Map-v1.0.md)

**Job-to-be-done.** `Welche Ausschreibung passt zu uns, ist fristgerecht machbar, und was müssen wir dafür liefern?`

**In-Scope (Phase 1):**
- Ingest aus **TED/eForms**, **service.bund.de** und ähnlichen Quellen (read-only) — **thin Polling im MVP** (täglicher Pull, CPV-Filter pro Tenant; T7) **plus** semi-manueller Upload/Paste.
- Strukturierung: CPV-Codes, Fristen, Lose, Eignungs-/Ausschlusskriterien, Dokumentenanforderungen.
- **Match** gegen Firmenprofil, Referenzen (F2) und Kapazität (F6).
- Überführung in `Opportunity` (gleicher Qualifizierungs-/Approval-Pfad wie F1).
- Bid-Paket-Vorbereitung: Checkliste der geforderten Unterlagen + Verknüpfung passender Assets.

**Out-of-Scope (Phase 1):**
- **Kein autonomes Einreichen / keine Submission** (PRD v4.0 §4.4).
- Keine Zusage „Compliance vollständig" / „Vergabesicherheit".
- Keine Fristen-Automatik mit Rechtswirkung (nur Hinweise/Reminder).
- Keine Vollabdeckung aller Vergabeplattformen (segmentselektiv).

**AI-Verhalten (darf / nur-mit-Gate / niemals):**
- **Darf:** lesen, strukturieren, zusammenfassen, matchen, Bid-Entwürfe vorbereiten, Quellen zeigen.
- **Nur mit Gate:** Tender → aktiv verfolgte Opportunity; Einreichungsunterlagen „final"; formale Vollständigkeit als „erfüllt" markieren.
- **Niemals per Default:** autonom einreichen; formale Fehler als „nur Hinweis" abtun; vollständige Vergabesicherheit suggerieren.

**Erfolgsmetriken:** Trefferquote relevanter Tenders; Zeit Ingest → strukturierte Bewertung; Anteil Tenders mit nachvollziehbarem Match-Grund.

### 4A.2 Feature-Spec F6 — Deliverability-Check (Option A · geschnitten 30.05.)

> **⚠️ Scope-Schnitt 30.05. (siehe [GTM-Decisions §5](./Consultry-GTM-Decisions-v1.0.md)).** Volles Staffing & Forecasting ist **nicht** Phase 1 — es ist Delivery/Resourcing, nicht Akquise, und trägt die schwerste Mitbestimmungs-/AI-Act-Last. **Phase 1 behält nur den akquise-relevanten Rest:** einen **aggregierten „Können wir das liefern?"-Kapazitäts-Check**, der Bid/No-Bid (F5) und die Team-Zusammensetzung im Proposal (F4) speist. Echtes Staffing/Matching/Forecasting → **Phase 1.5+**.

**One-Liner.** *Liefert einen **aggregierten Deliverability-Check** plus eine **anonyme Team-Zusammensetzung** (wie viele Personen, welche Skill-/Profil-Typen, welcher Seniority-Mix) als Realismus-Gate für Bid/No-Bid und Proposal — **niemals namentliche Personen.***

> 🟦 **Hero 1 (Win), gespeist aus 🟩 Capability.** Killt **PW3** (Realismus-Gate) + **PK5** (Skills nicht normalisiert). Personenscharf = H2 + WC-Gate. → [Feature-Pain-Map](./Consultry-Feature-Pain-Map-v1.0.md)

**Job-to-be-done.** `Können wir das grundsätzlich liefern — wie viele Leute mit welchen Skills und welcher Seniority braucht es, und haben wir die Kapazität dafür?`

**In-Scope (Phase 1):**
- `Forecast` (aggregiert): Kapazitäts-/Auslastungssicht auf **Team-/Practice-Ebene**.
- `TeamShape` (anonym): die **abstrakte Team-Zusammensetzung** für einen Tender/eine Opportunity — **Anzahl Köpfe, geforderte Skill-/Profil-Typen, Seniority-Mix, Rollen** (z. B. „2× Senior SAP-Berater, 1× Data Engineer mid, 1× PM"). **Keine namentlichen Personen.**
- Aggregierte **Skill-Abdeckung vs. Anforderung** (haben wir diese Profil-Typen im Pool — ja/nein/Lücke), **ohne** Personen zu nennen.
- Sichtbarkeit von Skill-Gaps und Bench-/Überlastungs-Risiken **auf aggregierter Ebene**.
- **Bid-Gate-Input für F5** und **Realismus-Check für F4** (Proposal: „machbar mit Team-Shape X und vorhandener Kapazität bis Frist Y").

**Out-of-Scope (Phase 1 — auf Phase 1.5+ verschoben):**
- **Personenscharfes Matching entfällt in Phase 1** — keine namentlichen Personen, kein Zuordnen konkreter Berater zu Rollen.
- Personenscharfes Forecasting bis Einzelberater.
- **Kein People-Scoring, kein Burnout-/Performance-/Persönlichkeits-Scoring** (PRD v4.0 §4.1).
- Keine Black-Box-Rankings von Personen; keine automatische Leistungsbeurteilung.
- Kein voller Capacity Planner / keine Workforce-Optimierung.

> **Compliance-Effekt des Schnitts:** Da Phase 1 **rein aggregiert** bleibt (kein Personenbezug), entfällt der Großteil der personenscharfen Mitbestimmungslast. `Works-Council-Mode` bleibt als Produktfunktion bestehen und greift erst, wenn in Phase 1.5+ personenscharfe Sichten dazukommen (§4A.3).

**AI-Verhalten (darf / nur-mit-Gate / niemals):**
- **Darf:** aggregierte Forecasts und Skill-Gap-Sichten (Team/Practice); **anonyme Team-Shapes** (Anzahl, Skill-/Profil-Typen, Seniority-Mix); begründete Deliverability-Einschätzung „können wir grundsätzlich liefern?".
- **Nur mit Gate (Phase 1.5+):** personenscharfes Matching (konkrete Berater zu Rollen); personenbezogene Auslastungs-/Workload-Analysen; personenscharfes Forecasting bis Einzelberater. **Gate = Works-Council-Mode + dokumentierte Freigabe.**
- **Niemals per Default:** personenbezogenes Ranking/Scoring; Entscheidungen ohne Begründung; personenscharfe Daten ohne Consent-/Mitbestimmungs-Mode.

**Erfolgsmetriken:** Plausibilität des aggregierten Deliverability-Checks; frühere Sichtbarkeit von Skill-/Bench-Risiken; Anteil Bid/No-Bid-Entscheidungen mit nachvollziehbarer Kapazitäts-Begründung (Ziel: 100 %).

### 4A.3 Compliance-Konsequenz dieser Erweiterung

Mit F6 wird Consultry in Phase 1 **mitbestimmungs- und AI-Act-relevant**. Das ist kein Legal-Appendix, sondern Produktlogik:

- **AI Act:** Systeme für Worker Management / Task Allocation können **Hochrisiko** sein → Transparenz, Human Oversight, dokumentierte Freigabe sind Pflicht-Defaults.
- **BetrVG §87/§94:** technische Systeme zur Verhaltens-/Leistungskontrolle und Beurteilungsgrundsätze sind **mitbestimmungspflichtig** → `Works-Council-Mode` muss echte Produktfunktion sein.
- **BDSG §26 / DSGVO:** Beschäftigtendaten nur zweckgebunden, datenminimiert, Consent freiwillig.

**Produktentscheidung (revidiert 12.06.2026, T6):** `Works-Council-Mode = AUS` (Default-OFF). Der Schalter gated — wenn AN — personenbezogene Auswertung + Aktivitäts-Auto-Feed (Domain-Def GI-9b/GI-16). F6-MVP-Sichten bleiben **ohnehin aggregiert/anonym** (TeamShape ohne Personen) — schalterunabhängig. Bei Kunden mit aktivem Betriebsrat → AN; Restrisiko bewusst akzeptiert („ein blockierter Deal, kein Lawsuit"). ~~Frühere Auslegung „Default AN"~~ aufgehoben; verbindliche Linie: [MVP-PRD §3.1-Platform](./Consultry-MVP-PRD-v1.0.md) + [Foundation-Decisions T6](./Consultry-MVP-Foundation-Decisions-v1.0.md).

---

## 4B. Hero 2 „Work" — AI-native Operating Foundation (Feature-Specs)

> **Hochgestuft 13.06. zu co-gleichrangigem Hero (T8).** Die „neue Arbeitsweise": der Consultant arbeitet täglich *mit* der AI, statt Doku nachzutragen. Killt die chronischen Work-Pains (PK1–PK6) und liefert die **Seat-Utilization-PMF-Bar** (T12). Domänenregeln: [Domain-Def §3.5/§3.8/§3.9](./Consultry-Business-Domain-Definition-v1.0.md); Entities: [Technical-Foundation §2.4/§2.5](./Consultry-MVP-Technical-Foundation-v1.0.md).

### 4B.1 F-Profile — Auto-ConsultantProfile

**One-Liner.** *Beraterprofile (Skills, Zertifikate, Projekterfahrung, Availability) pflegen sich **selbst** aus verknüpften Quellen (Upload, M365, Credly-Export, CV); der Consultant bestätigt/verfeinert — nie ein leeres Skill-DB-Formular.*

> 🟩 Killt **PK5** (Skills nicht normalisiert) + **PK2** (Admin-Last). Speist aggregiert die TeamShape (Win).

- **In-Scope:** auto-Maintenance via Background-Agent (GI-12a, Human-in-the-loop-Bestätigung); deskriptive Skills mit `source_of_claim`-Hierarchie (SelfDeclared<PeerVerified<ProjectAttested<CertificationBacked); Cost/Sell strikt getrennt.
- **AI darf:** Skills/Zertifikate aus Quellen vorschlagen, Duplikate erkennen, Profil-Lücken markieren. **Nur mit Gate:** personenscharfe Verwendung außerhalb Aggregat (H2). **Niemals:** Performance-/Burnout-Score (GI-9/12); LinkedIn-Scraping (T10).
- **Metriken:** Profil-Vollständigkeit, Auto-Maintenance-Akzeptanz-Rate, Time-to-current-profile.

### 4B.2 F-Work — Work-Agent / Time-Capture

**One-Liner.** *Der Work-Agent schlägt `TimeEntry`s und Tages-Zusammenfassungen aus der In-Tool-Arbeit vor; der Consultant bestätigt mit einem Klick. Plus ein **strikt privater** `PersonalNote`-Layer.*

> 🟩 Killt **PK1** (Billable-Leakage 15–25 %, 2,9 h/Tag), **PK2** (Admin 20 %), **PK3** (Utilization-Lücke). **Trägt die Seat-Utilization-PMF-Bar.**

- **In-Scope:** Time-Capture (BAG-pflichtig, GI-8); `WorkAgentSuggestion`→Bestätigung→`TimeEntry` (GI-9a); privater PersonalNote-Layer (GI-7, nie management-sichtbar/Analytics).
- **Compliance:** der **Aktivitäts-Auto-Feed** ist WC-Mode-gated (GI-9b, Default-OFF-Posture); manuelle Erfassung + PersonalNote immer frei.
- **AI darf:** Einträge vorschlagen, Tag zusammenfassen, Projekt/Task zuordnen. **Niemals:** ohne Bestätigung zum TimeEntry machen; PersonalNote auswerten; Leistungs-Scoring.
- **Metriken:** Work-Agent-Bestätigungs-Rate, erfasste vs. geschätzte billable Stunden (Leakage-Reduktion), wöchentlich aktive Seats.

### 4B.3 F-Status — Project Observability

**One-Liner.** *Deliverable-zentrierter `ProjectStatus` (RAG/Milestones/Fristen/BudgetBurn) — abgeleitet aus **aggregierten** `TimeEntry`s, **nie** personen-attribuiert.*

> 🟩 Killt **PK3** (Utilization-Sicht) + **PK6** (Delivery→Wachstum-Loop). Sekundärer Deliverability-Input für Win.

- **In-Scope:** Projekt-/Deliverable-RAG, Burn, Fristen aus aggregierten TimeEntries (GI-10/11). **Out:** tiefes Delivery-/Workforce-Analytics (H2), Billing (H3).
- **AI darf:** aggregierte Status-/Risiko-Hinweise. **Nur mit Gate:** Personen-Drilldown (WC-Mode, GI-16). **Niemals:** „Projekt gelb wegen Person Y" im Default.
- **Metriken:** Status-Aktualität ohne Handpflege, früher sichtbare Bench-/Überlast-Risiken (aggregiert).

---

## 5. Flow-Sammlung (pro Feature: konkret + abstrakt/AI-dynamisch)

> Zwei Ebenen pro Feature: **Konkrete Flows** (deterministisch, klickbar) und **abstrakte/dynamische AI-Flows** (high-level, nicht-deterministisch, weil der Copilot Reihenfolge & Tiefe selbst wählt). Die abstrakten Flows sind absichtlich als *Capability-Schleifen* statt fixe Screens beschrieben.

### 5.1 Account Growth — konkrete Flows

1. **Signal → Opportunity (Happy Path)**: Signal landet → Cockpit/Notification → öffnen → AI-Qualifizierung lesen → editieren → freigeben → Opportunity aktiv.
2. **Manuelles Signal erfassen**: BD legt Notiz/Trigger an → AI schlägt Opportunity-Hypothese vor.
3. **Warm-Path-Lookup**: Account öffnen → „wer kennt wen" → belastbarsten Pfad markieren.
4. **White-Space-Review**: Account-Detail → fehlende Leistungen → Chance erzeugen.
5. **Opportunity ablehnen/zurückstellen**: Approval-Card → „nicht jetzt" mit Grund → Audit.
6. **Trigger-Triage (MP-Modus)**: Managing Partner scannt nur Approval-Cards → freigeben/ablehnen.
7. **Opportunity → Proposal-Stub**: freigegebene Opportunity → `draft-proposal` → Canvas-Entwurf editieren → Approval → interner Export (kein Versand).

### 5.2 Account Growth — abstrakte / AI-dynamische Flows

- **Continuous-Signal-Sense-Loop**: System beobachtet eingebundene Quellen, clustert schwache Signale zu einer Hypothese, *wann es genug ist* entscheidet das Modell + Schwellenwert.
- **Explain-on-Demand**: Nutzer fragt „warum diese Chance?" → Copilot rekonstruiert Begründungskette aus Signalen + Assets, on the fly.
- **Reprioritize-Dynamic**: bei neuem Signal ordnet der Copilot die Top-Chancen neu, mit Diff-Erklärung („hochgestuft, weil …").

### 5.3 Knowledge & Reuse — konkrete Flows

1. **Capture → Baustein**: Upload/Ingest → AI verdichtet → Quelle prüfen → speichern.
2. **Suche → Reuse**: Suchbegriff → Treffer → an Opportunity/Account anhängen.
3. **AI-Skill anlegen**: Prompt + Kontext + Owner + Version → kuratiert speichern.
4. **AI-Skill ausführen**: Skill wählen → auf aktuellen Kontext anwenden → Output editieren.
5. **Duplikat-Merge**: System schlägt Zusammenführung vor → bestätigen.
6. **Quellen-Audit**: Asset öffnen → Herkunft + Version + wer verdichtet.

### 5.4 Knowledge & Reuse — abstrakte / AI-dynamische Flows

- **Just-in-time-Reuse**: während F1/F3-Arbeit schlägt das System ungefragt passende Assets/Skills vor (kontextgetrieben, nicht menügetrieben).
- **Knowledge-Gap-Sense**: Copilot erkennt, dass für ein Thema kein Asset existiert, und schlägt Capture vor.
- **Source-Faithfulness-Check**: bevor ein Baustein wiederverwendet wird, prüft das Modell, ob die Quelle die Aussage noch trägt.

### 5.5 AI Workspace — konkrete Flows

1. **Copilot-Frage im Kontext**: Account/Opportunity offen → fragen → erklärte Antwort mit Quellen.
2. **Draft im Canvas → Edit → Übernahme**: AI-Draft → editieren → via Approval in F1/F2 übernehmen.
3. **Empfehlung mit Explanation-Panel**: Vorschlag prüfen → Quellen aufklappen → freigeben.
4. **Skill-Runner**: Blueprint aus F2 ausführen → strukturierter Output → Canvas.
5. **Version-History-Rollback**: frühere Canvas-Version wiederherstellen.

### 5.6 AI Workspace — abstrakte / AI-dynamische Flows

- **Context-Assembly-Loop**: Copilot entscheidet selbst, welche Account-/Knowledge-Objekte er als Kontext zieht, und legt das offen.
- **Recommend-Explain-Approve-Cycle** als generischer Motor hinter *jeder* AI-Aktion (siehe §1.1) — feature-übergreifend wiederverwendet.
- **Tool-/Skill-Selection-Dynamic**: bei einer Aufgabe wählt der Copilot den passenden AI-Skill aus F2 selbst aus (mit Begründung), statt fixem Menü.

### 5.7 Tender Ingest (F5) — Flows

**Konkret:** 1) Ingest → Tender-Liste; 2) Tender öffnen → strukturierte Sicht (CPV/Fristen/Lose/Eignung); 3) Match gegen Profil + Kapazität (F6) → Score mit Begründung; 4) Tender → Opportunity (Approval); 5) Bid-Paket-Checkliste → passende Assets (F2) anhängen.
**Abstrakt/AI-dynamisch:** *Continuous-Tender-Sense* (laufendes Screening neuer Tenders gegen Firmenprofil); *Eligibility-Gap-Check* (Modell prüft, welche Eignungskriterien wir (nicht) erfüllen, mit Quelle).

### 5.8 Deliverability-Check (F6) — Flows

**Konkret:** 1) Opportunity/Tender → `shape-team` → anonyme Team-Shape (Anzahl, Skill-/Profil-Typen, Seniority-Mix, Rollen); 2) Skill-Abdeckung der Shape vs. Pool (ja/nein/Lücke) auf aggregierter Ebene; 3) Forecast-Sicht (aggregiert) → Bench-/Überlastungs-Hinweise; 4) Team-Shape + Kapazitäts-Aussage → in F4 Proposal & F5 Bid-Gate übernehmen (Approval). **Phase 1.5+ (gated):** personenscharfes Matching → Works-Council-Mode-Prompt → Freigabe → Audit.
**Abstrakt/AI-dynamisch:** *Deliverability-Sense* (Copilot bewertet „können wir liefern?" aus Pool-Statistik+Forecast, on the fly); *Reforecast-on-change* (neue Opportunity/Allocation → aggregierter Forecast aktualisiert sich mit Diff-Erklärung).

---

## 6. Cross- / Integration-Flows

### 6.1 Interne Cross-Flows (F1 ↔ F2 ↔ F3)

- **CF-1 — Signal → Reuse → Opportunity**: F1-Signal triggert F3-Copilot, der F2-Assets zieht und eine *belegte* Opportunity baut.
- **CF-2 — Opportunity → Knowledge-Gap**: Beim Qualifizieren erkennt F3 fehlendes Wissen und legt in F2 einen Capture-Task an.
- **CF-3 — Asset-Update → Re-Score**: Neues/aktualisiertes F2-Asset lässt F3 betroffene F1-Opportunities neu bewerten.
- **CF-4 — Approval überall**: Jede Übernahme in F1/F2 aus F3 läuft durch denselben Backbone-Approval (B) → ein Audit-Strom.
- **CF-5 — Tender → Opportunity → Team-Shape → Proposal**: F5-Tender wird zur Opportunity (F1), F6 liefert die **anonyme Team-Shape** + Forecast, F4 baut daraus den Proposal-Entwurf — ein durchgehender, belegter Pfad.
- **CF-6 — Forecast ↔ Proposal-Realismus**: F6-Kapazitätssicht fließt als Plausibilitäts-Check in den F4-Entwurf („machbar mit Team X bis Frist Y").
- **CF-7 — Gate-Propagation**: Sobald F6 personenscharf wird, erzwingt der Backbone (B) Works-Council-Mode + Freigabe über alle abhängigen Flows hinweg.

### 6.2 Externe Integration-Flows (Phase 1: read-only / Import-first)

| Quelle | Phase-1-Rolle | Richtung |
|---|---|---|
| E-Mail / Kalender (M365) | Signal- & Warm-Path-Input | read-only |
| DMS / SharePoint | Knowledge-Capture-Quelle | read-only |
| GitHub / GitLab | Repo-Templates/Skripte als Assets | read-only (Quelle) |
| CRM (optional) | Account-/Stakeholder-Import | Import |
| Jira (optional) | schwache Delivery-Signale | read-only |
| **TED/eForms, service.bund** (F5) | Tender-Ingest | read-only |
| **HR / Skill-Quelle** (F6, optional) | Consultant-Profile/Availability-Import | Import (Gate-pflichtig bei Personenbezug) |

> **Source-of-Truth-Regel (Phase 1):** Consultry führt `Account`, `Opportunity`, `KnowledgeAsset`, `AISkill`, `Tender`, `ConsultantProfile`, `TeamShape`, `Forecast`, `ProposalDraft` **nativ**. Alles aus Integrationen ist **Vorschlag/Input**, nie automatisch verbindlicher Datensatz. DATEV/ELSTER/Time/Invoice: bewusst **nicht** in Phase 1.

> **Bestätigt (30.05.):** Phase 1 nutzt nur **read-only / Import** (kein Schreibzugriff nach außen, kein Mailversand, **keine autonome Tender-Submission**).

---

## 7. Symbiose-Features (entstehen erst durch F1–F6 zusammen)

Diese Features sind **emergent** — sie sind kein weiteres Modul, sondern der eigentliche „AI-native"-Beweis:

1. **Begründete Opportunity mit Reuse-Belegen** — eine Chance, die ihre Begründung *aus echtem Firmenwissen* zieht (F1×F2×F3). Das ist der Demo-Moment.
2. **Self-enriching Knowledge** — jede freigegebene Opportunity macht Assets sichtbarer/besser getaggt (Nutzung verbessert Reuse).
3. **Explain-anything** — überall im Produkt „warum?" fragen → erklärte, quellengebundene Antwort.
4. **Context-aware Skill-Suggestion** — der richtige AI-Skill wird im richtigen Moment vorgeschlagen, nicht gesucht.
5. **Single Audit Stream** — eine durchgehende, mitbestimmungsfähige Spur über Wissen, Empfehlung und Entscheidung (Verkaufsargument für MP/COO/Betriebsrat).
6. **End-to-end Bid-Pfad** — *Tender/Signal → begründete Opportunity → anonyme Team-Shape + Forecast → Proposal-Entwurf*, alles belegt und freigegeben in **einem** System (F5×F1×F6×F4). Das ist der vollständige Phase-1-Demo-Bogen.
7. **„Can we deliver?"-Reality-Check** — Team-Shape + Forecast (F6) halten den Proposal-Entwurf (F4) ehrlich: kein Angebot, das das nötige Profil oder die Kapazität nicht trägt.

---

## 8. Spec / AI-Context + Prompt-Engineering Collab-Canvas

> Der „Canvas" hat zwei Zwecke: (a) **Build-Canvas** — pro Feature ein wiederverwendbarer AI-Context- und Prompt-Block, an dem Produkt + Engineering + AI gemeinsam arbeiten. (b) **Werbe-Canvas** — eine verdichtete Feature-Übersicht, die die Phase-1-Hauptfunktionen auf breiter Basis „vermarktet" (Sales/Design-Partner).

### 8.1 AI-Context-Blocks (pro Feature, wiederverwendbar)

**Globaler System-Context (gilt für alle Skills):**
```
Du bist Consultrys AI-Workspace für DACH-IT-/Digitalisierungsberatungen.
Immer: Empfehlung → Begründung → Quelle → Confidence. Nichts autonom verbindlich.
Tenant-isoliert. Keine unsourced Claims. Aggregiert vor personenbezogen.
Output bei Entscheidungen: strukturiert (Structured Output), editierbar, freigabepflichtig.
```

**F1 — Account-Context-Block:**
```
Kontext: <Account, Stakeholder, jüngste Signale/Trigger, Warm Paths, White-Space>.
Aufgabe: Forme aus den Signalen eine Opportunity-Hypothese.
Liefere: {opportunity_title, rationale[], sources[], warm_path, confidence, suggested_next_step}.
Verbote: keine Kundenkommunikation, keine unbelegten Trigger.
```

**F2 — Knowledge-Context-Block:**
```
Kontext: <vorhandene KnowledgeAssets, Tags, Quellen, aktueller Arbeitskontext>.
Aufgabe: Verdichte/Finde wiederverwendbare Bausteine mit Quellenbindung.
Liefere: {asset_summary, source_refs[], reuse_fit_for_context, version}.
Verbote: kein Cross-Tenant ohne Gate, keine verdichtung ohne Quelle.
```

**F3 — Workspace-Context-Block:**
```
Kontext: <aktives Objekt (Account/Opportunity/Asset), gewählter AI-Skill>.
Aufgabe: Erzeuge einen editierbaren Canvas-Draft + Explanation-Panel.
Liefere: {draft, explanation, sources[], confidence, approval_required: true}.
```

**F5 — Tender-Context-Block:**
```
Kontext: <Tender-Rohquelle (TED/eForms/service.bund), Firmenprofil, Referenzen (F2), Kapazität (F6)>.
Aufgabe: Strukturiere den Tender und bewerte den Fit.
Liefere: {cpv[], deadlines[], lots[], eligibility[], required_docs[], match_score, match_rationale[], sources[]}.
Verbote: kein autonomes Einreichen; keine Zusage „Compliance vollständig"/„Vergabesicherheit".
```

**F6 — Deliverability-Context-Block:**
```
Kontext: <Opportunity/Tender, Pool-Statistik aus ConsultantProfiles (aggregiert), Availability, Allocation, Pipeline>.
Aufgabe: Leite die anonyme Team-Shape ab + liefere aggregierten Kapazitäts-Forecast.
Liefere: {team_shape:{headcount, role_profiles[], skill_types[], seniority_mix}, skill_coverage[], skill_gaps[], forecast_aggregated, rationale[], confidence}.
Regel: NIEMALS namentliche Personen. AGGREGIERT (Team/Practice). Personenscharfes Matching erst Phase 1.5+ (works_council_mode==on UND Freigabe).
Verbote: keine Personennamen/-zuordnung; kein People-/Burnout-/Performance-Scoring; keine Black-Box-Rankings; keine Entscheidung ohne Begründung.
```

### 8.2 Reusable Prompt-/Skill-Blueprints (Phase-1-Set)

| Blueprint | Feature | Input → Output |
|---|---|---|
| `qualify-opportunity` | F1 | Signale → begründete Opportunity (Structured) |
| `find-warm-path` | F1 | Stakeholder-Graph → belastbarster Pfad + Begründung |
| `condense-asset` | F2 | Rohartefakt → quellengebundener Baustein |
| `match-reuse` | F2/F3 | Arbeitskontext → Top-Assets/Skills |
| `draft-proposal` | F4/F3 | Opportunity + Assets (+ anonyme Team-Shape) → strukturierter, quellengebundener Proposal-Entwurf (intern) |
| `ingest-tender` | F5 | TED/eForms-Quelle → strukturierter Tender (CPV/Fristen/Lose/Eignung) + Match-Score |
| `shape-team` | F6 | Opportunity/Tender + Pool-Statistik → **anonyme Team-Shape** (Anzahl, Skill-/Profil-Typen, Seniority-Mix, Rollen) — keine Personen |
| `forecast-capacity` | F6 | Allocation + Pipeline → aggregierter Kapazitäts-/Auslastungs-Forecast (personenscharf erst Phase 1.5+ mit Gate) |
| `explain-recommendation` | F3 | beliebige Empfehlung → Begründungskette + Quellen |

> Jeder Blueprint = versioniert, Owner, Kontext-Bindung, Audit. **Kein Prompt-Zoo.**

### 8.3 Integration-Hooks (Canvas-Sicht)

```
[M365 Mail/Cal] ─read→ F1 Signals
[DMS/SharePoint] ─read→ F2 Capture
[GitHub/GitLab] ─read→ F2 Assets (Repo-Templates/Skripte)
[CRM] ─import→ F1 Accounts/Stakeholder
   (alle: Vorschlag, nie auto-verbindlich)
```

### 8.4 Werbe-Canvas — Phase-1-Hauptfunktionen auf breiter Basis

> Für Sales/Design-Partner. Eine Zeile pro Hauptfunktion, Nutzen-zuerst.

- **Account Growth** — *„Sieh Bestandskunden-Chancen früher — mit Begründung statt Bauchgefühl."*
- **Knowledge & Reuse** — *„Nie wieder bei null anfangen: dein Firmenwissen, wiederverwendbar und quellengebunden."*
- **AI Workspace** — *„Ein Copilot, der erklärt und dir die Kontrolle lässt — nichts passiert ohne deine Freigabe."*
- **Proposal Draft** — *„Von der Chance zum ersten Angebotsentwurf in Minuten — quellengebunden, intern, editierbar."*
- **Tender Ingest** — *„Passende öffentliche Ausschreibungen früh erkennen und strukturiert bewerten — ohne Vergabe-Blindflug."*
- **Deliverability-Check** — *„Können wir das liefern? Welches Team-Profil es braucht (Anzahl, Skills, Seniority) und ob die Kapazität reicht — anonym, aggregiert, betriebsratsfest."*
- **Symbiose** — *„Chancen, die ihre Begründung aus eurem echten Wissen ziehen. Mit einem Audit-Strom, der auch dem Betriebsrat standhält."*

---

## 9. Visuelle Canvas (Flow- & Integrations-Diagramm)

> Markdown ist die Source of Truth; das Mermaid-Diagramm unten ist die eingebettete visuelle Sicht. Eine kollaborative **FigJam-Variante** desselben Diagramms kann zusätzlich erzeugt werden (siehe Hinweis am Ende).

```mermaid
flowchart LR
  subgraph EXT[Integrationen · read-only/import]
    MAIL[M365 Mail/Cal]
    DMS[DMS/SharePoint]
    GIT[GitHub/GitLab]
    CRM[CRM optional]
    TED[TED/eForms · service.bund]
    HR[HR/Skill-Quelle · optional]
  end

  subgraph F1[F1 · Account Growth]
    SIG[Signal/Trigger]
    OPP[Opportunity]
    WP[Warm Path]
  end

  subgraph F4[F4 · Proposal Draft]
    PROP[Proposal-Entwurf · intern]
  end

  subgraph F5[F5 · Tender Ingest]
    TND[Tender · CPV/Fristen/Lose]
  end

  subgraph F6[F6 · Deliverability-Check]
    TEAM[TeamShape · anonym]
    FC[Forecast · aggregiert]
  end

  subgraph F2[F2 · Knowledge & Reuse]
    ASSET[KnowledgeAsset]
    SKILL[AI-Skill/Blueprint]
  end

  subgraph F3[F3 · AI Workspace]
    COP[Copilot + Canvas]
    REC[Recommendation+Explanation]
  end

  subgraph B[Backbone]
    APP[Approval-Card]
    GATE{{Works-Council-Mode · Gate}}
    AUD[(Audit Trail)]
  end

  MAIL --> SIG
  CRM --> F1
  DMS --> ASSET
  GIT --> ASSET
  TED --> TND
  HR --> TEAM

  SIG --> COP
  TND --> COP
  ASSET --> COP
  SKILL --> COP
  COP --> REC
  REC --> APP
  APP --> OPP
  APP --> ASSET
  WP --> OPP
  TND --> OPP
  OPP --> TEAM
  TEAM --> FC
  TEAM --> PROP
  FC -. Realismus-Check .-> PROP
  PROP --> APP
  GATE -. erst Phase 1.5+ bei Personenbezug .-> TEAM
  GATE -. erst Phase 1.5+ bei Personenbezug .-> FC
  APP --> AUD
  OPP -. re-score .-> COP
  ASSET -. update .-> COP
```

---

## 10. Offene Entscheidungen vor dem Build (bitte bestätigen)

1. ✅ **Scope-Hierarchie** (§0.1): Account Growth = erstes sichtbares Feature, Knowledge + AI Workspace als direkte Verstärker — **bestätigt 30.05.**
2. ✅ **Integration-Tiefe** (§6.2): Phase 1 nur read-only/import, kein Schreibzugriff/Versand, keine autonome Tender-Submission — **bestätigt 30.05.**
3. ✅ **Phase-1-Endartefakt**: Opportunity **+ Proposal Draft** (F4, kein Versand) — **bestätigt & eingearbeitet 30.05.** (§2.7)
4. ✅ **Personenbezug (Works-Council-Default)**: **revidiert 12.06. (T6)** — Works-Council-Mode = **AUS** (Default-OFF); F6 bleibt aggregiert/anonym; der Schalter gated personenbezogene Auswertung + Auto-Feed bei Kunden mit Betriebsrat (§4A.3).
5. ✅ **Canvas-Form**: Mermaid (eingebettet) reicht vorerst; FigJam auf Zuruf — **entschieden 30.05.**
6. ✅ **Tender in Phase 1, F6 geschnitten** (§4A): **bestätigt 30.05.** — F5 (Tender Ingest) bleibt; **F6 → Option A**: nur aggregierter Deliverability-Check als Bid-Gate, **kein personenscharfes Matching** (volles Staffing/Forecasting → Phase 1.5+).
7. ✅ **Headline-Wedge & GTM** (→ [GTM-Decisions v1.0](./Consultry-GTM-Decisions-v1.0.md)): **bestätigt 30.05.** — Job = *Projekt-Wachstum & -Akquise*; F3 = Spine; Tender + Bestandskunden = zwei Intake-Oberflächen; **Bestandskunden öffnet die Tür, Tender = Big Swing**; ICP = mid-to-small zuerst; OS = Vision, nicht Headline.
8. ✅ **Bestandskunden-Mechanik & F1-Hero** (§2.3): **bestätigt 30.05.** — intelligentes CRM über loser Basis (kein CRM nötig); Hero-Signal = **Vertrags-Options-/Verlängerungsfenster, quellengebunden**.
9. ✅ **Pricing & Markt** (→ GTM-Decisions §3.3–§4): **bestätigt 30.05.** — **seat-only** (Win-Fee gestrichen); **DE+AT ab Tag 1, CH verschoben**; 3–5 Design-Partner mit niedriger Pilot-Gebühr.

> **Alle Phase-1-Scope- und GTM-Kern-Entscheidungen bestätigt (Stand 30.05.).** Offene GTM-Detailpunkte (Onboarding-Ritual, AT/CH-Reichweite, Design-Partner-Ziel, Win-Fee-Mechanik) sind in [GTM-Decisions §8](./Consultry-GTM-Decisions-v1.0.md) als G1–G5 getrackt. Nächster Schritt: Verfeinerung je Feature in Build-Tickets.

---

*Ende v1.0 — Draft zur Bestätigung. Nach Freigabe: Verfeinerung je Feature in eigene Build-Tickets + FigJam-Canvas.*
