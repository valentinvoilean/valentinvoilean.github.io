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
    path: path.resolve(process.cwd(), 'docs/dev'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /\.(spec)\.jsx?$/],
        loader: 'babel-loader'
      },
      { test: /\.(woff|woff2|ttf|otf|eot)$/, use: 'file-loader?name=fonts/[name].[ext]?v=[hash]' },
      {
        test: /\.(svg|svg\?embed)$/,
        exclude: path.resolve(process.cwd(), 'src/img'),
        use: 'file-loader?name=svg/[name].[ext]?v=[hash]'
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
                iconModule: path.resolve(process.cwd(), 'src/components/LoadSVG/index.jsx')
              }
            }
          },
          'svg-fill-loader',
        ]
      },
      { test: /\.(png|jpg|ico|gif)$/, use: 'file-loader?name=img/[name].[ext]?v=[hash]' },
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
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(process.cwd(), 'src')],
              },
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(process.cwd(), 'src/styles/styles.scss'),
                path.resolve(process.cwd(), 'node_modules/susy/sass/_susy.scss')
              ],
            },
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
    modules: ['src', 'node_modules'],
    preferRelative: true
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
