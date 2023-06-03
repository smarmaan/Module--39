const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

//
//
//
//

const timeCounterMin = document.getElementById("timeCounterMin");
const timeCounterSec = document.getElementById("timeCounterSec");
const timeCounterMS = document.getElementById("timeCounterMS");

//
//
//
//

let m = 0;
let s = 0;
let ms = 0;
let timer;

//
//
//
//

function startTimer() {
  ms++;
  if (ms === 100) {
    ms = 0;
    s++;
  }
  if (s === 60) {
    s = 0;
    m++;
  }

  timeCounterMin.innerHTML = m < 10 ? `0${m}` : m;
  timeCounterSec.innerHTML = s < 10 ? `0${s}` : s;
  timeCounterMS.innerHTML = ms < 10 ? `0${ms}` : ms;
}

//
//
//
//

function start() {
//   startTimer();
  timer = setInterval(() => {
    startTimer();
  }, 10);
  startBtn.disabled = true;
}

//
//
//
//

function stop() {
  clearInterval(timer);
  startBtn.disabled = false;
}

//
//
//
//

function reset() {
  m = 00;
  s = 00;
  ms = 00;
  timeCounterMin.innerHTML = "00";
  timeCounterSec.innerHTML = "00";
  timeCounterMS.innerHTML = "00";
  clearInterval(timer);
  startBtn.disabled = false;
}

//
//
//
//

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
