const webpack = require('webpack')

module.exports = {
    entry: './entry/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port:8080,
        contentBase: './public',
    },
    module:{
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                preset: ['es2015', 'react']
            }
        }]
    }
}