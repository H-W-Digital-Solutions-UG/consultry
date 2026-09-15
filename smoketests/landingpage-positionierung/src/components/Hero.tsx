import { useEffect, useRef, type MouseEvent } from "react";
import { track } from "@/lib/track";
import { HeroSmokeObject } from "./HeroSmokeObject";
import { HeroInsights } from "./HeroInsights";
import { WaitlistProof } from "./WaitlistProof";
import { scrollToSection, scrollToWaitlist } from "@/lib/sectionNavigation";
import "@/styles/hero.css";

const COMPOSITIONS: Record<string, { lines: string[]; caption: string }> = {
  corpus: { lines: ["Vom ersten Dokument", "an nutzbar."], caption: "Ein Dokument. Der Anfang von mehr." },
  brand: { lines: ["Eure Sprache. Eure Vorlagen.", "Eure Freigaben."], caption: "Drei Perspektiven. Eine stimmige Unterlage." },
  ledger: { lines: ["Viele Agenten.", "Ein gemeinsamer Stand."], caption: "Wissen verbinden. Gemeinsam weiterarbeiten." },
  brain: { lines: ["Das Wissen der ganzen Firma", "arbeitet mit."], caption: "Wissen im Zusammenhang." },
  access: { lines: ["Berechtigungen gelten", "für Agenten wie für Menschen."], caption: "Rechte gelten bei jedem Abruf." },
};

function HeroPicture({ variant }: { variant: string }) {
  const artwork = variant === "corpus" || variant === "brand" || variant === "ledger" ? `${variant}-scene` : variant;
  return <img src={`/hero/${artwork}-720.webp`} srcSet={`/hero/${artwork}-480.webp 480w, /hero/${artwork}-720.webp 720w`} sizes="(min-width: 1024px) 720px, (min-width: 640px) 560px, 440px" alt="" width={720} height={720} loading="eager" fetchPriority="high" decoding="async" />;
}

export interface HeroProps {
  variant: string;
  eyebrow: string;
  title: string;
  lede: string;
  cta: string;
  secondary: string;
  trust: Array<{ label: string; fact: string; detail: string }>;
}

/** One composed scene; native scrolling changes depth, never the reading order. */
export function Hero({ variant, eyebrow, title, lede, cta, secondary, trust }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const composition = COMPOSITIONS[variant];
  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = true;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const progress = motion.matches ? 0 : Math.min(1, Math.max(0, -rect.top / rect.height));
      section.style.setProperty("--hero-progress", progress.toFixed(4));
    };
    const schedule = () => {
      if (visible && !document.hidden && !frame) frame = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) schedule(); });
    observer.observe(section);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", update);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", update);
    };
  }, [variant]);
  const toWaitlist = (event: MouseEvent) => {
    event.preventDefault();
    track({ name: "cta_click", variant, location: "hero" });
    scrollToWaitlist();
  };
  const toHow = (event: MouseEvent) => {
    event.preventDefault();
    track({ name: "cta_click", variant, location: "hero_secondary" });
    scrollToSection("so-funktioniert-es");
  };
  return (
    <section ref={ref} className="immersive-hero" data-variant={variant} data-scroll-scene>
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="hero-stage">
        <header className="hero-copy">
          <p className="hero-eyebrow"><span aria-hidden="true" />{eyebrow}</p>
          <h1 className="hero-headline" aria-label={title}>
            {(composition?.lines ?? [title]).map((line, index) => <span key={line} aria-hidden="true" className={index === (composition?.lines.length ?? 1) - 1 ? "hero-headline__last" : undefined}>{line}</span>)}
          </h1>
        </header>

        <div className="hero-scene" aria-hidden="true">
          <div className="hero-ground" />
          <svg className="hero-connections" viewBox="0 0 1440 1120" fill="none" preserveAspectRatio="none">
            <path d="M 300 484 H 400 L 522 566" />
            <path d="M 954 550 L 1030 484 H 1140" />
            <circle cx="522" cy="566" r="3" />
            <circle cx="954" cy="550" r="3" />
          </svg>
          <div className="hero-art">
            {variant === "corpus" || variant === "brand" || variant === "ledger" ? <HeroSmokeObject variant={variant} poster={<HeroPicture variant={variant} />} /> : <div className="hero-static-art"><HeroPicture variant={variant} /></div>}
          </div>
          <p className="hero-caption">{composition?.caption}</p>
        </div>

        <div className="hero-context">
          <p className="hero-lede">{lede}</p>
          <HeroInsights variant={variant} />
        </div>

        <div className="hero-conversion">
          <div className="hero-actions">
            <a href="#warteliste" onClick={toWaitlist} className="hero-cta" data-hero-cta>{cta}<span aria-hidden="true">↗</span></a>
            <a href="#so-funktioniert-es" onClick={toHow} className="hero-secondary">{secondary}<span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-proof"><span className="hero-proof__mark" aria-hidden="true">100</span><div><WaitlistProof /><p className="hero-proof__note">E-Mail zur nächsten Erprobungsrunde. Jederzeit abmelden.</p></div></div>
        </div>
        <div className="hero-footnote">
          <a href="#so-funktioniert-es" onClick={toHow} className="hero-discover"><span aria-hidden="true">↓</span> Im Detail entdecken</a>
          <ul aria-label="Betriebsgrundsätze">{trust.map((item) => <li key={item.label}>{item.fact}</li>)}</ul>
        </div>
        <span className="hero-continuation" aria-hidden="true" />
      </div>
    </section>
  );
}
