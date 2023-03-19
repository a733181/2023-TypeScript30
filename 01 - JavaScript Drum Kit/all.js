"use strict";
document.addEventListener('keydown', (e) => {
    const audioEl = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keyEl = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audioEl || !keyEl) {
        return;
    }
    audioEl.play();
    keyEl.classList.add('playing');
    setTimeout(() => {
        keyEl.classList.remove('playing');
    }, 150);
});
