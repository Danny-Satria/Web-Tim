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
  } else {
    scroll.style.background = "transparent";
  }
});
