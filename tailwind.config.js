/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        druk: "Druk Wide Super",
        interTight: "Inter Tight",
        crime: "Crime Fighter BB",
        tightSpot: "Tight Spot BB",
      },
      colors: { blueCharcoal: "#021120", lightRed: "#f74a53" },
      backgroundImage: {
        redRadial:
          "radial-gradient(62.2294% 62.2294% at 50.0305% 37.7706%, rgb(247, 74, 83) 0%, rgba(247, 74, 83, 0) 100%)",
      },
    },
  },
  plugins: [],
};
