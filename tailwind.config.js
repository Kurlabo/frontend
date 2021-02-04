module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Noto Sans KR'],
    },
    extend: {
      backgroundImage: (theme) => ({
        'pre-button':
          "url('https://res.kurly.com/pc/service/main/1908/ico_prev1_x1.png')",
        'next-button':
          "url('https://res.kurly.com/pc/service/main/1908/ico_next1_x1.png')",
      }),
      inset: {
        'p-91': '9.1rem',
        'p-159': '15.9rem',
      },
      spacing: {
        'p-52': '5.2rem',
        'vw-700': '700vw',
        'r-52': '52rem',
        'p-370': '370px',
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
