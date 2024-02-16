// 开发环境配置

/**
 *  在 Node.js 中使用 require() 方法加载文件会默认按照 .js、.json、.node 的顺序
 *  依次查找文件，如果找到了对应的文件，则直接加载并返回其内容。
 * */
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

module.exports = merge(baseConfig, {
	// mode 选项的作用是配置 webpack 的内置插件，以便在不同的构建模式下优化打包的输出。
	// 构建模式：开发
	mode: "development",
	// 开发工具，开启 source map，编译调试
	devtool: "eval-cheap-module-source-map",
	// 开发服务器
	devServer: {
		// 监听端口
		port: 9999,
		// 指定静态资源访问路径
		static: "dist/",
		// 自动打开浏览器
		open: true,
		// 热模块替换
		hot: true,
		// 是否为静态文件开启 gzip compression
		compress: true,
	},
});
