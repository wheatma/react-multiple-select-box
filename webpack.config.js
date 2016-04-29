var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    entry: path.resolve(SRC_PATH, 'react-multiple-select-box.js'),
    output: {
        path: BUILD_PATH,
        filename: "react-multiple-select-box.js",
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loaders: ['babel'],
            include: SRC_PATH
        }]
    }
}