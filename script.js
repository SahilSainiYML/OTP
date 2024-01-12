const input1 = document.querySelector(".input:nth-child(1)");
const input4 = document.querySelector(".input:nth-child(4)");
const inputs = document.getElementById("inputs");

inputs.addEventListener("keyup", function (e) {
  if (e.target.value && !isNaN(Number(e.target.value))) {
    e.target.nextElementSibling?.focus();
  }
});

inputs.addEventListener("keydown", function (e) {
  if (e.key == "Delete" || e.key == "Backspace") {
    if (!e.target.value) {
      e.target.previousElementSibling?.focus();
    }
  }
});
