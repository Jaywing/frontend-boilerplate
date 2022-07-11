const argv = require("minimist")(process.argv.slice(2));

module.exports = {
  combinemq: !!argv.combinemq,
  minify: !!argv.minify,
  proxy: !!argv.proxy,
  purge: !!argv.purge,
  sourcemaps: !!argv.sourcemaps,
  tsErrors: !!argv.tsErrors,
};
