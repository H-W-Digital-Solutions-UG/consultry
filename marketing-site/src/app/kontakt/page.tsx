import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { JsonLd } from "@/components/marketing/JsonLd";
import { MarketingCtaButton } from "@/components/marketing/MarketingCtaButton";
import { Button } from "@/components/ui/Button";
import { companyProfile } from "@/lib/company";
import { buildPageMetadata } from "@/lib/seo";
import { buildContactPageJsonLd } from "@/lib/structured-data";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Kontakt · Consultry",
    description:
      "Sprechen Sie mit dem Consultry-Team. Für Pilotkunden aus DACH-Beratungen, Investoren, Presse und direkte Rückfragen.",
    path: "/kontakt",
    keywords: [
      "Consultry Kontakt",
      "Pilotkunden DACH Beratungen",
      "Investoren Consultry",
    ],
  });
}

const prepChecklist = [
  "Größe Ihrer Beratung und aktuelles Delivery-Setup",
  "Welche Tools Sie heute für Pipeline, Staffing, Wissen und Delivery nutzen",
  "Welcher operative Engpass Sie zuerst ins Stolpern bringt",
  "Ob Pilotkunde, Investor-Gespräch oder inhaltliche Rückfrage im Vordergrund steht",
] as const;

const contactReasons = [
  "Pilotkunde werden und Consultry aktiv mitgestalten",
  "Investor-Gespräch oder One-Pager anfordern",
  "Fragen zu DSGVO, EU-Hosting, AI Act oder BetrVG",
  "Presse, Partnerschaften und organisatorische Rückfragen",
] as const;

export default function KontaktPage() {
  return (
    <>
      <JsonLd
        data={buildContactPageJsonLd({
          title: "Kontakt",
          description:
            "Kontakt für Pilotkunden, Investoren, Presse und Fragen zu Consultry.",
          path: "/kontakt",
        })}
      />

      <main>
        <section className="section-shell relative overflow-hidden pt-8 sm:pt-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(240,168,94,0.18),transparent_28%),radial-gradient(circle_at_76%_10%,rgba(155,89,181,0.12),transparent_24%),linear-gradient(180deg,rgba(191,83,71,0.08),transparent_55%)]" />
          <div className="content-shell relative">
            <div className="grid gap-10 xl:grid-cols-[minmax(0,1.08fr)_minmax(22rem,26rem)] xl:items-start xl:gap-14">
              <div className="max-w-4xl">
                <p className="eyebrow">KONTAKT</p>
                <h1 className="display-section mt-5 max-w-[13ch] text-balance text-[var(--consultry-text-primary)] sm:text-[clamp(3.1rem,5.4vw,4.6rem)]">
                  Sprechen Sie mit dem Consultry-Team.
                </h1>
                <p className="body-lg mt-6 max-w-[42rem]">
                  Wir sprechen mit Managing Partnern, BD- und Delivery-Leads aus IT- und
                  Digitalisierungsberatungen im DACH-Raum. Und mit Investoren, die Consultry aus
                  der Nähe sehen wollen. Schreiben Sie uns. Wir melden uns binnen 48 Stunden.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <MarketingCtaButton
                    href="/warteliste"
                    tracking={{
                      ctaId: "contact_hero_waitlist",
                      label: "Auf die Warteliste",
                      location: "contact_hero_waitlist",
                    }}
                  >
                    Auf die Warteliste
                  </MarketingCtaButton>
                  <Button
                    data-analytics-event="contact_click"
                    data-analytics-location="contact_hero_email"
                    data-analytics-method="email"
                    href={`mailto:${companyProfile.legalEmail}`}
                    variant="secondary"
                  >
                    Allgemeine Anfrage
                  </Button>
                </div>

                <div className="mt-10 grid gap-10 border-t border-[rgba(255,255,255,0.08)] pt-8 lg:grid-cols-2 lg:gap-12">
                  <section>
                    <p className="eyebrow text-[var(--consultry-brand-warm)]">
                      Wofür wir die richtige Anlaufstelle sind
                    </p>
                    <ul className="mt-5 space-y-3.5">
                      {contactReasons.map((item) => (
                        <li
                          className="flex items-start gap-3 text-[15px] leading-[1.65] text-[var(--consultry-text-secondary)]"
                          key={item}
                        >
                          <span className="mt-[0.42rem] h-1.5 w-1.5 rounded-full bg-[var(--consultry-brand-warm)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <p className="eyebrow text-[var(--consultry-brand-warm)]">
                      Für eine gute Erstnachricht
                    </p>
                    <ul className="mt-5 space-y-3.5">
                      {prepChecklist.map((item) => (
                        <li
                          className="flex items-start gap-3 text-[15px] leading-[1.65] text-[var(--consultry-text-secondary)]"
                          key={item}
                        >
                          <span className="mt-[0.42rem] h-1.5 w-1.5 rounded-full bg-[var(--consultry-brand-coral)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>

              <aside className="surface-panel rounded-[28px] px-6 py-6 sm:px-7 xl:sticky xl:top-28">
                <p className="eyebrow">Direkter Kontakt</p>
                <p className="mt-4 text-[15px] leading-[1.7] text-[var(--consultry-text-muted)]">
                  {companyProfile.brandName} ist ein Angebot der {companyProfile.legalName}. Hier
                  finden Sie die schnellsten Wege für Warteliste, Unternehmensanfragen und direkte
                  Rückfragen.
                </p>

                <div className="mt-7 space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4.5 w-4.5 text-[var(--consultry-brand-coral)]" />
                    <div>
                      <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--consultry-text-faint)]">
                        Unternehmen
                      </p>
                      <a
                        className="mt-1 inline-flex text-[15px] text-[var(--consultry-text-primary)] transition hover:text-[var(--consultry-brand-warm)]"
                        data-analytics-event="contact_click"
                        data-analytics-location="contact_sidebar_email"
                        data-analytics-method="email"
                        href={`mailto:${companyProfile.legalEmail}`}
                      >
                        {companyProfile.legalEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4.5 w-4.5 text-[var(--consultry-brand-warm)]" />
                    <div>
                      <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--consultry-text-faint)]">
                        Telefon
                      </p>
                      <a
                        className="mt-1 inline-flex text-[15px] text-[var(--consultry-text-primary)] transition hover:text-[var(--consultry-brand-warm)]"
                        data-analytics-event="contact_click"
                        data-analytics-location="contact_sidebar_phone"
                        data-analytics-method="phone"
                        href={companyProfile.phoneHref}
                      >
                        {companyProfile.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4.5 w-4.5 text-[var(--consultry-brand-coral)]" />
                    <div>
                      <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--consultry-text-faint)]">
                        Adresse
                      </p>
                      <p className="mt-1 text-[15px] leading-[1.65] text-[var(--consultry-text-primary)]">
                        {companyProfile.legalName}
                        <br />
                        {companyProfile.address.street}
                        <br />
                        {companyProfile.address.postalCode} {companyProfile.address.city}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-[rgba(255,255,255,0.08)] pt-6">
                  <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--consultry-text-faint)]">
                    Rechtliches
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--consultry-text-primary)] transition hover:text-[var(--consultry-brand-warm)]"
                      href="/legal/impressum"
                    >
                      Impressum
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link
                      className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--consultry-text-primary)] transition hover:text-[var(--consultry-brand-warm)]"
                      href="/legal/datenschutz"
                    >
                      Datenschutz
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
