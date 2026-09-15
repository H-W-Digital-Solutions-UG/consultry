import { useEffect, useState, type MouseEvent } from "react";
import { Button } from "./Button";
import { track } from "@/lib/track";
import { scrollToWaitlist } from "@/lib/sectionNavigation";

/**
 * Top bar: transparent over the dark hero, dark glass once the page scrolls.
 * The waitlist link is a text link until the hero CTA has left the viewport
 * then becomes a compact button once that action leaves the viewport.
 */
export function Nav({ variant }: { variant: string }) {
  const [glass, setGlass] = useState(false);
  const [pill, setPill] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setGlass(window.scrollY > 24);
    };
    const cta = document.querySelector("[data-hero-cta]");
    const observer = new IntersectionObserver(([entry]) => {
      setPill(!entry.isIntersecting && entry.boundingClientRect.bottom <= 64);
    }, { rootMargin: "-64px 0px 0px" });
    if (cta) observer.observe(cta);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, [variant]);
  const jump = (e?: MouseEvent) => {
    e?.preventDefault();
    track({ name: "cta_click", variant, location: "nav" });
    scrollToWaitlist();
  };
  return (
    <div
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-(--duration-normal) ${
        glass ? "border-b border-hair-dark bg-surface-hero/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:px-9 lg:px-16" aria-label="Hauptnavigation">
        <a href="/" className="flex items-center gap-2.5 text-on-dark" aria-label="Consultry Startseite">
          <span className="logo-mark inline-block size-6 rounded-[7px]" aria-hidden="true" />
          <span className="text-lg font-semibold tracking-tight">Consultry</span>
        </a>
        {pill ? (
          <Button variant="primary" size="sm" onClick={() => jump()}>
            Warteliste
          </Button>
        ) : (
          <a href="#warteliste" onClick={jump} className="text-sm font-medium text-on-dark underline-offset-4 hover:underline">
            Warteliste
          </a>
        )}
      </nav>
    </div>
  );
}
