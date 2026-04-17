import type { Metadata } from "next";
import { WaitlistThankYouView } from "@/components/marketing/WaitlistThankYouView";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Danke · Warteliste",
    description:
      "Ihre Wartelisten-Anmeldung ist eingegangen. Bestätigen Sie jetzt Ihre Anmeldung über den Link in Ihrer E-Mail.",
    path: "/warteliste/danke",
    noindex: true,
  });
}

export default function WaitlistThanksPage() {
  const qualificationEnabled = Boolean(process.env.LOOPS_API_KEY?.trim());

  return <WaitlistThankYouView qualificationEnabled={qualificationEnabled} />;
}
