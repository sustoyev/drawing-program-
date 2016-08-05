var color1 = 55;
var color2 = 55;
var color3 = 85;


function circle(x, y, diameter) {
  ellipse(x, y, diameter, diameter);
}

function setup() {
  createCanvas(640, 640);
  background(150, 200, 150);
  //rectangle
  noStroke();
  rect(100, 100, 450, 450);
}

function draw() {
  color1 = color1 + 0.5;
  if (color1 > 255) {
    color1 = 0;

  }
  color2 = color2 - 1;
  if (color2 <= 0) {
    color2 = 255;
  }

  color3 = color3 + 1;
  if (color3 < 255) {
    color3 <= 0;
  }

  noStroke()
  fill(color1, color2, color3);
  ellipse(mouseX, mouseY, 10);



}