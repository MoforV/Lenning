const db = require('../db/db.js');

exports.login = (req, res) => {
    let sql = 'select username,password from user where user_status = 1 and username = ? and password = ?'
    let params = [req.body.username,req.body.password]
    db.query(sql, params,function(result,fields){
        if(result[0] == null) {
            req.session.error = "用户名或密码不正确";
            res.send(404)
        } else {
            let user = {
                username: result[0].username,
                password: result[0].password
            }
            req.session.user = user
            res.send(200)
        }
    });
}

exports.logout = (req, res) => {
    req.session.user = null
    req.session.error = null
    res.redirect('/login')
}