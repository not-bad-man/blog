module.exports = function saveMessages (req, res) {             //保存评论信息
   var body = req.body;

   console.log(body)
   res.writeHead(200, {
      "Content-Type":'application/json; charset=utf-8'
   });
   res.write('over')
   res.end();
}