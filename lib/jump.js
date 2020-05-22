window.addEventListener("keydown", checkKey, false);
window.addEventListener("keyup", keyLifted, false);


function checkKey (event) {
    switch(event.keyCode) {
        case 37:
            keyLeft = true;
            break;
        case 65:
            keyLeft = true;
            break;
        case 39:
            keyRight = true;
            break;
        case 68:
            keyRight = true;
            break;
        case 13:
            music.play();
            game.startGame();
            break;
        case 32:
            music.play();
            game.startGame();
            break;
        case 77:
        if (music.paused) {
          music.play();
        } else {
          music.pause();
        }
    }
}

window.getElementById('mario').addEventListener("click", () => {
    game = new Game();
    music.play();
    game.startGame();
});
window.getElementById('luigi').addEventListener("click", () => {
    game = new Game();
    music.play();
    game.startGame();
});


function keyLifted (event) {
  keyLeft = false;
  keyRight = false;
}
