function cacheBuster() {
  const gulp = require("gulp");
  const paths = require("../../package.json").paths;
  const replace = require("gulp-replace");

  // Add ?cbt=1 onto the end of a path to a script of styleheet

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
