function jsTranspile() {
  const babel = require("gulp-babel");
  const concat = require("gulp-concat");
  const eslint = require("gulp-eslint");
  const flags = require("../config/flags");
  const gulp = require("gulp");
  const paths = require("../../package.json").paths;
  const sourcemaps = require("gulp-sourcemaps");
  const uglify = require("gulp-uglify");
  const util = require("gulp-util");

  return gulp
    .src(paths.js.src + "**/*.js")
    .pipe(flags.maps ? sourcemaps.init() : util.noop())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(
      babel({
        presets: ["@babel/preset-env", "@babel/preset-react"]
      })
    )
    .pipe(concat("index.js"))
    .pipe(flags.minify ? uglify() : util.noop())
    .pipe(flags.maps ? sourcemaps.write("maps") : util.noop())
    .pipe(gulp.dest(paths.js.dest));
}

exports.jsTranspile = jsTranspile;
