import path from 'path';


module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, './js/dashboard_main.js')
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'public')
    },
}