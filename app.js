const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function scrollToTop(){
  window.scrollTo({
    top:0,
    behavior:"smooth"})
}
let ourPageAnim = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

let themeButton = document.getElementById("theme-button");
let darkTheme = "dark-theme";
let iconTheme = "bx-sun";

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
});
