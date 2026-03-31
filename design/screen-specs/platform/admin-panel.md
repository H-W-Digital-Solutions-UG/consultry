# Admin Panel — Screen Spec

**Screen-ID:** PLT-03
**PRD-Modul:** 13.2 — Settings / Multi-Entity
**Journey(s):** J4-S1 (Berater-Onboarding), MARTINA-J1-S1/S2 (Admin-Workflows)
**Layout-Typ:** Progressive Disclosure
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Martina (Office-Managerin) — 2-4h/Tag, Desktop-only |
| **Sekundaer** | Thomas (Einstellungen, Rollen), Katrin (gelegentlich Berater-Daten) |
| **Frequenz** | Martina: taeglich, 2-4h. Thomas: woechentlich, 10-15 Min. |
| **Trigger** | Sidebar-Navigation "System → Admin", Notification "Neuer CV eingegangen", Berater-Onboarding-Workflow. |
| **Herkunft** | Sidebar (primaer), Notification Center (bei CV-Uploads), Onboarding-Wizard (J4-S1). |
| **Ziel** | Berater verwalten (anlegen, bearbeiten, CV-Import), System-Einstellungen, Rollen & Rechte, Multi-Entity-Konfiguration. |
| **Geraete** | Desktop only. Martina arbeitet ausschliesslich am Desktop mit grossem Monitor. |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Martina | neue Berater schnell anlegen und CVs importieren | das Onboarding nicht verzoegert wird |
| 2 | Martina | CV-Extraktionen ueberpruefen und korrigieren | die Berater-Profile korrekt sind |
| 3 | Martina | Berater in einer Tabelle suchen, filtern und bearbeiten | ich den Ueberblick ueber 50+ Berater behalte |
| 4 | Martina | Bulk-Aktionen ausfuehren (Status aendern, Skills aktualisieren) | ich nicht jeden Berater einzeln bearbeiten muss |
| 5 | Thomas | Rollen und Rechte konfigurieren | die Zugriffssteuerung korrekt ist |
| 6 | Thomas | Multi-Entity-Einstellungen (mehrere Beratungen/Standorte) verwalten | jede Einheit korrekt konfiguriert ist |
| 7 | Martina | Compliance-Status aller Berater sehen | ich DSGVO-Anforderungen erfuelle |

---

## 3. Layout — Desktop

**Layout-Typ: Progressive Disclosure**
**Begruendung:** Admin-Panel ist formular- und tabellen-basiert. Linearer Ablauf: Navigation (Sidebar) → Tabelle/Liste → Detail/Bearbeitung. Bento Grid waere unpassend fuer administrative Workflows.

```
┌─ Sidebar ─┬─ Admin Panel ────────────────────────────────────┐
│            │                                                  │
│  System    │  Admin                                           │
│  > Admin   │                                                  │
│    > Berater│  ┌─ Tab Navigation ────────────────────────────┐ │
│    > Rollen│  │  [Berater] [Rollen & Rechte] [Einstellungen]│ │
│    > Einst.│  │  [Multi-Entity] [Compliance]                 │ │
│            │  └─────────────────────────────────────────────┘ │
│            │                                                  │
│            │  ┌─ Action Bar ────────────────────────────────┐ │
│            │  │  [+ Berater anlegen]  [📤 CV importieren]    │ │
│            │  │  Suche: [___________]  [Status ▾] [Rolle ▾] │ │
│            │  └─────────────────────────────────────────────┘ │
│            │                                                  │
│            │  ┌─ Data Table ────────────────────────────────┐ │
│            │  │  ☐  Name          Rolle       Status   ...  │ │
│            │  │  ☐  Markus S.     Senior SC   Aktiv    [→] │ │
│            │  │  ☐  Lisa T.       Consultant  Aktiv    [→] │ │
│            │  │  ☐  Tim K.        Junior SC   Onboard. [→] │ │
│            │  │  ☐  ... (50+ rows)                         │ │
│            │  └─────────────────────────────────────────────┘ │
│            │                                                  │
│            │  ┌─ Bulk Actions (bei Selektion) ──────────────┐ │
│            │  │  3 ausgewaehlt: [Status aendern] [Skills]   │ │
│            │  │  [Exportieren] [Loeschen]                    │ │
│            │  └─────────────────────────────────────────────┘ │
│            │                                                  │
│            │  Zeige 1-20 von 54          [< 1 2 3 >]         │
│            │                                                  │
└────────────┴─────────────────────────────────────────────────┘
```

**Detail-Ansicht (Klick auf Berater → Slide-Over):**

```
┌─ Slide-Over Panel (640px, wide) ──────────────────┐
│                                                    │
│  Markus Schneider                          [X]     │
│  Senior SAP Consultant · Aktiv seit 15.01.2024     │
│                                                    │
│  ┌─ Tabs ────────────────────────────────────────┐ │
│  │  [Profil] [Skills] [CV-Extraktion] [Historie] │ │
│  └───────────────────────────────────────────────┘ │
│                                                    │
│  ┌─ Profil-Formular ────────────────────────────┐ │
│  │  Vorname: [Markus        ]                    │ │
│  │  Nachname: [Schneider    ]                    │ │
│  │  E-Mail: [m.schneider@...]                    │ │
│  │  Rolle: [Senior Consultant ▾]                 │ │
│  │  Standort: [Muenchen ▾]                       │ │
│  │  Tagessatz: [1.450,00 EUR ]                   │ │
│  │                                               │ │
│  │  DSGVO-Status: ✅ Eingewilligt (12.03.2026)   │ │
│  │                                               │ │
│  │  [Speichern]  [Abbrechen]                     │ │
│  └───────────────────────────────────────────────┘ │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Volle Tabelle mit allen Spalten. Slide-Over Detail (640px). |
| `breakpoint-lg` | Tabelle mit reduzierten Spalten (Name, Rolle, Status, Actions). Slide-Over Detail. |
| `breakpoint-md` | Eingeschraenkt. Tabelle wird zu Card-Liste. Detail als Fullscreen. |
| `breakpoint-sm` | **Nicht unterstuetzt.** Martina arbeitet ausschliesslich am Desktop. Admin-Funktionen sind auf Mobile nicht verfuegbar. Redirect zu "Bitte Desktop verwenden"-Hinweis. |

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Berater-Liste | Consultant Service (API) | Bei Seitenladen, nach CRUD-Operationen |
| Berater-Detail (Profil, Skills, CV) | Consultant Service | Beim Oeffnen des Slide-Over |
| CV-Extraktion (Confidence Scores) | AI Extraction Service | Nach CV-Upload, bei Review |
| Rollen & Rechte | IAM Service | Statisch, bei Aenderung |
| Multi-Entity-Konfiguration | Tenant Service | Statisch, bei Aenderung |
| Compliance-Status (DSGVO) | Consent Service | Real-time |
| Skill-Taxonomie | Knowledge Graph | Statisch, bei Updates |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Invisible AI** — Martinas AI-Paradigma. KI arbeitet im Hintergrund, Ergebnisse sind erklaerbar. |
| **CV-Extraktion** | KI extrahiert aus hochgeladenen CVs: Name, Skills, Erfahrung, Zertifizierungen. Ergebnisse werden mit Confidence-Scores angezeigt. |
| **Confidence-Anzeige** | Jedes extrahierte Feld zeigt: `✅ 95%` (gruen, sicher), `⚠️ 72%` (orange, Review empfohlen), `❌ 45%` (rot, manuell pruefen). |
| **Skill-Normalisierung** | KI schlaegt normalisierte Skills vor. Martina bestaetigt oder korrigiert. Dialog: `foundation/skill-normalization-dialog.md`. |
| **Keine autonomen KI-Aktionen** | KI veraendert nie Daten ohne explizite Bestaetigung durch Martina. Jede KI-Aktion ist ein Vorschlag mit Bestaetigung. |
| **Erklaerbarkeit** | Bei jedem KI-Vorschlag: Tooltip mit Erklaerung. "Basierend auf: Lebenslauf Seite 2, Abschnitt Berufserfahrung." |

---

## 7. Preview Panel Integration

- **CV-Vorschau:** Im Tab "CV-Extraktion" des Slide-Over Panels: Inline-Preview des hochgeladenen CVs (DS 6.10, Variante "Inline", volle Panel-Breite). Links: PDF-Vorschau. Rechts: Extrahierte Felder mit Confidence-Scores.
- **Split-View:** CV-PDF links (50%), extrahierte Daten rechts (50%). Martina kann direkt vergleichen und korrigieren.
- **Unterstuetzte Formate:** PDF (primaer), DOCX (konvertiert zu Preview).

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Smart Pre-Fill** | Beim Anlegen eines neuen Beraters: Felder vorausgefuellt basierend auf CV-Extraktion. `ai-surface` bg + "KI-Vorschlag" Label (DS 6.12). |
| **Duplikat-Erkennung** | Beim Anlegen: "Aehnlicher Berater gefunden: [Name]. Zusammenfuehren?" Toast mit Aktion. |
| **Bulk-Vorschlaege** | Bei Bulk-Selektion: KI schlaegt passende Bulk-Aktion vor. "3 Berater mit abgelaufenem Consent. [Consent-Anfrage senden]?" |
| **Compliance-Nudge** | Automatische Warnung wenn DSGVO-Consent eines Beraters in 30 Tagen ablaeuft. |

---

## 9. Interaktions-Flows

### Flow 1: Neuen Berater anlegen (Martina)
```
Martina klickt "+ Berater anlegen" → Modal oeffnet →
[Manuell] oder [CV importieren] → Martina waehlt "CV importieren" →
Datei-Upload → KI extrahiert Daten (3-5 Sek) → Shimmer-Loading →
Formular zeigt vorausgefuellte Felder mit Confidence-Scores →
Martina korrigiert niedrige Confidence-Felder → "Speichern" →
Berater erscheint in Tabelle mit Status "Onboarding"
```

### Flow 2: CV-Extraktion Review
```
Notification: "Neuer CV eingegangen: Tim K." →
Martina klickt → Admin Panel oeffnet, Tim K. Slide-Over →
Tab "CV-Extraktion" → Split-View: PDF links, Felder rechts →
⚠️ Skill "SAP" bei 72% Confidence → Martina prueft im PDF →
Korrigiert zu "SAP S/4HANA" → ✅ → Speichern →
Skill-Normalisierung-Dialog oeffnet → Bestaetigt Zuordnung
```

### Flow 3: Bulk Status-Aenderung
```
Martina selektiert 5 Berater via Checkbox → Bulk Action Bar erscheint →
"Status aendern" → Dropdown: "Inaktiv" → Bestaetigung-Dialog →
"5 Berater werden auf 'Inaktiv' gesetzt. Fortfahren?" →
Bestaetigt → Success-Toast: "5 Berater aktualisiert."
```

### Flow 4: Compliance-Check
```
Martina wechselt zu Tab "Compliance" → Tabelle mit DSGVO-Status →
Filter: "Ausstehend" → 3 Berater mit auslaufendem Consent →
Bulk-Selektion → "Consent-Anfrage senden" → E-Mail wird versendet →
Status wechselt zu "Ausstehend"
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Sidebar | Admin Panel | Navigation "System → Admin" |
| **Von:** Notification Center | Admin Panel (CV-Review) | Klick auf "Neuer CV"-Notification |
| **Zu:** Consultant Profile Editor | `foundation/consultant-profile-editor.md` | "Profil bearbeiten" im Slide-Over |
| **Zu:** Skill Normalization Dialog | `foundation/skill-normalization-dialog.md` | Bei Skill-Zuordnung nach CV-Extraktion |
| **Zu:** Berater-Onboarding Wizard | `growth/berater-onboarding-wizard.md` | "Onboarding starten" fuer neuen Berater |
| **Zu:** CV-Extraktion Review | `deal/cv-extraktion-review.md` | "CV pruefen" im Slide-Over |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board Item #15:** Admin Panel | Admin/Settings View. Zeigt Tabellen-basiertes Admin-Layout. |
| **Stitch Board Item #11:** Berater-Profil-Anpassung | Berater-Profil Bearbeitung. Relevant fuer Slide-Over-Detail. |
| **Figma:** Frame vorhanden (Stitch-Import) | Admin Panel Frame importiert, aber ohne Component Library. |

---

## 12. Akzeptanzkriterien

- [ ] Tab-Navigation: Berater, Rollen & Rechte, Einstellungen, Multi-Entity, Compliance
- [ ] Berater-Tabelle: Suche, Filter (Status, Rolle), Sortierung (Name, Datum), Pagination
- [ ] Checkbox-Selektion fuer Bulk-Aktionen (Status aendern, Skills, Export, Loeschen)
- [ ] "+ Berater anlegen" mit manuellem Formular und CV-Import-Option
- [ ] CV-Import: Datei-Upload → KI-Extraktion → Pre-Fill mit Confidence-Scores
- [ ] Slide-Over Detail (640px) mit Tabs: Profil, Skills, CV-Extraktion, Historie
- [ ] CV-Extraktion Split-View: PDF-Preview links, extrahierte Felder rechts
- [ ] Confidence-Scores: gruen (>85%), orange (60-85%), rot (<60%)
- [ ] Skill-Normalisierung nach CV-Extraktion
- [ ] Compliance-Tab: DSGVO-Status aller Berater, Bulk Consent-Anfrage
- [ ] Duplikat-Erkennung bei neuem Berater
- [ ] Mobile: "Desktop verwenden"-Hinweis statt Admin-Funktionen
- [ ] Accessibility: Tabelle mit aria-sort, Slide-Over mit role="dialog", Keyboard-Navigation

---

## 13. Offene Fragen

1. **Multi-Entity-Scope:** Wie viele Entitaeten (Beratungen/Standorte) muessen in Phase 1 unterstuetzt werden? *Empfehlung: 1 Entitaet in Phase 1. Multi-Entity ab Phase 2.*
2. **CV-Format-Vielfalt:** Welche CV-Formate muessen unterstuetzt werden? *Empfehlung: PDF (Pflicht), DOCX (Pflicht), LinkedIn-Export (Phase 2).*
3. **Audit-Trail:** Muessen alle Admin-Aktionen protokolliert werden? *Empfehlung: Ja, Tab "Historie" zeigt alle Aenderungen mit Timestamp und Nutzer.*
4. **Loesch-Policy:** Hard-Delete oder Soft-Delete fuer Berater? *Empfehlung: Soft-Delete (Status "Archiviert"). DSGVO-Loeschung als separater, bestaetiger Prozess.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
