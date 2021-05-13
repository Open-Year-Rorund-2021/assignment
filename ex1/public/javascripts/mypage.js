let photos = ['광화문.jpg', 'hanriver.jpg', 'instagram.png', 'hanriver.jpg'];
let a = ''
for (let i = 0; i < photos.length; i++) {
    a += `<img id="image${i}" onclick="clickPhoto(${i});" onmouseover="hoverMouse(${i});" onmouseout="offhoverMouse(${i});" src="/images/feed/${photos[i]}" style="width : 280.4px; height : 280.4px; margin-top : 1px; margin-left : 3px; cursor : pointer;">`;
    if (i % 3 == 2) {
        a += `<br>`;
    }
}

function hoverMouse(k){
    alert(k, '안녕하세요!');
}

function offhoverMouse(k){
    alert(k, '안녕하세요!');
}

function clickPhoto(k) {

    let a = '';
    a += `<div class="child_content"><img src="/images/feed/${photos[k]}" style="width : 150.4px; height : 50.4px;</div>
            <div class="child_content" id="change">모달 준비중</div>
            <div id="modal_close_btn2" class="child_content">취소</div>`;
    document.getElementById('my_modal_child2').innerHTML = a;

    document.getElementById('image' + k).addEventListener('click', function () {
        let q = document.getElementById('my_modal2');
        q.style.display = 'block';
    });

    document.getElementById('modal_close_btn2').addEventListener('click', function () {
        document.getElementById('my_modal2').style.display = 'none';
    });

}

document.getElementById('inner').innerHTML = a;
document.getElementById('input_control').addEventListener('focus', function () {

    if (document.getElementById('input_control').value == '') {
        document.getElementById('search').style.display = 'block';
        document.getElementById('search').style.marginLeft = '15px';
    }

    else {
        document.getElementById('search').style.display = 'none';
    }
})

document.getElementById('input_control').addEventListener('blur', function () {

    if (document.getElementById('input_control').value == '') {
        document.getElementById('search').style.display = 'block';
        document.getElementById('search').style.marginLeft = "90px";
    }

    else {
        document.getElementById('search').style.display = 'none';
    }
})

document.getElementById('input_control').addEventListener('keydown', function () {
    document.getElementById('search').style.display = 'none';
})

document.getElementById('home').addEventListener('click', function () {
    location.href = "/feed/";
})

document.getElementById('home2').addEventListener('click', function () {
    location.href = "/feed/";
})

document.getElementById('person').addEventListener('click', function () {
    location.href = "/mypage/";
})

document.getElementById('modal_btn').addEventListener('click', function () {
    let q = document.getElementById('my_modal');
    q.style.display = 'block';
});

document.getElementById('modal_close_btn').addEventListener('click', function () {
    document.getElementById('my_modal').style.display = 'none';
});