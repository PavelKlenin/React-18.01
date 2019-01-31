const path = require('path');
HTMLplugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    module:{
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: [':data-src']
            }
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
              "style-loader",
              "css-loader",
              "sass-loader"
          ]
        },        
      ]
    },
    plugins :[
      new HTMLplugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        filename: 'index.html'
      }),
    ],
  };