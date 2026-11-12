import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Option 5: Monocromático Minimalista (Estilo Vercel, Next.js, Apple)
        emerald: {
          ...colors.zinc,
          400: '#e4e4e7', // prata brilhante no dark mode
          600: '#18181b', // preto sofisticado no light mode
          700: '#09090b',
        },
        teal: colors.slate,
        brand: colors.zinc,
        navy: {
          800: '#0f172a',
          900: '#0a0f1d',
          950: '#050811',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
