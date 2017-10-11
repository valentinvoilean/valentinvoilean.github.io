const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve('.');
const stylesRelativePath = '../';

module.exports = {
  devtool: 'cheap-source-map',
  context: rootPath,
  entry: {
    app: ['babel-polyfill', 'index']
  },
  output: {
    path: path.join(rootPath, 'docs/dev'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js'
  },
  externals: {
    jquery: 'jQuery2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /web_modules/, /\.(spec)\.jsx?$/],
        loader: 'babel-loader'
      },
      { test: /\.(woff|ttf|otf|eot)$/, loader: 'file-loader?name=fonts/[name].[ext]?v=[hash]' },
      {
        test: /\.(svg|svg\?embed)$/,
        exclude: path.join(rootPath, 'src/img/svg'),
        loader: 'file-loader?name=svg/[name].[ext]?v=[hash]'
      },
      {
        test: /\.(svg|svg\?embed)$/,
        include: path.join(rootPath, 'src/img/svg'),
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'svg-sprite-loader',
            options: {
              runtimeGenerator: require.resolve('../svg/svg-to-icon-component-runtime-generator'),
              runtimeOptions: {
                iconModule: path.join(rootPath, 'src/markup/LoadSVG/index.jsx')
              }
            }
          },
          'svg-fill-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
                { convertColors: { shorthex: false } },
                { convertPathData: false }
              ]
            }
          }
        ]
      },
      { test: /\.(png|jpg|ico|gif)$/, loader: 'file-loader?name=img/[name].[ext]?v=[hash]' },
      { test: /lodgify-app-manifest\.json$/, loader: 'file-loader?name=[name].[ext]?v=[hash]' },
      {
        test: /\.css?$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?importLoaders=1&minimize',
          publicPath: stylesRelativePath
        })
      },
      {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:
            'css-loader?modules&importLoaders=1&minimize&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader',
          publicPath: stylesRelativePath
        })
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jQuery2: 'jquery',
      'window.jQuery': 'jquery',
      'window.jQuery2': 'jquery',
      redactor: 'redactor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors']
    }),
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(en|de|es|fr|it)$/),
    new HtmlWebpackPlugin({
      title: 'Portfolio',
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['vendors', 'app']
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.join(rootPath, 'src'), 'node_modules']
  },
  target: 'web',
  performance: {
    hints: false
  },
  stats: {
    version: false,
    hash: false,
    chunks: false,
    children: false
  }
};
