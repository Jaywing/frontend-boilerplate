function cssTranspile() {
  const autoprefixer = require('gulp-autoprefixer');
  const cssnano = require('gulp-cssnano');
  const flags = require('../config/flags');
  const gulp = require('gulp');
  const paths = require('../../package.json').paths;
  const purgecss = require('gulp-purgecss');
  const rename = require('gulp-rename');
  const sass = require('gulp-sass');
  const sourcemaps = require('gulp-sourcemaps');
  const util = require('gulp-util');

  return gulp
    .src(paths.css.src + '!(_)*.scss')
    .pipe(flags.maps ? sourcemaps.init() : util.noop())
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
        remove: false
      })
    )
    .pipe(flags.minify ? cssnano() : util.noop())
    .pipe(
      flags.purge
        ? purgecss({
            content: [
              paths.static_folder + '**/*.html',
              paths.static_folder + '**/*.js'
            ]
          })
        : util.noop()
    )
    .pipe(
      rename(function(path) {
        path.extname = '.css';
      })
    )
    .pipe(flags.maps ? sourcemaps.write('maps') : util.noop())
    .pipe(gulp.dest(paths.css.static_dest));
}

exports.cssTranspile = cssTranspile;
