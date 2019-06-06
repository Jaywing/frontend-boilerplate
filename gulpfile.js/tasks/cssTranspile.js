const paths = require('../../package.json').paths;
const gulp = require('gulp');

function cssTranspile() {
  const postcss = require('gulp-postcss');

  return gulp
    .src(paths.styles.src + '*.scss')
    .pipe(postcss([require('tailwindcss'), require('autoprefixer')]))
    .pipe(gulp.dest(paths.styles.dest));
}

exports.cssTranspile = cssTranspile;
