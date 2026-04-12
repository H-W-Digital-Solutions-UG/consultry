# Inputs / Text Fields

**Komponenten-Familie:** Primitives
**DS-Version:** v1.3
**DS-Referenz:** 5.2
**Stand:** 31. Maerz 2026

---

## 1. Zweck & Verwendung

Inputs erfassen Nutzer-Eingaben in Formularen, Suchfeldern und KI-Interaktionen. Sechs Varianten decken alle Use Cases ab — von Standard-Formularen bis zu AI-Prompt-Feldern mit Voice-Integration.

---

## 2. Anatomie

```
┌─ Label ──────────────────────────────────────┐
│  FELDNAME *                                   │  <- label token, uppercased
├──────────────────────────────────────────────┤
│  [Prefix Icon]  Placeholder...  [Suffix/🎤]  │  <- Input Field
├──────────────────────────────────────────────┤
│  Hilfetext oder Fehlermeldung                │  <- Helper/Error text
└──────────────────────────────────────────────┘
```

- **Label:** Oberhalb, `label` token (12px, uppercased, `neutral-600`). Pflichtfelder: `*` + `aria-required`.
- **Prefix:** Icon oder Text links (z.B. Suchicon, Waehrungssymbol). `neutral-500`.
- **Suffix:** Icon rechts (z.B. Mic-Button, Clear-Button, Eye-Toggle fuer Passwort).
- **Helper:** Unter dem Input, `body-xs`, `neutral-600`. Bei Error: `semantic-danger`.

---

## 3. Varianten

| Variante | Prefix | Suffix | Background | Verwendung |
|----------|--------|--------|-----------|------------|
| **Default** | — | — | `neutral-0` | Standard-Formularfelder. |
| **Search** | `Search` Icon | Clear `X` (bei Inhalt) + optional `Mic` | `neutral-0` | Signal-Feed-Filter, Berater-Suche, Command Bar. |
| **AI Prompt** | `Sparkles` Icon | `Mic` + Submit Arrow | `ai-surface` | Copilot-Input, Knowledge-Agent-Chat, Canvas-Prompts. |
| **Numeric** | Waehrung (`EUR`) | Stepper-Arrows (optional) | `neutral-0` | Tagessatz, Budget, Pipeline-Wert. `mono-md`, right-aligned. |
| **Textarea** | — | Character Counter | `neutral-0` | Beschreibungen, Notizen, Brief-Bearbeitung. Multi-line, resizable. |
| **Quiet** | — | — | transparent, underline only | Inline-Editing in Cards. Kein Border-Box. |

---

## 4. Props / Konfiguration

| Prop | Typ | Default | Beschreibung |
|------|-----|---------|-------------|
| `variant` | `default` / `search` / `ai-prompt` / `numeric` / `textarea` / `quiet` | `default` | Visuelle Variante. |
| `label` | String | `null` | Label-Text. |
| `placeholder` | String | `""` | Platzhalter-Text. |
| `helperText` | String | `null` | Hilfetext unter dem Input. |
| `error` | String | `null` | Fehlermeldung (ersetzt helperText). |
| `required` | Boolean | `false` | Pflichtfeld-Markierung. |
| `disabled` | Boolean | `false` | Deaktiviert. |
| `prefix` | Icon / String | varianten-abhaengig | Prefix-Element. |
| `suffix` | Icon / Component | varianten-abhaengig | Suffix-Element (Mic-Button, Clear, etc.). |
| `voiceEnabled` | Boolean | `false` | Zeigt Mic-Button als Suffix (Search, AI Prompt). |
| `maxLength` | Number | `null` | Max Zeichenanzahl (Textarea: zeigt Counter). |

---

## 5. Design Tokens

| Element | Token |
|---------|-------|
| Background (default) | `neutral-0` |
| Background (ai-prompt) | `ai-surface` |
| Background (disabled) | `neutral-100` |
| Border (default) | `neutral-200` (1px) |
| Border (hover) | `neutral-300` |
| Border (focus) | `brand-primary` (2px) |
| Border (error) | `semantic-danger` (2px) |
| Border-radius | `radius-md` (8px) |
| Text | `body-md`, `neutral-900` |
| Placeholder | `body-md`, `neutral-500` |
| Label | `label` token (12px, uppercased, `neutral-600`) |
| Helper | `body-xs`, `neutral-600` |
| Error text | `body-xs`, `semantic-danger` |
| Error bg | `semantic-danger-light` |
| Focus shadow (default) | `shadow-focus` (coral glow) |
| Focus shadow (ai-prompt) | `shadow-warm-glow` (amber glow) |
| Padding | 8px vertical, 12px horizontal |
| Height | 40px (single-line), auto (textarea) |
| Prefix/Suffix icon | `icon-sm` (16px), `neutral-500` |
| Numeric font | `mono-md`, right-aligned |

---

## 6. Interaktive States

| State | Border | Background | Effekt |
|-------|--------|-----------|--------|
| **Default** | `neutral-200` | `neutral-0` | — |
| **Hover** | `neutral-300` | `neutral-0` | `duration-fast` |
| **Focus** | `brand-primary` (2px) | `neutral-0` | `shadow-focus`. AI Prompt: `shadow-warm-glow`. |
| **Filled** | `neutral-200` | `neutral-0` | Text sichtbar, Placeholder verschwindet. |
| **Error** | `semantic-danger` (2px) | `semantic-danger-light` | Fehlermeldung unter Input. Icon `AlertCircle` rechts. |
| **Disabled** | `neutral-200` | `neutral-100` | Opacity 0.6, `cursor: not-allowed`. |
| **Read-only** | `neutral-100` | `neutral-50` | Kein Focus-Effekt. Text selektierbar aber nicht editierbar. |
| **AI Pre-Fill** | `neutral-200` | `ai-surface` | "KI-Vorschlag" Label als `body-xs` ueber dem Input. Editierbar. |

---

## 7. Responsive Verhalten

| Breakpoint | Verhalten |
|-----------|-----------|
| Desktop | Standard-Breite per Layout (Grid-Column). Zwei-Spalten-Formulare >1024px. |
| Tablet | Ein-Spalten-Formulare. Volle Breite. |
| Mobile | Volle Breite. Input-Hoehe: 44px (Touch-Target). Textarea: Min 3 Zeilen. Keyboard: passender Typ (`inputmode="numeric"` fuer Zahlen). |

---

## 8. Voice Input Integration

- **Search-Variante:** Optionaler Mic-Button als Suffix. Gemaess DS 6.9 Voice Input Pattern.
- **AI-Prompt-Variante:** Mic-Button immer sichtbar (wenn `voiceEnabled`). Links neben Submit-Arrow.
- **Default/Numeric/Textarea/Quiet:** Kein Voice-Input.

---

## 9. Accessibility

| Aspekt | Umsetzung |
|--------|-----------|
| **Label** | `<label for="...">` verknuepft. Immer sichtbar (kein floating label als einzige Kennzeichnung). |
| **Required** | `aria-required="true"` + visuelles `*`. |
| **Error** | `aria-invalid="true"` + `aria-describedby` verweist auf Fehlermeldung. |
| **Keyboard** | `Tab` fokussiert. Standard-Keyboard-Interaktionen. |
| **Kontrast** | Placeholder: `neutral-500` auf `neutral-0` = 4.6:1 (AA). Error text auf Error bg: geprueft. |
| **Validation** | Inline-Validation auf blur. Nie auf Keystroke (zu aggressiv). |

---

## 10. Verwandte Komponenten

| Komponente | Beziehung |
|-----------|-----------|
| Buttons (`primitives/buttons.md`) | Buttons neben Inputs. Gleiche Hoehe bei `md`. |
| Command Palette (`navigation/command-palette.md`) | Verwendet Search-Variante mit Voice. |
| Copilot Panel (`ai-interaction/copilot-panel.md`) | Verwendet AI-Prompt-Variante. |
| Filter Bar (`composition/filter-bar.md`) | Verwendet Search-Variante fuer Filter-Inputs. |

---

## 11. Changelog

| Version | Datum | Aenderung |
|---------|-------|-----------|
| 1.0 | 31.03.2026 | Initiale Spezifikation. Voice Input fuer Search/AI Prompt. AI Pre-Fill State. |
