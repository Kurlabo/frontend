module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Noto Sans KR'],
      },
      fontSize: {
        'r-1.2': '1.2rem',
        'r-1.3': '1.3rem',
        'r-1.4': '1.4rem',
        'r-1.5': '1.5rem',
        'r-1.6': '1.6rem',
        'r-1.8': '1.8rem',
        'r-2': '2rem',
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
        kg: {
          200: '#b5b5b5',
          300: '#4c4c4c',
          400: '#333',
        },
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
          700: '#E8F0FE',
        },
        formStar: '#ee6a7b',
        inputGray: '#cccccc',
        inputRadio: '#dddddd',
      },
      outline: {
        none: ['0px solid #0000ff', '0px'],
      },
      spacing: {
        'p-54': '54px',
        'p-340': '340px',
        'r-0.9': '0.9rem',
        'r-1.1': '1.1rem',
        'r-1.9': '1.9rem',
        'r-2.8': '2.8rem',
        'r-4.4': '4.4rem',
        'r-64': '64rem',
        'r-32': '32rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
