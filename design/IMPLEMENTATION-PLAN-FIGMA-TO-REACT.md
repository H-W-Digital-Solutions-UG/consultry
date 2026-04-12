# Figma → React (HubSpot CMS) Pipeline Plan

## Context

The Consultry Figma file ([Components page](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=1-4)) contains 50+ marketing component sets with Light/Dark variants. These need to be implemented as React modules for HubSpot CMS in `/hubspot-cms/consultry-marketing-react/`. That directory is currently an empty scaffold (platform 2026.03). The existing implementation in `old_tries/consultry-react-theme/` has patterns and a token system (`tokens.css`, 933 lines) to reuse but needs significant rework.

**Core principle:** One React component per Figma component set. Dark/Light = a `theme` prop, not duplicate code. Storybook = the responsive prototype. No throwaway HTML prototype.

## Authoritative Design References

All implementation MUST follow these design system documents:

| Document | Path | Authority |
|----------|------|-----------|
| **Figma Design System Rules** | `design/Consultry-Figma-Design-System-Rules.md` | **PRIMARY** — token values, component architecture, critical rules |
| **Marketing Design System** | `design/Consultry-Marketing-Design-System-v1.0.md` | Marketing-specific tokens and typography |
| **App Design System v1.3** | `design/Consultry-Design-System-v1.3.md` | Canonical source for all shared/core tokens |
| **Figma Components Page** | [node-id=1-4](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=1-4) | Visual source of truth for every component |
| **Figma Tokens Page** | [node-id=0-1](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=0-1) | Variable collections: Core Tokens + Marketing Tokens |

### Critical Design Rules (from Figma DS Rules doc)

1. **Gradient:** Marketing hero CTA (1/page max), section dividers (2px, max 2/page), accent underlines (max 1 outside hero). **NEVER** on standard buttons, card backgrounds, or body text. Spec: `linear-gradient(135deg, #E8913A, #E8655A, #9B59B6)`
2. **Button shape:** ALL marketing buttons = pill (radius 9999px). App = 8px.
3. **Card radius:** Marketing = 12px (`mktg-radius/md`). App = 10px.
4. **`brand-warm` (#E8913A)** = decorative only (charts, progress). **NEVER** in status badges. Use `semantic-warning` (#D97706) for alerts.
5. **Surface alternation:** `dark hero → light → warm → light → dark → light → CTA band (gradient) → dark footer`. Never stack same-surface sections.
6. **Dark mode:** Never hardcode hex. Darkest dark = `#3A3833`. Lightest text = `#EDE8E2`. `brand/primary` lightens to `#DDA49E` in dark.
7. **Typography:** Marketing body = 18px (vs app 14px). Hero = 64-80px ExtraBold. All Inter. Mono = JetBrains Mono.
8. **Icons:** Lucide only. 24x24 default, stroke-based, `neutral/600` default color.
9. **AI content:** Always on `ai/surface` warm bg, 3px `brand/primary` left border, Sparkles icon + "KI-generiert" label.

### Token Translation: Figma → CSS

```
Figma variable          →  CSS custom property
─────────────────────────────────────────────────
brand/primary           →  --consultry-color-brand-primary: #BF5347
brand/warm              →  --consultry-color-brand-warm: #E8913A
neutral/900             →  --consultry-color-neutral-900: #3E3C3A
space/4                 →  --consultry-space-4: 16px
radius/md               →  --consultry-radius-md: 8px
mktg-surface/light      →  --mktg-surface-light: #FFFBF9
mktg-radius/md          →  --mktg-radius-md: 12px
mktg-shadow/hero        →  --mktg-shadow-hero: 0 20px 60px rgba(0,0,0,0.15)
```

---

## HubSpot CMS React+HubL Reference

Implementation must follow HubSpot's CMS React framework. Key docs:

| Topic | URL |
|-------|-----|
| **Overview** | https://developers.hubspot.com/docs/cms/start-building/introduction/react-plus-hubl/overview |
| **Quickstart** | https://developers.hubspot.com/docs/cms/start-building/introduction/react-plus-hubl/react-plus-hubl-quickstart |
| **Project Structure** | https://developers.hubspot.com/docs/cms/start-building/introduction/react-plus-hubl/project-structure |
| **Modules** | https://developers.hubspot.com/docs/cms/start-building/introduction/react-plus-hubl/modules |
| **Data Fetching** | https://developers.hubspot.com/docs/cms/start-building/introduction/react-plus-hubl/data-fetching |
| **Building Blocks** | https://developers.hubspot.com/docs/cms/start-building/building-blocks/overview |
| **Templates** | https://developers.hubspot.com/docs/cms/start-building/building-blocks/templates/overview |
| **Global Content** | https://developers.hubspot.com/docs/cms/start-building/building-blocks/global-content |
| **Sections** | https://developers.hubspot.com/docs/cms/start-building/building-blocks/sections/sections |
| **Fields** | https://developers.hubspot.com/docs/cms/start-building/building-blocks/fields/ |
| **Islands Reference** | https://developers.hubspot.com/docs/cms/reference/react/islands |
| **Styling** | https://developers.hubspot.com/docs/reference/cms/react/styling |
| **Elevate Theme (example)** | https://github.com/HubSpot/cms-elevate-theme-public |

### CMS React Module Pattern (Mandatory)

Every React module exports 3 named exports:

```jsx
// components/modules/MyComponent/index.jsx
import '../../styles/tokens.css';
import styles from '../../styles/myComponent.module.css';
import { ModuleFields, TextField, ChoiceField, FieldGroup } from '@hubspot/cms-components/fields';

// 1. Component (receives fieldValues from HubSpot editor)
export function Component({ fieldValues }) {
  const { theme = 'light', title, ...rest } = fieldValues;
  const isDark = theme === 'dark';
  return (
    <section className={`${styles.section} ${isDark ? styles.dark : styles.light}`}>
      <h2>{title}</h2>
    </section>
  );
}

// 2. Fields (HubSpot editor UI definition)
export const fields = (
  <ModuleFields>
    <ChoiceField name="theme" label="Theme" display="select"
      choices={[['light', 'Light'], ['dark', 'Dark']]} default="light" />
    <TextField name="title" label="Title" default="Default Title" />
  </ModuleFields>
);

// 3. Meta (module metadata for HubSpot)
export const meta = {
  label: 'My Component',
};
```

### Island Architecture (Interactive Components)

```jsx
// components/islands/MyIsland.jsx
import { useState } from 'react';
export default function MyIsland({ fieldValues }) {
  const [open, setOpen] = useState(false);
  return <div onClick={() => setOpen(!open)}>...</div>;
}

// Usage in a module:
import MyIsland from '../islands/MyIsland?island';  // ?island suffix = MANDATORY
import { Island } from '@hubspot/cms-components';

export function Component({ fieldValues }) {
  return (
    <Island module={MyIsland} hydrateOn="visible" fieldValues={fieldValues}>
      <MyIsland fieldValues={fieldValues} />  {/* SSR fallback */}
    </Island>
  );
}
```

Hydration strategies: `load` (immediate), `idle` (when browser idle), `visible` (on scroll into view — best for most marketing components).

### HubL Template Integration

```html
<!-- templates/home.hubl.html -->
{% extends "./layouts/base.hubl.html" %}
{% block body %}
  {% dnd_area "main" %}
    {% dnd_section %}
      {% dnd_module
        path="@projects/consultry-marketing-react/src/consultry-theme/components/modules/HeroShowcase",
        theme="dark"
      %}{% end_dnd_module %}
    {% end_dnd_section %}
  {% end_dnd_area %}
{% endblock %}
```

### Required Directory Structure

```
consultry-marketing-react/
├── hsproject.json                          # { name, srcDir: "src", platformVersion: "2026.03" }
└── src/
    └── consultry-theme/
        ├── consultry-theme-hsmeta.json     # { uid: "consultry-theme", type: "theme" }
        ├── package.json                    # @hubspot/cms-components, react ^18, motion ^12
        ├── theme.json                      # label, responsive_breakpoints, fonts
        ├── fields.json                     # [] (theme-level fields)
        ├── styles/
        │   ├── tokens.css                  # Master design tokens (synced from Figma DS Rules)
        │   └── [component].module.css      # Per-component CSS modules
        ├── components/
        │   ├── modules/                    # Static React modules
        │   │   └── [ComponentName]/index.jsx
        │   └── islands/                    # Interactive React islands
        │       └── [IslandName].jsx
        ├── sections/                       # HubL section templates
        │   └── [section-name].hubl.html
        ├── templates/                      # HubL page templates
        │   ├── layouts/base.hubl.html
        │   ├── home.hubl.html
        │   └── ...
        └── assets/
            ├── images/
            └── fonts/
```

---

## AI-Optimized Workflow

This project uses an AI-heavy engineering workflow. The pipeline is:

```
Figma (what exists) → Build Notes (what must be true) → AI Code Generation (React/CSS)
```

### What Figma Provides (already done)
- Layout, design system, tokens, components, variants
- Light/Dark theme variants for every component
- CMS content structure mockups
- Responsive intent (desktop designs; CSS handles breakpoints)

### What Build Notes Provide (to add per component)
Short implementation specs paired with each Figma component. These are **more valuable than prototyping** for AI-driven code generation:

```
Example build notes for Nav component:
- "Transparent on hero, glassmorphism on scroll (backdrop-filter: blur(12px))"
- "Mobile: hamburger → slide-down menu, 767px breakpoint"
- "Active link: gradient underline, Semi Bold weight"
- "Hover only on desktop"
- "Island for scroll state + mobile menu toggle"
```

### When We Prototype vs Skip
**Skip prototyping (our case — content/marketing pages):**
- CMS-driven content pages with standard UI patterns
- Design-system-driven pages with obvious behavior
- AI can infer from: frames + components + variants + sitemap + build notes

**Would prototype (NOT our case, but noted for future):**
- Complex app flows, onboarding, multistep forms, canvas interactions, nested overlays

### Practical Rule
- **Frames/components** tell AI what exists → Figma ✅
- **Build notes** tell AI what must be true in production → Add to each component
- **Prototype** tells AI how it behaves → Only for Nav scroll state, FAQ accordion, Pricing toggle, Carousel

---

## Phase 0: Project Setup

The `consultry-marketing-react/` directory is scaffolded for UI extensions but needs CMS theme structure.

**Steps:**
1. Initialize `package.json` with `@hubspot/cms-components`, `react@^18`, `motion@^12` (Framer Motion)
2. Create CMS theme structure: `src/consultry-theme/` with `theme.json`, `fields.json`
3. Copy `tokens.css` from `old_tries/` as starting point → update to match current Figma
4. Set up `styles/`, `components/modules/`, `components/islands/`, `templates/`, `sections/`
5. Copy `base.hubl.html` layout template

**Reference files to reuse from `old_tries/`:**
- `src/consultry-theme/styles/tokens.css` — master design tokens (933 lines)
- `src/consultry-theme/theme.json` — HubSpot theme config with breakpoints
- `src/consultry-theme/package.json` — dependencies list
- `templates/layouts/base.hubl.html` — base HTML template

---

## Phase 1: Tokens & Primitives

Sync Figma tokens → `tokens.css`, then build atomic components.

| # | Component | Figma | React Module | Notes |
|---|-----------|-------|-------------|-------|
| 0 | **Design Tokens** | [Tokens page](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=0-1) | `styles/tokens.css` | Audit Figma variables vs CSS vars, sync colors/spacing/motion |
| 1 | **Button** | [8:38](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=8-38) | `modules/Button/` | Variants: Primary, Gradient, Secondary, Ghost × sm/md/lg. Single component, `variant` + `size` props |
| 2 | **Badge** | [169:19](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=169-19) | `modules/Badge/` | 9 types (Category, New, Enterprise, Success, Info, Danger, Recommended, Neutral, Brand Gradient). `type` prop |
| 3 | **Divider** | [311:7](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=311-7) | `modules/Divider/` | Horizontal/Vertical × Light/Dark. `direction` + `theme` props |
| 4 | **Avatar** | [304:9](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=304-9) | `modules/Avatar/` | sm/md/lg. `size` prop |
| 5 | **Social Icon** | [308:17](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=308-17) | `modules/SocialFollow/` | 7 platforms. `icon` prop |
| 6 | **Toggle Switch** | [297:13](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=297-13) | `modules/Toggle/` | Light/Dark. `theme` prop |
| 7 | **Tab Bar** | [299:31](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=299-31) | `modules/TabBar/` + island | Pill/Underline × Light/Dark. `style` + `theme` props |
| 8 | **Carousel Controls** | [302:23](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=302-23) | `modules/CarouselControls/` | Light/Dark. `theme` prop |
| 9 | **Form Field** | [368:37](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=368-37) | `modules/FormField/` | Input/Textarea/Select × Light/Dark. `type` + `theme` props |
| 10 | **Form Control** | [369:33](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=369-33) | `modules/FormControl/` | Checkbox/Radio × Default/Checked × Light/Dark |
| 11 | **Tooltip** | [172:19](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=172-19) | `modules/Tooltip/` | Top/Bottom/Left/Right. `position` prop |
| 12 | **Breadcrumb** | [191:9](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=191-9) | `modules/Breadcrumb/` | Light/Dark. `theme` prop |
| 13 | **Search** | [364:13](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=364-13) | `modules/Search/` | Light/Dark. `theme` prop |
| 14 | **Pagination** | [366:33](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=366-33) | `modules/Pagination/` | Light/Dark. `theme` prop |
| 15 | **Skeleton** | [367:35](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=367-35) | `modules/Skeleton/` | Card/TextBlock/ListItem × Light/Dark |

---

## Phase 2: Navigation & Chrome

| # | Component | Figma | React Module |
|---|-----------|-------|-------------|
| 16 | **Nav Minimal** | [481:3](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=481-3) | `modules/Nav/` + `islands/NavIsland.jsx` |
| 17 | **Nav (Legacy)** | [116:40](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=116-40) | Same module, `variant="chip"` |
| 18 | **Announcement Bar** | [183:18](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=183-18) | `modules/AnnouncementBar/` + island |
| 19 | **Cookie Banner** | [182:21](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=182-21) | `modules/CookieBanner/` |
| 20 | **Footer Modern** | [516:81](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=516-81) | `modules/Footer/` |
| 21 | **Footer (Legacy)** | [335:29](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=335-29) | Same module, `variant="classic"` |

**Build notes — Nav:**
- Transparent bg on hero sections, glassmorphism on scroll (`backdrop-filter: blur(12px)`, bg opacity 0.85)
- Mobile (767px): hamburger icon → full-width slide-down menu panel
- Active link: brand-gradient underline (2px), Semi Bold weight, dark text
- Hover: text color darkens, no underline (desktop only)
- Island handles: scroll listener for glass state, mobile menu toggle, body scroll lock when menu open
- `position: sticky; top: 0; z-index: 100`
- Cohere-style (minimal) is default; chip-style is `variant="chip"` override

**Build notes — Footer:**
- Modern (Giga-style) is default: brand lockup left (logo + name + tagline + DSGVO badge), 3 nav columns right
- Brand gradient top accent line (2px, full-width)
- Social icons (X pipe LinkedIn) in bottom bar, right-aligned
- No island needed (static content)
- Classic variant is `variant="classic"`: 4 even columns

**Build notes — Announcement Bar:**
- Fixed at top of page, above nav. `position: relative` (pushes nav down)
- Island for dismiss: sets cookie, hides bar with slide-up animation (200ms)
- Warm/Dark/Gradient themes via `theme` prop
- CMS field: text content, link, dismissible toggle

**Build notes — Cookie Banner:**
- Fixed bottom. Slide-up on load (400ms). Two buttons: Accept All, Manage Preferences
- Island for consent state management

---

## Phase 3: Heroes & Showcases

| # | Component | Figma | React Module |
|---|-----------|-------|-------------|
| 22 | **Hero Showcase** | [442:4](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=442-4) / [463:3](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=463-3) | `modules/HeroShowcase/` |
| 23 | **Hero Minimal** | [296:18](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=296-18) | `modules/HeroMinimal/` |
| 24 | **Browser Showcase** | [379:3](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=379-3) | `modules/BrowserShowcase/` |
| 25 | **Product UI Preview** | [95:47](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=95-47) | `modules/ProductScreenshot/` |
| 26 | **Section Header** | [88:22](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=88-22) | `modules/SectionHeader/` |
| 27 | **Video Embed** | [337:15](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=337-15) | `modules/VideoEmbed/` + island |

**Build notes — Hero Showcase:**
- Full-bleed dark section. Animated floating UI cards (translate + opacity, staggered 80ms, cinematic 800ms ease)
- Stats row with count-up animation (island, `hydrateOn="visible"`)
- Gradient text for headline (`-webkit-background-clip: text`)
- CMS fields: headline, subline, CTA text/url, stats (repeated field group 1-4)
- Mobile: stack vertically, UI cards hidden, stats 2-col grid
- `data-animate="fade-up"` on text block, `data-animate="scale-in"` on product cards

**Build notes — Hero Minimal:**
- Light/Warm/Dark via `theme` prop. Centered text, no product screenshot
- Eyebrow label (JetBrains Mono, uppercase, `brand-warm` color)
- CTA: pill button, `brand-primary` bg
- Animate: fade-up 400ms on heading, stagger-in on CTA

**Build notes — Browser Showcase:**
- Glassmorphism border (1px rgba border + 24px blur + inner shadow)
- Chrome bar with traffic light dots, URL bar
- Image/content inside is a CMS image field
- `mktg-shadow/hero` for depth. `mktg-radius/xl` (24px) corners

**Build notes — Section Header:**
- Centered or Left aligned. Eyebrow + heading + subtext
- This is a reusable component used INSIDE other sections, not a standalone section
- No animation (parent section animates it)

---

## Phase 4: Feature Sections

| # | Component | Figma | React Module | Notes |
|---|-----------|-------|-------------|-------|
| 28 | **Feature Showcase Step** | [143:2](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=143-2) | `modules/FeatureShowcaseStep/` | 4 steps × Light/Dark. `step` + `theme` props. Includes Wise-style stepper bar |
| 29 | **Stepper Bar Minimal** | [493:89](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=493-89) | Sub-component of above | 4 steps × Light/Dark. Gradient progress line + dots |
| 30 | **Feature Grid Section** | [300:63](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=300-63) | `modules/FeatureGrid/` | Light/Warm. `theme` prop. 3→2→1 col responsive grid |
| 31 | **Feature Card** | [331:8](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=331-8) | `modules/Card/` | Light/Dark. `theme` prop |
| 32 | **Feature Showcase Row** | [93:34](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=93-34) | `modules/FeatureShowcaseRow/` | Image-Left/Right × Light/Dark. `layout` + `theme` props |
| 33 | **Feature List Sidebar** | [317:49](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=317-49) | `modules/FeatureListSidebar/` + island | Light/Dark. `theme` prop |
| 34 | **Comparison Table** | [199:66](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=199-66) | `modules/ComparisonTable/` | Light/Dark. `theme` prop |
| 35 | **Timeline Steps** | [313:69](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=313-69) | `modules/TimelineSteps/` | Light/Dark. `theme` prop |
| 36 | **Integration Tile** | [91:12](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=91-12) | `modules/IntegrationGrid/` | Light/Dark. `theme` prop |

---

## Phase 5: Social Proof & Trust

| # | Component | Figma | React Module | Notes |
|---|-----------|-------|-------------|-------|
| 37 | **Testimonial Card** | [89:30](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=89-30) | `modules/Testimonials/` | Light/Dark. `theme` prop |
| 38 | **Testimonial Carousel** | [301:26](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=301-26) | `modules/TestimonialCarousel/` + island | Light/Dark. `theme` prop. Island for carousel interaction |
| 39 | **Customer Story Card** | [96:20](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=96-20) | `modules/CustomerStoryCards/` | Light/Dark. `theme` prop |
| 40 | **Logo Grid** | [312:37](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=312-37) | `modules/LogoGrid/` | Light/Dark. `theme` prop |
| 41 | **Logo Strip** | [92:2](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=92-2) | `modules/LogoStrip/` | Light only (standalone component) |
| 42 | **Trust Badges** | [306:59](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=306-59) | `modules/TrustBadges/` | Light/Dark. `theme` prop |
| 43 | **Stat Counter** | [90:14](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=90-14) | `modules/StatsCounter/` + island | Light/Dark. `theme` prop. Island for count-up animation |
| 44 | **Metric Card** | [315:61](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=315-61) | `modules/MetricCards/` | Light/Dark. `theme` prop |
| 45 | **Team Card** | [199:8](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=199-8) | `modules/TeamGrid/` | Light/Dark. `theme` prop. Brand gradient border |

---

## Phase 6: Conversion & Forms

| # | Component | Figma | React Module | Notes |
|---|-----------|-------|-------------|-------|
| 46 | **CTA Band** | [333:10](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=333-10) | `modules/CTABand/` | Gradient/Dark. `theme` prop |
| 47 | **Rich CTA Band** | [310:48](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=310-48) | `modules/RichCTABand/` | Gradient only (single variant) |
| 48 | **Pricing Card** | [179:73](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=179-73) | `modules/PricingTable/` + island | Standard/Recommended × Light/Dark. `tier` + `theme` props. Island for toggle |
| 49 | **Pricing Section** | [316:92](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=316-92) + [314:3](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=314-3) | Wraps PricingTable | Light/Dark full section with toggle |
| 50 | **Enterprise Pricing** | [230:93](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=230-93) | `modules/EnterprisePricing/` | Light/Dark. `theme` prop |
| 51 | **Contact Form** | [193:33](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=193-33) | `modules/ContactForm/` + island | Light/Dark. `theme` prop. Island for validation |
| 52 | **FAQ** | [180:11](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=180-11) | `modules/FAQ/` + island | Collapsed/Expanded × Light/Dark. Island for accordion |
| 53 | **Newsletter Capture** | [174:16](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=174-16) | `modules/InlineEmailCapture/` | Inline/Stacked × Light/Dark |
| 54 | **Modal** | [375:53](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=375-53) | `modules/Modal/` | Confirm/Video × Light/Dark |
| 55 | **Solution Card** | [176:15](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=176-15) | `modules/SolutionCard/` | Light/Dark. `theme` prop |
| 56 | **Blog Card** | [175:23](https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS?node-id=175-23) | `modules/BlogCards/` | Blog/Webinar/Resource × Light/Dark |

---

## Phase 7: Page Templates

Assemble modules into HubL page templates with DND sections.

| Page | Template | Surface Pattern |
|------|----------|----------------|
| **Homepage** | `templates/home.hubl.html` | Nav(dark) → Hero Showcase(dark) → Features(light) → Showcase Steps(warm) → Social Proof(light) → Stats(dark) → CTA(gradient) → Footer(dark) |
| **Pricing** | `templates/pricing.hubl.html` | Nav → Hero Minimal → Toggle + Pricing Cards → Enterprise → Comparison → FAQ → CTA → Footer |
| **About** | `templates/about.hubl.html` | Nav → Hero Minimal → Team Grid → Timeline → Stats → CTA → Footer |
| **Contact** | `templates/contact.hubl.html` | Nav → Hero Minimal → Contact Form → FAQ → Footer |
| **Blog** | `templates/blog.hubl.html` | Nav → Hero Minimal → Blog Grid → Newsletter → Footer |
| **Features** | `templates/features.hubl.html` | Nav → Hero → Feature Grid → Showcase Rows → Browser Showcase → CTA → Footer |
| **Customer Stories** | `templates/customer-stories.hubl.html` | Nav → Hero → Story Cards → Testimonial Carousel → Logo Grid → CTA → Footer |

---

## Theme Switching Architecture

**No duplicate code. One component, one `theme` prop.**

```jsx
// Pattern for every component:
export function Component({ fieldValues }) {
  const { theme = 'light', ...fields } = fieldValues;
  const isDark = theme === 'dark';

  return (
    <section className={`${styles.section} ${isDark ? styles.dark : styles.light}`}>
      {/* content */}
    </section>
  );
}

export const fields = (
  <ModuleFields>
    <ChoiceField name="theme" label="Theme" display="select"
      choices={[['light', 'Light'], ['dark', 'Dark']]}
      default="light" />
    {/* other fields */}
  </ModuleFields>
);
```

```css
/* CSS Module pattern: */
.section { /* shared styles using tokens */ }
.light { background: var(--mktg-surface-light); color: var(--neutral-900); }
.dark  { background: var(--mktg-surface-hero);  color: var(--neutral-0); }
```

---

## Responsive Strategy

**Breakpoints (already in tokens.css):**
- Desktop: default (1200px content max, 120px page padding)
- Tablet: `max-width: 1279px` (32px padding)
- Mobile: `max-width: 767px` (16px padding, single column)

**Per CSS Module:** desktop-first with `@media (max-width)` overrides. No mobile Figma variants needed.

---

## Animation Strategy: Motion+ (motion.dev)

**Use Motion+ (`motion/react`) as the primary animation library.** Formerly Framer Motion, now at https://motion.dev/. It replaces the CSS-only `data-animate` system with declarative, composable React animations that work naturally with the island architecture.

### Motion+ Reference Docs

| Topic | URL |
|-------|-----|
| **Homepage / Overview** | https://motion.dev/ |
| **React Quick Start** | https://motion.dev/docs/react-quick-start |
| **motion component** | https://motion.dev/docs/react-motion-component |
| **Animation props** | https://motion.dev/docs/react-animation |
| **Scroll animations** | https://motion.dev/docs/react-scroll-animations |
| **useScroll** | https://motion.dev/docs/react-use-scroll |
| **useInView** | https://motion.dev/docs/react-use-in-view |
| **whileInView** | https://motion.dev/docs/react-motion-component#whileinview |
| **AnimatePresence** | https://motion.dev/docs/react-animate-presence |
| **Layout animations** | https://motion.dev/docs/react-layout-animations |
| **Variants** | https://motion.dev/docs/react-animation#variants |
| **Transitions** | https://motion.dev/docs/react-transitions |
| **Spring physics** | https://motion.dev/docs/spring |
| **useMotionValue** | https://motion.dev/docs/react-use-motion-value |
| **useTransform** | https://motion.dev/docs/react-use-transform |
| **useReducedMotion** | https://motion.dev/docs/react-use-reduced-motion |
| **Accessibility** | https://motion.dev/docs/react-accessibility |
| **useAnimate (imperative)** | https://motion.dev/docs/react-use-animate |
| **stagger utility** | https://motion.dev/docs/react-animation#stagger |
| **Examples gallery** | https://motion.dev/examples |

### Import Pattern (v12+)

```jsx
// CORRECT — modern Motion+ import
import { motion, AnimatePresence, useReducedMotion, useInView, useScroll, useTransform } from "motion/react";

// WRONG — old Framer Motion import (deprecated)
// import { motion } from "framer-motion";
```

**Add to `package.json`:**
```json
"dependencies": {
  "motion": "^12.0.0"
}
```

### Motion Tokens (map from design system)

```jsx
// utils/motion.js — shared animation presets
export const mktgDuration = {
  fast: 0.2,      // --mktg-duration-fast: 200ms
  normal: 0.4,    // --mktg-duration-normal: 400ms
  slow: 0.6,      // --mktg-duration-slow: 600ms
  cinematic: 0.8,  // --mktg-duration-cinematic: 800ms
};

export const mktgEase = {
  default: [0.4, 0, 0.2, 1],       // --mktg-ease-default
  enter: [0.0, 0, 0.2, 1],         // --mktg-ease-enter
  dramatic: [0.16, 1, 0.3, 1],     // --mktg-ease-dramatic
};

// Reusable animation variants
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: mktgDuration.normal, ease: mktgEase.default } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: mktgDuration.slow, ease: mktgEase.dramatic } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: mktgDuration.normal, ease: mktgEase.enter } },
};

export const staggerChildren = {
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
```

### Usage Pattern in Islands

Framer Motion animations require client-side React, so they live **inside islands** (not static modules):

```jsx
// components/islands/AnimatedSectionIsland.jsx
import { motion } from 'motion/react';
import { fadeUp, staggerChildren } from '../../utils/motion';

export default function AnimatedSectionIsland({ children, fieldValues }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerChildren}
    >
      {/* Each child auto-staggers */}
      <motion.h2 variants={fadeUp}>{fieldValues.title}</motion.h2>
      <motion.p variants={fadeUp}>{fieldValues.subtitle}</motion.p>
    </motion.section>
  );
}
```

### Animation Assignments Per Component

| Component | Animation | Framer Motion Variant | Island? |
|-----------|-----------|----------------------|---------|
| Hero Showcase | Headline fade-up, product cards scale-in (staggered) | `fadeUp` + `scaleIn` + `staggerChildren` | Yes — `HeroIsland` |
| Hero Minimal | Heading fade-up, CTA fade-up (delayed) | `fadeUp` | Yes — `HeroIsland` |
| Feature Grid | Cards stagger-in on scroll | `fadeUp` + `staggerChildren` | Yes — `ScrollAnimateIsland` |
| Feature Showcase Step | Step transition (slide + opacity) | `AnimatePresence` + custom variants | Yes — `FeatureStepIsland` |
| Stepper Bar | Progress line width animate | `motion.div` with `animate={{ width }}` | Part of FeatureStepIsland |
| Testimonial Carousel | Slide transition | `AnimatePresence` + `slideLeft` | Yes — `CarouselIsland` |
| Stats Counter | Count-up number roll | `motion.span` with `useMotionValue` + `useTransform` | Yes — `StatsIsland` |
| FAQ Accordion | Expand/collapse slide | `AnimatePresence` + `motion.div` height auto | Yes — `FAQIsland` |
| CTA Band | Fade-up on scroll | `fadeUp` | Yes — `ScrollAnimateIsland` |
| Announcement Bar | Dismiss slide-up | `AnimatePresence` + exit animation | Yes — `AnnouncementIsland` |
| Nav | Glass transition on scroll | `motion.nav` with `animate` based on scroll state | Yes — `NavIsland` |
| Pricing Toggle | Price swap fade | `AnimatePresence` mode="wait" | Yes — `PricingIsland` |
| Cookie Banner | Slide-up entrance | `motion.div` with initial/animate | Yes — island |
| Cards (hover) | Lift + shadow on hover | `whileHover={{ y: -4, boxShadow }}` | Static module (CSS fallback) + optional island |

### Reduced Motion Support

```jsx
// utils/motion.js
import { useReducedMotion } from 'motion/react';

export function useMotionSafe() {
  const prefersReduced = useReducedMotion();
  return prefersReduced
    ? { initial: false, animate: false, whileInView: false } // no animation
    : {};
}
```

### Motion+ Code Examples (Reference for Implementation)

**1. Scroll-triggered section reveal (most common pattern):**
```jsx
import { motion } from "motion/react";

// Fade up when section scrolls into view — fires once
<motion.section
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
>
  <h2>Section Title</h2>
</motion.section>
```

**2. Staggered children (feature grids, card lists):**
```jsx
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
};

<motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={container}>
  {cards.map(card => (
    <motion.div key={card.id} variants={item}>{card.title}</motion.div>
  ))}
</motion.div>
```

**3. AnimatePresence for step/tab/carousel transitions:**
```jsx
import { motion, AnimatePresence } from "motion/react";

<AnimatePresence mode="wait">
  <motion.div
    key={activeStep}
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -40 }}
    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
  >
    {stepContent[activeStep]}
  </motion.div>
</AnimatePresence>
```

**4. Number counter (stats count-up):**
```jsx
import { useMotionValue, useTransform, motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ target, duration = 1.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, v => Math.round(v));

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, target, { duration, ease: [0.16, 1, 0.3, 1] });
      return animation.stop;
    }
  }, [isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
```

**5. Accordion expand/collapse (FAQ):**
```jsx
<AnimatePresence initial={false}>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      style={{ overflow: "hidden" }}
    >
      {content}
    </motion.div>
  )}
</AnimatePresence>
```

**6. Nav glassmorphism on scroll:**
```jsx
import { motion, useScroll, useTransform } from "motion/react";

function NavIsland() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.85]);
  const blur = useTransform(scrollY, [0, 80], [0, 12]);

  return (
    <motion.nav style={{
      backgroundColor: useTransform(bgOpacity, v => `rgba(255, 251, 249, ${v})`),
      backdropFilter: useTransform(blur, v => `blur(${v}px)`),
    }}>
      {/* nav content */}
    </motion.nav>
  );
}
```

**7. Hover card lift (inline, no island needed for simple cases):**
```jsx
<motion.div
  whileHover={{ y: -4, boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}
  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
>
  <CardContent />
</motion.div>
```

**8. Reduced motion — accessibility guard:**
```jsx
import { useReducedMotion } from "motion/react";

function AnimatedSection({ children }) {
  const shouldReduce = useReducedMotion();

  return shouldReduce ? (
    <section>{children}</section>  // no animation wrapper
  ) : (
    <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.4 }}>
      {children}
    </motion.section>
  );
}
```

### Fallback: CSS `data-animate` stays for non-island modules

Static modules (no island wrapper) can't use Motion+. For those, keep the existing CSS `data-animate` system from `tokens.css` as a lightweight fallback. The `ScrollObserverIsland` can trigger `.is-visible` on these elements.

### HubSpot Island Hydration Strategy

- Most scroll-triggered animations: `hydrateOn="visible"` — Motion+ loads only when section scrolls into view
- Nav animations: `hydrateOn="load"` — needs immediate scroll listener
- FAQ/Pricing/Form: `hydrateOn="idle"` — interactive, but not urgent

---

## Key Build Notes (Phases 4-6, abbreviated)

**Feature Showcase Step (28):** Scroll-driven stepper. 4 product screens, one visible at a time. Wise-style progress dots with brand gradient line. Island for scroll position tracking + step transitions. `hydrateOn="visible"`. Mobile: collapse stepper to step counter "2/4", stack text above product screen.

**Feature Grid (30):** 3-col → 2-col (1024px) → 1-col (767px). Cards stagger-in (80ms offset, max 6). Icon wrapper with brand-tinted bg. CMS: repeated field group, 1-12 cards.

**Testimonial Carousel (38):** Island for rotation. Auto-play paused on hover. Carousel controls (prev/next arrows). `hydrateOn="visible"`. Mobile: swipe gesture. 600ms transition, dramatic easing.

**Pricing Section (48-50):** Island for monthly/yearly toggle. Recommended card has `brand-primary` 2px border. Toggle animates prices (fade-out/in 200ms). CMS: repeated field group per tier.

**FAQ (52):** Island for accordion. Only one item open at a time. Open: slide-down 250ms. Close: slide-up 200ms. CMS: repeated field group, title + body rich text.

**Contact Form (51):** Island for validation + submission. HubSpot form integration. Fields: name, email, company, message, DSGVO checkbox. Submit: optimistic spinner, then success state.

**CTA Band (46):** Full-bleed. Gradient variant uses brand gradient bg. Two CTA buttons (primary + ghost). `data-animate="fade-up"`. CMS: headline, subline, 2 CTA fields.

---

## HubSpotDev MCP Integration

**IMPORTANT:** When the `HubSpotDev` MCP server is available, use its tools BEFORE falling back to CLI commands. This is specified in the project's CLAUDE.md.

### MCP-First Development Workflow

The HubSpotDev MCP provides tools for interacting with HubSpot directly. When available, prefer MCP tools over `hs` CLI commands for:

| Task | MCP Tool (preferred) | CLI Fallback |
|------|---------------------|-------------|
| Upload project | MCP tool | `hs project upload` |
| Deploy build | MCP tool | `hs project deploy` |
| View project logs | MCP tool | `hs project logs` |
| List builds | MCP tool | `hs project list-builds` |
| Validate project | MCP tool | `hs project validate` |
| Fetch CMS assets | MCP tool | `hs cms fetch <src> <dest>` |
| Upload CMS files | MCP tool | `hs cms upload <src> <dest>` |
| List remote files | MCP tool | `hs cms list <path>` |
| Manage secrets | MCP tool | `hs secret list/add/update/delete` |

### HubSpot CLI Commands (when MCP unavailable)

```bash
# Local development (always CLI — runs dev server)
hs project dev                          # Start local dev server (port 3000)
hs project dev --ssl --storybook        # With SSL + Storybook preview

# Project lifecycle
hs project upload                       # Upload to HubSpot (triggers build)
hs project deploy                       # Deploy latest build to live
hs project validate                     # Validate config before upload
hs project logs                         # View deployed project logs
hs project list-builds                  # List all builds

# CMS asset management
hs cms upload src/consultry-theme @consultry-theme  # Upload theme files
hs cms fetch @consultry-theme src/consultry-theme   # Download from HubSpot
hs cms watch src/consultry-theme @consultry-theme   # Watch + auto-upload
hs cms list @consultry-theme                        # List remote files

# Theme preview
hs theme preview                        # Preview at https://hslocal.net:3000/

# Debugging
hs project logs                         # Runtime logs
hs project open                         # Open project in HubSpot browser
```

### Local Development Server Setup

```bash
cd hubspot-cms/consultry-marketing-react/src/consultry-theme
npm install                             # Install deps
cd ../../../..                          # Back to project root
hs project dev                          # Start dev server

# The dev server:
# - Runs on localhost:3000
# - Proxies live CMS pages with local component overrides
# - Hot-reloads JSX changes automatically
# - Supports Storybook for isolated component preview
# - Shows "Developing locally" tag on HubSpot pages
```

### Sandbox Testing

```bash
hs sandbox create                       # Create dev sandbox
hs project upload                       # Upload to sandbox
hs project deploy                       # Deploy to sandbox
# Test in HubSpot page editor: DND sections, field editing, preview
```

### Project Configuration Reference

**`hsproject.json`** (project root):
```json
{
  "name": "consultry-marketing-react",
  "srcDir": "src",
  "platformVersion": "2026.03"
}
```

**`consultry-theme-hsmeta.json`** (theme root):
```json
{
  "uid": "consultry-theme",
  "type": "theme"
}
```

**`theme.json`** (theme config):
```json
{
  "label": "Consultry Marketing Theme",
  "responsive": true,
  "responsive_breakpoints": [
    { "name": "mobile", "mediaQuery": "(max-width: 767px)" }
  ],
  "typography": {
    "google_fonts": ["Inter:400,500,600,700,800", "JetBrains+Mono:400"]
  },
  "author": { "name": "Consultry", "url": "https://consultry.com" },
  "version": "2.0.0"
}
```

---

## Dev Workflow (Per Component)

```
1. Open Figma component (link from table above)
2. Use Figma MCP → get_design_context for tokens, spacing, colors, variants
3. Create CSS Module → use tokens.css variables only (never hardcode hex)
4. Create React module → theme prop, HubSpot fields, Motion+ animations
5. Add Motion+ animations in island wrapper (whileInView, AnimatePresence)
6. Preview locally (hs project dev / Storybook)
7. Test responsive: 1440 → 1279 → 767 → 375px
8. Test reduced motion: verify useReducedMotion fallback
9. Use HubSpotDev MCP or `hs project upload` → deploy to sandbox
10. Test in HubSpot editor: DND, field editing, theme toggle, preview
```

---

## Verification

1. **Token parity:** Figma variables page ↔ tokens.css — all values match
2. **Visual parity:** Figma screenshot (via Figma MCP `get_screenshot`) ↔ Storybook render
3. **Responsive:** Browser resize at 1440 → 1024 → 768 → 375px
4. **Animations:** Scroll full pages, verify Motion+ timing and stagger
5. **Reduced motion:** Toggle `prefers-reduced-motion` in devtools, verify graceful degradation
6. **Theme switching:** Toggle every component Light ↔ Dark in HubSpot editor
7. **HubSpot CMS:** Upload to sandbox (via MCP or CLI), test DND editor, field editing, preview
8. **Accessibility:** Keyboard nav, screen reader, `useReducedMotion` guard
9. **Performance:** Lighthouse 90+ target. Check Motion+ bundle size (tree-shakes well)
