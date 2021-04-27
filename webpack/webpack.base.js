const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, './../src/app.tsx'),
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'cache-loader',
          'ts-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          'babel-loader'
        ],
      },
      {
        test: /\.(styl|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json', '.styl'],
    plugins: [
      new TsconfigPathsPlugin({
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        configFile: path.join(__dirname, './../tsconfig.json'),
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
    }),
    new PrettierPlugin(),
  ],
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
  },
  devServer: {
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
}
