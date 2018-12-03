const path = require('path');


module.exports = {
  mode: 'development',
  entry: './client/index.jsx',

  output: {
    filename: 'bundle.js',
  },
  devServer: {
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'cheap-module-source-map'
};
