/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/components/Header.jsx',
    './src/components/Landing.jsx',
    './src/components/About.jsx',
    './src/pages/Homepage.jsx'
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    textColor: {
      'wild': '#949B38',
      'rodeo' : '#8D7660',
      'darkerwild' : '#949b38',
    },
    extend: {
      backgroundColor: {
        'wild' : '#D1d779',
        'wilddark': '#b3ba57',
        'lightwild': '#E5EB90',
        'darkerwild' : '#949b38',
        'rodeo' : '#8D7660',
        
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}