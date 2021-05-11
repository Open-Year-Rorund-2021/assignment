let idPattern = /^[A-Za-z]{1}[A-Za-z0-9]{3,19}$/;
let pwPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
let emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
let phonePattern = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g;
let flag = 0, flag2 = 0, flag3 = 0, flag4 = 0;

let number_check = document.getElementById("number").addEventListener('blur', function () {

    if (document.getElementById("number").value == '') {
        document.getElementById("ok").style.display = 'none';
        document.getElementById("x").style.display = 'none';
        flag = 0;
    }

    else if (emailPattern.test(document.getElementById('number').value) || phonePattern.test(document.getElementById('number').value)) {
        document.getElementById('ok').style.display = 'block';
        document.getElementById('x').style.display = 'none';
        flag = 1;
    }

    else if (!(emailPattern.test(document.getElementById('number').value) || phonePattern.test(document.getElementById('number').value))) {
        document.getElementById('ok').style.display = 'none';
        document.getElementById('x').style.display = 'block';
        flag = 0;
    }
})

let name_check = document.getElementById("name").addEventListener('blur', function () {

    if (document.getElementById("name").value == '') {
        document.getElementById("ok2").style.display = 'none';
        document.getElementById("x2").style.display = 'none';
        flag2 = 0;
    }

    else if (document.getElementById("name").value.length < 40) {
        document.getElementById('ok2').style.display = 'block';
        document.getElementById('x2').style.display = 'none';
        flag2 = 1;
    }

    else {
        document.getElementById('ok2').style.display = 'none';
        document.getElementById('x2').style.display = 'block';
        flag2 = 0;
    }
})

let nickname_check = document.getElementById("nickname").addEventListener('blur', function () {

    if (document.getElementById("nickname").value == '') {
        document.getElementById("ok3").style.display = 'none';
        document.getElementById("x3").style.display = 'none';
        flag3 = 0;
    }

    else if (idPattern.test(document.getElementById('nickname').value)) {
        document.getElementById('ok3').style.display = 'block';
        document.getElementById('x3').style.display = 'none';
        flag3 = 1;
    }

    else {
        document.getElementById('ok3').style.display = 'none';
        document.getElementById('x3').style.display = 'block';
        flag3 = 0;
    }
});

let password_check = document.getElementById("password").addEventListener('blur', function () {

    if (document.getElementById("password").value == '') {
        document.getElementById("ok4").style.display = 'none';
        document.getElementById("x4").style.display = 'none';
        flag4 = 0;
    }

    else if (pwPattern.test(document.getElementById('password').value)) {
        document.getElementById('ok4').style.display = 'block';
        document.getElementById('x4').style.display = 'none';
        flag4 = 1;
    }

    else {
        document.getElementById('ok4').style.display = 'none';
        document.getElementById('x4').style.display = 'block';
        flag4 = 0;
    }
});

let join = document.getElementById("join").addEventListener('click', function () {

    if ((flag + flag2 + flag3 + flag4) == 4) {
        alert(`가입이 완료되었습니다.\n휴대폰 및 이메일 : ${document.getElementById('number').value}\n성명 : ${document.getElementById('name').value}\n사용자 이름 : ${document.getElementById('nickname').value}
`)
        location.href = "./feed.html";

    }
});

let join2 = document.getElementById("number").addEventListener('blur', function () {

    if ((flag + flag2 + flag3 + flag4) == 4) {
        document.getElementById('join').style.opacity = 1;
    }

    else {
        document.getElementById('join').style.opacity = 0.5;
    }
});

let join3 = document.getElementById("name").addEventListener('blur', function () {

    if ((flag + flag2 + flag3 + flag4) == 4) {
        document.getElementById('join').style.opacity = 1;
    }

    else {
        document.getElementById('join').style.opacity = 0.5;
    }
});

let join4 = document.getElementById("nickname").addEventListener('blur', function () {

    if ((flag + flag2 + flag3 + flag4) == 4) {
        document.getElementById('join').style.opacity = 1;
    }

    else {
        document.getElementById('join').style.opacity = 0.5;
    }
});

let join5 = document.getElementById("password").addEventListener('blur', function () {

    if ((flag + flag2 + flag3 + flag4) == 4) {
        document.getElementById('join').style.opacity = 1;
    }

    else {
        document.getElementById('join').style.opacity = 0.5;
    }
});