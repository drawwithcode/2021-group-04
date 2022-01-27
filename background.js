function setup() {
  createCanvas(windowWidth, windowHeight).parent("canvas");
  frameRate(30);
  noStroke();
  noiseDetail(5, 0.5);
}

function draw() {
  for (let x = 0; x < width; x += 60) {
    for (let y = 0; y < height; y += 60) {
      push();
      let noiseColor = noise(
        (frameCount / 1 + x) / 850,
        (frameCount / 1 + y) / 850
      );
      if (Math.floor(noiseColor * 10) == 0) {
        // rosso scuro
        fill("#FE0000");
      } else if (Math.floor(noiseColor * 10) == 1) {
        // rosso chiaro
        fill("#FF1493");
      } else if (Math.floor(noiseColor * 10) == 2) {
        // fucsia scuro
        fill("#7722F6");
      } else if (Math.floor(noiseColor * 10) == 3) {
        // fucsia chiaro
        fill("#1D64FF");
      } else if (Math.floor(noiseColor * 10) == 4) {
        // viola scuro
        fill("#ABFF38");
      } else if (Math.floor(noiseColor * 10) == 5) {
        // viola chiaro
        fill("#FF6432");
      } else if (Math.floor(noiseColor * 10) == 6) {
        // blu scuro
        fill("#FE3EEF");
      } else if (Math.floor(noiseColor * 10) == 7) {
        // blu chiaro
        fill("#B44EF2");
      } else if (Math.floor(noiseColor * 10) == 8) {
        // verde scuro
        fill("#37C3FF");
      } else {
        // verde chiaro
        fill("#DgFA26");
      }
      rect(x, y, 60, 60);
      pop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
