function imageTransfer() {
  const flags = require("../config/flags");
  const gulp = require("gulp");
  const imagemin = require("gulp-imagemin");
  const paths = require("../../package.json").paths;

  return gulp
    .src(paths.images.src)
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 65, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(
      gulp.dest(
        flags.proxy ? paths.images.proxy_dest : paths.images.static_dest
      )
    );
}

exports.imageTransfer = imageTransfer;
