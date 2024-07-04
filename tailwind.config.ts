import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        footer: "#eaf7ff"
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [daisyui, typography],
} satisfies Config;
