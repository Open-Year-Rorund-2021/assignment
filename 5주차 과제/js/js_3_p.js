const open_1 = () => {
    document.querySelector(".modalBox_1").classList.remove("hidden");
  }

const close_1 = () => {
    document.querySelector(".modalBox_1").classList.add("hidden");
  }

  document.querySelector("#modal_1").addEventListener("click", open_1);
  document.querySelector(".bg_1").addEventListener("click", close_1);

const open_2 = () => {
    document.querySelector(".modalBox_2").classList.remove("hidden");
  }

const close_2 = () => {
    document.querySelector(".modalBox_2").classList.add("hidden");
  }

  document.querySelector("#modal_2").addEventListener("click", open_2);
  document.querySelector(".bg_2").addEventListener("click", close_2);

  const open_3 = () => {
    document.querySelector(".modalBox_3").classList.remove("hidden");
  }

const close_3 = () => {
    document.querySelector(".modalBox_3").classList.add("hidden");
  }

  document.querySelector("#modal_3").addEventListener("click", open_3);
  document.querySelector(".bg_3").addEventListener("click", close_3);


const open = () => {
    document.querySelector(".modal").classList.remove("hidden");
}

const close = () => {
    document.querySelector(".modal").classList.add("hidden");
  }

  document.querySelector("#profile_pic").addEventListener("click", open);
  document.querySelector(".bg").addEventListener("click", close);