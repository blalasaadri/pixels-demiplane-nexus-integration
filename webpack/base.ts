import TerserPlugin from "terser-webpack-plugin";
import { BannerPlugin, type Configuration } from "webpack";
import { generateHeader } from "../plugins/userscript.plugin";

const config: Configuration = {
	entry: "./src/index.ts",
	target: "web",
	resolve: {
		extensions: [".ts", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.m?ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	externals: {
		"@systemic-games/pixels-web-connect": "pixelsWebConnect",
	},
	optimization: {
		minimize: false,
		minimizer: [
			new TerserPlugin({
				// minify: TerserPlugin.swcMinify,
				terserOptions: {
					format: {
						comments: false,
					},
					compress: false,
					mangle: false,
				},
				extractComments: false,
			}),
		],
		//usedExports: true,
	},
	plugins: [
		new BannerPlugin({
			banner: generateHeader,
			raw: true,
		}),
	],
};

export default config;
