/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/JS/*.js}"],
  theme: {
    extend: {
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(max-aspect-ratio: 13/20" },
      },
      keyframes: {
        "Open-menu": {
          "0%": { transform: "ScaleY(0)" },
          "80%": { transform: "ScaleY(1.1)" },
          "100%": { transform: "ScaleY(1)" },
        },
      },
      animation: {
        "Open-menu": "Open-menu 0.5s ease-in-out forwards",
      },
    },
  },

  plugins: [],
};
