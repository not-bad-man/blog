const fs = require('fs');
const conf = require('../tools/getConf');
const log = require('../log');

module.exports = function saveArticles (req, res) {
   let content = req.body;
   // console.log(req.body)

   new Promise( (res, rej) => {
      fs.writeFile(conf.article_file + '/' + getNumber() + '.html', content, function (err) {
         if (err) {
            log('写文章', '没写进去');
         } else {
            log('写文章', '文章写入成功');
            res();            
         }
      });
   })
   .then( () => {
      res.writeHead(200);
      res.write('成功写入');
      res.end();
   })

}


function getNumber () {
   return Math.floor(Math.random()*1000000000000000);
}


