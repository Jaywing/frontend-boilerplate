function fontTransfer() {
  const flags = require("../config/flags");
  const gulp = require("gulp");
  const paths = require("../../package.json").paths;

  return gulp
    .src(paths.fonts.src)
    .pipe(
      gulp.dest(flags.proxy ? paths.fonts.proxyDest : paths.fonts.staticDest)
    );
}

exports.fontTransfer = fontTransfer;
