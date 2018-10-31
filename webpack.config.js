const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {   test: /\.(js)$/,
                exclude: /node_modules/,
                use: 'babel-loader' 
            },
            {
                test: /\.scss$/,
                use:  [ 
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'resolve-url-loader',
                options: {
                    limit: 10000
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        new HtmlPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
          })
    ],
    mode: 'development',
}