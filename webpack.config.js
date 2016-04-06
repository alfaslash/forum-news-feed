var path = require('path');
var webpack = require('webpack');

module.exports = {
   devtool: 'source-map',
   entry: {
      client: './source/scripts/modules/index.jsx'
   },
   root: path.resolve('./'),
   output: {
      path: path.resolve(__dirname, './public/build/'),
      filename: '[name].bundle.js'
   },
   module: {
      resolve: {
         extensions: ['', '.js', '.jsx', '.css']
      },
      loaders: [{
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loaders: ["babel-loader"]
      }, {
         test: /\.html$/,
         loader: "file?name=[name].[ext]",
      }, {
         test: /\.css$/,
         loader: 'style!css'
      }, {
         test: /\.less$/,
         loader: 'style!css'
      }]
   },
   stats: {
      // Nice colored output
      colors: true
   },
   plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
   ]
};
