window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keyup", checkKeyLifted, false);


function checkKeyPressed (event) {
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

function checkKeyLifted (event) {
  keyLeft = false;
  keyRight = false;
}
