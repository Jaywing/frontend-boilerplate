function cssTranspile() {
  const cssnano = require("gulp-cssnano");
  const flags = require("../config/flags");
  const gulp = require("gulp");
  const paths = require("../../package.json").paths;
  // const postcss = require("gulp-postcss");
  const purgecss = require("gulp-purgecss");
  const rename = require("gulp-rename");
  const sass = require("gulp-sass");
  const sourcemaps = require("gulp-sourcemaps");
  const util = require("gulp-util");

  return gulp
    .src(paths.css.src + "!(_)*.scss")
    .pipe(flags.maps ? sourcemaps.init() : util.noop())
    .pipe(sass().on("error", sass.logError))
    .pipe(flags.minify ? cssnano() : util.noop())
    .pipe(
      flags.purge
        ? purgecss({
            content: [paths.build + "**/*.html", paths.build + "**/*.js"]
          })
        : util.noop()
    )
    .pipe(
      rename(function(path) {
        path.extname = ".css";
      })
    )
    .pipe(flags.maps ? sourcemaps.write("maps") : util.noop())
    .pipe(gulp.dest(paths.css.dest));
}

exports.cssTranspile = cssTranspile;
