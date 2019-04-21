

const url = require('url');
const queryString = require('querystring');

function check (req, res) {
   var result = queryString.parse(url.parse( req.url ).query);

   const queryPerson = require('../service/personControl');

   console.log( queryPerson(result.name) )

   res.writeHead(200);
   res.write('over');
   res.end();
}

module.exports = check;