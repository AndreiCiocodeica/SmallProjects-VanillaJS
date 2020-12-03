const showBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const timerEl = document.getElementById('timer');
let intervalID;

showBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);

function startTimer() {
    intervalID = setInterval(showTime, 1000);
}

function showTime() {
    let now = new Date();
    timerEl.innerHTML = `
        <p>${now.getHours()}:${formatTime(now.getMinutes())}:${formatTime(now.getSeconds())}</p>
    `;
}

function stopTimer() {
    if (intervalID) {
        clearInterval(intervalID);
    }
}

//show 0 before time when time < 10
function formatTime(time) {
    if (time < 10) {
        return `0${time}`;
    }
    else {
        return time;
    }
}