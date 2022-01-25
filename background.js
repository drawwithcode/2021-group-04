function setup() {
  createCanvas(windowWidth, windowHeight).parent("container");
  smooth();
  noStroke();
  fill("#232628");
  noiseDetail(5, 0.5);
}

function draw() {
  background("#232628");
  for (let x = 0; x < width; x += 60) {
    for (let y = 0; y < height; y += 60) {
      push();
      translate(x + 10, y + 10);

      noStroke();

      let noiseColor = noise(
        (frameCount / 1 + x) / 250,
        (frameCount / 1 + y) / 250
      );

      if (Math.floor(noiseColor * 10) == 0) {
        fill("#B44EF2");
      } else if (Math.floor(noiseColor * 10) == 1) {
        fill("#FF6432");
      } else if (Math.floor(noiseColor * 10) == 2) {
        fill("#FF6432");
      } else if (Math.floor(noiseColor * 10) == 3) {
        fill("#B44EF2");
      } else if (Math.floor(noiseColor * 10) == 4) {
        fill("#ABFF38");
      } else if (Math.floor(noiseColor * 10) == 5) {
        fill("#FE3EEF");
      } else if (Math.floor(noiseColor * 10) == 6) {
        fill("#37C3FF");
      } else if (Math.floor(noiseColor * 10) == 7) {
        fill("#37C3FF");
      } else if (Math.floor(noiseColor * 10) == 8) {
        fill("#FE3EEF");
      } else {
        fill("#ABFF38");
      }

      rect(0, 0, 60, 60);
      pop();
    }
  }
  //filter(BLUR,50)
}
