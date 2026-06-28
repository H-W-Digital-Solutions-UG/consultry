# Flows — Opportunity, Proposal & Contract

> **⚠️ ARCHIVIERT (12.06.2026 — [MVP-Foundation-Decisions v1.0](../../Consultry-MVP-Foundation-Decisions-v1.0.md), T1).** Diese Spec gehört zur „Win-and-Deliver"-Generation (Gen A) und ist **kein MVP-Scope**. Verbindlich: [MVP-PRD v1.0](../../Consultry-MVP-PRD-v1.0.md) (Acquisition-to-Bid) + Foundation-Decisions. Persona-/Outcome-Tabellen dürfen als UX-Input wiederverwendet werden (Salvage, Foundation-Decisions §4). Nicht als Quelle der Wahrheit verwenden.

**Modul-ID:** `02-opportunity-proposal-contract`
**Bezug:** [spec.md](./spec.md), [Roadmap §3.1 MVP-Loop](../../business-definitions/Consultry-Roadmap-v1.0-MVP-and-Phasing.md), [PRD v5.0 §3 Operators / §6 Approval](../../technical-definitions/Consultry-PRD-v5.0-Software-Layered.md)

Drei Sichten auf Flows:

1. **Konkrete UI-Flows** — deterministische Click-Pfade mit Schritten, Akteur:in, Output, Approval-Punkt. (§A)
2. **Abstrakte AI-Flows** — Intent → Capability → Outcome. Beschreibt, *was möglich ist*, nicht *welche Buttons gedrückt werden*. So bleibt das System AI-nativ verständlich auch wenn UI sich ändert. (§B)
3. **Conversation Patterns** — exemplarische Dialoge zwischen Consultant und dem AI-Workspace, der das Modul orchestriert. Demonstriert die dynamische, nicht-linearen Pfade. (§C)

---

## §A — Konkrete UI-Flows

### F1 — Trigger-to-Send-Ready (Happy Path)

**Akteur:** Katrin (BD-Leiterin), Eskalation an Thomas (MP).
**Annahme:** Trigger ist in Account Growth detektiert und qualifiziert worden.
**Ziel:** Aus Trigger wird ein sende-ready Proposal in <4 h.

| # | Step | Akteur | UI-Ort | Operator | Output | Approval |
|---|---|---|---|---|---|---|
| 1 | Trigger-Übergabe öffnen | Katrin | Notifications / Account-View | — | Pre-filled Opportunity-Karte | — |
| 2 | Opportunity bestätigen | Katrin | Opportunity-Intake-Modal | — | `Opportunity` (stage=Intake) | — |
| 3 | Engagement Brief generieren | Katrin | Opportunity-Workspace | `Draft` | `EngagementBrief` (state=Draft) | Inline |
| 4 | Brief reviewen + Edits | Katrin | Brief-Editor (Side-by-Side: Source-Bindings rechts) | — | Brief v2 | Inline-Approve |
| 5 | Skill-Requirements aus Brief ableiten | System (auto-trigger nach Approval) | Requirements-Liste | `Classify` | `SkillRequirement[]` | Inline |
| 6 | Requirements feintunen | Katrin | Requirements-Liste | — | finale Liste | Inline-Approve |
| 7 | Staffing-Vorschlag erzeugen | Katrin | Staffing-Tab | `Plan` + `Suggest` | `StaffingProposal` + Alternativen | Queue (High-Risk) |
| 8 | Approval-Gate Staffing | Thomas | Approval-Queue | — | freigegebenes Staffing | gesetzt |
| 9 | Tailored CVs generieren | Katrin | Proposal-Tab | `Draft` | `TailoredCV[]` (n=Staffing-Größe) | Queue (High-Risk) |
| 10 | Approval-Gate CVs (Batch) | Thomas | Approval-Queue (Bulk-View) | — | freigegebene CVs | gesetzt |
| 11 | Pricing-Frame berechnen | Katrin | Pricing-Tab | `Suggest` (Template) + `Read` (Costs) | `PricingFrame` mit Margen | Inline |
| 12 | Varianten Lean/Standard/Premium fächern | Katrin | Variant-Switcher | `Plan` (Scope-Modulation) | 3 ProposalVariants | Inline pro Variante |
| 13 | Variante zur Externalisierung wählen | Katrin | Variant-Switcher → „Senden vorbereiten" | — | wahl-markierte Variante | — |
| 14 | ContractDraft erzeugen | Katrin | Contract-Tab | `Suggest` (Klauseln) + `Review` (Diff) | `ContractDraft` + `ClauseDiff[]` | Queue (Vertrag) |
| 15 | Approval-Gate Vertrag | Thomas | Approval-Queue mit Klausel-Diff-View | — | freigegebener Draft | gesetzt |
| 16 | Send-Ready Paket bauen | Katrin | „Senden"-Button | `Draft` (Cover-Mail) | Proposal-PDF + Vertrag-Signaturlink + Anhänge | Inline (Cover) |
| 17 | Versand initiieren | Katrin | Send-Modal | — | E-Mail mit Signatur-Link an Kundenseite | — |
| 18 | Stage → Negotiated | System | — | — | `Opportunity.stage=Negotiated` | — |

**Audit-Endpunkt:** jeder Schritt 1–18 schreibt in Audit-Log mit Akteur, Zeitstempel, Operator-Version, Input-Hash, Approver.

---

### F2 — Manueller Opportunity-Intake (kein Trigger)

**Akteur:** Katrin nach Live-Gespräch mit Kunden.
**Ziel:** Quick-Capture ohne Brief-Pflicht.

```
Schritt 1  →  Account auswählen (Suche oder Account-View "+ Opportunity")
Schritt 2  →  Stakeholder wählen (Default = bekannter Hauptkontakt)
Schritt 3  →  Ein-Satz-Beschreibung (free text, Pflicht)
Schritt 4  →  "Speichern"  →  Opportunity.stage=Intake, alles weitere optional

Optional: weiter zu F1 ab Step 3 (Engagement Brief erzeugen aus dem
   einen Satz + Account-Kontext + ggf. Mitschrift)
```

**Wichtig:** Wenn `Trigger` fehlt, ist die `Brief`-Generierung trotzdem möglich — Quellen sind Account-Historie, ähnliche historische Opportunities, evt. via Workspace hochgeladene Mitschrift. Konfidenz wird niedriger ausgewiesen.

---

### F3 — Re-Staffing nach Approval (Berater fällt aus)

**Trigger:** Berater Stefan signalisiert in Capacity „nicht verfügbar ab 2026-06-10" — Allocation-Modul detektiert Konflikt mit approved StaffingProposal.

```
Capacity-Event "Stefan unavailable" 
   ↓
System checkt: hat Stefan offene Allocations oder approved Staffings?
   ↓ ja
Opportunity.staffing_proposal.status = "Re-Staffing required"
   ↓
Notification an Katrin: "Staffing von [Opportunity X] braucht Re-Look"
   ↓
Katrin öffnet Staffing-Tab — System hat Alternativ-Kandidaten vor-vorgeschlagen
   ↓
Katrin wählt Ersatz; ggf. neue TailoredCV erforderlich
   ↓ (zurück in Approval-Queue für Re-Approval — High-Risk-Pfad gilt)
Thomas approvet
   ↓
Wenn Vertrag noch nicht extern gesendet: Update on the fly
Wenn extern gesendet aber nicht signiert: Versions-Bump + erneute Send-Ready  →  Re-Send mit Hinweis
Wenn signiert: Eskalation an Allocation & Delivery (Change-Request-Prozess) — out-of-scope dieses Moduls
```

---

### F4 — Variant-Vergleich und Auswahl

**Akteur:** Katrin entscheidet welche Variante sie sendet; Thomas approvet die Wahl.

UI: Side-by-Side-Tabelle mit den drei Varianten in Spalten.

```
Spalten:           Lean              Standard          Premium
─────────────────────────────────────────────────────────────────
Outcome-Scope      Verkleinert       Brief 1:1         Erweitert
Dauer              4 Wochen          8 Wochen          12 Wochen
Team-Größe         2 (1 Sr, 1 Md)    3 (1 Sr, 2 Md)    4 (1 Pr, 2 Sr, 1 Md)
Pricing-Modell     T&M               T&M               FixedPrice + Risiko
Computed Margin    32 %              28 %              35 %
Win-Probability    (Phase 1b)        (Phase 1b)        (Phase 1b)
[Senden]           [Senden]          [Senden]
```

Klick auf „Senden" einer Variante → markiert sie als `selected_variant`, andere bleiben als Verhandlungs-Hebel im System (Katrin kann später wechseln, neu generieren wenn Brief sich ändert).

---

### F5 — Klausel-Abweichung Approval

**Auslöser:** ContractDraft enthält 1+ Klauseln mit `ClauseDiff` gegenüber Library-Standard.

```
Thomas öffnet Approval-Queue 
   ↓
Vertrag-Eintrag zeigt: "3 Klauseln weichen ab"
   ↓ klick
Klausel-Diff-View:
   Klausel 4.1 Haftung
      Standard:  "Haftung beschränkt auf Auftragswert"
      Vertrag:   "Haftung beschränkt auf 1.5× Auftragswert"
      Begründung (Operator): "Kunde verlangt erhöhten Cap als Verhandlungspunkt"
      Source:    [Mitschrift Anruf 2026-05-22, line 142]
   ↓
Thomas Optionen:
   [Approve as-is]   [Revert to Standard]   [Edit further]   [Eskalation an Legal]
   ↓
Bei "Eskalation an Legal": Status → ReviewedExternalCounsel-Pending,
   System pingt Legal-Asset (im MVP: Mail an Inhouse-Counsel oder externe Kanzlei)
```

---

### F6 — Lost Opportunity → Lessons Learned

**Trigger:** Opportunity wird auf `Lost` oder `Abandoned` gesetzt.

```
Katrin setzt Opportunity → Lost / Abandoned
   ↓
Pop-up (nicht skippable bei Lost):
   "Warum verloren?"
      [ ] Preis           [ ] Timing          [ ] Methodik
      [ ] Team / CVs      [ ] Konkurrenz      [ ] Stakeholder-Wechsel
      [ ] Andere → freitext
   "Was lernen wir?"
      Freitext + Auto-Suggest aus Diff-Analyse 
        (Operator: Summarise + Suggest, "Welche Schritte in Brief/Staffing/Pricing
         haben am ehesten zum Verlust geführt?")
   ↓
LessonsLearned-Knoten erzeugt → Knowledge & Reuse
LessonsLearned ist verlinkt mit: Opportunity, Account, betroffene Berater (mit BetrVG-Mode-Gate)
```

**BetrVG-Heavy-Mode-Gate:** Wenn Beratung BetrVG-Heavy aktiviert hat, dürfen Lessons mit Personenbezug (Berater X war Faktor) nur in aggregierter Form (anonymisiert) ins Knowledge fließen — Personenbezug-Lessons gehen in einen separaten Audit-only-Bereich.

---

### F7 — Re-Negotiation Iteration

**Trigger:** Kunde antwortet auf Proposal mit Änderungswünschen.

```
Kunden-Mail kommt extern (Outlook) — Katrin liest, entscheidet
   ↓
Katrin öffnet Opportunity, klickt "Iteration" 
   ↓
Workspace bietet:
   [a] Brief ändern (Scope-Änderung) → re-trigger Skill-Req, Staffing, CVs, Pricing, Contract
   [b] Pricing-Frame ändern (nur Preis) → re-trigger Pricing + Contract
   [c] Team ändern (Staffing-Anpassung) → re-trigger Staffing, CVs, Contract
   [d] Contract-Klausel ändern → nur Klausel-Diff aktualisieren
   ↓
Je nach Pfad: betroffene Artefakte werden mit Versions-Bump neu erzeugt; 
   Approval-Gates kicken wieder rein soweit Artefakte das brauchen
   ↓
Iterations-Counter sichtbar: "Iteration 3 / Vorherige: v2 (Pricing+5%), v1 (Initial)"
```

**Bewusst nicht-linear:** Iterations können beliebig oft passieren. State-Machine erlaubt Rück-Schritte (`Negotiated` → `Briefed` → `Negotiated`).

---

## §B — Abstrakte AI-Flows: Intent → Capability → Outcome

Diese Sicht beschreibt das Modul nicht als Click-Pfade sondern als Sammlung von **Intents**, die der Consultant ans System richten kann, und welche **Capabilities** das System für welche **Outcomes** in welcher Reihenfolge orchestriert.

Sie ist bewusst non-deterministisch — der AI-Workspace kann die gleiche Outcome auf unterschiedlichen Pfaden erreichen.

### B1 — Capability-Inventar (was kann das Modul)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     Modul-Capability-Surface                                 │
│                                                                              │
│   Read           : alle Entities, Source-bound                              │
│   Classify       : Free-Text → Skill-Taxonomie / Klausel-Typ / Pricing-Mod  │
│   Suggest        : nächste Berater / Klauseln / Pricing-Templates           │
│   Summarise      : Kunden-Historie, Vorgespräche, Markt-Kontext             │
│   Draft          : EngagementBrief, TailoredCV-Sections, Cover-Mail         │
│   Review         : Klausel-Diff gegen Library, CV gegen Engagement Brief    │
│   Plan           : StaffingProposal, Varianten-Fächerung Lean/Std/Prem      │
│                                                                              │
│   ┌──────────── verboten v1 (PRD v5.0 §3) ──────────────┐                  │
│   │ Tool-Orchestrate (Modell ruft Modell ohne Approval) │                  │
│   │ Auto-Execute (Aktion ohne expliziten Approval-Gate) │                  │
│   └──────────────────────────────────────────────────────┘                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

### B2 — Intent-Mapping (was Consultants wollen)

```
Intent: "Aus diesem Trigger soll bis Freitag ein sende-fertiges Proposal werden"
   │
   ├─ Capability-Chain (Default, deterministisch):
   │     Read(Trigger, Account, Stakeholder, AccountHistory) 
   │        → Summarise(Vorgeschichte)
   │        → Draft(EngagementBrief)
   │        → [Approval-Gate]
   │        → Classify(SkillRequirement)
   │        → [Approval-Gate]
   │        → Read(Capacity) + Plan(StaffingProposal) + Suggest(Alternativen)
   │        → [Approval-Gate, High-Risk]
   │        → Draft(TailoredCV × n)
   │        → [Approval-Gate, High-Risk]
   │        → Suggest(PricingTemplate) + Read(Costs) → compute(Margin)
   │        → [Approval-Gate]
   │        → Plan(Varianten-Fächerung)
   │        → Suggest(Klauseln) + Review(Diff zur Library)
   │        → [Approval-Gate, Vertrag]
   │        → Draft(CoverMail) + assemble(Send-Paket)
   │
   ├─ Capability-Chain (Alternative, Verhandlung-First):
   │     Read(...) → Summarise(...) → Plan(3 Varianten direkt aus Trigger ohne Brief)
   │        → Diskussion intern (Operator: Suggest)
   │        → Auswahl Variante → vorwärts ab Brief-Schritt
   │
   └─ Capability-Chain (Alternative, Staffing-First):
         Read(Capacity-Engpässe) → identifiziere wen wir staffen können
            → Match Trigger gegen Verfügbarkeit
            → Plan Staffing dann zurück zu Brief
```

### B3 — Intent → Outcome-Diagramm (kompakt)

```
                  Intents (vom Consultant)
                          │
   ┌──────────────────────┼──────────────────────────────┐
   │                      │                              │
"Brief erstellen"   "Wer passt?"            "Was würde sich rechnen?"
   │                      │                              │
   ▼                      ▼                              ▼
[Draft]              [Plan+Suggest]                 [Suggest+Read]
+ Source-Bind        + Capacity-Match               + Cost-Read
   │                      │                              │
   ▼                      ▼                              ▼
EngagementBrief     StaffingProposal               PricingFrame
   │                      │                              │
   └──────────► [Approval-Gates je nach Risiko] ─────────┘
                          │
                          ▼
                 Outcome: send-ready Proposal
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
           [Won]                   [Lost]
              │                       │
              ▼                       ▼
          Project          LessonsLearned → Knowledge
        (Allocation)       (mit BetrVG-Gate)
```

### B4 — Dynamische Pfade: was darf das System selbst entscheiden?

Das System darf **ohne expliziten Approval-Gate**:
- Reihenfolge der Capability-Aufrufe innerhalb einer Chain optimieren (z. B. Skill-Requirement und Pricing parallel statt sequentiell).
- Vorgeschlagene Quellen für Source-Binding aus der Knowledge-Library wählen (so lange jede Behauptung gebunden ist).
- Bei niedriger Confidence einen Operator wiederholen mit reformulierten Inputs (max 3× — danach Hand-Off an Consultant).

Das System darf **nicht** ohne expliziten Approval-Gate:
- Eine Variante auswählen und „die ist die richtige" markieren.
- Einen Operator-Output direkt extern senden.
- Klauseln „from scratch" produzieren (immer aus Library).
- Personenbezogene Bias-Erkenntnisse als Output ausgeben (nur Aggregate).

---

## §C — Conversation Patterns (AI Workspace ↔ Consultant)

Diese Dialoge sind illustrative Pattern, nicht Skript-Vorlagen. Sie zeigen wie der Workspace das Modul bedient — und wo Approval-Gates die Konversation strukturieren.

### C1 — „Wir haben einen Trigger, mach was draus" (Happy-Path-Conversation)

> **Katrin:** Müller-AG hat einen Restrukturierungs-Bedarf signalisiert. Mach mal Vorschlag.
>
> **AI-Workspace:** Ich finde drei relevante Quellen — die Trigger-Notiz von Stefan vom 22.05., einen Termin mit Frau Schulz (CFO Müller) vor 6 Wochen, und unsere letzten zwei Projekte bei Müller. Soll ich einen Engagement Brief draften?
>
> **Katrin:** Ja.
>
> **AI-Workspace:** *[generiert Brief, zeigt im Editor mit Source-Bindings rechts]* Brief-Entwurf ist bereit. Ich habe „IT-Carve-Out-Strategie" als Methodologie-Anker gewählt — wir hatten 2024 ein vergleichbares Projekt bei Heller-Gruppe. Outcome-Statement und Scope-Inclusions sind aus dem Stakeholder-Mitschnitt direkt zitiert. Stimmt dir das?
>
> **Katrin:** Setz „IT-Carve-Out" weg, das ist zu spezifisch. Müller will eher Sourcing-Strategie. Korrigier den Brief.
>
> **AI-Workspace:** Korrigiert. Neuer Methodologie-Anker: „IT-Sourcing-Strategie" (Knowledge-ID 314). Soll ich den Brief jetzt zur Approval freigeben? Danach kann ich Skill-Anforderungen ableiten und einen Staffing-Vorschlag bauen.
>
> **Katrin:** Approve und weiter.
>
> **AI-Workspace:** *[Approval gesetzt]* Skill-Anforderungen: 3 Skills, davon 2 Must-Have (Sourcing-Strategie Senior+, Vertragsverhandlung Mid+). Für Staffing schau ich Verfügbarkeiten in der KW 24–32 an. Möchtest du, dass ich auch das Pricing-Template parallel anfange?
>
> **Katrin:** Ja, mach parallel.
>
> **AI-Workspace:** *[zwei parallele Capability-Calls]* — Staffing-Vorschlag (Hauptvorschlag + 2 Alternativen) und PricingFrame liegen jetzt zur Approval bereit. Beide brauchen Thomas' Freigabe wegen High-Risk-Klassifizierung der Staffing-Empfehlung.
>
> **Katrin:** Schick rein.

**Was hier passiert:**
- Pattern „Conversational orchestration": Workspace führt die Capability-Chain, Katrin steuert Richtung.
- Pattern „Source-bound default": ohne dass Katrin nach Quellen fragt, werden sie ausgewiesen.
- Pattern „Approval-Gates bleiben sichtbar": der Workspace verspricht keine Externalisierung ohne Gate.

---

### C2 — „Was hat unser letzter Versuch hier gekostet?" (Cross-Reference-Conversation)

> **Katrin:** Wir hatten 2024 ein ähnliches Projekt bei Heller. Was haben wir damals bekommen?
>
> **AI-Workspace:** Heller-Gruppe 2024: T&M, 8 Wochen, 4 Berater (1 Pr, 2 Sr, 1 Md), Gesamtwert 142 k EUR, Margin 31 %. Win/Loss-Reason im Lessons-Learned: gewonnen wegen Methodologie-Tiefe, Pricing war 8 % über Konkurrenz. Soll ich das als Pricing-Anker für den Müller-Vorschlag nehmen?
>
> **Katrin:** Ja, aber adjust: Müller wird 6 Wochen wollen, nicht 8.
>
> **AI-Workspace:** Pricing rekalkuliert für 6 Wochen, gleiches Team-Profil: 106 k EUR T&M, Margin 30 %. Wenn du auf 28 % Margin runter willst um Verhandlungsspielraum zu haben, sind wir bei 99 k. Welche Variante kommt in die Lean / Standard / Premium-Fächerung?
>
> **Katrin:** 106 k als Standard, 90 k als Lean (kleinerer Scope), 130 k als Premium mit Coaching-Modul on top.
>
> **AI-Workspace:** Habe ich. Premium-Variante: für Coaching-Modul finde ich keinen passenden Berater im aktuellen Staffing-Pool. Möchtest du, dass ich Heike aus dem Coaching-Team hinzuziehe? Sie hatte 2024 die Heller-Coaching-Sessions.

**Pattern „Knowledge cross-pollination":** Modul nutzt Knowledge & Reuse direkt im Workspace ohne dass Katrin in ein anderes Tool wechselt.

---

### C3 — „Approval mit Klausel-Sorge" (Approval-Queue-Conversation)

> **Thomas:** Was ist mit der Müller-Verhandlung — was muss ich anschauen?
>
> **AI-Workspace:** Drei offene Approvals zu Müller:
> 1. Staffing-Vorschlag (3 Berater, 1 Alternative). High-Risk wegen Annex-III-§4.
> 2. Tailored CVs für die 3 Berater. High-Risk.
> 3. Vertragsdraft mit 2 Klausel-Abweichungen — Haftungs-Cap auf 1.5× erhöht, SLA-Reaktionszeit von 4 h auf 2 h verkürzt.
>
> **Thomas:** Was zur Klausel-Abweichung — warum hat Katrin die hochgesetzt?
>
> **AI-Workspace:** Source-Binding zeigt: Müller-CFO Frau Schulz hat im Termin am 22.05. (line 142 der Mitschrift) erhöhten Cap explizit verlangt — Bedingung für Auftragsvergabe. SLA-Verkürzung kam vom Katrin selbst, ohne Quelle im Trigger-Kontext. Möchtest du Katrin nachhaken lassen?
>
> **Thomas:** Cap akzeptiert. SLA-Verkürzung will ich ohne Begründung nicht. Revert SLA auf Standard.
>
> **AI-Workspace:** Cap-Klausel approved. SLA-Klausel auf Standard zurückgesetzt — Vertragsdraft ist neu erstellt (v3), zurück in der Queue zur finalen Vertrag-Approval. Staffing und CVs sind unverändert und warten.

**Pattern „Approval-Diff first-class":** Thomas sieht nicht den ganzen Vertrag, sondern die Diff-Items. Begründung + Quelle pro Diff-Item.
**Pattern „Modul re-builds on edit":** Edit innerhalb der Approval-Queue triggert Versions-Bump, Audit-Trail bleibt lückenlos.

---

## §D — State-Übergänge (formal)

### D1 — `Opportunity.stage`

```
Intake ──qualify──▶ Qualified ──brief approved──▶ Briefed 
                                                      │
                                                      │ staffing approved
                                                      ▼
        Won ◀──signed── Negotiated ◀──contract approved── Staffed
         │                  │                              │
         │                  │ CVs+Pricing approved          │
         │                  ▼                              │
         │              Proposed ─────send-ready───────────┘
         │                  │
         │                  │ external send
         │                  ▼
         │              Negotiated (mit Iterationen)
         ▼
       Project (spawned, Allocation übernimmt)

   Aus jedem Stage erreichbar: ──▶ Lost / Abandoned
```

### D2 — `Proposal` und `ContractDraft` Versionierung

- Jeder Approval-pass macht eine Version write-once. Lokale Drafts bleiben editierbar bis nächste Approval.
- Versions-Diff ist UI-fähig (für Thomas in Approval-Queue, für Katrin im Workspace).
- Externalisierung referenziert immer eine spezifische Version-ID — kein „latest" magic.

### D3 — `approval_state` (für alle approval-pflichtigen Entities)

```
Draft ──submit──▶ AwaitingApproval ──approve──▶ Approved ──external_send──▶ Externalised
   ▲                     │
   │                     │ reject (with reason)
   └─────────────────────┘
```

---

## §E — Edge Cases & Fehlerpfade

| Fall | Verhalten |
|---|---|
| Kein passender Berater verfügbar | StaffingProposal bleibt unvollständig, markiert mit `coverage_gap`. UI zeigt: „Skill X nicht abgedeckt — Optionen: Junior + Coaching, Sub-Contracting, Timeline verschieben." |
| Pricing-Margin unter Schwelle (z. B. <20 %) | Workspace warnt vor Approval-Submission. Submission möglich, aber Approval-Queue zeigt rotes Margin-Flag — Thomas muss explizit override-bestätigen. |
| Stakeholder ist im AccountGrowth gelöscht zwischen Brief und Vertrag | Stale-Reference-Warning. Brief muss editiert oder neuer Stakeholder gewählt werden bevor Vorwärts-Stage möglich. |
| Klausel-Library wird geupdated nachdem Vertrag-Draft erstellt | ContractDraft zeigt „Library-Standard hat sich geändert — möchten Sie diffen?" — kein automatisches Re-Draft. |
| Source-Binding fehlt (Bug im Operator) | Output wird vom Validierungs-Layer abgelehnt, Operator wird neu aufgerufen mit Hinweis. Nach 3 Fehlversuchen: Eskalation an Consultant „bitte Quelle manuell hinzufügen". |
| PII-Routing-Proof fehlt für TailoredCV | Output abgelehnt. CV erscheint nicht in Queue. Workspace gibt klaren Fehler aus: „Modell-Routing nicht EU — abgebrochen." |
| Berater verlässt Firma während offener Opportunity | Capacity meldet `consultant_left`. Alle offenen Opportunities mit diesem Berater werden flagged. Re-Staffing-Pflicht. Tailored CVs werden invalidiert (nicht gelöscht — Audit). |
| AI Workspace ist offline | UI-Operationen ohne Operator-Aufruf bleiben möglich (Intake, Edits, Approvals von bereits gedrafteten Artefakten). Operatoren zeigen „aktuell nicht verfügbar, bitte später". |

---

## §F — Telemetrie für MVP-Erfolgskriterien

Aus Spec §9. Pro Opportunity wird gemessen und in Audit-Aggregat-View angezeigt:

| Metrik | Granularität | Aggregation |
|---|---|---|
| Time-to-Send-Ready (Trigger → externe Sendung) | Pro Opportunity | Median, p90, p95 |
| Approval-Latenz pro Gate-Typ | Pro Approval-Event | Median pro Approver |
| Anzahl Iterations bis Won/Lost | Pro Opportunity | Verteilung |
| Source-Binding-Coverage | Pro Operator-Output | % bound facts |
| PII-Routing-Proof-Coverage | Pro TailoredCV | 100 % Soll |
| Klausel-Abweichungen pro Vertrag | Pro Contract | Median + Outlier |
| Bias-Indikatoren im Staffing | Pro Beratungs-Aggregate (kein Personenbezug) | Quartal-Report |

---

## §G — Was sich an dieser Sicht ändern wird, wenn der AI Workspace (Phase 1b) live ist

- §C-Conversations werden vom heutigen „Modul-internen Chat" zum „organisationsweiten Workspace" hochskaliert.
- Capability-Inventar bleibt gleich; was sich ändert ist *wie* Intents gerouted werden (Workspace versteht Modul-übergreifend).
- Approval-Queue wird Modul-übergreifend (Thomas approvet aus einer Queue, nicht aus drei).
- Source-Bindings bleiben — der Workspace re-aggregiert Source-Bindings über Module hinweg.

Phase-1b-Aufwertung verändert nicht die Modul-Specs — sie macht sie nur ergonomischer.

---

## §H — Verweise

- [spec.md](./spec.md)
- Cross-Cutting: [integration-flows.md](../_cross-cutting/integration-flows.md), [symbiosis-features.md](../_cross-cutting/symbiosis-features.md)
- Schwester-Module: [01-account-growth/flows.md](../01-account-growth/flows.md), [03-consultant-team-capacity/flows.md](../03-consultant-team-capacity/flows.md), [04-knowledge-reuse/flows.md](../04-knowledge-reuse/flows.md)
- Operator-Definitionen: [PRD v5.0 §3](../../technical-definitions/Consultry-PRD-v5.0-Software-Layered.md)
- Approval-UX-Hybrid: [PRD v5.0 §6.2](../../technical-definitions/Consultry-PRD-v5.0-Software-Layered.md)
