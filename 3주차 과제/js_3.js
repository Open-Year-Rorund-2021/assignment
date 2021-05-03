let heart=document.querySelectorAll(".heart");


let cnt=0;

function changepic(idx){
    if(cnt%2==0){
        heart[idx-1].src="하트(누름).jpg";
    }
    else{
        heart[idx-1].src="하트(누름x).jpg";
    }
    cnt++;
}

const open = () => {
    document.querySelector(".modal").classList.remove("hidden");
  }

const close = () => {
    document.querySelector(".modal").classList.add("hidden");
  }

  document.querySelector("#modal").addEventListener("click", open);
  document.querySelector("#close").addEventListener("click", close);
  document.querySelector(".bg").addEventListener("click", close);