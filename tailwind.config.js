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
        'side-menu': '#2C2D30',
        'chat': '#323338',
        'chat-input': '#3F434C'
      },
      fontFamily: {
        body: ['Noto Sans JP', 'sans-serif']
      }
    },
  },
  plugins: [],
}

