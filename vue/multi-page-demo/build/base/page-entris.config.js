const glob = require('glob');
const path = require('path');

var pagesDir = path.resolve(__dirname, '../../src/pages'); // 入口文件的目录
var options = {
  cwd: pagesDir, // 在pages目录里找
  sync: true // 这里不能异步，只能同步
};
var globInstance = new glob.Glob('**/*.js', options);
var entries = [];
globInstance.found.forEach((v) => {
  entries.push(v.substring(0, v.lastIndexOf('.')))
})
module.exports = entries; // 一个数组，形如['index/index', 'index/login', 'alert/index']