class Treat {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.x = (Math.random() * 310) >>> 0;
    this.y = ~((Math.random() * 3000) + 600);
    this.type = "berry";
  }

  drawTreat() {
    if (this.y > 700) {
      this.y = ~(Math.random() * 3000);
      this.x = (Math.random() * 310) >>> 0;

      let rand = (Math.random() * 2) >>> 0;
      this.type = ["github", "luigi"][rand];
    }

    let img = new Image();
    if (this.type === "berry") {
      img.src = "../assets/images/github-icon-01.png";
    } else {
      img.src = "./images/luigi.png";
    }

    this.ctx.drawImage(img, this.x, this.y);
  }
}

