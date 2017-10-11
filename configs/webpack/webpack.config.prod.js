const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');

const webpackCommonSettings = require('./webpack.config.common');

const rootPath = path.resolve('.');

const mergeStrategy = {
  plugins: 'append'
};

module.exports = merge.smartStrategy(mergeStrategy)(webpackCommonSettings, {
  output: {
    path: path.join(rootPath, 'docs'),
    filename: 'js/[name][hash].js',
    chunkFilename: 'js/[name][hash].js'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name][hash].css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false,
        unused: true,
        dead_code: true
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true,
        quote_style: 3
      }
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production', // use 'production' unless process.env.NODE_ENV is defined
      BROWSER: true
    }),
    new webpack.DefinePlugin({
      __DEV__: false,
      __DEV_TOOLS__: false
    })
  ]
});
