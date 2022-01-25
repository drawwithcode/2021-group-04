// noise (arbitrary)
const octaves = 24;
const falloff = 0.5;

// texture control (6, 9, 12) based on the length of the strings inside the text areas
let subd;

class generativeArtwork {
  // parameters to build the image
  constructor(
    identity2,
    identity3,
    identityTime,
    relationships1,
    relationships2,
    relationships3,
    relationshipsTime,
    violence1,
    violence2,
    violence3,
    violenceTime,
    sexuality1,
    sexuality2,
    sexuality3,
    sexualityTime,
    beliefs1,
    beliefs2,
    beliefs3,
    beliefsTime
  ) {
    this.identity1 = identity1;
    this.identity2 = identity2;
    this.identity3 = identity3;
    this.identityTime = identityTime;
    this.relationships1 = relationships1;
    this.relationships2 = relationships2;
    this.relationships3 = relationships3;
    this.relationshipsTime = relationshipsTime;
    this.violence1 = violence1;
    this.violence2 = violence2;
    this.violence3 = violence3;
    this.violenceTime = violenceTime;
    this.sexuality1 = sexuality1;
    this.sexuality2 = sexuality2;
    this.sexuality3 = sexuality3;
    this.sexualityTime = sexualityTime;
    this.beliefs1 = beliefs1;
    this.beliefs2 = beliefs2;
    this.beliefs3 = beliefs3;
    this.beliefsTime = beliefsTime;
    this.totalTime =
      this.identityTime +
      this.relationshipsTime +
      this.violenceTime +
      this.sexualityTime +
      this.beliefsTime;
    this.identityTimeRatio = (this.identityTime * 1) / this.totalTime;
    this.relationshipsTimeRatio = (this.relationshipsTime * 1) / this.totalTime;
    this.violenceTimeRatio = (this.violenceTime * 1) / this.totalTime;
    this.sexualityTimeRatio = (this.sexualityTime * 1) / this.totalTime;
    this.beliefsTimeRatio = (this.beliefsTime * 1) / this.totalTime;
    this.textAnswersAverageLength = round(
      (this.identity3.length +
        this.relationships3.length +
        this.violence3.length +
        this.sexuality3.length +
        this.beliefs3.length) /
        5
    );
    this.filter = round(
      (abs(this.identity2) +
        abs(this.relationships2) +
        abs(this.violence2) +
        abs(this.sexuality2) +
        abs(this.beliefs2)) /
        5
    );
  }

  // show the defined image
  display() {
    noiseSeed(this.totalTime);
    noiseDetail(octaves, falloff);
    if (this.textAnswersAverageLength <= 16) {
      subd = 6;
      console.log("grid: " + subd);
    } else if (
      this.textAnswersAverageLength > 16 &&
      this.textAnswersAverageLength <= 32
    ) {
      subd = 9;
      console.log("grid: " + subd);
    } else if (this.textAnswersAverageLength > 32) {
      subd = 12;
      console.log("grid: " + subd);
    }
    for (var x = 0 + width / subd / 2; x < width; x += width / subd) {
      for (var y = 0 + height / subd / 2; y < height; y += width / subd) {
        push();
        let noiseColor = noise(x, y);
        if (noiseColor >= 0 && noiseColor <= this.identityTimeRatio) {
          if (this.identity1 == "true") {
            fill("#7722F6");
          } else {
            fill("#B44EF2");
          }
          rect(x, y, width / subd, height / subd);
        } else if (
          noiseColor > this.identityTimeRatio &&
          noiseColor <= this.identityTimeRatio + this.relationshipsTimeRatio
        ) {
          if (this.relationships1 == "true") {
            fill("#ABFF38");
          } else {
            fill("#D6FA26");
          }
          rect(x, y, width / subd, height / subd);
        } else if (
          noiseColor > this.identityTimeRatio + this.relationshipsTimeRatio &&
          noiseColor <=
            this.identityTimeRatio +
              this.relationshipsTimeRatio +
              this.violenceTimeRatio
        ) {
          if (this.violence1 == "true") {
            fill("#FE0000");
          } else {
            fill("#FF6432");
          }
          rect(x, y, width / subd, height / subd);
        } else if (
          noiseColor >
            this.identityTimeRatio +
              this.relationshipsTimeRatio +
              this.violenceTimeRatio &&
          noiseColor <=
            this.identityTimeRatio +
              this.relationshipsTimeRatio +
              this.violenceTimeRatio +
              this.sexualityTimeRatio
        ) {
          if (this.sexuality1 == "true") {
            fill("#FF1493");
          } else {
            fill("#FE3EEF");
          }
          rect(x, y, width / subd, height / subd);
        } else if (
          noiseColor >
            this.identityTimeRatio +
              this.relationshipsTimeRatio +
              this.violenceTimeRatio +
              this.sexualityTimeRatio &&
          noiseColor <= 1
        ) {
          if (this.beliefs1 == "true") {
            fill("#1D64FF");
          } else {
            fill("#37C3FF");
          }
          rect(x, y, width / subd, height / subd);
        }
        pop();
      }
    }

    // filter based on the median value of the sliderss
    filter(BLUR, this.filter);
  }
}
