function htmlTranspile() {
  const gulp = require("gulp");
  const paths = require("../../package.json").paths;
  const nunjucks = require("gulp-nunjucks");
  const rename = require("gulp-rename");

  return gulp
    .src(paths.html.static_src + "!(_)*.njk")
    .pipe(nunjucks.compile())
    .pipe(
      rename(function (path) {
        path.extname = ".html";
      })
    )
    .pipe(gulp.dest(paths.html.static_dest));
}

exports.htmlTranspile = htmlTranspile;
