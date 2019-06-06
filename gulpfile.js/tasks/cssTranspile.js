function cssTranspile() {
  const gulp = require('gulp');
  const paths = require('../../package.json').paths;
  const postcss = require('gulp-postcss');
  const sourcemaps = require('gulp-sourcemaps');
  const postcssImport = require('postcss-import');
  const precss = require('precss');
  const autoprefixer = require('autoprefixer');
  const cssnano = require('cssnano');
  const tailwindCss = require('tailwindcss');

  // TODO: Add PostCSS config

  return gulp
    .src(paths.styles.src + '*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      postcss([
        postcssImport(),
        precss(),
        tailwindCss(),
        autoprefixer(),
        cssnano()
      ])
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest));
}

exports.cssTranspile = cssTranspile;
