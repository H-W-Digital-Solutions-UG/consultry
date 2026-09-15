import { useRef, useState, type FormEvent } from "react";
import { Button } from "./Button";
import { readUtm, submitWaitlist } from "@/lib/waitlist";
import { track } from "@/lib/track";
import { WaitlistProof } from "./WaitlistProof";

type Status = "idle" | "submitting" | "success" | "error";

const ERRORS: Record<string, string> = {
  invalid_email: "Die E-Mail-Adresse ist unvollständig.",
  missing_newsletter_consent: "Ohne Einwilligung können wir dich nicht eintragen.",
  network: "Keine Verbindung. Bitte später noch einmal versuchen.",
  waitlist_not_configured: "Die Warteliste ist gerade nicht erreichbar.",
};

/** Single-field waitlist signup; the page path carries the variant for attribution. */
export function WaitlistForm({ variant }: { variant: string }) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const form = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setError("");
    const result = await submitWaitlist({
      email,
      newsletterConsent: consent,
      signupPageUrl: window.location.href,
      utm: readUtm(window.location.search),
    });
    track({ name: "waitlist_submit", variant, ok: result.ok, error: result.ok ? undefined : result.error });
    if (result.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setError(result.error);
      if (result.error === "invalid_email" || result.error === "missing_newsletter_consent") {
        form.current?.querySelector<HTMLInputElement>(result.error === "invalid_email" ? '[type="email"]' : '[type="checkbox"]')?.focus();
      }
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-lg bg-surface-light p-6 text-ink sm:p-8" role="status">
        <h3 className="t-heading" data-signup-heading tabIndex={-1}>Du stehst auf der Warteliste.</h3>
        <p className="t-body mt-2 text-ink-soft">
          Wir melden uns, sobald die nächste Erprobungsrunde startet. Bis dahin keine weiteren Mails.
        </p>
      </div>
    );
  }

  return (
    <form ref={form} onSubmit={onSubmit} noValidate aria-labelledby="wl-title" aria-busy={status === "submitting"} className="w-full max-w-xl self-start rounded-lg border border-hair bg-surface-light p-6 text-ink sm:p-8">
      <h3 id="wl-title" data-signup-heading tabIndex={-1} className="t-heading">Zur nächsten Erprobungsrunde</h3>
      <p id="wl-promise" className="t-body-sm mt-2 text-ink-soft">Wir melden uns per E-Mail, sobald die nächste Runde startet.</p>
      <div className="mt-5 border-y border-hair py-4"><WaitlistProof dated /></div>
      <label htmlFor="wl-email" className="t-caption mt-6 block text-ink-soft">
        Geschäftliche E-Mail
      </label>
      <div className="mt-2 grid gap-3">
        <input
          id="wl-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          name="email"
          required
          aria-invalid={error === "invalid_email"}
          aria-describedby={error === "invalid_email" ? "wl-error" : "wl-promise"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@beratung.de"
          className="h-13 w-full min-w-0 rounded-full border border-hair-2 bg-white px-5 text-ink placeholder:text-ink-mute focus:border-brand"
        />
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Wird eingetragen" : "Auf die Warteliste"}
        </Button>
      </div>
      <label className="mt-4 flex items-start gap-3 text-ink-soft">
        <input
          type="checkbox"
          name="newsletterConsent"
          required
          aria-invalid={error === "missing_newsletter_consent"}
          aria-describedby={error === "missing_newsletter_consent" ? "wl-error" : undefined}
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 size-4 shrink-0 accent-brand"
        />
        <span className="t-body-sm">
          Consultry darf mich per E-Mail über den Produktstart informieren. Abmeldung jederzeit über den Link in jeder
          Mail. Details in der{" "}
          <a href="https://consultry.de/datenschutz" className="underline underline-offset-2">
            Datenschutzerklärung
          </a>
          .
        </span>
      </label>
      {status === "error" && (
        <p id="wl-error" className="t-body-sm mt-3 text-blocked-text" role="alert">
          {ERRORS[error] ?? "Eintrag fehlgeschlagen. Bitte erneut versuchen."}
        </p>
      )}
    </form>
  );
}
