class generativeArtwork {
  // parameters to build the image
  constructor(
    identity1,
    identity2,
    identity3,
    relationships1,
    relationships2,
    relationships3,
    violence1,
    violence2,
    violence3,
    sexuality1,
    sexuality2,
    sexuality3,
    beliefs1,
    beliefs2,
    beliefs3
  ) {
    this.identity1 = identity1;
    this.identity2 = identity2;
    this.identity3 = identity3;
    this.relationships1 = relationships1;
    this.relationships2 = relationships2;
    this.relationships3 = relationships3;
    this.violence1 = violence1;
    this.violence2 = violence2;
    this.violence3 = violence3;
    this.sexuality1 = sexuality1;
    this.sexuality2 = sexuality2;
    this.sexuality3 = sexuality3;
    this.beliefs1 = beliefs1;
    this.beliefs2 = beliefs2;
    this.beliefs3 = beliefs3;
  }

  // show the defined image
  display() {
    push();
    fill("#FF4500");
    rect(0, 0, width, height / 5);
    pop();
    push();
    fill("#7722F6");
    rect(0, 0 + height / 5, width, height / 5);
    pop();
    push();
    fill("#F950A2");
    rect(0, 0 + (height / 5) * 2, width, height / 5);
    pop();
    push();
    fill("#02FFF7");
    rect(0, 0 + (height / 5) * 3, width, height / 5);
    pop();
    push();
    fill("#F1FFA5");
    rect(0, 0 + (height / 5) * 4, width, height / 5);
    pop();
    filter(BLUR, 100);
  }
}
