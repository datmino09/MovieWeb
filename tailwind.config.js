/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e50914', // Đỏ Netflix
          dark: '#b20710',
        },
        dark: {
          DEFAULT: '#141414',
          light: '#2f2f2f',
        }
      },
    },
  },
  plugins: [],
}