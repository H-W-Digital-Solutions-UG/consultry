/** Native, once-only product walkthrough. No framework, idle loop or network. */
type Phase = "idle" | "playing" | "paused" | "manual" | "complete";
type Beat = "reading" | "working" | "result";
const controllers = new Map<HTMLElement, () => void>();

function mountDemo(root: HTMLElement) {
  if (controllers.has(root)) return;
  const steps = [
    ...root.querySelectorAll<HTMLButtonElement>("[data-demo-step]"),
  ];
  const panels = [...root.querySelectorAll<HTMLElement>("[data-demo-panel]")];
  const navigation = root.querySelector<HTMLElement>(".pd-navigation");
  const agents = [...root.querySelectorAll<HTMLElement>("[data-demo-agent-panel]")];
  const viewButtons = [...root.querySelectorAll<HTMLButtonElement>("[data-demo-view-button]")];
  const version = root.querySelector<HTMLElement>("[data-demo-version]");
  let view: "basis" | "current" = "current";
  let displayedIndex = 0;
  const focus = root.querySelector<HTMLElement>("[data-demo-focus]");
  const toggle = root.querySelector<HTMLButtonElement>("[data-demo-toggle]");
  if (!steps.length || panels.length !== steps.length || !focus || !toggle) return;
  // Observe one bounded, stable area rather than changing hidden panel targets.
  const viewport = root.querySelector<HTMLElement>("[data-demo-viewport]") ?? focus;
  const caption = root.querySelector<HTMLElement>("[data-demo-caption]")!;
  const status = root.querySelector<HTMLElement>("[data-demo-status]")!;
  const count = root.querySelector<HTMLElement>("[data-demo-count]")!;
  const toggleLabel = root.querySelector<HTMLElement>(
    "[data-demo-toggle-label]",
  )!;
  const toggleIcon = root.querySelector<HTMLElement>(
    "[data-demo-toggle-icon]",
  )!;
  const announcer = root.querySelector<HTMLElement>("[data-demo-announcer]")!;
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const abort = new AbortController();
  const opts = { signal: abort.signal };
  let phase: Phase = "idle";
  let index = 0;
  let visible = false;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let autoStart: ReturnType<typeof setTimeout> | undefined;
  let startedAt = 0;
  let clockDelay = 0;
  let remaining = Number(steps[0].dataset.duration) || 5000;
  let explicitPlayback = false;
  let revealedIndex = -1;

  // Move only the horizontal strip, preserving the reader's position on the page.
  const revealStep = (step: HTMLButtonElement) => {
    if (!navigation) return;
    const strip = navigation.getBoundingClientRect();
    const button = step.getBoundingClientRect();
    const left = strip.left + navigation.clientLeft;
    const right = left + navigation.clientWidth;
    if (button.left < left) navigation.scrollLeft += button.left - left;
    else if (button.right > right) navigation.scrollLeft += button.right - right;
  };

  const duration = () => Number(steps[index].dataset.duration) || 5000;
  const boundaries = () => {
    const total = duration();
    const reading = Math.min(1500, total * .16);
    const working = Math.min(reading + 1800, total * .55);
    return [reading, working, total];
  };
  const currentBeat = (): Beat => {
    if (phase === "idle" || phase === "manual" || phase === "complete") return "result";
    const elapsed = duration() - remaining + .5;
    const [reading, working] = boundaries();
    return elapsed < reading ? "reading" : elapsed < working ? "working" : "result";
  };
  const canPlay = () =>
    phase === "playing" &&
    visible &&
    !document.hidden &&
    (!motion.matches || explicitPlayback);
  const event = (action: string) =>
    root.dispatchEvent(
      new CustomEvent("consultry:demo-interact", {
        bubbles: true,
        detail: { variant: root.dataset.variant, action },
      }),
    );
  const clearClock = () => {
    if (timer !== undefined) {
      clearTimeout(timer);
      timer = undefined;
      // Pausing preserves this beat. A delayed callback cannot silently skip a
      // contribution that the user has not seen yet.
      remaining = Math.max(0, remaining - Math.min(clockDelay, performance.now() - startedAt));
    }
  };
  const cancelAutoStart = () => {
    clearTimeout(autoStart);
    autoStart = undefined;
  };
  const paint = () => {
    const beat = currentBeat();
    // Keep the last completed work visible while the next contribution is prepared.
    displayedIndex = view === "basis" ? 0 : beat !== "result" && index > 0 ? index - 1 : index;
    root.dataset.demoView = view;
    root.dataset.demoState = phase;
    root.dataset.demoBeat = beat;
    root.dataset.demoRunning = String(canPlay());
    steps.forEach((step, i) => {
      step.setAttribute("aria-pressed", String(i === index));
      step.dataset.done = String(i < index || phase === "complete");
      step.dataset.current = String(i === index);
      const progress = step.querySelector<HTMLElement>("i")!;
      progress.style.transition = "none";
      progress.style.transform = `scaleX(${i < index || phase === "complete" ? 1 : i === index ? 1 - remaining / duration() : 0})`;
      if (i === index && canPlay()) {
        // One layout read per beat/resume starts a CSS transition; no frame loop.
        void progress.offsetWidth;
        progress.style.transition = motion.matches
          ? "none"
          : `transform ${remaining}ms linear`;
        progress.style.transform = "scaleX(1)";
      }
    });
    panels.forEach((panel, i) => {
      const active = i === displayedIndex;
      panel.dataset.active = String(active);
      panel.setAttribute("aria-hidden", String(!active));
      panel.inert = !active;
    });
    agents.forEach((agent, i) => {
      const active = i === (view === "basis" ? 0 : index);
      agent.dataset.active = String(active);
      agent.setAttribute("aria-hidden", String(!active));
      agent.inert = !active;
    });
    viewButtons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.demoViewButton === view)));
    if (version) version.textContent = panels[displayedIndex].dataset.version || "";
    caption.textContent = steps[index].dataset.caption || "";
    count.textContent = `${String(index + 1).padStart(2, "0")} / ${String(steps.length).padStart(2, "0")}`;
    status.textContent =
      phase === "manual"
        ? "Arbeitsstand ansehen"
        : phase === "complete"
          ? "Ergebnis bereit"
          : phase === "paused"
            ? "Beispiel pausiert"
            : phase === "playing"
              ? beat === "reading"
                ? "Quellen lesen"
                : beat === "working"
                  ? "Beitrag erarbeiten"
                  : "Ergebnis im Canvas"
              : "Arbeitsablauf";
    const label =
      phase === "playing"
        ? "Pause"
        : phase === "paused"
          ? "Fortsetzen"
          : phase === "complete"
            ? "Wiederholen"
            : "Abspielen";
    toggleLabel.textContent = label;
    toggleIcon.textContent =
      phase === "playing" ? "Ⅱ" : phase === "complete" ? "↻" : "▶";
    toggle.setAttribute("aria-label", `Beispielablauf ${label.toLowerCase()}`);
    if (revealedIndex !== index) {
      revealStep(steps[index]);
      revealedIndex = index;
    }
  };
  const run = () => {
    clearClock();
    if (canPlay()) {
      const total = duration();
      const elapsed = total - remaining;
      const nextBoundary = boundaries().find((boundary) => boundary > elapsed + .5) ?? total;
      clockDelay = Math.max(0, nextBoundary - elapsed);
      startedAt = performance.now();
      timer = setTimeout(() => {
        if (!canPlay()) {
          clearClock();
          paint();
          return;
        }
        timer = undefined;
        remaining = Math.max(0, total - nextBoundary);
        if (remaining === 0) {
          if (index === steps.length - 1) {
            phase = "complete";
            paint();
            return;
          }
          index += 1;
          remaining = duration();
        }
        run();
      }, clockDelay);
    }
    paint();
  };
  const manual = (next = index, announce = false) => {
    cancelAutoStart();
    clearClock();
    phase = "manual";
    index = next;
    view = "current";
    remaining = duration();
    paint();
    if (announce) announcer.textContent = steps[index].dataset.caption || "";
  };
  const maybeStart = () => {
    cancelAutoStart();
    if (phase !== "idle" || !visible || document.hidden || motion.matches)
      return;
    autoStart = setTimeout(() => {
      autoStart = undefined;
      if (phase !== "idle" || !visible || document.hidden || motion.matches)
        return;
      phase = "playing";
      run();
    }, 450);
  };
  steps.forEach((step, i) => {
    step.addEventListener(
      "click",
      () => {
        manual(i, true);
        event(`step:${step.dataset.stepId}`);
      },
      opts,
    );
    step.addEventListener("focus", () => {
      manual();
      revealStep(step);
    }, opts);
    step.addEventListener(
      "keydown",
      (e) => {
        const next =
          e.key === "ArrowRight" || e.key === "ArrowDown"
            ? (i + 1) % steps.length
            : e.key === "ArrowLeft" || e.key === "ArrowUp"
              ? (i + steps.length - 1) % steps.length
              : e.key === "Home"
                ? 0
                : e.key === "End"
                  ? steps.length - 1
                  : undefined;
        if (next === undefined) return;
        e.preventDefault();
        steps[next].focus({ preventScroll: true });
        manual(next, true);
        event(`step:${steps[next].dataset.stepId}`);
      },
      opts,
    );
  });
  root
    .querySelectorAll<HTMLButtonElement>("[data-demo-advance]")
    .forEach((action) => {
      action.addEventListener(
        "click",
        () => {
          const next = Number(action.dataset.demoAdvance);
          if (!Number.isInteger(next) || next < 0 || next >= panels.length)
            return;
          manual(next, true);
          // The old button becomes inert. Keep keyboard focus in the new document.
          panels[next]
            .querySelector<HTMLElement>("[data-demo-result-title]")
            ?.focus({ preventScroll: true });
          event(`apply:${steps[next].dataset.stepId}`);
        },
        opts,
      );
    });
  root.querySelector("[data-demo-download]")?.addEventListener(
    "click",
    () => {
      manual();
      event("example:download");
    },
    opts,
  );
  toggle.addEventListener(
    "click",
    () => {
      cancelAutoStart();
      clearClock();
      if (phase === "playing") {
        phase = "paused";
        event("pause");
      } else {
        if (phase === "complete" || phase === "manual") {
          index = 0;
          remaining = duration();
        }
        view = "current";
        phase = "playing";
        explicitPlayback = true;
        event("play");
      }
      run();
    },
    opts,
  );
  root.querySelector<HTMLButtonElement>("[data-demo-run]")?.addEventListener("click", () => {
    cancelAutoStart();
    clearClock();
    index = 0;
    view = "current";
    remaining = duration();
    phase = "playing";
    explicitPlayback = true;
    if (window.matchMedia("(max-width: 760px)").matches) {
      const prompt = root.querySelector<HTMLDetailsElement>(".pd-prompt-details");
      if (prompt) prompt.open = false;
      root.querySelector<HTMLElement>(".pd-canvas")?.scrollIntoView({ block: "start", behavior: "auto" });
    }
    run();
    event("task:run");
  }, opts);
  viewButtons.forEach(button => button.addEventListener("click", () => {
    manual(index);
    view = button.dataset.demoViewButton === "basis" ? "basis" : "current";
    paint();
    announcer.textContent = `${view === "basis" ? "Ausgangsstand" : "Arbeitsstand"}: ${version?.textContent || ""}`;
    event(`view:${view}`);
  }, opts));
  // Reading a source pauses on the work actually visible, without revealing an
  // unfinished next result. Playback and navigation controls manage their own state.
  const result = root.querySelector<HTMLElement>(".pd-result")!;
  const takeOver = (event: Event) => {
    const target = event.target as Element;
    if (target.closest("[data-demo-toggle], [data-demo-step], [data-demo-view-button], [data-demo-advance], [data-demo-download]")) return;
    if (phase === "playing" || phase === "paused") manual(displayedIndex);
  };
  result.addEventListener("pointerdown", takeOver, opts);
  result.addEventListener("focusin", takeOver, opts);
  root.querySelectorAll<HTMLDetailsElement>(".pd-contributions").forEach(details => details.addEventListener("toggle", () => {
    if (details.open && phase === "playing") {
      clearClock();
      phase = "paused";
      paint();
    }
  }, opts));
  root.querySelector<HTMLDetailsElement>(".pd-task-brief")?.addEventListener(
    "toggle",
    (event) => {
      if ((event.currentTarget as HTMLDetailsElement).open) manual();
    },
    opts,
  );
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries
        .filter((entry) => entry.target === viewport)
        .pop();
      if (!entry) return;
      const nextVisible = entry.isIntersecting && entry.intersectionRatio >= 0.4;
      if (nextVisible === visible) return;
      visible = nextVisible;
      run();
      maybeStart();
    },
    // Fixed margins avoid a percentage vertical inset growing with viewport
    // width. Forty percent of the 220 px focus area is attainable on mobile.
    { threshold: [0, 0.4, 1], rootMargin: "-72px 0px -32px 0px" },
  );
  observer.observe(viewport);
  const navigationResize = new ResizeObserver(() => revealStep(steps[index]));
  if (navigation) navigationResize.observe(navigation);
  document.addEventListener(
    "visibilitychange",
    () => {
      run();
      maybeStart();
    },
    opts,
  );
  motion.addEventListener(
    "change",
    () => {
      if (motion.matches) {
        explicitPlayback = false;
        if (phase === "playing") phase = "paused";
      }
      run();
      maybeStart();
    },
    opts,
  );
  paint();
  controllers.set(root, () => {
    cancelAutoStart();
    clearClock();
    observer.disconnect();
    navigationResize.disconnect();
    abort.abort();
  });
}

function initializeDemos() {
  for (const [root, dispose] of controllers)
    if (!root.isConnected) {
      dispose();
      controllers.delete(root);
    }
  document
    .querySelectorAll<HTMLElement>("[data-product-demo]")
    .forEach(mountDemo);
}
if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", initializeDemos, {
    once: true,
  });
else initializeDemos();
document.addEventListener("astro:page-load", initializeDemos);
document.addEventListener("astro:before-swap", () => {
  controllers.forEach((dispose) => dispose());
  controllers.clear();
});
