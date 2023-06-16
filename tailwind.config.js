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
        primaryRed: '#ff5454',
        primaryOrange: '#FF8300',
      },
      fontFamily: {
        base: ['Noto Sans KR'],
        handWriting: ['Delicious Handrawn'],
      },
    },
  },
  plugins: [],
};
