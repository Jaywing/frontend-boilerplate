const flags = require("./config/flags");
const gulp = require("gulp");
const paths = require("../package.json").paths;

// INDIVIDUAL TASKS
const clean = require("./tasks/clean").clean;
const cssTranspile = require("./tasks/cssTranspile").cssTranspile;
const fontTransfer = require("./tasks/fontTransfer").fontTransfer;
const htmlTranspile = require("./tasks/htmlTranspile").htmlTranspile;
const imageTransfer = require("./tasks/imageTransfer").imageTransfer;
const jsTranspile = require("./tasks/jsTranspile").jsTranspile;

// BUILD TASKS
let build;

if (flags.static) {
  build = gulp.series(
    clean,
    htmlTranspile,
    gulp.parallel(cssTranspile, fontTransfer, imageTransfer, jsTranspile)
  );
} else {
  build = gulp.series(
    clean,
    gulp.parallel(cssTranspile, fontTransfer, imageTransfer, jsTranspile)
  );
}

// WATCH TASKS
const watch = () => {
  build();

  const browserSyncOptions = require("../package.json").browserSync;

  if (flags.static) {
    browserSyncOptions.server = {
      baseDir: paths.static_dir,
    };
  } else {
    browserSyncOptions.proxy = paths.proxy_address;
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

  if (flags.static) {
    gulp.watch(
      paths.html.static_src + "*.njk",
      gulp.series(htmlTranspile, browserReload)
    );
  } else {
    gulp.watch(paths.html.proxy_watch, browserReload);
  }

  gulp.watch(paths.images.src, gulp.series(imageTransfer, browserReload));

  gulp.watch(paths.js.src + "*.ts", gulp.series(jsTranspile, browserReload));
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
