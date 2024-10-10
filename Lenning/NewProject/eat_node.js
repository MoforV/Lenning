const express = require('express');
const app = express();
const mysql = require('mysql');
const router = require('./eat_router')

// 数据库查询：select 
// 	AES_DECRYPT(coffce_name, '123') AS '芳名', 
// 	AES_DECRYPT(coffce_price, '123') AS '价格', 
// 	AES_DECRYPT(coffce_image, '123') AS '实拍' 
// 	FROM coffce_inif;

const db = mysql.createPool({
	host: '192.168.40.33',
	user: 'root',
	password: 'asdasd',
	database: 'mo'
})

app.use('/coffce', router)
// db.query(`select id '索引',  AES_DECRYPT(coffce_name, '123') AS '芳名', AES_DECRYPT(coffce_price, '123') AS '价格', AES_DECRYPT(coffce_image, '123') AS '实拍' FROM coffce_inif;`, (err, rest) => {
// 	if(err) return console.log(err.message)
// 	console.log(rest);
// })

app.listen(9000, ()=>{
	console.log('Server is running for http://127.0.0.1:9000');
})