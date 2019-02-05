const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: path.resolve(__dirname, "src", "app", "index.js"),
  output: {
    path: path.resolve(__dirname, "app"),
    filename: "App.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "app"),
    port: 9000,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "app", "html", "index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: "/node_modules/",
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      }
    ]
  }
};

module.exports = config;
