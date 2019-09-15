var dots = [50]
var slider = document.getElementById("myRange");

function setup() {
  frameRate(30);

  createCanvas(400, 400);
  for (var i = 0; i < 100; i++) {
    dots[i] = new Dot(random(0,width), random(0,height));

  }

}

function draw() {
  background(220);
  for (var i = 0; i < dots.length; i++) {


    for (var j = 0; j < dots.length; j++) {
      if (i == j) {
        continue;
      }
      d = dist(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
      if (d < slider.value) {
        line(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
      }
    }
    dots[i].drawDot();
    dots[i].move();
  }
}

class Dot {
  constructor(x, y, rx = 1, ry = 1) {
    this.x = x;
    this.y = y;
    this.rx = random(-1, 1);
    this.ry = random(-1, 1);
  }

  drawDot() {
    circle(this.x, this.y, 10);
  }
  move() {
    this.x += this.rx;
    this.y += this.ry;
    if (this.x > width + 20) {
      this.x = -5;
    }
    if (this.x < -20) {
      this.x = width + 5;
    }
    if (this.y > height + 20) {
      this.y = -5;
    }
    if (this.y < -20) {
      this.y = height + 5;
    }

  }
}