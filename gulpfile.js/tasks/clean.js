function clean() {
  const gulp = require('gulp');
  const paths = require('../../package.json').paths;
  const clean = require('gulp-clean');

  return gulp
    .src(paths.static_folder, { read: false, allowEmpty: true })
    .pipe(clean());
}

exports.clean = clean;
