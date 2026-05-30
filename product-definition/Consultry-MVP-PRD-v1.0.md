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

| Baustein | Was im MVP | Verkaufs-Rolle |
|---|---|---|
| **Concept & Proposal Suite** (Hero, F4+) | Gegroundeter Entwurf von **Lösungs-/Arbeitskonzept + Angebotstext** aus Opportunity + Korpus. Jeder Absatz quellengebunden. Editierbarer Canvas, Version History, interner Export. **Kein Versand, kein Pricing-Engine.** | **Der Painkiller — das, was gekauft wird** |
| **Tender Ingest** (Intake A, F5) | TED/eForms (+ AT) lesen, strukturieren (CPV/Fristen/Lose/Eignung), Bid/No-Bid-Eignungs-Check, Match gegen Korpus. **Kein autonomes Einreichen.** | Akquise-Intake + **zero-corpus Showcase-Demo** |
| **Bestandskunden-Signal** (Intake B, F1) | Vertrags-Options-/Verlängerungsfenster aus hochgeladenen Verträgen, **an Quell-Klausel gebunden** → Opportunity. | Akquise-Intake + **Retention-Spine** |
| **Team-Shape** (F6, anonym) | Anzahl, Skill-/Profil-Typen, Seniority-Mix, Rollen — **keine Personen**. Speist Bid/No-Bid + Konzept-Realismus. | Glaubwürdigkeits-/Realismus-Layer |
| **Engine: Knowledge/Reuse + Grounding-Workspace** (F2/F3) | Korpus-Ingest, Retrieval, Citations, Copilot, Approval-Hook. **Nicht als eigenes Feature vermarktet.** | unsichtbarer Motor |
| **Backbone** | Approval-Card + Audit-Trail + Grounding-Garantie. | Compliance-Default |

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

**Primärer PMF-Nordstern:**
- **Sean-Ellis ≥ 40 %** der aktiven Pilot-Nutzer wären „sehr enttäuscht" ohne Consultry, **UND**
- **≥ 1 real verwendeter Konzept-/Bid-Entwurf aus eigenem Korpus pro Design-Partner** innerhalb der ersten 3 Wochen (Aktivierung).

**Sekundär:** Pilot → Paid-Konversion ≥ 2 von 3–5; Time-to-first-Wow < 15 Min; Edit-Distanz am Konzept-Entwurf sinkend über Zeit.

**Kill / Pivot-Signal:** Wenn nach der ersten Kohorte (a) < 40 % „sehr enttäuscht" **und** (b) Partner den Konzept-Entwurf regelmäßig **neu schreiben statt editieren** → der Painkiller sticht nicht; Wedge oder Grounding-Tiefe überdenken, **bevor** Module ausgebaut werden.

---

## 6. Business-Spec (Platzhalter — offen als G8)

| Größe | Stand | Nötig |
|---|---|---|
| **ACV** | unbestimmt | je Consultant+Sales-Seat × billable Headcount (2 Backoffice frei). 50-Personen-Firma ≈ 45 Seats → Seat-Preis × 45. **Zahl festlegen.** |
| **Pilot-Fee** | „niedrig" | konkreten Betrag setzen (filtert Intent, §GTM 3.4) |
| **Sales-Cycle** | unbestimmt | warm-path-getrieben kurz halten; trust-heavy → Wochen, nicht Tage |
| **CAC/Motion** | founder-led, high-touch | muss vom ACV getragen werden — bei zu niedrigem Seat-Preis kippt die Motion |

> **Offen (G8):** Ohne ACV-Zahl ist nicht entscheidbar, ob die founder-led/high-touch-Motion ökonomisch trägt. **Nächster harter Schritt.**

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
| G8 | ACV/Pilot-Fee/Sales-Cycle-Zahlen | **offen — nächster harter Schritt** |
| G9 | PMF-Nordstern + Schwelle bestätigen (§5) | offen |
| — | Concept & Proposal Suite: eigenes Feature-Spec (Lösungs-/Arbeitskonzept-Struktur, Vorlagen, Grounding-Regeln) | zu schärfen |

---

*Ende v1.0 — Entwurf. Diese Datei ist der Scope-Zaun. Erweiterungen gehören in PRD v4.0 (Tier 2), nicht hierher.*
