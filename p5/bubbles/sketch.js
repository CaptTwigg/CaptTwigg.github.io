let bubbles = [];

function setup() {
  createCanvas(600, 400);

}

function draw() {
  background(0);

  bubbles.push(new bubble());

  for (let i = bubbles.length - 1; i > 0; i--) {
    bubbles[i].move();
    bubbles[i].show();
    if (bubbles[i].remove()) {
      bubbles.splice(i, 1);
    }
  }
}

class bubble {
  constructor() {
    this.x = 300;
    this.y = 380;
    this.vx = random(-1, 1);
    this.vy = random(-3, -1);
    this.alpha = 255;
  }

  remove() {
    return this.alpha < 0;
  }

  show() {
    noStroke();
    fill(255, this.alpha);
    ellipse(this.x, this.y, 16);
  }
  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }
  pulse() {
    this.r += random(-1, 1);
  }
}
