const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: false, // or 'media' or 'class'
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
      },
    },
    fontFamily: {
      sans: ['Satoshi', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      backgroundOpacity: ['active'],
    },
  },
  plugins: [],
};
