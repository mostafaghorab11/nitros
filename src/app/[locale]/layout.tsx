import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { LanguageProvider } from '@/contexts/LanguageContext';
import type { Metadata } from 'next';
import { ibmPlexSansArabic, redHatDisplay } from '../fonts';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Nitros',
  description: 'Nitros App',
};

interface LocalePageProps {
  locale: string;
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LocalePageProps;
}) {
  const { locale } = await Promise.resolve(params);

  // Set initial HTML attributes
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const lang = locale;

  return (
    <html
      lang={lang}
      dir={dir}
      className={`${redHatDisplay.variable} ${ibmPlexSansArabic.variable}`}
    >
      <body>
        <LanguageProvider defaultLocale={locale}>
          <div
            className={`p-5 bg-gray-light text-gray-dark min-h-screen ${
              locale === 'en' ? 'font-sans' : 'font-ibm-arabic'
            }`}
          >
            <Navbar />
            {children}
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
