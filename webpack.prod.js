const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "production",
    plugins: [
        (() => {
            console.log("**** Production env variables ****");

            return new webpack.DefinePlugin({

            })
        })()
    ]

})