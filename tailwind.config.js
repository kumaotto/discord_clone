/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flex: {
        '0.35': '0.35 1'
      },
      backgroundColor: {
        'sidebar': '#212226',
        'side-menu': '#303136'
      }
    },
  },
  plugins: [],
}

