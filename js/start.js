const startButton = document.getElementById("startbutton");
const box = document.getElementById("box");
const start_overlay = document.getElementById("start_overlay");
const scrolling = document.getElementById("scroll");
const map = document.getElementById("map");
const player_image = document.getElementById("player");
const upside = document.getElementById("upside");
const backmusic = document.getElementById("bgm");

startButton.addEventListener("click", () => {
  box.classList.add("hidden");
  startButton.classList.add("hidden");
  start_overlay.classList.add("hidden");
  map.classList.remove("hidden");
  player_image.classList.remove("hidden");
  upside.classList.remove("hidden");
  backmusic.classList.remove("hidden");
  scrollTo({ left: 0, top: 1935, behavior: "smooth" });
  backmusic.play();
});
