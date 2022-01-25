require("dotenv").config();
const flags = require("../cli-flags.config");
const paths = require("../package.json").paths;
const gulp = require("gulp");
const gulpif = require("gulp-if");

// INDIVIDUAL TASKS
const clean = require("./tasks/clean").clean;
const cacheBuster = require("./tasks/cacheBuster").cacheBuster;
const cssTranspile = require("./tasks/cssTranspile").cssTranspile;
const fontTransfer = require("./tasks/fontTransfer").fontTransfer;
const htmlTranspile = require("./tasks/htmlTranspile").htmlTranspile;
const imageTransfer = require("./tasks/imageTransfer").imageTransfer;
const jsTranspile = require("./tasks/jsTranspile").jsTranspile;

const build = gulp.series(
  clean,
  gulpif(!flags.proxy, htmlTranspile),
  htmlTranspile,
  gulp.parallel(
    cssTranspile,
    fontTransfer,
    imageTransfer,
    jsTranspile,
    cacheBuster
  )
);

const watch = () => {
  build();

  const browserSyncOptions = require("../package.json").browserSync;

  if (flags.proxy) {
    browserSyncOptions.proxy = process.env.PROXY_URL
      ? process.env.PROXY_URL
      : paths.proxyUrl;
  } else {
    browserSyncOptions.server = {
      baseDir: paths.staticDir,
    };
  }

  const server = require("browser-sync").create();
  server.init(browserSyncOptions);

  function browserReload(done) {
    server.reload();
    done();
  }

  const watchComplete = gulp.series(cacheBuster, browserReload);

  gulp.watch(
    paths.css.src + "*.scss",
    gulp.series(cssTranspile, watchComplete)
  );

  gulp.watch(paths.fonts.src, gulp.series(fontTransfer, watchComplete));

  if (flags.proxy) {
    gulp.watch(paths.html.proxyWatch, cssTranspile, browserReload);
  } else {
    gulp.watch(
      paths.html.staticSrc + "*.njk",
      gulp.series(htmlTranspile, cssTranspile, watchComplete)
    );
  }

  gulp.watch(paths.images.src, gulp.series(imageTransfer, watchComplete));

  gulp.watch(
    paths.js.src + "*.+(ts|tsx|js|jsx)",
    gulp.series(jsTranspile, cssTranspile, watchComplete)
  );
};

/* GULP TASKS */

// gulp clean
exports.clean = clean;
// gulp cssTranspile
exports.cssTranspile = cssTranspile;
// gulp fontTransfer
exports.fontTransfer = fontTransfer;
// gulp htmlTranspile
exports.htmlTranspile = htmlTranspile;
// gulp imageTransfer
exports.imageTransfer = imageTransfer;
// gulp jsTranspile
exports.jsTranspile = jsTranspile;

// gulp build
exports.build = build;
// gulp
exports.default = watch;
