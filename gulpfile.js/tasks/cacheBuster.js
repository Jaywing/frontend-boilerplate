function cacheBuster() {
  const paths = require("../../package.json").paths;
  const gulp = require("gulp");
  const replace = require("gulp-replace");

  /*
      Add ?cbt=1 onto stylesheet or script path
      EXAMPLE:  <link rel="stylesheet" type="text/css" href="/assets/css/main.css?cbt=1">
  */

  const cbtString = new Date().getTime();

  return gulp
    .src(paths.html.staticDest + "**/*.html")
    .pipe(
      replace(/cbt=\d+/g, function () {
        return "cbt=" + cbtString;
      })
    )
    .pipe(gulp.dest(paths.html.staticDest));
}

exports.cacheBuster = cacheBuster;
