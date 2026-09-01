import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        /**
         * Theme-reactive tokens. Their hex values live as `R G B` CSS
         * variables in app/globals.css — one set under `:root` (light), one
         * under `.dark` (dark) — so every class below stays exactly as
         * written; only what "background" *means* flips with the theme.
         * The `rgb(var(...) / <alpha-value>)` form (not a plain var()) is
         * required for opacity modifiers like `text-foreground/70` to work.
         */
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        /** Secondary/muted text — the reactive equivalent of a plum-700 caption. */
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        /** Bento card surface. */
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        /**
         * Tertiary/neutral ground, from the brand palette's taupe swatch
         * (#D7CCC8) in light mode. 50 = page background, 100 = tinted card,
         * 200 = hairline borders, 300 = a deeper tint variant. All reactive.
         */
        taupe: {
          50: "rgb(var(--color-taupe-50) / <alpha-value>)",
          100: "rgb(var(--color-taupe-100) / <alpha-value>)",
          200: "rgb(var(--color-taupe-200) / <alpha-value>)",
          300: "rgb(var(--color-taupe-300) / <alpha-value>)",
        },
        /**
         * Primary brand accent, from #311B92. Fixed — not theme-reactive —
         * because it's used for actual brand color (buttons, gradients, the
         * "ink" dark tile, badges paired with a fixed pastel background) that
         * should look the same regardless of light/dark mode. 50 is a light
         * tint for badge backgrounds; 700 is the exact brand hex; 900 is a
         * darkened step for "ink" dark cards; 500 is a lifted, more vivid
         * step for buttons; 300 is a light step for icons on a dark surface.
         */
        plum: {
          50: "#efebfb",
          300: "#b9a9e8",
          500: "#5b3fb0",
          700: "#311b92",
          900: "#1a0f52",
        },
        /**
         * Secondary brand accent, from #D81B60. Also fixed, same reasoning
         * as plum above. A spice, never a whole surface: availability dot,
         * active nav underline, tag accents.
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
