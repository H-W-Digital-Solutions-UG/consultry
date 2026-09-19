/** Deferred volumetric renderer. No timer-driven animation or pointer controls. */
import {
  ACESFilmicToneMapping, OrthographicCamera, PMREMGenerator, Scene, SRGBColorSpace,
  Vector3, WebGLRenderer, type WebGLRenderTarget,
} from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { buildSmokeModel } from "./models";
import { sceneExpansion } from "./motion";
import type { SmokeScene, SmokeSceneOptions } from "./types";

const FRAME_INTERVAL = 1000 / 60;
// Rest-state motion (turning rings, travelling light) needs no more than this.
const IDLE_INTERVAL = 1000 / 30;
const REST_BUFFER_LIMIT = 720;
const MOTION_BUFFER_LIMIT = 540;
const clampProgress = (value: number) => Number.isFinite(value) ? Math.max(0, Math.min(1, value)) : 0;

/** A short, scroll-scrubbed assembly of separate 3D solids, followed by rest. */
export function createSmokeScene(host: HTMLElement, options: SmokeSceneOptions): SmokeScene {
  // Opt-in local diagnostics report CPU submission time, never inferred GPU FPS.
  const diagnosticsEnabled = new URLSearchParams(window.location.search).get("scene-perf") === "1";
  const initStartedAt = diagnosticsEnabled ? performance.now() : 0;
  const diagnostics = diagnosticsEnabled ? {
    initMs: 0, shaderCompileMs: 0, firstRenderMs: 0,
    frames: 0, totalRenderMs: 0, meanRenderMs: 0, maxRenderMs: 0, lastRenderMs: 0,
    drawCalls: 0, triangles: 0, buffer: [0, 0], skippedDraws: 0,
  } : null;
  const renderer = new WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power", depth: true, stencil: false });
  const canvas = renderer.domElement;
  const scene = new Scene();
  const camera = new OrthographicCamera(-3, 3, 3, -3, .1, 50);
  const visual = host.parentElement;
  const focus = host.closest<HTMLElement>("[data-scene-focus]");
  const signals = focus?.querySelector<HTMLElement>("[data-hero-signals]");
  const signalSvg = signals?.querySelector<SVGSVGElement>("[data-signal-lines]");
  const initialSignalViewBox = signalSvg?.getAttribute("viewBox") ?? null;
  const signalMedia = window.matchMedia("(min-width: 1100px) and (min-height: 650px) and (prefers-reduced-motion: no-preference)");
  const signalConnections = Array.from({ length: 3 }, (_, index) => {
    const part = index + 1;
    const note = signals?.querySelector<HTMLElement>(`[data-signal-note="${part}"]`);
    const path = signalSvg?.querySelector<SVGPathElement>(`[data-signal-connection="${part}"]`);
    return note && path ? { note, path, x: 0, y: 0, direction: 1, value: "" } : null;
  });
  const projectedAnchor = new Vector3();
  const anchorPositions: string[] = [];
  let model: ReturnType<typeof buildSmokeModel> | undefined;
  let environment: WebGLRenderTarget | undefined;
  let observer: ResizeObserver | undefined;
  let disposed = false;
  let visible = options.visible;
  let reducedMotion = options.reducedMotion;
  let ready = false;
  let compiled = false;
  let frameId = 0;
  let lastFrameTime = -Infinity;
  let lastMotionTime = -Infinity;
  let readyAt = -1;
  let scrollProgress = 0;
  let displayedProgress = 0;
  let scrollCarry = 0;
  let displayedCarry = 0;
  const carryStrength = options.carryStrength ?? 1;
  let forceDraw = true;
  let lastDepth = "";
  let width = 0;
  let height = 0;
  let bufferWidth = 0;
  let bufferHeight = 0;
  let signalLayout = "";
  let signalsEnabled = false;
  let signalOriginX = 0;
  let signalOriginY = 0;

  // These sibling HTML notes share the sticky focus origin. Measure only on
  // resize; their opacity/translation reveals must not move connector starts.
  const measureSignals = () => {
    const enabled = !!(visual && signals && signalSvg && signalMedia.matches && !reducedMotion);
    signalsEnabled = enabled;
    if (!enabled || !visual || !signals || !signalSvg) {
      const changed = signalLayout !== "";
      signalLayout = "";
      signalConnections.forEach((connection) => {
        if (!connection) return;
        connection.path.removeAttribute("d");
        connection.value = "";
      });
      return changed;
    }
    const svgWidth = signals.clientWidth;
    const svgHeight = signals.clientHeight;
    if (!svgWidth || !svgHeight) {
      signalsEnabled = false;
      return false;
    }
    const visualRect = visual.getBoundingClientRect();
    const svgRect = signalSvg.getBoundingClientRect();
    signalOriginX = visualRect.left - svgRect.left;
    signalOriginY = visualRect.top - svgRect.top;
    const values = [svgWidth, svgHeight, signalOriginX, signalOriginY];
    signalConnections.forEach((connection) => {
      if (!connection) return;
      const left = connection.note.dataset.signalSide !== "right";
      connection.direction = left ? 1 : -1;
      // Offsets ignore the reveal translation; sum them up to the signals layer,
      // since the notes sit in their own positioned stack on either side.
      let x = 0;
      let y = 0;
      for (let node = connection.note as HTMLElement | null; node && node !== signals; node = node.offsetParent as HTMLElement | null) {
        x += node.offsetLeft;
        y += node.offsetTop;
      }
      connection.x = x + (left ? connection.note.offsetWidth : 0);
      connection.y = y + 18;
      values.push(connection.x, connection.y, connection.direction);
    });
    const nextLayout = values.join(",");
    if (nextLayout === signalLayout) return false;
    signalLayout = nextLayout;
    signalSvg.setAttribute("viewBox", `0 0 ${svgWidth} ${svgHeight}`);
    return true;
  };

  const cancelFrame = () => {
    cancelAnimationFrame(frameId);
    frameId = 0;
  };
  const dispose = () => {
    if (disposed) return;
    disposed = true;
    cancelFrame();
    observer?.disconnect();
    window.removeEventListener("resize", resize);
    signalMedia.removeEventListener("change", resize);
    canvas.removeEventListener("webglcontextlost", onContextLost);
    model?.dispose();
    environment?.dispose();
    for (let index = 1; index <= 3; index++) {
      visual?.style.removeProperty(`--part-${index}-x`);
      visual?.style.removeProperty(`--part-${index}-y`);
    }
    visual?.style.removeProperty("--scene-depth");
    signalConnections.forEach((connection) => connection?.path.removeAttribute("d"));
    if (signalSvg) {
      if (initialSignalViewBox === null) signalSvg.removeAttribute("viewBox");
      else signalSvg.setAttribute("viewBox", initialSignalViewBox);
    }
    renderer.dispose();
    renderer.forceContextLoss();
    canvas.remove();
  };
  const fail = () => {
    if (disposed) return;
    dispose();
    options.onContextLost();
  };
  function onContextLost(event: Event) {
    event.preventDefault();
    fail();
  }
  const render = (now: number) => {
    frameId = 0;
    if (disposed || !visible || !compiled || !model || !width || !height) return;
    const elapsed = now - lastFrameTime;
    const idleOnly = !forceDraw && displayedProgress === (reducedMotion ? 1 : scrollProgress) && displayedCarry === (reducedMotion ? 0 : scrollCarry);
    if (elapsed < (idleOnly ? IDLE_INTERVAL : FRAME_INTERVAL) - .75) {
      // Stay on the display clock. A timeout followed by another RAF can miss
      // the next refresh and turn a nominal 30 Hz cap into a visible stutter.
      requestFrame();
      return;
    }
    const target = reducedMotion ? 1 : scrollProgress;
    const motionElapsed = now - lastMotionTime;
    const dt = Math.min(Number.isFinite(motionElapsed) ? motionElapsed : FRAME_INTERVAL, 34);
    const next = displayedProgress + (target - displayedProgress) * (1 - Math.exp(-dt / 32));
    // Brief input damping stops within a fraction of a second. Endpoints are
    // exact so the original poster handoff and the native sticky release agree.
    const frameProgress = !ready || target === 0 || target === 1 || Math.abs(target - next) < .001
      ? target : next;
    displayedProgress = frameProgress;
    // The carry phase starts only after the pinned sequence has returned to the
    // poster pose, so both endpoints of the scrub stay numerically identical.
    const carryTarget = reducedMotion ? 0 : scrollCarry;
    const nextCarry = displayedCarry + (carryTarget - displayedCarry) * (1 - Math.exp(-dt / 48));
    const frameCarry = !ready || carryTarget === 0 || carryTarget === 1 || Math.abs(carryTarget - nextCarry) < .001
      ? carryTarget : nextCarry;
    displayedCarry = frameCarry;
    try {
      // Expanded objects are moving, so a 540 px buffer is sufficient. Restore
      // the original 720 px quality at both matching poster endpoints. At the
      // cap, this submits 43.75% fewer pixels during the short scroll sequence.
      const moving = (frameProgress > 0 && frameProgress < 1) || (frameCarry > 0 && frameCarry < 1);
      const motionScale = moving ? Math.min(1, MOTION_BUFFER_LIMIT / Math.max(bufferWidth, bufferHeight)) : 1;
      const drawWidth = Math.max(1, Math.round(bufferWidth * motionScale));
      const drawHeight = Math.max(1, Math.round(bufferHeight * motionScale));
      // setSize clears the canvas, even when given the same dimensions. Apply
      // actual changes inside the draw task, never between two painted frames.
      const bufferChanged = canvas.width !== drawWidth || canvas.height !== drawHeight;
      if (bufferChanged) {
        renderer.setSize(drawWidth, drawHeight, false);
      }
      // Both matching endpoint frames use numerically identical transforms.
      // This also avoids the tiny floating-point remainder of sin(PI) at 1.
      const pose = frameProgress === 1 ? 0 : frameProgress;
      const poseChanged = model.update(pose);
      // A hint of a turn toward the viewer while the parts are open (the
      // reassembly carries the sequence, not rotation), then the carry: the
      // whole object turns a little and leans back as the page takes it along.
      const sway = Math.sin(pose * Math.PI);
      const orientChanged = model.orient(sway * .1 + frameCarry * .7 * carryStrength, sway * .03 - frameCarry * .16 * carryStrength);
      // Rest motion runs on the clock since the first frame, so that frame equals the poster.
      if (ready && readyAt < 0) readyAt = now;
      const idleChanged = !reducedMotion && model.idle ? model.idle(readyAt < 0 ? 0 : (now - readyAt) / 1000) : false;
      const needsDraw = forceDraw || !ready || bufferChanged || poseChanged || orientChanged || idleChanged;
      // render() already updates the scene and camera world matrices. Project
      // annotations afterwards so the same hierarchy is not traversed twice.
      const renderStartedAt = diagnostics ? performance.now() : 0;
      if (needsDraw) renderer.render(scene, camera);
      if (diagnostics && needsDraw) {
        const duration = performance.now() - renderStartedAt;
        if (!diagnostics.frames) diagnostics.firstRenderMs = duration;
        diagnostics.frames++;
        diagnostics.totalRenderMs += duration;
        diagnostics.meanRenderMs = diagnostics.totalRenderMs / diagnostics.frames;
        diagnostics.maxRenderMs = Math.max(diagnostics.maxRenderMs, duration);
        diagnostics.lastRenderMs = duration;
        diagnostics.drawCalls = renderer.info.render.calls;
        diagnostics.triangles = renderer.info.render.triangles;
        diagnostics.buffer = [canvas.width, canvas.height];
        canvas.dataset.scenePerf = JSON.stringify(diagnostics);
      } else if (diagnostics) {
        diagnostics.skippedDraws++;
        canvas.dataset.scenePerf = JSON.stringify(diagnostics);
      }
      // HTML annotations track actual transformed component centres, without
      // their own animation loop or per-frame React state updates.
      if (needsDraw && visual) model.anchors.forEach((anchor, index) => {
        projectedAnchor.setFromMatrixPosition(anchor.matrixWorld).project(camera);
        // CSS translates markers in the cached layout viewport; it does not
        // update their left/top or depend on the adaptive drawing-buffer size.
        const anchorX = (projectedAnchor.x + 1) * width / 2;
        const anchorY = (1 - projectedAnchor.y) * height / 2;
        const x = `${anchorX.toFixed(2)}px`;
        const y = `${anchorY.toFixed(2)}px`;
        if (anchorPositions[index * 2] !== x) {
          visual.style.setProperty(`--part-${index + 1}-x`, x);
          anchorPositions[index * 2] = x;
        }
        if (anchorPositions[index * 2 + 1] !== y) {
          visual.style.setProperty(`--part-${index + 1}-y`, y);
          anchorPositions[index * 2 + 1] = y;
        }
        const connection = signalsEnabled ? signalConnections[index] : null;
        if (connection) {
          const startX = connection.x.toFixed(2);
          const startY = connection.y.toFixed(2);
          const elbowX = (connection.x + connection.direction * 24).toFixed(2);
          const endX = (signalOriginX + anchorX).toFixed(2);
          const endY = (signalOriginY + anchorY).toFixed(2);
          const value = `M ${startX} ${startY} H ${elbowX} L ${endX} ${endY}`;
          if (value !== connection.value) {
            connection.path.setAttribute("d", value);
            connection.value = value;
          }
        }
      });
      const depth = sceneExpansion(frameProgress).toFixed(3);
      if (visual && depth !== lastDepth) {
        visual.style.setProperty("--scene-depth", depth);
        lastDepth = depth;
      }
      forceDraw = false;
    } catch {
      fail();
      return;
    }
    // A frame admitted just before the boundary must still advance the clock.
    lastFrameTime = elapsed >= FRAME_INTERVAL && elapsed < FRAME_INTERVAL * 2
      ? now - (elapsed % FRAME_INTERVAL) : now;
    lastMotionTime = now;
    if (!ready) { ready = true; options.onReady(); }
    options.onFrame?.(frameProgress);
    if (displayedProgress !== target || displayedCarry !== carryTarget || (model.idle && !reducedMotion)) requestFrame();
  };
  const requestFrame = () => {
    if (disposed || !visible || !compiled || !model || !width || !height || frameId) return;
    frameId = requestAnimationFrame(render);
  };
  const resize = () => {
    if (disposed || !model) return;
    const signalsChanged = measureSignals();
    // Layout size is stable while an ancestor translates/scales with scrolling.
    const nextWidth = host.clientWidth;
    const nextHeight = host.clientHeight;
    const resolution = Math.min(window.devicePixelRatio || 1, 1.5, REST_BUFFER_LIMIT / Math.max(nextWidth, nextHeight));
    const nextBufferWidth = Math.max(1, Math.round(nextWidth * resolution));
    const nextBufferHeight = Math.max(1, Math.round(nextHeight * resolution));
    if (nextWidth === width && nextHeight === height && nextBufferWidth === bufferWidth && nextBufferHeight === bufferHeight && !signalsChanged) return;
    width = nextWidth;
    height = nextHeight;
    bufferWidth = nextBufferWidth;
    bufferHeight = nextBufferHeight;
    if (!width || !height) return;
    const aspect = width / height;
    const span = model.span / Math.min(aspect, 1);
    camera.left = -span * aspect / 2;
    camera.right = span * aspect / 2;
    camera.top = span / 2;
    camera.bottom = -span / 2;
    camera.updateProjectionMatrix();
    forceDraw = true;
    cancelFrame();
    lastFrameTime = -Infinity;
    lastMotionTime = -Infinity;
    requestFrame();
  };
  try {
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(1);
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.toneMapping = ACESFilmicToneMapping;
    renderer.toneMappingExposure = .92;
    // Three's glass pass is half resolution; no external HDR, composer or shadows.
    renderer.transmissionResolutionScale = .5;
    canvas.setAttribute("aria-hidden", "true");
    canvas.dataset.smokeCanvas = options.variant;
    canvas.dataset.smokeGeometry = "volumetric";
    canvas.style.pointerEvents = "none";
    canvas.addEventListener("webglcontextlost", onContextLost);
    camera.position.z = 12;
    const studio = new RoomEnvironment();
    const generator = new PMREMGenerator(renderer);
    try {
      environment = generator.fromScene(studio, .04, .1, 50, { size: 128 });
      scene.environment = environment.texture;
      scene.environmentIntensity = .35;
    } finally {
      studio.dispose();
      generator.dispose();
    }
    model = buildSmokeModel(scene, options.variant);
    host.append(canvas);
    observer = new ResizeObserver(resize);
    observer.observe(host);
    if (focus) observer.observe(focus);
    if (signals) observer.observe(signals);
    window.addEventListener("resize", resize);
    signalMedia.addEventListener("change", resize);
    resize();
    // Prepare the glass/material shaders while the matching poster stays visible.
    // Compilation alone is not readiness: only a successful draw can reveal it.
    const compileStartedAt = diagnostics ? performance.now() : 0;
    if (diagnostics) diagnostics.initMs = compileStartedAt - initStartedAt;
    void renderer.compileAsync(scene, camera).then(() => {
      if (disposed) return;
      if (diagnostics) diagnostics.shaderCompileMs = performance.now() - compileStartedAt;
      compiled = true;
      requestFrame();
    }).catch(fail);
    return {
      /** Square poster of the resting pose (development aid for the static handoff image). */
      snapshot(size = 720) {
        if (disposed || !model) return null;
        model.update(0);
        model.idle?.(0);
        model.orient(0, 0);
        renderer.setSize(size, size, false);
        camera.left = -model.span / 2; camera.right = model.span / 2; camera.top = model.span / 2; camera.bottom = -model.span / 2;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
        const url = canvas.toDataURL("image/png");
        width = 0; height = 0;
        resize();
        forceDraw = true;
        requestFrame();
        return url;
      },
      setVisible(value) {
        if (visible === value || disposed) return;
        visible = value;
        if (visible) requestFrame(); else cancelFrame();
      },
      setReducedMotion(value) {
        if (reducedMotion === value || disposed) return;
        reducedMotion = value;
        measureSignals();
        forceDraw = true;
        requestFrame();
      },
      setScrollProgress(value) {
        const next = clampProgress(value);
        if (next === scrollProgress || disposed) return;
        scrollProgress = next;
        if (!reducedMotion) requestFrame();
      },
      setCarry(value) {
        const next = clampProgress(value);
        if (next === scrollCarry || disposed) return;
        scrollCarry = next;
        if (!reducedMotion) requestFrame();
      },
      dispose,
    };
  } catch (error) {
    dispose();
    throw error;
  }
}
