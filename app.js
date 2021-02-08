/* Nav-toggle */
const navBtn = document.getElementById("nav-toggle");
const showLinks = document.getElementById("nav-links");

navBtn.addEventListener("click", () => {
  showLinks.classList.toggle("show-links");
});
