const mes = {
   origin: [
      {
         user: '小可爱',
         value: '这是一个评论',
         date: '2019-2-12',
         next: [0, 1, 2]
      }
   ],
   target: [
      {
         user: '小哥哥',
         date: '2019-2-12',
         value: '这是另一个评论'
      },
      {
         user: '小哥哥',
         date: '2019-2-12',
         value: '这是另一个评论'
      },
      {
         user: '小哥哥',
         date: '2019-2-12',
         value: '这是另一个评论'
      },
      {
         user: '小哥哥',
         date: '2019-2-12',
         value: '这是另一个评论'
      }
   ]
}

const data = {}
data.list = mes;

module.exports = function postMessages (req, res) {         //发送评论信息
   // console.log('postMessage', req.body)
   res.writeHead(200, {
      'Content-Type': 'application/json;'
   })
   res.write(JSON.stringify(data));
   res.end();
}