module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Noto Sans KR'],
    },
    fontSize: {
      1.2: '1.2rem',
      1.3: '1.3rem',
      1.4: '1.4rem',
      1.5: '1.5rem',
      1.6: '1.6rem',
      1.8: '1.8rem',
      2: '2rem',
    },
    extend: {
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
          50: '#F0EEF1',
          100: '#E5D6E8',
          200: '#CBAFD2',
          300: '#B088BC',
          400: '#9563A6',
          500: '#7A3D91',
          600: '#5E107B',
          700: '#E8F0FE',
        },
      },
      spacing: {
        'p-18': '1.8rem',
        'p-40': '4rem',
        'p-56': '5.6rem',
        'p-88': '8.8rem',
        'p-128': '12.8rem',
        'p-150': '15rem',
        'p-180': '18rem',
        'r-17': '17rem',
        'p-230': '23rem',
        'p-278': '27.8rem',
        'p-320': '32rem',
        'p-410': '41rem',
        'p-430': '43rem',
        'p-552': '55.2rem',
        'p-560': '56rem',
        'p-950': '95rem',
        'r-101': '101rem',
        'p-1050': '105rem',
        'per-500': '1000%',
      },
      borderRadius: {
        'p-3': '0.3rem',
      },
      fontSize: {
        'p-13': '1.3rem',
        'p-14': '1.4rem',
        'p-16': '1.6rem',
        'p-20': '2rem',
        'p-24': '2.4rem',
        'p-28': '2.8rem',
        'p-32': '3.2rem',
      },
      fontFamily: {
        body: ['Noto Sans KR'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
