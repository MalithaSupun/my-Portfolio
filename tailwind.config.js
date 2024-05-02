/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundone: '#000000',
        backgroundtwo: '#1a1a1a'
      }
    },
  },
  plugins: [],
}
