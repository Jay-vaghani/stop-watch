// Max Length Of Input

function MaxLength(input) {
  input.value = input.value.slice(0, input.maxLength);
}

let hour = document.querySelector(".hours");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");

let countTimer = null;

startBtn.addEventListener("click", () => {
  if (hour.value == 0 && min.value == 0 && sec.value == 0) {
    return;
  }

  function startInterval() {
    startBtn.style.display = "none";
    stopBtn.style.display = "block";

    countTimer = setInterval(() => {
      timer();
    }, 1000);
  }

  startInterval();
});


function timer() {
    console.log("ok");
}