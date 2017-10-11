const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const webpackCommonSettings = require('./webpack.config.common');

const rootPath = path.resolve('.');

const mergeStrategy = {
  'entry.app': 'replace',
  'entry.mobileapp': 'replace',
  externals: 'replace',
  plugins: 'append'
};

module.exports = merge.smartStrategy(mergeStrategy)(webpackCommonSettings, {
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      'babel-polyfill',
      './src/index'
    ]
  },
  output: {
    path: path.join(rootPath, 'build/standalone'),
    publicPath: '/'
  },
  externals: {},
  module: {
    rules: [
      {
        test: /\.css?$/,
        loader: 'style-loader!css-loader?sourceMap&importLoaders=1!postcss-loader?sourceMap'
      },
      {
        test: /\.scss?$/,
        loader:
          'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader?sourceMap!sass-loader?sourceMap'
      }
    ]
  },
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
    // do not emit compiled assets that include errors
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      BROWSER: true
    }),
    new webpack.DefinePlugin({
      __DEV__: true,
      __DEV_TOOLS__: true
    })
  ],
  devServer: {
    historyApiFallback: false,
    hot: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      chunks: false
    },
    host: '0.0.0.0',
    port: 3001,
    open: true,
    disableHostCheck: true,
    openPage: ''
  },
  cache: true
});
