const player = document.querySelector<HTMLDivElement>('.player')!;
const video = document.querySelector<HTMLVideoElement>('.viewer')!;
const progress = document.querySelector<HTMLDivElement>('.progress')!;
const progressBar =
  document.querySelector<HTMLDivElement>('.progress__filled')!;
const toggle = document.querySelector<HTMLButtonElement>('.toggle')!;
const skipButtons =
  document.querySelectorAll<HTMLButtonElement>('[data-skip]')!;
const ranges = document.querySelectorAll<HTMLInputElement>('.player__slider')!;

/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton(this: HTMLVideoElement) {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip(this: HTMLButtonElement) {
  video.currentTime += parseFloat(this.dataset.skip!);
}

function handleRangeUpdate(this: HTMLInputElement) {
  if (this.name === 'volume') {
    video.volume = parseFloat(this.value);
  } else if (this.name === 'playbackRate') {
    video.playbackRate = parseFloat(this.value);
  }
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(event: MouseEvent) {
  const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach((button: HTMLButtonElement) =>
  button.addEventListener('click', skip)
);
ranges.forEach((range: HTMLInputElement) =>
  range.addEventListener('change', handleRangeUpdate)
);
ranges.forEach((range: HTMLInputElement) =>
  range.addEventListener('mousemove', handleRangeUpdate)
);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener(
  'mousemove',
  (event: MouseEvent) => mousedown && scrub(event)
);
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
