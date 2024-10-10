const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const app = express();

const db = mysql.createPool({
	host: '192.168.40.33',
	user: 'root',
	password: 'asdasd',
	database: 'mo'
})

app.use(express.static('./page'));

router.get('/', (req, res) => {
	const query = req.query;
	let dbsql = `select 
	AES_DECRYPT(coffce_name, '123') AS 'name', 
	AES_DECRYPT(coffce_price, '123') AS 'price', 
	AES_DECRYPT(coffce_image, '123') AS 'Loca' 
	FROM coffce_inif WHERE id = ${query.id};`
	// 调用res.send()方法向客户端相应处理结果
	db.query(dbsql, [], (err, rest, fields) => {
		if(err) { return console.log(err.message) }
		res.send("您好 您点的是：" + rest[0].name + "\r\n价格在这边：￥" + rest[0].price + "\r\n图片的话，请移目这边：" + rest[0].Loca);
	});
})

module.exports = router