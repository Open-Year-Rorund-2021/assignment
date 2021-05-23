var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var fileStore = require('session-file-store')(session);

let user = {
    id: 'jeewon@gmail.com',
    password: 'qqqq123~'
};  

function CheckSession(req, res){
    if(req.seesion.is_logined){
        return true;
    }
    else{
        return false;
    }
}

module.exports = function (app) {
    app.use(bodyParser.urlencoded({
        extended:false
      }));
    
    app.use(session({
      secret:'123456',
      resave: false,
      saveUninitialized: true,
      store: new fileStore()
    }));

    app.get('/', function (req, res) {
        res.render('../views/login.html');
    });

    app.get('/feed',function(req,res){
        if(!req.session.is_logined){
            res.redirect('/');
            return false;
        }
        res.render('../views/feed.html');
    });
    
    app.get('/mypage', function (req, res) {
        if(!req.session.is_logined){
            res.redirect('/');
            return false;
        }
        res.render('../views/mypage.html');
    });
    
    app.post('/Myfeed', function(req, res){
        if (user.id == req.body.id && user.password == req.body.password){
            req.session.is_logined = true;
            req.session.nickname = user.id;
            res.render('../views/feed.html');
          }
          else{
            res.redirect('/');
          }
    });

    // app.get('/feed',function(req,res){
    //     res.render('../views/feed.html');
    // })

    // app.get('/mypage', function (req, res) {
    //     res.render('../views/mypage.html');
    // })
}