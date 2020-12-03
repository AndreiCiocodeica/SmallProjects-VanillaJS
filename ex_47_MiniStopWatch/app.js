const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const timerEl = document.getElementById('timer');
let intervalID;
let i = 0;

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);

function startTimer() {
    intervalID = setInterval(showTime, 1000);
}

function showTime() {
    let minutes = formatTime(parseInt(i / 60));
    let seconds = formatTime(i % 60);
    i++;
    timerEl.innerHTML = `
        <p>${minutes}:${seconds}</p>
    `;
}

function stopTimer() {
    if (intervalID) {
        clearInterval(intervalID);
    }
}

//show 0 before time when time < 10
function formatTime(time) {
    return time < 10 ? `0${time}` : time; //ternary operator
}