# Figma Code Connect -- Consultry Marketing Site

> Mapping between Figma design components and their React implementations.
>
> **Figma File:** `ZRTge3ODEnkSDNRrcgBBvK` -- Consultry-Homepage-CMS
> - Components page: `node-id=1-4`
> - Dark final pages: `node-id=2339-1202`

## Structure

| File | Description |
|---|---|
| [component-map.md](component-map.md) | Master table: every Figma component and its React counterpart |
| [page-compositions.md](page-compositions.md) | How Figma page frames compose into React page routes |
| [unmapped.md](unmapped.md) | Figma components without a React implementation (gap analysis) |

## Quick stats

- **Total Figma components:** 48
- **Mapped to React:** 20
- **Unmapped / not yet implemented:** 28
- **React-only (no Figma component):** 3 (MotionReveal, HomepageJsonLd, HeroShowcaseRowMotion)

## Conventions

- All React components live under `src/components/marketing/` (sections) or `src/components/ui/` (primitives).
- Content is separated from components in `src/lib/content/de/`.
- Figma uses `Theme=Dark` / `Theme=Light` variants; the React site is dark-only for now.
- Figma node IDs use colon notation (`88:22`); URL format uses hyphens (`88-22`).
