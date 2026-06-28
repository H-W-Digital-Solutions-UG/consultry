# Consultry — Feature ↔ Pain Map v1.0

**Status:** Aktiv. Die **Brücke** zwischen den Markt-Pains ([Vision §7/§8](./Consultry-Product-Vision-v1.0.md)) und den Features ([Phase-1-Specs](./Consultry-Phase-1-MVP-Specs-and-Flow-Canvas-v1.0.md)). Auch Sales-/Discovery-Asset.
**Datum:** 13.06.2026
**Logik:** Jedes MVP-Feature existiert, weil es einen **konkreten, belegten Schmerz** killt — zugeordnet zu Persona, Hero (Win/Work) und PMF-Metrik. Pains sind **quellenmarkiert**: ✓ belegt · † Annahme-zu-validieren.

> **Disziplin:** Keine erfundenen Metriken. Wo eine Zahl aus einer Studie kommt, steht die Quelle (§4). Wo wir schätzen, steht †.

---

## 1. Pain-Inventar (belegt)

### 1.1 Win-Pains (Akquise / Bid)

| ID | Pain | Beleg | Quelle |
|---|---|---|---|
| **PW1** | **Angebots-/Konzeptarbeit frisst Tage.** Klassische Proposals brauchen 30+ Tage Vorbereitung; 80 % der Proposal-Kosten stecken in Schreiben/Editieren. | ✓ | OCI |
| **PW2** | **RFP-Antwort = ~25 h Aufwand** pro Bid (SMB ~20 h) — nicht-fakturierbarer Overhead. | ✓ | SiftHub/Loopio 2025 |
| **PW3** | **Niedrige Win-Rate ohne Disziplin.** Ø RFP-Win-Rate ~45 %; Bid/No-Bid-Qualifizierung ist **der größte einzelne Hebel** auf die Win-Rate. | ✓ | Bidara/Seibert |
| **PW4** | **Folgegeschäft gewinnt, Neugeschäft selten.** Incumbent-Win-Rate **60–90 %** vs. neue Opportunity **bis 15 %**; ~80 % des Beratungsumsatzes kommt aus Bestandskunden. | ✓ | Loopio; BDU 2021 |
| **PW5** | **Passende Ausschreibungen bleiben liegen.** Firmen bearbeiten nur ~63 % der erhaltenen RFPs → ~37 % unbearbeitet; bei knapper Kapazität in SMBs eher mehr. (Deck-Claim „>60 %" → ehrlich auf ~37 %+ korrigieren bzw. † kennzeichnen.) | ✓/† | Loopio |
| **PW6** | **Tagessatz-Rechtfertigungsdruck im KI-Zeitalter.** ~⅓ der Agenturen erhielten „AI-Discount"-Anfragen; Tagessätze −2 %; 40 % erwarten KI-Honorar-Effekt. | ✓ | Productive.io; BDU 2025 |
| **PW7** | **Grounding-/Haftungsrisiko bei öffentlichen Bids.** Falsche Eignungs-/Referenzangaben = Ausschluss + mögliche Vergabe-Haftung. | ✓ (rechtlich) | Vergaberecht (GI-1) |

### 1.2 Work-Pains (AI-native Arbeiten / Operating)

| ID | Pain | Beleg | Quelle |
|---|---|---|---|
| **PK1** | **Billable-Leakage durch schlechte Zeiterfassung.** Berater verlieren **15–25 %** fakturierbarer Stunden; Ø **2,9 h/Tag** durch schwaches Tracking; Firmen fakturieren nur 90–95 % geleisteter Stunden. | ✓ | eBillity; SPI Research |
| **PK2** | **Admin frisst Kapazität.** ~**20 %** der Kapazität (8 h/Woche) gehen in Timesheets/Reports/Status. | ✓ | eBillity |
| **PK3** | **Utilization-Lücke.** Ziel 80 %, real **60–65 %** → 15–20 Punkte Lücke = Umsatzpotenzial. | ✓ | Ledgrix/Branchen |
| **PK4** | **Wissens-/Reuse-Verschwendung.** **~20 % der Arbeitswoche (8,2 h)** für Suchen/Neu-Erstellen/Duplizieren von Infos; ein großer Teil neuer „Reports" ist Wiederholung vorhandener Inhalte. | ✓ | APQC; IDC; McKinsey |
| **PK5** | **Skills nicht normalisiert.** Beraterprofile leben in CVs/PPT/Köpfen → Staffing & Tailored-CV langsam, Skill-Gaps unsichtbar. | † (qualitativ, Markt-konsistent) | Market-Thesis §4 |
| **PK6** | **Delivery fließt nicht in Wachstum zurück.** Lessons/Referenzen/Decision-Records ungenutzt; jeder Bid startet bei null. | † | Market-Thesis §4 |
| **PK7** | **IT-Fachkräftemangel** verschärft Kapazitäts-/Skill-Druck (109.000 fehlende IT-Kräfte DE). | ✓ | Bitkom 2025 |

> **Warum beide Hero-Sets denselben ICP packen:** Win-Pains sind *episodisch-akut* (jeder Bid), Work-Pains sind *täglich-chronisch*. Hero 1 liefert den schnellen Wow (5-Tage-Draft), Hero 2 den täglichen Nutzungsgrund (Retention/Seat-Utilization). Zusammen = „AI-native Beratung".

---

## 2. Feature ↔ Pain Matrix

> Persona-Kürzel: **K**=Katrin (BD-Lead) · **T**=Thomas (Managing Partner) · **S**=Stefan (Senior/PL) · **L**=Lisa (Consultant) · **M**=Martina (Office). Hero: 🟦 Win · 🟩 Work · ⬛ geteiltes Fundament.

| Feature | Killt Pain | Persona | Hero | Wie (1 Satz) | PMF-Beitrag |
|---|---|---|---|---|---|
| **Concept & Proposal Suite** (Hero) | PW1, PW2, PW6 | K, S, T | 🟦 | Gegroundeter Konzept-/Angebots-Entwurf in Minuten statt Tagen, auf Zuschlagskriterien getrimmt. | **5-Tage-Draft** |
| **Tender-Intake** (TED-Polling + semi-manuell) | PW2, PW5 | K, T | 🟦 | Passende Ausschreibungen automatisch gematcht + strukturiert (CPV/Fristen/Lose/Eignung). | 5-Tage-Draft (Input) |
| **Bid/No-Bid-Qualifizierung** | PW3, PW5 | K, T | 🟦 | Eignungs-Check gegen Korpus → nur gewinnbare Bids binden Ressourcen. | 5-Tage-Draft (Fokus) |
| **Bestandskunden-Signal** (Vertrags-Options-/Verlängerungsfenster) | PW4 | K, T | 🟦 | KI liest Verträge, findet Verlängerungs-/Optionsfenster an Quell-Klausel gebunden → Folgegeschäft früh. | 5-Tage-Draft + Retention-Puls |
| **Anonyme TeamShape** | PW7, PK5 | S, T | 🟦 | „Können wir liefern?" — Anzahl/Skills/Seniority aggregiert, keine Personen. | 5-Tage-Draft (Realismus) |
| **Grounding/Provenance + CitationLink** | PW7 | T, K | ⬛ | Jede Tatsachen-Aussage quellengebunden (Firm/External/Model) → Vergabe-verteidigbar. | beide (Vertrauen) |
| **Auto-ConsultantProfile** (Upload/M365/Credly) | PK5, PK2 | L, S | 🟩 | Profile pflegen sich selbst aus verknüpften Quellen; Consultant bestätigt. | Seat-Utilization |
| **Work-Agent / Time-Capture** | PK1, PK2, PK3 | L, S | 🟩 | Agent schlägt TimeEntries aus In-Tool-Arbeit vor → weniger Leakage, weniger Admin. | **Seat-Utilization** (Work-Agent-Bestätigungs-Rate) |
| **PersonalNote-Layer** (privat) | PK2 | L, S | 🟩 | Privater Notiz-Layer = täglicher Nutzungsgrund, nie management-sichtbar. | Seat-Utilization (Retention) |
| **Knowledge & Reuse** | PK4, PK6 | S, L | 🟩/⬛ | Projektwissen → wiederverwendbare, quellengebundene Bausteine; nie wieder bei null. | beide |
| **ProjectStatus** (deliverable-aggregiert) | PK3, PK6 | T | 🟩 | RAG/Burn aus aggregierten TimeEntries; nie personen-attribuiert (Default). | Seat-Utilization |
| **Approval-Card + AuditEvent** | PW7, PK1 | T, M | ⬛ | Mensch verantwortet, jeder Schritt protokolliert (BR-fest). | beide (Compliance) |
| **WC-Mode-Schalter** (Default-OFF) | — (Deal-Enabler) | T | ⬛ | Ein Schalter gated personenbez. Auswertung bei Kunden mit Betriebsrat. | Sales-Enabler |

---

## 3. Anti-Pains (bewusst NICHT gelöst im MVP)

- **Generische Neukunden-Lead-Gen** (PW4 sagt: Folgegeschäft gewinnt) → H2.
- **Proposal-Versand / Pricing-Engine / Contract** → H2.
- **Personenscharfes Staffing/Scoring** (Mitbestimmung/AI-Act) → H2 + Gate.
- **Volle Delivery-Steuerung / Billing / DATEV** → H3.
- **Performance-/Burnout-Scoring** → niemals per Default (GI-9/12).

---

## 4. Quellen

- OCI — Cost of Preparing Proposals (30+ Tage, 80 % Schreiben, Win-Rate 20–25 %): https://ociwins.com/c51-proposal-management/cost-of-preparing-proposals/
- Bidara — RFP Statistics 2026 (Ø Win-Rate 45 %): https://www.bidara.ai/research/rfp-statistics
- Loopio — RFP Statistics & Win Rates (25 h Response, 63 % bearbeitet, Incumbent 60–90 % vs neu 15 %): https://loopio.com/blog/rfp-statistics-win-rates/
- SiftHub — RFP metrics (Response-Zeit): https://www.sifthub.io/blog/rfp-metrics
- eBillity — Time Leakage (15–25 %, 2,9 h/Tag, 20 % Admin): https://ebillity.com/blog-hub/how-to-reduce-time-leakage-in-professional-services-firms-and-recover-thousands-in-unbilled-work/
- SPI Research via ERP Software Blog — Revenue Leakage (90–95 % gebillt): https://erpsoftwareblog.com/2025/10/plugging-the-gaps-how-professional-services-firms-can-reduce-revenue-leakage-with-psa-tools/
- Ledgrix — Consultant Utilization (60–65 % real vs 80 % Ziel): https://www.ledgrix.com/resources/maximize-consultant-utilization
- APQC — 8,2 h/Woche (20 %) für Suchen/Neu-Erstellen/Duplizieren: https://www.apqc.org/blog/km-makes-knowledge-workers-more-productive-and-less-stressed-out
- BDU — Honorare 2025 / Bestandskunden 80 % (2021): https://www.bdu.de/news/studie-honorare-im-consulting-2025-tagessaetze-leicht-ruecklaeufig/ · https://www.bdu.de/news/consultants-erzielen-80-des-umsatzes-mit-bestandskunden/
- Bitkom — IT-Fachkräfte 2025 (109.000): https://www.bitkom.org/sites/main/files/2026-01/bitkom-studienbericht-it-fachkraefte-2025.pdf

> **Zu verifizieren vor Investor-Einsatz:** Productive.io „AI-Discount ~⅓" (Primärquelle); PW5-Framing (37 % vs Deck „>60 %"); PK5/PK6 mit DACH-spezifischen Zahlen härten.

---

*Ende v1.0. Inline referenziert aus den Feature-Specs (Pain-IDs PW#/PK#). Pains-Quelle: [Vision §7/§8](./Consultry-Product-Vision-v1.0.md).*
