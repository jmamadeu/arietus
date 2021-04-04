module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      title: ['IBM Plex Sans'],
      body: ['Inter'],
    },

    extend: {
      colors: {
        primary: {
          default: '#41414c',
          main: '#f1972c',
        },

        secondary: {
          default: '#eb3b35',
          main: '#36b336',
        },

        texts: {
          primary: '#5a5a66',
          secondary: '#787880',
          complement: '#bfbfcc',
        },

        shapes: {
          greenLow: '#e8f8e8',
          redLow: '#faeceb',
          corner: '#e1e3e6',
          lines: '#e1e3e5',
          background: '#f0f2f5',
          box: '#fcfdff',
          complement: '#ECEEF0',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
