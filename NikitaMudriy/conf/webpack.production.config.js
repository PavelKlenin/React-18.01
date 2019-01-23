import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';

export default {
    output: {
        path: path.resolve(__dirname, '../bin/prod')
    },
    plugins: [
        new CleanWebpackPlugin('bin/prod', {
            root: path.resolve(__dirname , '../')
        })
    ]
};