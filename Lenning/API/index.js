const express = require('express');
const bP = require('body-parser');
const morgan = require('morgan');

// 引入路由文件
const GudRoutes = require('./router');

const app = express();
const port = process.env.PORT || 9000;

app.use(bP.json());
app.use(morgan('dev'));

app.use('/guds', GudRoutes);

app.get('/', (req, res) => {
	res.send('this is test for my world');
});

app.listen(port, () => {
	console.log(`server is running for 127.0.0.1:${port}`);
})