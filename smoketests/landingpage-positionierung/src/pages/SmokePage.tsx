import { useEffect, useRef, type ReactNode } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Evidence } from "@/components/Evidence";
import { Steps } from "@/components/Steps";
import { Kpis } from "@/components/Kpis";
import { Boundaries } from "@/components/Boundaries";
import { DataPaths } from "@/components/DataPaths";
import { CtaBand } from "@/components/CtaBand";
import { ProductSurface } from "@/components/ProductSurface";
import { AmbientFilm } from "@/components/AmbientFilm";
import { VariantSwitcher } from "@/components/VariantSwitcher";
import { EYEBROW, PATHS_SECTION, TRUST_ITEMS } from "@/content/shared";
import type { PageContent } from "@/content/types";
import { track, type ScrollDepth } from "@/lib/track";

const DEPTHS: ScrollDepth[] = [25, 50, 75];


/**
 * One smoke variant (hero: claim + brand object, no UI mock). Surfaces top→bottom: hero dark → light (problem) →
 * warm (how + widget) → dark (paths) → light (boundaries) → hero dark (waitlist + footer).
 * Never two identical surfaces in a row.
 */
export function SmokePage({ content, widget }: { content: PageContent; widget: ReactNode }) {
  const { variant, meta, hero, problem, how, boundaries, band } = content;
  const viewed = useRef<string | null>(null);

  useEffect(() => {
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    // One page_view per variant, also under StrictMode's double-invoked effects.
    if (viewed.current !== variant) {
      viewed.current = variant;
      track({ name: "page_view", variant, path: window.location.pathname, referrer: document.referrer });
    }
    window.scrollTo({ top: 0 });
  }, [variant, meta]);

  // Scroll depth 25/50/75, each once per variant mount.
  useEffect(() => {
    const fired = new Set<ScrollDepth>();
    const onScroll = () => {
      const ratio = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      for (const d of DEPTHS) {
        if (!fired.has(d) && ratio >= d / 100) {
          fired.add(d);
          track({ name: "scroll_depth", variant, depth: d });
        }
      }
      if (fired.size === DEPTHS.length) window.removeEventListener("scroll", onScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const toWaitlistHow = () => {
    track({ name: "cta_click", variant, location: "how" });
    document.getElementById("warteliste")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Nav variant={variant} />
      <main>
        <Hero
          variant={variant}
          eyebrow={EYEBROW}
          title={hero.title}
          lede={hero.lede}
          cta={hero.cta}
          secondary={hero.secondary}
          h1MaxCh={hero.h1MaxCh}
          trust={TRUST_ITEMS}
        />

        <Section surface="light" className="border-t-0">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <div>
              <h2 className="t-display-lg max-w-[20ch]">{problem.title}</h2>
              {problem.lede && <p className="t-lede mt-4 max-w-[44ch] text-ink-soft">{problem.lede}</p>}
            </div>
            <Evidence stats={problem.stats} />
          </div>
        </Section>

        <Section surface="warm" id="so-funktioniert-es" title={how.title} lede={how.lede}>
          <Steps steps={how.steps} sequence={how.sequence} />
          <Kpis items={how.kpis} />
          <ProductSurface variant={variant} onCta={toWaitlistHow}>
            {widget}
          </ProductSurface>
        </Section>

        {/* Betriebswege on the dark surface, the variant's object film as an ambient background element */}
        <section className="relative overflow-hidden bg-surface-hero py-[clamp(4rem,8vw,6.5rem)] text-on-dark">
          <AmbientFilm variant={variant} className="object-[70%_50%] opacity-80 md:object-[78%_50%]" />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(30,27,24,0.96)_0%,rgba(30,27,24,0.85)_38%,rgba(30,27,24,0.25)_70%,rgba(30,27,24,0.15)_100%)]" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,rgba(30,27,24,0)_0%,rgba(30,27,24,0.9)_100%)]" />
          <div className="relative mx-auto max-w-[1200px] px-4 md:px-8">
            <header className="mb-10 max-w-[34rem]">
              <h2 className="t-display-lg">{PATHS_SECTION.title}</h2>
              <p className="t-lede mt-4 text-on-dark-soft">{PATHS_SECTION.lede}</p>
            </header>
            <DataPaths />
          </div>
        </section>

        <Section surface="light" title={boundaries.title}>
          <Boundaries items={boundaries.items} />
        </Section>

        <CtaBand variant={variant} title={band.title} text={band.text} />
      </main>
      <VariantSwitcher />
    </>
  );
}
