let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

const display = document.getElementById('display');
const hoursSpan = document.querySelector('.hours');
const minutesSpan = document.querySelector('.minutes');
const secondsSpan = document.querySelector('.seconds');
const millisecondsSpan = document.querySelector('.milliseconds');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 10); // Update every 10 milliseconds
        running = true;
    }
}

function stopTimer() {
    clearInterval(tInterval);
    running = false;
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    hoursSpan.innerHTML = "00";
    minutesSpan.innerHTML = "00";
    secondsSpan.innerHTML = "00";
    millisecondsSpan.innerHTML = "00"; // Reset display to include milliseconds
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000) / 10); // Get milliseconds as two digits
    
    hoursSpan.innerHTML = (hours < 10 ? "0" + hours : hours);
    minutesSpan.innerHTML = (minutes < 10 ? "0" + minutes : minutes);
    secondsSpan.innerHTML = (seconds < 10 ? "0" + seconds : seconds);
    millisecondsSpan.innerHTML = (milliseconds < 10 ? "0" + milliseconds : milliseconds); // Format milliseconds
}

// Event listeners
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
