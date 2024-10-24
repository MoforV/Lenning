// 业务处理模块

const data = require('./data.json');
const path = require('path');
const fs = require('fs');

// 自增图书编号（可以自增）
let maxBookCount = () => {
	let arr = [];
	data.forEach(item => {
		arr.push(item.id);
	});
	return Math.max.apply(null,arr);
}

// 内存数据写入到文件
let writeDataFile = (res) => {
	//JSON.stringify(data)仅传data一个参数的话，data.json文件是压缩形式的
	fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data,null,4),(err) => {
	    if(err){
	        res.send('server err');
	    }
	    //文件写入成功之后重新跳转到主页面
	    res.redirect('/');
	});
}

// 主页面
exports.showIndex = (req,res) => {
	res.render('index',{list:data});
}

