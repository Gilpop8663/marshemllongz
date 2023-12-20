/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primaryWhite: '#ffffff',
        primaryBlack: '#222222',
        darkGray: '#4e4e4e',
        whiteGray: '#f7f7f7',
        lightGray: '#d3d3d3',
        primaryRed: '#ff5454',
        primaryOrange: '#FF8300',
      },
      fontFamily: {
        base: ['Noto Sans KR'],
        handWriting: ['Delicious Handrawn'],
      },
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
        14: 'repeat(14, minmax(0, 1fr))',
        15: 'repeat(15, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
        17: 'repeat(17, minmax(0, 1fr))',
        18: 'repeat(18, minmax(0, 1fr))',
        19: 'repeat(19, minmax(0, 1fr))',
        20: 'repeat(20, minmax(0, 1fr))',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar-hide')],
};
