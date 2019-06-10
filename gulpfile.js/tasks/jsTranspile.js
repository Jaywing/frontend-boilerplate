function jsTranspile() {
  const flags = require('../config/flags');
  const gulp = require('gulp');
  const paths = require('../../package.json').paths;
  const sourcemaps = require('gulp-sourcemaps');
  const util = require('gulp-util');

  return gulp
    .src(paths.js.src + '*.js')
    .pipe(flags.maps ? sourcemaps.init() : util.noop())
    .pipe(flags.maps ? sourcemaps.write('maps') : util.noop())
    .pipe(gulp.dest(paths.js.dest));
}

exports.jsTranspile = jsTranspile;
