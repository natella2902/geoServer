let path = require('path');
let rules = require('./webpack.config.rules.js')();
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let HtmlPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

rules.push({
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
    })
})

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve('dist')
    },
    devServer: {
        index: 'index.html',
        overlay: true
    },
    devtool: 'source-map',
    module: {
        rules
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
              compress: false,
              ecma: 6,
              mangle: true
            },
            sourceMap: true
          })
        ]
    },
    plugins: [
        new HtmlPlugin({
            title: 'GeoReview',
            template: 'index.hbs'
        }),
        new ExtractTextPlugin('style.css'),
        new CleanWebpackPlugin(['dist'])
    ]
}