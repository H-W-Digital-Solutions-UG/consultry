# Consultry — MVP-PRD v1.0 (Acquisition-to-Bid)

**Status:** Entwurf zur Bestätigung
**Rolle im Doc-Stack:** **Tier 3 — was wir ZUERST bauen (und was NICHT).** Über mir: [Product Vision](./Consultry-Product-Vision-v1.0.md) (Tier 1), [PRD v4.0](./Consultry-PRD-v4.0-DACH-Operating-System.md) (Tier 2).
**Datum:** 30. Mai 2026
**Bezug:** [GTM-Decisions](./Consultry-GTM-Decisions-v1.0.md), [Onboarding-Korpus-Ritual](./Consultry-Onboarding-Corpus-Ritual-v1.0.md), [Phase-1 MVP Specs](./Consultry-Phase-1-MVP-Specs-and-Flow-Canvas-v1.0.md)

> **Auftrag dieser Datei: NEIN sagen.** Die Vision ist groß. Diese MVP-PRD ist absichtlich klein. Alles, was hier nicht explizit *In-Scope* steht, ist **out** — egal wie verlockend.

---

## 1. Die eine Wette (PMF-Hypothese)

> **Wenn eine DACH-Beratung aus ihren eigenen Dokumenten in Minuten einen submission-tauglichen Konzept-/Bid-Entwurf erzeugt — gegroundet, mit anonymer Team-Shape — dann ist das ein Painkiller, für den sie zahlt und ohne den sie „sehr enttäuscht" wäre.**

Der Painkiller ist **nicht** „Chancen früher sehen" (das ist das Vitamin/die Retention). Der Painkiller ist die **schwere Bid- und Konzept-Dokumentation** (Lösungs-/Arbeitskonzept, Eignungsnachweise, Referenztexte) — die hair-on-fire-Arbeit, die heute Tage kostet.

### 1.1 Der Value-Claim (aufgelöst 30.05.)

> **Frontier-Intelligence hebt Qualität UND senkt Zeit/Ressourcen — gleichzeitig.** Für eine **ressourcenbeschränkte** mid-small Beratung sind Qualität und Aufwand **dieselbe Beschränkung**: Ihre Konzepte sind nicht mangels Können mittelmäßig, sondern mangels Zeit/Köpfen. Constraint weg + Experten-Level-LLM-Wissen dazu → bessere Konzepte in weniger Zeit. „Win-rate" und „effort-reduction" sind damit **kein Entweder-oder**, sondern derselbe Hebel.

> ⚠️ **Beweis-Disziplin:** Im 5-Tage-Pilot ist **Effort/Qualität-pro-Aufwand** messbar; **Win-rate ist es nicht** (Vergabe dauert Monate). Pitch darf Win-rate *implizieren*, **beweisen** im Pilot nur die Qualitäts-/Zeit-Hebung.

### 1.2 Defensibility (aufgelöst 30.05.)

> **Shell bauen, Modell reiten.** Das Frontier-Modell frisst die generische Mitte (Textgenerierung). Consultry besitzt die **defensible Schale**: domänenspezifische Skills, **zusätzliches Grounding**, Company-Context, Profile, Eignungs-/Vergabe-Logik, Compliance/Audit, Multi-Autor-Workflow. **Nicht die Mitte bauen, die das nächste Modell kommodifiziert.**

### 1.3 Zwei harte Grounding-/Qualitäts-Regeln (aus Round 11/12)

1. **Provenance-Modell (drei-wertig, Pflicht):** jeder faktische Satz trägt eine Quelle-Klasse:
   - **Firm-Fact** (Zertifikate, Referenzen, Kapazitäten, Track-Record) → **ausschließlich Tenant-Korpus**, CitationLink Pflicht. Das Modell darf diese **nie** aus Allgemeinwissen „verbessern" → plausibel-falscher Firmen-Claim = **Ausschluss-/Vergabe-Haftung** (durch ein stärkeres Modell *verschärft*).
   - **External-Fact** (Normen, Regulatorik, Marktdaten, öffentliche Research) → **zitiert auf eine `ExternalSource`** (mit Freshness), CitationLink Pflicht.
   - **Model-Expertise** (Methodik, Konzept-Struktur, Domänen-Framing, Formulierung) → Modellwissen erlaubt, **als solche markiert, nie als Faktum getarnt.**
   - **Regel:** *Jedes Faktum ist zitierpflichtig* (Firm oder External); bei Konflikt **Firm vor External.** Siehe [Domain-Def GI-1/GI-4](./Consultry-Business-Domain-Definition-v1.0.md).
2. **„Qualität" = Fit-to-Zuschlagskriterien.** Konzept-Qualität wird vom Auftraggeber gegen die **Bewertungsmatrix** bewertet, nicht vom Consultant/LLM. Die Concept Suite **parst die Zuschlagskriterien und strukturiert/gewichtet das Konzept auf maximalen Score** — das ist die Brücke von „gutes Konzept" zu „gewinnendes Konzept" *und* defensible Shell.

## 2. ICP & Anti-ICP

**ICP:** DACH-IT-/Digitalisierungs-/Security-Beratungen, **mid-to-small**, DE **+ AT**, mit regelmäßigem Akquise-Druck (Tender und/oder Bestandskunden-Folgegeschäft).

**Anti-ICP (bewusst NICHT für die MVP):**
- Solo/Boutique < ~15 Köpfe (zu wenig Volumen/Seats).
- Konzern-Beratungen > ~200 (eigene Tooling-Teams, lange Procurement).
- Firmen ohne Tender- *und* ohne Bestandskunden-Akquise-Schmerz.
- **CH** (eigene Vergabe/SIMAP, Datenresidenz → später).

## 3. MVP = eine Linie, nicht sechs Features: **Acquisition-to-Bid**

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
| **Concept & Proposal Suite** (Hero, F4+) | Gegroundeter Entwurf von **Lösungs-/Arbeitskonzept + Angebotstext** aus Opportunity + Korpus. Jeder Absatz quellengebunden. Editierbarer Canvas, Version History, interner Export. **Built für den Consultant als Autor** (nicht nur Partner als Käufer). **Kein Versand, kein Pricing-Engine.** | **Der Painkiller + die kritische Pfad-Wette — das, was gekauft wird** |
| **Tender Ingest** (Intake A, F5) | TED/eForms (+ AT) lesen, strukturieren (CPV/Fristen/Lose/Eignung), Bid/No-Bid-Eignungs-Check, Match gegen Korpus. **Kein autonomes Einreichen.** | Akquise-Intake + **zero-corpus Showcase-Demo** |
| **Bestandskunden-Signal** (Intake B, F1) | Vertrags-Options-/Verlängerungsfenster aus hochgeladenen Verträgen, **an Quell-Klausel gebunden** → Opportunity. | Akquise-Intake + **Retention-Spine** |
| **Team-Shape** (F6, anonym) | Anzahl, Skill-/Profil-Typen, Seniority-Mix, Rollen — **keine Personen**. Speist Bid/No-Bid + Konzept-Realismus. | Glaubwürdigkeits-/Realismus-Layer |
| **Engine: Knowledge/Reuse + Grounding-Workspace** (F2/F3) | Korpus-Ingest, Retrieval, Citations, Copilot, Approval-Hook. **Nicht als eigenes Feature vermarktet.** | unsichtbarer Motor |
| **Backbone** | Approval-Card + Audit-Trail + Grounding-Garantie. | Compliance-Default |

### 3.1a Die anderen vier bewusst dünn (um den Hero zu finanzieren)

| Element | Dünnste tragfähige MVP-Version |
|---|---|
| Tender Ingest | **Erst semi-manuell:** Tender-PDF hochladen/einfügen → strukturieren. Volle TED/eForms-Auto-Discovery später. Was zählt: die Strukturierung, die das Konzept speist. |
| Bestandskunden-Signal | **Ein** Signaltyp: Vertrags-Options-/Verlängerungsfenster. Keine breite Signal-Engine. |
| Team-Shape | Einfacher strukturierter Output. Keine Ausschmückung. |
| Knowledge/Reuse | Nur so viel Retrieval, wie das Konzept-Grounding braucht. Kein eigenständiges Wissensprodukt. |

> Kritischer Pfad = **Concept Suite → 5-Tage-Draft → PMF-Signal.** Alles andere ist Zubringer und bleibt dünn, bis dieses Signal steht.

### 3.2 Die vier MVP-Surfaces (alles andere später)

1. **Opportunity-Detail / Approval-Card** — das zentrale Entscheidungsobjekt.
2. **Tender Board** — Liste, strukturierte Tender-Sicht, Eignungs-/Match-Check.
3. **Concept & Proposal Canvas** — der Hero-Surface: gegroundeter Entwurf, editierbar, Version History.
4. **Team-Profile-Sicht** — anonyme Team-Shape + aggregierte Kapazitäts-Aussage.

> Die vier anderen Surfaces aus den Phase-1-Specs (Cockpit, Notification Center, Knowledge Workspace als eigene Oberfläche, Staffing-Detailsicht) sind **MVP-out** — sie kommen als dünne Einstiegspunkte, nicht als ausgebaute Surfaces.

### 3.3 Explizit OUT (MVP)

Proposal-**Versand**, Pricing-/Kalkulations-Engine, Contract Drafting · **personenscharfes** Staffing/Matching · voller Capacity Planner/Forecasting · Time/Expense/Invoice, DATEV/ELSTER · Net-New-Prospecting · CH-Markt · offener Prompt-Marktplatz · Multi-Step-Agentik/autonome Aktionsketten · Schreibzugriff/Outbound nach außen.

---

## 4. Painkiller-vs-Demo-Auflösung

- **Demo-Einstieg ist partnerabhängig:** public-sector-nahe/tender-lastige Firmen (z. B. die eigene Cybersecurity-Beratung = Design-Partner #0) → **Tender-led Showcase** (zero-corpus, öffentliche Daten). Mid-small mit Folgegeschäft → **Bestandskunden-led** (1 Vertrag → Signal).
- **Gekauft wird in beiden Fällen dasselbe:** die **Concept & Proposal Suite**. Die zwei Intakes sind nur unterschiedliche Türen in denselben Painkiller.

---

## 5. PMF — Nordstern-Metrik & Kill-Kriterium

> **Vorschlag (zu bestätigen — offen als G9):**

**Primäre Aktivierungs-Metrik (bestätigt 30.05.):**
- **≥ 1 real verwendeter Konzept-/Bid-Entwurf aus eigenem Korpus pro Design-Partner — innerhalb von 5 Tagen.** Das ist das harte Leading-Signal: sticht der Painkiller schnell?

**PMF-Bestätigung (tiefer):** **Sean-Ellis ≥ 40 %** der aktiven Pilot-Nutzer „sehr enttäuscht" ohne Consultry.

**Sekundär:** Pilot → Paid-Konversion ≥ 2 von 3–5; Time-to-first-Wow < 15 Min; Edit-Distanz am Konzept-Entwurf sinkend über Zeit.

**Kill / Pivot-Signal:** Wenn nach der ersten Kohorte (a) < 40 % „sehr enttäuscht" **und** (b) Partner den Konzept-Entwurf regelmäßig **neu schreiben statt editieren** → der Painkiller sticht nicht; Wedge oder Grounding-Tiefe überdenken, **bevor** Module ausgebaut werden.

---

## 6. Business-Spec (bestätigt 30.05.)

**Seat-Preis: €50 / Seat / Monat** (je Consultant + Sales; 2 Backoffice frei).

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
| **#1** | Partner über großen Warm-Path (Setup) | erster externer Beweis | nach Profil |
| **#2–#4** | 2–3 weitere extern (Lücke G6) | Markt-Validierung | **≥ 1 bewusst Bestandskunden-led** (Anti-Dogfood-Guardrail, G7) |

---

## 8. Offene Punkte

| # | Punkt | Status |
|---|---|---|
| G6 | 30-Tage-Plan für 2–3 externe Design-Partner | offen |
| G7 | ≥ 1 Bestandskunden-led Partner als Dogfood-Guardrail | offen |
| G8 | ACV/Sales-Cycle | ✅ **€50/Seat/Mo, ACV €15–45k** (§6); Pilot-Fee-Betrag noch zu setzen |
| G9 | PMF-Aktivierung | ✅ **1 Draft aus eigenem Korpus in 5 Tagen** (§5) |
| — | Concept & Proposal Suite: eigenes Feature-Spec (Lösungs-/Arbeitskonzept-Struktur, Vorlagen, **Grounding-Split §1.3**, **Zuschlagskriterien-Optimierung §1.3**, **Eval-Harness für Grounding @ Long-Form**) | zu schärfen — **nach Business-Domain-Definition** ✅ ([Domain-Def](./Consultry-Business-Domain-Definition-v1.0.md) fertig) → Concept-Suite-Spec als nächstes |
| G6 | Design-Partner-Kohorte | ✅ **Kohorte = 1 starker Warm-Path-Partner (+ #0 eigene Firma) für jetzt.** Stage-0: Usefulness tief validieren, dann skalieren. → PMF-Metrik bei n=1 = „nützlich + zahlungsbereit + 5-Tage-Draft", nicht Markt-Validierung. |
| G7 | Dogfood-Guardrail | später (greift erst bei Kohorten-Erweiterung) |
| G10 | Eval/Quality | ✅ **frontier-getrieben für Prosa/Struktur; lightweight Harness = Partner-Edit-Distanz + harter Firm-Facts-Citation-Gate** (§1.3, legal, modell-unabhängig). Kein schweres ML-Eval-Suite. |
| G11 | Builder-Bandbreite | ⏸️ bewusst zurückgestellt |

---

*Ende v1.0 — Entwurf. Diese Datei ist der Scope-Zaun. Erweiterungen gehören in PRD v4.0 (Tier 2), nicht hierher.*
