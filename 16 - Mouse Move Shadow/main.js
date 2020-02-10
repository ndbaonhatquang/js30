const hero = document.querySelector('.hero');
const object = hero.querySelector('h1');
const walk = 100;
function shadow(e) {
    // console.dir(e);
    const {offsetWidth: width, offsetHeight: height} = this;
    const xWalk = Math.round((e.x / width * walk) - (walk / 2));
    const yWalk = Math.round((e.y / height * walk) - (walk / 2));
    object.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
    // console.dir(e.x+ " "+ e.y);
}
hero.addEventListener('mousemove',shadow);