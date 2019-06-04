const { watch, series, parallel } = require('gulp');

function clean(cb) {
  // body omitted
  cb();
}

function cssTranspile(cb) {
  // body omitted
  cb();
}

function cssMinify(cb) {
  // body omitted
  cb();
}

function jsTranspile(cb) {
  // body omitted
  cb();
}

function jsMinify(cb) {
  // body omitted
  cb();
}

exports.build = series(
  clean,
  parallel(series(cssTranspile, cssMinify), series(jsTranspile, jsMinify))
);

exports.default = function() {
  watch('src/scss/*.scss', cssTranspile);
  watch('src/js/*.js', jsTranspile);
};
