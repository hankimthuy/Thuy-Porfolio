import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "badge-pulse": {
          "0%, 75%, 100%": { transform: "scale(1)", opacity: "1" },
          "82%": { transform: "scale(1.035)", opacity: "1" },
          "90%": { transform: "scale(1.035)", opacity: "1" },
          "97%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "badge-pulse": "badge-pulse 6s ease-in-out infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        /** Bento card surface */
        surface: "#ffffff",
        /**
         * Tertiary/neutral ground, from the brand palette's taupe swatch
         * (#D7CCC8). 50 = page background, 100 = tinted card, 200 = hairline
         * borders, 300 = the exact brand hex, for a deeper tint variant.
         */
        taupe: {
          50: "#faf8f7",
          100: "#f3eeec",
          200: "#e7deda",
          300: "#d7ccc8",
        },
        /**
         * Primary brand accent, from #311B92. 700 is the exact brand hex;
         * 900 is a darkened step for "ink" dark cards and heading text; 500
         * is a lifted, more vivid step for buttons/interactive fills; 300 is
         * a light step for icons/accents sitting on a dark surface.
         *
         * Contrast: plum-500 on taupe-50 is comfortably >=4.5:1 for body
         * text and UI fills. Small text and inline links use 700; headings
         * and body copy use 900 for maximum contrast on light surfaces.
         */
        plum: {
          300: "#b9a9e8",
          500: "#5b3fb0",
          700: "#311b92",
          900: "#1a0f52",
        },
        /**
         * Secondary brand accent, from #D81B60. A spice, never a whole
         * surface: availability dot, active nav underline, tag accents.
         */
        magenta: {
          50: "#fce4ec",
          500: "#d81b60",
          /** Darkened for small text on magenta-50 — 500 is only 3.4:1 there. */
          700: "#a3134a",
        },
      },
      boxShadow: {
        bento: "0 1px 2px rgba(26, 15, 82, 0.04), 0 4px 16px rgba(26, 15, 82, 0.06)",
        "bento-hover":
          "0 2px 4px rgba(26, 15, 82, 0.06), 0 12px 28px rgba(26, 15, 82, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
