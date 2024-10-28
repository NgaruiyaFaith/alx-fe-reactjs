/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html'
  ], 
  darkMode: 'media', // Or 'class' for manual control
  theme: {
    extend: {},
  },
  plugins: [],
};
