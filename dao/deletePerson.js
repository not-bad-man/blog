const connection = require('./util');

module.exports = function deletePerson (user,password) {
   return new Promise( (res, rej) => {
      connection.connect();

      connection.query('delete person where user = ? and password = ?', [user, password], function (err, result) {
         if (err) {
            console.log(err)
         } else {
            console.log('数据删除成功');
            res(result);
         }
      })
      connection.end();
   })

}
