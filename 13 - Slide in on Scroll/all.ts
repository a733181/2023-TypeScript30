function debounce<F extends (...args: any[]) => any>(
  func: F,
  wait: number = 20,
  immediate: boolean = true
) {
  let timeout: null | number;
  return function (this: any, ...args: any[]) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    if (typeof timeout === 'number') {
      clearTimeout(timeout);
    }
    timeout = window.setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll<HTMLImageElement>('.slide-in')!;

function checkSlide() {
  sliderImages.forEach((sliderImage: HTMLImageElement) => {
    const y: number =
      window.scrollY + window.innerHeight - sliderImage.height / 2;

    const imageBottom: number = sliderImage.offsetTop + sliderImage.height;

    const isHalfShown: boolean = y > sliderImage.offsetTop;

    const isNotScrolledPast: boolean = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
