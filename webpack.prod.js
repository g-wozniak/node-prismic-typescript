var path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')

module.exports = env => {

  const appName = env.WEBAPP_NAME

  console.log('\n\n webpack: webpack.prod.js')
  console.log(` webapp_name: ${appName}`)
  console.log(` webapp_env: ${env.WEBAPP_ENV}\n\n`)

  return {
    mode: 'production',
    entry: [
      require.resolve(path.resolve(__dirname, "src") + '/common/polyfills'),
      './src/' + appName + '/bootstrap.tsx'
    ],
    output: {
      publicPath: '/app',
      path: '/' + path.resolve(__dirname, "dist") + '/' + appName + '/app-prod/app',
      filename: "app.js"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          loader: "ts-loader",
          exclude: /node_modules/
        }
      ]
    },
    stats: { 
      children: false,
      warnings: false
    },
    optimization: {
      minimize: true,
      moduleIds: 'hashed'
    },
    plugins: [
      new HtmlWebpackPlugin({
        hash: true,
        template: path.resolve(__dirname, "dist") + '/' + appName + '/prod.html',
        filename: path.resolve(__dirname, "dist") + '/' + appName + '/app-prod/index.html'
      }),
      new webpack.DefinePlugin({
        'process.env.WEBAPP_ENV': JSON.stringify('production')
      }),
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
    ]
  }
}
