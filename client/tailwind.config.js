module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT: '0 2px 5px 0 rgba(66, 66, 66, 0.4)',
      1: '0 3px 10px rgba(66, 66, 66, 0.3)',
      3: '0 1px 3px rgba(66, 66, 66, 0.3)',
      4: '0 3px 20px 0 rgba(66, 66, 66, 0.15)',
      5: '0 -3px 10px 0 rgba(66, 66, 66, 0.1)',
      inner: 'inset 0 0 0 1px rgb(232, 235, 234)',
      upperStrong: '0 -3px 10px rgba(66, 66, 66, 0.3)',
      headerShadow: '0 3px 10px 0 rgba(66, 66, 66, 0.1)', // 해더 전용 shadow
      mapTools: '0 1px 5px rgba(66, 66, 66, 0.2)',
    },
    backgroundPosition: {
      'left-center': 'left center',
    },
    backgroundSize: {
      24: '24px',
    },
    zIndex: {
      max: 999,
    },
    extend: {
      fontSize: {
        xxs: '.625rem', // font-size 10px
        xs: '.75rem', // font-size 12px
        s: '.8125rem', // font-size 13px
        sm: '.875rem', // font-size 14px
        m: '.9375rem', // font-size 15px
        base: '1rem', // font-size 16px
        lg: '1.125rem', // font-size 18px
        '2xl': '1.5rem', // font-size 24px
      },
      borderRadius: {
        5: '5px',
        20: '20px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
      textColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
      opacity: ['disabled'],
      borderColor: ['active'],
      transitionDuration: ['hover', 'focus'],
      ringWidth: ['hover', 'active'],
      fill: ['hover', 'active'],
    },
  },
  plugins: [],
};