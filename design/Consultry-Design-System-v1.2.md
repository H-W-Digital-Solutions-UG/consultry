# Consultry Design System v1.2

## AI-Native Consultancy CRM for the DACH Market

**Status:** Revised — Warm Palette Realignment & Progressive Disclosure
**Date:** 31 March 2026
**Product:** Consultry
**Audience:** Design, Engineering, Product
**Changelog:** v1.2 realigns the color palette to the actual Consultry logo (warm orange→coral→purple), replaces cool Slate neutrals with warm Stone-tinted grays, shifts brand-primary to deep warm coral (#BF5347) matching logo's center, demotes gradient to hero-only usage (solid buttons are default), introduces progressive disclosure framework, adds command palette and slide-over panel components, warm dark mode inspired by Anthropic's Claude, and new design principles from the creative brief audit. All QA notes from v1.1 resolved. All open questions resolved.

---

## 1. Design Principles

### 1.1 Vertrauenswürdig (Trustworthy)

Consultry handles sensitive business intelligence — consultant profiles, financial data, client relationships, legal documents. Every visual decision must reinforce trust. Clean lines, generous whitespace, precise typography. The interface should feel like a well-run consultancy itself: competent, discreet, reliable.

**Gradient usage rule:** The brand gradient (orange→coral→purple) is strictly reserved for the logo mark and isolated hero moments (login screen hero CTA, onboarding splash). It is NOT permitted on standard in-app buttons, page backgrounds, card fills, or decorative stripes. All standard UI buttons use solid `brand-primary`. The gradient is a *brand signature*, not a UI control treatment — this keeps the app feeling like a professional work tool rather than a marketing surface.

### 1.2 Informationsdichte mit Klarheit (Dense but Clear)

BD leaders, partners, and consultants work with complex, multi-dimensional data — match scores, pipeline stages, financial margins, skill taxonomies. The system must present rich information without overwhelming. Use progressive disclosure: summaries first, details on demand. Every screen should answer "what matters right now?" within 2 seconds.

**Progressive Disclosure Levels:**

- **Level 0 — Glance** (list/table row): Key identifier + one metric + status badge. Answers "what is this?" in under 1 second. No more than 5 data points visible.
- **Level 1 — Summary** (card or expanded row): Full context header, 2–3 key metrics, AI score with one-line explanation, primary action. Answers "should I care?" in under 3 seconds.
- **Level 2 — Detail** (slide-over panel or dedicated page): Full record with all fields, AI-generated brief, activity timeline, related items, all actions. Answers "what do I do about it?"
- **Level 3 — Deep Dive** (modal or sub-page): Editing, configuration, match breakdown, full audit trail. Reserved for intentional investigation.

See Section 6.8 for transition patterns.

### 1.3 AI-Transparent (AI as Partner, Not Black Box)

Consultry is AI-native. Every AI-generated insight — match scores, engagement briefs, signal priorities, contract risk flags — must show its reasoning. Scores always come with explanations. Recommendations always cite sources. The user must feel in control: AI recommends, humans decide.

### 1.4 DACH-Professionell (Professional for DACH)

The DACH market expects understated professionalism. Formal but warm typography. German-language-first content design (longer words, compound nouns, formal address). Respect for data privacy is not just a feature — it's a visual signal (consent badges, audit indicators, data-source attributions visible throughout).

### 1.5 Lifecycle-Durchgängig (End-to-End Continuity)

From signal detection to project delivery to knowledge capture, the UI must feel like one continuous workflow. Consistent navigation patterns, shared visual language across modules, and seamless transitions between lifecycle stages. A user moving from the Signal Feed to an Engagement Brief to a Proposal should never feel like they've switched applications.

### 1.6 Brand Voice

| Attribute | Meaning |
|-----------|---------|
| **Strategic** | Language implies forward-thinking, data-driven decisions. Not reactive. |
| **Clear** | No jargon for jargon's sake. German precision in every label. |
| **Intelligent** | The system knows things — surface that knowledge confidently. |
| **Calm authority** | Never urgent or panicked. Even alerts are composed. |

**Messaging principle:** "We design narratives that drive decisions" — not "We help you tell stories." Apply this to all microcopy, empty states, onboarding text, and error messages.

### 1.7 Architektonische Asymmetrie (Architectural Asymmetry)

The interface is not a grid of equal boxes. Use intentional asymmetry — wider main columns paired with narrower context rails — to guide the eye toward the primary task. The main content area (actions, data, decisions) gets 2/3 of horizontal space. The context rail (AI insights, activity, related items) gets 1/3. This creates a natural reading hierarchy without requiring the user to scan equally across the full viewport.

### 1.8 Flow statt Kürze (Flow Over Brevity)

Screens are not static displays — they are steps in a workflow. Every layout should answer three questions: Where did the user just come from? What decision do they need to make here? Where do they go next?

Visual cues for flow: breadcrumbs show provenance, primary CTAs point forward ("Nächster Schritt", "Brief erstellen"), and the context rail shows related next-actions. The interface should feel like a guided path through complexity, not a dashboard that demands the user figure out what to do.

### 1.9 Stofflichkeit (Materiality)

The interface should feel like it's made of something. Surfaces have subtle warmth (warm neutrals, not sterile grays). Shadows create gentle ambient light rather than harsh drops. Typography has the weight and precision of printed matter. This is achieved not through literal textures, but through tonal warmth, generous whitespace, and typographic care. The goal is a bespoke workspace merged with an intelligent command center: warm yet clinical, dense yet breathable.

---

## 2. Logo & Brand Mark

### The Consultry Mark

The Consultry logo consists of two elements:

**Logomark:** A geometric, octagonal "C" shape with an open right side and a small circle positioned at the upper right. The "C" represents Consultry as a platform, while the circle represents the human consultant — intelligence, the individual, the expert. Together they suggest "people-powered intelligence within a structured system." The geometric facets (octagonal rather than perfectly round) convey precision and engineered quality.

**Wordmark:** "Consultry" set in a bold, geometric sans-serif typeface (Inter Bold for all contexts — in-app, brand, and marketing). Clean, high-x-height, with even letter spacing.

**Tagline:** "Die operative Intelligence Engine für Beratungen" — set in lighter weight, below the wordmark. Used in marketing contexts, omitted in-app.

### Logo Color Modes

| Mode | Mark Treatment | Wordmark Color | Background | Usage |
|------|---------------|----------------|------------|-------|
| **Gradient (Primary)** | Orange→Coral→Purple gradient (`#E8913A` → `#E8655A` → `#9B59B6`) | `neutral-900` (`#3E3C3A`) | White / light surface | Hero usage: login screen, marketing site, documentation covers. |
| **Gradient on Dark** | Same gradient | `neutral-0` (`#FFFFFF`) | Dark / `neutral-900` backgrounds | App icon, dark marketing materials, splash screens. |
| **Monochrome Dark** | `neutral-900` (`#3E3C3A`) | `neutral-900` | White / light surface | In-app sidebar, documents, email headers. Professional contexts. |
| **Monochrome White** | `neutral-0` (`#FFFFFF`) | `neutral-0` | Dark surfaces | Sidebar (dark variant), footer, dark-mode contexts. |

The gradient direction is 135° (top-left to bottom-right), matching the actual logo asset. The gradient is only ever applied to the logomark itself — never to the wordmark.

### Logo Sizing

| Context | Format | Min Size |
|---------|--------|----------|
| **App Sidebar (collapsed)** | Logomark only (monochrome white) | 24px |
| **App Sidebar (expanded)** | Logomark (32px) + Wordmark | Wordmark 14px |
| **Login / Onboarding** | Full logo (gradient mark + wordmark + tagline) | Wordmark 20px |
| **Favicon / App Icon** | Logomark only (gradient on dark bg) | 16px |
| **Email / Documents** | Logomark (monochrome) + Wordmark (no tagline) | Wordmark 12px |
| **App Store** | Logomark gradient on `neutral-900` bg, 512px | 512px |

### Clear Space & Minimum Margins

Clear space around the logo equals the height of the circle element (the "dot") on all sides. No other elements, text, or visual noise may intrude into this zone.

### Design Language from the Mark

The mark's geometric, faceted shape influences the broader design language: favour `radius-md` (8px) and `radius-lg` (10px) for component corners — rounded enough to feel modern, angular enough to echo the octagonal mark. Avoid fully rounded containers (except avatars/status dots/pill badges).

---

## 3. Design Tokens

### 3.1 Color System

#### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-gradient-start` | `#E8913A` | Warm amber-orange. Start of the hero gradient. Matches logo's dominant warm tone. |
| `brand-gradient-mid` | `#E8655A` | Bright coral. Midpoint of gradient — represents the logo's visual center. |
| `brand-gradient-end` | `#9B59B6` | Soft purple. End of gradient. Rarely used standalone. |
| `brand-gradient` | `linear-gradient(135deg, #E8913A, #E8655A, #9B59B6)` | The full hero gradient. **Hero-only:** logo mark, login screen CTA, onboarding splash. Never on standard in-app buttons. |
| `brand-primary` | `#BF5347` | **Solid primary.** Deep warm coral. The workhorse brand color for all UI: buttons, links, active states, focus rings. Contrast: 4.62:1 on white — passes WCAG AA. Derived from the logo's coral center, darkened for accessibility compliance. |
| `brand-primary-light` | `#CA7168` | Hover states on primary elements. |
| `brand-primary-dark` | `#A2463C` | Active/pressed states. 6.04:1 on white. |
| `brand-warm` | `#E8913A` | Secondary brand color. Energy moments: chart accents, progress indicators, warm highlights. Never used in status badges (see disambiguation rule below). |
| `brand-warm-light` | `#F0A85E` | Hover state for warm elements. |

**Why deep warm coral as solid primary:** The logo's visual center averages to #F76662 (warm coral/salmon). True coral is too bright for WCAG AA on white, so the primary is a darkened version (#BF5347) that preserves the coral warmth while hitting 4.62:1. This sits naturally between the logo's orange top and rose-pink bottom — exactly the "between rose, salmon, and orange" zone that defines Consultry's visual identity.

**Gradient is hero-only:** Standard in-app buttons always use solid `brand-primary`. This keeps the app feeling like a professional work tool. The gradient is reserved for brand moments where visual energy is appropriate (login, marketing, logo).

**Blue's new role:** The former `brand-primary` blue (#3A5DAE) is retained as `semantic-info` only. Blue is inherently trustworthy in enterprise UX and serves informational states well, but is no longer the hero color.

**Brand-warm vs. semantic-warning disambiguation:** `brand-warm` (#E8913A, bright amber) and `semantic-warning` (#D97706, dark gold) are both orange-family. Rule: `brand-warm` is ONLY for brand energy (chart accents, highlights, decorative). `semantic-warning` is ONLY for status indicators (badges, alerts). `brand-warm` must NEVER appear in a status badge. The hue difference (bright amber vs. darker gold) + contextual labels + mandatory AlertTriangle icon on warnings ensures disambiguation.

#### Interactive Accent

| Token | Hex | Usage |
|-------|-----|-------|
| `interactive-warm` | `rgba(232, 145, 58, 0.18)` | Hover backgrounds, selected row tints. Warm amber glow at 18% for reliable perceptibility on light surfaces. |
| `interactive-warm-strong` | `rgba(232, 145, 58, 0.30)` | Focus ring glow, loading pulse. |
| `interactive-warm-glow` | `0 0 0 3px rgba(232, 145, 58, 0.25)` | Focus ring shadow for AI prompt fields. |

**Accessibility:** Interactive tints are never used as text color. They are background/border/decorative only. For clickable text (links), use `brand-primary` (#BF5347) which passes AA at 4.62:1 on white.

#### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `semantic-success` | `#16A34A` | Won deals, high match scores, on-track projects, opted-in consent. |
| `semantic-success-light` | `#E8F5ED` | Success backgrounds, badges. |
| `semantic-warning` | `#D97706` | Stale opportunities, margin erosion, approaching deadlines, consent pending. |
| `semantic-warning-light` | `#FEF3E0` | Warning backgrounds. |
| `semantic-danger` | `#DC2626` | Lost deals, blocked consent, contract risk flags, budget overruns. |
| `semantic-danger-light` | `#FEE2E2` | Error backgrounds. |
| `semantic-info` | `#3A5DAE` | Informational: new signals, AI suggestions. Retained blue for trust. |
| `semantic-info-light` | `#EEF2FF` | Info backgrounds, notification badges. |

**Brand-warm vs. semantic-warning:** See disambiguation rule in the Brand Colors section above.

#### Neutral Palette (Warm Stone)

| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-900` | `#3E3C3A` | Primary text. Warm charcoal (lightened). 11.0:1 on white. |
| `neutral-800` | `#494645` | Headings, strong emphasis. |
| `neutral-700` | `#605D59` | Secondary text, labels. 6.5:1 on white. |
| `neutral-600` | `#7B7671` | Placeholder text, captions, metadata. 4.5:1 on white — AA minimum. |
| `neutral-500` | `#B5B0AD` | Disabled text, subtle dividers. |
| `neutral-400` | `#DCDAD8` | Icons (inactive). |
| `neutral-300` | `#DDDAD5` | Borders, dividers. |
| `neutral-200` | `#EBE9E8` | Table row alternation, card borders. |
| `neutral-100` | `#F6F6F6` | Page backgrounds. |
| `neutral-50` | `#FBFBFA` | Elevated surface backgrounds. |
| `neutral-0` | `#FFFFFF` | Card surfaces, input fields, modals. |

These warm Stone-tinted neutrals are brightened 15% from the base Stone scale, creating a lighter, airier workspace that still retains warmth. Text feels like ink on quality paper. Backgrounds feel open and breathable rather than heavy. This follows the approach used by Anthropic's Claude interface — warmth in the neutrals prevents the "cold SaaS" feel while the brightness keeps the interface from feeling dense.

#### Surface Hierarchy

Structural boundaries are primarily defined through tonal surface shifts, not borders. This creates a "carved from one surface" feel.

| Level | Token | Hex | Usage |
|-------|-------|-----|-------|
| **Level 0 (Page)** | `neutral-100` | `#F6F6F6` | Main workspace background. |
| **Level 1 (Elevated)** | `neutral-50` | `#FBFBFA` | Sidebar content areas, elevated sections. |
| **Level 2 (Cards)** | `neutral-0` | `#FFFFFF` | Cards, input fields, table backgrounds. |
| **Level 3 (Floating)** | `surface-glass` | See below | Popovers, floating AI suggestions, command palette. |

**Surface-glass token:**

| Token | Value | Usage |
|-------|-------|-------|
| `surface-glass` | `background: rgba(255, 248, 245, 0.85); backdrop-filter: blur(12px)` | AI floating suggestions, command palette, search overlay. Ephemeral floating elements only. The warm-tinted glass (#FFF8F5 base) aligns with the warm palette. |

**The structural boundary rule:** Prefer tonal surface shifts for major structural divisions (page sections, sidebar/content boundary). Use subtle borders (`border-subtle`, `border-default`) only within components (table rows, card dividers, input fields). This gives the "molded" look where major UI regions feel carved from a single block while components maintain clarity.

#### AI-Specific Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `ai-surface` | `#FFF8F5` | Warm-tinted off-white for AI-generated content. Subtle warmth distinguishes AI outputs while staying cohesive with the warm palette. |
| `ai-border` | `#F0D4C8` | Left-stripe border on AI-generated cards (3px). Warm peach. |
| `ai-accent` | `#BF5347` | AI attribution text, "Generiert von Consultry KI" labels. Uses brand-primary. |
| `ai-sparkle` | `#E8913A` | AI "intelligence" indicator (sparkle icon, confidence bar glow). Brand-warm. |

#### Score & Match Colors (Gradient Scale)

| Token | Hex | Score Range | Usage |
|-------|-----|-------------|-------|
| `score-excellent` | `#16A34A` | 80–100 | Excellent match, healthy project. Text: `neutral-900`. |
| `score-good` | `#E8913A` | 60–79 | Good fit, on track. Uses brand-warm for cohesion. Text: `neutral-900`. |
| `score-moderate` | `#D97706` | 40–59 | Moderate match, needs attention. Text: `neutral-900`. |
| `score-weak` | `#EA580C` | 20–39 | Weak match, at risk. Text: `neutral-900`. |
| `score-poor` | `#DC2626` | 0–19 | Poor fit, critical. Text: `neutral-0` (white). |

Score bars in the 60–79 range render in `brand-warm` with dark text — reinforcing the brand in the most common score zone. This is intentional: the "good" state should feel native and positive.

**Score badge text rule:** Only `score-poor` (red, #DC2626) has sufficient contrast for white text (4.83:1). All other score colors use `neutral-900` (dark) text to ensure WCAG AA compliance. This is a hard rule — never use white text on orange, amber, or green score badges.

**Colorblind accessibility:** `score-good` (warm orange) and `score-moderate` (amber) are close in hue for some color vision deficiencies. Always pair score colors with a secondary differentiator: the numerical score in `mono-md` and a text label ("Gut" / "Mäßig") in dense data views.

---

### 3.2 Typography

**Primary Font:** Inter — clean, highly legible at small sizes, excellent number rendering (critical for financial data), strong multi-language support including German umlauts and Swiss-French characters. Used for ALL text in-app: body text, labels, data, headings, and display sizes.

**Monospace Font:** JetBrains Mono — for scores, IDs, financial figures, code in knowledge assets.

Inter handles everything from 11px captions to 48px hero headings. At display sizes (32px+), use -0.02em letter-spacing for a tight, editorial quality. This eliminates the need for a second sans-serif font, reducing load time and maintaining visual consistency.

| Token | Font | Weight | Size | Line Height | Letter Spacing | Usage |
|-------|------|--------|------|-------------|----------------|-------|
| `display-hero` | Inter | 700 (Bold) | 48–56px | 1.1 | -0.02em | Login screen headline, onboarding hero. |
| `display-lg` | Inter | 600 (SemiBold) | 32–40px | 1.2 | -0.02em | Onboarding headings, marketing subheads. |
| `heading-xxl` | Inter | 700 (Bold) | 32px / 2rem | 40px / 1.25 | -0.02em | Page titles (Dashboard, Pipeline, Cockpit). |
| `heading-xl` | Inter | 700 (Bold) | 24px / 1.5rem | 32px / 1.33 | -0.01em | Section headers (Module titles). |
| `heading-lg` | Inter | 600 (SemiBold) | 20px / 1.25rem | 28px / 1.4 | -0.01em | Card headers, dialog titles. |
| `heading-md` | Inter | 600 (SemiBold) | 16px / 1rem | 24px / 1.5 | 0 | Sub-section headers, table group headers. |
| `heading-sm` | Inter | 600 (SemiBold) | 14px / 0.875rem | 20px / 1.43 | 0 | Small card headers, sidebar section titles. |
| `body-lg` | Inter | 400 (Regular) | 16px / 1rem | 24px / 1.5 | 0 | Primary body text, descriptions. |
| `body-md` | Inter | 400 (Regular) | 14px / 0.875rem | 20px / 1.43 | 0 | Default body text, table cells, form labels. |
| `body-sm` | Inter | 400 (Regular) | 12px / 0.75rem | 16px / 1.33 | 0.01em | Captions, timestamps, metadata, badges. |
| `body-xs` | Inter | 400 (Regular) | 11px / 0.6875rem | 14px / 1.27 | 0.02em | Fine print, legal references, tooltip text. |
| `label` | Inter | 500 (Medium) | 12px / 0.75rem | 16px / 1.33 | 0.04em | Form labels, data labels (uppercased). |
| `mono-md` | JetBrains Mono | 400 | 14px / 0.875rem | 20px / 1.43 | 0 | Match scores, IDs, financial figures. |
| `mono-sm` | JetBrains Mono | 400 | 12px / 0.75rem | 16px / 1.33 | 0 | Small scores, code, metadata IDs. |

**German Typography Notes:**

- Compound nouns (e.g., "Deckungsbeitragsrechnung", "Ausschreibungsantwort") require generous horizontal space. Never truncate German compound nouns mid-word — use ellipsis only at morpheme boundaries or wrap fully. If it doesn't fit, the layout is too rigid — re-evaluate the grid.
- Number formatting: German locale (1.234,56 instead of 1,234.56). Swiss locale supported (1'234.56).
- Date formatting: DD.MM.YYYY (German standard). ISO 8601 for technical contexts.

---

### 3.3 Spacing Scale

Based on a 4px base unit:

| Token | Value | Usage |
|-------|-------|-------|
| `space-0` | 0px | No spacing. |
| `space-1` | 4px | Tight: icon-to-label gaps, badge padding. |
| `space-2` | 8px | Compact: intra-component spacing. |
| `space-3` | 12px | Default: form field gaps, list item padding. |
| `space-4` | 16px | Standard: card internal padding, section gaps within a card. |
| `space-5` | 20px | Comfortable: between related card groups. |
| `space-6` | 24px | Section: between distinct content sections on a page. |
| `space-8` | 32px | Region: between major page regions. |
| `space-10` | 40px | Large: page-level top/bottom margins. |
| `space-12` | 48px | Extra large: between major page sections. |
| `space-16` | 64px | Maximum: hero/splash spacing (onboarding screens only). |

**Component Padding Defaults:**

- Cards: `space-4` (16px) all sides.
- Buttons: `space-2` (8px) vertical, `space-4` (16px) horizontal.
- Inputs: `space-2` (8px) vertical, `space-3` (12px) horizontal.
- Table cells: `space-2` (8px) vertical, `space-3` (12px) horizontal.
- Modal: `space-6` (24px) all sides.

**Spacing Rhythm (Hierarchy):**

Spacing creates visual hierarchy. Apply these ranges consistently:

- **Within a component:** `space-2` to `space-3` (8–12px). Compact, cohesive. Elements feel grouped.
- **Between related components:** `space-4` to `space-5` (16–20px). Grouped but distinct.
- **Between sections:** `space-6` to `space-8` (24–32px). Clear visual break.
- **Between page regions:** `space-10` to `space-12` (40–48px). Structural separation.

When in doubt, err on the side of more space. Dense data is made readable by generous negative space around it, not by cramming more into tight quarters.

---

### 3.4 Border & Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-none` | 0px | No rounding (dense data tables). |
| `radius-sm` | 4px | Badges, tags, small chips. |
| `radius-md` | 8px | Buttons, inputs, dropdowns, tooltips. |
| `radius-lg` | 10px | Cards, modals, popovers. |
| `radius-xl` | 14px | Floating panels, feature highlights, command palette. |
| `radius-full` | 9999px | Avatars, status dots, pill badges. |
| `border-default` | 1px solid `neutral-200` (`#EBE9E8`) | Card borders, input borders, table borders. |
| `border-subtle` | 1px solid `neutral-100` (`#F6F6F6`) | Dividers within cards, section separators. |
| `border-strong` | 1px solid `neutral-300` (`#DDDAD5`) | Emphasized boundaries. |
| `border-focus` | 2px solid `brand-primary` | Focus ring for keyboard navigation. |

---

### 3.5 Elevation & Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-none` | none | Flat elements, elements resting on a surface. |
| `shadow-sm` | `0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)` | Cards resting on the page. Very subtle. |
| `shadow-md` | `0 4px 12px rgba(0,0,0,0.06)` | Dropdowns, popovers, floating action menus. Blur 12px. |
| `shadow-lg` | `0 8px 20px rgba(0,0,0,0.08)` | Modals, dialogs, notification toasts. Blur 20px. |
| `shadow-xl` | `0 12px 32px rgba(0,0,0,0.12)` | Command palettes, overlay panels, slide-over panels. |
| `shadow-focus` | `0 0 0 3px rgba(191, 83, 71, 0.25)` | Focus ring shadow (brand-primary coral glow). |
| `shadow-warm-glow` | `0 0 0 3px rgba(232, 145, 58, 0.25)` | Input focus glow (warm amber tint). Used on AI prompt fields. |

Consultry cards should barely lift off the page — the hierarchy comes from spacing, tonal shifts, and borders, not shadows. Shadows are "ambient luminosity" — soft glow rather than harsh drops.

---

### 3.6 Motion & Animation

| Token | Value | Usage |
|-------|-------|-------|
| `duration-instant` | 100ms | Micro-interactions: button press, checkbox toggle, badge appear. |
| `duration-fast` | 150ms | Hover states, tooltip show/hide, tab switches. |
| `duration-normal` | 250ms | Panel open/close, card expand/collapse, dropdown reveal, slide-over enter. |
| `duration-slow` | 400ms | Modal enter/exit, page transitions, data loading shimmer. |
| `easing-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard easing. |
| `easing-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering the viewport. |
| `easing-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Elements leaving. |

**Motion Principles:**

- Prefer opacity + transform transitions over layout shifts.
- AI-generated content uses a subtle "reveal" animation (250ms stagger per paragraph).
- Score bars animate from 0 to value (400ms, easing-enter) when first rendered.
- Never animate more than 3 elements simultaneously — sequential stagger preferred.
- **Gradient hover (hero-only):** Hero gradient buttons shift brightness +8% on hover. Subtle, not flashy. `duration-fast`. Standard buttons use `brand-primary-light` token instead.
- **Logo pulse (optional):** For loading states, the logomark can have a gentle opacity pulse (0.6→1.0, 1.5s cycle). Reserved for full-page loads and login only.
- Motion is SUBTLE, not flashy. No bouncing, no spinning, no parallax. Opacity + transform only.

---

## 4. Iconography

### Icon Style

Use **Lucide Icons** (open-source, MIT licensed) as the primary icon set. Clean, consistent 24×24 stroke-based icons aligned with Consultry's professional aesthetic. Icons should be `neutral-600` by default, `neutral-900` when active or emphasized.

### Icon Sizes

| Token | Size | Stroke | Usage |
|-------|------|--------|-------|
| `icon-xs` | 14px | 1.5px | Inline with `body-sm`, badge icons. |
| `icon-sm` | 16px | 1.5px | Inline with `body-md`, table row icons, button icons (sm). |
| `icon-md` | 20px | 2px | Default: navigation, card headers, button icons (md). |
| `icon-lg` | 24px | 2px | Section headers, empty states, prominent actions. |
| `icon-xl` | 32px | 2px | Feature illustrations, onboarding, large empty states. |

### Custom Icon Tokens (Consultry-Specific)

| Concept | Lucide Icon | Token |
|---------|-------------|-------|
| Signal / Alert | `Zap` | `icon-signal` |
| Match Score | `Target` | `icon-match` |
| Consultant | `UserCircle` | `icon-consultant` |
| Client / Account | `Building2` | `icon-client` |
| Opportunity | `TrendingUp` | `icon-opportunity` |
| Engagement Brief | `FileText` | `icon-brief` |
| Proposal / Offer | `FileCheck` | `icon-proposal` |
| Contract | `FileSignature` | `icon-contract` |
| Project | `FolderKanban` | `icon-project` |
| Knowledge Asset | `BookOpen` | `icon-knowledge` |
| Skill / Competency | `Puzzle` | `icon-skill` |
| Financial / Margin | `PiggyBank` | `icon-financial` |
| Event | `Calendar` | `icon-event` |
| Outreach / Campaign | `Send` | `icon-outreach` |
| DSGVO / Consent | `ShieldCheck` | `icon-consent` |
| AI / Intelligence | `Sparkles` | `icon-ai` |
| Discovery Run | `Radar` | `icon-discovery` |
| Risk / Warning | `AlertTriangle` | `icon-risk` |
| Pipeline | `GitBranch` | `icon-pipeline` |

---

## 5. Core Components

### 5.1 Button

#### Variants

| Variant | Background | Text | Border | Usage |
|---------|-----------|------|--------|-------|
| **Primary** | `brand-primary` (`#BF5347`) | `neutral-0` | none | Main CTAs: "Angebot erstellen", "Discovery starten", "Jetzt matchen". One per section max. Solid color — no gradient. |
| **Secondary** | `neutral-0` | `neutral-700` | `border-default` | Supporting actions: "Abbrechen", "Filter anwenden", "Exportieren". |
| **Ghost** | transparent | `brand-primary` | none | Tertiary actions: "Alle anzeigen", inline links, toolbar actions. |
| **Danger** | `semantic-danger` | `neutral-0` | none | Destructive actions: "Löschen", "Archivieren", "Consent widerrufen". Requires confirmation dialog. |
| **Hero (Gradient)** | `brand-gradient` | `neutral-0` | none | **Hero-only.** Login screen CTA, onboarding primary action. Never used in standard in-app flows. |

**Button contrast:** White text on `brand-primary` (#BF5347) passes WCAG AA at 4.62:1. The Hero (Gradient) variant is used so rarely that it requires individual contrast verification for each instance — the orange edge of the gradient (#E8913A) only passes for large text (3:1).

#### Sizes

| Size | Height | Font | Padding | Icon Size | Usage |
|------|--------|------|---------|-----------|-------|
| `sm` | 32px | `body-sm` (12px) | 6px 12px | 14px | Table row actions, inline. |
| `md` | 40px | `body-md` (14px) | 8px 16px | 16px | Default. Forms, cards, dialogs. |
| `lg` | 48px | `body-lg` (16px) | 12px 24px | 20px | Page-level primary actions. Hero (Gradient) variant only at this size. |

#### States

| State | Visual Change | Behavior |
|-------|--------------|----------|
| Default | As defined per variant. | — |
| Hover | Primary: `brand-primary-light`. Secondary: `neutral-50` bg. Ghost: underline. Hero gradient: brightness +8%. | `duration-fast`. |
| Active/Pressed | Primary: `brand-primary-dark`. Others: brightness -5%. | `duration-instant`. |
| Focus | `border-focus` ring (2px `brand-primary`) + `shadow-focus`. | Keyboard-triggered. |
| Disabled | Opacity 0.4. No pointer events. | `cursor: not-allowed`. |
| Loading | Text replaced by spinner (16px). Width preserved. | Non-interactive during loading. |

#### Accessibility

- **Role:** `button` (native `<button>` element preferred).
- **Keyboard:** `Tab` to focus, `Enter` or `Space` to activate.
- **Screen reader:** Label announced. Loading state via `aria-busy="true"`.
- **Contrast:** All variants must meet WCAG AA (4.5:1 for text).

---

### 5.2 Input / Text Field

#### Variants

| Variant | Usage |
|---------|-------|
| **Default** | Standard text input for forms. Rounded corners (`radius-md`). |
| **Search** | Prefixed with search icon. Used in signal feed filters, consultant search, knowledge Q/A. |
| **AI Prompt** | `ai-surface` background, sparkle icon prefix, `shadow-warm-glow` on focus. "Beschreibe deine Anforderung..." |
| **Numeric** | Right-aligned text, monospace font. For financial figures, scores, quantities. |
| **Textarea** | Multi-line. For descriptions, notes, brief content, outreach message editing. |
| **Quiet** | Underline-only, no border box. For inline editing within cards where the input is contextually obvious. Not for standalone forms. |

#### States

| State | Border | Background | Focus Effect |
|-------|--------|-----------|-------------|
| Default | `neutral-200` | `neutral-0` | — |
| Hover | `neutral-300` | `neutral-0` | — |
| Focus | `brand-primary` (2px) | `neutral-0` | `shadow-focus` (coral glow). AI Prompt variant: `shadow-warm-glow`. |
| Error | `semantic-danger` (2px) | `semantic-danger-light` | — |
| Disabled | `neutral-200` | `neutral-100` | — |

---

### 5.3 Card

#### Variants

| Variant | Visual | Usage |
|---------|--------|-------|
| **Default** | `neutral-0` bg, `border-default`, `shadow-sm`, `radius-lg`. | Consultant profile, client account, opportunity. |
| **AI-Generated** | `ai-surface` bg, left border 3px `brand-primary` (`#BF5347`), `radius-lg`. Sparkles icon + "KI-generiert" label. | Engagement briefs, AI recommendations, match explanations. |
| **Metric** | `neutral-0` bg, no border, `shadow-sm`. Large number prominent. | Dashboard KPI cards: revenue, utilization, pipeline value. |
| **Signal** | Left border (4px) colored by signal type. `neutral-0` bg. | Signal feed items: leadership changes, hiring signals, tenders. |
| **Compact** | `neutral-0` bg, `border-subtle`, no shadow. Reduced padding (`space-3`). | Dense list items: search results, pipeline items. |
| **Selected** | `brand-primary` left border (3px) + `interactive-warm` bg. | Multi-select: team composition, skill selection. |

AI-generated cards use a 3px left border (not a full border) to unify the "left-border = content type" visual language across signals, AI content, and selections.

#### Card Anatomy

```
┌─────────────────────────────────────────┐
│  [Icon/Avatar]  Title          [Badge]  │  ← Header: `space-4` padding
│                 Subtitle                │
├─────────────────────────────────────────┤  ← Divider: `border-subtle`
│                                         │
│  Content area                           │  ← Body: `space-4` padding
│  (Text, scores, tags, mini-charts)      │
│                                         │
├─────────────────────────────────────────┤  ← Divider (optional)
│  [Action Button]       [Secondary Btn]  │  ← Footer: `space-3` padding
└─────────────────────────────────────────┘
```

Shadow: `shadow-sm` (very light). Cards should barely lift off `neutral-100` page background. Border: `neutral-200`. Clean like Stripe.

---

### 5.4 Badge / Tag

#### Variants

| Variant | Background | Text | Border | Usage |
|---------|-----------|------|--------|-------|
| **Status — Success** | `semantic-success-light` | `semantic-success` | none | Won deal, opted-in, on-track. |
| **Status — Warning** | `semantic-warning-light` | `semantic-warning` | none | Pending consent, at-risk, stale. |
| **Status — Danger** | `semantic-danger-light` | `semantic-danger` | none | Lost deal, suppressed, overdue. |
| **Status — Info** | `semantic-info-light` | `semantic-info` | none | New signal, enrichment update. |
| **Status — Neutral** | `neutral-200` | `neutral-700` | none | Default/unknown, inactive. |
| **Skill Tag** | `neutral-100` | `neutral-800` | `neutral-300` 1px | Normalized skill tags. |
| **Skill Tag — Matched** | `interactive-warm` | `brand-primary` | `brand-warm` 1px | Skills matching opportunity requirements. |
| **AI Badge** | `ai-surface` | `ai-accent` | `ai-border` 1px | "KI-generiert", "Confidence: 87%." |
| **Score Badge** | Colored by score range | `neutral-900` (dark) or `neutral-0` (white on red only) | none | Match scores. Uses `score-*` tokens. Mono font. See score text rule in 3.1. |
| **DSGVO Consent** | Colored by state | Per state | none | UNKNOWN/PENDING/OPTED-IN/SUPPRESSED. |

#### Sizes

| Size | Height | Font | Padding | Usage |
|------|--------|------|---------|-------|
| `sm` | 20px | `body-xs` (11px) | 2px 6px | Inline in tables. |
| `md` | 24px | `body-sm` (12px) | 3px 8px | Default. Cards, profile views. |
| `lg` | 28px | `body-md` (14px) | 4px 10px | Prominent: page-level status. |

---

### 5.5 Data Table

#### Structure

| Element | Token | Notes |
|---------|-------|-------|
| Header row | `neutral-50` bg, `heading-sm` font, `neutral-600` text | Sticky on scroll. |
| Body row | `neutral-0` bg | `body-md`. |
| Alternating rows | `neutral-50` bg | Default for financial tables. Optional elsewhere. |
| Row hover | `interactive-warm` bg | `duration-fast`. |
| Row selected | `brand-primary` 5% bg + left border 3px `brand-primary` | Multi-select. |
| Borders | `border-subtle` between rows | No vertical borders (clean). For lighter tables (activity feeds, search results), alternating rows without dividers is acceptable. |

#### Column Types

| Type | Alignment | Font | Notes |
|------|-----------|------|-------|
| Text | Left | `body-md` | Truncate with ellipsis (never mid-word for German). |
| Number / Currency | Right | `mono-md` | German: 1.234,56 €. |
| Score | Center | `mono-md` inside Score Badge | Color-coded by range. |
| Status | Center | Badge component | Semantic variants. |
| Date | Left | `body-md` | DD.MM.YYYY. |
| Actions | Right | Icon buttons (`sm`) | Max 3 visible → overflow "…" menu. |

---

### 5.6 Navigation

#### Sidebar (Primary Navigation)

| Property | Value |
|----------|-------|
| Width (expanded) | 240px |
| Width (collapsed) | 64px |
| Background | `neutral-900` (`#3E3C3A` — warm charcoal, brightened) |
| Text | `neutral-0` at 70% opacity (inactive), 100% (active) |
| Active indicator | Left border 3px `brand-warm` (`#E8913A`) + bg `rgba(232, 145, 58, 0.12)` |
| Hover | bg `rgba(255,255,255,0.06)` |
| Icons | `icon-md` (20px), `neutral-0` |
| Sections | Grouped by platform layer: Cockpit, Foundation, Growth, Deal, Delivery, System |
| Logo | Monochrome white mark. Expanded: mark + "Consultry" wordmark. Collapsed: mark only. |
| Collapse toggle | Bottom of sidebar, chevron icon. |

The warm charcoal sidebar creates a rich, grounded frame for the content. The orange active indicator (`brand-warm`) on warm dark background is highly visible and brand-cohesive — the logo's dominant warm tone echoed in navigation.

#### Top Bar

| Property | Value |
|----------|-------|
| Height | 56px |
| Background | `neutral-0` |
| Border | Bottom `border-default` |
| Content (left) | Breadcrumb navigation (`body-sm`, `neutral-600`, separator `/`) |
| Content (center) | Global search (Input `search` variant, 480px max width) |
| Content (right) | Notifications bell (with count badge), User avatar + dropdown |

---

### 5.7 Score Display

| Variant | Visual | Usage |
|---------|--------|-------|
| **Badge** | Compact score inside colored pill. `mono-sm`. | Tables, lists, cards. "87/100". |
| **Ring** | Circular progress ring (48px/64px). Score centered. Color by range. | Card headers, dashboard KPIs. |
| **Bar** | Horizontal bar, filled proportionally. Color by range. | Skill proficiency, match dimensions. |
| **Breakdown** | Stacked bars with labels. Each dimension scored. | Match explanation view. |

---

### 5.8 Modal / Dialog

| Property | Value |
|----------|-------|
| Overlay | `neutral-900` at 50% opacity. |
| Container | `neutral-0` bg, `radius-lg` (10px), `shadow-lg`. Max-width 560px (md) / 800px (lg). |
| Header | `heading-lg` title + X close button. `space-6` padding. |
| Footer | Right-aligned: Secondary (left), Primary (right). `border-subtle` top. |
| Enter | Fade + scale (0.95→1), `duration-normal`, `easing-enter`. |
| Exit | Fade + scale down, `duration-fast`, `easing-exit`. |

---

### 5.9 Toast / Notification

| Property | Value |
|----------|-------|
| Position | Top-right, 16px from edge. Stack with 8px gap. |
| Container | `neutral-0` bg, `shadow-md`, `radius-lg`. Left border 4px by type. Max-width 400px. |
| Types | Success / Warning / Error / Info — using `semantic-*` tokens. |
| Auto-dismiss | Success/Info: 5s. Warning: 8s. Error: manual only. |

---

### 5.10 Command Palette

| Property | Value |
|----------|-------|
| Trigger | `Cmd+K` / `Ctrl+K` |
| Container | `surface-glass`, `radius-xl` (14px), `shadow-xl`, centered, 640px max-width. |
| Input | `heading-lg` size, no border, auto-focus. Placeholder: "Suchen oder Aktion starten..." |
| Results | Grouped by category: Navigation, Berater, Kunden, KI-Aktionen. `body-md`, icons left-aligned. |
| Result hover | `interactive-warm` background. |
| AI section | Bottom group: "KI fragen..." opens inline AI prompt. `ai-surface` bg. |
| Keyboard | Arrow keys to navigate, `Enter` to select, `Escape` to close. |
| Enter | Fade + scale (0.95→1), `duration-normal`, `easing-enter`. |
| Exit | Fade out, `duration-fast`, `easing-exit`. |

The command palette is the primary keyboard-driven navigation and AI interaction surface. It must feel instant and responsive.

---

### 5.11 Slide-Over Panel

| Property | Value |
|----------|-------|
| Position | Right side, overlaying content. |
| Width | 480px (default), 640px (wide variant for AI briefs). |
| Background | `neutral-0` bg, `shadow-xl`. |
| Header | `heading-lg` title + X close button + breadcrumb context. `space-6` padding. |
| Dismiss | `Escape`, click-outside overlay, or explicit close button. |
| Overlay | `neutral-900` at 30% opacity (lighter than modal — maintains context). |
| Enter | Slide from right + fade overlay, `duration-normal`, `easing-enter`. |
| Exit | Slide out right + fade overlay, `duration-fast`, `easing-exit`. |

The slide-over panel is the primary L2 (Detail) container in the progressive disclosure framework. It maintains context — the user can still perceive the list/dashboard behind it. It does not navigate away from the current view.

---

## 6. Patterns

### 6.1 Dashboard / Cockpit Layout

```
┌──────────────────────────────────────────────────────┐
│  KPI Strip (4 Metric Cards in a row)                  │
│  [Umsatz MTD] [Auslastung] [Pipeline-Wert] [Signale] │
├──────────────────────┬───────────────────────────────┤
│  Primary Content     │  Context Rail                 │
│  (Chart, Table,      │  (AI insights, activity feed, │
│   Pipeline view)     │   related actions)            │
│  — 2/3 width —       │  — 1/3 width —                │
├──────────────────────┴───────────────────────────────┤
│  Secondary Content (Full width table or list)         │
└──────────────────────────────────────────────────────┘
```

**KPI Cards:** Metric card variant. Large number (`heading-xxl`, `mono-md`), label below (`body-sm`), trend indicator (up/down + %, colored green/red). Sparkline optional. Clean like Linear dashboards — lots of whitespace, clear hierarchy, no visual clutter.

**Context Rail:** The right 1/3 column serves AI insights, activity feed, and suggested next-actions. It surfaces "what you should know" alongside "what you're working on." The asymmetric layout guides the eye to the primary task area while keeping intelligence visible.

---

### 6.2 Signal Feed Pattern

```
┌─ Filter Bar ─────────────────────────────────────────┐
│  [Signal-Typ ▾] [Branche ▾] [Score ≥ ___] [Zeitraum] │
├──────────────────────────────────────────────────────┤
│ ┌─ Signal Card (left-border: brand-primary) ────────┐ │
│ │  ⚡ Leadership-Wechsel · RetailCorp AG             │ │
│ │  Neuer CTO mit SAP-Hintergrund           [87/100] │ │
│ │  vor 2 Stunden · Dealfront                         │ │
│ │  [Brief generieren]  [Archivieren]                 │ │
│ └────────────────────────────────────────────────────┘ │
│ ┌─ Signal Card (left-border: semantic-warning) ─────┐ │
│ │  📋 Ausschreibung · Bundesamt für Sicherheit       │ │
│ │  NIS2-Readiness Assessment Frist: 15.04.2026 [72] │ │
│ │  vor 5 Stunden · TED                              │ │
│ │  [Details & Matching]  [Merken]                    │ │
│ └────────────────────────────────────────────────────┘ │
```

Clicking a signal card opens a Slide-Over Panel (L2) with full signal details, AI-generated brief, and matching actions.

---

### 6.3 Matching & Team Composition Pattern

```
┌─ Opportunity Context ────────────────────────────────┐
│  RetailCorp AG · SAP S/4HANA Migration               │
│  Gefordert: SAP-Migration, Change Mgmt, Retail       │
│  Timeline: Mai–Nov 2026 · Budget: ~500K              │
├──────────────────────────────────────────────────────┤
│ ┌─ Match Result Card (Selected) ────────────────────┐ │
│ │  [Avatar] Markus S.  Senior SAP Consultant  [94]  │ │
│ │  ■■■■■■■■■■ Skills: 96  ■■■■■■■■░░ Verfügb: 82   │ │
│ │  ■■■■■■■■■░ Branche: 91  ■■■■■■■■■■ Team: 95     │ │
│ │  Frei ab: KW 18 · Tagessatz: €1.450 · DB1: 32%   │ │
│ │  ✓ 2x erfolgreich mit Lisa T.                     │ │
│ │  [Zum Team hinzufügen ✓]                          │ │
│ └────────────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────┤
│  Team: 3 Berater · Ø Score: 88 · DB1: 28%           │
│  [Team bestätigen]  [Variante: Premium-Team]         │
└──────────────────────────────────────────────────────┘
```

Score bars in the 60–79 range render in `brand-warm` with dark text — reinforcing the brand in the most common score zone.

---

### 6.4 AI-Generated Content Pattern

```
┌─ AI Content Card (ai-surface bg, 3px left border) ──┐
│  ✨ KI-generiert · Confidence: 87% · 31.03.2026      │
├──────────────────────────────────────────────────────┤
│                                                      │
│  [Structured content with source annotations]        │
│                                                      │
│  ─ Quellen ──────────────────────────────────────    │
│  ¹ North Data · Handelsregister · 12.01.2026         │
│  ² Dealfront · Unternehmensmonitor · 28.03.2026      │
│                                                      │
├──────────────────────────────────────────────────────┤
│  [✏️ Bearbeiten]  [📄 Als PDF]  [🔄 Neu generieren]   │
└──────────────────────────────────────────────────────┘
```

**Key rules:**

- Always use `ai-surface` (warm off-white) background with 3px `brand-primary` (#BF5347) left border.
- Always show confidence score as AI Badge.
- Always attribute sources with numbered footnotes.
- Always provide "Bearbeiten" action — AI content is a starting point, not final.
- Always show generation timestamp.

---

### 6.5 DSGVO Consent Indicator Pattern

| State | Badge | Visual | Tooltip |
|-------|-------|--------|---------|
| UNKNOWN | `Unbekannt` | Neutral badge + shield | "Kein Consent. Outreach blockiert." |
| OPT-IN PENDING | `Ausstehend` | Warning badge + clock | "Double-Opt-In gesendet am DD.MM.YYYY." |
| OPTED-IN | `Eingewilligt` | Success badge + check | "Consent erteilt am DD.MM.YYYY." |
| SUPPRESSED | `Unterdrückt` | Danger badge + ban | "Bounce/Widerruf am DD.MM.YYYY." |

---

### 6.6 Form Layout Pattern

- Two-column on desktop (>1024px), single column on tablet/mobile.
- Section labels: `label` token (12px, uppercased, `neutral-600`).
- Required: `*` + `aria-required`.
- Inline validation on blur.
- Rounded inputs (`radius-md`: 8px).
- Focus: warm amber glow (low opacity).

---

### 6.7 Empty State Pattern

- Centered, max-width 400px.
- Lucide icon `icon-xl` (32px), `neutral-400`.
- Title: `heading-md`, `neutral-800`.
- Description: `body-md`, `neutral-600`. Max 2 lines.
- CTA: Primary button (solid `brand-primary`). Hero (Gradient) variant only for login/onboarding empty states.

---

### 6.8 Progressive Disclosure Pattern

Consultry surfaces are layered. Each interaction level reveals more detail:

**Level 0 — Glance** (list/table row):
Key identifier + one metric + status badge. Answers "what is this?" in under 1 second. No more than 5 data points visible. This is the default density for feeds and lists.

**Level 1 — Summary** (card or expanded row):
Full context header, 2–3 key metrics, AI score with one-line explanation, primary action. Answers "should I care?" in under 3 seconds.

**Level 2 — Detail** (slide-over panel):
Full record with all fields, AI-generated brief, activity timeline, related items, all actions. Answers "what do I do about it?" Uses the Slide-Over Panel (Section 5.11) as the primary container.

**Level 3 — Deep Dive** (modal or dedicated page):
Editing, configuration, match breakdown with all dimensions, full audit trail. Reserved for intentional investigation.

**Transition Patterns:**

| From → To | Trigger | Animation | Container |
|-----------|---------|-----------|-----------|
| L0 → L1 | Click row to expand inline, or hover for summary tooltip (desktop) | Expand inline: `duration-normal`, height transition. Tooltip: `duration-fast`, fade. | Inline expansion or floating tooltip. |
| L1 → L2 | Click card/row to open detail | Slide from right + overlay fade. `duration-normal`, `easing-enter`. | Slide-Over Panel (480px). |
| L2 → L3 | Explicit "Details anzeigen" or "Bearbeiten" action | Modal: fade + scale. Page: standard route transition. | Modal (800px) or dedicated page. |
| Any → L0 | `Escape`, click outside, or explicit close | Reverse of entry animation. `duration-fast`, `easing-exit`. | — |

**The principle:** Each level transition is a user's conscious decision to go deeper. Never auto-escalate to a higher detail level. Never block the back-path.

---

## 7. Layout & Grid

### Breakpoints

| Token | Width | Columns | Usage |
|-------|-------|---------|-------|
| `breakpoint-sm` | 640px | 4 | Mobile (limited — desktop-first). |
| `breakpoint-md` | 768px | 8 | Tablet portrait. |
| `breakpoint-lg` | 1024px | 12 | Tablet landscape. |
| `breakpoint-xl` | 1280px | 12 | Standard desktop (primary target). |
| `breakpoint-2xl` | 1536px | 12 | Wide monitors. |

### Grid

| Property | Value |
|----------|-------|
| Columns | 12 (at `breakpoint-lg`+) |
| Gutter | 24px (`space-6`) |
| Margin | 24px at lg, 32px at xl |
| Max width | 1440px (centered) |

### Key Layout Principles

- **Lots of whitespace.** When in doubt, add more space, not more content.
- **Architectural asymmetry.** 2/3 main + 1/3 context rail is the default two-column layout. Not equal halves.
- **Clear hierarchy.** One primary action per view. Progressive disclosure for details.
- **No visual clutter.** If it doesn't serve the current task, hide it behind a disclosure level.
- **Flow over brevity.** Every screen is a step in a workflow. Breadcrumbs show where the user came from; CTAs point where they go next.
- **Dashboard feel:** Clean like Stripe, Linear. Data-rich but never crowded.

---

## 8. Accessibility

### Standards

WCAG 2.1 AA compliance minimum. Required for DACH enterprise (BAIT/DORA, public sector).

### Color Contrast

- All text: 4.5:1 minimum against background.
- Large text (18px+ / 14px+ bold): 3:1 minimum.
- Score badges: white on color must meet 4.5:1.
- **Hero gradient buttons:** The gradient is hero-only and each instance must be individually verified. The orange edge (#E8913A, ~3.1:1) only passes large text.
- `interactive-warm` tints: NEVER used as text color. Background/decorative only.
- `brand-primary` (#BF5347): safe for text on white at 4.62:1.
- **Score badges:** All score colors except `score-poor` (red) require dark text (`neutral-900`). White text on orange/amber/green badges fails AA.

### Keyboard Navigation

- All interactive elements reachable via `Tab`.
- Logical tab order: left→right, top→bottom.
- Arrow keys for complex components (tables, dropdowns, tabs, command palette).
- `Escape` closes modals, dropdowns, popovers, slide-over panels, command palette.
- Skip-to-content link on every page.
- `Cmd+K` / `Ctrl+K` opens command palette from anywhere.

### Screen Reader Support

- Semantic HTML5 (`<nav>`, `<main>`, `<aside>`, `<section>`).
- ARIA landmarks for all regions.
- `aria-live` for dynamic content (signal feed, toasts, scores).
- Scores announced as text: "Match-Score: 87 von 100, ausgezeichnet."
- AI sections: `aria-label="KI-generierter Inhalt"`.
- Slide-over panel: `role="dialog"`, `aria-modal="true"`, focus trapped within.

### Internationalization

- Primary: `de-DE`. Supported: `de-AT`, `de-CH`, `en-US`, `fr-CH`.
- RTL: not required.
- Number/date formatting per locale.
- All UI strings externalized. German is default.

---

## 9. Dark Mode

Inspired by Anthropic's Claude interface, Consultry's dark mode uses **warm darkness** — evening conversation rather than cold terminal. Backgrounds have warm brown undertones, not the blue-black that most SaaS apps default to.

### Token Remapping

| Light Token | Light Value | Dark Value | Notes |
|-------------|------------|------------|-------|
| `neutral-0` (surfaces) | `#FFFFFF` | `#45413B` | Warm card surface. |
| `neutral-50` (elevated) | `#FBFBFA` | `#3F3C37` | Warm elevated surface. |
| `neutral-100` (page bg) | `#F6F6F6` | `#3A3833` | Warm dark background. |
| `neutral-200` (borders) | `#EBE9E8` | `#5A554F` | Warm dark border. |
| `neutral-300` (dividers) | `#DDDAD5` | `#65605A` | Visible dividers on dark. |
| `neutral-600` (metadata) | `#7B7671` | `#B5B0AD` | Lightened for readability. |
| `neutral-900` (text) | `#3E3C3A` | `#EDE8E2` | Warm off-white text. |
| `brand-primary` | `#BF5347` | `#DDA49E` | Lightened coral for dark bg contrast. 4.77:1 on surfaces, 5.51:1 on page bg. |
| `brand-warm` | `#E8913A` | `#F0A85E` | Lightened amber. Pops beautifully on dark. |
| `brand-gradient` | Same | Same | Gradient works on both light and dark. Hero-only usage means no dark variant needed. |
| `ai-surface` | `#FFF8F5` | `#403D38` | Warm dark variant. Subtle differentiation. |
| `ai-border` | `#F0D4C8` | `#5A4F48` | Warm dark border. |
| Semantic colors | As defined | Same hues, lightened 10–15% | For dark bg readability. |

### Dark Mode Principles

- Never use pure black (#000000). The darkest value is `#3A3833` — warm, not void.
- Never use pure white (#FFFFFF) for text. Use `#EDE8E2` — warm off-white, anti-glare.
- The brand gradient (orange→coral→purple) works without modification on dark backgrounds — it was designed for this. Since gradient usage is hero-only, no separate dark-mode variant is needed.
- Shadows become more subtle in dark mode (reduce opacity by 50%). Elevation is communicated primarily through surface lightness.

Dark mode is not Phase 1 scope. Use tokens exclusively — never hardcode hex values. All colors must reference the token system so dark mode can be enabled via token swap.

---

## 10. Design System Governance

### Naming Convention

- Tokens: kebab-case (`brand-primary`, `space-4`, `heading-lg`).
- Components: PascalCase (`ScoreBadge`, `SignalCard`, `ConsultantAvatar`).
- Variants: camelCase within components (`variant="aiGenerated"`, `size="md"`).
- CSS custom properties: `--consultry-{category}-{name}` (e.g., `--consultry-color-brand-primary`).

### Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 30.03.2026 | Initial design system based on Consultry PRD v2.0. Navy + amber palette. |
| 1.1 | 30.03.2026 | Branding reconciliation. Teal→blue gradient, cool-gray neutrals, cyan accent. Added Sora display font. 17 contradictions resolved. |
| 1.2 | 31.03.2026 | **Warm palette realignment.** Realigned brand colors to actual logo (orange→coral→purple). Brand-primary shifted to deep warm coral (#BF5347, 4.62:1 AA) matching logo's visual center. Gradient demoted to hero-only — solid buttons are the in-app default. Interactive accent bumped to 18% opacity. Score badges fixed to use dark text (white fails AA on orange/amber/green). Sidebar uses warm charcoal (neutral-900). Replaced cool Slate neutrals with warm Stone palette, brightened 15% for an airier feel. Replaced cyan interactive accent with warm amber tint. Dropped Sora font (Inter handles all sizes). Added warm dark mode (Anthropic-inspired). Added progressive disclosure framework (L0–L3). Added command palette and slide-over panel components. Added glassmorphism `surface-glass` token. Added design principles: Architectural Asymmetry, Flow Over Brevity, Materiality. AI cards now use left-border stripe instead of full border. All v1.1 QA notes resolved. All v1.2 open questions resolved. |

---

*This design system is a living document. When in doubt, refer to the design principles — strategic, clear, intelligent, calm authority — and the warm materiality principle. Make the choice that reinforces trust, professionalism, and visual coherence with the Consultry mark. The logo is the brand anchor; the system follows.*
