import type { Metadata } from "next";
import { WaitlistSignupFlow } from "@/components/marketing/WaitlistSignupFlow";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Warteliste | Frueher Zugang fuer DACH-Beratungen",
    description:
      "Sichern Sie sich fruehen Zugang zu Consultry, Produkt-Updates und priorisierten Zugang zu Pilotplaetzen fuer DACH-Beratungen.",
    path: "/warteliste",
    noindex: true,
    keywords: [
      "Consultry Warteliste",
      "Frueher Zugang Beratungssoftware",
      "AI-native Steuerungsplattform Beratungen",
      "Software fuer IT- und Digitalisierungsberatungen",
    ],
  });
}

export default function WaitlistPage() {
  const qualificationEnabled = Boolean(process.env.LOOPS_API_KEY?.trim());

  return (
    <main>
      <WaitlistSignupFlow qualificationEnabled={qualificationEnabled} />
    </main>
  );
}
