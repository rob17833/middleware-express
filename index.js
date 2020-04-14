const express = require('express');
const app = express();
const port = 3000;
const hello = require('./routes/index.js');

// quest
app.use('/superMiddleware', hello);

app.listen(port, (err) =>{
	if (err) {
		console.log('something bad happened');
	} else {
		console.log('listening to port...');
	}
});