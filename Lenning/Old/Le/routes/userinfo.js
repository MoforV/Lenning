const express = require('express')
const router = express.Router()

// 导入路由处理函数模块
const userInfoFunction =  require('../function/userinfo.js');
// 挂载路由
router.get('/userinfo', userInfoFunction.getUserInfo)

// 更改用户信息
router.post('/userinfo', )

module.exports = router