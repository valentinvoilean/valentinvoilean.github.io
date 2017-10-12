const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const webpackCommonSettings = require('./webpack.config.common');

const rootPath = path.resolve('.');

const mergeStrategy = {
  plugins: 'append'
};

module.exports = merge.smartStrategy(mergeStrategy)(webpackCommonSettings, {
  mode: 'production',
  output: {
    path: path.join(rootPath, 'docs'),
    filename: 'js/[name].js'
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      BROWSER: true,
      RECAPTCHA_SITE_KEY: '6LfY-cQSAAAAAMENn6BAoCI6ZW5pNpSb_8yYqFz1'
    })
  ]
});
