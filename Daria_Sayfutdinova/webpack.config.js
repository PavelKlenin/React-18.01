const path = require('path');

module.exports = {
  	entry:{
		main: path.resolve('./src/index.jsx'),
	},

	output: {
		path: path.resolve('dist'),
		filename: 'main.js'
},
module: {
	rules :[
	{
		test:/\.jsx?$/,
		exclude: /node_modules/,
use: {
	 loader: 'babel-loader',
	}
								
},],},
resolve: {
	extensions: ['.js', '.jsx'],
}
}