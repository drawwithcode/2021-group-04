// event listeners
document.getElementById("about-open").addEventListener("click", () => {
  toggleAbout("about-wrapper-show");
});
document.getElementById("about-close").addEventListener("click", () => {
  toggleAbout("about-wrapper-hide");
});

// toggle the class
function toggleAbout(state) {
  document.getElementById("about-wrapper").className = state;
}
