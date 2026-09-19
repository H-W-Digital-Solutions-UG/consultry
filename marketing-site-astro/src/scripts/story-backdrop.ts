/** Scroll-scrubbed backdrop video. Seeks the element directly; the encode uses
 *  a keyframe every half second, so no frame cache is needed. */
type Connection = EventTarget & { saveData?: boolean; effectiveType?: string };

export function mountStoryBackdrops() {
  document.querySelectorAll<HTMLElement>("[data-story-backdrop]").forEach(mount);
}

function mount(root: HTMLElement) {
  if (root.dataset.mounted) return;
  root.dataset.mounted = "true";
  const video = root.querySelector<HTMLVideoElement>("video");
  const src = root.dataset.src;
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  const connection = (navigator as Navigator & { connection?: Connection }).connection;
  // Phones and small tablets keep the poster: scrubbing a video on scroll costs battery and stutters on touch devices.
  const compact = matchMedia("(max-width: 1099px), (max-height: 649px)");
  const conservative = () => motion.matches || compact.matches || !!connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? "");
  if (!video || !src || conservative()) return;

  // Resting first frame (clips may fade in from black); per clip via data-hold.
  const HOLD_TIME = Number(root.dataset.hold) || 0;
  let duration = 0;
  let ready = false;
  let seeking = false;
  let target = 0;
  let displayed = 0;
  let frameId = 0;
  // Three movements: the film opens with the first scrolled pixel and reaches
  // OPENING_SHARE where the hero object locks into its frame, pauses on that
  // frame while the object holds the focus, and plays out over roughly two and
  // a half viewports once the object has left (the controller publishes both
  // scroll positions). Without a pinned object it simply starts at the hold point.
  // Product pages reach their frame after a short opening; the home holds an early frame, so the
  // skyline is still small behind the pinned object and assembles once the object has left.
  const OPENING_SHARE = root.dataset.mode === "hero" ? 0.25 : 0.32;
  const hero = document.querySelector<HTMLElement>("[data-scroll-scene]");
  const clamp = (value: number) => Math.min(1, Math.max(0, value));
  // The play-out ends where the film stops being visible: at the top of the
  // closing band (or the page end), never on a fixed number of viewports.
  const closing = document.querySelector<HTMLElement>("[data-backdrop-end]");
  const layoutTop = (element: HTMLElement) => { let top = 0; for (let node: HTMLElement | null = element; node; node = node.offsetParent as HTMLElement | null) top += node.offsetTop; return top; };
  const progress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const from = Number(hero?.dataset.sceneHoldUntil) || window.innerHeight * 1.2;
    const pinFrom = Number(hero?.dataset.scenePinFrom) || 0;
    const end = closing ? Math.min(max, layoutTop(closing) - window.innerHeight * 0.5) : max;
    const range = Math.max(window.innerHeight * 0.8, Math.min(end - from, window.innerHeight * 3.2));
    const y = window.scrollY;
    if (pinFrom > 0 && pinFrom < from) {
      if (y < pinFrom) return OPENING_SHARE * clamp(y / pinFrom);
      if (y < from) return OPENING_SHARE;
      return OPENING_SHARE + (1 - OPENING_SHARE) * clamp((y - from) / range);
    }
    return clamp((y - from) / range);
  };
  // Seek only into ranges the download has already reached: a fast scroll
  // straight down holds the last buffered frame instead of stalling on a
  // black one, and the pending target is retried as more bytes arrive.
  const buffered = (time: number) => {
    const ranges = video.buffered;
    for (let index = 0; index < ranges.length; index++) {
      if (time >= ranges.start(index) - 0.1 && time <= ranges.end(index)) return true;
    }
    return false;
  };
  const seek = () => {
    if (!ready || seeking) return;
    const time = HOLD_TIME + displayed * Math.max(0, duration - HOLD_TIME - 0.05);
    // Never seek finer than a frame; the encode holds 24 per second.
    if (Math.abs(video.currentTime - time) < 1 / 24 || !buffered(time)) return;
    seeking = true;
    video.currentTime = time;
  };
  const tick = () => {
    frameId = 0;
    const next = displayed + (target - displayed) * 0.22;
    displayed = Math.abs(target - next) < 0.001 ? target : next;
    root.style.setProperty("--story-progress", displayed.toFixed(3));
    seek();
    if (displayed !== target) frameId = requestAnimationFrame(tick);
  };
  const schedule = () => {
    target = progress();
    if (ready && !frameId && !document.hidden) frameId = requestAnimationFrame(tick);
  };
  const settle = () => { seeking = false; if (displayed !== target && !frameId) frameId = requestAnimationFrame(tick); };
  video.addEventListener("seeked", settle);
  video.addEventListener("stalled", settle);
  video.addEventListener("error", settle);
  // A pending target that was outside the buffer gets another chance as bytes arrive.
  video.addEventListener("progress", () => { if (ready && !seeking) seek(); });
  video.addEventListener("loadedmetadata", () => {
    duration = video.duration || 0;
    ready = duration > 0;
    if (!ready) return;
    displayed = target = progress();
    root.style.setProperty("--story-progress", displayed.toFixed(3));
    seeking = true;
    video.currentTime = HOLD_TIME + displayed * Math.max(0, duration - HOLD_TIME - 0.05);
  }, { once: true });
  // The poster gives way only once a frame has actually been decoded; never to a black element.
  video.addEventListener("seeked", () => { if (ready && root.dataset.status !== "ready") root.dataset.status = "ready"; });
  const start = () => {
    if (video.src) return;
    video.preload = "auto";
    video.src = src;
    video.load();
  };
  // First load stays poster-only and never competes with the critical path:
  // the bytes are requested in the browser's idle time after the load event
  // (at the latest a few seconds in), or right away on the first scroll.
  const maybeStart = () => { if (!video.src && window.scrollY > 0) start(); };
  const begin = () => {
    const go = () => { if (!document.hidden) start(); };
    if ("requestIdleCallback" in window) window.requestIdleCallback(go, { timeout: 3500 });
    else setTimeout(go, 1500);
  };
  if (document.readyState === "complete") begin();
  else window.addEventListener("load", begin, { once: true });
  window.addEventListener("scroll", () => { maybeStart(); schedule(); }, { passive: true });
  window.addEventListener("resize", schedule);
  // Idle callbacks do not run in background tabs: a page opened in one fetches once it is shown.
  document.addEventListener("visibilitychange", () => { if (!document.hidden) { if (!video.src) begin(); schedule(); } });
  motion.addEventListener("change", () => { if (motion.matches) { root.dataset.status = "poster"; ready = false; } });
}
