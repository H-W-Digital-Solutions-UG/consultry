# Command Palette

**Komponenten-Familie:** Navigation
**DS-Version:** v1.3
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Die Command Palette ist das primaere Keyboard-getriebene Navigations- und KI-Aktions-Interface. Sie ermoeglicht schnellen Zugriff auf alle Bereiche, Entitaeten und KI-Funktionen ueber ein zentrales Suchfeld. Unterstuetzt Voice-Input.

**Primaere Persona:** Katrin (BD-Leiterin) — 10-15x pro Tag, Power-User, <200ms Reaktionszeit erwartet
**Sekundaere Nutzer:** Thomas, Stefan, Martina

**Verwendung in Screens:**
- Command Bar Screen (`screen-specs/ai-experience/command-bar.md`)
- Global verfuegbar auf allen Desktop-Screens via `Cmd+K` / `Ctrl+K`

---

## 2. Anatomie

```
┌─ Command Palette (surface-glass, centered) ──────────┐
│                                                       │
│  [🔍] Suchen oder Aktion starten...           [🎤]   │  <- Input: heading-lg, auto-focus
│                                                       │
├───────────────────────────────────────────────────────┤
│                                                       │
│  NAVIGATION                                           │  <- Kategorie-Header: label token
│  ┌─────────────────────────────────────────────────┐  │
│  │  📊 Cockpit                              Cmd+1  │  │  <- Result Row: icon + label + shortcut
│  │  📈 Pipeline                             Cmd+2  │  │
│  │  👥 Berater                              Cmd+3  │  │
│  └─────────────────────────────────────────────────┘  │
│                                                       │
│  BERATER                                              │
│  ┌─────────────────────────────────────────────────┐  │
│  │  [Avatar] Markus Schneider · SAP Senior    [94] │  │  <- Entity Result: avatar + name + score
│  │  [Avatar] Lisa Tran · Change Management    [78] │  │
│  └─────────────────────────────────────────────────┘  │
│                                                       │
│  KUNDEN                                               │
│  ┌─────────────────────────────────────────────────┐  │
│  │  🏢 RetailCorp AG · 3 Opportunities            │  │
│  │  🏢 Bundesamt fuer Sicherheit · 1 Ausschreibung │  │
│  └─────────────────────────────────────────────────┘  │
│                                                       │
│  KI-AKTIONEN                                    ✨    │  <- AI Section: ai-surface bg
│  ┌─ ai-surface ───────────────────────────────────┐  │
│  │  ✨ Brief generieren fuer "RetailCorp"          │  │
│  │  ✨ Matching starten fuer aktuelle Opportunity   │  │
│  │  ✨ "KI fragen..." → Inline-Prompt oeffnen      │  │
│  └─────────────────────────────────────────────────┘  │
│                                                       │
│  ── Letzte Aktionen ──────────────────────────────    │  <- Recent: body-sm, neutral-600
│  │  Signal-Feed geoeffnet · vor 5 Min              │  │
│  │  Markus S. Profil angesehen · vor 12 Min        │  │
│                                                       │
└───────────────────────────────────────────────────────┘
```

---

## 3. Varianten

| Variante | Trigger | Kontext | Verhalten |
|----------|---------|---------|-----------|
| **Standard** | `Cmd+K` / `Ctrl+K` | Ueberall | Zeigt alle Kategorien: Navigation, Berater, Kunden, KI-Aktionen, Letzte Aktionen. |
| **Kontext-gefiltert** | `Cmd+K` innerhalb eines Moduls | Z.B. in Pipeline | Vorgefiltert auf modulrelevante Ergebnisse. Filter-Chip sichtbar: "[Pipeline ×]". |
| **AI Prompt Mode** | Klick auf "KI fragen..." oder `/` als erstes Zeichen | Innerhalb der Palette | Input wechselt zu AI Prompt (ai-surface bg, sparkle icon). Ergebnisse werden durch Copilot-Antwort ersetzt. |
| **Voice Mode** | Klick auf Mikrofon-Button | Standard | Voice-Transkription ersetzt Texteingabe. Ergebnisse aktualisieren sich live. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `contextModule` | String | `null` | Vorfiltert Ergebnisse auf ein PRD-Modul. |
| `maxResults` | Number | `8` | Maximale Anzahl sichtbarer Ergebnisse pro Kategorie. |
| `showRecent` | Boolean | `true` | Zeigt/verbirgt "Letzte Aktionen"-Sektion. |
| `showAiActions` | Boolean | `true` | Zeigt/verbirgt KI-Aktionen-Sektion. |
| `voiceEnabled` | Boolean | `true` | Aktiviert/deaktiviert Voice-Input. |
| `placeholder` | String | `"Suchen oder Aktion starten..."` | Input-Placeholder. |

---

## 5. Design Tokens

| Element | Token | Anmerkung |
|---------|-------|-----------|
| Overlay | `neutral-900` at 40% opacity | Dunkler als Slide-Over (30%), da volle Aufmerksamkeit erforderlich. |
| Container | `surface-glass` bg, `radius-xl` (14px), `shadow-xl` | Glassmorphism-Effekt. Zentriert, max-width 640px. |
| Input | `heading-lg` Groesse, kein Border, transparent bg | Auto-focus. Placeholder: `neutral-500`. |
| Input Focus | `shadow-warm-glow` | Warm Amber Glow. |
| Kategorie-Header | `label` token (12px, uppercased), `neutral-600` | Sticky innerhalb der Scroll-Area. |
| Result Row | `body-md`, `neutral-900` | Icon `icon-md` links. |
| Result Row Hover | `interactive-warm` bg | `duration-fast`. |
| Result Row Selected (Keyboard) | `interactive-warm` bg + `brand-primary` left border 2px | Arrow-Key-Navigation. |
| Shortcut Badge | `body-xs`, `neutral-500`, `neutral-200` bg, `radius-sm` | Rechtsbuendig. |
| Score Badge | Score Badge Komponente (DS 5.4) | `mono-sm`, farbcodiert. |
| AI Section | `ai-surface` bg | Ganze Sektion, nicht einzelne Rows. |
| AI Row | `body-md`, `ai-accent` Icon (Sparkles) | |
| Recent Section | `body-sm`, `neutral-600` | Dezent. |
| Voice Button | Gemaess DS 6.9 | Rechts im Input. |
| Dividers | `border-subtle` zwischen Kategorien | |

**Performance-Anforderung:** Katrin erwartet <200ms Reaktionszeit. Ergebnisse muessen nach jedem Tastendruck sofort aktualisiert werden (Debounce: 50ms max). Keine sichtbare Latenz bei der Suche.

---

## 6. Interaktive States

| State | Visuell | Verhalten |
|-------|---------|-----------|
| **Default (Open)** | Leeres Input, zeigt "Letzte Aktionen" + Top-Navigation | Auto-focus auf Input. |
| **Typing** | Ergebnisse filtern live. Kategorien ohne Treffer verschwinden. | Debounce 50ms. |
| **Keyboard Navigation** | Aktive Row: `interactive-warm` bg + left border | Arrow Up/Down. `Enter` selektiert. |
| **AI Prompt Mode** | Input-Bg wechselt zu `ai-surface`. Sparkle-Icon links. Ergebnisliste wird durch Copilot-Antwort ersetzt. | Triggered durch "/" oder "KI fragen..."-Klick. |
| **Voice Listening** | Siehe DS 6.9. Live-Transkription im Input. Ergebnisse aktualisieren sich mit transkribiertem Text. | |
| **Voice Processing** | Loader im Mic-Button. | |
| **Loading (Suche)** | Shimmer in Ergebnis-Rows. | Nur bei Server-Suche (Berater, Kunden). Lokale Navigation ist instant. |
| **No Results** | Zentriert: "Keine Ergebnisse fuer '[query]'" + "KI fragen" Button | `body-md`, `neutral-600`. |
| **Error** | Inline Error: "Suche nicht verfuegbar. Bitte erneut versuchen." | `semantic-danger` Text. |

**Entry Animation:** Fade + scale (0.95->1), `duration-normal`, `easing-enter`.
**Exit Animation:** Fade out, `duration-fast`, `easing-exit`.

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| `breakpoint-xl`+ | 640px max-width, zentriert, 20% von oben. |
| `breakpoint-lg` | 600px max-width. |
| `breakpoint-md` | 90vw, zentriert. |
| `breakpoint-sm` | Fullscreen. Kein Overlay. Input am oberen Rand. Ergebnisse darunter scrollbar. Close via "X" oder Back-Geste. |

---

## 8. Voice Input Integration

- **Platzierung:** Mikrofon-Button rechts im Input-Feld. Immer sichtbar (wenn `voiceEnabled`).
- **Verhalten:** Gemaess DS 6.9 Voice Input Pattern.
- **Persona-Kontext:** Katrin nutzt Voice selten (bevorzugt Keyboard). Thomas nutzt Voice haeufiger fuer schnelle Fragen.
- **Live-Filterung:** Waehrend der Transkription aktualisieren sich die Suchergebnisse in Echtzeit basierend auf dem bisherigen Text.
- **AI Prompt via Voice:** Wenn der transkribierte Text mit einer Frage beginnt (erkannt durch "?", "wie", "was", "wer"), wechselt die Palette automatisch in den AI Prompt Mode.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Rolle** | `role="dialog"`, `aria-modal="true"`, `aria-label="Command Palette"` |
| **Focus Trap** | Focus bleibt in der Palette. `Tab` wechselt zwischen Input und Ergebnisliste. |
| **Keyboard** | `Cmd+K`/`Ctrl+K` oeffnet. `Escape` schliesst. Arrow Up/Down navigiert Ergebnisse. `Enter` selektiert. `Home`/`End` springt zu erstem/letztem Ergebnis. |
| **Screen Reader** | Ergebniszahl angesagt: "8 Ergebnisse gefunden". Kategorie-Wechsel angesagt. Aktive Row angesagt mit Name + Typ. |
| **Live Region** | Ergebnisliste: `aria-live="polite"`. Aktualisiert bei Filteraenderung. |
| **Reduced Motion** | Entry/Exit-Animation deaktiviert. Sofortige Anzeige. |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Copilot Panel (`ai-interaction/copilot-panel.md`) | AI Prompt Mode innerhalb der Palette ist eine Kurz-Interaktion. Fuer laengere Gespraeche oeffnet sich der Copilot. |
| Sidebar (`navigation/sidebar.md`) | Navigation-Ergebnisse spiegeln die Sidebar-Struktur. |
| Score Badge (`data-display/score-displays.md`) | Entity-Ergebnisse zeigen Score Badges. |
| Filter Bar (`composition/filter-bar.md`) | Kontext-Filter in der Palette aehneln Filter-Chips. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Voice Input, AI Prompt Mode, Performance-Anforderungen. |
