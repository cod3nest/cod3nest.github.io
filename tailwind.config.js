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
          50: '#fdfbf7',
          100: '#faf5eb',
          200: '#f3e8d0',
          300: '#e8d5a8',
          400: '#d4af37',  // Rich Gold - premium signature
          500: '#B8860B',  // Dark Goldenrod - deeper premium
          600: '#9a7209',
          700: '#7c5c07',
          800: '#5e4605',
          900: '#403003',
        },
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'pulse-subtle': 'pulseSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #B8860B 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent)',
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(184, 134, 11, 0.25)',
        'gold-lg': '0 10px 25px -3px rgba(184, 134, 11, 0.3)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
