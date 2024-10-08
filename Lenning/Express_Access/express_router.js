const express = require('express');
const router = express.Router();

// 挂载路由
// Get请求
router.get('/get', (req, res) => {
	// 通过获取客户端通过查询字符串，发送到服务器的数据
	const query = req.query;
	// 调用res.send()方法向客户端相应处理结果
	res.send({
		status: 0,
		msg: "GIT请求成功",
		data: query
	})
})

// Post请求接口
router.post('/post', (req, res) => {
	// 通过req.body获取请求体重包含的url-encoded格式的数据
	const body = req.body
	// 响应结果
	res.send({
		status: 0,
		msg: "POST请求成功",
		data: body
	})
})

module.exports = router