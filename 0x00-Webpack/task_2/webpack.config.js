const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    mode: 'production',
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
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(gif|png|jp?g|svg)$/i,
                use: [
                  "file-loader",
                  {
                    loader: "image-webpack-loader",
                    options: {
                      bypassOnDebug: true,
                      disable: true,
                    },
                  },
                ],
            },
        ]
    }
}
