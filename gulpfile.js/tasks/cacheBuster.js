function cacheBuster() {
  const gulp = require("gulp");
  const paths = require("../../package.json").paths;
  const replace = require("gulp-replace");

  const cbtString = new Date().getTime();

  return gulp
    .src(paths.html.static_dest + "**/*.html")
    .pipe(
      replace(/cbt=\d+/g, function () {
        return "cbt=" + cbtString;
      })
    )
    .pipe(gulp.dest(paths.html.static_dest));
}

exports.cacheBuster = cacheBuster;
