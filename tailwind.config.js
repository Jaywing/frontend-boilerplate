const flags = require("./cli-flags.config");
const paths = require("./package.json").paths;

module.exports = {
  content: [
    flags.proxy ? paths.html.proxyWatch : paths.html.staticSrc + "*.njk",
    paths.js.src + "*.+(ts|tsx|js|jsx)",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "brand-primary": "#222",
      white: "#fff",
      black: "#000",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    extend: {},
  },
  plugins: [],
};