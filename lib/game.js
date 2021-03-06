let mycanvas = document.getElementById('mycanvas');
let ctx = mycanvas.getContext('2d');
let keyLeft;
let keyRight;
let width = 500;
let height = 600;
mycanvas.width  = 500;
mycanvas.height = 600;


class Game {
  constructor(character) {
    this.numPlatforms = 10;
    this.platforms = [];
    this.points = 0;
    this.state = true;
    this.enemies = new Array;
    this.character = character;
    this.player = new Player(this, character);
    this.enemy = new Enemy(this);
  }

  background() {
    let cover = new Image();
    cover.src = './assets/images/game_cover.png';
    cover.onload = function() {
      ctx.drawImage(cover, 0, 0);
    };
  }

  restart() {
    ctx.fillStyle = "#3bc45b"
    ctx.beginPath();
    ctx.rect(0, 0, width, height);
    ctx.closePath();
    ctx.fill();
  }

chooseChar(){
  document.getElementById('mario').addEventListener("click", () => {
    theme = 1;
    game = new Game(ctx, theme);
    return 'mario'
  });
  document.getElementById('luigi').addEventListener("click", () => {
    theme = 2;
    game = new Game(ctx, theme);
    return 'luigi'
  });
}

  checkMove() {
    if (keyLeft) {
      this.player.image.src = "./assets/images/marioLeft.png";
      this.player.image.style.width = "100px";
      this.player.moveLeft();
    } else if (keyRight) {
      this.player.image.src = "./assets/images/marioRight.png";
      this.player.image.style.width = "100px";
      this.player.moveRight();
    }
  }

  collision() {
    this.platforms.forEach((platform) => {
      if ((this.player.isFalling) &&
          (this.player.X < platform.x + 57) && 
          (this.player.X + this.player.width > platform.x) &&
          (this.player.Y + this.player.height > platform.y) &&
          (this.player.Y + this.player.height < platform.y + 20) 
    ) {
        platform.onCollide();
      }
    });
  }

  generatePlatforms() {
    let type;
    for (let i = 0; i < this.numPlatforms; i++) {
      type = Math.floor((Math.random() * 5));
      if (type === 0) {
        type = 0;
      } else {
        type = 1;
      let dyPosition = 50 + 70 * i + 50 * Math.random();
      this.platforms[i] = new Platform (
        game,
        Math.random()*(width - 57),
        dyPosition,
        type);
      }
    }
  }

  generateEnemies() {
    for (let i = 0; i < this.numEnemies; i++) {
      type = Math.floor((Math.random() * 5));
      if (type === 0) {
        type = 0;
      } else {
        type = 1;
      let dyPosition = 50 + 70 * i + 50 * Math.random();
      this.platforms[i] = new Enemy (
        game,
        Math.random()*(width - 57),
        dyPosition,
        );
      }
    }
  }


  showPoints() {
    ctx.fillStyle = "Black";
    ctx.font = "12pt mario";
    ctx.fillText("POINTS:" + this.points, 8, height-580);
  }


  startGame() {
    this.player.reset();
    this.points = 0;
    this.state = true;
    this.generatePlatforms();
    this.generateEnemies();
    this.player.setPosition(
      Math.floor(((width - this.player.width) / 2)),
      Math.floor(((height - this.player.height) / 2))
    );
    this.player.jump();
    this.loop();
    this.background();
  }
  
  movePlatforms(){
    let moving = Math.floor((Math.random() * 2))
    this.platforms.forEach((platform, idx) => {
      if (moving) {
        if (platform.x < 0) {
          platform.direction = 1;
        } else if (platform.x > width - 57) {
          platform.direction = -1;
        }
        platform.x += platform.direction * (idx / 2) * Math.floor((this.points / 80));
      }
  })
}

// making platforms for mario to jump on

  makePlatforms(){
    this.platforms.forEach((platform) => {
      platform.draw();
    });
  }

  // add in enemiesgi
  makeEnemies(){
    this.enemies.forEach((enemy) => {
      enemy.draw();
    });
  }
  


  loop() {
    this.checkMove();
    this.restart();
    this.collision();
    if (this.player.isJumping) this.player.checkJump();
    if (this.player.isFalling) this.player.checkFall();
    this.player.draw();
    if(this.points > 350){
      this.movePlatforms();
    }
    this.makePlatforms();
    this.makePlatforms();
    this.makeEnemies();
    this.showPoints();
    this.enemy.draw();
    

    if (this.state) {
        this.loopId = setTimeout(this.loop.bind(this), 1000 / 40);
    }
  }

  // ends the game

  gameOver() {
    this.state = false;
        this.width,
    this.height,
    this.X,
    this.Y,
    clearTimeout(this.loopId);
    setTimeout(() => {
      music.pause();
      this.restart();
      let gameover = new Image();
      gameover.onload = function() {
        ctx.drawImage(gameover, width / 2 - 140, height / 2 - 80);
      };
      ctx.fillStyle = "Yellow";
      ctx.font = "18pt mario";
      gameover.src = "../assets/images/marioRight.png"
      ctx.fillText("GAME OVER!!", width / 2 - 65, height / 2 - 50);
      ctx.fillText("", width / 2 - 65, height / 2 - 30);
      ctx.fillText("YOUR FINAL SCORE : " + this.points, width / 2 - 65, height / 2 - 20);
      ctx.fillText("PRESS ENTER or SPACE TO PLAY AGAIN" , width / 2 - 150, height / 2 + 50);
    }, 100);
      gameover.play();
      setTimeout(()=> {
        gameover.pause();
        gameover.load()
      }, 8000);
      music.load();
  }
  // gets the background of the image

  cover(){
    let image = new Image();
    image.src = "../assets/images/background.png";

  }
}


let game = new Game();
game.background();
