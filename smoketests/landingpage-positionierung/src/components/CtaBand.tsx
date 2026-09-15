import { WaitlistForm } from "./WaitlistForm";
import { Footer } from "./Footer";
import { FOR_WHOM_LINE } from "@/content/shared";
import { scrollToSection } from "@/lib/sectionNavigation";
import { track } from "@/lib/track";
import "@/styles/story.css";

/** The closing stage gives the single-field signup its own contrasting paper surface. */
export function CtaBand({ variant, title, text }: { variant: string; title: string; text: string }) {
  return (
    <section id="warteliste" className="story-signup text-on-dark">
      <div className="story-signup-orbit" aria-hidden="true" />
      <div className="story-signup-inner">
        <div className="story-signup-copy">
          <p className="story-kicker">Consultry erproben</p>
          <h2>{title}</h2>
          <p className="story-signup-lede">{text}</p>
          <p className="story-signup-audience">{FOR_WHOM_LINE}</p>
          <a href="#produktflaeche" className="story-signup-back link-arrow-dark" onClick={(event) => {
            event.preventDefault();
            track({ name: "cta_click", variant, location: "band_example" });
            scrollToSection("produktflaeche");
          }}>Produktbeispiel selbst ausprobieren →</a>
        </div>
        <div className="story-signup-form" data-signup-panel style={{ scrollMarginTop: 96 }}><WaitlistForm variant={variant} /></div>
      </div>
      <Footer />
    </section>
  );
}
