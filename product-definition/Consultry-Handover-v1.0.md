# Consultry — Handover & Session Summary v1.0

**Datum:** 30.05.2026
**Branch:** `claude/phase-1-mvp-scope-7sTXZ` (vollständig in `main` gemergt, HEAD = `c644bec`)
**Zweck dieses Dokuments:** Jemand (Cofounder, Entwickler, künftige Session) soll **kalt einsteigen** können — was entschieden wurde, warum, was offen ist, und was als Nächstes zu tun ist.

> **TL;DR.** In dieser Session wurde Consultry von einem breiten „DACH Operating System"-Konzept auf einen **scharfen, verteidigbaren MVP** zugespitzt: **Acquisition-to-Bid**, Hero = **Concept & Proposal Suite**. Strategie, Positionierung, ICP, Pricing, Compliance-Haltung und das Domänenmodell sind entschieden und in sich konsistent. Der Hero hat **noch keine Detail-Spec** — das ist der nächste Bau-Schritt.

---

## 1. Der Doc-Stack (was wo steht)

Vier-Tier-Logik, von „wohin" zu „was zuerst" zu „in welcher Sprache":

| Tier | Dokument | Rolle |
|---|---|---|
| **1 — Vision** | `Consultry-Product-Vision-v1.0.md` | Nordstern. OS = H3-Vision, **nicht** MVP. Enduring Principles. |
| **2 — Voll-PRD** | `Consultry-PRD-v4.0-DACH-Operating-System.md` | Das volle Produkt (alle Module). Bestand vor dieser Session. |
| **3 — MVP-PRD** | `Consultry-MVP-PRD-v1.0.md` | **Was zuerst, was NICHT.** Der Scope-Zaun. MVP-Core vs. MVP-Platform Tiering. |
| **Fundament** | `Consultry-Business-Domain-Definition-v1.0.md` | Ubiquitäre Sprache, 6 Bounded Contexts, Invarianten **GI-1…16**. Build sitzt hierauf. |
| Quer | `Consultry-GTM-Decisions-v1.0.md` | Wedge, ICP, Pricing, Founder-Market-Fit, Retention, alle G-Punkte. |
| Quer | `Consultry-Onboarding-Corpus-Ritual-v1.0.md` | Cold-Start-Lösung (G1): First-Value-aus-1-Dokument. |
| Spec | `Consultry-Phase-1-MVP-Specs-and-Flow-Canvas-v1.0.md` | Feature-Specs F1–F6, Flows, AI-Context-Blocks, Mermaid. |
| Deck | `presentation/consultry-mvp-deck.html` | Investor-Deck, 12 Slides, mit Produkt-Mockups. |

**Bestand vor Session (Kontext, nicht in dieser Session geändert):** `DACH-Market-Thesis`, `Module-Refinement`, `Product-Document`, `Target-Personas`, `User-Journeys`.

---

## 2. Die zentrale Erzählung (in einem Atemzug)

> **Job:** Projekt-Wachstum & -Akquise für DACH-Beratungen.
> **Zwei Intake-Türen** (Tender + Bestandskunden-Signal) → **ein Demand-Knoten** (`Opportunity`) → **ein Hero** (Concept & Proposal Suite: gegroundeter Lösungs-/Arbeitskonzept-Entwurf) → interner Entwurf.
> **Engine darunter:** Knowledge/Reuse + Grounding-Workspace (nicht separat verkauft).
> **Value-Claim:** Frontier-Intelligence hebt **Qualität** und senkt **Zeit** gleichzeitig — für ressourcenbeschränkte Firmen sind das dieselbe Beschränkung.
> **OS-Vision** bleibt H3 — nie MVP-Landingpage.

---

## 3. Entschiedene Punkte (locked)

### Strategie / Positionierung
- **Headline-Wedge:** Projekt-Wachstum & -Akquise (ein Job, zwei Oberflächen). F3 AI Workspace = Spine.
- **GTM-Sequenz:** mid-to-small zuerst; **Bestandskunden öffnet die Tür, Tender = Big Swing.**
- **Geografie:** **DE + AT ab Tag 1**, CH verschoben (SIMAP, Datenresidenz).
- **F1-Hero-Signal:** Vertrags-Options-/Verlängerungsfenster, an Quell-Klausel gegroundet.
- **„Intelligent CRM over loose docs":** kein CRM nötig — Verträge/Dokumente rein.

### MVP-Scope
- **MVP = Acquisition-to-Bid-Linie**, nicht sechs Co-Features.
- **Hero = Concept & Proposal Suite**, tief gebaut, **consultant-as-author** (entscheidet Seat-Utilization → ACV).
- **F6 → Option A:** anonyme **Team-Shape** (Anzahl/Skills/Seniority, **keine Personen**) + aggregierter Deliverability-Check. Volles Staffing → H2.
- **Tiering (§3.1b MVP-PRD):** MVP-Core (Acquisition+Hero) vs. MVP-Platform (Record-Layer). **Core hat Vorrang**, Platform darf 5-Tage-Pfad nicht starven.
- **MVP-Platform (Record-Layer, weil ICP kein CRM hat):** auto-gepflegte `ConsultantProfile`, Harvest-artige Time-Capture / Work-Agent, deliverable-zentrierte Project Observability.

### Business
- **Pricing:** **€50/Seat/Monat**, je Consultant + Sales, 2 Backoffice frei. **Seat-only** (Win-Fee gestrichen).
- **ACV:** €15–45k (25–75 Seats). **NRR > 100%** (skaliert mit Headcount).
- **PMF-Aktivierung:** **1 echter Bid-/Konzept-Entwurf aus eigenem Korpus in 5 Tagen** (+ Sean-Ellis ≥ 40% zur Bestätigung).
- **Design-Partner:** Stage-0 = **1 warmer Partner + eigene Cybersecurity-Beratung (#0)**; dann 3–5 zahlende Pilots, niedrige Pilot-Fee.
- **Founder-Market-Fit:** Gründer betreibt Cybersecurity-Beratung → Dogfood #0 + zero-corpus Tender-Showcase-Demo.

### Compliance / Grounding (die wichtigsten Entscheidungen)
- **Grounding = drei-wertiges Provenance-Modell (GI-1):**
  - **Firm-Fact** → nur Tenant-Korpus, Citation-Pflicht (sonst blockiert).
  - **External-Fact** → öffentliche `ExternalSource`, Citation-Pflicht.
  - **Model-Expertise** → Modellwissen erlaubt, markiert, nie als Faktum getarnt.
  - **GI-4:** bei Konflikt **Firm vor External.**
- **External-Research-Firewall (GI-5/6):** Queries PII-/kundendaten-bereinigt; Quellen über `SourcePolicy` white-/blacklist-bar.
- **Human-Backstop (GI-1b):** kein LLM garantiert Grounding zu 100% → die **Freigabe des Consultant-Autors** ist die rechtliche Sicherung, nicht die AI. (Default-to-fact als Klassifikator-Fail-Safe, GI-1a.)
- **Daten-Compliance:** Enterprise-API mit **AVV/DPA, No-Training, EU/EEA bzw. SCCs.**
- **§87-Haltung (bewusst, „move fast"):** Erst-ICP hat überwiegend **keinen Betriebsrat** → §87 greift dort nicht. **Keine §87-Maschinerie**, nur **ein Schalter: Works-Council-Mode** (Default-OFF), der personenbez. Auswertung + Aktivitäts-Auto-Feed (GI-9b) gated. **Restrisiko bei Kunden mit aktivem BR bewusst akzeptiert.** Risiko = blockierter Deal, kein Lawsuit. Time-Capture ist seit BAG 09/2022 ohnehin Pflicht.

---

## 4. Domänenmodell — Kurzreferenz

**6 Bounded Contexts:** Acquisition · Tender · **Bid Production (Hero)** · Knowledge · Capability · Governance — plus Quer: Tenant&Identity, Personal Work-Context, Project Observability.

**Schlüssel-Aggregate:** `Opportunity` (geteilter Demand-Knoten), `ProposalDraft`/`Konzept` (Hero), `KnowledgeAsset` + `ExternalSource` + `SourcePolicy`, `Tender` (mit `AwardCriterion[]` als First-Class!), `ConsultantProfile`/`TeamShape`/`Forecast`, `TimeEntry`/`PersonalNote`/`WorkAgentSuggestion`, `ProjectStatus`, `Recommendation`/`ApprovalEvent`/`AuditRecord`.

**Wichtigste Invarianten für den Build:**
- `AwardCriterion` (Zuschlagskriterien) steuert Konzept-Gewichtung (Fit-to-Score = Brücke zu „gewinnen").
- Provenance-Klassifikation + `CitationLink` werden **auf Datenebene** erzwungen, nicht im Frontend.
- Personenbezug fließt **nur aggregiert** in Bid/TeamShape/Forecast.
- Personen-Features nur unter **Works-Council-Mode** aktivierbar (GI-16).

---

## 5. Offene Punkte (Status & Owner-Hinweis)

| ID | Punkt | Status |
|---|---|---|
| **Concept-Suite-Spec** | Detail-Spec des Hero fehlt komplett | **offen — wichtigster nächster Schritt** |
| D1 | Provenance-Klassifikator (Firm/External/Model), default-to-fact-Mechanik | offen → in Concept-Suite-Spec |
| D2 | `AwardCriterion`-Parsing bei semi-manuellem Tender-Intake | offen |
| D3 | DACH-Lösungs-/Arbeitskonzept-Sektionsmodell | offen → Concept-Suite-Spec |
| D4 | External-Grounding-Default-Whitelist (BSI/ISO/EU-DACH) kuratieren | Prinzip entschieden, Liste offen |
| D5 | Freshness-Gate (stale Norm blockieren) | offen |
| D6 | Citation-Faithfulness-Check (stützt Quelle den Satz?) | offen |
| G6 | 30-Tage-Plan für 2–3 *externe* Design-Partner | bewusst „1 reicht für jetzt" |
| G7 | ≥1 Bestandskunden-led Partner als Dogfood-Guardrail | später |
| G11 | **Builder-Bandbreite** (wer baut, während Cybersec-Firma läuft?) | bewusst zurückgestellt |
| Deck | Markt-Zahlen sind **Platzhalter** (~38k, 3–5 Tage, >60%) | **vor Investor-Einsatz sourcen** (§7a) |
| Deck | Team-/Ask-Slide (Raise, Use of Funds) fehlt | offen (§7a) |
| Deck | **Verfeinern & interaktiv machen** — Build-ins, klickbare Mockups, Live-Grounding-Hover, „watch it build" | offen → **Ziel in §7a** |

---

## 6. Bekannte Risiken (ehrlich)

1. **Scope-Wachstum:** MVP startete als „eine Linie", wuchs um People-Substrat, Self-Log, Observability. Tiering schützt den kritischen Pfad — **aber nur, wenn die Core-Priorität gehalten wird.** Größtes Schleichrisiko.
2. **Builder-Bandbreite (G11):** ungelöst. Großartige Spec nützt nichts ohne Bauer.
3. **§87-Restrisiko:** bewusst akzeptiert; trifft Kunden mit aktivem Betriebsrat ohne WC-Mode.
4. **Hero ist technisch hart:** submission-taugliche, gegroundete deutsche Langform ist *nicht* „der einfache Teil". Eval-Harness (Edit-Distanz + Firm-Facts-Gate + Faithfulness) ist Pflicht.
5. **Korpus-Cold-Start:** gemildert durch Onboarding-Ritual, aber jeder Pilot startet dünn.

---

## 7. Was als Nächstes zu tun ist (priorisiert)

1. **Concept & Proposal Suite Feature-Spec schreiben** — der Hero, auf der Domänensprache. Enthält D1, D3, D5, D6, Sektionsmodell, consultant-as-author-Workflow, Eval-Harness. **Höchste Priorität.**
2. **Work-Agent / Time-Capture spec** (Harvest-Level Detail) — falls MVP-Platform parallel läuft.
3. **Präsentation verfeinern & interaktiver machen** (siehe §7a) — Investor-ready + lebendige Produkt-Demo.
4. **G11 klären:** Build-Kapazität (solo/cofounder/devs).

### 7a. Ziel: Präsentation verfeinern & interaktiv machen

**Datei:** `presentation/consultry-mvp-deck.html` (12 Slides, eigenständig, brand-konform; Pfeiltasten/Swipe/Print-to-PDF funktionieren).

**Ziel:** Aus dem statischen Deck eine **lebendige, halb-interaktive Produkt-Demo** machen, die Investoren das Produkt *fühlen* lässt — und den Inhalt investor-ready schärfen.

**Inhaltliche Verfeinerung (zuerst, weil Substanz vor Politur):**
- **Echte Markt-Zahlen** statt Platzhalter (~38k Beratungen, 3–5 Tage, >60% unbearbeitet) — sourcen oder klar als Schätzung kennzeichnen. **Keine erfundene TAM vor VCs.**
- **Team-/Ask-Slide** ergänzen: Raise-Höhe, Use of Funds, Gründer/Team, Meilensteine.
- Optionale **Traction-/Pipeline-Slide**, sobald Stage-0-Daten existieren.

**Interaktivität (Reihenfolge = Aufwand/Wirkung):**
1. **Animierte Übergänge & Build-ins** — Elemente pro Slide gestaffelt einblenden (z. B. Stat-Zahlen hochzählen, Grounding-Citations nacheinander aufpoppen). Reines CSS/JS, kein Framework.
2. **Klickbare Produkt-Mockups** — Tender Board: Zeile anklicken → „Konzept starten" → wechselt zur Concept-Suite-Slide. Macht den Flow *erlebbar* statt erzählt.
3. **Live-Grounding-Hover** — in der Concept-Suite-Slide: Hover über eine Citation (◆ Firm / ↗ External) hebt die passende Quelle im Panel hervor. Zeigt die Grounding-Story interaktiv.
4. **„Watch it build"-Demo** — ein simulierter Konzept-Entwurf, der sich Absatz für Absatz mit aufpoppenden Citations „schreibt" (getriggert per Klick). Stärkster Wow-Moment für Investoren.
5. **Presenter-Modus** (optional) — Sprechernotizen, Timer, `S`-Taste zum Umschalten.

**Guardrails:**
- Eigenständige HTML-Datei bleiben (kein Build-Step, keine externen Abhängigkeiten außer Google Fonts).
- **Print-to-PDF muss weiter funktionieren** (Investoren wollen oft das PDF) — Animationen dürfen den Druck nicht brechen (`@media print` zeigt Endzustand).
- Brand-Tokens aus `design/DESIGN_SYSTEM/Consultry-Figma-Design-System-Rules.md` einhalten (Gradient `#E8913A→#E8655A→#9B59B6`, Inter, Radii).
- Mobile/Touch erhalten (Swipe).

---

## 8. Git / Arbeitsweise

- Alle Arbeit auf `claude/phase-1-mvp-scope-7sTXZ`, per Fast-Forward in `main` gemergt (kein PR-Flow genutzt — falls Branch-Protection gewünscht, künftig PR statt direktem ff).
- 24 Commits in dieser Session (von `54695e7` bis `c644bec`). Jeder Commit = eine Entscheidung, Messages sind die Mini-Historie.
- **Sprache:** Specs auf Deutsch (DACH-Markt), Commit-Messages Englisch.

---

*Ende Handover v1.0. Bei Wiederaufnahme: dieses Dokument + `MVP-PRD` + `Business-Domain-Definition` lesen, dann mit der Concept-Suite-Spec starten.*
