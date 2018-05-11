var express = require('express');
var http = require('http');

var app = express();

// GET json
app.get('/api/getsettings', function (req, res) {
	let settings={
		id:1,
		name:'John',
		age:50,
		visibility:true
	};
	res.writeHead(200, {"Content-Type": "application/json"});
	let json = JSON.stringify({...settings});
	res.end(json);
});

//Upload empty
app.post('/api/upload', function (req, res) {
	res.send('File uploaded success');
});

app.listen(3000);
