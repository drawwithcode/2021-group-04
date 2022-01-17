// DOM
let intro = document.getElementById("intro");
let introContent = document.getElementById("intro-content");
let questions = document.getElementById("questions");
let identity = document.getElementById("identity");
let I1 = document.getElementById("I1");
let I2 = document.getElementById("I2");
let I3 = document.getElementById("I3");
let I4 = document.getElementById("I4");
let I5 = document.getElementById("I5");
let relationships = document.getElementById("relationships");
let R1 = document.getElementById("R1");
let R2 = document.getElementById("R2");
let R3 = document.getElementById("R3");
let R4 = document.getElementById("R4");
let R5 = document.getElementById("R5");
let violence = document.getElementById("violence");
let V1 = document.getElementById("V1");
let V2 = document.getElementById("V2");
let V3 = document.getElementById("V3");
let V4 = document.getElementById("V4");
let V5 = document.getElementById("V5");
let sexuality = document.getElementById("sexuality");
let S1 = document.getElementById("S1");
let S2 = document.getElementById("S2");
let S3 = document.getElementById("S3");
let S4 = document.getElementById("S4");
let S5 = document.getElementById("S5");
let beliefs = document.getElementById("beliefs");
let B1 = document.getElementById("B1");
let B2 = document.getElementById("B2");
let B3 = document.getElementById("B3");
let B4 = document.getElementById("B4");
let B5 = document.getElementById("B5");
let B6 = document.getElementById("B6");
let artwork = document.getElementById("artwork");
let artworkContent = document.getElementById("artwork-content");
// let artworkInstance = document.getElementById("artwork-instance");

// artwork rendering
// artworkInstanceBoundingClientRect = artworkInstance.getBoundingClientRect();
// artworkWidth = artworkInstanceBoundingClientRect.width;
// artworkHeight = artworkInstanceBoundingClientRect.height;

// the dice is rolled for showing one of the questions relative to the same group of each section
let dice = 0;

// questionnaire progression (hard coded)
function nextSection(sectionNumber) {
  switch (sectionNumber) {
    case "1":
      dice = getRandomInt(1, 3);
      if (dice === 1) {
        console.log("question " + sectionNumber + " (" + dice + ")");
        intro.className = "section hide";
        introContent.className = "container hide";
        setTimeout(() => {
          questions.className = "section show";
          identity.className = "section show";
          I1.className = "container show";
        }, 750);
        break;
      } else if (dice === 2) {
        console.log("question " + sectionNumber + " (" + dice + ")");
        intro.className = "section hide";
        introContent.className = "container hide";
        setTimeout(() => {
          questions.className = "section show";
          identity.className = "section show";
          I2.className = "container show";
        }, 750);
        break;
      } else {
        console.log("question " + sectionNumber + " (" + dice + ")");
        intro.className = "section hide";
        introContent.className = "container hide";
        setTimeout(() => {
          questions.className = "section show";
          identity.className = "section show";
          I3.className = "container show";
        }, 750);
        break;
      }
    case "2":
      console.log("question " + sectionNumber);
      I1.className = "container hide";
      I2.className = "container hide";
      I3.className = "container hide";
      setTimeout(() => {
        I4.className = "container show";
      }, 750);
      break;
    case "3":
      console.log("question " + sectionNumber);
      I4.className = "container hide";
      setTimeout(() => {
        I5.className = "container show";
      }, 750);
      break;
    case "4":
      dice = getRandomInt(1, 2);
      if (dice === 1) {
        console.log("question " + sectionNumber + " (" + dice + ")");
        I5.className = "container hide";
        identity.className = "section hide";
        setTimeout(() => {
          relationships.className = "section show";
          R1.className = "container show";
        }, 750);
        break;
      } else {
        console.log("question " + sectionNumber + " (" + dice + ")");
        I5.className = "container hide";
        identity.className = "section hide";
        setTimeout(() => {
          relationships.className = "section show";
          R2.className = "container show";
        }, 750);
        break;
      }
    case "5":
      dice = getRandomInt(1, 2);
      if (dice === 1) {
        console.log("question " + sectionNumber + " (" + dice + ")");
        R1.className = "container hide";
        R2.className = "container hide";
        setTimeout(() => {
          R3.className = "container show";
        }, 750);
        break;
      } else {
        console.log("question " + sectionNumber + " (" + dice + ")");
        R1.className = "container hide";
        R2.className = "container hide";
        setTimeout(() => {
          R4.className = "container show";
        }, 750);
        break;
      }
    case "6":
      console.log("question " + sectionNumber);
      R3.className = "container hide";
      R4.className = "container hide";
      setTimeout(() => {
        R5.className = "container show";
      }, 750);
      break;
    case "7":
      dice = getRandomInt(1, 3);
      if (dice === 1) {
        console.log("question " + sectionNumber + " (" + dice + ")");
        R5.className = "container hide";
        relationships.className = "section hide";
        setTimeout(() => {
          violence.className = "section show";
          V1.className = "container show";
        }, 750);
        break;
      } else if (dice === 2) {
        console.log("question " + sectionNumber + " (" + dice + ")");
        R5.className = "container hide";
        relationships.className = "section hide";
        setTimeout(() => {
          violence.className = "section show";
          V2.className = "container show";
        }, 750);
        break;
      } else {
        console.log("question " + sectionNumber + " (" + dice + ")");
        R5.className = "container hide";
        relationships.className = "section hide";
        setTimeout(() => {
          violence.className = "section show";
          V3.className = "container show";
        }, 750);
        break;
      }
    case "8":
      console.log("question " + sectionNumber);
      V1.className = "container hide";
      V2.className = "container hide";
      V3.className = "container hide";
      setTimeout(() => {
        V4.className = "container show";
      }, 750);
      break;
    case "9":
      console.log("question " + sectionNumber);
      V4.className = "container hide";
      setTimeout(() => {
        V5.className = "container show";
      }, 750);
      break;
    case "10":
      dice = getRandomInt(1, 3);
      if (dice === 1) {
        console.log("question " + sectionNumber + " (" + dice + ")");
        V5.className = "container hide";
        violence.className = "section hide";
        setTimeout(() => {
          sexuality.className = "section show";
          S1.className = "container show";
        }, 750);
        break;
      } else if (dice === 2) {
        console.log("question " + sectionNumber + " (" + dice + ")");
        V5.className = "container hide";
        violence.className = "section hide";
        setTimeout(() => {
          sexuality.className = "section show";
          S2.className = "container show";
        }, 750);
        break;
      } else {
        console.log("question " + sectionNumber + " (" + dice + ")");
        V5.className = "container hide";
        violence.className = "section hide";
        setTimeout(() => {
          sexuality.className = "section show";
          S3.className = "container show";
        }, 750);
        break;
      }
    case "11":
      console.log("question " + sectionNumber);
      S1.className = "container hide";
      S2.className = "container hide";
      S3.className = "container hide";
      setTimeout(() => {
        S4.className = "container show";
      }, 750);
      break;
    case "12":
      console.log("question " + sectionNumber);
      S4.className = "container hide";
      setTimeout(() => {
        S5.className = "container show";
      }, 750);
      break;
    case "13":
      dice = getRandomInt(1, 2);
      if (dice === 1) {
        console.log("question " + sectionNumber + " (" + dice + ")");
        S5.className = "container hide";
        sexuality.className = "section hide";
        setTimeout(() => {
          beliefs.className = "section show";
          B1.className = "container show";
        }, 750);
        break;
      } else {
        console.log("question " + sectionNumber + " (" + dice + ")");
        S5.className = "container hide";
        sexuality.className = "section hide";
        setTimeout(() => {
          beliefs.className = "section show";
          B2.className = "container show";
        }, 750);
        break;
      }
    case "14":
      console.log("question " + sectionNumber);
      B1.className = "container hide";
      B2.className = "container hide";
      setTimeout(() => {
        B3.className = "container show";
      }, 750);
      break;
    case "15":
      dice = getRandomInt(1, 3);
      if (dice === 1) {
        console.log("question " + sectionNumber + " (" + dice + ")");
        B3.className = "container hide";
        setTimeout(() => {
          B4.className = "container show";
        }, 750);
        break;
      } else if (dice === 2) {
        console.log("question " + sectionNumber + " (" + dice + ")");
        B3.className = "container hide";
        setTimeout(() => {
          B5.className = "container show";
        }, 750);
        break;
      } else {
        console.log("question " + sectionNumber + " (" + dice + ")");
        B3.className = "container hide";
        setTimeout(() => {
          B6.className = "container show";
        }, 750);
        break;
      }
    case "16":
      console.log("question " + sectionNumber);
      B4.className = "container hide";
      B5.className = "container hide";
      B6.className = "container hide";
      beliefs.className = "section hide";
      setTimeout(() => {
        artwork.className = "section show";
        artworkContent.className = "container show";
      }, 750);
      break;
    default:
      console.log("nope");
  }
}

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
    // noStroke();
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
  }
}

// generate a random integer from range, inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function setup() {
//   console.log("ciao1");
//   createCanvas(200, 200);
//   // createCanvas(artworkWidth, artworkHeight).parent("artwork-instance");
// }

// function draw() {
//   // clear();
//   console.log("ciao2");
//   background("#232628");
//   rect(width / 2, height / 2, windowWidth, height * sin(frameCount / 500));
// }

// bad code #1
// const s = (sketch) => {
// let test = new generativeArtwork(
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15
// );
//   sketch.setup = () => {
//     sketch.createCanvas(artworkWidth, artworkHeight).parent("artwork-instance");
//   };
//   sketch.draw = () => {
//     sketch.clear();
//     test.display();
//     // sketch.rect(x, y, 50, 50);
//   };
// };
// let myp5 = new p5(s);

// bad code #2
// let test;
// function setup() {
//   createCanvas(artworkWidth, artworkHeight).parent("artwork-instance");
//   test = new generativeArtwork(
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
//     11,
//     12,
//     13,
//     14,
//     15
//   );
// }
// function draw() {
//   test.display();
// }
