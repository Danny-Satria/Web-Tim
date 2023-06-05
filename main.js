const ourSkill = document.getElementById("ourSkill");
ourSkill.addEventListener("mousedown", function () {
  ourSkill.style.cursor = "pointer";
  ourSkill.style.backgroundColor = "rgba(238, 9, 207, 0.5)";
});

ourSkill.addEventListener("mouseup", function () {
  ourSkill.style.cursor = "pointer";
  ourSkill.style.backgroundColor = "";
});
