/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ["Poppins"],
      sans: ["Poppins"],
      display: ["Poppins"],
      body: ["Poppins"],
      mono: ["Poppins"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: {
          50: "#C3C5F8",
          200: "#888CF1",
          400: "#4C52EA",
          600: "#33379C",
          900: "#191B4E",
        },
        secondary: {
          50: "#FFE8C5",
          200: "#FFD18C",
          400: "#FFC56F",
          600: "#FFBA52",
          900: "#B27922",
        },
        typoLight: {
          50: "#BFBFBF",
          200: "#7E7E7E",
          400: "#3E3E3E",
          600: "#292929",
        },
        typoDark: {
          50: "#E8E8E8",
          200: "#F6F6F6",
          400: "#CDCDCD",
          600: "#A4A4A4",
        },
        bgLight: {
          50: "#FFFFFF",
          200: "#F0F1FE",
          400: "#D2D3E3",
        },
        bgDark: {
          50: "#56587A",
          200: "#2C2E56",
          400: "#181939",
        },
        success: {
          100: "#5F9651",
        },
        error: {
          100: "#C74C4C",
        },
        warning: {
          100: "#DDBD4A",
        },
      },
    },
    boxShadow: {
      btn: "2px 5px 20px rgba(0, 0, 0, 0.16);",
    },
  },
  plugins: [],
  plugins: [],
};
