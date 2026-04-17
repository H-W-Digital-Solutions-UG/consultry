import type { Metadata } from "next";
import { AboutNarrative } from "@/components/marketing/AboutNarrative";
import { AnswerHighlights } from "@/components/marketing/AnswerHighlights";
import { CTABand } from "@/components/marketing/CTABand";
import { HeroMinimal } from "@/components/marketing/HeroMinimal";
import { JsonLd } from "@/components/marketing/JsonLd";
import { MotionReveal } from "@/components/marketing/MotionReveal";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { TeamCard } from "@/components/marketing/TeamCard";
import { aboutContent } from "@/lib/content/de/about";
import { homepageContent } from "@/lib/content/de/homepage";
import { buildPageMetadata } from "@/lib/seo";
import { buildAboutPageJsonLd } from "@/lib/structured-data";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Über Consultry · Team und DACH-Fokus",
    description:
      "Drei Gründer aus Berlin. Consulting, Security, Produkt. Wir bauen den operativen AI-Begleiter für IT- und Digitalisierungsberatungen im DACH-Raum.",
    path: "/unternehmen",
    keywords: [
      "Consultry Team",
      "Gründer Berlin Consulting",
      "DACH Beratungen AI",
      "Operativer AI-Begleiter Beratung",
    ],
  });
}

export default function UnternehmenPage() {
  return (
    <main>
      <JsonLd
        data={buildAboutPageJsonLd({
          title: "Über Consultry",
          description:
            "Consultry ist der operative AI-Begleiter für IT- und Digitalisierungsberatungen im DACH-Raum.",
          path: "/unternehmen",
        })}
      />
      <HeroMinimal
        body={aboutContent.hero.body}
        align="center"
        overline={aboutContent.hero.overline}
        title={aboutContent.hero.title}
      />

      <AnswerHighlights
        body="Drei Antworten — Produkt, Zielgruppe und Abgrenzung — bevor wir auf Team und Geschichte schauen."
        eyebrow="KURZ ERKLÄRT"
        items={homepageContent.answers}
        title="Was Consultry ist — und was nicht."
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
