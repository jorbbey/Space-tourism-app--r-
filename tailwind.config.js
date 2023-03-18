/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '5px 5px 15px 5px #000000'
      },
      height: {
        'xl': '150vh',
        'xxl': '200vh'
      },
      fontSize: {
        'xxl': '8em',
        'mxl': '7em',
        'sxl': '5em',
        'sl' : '4em'
      },
      backgroundSize: {
        '100': '100%',
        '200': '200%',
      },
      backgroundImage: {
        'desktop-home-bg': "url('./assets/home/background-home-desktop.jpg')",
        'tablet-home-bg': "url('./assets/home/background-home-tablet.jpg')",
        'mobile-home-bg': "url('./assets/home/background-home-mobile.jpg')",
        'desktop-destination-bg':
          "url('./assets/destination/background-destination-desktop.jpg')",
        'tablet-destination-bg':
          "url('./assets/destination/background-destination-tablet.jpg')",
        'mobile-destination-bg':
          "url('./assets/destination/background-destination-mobile.jpg')",
        'desktop-crew-bg': "url('./assets/crew/background-crew-desktop.jpg')",
        'tablet-crew-bg': "url('./assets/crew/background-crew-tablet.jpg')",
        'mobile-crew-bg': "url('./assets/crew/background-crew-mobile.jpg')",
        'desktop-technology-bg':
          "url('./assets/technology/background-technology-desktop.jpg')",
        'tablet-technology-bg':
          "url('./assets/technology/background-technology-tablet.jpg')",
        'mobile-technology-bg':
          "url('./assets/technology/background-technology-mobile.jpg')",
      },
    },
  },
  plugins: [],
}
