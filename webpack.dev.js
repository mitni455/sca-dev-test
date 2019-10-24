const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode : "development",
    devtool : 'inline-source-map',
    devServer : {
        port: 8081,
        host: (process.env.NODE_ENV === 'local' ? '127.0.0.1' : '0.0.0.0')
    },
    plugins : [
        (() => {
            console.log("**** Setting static ENV variables ****");
            
            return new webpack.DefinePlugin({ 
                'process.env.PORT' : JSON.stringify(process.env.PORT),
            })
        })(),
    ]
})