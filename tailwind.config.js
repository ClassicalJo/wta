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
        "float": "float 5s ease-in-out infinite",
      },
      screens: {
        'h-sm': { 'raw': '(min-height: 480px)' },
        'h-md': { 'raw': '(min-height: 600px)' },
        'h-lg': { 'raw': '(min-height: 900px)' },
        'h-xl': { 'raw': '(min-height: 1080px)' },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        "dialog.backdrop-blur-sm::backdrop": {
          backdropFilter: "blur(3px)", // Apply blur effect to the backdrop
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark overlay
          transition: "backdrop-filter 0.3s ease-in-out",
        },
      });
    },
  ],
}

