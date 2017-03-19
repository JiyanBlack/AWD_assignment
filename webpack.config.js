const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'server/static/js'),
    entry: {
        app: ['./client.js'],
    },
    output: {
        path:path.resolve(__dirname, 'server/static/js'),
        filename: './bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './server/static/'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015'] }
            }],
        }, ],
    },
};