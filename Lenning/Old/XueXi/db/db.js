const mysql = require('mysql') //引入mysql模块
const dbConfig = require('./db_config') //引入数据库配置信息

module.exports = {
    query: (sql, params, callback) => {
		
        //每次使用的时候需要创建链接，数据操作完成之后要关闭连接
        var connection = mysql.createConnection(dbConfig); 
        connection.connect(function(err) {
            if(err) throw err;
			
            //开始数据操作
            connection.query(sql, params, function(err, results, fields) {
                if(err) throw err;
				
                //将查询出来的数据返回给回调函数
                callback && callback(results, fields);
				
                //results作为数据操作后的结果，fields作为数据库连接的一些字段
                //停止链接数据库(绝对需要在所有function结束之后)
                connection.end(function(err){
                    if(err){
                        console.log('关闭数据库连接失败！');
                        throw err;
                    }
                });
            })
        })
    }
}