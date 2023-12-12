const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: "#0f5bfb",
        color2: "#f5f8fe",
      },
      fontFamily: {
        sans: ["'Raleway'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
