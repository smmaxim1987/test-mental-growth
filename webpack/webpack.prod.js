const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const webpackBaseConfig = require('./webpack.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const publicPath = path.join(__dirname, './../../../public/')

module.exports = merge(webpackBaseConfig, {
  output: {
    path: publicPath,
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          preset: 'advanced',
          safe: true,
          map: { inline: false },
        },
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new webpack.optimize.LimitChunkCountPlugin(),
  ],
})
