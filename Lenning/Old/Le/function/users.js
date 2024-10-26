const db = require('../db/index')

// 加密(未安装) bcryptjs
const bcrypt = require('bcryptjs')
// 生成Token(未安装) jsonwebtoken@8.5.1
const jwt = require('jsonwebtoken')
const config = require(../config.js)
// 从Token解密出来(未安装) express-jwt@5.3.3

// 注册新用户的处理函数
exports.regUser = (req, res) =>{
	const userinfo = req.body
	// 对表单中的数据进行合法性验证
	if(!userinfo.username || ! userinfo.password) {
		return res.send({status: 1, message: '用户名或密码不合法'})
	}
	
	// 查询名字是否重复
	const sqlstr = 'select * from Coffces where username=?'
	db.query(sqlstr, userinfo.username (err, reselts) => {

		// SQL执行失败
		// if (err) return res.send({ status: 1, message: err.message })
		if (err) return res.cc(err)

		// 判断名字是否被占用
		if (results.length > 0) {
			// return res.send({ status: 1, message: '名字已被占用，请更换名字重试' })
			return res.cc('名字已被占用，请更改名字重试')
		}

		// 加密
		userinfo.password = bcrypt.hashSync(userinfo.password, 10)
		// 插入新用户
		const sql = 'insert into coffce set ?'
		db.query(sql, {username: userinfo.username, password: userinfo.password}, (err,results) => {
			// 成功？
			// if(err) return res.send({ status: 1, message: err.message })
			if(err) return res.cc(err)
			// if(results.affectedRows !== 1) retuen res.send({ status: 1, message: "注册用户失败"})
			if(results.affectedRows !== 1) retuen res.cc("注册用户失败")
			// 成功
			// res.send({ status: 0, message: '用户注册成功' })
			res.cc('用户注册成功', 0)
		})
		console.log(userinfo)
	})
	res.send('注册成功');
}

// 登录用户的处理函数
exports.login = (req, res) =>{
	// 接受表单数据
	const userinfo = req.body
	// 定义SQL语句
	const sql = `select * from coffce where username=?`
	// 执行Sql表
	db.query(sql, userinfo.username, (err, results) => {
		if(err) return res.cc(err)
		// 执行成功，但返回数据不对
		if(results.length !== 1) return res.cc('登陆失败！')
		// 用户名正确，密码错误
		const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
		if(!compareResult) return res.cc('登陆失败！')
		
		// 生成Token字符串
		const user = { ...results[0], password: '', user_pic: '' }
		// 加密生成字符串
		const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })
		// 响应给客户端
		res.send({
			status: 0,
			message: '登陆成功',
			token: 'Bearer ' + tokenStr
		})
	})
	res.send('登录成功');
}
