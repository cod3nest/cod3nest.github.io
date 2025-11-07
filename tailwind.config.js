/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f9fa',
          100: '#eceff1',
          200: '#cfd8dc',
          300: '#b0bec5',
          400: '#78909c',
          500: '#546e7a',
          600: '#2C3E50',  // Deep Charcoal - authority and strength
          700: '#243342',
          800: '#1c2833',
          900: '#151e27',
          950: '#0d1419',
        },
        accent: {
          50: '#fffbeb',
          100: '#fff4cc',
          200: '#ffe999',
          300: '#ffdd66',
          400: '#ffd633',
          500: '#FFC300',  // Electric Yellow - energy and precision
          600: '#e6b000',
          700: '#cc9d00',
          800: '#b38a00',
          900: '#996600',
        },
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
