/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       'bg-dark': '#0d0d0d',
       'txtprimary':'#b7ab98 ',
       'txtsecondary': '#c84c31'
      }
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
      Roboto: ['Roboto Mono', 'monospace']
    },
  },
  plugins: [],
}