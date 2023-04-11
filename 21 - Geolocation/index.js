"use strict";
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
navigator.geolocation.watchPosition((data) => {
    if (data.coords.speed != null) {
        speed.textContent = data.coords.speed.toString();
    }
    if (data.coords.heading != null) {
        arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    }
}, (err) => {
    console.error(err);
});
