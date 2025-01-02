import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { ibmPlexSansArabic, redHatDisplay } from './fonts';
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
      <body className="p-4 sm:p-5 font-sans bg-gray-light text-gray-dark">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
