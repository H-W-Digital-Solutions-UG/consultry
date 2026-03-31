# Offer Composer — Screen Spec

**Screen-ID:** DEAL-04
**PRD-Modul:** 10.3 — Smart Service Offer Composition
**Journey(s):** J1-S5 (Katrin erstellt Angebot), J9-S1 (Canvas Varianten-Engine)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Martina (Office Managerin) — Angebotsformatierung, Export, QA |
| **Sekundaer** | Katrin (Uebergabe aus Angebots-Canvas), Thomas (Approval-Badge sichtbar) |
| **Frequenz** | Martina: 2-3x/Woche (20-30 Min pro Angebot). Katrin: 1-2x/Woche (Uebergabe). |
| **Trigger** | Angebots-Canvas → "Zur Formatierung", Sidebar "Deal → Angebote → Formatieren", Notification "Neues Angebot zur Formatierung". |
| **Herkunft** | Angebots-Canvas (primaer), Sidebar, Notification Center. |
| **Ziel** | Finales Angebot formatieren, Brand Compliance sicherstellen, Multi-Format exportieren (PDF, DOCX, PPTX), Version verwalten. |
| **Geraete** | Desktop (ausschliesslich). |

**Abgrenzung zum Angebots-Canvas (`ai-experience/angebots-canvas.md`):** Der Angebots-Canvas ist Katrins KI-gestuetztes Erstellungstool (Inhalt, Iteration, Varianten). Der Offer Composer ist Martinas Formatierungs- und Export-Werkzeug. Katrin erstellt den Inhalt, Martina bringt ihn in Form.

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Martina | ein Corporate Template auswaehlen | das Angebot dem Firmendesign entspricht |
| 2 | Martina | Abschnitte aus dem Angebots-Canvas per Drag-and-Drop anordnen | ich die Reihenfolge fuer den Kunden optimiere |
| 3 | Martina | das finale Angebot in einem WYSIWYG-Editor bearbeiten | Formatierungen (Schriften, Absaetze, Seitenumbrueche) passen |
| 4 | Martina | eine Brand-Compliance-Pruefung durchfuehren | Logo, Schriften und Farben korrekt sind |
| 5 | Martina | das Angebot als PDF, DOCX oder PowerPoint exportieren | der Kunde sein bevorzugtes Format erhaelt |
| 6 | Martina | den Freigabestatus von Thomas sehen | ich weiss ob das Angebot versandbereit ist |
| 7 | Martina | Versionen nachvollziehen | ich fruehere Staende wiederherstellen kann |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure (2/3 + 1/3 Asymmetrie)**
**Begruendung:** Offer Composer ist ein dokumentenzentrierter Workflow: Template waehlen → Sektionen anordnen → Formatieren → Compliance pruefen → Exportieren. Die 2/3+1/3 Asymmetrie (DS 1.7) trennt den WYSIWYG-Editor von der Steuerungsleiste.

```
┌─ Sidebar ─┬─ Offer Composer Toolbar ─────────────────────────────────┐
│            │  [↶] [↷]  │  Template: [Corporate Standard ▾]           │
│  Deal      │  │ [Brand-Check ✓] │ [Vorschau] │ [Export ▾] │ [···]   │
│  > Angebote├──────────────────────────────────────────────────────────┤
│            │                                                          │
│            │  ┌─ WYSIWYG Editor (2/3) ────────┬─ Control Panel (1/3)┐│
│            │  │                                │                      ││
│            │  │  ── Formatting Toolbar ──────  │  ┌─ Approval ─────┐ ││
│            │  │  [B] [I] [U] │ H1 H2 H3 │     │  │  ✅ Freigegeben  │ ││
│            │  │  [≡] [⋮] │ Img │ Tabelle │     │  │  Thomas Weber   │ ││
│            │  │                                │  │  28.03.2026     │ ││
│            │  │  ┌─ Seite 1 ───────────────┐  │  └────────────────┘ ││
│            │  │  │                          │  │                      ││
│            │  │  │  [Logo: mpl Consulting]  │  │  ┌─ Sektionen ────┐ ││
│            │  │  │                          │  │  │  ≡ Deckblatt    │ ││
│            │  │  │  Angebot                 │  │  │  ≡ Mgmt Summary │ ││
│            │  │  │  SAP S/4HANA Migration   │  │  │  ≡ Leistung     │ ││
│            │  │  │  RetailCorp AG           │  │  │  ≡ Methodik     │ ││
│            │  │  │                          │  │  │  ≡ Team & CVs   │ ││
│            │  │  │  28. Maerz 2026          │  │  │  ≡ Pricing      │ ││
│            │  │  │                          │  │  │  ≡ Timeline     │ ││
│            │  │  └──────────────────────────┘  │  │  ≡ Referenzen   │ ││
│            │  │                                │  │  ≡ AGB          │ ││
│            │  │  ┌─ Seite 2 ───────────────┐  │  │                  │ ││
│            │  │  │                          │  │  │  [+ Sektion]    │ ││
│            │  │  │  1. Management Summary   │  │  └────────────────┘ ││
│            │  │  │                          │  │                      ││
│            │  │  │  RetailCorp AG steht     │  │  ┌─ Versionen ────┐ ││
│            │  │  │  vor der strategischen   │  │  │  v3 (aktuell)  │ ││
│            │  │  │  Entscheidung, ihr SAP   │  │  │  v2 · 27.03.   │ ││
│            │  │  │  ECC-System auf S/4HANA  │  │  │  v1 · 26.03.   │ ││
│            │  │  │  zu migrieren...         │  │  │  [Vergleichen]  │ ││
│            │  │  │                          │  │  └────────────────┘ ││
│            │  │  └──────────────────────────┘  │                      ││
│            │  │                                │  ┌─ Brand-Check ──┐ ││
│            │  │  ┌─ Seite 3 ───────────────┐  │  │  ✅ Logo korrekt │ ││
│            │  │  │  2. Leistungsbeschreibung│  │  │  ✅ Schriften    │ ││
│            │  │  │  ...                     │  │  │  ✅ Farben       │ ││
│            │  │  └──────────────────────────┘  │  │  ⚠️ Seitenrand  │ ││
│            │  │                                │  │     zu schmal   │ ││
│            │  │                                │  └────────────────┘ ││
│            │  └────────────────────────────────┴──────────────────────┘│
│            │                                                          │
└────────────┴──────────────────────────────────────────────────────────┘
```

**Control Panel Bereiche:**

1. **Approval-Status** — Freigabe-Badge von Thomas (aus Angebots-Canvas Workflow). Zeigt Status: Ausstehend / Freigegeben / Abgelehnt mit Timestamp und Kommentar.
2. **Sektionen** — Drag-and-Drop-Liste aller Angebotsabschnitte. Per Drag umsortierbar. `≡` Handle links. Klick auf Sektion scrollt Editor dorthin.
3. **Versionen** — Chronologische Versionsliste. Klick auf Version laedt historischen Stand. "Vergleichen" oeffnet Diff-View.
4. **Brand-Compliance-Check** — Ergebnisse der automatischen Pruefung: Logo-Platzierung, Schriften, Farben, Seitenraender, Seitenzahlen.

**Templates:**
- **Corporate Standard** — Standardformat fuer Mittelstand und Konzerne
- **Compact** — Kurzversion fuer kleine Projekte
- **Premium** — Premium-Layout mit erweiterten Grafiken
- **Kundespezifisch** — Templates mit kundenspezifischen Vorgaben (z.B. Ausschreibungsformat)

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | 2/3 WYSIWYG Editor + 1/3 Control Panel. Volle Toolbar. |
| `breakpoint-lg` | Editor volle Breite. Control Panel als Toggle-Panel (Slide-Over rechts). |
| `breakpoint-md` | Editor volle Breite. Toolbar kompakt. Control Panel als Bottom Sheet. |
| `breakpoint-sm` | Hinweis: "Angebotsformatierung am Desktop empfohlen." Read-only Preview moeglich. |

---

## 5. Datenanforderungen

| Datenpunkt | Quelle | Update-Frequenz |
|-----------|--------|-----------------|
| Angebotsinhalt (Sektionen, Text, Pricing) | API: `GET /offers/{id}` | On-Load |
| Template-Bibliothek | API: `GET /offer-templates` | On-Load, cached |
| Approval-Status | API: `GET /offers/{id}/approval` | Real-time via WebSocket |
| Brand Assets (Logo, Fonts, Farben) | API: `GET /brand-assets` | Cached |
| Versionsliste | API: `GET /offers/{id}/versions` | On-Load, nach Speichern |
| Export | API: `POST /offers/{id}/export` | On-Demand |
| Team-CVs | API: `GET /offers/{id}/team-cvs` | On-Load |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | Minimal — Martina nutzt keine aktive KI. AI unterstuetzt im Hintergrund. |
| **Brand-Compliance-Check** | Automatische Pruefung bei Template-Wechsel und vor Export: Logo-Position, Schriftart (Inter), Farben (DS-Token), Seitenraender. Ergebnisse als Checkliste im Control Panel. |
| **Smart Template Selection** | System schlaegt Template basierend auf Kundentyp und Angebotsvolumen vor: "Corporate Standard empfohlen fuer Konzernkunden." |
| **Auto-Seitenzahlen** | Seitenzahlen, Kopf- und Fusszeilen automatisch aus Template. |
| **CV-Integration** | CVs aus dem CV Generator (`deal/cv-generator.md`) werden als Sektionen eingebettet. Aktualisierung bei CV-Aenderung. |

---

## 7. Preview Panel Integration

| Kontext | Verhalten |
|---------|-----------|
| **WYSIWYG-Editor** | Page-by-Page-Darstellung im Editor (paginiertes Layout, nicht Endlos-Scroll). Seitenumbrueche sichtbar. |
| **Vorschau-Button** | Oeffnet Fullscreen-Preview (DS 6.10). Zeigt finales Dokument wie es exportiert wird. Page-by-Page-Navigation. |
| **Export-Vorschau** | Vor Export: Preview des generierten Formats (PDF-Render, DOCX-Layout-Approximation). |
| **Versions-Vergleich** | "Vergleichen" oeffnet Split-View: links alte Version, rechts aktuelle. Aenderungen als Diff-Highlights. |

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Template-Empfehlung** | "Fuer RetailCorp (Konzern, >500K) empfehlen wir Template 'Corporate Standard'." Als `body-xs` unter der Template-Auswahl. |
| **Sektions-Reihenfolge** | "Bei 5 aehnlichen Angeboten war 'Referenzen' vor 'Pricing' platziert — Reihenfolge uebernehmen?" als Info-Card in Sektionsliste. |
| **Export-Format-Empfehlung** | "RetailCorp hat bisher PDF-Angebote erhalten." als Hinweis im Export-Dialog. |
| **Fehlende Sektionen** | "Sektion 'AGB' fehlt — in 95% der Angebote enthalten." als Warning im Brand-Check. |

---

## 9. Interaktions-Flows

### Flow 1: Angebot formatieren und exportieren (Martina, 25 Min)
```
Notification "Neues Angebot zur Formatierung" → Offer Composer oeffnet →
Template "Corporate Standard" vorausgewaehlt → Martina prueft Sektionsreihenfolge →
Drag-and-Drop: "Referenzen" vor "Pricing" → WYSIWYG: Seitenumbruch anpassen →
Brand-Check: ⚠️ Seitenrand zu schmal → Martina korrigiert →
Brand-Check: ✅ Alles korrekt → "Export" → PDF + DOCX →
Download → Weiterleitung an Katrin
```

### Flow 2: Template wechseln
```
Martina oeffnet bestehendes Angebot → Template: "Corporate Standard" →
Kunde verlangt Ausschreibungsformat → Template wechseln: "Kundespezifisch: RetailCorp" →
Confirmation: "Template wechseln? Inhalte bleiben erhalten, Formatierung wird angepasst." →
Bestaetigen → Layout aktualisiert → Martina prueft → Export
```

### Flow 3: Version wiederherstellen
```
Martina oeffnet Angebot → Control Panel: Versionen → Klick auf "v1 · 26.03." →
Editor laedt v1 → Martina vergleicht mit v3 → "Vergleichen" → Split-View →
Entscheidung: v3 beibehalten → Zurueck zum Editor
```

---

## 10. Handoff-Punkte

| Von | Zu | Trigger | Daten |
|-----|-----|---------|-------|
| Angebots-Canvas | Offer Composer | "Zur Formatierung" | `offerId`, Sektionen |
| Offer Composer | Export (PDF/DOCX/PPTX) | "Export" Button | `offerId`, Format, Template |
| Offer Composer | Katrin (Notification) | "Export abgeschlossen" | `offerId`, Download-Link |
| Offer Composer | CV Generator | "CV aktualisieren" (Team-Sektion) | `consultantId`, `offerId` |
| Opportunity Detail | Offer Composer | Tab "Angebot" → "Formatieren" | `offerId` |

---

## 11. Stitch/Figma-Referenz

| Element | Referenz |
|---------|----------|
| WYSIWYG Editor | Kein Stitch-Aequivalent. Eigenes Editor-Pattern. |
| Template-Auswahl | DS 6.6 Selection Pattern (Dropdown + Preview). |
| Brand-Compliance-Check | DS 6.4 AI-Generated Content Pattern (adaptiert fuer regelbasierte Pruefung). |
| Control Panel | DS 6.1 Context Rail Pattern (1/3). |
| Version History | Inline-Komponente innerhalb Canvas Toolbar (`component-specs/ai-interaction/canvas-toolbar.md`). |

---

## 12. Akzeptanzkriterien

- [ ] 2/3 WYSIWYG Editor + 1/3 Control Panel Layout
- [ ] Template-Auswahl mit mindestens 3 Templates (Standard, Compact, Premium)
- [ ] Drag-and-Drop Sektionsanordnung im Control Panel
- [ ] WYSIWYG-Editor mit Formatting Toolbar (Bold, Italic, Headings, Tabellen, Bilder)
- [ ] Page-by-Page-Darstellung mit sichtbaren Seitenumbruechen
- [ ] Brand-Compliance-Check: Logo, Schriften, Farben, Seitenraender
- [ ] Multi-Format Export: PDF, DOCX, PowerPoint
- [ ] Approval-Status-Badge sichtbar (Thomas-Freigabe)
- [ ] Versionierung mit Vergleich (Diff-View)
- [ ] CV-Integration aus CV Generator
- [ ] Responsive: Slide-Over auf Tablet, Desktop-Empfehlung auf Mobile
- [ ] Accessibility: Editor aria-role="textbox", Toolbar aria-role="toolbar", Focus Management

---

## 13. Offene Fragen

| # | Frage | Status |
|---|-------|--------|
| 1 | Sollen kundenspezifische Templates von Martina selbst erstellt werden oder nur vordefiniert? | Offen — Empfehlung: Phase 1 vordefiniert, Phase 2 Template-Editor. |
| 2 | Wie wird das PowerPoint-Format technisch umgesetzt (Slide-Mapping)? | Offen — Engineering-Entscheidung. |
| 3 | Soll der Brand-Check auch Bildaufloesung und Alt-Texte pruefen? | Offen — Empfehlung: Phase 2 (Accessibility-Erweiterung). |

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. WYSIWYG-Editor, Template-Auswahl, Brand-Check, Multi-Format-Export, Versionierung. |
