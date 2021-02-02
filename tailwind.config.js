module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'pre-button':
          "url('https://res.kurly.com/pc/service/main/1908/ico_prev1_x1.png')",
        'next-button':
          "url('https://res.kurly.com/pc/service/main/1908/ico_next1_x1.png')",
      }),
      inset: {
        91: '91px',
        159: '159px',
      },
      spacing: {
        700: '700vw',
        13: '52px',
        370: '370px',
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
