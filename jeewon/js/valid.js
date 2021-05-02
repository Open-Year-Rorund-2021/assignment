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
  let re = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (!re.test(email)){
     // document.getElementsByClassName('result').innerHTML = "wrong";
    alert("wrong");
    document.addjoin.email.focus();
    return false;
  }else{
    alert("true");
    document.addjoin.email.focus();
  }
}
