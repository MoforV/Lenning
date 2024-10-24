// 图书管理项目入口
const express = require('express')
const tempalte = require('art-template');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');
const app = express();

// 挂在中间件处理函数和json格式参数
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// 静态资源服务器
app.use('/www', express.static('./public'));

// 设置模板路径：设置views变量、后缀名为art、express兼容art-template
app.set('views',path.join(__dirname,'views'));
app.set('view engine','art');
app.engine('art',require('express-art-template'));

// 启动路由
app.use(router);
app.listen(9000, () => {
	console.log('Server is running for http://127.0.0.1:9000');
})