let express = require('express');
const app = require('../app');
let port = process.env.port || 3000;
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login.html');
});

router.get('/feed/', function(req, res, next) {
  res.render('feed.html');
});

router.get('/mypage/', function(req, res, next) {
  res.render('mypage.html');
});

router.get('/register/', function(req, res, next) {
  res.render('register.html');
});

router.route('/createCookie').get(function(req, res){
  const park ={"name" : "Yunjin", "age" : 25};

  res.cookie("user", park);
  console.log("쿠키 생성 완료!");

  res.redirect('/showCookies');
});


module.exports = router;
