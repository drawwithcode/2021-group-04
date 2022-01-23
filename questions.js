// DOM
let intViewportWidth = window.innerWidth;
let intViewportHeight = window.innerHeight;
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
let loading = document.getElementById("loading");
let loadingContent = document.getElementById("loading-content");
let artwork = document.getElementById("artwork");
let artworkContent = document.getElementById("artwork-content");
let artworkSnapshot = document.getElementById("artwork-snapshot");

// a dice is rolled in order to show just one question for each type
let dice = 0;

// artwork object to render inside the buffer (a p5 canvas)
let generatedArtwork;

// loading transition control
let artworkIsLoading = false;

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
      console.log("question " + sectionNumber);
      R1.className = "container hide";
      R2.className = "container hide";
      setTimeout(() => {
        R3.className = "container show";
      }, 750);
      break;
    case "6":
      dice = getRandomInt(1, 2);
      if (dice === 1) {
        console.log("question " + sectionNumber + " (" + dice + ")");
        R3.className = "container hide";
        setTimeout(() => {
          R4.className = "container show";
        }, 750);
        break;
      } else {
        console.log("question " + sectionNumber + " (" + dice + ")");
        R3.className = "container hide";
        setTimeout(() => {
          R5.className = "container show";
        }, 750);
        break;
      }
    case "7":
      dice = getRandomInt(1, 3);
      if (dice === 1) {
        console.log("question " + sectionNumber + " (" + dice + ")");
        R4.className = "container hide";
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
      console.log("loading");
      B4.className = "container hide";
      B5.className = "container hide";
      B6.className = "container hide";
      beliefs.className = "section hide";
      setTimeout(() => {
        loading.className = "section show";
        loadingContent.className = "container show";
        setTimeout(() => {
          artworkIsLoading = true;
        }, 750);
      }, 750);
      break;
    default:
      console.log("nope");
  }
}

// generate a random integer from range, inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
  createCanvas(540, 540).parent("artwork-buffer");
  pixelDensity(1);
  rectMode(CENTER);
  noStroke();
  background(255);
  generatedArtwork = new generativeArtwork(
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  );
}

function draw() {
  if (artworkIsLoading) {
    generatedArtwork.display();
    noLoop();
    artworkSnapshot.src = canvas.toDataURL();
    setTimeout(() => {
      loadingContent.className = "container hide";
      loading.className = "section hide";
      setTimeout(() => {
        artwork.className = "section show";
        artworkContent.className = "container show";
      }, 750);
    }, 750);
  }
}

// todo: finalise background animation
// let sketch = function (sketch) {
//   sketch.setup = function () {
//     sketch
//       .createCanvas(intViewportWidth, intViewportHeight)
//       .parent("background-content");
//     sketch.rectMode(sketch.CENTER);
//     sketch.fill("#abff38");
//     sketch.strokeWeight(1);
//     sketch.stroke("#abff38");
//   };

//   sketch.draw = function () {
//     sketch.background("#232628");
//     sketch.rect(
//       intViewportWidth / 2,
//       intViewportHeight / 2,
//       intViewportWidth,
//       intViewportHeight * sketch.sin(sketch.frameCount / 500)
//     );
//   };

//   sketch.windowResized = function () {
//     intViewportWidth = window.innerWidth;
//     intViewportHeight = window.innerHeight;
//     sketch.resizeCanvas(intViewportWidth, intViewportHeight);
//   };
// };

// let backgroundSketch = new p5(sketch);
