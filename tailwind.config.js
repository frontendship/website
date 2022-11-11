/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primaryBrand: '#187AEB',
        secondaryBrand: '#0CBACC',
        'primary-blue-400': '#050B1E',
        'primary-blue-300': '#0E1B31',
        'primary-blue-200': '#132340',
        'primary-blue-100': '#293B56',
      },
      keyframes: {
        wiggle: {
          '0%': { left: '-400px' },
          '100%': { left: '0px' },
        },
      },
    },
  },
  plugins: [],
};
