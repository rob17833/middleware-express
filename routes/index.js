const express = require('express');
const route = express.Router();

route.use((req, res, next) =>{
	console.log('hello middleware');
	next();
});


route.get('/', (req, res) =>{
	res.send('hello world')
})

module.exports = route;