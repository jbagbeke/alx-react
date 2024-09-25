const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, './js/dashboard_main.js')
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
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
        ]
    }
}