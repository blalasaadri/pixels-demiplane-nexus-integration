import path from "node:path";
import { merge } from "webpack-merge";
import base from "./base";

export default merge(base, {
	mode: "development",
	cache: {
		type: "filesystem",
		name: "dev",
	},
	output: {
		path: path.resolve(".", "userscripts"),
		filename: "index.dev.user.js",
	},
	devtool: "eval-source-map",
	watch: true,
	watchOptions: {
		ignored: /node_modules/,
	},
});
