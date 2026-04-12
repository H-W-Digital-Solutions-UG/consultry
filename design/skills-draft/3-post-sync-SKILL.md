---
name: consultry-webflow-post-sync-cleanup
description: >
  Clean up Consultry's Webflow marketing site after importing from Figma. Fixes messy class names
  to Consultry conventions, consolidates redundant styles, corrects heading hierarchy, removes
  wrapper bloat, sets up responsive breakpoints, and ensures Consultry Marketing DS CSS values
  are properly applied. Use this skill when someone says "clean up after Figma import", "fix the
  Webflow classes", "my Figma import is messy", "organize the Webflow after paste", "fix styles
  after sync", "post-sync cleanup", or any request to improve Consultry's Webflow marketing site
  after a Figma transfer. Also trigger when there are complaints about class bloat, wrapper nesting,
  broken responsive layouts, or inconsistent styles after import.
---

# Consultry Marketing — Webflow Post-Sync Cleanup

## What this skill does

You are cleaning up Consultry's Webflow marketing site after a Figma import. Figma-to-Webflow
transfers commonly produce messy class names, redundant styles, excessive wrappers, inconsistent
headings, and responsive issues. This skill systematically fixes them.

This is the implementation-side companion to the preflight and Figma cleanup skills.

## References

**Source Figma file** (for cross-referencing intent during Webflow cleanup):
- **File key:** `ZRTge3ODEnkSDNRrcgBBvK`
- **URL:** https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS
- Components: nodeId `1:4` | Page 1: `633:9456` | Page 2: `717:8994`

**Design folder** at `/consultry/design/`:
- `Consultry-Figma-Design-System-Rules.md` — Full token tables, critical design rules
- `HOMEPAGE-DARK-CONTENT-FINAL.md` — Finalized homepage dark section content
- `FIGMA-FRAMES-MASTER-PLAN.md` — Master plan for Figma frames

## Consultry Marketing DS — CSS Translation

Figma tokens translate to CSS custom properties prefixed with `--consultry-` or `--mktg-`:

### Colors
```css
--consultry-color-brand-primary: #BF5347;
--consultry-color-brand-primary-light: #CA7168;
--consultry-color-brand-primary-dark: #A2463C;
--consultry-color-brand-warm: #E8913A;    /* accents only, NEVER status */
--consultry-color-semantic-warning: #D97706; /* alerts only, NEVER decorative */
```

### Marketing Surfaces
```css
--mktg-surface-light: #FFFBF9;       /* warm off-white page bg */
--mktg-surface-warm: #FFF5F0;        /* alternating warm section bg */
--mktg-surface-dark: #2C2926;        /* dark feature sections */
--mktg-surface-dark-elevated: #3A3833; /* cards on dark sections */
--mktg-surface-hero: #1E1B18;        /* hero (deepest dark) */
--mktg-surface-text-on-dark: #FAFAF9; /* NOT pure white */
```

### Marketing Spacing
```css
--mktg-space-xs: 8px;    --mktg-space-sm: 16px;
--mktg-space-md: 24px;   --mktg-space-lg: 40px;
--mktg-space-xl: 64px;   /* primary section rhythm */
--mktg-space-2xl: 96px;  --mktg-space-3xl: 128px; /* hero padding */
```

### Marketing Radius
```css
--mktg-radius-sm: 8px;
--mktg-radius-md: 12px;    /* cards */
--mktg-radius-lg: 16px;    /* screenshot containers */
--mktg-radius-xl: 24px;    /* hero product showcases */
--mktg-radius-full: 9999px; /* ALL marketing buttons (pill) */
```

### Marketing Shadows
```css
--mktg-shadow-sm: 0 2px 8px rgba(0,0,0,0.04);
--mktg-shadow-md: 0 4px 20px rgba(0,0,0,0.06);
--mktg-shadow-lg: 0 8px 40px rgba(0,0,0,0.08);
--mktg-shadow-hero: 0 20px 60px rgba(0,0,0,0.15);
--mktg-shadow-glow: 0 0 40px rgba(191, 83, 71, 0.12);
```

### Gradient (only where allowed)
```css
background: linear-gradient(135deg, #E8913A, #E8655A, #9B59B6);
```
Allowed: hero CTA (1 max), section dividers (2px, 2 max/page), accent underlines.
Not allowed: standard buttons, card backgrounds, body text.

### Typography
```css
/* All text: Inter. Code: JetBrains Mono. */
font-family: 'Inter', sans-serif;

/* Hero heading */
font-size: 64px; /* 64-80px range */
font-weight: 800; /* ExtraBold */
line-height: 1.05;
letter-spacing: -0.03em;

/* Body (default marketing) */
font-size: 18px;
font-weight: 400;
line-height: 1.6;
```

### Marketing Grid
- Desktop (1280px+): 12 columns, 32px gutters, 1200px max content
- Tablet (768-1279px): 8 columns, 24px gutters, 100% - 64px
- Mobile (<768px): 4 columns, 16px gutters, 100% - 32px
- Hero and dark sections: full-bleed, content inside follows grid

### Surface Alternation
Never stack same-surface sections. Pattern:
`dark hero → light → warm → light → dark → light → CTA band → dark footer`

### Motion
Scroll-triggered reveals, stagger-in (80ms per child, max 5). Easing: `cubic-bezier(0.16, 1, 0.3, 1)`. Respect `prefers-reduced-motion`.

## When to use

- After importing/syncing Consultry's Figma marketing designs into Webflow
- When Webflow has class bloat from Figma layer names
- When imported structure has excessive wrapper nesting
- When styles need consolidation to Consultry conventions
- When heading hierarchy needs SEO correction
- When responsive behavior broke during import

## Important: Call Webflow guide first

Before using any Webflow tools, **always call `webflow_guide_tool` first**.

## Available MCP tools

### Inspection
| Tool | Purpose |
|------|---------|
| `webflow_guide_tool` | **Call first.** |
| `element_tool` → `get_all_elements` | Full element tree of current page. |
| `element_tool` → `query_elements` | Search by type, style, tag, text, attributes. |
| `element_tool` → `get_selected_element` | Inspect user's selection. |
| `element_snapshot_tool` | Visual screenshot for verification. |
| `style_tool` → `get_styles` / `query_styles` | Inspect classes and CSS. |
| `de_page_tool` → `get_current_page` | Confirm active page. |
| `de_component_tool` → `get_all_components` | List Webflow components. |
| `data_pages_tool` → `list_pages` | All site pages. |

### Modification
| Tool | Purpose |
|------|---------|
| `element_tool` → `set_style` | Apply/replace classes. |
| `element_tool` → `set_heading_level` | Fix heading hierarchy. |
| `element_tool` → `remove_element` | Remove wrappers. Careful. |
| `element_tool` → `add_or_update_attribute` | Set aria labels, IDs. |
| `style_tool` → `create_style` | Create clean Consultry classes. |
| `style_tool` → `update_style` | Fix CSS on existing classes. |
| `style_tool` → `remove_style` | Delete redundant classes. |
| `de_component_tool` → `transform_element_to_component` | Convert to reusable components. |
| `de_component_tool` → `rename_component` | Fix component names. |

## Workflow

### Step 1 — Get site context

1. Call `webflow_guide_tool`
2. Get site ID (ask user or use `data_sites_tool`)
3. `de_page_tool` → `get_current_page`
4. `data_pages_tool` → `list_pages`

### Step 2 — Audit the imported structure

Use `element_tool` → `get_all_elements` on the current page.

**Look for:**

**Class issues:** Figma-generated names (`frame-234`, `group-12`), near-duplicate classes,
non-Consultry naming, unused classes.

**Structural issues:** Excessive div nesting, empty divs from spacers, missing semantic elements,
sections not using Webflow Section/Container structure.

**Heading issues:** Multiple H1s, skipped levels, headings for styling.

**Marketing DS violations:**
- Gradient on elements other than hero CTA / dividers / accent underlines
- Non-pill buttons (missing 9999px)
- Wrong card radius (not 12px)
- Body text not at 18px
- Pure black or pure white (should be Consultry warm neutrals)
- Same-surface sections stacked
- Non-Inter fonts
- `brand/warm` used for status instead of accents

**Responsive issues:** Fixed widths, no stacking at mobile, missing breakpoint overrides.

### Step 3 — Plan and confirm

Present findings by category. Get confirmation. Group fixes:
1. Class consolidation and Consultry naming
2. Structural cleanup (wrappers, semantic elements)
3. Heading hierarchy
4. Marketing DS CSS corrections
5. Responsive fixes
6. Component creation

### Step 4 — Execute class cleanup

**Consultry class naming convention:**

```
Sections:   hero-section, features-section, pricing-section, testimonials-section,
            cta-band, faq-section, footer-section, nav-section, logo-strip

Elements:   hero-heading, hero-subtext, hero-cta-group, hero-image
            feature-card, feature-card-icon, feature-card-title, feature-card-desc
            pricing-card, pricing-card-header, pricing-card-price, pricing-card-features
            testimonial-card, testimonial-quote, testimonial-author
            cta-heading, cta-subtext, cta-button
            faq-item, faq-question, faq-answer
            stats-counter, stats-label

Global:     primary-cta, secondary-cta, nav-cta
            container, section-wrapper
            body-text, heading-lg, heading-md, heading-sm
            product-screenshot
```

Process:
1. `style_tool` → `query_styles` to find messy classes
2. `style_tool` → `create_style` for clean replacements
3. `element_tool` → `set_style` to apply
4. `style_tool` → `remove_style` to delete old classes

### Step 5 — Fix Marketing DS CSS values

Use `style_tool` → `update_style`:

**Buttons:**
```
border-radius: 9999px
background-color: #BF5347
color: #FFFFFF
font-family: Inter, sans-serif
font-weight: 600
```

**Cards:**
```
border-radius: 12px
background-color: #FFFFFF (light sections) or #3A3833 (dark sections)
box-shadow: 0 4px 20px rgba(0,0,0,0.06)
```

**Pricing card Recommended variant:**
```
border: 2px solid #BF5347
```

**Body text:**
```
font-size: 18px
font-family: Inter, sans-serif
line-height: 1.6
color: #3E3C3A (light) or #FAFAF9 (dark sections)
```

**Hero heading:**
```
font-size: 64px
font-weight: 800
line-height: 1.05
letter-spacing: -0.03em
```

**Dark sections:**
```
background-color: #2C2926 (features) or #1E1B18 (hero/footer)
color: #FAFAF9  /* NOT #FFFFFF */
```

**Breakpoint overrides** — use `breakpoint_id`:
- `main` (desktop)
- `medium` (tablet)
- `small` (mobile landscape)
- `tiny` (mobile portrait)

### Step 6 — Fix structural issues

- Remove empty wrapper divs
- Ensure major blocks use Webflow Section elements (full-bleed for hero/dark sections)
- Use Container elements for max-width (1200px) content areas
- Verify surface alternation

### Step 7 — Fix heading hierarchy

Query: `element_tool` → `query_elements` with `type: "Heading"`.

- **H1**: One per page — hero headline
- **H2**: Section headings (Features, Pricing, Testimonials, FAQ, CTA)
- **H3**: Card titles, subsection headings
- **H4-H6**: Rarely needed

### Step 8 — Fix responsive behavior

**Tablet (medium):**
- Feature grids: 2 columns instead of 3
- Hero heading: ~48px (`Marketing/display-lg` size)
- Section padding: 64px (down from 96px)
- Pricing cards may stack

**Mobile (small/tiny):**
- Everything stacks vertically
- Hero heading: 36-40px (`Marketing/display-md` size)
- Body text: 16px (`Marketing/body-md` size)
- Section padding: 40px
- Cards full width
- Nav collapses to hamburger
- Grid gutters: 16px

### Step 9 — Create components

Convert repeated patterns to Webflow components:
- Feature card → `feature-card`
- Pricing card → `pricing-card`
- Testimonial card → `testimonial-card`
- CTA band → `cta-band`
- FAQ item → `faq-item`
- Stats counter → `stats-counter`

### Step 10 — Verify and report

1. `element_snapshot_tool` on key sections
2. `element_tool` → `get_all_elements` to confirm structure
3. `style_tool` → `get_styles` to confirm consolidation

Summary:
- Classes consolidated/renamed
- DS corrections applied
- Wrappers removed
- Headings corrected
- Components created
- Responsive overrides added
- Remaining manual items

## Operating principles

- **Confirm before bulk changes.**
- **Work page by page.** Start with homepage.
- **Preserve visual outcome.** Clean code, same design.
- **Be conservative with element removal.**
- **Marketing DS values are non-negotiable:** pill buttons, 12px cards, warm neutrals, gradient restrictions, surface alternation.
- **Responsive changes need verification.** Ask the user to check after breakpoint changes.
- **Name for the next person.** Classes should be readable without the Figma file.
- **Consultry aesthetic:** warm, confident, quiet. Professional restraint, not flashy.
