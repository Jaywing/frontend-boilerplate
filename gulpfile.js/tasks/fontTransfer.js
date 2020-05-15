function fontTransfer() {
  const flags = require("../config/flags");
  const gulp = require("gulp");
  const paths = require("../../package.json").paths;

  return gulp
    .src(paths.fonts.src)
    .pipe(
      gulp.dest(flags.proxy ? paths.fonts.proxy_dest : paths.fonts.static_dest)
    );
}

exports.fontTransfer = fontTransfer;
