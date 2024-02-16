// 路径配置

/**
 * 使用了 Node.js 的文件系统模块（fs）和路径模块（path）。
 */
const fs = require("fs");
const path = require("path");

/**
 * resolve 函数用于获取项目根目录下的相对路径所对应的绝对路径。
 * process.cwd() 是 Node.js 中的一个方法，返回当前工作目录。
 * fs.realpathSync() 用于获取指定路径的真实路径。它将返回解析后的绝对路径，其中包括所有符号链接的路径
 */
const directory = fs.realpathSync(process.cwd());
const resolve = (relativePath) => path.resolve(directory, relativePath);

module.exports = {
	resolve,
	src: resolve("src"),
	dist: resolve("dist"),
};
