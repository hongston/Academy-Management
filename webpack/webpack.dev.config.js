var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    // reload full pages when hot reload fails to get accept from ancestors.
    'webpack-hot-middleware/client?reload=true',
    './src/app.js',
  ],
  output: {
      path: path.resolve(__dirname,"..","dist"),
      publicPath: '/',
      filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
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
  devtool: "source-map",
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