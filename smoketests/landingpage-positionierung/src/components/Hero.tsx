import type { MouseEvent } from "react";
import { track } from "@/lib/track";

/**
 * One generated brand object per positioning (GPT Image 2.5 via Higgsfield,
 * transparent PNG → AVIF/WebP at 720/480px, ≈30/16 KB). Purely decorative:
 * stands free above the card, which overlaps only the object's shadow zone.
 * Fixed box so it never shifts layout; eager + high priority (first viewport).
 */
function HeroObject({ variant }: { variant: string }) {
  const base = `/hero/${variant}`;
  return (
    <picture aria-hidden="true" className="pointer-events-none mx-auto block w-[260px] sm:w-[340px] lg:w-[480px]">
      <source type="image/avif" srcSet={`${base}-480.avif 480w, ${base}-720.avif 720w`} sizes="(min-width: 1024px) 480px, 340px" />
      <source type="image/webp" srcSet={`${base}-480.webp 480w, ${base}-720.webp 720w`} sizes="(min-width: 1024px) 480px, 340px" />
      <img src={`${base}-480.png`} alt="" width={720} height={720} loading="eager" fetchPriority="high" decoding="async" className="h-auto w-full" />
    </picture>
  );
}

export interface HeroProps {
  variant: string;
  eyebrow: string;
  title: string;
  lede: string;
  cta: string;
  secondary: string;
  /** Max headline measure in ch; pages with long compounds pass a smaller value. */
  h1MaxCh?: number;
  trust: Array<{ label: string; fact: string; detail: string }>;
}

/**
 * Hero / Primary (Dark): the Consultry warm-dark surface with its amber glow,
 * eyebrow + H1 + one-sentence lede + one gradient pill + one text link on the
 * left, the variant's brand object on the right, then the three operating facts
 * as a labelled hairline strip (Linear / Popcorn pattern). No UI mock in the
 * hero; the product surface lives in "So funktioniert es". No entrance motion.
 */
export function Hero({ variant, eyebrow, title, lede, cta, secondary, h1MaxCh = 16, trust }: HeroProps) {
  const toWaitlist = () => {
    track({ name: "cta_click", variant, location: "hero" });
    document.getElementById("warteliste")?.scrollIntoView({ behavior: "smooth" });
  };
  const toHow = (e: MouseEvent) => {
    e.preventDefault();
    track({ name: "cta_click", variant, location: "hero_secondary" });
    document.getElementById("so-funktioniert-es")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="hero-surface overflow-hidden pb-16 pt-[calc(4rem+clamp(3.5rem,8vw,7rem))] md:pb-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <div className="grid gap-10 lg:min-h-[29rem] lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-16">
          <div>
            <p className="t-eyebrow text-warm">{eyebrow}</p>
            <h1 className="t-display-xl mt-4 text-on-dark" style={{ maxWidth: `${h1MaxCh}ch` }}>
              {title}
            </h1>
            <p className="t-lede mt-5 max-w-[30rem] text-on-dark-soft">{lede}</p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
              <button
                type="button"
                onClick={toWaitlist}
                className="btn-hero-gradient inline-flex h-13 w-full items-center justify-center rounded-full px-7 text-base whitespace-nowrap transition-[filter] duration-(--duration-fast) sm:w-auto"
              >
                {cta}
              </button>
              <a href="#so-funktioniert-es" onClick={toHow} className="link-arrow-dark inline-flex min-h-11 items-center sm:min-h-0">
                {secondary} →
              </a>
            </div>

          </div>

          <div className="min-w-0">
            <HeroObject variant={variant} />
          </div>
        </div>

        {/* the three operating facts as a labelled strip: mono index + label in warm, the fact, one line of detail */}
        <ul className="mt-12 grid grid-cols-1 divide-y divide-hair-dark border-t border-hair-dark md:mt-14 md:grid-cols-3 md:divide-x md:divide-y-0" aria-label="Betriebsgrundsätze">
          {trust.map((t, i) => (
            <li key={t.fact} className="py-5 md:py-6 md:pr-8 md:pl-8 md:first:pl-0">
              <p className="app-mono text-warm" style={{ color: "#e8913a" }}>
                {String(i + 1).padStart(2, "0")} · {t.label}
              </p>
              <p className="mt-2 text-[17px] leading-snug font-medium text-on-dark">{t.fact}</p>
              <p className="t-body-sm mt-1 text-on-dark-soft">{t.detail}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
