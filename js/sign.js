var text = "";
var count = 0;
function check() {

    var userEmail = document.getElementById("userEmail");
    var userName = document.getElementById("userName");
            var userid = document.getElementById("userid");
            var userpw = document.getElementById("userpw");

            let emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            let namePattern = /^[ㄱ-ㅎ|가-힣|a-z|A-Z]+$/;
            let idPattern = /^[A-Za-z]{1}[A-Za-z0-9]{3,19}$/;
            let pwPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

            //메일
            if(emailPattern.test(userEmail.value)==true) {
                text+="로그인 되었습니다.\n휴대폰 및 이메일: " + userEmail.value + "\n";
            }
            else {

            }

            //성명
            if(namePattern.test(userName.value)==true) {
                text+="성명: " + userName.value + "\n";
            }
            else {

            }

            //아이디
            if(idPattern.test(userid.value)==true) {
                text+="사용자 이름: " + userid.value + "\n";
            }
            else {

            }

            alert(text);
        }