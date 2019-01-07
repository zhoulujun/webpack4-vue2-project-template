/**
 *@author Create by zhoulujun.cn on 1/4/1910:30 AM
 *@version 1.0.0
 */
'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const publicPath = '';
const config = {
    // target: 'dist',//dist 目标目录
    entry: {//配置页面入口
        index: './src/index.js'
    },
    output: {  //配置输出选项
        path: path.resolve(__dirname, 'dist'),//输出路径为，当前路径下
        filename: '[name].[hash:5].js'//输出后的文件名称
    },
    resolve: {
        extensions: ['.js', '.json'] //减少文件查找
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            // singleton:true //处理为单个style标签
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // minimize:true //压缩css
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,//图片处理
                use: [
                    {
                        loader: 'url-loader',

                        options: {
                            limit: 2048,
                            name: '[name].[hash:5].[ext]',
                        }
                    },
                    {
                        loader: 'file-loader',
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,//字体处理
                use: ['url-loader']
            },

            {//压缩图片
                loader: 'image-webpack-loader',
                options: {
                    bypassOnDebug: true,
                }
            },
            {//babel编译
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/ //设置node_modules里的js文件不用解析
            },

            {
                test: /\.vue$/,
                use: 'vue-loader'
            },






        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: './index.html',//输出文件
            template: path.resolve(__dirname, './src/index.html'),//模板文件
            inject: 'body',//插入位置
            chunks: ['index'],//加入的js文件，若无此属性，则默认为所有js
            hash: true,
            minify: {
                caseSensitive: false,
                removeComment: true,//移除注释
                collapseWhitespace: false//移除多余空格
            }
        })
    ]
};

module.exports = config;