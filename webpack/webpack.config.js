const path = require('path');
const webpack = require('webpack');

const rootPath = path.resolve(__dirname, '../client')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    devtool: 'cheap-module-eval-source-maps',

    entry: [
        '@babel/polyfill',
        'webpack-hot-middleware/client',
        path.resolve(rootPath, 'index')
    ],

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../wwwroot/dist'),
        publicPath: 'dist/'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        }),

        new VueLoaderPlugin(),

        new webpack.HotModuleReplacementPlugin()
    ],

    resolve: {
        alias: {
            '~': rootPath,
            '@': rootPath,
            'vue': 'vue/dist/vue.esm.js'
        },

        extensions: ['.js', '.jsx', '.json']
    },

    stats: 'minimal'
};