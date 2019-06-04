const { series, parallel } = require('gulp');

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

function jsBundle(cb) {
  // body omitted
  cb();
}

function jsMinify(cb) {
  // body omitted
  cb();
}

function livereload(cb) {
  // body omitted
  cb();
}

const watch = series(
  clean,
  parallel(cssTranspile, jsTranspile),
  parallel(cssMinify, jsBundle),
  jsMinify
);

const build = series(clean, parallel(cssTranspile, jsTranspile), jsBundle);

// FIXME: start and build
if (process.env.NODE_ENV === 'production') {
  exports.default = build;
} else {
  exports.default = watch;
}
