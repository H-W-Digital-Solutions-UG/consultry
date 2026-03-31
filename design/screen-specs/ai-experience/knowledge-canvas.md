# Knowledge Canvas — Screen Spec

**Screen-ID:** AI-EXP-06
**PRD-Modul:** 8.4 — Methodology & IP
**Journey(s):** J16-S1 (Knowledge Canvas)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Stefan (Senior Consultant) — Methodenwissen erstellen und pflegen |
| **Sekundaer** | Katrin (BD-relevantes Wissen kuratieren), Thomas (Review + Freigabe strategischer Inhalte) |
| **Frequenz** | Stefan: 1-3x/Woche (15-45 Min, nach Projektabschluss intensiver). Katrin: 1x/Woche (10 Min, Quick Edits). |
| **Trigger** | Sidebar "Wissen → Knowledge Canvas", Command Bar "/ Knowledge erstellen", Copilot: "Erstelle Lessons Learned fuer RetailCorp", Knowledge Agent Chat → "Daraus Artikel erstellen". |
| **Herkunft** | Sidebar (primaer), Command Bar, Copilot, Knowledge Agent Chat. |
| **Ziel** | KI-gestuetzte kollaborative Erstellung und Bearbeitung von Methodenwissen, Best Practices, Lessons Learned und IP-Dokumenten. |
| **Geraete** | Desktop (primaer). Tablet (Lesen + leichte Bearbeitung). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Stefan | ein Wissens-Dokument aus einem Prompt oder vorhandenen Fragmenten generieren lassen | ich nicht bei einer leeren Seite anfange |
| 2 | Stefan | einzelne Abschnitte mit KI-Unterstuetzung bearbeiten und regenerieren | der Inhalt meinem Fachverstaendnis entspricht |
| 3 | Stefan | verwandte Wissensartikel in der Context Rail sehen | ich Redundanzen vermeide und verknuepfe |
| 4 | Katrin | Wissensartikel mit Tags und Kategorien versehen | die Inhalte im Knowledge Agent auffindbar sind |
| 5 | Stefan | den Artikel durch einen Publishing-Workflow fuehren (Draft → Review → Published) | Qualitaetssicherung gewaehrleistet ist |
| 6 | Stefan | eine Versionshistorie mit Diff-Ansicht einsehen | ich Aenderungen nachvollziehen und ggf. zuruecksetzen kann |
| 7 | Thomas | strategisch relevante Wissensartikel reviewen und freigeben | nur qualitaetsgesicherte Inhalte publiziert werden |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure** (NICHT Bento Grid)
**Begruendung:** Wissensartikel-Erstellung ist ein dokumentenzentrierter, iterativer Prozess. Canvas zeigt ein fortlaufendes Dokument mit Abschnitten. Progressive Disclosure: Prompt/Fragment → Generierung → Abschnitt-Iteration → Tagging → Review → Publish.

```
┌─ Sidebar ─┬─ Canvas Toolbar (Compact) ─────────────────────────────────┐
│            │  [↶] [↷]  │ [✨ Regenerieren] │ [📜 Versionen] │ [Publish]│
│  Wissen    ├────────────────────────────────────────────────────────────┤
│  > Canvas  │                                                            │
│            │  ┌─ Canvas Content (2/3) ──────────────────────────────┐   │
│            │  │                                                      │   │
│            │  │  Knowledge Article: SAP S/4HANA Cutover Checkliste  │   │
│            │  │  Status: [Draft] · Autor: Stefan K.                 │   │
│            │  │                                                      │   │
│            │  │  ┌─ AI Content Card (ai-surface) ───────────────┐   │   │
│            │  │  │  ✨ Zusammenfassung                           │   │   │
│            │  │  │                                               │   │   │
│            │  │  │  Die Cutover-Phase einer SAP S/4HANA          │   │   │
│            │  │  │  Migration erfordert strukturierte Planung...  │   │   │
│            │  │  │                                               │   │   │
│            │  │  │  [✏️ Bearbeiten] [🔄 Abschnitt regenerieren]  │   │   │
│            │  │  └───────────────────────────────────────────────┘   │   │
│            │  │                                                      │   │
│            │  │  ┌─ AI Content Card ────────────────────────────┐   │   │
│            │  │  │  ✨ Phase 1: Vorbereitung                     │   │   │
│            │  │  │  ...                                          │   │   │
│            │  │  │  [✏️ Bearbeiten] [🔄 Abschnitt regenerieren]  │   │   │
│            │  │  └───────────────────────────────────────────────┘   │   │
│            │  │                                                      │   │
│            │  │  ┌─ AI Content Card ────────────────────────────┐   │   │
│            │  │  │  ✨ Phase 2: Datenmigration                   │   │   │
│            │  │  │  ...                                          │   │   │
│            │  │  └───────────────────────────────────────────────┘   │   │
│            │  │                                                      │   │
│            │  │  ┌─ Tags & Kategorien ──────────────────────────┐   │   │
│            │  │  │  [SAP] [S/4HANA] [Cutover] [Retail]          │   │   │
│            │  │  │  Kategorie: Methodik · [+ Tag]               │   │   │
│            │  │  └───────────────────────────────────────────────┘   │   │
│            │  │                                                      │   │
│            │  └──────────────────────────────────────────────────────┘   │
│            │                                                            │
│            │  ┌─ Context Rail (1/3) ────────────────────────────────┐   │
│            │  │                                                      │   │
│            │  │  ─── Verwandte Artikel ───                           │   │
│            │  │  [📄] SAP Datenmigration Best Practices             │   │
│            │  │  [📄] Retail-Branche: Lessons Learned               │   │
│            │  │  [📄] Cutover-Planung Template                      │   │
│            │  │                                                      │   │
│            │  │  ─── Beitragende ───                                │   │
│            │  │  [Av] Stefan K. (Autor)                             │   │
│            │  │  [Av] Markus S. (Reviewer)                          │   │
│            │  │  [Av] Lisa T. (Kommentar)                           │   │
│            │  │                                                      │   │
│            │  │  ─── Copilot ───                                    │   │
│            │  │  "Ergaenze ein Risiko-Kapitel"                [→]   │   │
│            │  │                                                      │   │
│            │  │  ─── Publishing Status ───                          │   │
│            │  │  [Draft] → [Review] → [Published]                   │   │
│            │  │  Aktuell: Draft · Erstellt: 31.03.2026              │   │
│            │  └──────────────────────────────────────────────────────┘   │
└────────────┴────────────────────────────────────────────────────────────┘
```

**2/3 + 1/3 Asymmetrie:** Canvas Content (2/3) + Context Rail (1/3). Context Rail zeigt verwandte Wissensartikel, Beitragende, Copilot-Prompt-Feld und Publishing-Status.

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | 2/3 Canvas + 1/3 Context Rail. Volle Toolbar. |
| `breakpoint-lg` | Canvas volle Breite. Context Rail als Slide-Over (Toggle-Button in Toolbar). |
| `breakpoint-md` | Canvas volle Breite. Toolbar Compact. Context Rail als Bottom Sheet. |
| `breakpoint-sm` | Read-only-Ansicht. Bearbeitung am Desktop empfohlen. Tags und Status sichtbar. |

---

## 5. Datenanforderungen

| Datenpunkt | Quelle | Update-Frequenz |
|-----------|--------|-----------------|
| Knowledge-Artikel | API: `GET /knowledge/{id}` | On-Load |
| AI-generierter Draft | API: `POST /knowledge/generate` (Streaming) | On-Demand |
| Verwandte Artikel | API: `GET /knowledge/{id}/related` | On-Load |
| Beitragende | API: `GET /knowledge/{id}/contributors` | On-Load |
| Versionsverlauf | API: `GET /knowledge/{id}/versions` | On-Demand |
| Version-Diff | API: `GET /knowledge/{id}/versions/{v1}/diff/{v2}` | On-Demand |
| Tags & Kategorien | API: `GET /knowledge/tags`, `GET /knowledge/categories` | Cached |
| Publishing-Status | API: `PATCH /knowledge/{id}/status` | On-Demand |

---

## 6. AI-Interaktion

| Aspekt | Umsetzung |
|--------|-----------|
| **Paradigma** | AI Canvas (generativ + iterativ). KI generiert initialen Entwurf, Stefan iteriert abschnittweise. |
| **Initiale Generierung** | Basierend auf Prompt ("Erstelle Cutover-Checkliste fuer SAP Retail") oder vorhandenen Fragmenten (Projekt-Reports, Notizen). Streaming mit `ktype-ai-reveal`. |
| **Abschnitt-Regenerierung** | Klick "Regenerieren" auf einzelnem Abschnitt. Optional: Prompt-Anpassung ("detaillierter", "mit konkreten Beispielen aus RetailCorp"). |
| **Kontext-Enrichment** | KI reichert Inhalte mit Daten aus Projekt-DB, bestehenden Knowledge-Artikeln und Berater-Profilen an. |
| **Copilot im Canvas** | Context Rail enthaelt Copilot-Prompt: "Ergaenze ein Risiko-Kapitel", "Kuerze Phase 2". Ergebnis direkt im Canvas. |
| **Confidence** | Pro Abschnitt: AI Badge mit Confidence-Score. Abschnitte aus verifizierten Quellen: hoehere Confidence. |
| **Quellen-Transparenz** | Fussnoten referenzieren Quell-Projekte und Dokumente. Inline-Links zu Originalen. |

---

## 7. Preview Panel Integration

| Kontext | Verhalten |
|---------|-----------|
| Verwandte Artikel | In Context Rail: Inline Preview (Thumbnail) von verwandten Knowledge-Artikeln. Klick → Preview Panel (Slide-Over). |
| Version-Diff | "Versionen" Button → Slide-Over mit Diff-Ansicht (gruen = hinzugefuegt, rot = entfernt). |
| Quell-Dokumente | Fussnoten-Klick → Preview Panel fuer referenzierte Projekt-Reports oder Dokumente. |

---

## 8. Predictive Intelligence

| Feature | Umsetzung |
|---------|-----------|
| **Smart Structure** | KI schlaegt Abschnitt-Struktur basierend auf Artikeltyp vor (Lessons Learned → Kontext/Problem/Loesung/Ergebnis; Best Practice → Zusammenfassung/Vorgehen/Checkliste). |
| **Duplikat-Erkennung** | "2 aehnliche Artikel gefunden" in Context Rail. Warnung vor Redundanz. Vorschlag: "Mit bestehendem Artikel zusammenfuehren?" |
| **Contributor-Suggestion** | "Markus S. hat 3 Projekte in diesem Themenbereich — als Reviewer einladen?" |
| **Auto-Tagging** | KI schlaegt Tags basierend auf Inhalt vor. Stefan bestaetigt oder entfernt. |

---

## 9. Interaktions-Flows

### Flow 1: Lessons Learned erstellen (30 Min)
1. Stefan navigiert zu "Wissen → Knowledge Canvas" oder nutzt Command Bar: "Erstelle Lessons Learned RetailCorp"
2. Canvas laedt mit Prompt-Eingabe: "Worauf soll der Artikel basieren?"
3. Stefan waehlt: "Projekt RetailCorp SAP Migration" als Kontext
4. KI generiert initialen Entwurf mit 4 Abschnitten (Streaming, ~30s)
5. Stefan reviewed "Zusammenfassung" → passt manuell an
6. Stefan klickt "Regenerieren" auf "Ergebnisse" mit Prompt "mit konkreten KPIs"
7. KI regeneriert Abschnitt (~15s)
8. Stefan fuegt Tags hinzu: [SAP] [Retail] [Cutover]
9. Stefan aendert Status auf "Review" → Markus erhaelt Notification
10. Markus kommentiert: "Phase 2 sollte ABAP-Migration erwaehnen"
11. Stefan ueberarbeitet, setzt Status auf "Published"

### Flow 2: Quick Edit bestehendes Wissen (10 Min)
1. Katrin findet veralteten Artikel via Knowledge Agent Chat
2. Klick "Bearbeiten" → Knowledge Canvas oeffnet sich
3. Katrin markiert veralteten Abschnitt → "Regenerieren" mit Prompt "aktualisiere mit neuen NIS2-Anforderungen"
4. KI aktualisiert Abschnitt (~10s)
5. Katrin prueft, speichert als neue Version
6. Versionshistorie zeigt Diff zum Vorgaenger

---

## 10. Handoff-Punkte

| Von | Zu | Trigger | Daten |
|-----|-----|---------|-------|
| Sidebar / Command Bar | Knowledge Canvas | "Knowledge erstellen" | Prompt (optional), `projectId` (optional) |
| Knowledge Agent Chat | Knowledge Canvas | "Daraus Artikel erstellen" | Query-Kontext, Synthese als Fragment |
| Knowledge Canvas | Review (Markus/Thomas) | Status → "Review" | `knowledgeId`, Notification |
| Knowledge Canvas | Knowledge Agent (Suche) | Publish | `knowledgeId` wird in Vector-DB indexiert |
| Copilot Sidebar | Knowledge Canvas | "Erstelle Lessons Learned fuer X" | Prompt + Kontext |
| Projekt-Abschluss | Knowledge Canvas | "Lessons Learned erfassen" | `projectId`, Team-Daten |

---

## 11. Stitch/Figma-Referenz

| Element | Referenz |
|---------|----------|
| Canvas Layout | DS 1.7 Architektonische Asymmetrie (2/3 + 1/3) |
| AI Content Cards | DS 6.4 AI-Generated Content Pattern |
| Canvas Toolbar | `component-specs/ai-interaction/canvas-toolbar.md` (Compact) |
| Context Rail | DS 6.1 Dashboard/Cockpit Layout (1/3 Pattern) |
| Tags & Kategorien | `component-specs/primitives/badges-tags.md` |
| Version Diff | Kein Stitch-Aequivalent. Track-Changes-Konzept (analog Vertrags-Canvas). |

---

## 12. Akzeptanzkriterien

- [ ] Canvas laedt mit Prompt-Eingabe oder bestehendem Artikel
- [ ] KI generiert initialen Entwurf basierend auf Prompt oder Fragmenten
- [ ] Streaming-Generierung mit `ktype-ai-reveal`
- [ ] Abschnittweise Bearbeitung (contenteditable) und Regenerierung mit optionalem Prompt
- [ ] Undo/Redo funktional (Ctrl+Z/Y)
- [ ] Context Rail mit verwandten Artikeln, Beitragenden, Copilot-Prompt
- [ ] Tags und Kategorien zuweisbar (AI-Vorschlaege + manuell)
- [ ] Publishing-Workflow: Draft → Review → Published mit Status-Transitions
- [ ] Versionshistorie mit Diff-Ansicht (gruen/rot)
- [ ] Duplikat-Erkennung bei aehnlichen bestehenden Artikeln
- [ ] Contributor-Suggestion fuer Reviewer
- [ ] Confidence-Scores pro Abschnitt
- [ ] Fussnoten mit Quellen-Referenzen

---

## 13. Offene Fragen

| # | Frage | Status |
|---|-------|--------|
| 1 | Sollen Artikel-Templates vordefiniert sein (Lessons Learned, Best Practice, Methodik-Dokument)? | Offen — empfohlen |
| 2 | Koennen mehrere Autoren gleichzeitig bearbeiten (Collaborative Editing)? | Offen — Phase 2+ |
| 3 | Automatische Archivierung nach X Monaten ohne Update? | Offen — Vorschlag: 12 Monate → "Veraltet"-Badge |
| 4 | Integration mit externen Knowledge-Quellen (Confluence, SharePoint)? | Offen — Phase 2+ |

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Canvas mit Abschnitt-Iteration. Publishing-Workflow. Versionshistorie mit Diff. Tags und Kategorien. Context Rail mit verwandten Artikeln und Copilot. |
