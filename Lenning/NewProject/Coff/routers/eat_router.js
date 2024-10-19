const goodFc = require('../function/goodsFunction.js')
const express = require('express');
const router = express.Router();
const mysql = require('../db/index')
const app = express();

app.use(express.static('./page'));

// 查
router.get('/all', goodFc.allgoods)
router.get('/?id', goodFc.sqlgoods)

// 增
router.post('/add' goodFc.addgoods)

// 删
return.post('/del')

module.exports = router