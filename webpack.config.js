var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
   devtool: 'source-map',
   entry: [
      'webpack-hot-middleware/client',
       'babel-polyfill',
      './source/scripts/modules/index.jsx'
   ],
   root: path.resolve('./'),
   output: {
      path: path.resolve(__dirname, './public/build/'),
      filename: 'bundle.js',
      publicPath: '/static/'
   },
   module: {
      resolve: {
         extensions: ['', '.js', '.jsx', '.css']
      },
      loaders: [{
         loaders: ['react-hot', 'babel-loader'],
         include: [
            path.resolve(__dirname, 'source/scripts')
         ],
         exclude: /node_modules/,
         test: /\.jsx?$/,
         plugins: ['transform-runtime']
      }, {
         test: /\.html$/,
         loader: 'file?name=[name].[ext]'
      }, {
         test: /\.css$/,
         loader: 'style!css'
      }, {
         test: /\.less$/,
         loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?browsers=last 3 version!less')
      }]
   },
   stats: {
      colors: true
   },
   plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin('style.css')
   ]
};
