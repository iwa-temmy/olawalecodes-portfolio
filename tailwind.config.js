/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        sm: '2rem',
        md: '1rem',
        lg: '1rem',
        xl: '4rem',
      },
      margin: {
        sm: '0rem',
      }
    },
    extend: {
      backgroundColor: {
        "dark": "#111111"
      },
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