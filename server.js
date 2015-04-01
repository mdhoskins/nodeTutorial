var express = require('express');
var app = express();
var request = require('request');
app.set('port', (process.env.PORT || 5000));
app.use(express.static('./'));

app.get('/', function(req, res) {
	res.sendFile('./index.html');
});

app.get('/storytime'. function(req, res) {
	res.send("<p> Hey " + req.query.name + " nice to meet you! I'd like to " + req.query.verb + " with you later.");
});

app.listen(app.get('port'), function() {
	console.log('Fuck it ship it.');
});
