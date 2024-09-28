/*
Nodejs生态模块占据主要地位
模块具有以下优点：
	1、代码复用
	2、便于管理、排错
	3、按需加载、引用

所有模块分为三大类：
	内置模块：Nodejs官方提供的
	自定义模块：用户自行创建的js文件
	第三方模块：第三方开发出来的模块，并非官方提供，需要从社区下载使用
	
	// 引入模块分为内置模块、用户自定义模块和三方模块
	// 内置模块
	const fs = require('fs');
	
	// 加载用户的自定义模块,会执行被加载的文件中的代码
	const const = require('./文件名.js');
	
	// 第三方模块
	const mysql = require('mysql');
	
作用域
	在Node模块中定义的任何性质的变量（变量、方法等等）都只能在模块内部访问；效果等同作用域
	限制在暴露相对应变量之前，暴露之后的变量是可以被访问到的：
	暴露的原理：使用module.exports{}属性进行暴露
	module{}里面的是这个模块的部分相关属性
	

第三方模块（包）
	Nodejs中的第三方模块来自世界各地开发者，需要可下载运行；
	Nodejs内置的模块是比较基础的底层API，开发效率低，所以使用npm包提高开发效率
	包搜索网址：https://www.npmjs.com/
	包下载网址：https://registry.npmjs.org/
	
	npm包分类：
		1、项目包：指需要呗安装到项目的node_modules目录中的包，都是项目包
		细分分为两类：
			开发依赖包(DD节点中的包，生产环境不会使用)
			核心依赖包(DP节点中的包，生产环境会使用)

		2、全局包：所有项目都可以使用的包
			npm install 包名 -g
			npm uninstall 包名 -g
		
		

	第一次安装完成的包目录下多一个node_modules和package-lock.json配置文件
		node_modules：存放所有已安装到项目中的模块包
		package-lock.json：记录上述目录下每一个包的信息
		在安装命令中可以通过@指定版本：npm i moment@2.22.2
		
	package-lock.json文件
		再多人协作中途会需要运行到项目所需环境，这些第三方包非常吃资源；
		解决方法就是剔除掉第三方联网下载的包：在项目根目录下创建一个package.json的配置文件，用以记录项目中用到的包
		项目目录下运行npm init -y即可新建一个package.json文件（项目还未开始的时候执行
		
	package.json文件
		这个文件中记录着从项目开始到最新进度的所有安装过的第三方包；
		通过npm init -y生成，路径不能有中文和空格
	dependencies节点(DP)
		这个属性是一个对象，对象中记录着安装的包名/版本，这些包都是项目运行时所需要的
	devDependencies节点(DD)
		该属性记录着项目开发使用，上线后不会使用的包；在npm安装时使用npm i 包名 -D
	
	通过package.json文件一次性安装所有包
		在package.json文件目录中执行npm install命令即可
		npm会读取package.json中的dependencies属性的所有包，进行安装
		
	卸载包：npm uninstall 包名
	
模块：Express
	什么是Express：作用和Node.js内置的http模块类似，都是专门用来创建Web服务器
		对于前端来说最常用的两种服务器分别是：Web网站服务器 & API接口服务器
	使用Express可以更加快速方便的创建Web网站或者API接口服务器
	
	使用Express监听GET和POST请求
	GET：app.get('请求URL', (req, res) => { 处理函数 })
	POST：app.post('请求URL', (req, res) => { 处理函数 })
	
	在学习开始之前的环境部署过程中遇到了问题，Node环境中安装了express但是运行时提示
	Cannot find module 'express'
	后来尝试了很多次不同方式的安装
	npm -g --save i express
	卸载重装都无济于事，后来想到了一个办法 通过package.json这个文件安装
	在dependencies属性中写入{"express":"^4.20.0"}
	cmd在当前目录执行npm install安装完成 运行成功
	
Express路由
	意思就是客户端的请求和服务端的处理函数之间的映射关系；
	由三部分组成：请求的类型、请求的url地址、处理函数；格式如：app.请求类型(请求URL, 处理函数)
	app.get  (  '/get'  ,  function(req,res) {res.send("this is mine.")}  )
	
	路由的使用
	在Express中使用路由最简单的方法，就是把路由挂载到app上：
		app.get('/', (req,res)=>{ res.send('Hello World.') })
		app.post('/', (req,res)=>{ res.send('Post request.') })
		
	模块化路由
	为了方便管理路由，Express推荐将路由抽离为单独的模块，步骤如下：
		1、创建路由对应的js文件
		2、调用express.Router()函数创建路由对象
		3、向路由对象上挂载具体的路由
		4、使用module.exports向外共享路由对象
		5、使用app.use()函数注册路由模块
		例如:
			const express = require('express')
			const router = express.Router()
			router.get('/user/name', (req,res)=>{ res.send('Michael')})
			router.post('/user/name', (req,res)=>{ res.send('Remiel')})
			module.exports = router
			
			在需要链接路由的js文件中这样写：
			const express = require('express')
			const app = express()
			const router = require('文件路径')
			app.use(router)
			app.listen(9000, ()=>{console.log('http://127.0.0.1:9000')})
		即可
		
	app.use这个函数是注册全局中间件的
	
中间件
	什么是中间件
		简单来说就是有特殊功能的管道符，有进有出进出不一样；
		中间件和响应函数不一样的是：(req, res, next)
		这个next会将这个管道的处理结果交给下一个管道处理；
		中间件函数最明显的特征就是 函数结尾有个next()函数调用
	
	app.use((req, res, next)=>{ console.log('Im Michael');next() })
	
	中间件的特点
		流式执行
		共享一个req和res
		可连续定义/使用多个中间件函数
		
	全局中间件和局部中间件
		全局中间件就是上面我通过app.use定义的中间件
		局部中间件就是使用变量接收的中间件
		const mw1 = (req,res,next) => { console.log('局部中间件') }
		app.get('/', mw1, (req, res) => {res.send('输出')})