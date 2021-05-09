// function check(){
//   let email = document.getElementById('address').value;
//   let regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//
//   if(!email.match(regex)){
//     document.getElementsByClassName('result').innerHTML = "wrong";
//   }else{
//     document.getElementsByClassName('result').innerHTML = "correct";
//   }
// }

function check(){
  let email = document.getElementById("address").value;
  //let pre = /^\d{3}-\d{3,4}-\d{4}$/;
  let re = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  if (!re.test(email)){
    document.getElementById("address").style.backgroundImage = "url(./img/error.png)";
    document.getElementById("address").style.backgroundRepeat = "no-repeat";
    document.getElementById("address").style.backgroundPosition = "right";
    return false;
  }else{
    document.getElementById("address").style.backgroundImage = "url(./img/correct.png)";
    document.getElementById("address").style.backgroundRepeat = "no-repeat";
    document.getElementById("address").style.backgroundPosition = "right";
  }
}

function pwdCheck(){
  let pw = document.getElementById("pwd").value;
  let reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  //특수문자 / 문자 / 숫자 포함 형태의 8~15자리

  if (!reg.test(pw)){
    document.getElementById("pwd").style.backgroundImage = "url(./img/error.png)";
    document.getElementById("pwd").style.backgroundRepeat = "no-repeat";
    document.getElementById("pwd").style.backgroundPosition = "right";
    // alert("wrong");
    // document.getElementById("pwd").focus();
    return false;
  }else{
    document.getElementById("pwd").style.backgroundImage = "url(./img/correct.png)";
    document.getElementById("pwd").style.backgroundRepeat = "no-repeat";
    document.getElementById("pwd").style.backgroundPosition = "right";
  }
}
