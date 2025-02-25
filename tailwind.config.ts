import { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        jungleGreen: "#00C48C",
        junglePink: "#FF6F91",
        darkBg: "#121212",
        lighterBg: "#E4E4E4",
        lightBg: "#FFFFFF",
        darkText: "#E4E4E4",
        darkerText: "#121212",
        lightText: "#222222",
      },
      animation: {
        "waving-hand": "wave 1.2s infinite ease-in-out",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(15deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(-15deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
