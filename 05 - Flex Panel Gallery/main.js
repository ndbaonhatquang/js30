const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
    panel.addEventListener('click', toggleOpenX);
})
function toggleOpenX() {
    this.classList.toggle('open-active');
    this.classList.toggle('open');
}
