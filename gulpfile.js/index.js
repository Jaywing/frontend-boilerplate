const flags = require("../cli-flags.config");
const gulp = require("gulp");
const paths = require("../package.json").paths;

// INDIVIDUAL TASKS
const clean = require("./tasks/clean").clean;
const cacheBuster = require("./tasks/cacheBuster").cacheBuster;
const cssTranspile = require("./tasks/cssTranspile").cssTranspile;
const fontTransfer = require("./tasks/fontTransfer").fontTransfer;
const htmlTranspile = require("./tasks/htmlTranspile").htmlTranspile;
const imageTransfer = require("./tasks/imageTransfer").imageTransfer;
const jsTranspile = require("./tasks/jsTranspile").jsTranspile;

// BUILD TASKS
let build;

if (flags.proxy) {
  build = gulp.series(
    clean,
    gulp.parallel(cssTranspile, fontTransfer, imageTransfer, jsTranspile)
  );
} else {
  build = gulp.series(
    clean,
    htmlTranspile,
    gulp.parallel(
      cssTranspile,
      fontTransfer,
      imageTransfer,
      jsTranspile,
      cacheBuster
    )
  );
}

// WATCH TASKS
const watch = () => {
  build();

  const browserSyncOptions = require("../package.json").browserSync;

  if (flags.proxy) {
    browserSyncOptions.proxy = paths.proxyAddress;
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

  gulp.watch(
    paths.css.src + "*.scss",
    gulp.series(cssTranspile, browserReload)
  );

  gulp.watch(paths.fonts.src, gulp.series(fontTransfer, browserReload));

  if (flags.proxy) {
    gulp.watch(paths.html.proxyWatch, browserReload);
  } else {
    gulp.watch(
      paths.html.staticSrc + "*.njk",
      gulp.series(htmlTranspile, browserReload)
    );
  }

  gulp.watch(paths.images.src, gulp.series(imageTransfer, browserReload));

  gulp.watch(
    paths.js.src + "*.+(ts|tsx|js|jsx)",
    gulp.series(jsTranspile, browserReload)
  );
};

// EXPORTED TASKS
exports.clean = clean;
exports.cssTranspile = cssTranspile;
exports.fontTransfer = fontTransfer;
exports.htmlTranspile = htmlTranspile;
exports.imageTransfer = imageTransfer;
exports.jsTranspile = jsTranspile;

exports.build = build;
exports.default = watch;