"use strict";
const pressed = [];
const secretCode = 'web';
window.addEventListener('keyup', (event) => {
    pressed.push(event.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        cornify_add();
    }
    console.log(pressed);
});
