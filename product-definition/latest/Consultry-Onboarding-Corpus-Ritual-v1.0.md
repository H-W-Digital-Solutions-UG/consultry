# Consultry — Onboarding- & Korpus-Ritual v1.0 (G1)

**Status:** Entwurf zur Bestätigung (löst GTM-Decisions G1)
**Datum:** 30. Mai 2026
**Bezug:** [GTM-Decisions v1.0 §8 (G1)](./Consultry-GTM-Decisions-v1.0.md), [Phase-1 MVP Specs](../archive/superseded-product-baseline-2026-08/Consultry-Phase-1-MVP-Specs-and-Flow-Canvas-v1.0.md)

> **Das Problem (G1).** Consultrys Moat *ist* der Korpus aus eigenen Dokumenten der Firma (Verträge, vergangene Proposals, Capability-Statements, Referenzen, Skill-Daten). Bei Pilot-Start ist dieser Korpus **leer** → die Demo wirkt schwach, der Pilot kippt in Woche 1. Dieses Dokument entwirft das **Onboarding-Ritual**, das aus dem **allerersten Dokument** sichtbaren Wert zieht — nicht aus dem 50.

---

## 0. Leitprinzipien

1. **First-Value aus *einem* Dokument.** Ein hochgeladener Vertrag → ein erkanntes Verlängerungs-/Optionsfenster → eine „jetzt handeln"-Opportunity. Live, in Minuten, im Kickoff-Call.
2. **Pull, nicht Push.** Niemals „lade 50 Proposals hoch" als Hausaufgabe. Immer: *ein* Dokument, das sofort Wert erzeugt → dann ausweiten.
3. **Geführte Session, keine Hausaufgabe.** Der erste Upload passiert **live im Kickoff**, co-pilotiert. Sofort-Signal = Buy-in.
4. **Lead mit dem Wedge des ICP.** Mid-to-small → Bestandskunden zuerst (Verträge haben sie griffbereit, Hero-Signal sofort). Tender-Firmen → Capability-Statements + Tender zuerst.
5. **Progressive Value-Disclosure.** Jeder Upload-Schritt schaltet sichtbar eine neue Fähigkeit frei (Korpus-Fortschritts-Meter).
6. **Trust-by-default beim Ingest.** Tenant-isoliert, read-only, kein Training in geteilten Memory — **vorab** sagen (DACH-Buyer fragen sofort).

---

## 1. Minimaler Korpus pro Wedge (die „Demo-Schwelle")

> Wie wenig reicht, damit ein Wedge *überzeugend* demobar ist? Das bestimmt die Upload-Reihenfolge.

| Fähigkeit | Minimal-Korpus für die Demo | Beschaffungs-Aufwand |
|---|---|---|
| **Bestandskunden-Hero** (F1) | **1 aktiver Kundenvertrag** → Options-/Verlängerungssignal | trivial — liegt griffbereit |
| **Reuse / Proposal-Draft** (F2/F4) | 3–5 vergangene Proposals (gewonnen + verloren) | niedrig |
| **Tender-Matching & Eignung** (F5) | Capability-Statements + 3–5 Referenzen | mittel |
| **Team-Shape** (F6) | aggregierte Skill-/Profil-Daten (CV-Stapel **oder** 10-Min-Struktur-Intake) | niedrig–mittel |
| **Tender-Discovery** (F5) | **keiner** — TED/eForms ist sofort öffentlich verfügbar | null |

> **Strategische Konsequenz:** Die **niedrigste Demo-Schwelle ist Bestandskunden (1 Vertrag).** Genau deshalb öffnet Bestandskunden die Tür (GTM-Decisions §3.2) — es ist nicht nur der häufigere Schmerz, es ist auch der **schnellste Wow ab leerem Korpus.** Tender-Discovery ist die zweite Null-Korpus-Demo (öffentliche Daten), aber die *Produktion* (Bid-Antwort) braucht Tier-2-Uploads.

---

## 2. Das Seed-Treppen-Modell (Upload-Reihenfolge)

```
Tier 0  ── Kickoff-Call, LIVE, 1 Dokument ──────────────────────────────
   1 aktiver Vertrag  →  Verlängerungs-/Optionsfenster + 1 Opportunity
   ▶ Wow-Moment. Pilot ist „live" bevor der Call endet.

Tier 1  ── Woche 1 ─────────────────────────────────────────────────────
   alle aktiven Verträge   →  Bestandskunden-Signal-Board (mehrere Chancen)
   3–5 jüngste Proposals   →  erste Reuse-Assets + Win-Themes

Tier 2  ── Woche 2–3 ───────────────────────────────────────────────────
   Capability-Statements + Referenzen  →  schaltet Tender-Matching frei
   Skill-/Profil-Daten (CV-Stapel/Intake)  →  schaltet Team-Shape frei

Tier 3  ── laufend ─────────────────────────────────────────────────────
   Bulk DMS/SharePoint read-only Ingest  →  füllt den Long Tail
   (alte Proposals, Methoden, Runbooks, Blueprints)
```

> **Regel:** Jeder Tier liefert *eigenständigen* Wert. Niemand muss bis Tier 3 warten, um Nutzen zu sehen. Tier 0 ist nicht verhandelbar — **ohne Live-Wow im Kickoff kein überzeugender Pilot.**

---

## 3. Die „goldene erste Session" (Kickoff-Skript, ~30 Min)

| Min | Schritt | Ergebnis |
|---|---|---|
| 0–5 | **Trust-Frame.** Tenant-Isolation, read-only, kein Shared-Memory-Training — explizit. | Bedenken sofort vom Tisch |
| 5–10 | **Tier-0-Upload live:** ein aktiver Vertrag per Drag-Drop. | Korpus ≠ leer |
| 10–20 | **First-Value:** AI extrahiert Options-/Verlängerungsfenster, **zeigt die Quell-Klausel**, schlägt die Folgegeschäfts-Opportunity vor. | Der Wow |
| 20–25 | **Explain-anything:** „warum diese Chance?" → quellengebundene Begründung. | Vertrauen statt Black Box |
| 25–30 | **Tier-1-Plan vereinbaren:** Verträge + 3–5 Proposals bis Ende Woche 1; Drag-Drop/Bulk/Mail-Forward/DMS-Connector zeigen. | klarer, leichter nächster Schritt |

---

## 4. Upload-Reibung minimieren

- **Mehrere Eingänge:** Drag-Drop, Bulk-/ZIP-Upload, **E-Mail-Forward an eine Tenant-Adresse**, **read-only DMS/SharePoint-Connector**.
- **Auto-Klassifikation:** AI erkennt Dokumenttyp (Vertrag / Proposal / Referenz / CV / Methode) und routet automatisch — der Nutzer sortiert nicht.
- **Kein Schema-Zwang:** lose Dokumente rein, Struktur entsteht durch Extraktion (= Kern-Versprechen „intelligentes CRM über loser Basis").

---

## 5. Korpus-Fortschritts-Meter (Value-Disclosure)

Sichtbares Element, das zeigt, **was der nächste Upload freischaltet** — koppelt Aufwand an Nutzen statt an Pflichtgefühl:

```
Bestandskunden-Signale   ███████░░░  (Verträge: 7/—)         ✓ aktiv
Reuse & Proposal-Draft   █████░░░░░  (Proposals: 4 — gut)     ✓ aktiv
Tender-Matching          ██░░░░░░░░  „+ Capability-Statements → freischalten"
Team-Shape               ░░░░░░░░░░  „+ Skill-Daten → freischalten"
```

> Kein Gamification-Selbstzweck — der Meter ist ein **Verkaufs-/Aktivierungs-Werkzeug**: er macht den Wert jedes weiteren Uploads konkret und treibt Tier 1→3.

---

## 6. Cold-Start-Brücken (während der Korpus dünn ist)

- **Tender-Discovery sofort:** TED/eForms läuft ab Minute 1 ohne Firmen-Korpus → eine zweite Null-Korpus-Demo, falls der Buyer tender-getrieben ist.
- **Team-Shape ohne HR-Integration:** ein **10-Minuten-Struktur-Intake** (Rollen/Skills/Seniority im Pool, aggregiert) ersetzt eine schwere HR-Anbindung für die erste Demo.
- **Win-Themes aus wenigen Proposals:** schon 3–5 vergangene Proposals erzeugen brauchbare Reuse-Bausteine — nicht erst der volle DMS-Bulk.

---

## 7. Erfolgsmetriken des Onboardings

- **Time-to-first-Wow:** < 15 Min ab Kickoff-Start (Ziel).
- **Tier-1-Completion-Rate:** Anteil Pilots mit Verträgen + ≥ 3 Proposals bis Ende Woche 1.
- **Aktivierungs-Schwelle:** Anteil Pilots, die ≥ 2 Wedges freigeschaltet haben (Korpus-Meter).
- **Pilot→Paid-Konversion** korreliert mit Korpus-Tiefe (Hypothese, im Pilot zu validieren).

---

## 8. Offene Detailpunkte

| # | Frage | Status |
|---|---|---|
| G1a | DMS/SharePoint read-only Connector — ab Pilot oder erst nach Paid? | offen |
| G1b | E-Mail-Forward-Ingest — Datenschutz-/Tenant-Adress-Konzept | offen |
| G1c | Extraktions-Genauigkeits-Bar für Vertragssignale als Pilot-Akzeptanzkriterium (vgl. F1 §2.6) | offen |

---

*Ende v1.0 — Entwurf. Löst G1 grundsätzlich; G1a–c sind Detail-Folgepunkte. Nächste GTM-Punkte: G2 (AT/CH-Reichweite), G3 (Design-Partner-Ziel), G5 (Win-Fee-Mechanik).*
