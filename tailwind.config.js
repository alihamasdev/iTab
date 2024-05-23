/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      accent: "#F7A70A",
      ...colors,
    },
    fontFamily: {
      poppins: ["Poppins", "system-ui"],
    },
    fontSize: {
      13: "13px",
      ...defaultTheme.fontSize,
    },
    extend: {
      backgroundImage: {
        img: "url('../bg_img.jpg')",
      },
      spacing: {
        50: "50px",
        100: "100px",
        120: "120px",
        200: "200px",
        250: "250px",
        300: "300px",
        400: "400px",
        450: "450px",
        500: "500px",
        520: "520px",
        "4.5/5": "90%",
      },
      gridTemplateColumns: {
        sh4: "repeat(4, 1fr)",
        sh5: "repeat(5, 1fr)",
        sh6: "repeat(6, 1fr)",
      },
      gridTemplateRows: {
        sh1: "repeat(1, 100px)",
        sh2: "repeat(2, 100px)",
        sh3: "repeat(3, 100px)",
      },
      animation: {
        wiggle: "wiggle 0.5s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
