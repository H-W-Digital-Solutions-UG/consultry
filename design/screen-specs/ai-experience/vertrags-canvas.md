# Vertrags-Canvas — Screen Spec

**Screen-ID:** AI-EXP-04
**PRD-Modul:** 10.5 — Contract Intelligence
**Journey(s):** J10-S1 (Vertrags-Canvas AI-Analyse)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Thomas (Managing Partner) — Vertrags-Review + Klausel-Analyse |
| **Sekundaer** | Martina (Vertrags-Verwaltung, Export), Katrin (Verhandlungs-Support) |
| **Frequenz** | Thomas: 1-2x/Woche (15 Min pro Review). Martina: 3-5x/Woche. |
| **Trigger** | Opportunity Detail → "Vertrag erstellen/reviewen", Sidebar "Deal → Vertraege", Notification "Vertrag wartet auf Review". |
| **Herkunft** | Opportunity Detail (primaer), Sidebar, Notification Center. |
| **Ziel** | KI-gestuetzte Vertragsanalyse, Klausel-Pruefung, Risiko-Identifikation, Redlining, Export. |
| **Geraete** | Desktop (ausschliesslich). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Thomas | kritische Klauseln automatisch markiert sehen | ich mich auf Risiken fokussiere |
| 2 | Thomas | KI-Vorschlaege fuer Klausel-Alternativen erhalten | ich bessere Bedingungen verhandele |
| 3 | Thomas | Abweichungen von Standard-Vertragsbedingungen sehen | ich Risiken einschaetze |
| 4 | Martina | Vertraege nach Pruefung als PDF exportieren | ich sie an den Kunden sende |
| 5 | Katrin | den Vertragsstatus im Opportunity-Kontext sehen | ich den Deal vorantreibe |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure**
**Begruendung:** Vertrags-Review ist ein linearer, dokumentenzentrierter Prozess. Split-View: Vertragsdokument links, AI-Analyse rechts.

```
┌─ Sidebar ─┬─ Canvas Toolbar ──────────────────────────────────────────┐
│            │  [↶] [↷]  │  [✨ Analysieren]  │  [Redline]  │  [Export]│
│  Deal      ├───────────────────────────────────────────────────────────┤
│  > Vertraege│                                                          │
│            │  ┌─ Vertragsdokument (2/3) ─────────────────────────────┐│
│            │  │                                                       ││
│            │  │  § 1. Vertragsgegenstand                              ││
│            │  │  mpl Consulting erbringt fuer RetailCorp AG...        ││
│            │  │                                                       ││
│            │  │  § 5. Haftung [⚠️ Risiko markiert]                   ││
│            │  │  Die Haftung ist auf den Auftragswert               ││
│            │  │  begrenzt... ██████████████████████████               ││
│            │  │  [Highlight: "Haftung auf Auftragswert begrenzt"     ││
│            │  │   ist unter Branchenstandard]                        ││
│            │  │                                                       ││
│            │  └───────────────────────────────────────────────────────┘│
│            │  ┌─ AI-Analyse Rail (1/3) ──────────────────────────────┐│
│            │  │                                                       ││
│            │  │  ✨ Vertrags-Analyse                                  ││
│            │  │  Confidence: 84%                                     ││
│            │  │                                                       ││
│            │  │  ─── Risiken (2) ───                                 ││
│            │  │  ⚠️ § 5 Haftung: Unter Standard                     ││
│            │  │  ⚠️ § 8 Kuendigung: 30 Tage (Standard: 90)          ││
│            │  │                                                       ││
│            │  │  ─── Empfehlungen ───                                ││
│            │  │  ┌─ ai-surface ──────────────────────────────┐       ││
│            │  │  │  § 5: Empfehle "max. das Doppelte des     │       ││
│            │  │  │  Auftragswertes" (Branchenstandard)       │       ││
│            │  │  │  [Vorschlag uebernehmen]                  │       ││
│            │  │  └───────────────────────────────────────────┘       ││
│            │  │                                                       ││
│            │  │  ─── Copilot ───                                     ││
│            │  │  "Erklaere § 5 Risiko detailliert"            [→]    ││
│            │  └───────────────────────────────────────────────────────┘│
└────────────┴──────────────────────────────────────────────────────────┘
```

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Split-View: 2/3 Dokument + 1/3 AI-Analyse. |
| `breakpoint-lg` | Dokument volle Breite. AI-Analyse als Toggle-Panel (Slide-Over). |
| `breakpoint-md`+ | Dokument volle Breite. AI-Analyse als Tab. |
| `breakpoint-sm` | "Vertrags-Review am Desktop empfohlen." Read-only PDF-Preview moeglich. |

---

## 5. Datenanforderungen

| Datenpunkt | Quelle | Update-Frequenz |
|-----------|--------|-----------------|
| Vertragsdokument | API: `GET /contracts/{id}` | On-Load |
| AI-Analyse | API: `POST /contracts/{id}/analyze` (Streaming) | On-Demand |
| Risiko-Markierungen | AI-Engine | Bei Analyse |
| Klausel-Alternativen | AI-Engine + Vertrags-Template-DB | On-Demand |
| Standard-Bedingungen | API: `GET /contract-templates/standard` | Cached |

---

## 6. AI-Interaktion

| Aspekt | Umsetzung |
|--------|-----------|
| **Paradigma** | AI Canvas (analytisch + iterativ) |
| **Analyse** | KI markiert kritische Klauseln, identifiziert Abweichungen vom Standard, bewertet Risiken. |
| **Klausel-Alternativen** | Pro Risiko-Klausel: AI-Vorschlag mit "Vorschlag uebernehmen" Button. |
| **Redlining** | Aenderungen werden als Track-Changes angezeigt (rot durchgestrichen, gruen neu). |
| **Copilot** | Im AI-Analyse Rail: Freitext-Fragen zum Vertrag ("Erklaere § 5 Risiko"). |

---

## 7. Preview Panel Integration

| Kontext | Verhalten |
|---------|-----------|
| Vertragsdokument | Split-View: PDF-Render links (Page-by-Page). Alternative: Parsed-Text-View. |
| Export-Vorschau | "Vorschau" → Preview Panel (Fullscreen). Zeigt finales PDF mit Redlines. |

---

## 8. Predictive Intelligence

| Feature | Umsetzung |
|---------|-----------|
| **Risiko-Score** | Gesamt-Risiko-Score (0-100) basierend auf Klausel-Analyse. |
| **Branchenvergleich** | "Haftungsklausel liegt 40% unter Branchenstandard." |
| **Vertragshistorie** | "Bei 3 aehnlichen Vertraegen wurde die Kuendigungsfrist auf 90 Tage verlaengert." |

---

## 9. Interaktions-Flows

### Flow 1: Vertrags-Review (15 Min)
1. Thomas oeffnet Vertrag aus Opportunity Detail
2. Canvas laedt mit Vertragsdokument (Split-View)
3. Klick "Analysieren" → KI analysiert (Streaming, ~20s)
4. AI-Analyse Rail zeigt 2 Risiken + Empfehlungen
5. Thomas klickt auf Risiko § 5 → Dokument scrollt zur Klausel (Highlight)
6. Thomas liest AI-Empfehlung → "Vorschlag uebernehmen"
7. Redline wird eingefuegt (Track-Changes)
8. Thomas stellt Copilot-Frage zu § 8 Kuendigung
9. Thomas exportiert Redline-Version als PDF

---

## 10. Handoff-Punkte

| Von | Zu | Trigger | Daten |
|-----|-----|---------|-------|
| Opportunity Detail | Vertrags-Canvas | "Vertrag reviewen" | `contractId`, `opportunityId` |
| Vertrags-Canvas | Export (PDF) | "Export" | `contractId`, Redlines |
| Vertrags-Canvas | Martina (Notification) | "An Martina zur Finalisierung" | `contractId` |

---

## 11. Stitch/Figma-Referenz

| Element | Referenz |
|---------|----------|
| Split-View | DS 6.10 Preview Panel (Split-View-Variante) |
| AI-Analyse Rail | DS 6.4 AI-Generated Content Pattern |
| Canvas Toolbar | `component-specs/ai-interaction/canvas-toolbar.md` |
| Redlining | Kein Stitch-Aequivalent. Track-Changes-Konzept. |

---

## 12. Akzeptanzkriterien

- [ ] Split-View: Vertragsdokument links, AI-Analyse rechts
- [ ] KI-Analyse identifiziert kritische Klauseln und Risiken
- [ ] Risiko-Markierungen im Dokument (Highlight + Seitennavigation)
- [ ] AI-Empfehlungen pro Risiko-Klausel mit "Vorschlag uebernehmen"
- [ ] Redlining mit Track-Changes-Darstellung
- [ ] Copilot-Fragen im AI-Analyse Rail
- [ ] Export als PDF/DOCX (mit und ohne Redlines)
- [ ] Risiko-Score als Gesamt-Bewertung
- [ ] Branchenvergleich fuer kritische Klauseln

---

## 13. Offene Fragen

| # | Frage | Status |
|---|-------|--------|
| 1 | Soll Thomas direkt im Canvas unterschreiben koennen (e-Signatur)? | Offen — Phase 2+ |
| 2 | Wie werden Vertrags-Templates verwaltet (Martina)? | Offen — separater Admin-Flow |

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Split-View. KI-Klausel-Analyse. Redlining. Branchenvergleich. |
