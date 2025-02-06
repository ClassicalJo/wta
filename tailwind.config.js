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
        "dark-text": "#a1e7f5",
        "dark-warning": "#c83737"
      },
      animation: {
        "fade-up-sm": "fade-up-sm 0.15s ease-in",
        "fade-up-md": "fade-up-md 0.5s ease-in",
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

