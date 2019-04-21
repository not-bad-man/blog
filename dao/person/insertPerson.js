const connection = require('./util');
const log = require('../log');

function insertPerson (user,password) {

   return new Promise( (res, rej) => {
      connection.connect();

      connection.query('insert into person(user, password) values(?, ?)', [user, password], function (err, result) {
         console.log(user, password)
         if (err) {
            log('insert sql fail', {user, password});
            rej('用户名已存在');
         } else {
            log('insert sql success', {user, password});            
            res(result);
         }
      })

      connection.end();
   })      

}



module.exports = insertPerson;
