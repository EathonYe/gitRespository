const path = require('path');
const pageEntries = require('./base/page-entris.config');

var pagesDir = path.resolve(__dirname, '../src/pages');

const entries = {};
pageEntries.forEach((v) => {
  const key = v.substring(0, v.lastIndexOf('.'));
  entries[v] = pagesDir + '/' + v + '.js';
})

module.exports = entries; // 一个数组，形如['index/index.js', 'index/login.js', 'alert/index.js']