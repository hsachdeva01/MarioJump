class Player {
  constructor(game, character) {
    this.game = game;
    this.image = new Image();
    // this.image.src = "./assets/images/marioRight.png";
    this.width = 65;
    this.height = 85;
    this.X = 0;
    this.Y = 0;
    this.frames = 1;
    this.actualFrame = 0;
    this.interval = 0;
    this.isJumping = false;
    this.isFalling = false;
    this.jumpSpeed = 0;
    this.fallSpeed = 0;
    this.reset = this.reset.bind(this);
    switch (character) {
      case 1: this.image.src = "./assets/images/marioRight.png"
        break;
      case 2: this.image.src = "./assets/images/luigi.png"
        break;
      default: this.image.src = "./assets/images/marioRight.png"
    }
  }

  setPosition(x, y) {
    this.X = x;
    this.Y = y;
  }

  draw() {
    ctx.drawImage(
    this.image,
    0,
    this.height * this.actualFrame,
    this.width,
    this.height,
    this.X,
    this.Y,
    this.width,
    this.height
  )};

  jump() {
    if (!this.isJumping && !this.isFalling) {
        this.fallSpeed = 0;
        this.isJumping = true;
        // how high should the player jump -> ex. 20
        this.jumpSpeed = 20;
    }
  }

  checkJump() {
    if (this.Y > height * 0.5) {
      this.setPosition(this.X, this.Y - this.jumpSpeed);
    } else {
      if (this.jumpSpeed > 5) this.game.points++;
      let that = this;
      this.game.platforms.forEach((platform, idx) => {
        platform.y += that.jumpSpeed;
        if (platform.y > height) {
          let type = Math.floor((Math.random() * 5));
          if (type === 0) {
            type = 0} else {
              // choose platform types - either one or two
              type = Math.floor(Math.random()*2);
              this.game.platforms[idx] = new Platform(
                  this.game,
                  Math.random() * (width - 57),
                  platform.y - height,
                  type
              );
            }
          }
      });
    }
    // gravity 
    this.jumpSpeed--;
    // lands the player on top of ther brick
    if (this.jumpSpeed === 0) {
        this.isJumping = false;
        this.isFalling = true;
        this.fallSpeed = 1;
    }
  }

  checkFall() {
    if (this.Y < height - this.height) {
      this.setPosition(this.X, this.Y + this.fallSpeed);
      this.fallSpeed++;
    } else {
        this.game.gameOver();
    }
  }

  fallStop() {
    this.isFalling = false;
    this.fallSpeed = 0;
    this.jump();
  }

  moveLeft() {
    if (this.X > 0) {
      this.setPosition(this.X - 7, this.Y);
    }
  }

  moveRight() {
    if (this.X + this.width < width) {
      this.setPosition(this.X + 7, this.Y);
    }
  }

  reset() {
    this.isJumping = false;
    this.isFalling = false;
    this.jumpSpeed = 0;
    this.fallSpeed = 0;
  }

}
