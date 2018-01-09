var webpack = require('webpack');
var path = require('path');

const srcDir = path.resolve(__dirname, './src');
const entryArr = {
    test: srcDir + '/test.js'
};
module.exports = {
     entry: entryArr, //入口文件
     output:{
          //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径 
          path: path.resolve(__dirname, './dist'), //输出位置
          filename: '[name].entry.js' //输入文件
     },
     module:{
          loaders:[
               {
                   test:/\.js$/,//支持正则
                   include: path.resolve(__dirname, './src'),
                   loader:'babel-loader'
               }
          ]
     }
}