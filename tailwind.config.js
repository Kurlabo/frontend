const plugin = require('tailwindcss/plugin');

const focusedSiblingPlugin = plugin(function ({ addVariant, e }) {
  addVariant('focused-sibling', ({ container }) => {
    container.walkRules((rule) => {
      rule.selector = `:checked + .focused-sibling\\:${rule.selector.slice(1)}`;
    });
  });
});

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      'r-0.4': '0.4rem',
      'r-2': '2rem',
    },
    backgroundSize: {
      'r-6': '6rem',
    },
    fontSize: {
      'r-1.2': '1.2rem',
      'r-1.4': '1.4rem',
      'r-1.6': '1.6rem',
      'r-2.2': '2.2rem',
      'r-2.8': '2.8rem',
      'r-3': '3rem',
    },
    fontFamily: {
      body: ['Noto Sans KR'],
    },
    extend: {
      lineHeight: {
        'r-3.5': '3.5rem',
        'r-5': '5rem',
        'r-6.3': '6.3rem',
      },
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
        'r--1': '-1rem',
        'r--3': '-3rem',
        'p-91': '9.1rem',
        'p-159': '15.9rem',
      },
      spacing: {
        'r-1.3': '1.3rem',
        'r-1.6': '1.6rem',
        'r-3.5': '3.5rem',
        'r-4.5': '4.5rem',
        'p-52': '5.2rem',
        'r-5.6': '5.6rem',
        'r-5.75': '5.75rem',
        'r-6': '6rem',
        'r-7.9': '7.9rem',
        'r-13': '13rem',
        'r-17.5': '17.5rem',
        'r-24.9': '24.9rem',
        'p-370': '37rem',
        'r-49.6': '49.6rem',
        'r-52': '52rem',
        'r-65.2': '65.2rem',
        'r-73': '73rem',
        'r-74.2': '74.2rem',
        'r-105': '105rem',
        'r-735': '735rem',
        'vw-99': '99vw',
        'vw-700': '700vw',
      },
      colors: {
        // 메인페이지 인스타그램 컬러
        kmi: {
          100: '#999',
        },
        // 메인페이지 md상품 border 컬러
        kmmd: {
          100: '#e3e3e3',
        },
        kb: {
          100: '#f6f3f8',
        },
        kg: {
          200: '#b5b5b5',
          300: '#4c4c4c',
          400: '#333',
          500: '#f7f7f7',
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
  // 포커스시 형제요소중 fucsed-sibling이 있는 클래스 요소클릭
  plugins: [focusedSiblingPlugin],
  variants: {
    extend: {
      fontWeight: ['hover', 'focus', 'focused-sibling'],
      backgroundColor: ['focused-sibling'],
      textColor: ['focused-sibling'],
    },
  },
};
