const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    mode: 'production',
    devtool: false,
    entry: {
        bundle: path.resolve('./js/dashboard_main.js'),
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets',
                            name: '[name].[ext]',
                        },
                    },
                    'image-webpack-loader',
                ],
            },
        ]
    }
}