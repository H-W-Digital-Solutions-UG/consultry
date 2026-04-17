import type { Metadata } from "next";
import { WaitlistSignupFlow } from "@/components/marketing/WaitlistSignupFlow";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Warteliste · Consultry",
    description:
      "Consultry ist im Pre-Launch. Tragen Sie sich ein: als Erste zum Launch, und wenn Sie Pilotkunde werden wollen, direkt ins Gespräch mit dem Gründerteam.",
    path: "/warteliste",
    noindex: true,
    keywords: [
      "Consultry Warteliste",
      "Pilotkunden DACH Beratungen",
      "Operativer AI-Begleiter Consulting",
      "Pre-Launch IT-Beratung",
    ],
  });
}

export default function WaitlistPage() {
  return (
    <main>
      <WaitlistSignupFlow />
    </main>
  );
}
