const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './components/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './modules/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          lightest: '#68D2A7',
          lighter: '#36C38A',
          DEFAULT: '#04B46D',
          darker: '#039057',
          darkest: '#026C41',
        },
        black: {
          dark: '#1B1B1E',
          DEFAULT: '#373F51',
        },
        github: '#333',
        error: colors.rose['600'],
      },
      screen: {
        '3xl': '2160px',
      },
    },
    fontFamily: {
      sans: ['Satoshi', 'sans-serif'],
    },

  },
  plugins: [],
};
