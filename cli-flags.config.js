const util = require("gulp-util");

module.exports = {
  sourcemaps: !!util.env.sourcemaps,
  minify: !!util.env.minify,
  proxy: !!util.env.proxy,
  purge: !!util.env.purge,
  tsErrors: !!util.env.tsErrors,
};