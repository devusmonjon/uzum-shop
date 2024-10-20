/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'primary-accent': 'var(--primary-accent)',
        'light': 'var(--light)',
        'light-secondary': 'var(--light-secondary)',
        'dark': 'var(--dark)',
        'dark-secondary': 'var(--dark-secondary)',
        'border': 'var(--border)',
        'product-bg': 'var(--product-bg)',
        'violet': 'var(--violet)',
        'pink': 'var(--pink)',
        'gray': 'var(--gray)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}