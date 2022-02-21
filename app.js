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

// function scrollToTop(){
//   window.scrollTo({
//     top:0,
//     behavior:"smooth"})
// }
// let ourPageAnim = ScrollReveal({
//   origin: "top",
//   distance: "30px",
//   duration: 2000,
//   reset: true,
// });

let themeButton = document.getElementById("theme-button");
let darkTheme = "dark-theme";
let iconTheme = "bx-sun";

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
});

var acc = document.getElementsByClassName('accordion');
var i;
var len = acc.length;
for(i = 0; i < len; i++ ){
    acc[i].addEventListener('click',function(){
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else{
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }

    })
};
function myFunction4() {
    let blRight4 = false;
   if(blRight4 == false){
    var element = document.getElementById("q4");
    element.classList.toggle("mystyle");
    blRight4 = true;
   }
   else{
    var element = document.getElementById("q4");
    element.classList.toggle("mystyleInvert");
   }
  }
  function myFunction3() {
    let blRight3 = false;
    if(blRight3 == false){
     var element = document.getElementById("q3");
     element.classList.toggle("mystyle");
     blRight3 = true;
    }
    else{
     var element = document.getElementById("q3");
     element.classList.toggle("mystyleInvert");
    }
   }function myFunction2() {
    let blRight2 = false;
    if(blRight2 == false){
     var element = document.getElementById("q2");
     element.classList.toggle("mystyle");
     blRight2 = true;
    }
    else{
     var element = document.getElementById("q2");
     element.classList.toggle("mystyleInvert");
    }
   }function myFunction1() {
    let blRight1 = false;
    if(blRight1 == false){
     var element = document.getElementById("q1");
     element.classList.toggle("mystyle");
     blRight1 = true;
    }
    else{
     var element = document.getElementById("q1");
     element.classList.toggle("mystyleInvert");
    }
   }


