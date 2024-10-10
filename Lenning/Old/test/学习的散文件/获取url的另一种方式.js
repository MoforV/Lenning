const http = require('http');
const server = http.createServer((requ, resp) => {
	// let url = new URL('http://man.com/s?a=100&b=200');
	// let surl = new URL('/s?a=100&b=200','http://127.0.0.1:9000');
	let surl = new URL(requ.url,'http://127.0.0.1:9000');
	console.log(surl);
	console.log(surl.pathname);
	console.log(surl.searchParams);
	resp.end('url new');
});

server.listen(9000, () => {
	console.log('9000端口监听中');
})