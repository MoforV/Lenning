var express = require('express');
var router = express.Router();

const userFunc = require('../function/users');

router.post('/reguser', userFunc.regUser);

router.post('/login', userFunc.login);

module.exports = router;