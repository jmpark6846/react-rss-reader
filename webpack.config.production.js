const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  mode:'production',
  entry:{
    vendor: ['semantic-ui-react'],
    app: './src/index.js'
  },
  output:{
    filename: 'static/[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    },
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude: /node_modules/,
        use:['babel-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options:{
              minimize: true,
              sourceMap: true,
              modules: true,
              importLoaders: 1,
              camelCase: true,
            }
          }]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'static/styles.[hash].css',
      allChunks: true
    })
  ],
  
}