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
          navy: "#0C1425",
          "navy-light": "#162038",
          "navy-mid": "#1A2744",
          charcoal: "#1E1E2E",
          slate: "#2A2D3E",
          accent: "#ED1C24",
          "accent-dark": "#C41017",
          cream: "#FAF7F2",
          "cream-dark": "#F0EBE1",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E8E8E8",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
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
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A96E 0%, #E2CFA5 50%, #C9A96E 100%)",
        "dark-gradient": "linear-gradient(180deg, #0C1425 0%, #162038 100%)",
        "card-shine": "linear-gradient(135deg, rgba(201,169,110,0.05) 0%, rgba(201,169,110,0) 50%, rgba(201,169,110,0.03) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
