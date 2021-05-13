let express = require('express');
const app = require('../app');
let port = process.env.port || 3000;
let router = express.Router();
let cookieLoginObj;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login.html');
});

router.get('/feed/', function(req, res, next) {
  /*로그인이 되어있지 않다면, 다시 로그인 페이지로 보내야 함*/

  if(!cookieLoginObj){
    res.redirect('/');
  }
  res.render('feed.html');
});

router.post('/feed/', function(req, res, next) {

  /*post로 들어온 경우, 쿠키를 설정해 줌 */

  res.cookie('login', '박현우', {maxAge:300000, httpOnly:true});
  
  cookieLoginObj = req.cookies.login;
  console.log(cookieLoginObj);
  if(cookieLoginObj){
    console.log('로그인 됨');
  }

  else{
    console.log('로그인 안 됨');
  }
  
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
