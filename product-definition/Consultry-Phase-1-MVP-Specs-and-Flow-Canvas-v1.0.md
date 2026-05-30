# Consultry — Phase 1 MVP: Feature-Specs, Flow-Sammlung & AI-Context-Canvas v1.0

## Giga-sharpened Specs für die ersten Funktionen

**Status:** Draft zur Scope-Bestätigung
**Datum:** 30. Mai 2026
**Scope:** Phase 1 (MVP) — die drei ersten Kernfunktionen + verpflichtender Backbone
**Bezug:** [PRD v4.0](./Consultry-PRD-v4.0-DACH-Operating-System.md), [Product Document v1.0](./Consultry-Product-Document-v1.0.md), [Module Refinement v1.0](./Consultry-Module-Refinement-v1.0.md), [User Journeys v1.0](./Consultry-User-Journeys-v1.0.md), [Target Personas v1.0](./Consultry-Target-Personas-v1.0.md)

> **Lesehinweis.** Dieses Dokument schärft bewusst **nur die ersten Funktionen** (Phase 1) und lässt Phase 2/3 außen vor. Es ist die Brücke zwischen Produktstrategie (Wedges, Module) und Build (Surfaces, Objekte, AI-Verhalten, Prompts). Drei Spec-Kapitel (eines pro Feature), je eine **Flow-Sammlung** (konkret + abstrakt/AI-dynamisch), dann **Cross-/Integration-Flows**, **Symbiose-Features** und der **Spec/AI-Context + Prompt-Engineering Collab-Canvas**.

---

## 0. Phase-1-Scope — zur Bestätigung

### 0.1 Was in Phase 1 giga-geschärft wird (diese drei + Backbone)

| # | Feature (Modul) | Rolle in Phase 1 | Wedge-Bezug |
|---|---|---|---|
| **F1** | **Account Growth System** | Primärer Kaufgrund. Bestandskunde → Signal/Trigger → qualifizierte Opportunity. | Primär-Wedge: *Bestandskunden-Expansion & Proposal* |
| **F2** | **Knowledge & Reuse System** | Verstärker. Wiederverwendbare Referenzen, Methoden, Assets, AI-Skills mit Quellenbindung. | Verstärker-Wedge: *Wissenstransfer, Reuse & Readiness* |
| **F3** | **AI Workspace** | Die AI-native Interaktions- und Empfehlungsschicht über F1 + F2. | Querschnitt: macht F1+F2 erst „AI-native" |
| **B** | **Approvals + Governance/Audit Backbone** | **Kein eigenes verkaufbares Feature**, sondern verpflichtender Querschnitt unter F1–F3. | Produkt-Default (DACH-Compliance) |

> **Bestätigung erbeten (1):** Account Growth ist der Primär-Wedge und damit das *erste sichtbare* Feature; Knowledge & AI Workspace sind in Phase 1 dabei, weil sie den Primär-Wedge direkt glaubwürdiger machen — **nicht** als eigenständige Backoffice-Suiten. Passt diese Hierarchie?

### 0.2 Was Phase 1 bewusst NICHT ist

- Kein Staffing-/Forecasting-Engine (Consultant/Capacity System → Phase 2)
- Kein Proposal-Generator mit Send-Out, kein Contract Drafting (→ Phase 2)
- Kein Time/Expense, kein Invoice Prep, kein DATEV/ELSTER-Handoff (→ Phase 3)
- Kein Tender-Ingest, kein Net-New-Prospecting, kein People-Scoring
- Kein offener Prompt-Marktplatz ohne Governance

Phase 1 endet definiert beim Artefakt **„qualifizierte, begründete, freigegebene Opportunity inkl. verknüpfter Reuse-Assets"** — nicht beim sendefertigen Proposal.

### 0.3 Phase-1-Erfolgssignale (aus Product Document v1.0)

- Bestandskundenchancen werden **früher und strukturierter** sichtbar.
- Wissensbausteine verkürzen Proposal-/Onboarding-Vorbereitung **messbar**.
- AI-Empfehlungen werden als **brauchbare Entscheidungshilfe** akzeptiert (nicht als Black Box).
- Design Partner verstehen den Kaufgrund **in wenigen Minuten**.

---

## 1. Gemeinsame Fundamente (gelten für F1–F3)

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
| `WarmPath` | F1 | belastbarer Beziehungspfad zu einem Stakeholder |
| `KnowledgeAsset` | F2 | Referenz/Methode/Report/Skript/Runbook/Blueprint, versioniert, mit Source |
| `AISkill` / `Workflow-Blueprint` | F2/F3 | wiederverwendbare AI-native Arbeitsfähigkeit (Prompt + Kontext + Owner + Version) |
| `Recommendation` | F3 | AI-Vorschlag mit Explanation, Sources, Confidence, Status |
| `ApprovalEvent` | B | Freigabe/Ablehnung/Edit mit Wer/Wann/Warum |
| `AuditRecord` | B | unveränderliche Spur über alle obigen |

### 1.3 Rollen (Phase 1, vereinfacht)

- **Account/BD Lead** — Haupt-Operator von F1.
- **Practice Lead** — qualifiziert Opportunities, kuratiert Knowledge.
- **Senior Consultant** — Knowledge-Contributor, AI-Skill-Autor.
- **Managing Partner** — „Scan-Entscheider"-Modus: Cockpit + Approval-Cards.
- **Works-Council-Mode** — schaltet personenbezogene Sichten global ab/auf (Default: aus).

### 1.4 Phase-1-Oberflächen (Surfaces)

- **Cockpit / Dashboard** (Basis) — rollenbasierter Einstieg, Top-Signale, offene Approvals.
- **Notification Center** (P0/P1) — priorisierte Trigger & Freigaben.
- **Opportunity Detail / Approval-Card** — das zentrale Entscheidungsobjekt.
- **Knowledge Workspace** — Suche, Asset-Detail, Reuse-Aktion.
- **AI Copilot (Basis)** — kontextgebundener Assistent als Querschnitt-Surface.

---

## 2. Feature-Spec F1 — Account Growth System

### 2.1 One-Liner

> *Macht aus verstreuten Bestandskunden-Signalen früh und strukturiert eine **qualifizierte, begründete Opportunity** — mit nachvollziehbarem Warm Path und verknüpften Reuse-Assets.*

### 2.2 Job-to-be-done

`Welches Folgegeschäft ist bei welchem Bestandskunden gerade realistisch, warum, und über welchen Weg gehen wir es an?`

### 2.3 In-Scope (Phase 1)

- Account- & Stakeholder-Modell mit Tenant-Isolation.
- **Signal/Trigger-Erfassung**: nativ (manuell, Notiz) + integriert (E-Mail/Kalender/DMS read-only, optional CRM-Import).
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
- „Früher sichtbar"-Quote: Anteil Chancen, die vor dem üblichen manuellen Erkennen aufpoppen.

---

## 3. Feature-Spec F2 — Knowledge & Reuse System

### 3.1 One-Liner

> *Verwandelt vorhandenes Projektwissen, Delivery-Artefakte und AI-Skills in **auffindbare, wiederverwendbare, quellengebundene Bausteine** — damit Proposal- und Onboarding-Vorbereitung nicht jedes Mal von vorn startet.*

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

## 5. Flow-Sammlung (pro Feature: konkret + abstrakt/AI-dynamisch)

> Zwei Ebenen pro Feature: **Konkrete Flows** (deterministisch, klickbar) und **abstrakte/dynamische AI-Flows** (high-level, nicht-deterministisch, weil der Copilot Reihenfolge & Tiefe selbst wählt). Die abstrakten Flows sind absichtlich als *Capability-Schleifen* statt fixe Screens beschrieben.

### 5.1 Account Growth — konkrete Flows

1. **Signal → Opportunity (Happy Path)**: Signal landet → Cockpit/Notification → öffnen → AI-Qualifizierung lesen → editieren → freigeben → Opportunity aktiv.
2. **Manuelles Signal erfassen**: BD legt Notiz/Trigger an → AI schlägt Opportunity-Hypothese vor.
3. **Warm-Path-Lookup**: Account öffnen → „wer kennt wen" → belastbarsten Pfad markieren.
4. **White-Space-Review**: Account-Detail → fehlende Leistungen → Chance erzeugen.
5. **Opportunity ablehnen/zurückstellen**: Approval-Card → „nicht jetzt" mit Grund → Audit.
6. **Trigger-Triage (MP-Modus)**: Managing Partner scannt nur Approval-Cards → freigeben/ablehnen.

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

---

## 6. Cross- / Integration-Flows

### 6.1 Interne Cross-Flows (F1 ↔ F2 ↔ F3)

- **CF-1 — Signal → Reuse → Opportunity**: F1-Signal triggert F3-Copilot, der F2-Assets zieht und eine *belegte* Opportunity baut.
- **CF-2 — Opportunity → Knowledge-Gap**: Beim Qualifizieren erkennt F3 fehlendes Wissen und legt in F2 einen Capture-Task an.
- **CF-3 — Asset-Update → Re-Score**: Neues/aktualisiertes F2-Asset lässt F3 betroffene F1-Opportunities neu bewerten.
- **CF-4 — Approval überall**: Jede Übernahme in F1/F2 aus F3 läuft durch denselben Backbone-Approval (B) → ein Audit-Strom.

### 6.2 Externe Integration-Flows (Phase 1: read-only / Import-first)

| Quelle | Phase-1-Rolle | Richtung |
|---|---|---|
| E-Mail / Kalender (M365) | Signal- & Warm-Path-Input | read-only |
| DMS / SharePoint | Knowledge-Capture-Quelle | read-only |
| GitHub / GitLab | Repo-Templates/Skripte als Assets | read-only (Quelle) |
| CRM (optional) | Account-/Stakeholder-Import | Import |
| Jira (optional) | schwache Delivery-Signale | read-only |

> **Source-of-Truth-Regel (Phase 1):** Consultry führt `Account`, `Opportunity`, `KnowledgeAsset`, `AISkill` **nativ**. Alles aus Integrationen ist **Vorschlag/Input**, nie automatisch verbindlicher Datensatz. DATEV/ELSTER/Time/Invoice: bewusst **nicht** in Phase 1.

> **Bestätigung erbeten (2):** Sind in Phase 1 wirklich nur **read-only / Import** Integrationen gewollt (kein Schreibzugriff nach außen, kein Mailversand aus dem Produkt)?

---

## 7. Symbiose-Features (entstehen erst durch F1+F2+F3 zusammen)

Diese Features sind **emergent** — sie sind kein viertes Modul, sondern der eigentliche „AI-native"-Beweis:

1. **Begründete Opportunity mit Reuse-Belegen** — eine Chance, die ihre Begründung *aus echtem Firmenwissen* zieht (F1×F2×F3). Das ist der Demo-Moment.
2. **Self-enriching Knowledge** — jede freigegebene Opportunity macht Assets sichtbarer/besser getaggt (Nutzung verbessert Reuse).
3. **Explain-anything** — überall im Produkt „warum?" fragen → erklärte, quellengebundene Antwort.
4. **Context-aware Skill-Suggestion** — der richtige AI-Skill wird im richtigen Moment vorgeschlagen, nicht gesucht.
5. **Single Audit Stream** — eine durchgehende, mitbestimmungsfähige Spur über Wissen, Empfehlung und Entscheidung (Verkaufsargument für MP/COO/Betriebsrat).

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

### 8.2 Reusable Prompt-/Skill-Blueprints (Phase-1-Set)

| Blueprint | Feature | Input → Output |
|---|---|---|
| `qualify-opportunity` | F1 | Signale → begründete Opportunity (Structured) |
| `find-warm-path` | F1 | Stakeholder-Graph → belastbarster Pfad + Begründung |
| `condense-asset` | F2 | Rohartefakt → quellengebundener Baustein |
| `match-reuse` | F2/F3 | Arbeitskontext → Top-Assets/Skills |
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
  end

  subgraph F1[F1 · Account Growth]
    SIG[Signal/Trigger]
    OPP[Opportunity]
    WP[Warm Path]
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
    AUD[(Audit Trail)]
  end

  MAIL --> SIG
  CRM --> F1
  DMS --> ASSET
  GIT --> ASSET

  SIG --> COP
  ASSET --> COP
  SKILL --> COP
  COP --> REC
  REC --> APP
  APP --> OPP
  APP --> ASSET
  WP --> OPP
  APP --> AUD
  OPP -. re-score .-> COP
  ASSET -. update .-> COP
```

---

## 10. Offene Entscheidungen vor dem Build (bitte bestätigen)

1. **Scope-Hierarchie** (§0.1): Account Growth = erstes sichtbares Feature, Knowledge + AI Workspace als direkte Verstärker — ok?
2. **Integration-Tiefe** (§6.2): Phase 1 nur read-only/import, kein Schreibzugriff/Versand — ok?
3. **Phase-1-Endartefakt**: „qualifizierte, begründete, freigegebene Opportunity + verknüpfte Assets" — reicht das als Demo-Beweis, oder muss schon ein Proposal-Stub rein?
4. **Personenbezug**: Works-Council-Mode Default = aus (alle personenbezogenen Stakeholder-Einschätzungen gated) — ok?
5. **Canvas-Form**: Mermaid (eingebettet) + zusätzlich FigJam — soll ich die FigJam-Variante jetzt generieren?

---

*Ende v1.0 — Draft zur Bestätigung. Nach Freigabe: Verfeinerung je Feature in eigene Build-Tickets + FigJam-Canvas.*
