const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  entry: path.resolve(__dirname, 'src', 'js', 'main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};

module.exports = config;