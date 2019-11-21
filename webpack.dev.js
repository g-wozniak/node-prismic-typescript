var path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')

module.exports = env => {

  const appName = env.WEBAPP_NAME

  console.log('\n\n webpack: webpack.dev.js')
  console.log(` webapp_name: ${appName}`)
  console.log(` webapp_env: ${env.WEBAPP_ENV}`)
  console.log(` webapp_compression: ${env.WEBAPP_COMPRESSION || "false"}\n\n`)

  const entry = path.resolve(__dirname, "dist") + '/' + appName + '/app-dev/index.html'

  let plugins = [
    new HtmlWebpackPlugin({
        hash: true,
        template: path.resolve(__dirname, "dist") + '/' + appName + '/dev.html',
        filename: entry
    }),
    new webpack.DefinePlugin({
      'process.env.WEBAPP_ENV': JSON.stringify(env.WEBAPP_ENV)
    })
  ]
  
  if (env.WEBAPP_COMPRESSION == 'true') {
    plugins = plugins.concat([
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.7
      }),
      new BrotliPlugin({
        filename: '[path].br[query]',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.7
      })
    ])
  }

  return {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: [
      require.resolve(path.resolve(__dirname, "src") + '/common/polyfills'),
      './src/' + appName + '/bootstrap.tsx'
    ],
    output: {
      publicPath: '/app',
      path: path.resolve(__dirname, "dist") + '/' + appName + '/app-dev/app',
      filename: "app.dev.js"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      strictExportPresence: true,
      rules: [
        {
          test: /\.ts|\.tsx$/,
          loader: "ts-loader",
          exclude: /node_modules/
        }
      ]
    },
    stats: 'errors-only',
    plugins
  }
}
