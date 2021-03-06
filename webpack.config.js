/*
  webpack.config.js  webpack的配置文件
    作用: 指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）

    所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs。
*/

// resolve用来拼接绝对路径的方法
const { resolve } = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports = {
  // webpack配置
  // 入口起点
  entry: './src/index.js',
  // 输出
  output: {
    // 输出文件名
    filename: 'built.js',
    // 输出路径
    // __dirname nodejs的变量，代表当前文件的目录绝对路径
    path: resolve(__dirname, 'build')
  },
  // loader的配置
  module: {
    rules: [
		
    ]
  },
  // plugins的配置
  plugins: [
    // 详细plugins的配置
	//下载html插件
	new HtmlWebpackPlugin({
		template:'./public/index.html' //复制文件，并自动引入打包的所有资源
	}) //HtmlWebpackPlugin默认创建一个空的html文件，并自动引入打包的所有资源
  ],
  // 模式
  mode: 'development', // 开发模式
  // mode: 'production'
}
