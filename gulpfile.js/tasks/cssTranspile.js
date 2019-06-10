function cssTranspile() {
  const gulp = require('gulp');
  const paths = require('../../package.json').paths;
  const postcss = require('gulp-postcss');
  const purgecss = require('gulp-purgecss');
  const rename = require('gulp-rename');
  const sourcemaps = require('gulp-sourcemaps');
  const tailwindcss = require('tailwindcss');

  return gulp
    .src(paths.css.src + '!(_)*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      postcss(
        [
          require('postcss-import'),
          require('precss'),
          tailwindcss('gulpfile.js/config/tailwind.js'),
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
        content: [paths.build + '**/*.html', paths.build + '**/*.js'],
        extractors: [
          {
            extractor: class {
              static extract(content) {
                return content.match(/[A-z0-9-:\/]+/g) || [];
              }
            },
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

exports.cssTranspile = cssTranspile;
