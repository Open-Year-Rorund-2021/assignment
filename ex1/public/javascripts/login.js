let idPattern = /^[A-Za-z]{1}[A-Za-z0-9]{3,19}$/;
let pwPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
let emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
let phonePattern = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g;
let flag = 0, flag2 = 0, flag3 = 0, flag4 = 0;
let imgArray = new Array();
imgArray[0] = "/images/login/phone.JPG";
imgArray[1] = "/images/login/phone2.JPG";
imgArray[2] = "/images/login/phone3.JPG";
let i = 0;
function showImage() {
    var imgNum = i;
    var objImg = document.getElementById("introImg");
    objImg.src = imgArray[imgNum % 3];
    setTimeout("showImage()", 5000);
    i += 1;
    console.log(i);
    if (i >= 3) {
        i = 0;
    }
}

let number_check = document.getElementById("number").addEventListener('blur', function () {

    if (document.getElementById("number").value == '') {
        flag = 0;
    }

    else if (emailPattern.test(document.getElementById('number').value) || phonePattern.test(document.getElementById('number').value)) {
        flag = 1;
    }

    else if (!(emailPattern.test(document.getElementById('number').value) || phonePattern.test(document.getElementById('number').value))) {
        flag = 0;
    }
})

let password_check = document.getElementById("password").addEventListener('blur', function () {

    if (document.getElementById("password").value == '') {
        flag2 = 0;
    }

    else if (pwPattern.test(document.getElementById('password').value)) {
        flag2 = 1;
    }

    else {
        flag2 = 0;
    }
});

let join = document.getElementById("join").addEventListener('click', function () {

    if ((flag + flag2) == 2) {
        alert('로그인 성공!');
        location.href = "/feed/";

    }
});

let join2 = document.getElementById("number").addEventListener('blur', function () {

    if ((flag + flag2) == 2) {
        document.getElementById('join').style.opacity = 1;
    }

    else {
        document.getElementById('join').style.opacity = 0.5;
    }
});

let join3 = document.getElementById("password").addEventListener('blur', function () {

    if ((flag + flag2) == 2) {
        document.getElementById('join').style.opacity = 1;
    }

    else {
        document.getElementById('join').style.opacity = 0.5;
    }
});