// Code deciding and influencing the current date of the footer. //
// COMMENT EN HD /
// 21/2/'26 //

window.addEventListener("load", function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});