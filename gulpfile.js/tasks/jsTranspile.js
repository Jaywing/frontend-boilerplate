const flags = require('../config/flags');
const gulp = require('gulp');
const path = require('path');
const paths = require('../../package.json').paths;
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

function jsTranspile() {
  const webpackConfig = {
    mode: flags.minify ? 'production' : 'development',
    entry: { main: './_src/ts/main.ts' },
    devtool: flags.maps ? 'source-map' : 'none',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts']
    },
    output: {
      path: path.resolve(__dirname, '_static/assets'),
      filename: 'js/[name].js',
      publicPath: '/assets/'
    }
  };

  return gulp
    .src(paths.js.src + '*.ts')
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(flags.static ? paths.js.static_dest : paths.js.proxy_dest));
}

exports.jsTranspile = jsTranspile;
