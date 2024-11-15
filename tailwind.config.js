/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: { xs: "540px" },
      colors: {
        peach: {
          100: "#FF9899",
        },
        lavender: {
          100: "#B381E9",
        },
        matcha: {
          50: "#DDFFAB",
          100: "#77B41B",
        },
      },
    },
    animation: {
      // components/indeterminateLoadingBar.js
      auxiliaryIndeterminateTranslate: "auxiliaryIndeterminateTranslate 2s infinite linear",
      primaryIndeterminateScale: "primaryIndeterminateScale 2s infinite linear",
      primaryIndeterminateTranslate: "primaryIndeterminateTranslate 2s infinite linear",
      // components/addToCart.js
      shine: "shine 1s",
      // components/navBar.js
      slideDown: "slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0s",
      fadeIn: "fadeIn 3s cubic-bezier(0.4, 0, 0.2, 1) 0s",
      fadeOut: "fadeOut 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0s forwards",
      // components/textScroll.js
      slide: "slide 5s infinite cubic-bezier(0.4, 0, 0.2, 1)",
    },
    keyframes: {
      auxiliaryIndeterminateTranslate: {
        "0%": { transform: "translateX(-54.888891%)" },
        "25%": { transform: "translateX(-17.236978%)" },
        "48.35%": { transform: "translateX(29.497274%)" },
        "100%": { transform: "translateX(105.388891%)" },
      },
      primaryIndeterminateScale: {
        "0%": { transform: "scaleX(.08)" },
        "36.65%": { transform: "scaleX(.08)" },
        "69.15%": { transform: "scaleX(.661479)" },
        "100%": { transform: "scaleX(.08)" },
      },
      primaryIndeterminateTranslate: {
        "0%": { transform: "translateX(-145.166611%)" },
        "20%": { transform: "translateX(-145.166611%)" },
        "59.15%": { transform: "translateX(-61.495191%)" },
        "100%": { transform: "translateX(55.44446%)" },
      },
      shine: {
        "100%": { left: "125%" },
      },
      slideDown: {
        "0%": { transform: "translateY(-50px)", opacity: 0 },
        "100%": { transform: "translateY(0px)", opacity: 1 },
      },
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      fadeOut: {
        "50%": { transform: "translateY(-50px)", opacity: 0 },
        "100%": { opacity: 0, height: 0, transform: "translateY(-99999px)" },
      },
      slide: {
        "0%": { top: "0" },
        "25%": { top: "-100%" },
        "50%": { top: "-200%" },
        "75%": { top: "-300%", opacity: 1 },
        "100%": { opacity: "0", top: "-400%" },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        "a": {
          fontWeight: "400",
          transition: "opacity",
          color: "rgba(0, 0, 0, .8)",
          "&:hover": {
            color: "#000",
            cursor: "pointer"
          }
        },
      })
    })
  ],
};
