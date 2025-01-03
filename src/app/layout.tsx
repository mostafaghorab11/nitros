import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { ibmPlexSansArabic, redHatDisplay } from './fonts';
import { LanguageProvider, LanguageAware } from '@/contexts/LanguageContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nitros',
  description: 'Your modern landing page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${redHatDisplay.variable} ${ibmPlexSansArabic.variable}`}
    >
      <body>
        <LanguageProvider>
          <LanguageAware>
            <div className="p-5 bg-gray-light text-gray-dark">
              <Navbar />
              {children}
              <Footer />
            </div>
          </LanguageAware>
        </LanguageProvider>
      </body>
    </html>
  );
}
