let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

function updateDisplay() {
  const format = (val) => val.toString().padStart(2, '0');
  document.getElementById("display").innerText = 
    `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

function startStopwatch() {
  if (!isRunning) {
    timer = setInterval(() => {
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
}

function pauseStopwatch() {
  clearInterval(timer);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lapTime() {
  if (isRunning) {
    const lapItem = document.createElement("li");
    lapItem.innerText = document.getElementById("display").innerText;
    document.getElementById("laps").appendChild(lapItem);
  }
}
