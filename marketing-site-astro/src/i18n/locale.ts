export type Locale = 'de' | 'en';
export const locales = ['de', 'en'] as const;

export function localeFromPath(path: string): Locale {
  return /^\/en(?:\/|$|[?#])/.test(path) ? 'en' : 'de';
}

/** Existing German URLs stay stable; English mirrors them below /en. */
export function localizedPath(path: string, locale: Locale): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const suffix = path.match(/[?#].*$/)?.[0] ?? '';
  const pathname = path.slice(0, path.length - suffix.length).replace(/^\/en(?=\/|$)/, '') || '/';
  return (locale === 'en' ? `/en${pathname === '/' ? '' : pathname}` : pathname) + suffix;
}

export type Dictionary = Record<string, string>;
export function translator(locale: Locale, dictionary: Dictionary) {
  return (source: string): string => locale === 'en' ? (dictionary[source] ?? source) : source;
}

/** For our static editorial data only. Never apply this to user-entered text. */
export function translateData<T>(data: T, locale: Locale, dictionary: Dictionary): T {
  if (locale === 'de') return data;
  if (typeof data === 'string') {
    return (dictionary[data] ?? data.split('\n').map(line => dictionary[line] ?? line).join('\n')) as T;
  }
  if (Array.isArray(data)) return data.map(item => translateData(item, locale, dictionary)) as T;
  if (data && typeof data === 'object') {
    return Object.fromEntries(Object.entries(data).map(([key, value]) => [key, translateData(value, locale, dictionary)])) as T;
  }
  return data;
}
