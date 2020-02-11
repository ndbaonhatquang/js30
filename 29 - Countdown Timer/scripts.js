let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const timeInputs = document.querySelectorAll('[data-time]');
function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if(secondsLeft <= 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    },1000);
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    let minutes = end.getMinutes();
    minutes = (minutes < 10) ? ('0' + minutes) : (minutes);
    endTime.textContent = `Trở lại vào ${hour}:${minutes}`;
}
function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    let remainderSeconds = seconds % 60;
    remainderSeconds = (remainderSeconds < 10) ? ('0' + remainderSeconds) : (remainderSeconds);
    const display = `${minutes}:${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}
function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

timeInputs.forEach(timeInput => timeInput.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
  });