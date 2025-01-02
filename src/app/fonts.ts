import { Red_Hat_Display } from 'next/font/google'

export const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-redhat',
})
