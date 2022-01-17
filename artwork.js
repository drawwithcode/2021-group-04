// artwork rendering
let artworkInstance = document.getElementById("artwork-instance");
artworkInstanceBoundingClientRect = artworkInstance.getBoundingClientRect();
artworkWidth = artworkInstanceBoundingClientRect.width;
artworkHeight = artworkInstanceBoundingClientRect.height;

let test;

function setup() {
  console.log(artworkWidth);
  console.log(artworkHeight);
  createCanvas(artworkWidth, artworkHeight).parent("artwork-instance");

  test = new generativeArtwork(
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
  clear();
  test.display();
}
