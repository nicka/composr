const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  favicon: './client/assets/favicon.ico',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  entry: './client/index.jsx',
  output: {
    path: path.resolve('client/dist'),
    filename: '[name]-bundle-[hash].js',
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' },
      { test: /\.(png|jpg|svg)$/, use: 'file-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    HtmlWebpackPluginConfig,
  ],
};
