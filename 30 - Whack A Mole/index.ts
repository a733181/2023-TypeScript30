const holes = document.querySelectorAll<HTMLDivElement>('.hole')!;
const scoreBoard = document.querySelector<HTMLSpanElement>('.score')!;
const moles = document.querySelectorAll<HTMLDivElement>('.mole')!;
let lastHole: HTMLDivElement;
let timeUp: boolean = false;
let score: number = 0;

function randomTime(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes: NodeListOf<HTMLDivElement>): HTMLDivElement {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log('Ah nah thats the same one bud');
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = String(0);
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 10000);
}

function bonk(this: HTMLDivElement, e: MouseEvent) {
  if (!e.isTrusted || !this || !this.parentNode) return; // cheater!
  score++;

  (this.parentNode as HTMLDivElement).classList.remove('up');
  scoreBoard.textContent = String(score);
}

moles.forEach((mole: HTMLDivElement) => mole.addEventListener('click', bonk));
