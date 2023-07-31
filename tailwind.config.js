/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: "#d0fd3e",
        error: "#ff2d55",
        "gray-light": "#aca4af",
        gray: {
          "100": "#505050",
          "200": "rgba(32, 32, 32, 0.92)",
        },
        darkslategray: "#434343",
        premium: "#f6a800",
        "dark-2": "#2c2c2e",
        "dark-1": "#1c1c1e",
        black: "#000",
        "dark-3": "#3a3a3c",
        red: {
          "100": "#ff2424",
          "200": "rgba(255, 36, 36, 0.1)",
        },
        "background-blur-50": "rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        "body-regular": "'Open Sans'",
        "sf-pro-text": "'SF Pro Text'",
        inter: "Inter",
        "integral-cf": "'Integral CF'",
      },
      borderRadius: {
        "8xs-6": "4.6px",
        "81xl": "100px",
        "29xl": "48px",
        "31xl": "50px",
        "10xs": "3px",
        "45xl": "64px",
        "13xl": "32px",
      },
    },
    fontSize: {
      mini: "15px",
      "2xs": "11px",
      mid: "17px",
      "3xl-5": "22.5px",
      base: "16px",
      smi: "13px",
      "4xs": "9px",
      xl: "20px",
      "3xs": "10px",
      "9xl": "28px",
      "5xl": "24px",
      "8xl": "27px",
      "15xl": "34px",
      "24xl": "43px",
      "39xl": "58px",
      "17xl": "36px",
      "13xl": "32px",
      "3xl": "22px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};