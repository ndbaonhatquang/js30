function getTime() {
    const date = new Date();
    const secondDegrees = date.getSeconds() * 6 ;
    const minuteDegrees = (secondDegrees / 360 + date.getMinutes()) * 6   ;
    const hourDegrees = (minuteDegrees / 360 + date.getHours()) * 30 ;
    document.querySelector('.second-hand').style.transform = `rotate(${secondDegrees}deg)`; 
    document.querySelector('.min-hand').style.transform = `rotate(${minuteDegrees}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(getTime, 1000);
