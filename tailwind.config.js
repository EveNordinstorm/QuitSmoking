/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        purple: "#9A2377",
        orange: "#F07C21",
        blue: "#36454F",
        lightBlue: "#7C97CE",
        pink: "#EF5257",
        yellow: "#FDC964",
      },
    },
  },
  plugins: [],
};
