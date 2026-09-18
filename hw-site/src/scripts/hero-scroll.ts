/**
 * Scroll-Hero „From Process to Production“ – progressive Erweiterung von Hero.astro.
 *
 * Ohne dieses Skript (und bei Reduced Motion, Data-Saver oder 2g) bleibt der
 * Hero ein statischer 100svh-Hero. Erst das Skript setzt `data-scene="on"` auf
 * die Section; die Section wird dadurch zu einem hohen Track, in dem der
 * sticky Bildlayer stehen bleibt, während die Copy darüber wegscrollt. Beim
 * Scrollen werden ausschließlich CSS-Variablen auf der Section fortgeschrieben
 * (`--p`, `--scene-reveal`, `--scene-carry`) sowie `data-scene-aspect`
 * (derzeit ohne CSS-Verbraucher). Alles Sichtbare entsteht in CSS aus
 * transform/opacity.
 *
 * Mechanik (nach der Consultry-Referenz):
 *   start = trackTop, end = trackTop + trackHeight − stageHeight
 *   p = clamp((scrollY − start) / (end − start))
 *   reveal = clamp((p − .06) / .30)       – frühe Einblendungen (derzeit ohne CSS-Verbraucher)
 *   aspect = 0 | 1 (p ≥ .10) | 2 (p ≥ .40) | 3 (p ≥ .70)
 *   carry = clamp((scrollY − (start + span·share)) / rest)  – Copy tritt ab .46 zurück
 *
 * Im Scroll-Handler wird außer `scrollY` nichts aus dem Layout gelesen; die
 * Pin-Grenzen werden nur bei Resize/Load gemessen. Ein IntersectionObserver
 * schaltet den Handler außerhalb der Section ab.
 */

interface NetInfo {
  saveData?: boolean;
  effectiveType?: string;
  addEventListener?: (type: "change", listener: () => void) => void;
  removeEventListener?: (type: "change", listener: () => void) => void;
}

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

export function createHeroScene(section: HTMLElement): () => void {
  const track = section.querySelector<HTMLElement>("[data-hero-track]");
  const stage = section.querySelector<HTMLElement>("[data-hero-stage]");
  const copy = section.querySelector<HTMLElement>("[data-hero-copy]");
  const img = section.querySelector<HTMLImageElement>("img");
  if (!track || !stage) return () => {};

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const net = (navigator as Navigator & { connection?: NetInfo }).connection;
  const share = Math.min(1, Math.max(0.3, Number(section.dataset.sceneShare) || 1));
  const small = window.matchMedia("(max-width: 899px)");
  const blocked = () => small.matches || reduce.matches || !!net?.saveData || /(^|-)2g$/.test(net?.effectiveType ?? "");

  let on = false;
  let listening = false;
  let visible = true;
  let destroyed = false;
  let raf = 0;
  let rafResize = 0;
  let start = 0;
  let span = 1;
  let carryStart = 0;
  let carrySpan = 1;
  const cache: Record<string, string> = {};

  const prop = (name: string, value: string) => {
    if (cache[name] === value) return;
    cache[name] = value;
    section.style.setProperty(name, value);
  };

  /** Pin-Grenzen messen – nur bei Load/Resize, nie im Scroll-Handler. */
  const measure = () => {
    let top = 0;
    for (let el: HTMLElement | null = track; el; el = el.offsetParent as HTMLElement | null) top += el.offsetTop;
    const end = top + track.offsetHeight - stage.offsetHeight;
    start = top;
    span = Math.max(1, end - top);
    carryStart = top + span * share;
    carrySpan = Math.max(1, end - carryStart);
  };

  const update = () => {
    raf = 0;
    if (!on) return;
    const y = window.scrollY;
    const p = clamp01((y - start) / span);
    const carry = share < 1 ? clamp01((y - carryStart) / carrySpan) : p;
    const reveal = clamp01((p - 0.06) / 0.3);
    const aspect = p < 0.1 ? "0" : p < 0.4 ? "1" : p < 0.7 ? "2" : "3";
    prop("--p", p.toFixed(4));
    prop("--scene-reveal", reveal.toFixed(3));
    prop("--scene-carry", carry.toFixed(3));
    if (section.dataset.sceneAspect !== aspect) section.dataset.sceneAspect = aspect;
    if (copy) {
      const faded = String(carry > 0.46);
      if (copy.dataset.faded !== faded) copy.dataset.faded = faded;
    }
  };

  const onScroll = () => {
    if (!raf) raf = requestAnimationFrame(update);
  };

  const sync = () => {
    const want = on && visible && !document.hidden;
    if (want && !listening) {
      listening = true;
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    } else if (!want && listening) {
      listening = false;
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    }
  };

  const remeasure = () => {
    if (!on || rafResize) return;
    rafResize = requestAnimationFrame(() => {
      rafResize = 0;
      measure();
      update();
    });
  };

  const enable = () => {
    if (on || destroyed) return;
    on = true;
    section.dataset.scene = "on";
    measure();
    update();
    sync();
  };

  const disable = () => {
    if (!on) return;
    on = false;
    sync();
    if (rafResize) cancelAnimationFrame(rafResize);
    rafResize = 0;
    delete section.dataset.scene;
    delete section.dataset.sceneAspect;
    copy?.removeAttribute("data-faded");
    for (const name of Object.keys(cache)) {
      section.style.removeProperty(name);
      delete cache[name];
    }
  };

  const evaluate = () => (blocked() ? disable() : enable());
  const onVisibility = () => sync();

  const io = new IntersectionObserver(
    (entries) => {
      visible = entries.some((e) => e.isIntersecting);
      sync();
    },
    { rootMargin: "120px 0px" },
  );

  // Nach dem Bild-Decode und dem Load-Ereignis noch einmal messen (Fonts, Scrollbars).
  const afterLoad = () => remeasure();
  img?.decode().catch(() => {}).then(afterLoad);
  if (document.readyState === "complete") afterLoad();
  else window.addEventListener("load", afterLoad, { once: true });

  evaluate();
  io.observe(section);
  reduce.addEventListener("change", evaluate);
  small.addEventListener("change", evaluate);
  net?.addEventListener?.("change", evaluate);
  document.addEventListener("visibilitychange", onVisibility);
  window.addEventListener("resize", remeasure, { passive: true });

  return () => {
    if (destroyed) return;
    destroyed = true;
    disable();
    io.disconnect();
    reduce.removeEventListener("change", evaluate);
    small.removeEventListener("change", evaluate);
    net?.removeEventListener?.("change", evaluate);
    document.removeEventListener("visibilitychange", onVisibility);
    window.removeEventListener("resize", remeasure);
    window.removeEventListener("load", afterLoad);
  };
}
