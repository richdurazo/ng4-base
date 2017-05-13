var path = require('path');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.resolve(_dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
        chunFilename: '[id].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    { loader: 'awesome-typescripti-loader', options: {
                        transpileOnly: true
                    }},
                    { loader: 'angular2-template-loader' },
                    { loader: 'angular-router-loader' }
                ]
            }
            
        ]
    },
    devServer: {
        historyApiFallback: true,
        states: 'minimal'
    }
});