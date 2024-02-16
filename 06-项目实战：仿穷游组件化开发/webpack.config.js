const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 获取绝对路径
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
	mode: "development",
	// source-map，调试用的，出错的时候，将直接定位到原始代码，而不是转换后的代码
	devtool: "eval-cheap-module-source-map",
	resolve: {
		// 倾向于将模块请求解析为相对请求
		preferRelative: false,
		// 自动补全（可以省略）的扩展名
		extensions: [".js"],
		// 路径别名
		alias: {
			api: resolve("src/api"),
			fonts: resolve("src/assets/fonts"),
			images: resolve("src/assets/images"),
			styles: resolve("src/assets/styles"),
			components: resolve("src/components"),
			pages: resolve("src/pages"),
		},
	},
	// Webpack 入口文件
	entry: {
		index: "./src/pages/index/index.js",
	},
	// Webpack 输出路径
	output: {
		// 输出的目录
		path: resolve("dist"),
		// 输出的文件名
		filename: "js/[name].js",
		// 输出的资源文件名
		assetModuleFilename: "img/[name][ext]",
		// 清空 dist 目录
		clean: true,
	},
	// 不同类型模块的处理规则
	module: {
		rules: [
			// 模板文件
			{
				test: /\.art$/,
				loader: "art-template-loader",
			},
			// html
			{
				test: /\.html/,
				type: "asset/resource",
				generator: {
					filename: "static/[name][ext]",
				},
			},
			// css
			{
				test: /\.css$/,
				// 多个 loder 从右到左被应用（从最后到最先配置）
				use: ["style-loader", "css-loader"],
			},
			// 图片
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024, // 10kb
					},
				},
				generator: {
					filename: "images/[name][ext]",
				},
			},
			// 字体文件
			{
				test: /.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
				generator: {
					filename: "fonts/[name][ext]",
				},
			},
		],
	},
	plugins: [
		// 生成一个 HTML5 文件， 在 body 中使用 script 标签引入所有 webpack 生成的 bundle
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/pages/index/index.art",
		}),
	],
};
