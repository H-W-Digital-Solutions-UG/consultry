import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/marketing/SectionHeader";

type InternalLinkCardImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export type InternalLinkCard = {
  href: string;
  label: string;
  body: string;
  image?: InternalLinkCardImage;
};

type InternalLinkGridProps = {
  eyebrow: string;
  title: string;
  body?: string;
  links: readonly InternalLinkCard[];
};

type LinkCardPlaceholderTheme = {
  eyebrow: string;
  accent: string;
  glow: string;
  ring: string;
};

const linkCardPlaceholderThemes: Record<string, LinkCardPlaceholderTheme> = {
  "account-growth": {
    eyebrow: "Account Growth",
    accent: "#f0a85e",
    glow: "rgba(240, 168, 94, 0.34)",
    ring: "rgba(240, 168, 94, 0.26)",
  },
  "staffing-forecasting": {
    eyebrow: "Staffing",
    accent: "#e8655a",
    glow: "rgba(232, 101, 90, 0.34)",
    ring: "rgba(232, 101, 90, 0.26)",
  },
  "knowledge-reuse": {
    eyebrow: "Knowledge Reuse",
    accent: "#b977d7",
    glow: "rgba(185, 119, 215, 0.34)",
    ring: "rgba(185, 119, 215, 0.26)",
  },
  "commercial-control": {
    eyebrow: "Commercial Control",
    accent: "#ca7168",
    glow: "rgba(202, 113, 104, 0.34)",
    ring: "rgba(202, 113, 104, 0.26)",
  },
  "consultry-vs-crm": {
    eyebrow: "Operating System",
    accent: "#e8913a",
    glow: "rgba(232, 145, 58, 0.34)",
    ring: "rgba(232, 145, 58, 0.26)",
  },
};

function toPlaceholderCode(label: string) {
  return label
    .split(/[\s&/.-]+/)
    .filter(Boolean)
    .map((segment) => segment[0]?.toUpperCase() ?? "")
    .join("")
    .slice(0, 3);
}

function getPlaceholderTheme(link: InternalLinkCard) {
  const slug = link.href.replace(/^\/produkt\//, "").split("#")[0];

  return (
    linkCardPlaceholderThemes[slug] ?? {
      eyebrow: "Produktbereich",
      accent: "#f0a85e",
      glow: "rgba(240, 168, 94, 0.34)",
      ring: "rgba(240, 168, 94, 0.26)",
    }
  );
}

function CardArtwork({ link }: { link: InternalLinkCard }) {
  if (link.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-[calc(var(--consultry-radius-xl)-12px)] border border-[var(--consultry-border-soft)] bg-[rgba(19,17,15,0.96)]">
        <Image
          alt={link.image.alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          fill
          sizes="(min-width: 1280px) 26vw, (min-width: 768px) 42vw, 100vw"
          src={link.image.src}
          style={{ objectPosition: link.image.objectPosition }}
        />
      </div>
    );
  }

  const theme = getPlaceholderTheme(link);
  const code = toPlaceholderCode(link.label);

  return (
    <div
      aria-hidden="true"
      className="relative aspect-[16/10] overflow-hidden rounded-[calc(var(--consultry-radius-xl)-12px)] border border-[var(--consultry-border-soft)] bg-[rgba(19,17,15,0.96)]"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 14% 18%, ${theme.glow} 0%, rgba(19,17,15,0) 40%), linear-gradient(150deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 34%, rgba(19,17,15,0.98) 100%)`,
        }}
      />
      <div
        className="absolute -right-6 bottom-[-28%] h-40 w-40 rounded-full border"
        style={{ borderColor: theme.ring }}
      />
      <div
        className="absolute right-8 top-8 h-20 w-20 rounded-full border"
        style={{ borderColor: theme.ring }}
      />
      <div
        className="absolute bottom-8 left-8 h-24 w-24 rounded-full"
        style={{ background: `radial-gradient(circle, ${theme.glow} 0%, rgba(19,17,15,0) 72%)` }}
      />
      <div className="absolute inset-x-0 top-[50%] border-t border-[rgba(255,255,255,0.06)]" />
      <div className="absolute left-5 top-5 inline-flex rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(19,17,15,0.72)] px-3 py-1 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--consultry-text-secondary)]">
        {theme.eyebrow}
      </div>
      <div className="absolute bottom-5 left-5">
        <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--consultry-text-faint)]">
          Visual
        </p>
        <p className="mt-2 text-[1.4rem] font-semibold tracking-[-0.02em] text-[var(--consultry-text-primary)]">
          {code}
        </p>
      </div>
      <div className="absolute bottom-5 right-5 flex items-center gap-2">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: theme.accent }}
        />
        <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--consultry-text-secondary)]">
          Platzhalter
        </span>
      </div>
    </div>
  );
}

export function InternalLinkGrid({
  eyebrow,
  title,
  body,
  links,
}: InternalLinkGridProps) {
  return (
    <section className="pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14">
      <div className="content-shell">
        <SectionHeader
          align="center"
          body={body}
          className="max-w-[48rem]"
          overline={eyebrow}
          title={title}
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {links.map((link) => (
            <Link
              className="surface-panel group flex h-full flex-col rounded-[var(--consultry-radius-xl)] p-3 transition-transform duration-300 hover:-translate-y-1"
              href={link.href}
              key={link.href}
            >
              <CardArtwork link={link} />

              <div className="flex flex-1 flex-col px-2 pb-3 pt-5">
                <p className="text-[1.125rem] font-semibold text-[var(--consultry-text-primary)] transition group-hover:text-[var(--consultry-brand-warm)]">
                  {link.label}
                </p>
                <p className="body-md mt-3">{link.body}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-[var(--consultry-brand-warm)]">
                  Mehr erfahren
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
