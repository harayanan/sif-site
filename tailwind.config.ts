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
          navy: "#00243F",
          "navy-light": "#003355",
          "navy-mid": "#00406B",
          charcoal: "#001A2E",
          red: "#ED1C24",
          "red-dark": "#C41017",
          "red-glow": "rgba(237, 28, 36, 0.15)",
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
        "dark-gradient": "linear-gradient(180deg, #00243F 0%, #003355 100%)",
        "red-gradient": "linear-gradient(135deg, #ED1C24 0%, #FF4B52 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
