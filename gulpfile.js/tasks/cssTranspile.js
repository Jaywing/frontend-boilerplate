function cssTranspile() {
  const gulp = require('gulp');
  const paths = require('../../package.json').paths;
  const postcss = require('gulp-postcss');
  const purgecss = require('gulp-purgecss');
  const rename = require('gulp-rename');
  const sourcemaps = require('gulp-sourcemaps');

  return gulp
    .src(paths.css.src + '!(_)*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      postcss(
        [
          require('postcss-import'),
          require('precss'),
          require('tailwindcss'),
          require('autoprefixer'),
          require('cssnano')
        ],
        {
          syntax: require('postcss-scss')
        }
      )
    )
    .pipe(
      purgecss({
        content: [paths.build + '**/*.html'],
        extractors: [
          {
            extractor: TailwindExtractor,
            extensions: ['html', 'js']
          }
        ]
      })
    )
    .pipe(
      rename(function(path) {
        path.extname = '.css';
      })
    )
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(paths.css.dest));
}

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

exports.cssTranspile = cssTranspile;
