let modal = document.getElementsByClassName("modalBox");
let open = document.getElementsByClassName("openBtn");
let close = document.getElementsByClassName("closeBtn");

function setDataIdx(){
  for (let i = 0; i < open.length; i++) {
    open[i].setAttribute('data-index', i);
    modal[i].setAttribute('data-index', i);
    close[i].setAttribute('data-index', i);
  }
}

for (let i = 0; i < open.length; i++) {
  open[i].onclick = function(){
    let n = this.getAttribute('data-index');
    modal[n].style.display = "block";
  };

  close[i].onclick = function(){
    let n = this.getAttribute('data-index');
    modal[n].style.display = "none";
  };
}

window.onload = function(){
  setDataIdx();
}

window.onclick = function(event){
  if (event.target === modal[event.target.getAttribute('data-index')]){
      modal[event.target.getAttribute('data-index')].style.display = "none";
    }
};

// open.onclick = function(){
//   modal.style.display = "block";
// };
//
// close.onclick = function(){
//   modal.style.display = "none";
// };
//
// window.onclick = function(event) {  //모달 밖 아무데나 클릭시 창 닫기
//   if (event.target == modal){
//     modal.style.display = "none";
//   }
// }
