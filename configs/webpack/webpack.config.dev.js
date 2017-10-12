const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackCommonSettings = require('./webpack.config.common');

const stylesRelativePath = '../';

const mergeStrategy = {
  'entry.app': 'replace',
  plugins: 'append'
};

module.exports = merge.smartStrategy(mergeStrategy)(webpackCommonSettings, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    app: ['utils/matchmedia-polyfill', '@babel/polyfill', 'normalize.css', './src/index']
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: [
          'css-hot-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: stylesRelativePath
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: true
            }
          }
        ]
      },
      {
        test: /\.scss?$/,
        use: [
          'css-hot-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: stylesRelativePath
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "~susy/sass/susy"; @import "~styles/styles";'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      BROWSER: true,
      RECAPTCHA_SITE_KEY: '6LfY-cQSAAAAAMENn6BAoCI6ZW5pNpSb_8yYqFz1'
    })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      chunks: false
    },
    host: '0.0.0.0',
    port: 4001,
    open: true,
    disableHostCheck: true,
    openPage: ''
  },
  cache: true
});
