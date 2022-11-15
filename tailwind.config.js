module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    borderRadius: {
      'lg': '2rem',
    },
    extend: {},
  },
  plugins: [],
  safelist: [
    'col-span-1',
    'row-span-1',
    'col-span-2',
  ]
};
