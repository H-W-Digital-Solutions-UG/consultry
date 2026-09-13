import { useState, type FormEvent } from "react";
import { Button } from "./Button";
import { readUtm, submitWaitlist } from "@/lib/waitlist";
import { track } from "@/lib/track";

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

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
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
      setError(ERRORS[result.error] ?? `Eintrag fehlgeschlagen (${result.error}).`);
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-md bg-surface-light p-6 text-ink" role="status">
        <p className="t-heading">Eingetragen.</p>
        <p className="t-body mt-2 text-ink-soft">
          Wir melden uns, sobald die nächste Erprobungsrunde startet. Bis dahin keine weiteren Mails.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="max-w-xl">
      <label htmlFor="wl-email" className="t-caption block text-on-dark-soft">
        Geschäftliche E-Mail
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <input
          id="wl-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@beratung.de"
          className="h-13 flex-1 rounded-full border border-hair bg-surface-light px-5 text-ink shadow-xs placeholder:text-ink-mute focus:border-brand focus:outline-none"
        />
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Wird eingetragen" : "Auf die Warteliste"}
        </Button>
      </div>
      <label className="mt-4 flex items-start gap-3 text-on-dark-soft">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 size-4 accent-brand"
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
        <p className="t-body-sm mt-3 text-on-dark" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
