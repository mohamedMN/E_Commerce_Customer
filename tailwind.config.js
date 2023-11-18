// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "background-color": "#183D3D",
        "text-color": "#5C8374",
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
};
