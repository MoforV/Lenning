const http = require('http');

const server = http.createServer((requ,resp) => {
	// 设置响应状态码
	resp.statusCode = 200;
	// 设置响应状态描述 这个描述信息中不能有中文，暂时没有解决方案
	resp.statusMessage = "you have promint to cat text";
	// resp.statusMessage = "你有资格";
	// 设置响应头
	// resp.setHeader('响应头的名字','值')
	resp.setHeader('content-type', 'text/html;charset=utf-8');
	resp.setHeader('this-test', 'testtesttest');
	// 同名多响应头
	resp.setHeader('test-are',['a','b','c']);
	// 设置响应体
	resp.write('love'); // 这个方法可以多次调用
	resp.end('404'); // 这个方法只能在整个请求中执行一次
})

server.listen(9000,() => {
	console.log("Service's running.....")
})