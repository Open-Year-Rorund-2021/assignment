let f1=0;
let f2=0;

document.getElementById("address").addEventListener('blur', function(){
  let email = document.getElementById("address").value;
  //let pre = /^\d{3}-\d{3,4}-\d{4}$/;
  let re = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  if (!re.test(email)){
    f1=0;
    document.getElementById("address").style.backgroundImage = "url(../public/img/error.png)";
    document.getElementById("address").style.backgroundRepeat = "no-repeat";
    document.getElementById("address").style.backgroundPosition = "right";
  }else{
    f1=1;
    document.getElementById("address").style.backgroundImage = "url(../public/img/correct.png)";
    document.getElementById("address").style.backgroundRepeat = "no-repeat";
    document.getElementById("address").style.backgroundPosition = "right";
  }
});

document.getElementById("pwd").addEventListener('blur', function(){
  let pw = document.getElementById("pwd").value;
  let reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  //특수문자 / 문자 / 숫자 포함 형태의 8~15자리

  if (!reg.test(pw)){
    f2=0;
    document.getElementById("pwd").style.backgroundImage = "url(./img/error.png)";
    document.getElementById("pwd").style.backgroundRepeat = "no-repeat";
    document.getElementById("pwd").style.backgroundPosition = "right";
    // alert("wrong");
    // document.getElementById("pwd").focus();
  }else{
    f2=1;
    document.getElementById("pwd").style.backgroundImage = "url(./img/correct.png)";
    document.getElementById("pwd").style.backgroundRepeat = "no-repeat";
    document.getElementById("pwd").style.backgroundPosition = "right";
  }
});

function signin(){
  event.preventDefault();
  if ((f1==1) && (f2==1)){
      alert("가입이 완료되었습니다.\n휴대폰 및 이메일 :" + document.getElementById("address").value + "\n성명 :" + document.getElementById("name").value + "\n사용자 이름 :" + document.getElementById("nickname").value);
      location.href="./feed.html";
  }
}
