import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hdfc: {
          red: "#ED1C24",
          "red-dark": "#C41017",
          blue: "#004B87",
          "blue-dark": "#00325A",
          navy: "#0A1F44",
          gold: "#D4A843",
          gray: {
            50: "#F8F9FA",
            100: "#F1F3F5",
            200: "#E9ECEF",
            300: "#DEE2E6",
            400: "#ADB5BD",
            500: "#6C757D",
            600: "#495057",
            700: "#343A40",
            800: "#212529",
          },
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
      },
    },
  },
  plugins: [],
};
export default config;
