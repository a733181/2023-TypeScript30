"use strict";
const panels = document.querySelectorAll('.panel');
function toggleOpenHandler() {
    const panel = this;
    panel.classList.toggle('open');
}
function toggleActiveHander(e) {
    const penel = this;
    if (e.propertyName.includes('flex')) {
        penel.classList.toggle('open-active');
    }
}
panels.forEach((panel) => {
    panel.addEventListener('click', toggleOpenHandler);
    panel.addEventListener('transitionend', toggleActiveHander);
});
