---
name: consultry-figma-webflow-preflight
description: >
  Preflight audit of Consultry's Figma marketing site design before syncing to Webflow. Inspects
  structure, auto layout, naming, components, responsiveness, semantic clarity, typography, and
  Consultry Marketing DS compliance — produces a readiness verdict with severity-ranked issues
  and fix-first recommendations. Use this skill when someone says "check my Figma before Webflow",
  "is this ready for Webflow", "preflight", "audit for Webflow sync", "review the design for
  Webflow", "Figma to Webflow readiness", or any request to evaluate whether Consultry's Figma
  marketing pages will transfer cleanly to Webflow. Also trigger when users mention past problems
  with messy classes, broken layouts, or component issues after Figma-to-Webflow import, or when
  someone wants to verify marketing token and gradient compliance before sync.
---

# Consultry Marketing — Figma → Webflow Preflight Audit

## What this skill does

You are performing a **preflight review** of Consultry's marketing site designs in Figma to catch
problems that commonly transfer poorly to Webflow. The goal is structural readiness — not design
critique, not pixel polish, not branding opinions.

Think of yourself as a quality inspector at the boundary between Consultry's Figma design system
and the Webflow marketing build.

## Figma file references

**Primary Figma file:** Consultry Homepage CMS
- **File key:** `ZRTge3ODEnkSDNRrcgBBvK`
- **Full URL:** https://www.figma.com/design/ZRTge3ODEnkSDNRrcgBBvK/Consultry-Homepage-CMS

**Key pages / nodes:**
- **Components page:** `node-id=1-4` (nodeId `1:4`) — all reusable marketing components
- **Marketing page 1:** `node-id=633-9456` (nodeId `633:9456`)
- **Marketing page 2:** `node-id=717-8994` (nodeId `717:8994`)

When using MCP tools, always use file key `ZRTge3ODEnkSDNRrcgBBvK`. Start with `get_metadata`
on root `0:1` to discover all pages, then drill into specific nodes.

## Design folder

Local reference files at `/consultry/design/`:

- `Consultry-Figma-Design-System-Rules.md` — Full token tables, component architecture, critical design rules
- `FIGMA-FRAMES-MASTER-PLAN.md` — Master plan for all Figma frame structure
- `HOMEPAGE-DARK-CONTENT-FINAL.md` — Finalized homepage dark section content
- `HANDOVER-FIGMA-COMPONENTS.md` — Component handover spec
- `logos/` — Brand logos (web logo, brand slogan variants)

## Consultry Marketing Design System — Quick Reference

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `brand/primary` | `#BF5347` | Buttons, links, focus rings. 4.62:1 on white. |
| `brand/primary-light` | `#CA7168` | Hover state |
| `brand/primary-dark` | `#A2463C` | Active/pressed state. 6.04:1 on white. |
| `brand/warm` | `#E8913A` | Charts, progress bars, decorative accents. **NEVER in status badges.** |
| `semantic/warning` | `#D97706` | Status badges, alerts, pending states. **NEVER in decorative use.** |

### Gradient Rule (Most Important)

`linear-gradient(135deg, #E8913A, #E8655A, #9B59B6)` — 135°, three stops.

| Context | Gradient Allowed? |
|---------|:-:|
| Hero CTA (1 per hero max) | Yes |
| Section accent dividers (2px line, max 2/page) | Yes |
| Accent underlines (max 1/page outside hero) | Yes |
| Logo mark | Yes |
| Standard buttons | **NEVER** |
| Card backgrounds | **NEVER** |
| Body text | **NEVER** |

### Marketing Tokens (`mktg-*`)

**Surfaces:**

| Token | Value | Usage |
|-------|-------|-------|
| `mktg-surface/light` | `#FFFBF9` | Warm off-white page bg |
| `mktg-surface/warm` | `#FFF5F0` | Alternating warm section bg |
| `mktg-surface/dark` | `#2C2926` | Dark feature sections |
| `mktg-surface/dark-elevated` | `#3A3833` | Cards on dark sections |
| `mktg-surface/hero` | `#1E1B18` | Hero section (deepest dark) |
| `mktg-surface/text-on-dark` | `#FAFAF9` | Primary text on dark |
| `mktg-surface/text-on-dark-muted` | `rgba(250, 250, 249, 0.65)` | Secondary text on dark |

**Spacing:**

| Token | Value | Usage |
|-------|-------|-------|
| `mktg-space/xs` | 8px | Tight gaps |
| `mktg-space/sm` | 16px | Intra-component |
| `mktg-space/md` | 24px | Default between elements |
| `mktg-space/lg` | 40px | Between components |
| `mktg-space/xl` | 64px | Between sections (primary rhythm) |
| `mktg-space/2xl` | 96px | Between major regions |
| `mktg-space/3xl` | 128px | Hero internal padding |

**Radius:**

| Token | Value | Notes |
|-------|-------|-------|
| `mktg-radius/sm` | 8px | Small elements |
| `mktg-radius/md` | 12px | **Cards** (softer than core 10px) |
| `mktg-radius/lg` | 16px | Screenshot containers, testimonials |
| `mktg-radius/xl` | 24px | Hero product showcases |
| `mktg-radius/full` | 9999px | **ALL marketing buttons** (pill) |

**Shadows:**

| Token | Value |
|-------|-------|
| `mktg-shadow/sm` | `0 2px 8px rgba(0,0,0,0.04)` |
| `mktg-shadow/md` | `0 4px 20px rgba(0,0,0,0.06)` |
| `mktg-shadow/lg` | `0 8px 40px rgba(0,0,0,0.08)` |
| `mktg-shadow/hero` | `0 20px 60px rgba(0,0,0,0.15)` |
| `mktg-shadow/glow` | `0 0 40px rgba(191, 83, 71, 0.12)` |

### Marketing Typography

All text is **Inter**. Code snippets use **JetBrains Mono**.

| Style | Weight | Size | Line Height | Letter Spacing |
|-------|--------|------|-------------|----------------|
| `Marketing/display-hero` | ExtraBold (800) | 64-80px | 1.05 | -0.03em |
| `Marketing/display-lg` | Bold (700) | 48-56px | 1.1 | -0.025em |
| `Marketing/display-md` | SemiBold (600) | 36-40px | 1.15 | -0.02em |
| `Marketing/display-sm` | SemiBold (600) | 28-32px | 1.2 | -0.015em |
| `Marketing/heading-lg` | SemiBold (600) | 24px | 1.3 | -0.01em |
| `Marketing/heading-md` | SemiBold (600) | 20px | 1.4 | -0.01em |
| `Marketing/heading-sm` | Medium (500) | 16px | 1.5 | 0 |
| `Marketing/body-lg` | Regular (400) | 18px | 1.6 | 0 |
| `Marketing/body-md` | Regular (400) | 16px | 1.6 | 0 |
| `Marketing/body-sm` | Regular (400) | 14px | 1.5 | 0.01em |
| `Marketing/label` | Medium (500) | 13px | 1.3 | 0.06em |

### Marketing Grid

| Breakpoint | Columns | Gutter | Max Content |
|------------|---------|--------|-------------|
| Desktop (1280px+) | 12 | 32px | 1200px |
| Tablet (768-1279px) | 8 | 24px | 100% - 64px |
| Mobile (<768px) | 4 | 16px | 100% - 32px |

Hero and dark sections are **full-bleed** (viewport width). Content inside follows the grid.

### Marketing Component Architecture

```
Marketing Primitives:
├── Button / Primary (pill), Hero Gradient (pill), Secondary, Ghost, Nav CTA
│   └── Size: sm (36px), md (44px), lg (52px) — ALL pill-shaped (9999px)
├── Feature Card (12px radius, stagger-in animation)
├── Testimonial Card
├── Pricing Card / Default, Recommended (2px brand-primary border)
├── Statistics Counter (mono font, counter-roll animation)
├── Product Screenshot Container (24px radius, hero shadow)

Marketing Sections:
├── Hero / Primary (Dark), Product Showcase, Minimal (Light), Customer Story
├── Feature Grid (3-col, 2-col, 1-col)
├── Logo Strip (grayscale, hover to color)
├── CTA Band (gradient or dark bg)
├── Footer (hero surface, 4-column)
├── Navigation / Top Bar (transparent → glass on scroll)
│   └── Mega-Menu Dropdown
```

### Surface Alternation Rule

Never stack two same-surface sections. Follow a pattern like:
```
dark hero → light → warm → light → dark → light → CTA band → dark footer
```

### Motion Tokens

| Token | Duration | Usage |
|-------|----------|-------|
| `mktg-duration-fast` | 200ms | Hover, micro-interactions |
| `mktg-duration-normal` | 400ms | Card reveals, fade-up |
| `mktg-duration-slow` | 600ms | Hero entrance, product reveal |
| `mktg-duration-cinematic` | 800ms | Hero bg fade, page transition |

Easing: `cubic-bezier(0.16, 1, 0.3, 1)`. Scroll-triggered reveals, stagger-in (80ms per child, max 5). No looping animations. No parallax on text. Respect `prefers-reduced-motion`.

## When to use

- Consultry's marketing pages are being prepared for Webflow
- The design exists in Figma using Consultry's Marketing DS tokens
- The file has components, auto layout, variables, breakpoints, or reusable sections
- Prior imports produced messy classes, broken layouts, or incorrect component transfers

## Available MCP tools

| Tool | Purpose in this audit |
|------|----------------------|
| `get_metadata` | Page/frame structure overview. Start here. |
| `get_design_context` | Deep node inspection — properties, screenshot, code reference. |
| `get_screenshot` | Visual snapshot for verifying layout intent. |
| `get_variable_defs` | Inspect Consultry `mktg-*` tokens and verify correct application. |
| `use_figma` | Run Plugin API queries (find frames without auto layout, search naming patterns, count detached instances). **Read-only in this skill.** |
| `search_design_system` | Check for existing Consultry DS components. |

**Do not make changes in this skill.** Direct to `consultry-figma-webflow-cleanup` for fixes.

## Workflow

### Step 1 — Identify scope

The primary Figma file is **Consultry Homepage CMS** (file key `ZRTge3ODEnkSDNRrcgBBvK`).

Start by running `get_metadata` with `fileKey: "ZRTge3ODEnkSDNRrcgBBvK"` and `nodeId: "0:1"`
to discover all pages. Key known pages:
- Components: `1:4`
- Marketing page 1: `633:9456`
- Marketing page 2: `717:8994`

Determine scope with the user — full file or specific pages?

Prioritize: homepage → pricing → product/feature → contact/demo form → navbar → footer → CTA sections.

### Step 2 — Build a structural map

Using `get_metadata` on each target page, summarize:
- Page names and top-level frames
- Reusable components and component sets
- Recurring section patterns

Classify: static pages, reusable marketing sections, likely CMS structures (blog, case studies),
interaction-heavy areas, forms/CTA flows.

### Step 3 — Check auto layout quality

For each important frame/component, inspect:
- Whether auto layout exists
- Direction, spacing, padding, alignment
- Sizing behavior (hug/fixed/fill)
- Nesting depth

| Severity | Pattern |
|----------|---------|
| High | Key sections lack auto layout or rely on manual positioning |
| Medium | Auto layout exists but sizing/alignment inconsistent |
| Low | Mostly correct but cleanup would reduce wrapper bloat |

Red flags: manual positioning for repeated content, cards with different padding, wrappers
that only center one child, fixed widths on text containers, empty spacer frames.

### Step 4 — Check responsiveness intent

Flag:
- Horizontal layouts too rigid to stack
- Fixed widths where fluid behavior is needed
- Text containers too narrow/wide
- Cards dependent on exact desktop spacing
- Hero sections where image/text balance will break
- Navbar with no collapsed/mobile logic
- Pricing columns that won't stack cleanly

Reference the Marketing Grid: 12 columns at desktop → 8 at tablet → 4 at mobile.

### Step 5 — Check components and variants

Inspect for:
- Component reuse vs. detached instances
- Component set organization
- Duplicate components with tiny differences

**Marketing-specific checks:**
- Buttons using `mktg-radius/full` (9999px pill)?
- Cards using `mktg-radius/md` (12px)?
- CTA components consistent across pages?
- Navbar is a single reusable component?
- Footer is a single reusable component?
- Pricing cards consistent across columns (Recommended variant uses 2px brand-primary border)?

Risky patterns: `Button / Final / Blue / New`, `Card copy 7`, same card built 5 times,
state variants mixed with layout variants.

### Step 6 — Check naming for Webflow class generation

Layer names become Webflow classes. Flag defaults (`Frame 234`, `Group`, `Rectangle 18`),
temporary names (`final final`, `copy of button`), visual-only names (`blue text`).

**Consultry convention:**
```
hero-section, hero-heading, hero-subtext, hero-cta-group, hero-image
features-section, features-grid, feature-card, feature-card-icon, feature-card-title
pricing-section, pricing-card, pricing-card-header, pricing-card-price
testimonials-section, testimonial-card, testimonial-quote, testimonial-author
cta-band, cta-heading, cta-subtext, cta-button
faq-section, faq-item, faq-question, faq-answer
nav-section, nav-logo, nav-links, nav-cta
footer-section, footer-col, footer-links
primary-cta, secondary-cta
```

### Step 7 — Check semantic structure for SEO and forms

- One H1 per page (hero headline)
- H2 for section headings (Features, Pricing, Testimonials, FAQ)
- H3 for card titles, subsection headings
- CTA groups identifiable
- Form labels, fields, submit clearly structured
- FAQ/feature/testimonial sections as reusable content blocks (not flat artwork)

### Step 8 — Check Consultry Marketing DS compliance

This is critical. Use `get_variable_defs` and `use_figma` to verify:

**Token usage:**
- `mktg-*` tokens applied (not core tokens intended for different values)?
- Body text at 18px with `Marketing/body-lg` style?
- Hero text at 64-80px ExtraBold with `Marketing/display-hero`?
- Pill buttons (`mktg-radius/full`, 9999px)?
- Card radius 12px (`mktg-radius/md`)?

**Gradient rules:**
- Only on hero CTA (max 1), section dividers (max 2/page), accent underlines (max 1 outside hero)
- NOT on standard buttons, card backgrounds, or body text
- Direction 135°, stops: `#E8913A → #E8655A → #9B59B6`

**Surface alternation:**
- No two adjacent sections use the same background
- Dark sections use `mktg-surface/dark` (`#2C2926`) or `mktg-surface/hero` (`#1E1B18`)
- Text on dark uses `mktg-surface/text-on-dark` (`#FAFAF9`), not pure white
- No pure black anywhere

**Color separation:**
- `#E8913A` (brand/warm) only for visual accents
- `#D97706` (semantic/warning) only for alerts/badges

**Typography:**
- Inter only (no Sora, no other fonts)
- JetBrains Mono only for code snippets
- Marketing text styles applied (not App styles)

**Icons:** Lucide only, stroke-based.

### Step 9 — Check assets, icons, and fonts

- Icons are Lucide, 24x24, stroke-based
- No mixed icon libraries
- Images in responsive containers
- No loose vector clutter
- Verify only Inter and JetBrains Mono are used (Sora was deprecated)
- Logos from `/consultry/design/logos/`

### Step 9b — Check gradient text risks

| Severity | Pattern |
|----------|---------|
| High | Brand-critical hero gradient text, partial-span gradients, transparency-based |
| Medium | Repeated gradient headings with inconsistent setup |
| Low | Isolated simple gradient text |

Gradient text should only appear in hero areas. Elsewhere: flag it.

### Step 9c — Check spacer frame problems

| Severity | Pattern |
|----------|---------|
| High | Spacers common in major sections or repeated systems |
| Medium | Spacers inside reusable components |
| Low | A few isolated spacers |

### Step 10 — Check Webflow-specific risk zones

Pay extra attention to these — they need the cleanest structure:

- **Navbar** (transparent → glass on scroll, logo + nav links + CTA pill button, mega-menu)
- **Hero sections** (full-bleed dark, gradient accents, `Marketing/display-hero` headline, CTA group)
- **Feature grids** (3-col → 2-col → 1-col responsive)
- **Pricing cards** (consistent columns, Recommended variant with border)
- **Logo strip** (grayscale → color hover)
- **Testimonial sections**
- **FAQ accordions**
- **CTA bands** (gradient or dark bg)
- **Contact/demo forms**
- **Footer** (hero surface, 4-column, full-bleed dark)
- **Statistics counters** (mono font, counter-roll animation prep)

### Step 11 — Decide transfer readiness

**Safe to Sync Now** — Auto layout solid, naming clean, components standardized, marketing
tokens correctly applied, gradient rules respected, surface alternation correct.

**Sync With Cleanup** — Usable and importable, but class bloat, component fragmentation,
token misuse, or surface stacking issues likely. List specific cleanup items.

**Not Ready** — Major layout logic missing, naming chaotic, wrong tokens used, gradient
misuse widespread, sync would create significant rework.

## Report format

### 1. Readiness Verdict
One of: Safe to Sync Now / Sync With Cleanup / Not Ready
Plus 2–4 lines explaining why.

### 2. Highest-risk issues
Severity-ranked. For each:
- **Severity**: High / Medium / Low
- **Area**: page/component/section
- **Problem**: what's wrong
- **Why it matters for Webflow**: the transfer risk
- **DS violation** (if applicable): which Marketing DS rule is broken
- **Recommended fix**: specific action

### 3. Fix First
Ordered list of 3–7 cleanup actions.

### 4. Things already good
Call out well-prepared areas.

### 5. Recommended next action
- Clean in Figma first → use `consultry-figma-webflow-cleanup` skill
- Sync now, fix in Webflow → use `consultry-webflow-post-sync-cleanup` skill
- Rebuild selected sections manually in Webflow

### 6. Optional cleanup prompts
Actionable prompts for the cleanup skills.

## Operating principles

- Focus on **transfer risk** and **Marketing DS compliance**, not design taste.
- Flag issues only when they affect Webflow sync quality, maintainability, SEO, or brand consistency.
- Be explicit about what the MCP couldn't verify.
- Don't recommend a full redesign when structural cleanup is enough.
- Prefer fixing in Figma when issues are systemic.
- Consultry's marketing aesthetic is **warm, confident, quiet** — professional restraint, not flashy.

## Priority order for the final decision

1. Auto layout quality
2. Marketing DS compliance (mktg-* tokens, gradients, surfaces)
3. Naming quality
4. Component consistency
5. Responsive intent
6. Semantic clarity for headings, CTAs, and forms
