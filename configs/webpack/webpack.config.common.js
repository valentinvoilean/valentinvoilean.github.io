const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve('.');
const stylesRelativePath = '../';

module.exports = {
  devtool: 'cheap-source-map',
  context: rootPath,
  entry: {
    app: ['utils/matchmedia-polyfill', '@babel/polyfill', 'normalize.css', 'index']
  },
  output: {
    path: path.join(rootPath, 'docs/dev'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /\.(spec)\.jsx?$/],
        loader: 'babel-loader'
      },
      { test: /\.(woff|woff2|ttf|otf|eot)$/, loader: 'file-loader?name=fonts/[name].[ext]?v=[hash]' },
      {
        test: /\.(svg|svg\?embed)$/,
        exclude: path.join(rootPath, 'src/img'),
        loader: 'file-loader?name=svg/[name].[ext]?v=[hash]'
      },
      {
        test: /\.(svg|svg\?embed)$/,
        include: path.join(rootPath, 'src/img'),
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'svg-sprite-loader',
            options: {
              runtimeGenerator: require.resolve('../svg/svg-to-icon-component-runtime-generator'),
              runtimeOptions: {
                iconModule: path.join(rootPath, 'src/components/LoadSVG/index.jsx')
              }
            }
          },
          'svg-fill-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [{ removeTitle: true }, { convertColors: { shorthex: false } }, { convertPathData: false }]
            }
          }
        ]
      },
      { test: /\.(png|jpg|ico|gif)$/, loader: 'file-loader?name=img/[name].[ext]?v=[hash]' },
      {
        test: /\.css?$/,
        use: [
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
    new ProgressBarPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new HtmlWebpackPlugin({
      title: "Valentin Voilean's Portfolio",
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['app'],

      url: 'http://valentinvoilean.com/',
      description:
        'I’m a Microsoft Certified Professional Developer specialised in the client-side or Front End interface, connecting the user with complex backend technologies.',
      sitename: 'ValentinVoilean',
      author: 'Valentin Voilean',
      image: 'http://valentinvoilean.com/img/ValentinVoilean-preview.jpg'
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
