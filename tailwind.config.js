module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Noto Sans KR'],
      },
      fontSize: {
        formTitle: '1.4rem',
        formSub: '1.2rem',
      },
      width: {
        formWidth: '64rem',
        formInput: '32rem',
      },
      height: {
        16.5: '4.4rem',
      },
      padding: {
        102: '10.2rem',
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
        formStar: '#ee6a7b',
        inputGray: '#cccccc',
        inputRadio: '#dddddd',
      },
      outline: {
        none: ['0px solid #0000ff', '0px'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
