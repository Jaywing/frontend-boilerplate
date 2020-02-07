const flags = require("../config/flags");
const gulp = require("gulp");
const path = require("path");
const paths = require("../../package.json").paths;
const webpack = require("webpack");
const webpackStream = require("webpack-stream");

function jsTranspile() {
  const webpackConfig = {
    mode: flags.minify ? "production" : "development",
    entry: { main: "./_src/ts/main.ts" },
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts"]
    },
    output: {
      path: path.resolve(__dirname, "_build/_assets"),
      filename: "js/[name].js",
      publicPath: "/_assets/"
    }
  };

  return gulp
    .src(paths.js.src + "*.ts")
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(paths.js.dest));
}

exports.jsTranspile = jsTranspile;
