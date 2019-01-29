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
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
};