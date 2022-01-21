const flags = require("./cli-flags.config");
const paths = require("./package.json").paths;

module.exports = {
  content: [
    flags.proxy ? paths.html.proxyWatch : paths.html.staticSrc + "*.njk",
    paths.js.src + "*.+(ts|tsx|js|jsx)",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
