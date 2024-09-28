// 协议:是双方共同都要遵守的一种约定
// 	在计算机技术方向,协议是一种约定客户端浏览器和服务端服务器双方的约定
	
// 	当客户使用浏览器发送请求的时候,发送请求时携带的报文内容叫  请求报文
// 	服务器响应请求的时候,发送的响应时报文内容叫做  响应报文

/*
// https请求报文内容构成:
// 	请求行：请求类型，请求地址，http版本号 GET https://www.baidu.com/ HTTP/1.1
// 	请求头：Host、Connection、User-Agent、Upgrade-Insecure等等键值对（记录着对请求信息和收发双方的信息描述）
// 	空行
// 	请求体：是在请求的最后一个部分，格式非常灵活，内容可以是任何东西

// https请求行内容：
// 1、http请求类型：
// 		GET、POST、PUT/PATCH、DELETE 四种类型
// 		GET：获取数据
// 		POST：新增数据
// 		PUT/PATCH：更新数据
// 		DELETE：删除数据

// 2、URL统一资源定位：https(协议名)://www.baidu.com/(主机名)
// 		URL的书写规范：协议名://主机名:端口号/路径?键值对&键值对

*/

/*
// https响应报文内容构成：
// 	响应行：包含HTTP版本号，响应状态码(1信息相应，2成功相应，3重定向信息，4客户端错误信息，5服务端错误信息)，响应状态描述(和状态码对应)
// 	响应头：（记录着服务器和响应体相关的内容）
// 	空行
// 	响应体：同请求格式一样，非常灵活，大多数是网页内容，包括视频图片文件

// 开始创建一个http相应服务器，这个是最简单的服务器相应类型
// 1、导入http模块
const http = require('http');

// 2、创建http服务，这里面有两个形参：第一个形参是对请求报文的封装对象，第二个形参是对响应报文的封装对象
const server = http.createServer((requ, resp) => {
	// 中文乱码加上content-type即可
	resp.setHeader('content-type','text/html;charset=utf-8');
	resp.end('响应结束');
});

// 3、监听端口，启动服务
server.listen(9000, () => {
	console.log("服务已启动,正在运行");
})

// 这就是最简单的Get请求，这个请求一般没有请求体；
// Post请求模拟很简单，写一张html的表单即可form action="请求地址" mathod="post"里面写表单和按钮即可
*/

// 接下来将请求内容逐行解析
const http = require('http');
const url = require('url');
const server = http.createServer((requ, resp) => {
	/*
	// http请求头
	// 获取请求报文方法
	console.log(requ.method);
	
	// 获取请求的URL
	console.log(requ.url);
	
	// 获取HTTP协议的版本号
	console.log(requ.httpVersion);
	
	// 获取Http请求头
	console.log(requ.headers);
	console.log(requ.headers.referer);
	*/
   /*
	// 获取http请求体了解即可
	// 	1、声明一个变量
	let bodys = '';
	// 	2、绑定事件
	requ.on('data', chunk => {
		bodys += chunk;
	})
	// 	3、绑定一个end事件
	requ.on('end', () => {
		console.log(bodys);
		resp.end('Postend');
	});
	*/
   /*
   // 解析url,获取查询字符串
   let turl = url.parse(requ.url, true);
   // 由此写入一个true其中意义及将搜索关键词对象化
   // 获取url路径
   let pathname = turl.pathname;
   // 获取字符串
   let sourkey = turl.query;
   
   console.log(pathname);
   console.log(sourkey);
   resp.end('man');
   */
   
});
/*
http模块:
	requ请求对象：是请求对象，包含了客户端相关的数据和属性
	例如：
	const str = `你的访问的url是${requ.url}，你访问的方式是${method}`
	获取到从网站根目录开始的url地址，获取到客户端访问过来的请求方式
	
	rest响应对象：是服务器相应的对象，包含服务器相关的数据或属性
	rest.setHeader("Content-Type","text/html; charset=utf-8");
	rest.end("响应结果") // 这个结果会直接渲染到页面上
*/

server.listen(9000, () => {
	console.log("server's running....");
})