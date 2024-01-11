const input1 = document.querySelector(".input:nth-child(1)");
const input4 = document.querySelector(".input:nth-child(4)");
const inputs = document.getElementById("inputs");
document.addEventListener("keyup", (e) => {
  if (e.key === "Backspace" || e.key === "Delete") {
    e.target.value = "";
    if (e.target !== input1) {
      e.target.previousElementSibling.focus();
    }
  } else {
    if (e.target !== input4) {
      e.target.nextElementSibling.focus();
    }
  }
});
