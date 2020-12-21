import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import common from './webpack.common';
import merge from 'webpack-merge';

const config: webpack.Configuration = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].bundle.js',
    publicPath: 'http://localhost:8080/',
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    port: 8080,
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './src/assets/statics/logoChr.png',
    }),
  ],
});

export default config;
