/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const { VueLoaderPlugin } = require('vue-loader');

const resolve = function(src) {
  return path.resolve(__dirname, src);
}

module.exports = {
  entry: resolve('../src/components/index.ts'),
  output: {
    filename: 'xyUi.js',
    path: resolve('../dist'),
    library: 'xyUi',
    libraryTarget: 'umd',
    publicPath: '/dist/'
  },
  module: {
    noParse: /^(vue|vue-router|vue-router-sync|vuex)$/,
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          css: ['vue-style-loader', 'css-loader']
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          sourceMap: true
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          sourceMap: true
        }
      },
      {
        test: /\.(c|le)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer'),
                require('postcss-px-to-viewport')({
                  viewportWidth: 375,
                  fontViewportUnit: 'vw',
                  unitPrecision: 3,
                  viewportUnit: 'vw',
                  minPixelValue: 1,
                  mediaQuery: false
                })
              ]
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(svg|png|jp(e)g)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240,
            fallback: {
              loader: 'file-loader',
              options: {
                filename: '[name].[ext]',
                publicPath: '../dist/images',
                outputPath: '../dist/images'
              }
            }
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.ts', '.json', '.d.ts']
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new VueLoaderPlugin(),
    // new CleanWebpackPlugin(),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: resolve('../dist/vendor.manifest.json') 
    })
  ]
}