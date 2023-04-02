"use strict";
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        if (typeof timeout === 'number') {
            clearTimeout(timeout);
        }
        timeout = window.setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
}
const sliderImages = document.querySelectorAll('.slide-in');
function checkSlide() {
    sliderImages.forEach((sliderImage) => {
        const y = window.scrollY + window.innerHeight - sliderImage.height / 2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = y > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        }
        else {
            sliderImage.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', debounce(checkSlide));
