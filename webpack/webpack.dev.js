const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(webpackBaseConfig, {
  optimization: {
    minimizer: [new TerserPlugin({
      cache: true
    })],
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],
})
