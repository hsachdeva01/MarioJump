let music = new Audio("./assets/sounds/mario_song.mp3");
music.addEventListener("ended", function () {
  this.currentTime = 0;
  this.play();
}, false);

music.play();

let gameover = new Audio("./assets/sounds/game_over.mp3");
gameover.addEventListener("ended", function () {
  this.currentTime = 0;
  this.play();
}, false);

let powerJump = new Audio("./assets/sounds/jump.mp3");

powerJump.addEventListener("ended", function () {
  this.currentTime = 0;
  this.play();
  this.pause();
  this.load();
}, false);

let jump = new Audio("./assets/sounds/jump.mp3");
jump.addEventListener("ended", function () {
  this.currentTime = 0;
  this.play();
  this.pause();
  this.load();
}, false);