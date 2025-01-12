import en from '@/locales/en.json';
import ar from '@/locales/ar.json';

type TranslationType = typeof en;
type NestedKeyValue = string | { [key: string]: NestedKeyValue };

const translations: { [key: string]: TranslationType } = { en, ar };

export function translate(key: string, locale: string = 'en'): string {
  const keys = key.split('.');
  let current: NestedKeyValue = translations[locale as keyof typeof translations];
  
  for (const k of keys) {
    if (typeof current !== 'object') {
      console.warn(`Translation key "${key}" is invalid - trying to access property of a string value`);
      return key;
    }
    
    if (current[k] === undefined) {
      console.warn(`Translation key "${key}" not found for locale "${locale}"`);
      return key;
    }
    current = current[k];
  }
  
  if (typeof current !== 'string') {
    console.warn(`Translation key "${key}" refers to a nested object, not a string`);
    return key;
  }
  
  return current;
}
