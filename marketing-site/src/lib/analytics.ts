import { isAnalyticsEnvironmentEnabled } from "@/lib/analytics-config";

export type AnalyticsContentGroup =
  | "about"
  | "contact"
  | "home"
  | "legal"
  | "other"
  | "product_hub"
  | "waitlist"
  | "waitlist_thank_you"
  | "wedge_detail";

type AnalyticsPrimitive = boolean | number | string | undefined;
type AnalyticsPayload = Record<string, AnalyticsPrimitive>;
type ConsentCategoryMap = Partial<Record<string, boolean>>;
type ConsentState = {
  action?: "accept" | "reject";
  categories?: string[] | ConsentCategoryMap;
};

type CtaClickParams = {
  ctaId: string;
  ctaLabel: string;
  ctaLocation: string;
  destinationPath?: string;
  destinationType: string;
};

type ContactClickParams = {
  contactLocation: string;
  contactMethod: string;
};

const seenPageViewKeys = new Set<string>();

function filterPayload(payload: AnalyticsPayload) {
  return Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined),
  ) as Record<string, boolean | number | string>;
}

function ensureDataLayer() {
  if (typeof window === "undefined") {
    return null;
  }

  window.dataLayer = window.dataLayer ?? [];
  return window.dataLayer;
}

export function getCookieConsentState(): ConsentState | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.CookieScript?.instance?.currentState?.() ?? null;
  } catch {
    return null;
  }
}

function getAllowedConsentCategories(consentState: ConsentState | null) {
  if (!consentState?.categories) {
    return [];
  }

  if (Array.isArray(consentState.categories)) {
    return consentState.categories.filter((value): value is string => typeof value === "string");
  }

  return Object.entries(consentState.categories)
    .filter(([, isAllowed]) => Boolean(isAllowed))
    .map(([categoryName]) => categoryName);
}

export function hasPerformanceConsent() {
  if (!isAnalyticsEnvironmentEnabled()) {
    return false;
  }

  const consentState = getCookieConsentState();
  return getAllowedConsentCategories(consentState).includes("performance");
}

export function getContentGroup(pathname: string): AnalyticsContentGroup {
  if (pathname === "/") {
    return "home";
  }

  if (pathname === "/produkt") {
    return "product_hub";
  }

  if (pathname.startsWith("/produkt/")) {
    return "wedge_detail";
  }

  if (pathname === "/unternehmen") {
    return "about";
  }

  if (pathname === "/kontakt") {
    return "contact";
  }

  if (pathname === "/warteliste") {
    return "waitlist";
  }

  if (pathname === "/warteliste/danke") {
    return "waitlist_thank_you";
  }

  if (
    pathname === "/legal" ||
    pathname.startsWith("/legal/") ||
    ["/agb", "/cookies", "/datenschutz", "/impressum", "/rechtliches"].includes(pathname)
  ) {
    return "legal";
  }

  return "other";
}

export function pushAnalyticsEvent(event: string, payload: AnalyticsPayload = {}) {
  if (
    typeof window === "undefined" ||
    !isAnalyticsEnvironmentEnabled() ||
    !hasPerformanceConsent()
  ) {
    return false;
  }

  const dataLayer = ensureDataLayer();

  if (!dataLayer) {
    return false;
  }

  dataLayer.push({
    event,
    ...filterPayload(payload),
  });

  return true;
}

export function trackPageView(pathname: string, search: string) {
  if (typeof window === "undefined" || !isAnalyticsEnvironmentEnabled()) {
    return false;
  }

  const pageViewKey = `${pathname}${search ? `?${search}` : ""}`;

  if (seenPageViewKeys.has(pageViewKey)) {
    return false;
  }

  seenPageViewKeys.add(pageViewKey);

  return pushAnalyticsEvent("page_view", {
    content_group: getContentGroup(pathname),
    page_location: window.location.href,
    page_path: pageViewKey,
    page_title: document.title,
  });
}

export function trackCtaClick({
  ctaId,
  ctaLabel,
  ctaLocation,
  destinationPath,
  destinationType,
}: CtaClickParams) {
  return pushAnalyticsEvent("cta_click", {
    cta_id: ctaId,
    cta_label: ctaLabel,
    cta_location: ctaLocation,
    destination_path: destinationPath,
    destination_type: destinationType,
    page_path: typeof window === "undefined" ? undefined : window.location.pathname,
  });
}

export function trackContactClick({
  contactLocation,
  contactMethod,
}: ContactClickParams) {
  return pushAnalyticsEvent("contact_click", {
    contact_location: contactLocation,
    contact_method: contactMethod,
  });
}

export function trackGenerateLead() {
  if (typeof window === "undefined" || !isAnalyticsEnvironmentEnabled()) {
    return false;
  }

  return pushAnalyticsEvent("generate_lead", {
    lead_source: "waitlist",
    page_path: window.location.pathname,
  });
}

export function trackQualifyLead() {
  if (typeof window === "undefined" || !isAnalyticsEnvironmentEnabled()) {
    return false;
  }

  return pushAnalyticsEvent("qualify_lead", {
    page_path: window.location.pathname,
    qualification_source: "waitlist_thank_you",
  });
}
