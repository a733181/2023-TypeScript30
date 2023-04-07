const timeNodes = Array.from(
  document.querySelectorAll<HTMLLIElement>('[data-time]')!
);

const seconds: number = timeNodes
  .filter((node: HTMLLIElement) => node.dataset.time)
  .map((node: HTMLLIElement) => node.dataset.time!)
  .map((timeCode: string) => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft: number = seconds;
const hours: number = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins: number = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);
