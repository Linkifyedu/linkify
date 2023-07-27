const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "blue-light": {
          extend: "light", // <- inherit default values from dark theme
          colors: {
            background: "#38B6FF",
            foreground: "#000000",
            primary: {
              100: "#D7FAFF",
              200: "#AFF0FF",
              300: "#87E1FF",
              400: "#69D1FF",
              500: "#38B6FF",
              600: "#288EDB",
              700: "#1C6BB7",
              800: "#114C93",
              900: "#0A357A",
              DEFAULT: "#38B6FF",
              foreground: "#F2F2F2",
            },
            focus: "#87E1FF",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
            fontFamily: {
              'main': ["Poppins"],
            }
          },
        },
      },
    }),
  ],
}
