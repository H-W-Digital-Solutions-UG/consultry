# Empty States

**Komponenten-Familie:** Feedback
**DS-Version:** v1.3
**DS-Referenz:** 6.7 + 4.1 (Illustrationen)
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Empty States zeigen dem Nutzer, dass ein Bereich (Liste, Feed, Dashboard, Tabelle) aktuell keine Daten enthaelt — und geben Orientierung, was als naechstes zu tun ist. Sie verhindern leere, verwirrende Screens und nutzen den Moment fuer Onboarding, Hilfestellung oder Fehlerbehandlung.

**Regel:** Kein leerer Bereich ohne Empty State. Jede Liste, jede Tabelle, jeder Feed braucht einen definierten Leer-Zustand.

**Alle Personas:** Empty States erscheinen kontextabhaengig fuer alle Rollen. Thomas (Managing Partner) sieht leere Dashboards bei Erstbenutzung, Katrin (BD-Leiterin) sieht "Keine Treffer" im Signal-Feed, Lisa (Consultant) sieht leere Projekt-Listen, Martina (Office-Managerin) sieht leere Freigabe-Queues.

**Verwendung in Screens:**
- Signal Feed: Keine Signale gefunden (Filter, Erstbenutzung)
- Pipeline: Leere Pipeline-Stages
- Berater-Suche: Keine Matching-Ergebnisse
- Projekt-Dashboard: Noch keine Projekte
- Knowledge Base: Keine Assets
- Notification Inbox: Keine Benachrichtigungen

---

## 2. Anatomie

```
┌─ Empty State Container (zentriert, max-width 400px) ──────┐
│                                                            │
│              ┌──────────────────────┐                      │
│              │                      │                      │
│              │    [Illustration]     │  <- 128px, line-art  │
│              │                      │                      │
│              └──────────────────────┘                      │
│                                                            │
│              Titel mit optionalem Emoji                    │  <- heading-md
│                                                            │
│              Beschreibung: Was der Nutzer tun kann          │  <- body-md, max 2 Zeilen
│                                                            │
│              [Primaerer CTA Button]                        │  <- Optional, Primary Button
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Ton | Beispiel-Titel | Beispiel-CTA | Verwendung |
|----------|-----|---------------|-------------|------------|
| **First Use** | Ermutigend, einladend | "Noch keine Signale? Lass uns loslegen!" | "Erstes Signal erstellen" / "Daten importieren" | Erstbenutzung eines Moduls. Onboarding-Moment. |
| **No Results** | Hilfsbereit, konstruktiv | "🔍 Keine Treffer. Versuche andere Filter." | "Filter zuruecksetzen" | Suche/Filter liefert keine Ergebnisse. |
| **Error** | Beruhigend, sachlich | "Etwas ist schiefgelaufen." | "Erneut versuchen" | Daten konnten nicht geladen werden. API-Fehler. |
| **No Permission** | Neutral, erklaerend | "Kein Zugriff auf diesen Bereich." | "Zugriff anfragen" (optional) | Nutzer hat keine Berechtigung fuer diesen Inhalt. |

### Illustrations-Richtlinien

Illustrationen folgen den Regeln aus DS 4.1:

| Eigenschaft | Regel |
|-------------|-------|
| Groesse | 128px (zwischen `illust-sm` 120px und `illust-md` 180px) |
| Stil | Line-art, 1.5-2px Stroke, warm palette |
| Farbpalette | `neutral-700`, `neutral-400`, `brand-primary`, `brand-warm`. Max 3 Farben. |
| Stimmung | Professionell, ruhig, unterstuetzend. Keine Cartoons, keine Clipart. |
| Hintergrund | Transparent |

| Variante | Illustration |
|----------|-------------|
| First Use (Pipeline) | Stilisierter Trichter mit Pfeil-Andeutung |
| First Use (Berater) | Profil-Outline mit Plus-Symbol |
| No Results (Suche) | Lupe ueber leerem Dokument |
| No Results (Filter) | Trichter mit durchgestrichenem Ergebnis |
| Error | Zahnrad mit Ausrufezeichen |
| No Permission | Schloss-Symbol mit Schild |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `first-use` / `no-results` / `error` / `no-permission` | `no-results` | Bestimmt Ton, Illustration und Standard-Texte. |
| `illustration` | String (Asset-Key) | Varianten-abhaengig | Illustration aus dem Asset-Katalog. |
| `title` | String | erforderlich | Titel-Text. Max 60 Zeichen. Emoji erlaubt (DS 1.10). |
| `description` | String | `null` | Erklaerungstext. Max 120 Zeichen, 2 Zeilen. |
| `action` | `{ label: String, onClick: Function, variant: String }` | `null` | Optionaler CTA-Button. Default-Variante: Primary. |
| `secondaryAction` | `{ label: String, onClick: Function }` | `null` | Optionaler zweiter Link/Button (Ghost). |
| `compact` | Boolean | `false` | Kompakte Darstellung ohne Illustration (fuer kleine Container wie Sidebar-Listen). |

---

## 5. Design Tokens

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Container | Zentriert, `max-width: 400px` | Innerhalb des Eltern-Containers zentriert. |
| Container Padding | `space-8` vertikal, `space-6` horizontal | Grosszuegiger Weissraum. |
| Illustration | 128px Hoehe, zentriert | `space-6` margin-bottom zum Titel. |
| Titel | `heading-md`, `neutral-800` | Zentriert. |
| Titel-Gap | `space-3` margin-bottom | Abstand zur Beschreibung. |
| Beschreibung | `body-md`, `neutral-600` | Zentriert. Max 2 Zeilen. |
| Beschreibung-Gap | `space-5` margin-bottom | Abstand zum CTA. |
| CTA Button | Primary Button (`md`), `brand-primary` | Zentriert. Nicht Hero-Gradient (ausser Login/Onboarding). |
| Secondary Action | Ghost Button, `brand-primary` | Unter dem CTA, `space-2` Gap. |
| Emoji | Erlaubt im Titel (DS 1.10) | 🔍 fuer Suche, 📭 fuer leere Inbox. Sparsam, max 1 pro Titel. |
| Compact-Variante | Ohne Illustration, `space-4` Padding | Titel `heading-sm`, Beschreibung `body-sm`. |

### Kinetische Typografie

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Titel-Animation | `ktype-heading-emphasis` | Word-by-word Fade-in bei First Use. Nur bei Erstaufruf. |
| Illustration-Entry | Fade in + translateY, `duration-normal`, `easing-enter` | Subtile Einblend-Animation. |

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Default** | Standard-Darstellung mit Illustration, Titel, Beschreibung, CTA. | Statisch. |
| **First Render** | Illustration + Titel animieren ein (Fade + translateY). | `ktype-heading-emphasis` fuer Titel bei First Use. Einmalig. |
| **CTA Hover** | Button-Hover gemaess Button-Spec (Primary: `brand-primary-light`). | `duration-fast`. |
| **CTA Loading** | Button zeigt Spinner (z.B. "Erneut versuchen" bei Error). | Button-Breite beibehalten. |
| **Transition to Content** | Empty State fadet aus, Content fadet ein. | `duration-normal`. Uebergang von Empty State zu geladenem Inhalt. |
| **Compact** | Ohne Illustration. Kleinere Typografie. | Fuer eingebettete Listen-Container. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | Zentriert im Container. Max-width 400px. |
| `breakpoint-lg` | Wie xl. |
| `breakpoint-md` | Wie xl. Container passt sich dem verfuegbaren Platz an. |
| `breakpoint-sm` | Max-width 90vw. Illustration auf 96px reduziert. `space-6` vertikal Padding. CTA Button full-width. |

---

## 8. Voice Input Integration

Nicht zutreffend — Empty States sind statische Anzeige-Komponenten ohne eigene Voice-Interaktion. Der CTA-Button kann jedoch eine Voice-faehige Oberflaeche oeffnen (z.B. "Erstes Signal erstellen" oeffnet Command Palette mit Voice).

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | `role="status"` auf dem Container. Informiert Screen Reader ueber leeren Zustand. |
| **Label** | `aria-label` mit Varianten-Text: "Keine Ergebnisse" / "Erstbenutzung" / "Fehler beim Laden". |
| **Illustration** | `aria-hidden="true"` — dekorativ, nicht informativ. |
| **Titel** | Als `h2` oder `h3` (abhaengig von der Seiten-Hierarchie). Screen Reader liest Titel + Beschreibung. |
| **CTA** | `<button>` mit klarem `aria-label`. Bei Error: `aria-label="Daten erneut laden"`. |
| **Live Region** | Bei Error-Variante: `aria-live="polite"` damit Screen Reader den Fehlerzustand ankuendigt. |
| **Reduced Motion** | `ktype-heading-emphasis` deaktiviert. Sofortige Anzeige. Illustration-Animation deaktiviert. |
| **Contrast** | `neutral-800` Titel auf `neutral-0`/`neutral-100`: erfuellt WCAG AA. `neutral-600` Beschreibung: 4.5:1 minimum. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Loading & Shimmer (`feedback/loading-shimmer.md`) | Uebergang: Loading -> Empty State (wenn keine Daten) oder Loading -> Content. |
| Toasts & Notifications (`feedback/toasts-notifications.md`) | Error-Toast kann parallel zum Error Empty State erscheinen. |
| Buttons (`primitives/buttons.md`) | CTA nutzt Primary Button. |
| Cards (`data-display/cards.md`) | Empty States erscheinen innerhalb von Card-Containern. |
| Data Tables (`data-display/data-tables.md`) | Tabellen zeigen Empty State im Body bei leerer Datenlage. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. 4 Varianten (First Use, No Results, Error, No Permission). Illustrations-Richtlinien. Kinetische Typografie fuer First Use. Compact-Variante. |
