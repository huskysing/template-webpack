const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
	mode: "production",
	entry: {
		top: path.resolve(__dirname, "./src/js/top.js"),
		bundle: path.resolve(__dirname, "./src/js/index.js"),
		"style.css": path.resolve(__dirname, "./src/scss/style.scss"),
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
					"sass-loader",
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ["public/css", "public/js"],
		}),
		new FixStyleOnlyEntriesPlugin(),
		new MiniCssExtractPlugin({
			filename: "css/[name]",
		}),
	],
	watchOptions: {
		ignored: /node_modules/,
	},
};
