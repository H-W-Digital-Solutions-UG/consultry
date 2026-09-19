# Astro alternative · design and implementation review

Reviewed locally on 14 September 2026. Preview: http://127.0.0.1:4321/. This is a separate project in `marketing-site-astro`; the existing Next marketing site and React smoke application are retained.

## Current pass — 14 September 2026: cumulative stages and scoped app preview

Reached hero arguments now accumulate on the homepage and all five product pages. Phase 3 remains active through the final assembled pose; reverse scrolling unwinds the sequence. All reached connector paths remain visible. Compact screens use three separate rows above the centered artwork.

The small paper excerpt was replaced by an app preview using the actual Consultry Figma references: Prompt Workspace (`214:2`, composer `217:172`), Layouts (`66:9`, artifact review `252:532`) and Shell & Assistant (`229:324`, scoped result `237:57`). The page nodes required metadata drill-down before design-context retrieval. Adopted principles: warm workspace surface, dark application header, visible task context, agent contribution, source and human review state. No Figma files were changed.

The preview follows four existing illustrative work states. Staffing and cost facts are structured; Ledger shows minimum runs and reserve. The always-visible Demo label and source/status boundary distinguish the example from live work. The native preview link opens the matching interactive demo. No new JavaScript dependency or mock-specific runtime was added.

Desktop preview and conversion now share one sticky composition, fixing their different release boundaries. At 1280×720 the preview and action have a 16px gap through the active phases and release; all three arguments persist at progress 1. Compact measurement accounts for the CTA before the sticky object. The 390×844 preview ends at 828px; at 1024×720 it ends at 704px. The 320×780 Ledger preview fits at 772.6px, including its link. No horizontal overflow was observed. The Ledger preview link reached `#product-demo-ledger`, with the example starting at 96px below the fixed navigation.

Validation: Astro check passed for 68 files without errors, warnings or hints; production build passed; 1,240 static assertions across 14 pages and 493 local references passed. Initial JavaScript is 8.80 KiB gzip on home and 6.32 KiB per product page; the 146.73 KiB Three.js graph remains separately deferred. The controller's small increase handles shared desktop pinning and compact scroll geometry. No FPS or real-user performance improvement is claimed. Existing deferred-chunk build warning remains.

Evidence: `output/browser-qa/cumulative-app-checks.json`, `hero-app-cost-desktop.png`, `cumulative-access-expanded.png`, `hero-app-mobile.png`, `hero-app-ledger-narrow.png`.

## Previous pass — 14 September 2026: consistent five-product 3D family

All five product pages now use the same SpatialHero composition and enhancement contract. The former image-only Firmengedächtnis and Zugriff heroes were replaced by matching lightweight procedural scenes: a central knowledge node with four linked satellites, and three rounded keyhole layers. Each page uses a centered fixed-view object, three scroll arguments, four document-preview states including rest, and the same always-available conversion block. Brain and Access preview copy follows their actual illustrative demo workflows.

Hero images and gallery thumbnails share the `<variant>-scene` naming and the production model's exact resting camera pose. The two new transparent posters were exported synchronously from a confirmed draw in the development-only scene studio, then encoded as 480/720 WebP files (15–19 KiB each). The gallery retains lightweight images from this same object family; it does not initialize five additional WebGL contexts. Existing Corpus, Brand and Ledger model geometry remains unchanged.

Verification: Astro checked 68 files with zero issues; production build and 1,222 static assertions passed across 14 pages / 481 local references. Initial JavaScript remains 8.70 KiB gzip on the homepage and 6.22 KiB per product page. The separately deferred 3D graph is 146.73 KiB gzip; its increase contains the two new models and extrusion geometry. No React, animation framework or downloaded model was added.

Browser checks confirmed ready canvases on all five product pages, the same three arguments/four previews, and no horizontal overflow. At 1280×720 both new objects stayed centered at y360 through the expanded phase. At 390×844 they stayed centered at y422; the 320×780 Access page also had no overflow. Access returned to depth0 / phase0. Brain's draw counter stayed at7 through the idle expanded observation. New scene diagnostics reported 8,256 triangles / 17 draw calls for Brain and 9,816 / 10 for Access. These are geometry and CPU draw-submission observations, not a measured FPS or real-user speed comparison. Conservative preference fallbacks remain shared across all variants.

Evidence: `output/browser-qa/uniform-heroes-checks.json`, `uniform-brain-expanded.png`, `uniform-access-expanded.png`, `uniform-brain-mobile.png`, `uniform-access-mobile.png`. The development studio and encoding workflow are documented in `src/lib/scene/README.md`.

## Previous pass — 14 September 2026: connected hero and agent work preview

The homepage now brings the working example before the product gallery. A small goal picker links to preparing a conversation, revising a plan and improving a document. The shared product demo shows a concrete existing task, expandable starting context, two agent contributions, an evolving document and a useful next action. Its timed sequence visibly reads the basis, introduces the current contribution and reveals the result. Manual steps, source disclosures, pause/resume and the final illustrative text download remain available. There is no real agent backend behind these examples.

The Ledger example carries an existing plan from stand 07 into a challenged stand 08 and a handoff draft. Repeated claims from one source are not counted as independent evidence. A counterexample changes the plan; task-scoped working consensus does not grant business approval. The access example labels permissions as system context rather than agent-granted authority.

The exact user-linked `/wayfinder` task, `019fadd3-ca6d-7dd3-8061-e45eb24f964f`, was identified. Its exposed recent voice items contained no transcript bodies; the dated framing record in `product-definition/archive/session-2026-09-14-framing-messaging/NOTES.md` and accepted product decisions supplied the usable detail. Copy now emphasizes carrying prior work forward across tasks and agents, includes solo founders, teams and organizations, and treats hosting/private-model choices as planned options with scope and responsibilities still open. The confirmed 100 waitlist entries are retained; preview signup remains disabled.

Apollo was inspected in the user's authenticated Chrome tab. Adopted patterns are a small set of concrete goals, a contextual assistant alongside the work and visible starting inputs. Clicking Apollo's Continue button started a prewritten assistant chat; its suggested CRM filters were not applied. The original Conversations page was restored. No account data or Apollo assets were copied into these demos. MotionSites composition references and Mobbin workchat/artifact impressions informed the layout; they were treated as references, not implementation instructions.

The centered 3D hero now connects projected object points to one active argument and a changing illustrative work excerpt. Its exact matching poster/canvas pose and deferred rendering boundary remain. The homepage gallery uses smaller borderless cards, adjacent previews, named controls and bounded native vertical scroll driving horizontal movement on suitable desktop viewports. A direct link skips to the next section. Mobile retains native horizontal scrolling. Keyboard navigation focuses without an extra browser scroll.

Final verification: Astro checked 65 files with zero errors, warnings or hints. The production build completed at 14:27:22 CEST, and 1,176 static assertions passed across 14 pages and 481 local references. Initial JavaScript is 8.69 KiB gzip on the homepage and 6.21 KiB per product page; Three.js/runtime remains separately deferred at 135.85 KiB. The existing large deferred-chunk warning remains.

Browser observations: at 1280×720 the homepage conversion block ended at 687px and Korpus at 719px. The gallery quick exit ended at 648px after the duplicate top-padding correction; 400px of native scrolling moved the active product from first to second. Direct selection reached the fifth product, and its counters remained at 93 scroll events / 94 renders during the subsequent idle observation. Ledger's reading → working → result sequence retained a frame height of 887.18px and scroll position 1256px. Its current contribution and document sections were hidden during reading, then revealed in sequence. Pause/resume, manual revision, source excerpts, handoff and starting-context disclosures were checked. All five variants exposed exactly one active panel, with inactive panels carrying inert and aria-hidden attributes. Mobile checks at 390×844 and 320×780 found no document-level horizontal overflow.

These observations establish layout and interaction behavior, not measured GPU frame rate, real-user load time or conversion improvement. Evidence: `output/browser-qa/workchat-final-checks.json`, `workchat-home-1280.png`, `workchat-home-mobile.png`, `workchat-ledger-revision.png`, `workchat-ledger-mobile.png` and `workchat-gallery-final.png`. The final gallery screenshot uses the natural Chrome viewport of 1471×772.

## Previous tuning — 14 September 2026: rendering cadence and gallery refinement

The renderer now owns one display-synchronized animation queue instead of a parent RAF plus a RAF/timer/RAF chain. A short input easing settles to the actual scroll position; the model opens over the first 38% of the existing runway, holds fully open until 72%, then returns to the exact matching poster pose. Constant poses skip WebGL draws. A subtle CSS ground ring follows the same envelope and disappears at rest. Geometry, camera, poster matching, deferred loading and the existing bounded native scroll distance are preserved.

The borderless horizontal gallery now has compact arrows and five named position buttons, keyboard navigation, both neighboring previews and matching clone appearances at wrap. Native scrollend avoids repeated fallback timers where supported. A responsive race discovered during review was fixed: resized offsets are never interpreted using stale card geometry, and the selected product survives viewport changes. The native vertical scrollbar uses a slimmer warm neutral treatment.

Verification: Astro checked 59 files without errors, warnings or hints; production build and 1,167 static assertions passed. The homepage delivers 7.49 KiB gzip initial JavaScript, product pages 6.04 KiB, and the scene remains separately deferred at 135.20 KiB. The bundler still reports its existing large deferred-chunk warning.

At 1440×900, corpus, Ledger and Alignment reached the expanded hold while staying centered in the available page area. At 390×844, the corpus scene stayed centered at (195,422), with no document overflow. Ledger returned to depth0 and argument phase0 at the end. Corpus held at19 actual draws across the idle observation; Ledger held at8 while subsequent requests skipped rendering. Gallery checks covered previous/next wrap, direct Korpus selection, End-key selection, all five canonical links, and preservation of02/05 through390→1440→390 resizing. Browser error logs were empty.

These are visual/interaction observations and CPU submission diagnostics, not GPU frame-rate or real-user performance claims. Before/after browser pixel ratios differed, so the samples are not a controlled speed comparison. The Ledger's first render still took about25ms in this local run; subsequent observed submissions were below1ms. Evidence: `output/browser-qa/refined-scroll-checks.json`, `refined-scroll-desktop.png`, `refined-scroll-mobile.png`, `refined-gallery-desktop.png` and `refined-gallery-mobile.png`.

## Previous tuning — 14 September 2026: slightly longer scroll pacing

The centered 3D track now uses `clamp(480px, 72svh, 680px)`, replacing `clamp(360px, 55svh, 520px)`: roughly 30% more native scroll distance. The existing progress controller automatically uses that distance for the object and its captions. No JavaScript, renderer, dependency or input-handling changes were needed.

At 1440×900, the track measured approximately 648px (previously 495px). The ready scene remained centered at y450 at scrollY543 (phase2) and743 (phase3), then released at scrollY971 with phase0 and centerY337. At a measured 390×844, the track was approximately608px with zero horizontal overflow. Production build and 1,157 static checks passed. Evidence: `output/browser-qa/longer-scroll-checks.json`. These are layout and transition checks, not frame-rate measurements.

## Previous pass — 14 September 2026: uniform headlines and centered scroll focus

This pass follows the user's request to remove two-color headlines and keep the 3D objects in the centered focus while scrolling. It refines the smoke-inspired Astro composition without changing the existing Next marketing website or React smoke application.

- Headline continuations inherit the heading's color across the hero, product overview, prose pages, shared section headings and DataPaths. The line breaks remain; muted or accented second halves are removed.
- The interactive hero now has a dedicated `hero-object-track` and a native sticky object frame. The square artwork's size and centered placement share one CSS variable, keeping its center at `50svh`. The headline remains in ordinary document flow. The caption stays inside the frame, so the three useful argument phases remain with the object.
- The bounded scroll distance comes from a CSS spacer of `clamp(360px, 55svh, 520px)`. Scroll progress is measured from the focus track and the sticky frame's actual dimensions, completing before the frame releases. Desktop supporting copy and CTA use their own native sticky positions; mobile places the CTA before the track and the longer supporting copy after it.
- Static Firmengedächtnis and Zugriff artwork receive no extra pinned scroll distance. Reduced-motion layouts remain in ordinary flow. The square poster/canvas viewport, endpoint-only handoff, lazy import, fixed camera and demand renderer are preserved. No new animation library, font or dependency is introduced.
- The tablet center column was widened to retain clearance between the expanded object and the supporting copy. Existing product demos, native links and signup behavior remain unchanged.

### Current verification observations

Browser observations below were supplied by the root agent's CUA review. Dimensions are measured CSS viewport sizes. The final static-output report was also read directly for this record.

| Area | Current observation |
| --- | --- |
| Desktop centered focus | At 1440×900, the homepage's ready canvas remained centered at approximately (720, 450) at scrollY 360 and 520, with argument phases 1 and 3 respectively. |
| Mobile centered focus | At 390×844, Corporate Alignment's ready canvas remained centered at (195, 422) at scrollY 360 and 480. Phase 2 was observed during this range, and phase 3 at scrollY 560. The caption bottom remained within the viewport at approximately 685px. |
| Narrow layouts and heading colors | At 320×780, the homepage, product overview and all five product pages had zero document-level horizontal overflow and zero detected split-color headlines. |
| Tablet fallback layout | At 1024×720, Wissensledger's poster fallback was centered at approximately (512, 360), with its caption bottom at approximately 682px. This observation establishes the fallback layout; it is not a ready-canvas result. |
| Tablet expanded scene | After the final center-column adjustment, Wissensledger at 1024×720 and scrollY 480 had a ready canvas, argument phase 3 and artwork center approximately (512, 360). The caption bottom was approximately 682px, the canvas-to-CTA gap was 19.05px and document overflow was zero. Visual inspection confirmed separated objects with clearance from the supporting copy. |
| Native release | At 1024×720 and scrollY 760, Wissensledger remained ready and returned to assembled phase 0. Its artwork center had moved to y≈218.80px from the pinned y=360px, confirming that the frame released into normal scrolling after the bounded sequence. |
| Types and build | Astro checked 58 files with zero errors, warnings or hints. The production build completed at 11:26:20 CEST on 14 September 2026. |
| Static output | `output/check-output.json`, generated at `2026-09-14T09:26:20.657Z`, records 1,157 passing assertions across 14 pages and 476 local references, with an empty error list. |
| JavaScript boundary | The final static report records 7,482 bytes (7.31 KiB gzip) of initial JavaScript on the homepage and 6.05 KiB per product page. Deferred Three.js and scene code remain 138,243 bytes (135.00 KiB gzip). The existing small scroll controller was updated; no new runtime or dependency was added. |
| Saved browser evidence | `output/browser-qa/centered-scroll-checks.json` records the current centered-scroll review, including the final ready tablet scene and release observation. |

No signup was submitted. These observations establish the inspected layout, caption states and build output; they do not measure frame rate, CPU/GPU speed, conversion or real-user loading performance. Earlier gallery, demo and provider checks remain historical and were not counted as rerun checks for this pass.

## Historical pass — 14 September 2026: fresh smoke-inspired site design

The following pass preceded the centered-object refinement above. Its muted headline continuations, whole-composition pin and normal-flow mobile artwork describe that earlier snapshot. References to “current” within this retained section refer to that historical pass.

This pass follows the user's request for a fresh site look closer to the existing smoke-test landing pages, combined with useful elements of the original marketing website and fewer eyebrows. The local smoke-page composition and the original marketing components were inspected directly. This is a revision of the Astro alternative; the Next marketing website and React smoke application remain separate.

- A shared `SpatialHero.astro` now places a short, centered sans-serif promise above the existing object. Large benefit arguments sit to its left and the primary signup action and confirmed waitlist proof sit to its right. On mobile, the signup actions precede the object in the visual flow, followed by the arguments. Poster and canvas retain the same square viewport and existing lazy-load handoff.
- Inter and muted second lines restore the smoke pages' typography. The italic serif treatment, repeated introductory section, numbered chapter labels, decorative hero indexes and oversized footer signature were removed. Section headings lead directly with their message. Product names, source references and meaningful workflow statuses remain.
- The borderless gallery keeps native sidescroll and neighboring previews. Dark sections connect the promise to the existing working demo; warm-paper sections explain product boundaries and data sovereignty. The footer reuses the original marketing site's restrained brand-color rule and clear product/company links.
- A short native sticky sequence is limited to displays large enough for the full composition. Its extra scroll space is a layout spacer, so the scene's measured range includes the available travel. The three changing arguments and outcome captions remain tied to the corresponding object phases. Mobile and reduced-motion layouts retain normal flow.
- Existing useful product workflows, native action buttons, source disclosures, waitlist form hooks and product links are preserved. No JavaScript module, dependency, font download or renderer was added for this design pass.

### Historical fresh-design verification observations

The following evidence comes from the root agent's current CUA review and build. Viewport dimensions are the measured CSS dimensions, not assumed browser-control dimensions.

| Area | Current observation |
| --- | --- |
| Narrow layout and reduced visual labels | At 320×780, the homepage, product overview, all five product routes and standalone waitlist had zero document-level horizontal overflow. Checks found zero decorative eyebrow selectors on these routes. |
| Desktop composition | At 1440×1000, the pinned story bottom was 921.77px for the homepage, Korpus and Wissensledger, and 903.89px for Corporate Alignment. These measured compositions fit within the viewport. |
| Expanded scene | Corporate Alignment at scrollY 142.86px reached aspect 2 with a ready canvas. Visual inspection showed the three expanded planes. |
| Gallery and work example | The gallery's next control changed 01 to 02 and selected Korpus. A native demo action progressed from “Auftrag lesen” to “Erfahrung ergänzen”. |
| Types and production build | Astro checked 58 files with zero errors, warnings or hints. The production build completed successfully at 02:53:05 CEST on 14 September 2026. |
| JavaScript boundary | Initial JavaScript remains 7.32 KiB gzip on the homepage and 6.07 KiB per product page; deferred Three.js and scene code remain 135.00 KiB gzip. This pass adds zero JavaScript bytes, dependencies or font downloads. The final static-output report is maintained separately in `output/check-output.json`. |

No signup was submitted. These checks establish the observed layout, selected interactions and build state; they do not measure frame rate, CPU/GPU speed, conversion or real-user loading performance. Earlier measurements and captures below belong to their dated iterations and were not silently counted as rerun checks.

## Historical pass — preceding whole-site editorial composition

The following whole-site redesign was superseded by the fresh smoke-inspired pass above. Its italic typography, chapter system, additional introduction and footer signature describe the prior design. References to “current” in this retained subsection refer to that historical snapshot.

The current pass addresses the complete marketing site and its five product landing pages, following the user's clarification that the request concerned the entire design rather than the product demos alone. It covers the shared visual system, hero composition, page rhythm, product gallery, demo surroundings, operations section, signup and supporting pages.

The current reference review inspected [Maze through Mobbin](https://mobbin.com/sites/sections/efd123f4-8694-4da2-ad1e-7382fef9d90d) and read the full, unlocked [MotionSites Systema](https://motionsites.ai/?prompt=systema) and [Adaptive Learning](https://motionsites.ai/?prompt=adaptive-learning) prompts through MCP. The adaptations below use the existing Consultry content and object family; the references do not authorize changes to the product's claims or functionality.

- A common ink, copper and warm-paper palette connects the homepage, all five landing pages and the supporting pages. Larger display typography pairs Inter with italic Georgia accents from the local system font stack; no additional font download is introduced.
- Chapter labels and numbered transitions establish a page-level hierarchy. The homepage adds a concise introductory statement before the gallery, while product landings move from the promise into the existing useful work example, the product's boundaries, operating options and signup.
- The hero places the existing object within a shared typographic composition, with a reserved result-and-arguments baseline. Poster and canvas retain their matching square viewport and camera; placement changes affect their common parent. Its final width is limited to `min(104%, stage height × 1.06)` and its shared vertical placement is `translateY(-53%)`, keeping the plates clear of the caption and baseline. A short scroll expansion still returns to rest, with native flow on mobile and reduced-motion handling preserved.
- The borderless gallery presents larger standalone objects, an active product and both neighboring previews. The working demo sits on a broad paper section, so it reads as the place where the preceding promise becomes an actual task rather than as another dark information panel.
- The operations section uses a connected three-route topology. Signup becomes a broad paper form with a clear introduction, proof and fields. Supporting pages share the revised typography, and the full marketing footer ends with a large wordmark; minimal landing footers remain compact.
- Supporting chapters use a CSS view-timeline translation where supported. It follows scrolling and can reverse when scrolling back; it is not a once-only entrance. Content remains at full opacity from the start, with no opacity gate, timed loop or JavaScript entrance controller. Reduced motion removes the translation.
- No JavaScript module or dependency was added for this pass. The existing deferred Three.js boundary, matched-poster handoff and demand-rendering limits are retained. This implementation boundary is not a claim of measured loading speed or frame rate.

Independent source review identified and corrected the wide-but-short sticky-stage minimum, variant-heading breakpoint specificity, a demo-shadow selector mismatch and a minimal-footer padding cascade. Browser review also corrected a narrow Korpus section-heading overflow.

### Historical whole-site verification observations

The following observations were supplied by the root agent's current browser review. Viewports refer to the measured CSS viewport, with browser-control dimensions adjusted for the browser's 1.4 pixel ratio.

| Area | Current observation |
| --- | --- |
| Narrow layout | At 320×780, all ten main routes had no document-level horizontal overflow after the Korpus heading correction. |
| Wide, short hero | At 1920×800, the pinned story bottom was 746.17px for Korpus, 773.36px for Corporate Alignment and 741px for Wissensledger. All fit within the viewport. Minimal-footer top padding was zero. |
| Homepage scroll composition | At 1440×900, the home story was 750.99px high and its pinned bottom was approximately 841px. The saved observation at scrollY 154.29px recorded phase 2 and one ready canvas. A final visual observation at 2016×1260 recorded phase 1 at scrollY 75.5px, a ready scene and clear separation from caption and baseline. |
| Mobile gallery | At 390×844, the next control changed the position from 01 to 02 and selected Korpus. After settling, the selected card had full opacity and horizontal bounds 54.55–335.35px, with neighboring previews on both sides. |
| Supporting conversion sections | Desktop operations topology and signup were visually inspected. At 390×844, the form occupied x=20–370px and y=95.93–819.69px without page overflow; the email field was 305.2px wide. Consent remained required and the unconfigured submit button stayed disabled. No signup was submitted. |
| Build and static output | The final production build completed at 02:18:04 CEST on 14 September 2026. Astro checked 57 files with zero errors, warnings or hints. The final static report, generated at 02:18:04 CEST, passed 1,157 checks across 14 pages and 476 local references. |
| Payload boundary | Initial JavaScript remains 6,213 bytes (6.07 KiB gzip) per product page and 7,495 bytes (7.32 KiB) on the homepage. Deferred Three.js and scene code remain 138,243 bytes (135.00 KiB). The whole-site pass adds zero JavaScript bytes versus the preceding workspace build. |
| Saved browser evidence | `output/browser-qa/holistic-design-checks.json`, timestamped 02:18:56 CEST, records the observations and an empty console-error list. Five captures are saved alongside it: `holistic-hero-desktop.png`, `holistic-hero-expanded.png`, `holistic-data-paths.png`, `holistic-signup-desktop.png` and `holistic-signup-mobile.png`. |

The current visual and functional review is complete for the observations above. Earlier successful checks below remain historical evidence: former demo progression, source takeover, downloads, server routes and CPU measurements were not represented as newly repeated checks. No frame-rate, CPU, conversion or real-user loading claim is inferred from the current layout observations.

## Historical design direction — preceding iterations

The remainder of this document records earlier iterations. References to “current,” “latest” or “this pass” within that historical record describe those earlier snapshots, not the centered-scroll pass at the top of this document. Their dates, measurements and screenshots are retained for traceability.

The marketing site now introduces one shared working core, then lets visitors choose among five product perspectives. Each perspective has its own canonical landing page, a concrete product example and an immediate signup route. The main-site navigation and product overview provide context; the landing navigation keeps the overview and signup close at hand.

The hero composition draws on the large promise, quiet navigation and spatial hero of [MotionSites Systema](https://motionsites.ai/?prompt=systema), and the connected visual field of [Adaptive Learning](https://motionsites.ai/?prompt=adaptive-learning). Both full references were read through MotionSites MCP for the earlier hero refinement. The adaptation uses existing Consultry colors, copy and objects.

The earlier hero review inspected Mobbin images of [Linear's spatial hero](https://mobbin.com/sites/sections/f8b93019-f62b-4e58-8f0d-e577baa204f3), [Cake Equity](https://mobbin.com/sites/sections/5c8d3951-0864-4fdd-976c-090d9adc5fee) and [Intercom](https://mobbin.com/sites/sections/6b27bdd8-4272-46b8-a61c-1cf2d63180f4). They informed the larger shared visual field, restrained supporting copy and clearer path from promise to product example. An earlier review of [Linear's interface section](https://mobbin.com/sites/sections/91b1d7ce-42f5-45bb-a46d-d639dc04f9f4) informed the demo hierarchy, single progress system and manual takeover.

The latest workspace refinement inspected three concrete Mobbin screens: [Confluence](https://mobbin.com/screens/048344a5-3f3c-4740-b41f-c8ca1e34b23f) places Replace/Discard controls beside the document, [Grammarly](https://mobbin.com/screens/352b524f-4bb8-44a4-84a7-b58f5556cf1b) uses a right-hand review area, and [WRITER](https://mobbin.com/screens/65eaa501-c59e-47e8-8feb-82715829ec9e) connects contextual rewriting with suggestions beside the working text. Their common useful pattern is a primary working document with its next action and supporting evidence close by.

The full, unlocked [MotionSites Minimal Workflow SaaS prompt](https://motionsites.ai/?prompt=minimal-workflow-saas) was read through MCP for this pass. Its active queue hierarchy and restrained transition informed the new step rail and short revision emphasis. Reference instructions for React, video, blur or endless loops were not adopted; the site retains native HTML, CSS and its existing small TypeScript controller.

The existing Higgsfield asset history was inspected through its MCP. The existing terracotta, amber and violet asset family, matched scene posters and procedural geometry are reused. No new media generation or remote background video is required.

## Historical visual and interaction decisions

- Home and product overview share a borderless native horizontal rail. The active card is centered with neighboring previews on both sides, scroll snapping, wrapping previous/next controls and Arrow/Home/End focus navigation. Two decorative, inert copies at each end preserve the previews through wrapping; only five canonical links are accessible. Vertical scrolling remains native. Gallery code adds 1.25 KiB gzip to these two pages and uses cached geometry, with emphasis updates only when the active card changes.

- One shared asymmetric hero composition gives the existing objects more space while keeping the headline and CTA prominent. `src/styles/hero-layout.css` consolidates 103 old hero CSS rules instead of adding another override layer. Its scene-width selector explicitly overrides the component's scoped default and caps the artwork to the available stage, keeping it clear of the navigation and caption baseline.
- A short native sticky stage on larger displays keeps the headline, independently moving objects and three arguments visible together. Its scroll range now comes from the actual section and sticky-story dimensions, completing before the story releases. It does not use transformed artwork coordinates. Mobile retains its existing normal-flow calculation.
- Corpus layers, alignment perspectives and ledger nodes separate during scroll. A borderless `HeroOutcome` caption adds a concrete illustrative result to each phase, alongside the numbered arguments. Titles use at most five words and source/context lines at most 53 characters. The camera is fixed.
- All caption states are present in HTML. The existing `data-scene-aspect` attribute selects the visible state through CSS; there is no caption script, hydration, new animation loop or new dependency. The caption shares a reserved baseline below the main scene rather than covering the object.
- Mobile uses normal document flow. Important text and signup remain ahead of the artwork. Reduced motion keeps a static composition.
- Poster and WebGL canvas share one square viewport. The canvas is exposed only after the matching endpoint has actually rendered. A slow load midway through the sequence keeps the poster until a matching endpoint is available.
- WebGL startup requires a visible matching endpoint and 180ms without scrolling. It uses a native idle callback where supported, without a forced deadline. Moving scenes use a maximum 540px drawing buffer, returning to the original 720px cap at rest. Korpus shares one shader variant across its four layers. Projected markers use transforms; unused scroll variables and repeated whole-hero style writes were removed.
- Each HTML demonstration now follows four concrete work steps: inspect the input, apply the relevant evidence, revise the working document and take away an output. Native action buttons advance the document; source disclosures expose the underlying excerpts. The final artifact downloads locally as an explicitly illustrative plain-text file. These are prepared local examples, with no server AI, remote document processing or new dependencies.
- The latest demo layout uses a compact application header and task, a vertical four-step rail, a central working paper and a right-hand review area containing the next action and source disclosures. Current and completed states reuse the controller's existing attributes. On mobile, the compact step grid is followed by the paper and then its review area in both DOM and visual order. Applying a revision adds one bounded 0.6-second background emphasis; reduced motion removes it. Existing workflow data and final download contents are unchanged.
- Playback follows the actual visible artifact of each step. The observer switches to the new artifact on transition; explicit actions focus its title and bring the new document into view. On mobile, the artifact precedes the source disclosures. Visitors can pause, replay or select a step; manual interaction takes over immediately, and offscreen playback pauses.
- The vertical rail supports Up/Down as well as the existing Left/Right, Home and End keys. Observer callbacks ignore queued entries for previously observed artifacts, so those entries cannot replace the current artifact's visibility state.
- The Ledger workflow produces a Cutover handoff from a versioned basis, source contributions and counterevidence. Human approval remains distinct from working consensus, with unresolved decisions visible in the resulting document.
- The deployment options use a large heading on the left and three aligned explanatory rows on the right. This replaces the earlier spread of small equal-width text columns.
- The homepage's “Produkt entdecken” CTA now targets its own `#produkt` section. The landing-page demo removes the duplicate three-step explanation below the interactive example and ends with a direct `#waitlist-form` CTA. Signup CTAs retain the verified wording of 100 waitlist entries.

## Historical verification

The five current workflows each contain four steps and their own source excerpts and downloadable result:

| Product | Input and task | Result |
| --- | --- | --- |
| Korpus | Customer contract and a prior offer; prepare the next Hansa Wave 2 meeting. | Conversation briefing with scope, an experience-based proposal and open questions. |
| Firmengedächtnis | Existing offer section, current methods and reference permissions; update the Cutover approach. | Revised offer section with its method source and visible approval gap. |
| Corporate Alignment | Steering draft, newer project evidence, brand rule and reference permission; revise the recommendation. | Decision text with open questions and a separate approval state. |
| Wissensledger | Working basis 07, contributions and counterevidence; prepare a shared Cutover plan. | Handoff on basis 08 with proposed tasks, retained counterevidence and open approval. |
| Zugriff & Kontrolle | The Consultant's permitted sources and generalized cost information; prepare a handoff to the partner. | Staffing and cost-frame draft without exposing restricted exact rates. |

| Area | Evidence |
| --- | --- |
| Current build and types | Reference-inspired workspace production build passed; Astro check: 56 files, zero errors, warnings or hints. |
| Current static output | 1,151 assertions across 14 HTML pages; 476 local links/assets inspected. In addition to existing route, metadata and asset checks, the checker validates dynamic workflow targets, initial selection, inactive-panel accessibility, source excerpts, substantive output blocks and example-marked plain-text downloads. Report generated at 01:57:33 CEST on 14 September 2026. |
| Current desktop workspace | At 1280×800, Korpus had zero page overflow. Its paper was 689px wide and 337.69px high at top 281px, with the paper and adjacent action visible early in the demo. The demo measured 808.4px high. These layout observations are not a comparative performance result. |
| Current keyboard and takeover behavior | ArrowDown selected step 1 and ArrowUp returned to step 0. Opening a source stopped playback and kept the same step beyond its 9.5-second duration. The next action changed the working artifact and focused its `h4`; every inactive panel remained inert and aria-hidden. Corporate Alignment completed all three native actions to the final downloadable decision text, with heading focus moving correctly at each step. |
| Current mobile workspace | At 390×844, visual inspection confirmed paper before review; `references-workspace-mobile.png` was saved. At 320×780, all five product routes had zero page overflow, paper before review, End selecting final index 3 and all inactive panels inert and aria-hidden. Responsive and interaction checks are complete. |
| Current browser evidence | Desktop and mobile captures and `references-workspace-checks.json` are saved in `output/browser-qa/`. Final console error list was empty. The observation record is timestamped 02:00:33 CEST on 14 September 2026; these are functional and visual checks, not frame-rate or CPU benchmarks. |
| Earlier desktop workflows | Before the reference-inspired workspace layout, all five workflows were completed through their three advance buttons. Each ended in manual mode with exactly one active final panel and no horizontal overflow. Korpus's former frame stayed at 966.2109px across its four steps. The viewport differs from the current observation, so these heights are not used for a percentage comparison. |
| Earlier source and download behavior | Source A1 was expanded. The native download produced `beispiel-hansa-gespraechsbriefing.txt` in Downloads, measured at 1,047 bytes, without navigating away from the page. Download data is unchanged; this was not repeated for the current layout at the time of this note. |
| Earlier mobile workflows | Before the latest workspace layout, at 390×844, Ledger stayed idle at the demo anchor while its artifact was below focus (top 633px). After native scrolling brought it to 328px, playback started. Manual actions reached “Team übergeben” in manual mode with the next artifact visible at top 213px. At 320×780, End from the first step selected the final index 3 on all five routes: one active panel, every inactive panel inert and aria-hidden, and zero horizontal overflow. |
| Earlier hero-layout QA | Before the workflow rewrite, Home at 1280×720 showed phases 1–3 at scrollY 79, 158.5 and 237.5, returning to phase 0 at 331. Story top stayed at 96px and the caption at 140px with one visible result. Ledger at 1280×900 showed phases 1–3 at 72, 144 and 216 with a ready canvas and story top of 96px. Hero behavior was unchanged in the workflow pass. |
| Earlier mobile and conversion QA | Before the workflow rewrite, all five product routes at 320×780 had zero horizontal overflow; at 390px, the former Alignment demo's autoplay, Governance selection and form-anchor navigation were observed. These are historical observations, not acceptance evidence for the new mobile workflows. |
| HTTP routes | Prior 23 read-only GET checks of the unchanged server routes: pages 200; all five campaign aliases 308 with UTM queries preserved; unknown routes return branded HTML 404; preview robots disallow indexing. |
| Prior signup API verification | 12 mocked provider tests passed in the earlier provider review. Local GET reported `available: false`. These server paths were unchanged in this design pass; no real signup or provider POST was submitted. |
| Prior broader visual review | Home, Ledger, Alignment, product UI, deployment section, product overview, menu and signup were inspected at desktop and mobile sizes before this refinement. Those earlier observations are separate from the current hero measurements above. |
| Historical Ledger demo | The superseded six-state informational demo was previously checked with one active panel and a 1400.367px frame at 390px. Its count, height and interaction observations do not describe the current four-step workflow. |
| Prior runtime diagnostics | Deferred import, quiet/idle startup, demand rendering, offscreen suspension and preference handling inspected in source. Korpus retained frame count 1 at rest, used a 540px buffer while moving and returned to a 571px buffer at its endpoint on the earlier inspected DPR 1 viewport. Alignment retained frame count 2 while offscreen. These runtime measurements were not repeated for the current enlarged composition. |
| Prior gallery verification | Centered, borderless two-sided previews inspected at 1280px and 390px without document overflow. First/last wrapping works in both directions; only five canonical product anchors are accessible. A native mobile horizontal gesture changed rail scrollLeft from 496px to 992px while document scrollY remained 1103px. Gallery implementation was unchanged in this pass. |

Screenshots and observed DOM measurements are in `output/browser-qa/`. The test inventories are in `output/check-output.json` and `output/http-routes.json`.

Earlier hero/layout captures: `home-design-refined.png`, `home-expanded-refined.png`, `ledger-design-refined.png`, `hero-mobile-refined.png` and `landing-demo-refined.png` in `output/browser-qa/`. The preceding workflow captures are `demo-workflow-desktop.png` and `demo-workflow-mobile.png`; those browser observations are recorded in `workflow-checks.json`. Current workspace evidence is saved as `references-workspace-desktop.png`, `references-workspace-mobile.png` and `references-workspace-checks.json` in the same directory.

## Historical performance boundary

The current built initial JavaScript is **6,213 bytes (6.07 KiB gzip)** per product page and **7,495 bytes (7.32 KiB)** on the home page. The reference-inspired workspace adds **31 gzip bytes** over the preceding concrete-workflow build for vertical keyboard navigation and defensive observer handling. Its layout and revision emphasis use CSS; no new dependency or server AI was added. The earlier concrete-workflow controller added 112 gzip bytes over the hero-layout build, and the sticky-range geometry fix added 151 gzip bytes; the hero caption component adds no JavaScript. The existing React smoke build baseline is **104.43 KiB** per product page. Deferred Three.js and scene code remain **135.00 KiB gzip**, compared with **134.00 KiB** in that baseline. Current totals are in `output/check-output.json`; `output/performance-comparison.json` combines them with the timestamped historical React baseline. Measurements use Node 24.19.0 and the same zlib compression settings.

Earlier local opt-in diagnostics observed synchronous setup of **46.1ms for Korpus** and **32.1ms for Alignment**. The frame counters confirmed that idle/offscreen scenes did not continue submitting frames in those inspected states. These CPU observations predate the current visual refinement and were not remeasured for it. The renderer's maximum moving buffer contains 43.75% fewer pixels than its maximum resting buffer (540² versus 720²); the reduction is smaller on viewports already below the resting cap. Detailed observations are recorded in `output/browser-qa/scene-performance.json`. There is no before-change runtime timing baseline, and CPU submission time does not measure GPU completion or sustained frame rate.

These figures cover JavaScript files. They exclude CSS, HTML, fonts, images, connection conditions and cache effects. Real-user loading speed, Core Web Vitals and search ranking have not been measured. The Vite size notice concerns the separately deferred Three.js bundle.

## Historical deployment state

The local alternative is complete and previewable. The Loops provider variables still need to be configured in this separate project's deployment environment before collecting signups. The form reports that state explicitly and stays disabled. Indexing remains disabled by default. Existing legal copy was carried over with its original dates and production-stack descriptions; it has not been recertified for a new deployment. Nothing has been published.

### Historical sidescroll verification

Desktop and 390px mobile: the active card is centered with visible left and right previews, without card borders or panel backgrounds. At widths up to 480px, 60vw cards and enlarged source images make both neighboring objects visible; `output/browser-qa/gallery-mobile.png` records the final composition. Previous from the first product reaches the fifth; next from the fifth returns to the first. End focuses Zugriff and Home focuses Firmengedächtnis. Decorative copies are inert and hidden from accessibility, leaving five canonical links. A native horizontal gesture moved the rail from 496px to 992px while the document stayed at scrollY 1103px. Document width remained 390px. Build, type check and 876 static output checks passed.


## Prompt Workspace, persistent Canvas and homepage logo — 14 September 2026

Implemented in Astro only. Figma was read as a visual reference; no Figma file was edited. References: Consultry-App `252:533` (Prompt Workspace), `252:532` (Artifact Review), `237:57` (Scoped Assistant), and `217:172` (composer).

The audit found duplicated chat/summary/document explanations and result panels that appeared to be unrelated slides. The revised composition separates a bounded prepared task and current agent contribution from one persistent result frame. There is one active contribution, optional prior contributions, inspectable sources, an Ausgangsstand/Arbeitsstand comparison, and an actual local text download. Brand now renders a Steering slide with decision text and questions; its source describes an illustrative Consultry layout, not a claimed customer CD. Korpus preserves the same three slots in every phase. Ledger retains counterevidence and distinguishes working agreement from approval; staffing labels 8 PT as a proposed estimate.

The homepage uses a new `logo` scene variant. Its folded ribbon, circular node and triangular node follow the current PNG logo, not the older SVG. The production renderer produces both WebP placeholders. It uses opaque geometry and no extra runtime, model loader or postprocessing. Product-specific scene motifs remain intact.

Verification on the built Astro preview:

- `astro check`: 71 files, no errors, warnings or hints.
- Build passed; static output validation: 1,392 checks, 14 pages, 499 local references.
- Initial JavaScript: 9.18 KiB gzip home, 6.70 KiB each product page. Three.js plus scene code: 147.91 KiB gzip, separately deferred.
- All four states of all five demos manually exercised at 1280 × 900. Agent/result alignment and versions correct; each canvas kept the same measured height across state changes. No document horizontal overflow.
- All five demos at 320 × 780: task collapses after explicit start, all four states reachable, navigation scrolls within its own row, no document horizontal overflow. Additional 390px access review.
- Korpus comparison preserved the selected work state, play/pause switched correctly, and End selected the final result. Timed playback visibly kept result 2 while agent 3 was working.
- Homepage at 1280 × 720: promise, centered logo, app preview and CTA visible together. Opened nodes remained connected to cumulative HTML arguments. The preview link reached the homepage work example.
- Local homepage sample: 4,676 triangles / 12 draws at rest; 4,740 / 14 while open. Frame count stayed at 12 across an idle interval. These are renderer submission observations, not measured sustained FPS, GPU completion or Core Web Vitals.
- Studio first/end PNG exports byte-identical. Poster pair 18.9 / 17.3 KiB. See `output/browser-qa/logo/verification.json` and `output/browser-qa/workspace-canvas/`.

The examples remain clearly fictional and predetermined. No agent backend, external document write, real permission change or new dependency was added. Deployment was not performed.

## Follow-up fixes after the compact workspace update — 14 September 2026

- Restored the desktop “Beispiel erleben” shortcut after removal of the hero preview. Home and Ledger show the 44px link within the initial 1209 × 661 viewport; the homepage link reaches `#arbeitsbeispiel`. All five product links resolve to their own demo anchors.
- Demo steps now size to their labels. At 390 × 844, all five variants keep the final focused step inside the horizontal strip after `End`, with no document overflow or vertical page movement. Ledger `Home` and arrow navigation also preserve page position. At 320 × 780, resizing keeps the selected Zugriff step visible; timed playback advances and reveals later steps inside the strip.
- Secondary text uses `#74695f` on paper and `#9f9488` on the dark canvas. Calculated contrast is at least 4.67:1 against their tested paper/grid backgrounds. The action button uses `#b44c36` with white text (5.21:1). Browser computed styles match these tokens.
- Astro check: 69 files, zero errors, warnings or hints. Build passed. Static output check: 1,368 assertions across 14 pages and 487 local references. Initial JavaScript is 9.33 KiB gzip on home and 6.85 KiB per product page; the separate deferred Three.js chunk remains 147.91 KiB. No browser console errors were captured during this verification.

This pass preserves the updated compact prompt workspace and dotted canvas design. These are targeted layout, interaction and contrast checks, not a full accessibility or performance audit.
