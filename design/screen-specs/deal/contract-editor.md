# Contract Editor — Screen Spec

**Screen-ID:** DEAL-07
**PRD-Modul:** 10.5 — Contract Intelligence
**Journey(s):** J10-S1 (Vertragserstellung)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Martina (Office Managerin) — Vertragserstellung, Template-Verwaltung, Klausel-Bibliothek |
| **Sekundaer** | Thomas (Review via Vertrags-Canvas), Katrin (Vertragsstatus pruefen) |
| **Frequenz** | Martina: 3-5x/Woche (20-40 Min pro Vertrag). Thomas: 1-2x/Woche (Review). |
| **Trigger** | Opportunity Detail → "Vertrag erstellen", Sidebar "Deal → Vertraege → Neu", Notification "Angebot freigegeben — Vertrag vorbereiten". |
| **Herkunft** | Opportunity Detail (primaer), Sidebar, Notification Center. |
| **Ziel** | Vertrag aus Template erstellen, Platzhalter automatisch befuellen, Klauseln anpassen, zur Review an Thomas weiterleiten, exportieren. |
| **Geraete** | Desktop (ausschliesslich). |

**Abgrenzung zum Vertrags-Canvas (`ai-experience/vertrags-canvas.md`):** Der Vertrags-Canvas ist Thomas' KI-gestuetztes Analyse-Tool (Risiko-Identifikation, Klausel-Alternativen, Redlining). Der Contract Editor ist Martinas Erstellungs- und Bearbeitungswerkzeug. Martina erstellt und formatiert den Vertrag, Thomas analysiert und reviewed ihn.

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Martina | einen Vertrag aus einem Template erstellen | ich nicht bei Null anfangen muss |
| 2 | Martina | dass Platzhalter automatisch aus Opportunity-Daten befuellt werden | ich nicht abtippen muss |
| 3 | Martina | Standard-Klauseln aus einer Bibliothek per Drag-and-Drop einfuegen | ich die richtigen Klauseln verwende |
| 4 | Martina | den Vertrag inline bearbeiten mit Formatting Toolbar | ich Anpassungen direkt vornehme |
| 5 | Martina | Platzhalter visuell hervorgehoben sehen | ich weiss was noch ausgefuellt werden muss |
| 6 | Martina | den Vertrag zur Review an Thomas senden | er ihn im Vertrags-Canvas analysiert |
| 7 | Martina | den Vertrag als PDF oder DOCX exportieren | ich ihn an den Kunden sende |
| 8 | Martina | Aenderungen nachvollziehen (Versionshistorie) | ich fruehere Staende wiederherstellen kann |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure (2/3 + 1/3 Asymmetrie)**
**Begruendung:** Contract Editor ist ein dokumentenzentrierter Workflow: Template waehlen → Platzhalter befuellen → Klauseln anpassen → Review senden → Exportieren. Die 2/3+1/3 Asymmetrie (DS 1.7) trennt den Editor von der Klausel-Bibliothek und Steuerung.

```
┌─ Sidebar ─┬─ Contract Editor Toolbar ────────────────────────────────┐
│            │  [↶] [↷]  │  Template: [Beratungsvertrag Standard ▾]    │
│  Deal      │  │ [Platzhalter: 2 offen] │ [Review senden] │ [Export ▾]│
│  > Vertraege├─────────────────────────────────────────────────────────┤
│            │                                                          │
│            │  ┌─ Editor (2/3) ─────────────┬─ Steuerung (1/3) ──────┐│
│            │  │                             │                         ││
│            │  │  ── Formatting Toolbar ──── │  ┌─ Opportunity ──────┐ ││
│            │  │  [B] [I] [U] │ H1 H2 H3 │  │  │  RetailCorp AG     │ ││
│            │  │  [≡] [⋮] │ § Klausel │     │  │  SAP S/4HANA Migr. │ ││
│            │  │                             │  │  484.500 EUR         │ ││
│            │  │  ┌─ Vertragsdokument ────┐  │  │  Mai-Nov 2026       │ ││
│            │  │  │                       │  │  └─────────────────────┘ ││
│            │  │  │  BERATUNGSVERTRAG     │  │                         ││
│            │  │  │                       │  │  ┌─ Klausel-Bibliothek┐ ││
│            │  │  │  zwischen             │  │  │                     │ ││
│            │  │  │                       │  │  │  🔍 [Suche...]     │ ││
│            │  │  │  mpl Consulting GmbH  │  │  │                     │ ││
│            │  │  │  ("Auftragnehmer")    │  │  │  ≡ Haftung          │ ││
│            │  │  │                       │  │  │  ≡ Kuendigung       │ ││
│            │  │  │  und                  │  │  │  ≡ Vertraulichkeit  │ ││
│            │  │  │                       │  │  │  ≡ Geistiges Eigent.│ ││
│            │  │  │  [RetailCorp AG]      │  │  │  ≡ Hoehere Gewalt   │ ││
│            │  │  │  ← brand-primary bg   │  │  │  ≡ Datenschutz     │ ││
│            │  │  │  ("Auftraggeber")     │  │  │  ≡ Gerichtsstand   │ ││
│            │  │  │                       │  │  │                     │ ││
│            │  │  │  § 1 Vertragsgegenst. │  │  │  Drag Klausel in   │ ││
│            │  │  │                       │  │  │  den Editor →       │ ││
│            │  │  │  mpl Consulting       │  │  └─────────────────────┘ ││
│            │  │  │  erbringt fuer        │  │                         ││
│            │  │  │  [RetailCorp AG]      │  │  ┌─ Platzhalter ──────┐ ││
│            │  │  │  Beratungsleistungen  │  │  │                     │ ││
│            │  │  │  im Bereich SAP       │  │  │  ✅ Auftraggeber    │ ││
│            │  │  │  S/4HANA Migration.   │  │  │  ✅ Projektname     │ ││
│            │  │  │                       │  │  │  ✅ Vertragswert    │ ││
│            │  │  │  Laufzeit:            │  │  │  ✅ Laufzeit        │ ││
│            │  │  │  [01.05.2026] bis     │  │  │  ✅ Team (3 Ber.)  │ ││
│            │  │  │  [30.11.2026]         │  │  │  ⚠️ Kuendigungsfr. │ ││
│            │  │  │                       │  │  │  ⚠️ Gerichtsstand  │ ││
│            │  │  │  Vertragswert:        │  │  │                     │ ││
│            │  │  │  [484.500 EUR]        │  │  │  5/7 befuellt       │ ││
│            │  │  │                       │  │  └─────────────────────┘ ││
│            │  │  │  § 2 Leistungen       │  │                         ││
│            │  │  │  ...                  │  │  ┌─ Versionen ────────┐ ││
│            │  │  │                       │  │  │  v2 (aktuell)      │ ││
│            │  │  │  § 5 Haftung          │  │  │  v1 · 27.03.       │ ││
│            │  │  │  [Standard-Klausel]   │  │  │  [Vergleichen]      │ ││
│            │  │  │                       │  │  └─────────────────────┘ ││
│            │  │  └───────────────────────┘  │                         ││
│            │  │                             │  ┌─ Aktionen ─────────┐ ││
│            │  │                             │  │  [Review senden]    │ ││
│            │  │                             │  │  → Thomas erhaelt   │ ││
│            │  │                             │  │    Notification      │ ││
│            │  │                             │  │  [Export ▾]          │ ││
│            │  │                             │  └─────────────────────┘ ││
│            │  └─────────────────────────────┴─────────────────────────┘│
│            │                                                          │
└────────────┴──────────────────────────────────────────────────────────┘
```

**Steuerungspanel Bereiche:**

1. **Opportunity-Kontext** — Compact Card mit Opportunity-Daten (Firma, Projekt, Wert, Laufzeit). Datenquelle fuer Platzhalter-Auto-Fill.
2. **Klausel-Bibliothek** — Durchsuchbare Liste von Standard-Klauseln. Drag-and-Drop in den Editor. Klauseln sind kategorisiert (Haftung, Kuendigung, Datenschutz, etc.).
3. **Platzhalter-Status** — Checkliste aller Platzhalter im Vertrag. ✅ = befuellt, ⚠️ = offen. Klick auf Platzhalter scrollt Editor dorthin.
4. **Versionen** — Chronologische Versionsliste. "Vergleichen" oeffnet Diff-View.
5. **Aktionen** — "Review senden" (→ Thomas), "Export" (PDF/DOCX).

**Platzhalter-Visualisierung:**
Platzhalter im Editor werden mit `brand-primary` Hintergrund (10% Opacity) und `brand-primary` Border dargestellt. Auto-befuellte Platzhalter zeigen den Wert editierbar. Unbefuellte Platzhalter zeigen "[Platzhalter-Name]" in `brand-primary` Textfarbe.

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | 2/3 Editor + 1/3 Steuerungspanel. Volle Toolbar. |
| `breakpoint-lg` | Editor volle Breite. Steuerungspanel als Toggle-Panel (Slide-Over rechts). |
| `breakpoint-md` | Editor volle Breite. Klausel-Bibliothek als Bottom Sheet. Toolbar kompakt. |
| `breakpoint-sm` | Hinweis: "Vertragserstellung am Desktop empfohlen." Read-only Preview moeglich. |

---

## 5. Datenanforderungen

| Datenpunkt | Quelle | Update-Frequenz |
|-----------|--------|-----------------|
| Opportunity-Kontext (Firma, Wert, Team, Laufzeit) | API: `GET /opportunities/{id}` | On-Load |
| Vertrags-Template | API: `GET /contract-templates/{id}` | On-Load |
| Template-Bibliothek | API: `GET /contract-templates` | Cached |
| Klausel-Bibliothek | API: `GET /clauses` | Cached |
| Vertragsdokument (bei Bearbeitung) | API: `GET /contracts/{id}` | On-Load |
| Versionen | API: `GET /contracts/{id}/versions` | On-Load, nach Speichern |
| Export | API: `POST /contracts/{id}/export` | On-Demand |
| Team-Daten (fuer Platzhalter) | API: `GET /opportunities/{id}/team` | On-Load |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | Minimal — Martina nutzt keine aktive KI. Automatisierung im Hintergrund. |
| **Platzhalter-Auto-Fill** | System befuellt Platzhalter automatisch aus Opportunity-Daten: Firmenname, Vertragswert, Laufzeit, Start-/Enddatum, Team-Mitglieder, Tagessaetze. Editierbar. |
| **Template-Empfehlung** | "Fuer Beratungsprojekte >400K empfehlen wir Template 'Beratungsvertrag Extended'." Als Info-Text bei Template-Auswahl. |
| **Klausel-Vorschlag** | Bei Template-Erstellung: "Standard-Haftungsklausel ist enthalten. Fuer Konzernkunden empfehlen wir die erweiterte Variante." Als Tooltip auf Klausel in Bibliothek. |
| **Review-Trigger** | "Review senden" loest automatisch Notification an Thomas aus und oeffnet fuer Thomas den Vertrags-Canvas (`ai-experience/vertrags-canvas.md`) mit voller KI-Analyse. |

---

## 7. Preview Panel Integration

| Kontext | Verhalten |
|---------|-----------|
| **Editor** | WYSIWYG-Darstellung mit Platzhalter-Highlighting. Kein separater Preview noetig — Editor ist Preview. |
| **Export-Vorschau** | "Vorschau" → Preview Panel (Fullscreen, DS 6.10). Zeigt finales PDF wie es exportiert wird. |
| **Klausel-Preview** | Hover auf Klausel in Bibliothek zeigt Tooltip-Preview (320px): Klausel-Volltext + Verwendungshaeufigkeit. |
| **Versions-Vergleich** | "Vergleichen" oeffnet Split-View: links alte Version, rechts aktuelle. Aenderungen als Diff (rot/gruen). |

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Platzhalter-Warnung** | "2 Platzhalter sind noch nicht befuellt. Vertrag kann nicht exportiert werden." Als Warning Badge in Toolbar. |
| **Template-Empfehlung** | "Basierend auf Kundentyp (Konzern) und Projektgroesse (484K) empfehlen wir 'Beratungsvertrag Extended'." |
| **Klausel-Haeufigkeit** | "Haftungsklausel 'Standard' wird in 85% aller Beratungsvertraege verwendet." Als `body-xs` in Klausel-Bibliothek. |
| **Fehlende Klauseln** | "Datenschutz-Klausel fehlt — in 95% der Vertraege enthalten." Als Warning im Platzhalter-Panel. |
| **Review-Vorhersage** | "Thomas reviewed aehnliche Vertraege innerhalb 24h." Als Info unter "Review senden". |

---

## 9. Interaktions-Flows

### Flow 1: Vertrag erstellen (Martina, 30 Min)
```
Notification "Angebot freigegeben — Vertrag vorbereiten" →
Contract Editor oeffnet → Template: "Beratungsvertrag Standard" vorausgewaehlt →
Platzhalter werden auto-befuellt: 5/7 befuellt →
Martina prueft: Firmenname ✅, Wert ✅, Laufzeit ✅, Team ✅ →
⚠️ Kuendigungsfrist: manuell eingeben → "90 Tage" →
⚠️ Gerichtsstand: manuell eingeben → "Muenchen" →
Platzhalter: 7/7 ✅ → Klausel-Bibliothek: "Datenschutz" per Drag-and-Drop →
Speichern → "Review senden" → Thomas erhaelt Notification
```

### Flow 2: Klausel tauschen
```
Martina oeffnet bestehenden Vertrag → § 5 Haftung: Standard-Klausel →
Kunde verlangt erweiterte Haftung → Klausel-Bibliothek → Suche: "Haftung" →
"Haftung Extended" gefunden → Drag-and-Drop auf § 5 →
Confirmation: "Standard-Haftungsklausel durch Extended ersetzen?" →
Bestaetigen → Klausel ersetzt → Speichern
```

### Flow 3: Review-Zyklus
```
Martina sendet zur Review → Thomas erhaelt Notification →
Thomas oeffnet Vertrags-Canvas → KI-Analyse: 1 Risiko →
Thomas kommentiert: "§ 8 Kuendigungsfrist auf 90 Tage anpassen" →
Martina erhaelt Notification → oeffnet Contract Editor →
Passt § 8 an → erneut "Review senden" → Thomas gibt frei →
Martina exportiert als PDF
```

---

## 10. Handoff-Punkte

| Von | Zu | Trigger | Daten |
|-----|-----|---------|-------|
| Opportunity Detail | Contract Editor | "Vertrag erstellen" | `opportunityId` |
| Notification Center | Contract Editor | "Angebot freigegeben" | `opportunityId` |
| Contract Editor | Vertrags-Canvas (Thomas) | "Review senden" | `contractId`, Notification |
| Vertrags-Canvas | Contract Editor | Thomas kommentiert/gibt frei | `contractId`, Kommentare |
| Contract Editor | Export (PDF/DOCX) | "Export" Button | `contractId`, Format |
| Contract Editor | Opportunity Detail | Breadcrumb-Navigation | `opportunityId` |

---

## 11. Stitch/Figma-Referenz

| Element | Referenz |
|---------|----------|
| Editor | Kein Stitch-Aequivalent. Eigenes Editor-Pattern (aehnlich Offer Composer). |
| Klausel-Bibliothek | DS 6.6 Selection Pattern (Searchable List + Drag). |
| Platzhalter-Highlighting | Custom Pattern: `brand-primary` 10% bg + border. |
| Steuerungspanel | DS 6.1 Context Rail Pattern (1/3). |
| Version History | Inline-Komponente innerhalb Canvas Toolbar (`component-specs/ai-interaction/canvas-toolbar.md`). |

---

## 12. Akzeptanzkriterien

- [ ] 2/3 Editor + 1/3 Steuerungspanel Layout
- [ ] Template-Auswahl mit mindestens 3 Templates (Standard, Extended, Rahmenvertrag)
- [ ] Platzhalter-Auto-Fill aus Opportunity-Daten (Firma, Wert, Laufzeit, Team)
- [ ] Platzhalter visuell hervorgehoben (`brand-primary` bg 10%)
- [ ] Platzhalter-Status-Checkliste im Steuerungspanel
- [ ] Klausel-Bibliothek: Suche + Drag-and-Drop in Editor
- [ ] Inline-Editing mit Formatting Toolbar (Bold, Italic, Headings, Listen)
- [ ] "Review senden" → Thomas erhaelt Notification → Vertrags-Canvas oeffnet
- [ ] Export als PDF und DOCX
- [ ] Versionierung mit Vergleich (Diff-View)
- [ ] Unbefuellte Platzhalter blockieren Export (Warning)
- [ ] Responsive: Slide-Over auf Tablet, Desktop-Empfehlung auf Mobile
- [ ] Accessibility: Editor aria-role="textbox", Klausel-Bibliothek aria-role="listbox", Drag-and-Drop aria-describedby, Focus Management

---

## 13. Offene Fragen

| # | Frage | Status |
|---|-------|--------|
| 1 | Soll Martina eigene Klauseln zur Bibliothek hinzufuegen koennen? | Offen — Empfehlung: Ja, mit Approval durch Thomas. Phase 1. |
| 2 | Soll der Contract Editor e-Signatur-Integration haben? | Offen — Empfehlung: Phase 2+ (DocuSign/Adobe Sign). |
| 3 | Wie werden Vertrags-Templates versioniert (wenn sich AGB aendern)? | Offen — Empfehlung: Template-Versionierung mit "aktive Version" Flag im Admin Panel. |
| 4 | Soll der Vertrag automatisch mit der Opportunity verknuepft bleiben (bidirektional)? | Offen — Empfehlung: Ja, Vertragsstatus sichtbar im Opportunity Detail. |

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. Template-basiert, Platzhalter-Auto-Fill, Klausel-Bibliothek, Review-Workflow, Versionierung, Export. |
