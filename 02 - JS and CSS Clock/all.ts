const hourEl = document.querySelector<HTMLDivElement>('.hour-hand')!;
const minEl = document.querySelector<HTMLDivElement>('.min-hand')!;
const secEl = document.querySelector<HTMLDivElement>('.second-hand')!;

function getTimeHandler(): void {
  const today: Date = new Date();

  const hour: number = today.getHours();
  const min: number = today.getMinutes();
  const sec: number = today.getSeconds();

  const hourDeg: number = (hour / 12) * 360 + 90;
  const minDeg: number = (min / 60) * 360 + 90;
  const secDeg: number = (sec / 60) * 360 + 90;

  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  secEl.style.transform = `rotate(${secDeg}deg)`;
  minEl.style.transform = `rotate(${minDeg}deg)`;
}

setInterval(getTimeHandler, 1000);
