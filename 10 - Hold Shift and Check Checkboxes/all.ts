const checkboxEl = document.querySelectorAll<HTMLInputElement>(
  'input[type=checkbox]'
)!;

let lastChecked: HTMLInputElement;

function handleCheck(this: HTMLInputElement, event: MouseEvent) {
  let inBetween: Boolean = false;
  if (event.shiftKey && this.checked) {
    checkboxEl.forEach((checkbox: HTMLInputElement) => {
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

checkboxEl.forEach((checkbox: HTMLInputElement) =>
  checkbox.addEventListener('click', handleCheck)
);
