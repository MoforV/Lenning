const express = require('express');
const router = require('.routers/eat_router');

const app = express();

app.use(router)


app.listen(9000, ()=>{
	console.log('Server is running for http://127.0.0.1:9000');
})