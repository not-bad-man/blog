module.exports = function isLogin (req, res) {

   var session = req.session;
 
   res.writeHead(200, {
      'Content-type': 'application/json; utf-8'
   })

   if (session.views) {
      session.views ++;
   } else {
      session.views = 1;
   }
   res.write(JSON.stringify({
      isLogin: true,
      views: session.views
   }))
   res.end();

   //执行查询返回包含信息的对象

}