const path = require('path');


    module.exports = {
    entry: './src/App.js',
    output: {
        path: path.resolve('dist'),
        filename: 'main.js'
    },

    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}

module.exports = {
    entry: {
        main:path.resolve('./src/Developer.js')
    },

    output: {
        path: path.resolve('dist'),
        filename: 'main.js'
    },

    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/

            }
        ]
    }
}


