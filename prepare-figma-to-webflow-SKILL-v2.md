# /prepare-figma-to-webflow

## Purpose
Use the local Figma MCP server to inspect the current Figma design and identify issues that commonly transfer poorly to Webflow. The goal is to catch structural, naming, responsiveness, and component problems **before** running Figma → Webflow sync.

This skill is for **preflight review**, not full design implementation.

## When to use
Use this skill when:
- a marketing site or landing page is being prepared for Webflow
- the design already exists in Figma
- the team plans to use Figma to Webflow sync, copy/paste, or MCP-assisted Webflow refinement
- the design has components, auto layout, variables, breakpoints, or reusable sections
- prior imports produced messy classes, broken layouts, or incorrect component transfers

Do **not** use this skill when:
- the design is only a rough wireframe
- the target is a pure coded React/Next.js build with no Webflow import path
- the user wants visual redesign rather than transfer readiness

## Main risks this skill checks
This skill specifically looks for issues that often transfer buggily or require cleanup in Webflow:

1. Missing or inconsistent **Auto Layout**
2. Weak or missing **responsive intent**
3. Figma **variants** that may not map cleanly
4. Bad **layer naming** that produces poor Webflow classes
5. Weak **semantic naming** for headings, text, buttons, forms, etc.
6. Over-nested frames and wrapper bloat
7. Detached or inconsistent component usage
8. Variables and typography setup that may produce inconsistent CSS output
9. Unsupported or risky design patterns for Webflow sync
10. Assets/fonts readiness risks
11. Gradient text that may not reproduce cleanly in Webflow
12. Spacer frames and empty layout elements that create wrapper bloat
13. CMS-like sections that should become structured components
14. Forms/CTA sections that need semantic and tracking-aware structure

## Expected output
Produce:
- a concise **Readiness Verdict**
- a **severity-ranked issue list**
- a **Fix First** section
- a **Safe to Sync Now / Sync With Cleanup / Not Ready** recommendation
- optional **AI-ready cleanup prompts** for Figma MCP or Webflow MCP

## Required tools
- local Figma MCP server
- ability to inspect:
  - pages
  - frames
  - components
  - component sets / variants
  - layer names
  - auto layout properties
  - variables / styles
  - text styles
  - asset usage
  - selected node or page structure

## Operating principles
- Prefer **structural correctness** over pixel-perfect commentary.
- Focus on **transfer risk**, not general design taste.
- Flag issues only when they matter for Webflow sync quality, maintainability, or SEO/form implementation.
- Be explicit about uncertainty if the MCP server does not expose a needed property.
- Do not invent properties you cannot inspect.

---

## Workflow

### Step 1 — Identify scope
1. Determine which page(s) or frame(s) are intended for Webflow export.
2. Confirm whether the review target is:
   - one page
   - the whole file
   - only key marketing pages
   - a component library / design system
3. Prefer reviewing:
   - homepage
   - pricing
   - product / feature pages
   - contact / demo form page
   - navbar / footer / CTA sections
4. If the file is large, prioritize:
   - top-level pages
   - reusable sections
   - navigation
   - footer
   - form blocks
   - card systems
   - buttons
   - hero sections

### Step 2 — Build a structural map
Using the MCP server, inspect and summarize:
- page names
- top-level frames
- reusable components
- component sets
- shared styles / variables
- recurring sections

Create a quick mental map of:
- static pages
- reusable marketing sections
- likely CMS-like structures
- interaction-heavy areas
- forms and CTA flows

### Step 3 — Check Auto Layout quality
For each important frame/component, inspect:
- whether Auto Layout exists
- direction is sensible
- spacing is explicit and consistent
- padding is explicit
- alignment behavior is intentional
- hugging/fixed/fill sizing behavior is coherent
- nested layouts are not unnecessarily deep

Flag:
- major sections without Auto Layout
- manual positioning where layout should be responsive
- inconsistent spacing rules inside repeated cards/lists
- wrappers that only exist to compensate for poor layout setup
- mixed sizing behavior likely to collapse or overflow after sync

Severity guide:
- **High**: key sections lack Auto Layout or rely on manual positioning
- **Medium**: Auto Layout exists but sizing/alignment rules are inconsistent
- **Low**: mostly correct but cleanup would reduce wrapper bloat

### Step 4 — Check responsiveness intent
Inspect whether layouts appear prepared to adapt to smaller breakpoints.

Look for:
- frames that are obviously desktop-only
- rows that should stack but have no clear stacking strategy
- very narrow cards/buttons with brittle text fit
- large multi-column sections with no mobile decomposition
- inconsistent min/max sizing assumptions
- hero sections with image/text balance that will likely break
- navbars with no collapsed/mobile logic implied

Flag:
- horizontal layouts that are too rigid
- fixed widths everywhere
- text containers too narrow or too wide
- cards that depend on exact desktop spacing
- sections where visual order should change on mobile but structure prevents it

### Step 5 — Check components and variants
Inspect:
- reusable components
- component sets
- detached instances
- inconsistent duplicates
- variant naming patterns
- overuse of variants for things Webflow may handle differently

Flag:
- duplicate components with tiny differences instead of variants
- variants that encode too many dimensions at once
- variants likely to become separate Webflow components anyway
- instances detached and manually modified all over the file
- important repeated sections not componentized
- component names that do not describe role

Examples of risky patterns:
- `Button / Final / Blue / New`
- `Card copy 7`
- same card built 5 times with small manual edits
- state variants mixed with layout variants in one huge set

### Step 6 — Check naming for Webflow class generation
Inspect layer and component names.

Flag names that are:
- ambiguous
- duplicated excessively
- design-tool-oriented instead of semantic
- temporary
- based on visual appearance only
- likely to create messy Webflow classes

Bad examples:
- `Frame 234`
- `Group`
- `Rectangle 18`
- `final final`
- `div`
- `blue text`
- `left thing`
- `copy of button`

Better patterns:
- `hero`
- `hero_content`
- `hero_cta_group`
- `feature_card`
- `testimonial_card`
- `site_footer`
- `contact_form`
- `primary_button`

Also check for semantic hints:
- heading layers clearly named as heading/title
- paragraph/body text clearly named
- buttons clearly named
- form fields clearly identified
- nav and footer areas clearly identified

### Step 7 — Check semantic structure for SEO and forms
Review whether the design can map cleanly to meaningful page structure.

Look for:
- clear hero heading hierarchy
- one obvious H1 candidate per page
- supporting text blocks separated clearly
- CTA groups identifiable
- form labels, fields, and submit actions clearly structured
- nav, footer, section headings, testimonials, FAQs, feature grids clearly separable

Flag:
- multiple visual “main headings” with no obvious page hierarchy
- heading and paragraph text mixed in the same layer
- buttons designed as generic frames with no semantic distinction
- forms that are only visually grouped but not structurally organized
- FAQ or feature sections built as flat artwork instead of reusable content blocks

### Step 8 — Check typography, variables, and spacing systems
Inspect:
- text styles
- color variables / styles
- spacing variables if available
- base type scale consistency
- repeated manual values that should be tokens

Flag:
- many near-duplicate text styles
- ad hoc spacing values everywhere
- color use inconsistent across repeated components
- hardcoded values where variables should exist
- buttons/cards using local overrides instead of shared styles

This matters because import quality improves when the design system is coherent.

### Step 9 — Check assets, icons, and fonts readiness
Inspect:
- image usage consistency
- repeated icons as components vs loose vectors
- whether assets appear organized
- custom font usage patterns, if visible

Flag:
- inconsistent icon sizing
- loose vector clutter
- decorative assets embedded in brittle nested wrappers
- image containers with no obvious responsive behavior
- likely missing font readiness notes if custom fonts are heavily used

If font upload status cannot be inspected through MCP, note that explicitly as an external prerequisite.


### Step 9b — Check gradient text risks
Inspect all text layers or text styles that appear to use gradients.

Flag:
- gradient fills applied directly to text
- gradients with transparency stops
- partial-heading gradients where only one word or span is styled
- multi-line gradient headlines whose visual alignment is important
- inconsistent duplicate gradient styles across pages/components
- hero headings where the exact gradient rendering is brand-critical

Why it matters:
- gradient text often does not map as a simple text color
- Webflow commonly implements this effect with background gradient clipped to text
- the visual result may need manual rebuilding or verification after sync
- transparency-based gradients are especially risky

Severity guide:
- **High**: brand-critical hero gradient text, partial-span gradients, or transparency-based gradients
- **Medium**: repeated gradient headings with inconsistent setup
- **Low**: isolated simple gradient text that can be rebuilt quickly

Recommended fixes:
- standardize gradient text into a small number of reusable styles
- avoid relying on transparency-heavy gradients if the exact rendering matters
- note critical gradient headlines as manual post-sync verification items
- consider rebuilding key gradient text directly in Webflow after import

### Step 9c — Check spacer-frame problems
Inspect the file for empty or near-empty frames used only to create distance.

Flag:
- empty frames between siblings used only as spacers
- fixed-height vertical spacer blocks between sections
- horizontal spacer frames where parent gap should be used instead
- wrappers that only center or separate one child
- repeated spacer layers inside cards, nav items, buttons, or CTA groups
- spacer elements that hide the real layout rule

Why it matters:
- spacers often import as unnecessary wrappers or divs
- they create class bloat and messy nesting in Webflow
- fixed spacer logic tends to break more easily across breakpoints
- proper gap, padding, and alignment translate better than visual spacer hacks

Severity guide:
- **High**: spacer frames are common in major page sections or repeated systems
- **Medium**: spacers appear inside reusable components or important layouts
- **Low**: a few isolated spacer elements that are easy to replace

Recommended fixes:
- replace sibling spacer frames with Auto Layout gap
- replace section spacer blocks with container or section padding
- replace alignment hacks with proper layout sizing/alignment rules
- simplify wrapper structure after converting spacing into real layout logic


### Step 10 — Check Webflow-specific risk zones
Pay extra attention to:
- navbar
- mega menu
- hero
- pricing cards
- logo clouds
- testimonial sliders/grids
- FAQ accordions
- contact/demo forms
- footer
- multi-column comparison tables

These often need the cleanest structure.

Flag:
- overly visual nav construction
- footer built from arbitrary loose layers
- pricing cards inconsistent across columns
- accordions not componentized
- forms lacking a clean field hierarchy
- CTA sections repeated with small drift instead of one reusable component

### Step 11 — Decide transfer readiness
Assign one of three outcomes:

#### Safe to Sync Now
Use when:
- major sections use good Auto Layout
- naming is mostly clean
- components are reasonably standardized
- only minor cleanup is needed

#### Sync With Cleanup
Use when:
- the design is usable
- import is possible
- but class bloat, component fragmentation, or responsive cleanup is likely

#### Not Ready
Use when:
- major layout logic is missing
- naming is chaotic
- components are inconsistent
- responsiveness is not implied structurally
- sync would create significant rework

---

## Reporting format
Return results in this structure:

### 1. Readiness Verdict
One of:
- Safe to Sync Now
- Sync With Cleanup
- Not Ready

Plus 2–4 lines explaining why.

### 2. Highest-risk issues
List only the most important issues first.
For each issue include:
- severity: High / Medium / Low
- area: page/component/section
- problem
- why it matters for Webflow
- recommended fix

### 3. Fix First
A short ordered list of the first 3–7 cleanup actions.

### 4. Things that are already good
Call out what is well prepared:
- good componentization
- clean naming
- coherent text styles
- clear section structure
- forms ready for build
- reusable CTA system

### 5. Recommended next action
Choose one:
- clean in Figma first
- sync now, fix in Webflow
- rebuild selected sections manually in Webflow
- use Webflow MCP after sync for cleanup

### 6. Optional MCP cleanup prompts
When useful, provide actionable prompts such as:
- “Rename all ambiguous top-level frames on the Home page semantically.”
- “Find repeated card layouts that should become a single component.”
- “Identify frames without Auto Layout in export-target pages.”
- “List all component sets whose variants combine layout and state in one set.”
- “Show all layers named Frame, Group, Rectangle, Copy, or Final.”
- “Find all text layers using gradient fills and classify them by transfer risk.”
- “Find empty or near-empty frames used only as spacers in export-target pages.”

---

## Heuristics library

### Auto Layout red flags
- manual x/y positioning for repeated content
- repeated cards with different padding rules
- layout wrappers that only center one child
- fixed widths on text-heavy containers everywhere
- alignment compensated by empty spacer frames

### Gradient text red flags
- gradient applied directly to text with no reusable style pattern
- gradients that depend on transparency stops
- partial-word or partial-heading gradients
- multi-line hero gradients where exact visual positioning matters
- many slightly different gradient text treatments across pages

### Spacer red flags
- empty frames inserted between siblings
- fixed-height blank blocks between sections
- spacer layers inside cards, nav items, or buttons
- wrappers whose only purpose is separation
- spacing achieved by invisible objects instead of gap/padding

### Naming red flags
- Frame 1, Frame 2, Frame 87
- Group, Group 2
- Rectangle 5
- copy, copy 2
- final, final2, final-final
- names that describe color only
- names that describe position only

### Component red flags
- many detached instances
- duplicate components instead of variants
- one component set encoding state + size + theme + layout + device
- repeated sections not componentized
- card/button/nav/footer drift across pages

### Semantic red flags
- no obvious H1
- page hero content split across unrelated layers
- button not distinguishable from generic container
- form label + input not grouped clearly
- testimonials/FAQs/pricing items built as artwork instead of content blocks

### Responsive red flags
- exact desktop spacing everywhere
- side-by-side layouts with no stacking logic
- huge nested frames for visual positioning
- text width dependent on desktop art direction only
- nav/footer not structurally mobile-ready

---

## Suggested MCP inspection sequence
Use the local Figma MCP server in roughly this order:

1. Get file/page overview
2. Identify export-target pages
3. Inspect top-level frames on each target page
4. Inspect shared components and component sets
5. Search for ambiguous names
6. Search for missing Auto Layout on important frames
7. Review repeated sections for component consistency
8. Review typography and variables
9. Review form/CTA sections specifically
10. Produce readiness report

---

## Guardrails
- Do not judge branding taste unless it impacts transferability.
- Do not recommend a full redesign when structural cleanup is enough.
- Do not assume Webflow will preserve every Figma concept 1:1.
- Prefer fixing issues in Figma when they are systemic.
- Prefer fixing issues in Webflow only when the source is already good enough and the issue is implementation-side.
- If MCP visibility is partial, say exactly what could not be verified.

## Final decision rule
If the design is a standard marketing site and the goal is clean Webflow implementation, prioritize:
1. Auto Layout quality
2. naming quality
3. component consistency
4. responsive intent
5. semantic clarity for headings, CTAs, and forms

If those five are in good shape, the file is usually ready enough to sync.
