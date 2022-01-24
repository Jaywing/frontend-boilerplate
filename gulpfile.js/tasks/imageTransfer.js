function imageTransfer() {
  const flags = require("../../cli-flags.config");
  const gulp = require("gulp");
  const imagemin = require("gulp-imagemin");
  const imageminWebp = require("imagemin-webp");
  const paths = require("../../package.json").paths;

  return gulp
    .src(paths.images.src)
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 65, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            imageminWebp({ quality: 50 }),
            { removeViewBox: true },
            { cleanupIDs: false },
          ],
        }),
      ])
    )
    .pipe(
      gulp.dest(flags.proxy ? paths.images.proxyDest : paths.images.staticDest)
    );
}

exports.imageTransfer = imageTransfer;
