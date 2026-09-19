/** Native centered scrolling with decorative wrap previews; no wheel interception. */
function mountProductGalleries() {
  document
    .querySelectorAll<HTMLElement>("[data-product-carousel]")
    .forEach((root) => {
      if (root.dataset.enhanced) return;
      const track = root.querySelector<HTMLElement>("[data-product-track]")!;
      const cards = [
        ...track.querySelectorAll<HTMLAnchorElement>(".product-card"),
      ];
      const count = cards.length;
      if (count < 2) return;
      const previous = root.querySelector<HTMLButtonElement>(
        "[data-gallery-previous]",
      )!;
      const next = root.querySelector<HTMLButtonElement>(
        "[data-gallery-next]",
      )!;
      const position = root.querySelector<HTMLElement>(
        "[data-gallery-position]",
      )!;
      const steps = [
        ...root.querySelectorAll<HTMLButtonElement>("[data-gallery-step]"),
      ];
      const navigation = root.querySelector<HTMLElement>(
        "[data-gallery-navigation]",
      )!;
      const pin = root.querySelector<HTMLElement>("[data-gallery-pin]")!;
      const motion = matchMedia("(prefers-reduced-motion: reduce)");
      const verticalAllowed = matchMedia(
        "(min-width: 781px) and (min-height: 650px) and (prefers-reduced-motion: no-preference)",
      );
      const abort = new AbortController();
      const options = { signal: abort.signal };
      const supportsScrollEnd = "onscrollend" in track;
      // Two on either side preserve both neighbors while crossing a wrap point.
      // Only the five canonical links are exposed to keyboards and screen readers.
      const preview = (card: HTMLAnchorElement) => {
        const copy = card.cloneNode(true) as HTMLAnchorElement;
        copy.dataset.galleryClone = "true";
        copy.setAttribute("aria-hidden", "true");
        copy.tabIndex = -1;
        copy.inert = true;
        return copy;
      };
      const edge = Math.min(2, count);
      track.prepend(...cards.slice(-edge).map(preview));
      track.append(...cards.slice(0, edge).map(preview));
      const slides = [
        ...track.querySelectorAll<HTMLAnchorElement>(".product-card"),
      ];
      let current = 0;
      let requested: number | undefined;
      let frame = 0;
      let settling: ReturnType<typeof setTimeout> | undefined;
      let verticalSettling: ReturnType<typeof setTimeout> | undefined;
      let pointerDown = false;
      let focusing = false;
      let width = track.clientWidth;
      let viewportWidth = innerWidth;
      let viewportHeight = innerHeight;
      let vertical = false;
      let visible = false;
      let verticalProgress = 0;
      let runwayStart = 0;
      let runwayLength = 1;
      let pinHeight = 0;
      let resizeAnchor: { y: number; progress: number } | undefined;
      const debug = new URLSearchParams(location.search).get("gallery-perf") === "1";
      let scrollEvents = 0;
      let renders = 0;
      const report = (event: string) => {
        if (!debug) return;
        root.dataset.galleryDebug = JSON.stringify({
          event, vertical, visible, frame, runwayStart, runwayLength,
          progress: verticalProgress, scrollY: window.scrollY,
          offset: track.scrollLeft, current: current + 1, requested,
          resizeAnchor, scrollEvents, renders,
        });
      };
      const clamp = (value: number, min = 0, max = 1) => Math.max(min, Math.min(max, value));
      const logical = (physical: number) =>
        ((physical - edge) % count + count) % count;
      const matchingSlides = cards.map((_, index) =>
        slides.filter((_, physical) => logical(physical) === index),
      );
      // The active card rests at --gallery-anchor from the track's left edge (the
      // following cards trail off to the right); without it, it is centred.
      const measureCenters = () => {
        const left = track.getBoundingClientRect().left;
        const offset = track.scrollLeft;
        const halfWidth = track.clientWidth / 2;
        const anchorValue = getComputedStyle(track).getPropertyValue("--gallery-anchor").trim();
        // "shell": the track bleeds to both viewport edges and the card rests at the shell's edge.
        const anchor = anchorValue === "shell"
          ? Math.max(0, (track.clientWidth - (track.parentElement?.clientWidth ?? track.clientWidth)) / 2)
          : parseFloat(anchorValue);
        return slides.map((slide) => {
          const rect = slide.getBoundingClientRect();
          if (Number.isFinite(anchor)) return rect.left - left + offset - anchor;
          return rect.left - left + offset + rect.width / 2 - halfWidth;
        });
      };
      let points = measureCenters();
      let activeIndex = -1;
      const measureRunway = (preserveProgress?: number) => {
        const top = parseFloat(getComputedStyle(pin).top) || 0;
        runwayStart = root.getBoundingClientRect().top + window.scrollY - top;
        pinHeight = pin.offsetHeight;
        runwayLength = Math.max(1, root.offsetHeight - pinHeight);
        if (preserveProgress !== undefined) {
          // Keep the same card at the current page position after a resize;
          // the remaining scroll still reaches the original first/last stops.
          resizeAnchor = {
            y: clamp(window.scrollY, runwayStart, runwayStart + runwayLength),
            progress: preserveProgress,
          };
        }
        if (debug) report("measure");
      };
      const progressAt = (y: number) => {
        if (!resizeAnchor) return clamp((y - runwayStart) / runwayLength);
        const end = runwayStart + runwayLength;
        const anchorY = clamp(resizeAnchor.y, runwayStart, end);
        if (y <= anchorY) {
          return resizeAnchor.progress * (anchorY === runwayStart ? 1 : clamp((y - runwayStart) / (anchorY - runwayStart)));
        }
        return resizeAnchor.progress + (1 - resizeAnchor.progress) * clamp((y - anchorY) / Math.max(1, end - anchorY));
      };
      const syncGeometry = () => {
        if ((root.dataset.scrollDriven === "true" && verticalAllowed.matches) !== vertical) {
          setMode();
          return true;
        }
        const nextWidth = track.clientWidth;
        if (nextWidth === width && viewportWidth === innerWidth && viewportHeight === innerHeight) return false;
        // A resize can emit scroll before ResizeObserver runs. Preserve the
        // selected product before comparing that offset with the new layout.
        const selected = requested === undefined ? current : logical(requested);
        const preservedProgress = vertical && requested === undefined
          ? verticalProgress : selected / (count - 1);
        width = nextWidth;
        viewportWidth = innerWidth;
        viewportHeight = innerHeight;
        points = measureCenters();
        requested = undefined;
        if (vertical) measureRunway(preservedProgress);
        track.scrollTo({
          left: vertical
            ? points[edge] + (points[edge + count - 1] - points[edge]) * preservedProgress
            : points[edge + selected],
          behavior: "instant",
        });
        return true;
      };
      const nearest = () => {
        syncGeometry();
        const offset = track.scrollLeft;
        return points.reduce(
          (best, x, i) =>
            Math.abs(x - offset) < Math.abs(points[best] - offset)
              ? i
              : best,
          edge,
        );
      };
      const updateArrows = () => {
        previous.disabled = vertical && current === 0;
        next.disabled = vertical && current === count - 1;
      };
      const activate = (index: number) => {
        if (activeIndex === index) return;
        if (activeIndex >= 0 && current === logical(index)) {
          activeIndex = index;
          return;
        }
        if (activeIndex >= 0) matchingSlides[current].forEach((slide) => {
          slide.dataset.active = "false";
        });
        steps[current]?.setAttribute("aria-current", "false");
        activeIndex = index;
        current = logical(index);
        // Matching previews share appearance before an instant wrap, avoiding
        // a second opacity/scale transition when the canonical card takes over.
        matchingSlides[current].forEach((slide) => {
          slide.dataset.active = "true";
        });
        steps[current]?.setAttribute("aria-current", "true");
        position.textContent = `${String(current + 1).padStart(2, "0")} / ${String(count).padStart(2, "0")}`;
        updateArrows();
      };
      const update = () => activate(nearest());
      const renderVertical = () => {
        syncGeometry();
        if (!vertical) return;
        if (debug) renders += 1;
        verticalProgress = progressAt(window.scrollY);
        const offset = points[edge] + (points[edge + count - 1] - points[edge]) * verticalProgress;
        if (Math.abs(track.scrollLeft - offset) > .5) track.scrollTo({ left: offset, behavior: "instant" });
        activate(edge + Math.round(verticalProgress * (count - 1)));
        if (requested !== undefined && Math.abs(verticalProgress - logical(requested) / (count - 1)) < .005) requested = undefined;
        if (debug) report("render");
      };
      const scheduleVertical = () => {
        if (debug) scrollEvents += 1;
        // Observer delivery can lag the first scroll into a long sticky region.
        // Cached document bounds keep that first frame responsive without a
        // layout read or scheduling work elsewhere on the page.
        const withinRunway = window.scrollY + innerHeight >= runwayStart &&
          window.scrollY <= runwayStart + runwayLength + pinHeight;
        if (!vertical || (!visible && !withinRunway) || frame) {
          if (debug) report("skip");
          return;
        }
        frame = requestAnimationFrame(() => {
          frame = 0;
          renderVertical();
        });
        if (debug) report("schedule");
      };
      // Im senkrechten Modus folgt der Streifen dem Seitenscroll und steht deshalb
      // beim Anhalten irgendwo zwischen zwei Karten. Sobald das Scrollen ruht,
      // ziehen wir die Seite auf die Position der nächstgelegenen Karte. Das ist
      // dieselbe Rechnung wie in go(), nur ausgelöst vom Anhalten statt vom Klick.
      const settleVertical = () => {
        if (!vertical || !visible || requested !== undefined) return;
        const y = window.scrollY;
        // Vor und hinter der Laufstrecke scrollt die Seite ganz normal weiter.
        if (y <= runwayStart || y >= runwayStart + runwayLength) return;
        // Nach einem Fenstergrößenwechsel ist die Zuordnung verschoben; wie in
        // go() messen wir dann neu, statt die Umkehrfunktion zu raten.
        if (resizeAnchor) {
          resizeAnchor = undefined;
          measureRunway();
          verticalProgress = progressAt(window.scrollY);
        }
        const index = Math.round(verticalProgress * (count - 1));
        const target = Math.round(runwayStart + runwayLength * index / (count - 1));
        if (Math.abs(y - target) <= 2) return;
        window.scrollTo({ top: target, behavior: "smooth" });
      };
      const scheduleVerticalSettle = () => {
        if (!vertical) return;
        clearTimeout(verticalSettling);
        verticalSettling = setTimeout(settleVertical, 160);
      };
      const settle = () => {
        if (vertical || pointerDown) return;
        syncGeometry();
        // A superseded smooth scroll can finish while the next target is pending.
        if (
          requested !== undefined &&
          Math.abs(track.scrollLeft - points[requested]) > 2
        ) return;
        clearTimeout(settling);
        const index = nearest();
        requested = undefined;
        if (index < edge || index >= edge + count) {
          // Matching copies have identical geometry: only the native offset changes.
          track.scrollTo({
            left: points[edge + logical(index)],
            behavior: "instant",
          });
        }
        update();
      };
      const scheduleSettle = (force = false) => {
        if (supportsScrollEnd && !force) return;
        clearTimeout(settling);
        settling = setTimeout(settle, 180);
      };
      const go = (index: number, focus = false) => {
        syncGeometry();
        // Rapid clicks may run beyond the decorative edge copies. Keep their
        // logical destination instead of clamping and silently losing clicks.
        requested = vertical ? edge + clamp(index - edge, 0, count - 1)
          : index < 0 || index >= slides.length
          ? edge + logical(index)
          : index;
        if (focus) {
          focusing = true;
          cards[logical(requested)].focus({ preventScroll: true });
          focusing = false;
        }
        if (vertical) {
          resizeAnchor = undefined;
          measureRunway();
          window.scrollTo({
            top: runwayStart + runwayLength * logical(requested) / (count - 1),
            behavior: "smooth",
          });
          return;
        }
        track.scrollTo({
          left: points[requested],
          behavior: motion.matches ? "instant" : "smooth",
        });
        if (Math.abs(track.scrollLeft - points[requested]) <= 2) settle();
        else scheduleSettle();
      };
      previous.addEventListener(
        "click",
        () => go((requested ?? nearest()) - 1),
        options,
      );
      next.addEventListener(
        "click",
        () => go((requested ?? nearest()) + 1),
        options,
      );
      steps.forEach((step, index) => {
        step.addEventListener("click", () => go(edge + index), options);
        step.addEventListener("keydown", (event) => {
          if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey)
            return;
          const target = event.key === "ArrowRight" ? (vertical ? Math.min(index + 1, count - 1) : (index + 1) % count)
            : event.key === "ArrowLeft" ? (vertical ? Math.max(index - 1, 0) : (index - 1 + count) % count)
              : event.key === "Home" ? 0
                : event.key === "End" ? count - 1 : undefined;
          if (target === undefined) return;
          event.preventDefault();
          steps[target].focus({ preventScroll: true });
          go(edge + target);
        }, options);
      });
      track.addEventListener(
        "keydown",
        (event) => {
          if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey)
            return;
          if (
            event.target !== track &&
            !cards.includes(document.activeElement as HTMLAnchorElement)
          )
            return;
          const index = requested ?? nearest();
          const target =
            event.key === "ArrowRight"
              ? index + 1
              : event.key === "ArrowLeft"
                ? index - 1
                : event.key === "Home"
                  ? edge
                  : event.key === "End"
                    ? edge + count - 1
                    : undefined;
          if (target === undefined) return;
          event.preventDefault();
          go(target, true);
        },
        options,
      );
      track.addEventListener(
        "focusin",
        (event) => {
          if (focusing) return;
          const index = cards.indexOf(event.target as HTMLAnchorElement);
          if (index >= 0) go(edge + index);
        },
        options,
      );
      track.addEventListener(
        "scroll",
        () => {
          if (vertical) return;
          if (!frame) frame = requestAnimationFrame(() => {
            frame = 0;
            update();
          });
          scheduleSettle();
        },
        { passive: true, signal: abort.signal },
      );
      track.addEventListener("scrollend", settle, options);
      // Native gestures take over from button navigation without interception.
      track.addEventListener("wheel", () => { requested = undefined; }, {
        passive: true,
        signal: abort.signal,
      });
      track.addEventListener(
        "pointerdown",
        () => {
          pointerDown = true;
          requested = undefined;
        },
        { passive: true, signal: abort.signal },
      );
      window.addEventListener(
        "pointerup",
        () => {
          if (!pointerDown) return;
          pointerDown = false;
          scheduleSettle(true);
        },
        options,
      );
      window.addEventListener(
        "pointercancel",
        () => {
          if (!pointerDown) return;
          pointerDown = false;
          scheduleSettle(true);
        },
        options,
      );
      const setMode = (preserve = true) => {
        const nextVertical = root.dataset.scrollDriven === "true" && verticalAllowed.matches;
        if (nextVertical === vertical) {
          if (syncGeometry()) vertical ? renderVertical() : update();
          return;
        }
        const selectedProgress = requested !== undefined ? logical(requested) / (count - 1)
          : vertical ? verticalProgress : current / (count - 1);
        cancelAnimationFrame(frame);
        frame = 0;
        clearTimeout(settling);
        vertical = nextVertical;
        root.dataset.galleryMode = vertical ? "vertical" : "horizontal";
        width = track.clientWidth;
        viewportWidth = innerWidth;
        viewportHeight = innerHeight;
        points = measureCenters();
        requested = undefined;
        resizeAnchor = undefined;
        if (vertical) {
          measureRunway(preserve ? selectedProgress : undefined);
          renderVertical();
        } else {
          track.scrollTo({ left: points[edge + Math.round(selectedProgress * (count - 1))], behavior: "instant" });
          update();
        }
        updateArrows();
      };
      const resize = new ResizeObserver(() => {
        if (syncGeometry()) vertical ? renderVertical() : update();
      });
      const intersection = new IntersectionObserver(([entry]) => {
        const wasVisible = visible;
        visible = entry.isIntersecting;
        if (debug) report("intersection");
        if (!vertical) return;
        if (visible) {
          measureRunway();
          scheduleVertical();
        } else if (wasVisible) renderVertical();
      }, { rootMargin: "100px 0px" });
      window.addEventListener("scroll", () => {
        scheduleVertical();
        scheduleVerticalSettle();
      }, { passive: true, signal: abort.signal });
      window.addEventListener("resize", () => setMode(), options);
      verticalAllowed.addEventListener("change", () => setMode(), options);
      window.addEventListener("wheel", () => {
        if (vertical && visible) requested = undefined;
      }, { passive: true, signal: abort.signal });
      root.querySelector<HTMLAnchorElement>(".gallery-quick-down")?.addEventListener("click", () => {
        requested = undefined;
      }, options);
      window.addEventListener("load", () => {
        if (vertical) {
          measureRunway();
          scheduleVertical();
        }
      }, options);
      track.scrollTo({ left: points[edge], behavior: "instant" });
      root.dataset.enhanced = "true";
      navigation.hidden = false;
      previous.disabled = false;
      next.disabled = false;
      setMode(false);
      if (!vertical) update();
      resize.observe(track);
      intersection.observe(root);
      document.addEventListener(
        "astro:before-swap",
        () => {
          abort.abort();
          resize.disconnect();
          intersection.disconnect();
          cancelAnimationFrame(frame);
          clearTimeout(settling);
          clearTimeout(verticalSettling);
        },
        { once: true },
      );
    });
}
mountProductGalleries();
document.addEventListener("astro:page-load", mountProductGalleries);
