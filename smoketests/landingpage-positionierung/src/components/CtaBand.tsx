import { WaitlistForm } from "./WaitlistForm";
import { Footer } from "./Footer";
import { FOR_WHOM_LINE } from "@/content/shared";

/** The one dark block per page: waitlist band + footer, with the page's single gradient divider on top. */
export function CtaBand({ variant, title, text }: { variant: string; title: string; text: string }) {
  return (
    <section id="warteliste" className="bg-surface-hero text-on-dark">
      <div className="gradient-divider" aria-hidden="true" />
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
        <div>
          <h2 className="t-display-lg max-w-[20ch]">{title}</h2>
          <p className="t-lede mt-4 max-w-[40ch] text-on-dark-soft">{text}</p>
          <p className="t-body-sm mt-6 text-on-dark-soft">{FOR_WHOM_LINE}</p>
        </div>
        <WaitlistForm variant={variant} />
      </div>
      <Footer />
    </section>
  );
}
