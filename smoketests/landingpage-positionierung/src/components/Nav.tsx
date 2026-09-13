import { useEffect, useState, type MouseEvent } from "react";
import { Button } from "./Button";
import { track } from "@/lib/track";

/**
 * Top bar: transparent over the dark hero, dark glass once the page scrolls.
 * The waitlist link is a text link until the hero CTA has left the viewport
 * (≈560px), then it becomes the only other pill on the page.
 */
export function Nav({ variant }: { variant: string }) {
  const [glass, setGlass] = useState(false);
  const [pill, setPill] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setGlass(window.scrollY > 24);
      setPill(window.scrollY > 560);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const jump = (e?: MouseEvent) => {
    e?.preventDefault();
    track({ name: "cta_click", variant, location: "nav" });
    document.getElementById("warteliste")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-(--duration-normal) ${
        glass ? "border-b border-hair-dark bg-surface-hero/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 md:px-8" aria-label="Hauptnavigation">
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
