/**
 * 业务模块
 */
const db = require('../db/db.js');

//查询图书
exports.queryBooks = (req, res) => {
	var params = null;
	if (req.session.user) {
		var sql = "select * from book"
		var countSql = 'select count(*) as total from book'
		// console.log(JSON.stringify(req.body) == '{}')
		if(JSON.stringify(req.body) != '{}') {
		    params = [req.body.category, req.body.book_name]
			sql += " where category = ? and book_name like concat('%',?,'%')"
			countSql += " where category = ? and book_name like concat('%',?,'%')"
		}
		
		//查询总条数
		var total = 0
		db.query(countSql, params, function(result, fields) {
			total = result[0].total;
			// console.log("查询到" + result[0].total)
		})
		db.query(sql, params, function(result, fields) {
			// console.log('查询结果：', result)
			res.render('index', {title:'图书管理系统', list:result, total: total})
		})
	} else {
		req.session.error = "您还没有登录呢"
		res.redirect('/login')
	}
}

//查询所有图书分类
exports.getCategory = (req, res) => {
	var sql = "select category from book"
	var category = []
	db.query(sql, null, function(result, fields) {
		result.forEach((item, index)=>{
			category.push(result[index].category)
		})
		res.json(category)
	})
}

//渲染添加图书页面
exports.toAddBook = (req, res) => {
	res.render('addBook', {title: '添加图书'})
}

//添加图书的逻辑
exports.addBook = (req, res) => {
	let bookInfo = req.body;
	let book = {};
	for(let key in bookInfo) {
		book[key] = bookInfo[key]
	}
	console.log(book)
	var sql = 'INSERT INTO book set ?';
	db.query(sql,book,function(result,fields){
	    if(result.affectedRows == 1) res.redirect('/main')
	})
}

//进入修改图书页面
exports.toUpdateBook = (req, res) => {
	//根据id查询
	let id = req.query.id;
	var sql = 'select * from book where book_id = ?'
	var params = [id]
	db.query(sql, params, function(result, fields) {
	    res.render('updateBook', {title: '修改图书', book: result[0]})
	})
}
//修改图书的逻辑
exports.updateBook = (req, res) => {
	let bookInfo = req.body;
	var sql = "update book set book_name = ? , author = ? , publish = ? , category = ? , book_desc = ? where book_id = ?"
	var params = [bookInfo.book_name, bookInfo.author, bookInfo.publish, bookInfo.category, bookInfo.book_desc, bookInfo.book_id]
	db.query(sql,params,function(result,fields){
	    if(result.affectedRows == 1) res.redirect('/main')
	})
}

//删除图书的逻辑
exports.deleteBook = (req, res) => {
	var sql = "delete from book where book_id = ?"
	var params = [req.query.id]
	db.query(sql, params, function(result, fields) {
		console.log("删除成功")
		res.redirect('/main')
	})
}
