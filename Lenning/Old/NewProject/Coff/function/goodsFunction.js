let dbCount = 0
db.query('SELECT COUNT(*) FROM coffce_name', (err, restle) => {
	dbCount = restle
})

const { error } = require('console')
const db = require('../db/index')
// 渲染所有商品
export.allgoods = (req, res) => {
	let dbsql = `SELECT AES_DECRYPT(coffce_name, '123') AS 'name' FROM coffce_inif`
	db.query(dbsql, [], (err, rest, fields) => {
		if(err) { return console.log(err.message) }
		res.send(rest);
	})
}

// 渲染查找商品
export.sqlgoods = (req, res) => {
	if(req.query) {
		const query = req.query.id;
		let dbsql = `SELECT 
		AES_DECRYPT(coffce_name, '123') AS 'name', 
		AES_DECRYPT(coffce_price, '123') AS 'price', 
		AES_DECRYPT(coffce_image, '123') AS 'Loca' 
		FROM coffce_inif WHERE id = ${query.id};`
		db.query(dbsql, [], (err, rest, fields) => {
			if(err) { return console.log(err.message) }
			res.send("您好 您点的是：" +
			rest[0].name +
			"\r\n价格在这边：￥" +
			rest[0].price + "\r\n图片的话，请移目这边：" +
			rest[0].Loca);
		});
	}
	else{
		res.send("请在url的最后加上id={您想查询的咖啡}；例如：http://127.0.0.1:9000/?id=1")
	}
}

// 增加商品
export.addgoods = (req, res) => {
	const data = req.body
	if(coffce.name !== '' && coffce.name !== ' ') {
		const dbsql =  "SELECT AES_DECRYPT(coffce_name, '123') AS 'name' FROM coffce_inif WHERE name=?"
		const addsql = "INSERT INTO coffce_inif values ?"
		db.query(dbsql, data.name (err, restle) => {
			if(err) { res.send('发生了错误' + err);return 0; }
			if(restle.length > 0) { res.send('用户名已被占用');return 0; }
			if(data.price == '') { data.price = 0 }
			let addData = `(${data.name},${data.price})`
			db.query(addsql, data.name (err, restle) => {
				if(err){ res.send('添加失败，请联系管理员'); return 0; }
				res.send('添加成功')
			})
		})
		
	}
	else res.send('添加的数据不合法')
}

// 删除商品
export.delgoods = (req, res) => {
	res.send('涉及删除数据，请联系管理员处理。。。。。。。。实际是没时间写接口 （@a@');
}