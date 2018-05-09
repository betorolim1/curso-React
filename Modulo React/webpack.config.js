const webpack = require('webpack')

module.exports = {
    entry: './ex/index.jsx',
    output: {
    path: __dirname + '/public',
    filename: './bundle.js'
    },
    resolve:{
        extensions: ['','.js','.jsx']
    },
    devServer: {
        port: 3333,
        contentBase: './public',
    },
    module: {
        loaders: [{
            test: /\.(js|jsx|mjs)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                cacheDirectory: true,
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}