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
        dark: {
          DEFAULT: '#0a0a0a',
          lighter: '#1a1a1a',
          glass: 'rgba(255, 255, 255, 0.05)',
        },
        neon: {
          blue: '#00f3ff',
          purple: '#bc13fe',
          pink: '#ff00ff',
          green: '#39ff14',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00f3ff, 0 0 20px #00f3ff',
        'neon-purple': '0 0 5px #bc13fe, 0 0 20px #bc13fe',
      }
    },
  },
  plugins: [],
}
