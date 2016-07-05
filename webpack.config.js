var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: './examples/app.js',

  output: {
    filename: 'bundle.js',
    path: 'examples/__build__',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /.json$/,
        loader: 'json'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js')
  ]

};
