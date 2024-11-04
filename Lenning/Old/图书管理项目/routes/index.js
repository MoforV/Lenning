var express = require('express');
var router = express.Router();
const bookService = require('../service/bookService.js')
const userService = require('../service/userService.js')

//默认页为登录页
router.get('/', (req, res)=> {
    res.render('login', {title:'管理员登录'})
})
//进入登录页面
router.get('/login', (req, res)=>{
    res.render('login', {title:'管理员登录'})
})
//请求登录操作
router.post('/login', userService.login)
//请求退出系统
router.get('/logout', userService.logout)

//图书管理系统首页
router.get('/main', bookService.queryBooks);

//条件查询
router.post('/queryBooks', bookService.queryBooks)

//获取所有的图书分类
router.get('/getCategory', bookService.getCategory)

//跳转到添加图书页面
router.get('/toAddBook', bookService.toAddBook)

router.post('/addBook', bookService.addBook)

//跳转到修改图书页面
router.get('/toUpdate', bookService.toUpdateBook)

router.post('/updateBook', bookService.updateBook)

//删除图书
router.get('/deleteBook', bookService.deleteBook)

module.exports = router;
