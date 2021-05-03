function pwdCheck(){
  let pw = document.getElementById("pwd").value;
  let re = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  //특수문자 / 문자 / 숫자 포함 형태의 8~15자리

  if (!re.test(pw)){
    document.getElementById("pwd").style.backgroundImage = "url(./img/error.png)";
    document.getElementById("pwd").style.backgroundRepeat = "no-repeat";
    document.getElementById("pwd").style.backgroundPosition = "right";
    return false;
  }else{
    document.getElementById("pwd").style.backgroundImage = "url(./img/correct.png)";
    document.getElementById("pwd").style.backgroundRepeat = "no-repeat";
    document.getElementById("pwd").style.backgroundPosition = "right";
  }
}
