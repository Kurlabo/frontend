module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      'r-6': '6rem',
    },
    fontSize: {
      'r-2.8': '2.8rem',
      'r-1.6': '1.6rem',
      'r-1.4': '1.4rem',
    },
    fontFamily: {
      body: ['Noto Sans KR'],
    },
    extend: {
      backgroundImage: (theme) => ({
        'big-pre-button':
          "url('https://res.kurly.com/pc/service/main/1908/ico_prev1_x1.png')",
        'big-next-button':
          "url('https://res.kurly.com/pc/service/main/1908/ico_next1_x1.png')",
        'sm-pre-button':
          "url('https://res.kurly.com/pc/service/main/1908/btn_prev_default_x2.png?v=1')",
        'sm-next-button':
          "url('https://res.kurly.com/pc/service/main/1908/btn_next_default_hover_x2.png?v=1')",
      }),
      inset: {
        'p-91': '9.1rem',
        'p-159': '15.9rem',
        'r--3': '-3rem',
      },
      spacing: {
        'r-105': '105rem',
        'r-735': '735rem',
        'p-52': '5.2rem',
        'vw-700': '700vw',
        'r-52': '52rem',
        'p-370': '370px',
        'r-65.2': '65.2rem',
        'r-7.9': '7.9rem',
        'r-3.5': '3.5rem',
        'r-49.6': '49.6rem',
        'r-24.9': '24.9rem',
        'r-1.3': '1.3rem',
        'r-6': '6rem',
        'r-13': '13rem',
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
