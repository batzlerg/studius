var express = require('express');
var path = require('path');

var app = express();

// routes
var index = require('./routes/index');

// configure views directory and templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
// don't use layout file by default, we will extend it manually
app.set('view options', {
    layout: false
});

// set up middleware for static resources
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', index.init);

app.listen(3000, function(){
	console.log('started');
});