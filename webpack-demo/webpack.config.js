const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//清除dist目录插件，在打包之前把旧的文件删除
const CleanWebpackPlugin = require("clean-webpack-plugin");

const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const extractcss = new ExtractTextWebpackPlugin({
    filename: "assets/css/app.css"
});

module.exports = {
    entry: './src/assets/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: "assets/js/app.js",
        publicPath: "/"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "./index.html",
            template: "src/index.html"
        }),
        new CleanWebpackPlugin(['dist']),
        extractcss
    ],
    //webpack-dev-server 是把资源打包到内存，可以提供实时更新
    devServer: {
        open: true,
        port: 8090,
        contentBase: './',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                //
                use: extractcss.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: "css-loader",
                        options: {
                            module: true,
                            localIdentName: '[local]-[hash:base64:8]'
                        }
                    }]

                }),
                include: [path.resolve(__dirname, 'src/assets/css')]
            },
            {
                test: /\.css$/,
                //
                use: extractcss.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']

                }),
                include: [path.resolve(__dirname, 'node_modules')]
            },
            {
                test: /\.(jpg|png|webp|gif)$/,
                //url-loader 将图片转成base64格式，如果图片较小，可以使用，图片过大，不建议使用
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        //[ext]变量，表示文件后缀名
                        name: 'assets/images/[name].[hash:8].[ext]'
                    }
                }
            },
            {
                test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: 'assets/fonts/[name].[hash:8].[ext]'
                    }
                }
            },
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: path.resolve(__dirname, "node_modules")
            }
        ]
    }
};