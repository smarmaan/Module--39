const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

//
//
//
//

const timeCounterMin = document.getElementById("timeCounterMin");
const timeCounterSec = document.getElementById("timeCounterSec");
const timeCounterMiliSec = document.getElementById("timeCounterMiliSec");

//
//
//
//

m = 0;
s = 0;
ms = 0;
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

  timeCounterMiliSec.innerHTML = ms < 10 ? `0${ms}` : ms;
  timeCounterSec.innerHTML = s < 10 ? `0${s}` : s;
  timeCounterMin.innerHTML = m < 10 ? `0${m}` : m;
}

//
//
//
//
// let num = 0;
function start() {
  timer = setInterval(startTimer, 10);

  startBtn.disabled = true;
}

function stop() {
  clearInterval(timer);
  startBtn.disabled = false;
}

function reset() {
  clearInterval(timer);

  m = 0;
  s = 0;
  ms = 0;

  timeCounterMiliSec.innerHTML = "00";
  timeCounterSec.innerHTML = "00";
  timeCounterMin.innerHTML = "00";
  startBtn.disabled = false;
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
