/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans - serif'],
        inter: ['Inter', 'sans - serif']
      },
      height: {
        '1': ['1px'],
      },
      backgroundColor: {
        purple_custom: '#872BFF',
      },
      backgroundImage: {
        'linear-gradient': 'linear-gradient(170.49deg, #C82BFF 7.17%, #660BDD 94.01%)',
      },
      padding: {
        '3.5': '15px',
        '7.5':'30px'
      }
    },
  },
  plugins: [],
}