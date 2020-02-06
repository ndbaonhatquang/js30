const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('input');
const progress = player.querySelector('.progress');
// const zoom = player.querySelector('.zoom');
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateToggle() {
    const icon = video.paused ? '❚ ❚' : '►';
    toggle.textContent = icon;    
}
function skipVideo() {
    video.currentTime += parseInt(this.dataset.skip);    
}
function updateRange() {
    video[this.name] = this.value;    
}
function handleProgress() {
    const progressBar = (video.currentTime / video.duration ) * 100 ;
    (player.querySelector('.progress__filled')).style.flexBasis = `${progressBar}%`;
}
function updateProgress(e) {
    const progressBar = (e.offsetX / progress.offsetWidth);
    video.currentTime = progressBar * video.duration ;
}
function zoomVideo() {
    player.classList.toggle('zoom-screen');
    video.classList.toggle('zoom-screen');
}
// play
video.addEventListener('click', updateToggle);
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', updateToggle);
toggle.addEventListener('click', togglePlay);
// skip
skipButtons.forEach(skipButton => skipButton.addEventListener('click', skipVideo));
// range
ranges.forEach(range => range.addEventListener('mousemove', updateRange));
// progress
let mousedown = false;
video.addEventListener('timeupdate', handleProgress); // update progress bar
progress.addEventListener('mousemove',(e) => mousedown && updateProgress(e))
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

//zoom
// zoom.addEventListener('click', zoomVideo);