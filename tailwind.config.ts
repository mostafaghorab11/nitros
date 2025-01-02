import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
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
        },

        white: '#F9F9F9',
      },
      fontFamily: {
        sans: ['var(--font-redhat)'],
        heading: ['var(--font-redhat)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
