# Mario Jump
[Play Mario Jump](https://hsachdeva01.github.io/MarioJump/)

Mario Jump is an additictive game inspired by Doodle Jump.

![](/assets/images/MarioJump%20Game%20Cover.png)

## Technologies Used

* Vanilla JavaScript
* HTML5 Canvas
* CSS

## Game Rules
* Use left arrow key or A key to move player left
* Use right arrow key or D key to move player right
* The player performs a super jump when landing on blue platforms
* The player performs a super jump when landing on brown platforms

![](/assets/images/MarioJump.gif)

```
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
 ```
