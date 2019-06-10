const util = require('gulp-util');

module.exports = {
  minify: !!util.env.minify,
  maps: !!util.env.maps
};
