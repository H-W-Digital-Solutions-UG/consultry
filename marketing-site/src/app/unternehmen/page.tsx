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
    title: "Ueber Consultry | Team und DACH-Fokus",
    description:
      "Consultry baut das AI-native Operating System fuer DACH-IT- und Digitalisierungsberatungen - mit Fokus auf Consulting-Workflows, Security und operative Steuerung.",
    path: "/unternehmen",
    keywords: [
      "Consultry Team",
      "Software fuer Beratungsunternehmen",
      "DACH Beratungen",
      "Operating System Beratung",
    ],
  });
}

export default function UnternehmenPage() {
  return (
    <main>
      <JsonLd
        data={buildAboutPageJsonLd({
          title: "Ueber Consultry",
          description:
            "Consultry baut das AI-native Operating System fuer DACH-IT- und Digitalisierungsberatungen.",
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
        body="Die wichtigsten Antworten definieren Produkt, Zielgruppe und die Abgrenzung gegen Standard-CRMs vor dem Blick auf Team und Geschichte."
        eyebrow="KURZ ERKLAERT"
        items={homepageContent.answers}
        title="Was Consultry fuer DACH-Beratungen konkret ist"
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
