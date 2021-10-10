const webpack = require('webpack');
const path = require('path');

const webpackCommonSettings = require('./webpack.config.common');

const rootPath = path.resolve('.');

module.exports = {
  ...webpackCommonSettings,
  mode: 'production',
  output: {
    path: path.join(rootPath, 'docs'),
    filename: 'js/[name].js'
  },
  plugins: [
    ...webpackCommonSettings.plugins,
    new webpack.EnvironmentPlugin({
      BROWSER: true,
      RECAPTCHA_SITE_KEY: '6LfY-cQSAAAAAMENn6BAoCI6ZW5pNpSb_8yYqFz1'
    })
  ]
}
