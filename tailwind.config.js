module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'alata': "'Alata', sans-serif",
        'sen': "'Sen', sans-serif",
        'polite': "'PoliteType', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
