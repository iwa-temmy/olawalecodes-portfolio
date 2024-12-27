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
        sm: '1rem',
        md: '8.5rem',
        lg: '8.5rem',
        xl: '8.5rem',
        '2xl': '8.5rem',
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