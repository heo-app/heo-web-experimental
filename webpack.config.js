const path = require('path');

module.exports = {
  entry: ['./dist/index.js'],
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        loader: "css-loader",
        options: {
          modules: true,
          url: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve('./dist'),
    port: 3000,
    hot: true,
    historyApiFallback: true
  },
  experiments: {
    lazyCompilation: true,
    topLevelAwait: true,
  },
};
