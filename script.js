const input1 = document.querySelector(".input:nth-child(1)");
const input4 = document.querySelector(".input:nth-child(4)");
const inputs = document.getElementById("inputs");
document.addEventListener("keyup", (e) => {
  console.log(e.key);
  debugger;
  if (e.key === "Backspace") {
    e.target.value = "";
    if (e.target !== input1) {
      e.target.previousElementSibling.focus();
    }
  } else {
    console.log(e.key);
    if (e.target !== input4) {
      e.target.nextElementSibling.focus();
    }
  }
});
