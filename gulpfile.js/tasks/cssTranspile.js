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
  // const tailwindcss = require("tailwindcss");
  const util = require("gulp-util");

  return (
    gulp
      .src(paths.css.src + "!(_)*.scss")
      .pipe(flags.maps ? sourcemaps.init() : util.noop())
      .pipe(sass().on("error", sass.logError))
      // .pipe(
      //   postcss(
      //     [
      //       require("postcss-import"),
      //       require("precss"),
      //       tailwindcss("./gulpfile.js/config/tailwind.js"),
      //       require("autoprefixer")
      //     ],
      //     {
      //       syntax: require("postcss-scss")
      //     }
      //   )
      // )
      .pipe(flags.minify ? cssnano() : util.noop())
      // FIXME: PurgeCSS error: Unexpected '/'. Escaping special characters with \ may help.
      .pipe(
        flags.purge
          ? purgecss({
              content: [paths.build + "**/*.html", paths.build + "**/*.js"],
              extractors: [
                {
                  extractor: class TailwindExtractor {
                    static extract(content) {
                      return content.match(/[A-Za-z0-9-_:/]+/g) || [];
                    }
                  },
                  extensions: ["html", "js"]
                }
              ]
            })
          : util.noop()
      )
      .pipe(
        rename(function(path) {
          path.extname = ".css";
        })
      )
      .pipe(flags.maps ? sourcemaps.write("maps") : util.noop())
      .pipe(gulp.dest(paths.css.dest))
  );
}

exports.cssTranspile = cssTranspile;
