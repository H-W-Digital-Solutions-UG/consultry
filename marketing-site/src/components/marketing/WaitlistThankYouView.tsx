import { MotionReveal } from "@/components/marketing/MotionReveal";
import { WaitlistCapturedPopup } from "@/components/marketing/WaitlistCapturedPopup";
import { WaitlistQualifierForm } from "@/components/marketing/WaitlistQualifierForm";

type WaitlistThankYouViewProps = {
  qualificationEnabled: boolean;
};

const qualifierReasons = [
  "Wir priorisieren Pilotplaetze gezielter.",
  "Erste Inhalte werden besser auf Ihre Beratungsrealitaet zugeschnitten.",
  "Die Angaben sind freiwillig und in unter einer Minute erledigt.",
] as const;

export function WaitlistThankYouView({
  qualificationEnabled,
}: WaitlistThankYouViewProps) {
  return (
    <main>
      <WaitlistCapturedPopup />

      <section className="section-shell relative overflow-hidden pt-8 sm:pt-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(240,168,94,0.18),transparent_28%),radial-gradient(circle_at_76%_10%,rgba(155,89,181,0.12),transparent_24%),linear-gradient(180deg,rgba(191,83,71,0.08),transparent_55%)]" />
        <div className="content-shell relative">
          <MotionReveal delay={0.08} y={22}>
            <div className="max-w-4xl">
              <p className="eyebrow">FAST GESCHAFFT</p>
              <h1 className="display-section mt-5 text-balance text-[var(--consultry-text-primary)] sm:text-[clamp(3rem,5vw,4.5rem)]">
                Early Access sichern
              </h1>
              <p className="body-lg mt-5 max-w-[44rem]">
                Mit Ihrer Bestaetigung aktivieren Sie Ihren Platz auf der Warteliste. Wenn Sie uns
                anschliessend noch ein paar kurze Angaben zu Team, Fokus und groesstem Engpass
                mitgeben, koennen wir Ihre Anfrage gezielter einordnen und passende Pilotplaetze
                frueher priorisieren.
              </p>
            </div>
          </MotionReveal>

          <div className="mt-12 border-t border-[rgba(255,255,255,0.08)] pt-10">
            <MotionReveal className="mx-auto max-w-[72rem]" delay={0.32} y={20}>
              <WaitlistQualifierForm enabled={qualificationEnabled} layout="wide" />
            </MotionReveal>

            <MotionReveal className="mx-auto mt-6 max-w-[64rem]" delay={0.4} y={24}>
              <div className="rounded-[24px] border border-[var(--consultry-border-soft)] bg-[rgba(255,255,255,0.03)] px-6 py-6 sm:px-7">
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--consultry-text-faint)]">
                  WARUM DIE OPTIONALEN ANGABEN HELFEN
                </p>
                <ul className="mt-4 grid gap-3 md:grid-cols-3 md:gap-5">
                  {qualifierReasons.map((reason) => (
                    <li
                      className="flex items-start gap-3 text-[15px] leading-[1.68] text-[var(--consultry-text-secondary)]"
                      key={reason}
                    >
                      <span className="mt-[0.42rem] h-1.5 w-1.5 rounded-full bg-[var(--consultry-brand-warm)]" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
