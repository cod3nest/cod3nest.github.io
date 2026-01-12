/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'Times New Roman', 'serif'],
      },
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
          50: '#faf8f3',
          100: '#f5f0e6',
          200: '#ebe0c9',
          300: '#dccba3',
          400: '#c9a227',
          500: '#D4AF37',  // Muted Gold - premium and refined
          600: '#b8962f',
          700: '#9a7d27',
          800: '#7c641f',
          900: '#5e4b17',
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
