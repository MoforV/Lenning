const http = require('http');

const server = http.createServer((requ,resp) => {
	let {method} = requ;
	let {pathname} = new URL(requ.url, 'http://127.0.0.1');
	resp.setHeader('content-type', 'text/html;charset=utf-8');
	if( method === 'GET' && pathname === '/login' ){
		resp.end('登陆页面');
	}else if( method === 'GET' && pathname === '/pay' ){
		resp.end('支付页面');
	}else {
		resp.end('404');
	}
})

server.listen(9000,() => {
	console.log("Service's running.....")
})