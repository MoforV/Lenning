/*
// console.log('this time')
setTimeout(() => {
    console.log('on lasttime')
}, 500);

// 此对象类似于BOM中的windows
console.log(global);
console.log(globalThis);


// Buffer类似数组的数据类型 长度固定性能较好
let buf = Buffer.alloc(10);
console.log(buf)

// 与上面创建的buffer不相同的是 Unsafe的可能会包含之前的内存数据；优点在于比上面速度快一些
let buf2 = Buffer.allocUnsafe(1000);
console.log(buf2)

let buf3 = Buffer.from('hello');
console.log(buf3)

let buf4 = Buffer.from([101, 102, 103, 104, 105,  106, 107, 108]);
console.log(buf4.toString());

let buf = Buffer.from('michael');
console.log(buf.toString())
buf[0] = 102;
console.log(buf.toString())
*/
// fs模块
// 1、导入 fs 模块 (为节省方便 我将注释逐行下移 下面一行不注释)
const fs = require('fs');
/*
// 2、写入文件
// fs.writeFile('文件路径/文件名','文件写入内容',操作参数,err => {}) 
// 默认writeFile这个函数是异步执行的
fs.writeFile('./text.log','天鹅咖啡',{flag: a},err => {
	if(err){
		console.log('点单失败');
		return;
	}
	console.log('点单成功')
});

// 同步写入
fs.writeFileSync('./text.log','卡布奇诺',err => {
	if(err){
		console.log('点单失败');
		return;
	}
	console.log('点单成功')
})

// 文件内容追加
// const fs = require('fs');
// fs.appendFile('./text.log','\r\n加小料',err => {
// 	if(err){
// 		console.log('追加失败');
// 		return
// 	}
// 	console.log('追加成功');
// })

// fs文件流式输入
// 导入fs
const fs = require('fs')
// 创建写入流对象
const ws = fs.createWriteStream('./点单日志.log');

// 写！
ws.write('2020.4.3 卡布奇诺 半糖 少冰\r\n');
ws.write('2020.4.4 亚视咖啡 半糖 少冰\r\n');
ws.write('2020.4.5 长岛冰茶 半糖 少冰\r\n');
ws.write('2020.4.6 蓝月琉璃 半糖 少冰\r\n');

// 关闭通道
ws.close();

// 流式读取文件内容
// 1、引入fs模块
const fs = require('fs');

// 2、创建读取流对象
const rs = fs.createReadStream('./点单日志.log');
// 3、绑定data事件
rs.on('data',chunk => {
	console.log(chunk);
	console.log(chunk.length);
});

// 4、绑定end事件 （可选
rs.on('end',() => {
	console.log('输出完成');
})

// 复制
const fs = require('fs');
// 方法1 readFile
// 读取文件内容
let data = fs.readFileSync('./点单日志.log');
// 写入文件
fs.writeFileSync('./点单日志2.log', data);

// 方式2 流式操作 (占用资源更少 传输所需时间更多)
// 创建读取流对象
const rs = fs.createReadStream('./点单日志.log');
// 创建写入流对象
const ws = fs.createWriteStream('./点单日志3.log');
// 绑定data事件
rs.on('data',oooo => {
	ws.write(oooo);
})

// 方式3 用的不多
rs.pipe(ws);

console.log(process.memoryUsage());

// 移动&重命名
const fs = require('fs')

// 调用rename方法
fs.rename('./点单日志3.log','./点单日志-rename.log',err => {
	if(err) {
		console.log('重命名失败');
		return;
	}
	console.log('操作成功');
});

// rename可以移动文件，本质上重命名和移动文件是一样的

// 删除
// 调用unlink参数
fs.unlink('./点单日志2.log',err => {
	if(err){
		console.log('删除失败');
		return;
	}
	console.log('删除成功');
});

// 调用rm方法
fs.rm('./点单日志2.log',rone => {
	if(rone){
		console.log('删除失败');
		return;
	}
	console.log('删除成功');
});

// 文件夹操作
// 1、导入fs模块
// 2、创建文件夹 recursive参数是递归创建文件
fs.mkdir('./text/1',{recursive: true}, rone => {
	if(rone){
		console.log("un success")
	}
	console.log("success")
})

// 3、读取文件夹
fs.readdir('./',(rone,data) => {
	if(rone){
		console.log('un success');
		return;
	}
	console.log(data);
	console.log('success this has:\r\n\n'+data);
});

// 4、删除文件夹
fs.rm('路径',{recursive: true},rone => {
	if(err){
		console.log(err);
		return;
	}
	console.log('success');
})
// 查看资源信息
fs.stat('./点单日志.log',(rone,data)=>{
	if(rone){
		console.log('error');
		return;
	}
	console.log('success\n',data);
})

// 获取文件的路径&路径+文件名
console.log(__dirname);

// 批量修改文件名
// 读取文件列表
const files = fs.readdirSync('./1');
console.log(files);

// 循环数组所有文件进行判断
files.forEach(item => {
	// 拆分文件名,指定分隔符拆分
	let data = item.split('-');
	let [fname,lname] = data;
	// 判断
	if(Number(fname) < 10){
		fname = '0' + fname;
	}
	let newName = fname + '-' + lname;
	console.log(newName);
	// 重命名
	fs.renameSync(`./1/${item}`, `./1/${newName}`);
})


// 拼接规范路径的问题
console.log(__filename);

const path = require('path');
console.log(path.resolve(__dirname,'文件名'));

// sep 分隔符
console.log(path.sep);

// parse 方法  文件的绝对路径
console.log(__filename);

*/