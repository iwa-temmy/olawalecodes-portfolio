/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('/assets/background.png')",
      },
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
        'axiforma': ['Axiforma W05 Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}