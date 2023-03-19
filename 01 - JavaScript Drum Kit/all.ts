document.addEventListener('keydown', (e: KeyboardEvent) => {
  const audioEl = document.querySelector<HTMLAudioElement>(
    `audio[data-key="${e.keyCode}"]`
  );

  const keyEl = document.querySelector<HTMLDivElement>(
    `.key[data-key="${e.keyCode}"]`
  );

  if (!audioEl || !keyEl) {
    return;
  }

  audioEl.play();
  keyEl.classList.add('playing');

  setTimeout(() => {
    keyEl.classList.remove('playing');
  }, 150);
});
