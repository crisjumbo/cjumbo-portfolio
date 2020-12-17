const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common,{
  mode:'production',
  output:{
    path: path.resolve(__dirname, './dist') ,
    filename: 'js/[name].[hash].js',
    publicPath: '/',
    chunkFilename: 'js/[id].[chunkhash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use : [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css'
    }),
    new OptimizeCssAssetsPlugin(),
    new HtmlWebpackPlugin ({
      template: path.resolve(__dirname, 'public/index.html'),
      minify:{
        removeAttributeQuotes:true,
        collapseWhitespace: true,
        removeComments:true
      }
    }),
  ]
})