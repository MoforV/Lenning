// 创建服务
// const express = require('express');
// const app = express();
// app.listen(9000, () => {
// 	console.log('server is running for 127.0.0.1:9000');
// })

// 根据类型不同返回不同的内容
const express = require('express')
const app = express()
// app.get('/', (req, res) => {
// 	// 调用res提供的send方法
// 	res.send({ name:'Michael', age:20, sex:"man"})
// })
// app.get('/user' (req.res) => {
// 	res.send("I'm Michael");
// })

app.get('/', (req,res)=>{
	console.log(req.query);
})
app.listen(9000, ()=>{
	console.log('server is running for 127.0.0.1:9000')
})