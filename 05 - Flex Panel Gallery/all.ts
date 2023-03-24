const panels = document.querySelectorAll<HTMLDivElement>('.panel')!;

function toggleOpenHandler(this: HTMLDivElement) {
  const panel = this;
  panel.classList.toggle('open');
}

function toggleActiveHander(this: HTMLDivElement, e: TransitionEvent) {
  const penel = this;

  if (e.propertyName.includes('flex')) {
    penel.classList.toggle('open-active');
  }
}

panels.forEach((panel: HTMLDivElement) => {
  panel.addEventListener('click', toggleOpenHandler);
  panel.addEventListener('transitionend', toggleActiveHander);
});
