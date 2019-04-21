const fs = require('fs');
const path = require('path')
const globalConf = {};

fs.readFileSync( path.resolve(__dirname, '../blog.conf') ).toString().split('\r\n').map( (ele) => {
   var kv = ele.split('=');
   globalConf[kv[0]] = kv[1];
})   


module.exports = globalConf;