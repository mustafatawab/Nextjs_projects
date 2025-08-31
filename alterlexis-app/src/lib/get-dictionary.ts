import 'server-only';
import type { Locale, Dictionary } from '@/types/types';

const dictionaries = {
  en: () => import('../locales/en.json').then((module) => module.default as unknown as Dictionary),
  fr: () => import('../locales/fr.json').then((module) => module.default as unknown as Dictionary),
  es: () => import('../locales/es.json').then((module) => module.default as unknown as Dictionary),
  de: () => import('../locales/de.json').then((module) => module.default as unknown as Dictionary),
  it: () => import('../locales/it.json').then((module) => module.default as unknown as Dictionary),
  pt: () => import('../locales/pt.json').then((module) => module.default as unknown as Dictionary),
  ru: () => import('../locales/ru.json').then((module) => module.default as unknown as Dictionary),
  zh: () => import('../locales/zh.json').then((module) => module.default as unknown as Dictionary),
  ar: () => import('../locales/ar.json').then((module) => module.default as unknown as Dictionary),
};

// export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
//   dictionaries[locale as keyof typeof dictionaries]?.() ?? dictionaries.fr();

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  // Fallback to "fr" if invalid locale
  const getDict = dictionaries[locale] ?? dictionaries["fr"];

  // Dynamic import = no static caching
  return getDict();
}
