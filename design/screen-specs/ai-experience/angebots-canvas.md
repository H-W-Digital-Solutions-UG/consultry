# Angebots-Canvas — Screen Spec

**Screen-ID:** AI-EXP-03
**PRD-Modul:** 10.3 — Smart Service Offer Composition
**Journey(s):** J1-S5 (Katrin erstellt Angebot), J9-S1 (Canvas Varianten-Engine)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Katrin (BD-Leiterin) — Angebotserstellung |
| **Sekundaer** | Thomas (Review + Freigabe), Martina (Export + Formatierung) |
| **Frequenz** | Katrin: 2-4x/Woche. Thomas: 1-2x/Woche (Review). |
| **Trigger** | Opportunity Detail → "Angebot erstellen", Sidebar "Deal → Angebote", Copilot: "Erstelle ein Angebot fuer RetailCorp". |
| **Herkunft** | Opportunity Detail (primaer), Sidebar, Copilot. |
| **Ziel** | KI-gestuetztes Angebot erstellen, iterieren, Varianten vergleichen, freigeben lassen, exportieren. |
| **Geraete** | Desktop (ausschliesslich). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Katrin | ein Angebot aus dem Opportunity-Kontext generieren lassen | ich nicht bei Null anfangen muss |
| 2 | Katrin | einzelne Abschnitte regenerieren oder manuell bearbeiten | das Angebot meinen Anforderungen entspricht |
| 3 | Katrin | Varianten erstellen (Standard vs. Premium) | Thomas eine Auswahl hat |
| 4 | Katrin | das Team (Berater + Tagessaetze) im Angebot einbinden | Pricing automatisch berechnet wird |
| 5 | Thomas | das Angebot reviewen und Kommentare hinterlassen | Katrin Feedback bekommt |
| 6 | Katrin | das finale Angebot als PDF/DOCX exportieren | ich es an den Kunden sende |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure** (NICHT Bento Grid)
**Begruendung:** Angebotserstellung ist ein linearer, iterativer Prozess. Der Canvas zeigt ein Dokument — keine parallelen KPI-Bloecke. Progressive Disclosure: Prompt → Generierung → Iteration → Review → Export.

```
┌─ Sidebar ─┬─ Canvas Toolbar ──────────────────────────────────────────┐
│            │  [↶] [↷]  │ [Variante A ▾] │ [✨ Regenerieren] │ [Export]│
│  Deal      ├───────────────────────────────────────────────────────────┤
│  > Angebote│                                                           │
│            │  ┌─ Canvas Content ──────────────────────────────────────┐│
│            │  │                                                       ││
│            │  │  ┌─ AI Content Card (ai-surface) ────────────────┐   ││
│            │  │  │  ✨ Management Summary                         │   ││
│            │  │  │                                                │   ││
│            │  │  │  mpl Consulting unterstuetzt RetailCorp AG     │   ││
│            │  │  │  bei der Migration auf SAP S/4HANA...          │   ││
│            │  │  │                                                │   ││
│            │  │  │  [✏️ Bearbeiten] [🔄 Abschnitt regenerieren]   │   ││
│            │  │  └────────────────────────────────────────────────┘   ││
│            │  │                                                       ││
│            │  │  ┌─ AI Content Card ─────────────────────────────┐   ││
│            │  │  │  ✨ Leistungsbeschreibung                      │   ││
│            │  │  │  ...                                           │   ││
│            │  │  └────────────────────────────────────────────────┘   ││
│            │  │                                                       ││
│            │  │  ┌─ Team & Pricing (editierbar) ─────────────────┐   ││
│            │  │  │  [Av] Markus S. · 1.450 EUR/Tag · 80%         │   ││
│            │  │  │  [Av] Lisa T.   · 1.100 EUR/Tag · 80%         │   ││
│            │  │  │  Gesamt: 480.000 EUR · DB1: 28%               │   ││
│            │  │  └────────────────────────────────────────────────┘   ││
│            │  │                                                       ││
│            │  └───────────────────────────────────────────────────────┘│
│            │                                                           │
│            │  ┌─ Context Rail (1/3) ──────────────────────────────────┐│
│            │  │  Opportunity: RetailCorp SAP                          ││
│            │  │  Score: [87] · Pipeline-Phase: Angebot                ││
│            │  │                                                       ││
│            │  │  ─── Copilot ───                                      ││
│            │  │  "Mach den Brief formeller"                    [→]   ││
│            │  │                                                       ││
│            │  │  ─── Kommentare ───                                   ││
│            │  │  Thomas: "Team sieht gut aus. DB1 pruefen."          ││
│            │  └───────────────────────────────────────────────────────┘│
└────────────┴──────────────────────────────────────────────────────────┘
```

**2/3 + 1/3 Asymmetrie:** Canvas Content (2/3) + Context Rail (1/3). Context Rail zeigt Opportunity-Kontext, Copilot-Prompt-Feld und Kommentare.

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | 2/3 Canvas + 1/3 Context Rail. Volle Toolbar. |
| `breakpoint-lg` | Canvas volle Breite. Context Rail als Slide-Over (Toggle). |
| `breakpoint-md` | Canvas volle Breite. Toolbar Compact. Context Rail als Bottom Sheet. |
| `breakpoint-sm` | Hinweis: "Angebotserstellung am Desktop empfohlen." Read-only Preview moeglich. |

---

## 5. Datenanforderungen

| Datenpunkt | Quelle | Update-Frequenz |
|-----------|--------|-----------------|
| Opportunity-Kontext | API: `GET /opportunities/{id}` | On-Load |
| Team-Zusammensetzung | API: `GET /opportunities/{id}/team` | On-Load, Live bei Aenderung |
| AI-generiertes Angebot | API: `POST /offers/generate` (Streaming) | On-Demand |
| Varianten | API: `GET /offers/{id}/variants` | On-Load |
| Kommentare | API: `GET /offers/{id}/comments` | Real-time via WebSocket |
| Export | API: `POST /offers/{id}/export` | On-Demand |

---

## 6. AI-Interaktion

| Aspekt | Umsetzung |
|--------|-----------|
| **Paradigma** | AI Canvas (iterativ). KI generiert, Mensch iteriert. |
| **Initiale Generierung** | Basierend auf Opportunity-Daten, Team, Account-Historie. Streaming mit `ktype-ai-reveal`. |
| **Abschnitt-Regenerierung** | Klick "Regenerieren" auf einzelnem Abschnitt. Optional: Prompt-Anpassung ("formeller", "technischer"). |
| **Varianten** | "Neue Variante" erstellt alternativen Entwurf. Side-by-Side oder Tab-Switch. |
| **Copilot im Canvas** | Context Rail enthält Copilot-Prompt: "Mach den Preis-Abschnitt detaillierter". Ergebnis direkt im Canvas. |
| **Confidence** | Pro Abschnitt: AI Badge mit Confidence-Score. Niedrige Confidence (<70%): Orange Warnung. |

---

## 7. Preview Panel Integration

| Kontext | Verhalten |
|---------|-----------|
| PDF-Export-Vorschau | "Vorschau" Button in Toolbar → Preview Panel (Fullscreen, 1200px). Zeigt generiertes PDF. |
| Referenz-Dokumente | In Context Rail: Inline Preview (Thumbnail) von referenzierten Dokumenten (z.B. vorheriges Angebot). |

---

## 8. Predictive Intelligence

| Feature | Umsetzung |
|---------|-----------|
| **Smart Template** | AI waehlt Template basierend auf Account-Typ (Konzern vs. Mittelstand), Branche, Projekt-Typ. |
| **Pricing Pre-Fill** | Tagessaetze und Auslastung aus Berater-Profilen. DB1 automatisch berechnet. |
| **Similar Offers** | "3 aehnliche Angebote gefunden" in Context Rail. Klick zeigt Preview. |
| **Approval Prediction** | "Thomas genehmigt aehnliche Angebote zu 89%." Subtle Hint. |

---

## 9. Interaktions-Flows

### Flow 1: Angebot erstellen (90 Min)
1. Katrin navigiert zu Opportunity Detail → "Angebot erstellen"
2. Canvas laedt mit Opportunity-Kontext + Team
3. KI generiert Angebot (Streaming, ~30s)
4. Katrin reviewed Management Summary → "Bearbeiten" → manuelle Anpassung
5. Katrin klickt "Regenerieren" auf Leistungsbeschreibung mit Prompt "technischer"
6. KI regeneriert Abschnitt (~15s)
7. Katrin passt Team & Pricing an (manuelle Tagessatz-Aenderung)
8. Katrin erstellt "Premium-Variante" (+ Senior Consultant)
9. Katrin schickt an Thomas zur Freigabe (Button "Zur Freigabe")
10. Thomas reviewed im gleichen Canvas, hinterlässt Kommentar
11. Katrin exportiert als PDF → sendet per Outreach

---

## 10. Handoff-Punkte

| Von | Zu | Trigger | Daten |
|-----|-----|---------|-------|
| Opportunity Detail | Angebots-Canvas | "Angebot erstellen" | `opportunityId`, `teamId` |
| Angebots-Canvas | Approval (Thomas) | "Zur Freigabe" | `offerId`, Notification |
| Angebots-Canvas | Export (PDF/DOCX) | "Export" Button | `offerId`, Format |
| Angebots-Canvas | Outreach Editor | "An Kunden senden" | `offerId`, `accountId` |
| Copilot Sidebar | Angebots-Canvas | "Erstelle Angebot fuer RetailCorp" | `opportunityId` |

---

## 11. Stitch/Figma-Referenz

| Element | Referenz |
|---------|----------|
| Canvas Layout | Stitch "Proposal Studio" — Dark/Amber (NUR Inspiration) |
| AI Content Cards | DS 6.4 AI-Generated Content Pattern |
| Canvas Toolbar | `component-specs/ai-interaction/canvas-toolbar.md` |
| Context Rail | DS 6.1 Dashboard/Cockpit Layout (1/3 Pattern) |

---

## 12. Akzeptanzkriterien

- [ ] Canvas laedt mit Opportunity-Kontext und Team-Daten
- [ ] KI generiert vollstaendiges Angebot (Management Summary, Leistung, Team, Pricing, Timeline)
- [ ] Streaming-Generierung mit `ktype-ai-reveal`
- [ ] Einzelne Abschnitte regenerierbar mit optionalem Prompt
- [ ] Manuelle Bearbeitung aller Abschnitte (contenteditable)
- [ ] Undo/Redo funktional (Ctrl+Z/Y)
- [ ] Varianten-Management (erstellen, vergleichen, loeschen)
- [ ] Team & Pricing editierbar, DB1 automatisch berechnet
- [ ] Context Rail mit Opportunity-Kontext, Copilot-Prompt, Kommentare
- [ ] Export als PDF und DOCX
- [ ] Zur Freigabe senden → Thomas erhaelt Notification
- [ ] Confidence-Scores pro Abschnitt

---

## 13. Offene Fragen

| # | Frage | Status |
|---|-------|--------|
| 1 | Sollen Angebote versioniert werden (alle Versionen gespeichert)? | Offen — empfohlen |
| 2 | Kann Martina Angebotsvorlagen pflegen? | Offen — PRD 10.3 andeutet |
| 3 | Side-by-Side Varianten-Vergleich oder Tab-Switch? | Offen — beides spezifiziert, UX-Testing noetig |

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Canvas mit Varianten. Context Rail Copilot. Streaming-Generierung. |
