function cssTranspile() {
  const autoprefixer = require("autoprefixer");
  const cssnano = require("cssnano");
  const flags = require("../../cli-flags.config");
  const gulp = require("gulp");
  const gulpif = require("gulp-if");
  const paths = require("../../package.json").paths;
  const postcss = require("gulp-postcss");
  const postcssnested = require("postcss-nested");
  const postcsscombinemediaquery = require("postcss-combine-media-query");
  const postcsseasyimport = require("postcss-easy-import");
  const purgecss = require("gulp-purgecss");
  const purgewhitelist = require("../../src/scss/whitelist.json");
  const sass = require("gulp-sass")(require("sass"));
  const sourcemaps = require("gulp-sourcemaps");
  const tailwindcss = require("tailwindcss");

  const postcssplugins = [
    postcsseasyimport(),
    postcssnested(),
    tailwindcss(),
    autoprefixer(),
  ];

  if (flags.minify) {
    postcssplugins.push(
      cssnano({
        preset: ["default", { discardComments: { removeAll: true } }],
      })
    );
  }

  if (flags.combinemq) {
    postcssplugins.push(postcsscombinemediaquery());
  }

  return gulp
    .src(paths.css.src + "!(_)*.scss")
    .pipe(gulpif(flags.sourcemaps, sourcemaps.init()))
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
            paths.js.src + "*.+(ts|tsx|js|jsx)",
          ],
          whitelist: purgewhitelist,
        })
      )
    )
    .pipe(gulpif(flags.sourcemaps, sourcemaps.write("maps")))
    .pipe(gulp.dest(flags.proxy ? paths.css.proxyDest : paths.css.staticDest));
}

exports.cssTranspile = cssTranspile;
