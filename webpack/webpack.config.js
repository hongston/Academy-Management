var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    'babel-polyfill',
    './src/app.js'
  ],
  output: {
    path: path.resolve(__dirname,"..","dist"),
      publicPath: '/',
      filename: "bundle.js"
  },
  resolve : {
    extensions: [".js", ".jsx"],
    alias: {
      "@components": path.resolve('src/components'),
      "@redux": path.resolve('src/redux'),
      "@containers": path.resolve('src/containers'),
      "@layouts": path.resolve('src/layouts'),
      "@utils": path.resolve('src/utils'),
      "@AWS": path.resolve('src/AWS'),
      "@models": path.resolve('src/models')
    }
  },
  devtool: "eval",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:4]'
            }
          },
          {
            loader: "sass-loader"
          }
        ],
      },
      {
        test: /\.png/,
        use: [
          {
            loader : "file-loader"
          }
        ]
      }
    ]
  }
};