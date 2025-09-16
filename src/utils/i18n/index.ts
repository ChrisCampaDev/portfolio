import texts from './texts.json';

export type Locale = 'es' | 'en';

// Determine locale from a pathname like "/portfolio/en/..." or "/portfolio/..."
export function getLocaleFromPathname(pathname: string): Locale {
  const segs = pathname.split('/').filter(Boolean);
  // segs[0] is base (e.g., "portfolio") in this project
  return segs[1] === 'en' ? 'en' : 'es';
}

export function getLocaleFromAstro(Astro: { url: URL }): Locale {
  return getLocaleFromPathname(Astro.url.pathname);
}

export function getTextsByLocale(locale: Locale) {
  return (texts as any)[locale];
}

export function getTexts(Astro: { url: URL }) {
  const locale = getLocaleFromAstro(Astro);
  return getTextsByLocale(locale);
}
