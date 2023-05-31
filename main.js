const x = (document.getElementById("home").onclick = function () {
  document.body.style.backgroundColor = "blue";

  setTimeout(() => {
    document.body.style.backgroundColor = "";
  }, 1000);
});
