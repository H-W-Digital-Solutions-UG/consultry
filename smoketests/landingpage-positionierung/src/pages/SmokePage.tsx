import { useEffect, useRef, type ReactNode } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Evidence } from "@/components/Evidence";
import { Steps } from "@/components/Steps";
import { Boundaries } from "@/components/Boundaries";
import { DataPaths } from "@/components/DataPaths";
import { CtaBand } from "@/components/CtaBand";
import { ProductSurface } from "@/components/ProductSurface";
import { VariantSwitcher } from "@/components/VariantSwitcher";
import { EYEBROW, TRUST_ITEMS } from "@/content/shared";
import type { PageContent } from "@/content/types";
import { track, type ScrollDepth } from "@/lib/track";
import { scrollToWaitlist } from "@/lib/sectionNavigation";

const DEPTHS: ScrollDepth[] = [25, 50, 75];


/**
 * One composed opening joins the visual promise directly to its product example.
 * The following paper sections explain evidence and boundaries; signup closes the story.
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
    scrollToWaitlist();
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
          trust={TRUST_ITEMS}
        />

        <Section surface="dark" className="story-section story-section--how scene-continuation" id="so-funktioniert-es" title={how.title} lede={how.lede}>
          <Steps steps={how.steps} sequence={how.sequence} />
          <ProductSurface variant={variant} onCta={toWaitlistHow}>
            {widget}
          </ProductSurface>
        </Section>

        <Section surface="light" className="story-section story-section--evidence border-t-0">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <div>
              <h2 className="t-display-lg max-w-[20ch]">{problem.title}</h2>
              {problem.lede && <p className="t-lede mt-4 max-w-[44ch] text-ink-soft">{problem.lede}</p>}
            </div>
            <Evidence stats={problem.stats} />
          </div>
        </Section>

        <Section surface="light" className="story-section story-section--paths">
          <DataPaths />
        </Section>

        <Section surface="light" className="story-section story-section--boundaries" title={boundaries.title}>
          <Boundaries items={boundaries.items} />
        </Section>

        <CtaBand variant={variant} title={band.title} text={band.text} />
      </main>
      <VariantSwitcher />
    </>
  );
}
