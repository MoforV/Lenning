/*
const http = require('http');

const server = http.createServer((requ, resp) => {
	resp.setHeader('content-type', 'text/html;charset=utf-8');
	resp.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
				<title>this is coffce</title>
				<style>
					td {
						padding: 20px 40px;
					}
					table {
						border-color: #091283
					}
					table tr:nth-child(odd){
						background: #15fff0
					}
					teble tr:nth-child(even){
						background: #aaaaff
					}
				</style>
			</head>
			<body>
				<form action="http://127.0.0.1:400">
					<table border="1">
						<tr>
							<td>姓</td>
							<td>名</td>
							<td>Age</td>
							<td>Sex</td>
						</tr>
						<tr>
							<td>Wu</td>
							<td>Tian</td>
							<td>25</td>
							<td>♀</td>
						</tr>
					</table>
				</form>
				<script>
					// 获取所有td
					let tds = document.querySelectorAll('td');
					// 遍历加事件
					tds.forEach(itis => {
						itis.onclick = function() {
							this.style.background = '#55ff00';
						}
					})
				</script>
			</body>
		</html>
	`);
})

server.listen(9000, ()=>{
	console.log('server is running....');
})
*/

/*
// 痛点：在后端写前端代码
// 解决方案：借助流式读取fs模块
const http = require('http');
const fs = require('fs');

const server = http.createServer((requ, resp) => {
	// 页面url跳转代码
	let {method} = requ;
	let {pathname} = new URL(requ.url, 'http://127.0.0.1');
	
	// 创建服务
	// 路径判断返回页面
	resp.setHeader('content-type', 'text/html;charset=utf-8');
	
	// 登录
	if( method === 'GET' && pathname === '/login' ){
		let login_html = fs.readFileSync('./login/login.html');
		resp.end(login_html);
		
	// 支付
	}else if( method === 'GET' && pathname === '/pay' ){
		let pay_html = fs.readFileSync('./page/cg30.png');
		resp.end(pay_html);
		
	// 首页
	}else if( method === 'GET' && pathname === '/' ){
		let index_html = fs.readFileSync('./coffce/coffce.html');
		resp.end(index_html);
		
	// 其它
	}else {
		resp.end("unde find 404");
	}
	
})

server.listen(9000, ()=>{
	console.log('server is running....');
})

// 痛点解决，且前端页面产生变化后端代码不需要变化
// 新Bug：需要修改的路径和判断实在太多，难以控制过程繁琐
*/

// 解决方案：静态服务器：
// 需求:创建一个http服务,端口为9000,满足以下要求:
// GET /index.html
// GET /css/app.css
// GET /images/login.png

const http = require('http');
const fs = require('fs');

const server = http.createServer((requ, resp) => {
	resp.setHeader('content-type', 'text/html;charset=utf-8');
	// 页面url跳转代码
	
	let {pathname} = new URL(requ.url, 'http://127.0.0.1');
	// 拼接字符串路径
	let dirroot = __dirname + '/';
	let filepath = dirroot + pathname;
	// 读取文件 fs 异步 API
	fs.readFile(filepath, (err, data) => {
		if(err){
			resp.statusCode = 500;
			resp.end("load files fail");
			return;
		}
		// 相应文件内容
		resp.end(data);
	})
	
});

server.listen(9000, ()=>{
	console.log('server is running....');
})