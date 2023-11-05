const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      backgroundImage: {
        'nature': "url('/images/bgpic.png')",
        'about': "url('/images/bgpic2.png')",
        'deals': "url('/images/bgpic3.png')",
        'travel': "url('/images/bgpic4.png')",

      }
    },
  },
  plugins: [],
}

