function setup() {
  let canvas = createCanvas(windowWidth, windowHeight).parent(
    "canvasContainer"
  );
  canvas.style("position", "absolute");
  canvas.style("top", "0");
  canvas.style("padding", "0");
  canvas.style("z-index", "-100");
  canvas.style("-webkit-filter", "blur(50px)");
  smooth();
  noStroke();
  noiseDetail(5, 0.5);

  frameRate(35);
}

function draw() {
  background("#232628");
  for (let x = 0; x < width; x += 60) {
    for (let y = 0; y < height; y += 60) {
      push();
      translate(x + 10, y + 10);

      noStroke();

      let noiseColor = noise(
        (frameCount / 1 + x) / 850,
        (frameCount / 1 + y) / 850
      );

      if (Math.floor(noiseColor * 10) == 0) {
        //rossoscuro
        fill("#FE0000");
      } else if (Math.floor(noiseColor * 10) == 1) {
        //rossochiaro
        fill("#FF1493");
      } else if (Math.floor(noiseColor * 10) == 2) {
        //fucsiascuro
        fill("#7722F6");
      } else if (Math.floor(noiseColor * 10) == 3) {
        //fucsiachiaro
        fill("#1D64FF");
      } else if (Math.floor(noiseColor * 10) == 4) {
        //violascuro
        fill("#ABFF38");
      } else if (Math.floor(noiseColor * 10) == 5) {
        //violachiaro
        fill("#FF6432");
      } else if (Math.floor(noiseColor * 10) == 6) {
        //bluscuro
        fill("#FE3EEF");
      } else if (Math.floor(noiseColor * 10) == 7) {
        //bluchiaro
        fill("#B44EF2");
      } else if (Math.floor(noiseColor * 10) == 8) {
        //verdescuro
        fill("#37C3FF");
      } else {
        //verdechiaro
        fill("#DgFA26");
      }

      rect(0, 0, 60, 60);
      pop();
    }
  }
  //filter(BLUR, 50);
}
