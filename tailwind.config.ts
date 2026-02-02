import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#C9A96E",
          "gold-light": "#E2CFA5",
          "gold-dark": "#A68B4B",
          blue: "#004B87",
          "blue-light": "#0060A8",
          navy: "#0A1930",
          "navy-light": "#122448",
          "navy-mid": "#1A3260",
          charcoal: "#061325",
          red: "#8B1A2B",
          "red-light": "#A52238",
          "red-bright": "#C0392B",
          cream: "#F8F3EB",
          "cream-dark": "#EDE5D8",
          "cream-mid": "#F3ECE0",
          ivory: "#FDFBF7",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "Georgia",
          "Times New Roman",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
