'use client';

import { usePathname, useRouter } from 'next/navigation';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';

interface LanguageContextType {
  locale: string;
  setLocale: (locale: string) => void;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
  defaultLocale: string;
}

export function LanguageProvider({
  children,
  defaultLocale,
}: LanguageProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocale] = useState(defaultLocale);
  const [isInitialized, setIsInitialized] = useState(false);

  // Set initial direction immediately before render
  useLayoutEffect(() => {
    document.documentElement.dir = defaultLocale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = defaultLocale;
    setIsInitialized(true);
  }, [defaultLocale]);

  // Handle locale changes
  useEffect(() => {
    if (!isInitialized) return;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
  }, [locale, isInitialized]);

  const handleSetLocale = (newLocale: string) => {
    if (newLocale === locale) return;
    if (newLocale !== 'en' && newLocale !== 'ar') {
      throw new Error('Invalid locale. Supported locales are "en" and "ar".');
    }
    setLocale(newLocale);
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  const contextValue: LanguageContextType = {
    locale,
    setLocale: handleSetLocale,
    dir: locale === 'ar' ? 'rtl' : 'ltr',
  };

  if (!isInitialized) {
    return null; // Don't render children until initial direction is set
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
