const mysql = require('mysql');

const connection = mysql.createConnection({
   host: '129.204.192.252',
   user: 'root',
   port: 3306,
   password: "123456",
   database: 'blog'
})


module.exports = connection;

