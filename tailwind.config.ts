import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'slide-up': 'list-slide-up 11s infinite',
        highlight: 'highlight-text 4s infinite',
      },
      keyframes: {
        'list-slide-up': {
          '0%, 10%': { transform: 'translateY(0%)' },
          '20%, 30%': { transform: 'translateY(-100%)' },
          '40%, 50%': { transform: 'translateY(-200%)' },
          '60%, 70%': { transform: 'translateY(-300%)' },
          '80%, 90%': { transform: 'translateY(-400%)' },
        },
        'highlight-text': {
          from: {
            'background-size': '0% 80%',
          },
          '35%': {
            'background-size': '100% 80%',
          },
          to: {
            'background-size': '100% 80%',
          },
        },
      },
      screens: {
        xs: '475px',
        ...defaultTheme.screens,
      },
      fontFamily: {
        sans: ['var(--font-noto_sans)'],
      },
      colors: {
        button: '#007DA4',
        button_hover: '#3D9BE9',
        lightblue: '#eaf7ff',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
