let express = require('express');
const app = require('../app');
let port = process.env.port || 3000;
let router = express.Router();
let cookieLoginObj;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login.html');
});

router.get('/feed', function(req, res, next) {
  /*쿠키가 존재하지 않는다면, 다시 로그인 페이지로 보내야 함*/

  if(req.cookies.login !== '박현우'){
    res.redirect('/');
  }

  else{
    res.render('feed.html');
  }
});

router.get('/register', function(req, res, next) {
  
  res.render('register.html');
});

router.post('/feed', function(req, res, next) {

  /*post로 들어온 경우, 쿠키를 설정해 줌 */
  if(req.cookies.login === '박현우'){
    console.log('쿠키 있음');
  }

  else{
    res.cookie('login', '박현우', {maxAge : 30000});
    console.log('쿠키 없음 -> 만들 예정');
  }
  
  res.render('feed.html');
});

router.get('/mypage', function(req, res, next) {
  res.render('mypage.html');
});

router.get('/register', function(req, res, next) {
  res.render('register.html');
});

router.get('/logout', function(req, res, next) {

});


router.route('/createCookie').get(function(req, res){
  const park ={"name" : "Yunjin", "age" : 25};

  res.cookie("user", park);
  console.log("쿠키 생성 완료!");

  res.redirect('/showCookies');
});


module.exports = router;
