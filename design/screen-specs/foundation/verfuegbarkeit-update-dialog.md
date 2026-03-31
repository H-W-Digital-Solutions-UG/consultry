# Verfuegbarkeit Update Dialog — Screen Spec

**Screen-ID:** FND-06
**PRD-Modul:** 8.2 — Capacity & Availability
**Journey(s):** Stefan J-Verfuegbarkeit (Stefan/Lisa aktualisieren Verfuegbarkeit)
**Layout-Typ:** Modal
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Kontext & Trigger

| Eigenschaft | Wert |
|-------------|------|
| **Primaere Persona** | Stefan (Senior Consultant) — Verfuegbarkeit schnell aktualisieren |
| **Sekundaer** | Lisa (Consultant: eigene Verfuegbarkeit), Martina (Admin: Verfuegbarkeit fuer Berater setzen) |
| **Frequenz** | Stefan: 1-2x/Woche. Lisa: 1x/Woche (nach Nudge). Martina: 3-5x/Tag (fuer mehrere Berater). |
| **Trigger** | Profil-Editor → Sektion "Verfuegbarkeit" → "Bearbeiten", KI-Nudge ("Dein Projekt endet bald — Verfuegbarkeit aktualisieren?"), Team Dashboard → Berater Slide-Over → "Verfuegbarkeit bearbeiten", Command Bar → "Verfuegbarkeit aktualisieren", Notification Center → Verfuegbarkeits-Erinnerung. |
| **Herkunft** | Consultant Profile Editor, Team & Availability Dashboard, Notification Center, Command Bar. |
| **Ziel** | Verfuegbarkeit fuer kommende Kalenderwochen eintragen oder aendern. Schnell, minimal, maximal 30 Sekunden. |
| **Geraete** | Desktop (primaer), Mobile (Stefan: Quick-Update unterwegs). |

---

## 2. User Stories

| # | Als... | moechte ich... | damit... |
|---|--------|---------------|----------|
| 1 | Stefan | meine Verfuegbarkeit in unter 30 Sekunden aktualisieren | ich das zwischen zwei Meetings erledigen kann |
| 2 | Stefan | Quick-Set-Buttons nutzen ("Ab sofort verfuegbar") | ich nicht manuell Daten auswaehlen muss |
| 3 | Lisa | auf einen KI-Nudge reagieren und meine Verfuegbarkeit direkt setzen | ich nichts vergesse wenn mein Projekt endet |
| 4 | Stefan | wiederkehrende Muster speichern (z.B. "Freitags nicht verfuegbar") | ich nicht jede Woche neu eintragen muss |
| 5 | Stefan | eine Notiz zur Verfuegbarkeit hinterlassen | Katrin den Kontext versteht (z.B. "Ab KW 20 nur 60% wegen Weiterbildung") |
| 6 | Martina | die Verfuegbarkeit eines Beraters im Auftrag setzen | das Staffing-Team aktuelle Daten hat |

---

## 3. Layout — Desktop

**Layout-Typ: Modal (400px, small)**
**Begruendung:** Verfuegbarkeit-Update ist ein minimal-invasiver Quick-Action-Dialog. 400px genug fuer Kalender-Picker, Status-Auswahl und Quick-Set-Buttons. Kein komplexes Layout noetig — Geschwindigkeit ist das Primaer-Ziel.

```
┌─ Modal (400px) ──────────────────────────────────┐
│                                                    │
│  Verfuegbarkeit aktualisieren                 [X]  │
│                                                    │
│  ── Quick-Set ──                                   │
│                                                    │
│  ┌──────────────────┐ ┌───────────────────────┐   │
│  │ Ab sofort         │ │ Nach aktuellem        │   │
│  │ verfuegbar        │ │ Projekt (KW 20)       │   │
│  └──────────────────┘ └───────────────────────┘   │
│                                                    │
│  ── oder manuell ──                                │
│                                                    │
│  Zeitraum:                                         │
│  ┌──────────────────────────────────────────┐     │
│  │  Von: [12.05.2026 📅]                    │     │
│  │  Bis: [30.06.2026 📅]                    │     │
│  └──────────────────────────────────────────┘     │
│                                                    │
│  Status:                                           │
│  ┌──────────────────────────────────────────┐     │
│  │  ● Verfuegbar                             │     │
│  │  ○ Teilweise (__ %)                       │     │
│  │  ○ Nicht verfuegbar                       │     │
│  │  ○ Urlaub                                 │     │
│  └──────────────────────────────────────────┘     │
│                                                    │
│  Wiederkehrend:                                    │
│  [ ] Muster anlegen  [Freitags nicht verf. ▾]     │
│                                                    │
│  Notiz (optional):                                 │
│  ┌──────────────────────────────────────────┐     │
│  │  Weiterbildung SAP S/4HANA, nur 60%...   │     │
│  └──────────────────────────────────────────┘     │
│                                                    │
│  ┌──────────────────────────────────────────┐     │
│  │  ✨ Dein Projekt "MedTech" endet KW 19.  │     │
│  │  Moechtest du ab KW 20 als verfuegbar     │     │
│  │  eingetragen werden?   [Ja, ab KW 20]    │     │
│  └──────────────────────────────────────────┘     │
│                                                    │
│  ┌──────────────────────────────────────────┐     │
│  │        [Abbrechen]    [Speichern]        │     │
│  └──────────────────────────────────────────┘     │
│                                                    │
└────────────────────────────────────────────────────┘
```

**Quick-Set-Buttons:** Outlined Buttons (DS 5.1, Secondary-Variante), `border-default`. Klick fuellt Zeitraum und Status automatisch aus und fokussiert "Speichern".

**KI-Nudge-Bereich:** `ai-surface` Hintergrund, `ai-border` links (3px), Sparkle-Icon. Nur sichtbar wenn KI einen relevanten Kontext erkennt (z.B. Projekt-Ende in Sichtweite).

**Status Radio Buttons:** Visuell mit Farb-Indikator:
- Verfuegbar: `semantic-success` Dot
- Teilweise: `semantic-warning` Dot + Prozent-Input (10-90%)
- Nicht verfuegbar: `semantic-danger` Dot
- Urlaub: `semantic-info` Dot

---

## 4. Layout — Responsive

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Modal 400px, zentriert. |
| `breakpoint-lg` | Modal 400px. |
| `breakpoint-md` | Modal 90vw (max 400px). |
| `breakpoint-sm` | **Bottom Sheet** (volle Breite, von unten). Swipe-down to dismiss. Quick-Set-Buttons prominent oben. "Speichern" als Sticky Button unten (`brand-primary`, full width). Kalender-Picker als native Date-Picker. |

**Mobile Bottom Sheet:**

```
┌─────────────────────────────────┐
│  ── Handle ──                   │
│                                 │
│  Verfuegbarkeit aktualisieren   │
│                                 │
│  [Ab sofort verfuegbar]         │
│  [Nach aktuellem Projekt]       │
│                                 │
│  Von: [12.05.2026 📅]          │
│  Bis: [30.06.2026 📅]          │
│  Status: [Verfuegbar ▾]        │
│                                 │
│  ✨ Projekt endet KW 19...      │
│  [Ja, ab KW 20]                │
│                                 │
│  [Speichern]                    │  <- Sticky, brand-primary, full width
│                                 │
└─────────────────────────────────┘
```

---

## 5. Datenanforderungen

| Daten | Quelle | Aktualisierung |
|-------|--------|---------------|
| Aktuelle Verfuegbarkeit (KW-basiert) | Workforce Service | Bei Modal-Oeffnung |
| Aktuelle Projekte + Endtermine | Project Service | Bei Modal-Oeffnung |
| Wiederkehrende Muster | Workforce Service | Bei Modal-Oeffnung |
| KI-Kontext (Projekt-Ende, Nudge) | AI Copilot Service | Bei Modal-Oeffnung |
| Gespeicherte Muster-Vorlagen | Workforce Service | Statisch |

---

## 6. AI-Interaktion

| Aspekt | Spezifikation |
|--------|--------------|
| **AI Paradigma** | **Proaktiver Nudge** — KI erkennt Kontext und schlaegt vor, Nutzer bestaetigt oder ignoriert. |
| **Projekt-Ende-Erkennung** | KI erkennt, dass Stefans aktuelles Projekt in 2 Wochen endet. Nudge im Modal: "Dein Projekt 'MedTech' endet KW 19. Moechtest du ab KW 20 als verfuegbar eingetragen werden?" |
| **Quick-Set-Kontextualisierung** | "Nach aktuellem Projekt" berechnet automatisch das Enddatum des aktuellen Projekts und setzt Verfuegbarkeit ab dem naechsten Werktag. |
| **Muster-Erkennung** | Nach 3x identischem Update (z.B. "Freitags nicht verfuegbar"): KI schlaegt wiederkehrendes Muster vor: "Du aktualisierst Freitags regelmaessig. [Als Muster speichern]" |
| **Erinnerung** | Woechentlicher Nudge (Notification): "Deine Verfuegbarkeit fuer KW 20+ ist nicht aktuell. [Jetzt aktualisieren]" — oeffnet Dialog direkt. |

---

## 7. Preview Panel Integration

- Nicht zutreffend — Verfuegbarkeit Update ist ein minimal-invasiver Input-Dialog ohne Dokument-Vorschauen.
- **Kontext-Anzeige:** Aktueller Verfuegbarkeits-Status wird als kompakte Info-Zeile oben im Modal angezeigt: "Aktuell: Nicht verfuegbar bis KW 19 (MedTech-Projekt)".

---

## 8. Predictive Intelligence

| Pattern | Implementierung |
|---------|----------------|
| **Projekt-Ende-Nudge** | "Dein Projekt endet in 2 Wochen. [Verfuegbarkeit aktualisieren]" (DS 6.12). Notification → oeffnet Dialog direkt. |
| **Smart Defaults** | Bei Oeffnung: Zeitraum vorausgefuellt basierend auf naechstem Projekt-Ende. Status: "Verfuegbar" vorausgewaehlt wenn kein Folgeprojekt bekannt. |
| **Muster-Vorschlag** | "Du bist seit 4 Wochen freitags nicht verfuegbar. [Als Muster speichern]" — Inline-Hinweis (`body-xs`, `neutral-600`). |
| **Staffing-Impact** | Bei "Nicht verfuegbar": "Achtung: Du bist fuer 2 Staffing-Anfragen vorgesehen. [Details]" — Warning-Hinweis im Modal. |

---

## 9. Interaktions-Flows

### Flow 1: Stefan Quick-Update (15 Sek, Mobile)
```
Notification: "Projekt endet KW 19 — Verfuegbarkeit aktualisieren" →
Tap → Bottom Sheet oeffnet →
KI-Nudge: "Ab KW 20 als verfuegbar?" → Stefan tippt "Ja, ab KW 20" →
Zeitraum + Status automatisch gesetzt →
"Speichern" (Sticky) → Bottom Sheet schliesst →
Success Toast: "Verfuegbarkeit aktualisiert"
```

### Flow 2: Stefan manuelles Update (30 Sek, Desktop)
```
Profil-Editor → Verfuegbarkeit-Sektion → "Bearbeiten" →
Modal oeffnet → Von: 12.05.2026, Bis: 30.06.2026 →
Status: "Teilweise (60%)" → Notiz: "Weiterbildung SAP" →
"Speichern" → Modal schliesst → Verfuegbarkeits-Kalender aktualisiert
```

### Flow 3: Lisa reagiert auf Nudge (20 Sek, Mobile)
```
Notification: "Dein Profil fehlt: Verfuegbarkeit" →
Tap → Bottom Sheet oeffnet → Quick-Set: "Ab sofort verfuegbar" →
Zeitraum + Status gesetzt → "Speichern" →
Success Toast → Vollstaendigkeits-Score steigt
```

### Flow 4: Stefan setzt wiederkehrendes Muster
```
Modal oeffnet → [✓] Muster anlegen →
Dropdown: "Freitags nicht verfuegbar" →
Gilt ab: KW 15 → "Speichern" →
Jeden Freitag automatisch "Nicht verfuegbar" eingetragen
```

---

## 10. Handoff-Punkte

| Von/Zu | Screen | Trigger |
|--------|--------|---------|
| **Von:** Consultant Profile Editor | Verfuegbarkeit Update Dialog (Modal) | "Verfuegbarkeit bearbeiten" |
| **Von:** Team & Availability Dashboard | Verfuegbarkeit Update Dialog (Modal) | Berater Slide-Over → "Bearbeiten" |
| **Von:** Notification Center | Verfuegbarkeit Update Dialog (Modal/Bottom Sheet) | Verfuegbarkeits-Nudge |
| **Von:** Command Bar | Verfuegbarkeit Update Dialog (Modal) | "Verfuegbarkeit aktualisieren" |
| **Zu:** Consultant Profile Editor | `foundation/consultant-profile-editor.md` | "Speichern" / Modal schliessen |
| **Zu:** Team & Availability Dashboard | `foundation/team-availability-dashboard.md` | "Speichern" (wenn von dort geoeffnet) |

---

## 11. Stitch/Figma-Referenz

| Referenz | Beschreibung |
|----------|-------------|
| **Stitch Board:** Kein dediziertes Item | Verfuegbarkeits-Dialog als Teil des Profil-Editors konzipiert. |
| **Figma:** Kein eigener Frame | Zu erstellen als Unterframe von Profil-Editor oder eigenstaendiger Dialog. |

---

## 12. Akzeptanzkriterien

- [ ] Modal (400px, Desktop) oder Bottom Sheet (Mobile) mit Overlay
- [ ] Quick-Set-Buttons: "Ab sofort verfuegbar", "Nach aktuellem Projekt (KW X)"
- [ ] Kalender-Picker fuer Von/Bis-Datum (native Date Picker auf Mobile)
- [ ] Status-Auswahl: Verfuegbar, Teilweise (mit %-Input), Nicht verfuegbar, Urlaub
- [ ] Farbcodierte Status-Indikatoren (Dots mit `semantic-*` Tokens)
- [ ] Wiederkehrendes Muster: Checkbox + Dropdown mit Vorlagen
- [ ] Optionales Notiz-Feld (`body-md`, max 200 Zeichen)
- [ ] KI-Nudge mit `ai-surface` Hintergrund wenn Projekt-Ende erkannt
- [ ] "Speichern" in <30 Sekunden moeglich (Quick-Set: <15 Sekunden)
- [ ] Mobile: Bottom Sheet, Swipe-to-Dismiss, Sticky "Speichern" Button
- [ ] Staffing-Impact-Warnung wenn Berater fuer Anfragen vorgesehen
- [ ] Accessibility: Modal role="dialog", aria-modal, Focus Trap, Escape schliesst

---

## 13. Offene Fragen

1. **Granularitaet:** Tages- oder Wochen-basiert? *Empfehlung: KW-basiert (Wochen) als Standard. Tages-Granularitaet fuer "Teilweise" und Muster.*
2. **Muster-Verwaltung:** Wo werden gespeicherte Muster verwaltet/geloescht? *Empfehlung: Im Profil-Editor, Sektion Verfuegbarkeit.*
3. **Freigabe-Workflow:** Muss ein Update von einem Lead bestaetigt werden? *Empfehlung: Nein fuer V1. Berater verwalten ihre Verfuegbarkeit selbst.*
4. **Historisierung:** Werden vergangene Verfuegbarkeits-Aenderungen gespeichert? *Empfehlung: Ja, als Audit-Trail im Profil. Sichtbar fuer Admin.*

---

## 14. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Screen-Spezifikation. |
