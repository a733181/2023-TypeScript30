const inputEl = document.querySelectorAll<HTMLInputElement>('input')!;

function updateHandler(this: HTMLInputElement) {
  const name = this.name;
  const unit = this.dataset.sizing || '';
  const value = this.value;

  document.documentElement.style.setProperty(`--${name}`, value + unit);
}

inputEl.forEach((input: HTMLInputElement) =>
  input.addEventListener('change', updateHandler)
);
