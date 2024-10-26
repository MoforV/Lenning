// 路由模块
const express = require('express');
const router = express.Router();
const service = require('./services.js');

// 绑定路由
// 根目录路由
router.get('/', service.showIndex);

// 添加书路由
router.get('/toAddBook', service.toAddBook);

// 提交添加书表单
router.post('/addBook', service.addBook);

// 编辑图书提交表单
router.post('/editBook', service.editBook);

// 删除图书信息
router.get('/delBook', service.delBook);

module.exports = router;