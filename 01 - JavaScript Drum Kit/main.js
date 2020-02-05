function addTransition(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e){
    this.classList.remove('playing');
}
const key = document.querySelectorAll('.key');
key.forEach(e => e.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', addTransition);