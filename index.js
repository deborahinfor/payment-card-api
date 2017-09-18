var app = require('./config/express')();

app.listen('3001', function(){
	console.log('Card Server API running on port 3001.');
});