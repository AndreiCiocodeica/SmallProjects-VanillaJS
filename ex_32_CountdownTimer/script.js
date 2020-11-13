const monthsEl= document.getElementById('months');
const daysEl= document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minsEl= document.getElementById('mins');
const secondsEl= document.getElementById('seconds');
const newYears = '1 Jan 2021';

const countdown = () => {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const months = Math.floor(days / 30);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    monthsEl.innerHTML = months;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
    // console.log(months, days, hours, minutes, seconds);
}

//show 0 before time when time < 10
const formatTime = (time) => {
    return time < 10 ? (`0${time}`) : time;
}

//initial call
countdown();
//refresh every 1 second
setInterval(countdown, 1000);
