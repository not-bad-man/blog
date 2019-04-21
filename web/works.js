

module.exports = function (req, res) {
   const data = require('../works/description');

   res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8'
   })
   
   res.write(JSON.stringify(data))
   res.end();
}  