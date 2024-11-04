// 导入数据库操作模块
const db = require(../db/index)

export.getUserInfo = (req, res) => {
	const sql = `select id, username, email, pic from coffce where name=?`
	// 执行sql语句
	db.query(sql, req.user.name, (err, results) => {
		if(err) return res.cc(err)
		// 执行成功，结果为空
		if(results.length !== 1) return res.cc('获取用户信息失败')
		
		res.send({
			status: 0,
			message: '获取用户信息成功',
			data: results[0],
		})
	})
}