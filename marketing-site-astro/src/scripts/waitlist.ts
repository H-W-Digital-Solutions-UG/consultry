import { attributionFromUrl, attributionSessionKey, isProductEntry, type SignupAttribution } from "../lib/waitlist/attribution";

import { localeFromPath } from '../i18n/locale';
import { useTranslations } from '../i18n/ui';
const t = useTranslations(localeFromPath(location.pathname));

let context: SignupAttribution | undefined;
let availability: Promise<"available" | "unconfigured" | "unreachable"> | undefined;

/** Session-only signup context; no visitor identifiers, analytics events, or network calls. */
export function initWaitlistAttribution(): SignupAttribution {
  const current = attributionFromUrl(window.location.href);
  try {
    const raw = sessionStorage.getItem(attributionSessionKey);
    if (raw) {
      const previous = JSON.parse(raw) as SignupAttribution;
      if (new URL(previous.signupPageUrl).origin === window.location.origin) {
        context = attributionFromUrl(previous.signupPageUrl);
      }
    }
  } catch { /* A private browser can block session storage. The current page still works. */ }

  const hasCampaign = Boolean(current.utmSource || current.utmMedium || current.utmCampaign);
  if (!context || isProductEntry(location.pathname) || hasCampaign) {
    context = {
      ...current,
      utmSource: hasCampaign ? current.utmSource : context?.utmSource,
      utmMedium: hasCampaign ? current.utmMedium : context?.utmMedium,
      utmCampaign: hasCampaign ? current.utmCampaign : context?.utmCampaign,
    };
    // Keep inherited campaign values inside the URL, too, so subsequent visits recover them.
    const source = new URL(context.signupPageUrl);
    for (const [key, value] of [["utm_source", context.utmSource], ["utm_medium", context.utmMedium], ["utm_campaign", context.utmCampaign]]) {
      if (value) source.searchParams.set(key!, value);
    }
    context.signupPageUrl = source.href;
  }
  try { sessionStorage.setItem(attributionSessionKey, JSON.stringify(context)); } catch { /* Optional local context only. */ }
  return context;
}

const messages: Record<string, string> = {
  waitlist_not_configured: "Die Warteliste ist in dieser Vorschau noch nicht verbunden. Es werden keine Einträge gespeichert.",
  invalid_email: "Bitte gib eine gültige E-Mail-Adresse ein.",
  missing_newsletter_consent: "Bitte bestätige die Einwilligung für Wartelisten- und Produkt-Updates.",
  consent_changed: "Der Einwilligungstext wurde aktualisiert. Bitte lade die Seite neu und bestätige ihn erneut.",
  already_joined: "Diese E-Mail-Adresse steht bereits auf der Warteliste.",
  rate_limited: "Zu viele Anfragen. Bitte versuche es in ein paar Minuten erneut.",
  signup_unavailable: "Die Warteliste ist gerade nicht erreichbar. Bitte versuche es später erneut.",
};

function connectForm(form: HTMLFormElement) {
  if (form.dataset.connected) return;
  form.dataset.connected = "true";
  const button = form.querySelector<HTMLButtonElement>("[data-submit]")!;
  const status = form.querySelector<HTMLElement>("[data-form-status]")!;
  const email = form.elements.namedItem("email") as HTMLInputElement;
  const consent = form.elements.namedItem("newsletterConsent") as HTMLInputElement;
  const buttonHtml = button.innerHTML;
  let submitting = false;
  let accepted = false;
  let mustReload = false;

  const report = (text: string, state: "error" | "success" | "info" = "info") => {
    status.textContent = t(text);
    status.dataset.state = state;
  };
  const checkAvailability = () => {
    availability ??= fetch("/api/waitlist/signup", { headers: { Accept: "application/json" }, cache: "no-store" })
      .then(async (response): Promise<"available" | "unconfigured" | "unreachable"> => {
        if (!response.ok) return "unreachable";
        return (await response.json()).available === true ? "available" : "unconfigured";
      })
      .catch(() => "unreachable" as const);
    availability.then((state) => {
      button.disabled = state !== "available";
      report(state === "available" ? "" : state === "unconfigured" ? messages.waitlist_not_configured : messages.signup_unavailable);
    });
  };
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) { observer.disconnect(); checkAvailability(); }
    }, { rootMargin: "300px" });
    observer.observe(form);
  } else checkAvailability();

  form.addEventListener("input", () => {
    email.removeAttribute("aria-invalid");
    consent.removeAttribute("aria-invalid");
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (submitting || accepted || button.disabled || !form.reportValidity()) return;
    submitting = true;
    button.disabled = true;
    button.textContent = t("Wird eingetragen …");
    form.setAttribute("aria-busy", "true");
    report("");
    try {
      const attribution = context ?? initWaitlistAttribution();
      const response = await fetch("/api/waitlist/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...attribution,
          email: email.value.trim(),
          newsletterConsent: consent.checked,
          locale: form.dataset.locale,
          consentVersion: form.dataset.consentVersion,
          website: (form.elements.namedItem("website") as HTMLInputElement).value,
        }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        const error = String(result.error ?? "signup_unavailable");
        if (error === "consent_changed") mustReload = true;
        report(messages[error] ?? "Deine Anmeldung konnte nicht gespeichert werden. Bitte versuche es später erneut.", "error");
        if (error === "invalid_email") { email.setAttribute("aria-invalid", "true"); email.focus(); }
        if (error === "missing_newsletter_consent") { consent.setAttribute("aria-invalid", "true"); consent.focus(); }
        return;
      }
      accepted = true;
      form.querySelector<HTMLElement>("[data-form-content]")!.hidden = true;
      report("Anmeldung erhalten. Falls deine E-Mail-Adresse noch nicht bestätigt ist, bestätige bitte den Link in deinem Postfach.", "success");
      status.tabIndex = -1;
      status.focus();
    } catch {
      report(messages.signup_unavailable, "error");
    } finally {
      submitting = false;
      form.removeAttribute("aria-busy");
      if (!accepted) { button.disabled = mustReload; button.innerHTML = buttonHtml; }
    }
  });
}

function initialize() {
  initWaitlistAttribution();
  document.querySelectorAll<HTMLFormElement>("[data-waitlist-form]").forEach(connectForm);
}

initialize();
document.addEventListener("astro:page-load", initialize);
