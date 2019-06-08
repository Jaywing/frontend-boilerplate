function jsTranspile() {
  const gulp = require('gulp');
  const paths = require('../../package.json').paths;
  const sourcemaps = require('gulp-sourcemaps');

  return gulp
    .src(paths.js.src + '*.js')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(paths.js.dest));
}

exports.jsTranspile = jsTranspile;
