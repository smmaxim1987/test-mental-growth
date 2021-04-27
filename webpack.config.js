const env = process.env.NODE_ENV

module.exports = env => {
  console.log(`Running ${env} mode`)
  return require(`./webpack/webpack.${env}.js`)
}
