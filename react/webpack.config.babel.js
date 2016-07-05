module.exports = {
  entry: './src/js/index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: 'style!css!stylus',
      },
    ],
  },
}
