/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'default': '4px 4px 8px 0px rgba(34, 60, 80, 0.2)'
      }
    },
  },
  plugins: [],
}

