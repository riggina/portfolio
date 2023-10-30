/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/components/Header.jsx',
    './src/pages/Landing.jsx'
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    textColor: {
      'wild': '#949B38',
      'rodeo' : '#8D7660'
    },
    extends : {
      fontWeight: {
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      textColor: {
        'wild': '#949B38',
      },
      backgroundColor: {
        'transparent': 'transparent', // Add a transparent option
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}