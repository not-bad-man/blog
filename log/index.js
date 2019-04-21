const fs = require('fs');

module.exports = function log(type, content) {
   let str = `时间:${new Date()}\n执行操作:${type}\n操作内容:${JSON.stringify(content)}\n----------------------------------\n\n`

   fs.appendFile('log/log.txt', str, function(err) {
      if (err) {
         console.log(err)
      }
   }) 
}

