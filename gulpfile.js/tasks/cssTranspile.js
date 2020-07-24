function cssTranspile() {
  const autoprefixer = require("autoprefixer");
  const cssnano = require("cssnano");
  const flags = require("../config/flags");
  const gulp = require("gulp");
  const gulpif = require("gulp-if");
  const paths = require("../../package.json").paths;
  const postcss = require("gulp-postcss");
  const purgecss = require("gulp-purgecss");
  const purgewhitelist = require("../../src/scss/whitelist.json");
  const sass = require("gulp-sass");
  const sourcemaps = require("gulp-sourcemaps");

  const postcssplugins = [autoprefixer()];

  if (flags.minify) {
    postcssplugins.push(
      cssnano({
        preset: ["default", { discardComments: { removeAll: true } }],
      })
    );
  }

  return gulp
    .src(paths.css.src + "!(_)*.scss")
    .pipe(gulpif(flags.maps, sourcemaps.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(postcssplugins))
    .pipe(
      gulpif(
        flags.purge,
        purgecss({
          content: [
            flags.proxy
              ? paths.html.proxyWatch
              : paths.html.staticSrc + "*.njk",
            paths.js.src + "*.ts",
          ],
          whitelist: purgewhitelist,
        })
      )
    )
    .pipe(gulpif(flags.maps, sourcemaps.write("maps")))
    .pipe(gulp.dest(flags.proxy ? paths.css.proxyDest : paths.css.staticDest));
}

exports.cssTranspile = cssTranspile;
