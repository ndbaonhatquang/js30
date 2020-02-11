const divs = document.querySelectorAll('div');

function logText() {
    
}

divs.forEach(div => div.addEventListener('click',logText, { once: true }));