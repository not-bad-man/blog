const queryPerson = require('../dao/person/queryPerson');
const insertPerson = require('../dao/person/insertPerson');
const log = require('../log');

module.exports = function (body) {            //type='login' / 'registe'     

   return new Promise( (res, rej) => {
      if (body.loginOrRegiste === 'login') {            //进行数据库查询
         queryPerson(body.user, body.password).then( (data) => {
            res({
               exist: data.length > 0 
            });
            log('query Mysql', body)
         }).catch( (error) => {
            rej(error)
         })
      } else if (body.loginOrRegiste === 'registe') {       //向数据库插入数据
         insertPerson(body.user, body.password).then( () => {
            res({
               exist: true
            });
            log('insert Mysql', body)
         }).catch( (err) => {
            rej(err)
         })
      }
   })

};