const truthyValues = new Set(["1", "true", "yes", "on"]);
const falsyValues = new Set(["0", "false", "no", "off"]);

function parseBooleanEnvironmentFlag(value: string | undefined | null) {
  if (!value) {
    return null;
  }

  const normalizedValue = value.trim().toLowerCase();

  if (truthyValues.has(normalizedValue)) {
    return true;
  }

  if (falsyValues.has(normalizedValue)) {
    return false;
  }

  return null;
}

export function isAnalyticsEnvironmentEnabled() {
  const explicitOverride = parseBooleanEnvironmentFlag(
    process.env.NEXT_PUBLIC_ANALYTICS_ENABLED,
  );

  if (explicitOverride !== null) {
    return explicitOverride;
  }

  if (typeof document !== "undefined") {
    const datasetOverride = parseBooleanEnvironmentFlag(
      document.documentElement.dataset.analyticsEnabled,
    );

    if (datasetOverride !== null) {
      return datasetOverride;
    }
  }

  if (process.env.VERCEL_ENV) {
    return process.env.VERCEL_ENV === "production";
  }

  return process.env.NODE_ENV === "production";
}
