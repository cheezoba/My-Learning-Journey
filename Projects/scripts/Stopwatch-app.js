let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;
let timer;

document
  .querySelector(".startStop-button")
  .addEventListener("click", () => {
    startStop();
  });

document.querySelector(".reset-button").addEventListener("click", () => {
  reset();
});

function startStop() {
  if (!isRunning) {
    timer = setInterval(() => {
      updateDisplay();
      isRunning = true;
    }, 1000);

    document.querySelector(".startStop-button").innerHTML = "Stop";
  } else {
    clearInterval(timer);
    isRunning = false;
    document.querySelector(".startStop-button").innerHTML = "Start";
  }
}

function updateDisplay() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  const formattedTime =
    padNumber(hours) +
    ":" +
    padNumber(minutes) +
    ":" +
    padNumber(seconds);

  document.querySelector(".stopwatch-display").innerHTML = formattedTime;
}

function padNumber(number) {
  return number < 10 ? "0" + number : number;
}

function reset() {
  seconds = 0;
  minutes = 0;
  hours = 0;
  isRunning = false;
  clearInterval(timer);

  document.querySelector(".stopwatch-display").innerHTML = "00:00:00";
  document.querySelector(".startStop-button").innerHTML = "Start";
}
