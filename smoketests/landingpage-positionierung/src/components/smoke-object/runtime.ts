/** Deferred volumetric renderer. No timer-driven animation or pointer controls. */
import {
  ACESFilmicToneMapping, OrthographicCamera, PMREMGenerator, Scene, SRGBColorSpace,
  Vector3, WebGLRenderer, type WebGLRenderTarget,
} from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { buildSmokeModel } from "./models";
import type { SmokeScene, SmokeSceneOptions } from "./types";

const FRAME_INTERVAL = 1000 / 30;
const clampProgress = (value: number) => Number.isFinite(value) ? Math.max(0, Math.min(1, value)) : 0;

/** A short, scroll-scrubbed assembly of separate 3D solids, followed by rest. */
export function createSmokeScene(host: HTMLElement, options: SmokeSceneOptions): SmokeScene {
  const renderer = new WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power", depth: true, stencil: false });
  const canvas = renderer.domElement;
  const scene = new Scene();
  const camera = new OrthographicCamera(-3, 3, 3, -3, .1, 50);
  const visual = host.parentElement;
  const projectedAnchor = new Vector3();
  let model: ReturnType<typeof buildSmokeModel> | undefined;
  let environment: WebGLRenderTarget | undefined;
  let observer: ResizeObserver | undefined;
  let disposed = false;
  let visible = options.visible;
  let reducedMotion = options.reducedMotion;
  let ready = false;
  let compiled = false;
  let frameId = 0;
  let frameDelay: ReturnType<typeof setTimeout> | undefined;
  let lastFrameTime = -Infinity;
  let scrollProgress = 0;
  let width = 0;
  let height = 0;
  let bufferWidth = 0;
  let bufferHeight = 0;

  const cancelFrame = () => {
    cancelAnimationFrame(frameId);
    frameId = 0;
    if (frameDelay !== undefined) clearTimeout(frameDelay);
    frameDelay = undefined;
  };
  const dispose = () => {
    if (disposed) return;
    disposed = true;
    cancelFrame();
    observer?.disconnect();
    window.removeEventListener("resize", resize);
    canvas.removeEventListener("webglcontextlost", onContextLost);
    model?.dispose();
    environment?.dispose();
    for (let index = 1; index <= 3; index++) {
      visual?.style.removeProperty(`--part-${index}-x`);
      visual?.style.removeProperty(`--part-${index}-y`);
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
    const remaining = FRAME_INTERVAL - (now - lastFrameTime);
    if (remaining > .5) {
      frameDelay = setTimeout(() => { frameDelay = undefined; requestFrame(); }, remaining);
      return;
    }
    try {
      // setSize clears the canvas, even when given the same dimensions. Apply
      // actual changes inside the draw task, never between two painted frames.
      if (canvas.width !== bufferWidth || canvas.height !== bufferHeight) {
        renderer.setSize(bufferWidth, bufferHeight, false);
      }
      model.update(reducedMotion ? 1 : scrollProgress);
      // HTML annotations track actual transformed component centres, without
      // their own animation loop or per-frame React state updates.
      scene.updateMatrixWorld(true);
      camera.updateMatrixWorld();
      if (visual) model.anchors.forEach((anchor, index) => {
        projectedAnchor.setFromMatrixPosition(anchor.matrixWorld).project(camera);
        visual.style.setProperty(`--part-${index + 1}-x`, `${((projectedAnchor.x + 1) * 50).toFixed(3)}%`);
        visual.style.setProperty(`--part-${index + 1}-y`, `${((1 - projectedAnchor.y) * 50).toFixed(3)}%`);
      });
      renderer.render(scene, camera);
    } catch {
      fail();
      return;
    }
    lastFrameTime = now;
    if (!ready) { ready = true; options.onReady(); }
  };
  const requestFrame = () => {
    if (disposed || !visible || !compiled || !model || !width || !height || frameId || frameDelay !== undefined) return;
    frameId = requestAnimationFrame(render);
  };
  const resize = () => {
    if (disposed || !model) return;
    // Layout size is stable while an ancestor translates/scales with scrolling.
    const nextWidth = host.clientWidth;
    const nextHeight = host.clientHeight;
    const resolution = Math.min(window.devicePixelRatio || 1, 1.5, 720 / Math.max(nextWidth, nextHeight));
    const nextBufferWidth = Math.max(1, Math.round(nextWidth * resolution));
    const nextBufferHeight = Math.max(1, Math.round(nextHeight * resolution));
    if (nextWidth === width && nextHeight === height && nextBufferWidth === bufferWidth && nextBufferHeight === bufferHeight) return;
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
    cancelFrame();
    lastFrameTime = -Infinity;
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
    window.addEventListener("resize", resize);
    resize();
    // Prepare the glass/material shaders while the matching poster stays visible.
    // Compilation alone is not readiness: only a successful draw can reveal it.
    void renderer.compileAsync(scene, camera).then(() => {
      if (disposed) return;
      compiled = true;
      requestFrame();
    }).catch(fail);
    return {
      setVisible(value) {
        if (visible === value || disposed) return;
        visible = value;
        if (visible) requestFrame(); else cancelFrame();
      },
      setReducedMotion(value) {
        if (reducedMotion === value || disposed) return;
        reducedMotion = value;
        requestFrame();
      },
      setScrollProgress(value) {
        const next = clampProgress(value);
        if (next === scrollProgress || disposed) return;
        scrollProgress = next;
        if (!reducedMotion) requestFrame();
      },
      dispose,
    };
  } catch (error) {
    dispose();
    throw error;
  }
}
