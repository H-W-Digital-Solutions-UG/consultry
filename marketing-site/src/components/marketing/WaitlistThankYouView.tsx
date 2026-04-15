import { MotionReveal } from "@/components/marketing/MotionReveal";
import { WaitlistQualifierForm } from "@/components/marketing/WaitlistQualifierForm";
import { WaitlistSuccessBadge } from "@/components/marketing/WaitlistSuccessBadge";

type WaitlistThankYouViewProps = {
  qualificationEnabled: boolean;
};

const doiChecklist = [
  "Pruefen Sie jetzt Ihr Postfach auf die Double-Opt-in-Mail.",
  "Bestaetigen Sie Ihre Anmeldung ueber den Link in der E-Mail.",
  "Optional koennen Sie uns direkt noch ein paar Kontextangaben mitgeben.",
] as const;

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
      <section className="section-shell relative overflow-hidden pt-8 sm:pt-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(240,168,94,0.18),transparent_28%),radial-gradient(circle_at_76%_10%,rgba(155,89,181,0.12),transparent_24%),linear-gradient(180deg,rgba(191,83,71,0.08),transparent_55%)]" />
        <div className="content-shell relative">
          <div className="grid gap-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start lg:gap-8">
            <MotionReveal className="max-w-fit" delay={0.03} y={18}>
              <div className="surface-panel flex items-center gap-4 rounded-[28px] px-5 py-5 sm:px-6">
                <WaitlistSuccessBadge size="lg" />
                <div>
                  <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--consultry-text-faint)]">
                    ANMELDUNG ERFASST
                  </p>
                  <p className="mt-2 text-[14px] leading-[1.65] text-[var(--consultry-text-secondary)] sm:text-[15px]">
                    Ihre E-Mail wurde uebernommen. Jetzt fehlt nur noch die Bestaetigung.
                  </p>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.1} x={18} y={22}>
              <div className="max-w-4xl">
                <p className="eyebrow">FAST GESCHAFFT</p>
                <h1 className="display-section mt-5 max-w-[12ch] text-balance text-[var(--consultry-text-primary)] sm:text-[clamp(3rem,5vw,4.5rem)]">
                  Bitte bestaetigen Sie jetzt Ihre Anmeldung
                </h1>
                <p className="body-lg mt-5 max-w-[44rem]">
                  Ihre Wartelisten-Anmeldung ist gespeichert. Bestaetigen Sie jetzt noch die E-Mail in
                  Ihrem Postfach. Wenn Sie moechten, koennen Sie uns direkt im naechsten Schritt ein
                  paar optionale Angaben fuer die Priorisierung mitgeben.
                </p>
              </div>
            </MotionReveal>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(24rem,30rem)] xl:items-start xl:gap-10">
            <div className="order-2 xl:order-1">
              <div className="grid gap-3 sm:grid-cols-3">
                {doiChecklist.map((item, index) => (
                  <MotionReveal
                    className="h-full"
                    delay={0.16 + index * 0.06}
                    key={item}
                    y={22}
                  >
                    <article className="surface-panel h-full rounded-[22px] px-5 py-5">
                      <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--consultry-text-faint)]">
                        NAECHSTER SCHRITT
                      </span>
                      <p className="mt-3 text-[15px] leading-[1.68] text-[var(--consultry-text-primary)]">
                        {item}
                      </p>
                    </article>
                  </MotionReveal>
                ))}
              </div>

              <MotionReveal delay={0.34} y={24}>
                <div className="mt-6 rounded-[24px] border border-[var(--consultry-border-soft)] bg-[rgba(255,255,255,0.03)] px-6 py-6">
                  <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--consultry-text-faint)]">
                    WARUM DIE OPTIONALEN ANGABEN HELFEN
                  </p>
                  <ul className="mt-4 grid gap-3">
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

            <MotionReveal className="order-1 xl:order-2" delay={0.24} x={20} y={20}>
              <WaitlistQualifierForm enabled={qualificationEnabled} />
            </MotionReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
