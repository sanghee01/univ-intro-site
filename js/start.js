const startButton = document.getElementById("startbutton");
const box = document.getElementById("box");
const start_overlay = document.getElementById("start_overlay");
const scrolling = document.getElementById("scroll");
const map = document.getElementById("map");
const player_image = document.getElementById("player");
const upside = document.getElementById("upside");

const clickbutton = () => {
  //없애기
  box.style.display = "none";
  startButton.style.display = "none";
  start_overlay.style.display = "none";
  const upside = document.getElementById("upside");
  const backmusic = document.getElementById("bgm");

  map.style.display = "block";
  player_image.style.display = "block";
  upside.style.display = "block";
  backmusic.style.display = "block";
  //스크롤바 보이게 하기
  scrolling.style.overflow = "visible";
  scrollTo({ left: 0, top: 1935, behavior: "smooth" });
  //원하는위치까지 스크롤
  backmusic.play();
};

startButton.addEventListener("click", clickbutton);