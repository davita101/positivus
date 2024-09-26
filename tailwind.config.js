/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{jsx,tsx}",
    "./components/**/*.{jsx,tsx}",
    "./app/**/*.{jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1450px",
      },
    },
    extend: {
      colors: {
        "accentGreen": "#B9FF66",
        "lightGray": "#F3F3F3",
        "primaryDark": "#191A23"
      },
      boxShadow: {
        '3xl': '0px 2px 0px 0px rgba(0, 0, 0, 1)',
      },
      fontSize: {
        "baseText": "16px",
        "headingLarge": "60px",
        "headingMedium": "40px",
        "headingSmall": "30px",
        "headingXSmall": "20px",
        "headingLargeMobile": "43px",
        "headingMediumMobile": "36px",
        "headingSmallMobile": "26px",
        "headingXSmallMobile": "18px",
      }
    },
  },
  plugins: [],
};
