const connection = require('./util');
const log = require('../log')


module.exports = function queryPerson (user, password) {

   return new Promise( (res, rej) => {
      connection.connect();

      connection.query('select user, password from person where user=? and password=?', [user, password], function (err, result) {
         if (err) {
            log('query sql fail', {user, password})
            rej(result);
         } else {
            log('query sql success', {user, password})
            res(result);
         }
      })
      connection.end();
   })

}

