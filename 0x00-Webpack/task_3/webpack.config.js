const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    stats: {
        errorDetails: true
    },
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        header: path.resolve(__dirname, './modules/header/header.js'),
        body: path.resolve(__dirname, './modules/body/body.js'),
        footer: path.resolve(__dirname, './modules/footer/footer.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
               test: /\.(png|svg|jpg|jpeg|gif)$/i,
               type: 'asset/resource',
               use: [
                "file-loader",
                {
                    loader: "image-webpack-loader",
                    options: {
                        bypassingOnDebug: true,
                        disable: true,
                    }
                }
               ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin ({
            title: "Webpack JBA",
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        port: 8564,
        static: './public',
        open: true,
    },
}