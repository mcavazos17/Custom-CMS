var webpack = require('webpack');
var path = require('path');

module.exports = {
    // Setting webpack 4 running configuration
    mode: 'development',

    // Entry file for all react code
    entry: [
        './client/index.jsx'
    ],
    output: {
        path: path.join(__dirname, '/server/public/js/'),
        filename: 'bundle.js',
        publicPath: 'server/public/js/'
    },

    // Adding babel loader to compile all javascript and jsx files
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                },
            },
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
    },
};
