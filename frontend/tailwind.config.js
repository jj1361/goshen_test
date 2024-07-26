/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  // content:["node_modules/daisyui/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#4c1d95',
        secondary: '#ede9fe',
      },
      fontFamily: {
        sukkot: [' "Archivo Black" ', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: ['dark', 'light', 'corporate', 'cupcake'],
  },
  plugins: [require('daisyui')],
};
