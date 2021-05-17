const { response } = require('express');
var express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    static = require('serve-static'),
    cookieParser = require('cookie-parser'),
    expressSession = require('express-session'),
    fileStore = require('session-file-store')(session);

var info = {
    id: 'hani@gmail.com',
    pw: 'nodejs'
};

var app = express();
app.use(cookieParser());
app.use(expressSession({
    secret: 'my key',
    resave: true,
    saveUninitialized: true,
    store: new fileStore()
}));
var router = express.Router();
/*
app.use('', static(path.join(__dirname, '')));
router.route('').get(function (req, res) {
    console.log('/login 호출됨');
    if (req.session.user) {
        res.redirect('/html/feed.html');
    } else {
        res.redirect('/html/login.html');
    }
});
*/
/*
router.route('/html/login').post(function (req, res) {
    console.log('/html/login 호출됨');
    if(req.body.id === info.id && req.body.pw === info.pw){
        request.session.user = {
            id: req.body.id,
            pw: req.body.pw
        }
        response.sendFile(__dirname +'/feed.html');
    }
    else {
        console.log('로그인 상태 아님');
        res.redirect('/html/login.html')
    }
});

app.use('/', router);
http.createServer(app).listen(3000, function () {
console.log('Start Server...');
})
*/

app.get('/', function(req, res){
    res.static('/html/login.html');
});

app.get('/html/feed.html', function(req, res){
    if(!req.session.user){
        return false;
    }
    res.sendFile(__dirname+'/html/feed.html');
});

app.get('/html/login.html', function(req, res){
    if(!req.session.user){
        return false;
    }
    res.sendFile(__dirname + '/html/login.html');
});

app.post('/login', function(req, res){
    if(req.body.id === info.id && req.body.pw === info.pw){
        req.session.user = {
            id: req.body.id,
            pw: req.body.pw
        }
        res.sendFile(__dirname +'/html/feed.html');
    }
    else {
        console.log('로그인 상태 아님');
        res.redirect('/html/login.html');
    }
});

app.use('/', router);
http.createServer(app).listen(3000, function () {
    console.log('Start Server...');
});