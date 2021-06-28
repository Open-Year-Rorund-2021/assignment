var state = 0;

function changeheart() {
    if(state==0) {
        document.getElementById('chheart').src = "https://static.thenounproject.com/png/1380342-200.png";
        document.getElementById("cha").innerHTML="103개"
        state = 1;
    }
    else {
        document.getElementById('chheart').src = "https://www.nicepng.com/png/detail/72-722905_heart-svg-instagram-love-clipart.png";
        document.getElementById("cha").innerHTML="104개"
        state = 0;
    }
}