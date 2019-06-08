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
  const server = require('browser-sync').create();
  server.init(require('../package.json').browserSync);

  function browserReload(done) {
    server.reload();
    done();
  }

  gulp.watch(
    paths.css.src + '*.scss',
    gulp.series(cssTranspile, browserReload)
  );
  gulp.watch(
    paths.html.src + '*.njk',
    gulp.series(htmlTranspile, browserReload)
  );
  gulp.watch(paths.js.src + '*.js', gulp.series(jsTranspile, browserReload));
};

// EXPORTED TASKS
exports.clean = clean;
exports.cssTranspile = cssTranspile;
exports.htmlTranspile = htmlTranspile;
exports.jsTranspile = jsTranspile;
exports.build = build;
exports.default = watch;
