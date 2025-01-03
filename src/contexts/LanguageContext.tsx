'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

interface LanguageContextType {
  locale: string;
  setLocale: (locale: string) => void;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [locale, setLocale] = useState(() => {
    const urlLang = searchParams.get('lang');
    return urlLang || 'en';
  });

  useEffect(() => {
    const urlLang = searchParams.get('lang');
    if (urlLang && urlLang !== locale) {
      setLocale(urlLang);
    }
  }, [searchParams]);

  useEffect(() => {
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
  }, [locale]);

  const handleSetLocale = (newLocale: string) => {
    setLocale(newLocale);
    const newPath = pathname === '/' ? `/?lang=${newLocale}` : `${pathname}?lang=${newLocale}`;
    router.push(newPath);
  };

  const contextValue: LanguageContextType = {
    locale,
    setLocale: handleSetLocale,
    dir: locale === 'ar' ? 'rtl' : 'ltr',
  };

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

interface LanguageAwareProps {
  children: ReactNode;
}

export function LanguageAware({ children }: LanguageAwareProps) {
  const { locale } = useLanguage();
  return (
    <div className={`min-h-screen ${locale === 'en' ? 'font-sans' : 'font-ibm-arabic'}`}>
      {children}
    </div>
  );
}
