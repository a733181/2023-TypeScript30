"use strict";
const checkboxEl = document.querySelectorAll('input[type=checkbox]');
let lastChecked;
function handleCheck(event) {
    let inBetween = false;
    if (event.shiftKey && this.checked) {
        checkboxEl.forEach((checkbox) => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them in between!');
            }
            if (inBetween) {
                checkbox.checked = !checkbox.checked;
            }
        });
    }
    lastChecked = this;
}
checkboxEl.forEach((checkbox) => checkbox.addEventListener('click', handleCheck));
