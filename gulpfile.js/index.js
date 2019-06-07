const paths = require('../package.json').paths;
const gulp = require('gulp');

// INDIVIDUAL TASKS
const clean = require('./tasks/clean').clean;
const cssTranspile = require('./tasks/cssTranspile').cssTranspile;
const htmlTranspile = require('./tasks/htmlTranspile').htmlTranspile;
const jsTranspile = require('./tasks/jsTranspile').jsTranspile;

// BUILD TASKS
const build = gulp.series(
  clean,
  gulp.parallel(
    gulp.series(cssTranspile),
    gulp.series(htmlTranspile),
    gulp.series(jsTranspile)
  )
);

// WATCH TASKS
const watch = () => {
  gulp.watch(paths.css.src + '*.scss', cssTranspile);
  gulp.watch(paths.html.src + '*.njk', htmlTranspile);
  gulp.watch(paths.js.src + '*.js', jsTranspile);
};

// EXPORTED TASKS
exports.clean = clean;
exports.cssTranspile = cssTranspile;
exports.htmlTranspile = htmlTranspile;
exports.jsTranspile = jsTranspile;
exports.build = build;
exports.default = watch;
