window.onload = () => {
  const content = document.getElementsByClassName("content");

  function getTemplate(seed) {
    const template = `
    <div class="feed">
            <div class="post-title">
            <div class="post-title-left">
                <div class="user-profile-img">
                <img
                    src="https://t1.daumcdn.net/cfile/blog/156FD4374E3F2DD633"
                    alt=""
                    class="profile-img"
                />
                </div>
            </div>
            <div class="post-title-center user-id">lhd0426</div>
            <div class="post-title-right">
                <i class="fas fa-ellipsis-h"></i>
            </div>
            </div>

            <div class="post-img">
            <img
                src="https://picsum.photos/1000/1000?random=${seed}"
                alt=""
                class="main-img"
            />
            </div>
            <div class="post-interact">
            <div class="like"><i class="far fa-heart"></i></div>
            <div class="comment-button">
                <img
                src="https://static.thenounproject.com/png/638755-200.png"
                alt=""
                class="comment-img"
                />
            </div>
            <div class="post-bookmark">
                <i class="far fa-bookmark"></i>
            </div>
            </div>
            <div class="post-content">
            <div class="post-id">lhd0426</div>
            <p class="post-comment">
                안녕하세용
            </p>
            </div>
            <div class="post-comment-list">
            <div class="post-comment">
                <div class="comment-id">USER1</div>
                <p class="comment">MIC TEST 1</p>
                <div class="comment-heart"><i class="far fa-heart"></i></div>
            </div>
            <div class="post-comment">
                <div class="comment-id">USER2</div>
                <p class="comment">MIC TEST 2</p>
                <div class="comment-heart"><i class="far fa-heart"></i></div>
            </div>
            <div class="post-comment">
                <div class="comment-id">USER3</div>
                <p class="comment">MIC TEST 3</p>
                <div class="comment-heart"><i class="far fa-heart"></i></div>
            </div>
            </div>
        </div>
    `;
    return template;
  }
  all = "";
  for (let i = 0; i < Math.floor(Math.random() * 10) + 1; i++) {
    all += getTemplate(i);
  }
  console.log(all);
  content[0].innerHTML = all;
  //   content.innerHTML = template;
};
