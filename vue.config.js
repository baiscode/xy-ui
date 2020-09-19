const webpack = require('webpack');
const path = require('path');

const resolve = function(src) {
  return path.resolve(__dirname, src);
};

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.d.ts', '.js']
    },
    plugins: [
      new webpack.ProvidePlugin({
        $util: resolve('./src/utils/utils.ts')
      })
    ]
  }
};
