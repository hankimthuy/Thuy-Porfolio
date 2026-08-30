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
         * Summer Ocean Breeze. 100/300/500/900 are the palette the owner
         * picked; 50/200/700 are added steps so text and hairlines stay
         * accessible on a light ground.
         *
         * Contrast: 500 on 50 is ~4.1:1 — fine for >=18px text, icons,
         * borders, and as a fill under white text, but NOT for small body
         * copy. Small text and inline links use 700; body copy uses 900.
         */
        ocean: {
          50: "#f6fbf7",
          100: "#f1faee",
          200: "#e2eef1",
          300: "#a8dadc",
          500: "#457b9d",
          700: "#2f5c78",
          900: "#1d3557",
        },
        /** A spice, never a surface: availability dot, active nav underline. */
        coral: {
          50: "#fdeced",
          500: "#e63946",
          /** Darkened for small text on coral-50 — 500 is only 3.65:1 there. */
          700: "#b31f2b",
        },
      },
      boxShadow: {
        bento: "0 1px 2px rgba(29, 53, 87, 0.04), 0 4px 16px rgba(29, 53, 87, 0.06)",
        "bento-hover":
          "0 2px 4px rgba(29, 53, 87, 0.06), 0 12px 28px rgba(29, 53, 87, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
