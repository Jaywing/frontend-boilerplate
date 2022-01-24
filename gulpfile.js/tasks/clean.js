function clean() {
  const paths = require("../../package.json").paths;
  const gulp = require("gulp");
  const clean = require("gulp-clean");

  return gulp
    .src(paths.staticDir, { read: false, allowEmpty: true })
    .pipe(clean());
}

exports.clean = clean;
