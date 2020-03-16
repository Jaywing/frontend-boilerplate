function imageTransfer() {
  const flags = require('../config/flags');
  const gulp = require('gulp');
  const imagemin = require('gulp-imagemin');
  const paths = require('../../package.json').paths;

  return gulp
    .src(paths.images.src)
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 65, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
        })
      ])
    )
    .pipe(
      gulp.dest(
        flags.static ? paths.images.static_dest : paths.images.proxy_dest
      )
    );
}

exports.imageTransfer = imageTransfer;
