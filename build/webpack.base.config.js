const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const {CheckPlugin} = require('awesome-typescript-loader');
const path = require('path');
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '..','dist')
        // clean: true, // Clean the output directory before emit. webpack 5.20.0+
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    // loader: "ts-loader",
                    // 1.更适合和babel集成，使用babel转义和缓存 2.不需要安装额外的插件就可以把类型检查放到独立进程中
                    loader: "awesome-typescript-loader",
                    options: {
                        transpileOnly: false // 做语言转换，不做类型检查
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        }),
        // new ForkTsCheckerWebpackPlugin()
        new CheckPlugin()
    ]

}