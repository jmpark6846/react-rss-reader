const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'development',
  entry:{
    vendor: ['semantic-ui-react'],
    app: './src/index.js'
  },
  output:{
    filename: '[name].[hash].js',
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
        use: [
          'style-loader', 
          { 
            loader: 'css-loader', 
            options: {
              modules: true,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    host: 'localhost',
    port: process.env.PORT || 3000,
    historyApiFallback: true,
    open: true,
    hot: true,
  }
}