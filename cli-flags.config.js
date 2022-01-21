const util = require("gulp-util");

module.exports = {
  combinemq: !!util.env.combinemq,
  minify: !!util.env.minify,
  proxy: !!util.env.proxy,
  purge: !!util.env.purge,
  sourcemaps: !!util.env.sourcemaps,
  tsErrors: !!util.env.tsErrors,
};
