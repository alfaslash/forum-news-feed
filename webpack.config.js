var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        './source/scripts/modules/index.jsx'
    ],

    output: {
        path: path.resolve(__dirname, './public/build/'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    module: {
        rules: [{
            use: 'babel-loader',
            include: [
                path.resolve(__dirname, 'source/scripts')
            ],
            exclude: /node_modules/,
            test: /\.jsx?$/
        }, {
            test: /\.html$/,
            use: {
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]'
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader, css-loader']
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract(['style-loader', 'css-loader', 'less-loader'])
        }]
    },

    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname)
        ],
        extensions: ['*', '.js', '.jsx', '.css']
    },

    context: __dirname,

    devtool: 'source-map',

    stats: {
        colors: true
    },

    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css')
    ]
};
