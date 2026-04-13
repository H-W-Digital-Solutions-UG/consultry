import Link from "next/link";
import { SectionHeader } from "@/components/marketing/SectionHeader";

export type InternalLinkCard = {
  href: string;
  label: string;
  body: string;
};

type InternalLinkGridProps = {
  eyebrow: string;
  title: string;
  body?: string;
  links: readonly InternalLinkCard[];
};

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
              className="surface-panel group rounded-[var(--consultry-radius-xl)] px-5 py-6 transition-transform duration-300 hover:-translate-y-1"
              href={link.href}
              key={link.href}
            >
              <p className="text-[1.125rem] font-semibold text-[var(--consultry-text-primary)] transition group-hover:text-[var(--consultry-brand-warm)]">
                {link.label}
              </p>
              <p className="body-md mt-3">{link.body}</p>
              <span className="mt-5 inline-flex text-sm font-medium text-[var(--consultry-brand-warm)]">
                Mehr erfahren
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
