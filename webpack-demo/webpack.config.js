const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "app.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html"
        })
    ],
    //webpack-dev-server 是把资源打包到内存，可以提供实时更新
    devServer: {
        open: true,
        port: 8090,
        contentBase: './dist'
    }
}