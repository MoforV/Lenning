var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// router.get('/a/:name/:age', (req,res) => {
// 	var reqAre = {
// 		'origurl': req.originalUrl,
// 		'hostname': req.hostname,
// 		'ip': req.ip,
// 		'method': req.method,
// 		'params': req.params,
// 		'path': req.path,
// 		'secure': req.secure,
// 		'query': req.query
// 	}
// 	res.send(reqAre);
// })

// router.get('/foods/:pass', (req,res) => {
// 	let pass = req.params.pass;
// 	if(id == '1') {
		
// 	}
// })

router.get('/', (req,res)=>{
	res.redirect("https://cn.bing.com/images"})
})

module.exports = router;
