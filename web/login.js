const personControl = require('../service/personControl') ; 


module.exports = function (req, res) {            //登录时，查询用户是否存在

   var body = req.body;
   res.writeHead(200, {
      "Content-Type":'application/json; charset=utf-8'
   });

   personControl(body).then( (data) => {
      var result = {
         successLogin: data.exist
      }
      res.write(JSON.stringify(result));
      res.end();
   }).catch( (res) => {
      console.log(res)
   })

}