let modal = document.getElementById("modalBox");
let open = document.getElementById("openBtn");
let close = document.getElementById("closeBtn");

open.onclick = function(){
  modal.style.display = "block";
}

close.onclick = function(){
  modal.style.display = "none";
}

window.onclick = function(event) {  //모달 밖 아무데나 클릭시 창 닫기
  if (event.target == modal){
    modal.style.display = "none";
  }
}
