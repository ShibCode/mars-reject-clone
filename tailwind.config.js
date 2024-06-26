const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "500px",
        ...defaultTheme.screens,
      },

      fontFamily: {
        druk: "Druk Wide Super",
        drukMedium: "Druk Wide Medium",
        drukCond: "Druk Condensed",
        interTight: "Inter Tight",
        inter: "Inter",
        crime: "Crime Fighter BB",
        tightSpot: "Tight Spot BB",
      },
      colors: {
        blueCharcoal: "#021120",
        lightRed: "#f84a53",
      },
      backgroundImage: {
        redRadial:
          "radial-gradient(62.2294% 62.2294% at 50.0305% 37.7706%, rgb(247, 74, 83) 0%, rgba(247, 74, 83, 0) 100%)",
        purpleRadial:
          "radial-gradient(50% 50%, rgba(43, 46, 139, 0.8) 0%, rgba(43, 46, 139, 0) 100%)",
      },
    },
  },
  plugins: [],
};
