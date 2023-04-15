const divs = document.querySelectorAll<HTMLDivElement>('div')!;
const button = document.querySelector<HTMLButtonElement>('button')!;

function logText(this: HTMLElement, e: MouseEvent) {
  console.log(this.classList.value);
  // e.stopPropagation(); // stop bubbling!
  // console.log(this);
}

divs.forEach((div) =>
  div.addEventListener('click', logText, {
    capture: false,
    once: true,
  })
);

button.addEventListener(
  'click',
  () => {
    console.log('Click!!!');
  },
  {
    once: true,
  }
);
