import type { Metadata } from "next";
import { AboutNarrative } from "@/components/marketing/AboutNarrative";
import { CTABand } from "@/components/marketing/CTABand";
import { HeroMinimal } from "@/components/marketing/HeroMinimal";
import { MotionReveal } from "@/components/marketing/MotionReveal";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { TeamCard } from "@/components/marketing/TeamCard";
import { aboutContent } from "@/lib/content/de/about";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Über Consultry",
    description:
      "Consultry baut das Betriebssystem fuer moderne Beratungshaeuser im DACH-Raum - mit einem Team aus Consulting, Security und Produkt.",
    path: "/unternehmen",
  });
}

export default function UnternehmenPage() {
  return (
    <main>
      <HeroMinimal
        body={aboutContent.hero.body}
        align="center"
        overline={aboutContent.hero.overline}
        title={aboutContent.hero.title}
      />

      <section className="section-shell-tight">
        <div className="content-shell">
          <MotionReveal>
            <SectionHeader
              align="center"
              body={aboutContent.team.body}
              overline={aboutContent.team.overline}
              title={aboutContent.team.title}
            />
          </MotionReveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {aboutContent.team.members.map((member, index) => (
              <MotionReveal delay={0.06 * index} key={member.name} y={28}>
                <TeamCard
                  focus={member.focus}
                  image={member.image}
                  name={member.name}
                  role={member.role}
                />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <AboutNarrative
        overline={aboutContent.narrative.overline}
        paragraphs={aboutContent.narrative.paragraphs}
        proofRail={aboutContent.narrative.proofRail}
        title={aboutContent.narrative.title}
      />

      <CTABand
        body={aboutContent.cta.body}
        eyebrow={aboutContent.cta.eyebrow}
        primaryCta={aboutContent.cta.primaryCta}
        title={aboutContent.cta.title}
      />
    </main>
  );
}
