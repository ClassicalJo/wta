/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/renderer/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#1a314f",
        "dark-secondary": "#215751",
        "dark-accent": "#3d9a95",
        "dark-text": "#a1e7f5"
      },
      screens: {
        'h-sm': { 'raw': '(min-height: 480px)' },
        'h-md': { 'raw': '(min-height: 600px)' },
        'h-lg': { 'raw': '(min-height: 900px)' },
        'h-xl': { 'raw': '(min-height: 1080px)' },
      },
    },
  },
  plugins: [],
}

