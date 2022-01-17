function setup() {
  // create the canvas inside #background-content
  createCanvas(windowWidth, windowHeight).parent("background-content");

  // styling
  // noFill();
  fill("#abff38");
  rectMode(CENTER);
  strokeWeight(1);
  stroke("#abff38");
}

function draw() {
  // clear();
  background("#232628");
  rect(width / 2, height / 2, windowWidth, height * sin(frameCount / 500));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
