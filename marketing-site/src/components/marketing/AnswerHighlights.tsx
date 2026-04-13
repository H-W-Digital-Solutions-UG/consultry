import Link from "next/link";
import { SectionHeader } from "@/components/marketing/SectionHeader";

export type AnswerHighlight = {
  question: string;
  answer: string;
  href?: string;
  linkLabel?: string;
};

type AnswerHighlightsProps = {
  eyebrow: string;
  title: string;
  body?: string;
  items: readonly AnswerHighlight[];
};

export function AnswerHighlights({
  eyebrow,
  title,
  body,
  items,
}: AnswerHighlightsProps) {
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

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {items.map((item) => (
            <article
              className="surface-panel rounded-[var(--consultry-radius-xl)] px-5 py-6 sm:px-6"
              key={item.question}
            >
              <h3 className="text-[1.125rem] font-semibold leading-[1.35] text-[var(--consultry-text-primary)]">
                {item.question}
              </h3>
              <p className="body-md mt-3">{item.answer}</p>
              {item.href && item.linkLabel ? (
                <Link
                  className="mt-5 inline-flex text-sm font-medium text-[var(--consultry-brand-warm)] transition hover:text-[var(--consultry-text-primary)]"
                  href={item.href}
                >
                  {item.linkLabel}
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
