/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Tipografía global profesional
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      lineHeight: {
        relaxed: '1.7',
        loose: '1.9',
      },
      letterSpacing: {
        tight: '-0.01em',
        normal: '0',
        wide: '0.02em',
      },
      colors: {
        primary: '#2563EB', // azul corporativo base
      },
    },
  },
  plugins: [],
};
