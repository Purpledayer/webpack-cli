const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');                                // 拆分css样式的插件
// mini-css-extract-plugin webpack4 新插件 代替 extract-text-webpack-plugin
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.js',                                                                            // 入口文件
    output: {                                                                                           // 出口文件
        filename: 'bundle.[hash:4].js',                                                                 // 打包后的文件名称
        path: path.resolve('dist')                                                                      // 打包后的目录，必须是绝对路径
    },             
    resolve: {                                                                                          //省略后缀名写法
        extensions: ['.jsx','.js', '.json','.less'],
        alias: {
            src: './src'
        }
    },
    module: {                                                                                           // 处理对应模块
        rules: [
            {
                test: /\.css|.less$/,                                                                   // 解析css
                use: ExtractTextWebpackPlugin.extract({
                    use: 'css-loader'                                                                   // 将css用link的方式引入就不再需要style-loader了
                }),
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,                                                                // 小于8k的图片自动转成base64格式，并且不会存在实体图片
                            outputPath: 'images/'                                                       // 图片打包后存放的目录
                        }
                    }
                ]
            },
            {                                                                                           // 引用字体和文件
                test: /\.(eot|ttf|woff|svg)$/,
                use: 'file-loader'
            },
            {                                       /**疑问与上面的css怎么设置 */
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test:/\.js$/,
                use: 'babel-loader',
                include: /src/,                                                                         // 只转化src目录下的js
                exclude: /node_modules/                                                                 // 排除掉node_modules，优化打包速度
            }
            // mini-css-extract-plugin webpack4 新插件 代替 extract-text-webpack-plugin
            // {
            //     test: /\.css$/,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader']
            // }
        ]
    },     
                                                    
    optimization: {                                                                                     // 提取公共代码
        splitChunks: {
            cacheGroups: {
                vendor: {                                                                               // 抽离第三方插件
                    test: /node_modules/,                                                               // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'vendor',                                                                     // 打包后的文件名，任意命名   
                                                                                                        // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: 10   
                },
                utils: {                                                                                // 抽离自己写的公共代码，utils这个名字可以随意起
                    chunks: 'initial',
                    name: 'utils',                                                                      // 任意命名
                    minSize: 0                                                                          // 只要超出0字节就生成一个新包
                }
            }
        }
    },                                
    plugins: [                                                                                          // 对应的插件
        new HtmlWebpackPlugin({                                                                         // 通过new一下这个类来使用插件
            template: './src/index.html',                                                               // 用哪个html作为模板
            hash: true,                                                                                 // 会在打包好的bundle.js后面加上hash串
        }),
        new ExtractTextWebpackPlugin('css/style.css'),                                                  // 拆分后会把css文件放到dist目录下的css/style.css
        // mini-css-extract-plugin webpack4 新插件 代替 extract-text-webpack-plugin
        // new MiniCssExtractPlugin({
        //     filename: 'css/a.css'                                                                    // 指定打包后的css
        // })
        new CleanWebpackPlugin('dist'),                                                                 // 打包前先清空
        new webpack.HotModuleReplacementPlugin()                                                        // 热更新，热更新不是刷新
    ],            
    devServer: {                                                                                        // 开发服务器配置
        contentBase: './dist',
        host: 'localhost',                                                                              // 默认是localhost
        port: 3000,                                                                                     // 端口
        open: true,                                                                                     // 自动打开浏览器
        hot: true                                                                                       // 开启热更新
    },                                                                                      
    mode: 'development'                                                                                 // 模式配置
}