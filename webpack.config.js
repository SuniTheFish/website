const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    projects: './src/projects.js',
    basic: './src/basic.js',
  },
  output: {
    filename: 'src/[name].js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  // optimization: {
  //   splitChunks: {
  //     // include all types of chunks
  //     chunks: 'all',
  //   },
  // },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    watchContentBase: true,
  },
};
