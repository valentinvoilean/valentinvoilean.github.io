const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackCommonSettings = require('./webpack.config.common');

const stylesRelativePath = '../';

module.exports = {
  ...webpackCommonSettings,
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    ...webpackCommonSettings.entry,
    app: ['utils/matchmedia-polyfill', 'normalize.css', './src/index']
  },
  plugins: [
    ...webpackCommonSettings.plugins,
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      BROWSER: true,
    })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    port: 4001,
    open: true,
  },
  cache: true
};
