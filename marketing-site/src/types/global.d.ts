type CookieScriptConsentCategory =
  | "strict"
  | "performance"
  | "targeting"
  | "functionality"
  | "unclassified";

type CookieScriptConsentState = {
  action?: "accept" | "reject";
  categories?:
    | CookieScriptConsentCategory[]
    | Partial<Record<CookieScriptConsentCategory | string, boolean>>;
};

type CookieScriptInstance = {
  acceptAction: (categories: CookieScriptConsentCategory[]) => void;
  categories: () => CookieScriptConsentCategory[];
  currentState: () => CookieScriptConsentState;
  hide: () => void;
  rejectAllAction: () => void;
  show: () => void;
  showDetails?: () => void;
};

interface Window {
  CookieScript?: {
    instance?: CookieScriptInstance;
  };
  dataLayer?: Array<Record<string, unknown>>;
}
