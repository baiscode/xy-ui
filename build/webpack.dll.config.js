/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const path = require('path');

const resolve = function(src) {
  return path.resolve(__dirname, src);
}
module.exports = {
  mode: 'none',
  entry: {
    vendor: ['vue', 'vue/dist/vue.common.js']
  },
  output: {
    filename: '[name].dll.js',
    path: resolve('../dist'),
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: '[name]_library',
      path: resolve('../dist/[name].manifest.json')
    })
  ]
}