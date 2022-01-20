const flags = require("../../cli-flags.config");
const gulp = require("gulp");
const path = require("path");
const paths = require("../../package.json").paths;
const webpack = require("webpack");
const webpackStream = require("webpack-stream");

function jsTranspile() {
  const webpackConfig = {
    mode: flags.minify ? "production" : "development",
    entry: paths.js.webpackEntry,
    devtool: flags.sourcemaps ? "inline-source-map" : "none",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: {
            transpileOnly: flags.tsErrors ? false : true,
            experimentalWatchApi: true,
          },
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    output: {
      path: path.resolve(__dirname, paths.js.webpackOutput.path),
      filename: "js/[name].js",
      publicPath: paths.js.webpackOutput.publicPath,
    },
  };

  return gulp
    .src(paths.js.src + "*.ts")
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(flags.proxy ? paths.js.proxyDest : paths.js.staticDest));
}

exports.jsTranspile = jsTranspile;