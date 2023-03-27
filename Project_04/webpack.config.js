const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  devtool: 'inline-source-map',
  devServer: {
    port: 8000,
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
};