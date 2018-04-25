var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist");
var SOURCE_DIR = path.resolve(__dirname, "src");

var htmlConf = new HtmlWebpackPlugin({
    template: SOURCE_DIR + '/index.html',
    filename: 'index.html'
});

const env = process.env.NODE_ENV;

var config = {
    entry: SOURCE_DIR + "/app/index.js",
    mode: env || 'development',
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["react", "es2015", "stage-2"]
                    }
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            }, {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }
        ]
    },
    plugins: [
        htmlConf,
    ]
};

module.exports = config;