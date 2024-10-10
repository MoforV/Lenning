const express = require('express')
const app = express()
/* 
app.get('/', (req, res) => {
// 调用res提供的send方法
	res.send({ name:'Michael', age:20, sex:"man"})
})

app.get('/user', (req,res) => {
	res.send("<h1>I'm Michael</h1>");
})

// 获取url参数
app.get('/query', (req,res)=>{
	res.send(req.query);
})

// 获取url动态参数，这里的名称是获取到用户输入到url后面拼接的字符
app.get('/num/:id/:name', (req,res)=>{
	res.send(req.params)
	res.send(req.params.id)
	res.send(req.params.name)
})
 */

// 创建静态资源托管，static括号中的字符串就是文件目录；
// use的第一个参数可以省略，省略后url上可以省略文件夹名称直接访问到文件夹内容
// 如：http://127.0.0.1:9000/cg30.png
app.use(express.static('page'))
// 使用第一个参数就必须要在url上加上第一个参数的字符串
// 如：http://127.0.0.1:9000/paopao/index.html
app.use('/paopao', express.static('web'))


app.listen(9000, ()=>{
	console.log('server is running for 127.0.0.1:9000')
})