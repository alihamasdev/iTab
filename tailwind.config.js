/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      accent: '#F7A70A',
      red: colors.red,
      white: colors.white,
      black: colors.black,
      transparent: colors.transparent,
      inherit: colors.inherit,
    },
    fontFamily: {
      poppins: ['Poppins', 'system-ui'],
      ...defaultTheme.fontFamily,
    },
    fontSize: {
      13: '13px',
      ...defaultTheme.fontSize,
    },
    extend: {
      backgroundImage: {
        img: "url('../bg_img.jpg')",
      },
      spacing: {
        50: '50px',
        100: '100px',
        '4.5/5': '90%',
      },
      animation: {
        wiggle: 'wiggle 0.5s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
