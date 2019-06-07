function cssTranspile() {
  const gulp = require('gulp');
  const paths = require('../../package.json').paths;
  const postcss = require('gulp-postcss');
  const sourcemaps = require('gulp-sourcemaps');

  return gulp
    .src(paths.styles.src + '*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      postcss([
        require('postcss-import'),
        require('postcss-nesting'),
        require('postcss-custom-properties'),
        require('tailwindcss'),
        require('autoprefixer')
      ])
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest));
}

exports.cssTranspile = cssTranspile;
