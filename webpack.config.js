var webpack = require('webpack'),
  path = require('path');


module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:8090',
      './app/index.tsx'
    ]
  },
  module: {
    preLoaders: [
    ],
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  output: {
    path: path.join('./build'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8090/build/'
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx'],
    modulesDirectories: ['node_modules']
  },
  devServer: {
    port: 8090
  },
  devtool: 'source-map' // source maps with debugging, slow
  //devtool: 'eval-source-map'
};
