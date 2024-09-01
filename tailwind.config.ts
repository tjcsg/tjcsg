import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
      fontFamily: {
        sans: ['var(--font-noto_sans)'],
      },
      colors: {
        button: '#1D5598',
        button_hover: '#3D9BE9',
        lightblue: '#eaf7ff',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [daisyui, typography],
} satisfies Config;
