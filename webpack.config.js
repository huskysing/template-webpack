const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const sass = require("sass");
module.exports = {
	mode: "production",
	entry: {
		top: path.resolve(__dirname, "./src/js/top.js"),
		bundle: path.resolve(__dirname, "./src/js/index.js"),
		style: path.resolve(__dirname, "./src/scss/style.scss"),
	},
	output: {
		path: path.resolve(__dirname, "./public/assets/"),
		filename: "js/[name].js",
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					{
            loader: 'sass-loader',
            options: {
              implementation: sass,
            }
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
		}),
		new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
	],
	devServer: {

	},
	watchOptions: {
		ignored: /node_modules/,
	},

};
