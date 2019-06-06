const paths = require('../package.json').paths;

const gulp = require('gulp');

// const clean = require('./tasks/clean').clean;
const cssTranspile = require('./tasks/cssTranspile').cssTranspile;
// const cssMinify = require('./tasks/cssMinify').cssMinify;
// const jsTranspile = require('./tasks/jsTranspile').jsTranspile;
// const jsMinify = require('./tasks/jsTranspile').jsMinify;

function clean(cb) {
  // body omitted
  cb();
}

// function cssTranspile() {
//   const postcss = require('gulp-postcss');

//   return gulp
//     .src(paths.styles.src + '*.scss')
//     .pipe(postcss([require('tailwindcss'), require('autoprefixer')]))
//     .pipe(gulp.dest(paths.styles.dest));
// }

function cssMinify(cb) {
  // body omitted
  cb();
}

function jsTranspile(cb) {
  // body omitted
  cb();
}

function jsMinify(cb) {
  // body omitted
  cb();
}

exports.build = gulp.series(
  clean,
  gulp.parallel(
    gulp.series(cssTranspile, cssMinify),
    gulp.series(jsTranspile, jsMinify)
  )
);

exports.default = function() {
  gulp.watch(paths.styles.src, cssTranspile);
  gulp.watch(paths.scripts.src, jsTranspile);
};
