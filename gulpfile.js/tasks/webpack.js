import path from 'path';
import webpack from 'webpack';

let config = {
  entry: './index.js',
  output: {
    filename: './index.js',
    path: path.resolve(__dirname, '../_build/js')
  },
  context: path.resolve(__dirname, '../_build/js')
};

function scripts() {
  return new Promise(resolve =>
    webpack(config, (err, stats) => {
      if (err) console.log('Webpack', err);

      console.log(
        stats.toString({
          /* stats options */
        })
      );

      resolve();
    })
  );
}

module.exports = { config, scripts };
