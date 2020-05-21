class Enemy {
  constructor(game){
    this.game = game;
    this.x = 0;
    this.y = 0;
    // this.centerX = this.x + 12;
    // this.centerY = this.y + 12;
    let image = new Image();
    this.image.src = "../assets/images/enemy.png";

  }

  draw(){
    ctx.drawImage(
      this.image,
      this.width,
      this.height,
      this.x,
      this.y,
    )
  }
}
