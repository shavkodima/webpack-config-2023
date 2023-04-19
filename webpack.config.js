const path = require('path')
const HtmlWebpackTemplate = require('html-webpack-plugin')
const MinExtractPluginCss = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:'./src/app.js',
  output:{
    path:path.resolve(__dirname,  'dist'),
    filename:'app.[contenthash].js',
    //Забирает папку assets
    assetModuleFilename: path.join('./assets/img', '[name].[contenthash][ext]'),
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    // new HtmlWebpackTemplate({
    //   template:path.resolve(__dirname, './src/index.html'),
    //   filename:'index.html'
    // }),
    new MinExtractPluginCss(),

  ],
  module: {
    rules: [
      {
        test:/\.js$/,
        use:'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [MinExtractPluginCss.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      }
    ],
  },
  devServer:{
    watchFiles:path.join(__dirname, 'src'),
    port:9000
  }
}