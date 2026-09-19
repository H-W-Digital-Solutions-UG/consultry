# Native Astro hero scenes

All four product variants — `brain`, `brand`, `ledger`, and `access` —
use the same `SpatialHero.astro` composition and optional Three.js enhancement.
Each hero contains a centered object, three HTML argument signals, a four-phase
HTML document preview, and the shared conversion controls. Product differences
come from geometry and content, rather than a separate static layout.

The homepage uses the same composition with `sceneVariant="logo"` while its
adjacent arguments use the merged `brain` content variant. `logo-model.ts` traces
the current website mark (`public/images/consultry-logo.png`, also
`design/logos/consultry-weblogo-cropped.png`): a folded C ribbon, the detached
upper-right circular node and lower-right triangular node. Six extruded solids
preserve the contour and fold seams; their gold, coral and violet surfaces open
in depth around the same center. The older `consultry-mark.svg` is a different
mark without the circular node and is not the geometry reference.

The logo uses opaque standard materials, two fine links visible only while open,
and the existing on-demand renderer. It adds no loader, model download,
postprocessing, pointer rotation, or continuous animation loop. Its matching
`logo-scene-480.webp` and `logo-scene-720.webp` posters use the production studio
capture process below.

`HeroScene.astro` first emits an ordinary responsive WebP image. The small DOM
controller in `src/scripts/hero-scene.ts` dynamically imports the renderer in
this directory when startup conditions allow. There is no React component,
hydration runtime, animation library, or model download.

```astro
---
import SpatialHero from '../components/SpatialHero.astro';
---
<SpatialHero
  variant="ledger"
  productLabel="Schwarm & Audit"
  title="Den Arbeitsstand"
  titleEnd="gemeinsam weiterführen."
  lede="Der nächste Agent knüpft an euren Arbeitsstand an."
  aspects={[
    'Den Stand mitnehmen',
    'Widersprüche sichtbar halten',
    'Gemeinsam weiterarbeiten',
  ]}
/>
```

## Shared composition and scroll arc

`SpatialHero.astro` uses `HeroScene`, `HeroSignals`, and `HeroConversion` for
every variant. The object stays in the same centered focus
frame while a bounded interval of native page scrolling opens its parts and
seats them again slowly. The expansion function opens over progress `0–0.34`,
holds briefly, then closes across `0.4–1` (smoothstep), so the reassembly is
the visible story of the sequence rather than rotation.

Where the focus frame is sticky, the controller derives the interval from the
stable layout coordinates of `[data-scene-focus-track]` and `[data-scene-focus]`.
The interval completes up to 24 pixels before sticky release. Non-sticky layouts
use a bounded viewport-derived interval of 420–560 pixels. Artwork transforms do
not change the measured range. The scene does not capture focus, pointer gestures,
or scrolling.

While the parts are open, the whole object turns only a hint toward the viewer
(`sin(progress·π)` scaled to about 6°, exactly zero at both ends, so the poster
handoff stays identical). After the sticky release a second value, the carry (`setCarry`,
0–1 over about half a viewport), keeps turning the object, leans it back and,
through the `--scene-carry` variable on the embed, lets poster and canvas lead
the scroll and shrink until the object has left; connector lines and the ground
shadow fade with it. The renderer starts only while the carry is zero, so a late
model swap never jumps away from the poster pose.

The containing `[data-scroll-scene]` starts with `data-scene-aspect="0"`. Progress
selects phases `1`, `2`, and `3`, retaining `3` at the final resting pose. This attribute changes
only when the phase changes. `HeroSignals` keeps every reached argument visible;
reverse scrolling unwinds the sequence. All four phases are emitted as ordinary HTML. Phase
`0` provides the initial and conservative presentation.
Copy comes from `src/content/hero-outcomes.ts`.

On wide layouts, decorative connector paths run from HTML signals to projected
model anchors. Their layout geometry is cached on resize; positions update with
the existing scene draw. Compact layouts (`max-width: 1099px` or `max-height: 649px`,
the same query in `hero-scene.ts`, `story-backdrop.ts` and the stylesheets) are static:
the poster stands for the object, nothing is pinned, and the three arguments follow the
object as a plain list with their sentences. Desktop actions share the same sticky
wrapper, so they leave the viewport together without colliding. On wide layouts
the action block docks at the currently reached argument and travels down a
progress rail at the right edge, resting beside the third argument; counter,
rail fill and markers are CSS states of `data-scene-aspect`. Compact layouts
keep the conversion block before the sticky artwork; its normal-flow height is
included when measuring the scroll start. There is no separate caption or
image-only hero branch for Brain or Access.

## Poster and canvas handoff

Every variant uses the same asset naming convention:

```text
public/hero/<variant>-scene-480.webp
public/hero/<variant>-scene-720.webp
```

`HeroScene` fills a square parent viewport. Its poster and canvas fill exactly the
same square without independent fitting or cropping. Optional component props
include `class`, `annotated` (default `false`), and `priority` (default `true`).
Below-the-fold scenes can use `priority={false}`.

The poster is generated from the production renderer, camera, materials, and
assembled pose. Both ends of the scroll interval use identical numerical
transforms. A canvas is revealed only after its confirmed draw matches the current
endpoint. The image and prepared canvas then swap atomically, without a crossfade.
A slow load during the expanded interval keeps the poster until a matching endpoint
is reached; it does not replace the image with an already expanded object.

Startup waits for the page to load, the poster to decode, and two paint frames to
pass. It then requires a visible matching endpoint and at least 180 milliseconds
without scrolling. Where available, `requestIdleCallback` runs without a timeout
that forces initialization during a busy frame. The fallback timer uses the same
quiet-period checks. Visibility, endpoint, and scroll quiet are checked again after
the asynchronous import and before creating WebGL.

Reduced motion, Save Data, 2G and compact layouts use the poster alone; on those the
renderer and Three.js are never requested, and the story backdrop keeps its poster too. A preference change disposes
an existing renderer and restores the poster. WebGL failure also retains the image.
Headlines, argument content, document previews, links, and conversion controls are
HTML rather than canvas text.

## Rendering limits and lifecycle

Rendering is on demand, with a maximum scheduling rate of 60 Hz and a DPR cap of
1.5. The drawing buffer's long edge is capped at 540 physical pixels during
movement and 720 at matching resting endpoints. Buffer resizing and the resulting
draw happen in the same task. Unchanged poses are not repeatedly submitted.

The renderer projects annotations after updating model matrices, and reuses the
same draw for connector updates. Rendering pauses offscreen and in background
tabs; no animation frame loop runs while the scene is still. Astro's page-transition
lifecycle disposes GPU resources, observers, timers, and listeners before replacing
the page. These are implementation limits, not measured frame-rate or loading-time
claims.

## Development-only poster studio

`scripts/scene-studio.html` and `scripts/scene-studio.ts` provide a local poster
capture surface. They import the production renderer directly and are not part of
any production Astro route. From the project directory, start a separate Vite
development server:

```sh
npx vite --host 127.0.0.1 --port 4322 --strictPort
```

Open `http://127.0.0.1:4322/scripts/scene-studio.html`. Select a variant and leave
the pose at either assembled endpoint (`0` or `1`). The studio captures a transparent
PNG synchronously from the renderer's confirmed `onFrame` callback. The pose slider
also allows inspection of intermediate geometry; exports are created only for
matching endpoints.

Download the 720 × 720 PNG, then encode the production poster pair:

```sh
node scripts/encode-scene-poster.mjs /path/to/brain-scene-720.png brain
```

The encoder accepts `<png> <variant>`, checks for a 720 × 720 source with alpha,
and writes matching 480- and 720-pixel WebP files under `public/hero/`. Valid variants
are the four product variants and the homepage `logo`. Regenerate the pair whenever a variant's rest geometry,
camera, materials, or lighting changes; independently rendered reference images
are not interchangeable with these matching scene posters.

## Local diagnostics

Append `?scene-perf=1` to a page to enable local renderer diagnostics. The canvas's
`data-scene-perf` JSON records synchronous setup, asynchronous shader preparation,
CPU render submission durations, frame count, draw calls, triangle count, and
drawing-buffer dimensions. This mode is off by default and sends no telemetry.

CPU timings do not include asynchronous GPU completion and do not establish
sustained frame rate or Core Web Vitals. Compare frame counts at rest and offscreen
to check whether additional frames are submitted. Current validation belongs in
`design-qa.md` with the tested build, viewport, and conditions; historical layout
coordinates and timing observations do not validate the current four-variant
implementation.
