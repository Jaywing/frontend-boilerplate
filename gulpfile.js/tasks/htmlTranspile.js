function htmlTranspile() {
  const paths = require("../../package.json").paths;
  const data = require("../../" + paths.html.staticData);
  const flags = require("../../cli-flags.config");
  const gulp = require("gulp");
  const gulpif = require("gulp-if");
  const htmlmin = require("gulp-htmlmin");
  const nunjucks = require("gulp-nunjucks");
  const rename = require("gulp-rename");

  return gulp
    .src(paths.html.staticSrc + "!(_)*.njk")
    .pipe(nunjucks.compile(data))
    .pipe(
      rename(function (path) {
        path.extname = ".html";
      })
    )
    .pipe(gulpif(flags.minify, htmlmin({ collapseWhitespace: true })))
    .pipe(gulp.dest(paths.html.staticDest));
}

exports.htmlTranspile = htmlTranspile;
