class Player {
  constructor() {
    this.width = 100;
    this.height = 100;
    this.position = {
      x: 0,
      y: 0,
    };
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

export default Player;
