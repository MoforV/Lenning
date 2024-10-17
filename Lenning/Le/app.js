const express = require('express');
const cors = require('cors');
const router = require('./routes/users.js');

const app = express();
app.use(cors())

// 封装res.cc函数
const cc = require('./function/app_cc.js')
app.use(cc())

app.use(express.urlencoded({ extended: false }));
app.use('/squ', router);
// 导入用户信息的路由模块
const userinfoRouter = require('./router/userinfo');
app.use('/my', userinfoRouter);


app.listen(9000, ()=>{
	console.log('Server is running for http://127.0.0.1:9000')
})