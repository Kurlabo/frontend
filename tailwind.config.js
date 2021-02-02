module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
        18: '18px',
        40: '40px',
        56: '56px',
        88: '88px',
        128: '128px',
        150: '150px',
        278: '278px',
        320: '320px',
        1050: '1050px',
        410: '410px',
        430: '430px',
        552: '552px',
        560: '560px',
      },
      borderRadius: {
        3: '3px',
      },
      fontSize: {
        13: '13px',
        14: '14px',
        16: '16px',
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px',
      },
      fontFamily: {
        body: ['Noto Sans KR'],
      },
      lineHeight: {
        40: '40px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
