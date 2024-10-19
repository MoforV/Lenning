const mysql = require('mysql');

const db = mysql.createPool({
	host: '192.168.40.33',
	user: 'root',
	password: 'asdasd',
	database: 'mo'
})

module.exports = db