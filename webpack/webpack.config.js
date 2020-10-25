const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app_bundle.js',
  },
  // watch: !isProduction,
  mode: "development",
  module: {
    rules: [
      { 
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader' 
      },
      { 
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'] 
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 8080,
  }
}
