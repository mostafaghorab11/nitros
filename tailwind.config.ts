import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EF4B23',
        secondary: '#364772',

        gray: {
          light: '#F3F3F3',
          dark: '#404040',
          border: '#D8D8D8',
        },

        white: '#F9F9F9',
      },
      fontFamily: {
        sans: ['var(--font-redhat)'],
        heading: ['var(--font-redhat)'],
        'ibm-arabic': ['var(--font-ibm-arabic)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
