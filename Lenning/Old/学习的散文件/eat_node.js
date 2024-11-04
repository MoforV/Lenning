const express = require('express');
const app = express();
const router = require('./eat_router');

app.use(router)


app.listen(9000, ()=>{
	console.log('Server is running for http://127.0.0.1:9000');
})