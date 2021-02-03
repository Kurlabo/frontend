module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Noto Sans KR'],
      },
      borderRadius: {
        'p-3': '0.3rem',
        '50-p': '50%',
      },
      fontSize: {
        'p-16': '1.6rem',
        'p-24': '2.4rem',
      },
      colors: {
        kp: {
          100: '#B1A9C6',
          200: '#D2BEFF',
          300: '#BA99E1',
          400: '#A775D6',
          500: '#875EB3',
          600: '#5F0080',
        },
        discount: {
          100: '#FA622F',
        },
        kdp: {
          100: '#31123D',
          200: '#401351',
          300: '#4F1266',
          400: '#5E107B',
        },
        klp: {
          100: '#E5D6E8',
          200: '#CBAFD2',
          300: '#B088BC',
          400: '#9563A6',
          500: '#7A3D91',
          600: '#5E107B',
        },
      },
      spacing: {
        'p-28': '2.8rem',
        'p-33': '3.3rem',
        'p-38': '3.8rem',
        'p-400': '40rem',
        'p-1050': '105rem',
        'p-870': '87rem',
        'p-308': '30.8rem',
        'p-396': '39.6rem',
      },
      outline: {
        0: ['0px solid #ffffff'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
