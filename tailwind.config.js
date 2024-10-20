/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#7000FF',
        'secondary': '#FFFF00',
        'primary-accent': '#E5E5FF',
        'light': '#FFFFFF',
        'light-secondary': '#7E818C',
        'dark': '#1F2026',
        'dark-secondary': '#4D4F59',
        'border': 'rgba(54, 55, 64, 0.20)',
        'product-bg': 'rgba(54, 55, 64, 0.10)',
        'violet': '#2F006B',
        'pink': '#FF3090',
        'gray': '#E6E8ED',
      },
    },
  },
  plugins: [],
}