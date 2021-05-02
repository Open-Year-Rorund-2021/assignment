let heart=document.querySelector(".heart");

heart.onclick=changepic;

let cnt=0;

function changepic(){
    if(cnt%2==0){
        heart.src="하트(누름).jpg";
    }
    else{
        heart.src="하트(누름x).jpg";
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