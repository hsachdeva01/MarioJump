class Enemy {
  constructor(game, x, y){
    this.game = game;
    this.X = 0;
    this.Y = 0;
    this.width = 65;
    this.height = 85;
    this.image = new Image();
    this.image.src = "./assets/images/enemy.png";
    this.centerX = this.x + 12;
    this.centerY = this.y + 12;
  }

  setPosition(x, y) {
    this.X = x;
    this.Y = y;
  }

  draw(){
    ctx.drawImage(
      this.image,
      this.width,
      this.height,
      this.X,
      this.Y,
    )
  }
}
