import { Red_Hat_Display, IBM_Plex_Sans_Arabic } from 'next/font/google';

export const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-redhat',
});

export const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-arabic',
});
