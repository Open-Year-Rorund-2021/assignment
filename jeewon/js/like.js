function handleClick(i){
  let icolike = document.querySelector('#like'+i)
  // icolike.src = icolike.src == location.protocol + '//' + location.host + 'img/like.png' ? 'img/likefilled.png' : 'img/like.png';
  if (icolike.src.match('img/like.png')){
    icolike.src = "img/likefilled.png";
  }
  else{
    icolike.src =	"img/like.png";
  }
}

icolike.onclick = handleClick(i);
