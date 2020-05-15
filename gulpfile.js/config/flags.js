const util = require("gulp-util");

module.exports = {
  maps: !!util.env.maps,
  minify: !!util.env.minify,
  proxy: !!util.env.proxy,
  purge: !!util.env.purge,
  tsErrors: !!util.env.tsErrors,
};
