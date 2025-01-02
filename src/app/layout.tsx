import type { Metadata } from 'next';
import { redHatDisplay } from './fonts';
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
    <html lang="en" className={redHatDisplay.variable}>
      <body className="font-sans bg-gray-light text-gray-dark">
        {children}
      </body>
    </html>
  );
}
