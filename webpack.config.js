'use strict';

const path = require('path');
const webpack = require('webpack');

const precss = require('precss');
const autoprefixer = require('autoprefixer');

const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  cache: true,
  devtool: 'eval',
  resolve: { root: [ path.resolve('.') ] },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new FlowStatusWebpackPlugin({
      failOnError: true
    }),
    new DashboardPlugin()
  ],
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader"
    }],
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test:   /\.css$/,
      loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        'postcss'
      ]
    }]
  },
  postcss: () => [autoprefixer, precss],
  devServer: {
    port: 3000,
    hot: true,
    cache: true,
    quiet: true,
    noInfo: true,
    inline: true,
    colors: true,
    contentBase: '.',
    publicPath: '/dist/'
  }
};

