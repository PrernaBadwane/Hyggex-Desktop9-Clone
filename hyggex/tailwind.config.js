/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'logo': '0px 0px 20px 0.3px        ',
      },
      colors: {
        'blue': ' #083899',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond'],
    },
    },
    
  },
  plugins: [require('tailwindcss-font-inter')],
}

