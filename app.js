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
  if (hour.value == 0 && min.value == 0 && sec.value == 0) {
    stopInterval();
  }

  if (sec.value != 0) {
    sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
  }

  if (min.value != 0 && sec.value == 0) {
    sec.value = 59;
    min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
  }

  if (hour.value != 0 && min.value == 0 && sec.value == 0) {
    min.value = 59;
    sec.value = 59;
    hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
  }
}

function stopInterval(state) {
  state === "pause" ? (startBtn.innerHTML = "Start") : "continue";

  startBtn.style.display = "block";
  stopBtn.style.display = "none";

  clearInterval(countTimer);
}

resetBtn.addEventListener("click", () => {
  clearInterval(countTimer);

  startBtn.style.display = "block";
  stopBtn.style.display = "none";

  hour.value = 0;
  min.value = 0;
  sec.value = 0;
});

stopBtn.addEventListener("click", () => {
  stopInterval("pause");
});
