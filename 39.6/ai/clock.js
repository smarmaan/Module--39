let ms = 0;
let s = 0;
let m = 0;
let timer;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

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
  const displayMs = ms < 10 ? `0${ms}` : ms;
  const displayS = s < 10 ? `0${s}` : s;
  const displayM = m < 10 ? `0${m}` : m;
  timerDisplay.textContent = `${displayM}:${displayS}:${displayMs}`;
}

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
  ms = 0;
  s = 0;
  m = 0;
  timerDisplay.textContent = '00:00:00';
  startBtn.disabled = false;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
