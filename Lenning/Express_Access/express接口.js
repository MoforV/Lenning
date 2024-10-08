const express = require('express');

const app = express();

// 导入路由模块
const router = require('./express_router')

app.use(express.express.urlencoded({extended: false}))

app.use('/api', router)

app.listen(9000, ()=>{
	console.log('服务运行在http://127.0.0.1:9000');
})