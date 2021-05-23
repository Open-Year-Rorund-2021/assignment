let photos = ['광화문.jpg', 'hanriver.jpg', 'instagram.png', 'hanriver.jpg'];
let like_number = [15,10,24,32];
let heart_number = [95,25,51,33];
let a = '';
let words = [];

for (let i = 0; i < photos.length; i++) {
    a += `<div id="image${i}" onmouseover="hoverMouse(${i});" 
    onmouseout="offhoverMouse(${i});" style="display:inline; position:relative;"><img src="/images/feed/${photos[i]}" style="z-index : 1; width : 280.4px; height : 280.4px; 
    margin-top : 1px; margin-left : 3px;">
    <div onclick="clickPhoto(${i});" id="modal_photo${i}" style="z-index : 0; cursor : pointer; display:none; position: absolute; left : 4px; width : 280.4px; height : 280.4px; background-color:rgba(0,0,0,0.5);" id="child">
        <div id="heart">
            <svg aria-label="활동 피드" class="_8-yf5" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
            <path fill="white" d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
            </path>
            </svg>
            <span style="color:white"><b>${heart_number[i]}</b></span>
            
            <svg aria-label="댓글 달기" class="_8-yf5 " fill="white" height="24" viewBox="0 0 48 48" width="24">
            <path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd">
            </path></svg>
            <span style="color:white"><b>${like_number[i]}</b></span>
        </div>
    </div>
    </div>`;
    if (i % 3 == 2) {
        a += `<br>`;
    }
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
    location.href = "/feed";
})

document.getElementById('home2').addEventListener('click', function () {
    location.href = "/feed";
})

document.getElementById('person').addEventListener('click', function () {
    location.href = "/mypage";
})

document.getElementById('modal_btn').addEventListener('click', function () {
    let q = document.getElementById('my_modal');
    q.style.display = 'block';
});

document.getElementById('modal_close_btn').addEventListener('click', function () {
    document.getElementById('my_modal').style.display = 'none';
});

function hoverMouse(k) {

    document.getElementById('modal_photo' + k).style.display = 'inline';

}

function offhoverMouse(k) {

    document.getElementById('modal_photo' + k).style.display = 'none';

}

function colorChange(k) {

    let a = document.getElementById('heart' + k);
    let b = document.getElementById('like' + k);

    if (a.innerHTML == `<path fill="#262626" d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>`) {
        a.innerHTML = `<path fill="#ed3956" d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>`;
        b.style.display = 'block';
    }

    else {
        a.innerHTML = `<path fill="#262626" d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>`;
        b.style.display = 'none';
    }
}

function enterkey(k) {
    if (window.event.keyCode == 13) {
        
        let cont = document.getElementById('content' + k).innerHTML;
        let cont2 = document.getElementById('content' + k);
        let text = document.getElementById('text' + k).value;

        if (text == '') {
            alert('내용을 입력해 주세요');
        }

        else {
            words.unshift('<div><b>OpenYearRound</b> ' + text + '</div>');

            let total_words = '';
            for(let i=0;i<words.length;i++){
                total_words += words[i];
            }

            cont2.innerHTML = total_words;
            document.getElementById('text' + k).value = "";
        }
    }
}

function reset_words(){

    words = [];
}

function clickPhoto(k) {

    let a = '';
    a += `<div class="child_content2"><img src="/images/feed/${photos[k]}" style="width : 508.5px; height : 508.5px;"></div>
            <div id="child_content_outer">
            
                <div id="header">
                <img class = "profile" src="/images/feed/광화문.jpg" style="width:32px; height:32px;"><div>OpenYearRound</div>
                    <div id="modal_close_btn2" style="margin-left:150px" onclick="reset_words()"><svg aria-label="옵션 더 보기" class="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16"><circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle></svg></div>
                </div>
            <div id="content${k}"></div>
            
            <div class="footer">
            
                <button style="background-color: #FFFFFF; border:0px" onclick="colorChange(${k})">
                    <svg aria-label="활동 피드" id="heart${k}" class="_8-yf5 " style="background-color: #FFFFFF" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path fill="#262626" d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                </button>
                <button>
                    <svg aria-label="댓글 달기" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                </button>
                <button>
                    <svg aria-label="게시물 공유" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                </button>
                <button>
                    <svg aria-label="저장" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                </button>
            </div>
            
            <div id="like${k}" style="width:100%; display:none"><b>좋아요 1개</b></div>
            <div id="appendcomments${k}"></div>

            <div class="comments">
                <svg aria-label="이모티콘" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path></svg>
                <input id="text${k}" type="text" placeholder="댓글 달기" style = "border : 0px" width: "400px"; onKeydown="enterkey(${k})">
            </div></div></div>`;

    document.getElementById('my_modal_child2').innerHTML = a;
    document.getElementById('image' + k).addEventListener('click', function () {
        let q = document.getElementById('my_modal2');
        q.style.display = 'block';
    });

    document.getElementById('modal_close_btn2').addEventListener('click', function () {
        document.getElementById('my_modal2').style.display = 'none';
    });

}
