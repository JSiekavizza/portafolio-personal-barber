/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0C",
        surface: "#171614",
        gold: "#CBA135",
        ink: {
          DEFAULT: "#F4F2F7",
          muted: "#B8AFC7",
        },
        neon: {
          purple: "#C13BFF",
          green: "#1AFFB0 ",
           
        },
        racing: {
          yellow: "#F7B715",
          dark: "#171614",
          
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        sans: ["Inter", "sans-serif"],
        street: ["Henny Penny", "system-ui"],
        pirata: [ "Pirata One", "system-ui"],
      },
       keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-1%, 1%)" },
        },
      },
      animation: {
        grain: "grain 0.4s steps(2) infinite",
      },
    },
  },
  plugins: [],
};
