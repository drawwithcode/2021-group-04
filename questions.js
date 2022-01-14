let intro = document.getElementById("intro");
let questions = document.getElementById("questions");
let identity = document.getElementById("identity");
let I1 = document.getElementById("I1");
let relationships = document.getElementById("relationships");
let violence = document.getElementById("violence");
let sexuality = document.getElementById("sexuality");
let beliefs = document.getElementById("beliefs");
let artwork = document.getElementById("artwork");

function nextSection(currentQuestion) {
  switch (currentQuestion) {
    case "1":
      intro.className = "sctn hide";
      setTimeout(() => {
        questions.className = "sctn show";
        identity.className = "sctn show";
        I1.className = "container show";
      }, 750);
    default:
  }
}
