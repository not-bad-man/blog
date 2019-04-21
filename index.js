const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const globalConf = require('./tools/getConf');

const app = express();

//内容解析
app.use(bodyParser.json());
app.use(globalConf.isLogin_path, cookieParser());
app.use(bodyParser.text());

//静态文件
app.use('/',express.static('page'));
app.use('/works', express.static(globalConf.works_file));
app.use('/richText', express.static(globalConf.richText_file));
app.use('/article', express.static(globalConf.article_file));
//功能
app.use(globalConf.login_path, require('./web/login'))           //登录验证

app.get(globalConf.work_path, require('./web/works'));          //demo展示

app.use(globalConf.isLogin_path, session({
   secret: 'yinjie',
   name: 'uid',
   cookie: {
      maxAge: 1000*60*30,
      httpOnly: false
   },
   resave: false
}))
app.get(globalConf.isLogin_path, require('./web/isLogin'));      //保持登录状态

app.post(globalConf.richText_path, require('./tools/saveArticles'))   //写的文章

app.post(globalConf.save_messages_path, require('./web/saveMessages'))   //保存评论
app.get(globalConf.put_messages_path, require('./web/putMessages'))     //->客户端 评论

app.listen(12345);