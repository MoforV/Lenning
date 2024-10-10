const express = require('express');
const app = express();
const mysql = require('mysql');
const router = require('./eat_router')

const db = mysql.createPool({
	host: '192.168.40.33',
	user: 'root',
	password: 'asdasd',
	database: 'mo'
})

app.use('/coffce', router)

app.listen(9000, ()=>{
	console.log('Server is running for http://127.0.0.1:9000');
})