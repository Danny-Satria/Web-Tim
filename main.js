window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log(value);
});

const scroll = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  if (scrollY > 150) {
    scroll.style.background =
      "linear-gradient(120deg,rgba(238, 9, 207, 0.5),rgb(9, 226, 161, 0.5))";
    scroll.style.opacity = "1";
    scroll.style.transition = "ease-in-out";
  } else {
    scroll.style.background = "transparent";
    scroll.style.transition = "ease-in-out";
  }
});

const menuToggle = document.querySelector(".kesatuan-hamburger-menu input");
const nav = document.querySelector(".ul-navbar");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
