function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
const images = document.querySelectorAll('img');
function checkImage() {
    images.forEach(image => {
        const slideAt = window.scrollY + window.innerHeight;
        const imageMiddle = image.offsetTop - image.height / 2;
        const isSlideAtMiddle = slideAt > imageMiddle;
        const isScrollPast = window.scrollY > image.bottom;
        if (isSlideAtMiddle && !isScrollPast) image.classList.add('active')
        else image.classList.remove('active');
    })
}
window.addEventListener('scroll', debounce(checkImage));