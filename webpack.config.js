var path = require('path');
var webpack = require('webpack');

var serverConfig = {
  entry: './server/server.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.node.js'
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015']
              }
          }
      ]
  }
};

module.exports = [ serverConfig ];