const webpack = require("@nativescript/webpack");
const fileloader = require("file-loader");

module.exports = (env) => {
	webpack.init(env);

	// Learn how to customize:
	// https://docs.nativescript.org/webpack

	webpack.chainWebpack(config => {
		config.module
      .rule('png')
      .test(/\.png$/)
      .use('file-loader')
      .loader('file-loader')
      .options(
      	{ name: '[path][name].[ext]' }
      )
	});

	return webpack.resolveConfig();
};