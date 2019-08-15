// webpack基于node.js
const path = require("path");

module.exports = {
    //入口配置
    entry: './src/index.js',
    //出口配置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "app.js"
    },
    //模块配置
    module: {
        rules: [
            {
                test: /\.css/,
            }
        ]
    },
    //插件配置
    plugins: {},
    //模式配置，开发模式还是生产模式
    mode:'',
    //开发服务器配置
    devServer: {},
    //解析配置
    resolve: {}

}