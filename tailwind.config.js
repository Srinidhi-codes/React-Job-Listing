/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['Noto Sans', 'serif'],
        'mono': ['Roboto', 'monospace'],
      },
    },
  },
  plugins: [],
}

