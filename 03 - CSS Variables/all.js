"use strict";
const inputEl = document.querySelectorAll('input');
function updateHandler() {
    const name = this.name;
    const unit = this.dataset.sizing || '';
    const value = this.value;
    document.documentElement.style.setProperty(`--${name}`, value + unit);
}
inputEl.forEach((input) => input.addEventListener('change', updateHandler));
