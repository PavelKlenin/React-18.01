import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';

export default {
    output: {
        path: path.resolve(__dirname, '../bin/dev')
    },
    plugins: [
        new CleanWebpackPlugin('bin/dev', {
            root: path.resolve(__dirname , '../')
        })
    ]
};