/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{jsx}",
    "./components/**/*.{jsx}",
    "./app/**/*.{jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      },
    },
    extend: {
      colors: {
        "accentGreen": "#B9FF66",
        "lightGray": "#F3F3F3",
        "primaryDark": "#191A23"
      },
      fontSize: {
        "baseText": "16px",
        "headingLarge": "60px",
        "headingMedium": "40px",
        "headingSmall": "30px",
        "headingXSmall": "20px",
        "headingLargeLarge": "43px",
        "headingMediumMobile": "36px",
        "headingSmallMobile": "26px",
        "headingXSmallMobile": "18px",
      }
    },
  },
  plugins: [],
};
