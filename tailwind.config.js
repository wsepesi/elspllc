/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Using the existing SYSTEM_COLORS from colors.ts for consistency
        // primary: '#66b1f2',
        // 'primary-shade': '#499de5',
        // secondary: '#305473',
        // 'secondary-shade': '#4f708c',
        // tertiary: '#f2f0d0',
        // 'tertiary-shade': '#e7e5c7',
        // background: '#F3F3F1',
        // error: '#EE0000',
        // gray: '#7A766D',
        // 'gray-10': '#DFDFD8',
        // 'gray-shade': '#302E28',
        // 'light-gray': '#A9A59C',
        // 'light-gray-30': '#D2CFC7',
        // white: '#FFFFFF',
        // 'transparent-border': 'rgba(48, 46, 40, 0.1)',
        // black: '#000000',
        // // Backwards compatibility with existing usage
        // beige: '#F3F3F1', // maps to background
        // 'deep-blue': '#305473', // maps to secondary
        // 'light-blue': '#66b1f2', // maps to primary
        // 'dark-blue': '#4f708c', // maps to secondary-shade
        // 'transparent-white': 'rgba(255, 255, 255, 0.95)',
      },
      fontFamily: {
        libre: ['var(--font-libre)', 'sans-serif'],
        aleo: ['Aleo', 'serif'],
        playfair: ['var(--font-playfair)', 'serif'],
        crimson: ['var(--font-crimson)', 'serif'],
        garamond: ['var(--font-garamond)', 'serif'],
      },
      fontSize: {
        // Using the precise font sizes from the theme configuration
        h1: '4rem', // 64px
        'h1-mobile': '2.25rem', // 36px for mobile
        h2: '4.75rem', // 76px
        h3: '3.375rem', // 54px
        h4: '2.5rem', // 40px
        h5: '1.5rem', // 24px
        body1: '1.125rem', // 18px
        body2: '1rem', // 16px
        subtitle1: '2rem', // 32px
        subtitle2: '1.375rem', // 22px
        button: '1rem', // 16px
      },
      lineHeight: {
        h1: '4.875rem', // 78px
        'h1-mobile': '2.6875rem', // 43px for mobile
        h2: '5.75rem', // 92px
        h3: '4.0625rem', // 65px
        h4: '3rem', // 48px
        h5: '1.8125rem', // 29px
        body1: '1.75rem', // 28px
        body2: '1.375rem', // 22px
        subtitle1: '3rem', // 48px
        subtitle2: '1.6875rem', // 27px
        button: '1.5rem', // 24px
      },
      screens: {
        xs: '0px',
        sm: '475px',
        md: '750px',
        lg: '950px',
        xl: '1280px',
      },
      keyframes: {
        textEffect: {
          '0%': { backgroundPosition: 'right bottom' },
          '100%': { backgroundPosition: 'left bottom' },
        },
      },
      animation: {
        'text-effect': 'textEffect 3s ease-in-out infinite',
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
      },
    },
  },
  plugins: [],
}
