/** Native navigation: short moves may ease; distant CTAs arrive directly. */
function navigate(target: HTMLElement, focus: HTMLElement | null) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const distant = Math.abs(target.getBoundingClientRect().top) > window.innerHeight * 1.5;
  target.scrollIntoView({ behavior: reduced || distant ? "instant" : "smooth", block: "start" });
  if (focus) {
    if (focus.tabIndex < 0) focus.setAttribute("tabindex", "-1");
    focus.focus({ preventScroll: true });
  }
}

export function scrollToSection(id: string, focusSelector?: string) {
  const target = document.getElementById(id);
  if (target) navigate(target, target.querySelector<HTMLElement>(focusSelector ?? "h2, h3"));
}

/** Put the actual form in view on mobile, including after a successful signup. */
export function scrollToWaitlist() {
  const target = document.querySelector<HTMLElement>("[data-signup-panel]");
  if (target) navigate(target, target.querySelector<HTMLElement>("[data-signup-heading]"));
  else scrollToSection("warteliste", "[data-signup-heading]");
}
