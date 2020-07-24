function htmlTranspile() {
  const gulp = require("gulp");
  const paths = require("../../package.json").paths;
  const nunjucks = require("gulp-nunjucks");
  const rename = require("gulp-rename");

  return gulp
    .src(paths.html.staticSrc + "!(_)*.njk")
    .pipe(nunjucks.compile())
    .pipe(
      rename(function (path) {
        path.extname = ".html";
      })
    )
    .pipe(gulp.dest(paths.html.staticDest));
}

exports.htmlTranspile = htmlTranspile;
