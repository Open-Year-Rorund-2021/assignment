var express = require('express');
var http = require('http');
var path = require('path');
var static = require('serve-static');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var fileStore = require('session-file-store')(session);
var fs = require("fs");

var app = express();
var router = require('./routes/app')(app);
app.use(express.static(path.join(__dirname, '/'))); //css

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/login.html'));
})

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// app.set('port', process.env.PORT || 3000);
// app.get('/', function(req, res){
//     res.redirect('/views/login.html');
// });

http.createServer(app).listen(3000,function(){
    console.log('Server START 3000' );
});