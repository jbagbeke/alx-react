import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, './js/dashboard_main.js')
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'public')
    },
}