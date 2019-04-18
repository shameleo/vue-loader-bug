const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './index.js',
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: [
					'css-loader'
				]
			},
			{
				test: /\.png$/,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]?[hash]'
				},
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
	],
	resolve: {
		alias: {
			Icons: path.resolve(__dirname, 'icons')
		}
	}
}