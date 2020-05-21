
class Platform {
  constructor(game, x, y, type){
    this.game = game;
    this.x = Math.floor(x);
    this.y = y;
    this.type = type;
    this.direction = Math.floor((Math.random() * 2)) ? -1 : 1;
    this.platformWidth = 57;
    this.platformHeight = 20;
  };

  onCollide() {
    if (this.type === 1) {
      powerJump.play();
      setTimeout(()=> {
        powerJump.pause();
        powerJump.load();
      }, 3000);
      this.game.player.fallStop();
      this.game.player.jumpSpeed = 50;
    }
    this.game.player.fallStop();
  };


  draw() {
    if (this.type === 1) {
      // ctx.fillStyle = 'blue';
      ctx.fillRect = "none";
      let image = new Image();
      image.src = "../assets/images/boost.png"
      ctx.drawImage(image, this.x, this.y)
    } else {
      ctx.fillStyle = '#6f3f2e';

    }
    ctx.fillRect(
        this.x,
        this.y,
        this.platformWidth,
        this.platformHeight
    );
    return this;
  };
}
