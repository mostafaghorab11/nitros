import en from '@/locales/en.json';
import ar from '@/locales/ar.json';

const translations = { en, ar };

export function translate(key: string, locale: string = 'en'): string {
  const keys = key.split('.');
  let current: any = translations[locale as keyof typeof translations];
  
  for (const k of keys) {
    if (current[k] === undefined) {
      console.warn(`Translation key "${key}" not found for locale "${locale}"`);
      return key;
    }
    current = current[k];
  }
  
  return current;
}
