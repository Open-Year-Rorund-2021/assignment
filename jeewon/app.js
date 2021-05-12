var express = require('express');
var http = require('http');
var path = require('path');
var static = require('serve-static');

var app = express();
app.use(static(path.join(__dirname, '/')));

app.set('port', process.env.PORT || 3000);
app.get('/', function(req, res){
    res.redirect('login.html');
});

http.createServer(app).listen(app.get('port'),function(){
    console.log('Server START...' + app.get('port'));
});
