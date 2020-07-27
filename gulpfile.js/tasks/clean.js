function clean() {
  const clean = require("gulp-clean");
  const gulp = require("gulp");
  const paths = require("../../package.json").paths;

  return gulp
    .src(paths.staticDir, { read: false, allowEmpty: true })
    .pipe(clean());
}

exports.clean = clean;
