const util = require("gulp-util");

module.exports = {
  static: !!util.env.static,
  minify: !!util.env.minify,
  maps: !!util.env.maps,
  purge: !!util.env.purge,
  tsErrors: !!util.env.tsErrors,
};
