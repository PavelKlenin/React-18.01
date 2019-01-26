import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    entry: {
        index: './src/index'
    },
    output: {
        filename: '[name].[hash].js'
    },
    resolve: {
        modules: [
            path.resolve(__dirname, '../src/modules'),
            'node_modules'
        ],
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.s[c|a]ss$/,
                use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: ['file-loader', {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true
                    }
                }]
            },
            {
                test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new WebpackMd5Hash()
    ]
};