// 生产环境配置

const { merge } = require("webpack-merge");
const { resolve } = require("./path.config");
const baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
	// 构建模式：生产
	mode: "production",
	// 输出
	output: {
		// bundle 文件名称static:
		filename: "[name].[contenthash].bundle.js",
		// bundle 文件路径
		path: resolve.dist,
		// 默认情况下，output.publicPath 会被设置为相对于当前 HTML 页面的路径
		// 输出的资源文件的公共路径，即指定打包后的资源文件在浏览器中引用时的前缀路径，使用 CDN 时可以用到
		// publicPath: "dist/",
		// 编译前清除 dist 目录
		clean: true,
	},
});
