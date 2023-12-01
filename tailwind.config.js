/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/components/sections/Header.jsx',
    './src/components/sections/Landing.jsx',
    './src/components/sections/About.jsx',
    './src/components/sections/Projects.jsx',
    './src/components/sections/StickyProfile.jsx',
    './src/components/sections/Footer.jsx',
    './src/components/partials/Card.jsx',
    './src/pages/Homepage.jsx'
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      textColor: {
        'white': '#FFFFFF',
        'wild': '#D1d779',
        'rodeo' : '#8D7660',
        'darkerwild' : '#949b38',
        'flint' : '#6F675D',
        'flintdark' : '#4F473F',
        'judgedark' : '#433629',
        'creole' : '#2E210D',
      },
      backgroundColor: {
        'wild' : '#D1d779',
        'wilddark': '#b3ba57',
        'lightwild': '#E5EB90',
        'darkerwild' : '#949b38',
        'rodeo' : '#8D7660',
        'flint' : '#6F675D',
        'flintdark' : '#4F473F',
        'judgedark' : '#433629',
        'creole' : '#2E210D',
      },
      borderColor: {
        'flintdark': '#4F473F',
        'judgedark' : '#433629',
      },
      fill: {
        'rodeo' : '#8D7660',
        'lightwild': '#E5EB90',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'graindeur' : ['Graindeur'],
        'unbounded': ['Unbounded', 'sans-serif']
      },
      fontSize: {
        'xxs': '0.50rem'
      },
      fontWeight: {
        'ebold': 900
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
    },
    }
  },
  plugins: [
  ]
}