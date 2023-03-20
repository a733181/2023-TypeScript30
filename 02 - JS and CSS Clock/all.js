"use strict";
const hourEl = document.querySelector('.hour-hand');
const minEl = document.querySelector('.min-hand');
const secEl = document.querySelector('.second-hand');
function getTimeHandler() {
    const today = new Date();
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();
    const hourDeg = (hour / 12) * 360 + 90;
    const minDeg = (min / 60) * 360 + 90;
    const secDeg = (sec / 60) * 360 + 90;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    secEl.style.transform = `rotate(${secDeg}deg)`;
    minEl.style.transform = `rotate(${minDeg}deg)`;
}
setInterval(getTimeHandler, 1000);
